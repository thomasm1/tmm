#requires -version 3.0

#what is the current module loading preference
#the default is ALL but it won't display
$PSModuleAutoLoadingPreference

#get current modules
get-module

#run a command in new module
Get-NetAdapter

#now look at imported modules
gmo

#or if you want to change the behavior
#valid choices are ALL, ModuleQualified or NONE
$global:PSModuleAutoLoadingPreference = "none"
$PSModuleAutoLoadingPreference
get-smbshare -CimSession chi-dc03

ipmo smbshare
get-smbshare -CimSession chi-dc03

#lets set it back
$global:PSModuleAutoLoadingPreference = "All"

#getting module information
$mod=get-module SMBShare 
$mod | select * | more
get-module -list | where powershellversion -eq '2.0'

#turn on module logging
$mod.LogPipelineExecutionDetails=$True

#run a command
get-smbshare -CimSession chi-dc03 -Special $False -IncludeHidden

#view the log entry
get-eventlog -LogName 'Windows PowerShell' -Newest 1 | select -ExpandProperty message

#import modules from a remote computer

#the remote module needs to be a CIM based module
import-module ServerManagerTasks -cimsession chi-dc03 -Prefix My

#or use a PSSession
import-module DNSServer -pssession (new-pssession chi-dc03) -Prefix My

gmo 
gcm -module ServerManagerTasks

#these commands executes ON the remote computer
get-myserverevent -log System | select -first 3
get-mydnsserver

#remove the modules
rmo ServerManagerTasks,DNSServer

#don't forget to remove the session
get-pssession | remove-pssession
get-cimsession | remove-cimsession

cls
