let car = {
    name:"Toyota",
    model:"Corola",
    year:2008,
    getData:function(){
        return `Name :${this.name} , Model :${this.model} , Year :${this.year}`
    },
};

console.log(car.getData());

// insert O(1)
// LOOKUP O(1)
// DELETE O(1)
// SEARCH O(1)
/* Collesion : problem that affects hash table ,
    because of storing multiple data in the same address beacuse of hashing function
*/

/* 
    Solutions for hash maps collesion : Robin Hod Hashing , Open Addressing , Separate Chaining 
*/

/* 
    Beacouse of collesion the Big O in LOOKUP , DELETE , SEARCH , INSERT :become O(n)
*/

/*
    There is Maps class , Sets : as same as Hash Tables/Objects But with several difference
*/
/**
    Maps : can store keys with any data type , and its orderd in memory 
    Sets : same as Maps but don't store any values 
 */
/**
 * Don't Foget About constructor Function for Objects
 * takes values of properties and intialize them with 'this' keyword
 */

/**
 * in the above case we can't call any property in our class in the getData function
 *  in the case it written with arrow ( anonymous ) expression , because arrow function with 
 *  this keyword only sees the global scope properties not the properties inside our object
 *  
 */