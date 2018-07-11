<?php
echo "PHP Utilities";
echo "<br><br>";
$name = "TMM";
echo "My name is $name";
$string1 = "<br />This is the first part";
$string2 = "of a sentence";
echo $string1." ".$string2;
$myNumber = 45;
$myBool = true;
echo "<p>This statement is true? ".$myBool."</p>";
$variableName = "name";

$myArray = array("R", "X", "T", "TMM");
print_r($myArray);
echo $myArray[1];
echo "<br><br>";
$anotherArray[0] = "piz";
$anotherArray[1] = "yy";
$anotherArray[2] = "x";
print_r($anotherArray);
echo "<br><br>";
$thirdArray = array("France" => "French", "USA" => "English", "Germany" => "German");
print_r($thirdArray);
echo sizeof($thirdArray);
echo "<br><br>";

$user = "visitor";
if ($user == "visitor") {
	echo "Hello R!";
	} else {
	echo "Welcome";
	}
echo "<br><br>";
$age = 25;
echo "<br><br>";
if ($age >= 18) {
	echo "Welcome";
} else {
	echo "Age is insufficient!";
}
echo "<br><br>";

 for ($i = 0; $i <= 10; $i++) {
	echo $i."<br>";
}
echo "<br><br>";

for ($i = 10; $i >= 0; $i--) {
	echo $i."<br>";
}
echo "<br>";
$family = array("2", "4", "5", "5", "6");

foreach ($family as $key => $value) {
	$family[$key] = $value." digits"; 
	echo "Array item ".$key." is ".$value."<br>";
}
for ($i = 0; $i < sizeof($family); $i++) {
	echo $family[$i]."<br>";
}
$i = 0;

while ($i <= 4) {
	$j = $i*5;
	echo $j.", ";
	$i++;
}

echo "<br>";

print_r($_GET);
echo "<br>";
echo "Hi there ".$_GET["name"];
echo "<br>";

if ($_GET) {
	$i = 2;
	while ($i < $_GET['number']) {
		$i++;
	echo "number: ".$_GET["number"]." in ".$i." tries.";
	}
}
echo "<br>";

if ($_GET) {
	$i = 2;
	$isPrime = true;
	while ($i < $_GET['number']) {
		if ($_GET['number'] % $i == 0) {
			$isPrime = false;
		}
		$i++;
	}
	if ($isPrime) {
		echo "<p>".$i." is prime.</p>";
	} else {
		echo "<p>".$i." is not prime.</p>";
	}
}

	if(is_numeric($_GET['number']) && $_GET['number'] > 0 && $_GET['number'] == round($_GET['number'], 0)){
	$i = 2;
	$isPrime = true;
	while ($i < $_GET['number']) {
		$isPrime = false;
	}
	$i++;
}  
 if ($_POST) {
	 $family = array("r", "t", "5");
	 $isKnown = false;
	 foreach ($family as $value) {
		 if ($value == $_POST['name']) {
			 $isKnown = true;
		 }
		 
	 } 
	 if ($isKnown) {
		 echo "Hi There ".$_POST['name']."!";
	 } else {
		 echo "I don't know you";
 }
 }
?>
<p>what's name?</p>
<form method="post" >
<input name="name" placeholder="name here" type="text">
<br>
<p>number of guesses:</p>
<input name="number" placeholder="number here" type="text">
<input type="submit" value="press">
</form>