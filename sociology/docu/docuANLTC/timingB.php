<!DOCTYPE html>
<html lang="en">
<head>
<title>window.performance.timing</title>
<meta charset="utf-8">
</head>
<body>
<h1>Timing Test B</h1>
Compare the timing data with the interface points on the image below. What can you determine about this page? Where would you look first to optimize this page for better performance?
<script>
var i,j,k;
for(var i=0;i<10000;i++)
{
	for(j=0;j<100000;j++)
	{ k = i*j; }
}
</script>
<script>
setTimeout(function() 
{
	var str = '';
	if('performance' in window) 
	{
		var t = performance.timing;
		var total_time = t.loadEventEnd - t.navigationStart;
		var offsite_time = t.responseEnd-t.navigationStart;
		var onsite_time = t.loadEventEnd-t.responseEnd;
		var sum_time = offsite_time + onsite_time;
		str += '<hr>';
		str += '<b>Performance Timing Total:</b> loadEventEnd - navigationStart (' + total_time + ' ms)<br>';
		str += '<b>Offsite Time:</b> responseEnd-navigationStart (' + offsite_time + ' ms)<br>';
		str += '<b>Onsite Time:</b> loadEventEnd - responseEnd ('+ onsite_time + 'ms)<br>';
		str += '<b>Total: Offsite</b> + <b>Onsite:</b> (' + sum_time + ' ms)<br>';
		str += '<hr>';
		
	} else 
	{
	  str = 'Sorry, your browser doesn\'t support the Navigation Timing API';
	}
	document.getElementById('example').innerHTML = str;
}, 1000);
</script>
<div id = "example">
</div>
<img src = "timing-overview.png">
</body>
</html>
