<?php
$db_connection=mysql_connect("localhost","webdev",
		webdevpass")
		or die(mysql_error());
$db_select=mysql_select_db("cis1715")
	or die(mysql_error());
	mysql_close();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
<title>PHP Database Processing</title> 
</head> 
<body> 
<?php echo"Success!";
?>
</body>
</html>