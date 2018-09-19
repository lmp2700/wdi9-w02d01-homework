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

// // 2. Take it Easy
// // Make an array that holds all of the colors of the rainbow.
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// // Write code that will access "blue" from the rainbow array.
// console.log(rainbow[4]);

// // Make an object that is called your name and holds the information about your favorite 
// // food, a hobby, the name of the town that you live in currently, and your favorite datatype.

// const lizFavorites = {
//     food: 'pho',
//     hobby: 'crossfit',
//     currentlyLiving: 'Aurora',
//     favoriteDatatype: 'object'
// }

// // Write code that will access your hobby from the object that you just created.
// console.log(lizFavorites.hobby);


// 3. Crazy Object!
const crazyObject = {
  taco: [
          {
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
          },
          {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", 
                    "omg my mouth is burning"] //5
          },
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", 
             "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

Use crazyObject to log the following
"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

🔴 Commit: "crazyObject"



// const inception = {
//   reality: {
//   dreamLayer1: {
//   dreamLayer2: {
//   dreamLayer3: {
//   dreamLayer4: {
//   dreamLayer5: {
//   dreamLayer6: {
//   limbo: "Joseph Gordon Levitt"
//                          }
//                       }
//                   }
//               }
//           }
//       }
//   }
// } //7
// Change the value of limbo to null. This is changing JGL to Null
// inception.limbo = 'null';
// console.log(inception);

// 🔴 Commit: "object-ception"

// 5-7. Bond Films
// Copy the following bondFilms array of objects above into your js file. 
// Use loops and conditionals and functions in order to complete the below:

// const bondFilms = [
//   { "title" : "Skyfall", 
//     "year" : 2012, 
//     "actor" : "Daniel Craig", 
//     "gross" : "$1,108,561,008" }, // 0
//   { "title" : "Thunderball", 
//     "year" : 1965, 
//     "actor" : "Sean Connery", 
//     "gross" : "$1,014,941,117" }, // 1
//   { "title" : "Goldfinger", 
//     "year" : 1964, 
//     "actor" : "Sean Connery", 
//     "gross" : "$912,257,512" }, // 2
//   { "title" : "Live and Let Die", 
//     "year" : 1973, 
//     "actor" : "Roger Moore", 
//     "gross" : "$825,110,761" }, // 3
//   { "title" : "You Only Live Twice", 
//     "year" : 1967, 
//     "actor" : "Sean Connery", 
//     "gross" : "$756,544,419" }, // 4
//   { "title" : "The Spy Who Loved Me", 
//     "year" : 1977, 
//     "actor" : "Roger Moore", 
//     "gross" : "$692,713,752" }, // 5
//   { "title" : "Casino Royale", 
//     "year" : 2006, 
//     "actor" : "Daniel Craig", 
//     "gross" : "$669,789,482" }, // 6
//   { "title" : "Moonraker", 
//     "year" : 1979, 
//     "actor" : "Roger Moore", 
//     "gross" : "$655,872,400" }, // 7
//   { "title" : "Diamonds Are Forever", 
//     "year" : 1971, 
//     "actor" : "Sean Connery", 
//     "gross" : "$648,514,469" }, // 8
//   { "title" : "Quantum of Solace", 
//     "year" : 2008, 
//     "actor" : "Daniel Craig", 
//     "gross" : "$622,246,378" }, // 9
//   { "title" : "From Russia with Love", 
//     "year" : 1963, 
//     "actor" : "Sean Connery", 
//     "gross" : "$576,277,964" }, // 10
//   { "title" : "Die Another Day", 
//     "year" : 2002, 
//     "actor" : "Pierce Brosnan", 
//     "gross" : "$543,639,638" }, // 11
//   { "title" : "Goldeneye", 
//     "year" : 1995, 
//     "actor" : "Pierce Brosnan", 
//     "gross" : "$529,548,711" }, // 12
//   { "title" : "On Her Majesty's Secret Service", 
//     "year" : 1969, 
//     "actor" : "George Lazenby", 
//     "gross" : "$505,899,782" }, // 13
//   { "title" : "The World is Not Enough", 
//     "year" : 1999, 
//     "actor" : "Pierce Brosnan", 
//     "gross" : "$491,617,153" }, // 14
//   { "title" : "For Your Eyes Only", 
//     "year" : 1981, 
//     "actor" : "Roger Moore", 
//     "gross" : "$486,468,881" }, // 15
//   { "title" : "Tomorrow Never Dies", 
//     "year" : 1997, 
//     "actor" : "Pierce Brosnan", 
//     "gross" : "$478,946,402" }, // 16
//   { "title" : "The Man with the Golden Gun", 
//     "year" : 1974, 
//     "actor" : "Roger Moore", 
//     "gross" : "$448,249,281" }, // 17
//   { "title" : "Dr. No", 
//     "year" : 1962, 
//     "actor" : "Sean Connery", 
//     "gross" : "$440,759,072" }, // 18
//   { "title" : "Octopussy", 
//     "year" : 1983, 
//     "actor" : "Roger Moore", 
//     "gross" : "$426,244,352" }, // 19
//   { "title" : "The Living Daylights", 
//     "year" : 1987, 
//     "actor" : "Timothy Dalton", 
//     "gross" : "$381,088,866" }, // 20
//   { "title" : "A View to a Kill", 
//     "year" : 1985, 
//     "actor" : "Roger Moore", 
//     "gross" : "$321,172,633" }, // 21
//   { "title" : "License to Kill", 
//     "year" : 1989, 
//     "actor" : "Timothy Dalton", 
//     "gross" : "$285,157,191" } // 22
// ];

// // Create a new array called bondTitles with only the titles of the Bond films, 
// // and console.log the new array.

// // const bondTitles = Object.keys(bondFilms);
// // console.log(bondTitles)

// // const keys = Object.keys("title");
// // for(let i = 0; i < keys.length; i++) {
// //   console.log(bondFilms[keys[i]]);
// // }

// // for(i = 0; i < bondFilms.length; i++) {
// //   // const bondTitles = {};
// //   bondTitles = bondFilms[Object.keys("title")[i]];
// //   console.log(bondTitles);
// // }

// // Object.keys() will return an array of keys
// // console.log(Object.keys("movie"));

// // const keys = Object.keys(movie);

// // for (var i=0; i < keys.length; i++) {
// // 	console.log(movie[keys[i]]);
// // }

// // 🔴 Commit: "bondTitles array"

// // for (let prop in bondFilms) {
// //       console.log(prop, bondFilms["title"]);
// //   }

// // Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// // 🔴 Commit: "oddBonds"


// // Determine the total cumulative gross of the Bond franchise, and console.log the result.
// // Hint: To make the grosses into usable numbers, look into the .replace Javascript method 
// // (there are many ways to do this, however). Look into parseInt() also.
// // 🔴 Commit: "bond films gross"
// let bondGross = "";
// function convert(bondFilms) {
//   let result = "";
//   for(let i=; i < bondFilms.length; i++) 
//   if(!isNaN(bondFilms[i])) {
//     result += bondFilms[i];
//     }
//     return parseInt(result);
//   }
//   console.log(bondGross)

// --> ANSWER FOUND ONLINE <--
// let cumulativeGross = 0;
// for(i = 0; i < bondFilms.length; i ++){
//     let newStr = bondFilms[i].gross.replace(/,/gi, "").replace("$",""); 
//     // regular expression / / is looking to match the pattern given - it is looking 
//     // for the item within the / / and replacing it with the item following in the code 
//     // line. In this case , is followed by "" so , will be replaced by "". Additionally,
//     // "$" is being replaced by ""
//     // .replace will belong to any method. First argument will be replaced by the 2nd argument
//     cumulativeGross += parseInt(newStr, 10)
// }
// console.log(cumulativeGross);