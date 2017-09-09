<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<title>Storefront</title>
<style>
.warning
{
	color:red;
}
</style>
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
<form id="apo_patches" name="apo_patches" method="post" action="cart.php">
<table width="500" border="0" align = "center">
  <caption>
  Apollo Mission Patches
  </caption>
  <tr>
    <td colspan = "3" align = "center"><?php echo $_SESSION['cart']['message'] ?></td>
  </tr>     
  <tr>
    <td><img src="../assets/apo11sm.gif" alt="Apollo 11 Mission Patch" width="125" height="125" /></td>
    <td>Apollo 11 Mission Patch</td>
    <td>
      <label>Qty @ $10
        <input type="text" name="apo11_qty" id="apo11_qty" size = "5"/>
        </label>  
      <input type="hidden" name="apo11_price" id="apo11_price"  value="10"/></td>
  </tr>
  
  <tr>
    <td><img src="../assets/apo13sm.gif" alt="Apollo 13 Mission Patch" width="125" height="125"  /></td>
    <td>Apollo 13 Mission Patch</td>
    <td>
      <label>Qty @ $20
        <input type="text" name="apo13_qty" id="apo13_qty" size = "5"/>
        </label>  
      <input type="hidden" name="apo13_price" id="apo13_price" value="20" /></td>
    
    </td>
  </tr>
  <tr>
    <td><img src="../assets/apo15sm.gif" alt="Apollo 15 Mission Patch" width="125" height="125"  /></td>
    <td>Apollo 15 Mission Patch</td>
    <td>
      <label>Qty @ $15
        <input type="text" name="apo15_qty" id="apo15_qty" size = "5"/>
        </label>  
      <input type="hidden" name="apo15_price" id="apo15_price" value="15"/></td>
    
    </td>
  </tr>

  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><input type="submit" name="button" id="button" value="Add to Cart" />      </td>
  </tr>
  <tr>
    <td colspan = "3">Download all the Apollo Mission Patches for free at:<br />
      http://history.nasa.gov/apollo_patches.html<br />
      This site demonstrates Google Analytic tracking of ecommerce<br />
      Enter a quantity for one or more of the patches and proceed through the shopping cart.</td>
  </tr>  
</table>
</form>
</body>
</html>
