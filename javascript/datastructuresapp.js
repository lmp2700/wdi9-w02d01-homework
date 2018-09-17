// // Suppose you are tasked with creating some software, and it is up to you to determine which 
// // datatypes and what data structure to use. For each of the following, write which data types 
// // you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
// (i = 'on' || i = 'off')

// A user's email address.
// 'emailaddress@gmail.com'

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// const spaceship {
//     hull: silver,
//     weapon: ['laser blasters', 'tractor beam'],
//     warpDrive: 'FTL'
// }

// A list of student names from our class.
// const students = ['Diedre', 'Donald', 'Steve', 'Tomas']

// A list of student names from our class, each with a location.
// const students = {
//     name: 'Deidre',
//     location: 'Michigan',
// },
// {
//     name: 'Deeter',
//     location: 'Ohio',
// },
// {
//     name: 'Liz',
//     location: 'Wisconsin',
// }

// A list of student names from our class, each with a location and each with a list of 
// favorite tv shows.
// const students = {
//     name: 'Deidre',
//     location: 'Michigan',
//     tvShow: 'Homeland'
// },
// {
//     name: 'Deeter',
//     location: 'Ohio',
//     tvShow: 'Game of Thrones'
// },
// {
//     name: 'Liz',
//     location: 'Wisconsin',
//     tvShow: 'Lost'
// }

// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

// Make an object that is called your name and holds the information about your favorite 
// food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const lizFavorites = {
    food: 'pho',
    hobby: 'crossfit',
    currentlyLiving: 'Aurora',
    favoriteDatatype: 'object'
}

// Write code that will access your hobby from the object that you just created.
console.log(lizFavorites.hobby);
