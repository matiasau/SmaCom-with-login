 <?php

    // First we execute our common code to connection to the database and start the session
    require("common.php");
    
	$query = "
			UPDATE user_stats
			SET logoutTime = :time, logoutPositionX = :logoutPositionX, logoutPositionY = :logoutPositionY
			WHERE user_id = :user_id
			ORDER BY event_id DESC
			LIMIT 1
        ";
		
        $query_params = array(
			':user_id' => $_SESSION['user']['id'],
			':time' => time(),
			':logoutPositionX' => '15',
			':logoutPositionY' => '15'
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
	
	
	
    // We remove the user's data from the session
    unset($_SESSION['user']);
	session_unset();
    
    // We redirect them to the login page
    header("Location: index.php");
    die("Redirecting to: index.php"); 