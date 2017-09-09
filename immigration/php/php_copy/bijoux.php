<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>Des Bijoux</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
	</p>
	<p><strong>...and the current time in Albuquerque is:</strong> 
		<?php
		echo date("h:i:s:T");
		?>
	</p>
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
?>
<h4>By the way, the 'strpos' command detects that you're using Internet Explorer...</h4>
<?php
} else {
?>
<h4>By the way, the 'strpos' command detects you are effectively NOT using Microsoft Explorer...</h4>
<?php
}
?>
<?php 
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE)
    {
    echo 'so, it looks like you\'re in fact using Firefox!<br />';
    }
?>
<?php 
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE)
    {
    echo 'so, it looks like you\'re in fact using Chrome!<br />';
    }
?>
<h4>And, according to the form you filled out
<?php echo htmlspecialchars($_POST['name']); ?>
,&nbsp;you are   
<?php echo (int)$_POST['age']; ?> years old.
</h4>
</body>
</html>