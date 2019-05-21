#requires -version 3.0

#. S:\Get-TwitterSearch.ps1 -query "@jeffhicks" | ogv -Title "My Tweets"

Param(
[Parameter(Position=0)]
[ValidateNotNullorEmpty()]
[string]$query = "PowerShell",
[int]$ResultsPerPage = 10,
[string]$Language="en"
)

$uri = "http://search.twitter.com/search.json?q=$query&rpp=$ResultsPerPage&lang=$Language"

Write-Host $uri -ForegroundColor Cyan

$data = Invoke-RestMethod -Uri $uri  | Select-Object -ExpandProperty results 

$data | Select @{Name="Datetime";Expression={$_.created_at -as [datetime]}},
@{Name="From";Expression={"{0} ({1})" -f $_.from_User_Name,$_.from_User}},Text,
@{Name="Link";Expression={
"https://twitter.com/{0}/status/{1}" -f $_.from_user,$_.id 
}}

