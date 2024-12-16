
// function findUniqueElement(arr) {
//     return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))[0];
// }

// const arr = [1, 2, 2, 1, 4, 5, 5];
// console.log(findUniqueElement(arr));






// function juftSonlarYigindisi(massiv1, massiv2) {
//     return [...massiv1, ...massiv2] // Ikkita massivni birlashtiramiz
//         .filter(son => son % 2 === 0) // Faqat juft sonlarni tanlaymiz
//         .reduce((yigindi, son) => yigindi + son, 0); // Juft sonlar yig'indisini hisoblaymiz
// }

// console.log(juftSonlarYigindisi([1, 2, 3, 4], [2, 6, 7, 8])); // Natija: 20






// function engKopTakrorlanganElement(massiv) {
//     const takrorlar = {};
//     let engKop = 0, element;

//     massiv.forEach(son => {
//         takrorlar[son] = (takrorlar[son] || 0) + 1; // Takrorlanish sonini hisoblaymiz
//         if (takrorlar[son] > engKop) {
//             engKop = takrorlar[son];
//             element = son;
//         }
//     });

//     return element; // Eng ko'p uchragan elementni qaytaramiz
// }

// console.log(engKopTakrorlanganElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 3])); // Natija: 1





// function umumiyElementlar(massiv1, massiv2) {
//     return massiv1.filter(element => massiv2.includes(element)); // Birinchi massiv elementlarini ikkinchi massiv bilan solishtiramiz
// }

// console.log(umumiyElementlar([1, 2, 3, 4], [3, 4, 5, 6])); // Natija: [3, 4]







// function calculatePercentages(arr) {
//     const n = arr.length; // Massiv uzunligi
//     let musbat = 0, manfiy = 0, nol = 0;

//     arr.forEach(son => {
//         if (son > 0) musbat++; // Musbat sonlar
//         else if (son < 0) manfiy++; // Manfiy sonlar
//         else nol++; // Nol qiymatlar
//     });

//     return {
//         positive: ((musbat / n) * 100).toFixed(2), // Musbat sonlar foizi
//         negative: ((manfiy / n) * 100).toFixed(2), // Manfiy sonlar foizi
//         zero: ((nol / n) * 100).toFixed(2) // Nol qiymatlar foizi
//     };
// }

// console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0]));





// function engUzunIsmniTop(massiv) {
//     let engUzunIsm = ""; // Boshlang'ich qiymat bo'sh string

//     massiv.forEach(ism => {
//         if (ism.length > engUzunIsm.length) {
//             engUzunIsm = ism; // Agar ism uzun bo'lsa, almashtiramiz
//         }
//     });

//     return engUzunIsm; // Eng uzun ismni qaytaramiz
// }

// const ismlar = ["Ali", "Shahzoda", "Abdulloh", "Madinaxon", "Nuriddin"];
// console.log(engUzunIsmniTop(ismlar)); // Natija: "Madinaxon"
