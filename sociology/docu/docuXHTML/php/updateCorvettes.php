<!--
<?php
	//read form data
$style = $_POST["style"];
$miles = $_POST["miles"];
$year = $_POST["year"];
$states = $_POST["states"];
 //connect to the database. 
 $db_connection = mysql_connect("localhost","webdev","webdevpass")
	or die (mysql__error());
$db_select=mysql_select_db("cis1715")
 	or die (mysql_error());
	//build insert statement
$query = "INSERT INTO corvettes VALUES(null,'$style','$miles','$year','$states')";
	//execute insert statement
$rc = mysql_query($query) 
	or die (mysql_error());
	mysql_close();
?>
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="cs" lang="cs">
 <head>
  <meta name="generator" content="PSPad editor, www.pspad.com" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  
  <title>Corvettes Form</title>
 <style type="text/css">
	body {background-color: silver;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
</style>
 </head>
 <body>
 <div>
 <a class="home" href="http://kryptos.cnm.edu/~tmaestas29"> Kryptos home</a>
	<p><strong>Today is:</strong>     
		<?php
		echo date("n-d-Y");
		?>
	<strong>and the current time in Albuquerque is:</strong> 
		<?php
		echo date("h:i:s:T");
		?>
	</p>
</div>
<h3>Thank you, you have 
successfully submitted the following information:</h3>
<table width="700" border="border">  
<tr>
<th>style</th>
<th>miles</th>
<th>year</th>
<th>state</th>
</tr>
<tr>
<td><?php echo $style ?></td>
<td><?php echo $miles ?></td>
<td><?php echo $year ?> </td>
<td><?php echo $states ?> </td>
</tr>
</table>
 <p>
    <a href="http://validator.w3.org/check?uri=referer"><img
      src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
</p>

</body>
</html>
