// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let born15 = inventors.filter(function (inventor) {
  if (inventor.year>1500 && inventor.year <1600)
   {return true;}
  else
    {return false;}
})

let alternateborn15 = inventors.filter(inventor=>(inventor.year>1500 && inventor.year<1600))

console.log('\nBorn between 1500 and 1600')
console.table(born15)
console.log('using arrow function')
console.table(alternateborn15)


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

let mapper = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
})
console.log('\nFirst and Last Names of Inventors')
console.log(mapper)

let mapperarrow = inventors.map(inventor=>`${inventor.first} ${inventor.last}`)

console.log('Using arrow function for the same')
console.log(mapperarrow)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

var birthsort=inventors.sort(function (inventorA , inventorB) {
  if(inventorA.year>inventorB.year)
    return -1;
  else
    return 1;
})

console.log('Sorting the birthdates')
console.table(birthsort)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

var hereyears = inventors.reduce(function (total,inventor) {
  return total+ (inventor.passed - inventor.year)
}, 0) //total is the value we are incrementing and 0 is its initial value
console.log('Total years lived')
console.log(hereyears)

// 5. Sort the inventors by years lived

var sortYearLived = inventors.sort((inventorA, inventorB)=>{
  (inventorA.passed - inventorA.year)>(inventorB.passed-inventorB.year)?1:-1;
})

console.log('Sorted by years lived')
console.table(sortYearLived)




// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


/*RUN THIS IN THE BROWSER IN THE ABOVE LINK
var div = document.querySelector('.mw-category')
var links = Array.from(div.querySelectorAll('a')) //since otherwise it will be a NodeList
var de = links.map(link=>link.textContent).filter(function (name) {
  return name.includes('de')
})
*/

// 7. sort Exercise
// Sort the people alphabetically by last name

var alphabeticalSort = people.sort(function (personA , personB) {
  let [afirst , alast] = personA.split(' ')
  let [bfirst , blast] = personB.split(' ')
  return alast>blast?1:-1;//1 means move forward by 1 and -1 means move backward by 1
})
console.log('Sorting names alphabetically')
console.table(alphabeticalSort)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

var sumInstance = data.reduce( function (store, transport) {
    if (!store[transport]) {store[transport]=1;}
    else {store[transport]++}
    return store;
  }
, Object.create(null))

console.log('Instances of data are')
console.log(sumInstance)