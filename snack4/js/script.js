"use strict";
const teams = [
    {
        teamName: 'Roma',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        teamName: 'Juventus',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        teamName: 'Inter',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        teamName: 'Milan',
        scoredGoals: 0,
        foulRecieved: 0
    },
    {
        teamName: 'Longobarda',
        scoredGoals: 0,
        foulRecieved: 0
    },
];
const min = 0;
const max = 50;
teams.forEach((el)=>{
   el.scoredGoals = getRndInteger(min,max);
   el.foulRecieved = getRndInteger(min,max);
}
);
console.log(teams);

const newTeams = teams.map((el)=>{
    const {teamName,foulRecieved} = el
    const team = {
        teamName,
        foulRecieved
    };
    return team
});
console.log(newTeams)