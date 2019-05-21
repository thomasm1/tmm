#requires -version 3

#this is not a script to run. Each line is a separate
#demo command

#define an array of computers for some remote jobs
$computers = 'CHI-DC01','CHI-DC02','CHI-DC03','CHI-FP01'

#region create some typical jobs
start-job {1..10 | foreach {$_*10}} -Name demo

invoke-command -ScriptBlock {get-service} -AsJob -JobName Svc -ComputerName $computers

$wmijob = Get-WmiObject win32_computersystem -comp $computers -AsJob
$wmijob2 = Get-WmiObject win32_operatingsystem -comp $computers -AsJob
#endregion

#region sample workflow jobs
workflow get-logdata {get-eventlog -list}

workflow get-profiledata { 
 get-wmiobject -class win32_userprofile -filter "special='False'" | 
 foreach-object -process {dir -path $_.localpath -recurse} 
 }

get-logdata -asjob -jobname logdata -PSComputerName 'CHI-DC03','CHI-FP01'
get-profiledata -AsJob -JobName profiledata -PSComputerName CHI-FP01

#the PSWorkflow module is loaded automatically when you run a
#workflow job
get-module
#endregion

#region Get jobs
Get-Job

get-job svc | select *
#show child jobs as well
get-job svc -IncludeChildJob

#find jobs that still have data
get-job -HasMoreData $True

#get job run times
get-job -state Completed | 
Select Name,Location,Command,PSJobTypeName,
PSBeginTime,PSEndTime,
@{Name="Runtime";Expression={$_.PSEndTime - $_.PSBeginTime}} |
Sort Runtime
#endregion

#region Receive job results
#you just use -Wait for auto remove
$d = Receive-Job demo -AutoRemoveJob -wait
get-job demo
$d

#receive jobs from a location
get-job -State Completed | receive-job -Location Chi-DC03

#receiving a job with the results
#must use -Wait. Can NOT use -keep
$results = $wmijob | receive-job -WriteJobInResults -wait
$results[0]
$results[0].ChildJobs

#see results
$results[1..3]

#skip the job object
$results | Select -skip 1 | Sort Name | 
ft Name,TotalPhysicalMemory -auto

#endregion

#region filtering

#the filter doesn't work on standard background jobs
get-job -Filter @{location='chi-fp01';State='Completed'}

#workflow jobs will persist unless you remove them
#all other jobs will automatically be removed when you close
#your session
get-job -Filter @{State='Completed'} | remove-job

get-job

#endregion
