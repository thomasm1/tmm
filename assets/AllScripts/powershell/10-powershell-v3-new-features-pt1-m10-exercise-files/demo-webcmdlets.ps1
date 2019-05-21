#requires -version 3.0

#region JSON

help ConvertTo-Json

#create a simple object
$obj = [pscustomobject]@{Name="Jeff";Title="Trainer";MVP=$True;Blog="http://jdhitsolutions.com/blog"}
$obj
#convert it to json
$json = $obj | ConvertTo-Json
$json
$json | out-file c:\work\jsonobj.txt 

#convert json back to objects
help ConvertFrom-Json
#you must have a string to pipe to ConvertFrom-Json
get-content C:\work\jsonobj.txt | Out-String | ConvertFrom-Json | format-list

#save it a file

#endregion

#region Invoke-Webrequest

help Invoke-WebRequest
$wr = Invoke-WebRequest -Uri "http://jdhitsolutions.com/blog"
$wr
#explore the object
$wr.headers
$wr.Links | where title -match 'permalink' | select OuterText,href | 
out-gridview -title "Recent Blog Posts"

#or parse the DOM
$wr.ParsedHtml.getElementsByTagName("h2") | select InnerText

$url="http://www.microsoft.com/technet/security/bulletin/secrss.aspx"
$wr = Invoke-WebRequest -uri $url -OutFile c:\work\rss.txt -PassThru
#this command assumes you are in the ISE, otherwise use Notepad to view
#the file
psedit c:\work\rss.txt

#turn content into an XML document since that is what it really is
[xml]$ms = $wr.Content
$ms
$ms.rss
$ms.rss.channel
#or parse out the results
$ms.rss.channel.Item | select -property Title,Link,Date,
@{Name="Severity";Expression={
[regex]$rx="Critical|Important"
$rxMatch = $rx.match($_.title)
if ($rxmatch)  {
    $rxMatch.Value
}
else {
 #no match
 "Normal"
}}} | Group Severity

#endregion

#region Invoke-RESTmethod

help Invoke-RestMethod

$IP="208.67.220.220"

$uri = "http://www.webservicex.net/geoipservice.asmx/GetGeoIP?IPAddress=$IP"
$data = Invoke-RestMethod -Uri $uri
#we get an XML document
$data
$data | gm
$data.GeoIP
$data.GeoIP | Select IP,Country*

#take advantage of the DNSClient module on Windows 8
$data.GeoIP | Select IP,Country*,@{Name="Host";Expression={(Resolve-DNSName -name $_.IP).NameHost}}

#put it all together
$IP="144.63.250.10"
$uri = "http://www.webservicex.net/geoipservice.asmx/GetGeoIP?IPAddress=$IP"
Invoke-RestMethod -Uri $uri | 
Select -ExpandProperty GeoIP |
Select IP,Country*,
@{Name="Host";Expression={(Resolve-DNSName -name $_.IP).NameHost[0]}}

#one more example where I've used the cmdlet
psedit S:\Get-TwitterSearch.ps1
S:\Get-TwitterSearch.ps1 | out-gridview


#endregion

#region WebServiceProxy

help New-WebServiceProxy

$URI = "http://www.webservicex.net/uszip.asmx?WSDL"
$zip = New-WebServiceProxy -uri $URI 

$zip
$zip | get-member

$results = $zip.GetInfoByZIP("60195")
$results
$results.table
$zip.GetInfoByZIP("60195").Table

$results = $zip.GetInfoByAreaCode("847")
$results.Table[0..2]
$results.Table | sort Zip| select -first 10 | 
ft -auto -prop City,State,Zip

#endregion
