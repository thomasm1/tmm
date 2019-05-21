#requires -version 3.0

#demo updateable help
#this must be run in an elevated shell
	
#help cmdlets
get-command -noun Help

#use this cmdlet
help Update-Help

#run it
Update-Help -force
#some errors are expected

cls

<#
 scenario: you want to save help locally in the Chicago office so that 
 servers and desktops can update help locally. You will test the commands 
 interactively and later figure out how toautomate the download and update 
 processes
#>

help save-help

$src = "\\chi-fp01\IT\pshelp"
Save-Help -DestinationPath $src
dir $src | select -first 5 Name

Update-Help -SourcePath $src

cls

