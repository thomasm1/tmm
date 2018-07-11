<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$street = $_POST['street'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$memory = $_POST['memory'];
$processor = $_POST['processor'];
$comments = $_POST['comments'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <title>ACME Computers</title>
<style type="text/css">
	body {background-color: silver;}
	.home {background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
</style>
</head>
<body>
<a class="home" href="http://kryptos.cnm.edu/~tmaestas29"> Kryptos home</a><br />
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
	<h3>ACME Computers</h3>
	<h4>
      Order Confirmation 
    </h4>
<?php
print <<<end_table
	<table>
	<tr>
		<td>First Name:</td><td>$fname</td>
	</tr>
	<tr>
		<td>Last Name:</td><td>$lname</td>
	</tr>
	<tr>
		<td>Street:</td><td>$street</td>
	</tr>
	<tr>
		<td>City:</td><td>$city</td>
	</tr>
	<tr>
		<td>State:</td><td>$state</td>
	</tr>
	<tr>
		<td>Zip:</td><td>$zip</td>
	</tr>
	<tr>
		<td>Memory Selected:</td><td>$memory</td>
	</tr>
	<tr>
		<td>Processor Selected:</td><td>$processor</td>
	</tr>
	<tr>
		<td>Your posted comments:</td><td>$comments</td>
	</tr>
	</table>
end_table;
?>

</body>
</html>

