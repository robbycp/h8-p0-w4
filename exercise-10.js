function changeMe(arr) {
    // you can only write your code here!
    var obj = {};
    var todayYear = new Date().getFullYear();
    for (var x = 0; x < arr.length; x++) {
        var firstLastName = arr[x][0] + " " + arr[x][1];
        obj[firstLastName] = {};
        obj[firstLastName].firstName = arr[x][0];
        obj[firstLastName].lastName = arr[x][1];
        obj[firstLastName].gender = arr[x][2];
        if (!arr[x][3] || arr[x][3] > todayYear) {
            obj[firstLastName].age = "Invalid Birth Year";    
        } else {
            obj[firstLastName].age = todayYear - arr[x][3];
        }
    }
    console.log(obj);
    return obj;
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""