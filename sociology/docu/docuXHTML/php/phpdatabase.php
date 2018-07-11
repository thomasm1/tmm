<?php
$db_connection=mysql_connect("localhost","webdev","webdevpass")
	or die(mysql_error());
$db_select=mysql_select_db("cis1715")
	or die(mysql_error());
	mysql_close();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
<title>PHP Database Processing</title> 
<style type="text/css">
	body {background-color: silver;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
</style>
</head> 
<body> 
<a class="home" href="http://kryptos.cnm.edu/~tmaestas29"> Kryptos home</a><br /><br />
<p><strong>Today is:</strong>     
		<?php
		echo date("n-d-Y");
		?>
	</p>
	<p><strong>...and the current time in Albuquerque is:</strong> 
		<?php
		echo date("h:i:s:T");
		?>
	</p>
<?php echo"Success!";
?>
</body>
</html>