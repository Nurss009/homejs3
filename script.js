////1
// let arr = [1,2,3]
// let atr = arr.reverse()
// console.log(atr)

////2
// let arr = [0, 1, false, 2, undefined, '', 3, null]
// console.log(arr.filter(item => !!item))

////3
// let agt =[1, 2, 3, 1, 2]
// function removeDuplicates(arr) {
//     return Array.from(new Set(arr))
// }
// const inputArray = [1, 2, 3, 4, ]
// const resultArray = removeDuplicates((inputArray))
// console.log(resultArray)

////4
// let arr = ['a', 'b', 'c']
// let atr = [1, 2, 3]
// let cs = [...arr,...atr]
// console.log(cs)

////5
// let arr = [1, 2, 3]
// let atr = arr.push(4, 5, 6)
// console.log(arr)

////6
// let arr = [1, 2, 3]
// let atr = arr.unshift(4, 5, 6)
// console.log(arr)

////7
// let arr = [1, 2, 3, 4, 5,]
// let atr = arr.splice(1,2)
// console.log(arr)

////8
// let arr = {js:'test', jq: 'hello', css: 'world'}
// console.log(Object.keys(arr))

////9
// let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// let atr = arr.join(',')
// console.log(atr)

////10
// function toggleCase(inputString) {
//     let result = '';
//     for (let i = 0; i < inputString.length; i++) {
//         const currentChar = inputString[i];
//         if (currentChar === currentChar.toLowerCase()) {
//             result += currentChar.toUpperCase();
//         } else {
//             result += currentChar.toLowerCase();
//         }
//     }
//     return result;
// }
// const input = 'КаЖдЫй ОхОтНиК';
// const toggledString = toggleCase(input);
// console.log(toggledString)
////11
// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2022,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2021,
//         color: "black",
//         price: 60000
//     }
// ]
//
// function filterCarsByPriceAndYear(cars, minPrice, maxPrice) {
//     const filteredCars = cars.filter(car => car.price >= minPrice && car.price <= maxPrice);
//     const carMakes = filteredCars.map(car => car.make);
//     return carMakes;
// }
//
// const filteredMakes = filterCarsByPriceAndYear(cars, 40000, 60000);
//
// console.log(filteredMakes);
