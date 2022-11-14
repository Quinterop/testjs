//EX2---------------------------

function checkRow(table) {
    for (var i = 0; i < table.length; i++) {
        if (checkNumber(table)) {
            console.log("not valid bc it contains a non-number");
            return false;
        }
        //check if all numbers are different in one dimensional array
        //deep copy array
        var sorted = table.slice(0);
        sorted.sort();

        for (var j = 0; j < sorted.length; j++) {
            if (sorted[j] == sorted[j + 1]) {
                console.log("not valid bc it contains a duplicate number. numbers :");
                console.log(sorted);
                return false;
            }
        }
    }

    return true;
}

function checkNumber(num) {
    if (typeof num != "number") {
        return false;
    }
}

//EX2 tests ---------------------------
//console.log("EX2");
//var row = to_verify[0]; //true
//var row2 = to_verify[8]; //false
//console.log(checkRow(row));
//console.log(checkRow(row2));