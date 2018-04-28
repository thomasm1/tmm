<?php
	// connect to database
	$db_connection = mysql_connect ('localhost', 'webdev', 'webdevpass')
    or die ( mysql_error() ) ;

	// select database to use
  $db_select = mysql_select_db('cis1715')
	 or die ( mysql_error() );
	 
  // Execute  query. Select all customer rows
  $query_result  =	mysql_query(
    "SELECT * FROM corvettes"
		)
	or die ( mysql_error() );

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="cs" lang="cs">
<head>
  <meta name="generator" content="PSPad editor, www.pspad.com" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  
  <title>Corvettes</title>
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
	<h1 style="text-align: center;">Corvette Inventory</h1>
<ul>
<?php
while ($row = mysql_fetch_assoc($query_result))
{
?>
<li> 
<a href="corvettes_form_update.php?id=<?php echo $row['vette_id']; ?>" >
  <?php echo $row['year'] . ' ' . $row['body_style']; ?> 
  
 </a>
</li>			

<?php
}  // end while loop
mysql_free_result($query_result);
mysql_close();
?>
 
</ul>       
</body>
</html>
