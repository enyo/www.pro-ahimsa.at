<?php

/* Subject and email variables */

	$emailSubject = 'Newsletter subscription!';
	$webMaster = 'pro-ahimsa@gmx.at';
	
/* Gathering data variables */

	$emailField = $_POST['email'];

	$body = <<<EOD
<br><hr><br>
Email: $email; <br>
EOD;

	$headers = "From: &email\r\m";
	$header .=  "Content-type: text/html\r\n";
	$success = mail($webMaster, $emailSubject, $body, $headers);
	
/* Results rendered as HTML */
header( "refresh:0;url=http://pro-ahimsa.at" ); 
 
echo 'Danke!<br>Sie werden gleich weitergeleitet. Sollte dies nicht der Fall sein, clicken sie bitte <a href="http://pro-ahimsa.at">hier</a>.';
?>