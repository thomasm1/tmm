<?php
//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "tmilton1.db.11589033.f5f.hostedresource.net";
$username = "tmilton1";
$dbname = "tmilton1";

//These variable values need to be changed by you before deploying
$password = "password";
$usertable = "table";
$yourfield = "field";

//Connecting to your database
mysql_connect($hostname, $username, $password) OR DIE ("Unable to
connect to database! Time to call GoDaddy!");
mysql_select_db($dbname);

//Fetching from your database table.
$query = "SELECT * FROM $usertable";
$result = mysql_query($query);

if ($result) {
    while($row = mysql_fetch_array($result)) {
        $name = $row["$field"];
        echo "Name: $name<br>";
    }
?php>