//EX1---------------------------

var to_verify = new Array(9);
for (var i = 0; i < to_verify.length; i++) {
    to_verify[i] = new Array(9);
}

function adaptTable(table) {
    for (var i = 0; i < table.length; i++) {
        var splitted = table[i].split(" ");
        for (var j = 0; j < table.length; j++) {
            to_verify[i][j] = splitted[j];
        }
    }
}

function displayTable() {
    var table = document.getElementById("table");
    for (var i = 0; i < to_verify.length; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < to_verify.length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = to_verify[i][j];
        }
    }
}

//EX1 tests ---------------------------
//console.log("EX1");
adaptTable(array_number);
displayTable();
//console.log(to_verify);