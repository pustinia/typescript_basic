'use strict';

console.log(`Hello Typescript!!`);


// function greet (person, date){
//     console.log(`Hello ${person}, today is ${date} !`);
// }
// greet(`Mr Sun`);

function greeting(person: string, date: Date): void{
    console.log(`Hello ${person}, today is ${date.toDateString} !`);
}
greeting(`Mr Sun`, new Date());
