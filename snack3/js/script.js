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

const weights = [];
bikeArray.forEach((el,index)=>{
    const {weightInKG} = bikeArray[index];
    weights.push(weightInKG);
 }
);
console.log(weights);

const minWeightBike = bikeArray.filter((element)=> element.name && element.weightInKG === Math.min(...weights));
console.log(minWeightBike);
/* console.log(minWeightBike[0].name) */
console.log(`The bike ${minWeightBike[0].name}is the less heavy with its ${minWeightBike[0].weightInKG} kg.`);