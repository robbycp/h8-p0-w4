function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktorNum, 
        lowest_faktor = 0;
    for(var x = 1; x <= angka; x++) {
        if (angka % x == 0) {
            faktorNum = (String(x) + String(angka / x)).length;
            if (lowest_faktor > faktorNum || lowest_faktor == 0) {
                lowest_faktor = faktorNum;
            }
        }
    }
    return lowest_faktor;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2