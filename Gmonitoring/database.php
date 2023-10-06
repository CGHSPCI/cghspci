<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "gmonitoring_db";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Could not connect to the database: " . mysqli_connect_error());
}
?>
