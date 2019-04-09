function cariMedian(arr) {
    // you can only write your code here!
    var arr_len = arr.length;
    var mid_index = 0;
    if (arr_len % 2 == 0) {
        mid_index = (arr_len / 2) - 1;
        return (arr[mid_index + 1] + arr[mid_index]) / 2;
    } else {
        mid_index = Math.floor(arr_len / 2);
        return arr[mid_index];
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5