const fs = require("fs");
const util = require("util");

  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

readFileAsync("./db/db.json", "utf8").then(data => {
  // Parse the JSON string to an object
  const notes = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // For each element in animal
  notes.forEach(function(note) {
    if (note.species === "dog") {
      dogs.push(note);
    } else if (note.species === "cat") {
      cats.push(note);
    }
  });

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  writeFileAsync("dogs.json", dogJSON).then(function() {
    console.log("Successfully wrote to dogs.json file");
  });

  writeFileAsync("cats.json", catJSON).then(function() {
    console.log("Successfully wrote to cats.json file");
  });
});
