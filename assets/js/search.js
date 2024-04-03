const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
// const optionSearch = document.querySelector('#optionSearch');
// const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click',function(){
    selectBox.classList.toggle('active');
});


optionsList.forEach(function(optionsListSingle){
    optionsListSingle.addEventListener('click',function(){
        text = this.textContent;
        soValue.value = text;
        selectBox.classList.remove('active');
    })
});

var optionSearch = document.getElementById('optionSearch');
var options = document.getElementById('tableList');

optionSearch.addEventListener('keyup', function () {
    var filter, li, i, textValue;
    filter = optionSearch.value.toUpperCase();
    li = options.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});

options.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI' && event.target.dataset.target) {
        var targetTable = event.target.dataset.target;
        showTable(targetTable);
    }
});

function showTable(tableId) {
    // Hide all tables
    var tables = document.querySelectorAll('.table');
    tables.forEach(function (table) {
        table.style.display = 'none';
    });

    // Show the selected table
    var selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.style.display = 'table';
    }
}

