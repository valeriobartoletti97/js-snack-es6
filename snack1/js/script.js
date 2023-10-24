const nameGuests = [
    'Brad Pitt',
     'Johnny Depp',
     'Lady Gaga', 
     'Cristiano Ronaldo', 
     'Georgina Rodriguez', 
     'Chiara Ferragni', 
     'Fedez',
     'George Clooney',
     'Amal Clooney', 
     'Maneskin'
];
console.log(nameGuests)

const guestsList = nameGuests.map((name,index)=>{
    let guest = {};
    guest.tableName = 'Vip';
    guest.guestName = name;
    guest.place = index + 1;
    return guest;
})
console.log(guestsList)