// function salam(waktu) {
//     console.log(waktu);
//     return function (nama) {
//         console.log(`nama ${nama}, ${waktu}`);
//     }
// }

// let pagi = salam('pagi');

// pagi('henry');

// let nama = 'henry';

// let siang = function (nama) {
//     return console.log(nama);
// }

// siang(nama);

// i = 0;

// function plus() {
//     return ++i;
// }

// console.log(plus());
// console.log(plus());
// console.log(plus());

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);
// console.log(i);

// const i = 0;

// i = 3;

// const p = [1,2,3];

// p.push(1);

// const saya = {
//     name: 'henry',
//     age: 36
// }

// saya.age = 23

// console.log(saya)


// const umur = (nama) => {
//     console.log(nama);
// }

// umur('henry');

// const arr = ['erik', 'adit', 'henry']

// const len = arr.map((name) => ({
//     name: name,
//     length: name.length
// }))

// console.table(len);
// console.log(typeof len);

// const mhs = [
//     {
//         id: 1,
//         nama: 'henry',
//         umur: 19
//     },

//     {
//         id: 2,
//         nama: 'bintang',
//         umur: 18
//     }
// ]

// const printId = mhs => {
//     return `
//         id: ${mhs.id}
//         name: ${mhs.nama}
//         age: ${mhs.umur}`
// }

// for (let i = 0; i < mhs.length; i++) {
//     console.log(printId(mhs[i]));
// }

// mhs.forEach(mhs => {
//     console.log(`
//         id: ${mhs.id}
//         name: ${mhs.nama}
//         age: ${mhs.umur}`
//     );
// })

// const student = {
//     name: 'henry',
//     age: 19,
//     semester: 2,
//     ip: {
//         s1: 4,
//         s2: 4,
//         s3: 3.9,
//         s4: 3.8
//     },
//     nilai: {
//         database: {
//             tugas1: 100,
//             tugas2: 100,
//             tugas3: 95,
//         },
//         web: {
//             tugas1: 87,
//             tugas2: 94,
//             tugas3: 92,
//         }
//     }
// }

// const printScore = ({ name, semester, ip: { s1, s2, s3, s4 }, nilai: { database: { tugas1: dbTugas1, tugas2: dbTugas2, tugas3: dbTugas3 }, web: { tugas1: webTugas1, tugas2: webTugas2, tugas3: webTugas3 } } }) => {
//     const numberBehindDecimal = (floatNumber, decimalBehind) => {
//         return parseFloat(floatNumber.toFixed(decimalBehind));
//     }

//     const gpa = numberBehindDecimal(((s1 + s2 + s3 + s4) / 4), 2);
//     const dbScore = numberBehindDecimal(((dbTugas1 + dbTugas2 + dbTugas3) / 3), 1);
//     const webScore = numberBehindDecimal(((webTugas1 + webTugas2 + webTugas3) / 3), 1);

//     return `Nama saya ${name}, saya semester ${semester}, ip semester 4 saya ${s4}, dan rata-rata ip saya ${gpa}, nilai tugas database saya ${dbScore}, dan nilai tugas web saya ${webScore}`;
// }

// console.log(printScore(student));


// function accum(...numbers) {
//     return numbers.reduce((acc, numberValue) => acc + numberValue);
// }

// console.log(accum(1,2,3,4,5));

// const student = {
//     name: 'henry',
//     age: 19,
//     semester: 2
// }

// for (properties in student) {
//     console.log(`${properties}: ${student[properties]}`);
// }

// const fun = {
//     name: 'henry',
//     class: 'imt',
//     semester: 2,
//     ip: 4
// }

// const {name, semester} = fun;

// console.log(semester);