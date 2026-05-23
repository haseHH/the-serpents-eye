#Requires -Version 7

<#
    .SYNOPSIS
    Generate JSON file with mods and their versions based on current manifest

    .EXAMPLE
    & ./pack-management-scripts/Invoke-ModDbRefresh.ps1
#>

# get script location when called either as script or from interactive IDE context
$baseScriptPath = $PSScriptRoot
if (($null -ne $psEditor) -and ([string]::IsNullOrEmpty($baseScriptPath))) {
    $baseScriptPath = ([Io.FileInfo]$psEditor.GetEditorContext().CurrentFile.Path).Directory.FullName
}

$databaseFilePath = "${baseScriptPath}/mod-db.json"

$manifest = Get-Content -Path "${baseScriptPath}/../manifest.json" -Raw | ConvertFrom-Json

$mods = @()
for ($i = 0; $i -lt $manifest.files.Count; $i++) {
    $mod = $manifest.files[$i]
    Write-Verbose "Get details for mod $($i + 1) out of $($manifest.files.Count)" -Verbose

    $modDetails = & "${baseScriptPath}/Get-Mod.ps1" -ModId $mod.projectID
    $modVersion = & "${baseScriptPath}/Get-ModVersion.ps1" -ModId $mod.projectID -VersionId $mod.fileID

    $mods += @(@{
        name        = $modDetails.name
        details     = $modDetails
        versionFile = $modVersion
    })
}
# Sort list alphabetically
$mods = $mods | Sort-Object -Property 'name'

ConvertTo-Json -InputObject $mods -Depth 100 | Out-File -FilePath $databaseFilePath -Encoding utf8NoBOM -Force
