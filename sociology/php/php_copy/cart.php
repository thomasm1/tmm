
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
<title>Place Your Order</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/zamora.css" type="text/css"/>
<style type="text/css">
	body {background-color: silver; width:500px;}
	.home {float: left; background-color: silver; padding: 3px; margin: 0px 5px 5px 0px;
		border: 3px inset #999999; font-family: ariel; font-weight: bold;}
	.ztable {width:100%;}
	.ztable th {text-align:left;width:50%}
	.ztable td {text-align:left;background-color:white; border:1px solid black;}
</style>
<script language="JavaScript" type="text/javascript">
<!--
function myedit(myform) {
if (!myform.Name.value) {
    alert("Please enter your name")
    myform.Name.focus()
    return false
   } 
if (!myform.Email.value) {
    alert("Please enter your Email Address")
    myform.Email.focus()
    return false
   } 
if (!myform.Address.value) {
    alert("Please enter your Street Address")
    myform.Address.focus()
    return false
   } 
if (!myform.City.value) {
    alert("Please enter your City")
    myform.City.focus()
    return false
   } 
if (!myform.State.value) {
    alert("Please enter your State Abbreviation")
    myform.State.focus()
    return false
   } 
if (!myform.Zip.value) {
     alert("Please enter a numeric Zip Code")
     myform.Zip.focus()
     return false
   } 
   else {
        if (isNaN(myform.Zip.value)) {
            alert("Please enter a numeric Zip Code")
            myform.Zip.focus()
            return false
         }     
}      
if (!myform.CreditCard.value) {
    alert("Please enter a Credit Card Number")
    myform.CreditCard.focus()
    return false
   } 
   
if (myform.CreditCard.value != "4111 1111 1111 1111") {
    alert("Please enter the test Credit Card Number")
    myform.CreditCard.focus()
    return false
   } 
if (!myform.ExpMonth.value) {
     alert("Please enter the Expiration Month")
     myform.ExpMonth.focus()
     return false
  } 
else {
      if (isNaN(myform.ExpMonth.value)) {
         alert("Please enter a numeric month")
         myform.ExpMonth.focus()
         return false
      }     
}      
if (!myform.ExpYear.value) {
     alert("Please enter the Expiration Year")
     myform.ExpYear.focus()
     return false
     }
else {
      if (isNaN(myform.ExpYear.value)) {
         alert("Please enter a numeric year")
         myform.ExpYear.focus()
         return false
      }     
}
document.myform.submit()
}
// -->
</script>   
</head>
<body>
<div id="wrapper">
<a class="home" href="../zamora/tenants.html">Zamora's Historica Mansion</a><br /><br />
<h3 style="text-align:center;">Place Your Order</h3><br/>
<h3>To receive your items in a timely manner, please provide your complete info. Thanks!</h3>
<table border='0' cellspacing='0' width='400'><tr bgcolor='#CCCCCC'><th>Description</th><th>Quantity</th><th>Price</th></tr>
<tr bgcolor='#FFFFFF'>
<td><?php echo $_POST['desc1']; ?></td>
<td align='center'>1</td>
<td><?php echo $_POST['cost1']; ?></td></tr>
<tr><td>&nbsp;</td><td bgcolor='#CCCCCC'><strong>Total</strong></td>
<td bgcolor='#CCCCCC'><?php echo $_POST['cost1']; ?></td></tr></table>
<form method="post" action="examples.php">
<br />
    <table border="0" cellspacing="0" cellpadding="5" width="400" bgcolor="#CCCCCC">
      <tr>
        <td width="14%" height="27" align="right">Name:</td>
        <td width="86%" height="27"><input type="text" name="name" size="20" /></td>
      </tr>
      <tr>
        <td width="14%" height="19" align="right">Email:</td>
        <td width="86%" height="19"><input type="text" name="email" size="20" /></td>
      </tr>
      <tr>
        <td width="14%" height="19" align="right">Address:</td>
        <td width="86%" height="19"><input type="text" name="address" size="20" /></td>
      </tr>
      <tr>
        <td width="14%" height="19" align="right">City:</td>
        <td width="86%" height="19"><input type="text" name="city" size="15" />
        </td>
      </tr>
      <tr>
        <td width="14%" height="19" align="right">
          State:</td>
        <td width="86%" height="19">
          <input type="text" name="state" size="3" maxlength="2" />&nbsp;&nbsp;&nbsp;
          &nbsp;
          Zip: <input type="text" name="zip" size="7" maxlength="5" /></td>
      </tr>
      <tr> 
        <td width="14%" height="19" align="right">Credit<br />Card:</td>
        <td> <input type="text" name="CreditCard" size="20" /><br /><small><small><em> Use "4111 1111 1111 1111"</em></small></small></td>
      </tr>
      <tr>
        <td width="14%" height="19" align="right">&nbsp;</td>
        <td width="86%" height="19">
          Expires Month <input type="text" name="ExpMonth" size="3" maxlength="2" />
          Year: <input type="text" name="ExpYear" size="5" maxlength="4" /></td>
      </tr>
    </table>
<br />
<input type="submit" value="Place Order"/>&nbsp;
<input type="button" value="Continue Shopping" onclick="javascript:history.go(-2)" />
<input type="hidden" name="desc1" id="desc1" value="Acoma_Example" />
<input type="hidden" name="cost1" id="cost1" value="55.00" />
</form><br/>
<h4>Note: If this were an actual E-Commerce site, this page would be processed using SSL.<br/> 
The protocol in the address bar would show "https" instead of "http".</h4>
</div>
</body>
</html>


<!--

		<fieldset style="margin:5px; border:2px ridge gray;">
		<a href="../php/examples.php">
				<img src="../media/viewtrans.gif" alt="View Cart" style="float:right;"/></a>
		<form method="post" name="signup" id="signup" action="../php/examples.php">
		<div class="signrow">
		<label class="label">First Name:&nbsp;</label><input type="text" name="fname" id="fname" />
		</div>
		<div class="signrow">
		<label class="label">Last Name:&nbsp;</label><input type="text" name="name" id="name" />
		</div>
		<div class="signrow">
		<label class="label">Mailing Address:</label><textarea name="mail" rows="4" cols="30"></textarea>
		</div>
		<div class="signrow">
		<label class="label">Additional Information:</label><textarea name="comment" rows="5" cols="30"></textarea>
		</div>
		<p>Sign up for our Zamora newsletter and receive a 10% e-coupon!</p>
		<label>Please check the appropriate boxes to receive the following: <br />
			<input type= "checkbox" name= "newsletter"  value="monthly_newsletter"	/>Monthly Zamora newsletter and e-coupons</label><br/>
			<label><input type= "checkbox" name= "holiday" value="holiday_coupon" />Holiday e-coupons</label><br/>
			<label><input type= "checkbox" name= "OTMAnewsletter" value="OTMA_newsletter" />Old Town Merchants newsletter</label><br/><br/>
		<p><label>Relation to Zamora's Mansion <br />
<input type="radio" name="use" id="home" value="home" />Retail Shopping</label><br />
<label> <input type="radio" name="use" id="business" />Wholesale -- OTMA Member</label><br />
<label> <input type="radio" name="use" id="government" /> Government </label><br />
<label> <input type="radio" name="use" id="education" /> Education </label><br />
<label> <input type="radio" name="use" id="other"/> Other </label>
</p>
		<p><label>Special Discounts: <br /><select name="discount">
			<option value="">None</option>
			<option value="Senior" >Senior 60+</option>
			<option value="Military">Military</option>
			<option value="Education">Education-affiliated</option>
			</select></label></p>
		<input type="reset" value="Reset"/>
		<input class="submitrow" type="submit" value="Submit"/>
		</form>
		</fieldset>
-->