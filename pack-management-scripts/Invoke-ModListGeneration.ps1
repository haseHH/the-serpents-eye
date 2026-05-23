#Requires -Version 7

<#
    .SYNOPSIS
    Generate Markdown file with mods and their versions based on current mod-db.json

    .NOTES
    Make sure to refresh the cached info in the DB before generating an updated new list

    .EXAMPLE
    & ./pack-management-scripts/Invoke-ModDbRefresh.ps1
    & ./pack-management-scripts/Invoke-ModListGeneration.ps1
#>

# get script location when called either as script or from interactive IDE context
$baseScriptPath = $PSScriptRoot
if (($null -ne $psEditor) -and ([string]::IsNullOrEmpty($baseScriptPath))) {
    $baseScriptPath = ([Io.FileInfo]$psEditor.GetEditorContext().CurrentFile.Path).Directory.FullName
}

$markdownFilePath = "${baseScriptPath}/../modlist.md"

$manifest = Get-Content -Path "${baseScriptPath}/../manifest.json" -Raw | ConvertFrom-Json
$modloader = $manifest.minecraft.modLoaders[0].id.Split('-')[0]
$modloaderVersion = $manifest.minecraft.modLoaders[0].id.Split('-')[1]

$markdownDocument = @"
# $($manifest.name) ($($manifest.version))

A ``${modloader}`` modpack for Minecraft $($manifest.minecraft.version) by $($manifest.author)

> The pack uses ``${modloader}`` in version ``${modloaderVersion}``

## Included mods

| Name | Version |
| ---- | ------- |

"@

$db = Get-Content -Path "${baseScriptPath}/mod-db.json" -Raw | ConvertFrom-Json
foreach ($mod in $db) {
    $name     = $mod.name.Replace('[', '\[').Replace(']', '\]').Replace('|', '\|')
    $overview = $mod.details.links.websiteUrl
    $version  = $mod.versionFile.displayName.Replace('[', '\[').Replace(']', '\]').Replace('|', '\|')
    $download = "$($mod.details.links.websiteUrl)/files/$($mod.versionFile.id)"
    $markdownDocument += "| [${name}](${overview}) | [${version}](${download}) |`n"
}

Out-File -InputObject $markdownDocument -FilePath $markdownFilePath -Encoding utf8NoBOM -Force
