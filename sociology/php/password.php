<?php

    if ($_POST) {
        
        $family = array("Thomas", "Sarah", "Tommy", "Sarai", "Guest");
        $password = array("Thomas11", "Sarah11", "Tommy11", "Sarai11", "Guest11");
        
        $isKnown = false;
        
        foreach ($family as $value) {
            
            if ($value == $_POST['name']) {
                
                $isKnown = true;
                
            }  
            
        }
        
        if ($isKnown) {
            
            echo "Hi there ".$_POST['name'].".";
            
        } else {
            
            echo "Sorry, wrong credentials.";
            
        }      
        
    }


?>



<form method="post">

    <p>Credential:</p>
    
    <p><input type="text" name="name"></p>
    
    <p><input type="submit" value="Login"></p>


</form>
