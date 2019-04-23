function fpb(angka1, angka2) {
    // you can only write your code here!
    var min_val = Math.min(angka1, angka2);
    var fpb_val = 0;
    for(var x = 1; x <= min_val; x++) {
        if(angka1 % x == 0 && angka2 % x == 0) {
            fpb_val = x;
        }
    }
    return fpb_val;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(16, 16)); // 16