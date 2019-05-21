#requires -version 3.0

<#
Demonstrate scheduled jobs in PowerShell 3.0
This must be run in an elevated session
Don't confuse this with ScheduledTasks module in Windows 8

THIS IS NOT A SCRIPT, ONLY A LISTING OF COMMANDS TO RUN INDIVIDUALLY
#>

# These commands are in the PSScheduledJob module.
# importing a module is optional in v3.
get-command -module PSScheduledJob

#region Define job settings
help new-jobTrigger

$trigger = New-JobTrigger -Once -At (Get-Date).AddMinutes(90)

# Let's see what we created
$trigger

# Define a name for the scheduled job to save typing
$name="My Job"

# Define a scriptblock. 
$action={
  #get processes
  $p=get-process -computername 'CHI-DC01','CHI-DC03' | 
  where {$_.ws -gt 10mb} | sort WS -descending
  #display results
  write $p 
  #export results to a file
  $p | export-clixml -path c:\work\proc10mb.xml
  }

#endregion

#region Register the job
help Register-ScheduledJob

#we're going to use a credential so we can access
#network resources
$cred = Get-Credential 'globomantics\jeff'

Register-ScheduledJob -Name $name -ScriptBlock $action `
-Trigger $trigger -Credential $cred

#endregion

#region Look at the scheduled job
Get-ScheduledJob -Name $name

#view the job file
$jobpath = "$env:LocalAppData\Microsoft\Windows\PowerShell\ScheduledJobs"
dir $jobpath  -recurse

# show the job in Task Scheduler Microsoft\Windows\PowerShell\ScheduledJobs
Taskschd.msc

# this is a rich object
Get-ScheduledJob -Name $name | get-member
Get-ScheduledJob -Name $name | Select *

# We can also see when it will execute
get-jobtrigger $name

#or this way 
Get-ScheduledJob $name | Get-JobTrigger

#endregion

#region ScheduledJob Options
Get-ScheduledJobOption -Name $name

# or modify options. Works best in a pipeline
help Set-ScheduledJobOption

Get-ScheduledJobOption -Name $name | 
Set-ScheduledJobOption -RunElevated -WakeToRun -RequireNetwork -passthru | 
Select *Run*

#endregion

#region modify the trigger
help set-jobtrigger

Get-JobTrigger $Name

#modify the trigger
Get-JobTrigger $Name | 
Set-JobTrigger -DaysOfWeek Sunday -Weekly -at 12:00PM -PassThru | 
Select *

#endregion

#region managing the scheduled job

#nothing in the job queue because nothing has been run
Get-Job
#get the scheduled job object
Get-ScheduledJob

<# 
 You can start a scheduled job manually. Notice the new parameter.
 NOTE: manually running the job does not generate history in the 
 Task Scheduler
#>
Start-Job -DefinitionName $Name

# Now what do we see in the job queue?
Get-Job
get-job -IncludeChildJob

# there are some new properties
Get-Job -Name $name | Select *

<# 
 the job persists across sessions. Open a new PowerShell tab
 and run Get-Job. You shouldn't see anything. Then import
 PSScheduledJobs and run Get-Job again.
#>

#endregion

#region get job results
#there might be multiple job entries so get the latest one
get-job $name -newest 1 | Receive-job -keep | 
sort machinename,Workingset | 
format-table -GroupBy machinename

<#
 Results written to disk. Default is 32 jobs but you can
 set -MaxResultCount when you register the job or with
 Set-ScheduledJob
#>

dir $jobpath -recurse

#endregion

#region disabling the job
Help Disable-ScheduledJob

Disable-ScheduledJob $name -WhatIf
Disable-ScheduledJob $name -PassThru

Get-ScheduledJob | Select name,Enabled

#if I wanted to re-enable
Enable-ScheduledJob $name -WhatIf

#endregion

#region remove the scheduled job
help Unregister-ScheduledJob

Unregister-ScheduledJob -Name $name

Get-ScheduledJob

#also clears job queue
Get-job

#UNREGISTERING ALSO DELETES HISTORY AND OUTPUT
dir $jobpath -recurse

#endregion

#region Summary

#again, these are the commands you'll use
get-command -module PSScheduledJob

#read help
help about_scheduled_jobs

#endregion



