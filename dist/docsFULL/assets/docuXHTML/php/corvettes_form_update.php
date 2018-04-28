<!--
<?php
$vette_id = $_GET['id'];
$db_connection=mysql_connect("localhost","webdev","webdevpass")
	or die (mysql__error());
$db_select=mysql_select_db("cis1715")
 	or die (mysql_error());
$states_result=mysql_query("SELECT*
	FROM states")
	or die (mysql_error());
$corvette_result = mysql_query ("SELECT * 
	FROM corvettes 
	WHERE vette_id='$vette_id'")
	or die (mysql_error());
$corvette = mysql_fetch_assoc($corvette_result);
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
<div>

<!--First Name:  <br />
<input type=“text” name=“style” value=<$php echo $row[‘body_style’] ;?> /> <br />
Last Name: <br />
<input type=“text” name=“miles” value= <$php echo $row[‘miles’] ;?> /> <br />
</div>
-->
	
</div>
<fieldset>
 <form action="updateCorvettes.php" method="post">
 <input type="hidden" name="id" value= "<?php echo $corvette['vette_id'] ?>" /></p>
 <p>Body Style</p>
 <p><input type="text" name="style" id="style" size="20"
	value="<?php echo $corvette['body_style'] ?>" /></p>
 <p>Miles</p>
 <p><input type="text" name="miles" id="miles" size="10" 
 value="<?php echo $corvette['miles'] ?>" /></p>
 <p>Year</p>
 <p><input type="text" name="year" id="year" size="5" 
 value="<?php echo $corvette['year'] ?>" /></p>
 <p>State</p>
<div><select name="states">
<?php
while ($row=mysql_fetch_assoc($states_result))
{
?>
	<option value="<?php echo $row['state_id']; ?>">
	<?php echo $row['state_name'];?>
	</option>
<?php
}
mysql_free_result($query_result);
mysql_close();
?>
</select>
</div>
 <p><input type="submit" value="Submit" />&nbsp; &nbsp;  <input type="reset" value="Reset" />
 </p> 
 </fieldset>
 </form>      
 </body>
</html>