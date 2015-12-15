<?php

    // First we execute our common code to connection to the database and start the session
    require("common.php");
	
        $query = "
			INSERT INTO user_stats (user_id, loginTime)
			VALUES (:user_id,:time)
        ";
		
        $query_params = array(
			':user_id' => $_SESSION['user']['id']
			':time' => time();
        );
        
        try
        {
            $stmt = $db->prepare($query);
            $result = $stmt->execute($query_params);
        }
        catch(PDOException $ex)
        {
            die("Failed to run query: " . $ex->getMessage());
        }
        
        $row = $stmt->fetch();
          
    }
    
?>
<h1>Register</h1>
<form action="register.php" method="post">
    Username:<br />
    <input type="text" name="username" value="" />
    <br /><br />
    E-Mail:<br />
    <input type="text" name="email" value="" />
    <br /><br />
    Password:<br />
    <input type="password" name="password" value="" />
    <br /><br />
    <input type="submit" value="Register" /> 