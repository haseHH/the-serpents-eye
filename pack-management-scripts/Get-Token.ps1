#Requires -Version 7

<#
    .SYNOPSIS
    Get the API key for Curseforge

    .DESCRIPTION
    The Curseforge API requires a key, but apparently it is tolerated that
    launchers and small projects use the one from the official Curseforge
    client. The PolyMC launcher devs offer that key via their site/API.
#>

if ([string]::IsNullOrEmpty($env:curseforgeApiKey)) {
    $keyUri = "https://cf.polymc.org/api"
    $response = Invoke-RestMethod -Uri $keyUri
    $env:curseforgeApiKey = $response.token
}

return $env:curseforgeApiKey
