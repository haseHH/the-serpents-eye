#Requires -Version 7

<#
    .SYNOPSIS
    Get details of a mod

    .EXAMPLE
    & "${baseScriptPath}/Get-Mod.ps1" -ModId 412082
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

$token = & "${baseScriptPath}/Get-Token.ps1"
$baseUri = 'https://api.curseforge.com'
$headers = @{
    Accept      = 'application/json'
    'x-api-key' = $token
}

$mod = Invoke-RestMethod -Uri "${baseUri}/v1/mods/${ModId}" -Headers $headers | Select-Object -ExpandProperty 'data'
return $mod
