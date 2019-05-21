#requires -version 3.0

#demo Shell improvements Part 2

#syntax changes
get-service w* | where status -eq running

$profiles = get-wmiobject win32_userprofile -filter "special='False'"
$profiles | foreach LocalPath

#or use $PSItem
$profiles | foreach {$psitem.localpath ; Test-Path $psitem.localpath}

cls

#default parameter values
$PSDefaultParameterValues = @{"Get-WmiObject:class"="win32_computersystem"}
gwmi
#you can override the default
gwmi win32_operatingsystem

#add an entry
$PSDefaultParameterValues.Add("Get-CimInstance:classname","win32_computersystem")
$PSDefaultParameterValues.Add("Get-SMBShare:special",$False)
$PSDefaultParameterValues

Get-CimInstance
Get-SmbShare

cls

#operator changes
3 -in 2,4,6,8,10 
3 -notin 2,4,6,8,10
#a more practical example
"Notepad" -in (get-process).name

cls

#new type adapters
$hash = [ordered]@{Name="Jeff";Company="Globomantics";Computer=$env:computername}
$hash
#or create a new object from it
$me = [pscustomobject]$hash
$me
$me | gm

cls
#new redirection
$PSVersionTable > c:\work\ver.txt
cat c:\work\ver.txt
#append to a file
dir env: >> c:\work\ver.txt
cat c:\work\ver.txt

#split streams
gwmi win32_bios -ComputerName $env:computername,foo 2>c:\work\err.txt 
cat c:\work\err.txt

#capture multiple streams
gwmi win32_bios -comp $env:computername,foo 1>c:\work\ok.txt 2>c:\work\err.txt
cat c:\work\ok.txt
cat c:\work\err.txt

get-ciminstance win32_logicaldisk -ComputerName $env:computername,foo -verbose 1>c:\work\ok.txt 2>c:\work\err.txt 4>c:\work\verb.txt 
cat c:\work\ok.txt
cat c:\work\err.txt
cat c:\work\verb.txt

#or merge streams
gwmi win32_bios -ComputerName $env:computername,foo 2>&1>c:\work\results.txt
cat c:\work\results.txt

#but only to success. This will fail.
get-ciminstance win32_bios -ComputerName $env:computername,foo -verbose 2>&4>c:\work\mixed.txt

cls