//EX3---------------------------

function checkAllRows(table) {
    for (var i = 0; i < table.length; i++) {
        var row = table[i];
        if (!checkRow(row)) {
            console.log("Row " + i + " is not valid");
            displayResult(false, "Row " + i + " is not valid", row);
            return false;
        }
    }
    return true;
}

function checkAllColumns(table) {
    for (var i = 0; i < table.length; i++) {
        var column = new Array(9);
        for (var j = 0; j < table[i].length; j++) {
            column[j] = table[j][i];
        }

        if (!checkRow(column)) {
            console.log("Column " + i + " is not valid");
            displayResult(false, "Column " + i + " is not valid", column);
            console.log(column);
            return false;
        }
    }
    return true;
}

function checkAllSquares(table) {
    var k = 0;
    var l = 0;
    var m = 0;
    for (var xi = 0; xi < 3; xi++) {
        l = 0;
        for (var yi = 0; yi < 3; yi++) {
            var square = new Array(9);
            m = 0;
            for (var i = 0; i < 3; i++) {

                for (var j = 0; j < 3; j++) {
                    square[m] = table[i + k][j + l];
                    m++;
                }

            }
            if (!checkRow(square)) {
                console.log("square " + xi + " " + yi + " is not valid");
                displayResult(false, "square " + xi + " " + yi + " is not valid", square);
                console.log(square);
                return false;
            }
            l += 3;
        }
        k += 3;
    }
    return true;
}

function checkAll(table) {
    if (checkAllRows(table) && checkAllColumns(table) && checkAllSquares(table)) {
        console.log("All is valid");
        displayResult(true, "The table is correct",0);
        return true;
    }
    console.log("All is not valid");
    return false;
}


function displayResult(status, message, table) {
    if (status) {
        //display  " the table is correct"
        document.getElementById("result").innerHTML = "The table is correct";
    } else {
        //display message and table in result div
        document.getElementById("result").innerHTML = message;
        var tableres = document.getElementById("tableres");
        for (var i = 0; i < table.length; i++) {
            var row = tableres.insertRow(i);
            var cell = row.insertCell(0);
            cell.innerHTML = table[i];
          
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


//EX3 tests ---------------------------
//console.log("EX3 rows");
//console.log(checkAllRows(to_verify));
//console.log(to_verify);
//console.log(" columns");
//console.log(checkAllColumns(to_verify));
//console.log(" squares");
//console.log(checkAllSquares(to_verify));
console.log(checkAll(to_verify));