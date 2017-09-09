<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>Contact Confirmation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style type="text/css">
	body {background-color: silver;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
</style>
</head>
<body>
<a class="home" href="../index.html">Zamora's Historica Mansion</a><br /><br />
	
	<p>Thank you for your submission received on: 
		<?php
		echo date("n-d-Y");
		?>
		at the time of:
		<?php
		echo date("h:i:s:T");
		?>
	</p>
<fieldset>
<h4><em>The contact name you have submitted is:&nbsp; &nbsp; </em>
<?php echo htmlspecialchars ($_POST['fname']); ?>&nbsp;
<?php echo htmlspecialchars ($_POST['name']); ?>
</h4><h4><em>
Your contact E-mail address is:&nbsp; &nbsp; </em>
<?php echo $_POST['email']; ?> 
</h4>
<h4><em>Thank you, we will respond to your comment within two business days!<br/> </em>
<?php echo htmlspecialchars ($_POST['comment']); ?>
</h4><h4>
<em>You have requested to receive:&nbsp; &nbsp;</em>
<?php echo $_POST['newsletter']; ?>
<br/>
<?php echo $_POST['holiday'];?>
<br/>
<?php echo $_POST['OTMAnewsletter'];?>
</h4><h4>
<em>Discount eligibility:&nbsp; &nbsp; &nbsp;</em>
<?php echo $_POST['discount']; ?>
</h4>
</fieldset>
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
?>
<p>By the way, This application notes that you are using Internet Explorer, thank you for your online support.</p>
<?php
} else {
?>
<p>By the way, this application notes that Microsoft Explorer is not your current browser.</p>
<?php
}
?>
<?php 
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE)
    {
    echo 'and, it looks like you\'re in fact using Firefox.<br />';
    }
?>
<?php 
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE)
    {
    echo 'and, it looks like you\'re in fact using Google Chrome.<br />';
    }
?>
</body>
</html>