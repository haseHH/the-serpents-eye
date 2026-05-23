#Requires -Version 7

<#
    .SYNOPSIS
    Get all versions of a mod compatible with the MC version and modloader set in the pack manifest

    .EXAMPLE
    & "${baseScriptPath}/Get-ModVersions.ps1" -ModId 412082
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [int]$ModId
)

# get script location when called either as script or from interactive IDE context
$baseScriptPath = $PSScriptRoot
if (($null -ne $psEditor) -and ([string]::IsNullOrEmpty($baseScriptPath))) {
    $baseScriptPath = ([Io.FileInfo]$psEditor.GetEditorContext().CurrentFile.Path).Directory.FullName
}

$manifest = Get-Content -Path "${baseScriptPath}/../manifest.json" -Raw | ConvertFrom-Json
$minecraftVersion = $manifest.minecraft.version

$token = & "${baseScriptPath}/Get-Token.ps1"
$baseUri = 'https://api.curseforge.com'
$headers = @{
    Accept      = 'application/json'
    'x-api-key' = $token
}

$modloaderResponse = Invoke-RestMethod -Uri "${baseUri}/v1/minecraft/modloader/$($manifest.minecraft.modLoaders[0].id)" -Headers $headers
$modloaderId = $modloaderResponse.data.type

$modFilesUri = "${baseUri}/v1/mods/${ModId}/files?pageSize=50&gameVersion=${minecraftVersion}&modLoaderType=${modloaderId}"
$modFilesResponse = Invoke-RestMethod -Uri $modFilesUri -Headers $headers
$modFiles = $modFilesResponse.data
# get further pages if there are more files than the max page size of 50
while ($modFiles.Count -lt $modFilesResponse.pagination.totalCount) {
    $modFilesResponse = Invoke-RestMethod -Uri "${modFilesUri}&index=$($modFiles.Count)" -Headers $headers
    $modFiles += $modFilesResponse.data
}

return $modFiles
