// // // // let movies = [{
// // // //     "title": "The Shawshank Redemption",
    
// // // //     "duration": "PT142M",
    
// // // //     "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    
// // // //     "ratings": [],
    
// // // //     "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
    
// // // //     },  {
// // // //     "title": "The Godfather",
    
// // // //     "duration": "PT175M",
    
// // // //     "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    
// // // //     "ratings": [],
    
// // // //     "watchlist": [62289, 66380, 34139, 6146]
    
// // // //     },  {
// // // //     "title": "The Dark Knight",
    
// // // //     "duration": "PT152M",
    
// // // //     "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    
// // // //     "ratings": [],
    
// // // //     "watchlist": [51417, 62289, 6146, 71389, 7001]
    
// // // //     },  {
// // // //     "title": "Pulp Fiction",
    
// // // //     "duration": "PT154M",
    
// // // //     "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    
// // // //     "ratings": [],
    
// // // //     "watchlist": [7001, 9250, 34139, 6146]
    
// // // //     },  {
// // // //     "title": "Schindler's List",
    
// // // //     "duration": "PT195M",
    
// // // //     "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    
// // // //     "watchlist": [15291, 51417, 7001, 9250, 93707]
    
// // // // }];
// // // // let users = [{
// // // //     "userId": 15291,
    
// // // //     "email": "Constantin_Kuhlman15@yahoo.com",
    
// // // //     "friends": [7001, 51417, 62289]
    
// // // //     },    {
// // // //     "userId": 7001,
    
// // // //     "email": "Keven6@gmail.com",
    
// // // //     "friends": [15291, 51417, 62289, 66380]
    
// // // //     },    {
// // // //     "userId": 51417,
    
// // // //     "email": "Margaretta82@gmail.com",
    
// // // //     "friends": [15291, 7001, 9250]
    
// // // //     },    {
// // // //     "userId": 62289,
    
// // // //     "email": "Marquise.Borer@hotmail.com",
    
// // // //     "friends": [15291, 7001]
    
// // // // }];

// // // // function getUserById(userId){
// // // //     for(let i = 0; i < users.length; i++) {
// // // //         if(users[i].userId === userId) return users[i]
// // // //     }
// // // // }

// // // // function getFriendsOfUser(userId){
// // // //     return getUserById(userId).friends
// // // // }

// // // // function getWatchlistedMoviesOfUser(userId){
// // // //     let watchlistedMovies = []
// // // //     movies.forEach(movie => {
// // // //         if(movie.watchlist.includes(userId)){
// // // //             watchlistedMovies.push(movie.title)
// // // //         }
// // // //     })
// // // //     return watchlistedMovies
// // // // }

// // // // function getWatchlistedMoviesOfUsersFriends(userId){
// // // //     let watchlistedMovies = []
// // // //     getFriendsOfUser(userId).forEach(friend => {
// // // //         watchlistedMovies = [...watchlistedMovies, ...getWatchlistedMoviesOfUser(friend)]
// // // //     })
// // // //     return watchlistedMovies
// // // // }

// // // // function generateArrayFrequencyObject(arr){
// // // //     let frequencies = {}
// // // //     arr.forEach(e => {
// // // //         if(frequencies[e]) frequencies[e]++
// // // //         else frequencies[e] = 1
// // // //     })
// // // //     return frequencies
// // // // }

// // // // function generateOrderedArrayFromFrequencyObject(freqObj){
// // // //     numItems = Object.keys(freqObj).length
// // // //     orderedItems = []
// // // //     currentFrequency = 0
// // // //     while(orderedItems.length < numItems){
// // // //         let arr = []
// // // //         for(let item in freqObj)
// // // //             if(currentFrequency === freqObj[item]) arr.push(item)
// // // //         orderedItems = [...arr.sort(), ...orderedItems]
// // // //         currentFrequency++
// // // //     }
// // // //     return orderedItems   
// // // // }

// // // // function topWatchlistedMoviesAmongFriends(userId){
// // // //     const friendsWatchlistedMovies = getWatchlistedMoviesOfUsersFriends(userId)
// // // //     const movieFrequencyObj = generateArrayFrequencyObject(friendsWatchlistedMovies)
// // // //     const sortedMovies = generateOrderedArrayFromFrequencyObject(movieFrequencyObj)
// // // //     return sortedMovies.slice(0, 4)
// // // // }

