function cariModus(arr) {
  // you can only write your code here!
  var highestMode = 0;
  var highestCount = 0;

  for (var x = 0; x < arr.length; x++) {
    var oneCount = 0

    for (var y = x; y < arr.length; y++) {
      if (arr[x] == arr[y]) {
        oneCount++
      }
    }

    if (oneCount > highestCount) {
      highestCount = oneCount
      highestMode = arr[x]
    }
  }
  
  if (highestCount == 1 || highestCount == arr.length) {
    return -1
  }

  return highestMode;
}

//TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 10, 4, 5, 2, 4])); // 10
