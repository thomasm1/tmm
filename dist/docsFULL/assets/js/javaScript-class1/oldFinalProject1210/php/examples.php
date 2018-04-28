
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
	<title>Order Confirmation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="../css/zamora.css" type="text/css"/>
<style type="text/css">
	body {background-color: silver; width:500px;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
	.ztable {width:100%;}
	.ztable th {text-align:left;width:50%}
	.ztable td {text-align:left;background-color:white; border:1px solid black;}
</style>
</head>
<body>
<div id="wrapper">
<a class="home" href="../zamora/tenants.html">Zamora's Historica Mansion</a><br /><br />
	
	<p>Thank you for your order placed on: 
		<?php
		echo date("n-d-Y");
		?>
		at the time of:
		<?php
		echo date("h:i:s:T");
		?>
	</p>
<h1>Thank you for your order!</h1>
<br />
<table border='0' cellspacing='0' width='400'><tr bgcolor='#CCCCCC'><th>Description</th><th>Quantity</th><th>Price</th></tr>
<tr bgcolor='#FFFFFF'>
<td><?php echo $_POST['desc1']; ?></td>
<td align='center'>1</td>
<td><?php echo $_POST['cost1']; ?></td></tr>
<tr><td>&nbsp;</td><td bgcolor='#CCCCCC'><strong>Total</strong></td>
<td bgcolor='#CCCCCC'><?php echo $_POST['cost1']; ?></td></tr></table>
<!--<br /><strong>Credit Card:</strong><br />
4111 1111 1111 1111<br /><strong>Expiration Date:</strong> 26/29<br />
-->

<br/><br/>
<fieldset>
<table class="ztable">
<tr><th>Your contact name you have submitted:&nbsp; &nbsp; </th><td>
<?php echo htmlspecialchars ($_POST['name']); ?>&nbsp;
</td></tr>
<tr><th>
Your contact E-mail address is:&nbsp; &nbsp; </th><td>
<?php echo $_POST['email']; ?> 
</td></tr><tr><th>
Your contact Street address is:&nbsp; &nbsp; </th><td>
<?php echo $_POST['address']; ?>
</td></tr><tr><th>
Your City is:&nbsp; &nbsp; </th><td>
<?php echo $_POST['city']; ?>
</td></tr><tr><th>
Your Zip is:&nbsp; &nbsp; </th><td>
<?php echo $_POST['zip']; ?>
</td></tr>
<tr><th>Your comment: <br/><br/></th><td>
<?php echo htmlspecialchars ($_POST['comment']); ?>
</td></tr>
<tr><th>You have requested to receive:&nbsp; &nbsp;</th><td>
<?php echo $_POST['newsletter']; ?>
&nbsp;
<?php echo $_POST['holiday'];?>
&nbsp;
<?php echo $_POST['OTMAnewsletter'];?>
</td></tr>
<tr><th>Discount eligibility:&nbsp; &nbsp; &nbsp;</th><td>
<?php echo $_POST['discount']; ?></td></tr>
</table>
</fieldset>
<br />
<div style="width:400px">
<em>Note: This page is for demonstration purposes only and nothing 
is done with the order information. If this were an actual E-Commerce 
site, the order information could be stored in a text file, stored in 
a database, or sent in an e-mail message.The protocol in the 
address bar would show "https" instead of "http".</em></div>
<form action="#">
<input type="button" value = "Back" onclick="javascript:history.go(-3)" />
</form>
</div>
</body>
</html>