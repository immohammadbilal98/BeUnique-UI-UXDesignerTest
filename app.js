//Import
const express = require("express");
const ejs = require("ejs");
const path = require("path");
//=====================================

const app = express();

//PORT
let port= 4080;

//View Engine
app.set('view engine', 'ejs');

//Static Folder
app.use(express.static(path.join(__dirname, "public")));  

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//PATH FILES ==================================================================
//HOME
app.get("/",function(req,res){
    res.render("home");               
});
//=================================================

   
//Listen on port 4000     
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
}); 

