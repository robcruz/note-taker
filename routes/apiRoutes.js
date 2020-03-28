const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
console.log('starting api routes')

module.exports = app => {
    app.get("/api/notes/", (req, res) => {


        res.json([{"title":"Test Title","text":"Test text"}])


        // readFileAsync("../db/db.json", "utf8").then(data => {
        //     // Parse the JSON string to an object
        //     console.log(data);
        //     const notes = JSON.parse(data);
        //     console.log(notes);
        //     res.json(notes)
        //
        // });
    })
};




