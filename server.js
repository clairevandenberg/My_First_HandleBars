const express = require('express')
const handlebars = require('express-handlebars')
const app = express ();

app.engine("handlebars", handlebars({}));

//now telling app to use this
app.set("view engine", "handlebars");
app.set ("views", "views");

const icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];

var PORT = process.env.PORT || 3000;

//all objects going to template go here.
/// taking template name. will go to views and add handlebars. 
// second one is object that is passing perameter i.e. icecream variable.

app.get("/icecreams", (request, response) => {

response.render("icecreams_list", {
    icecreams: icecreams
    });
});

app.get( "/icecreams/:name", (request, response) => {
  //.find = looking for icecream that matches name = easier than doing a loop.
const icecream = icecreams.find(icecreams => icecreams.name === request.params.name);

console.log(icecream);
console.log(request.params.name);

response.render("icecreams",icecream);
});

const port = 3000;
app.listen (port, () => {console.log ("listening on port" + port)});
