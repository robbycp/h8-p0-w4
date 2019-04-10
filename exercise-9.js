function checkAB(num) {
    // you can only write your code here!
    var arrIndexB = [],
        arrIndexA = [];
    for (var x = 0; x < num.length; x++) {
        if (num[x] == 'b') {
            arrIndexB.push(x);
        } else if (num[x] == 'a') {
            arrIndexA.push(x);
        }
    }
    for (var indexA = 0; indexA < arrIndexA.length; indexA++) {
        for (var indexB = 0; indexB < arrIndexB.length; indexB++) {
            if (Math.abs(arrIndexB[indexB] - arrIndexA[indexA]) == 4) {
                return true;
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false