const students = [
    {
        id:'213',
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id:'110',
        name: 'Paola Cortellese',
        grades: 96
    },
    {
        id:'250',
        name: 'Andrea Montegna',
        grades: 48
    },
    {
        id:'145',
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id:'196',
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id:'102',
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id:'120',
        name: 'Francesca da Polenta',
        grades: 84
    }
];

const newCourse = students.map((students)=>{
    return (students.name).toLocaleUpperCase();
});
console.log(newCourse);

const goodStudents = students.filter((students)=> students.grades > 70);
console.log(goodStudents);

const id120Plus = goodStudents.filter((students)=> students.id > 120);
console.log(id120Plus);