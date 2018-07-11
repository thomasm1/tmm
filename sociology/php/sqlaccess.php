<?php
	mysqli_connect("localhost", "cl29-users-bzh", "wxyzwxyz");
	if (mysqli_connect_error()) {
	die ("There was an error connecting to the database.");
	} else {
	// $query = "INSERT INTO `users` (`email`, `password`)
	// VALUES('thomas76milton@gmail.com', 'password1234')";
	$query = "UPDATE `users` SET password = '12345' WHERE id >= 2 AND email LIKE '%thomas76milton@gmail.com'"
	mysqli_query($link, $query);
	$query = "SELECT * FROM users";
	if ($result = mysqli_query($link, $query)) {
	$row = mysqli_fetch_array($result);
	echo "Your email is ".$row[1]." and your password is ".$row[2];
	}
?>

<!--
<?php

    $link = mysqli_connect("localhost", "cl29-users-bzh", "YTTMcfhK.", "cl29-users-bzh");

    if (mysqli_connect_error()) {
        
        die ("There was an error connecting to the database");
        
    } 

    $query = "SELECT * FROM users";

    if ($result = mysqli_query($link, $query)) {
        
        $row = mysqli_fetch_array($result);
        
        echo "Your email is ".$row[1]." and your password is ".$row[2];
        
    }


?>
-->