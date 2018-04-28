<?php
$db_connection = mysql_connect("localhost","webdev","webdevpass")
	or die(mysql_error());
$db_select = mysql_select_db("cis1715")
	or die(mysql_error());
$query_result = 
	mysql_query ("SELECT * 
		FROM corvettes, states
		WHERE corvettes.state_id = states.state_id")
	or die(mysql_error());
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
<title>PHP Corvette Data</title> 
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
	<strong>and the current time in Albuquerque is:</strong> 
		<?php
		echo date("h:i:s:T");
		?>
	</p>
<?php echo"The following data is retrieved from the states table and corvettes table within the CIS1715 database:";
?>

<table border = "1">
	<tr>
	<th>Vette ID</th>
	<th>Body style</th>
	<th>Miles</th>
	<th>Year</th>
	<th>State</th>
	</tr>
<?php
while ($row = mysql_fetch_assoc($query_result))
{
?>	
	<tr>
	<td><?php echo $row['vette_id'] ?></td>
	<td><?php echo $row['body_style'] ?></td>
	<td><?php echo $row['miles'] ?></td>
	<td><?php echo $row['year'] ?></td>
	<td><?php echo $row['state_name'] ?></td>
	</tr>
<?php
} 
mysql_free_result($query_result);
mysql_close();
?>
</table>
</body>
</html>