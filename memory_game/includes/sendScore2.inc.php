<?php
	
	session_start(); 
				
	if(isset($_COOKIE['scoreValue'])){
		$score = $_COOKIE['scoreValue'];
	}

	// Create connection
	$conn = new mysqli("localhost:3306", "ersmgr_ersuser", "milkyway5", "ersmgr_user_info");
	// Check connection
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	}
				
	$user = $_SESSION['valid_user'];
	
	$sql = "UPDATE stats SET game2score='$score', game2status='complete' WHERE username='$user'";
				
	if ($conn->query($sql) === TRUE) {
    	echo "<script>console.log('Success');</script>";
	} else {
    	echo "Error updating record: " . $conn->error;
	}
		
	$conn->close();
?>