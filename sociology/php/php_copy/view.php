
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<title>Plaza Indian Trading Post Shopping Cart</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/zamora.css" type="text/css"/> 
<style type="text/css">
	body {background-color: silver; width:500px;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
	.ztable {width:400px;}
	.ztable th {text-align:left;}
	.ztable td {text-align:left;background-color:white; border:1px solid black;}
</style>
</head>
<body>
<div id="wrapper">
<a class="home" href="index.html">Plaza Indian Trading Post</a><br /><br />
<h2>Shopping Cart</h2>
<table class="ztable" width="400px"><tr><th>Description</th><th>Quantity</th><th>Price</th></tr>
	<tr bgcolor='#FFFFFF'>
	<td>
	<?php echo htmlspecialchars ($_POST['desc1']); ?></td>
	<td align='center'>1</td>
	<td><?php echo htmlspecialchars ($_POST['cost1']); ?></td></tr>
<tr><td></td><td bgcolor='#CCCCCC'><strong>Total</strong></td>
<td bgcolor='#CCCCCC'><?php echo htmlspecialchars ($_POST['cost1']); ?></td></tr></table>
<form method="post" action="cart.php">
<input type="submit" value="Place Order" />&nbsp;

<input type="button" value="Continue Shopping" onclick="javascript:history.go(-1)" />
<input type="hidden" name="desc1" id="desc1" value="Acoma_Example" />
<input type="hidden" name="cost1" id="cost1" value="55.00" />
</form>
</div>
</body>
</html>
