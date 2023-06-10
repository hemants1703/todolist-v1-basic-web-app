const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`); //  custom module
const port = 3000;

//  the date.ejs module is returning the function as JSON
console.log(date);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));

//  global variables
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get(`/`, (req, res) => {
    res.render(`list`, {
        // listTitle: date.getDay(),
        listTitle: date.getDate(),
        newItem: items,
    });
    // res.write(currentDate === 0 || currentDate === 6 ? `<h1>Yay! It's a weekend!</h1>` : `<h1>Buh! I have to work!</h1>`);
    // res.send();
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.button === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newItem: workItems });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(port, () =>
    console.log(`Express server listening at http://localhost:3000/`)
);
