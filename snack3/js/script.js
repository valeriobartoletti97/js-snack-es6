"use strict";
const bikeArray = [
    {
        name: 'Trek Domane',
        weightInKG: 30
    },
    {
        name: 'Cannondale ',
        weightInKG: 25
    },
    {
        name: 'Giant Contend',
        weightInKG: 27
    },
    {
        name: 'Decathlon Triban',
        weightInKG: 30
    },
];

const Weights = [];
bikeArray.forEach((el,index)=>{
    const {weightInKG} = bikeArray[index];
    Weights.push(weightInKG);
 }
);
console.log(Weights);