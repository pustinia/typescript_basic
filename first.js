'use strict';
console.log("Hello Typescript!!");
// function greet (person, date){
//     console.log(`Hello ${person}, today is ${date} !`);
// }
// greet(`Mr Sun`);
function greeting(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString, " !"));
}
greeting("Mr Sun", new Date());
