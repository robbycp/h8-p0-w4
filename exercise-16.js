function graduates (students) {
    // Code disini
    // Student dapat dinyatakan lulus apabila score lebih besar dari 75.
    // Masukkan name dan score dari student ke class yang dia ikuti.
    // Student yang tidak lulus tidak perlu ditampilkan.
    var newObj = {};
    for (var indexStudent = 0; indexStudent < students.length; indexStudent++) {
        if (newObj[students[indexStudent].class] === undefined) {
            newObj[students[indexStudent].class] = [];
        }
        if (students[indexStudent].score >= 75) {
            newObj[students[indexStudent].class].push({
                "name" : students[indexStudent].name,
                "score": students[indexStudent].score,
            });
        }
    }
    return newObj;
}
  
console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
    },
    {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
    },
    {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
    },
    {
    name: 'Albert',
    score: 71,
    class: 'wolves'
    },
    {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}