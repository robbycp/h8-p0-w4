function ubahHuruf(kata) {
    // you can only write your code here!
    var kata_code = []; 
    var char_code = 0;
    for (var x = 0; x < kata.length; x++) {
        // handling other than huruf 
        first_char = kata.charCodeAt(x)
        if (!((first_char >= 65 && first_char <= 90) || (first_char >= 97 && first_char <= 122))) {
            return "Invalid input other than Huruf"
        }

        // Adding one char Code
        char_code = first_char + 1;

        // Handling return to A from Z
        if (char_code > 90 && char_code < 97) { // handling Z to A uppercase
            char_code = 65;
        } else if (char_code > 122) { // handling z to a lowercase
            char_code = 97;
        }
        char_code = String.fromCharCode(char_code);
        kata_code.push(char_code);
    }
    return kata_code.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzzZZZzzz')) // aaaAAAaaa
console.log(ubahHuruf('eio!@#%az')) // Invalid input
console.log(ubahHuruf('eio1sdfji')) // Invalid input
