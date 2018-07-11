<?php
session_start();
if(!$_SESSION['cart']['Grand_Total'])
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
<title>Checkout</title>

<?php $orderid = time(); ?>
<script>
dataLayer = [{
    'Visitor Type': 'shopper',
    'transactionId': <?php echo "'".$orderid."'"; ?>,
    'transactionAffiliation': 'CIS 2760 Web Metrics',
    'transactionTotal': <?php echo $_SESSION['cart']['Grand_Total'] ?>,


'transactionProducts' : [{
   <?php 
	// examples of the product session array
	//$_SESSION['cart']['products']['apo11'] 
	//$_SESSION['cart']['products']['apo13']
	//$_SESSION['cart']['products']['apo15']
	foreach($_SESSION['cart']['products'] as $k=>$v)
	{
		if($v['qty'])
		{?>
			'sku': <?php echo "'".$k."'"; ?>,           // SKU/code - required
			'name': 'Apollo Mission Patch',        // product name
			'category': 'web graphic',   // category or variation
			'price':<?php echo "'".$v['price']."'"; ?>,          // unit price - required
			'quantity':<?php echo "'".$v['qty']."'"; ?>               // quantity - required
		  
		<?php } 
	}
	?>
	}]	
}];	
  </script>

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
<table align = "center">
<tr><td colspan = "2" align = "center">Thank you for your order</td></tr>
<tr><td colspan = "2" align = "center">To take advantage of our Free Delivery!<br>Just Right Click the image and Save Picture As..</td></tr>
<tr><th>Mission Patch</th><th>Qty</th></tr>
<?php
foreach($_SESSION['cart']['products'] as $k=>$v)
{
	if($_SESSION['cart']['products'][$k]['qty'])
	{
		echo '<tr>';
		echo '<td><img src = ../assets/'.$k.'sm.gif width = "100" height = "100"></td>';
		echo '<td valign = "top" align = "right">'.$_SESSION['cart']['products'][$k]['qty'].'</td>';

		echo '</tr>';
		
	}
	
}

?>
<tr><td colspan = "2"><a href = "index.php">Get More Apollo Mission Patches</a></td></tr>
</table>
</form>
</body>
</html>
