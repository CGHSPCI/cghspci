<?php
require_once('database.php');

if (isset($_POST['action']) && isset($_POST['amount']) && isset($_POST['id'])) {
    $action = $_POST['action'];
    $amount = $_POST['amount'];
    $id = $_POST['id'];  

    if ($action === 'Widraw') {
        $query = "UPDATE gmonitorings SET Amount = Amount - $amount WHERE ID = $id";
    } elseif ($action === 'Deposit') {
        $query = "UPDATE gmonitorings SET Amount = Amount + $amount WHERE ID = $id";
    } elseif ($action === 'Cashin') {
        if ($amount <= 500) {
            $amountToAdd = 10;
        } elseif ($amount <= 1000) {
            $amountToAdd = 20;
        } elseif ($amount <= 1500) {
            $amountToAdd = 30;
        } elseif ($amount <= 2000) {
            $amountToAdd = 40;
        } elseif ($amount <= 2500) {
            $amountToAdd = 50;
        } elseif ($amount <= 3000) {
            $amountToAdd = 60;
        } elseif ($amount <= 3500) {
            $amountToAdd = 70;
        } elseif ($amount <= 4000) {
            $amountToAdd = 80;
        } elseif ($amount <= 4500) {
            $amountToAdd = 90;
        } elseif ($amount <= 5000) {
            $amountToAdd = 100;
        } elseif ($amount <= 5500) {
            $amountToAdd = 110;
        } elseif ($amount <= 6000) {
            $amountToAdd = 120;
        } elseif ($amount <= 6500) {
            $amountToAdd = 130;
        } elseif ($amount <= 7000) {
            $amountToAdd = 140;
        } elseif ($amount <= 7500) {
            $amountToAdd = 150;
        } elseif ($amount <= 8000) {
            $amountToAdd = 160;
        } elseif ($amount <= 8500) {
            $amountToAdd = 170;
        } elseif ($amount <= 9000) {
            $amountToAdd = 180;
        } elseif ($amount <= 9500) {
            $amountToAdd = 190;
        } elseif ($amount <= 10000) {
            $amountToAdd = 200;
        }
        
        $query = "UPDATE gmonitorings SET Amount = CASE 
            WHEN ID = 1 THEN Amount - $amount
            WHEN ID = 2 THEN Amount + $amount
            WHEN ID = 3 THEN Amount + $amountToAdd
        END";
    } elseif ($action === 'Cashout') {
        if ($amount <= 500) {
            $amountToAdd = 10;
        } elseif ($amount <= 1000) {
            $amountToAdd = 20;
        } elseif ($amount <= 1500) {
            $amountToAdd = 30;
        } elseif ($amount <= 2000) {
            $amountToAdd = 40;
        } elseif ($amount <= 2500) {
            $amountToAdd = 50;
        } elseif ($amount <= 3000) {
            $amountToAdd = 60;
        } elseif ($amount <= 3500) {
            $amountToAdd = 70;
        } elseif ($amount <= 4000) {
            $amountToAdd = 80;
        } elseif ($amount <= 4500) {
            $amountToAdd = 90;
        } elseif ($amount <= 5000) {
            $amountToAdd = 100;
        } elseif ($amount <= 5500) {
            $amountToAdd = 110;
        } elseif ($amount <= 6000) {
            $amountToAdd = 120;
        } elseif ($amount <= 6500) {
            $amountToAdd = 130;
        } elseif ($amount <= 7000) {
            $amountToAdd = 140;
        } elseif ($amount <= 7500) {
            $amountToAdd = 150;
        } elseif ($amount <= 8000) {
            $amountToAdd = 160;
        } elseif ($amount <= 8500) {
            $amountToAdd = 170;
        } elseif ($amount <= 9000) {
            $amountToAdd = 180;
        } elseif ($amount <= 9500) {
            $amountToAdd = 190;
        } elseif ($amount <= 10000) {
            $amountToAdd = 200;
        }
        
        
        $query = "UPDATE gmonitorings SET Amount = CASE 
            WHEN ID = 1 THEN Amount + $amount
            WHEN ID = 2 THEN Amount - $amount
            WHEN ID = 3 THEN Amount + $amountToAdd
        END";
    }

    $result = mysqli_query($conn, $query);

    if ($result) {
        echo "Database updated successfully.";
    } else {
        echo "Error updating the database: " . mysqli_error($conn);
    }
} else {
    echo "";
}
?>
