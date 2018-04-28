<?php
session_start();
$_SESSION['cart']['message'] = '';
$qty = 0;
//
foreach($_SESSION['cart']['products'] as $k=>$v)
{
	$qty += $v['qty'];
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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<title>Confirm</title>

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
<form action="checkout.php" method="post">
<table align = "center">
<tr>
  <td colspan = "4" align = "center">Confirm Shopping Cart</td>
</tr>
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
		echo '<td valign = "top" align = "right">$'.$subtotal.'</td>';
		echo '</tr>';
		
	}
	
}

?>
<tr><td colspan = "3" align = "right">Grand Total</td><td align = "right"><?php echo '$'.$_SESSION['cart']['Grand_Total'] ?></td></tr>
<tr><td colspan = "2"><a href = "index.php">Empty Cart</a></td><td colspan = "2" align = "right">
<input name="Checkout" type="submit" value="Checkout" />
</td></tr>
</table>
</form>
</body>
</html>
