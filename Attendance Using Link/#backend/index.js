const express = require('express');
const app = express();
const port = 8080;
const path=require("path");
const mongoose = require("mongoose");
const Student = require("./models/student.js");
const methodOverride = require("method-override");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shital');
}
main().then(() => {
    console.log("connected");
})
    .catch((err) => {
        console.log(err);

    })
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")));
app.listen(port, () => {
    console.log("listenining on port");
  });

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/", async(req, res)=>{
    let students= await Student.find({});
    res.render("show.ejs",{students})
   
})
app.get("/register",(req,res)=>{
    res.render("gundu.ejs");
})

app.post("/user",async(req,res)=>{
    const newStudent= new Student(req.body.Student);
    await newStudent.save();  
    res.redirect("/"); 
})
