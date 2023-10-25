"use strict";
const teams = [
    {
        name: 'Roma',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        name: 'Juventus',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        name: 'Inter',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        name: 'Milan',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        name: 'Longobarda',
        scoredGoals: 0,
        foulRecieved: 0
    },
];
const min = 0;
const max = 50;
let teamStats = [];
teams.forEach((el)=>{
   el.scoredGoals = getRndInteger(min,max);
   el.foulRecieved = getRndInteger(min,max);
   teamStats.push(el)
}
)
console.log(teamStats);