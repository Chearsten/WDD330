/* This is a note in JavaScript. This file is externally connected to the HTML*/

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

  const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
  ];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's


  const elderly = inventors.filter(old => old.year < 1600);
  //console.log(elderly);
  for (i=0; i < elderly.length; i++){
    document.getElementById("oldPeople").innerHTML += elderly[i].first + " " + elderly[i].last + "<br>";
  }
 
for (const inventor of elderly) {
  document.getElementById("oldPeople").innerHTML += `${inventor.first} ${inventor.last} <br>`;
}  

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const names = inventors.map(inventor => inventor.first + " " + inventor.last);
  console.log(names);
  for (i=0; i < names.length; i++){
    document.getElementById("inventorNames").innerHTML += names[i] + "<br>";
  }

console.table (inventors);
  

// Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  function compare(a, b) {
      return a.year - b.year;
  //   const yearA = a.year;
  //   const yearB = b.year;
    
  //   let comp = 0;
  //   if (yearA > yearB) {
  //     comp = 1;
  //   }
  //   else if(yearA < yearB) {
  //     comp = -1;
  //   }
  //   return comp;
  }
  inventors.sort(compare);
  console.log(inventors);
  for (i=0; i < inventors.length; i++){
    document.getElementById("happyBirthday").innerHTML += inventors[i].first + " " + inventors[i].last + " " + inventors[i].year + "<br>";
  }

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?

  // 5. Sort the inventors by years lived

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
  ];