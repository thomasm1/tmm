<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
  <head> <title> JulyDate </title>
  </head>
  <body>
	<p><strong>Today is:</strong>     
		<?php
		echo date("n-d-Y");
		?>
	</p>
	<p><strong>The Time is:</strong> 
		<?php
		echo date("h:i:s:u:T");
		?>
	</p>
  </body>
</html>