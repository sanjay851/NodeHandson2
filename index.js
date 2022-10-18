//it will load the express package in our app
var express = require("express"); 
console.log('hi express');

//Creating app object
const app = express(); //this express function returns us app object
// const app = require("express")(); //another way of writing
//creating variable for port
const port = 3055; 
//creating route handlers
app.get("/", function (req, res) {
  res.send("Hi Server");
  //res.send(); --> res.write(); + res.end();
});
app.get("/api/main", function (req, res) {
  res.send(
    " <h1>Express</h1><h2>Express is a framework and It is the most popular Node web framework.It provides a robust set of features to develop web and mobile applications.Express helps rapid development of Node based Web applications.</h2>"
  );
});

app.listen(port);//here i use variable name for port