// // // // console.log( topWatchlistedMoviesAmongFriends(62289) )




// // // // // console.log("Hello World".length)

// // // // // console.log("Hello"[0])

// // // // // console.log("World"[2])

// // // // // function reverseString(str) {
// // // // //     return str.split("").reverse("").join("");
// // // // // }
// // // // // console.log(reverseString("Dog"))
   
// // // // // console.log("mike".toUpperCase(""))

// // // // // console.log("DANE".toLowerCase(""))

// // // // // console.log("hello".includes("he")) 

// // // // // console.log("hello".indexOf("l"))

// // // // // let name = "Mike"

// // // // // console.log("Hi i'm " + name)

// // // // // let name = "Tom"

// // // // // console.log(`Your name is ${name}`)

// // // // // let user = {
// // // // //     name: "Mike",
// // // // //     isSubscribed: false,
// // // // //     favoriteBooks: [
// // // // //         {
// // // // //             name: "Green Eggs & Ham",
// // // // //             noPages: 40
// // // // //         },
// // // // //         {
// // // // //             name: "Cat in the Hat",
// // // // //             noPages: 33
// // // // //         }
// // // // //     ]
// // // // // }

// // // // // console.log(user.favoriteBooks[0].name)
// // // // // console.log(user.name)

// // // // // function getLast(names) {
// // // // //     return names[names.length - 1]
// // // // // }

// // // // // console.log(getLast(["Mike", "Joe", "Brian"]))


// // // // const doggo = {
// // // //     name: 'Edison',
// // // //     breed: 'Groodle',
// // // //     hobbies: ['walks', 'tennis balls', 'bamboozling']
// // // //   }
  
// // // //   console.log(doggo.name); // -> Edison

// // // //   const me = {
// // // //       age: "28",
// // // //       currentLocation: "Sydney",
// // // //       hobbies: ["Snowboarding", "Surfing", "Mountain Biking"]
// // // //   }

// // // // //   delete me["age"];
// // // // me.hobbies.push("Swimming")
  
// // // // for (i = 0; i < me.hobbies.length; i++) {
// // // // console.log("I like " + me.hobbies[i])
// // // // }

// // // const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
// // // const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
// // // const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
// // // const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };


// // class Dog {
// //     constructor(name, location) {
// //         this.name = name;
// //         this.location = location;
// //         this.walks = [];
// //         this.totals = [];
// //     }


// // speak() {
// //     console.log(`Woof, my name is ${this.name}`)
// //     }


// // walk(location, distance) {
// //     this.walks.push({location: location, distance: distance})
// //     }

// // displayWalks() {
// //     this.walks.forEach(walk => {
// //         console.log(`I went with ${this.name} for a walk at ${walk.location}, and it was ${walk.distance}km long`)
// //     })
    
// // }    

// // totalDistance() {

// // }

// // }

// // let Bailey = new Dog("Bailey", "Sydney");

// // Bailey.speak()

// // Bailey.walk("the National Park", 10)
// // Bailey.walk("Manly Beach", 20)
// // Bailey.walk("the Dog Park", 30)
// // Bailey.displayWalks()
// // Bailey.totalDistance()

// class Movie {
//         constructor(title, duration, rating) {
//             this.title = title;
//             this.duration = duration;
//             this.rating = rating;
//             this.watchCount = 0
//         }

// printMovie() {
//     console.log(`The title of this movie is ${this.title}, it goes for ${this.duration} minutes and is rated ${this.rating}. I've watched it ${this.watchCount} many times`)
// }

// watch() {
//     this.watchCount++
//     }
    
// }

// let movie = new Movie("American Psycho", 101, "R")

// movie.watch()
// movie.watch()
// movie.watch()
// movie.printMovie()
// console.log(movie)

function makeGetRequest(theUrl, callback)
{
  const request = new XMLHttpRequest();
  request.open("GET", theUrl, true);
  request.onload = (res) => callback(res.currentTarget.responseText)
  request.send();
}

function getPokemonStats(pokemonName, callback) {
    makeGetRequest (
        ``
    )
}


makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', 
                (data) => {
                const pokemonObject = JSON.parse(data)
                console.log(pokemonObject)
            }
)








