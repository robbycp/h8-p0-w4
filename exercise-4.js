function cariModus(arr) {
    // you can only write your code here!
    var modObj = {};
    for (var x = 0; x < arr.length; x++) {
        if (!Object.keys(modObj).includes(String(arr[x]))) {
            modObj[arr[x]] = 1;
        } else {
            modObj[arr[x]]++;
        }
    }
    
    // handling error
    if (Object.keys(modObj).length == 1 || arr.length == Object.keys(modObj).length) {
        return -1;
    }

    // get highest mode
    var modNum = 0;
    var highestCount = 0;
    for (var num in modObj) {
        if (highestCount < modObj[num]) {
            highestCount = modObj[num];
            modNum = num;
        }
    }
    return modNum
}

//TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 10, 10, 6, 5])); // 5