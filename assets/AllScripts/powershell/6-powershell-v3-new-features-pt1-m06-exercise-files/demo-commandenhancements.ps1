#requires -version 3.0

#walk through these demos in the ISE

#region Get-Command

#get new command type
workflow foo {"Hello,world"}
Get-Command -CommandType workflow

#list only commands in the current session
ipmo GroupPolicy
gcm -ListImported -CommandType cmdlet

#get commands with a certain paremeter

gcm -ParameterName Filepath -ListImported

#endregion

#region Get-ChildItem
help dir
dir c:\
dir c:\ -Directory
dir c:\ -Hidden
dir c:\ -System
#may need to combine
dir c:\ -Hidden -System
#or get files only
dir c:\ -File -Hidden -System

#or using -Attribute
dir c:\ -File -Attributes Hidden,Archive

#now this is easier
dir $env:TEMP -Recurse -file | measure length -sum

#endregion

#region New-PSDrive
#must use a drive letter for UNCs
new-psdrive -name I -PSProvider FileSystem -Root \\chi-fp01\IT `
-Persist -Credential globomantics\administrator 

dir I:\
net use I:

#remove it
remove-psdrive I
net use I:

#endregion

#region Select-Object

#this is similar to what happens in v2
measure-command { dir $env:TEMP -file -recurse| select -First 5 -Wait}

#wait a little bit to eliminate any caching effect

#the default behavior is optimized
measure-command { dir $env:TEMP -file -recurse | select -First 5}


#endregion

#region Export-Csv
#define an array of property names
$props = 'Directory','Name','Fullname','Length','CreationTime','LastWriteTime'

#export some data with these properties
dir s:\a*.txt | Select $props | Export-CSV c:\work\myfiles.csv

#now append some data
dir c:\work\*.txt | Select $props | 
Export-CSV c:\work\myfiles.csv -Append

#view the results
import-csv c:\work\myfiles.csv | ft -AutoSize

#endregion

#region Update-TypeData
help update-typedata

Update-TypeData -TypeName system.io.fileinfo `
-MemberType ScriptProperty `
-MemberName Owner `
-Value { (get-acl $this.fullname).owner } `
-Force

Update-TypeData -TypeName system.io.fileinfo `
-MemberType AliasProperty `
-MemberName Size `
-Value {Length} `
-Force

Get-TypeData system.io.fileinfo | select -ExpandProperty Members

dir \\chi-fp01\Public -file | sort size | select Name,Owner,Size

#endregion

#region Out-GridView

#select a single entry and pass it to the pipeline
get-command -name get* -commandtype cmdlet -ListImported | out-gridview -OutputMode Single

#select multiple entries and pass them to the pipeline
get-service | where status -eq running | Out-GridView -PassThru | stop-service -whatif

#use it as a pseudo menu system
psedit T:\lesson_6\demo\Demo-EventLogPicker.ps1

#endregion