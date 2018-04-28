<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
  <head> 
  <title>Popcorn</title>
	<style type="text/css">
		body {background-color: silver;}
		.home {background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
			border: 3px inset #999999; font-family: ariel; font-weight: bold;}
	</style>
  </head>
  <body>
   <div>
  <a class="home" href="http://kryptos.cnm.edu/~tmaestas29"> Kryptos home</a>
  </div>
  <h2>Popcorn data table from popcorn.txt flat file:</h2>
  <div>
 <?php
  $pointer = fopen("../cis1715/popcorn.txt", "r"); 
if ($pointer) { 
   print '<table border="1">'; 
     $record = fgets($pointer, 4096); 
   while (!feof($pointer)) { 
     print '<tr>'; 

     $fields = explode("\t", $record);
	 
foreach ($fields as $field) { 
        print "<td> $field </td>" ; 
     } 
     print '</tr>'; 
     $record = fgets($pointer, 4096); 
   } // end while 
   print '</table>'; 
   fclose($pointer); 
} // end if	 
 ?>
  </div>
  <h2>HTML hand-written popcorn Data Table:</h2>
    <table border = "border">
      <tr>
        <td>Unpopped Popcorn</td>
        <td>3.00</td>
      </tr>
      <tr>
		<td>Caramel Popcorn</td>
		<td>3.50</td>
       </tr>
      <tr>
		<td>Caramel Nut Popcorn</td>
		<td>4.50</td>
      </tr>
      <tr>
		<td>Toffey Nut Popcorn</td>
		<td>5.00</td>
	  </tr>	
      <tr> 
		<td>Kettle Corn</td>
		<td>12.50</td>
	  </tr>	
    </table>
  </body>
</html>
