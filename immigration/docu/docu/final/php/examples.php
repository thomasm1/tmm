<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>Order Confirmation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style type="text/css">
	body {background-color: silver;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
</style>
</head>
<body>
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
<fieldset>
<h4><em>The contact name you have submitted is:&nbsp; &nbsp; &nbsp;</em>
<strong><?php echo htmlspecialchars ($_POST['fname']); ?>&nbsp;
<?php echo htmlspecialchars ($_POST['name']); ?></strong>
</h4><h4><em>
Your contact E-mail address is: &nbsp; &nbsp; &nbsp;</em>
<strong><?php echo $_POST['email']; ?></strong>
</h4>
<h4><em>Thank you, we will respond to your comment within two business days! <br/><br/></em>
<strong><?php echo htmlspecialchars ($_POST['comment']); ?></strong>
</h4><h4>
<em>The products you have ordered are: <br/><br/></em>
<strong><?php echo $_POST['desc1']; ?>
<br/>
<?php echo $_POST['desc2'];?>
<br/>
<?php echo $_POST['desc3'];?></strong>
</h4><h4>
<em>Discount eligibility:&nbsp; &nbsp; &nbsp;</em>
<strong><?php echo $_POST['discount']; ?></strong>
</h4>
</fieldset>
</body>
</html>