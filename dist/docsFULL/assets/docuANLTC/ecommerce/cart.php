<?php
session_start();
$_SESSION['cart']['message'] = '';
$_SESSION['cart']['products'] = array();
$_SESSION['cart']['Grand_Total'] = 0;
$qty = 0;
foreach($_POST as $k=>$v)
{
   $x = explode('_',$k);
   if(substr($x[0],0,3) == 'apo')
   {
	   $_SESSION['cart']['products'][$x[0]][$x[1]] = $v;
	   if($x[1] == 'qty')
	   {
		   $qty += $v;
	   }
   }
}

if($qty == 0)
{
	$_SESSION['cart']['message'] = '<span class = "warning">Enter a numeric quantity for at least 1 item</span>';
	header('location: index.php');
}

?>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cart</title>
</head>

<body>
<!-- Google Tag Manager -->
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PWZWZR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWZWZR');</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager -->

<form action="confirm.php" method="post">
<table align = "center">
<tr><td colspan = "4" align = "center">Shopping Cart</td></tr>
<tr><th>Mission Patch</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>
<?php
foreach($_SESSION['cart']['products'] as $k=>$v)
{
	if($_SESSION['cart']['products'][$k]['qty'])
	{
		echo '<tr>';
		echo '<td><img src = ../assets/'.$k.'sm.gif width = "100" height = "100"></td>';
		echo '<td valign = "top" align = "right">'.$_SESSION['cart']['products'][$k]['qty'].'</td>';
		echo '<td valign = "top" align = "right">$'.$_SESSION['cart']['products'][$k]['price'].'</td>';
		$subtotal = $_SESSION['cart']['products'][$k]['price']*$_SESSION['cart']['products'][$k]['qty'];
		$_SESSION['cart']['Grand_Total'] += $subtotal;
		echo '<td valign = "top" align = "right">$'.$subtotal.'</td>';
		echo '</tr>';
		
	}
	
}

?>
<tr><td colspan = "3" align = "right">Grand Total</td><td align = "right"><?php echo '$'.$_SESSION['cart']['Grand_Total'] ?></td></tr>
<tr>
  <td colspan = "2"><a href = "index.php">Empty Cart</a></td><td colspan = "2" align = "right">
<input name="Checkout" type="submit" value="Confirm" />
</td></tr>
</table>
</form>
</body>
</html>
