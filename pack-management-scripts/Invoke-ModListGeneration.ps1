#Requires -Version 7

<#
    .SYNOPSIS
    Generate Markdown file with mods and their versions based on current manifest

    .EXAMPLE
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

$mods = @()
for ($i = 0; $i -lt $manifest.files.Count; $i++) {
    $mod = $manifest.files[$i]
    Write-Verbose "Get details for mod $($i + 1) out of $($manifest.files.Count)" -Verbose

    $modDetails = & "${baseScriptPath}/Get-Mod.ps1" -ModId $mod.projectID
    $modVersion = & "${baseScriptPath}/Get-ModVersion.ps1" -ModId $mod.projectID -VersionId $mod.fileID

    $mods += @(@{
        name     = $modDetails.name.Replace('[', '\[').Replace(']', '\]').Replace('|', '\|')
        overview = $modDetails.links.websiteUrl
        version  = $modVersion.displayName.Replace('[', '\[').Replace(']', '\]').Replace('|', '\|')
        download = "$($modDetails.links.websiteUrl)/files/$($mod.fileID)"
    })
}
# Sort list alphabetically
$mods = $mods | Sort-Object -Property 'name'

$markdownDocument = @"
# $($manifest.name) ($($manifest.version))

A ``${modloader}`` modpack for Minecraft $($manifest.minecraft.version) by $($manifest.author)

> The pack uses ``${modloader}`` in version ``${modloaderVersion}``

## Included mods

| Name | Version |
| ---- | ------- |

"@

foreach ($mod in $mods) {
    $markdownDocument += "| [$($mod.name)]($($mod.overview)) | [$($mod.version)]($($mod.download)) |`n"
}

Out-File -InputObject $markdownDocument -FilePath $markdownFilePath -Encoding utf8NoBOM -Force
