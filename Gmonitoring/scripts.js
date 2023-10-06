function updateDatabase(action, id) {
    console.log("Action: " + action);
    console.log("ID: " + id);

    var amount = document.getElementById("amountInput").value;


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "update.php", true);



    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


    var data = "action=" + action + "&amount=" + amount + "&id=" + id;


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            alert(xhr.responseText); 
        }
    };


    xhr.send(data);
}
