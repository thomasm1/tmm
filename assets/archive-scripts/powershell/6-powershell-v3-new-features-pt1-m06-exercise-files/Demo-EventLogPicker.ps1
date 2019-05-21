#pick an event log and save it to a variable
$EventLog = Get-EventLog -List | 
Select log, @{Name="Count";Expression = {$_.entries.count}} | 
where count -gt 0 | sort Count -Descending |
Out-GridView -Title "Please select an eventlog from the list:" -OutputMode Single

#prompt for types of entries
$types = "Error","Warning","Information","SuccessAudit","FailureAudit" |
Out-GridView -Title "What type of event log entries do you want?" -PassThru

#prompt for number of entries
5,10,15,20,25,30,35,40,45,50 | 
Out-GridView -Title "How many entries do you want?" -OutputMode single |
Foreach { 
  Get-Eventlog -Newest $_ -LogName $EventLog.log -EntryType $Types
  }