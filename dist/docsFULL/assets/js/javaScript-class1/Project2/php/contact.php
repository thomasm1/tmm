<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>Contact Confirmation</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style type="text/css">
	body {background-color: silver; width:700px;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
	.ztable {width:100%; }
	.ztable td {padding:3px 7px 2px 7px; background-image:url(../zgraphics/marb082.jpg); 
		border:1px solid black; vertical-align:top; width:55%;}
	.ztable th {padding:3px 7px 2px 7px; background-image:url(../zgraphics/marb082.jpg); 
		border:5px;vertical-align:top;text-align:left;}
</style>
</head>
<body>
<a class="home" href="../index.html">Zamora's Historica Mansion</a><br /><br />
	
	<h3 style="text-align:center;">Thank you for your submission received on: 
		<?php
		echo date("n-d-Y");
		?>
		at 
		<?php
		echo date("h:i:s:T");
		?>
	</h3>
<fieldset>
<table class="ztable">
<tr><th>Your contact name you have submitted:&nbsp; &nbsp; </th><td>
<?php echo htmlspecialchars ($_POST['fname']); ?>&nbsp;
<?php echo htmlspecialchars ($_POST['name']); ?></td></tr>
<tr><th>
Your contact E-mail address is:&nbsp; &nbsp; </th><td>
<?php echo $_POST['email']; ?> 
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
<h3 style="text-align:center;">Thank you for contacting us. We will respond within two business days.</h3>
<div style="text-align:center; font-size: 0.9em; font-style: italic; 
	padding-top: 30px; padding-bottom: 20px;">
Contact Webmaster:<a href="mailto:tmaestas29@cnm.edu">tmaestas29@cnm.edu</a>
			<br/>Copyright &copy; 2012 Zamora's Historical Mansion LLC.
</div>
</body>
</html>