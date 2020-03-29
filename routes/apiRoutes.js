const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// console.log('starting api routes')

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        readFileAsync("./db/db.json", "utf8").then(data => {
            const notes = JSON.parse(data);
            console.log(`Read notes: ${JSON.stringify(notes)}`);
            res.json(notes)
        });
    });

    app.post("/api/notes", (req, res) => {
        readFileAsync("./db/db.json", "utf8").then(data => {
            const notes = JSON.parse(data);
            notes.push(req.body)
            writeFileAsync("./db/db.json", JSON.stringify(notes), "utf8");
            console.log(`Saved notes: ${JSON.stringify(notes)}`)
        });
    })
};




