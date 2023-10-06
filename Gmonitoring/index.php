<?php
require_once('database.php');
require_once('update.php');
require_once('function.php');


$query = "SELECT * FROM gmonitorings";
$result = mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gmonitoring</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <br>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Enter Amount" aria-label="Recipient's username with two button addons" id="amountInput">
            </div>
            <div class="row justify-content-center">    
                </div>
            <br>
            <div class="container">
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody id="dataTable">
                <?php
                
                while ($row = mysqli_fetch_assoc($result)):
                    
                ?>
                    <tr>
                        <td><?php echo $row['ID']; ?></td>
                        <td><?php echo $row['Name']; ?></td>
                        <td><?php echo $row['Amount']; ?></td>
                        <td>
                            <button class="btn btn-outline-danger" type="button" onclick="updateDatabase('Widraw', <?php echo $row['ID']; ?>)">Withdraw</button>
                            <button class="btn btn-outline-primary" type="button" onclick="updateDatabase('Deposit', <?php echo $row['ID']; ?>)">Deposit</button>
                            <button class="btn btn-outline-danger" type="button" onclick="updateDatabase('Cashin', <?php echo $row['ID']; ?>)">Cash In</button>
                            <button class="btn btn-outline-primary" type="button" onclick="updateDatabase('Cashout', <?php echo $row['ID']; ?>)">Cash Out</button>
                        </td>
                    </tr>
                <?php endwhile; ?>
                </tbody>
            </table>
            <h3>Capital:</h3>
            <h3 id="totalAmount2">0</h3>
        </div>
    </div>
</div>
<script src="scripts.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>