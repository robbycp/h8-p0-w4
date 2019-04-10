function urutkanAbjad(str) {
    // you can only write your code here!
    // into array 
    var arrStr = [];
    for (var x = 0; x < str.length; x++) {
        arrStr.push(str[x])
    }
    // sorting
    while (true) {
        var counterTrue = 0;
        for (var x = 0; x < arrStr.length - 1; x++) {
            if (arrStr[x] <= arrStr[x + 1]) {
                counterTrue++;
            } else {
                var temp = arrStr[x];
                arrStr[x] = arrStr[x+1];
                arrStr[x+1] = temp;
            }
        }
        if (counterTrue == arrStr.length - 1) {
            // joining string from array for return
            var newStr = "";
            for (var x = 0; x < arrStr.length; x++) {
                newStr += arrStr[x]
            }
            return newStr;
        }
    }
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'