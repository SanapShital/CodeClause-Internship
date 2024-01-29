const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const studentSchema= new Schema({
    name:{
        type:String,
       

    },
    academic:{
        type:String,
        

    },
    regNo:{
        type:String,
        

    },
    prn:{
        type:String,
        

    },
    Surname:{
        type:String,
        

    },
    RollNo:{
        type:String,
        

    },
    FirstName:{
        type:String,
        

    },
    Phone:{
        type:String,
        

    },
    MiddleName:{
        type:String,
        

    },
    Adhar:{
        type:String,
        

    },
    PreferredName:{
        type:String,
        

    },
    Linkdin:{
        type:String,
        

    },
    Prof:{
        type:String,
        

    },
    Gender:{
        type:String,
        

    },
    nationality:{
        type:String,
        

    },
    Tutor:{
        type:String,
        

    },
    DOB:{
        type:String,
        

    },
    Age:{
        type:String,
        

    },
});





const Student =mongoose.model("Student",studentSchema);
module.exports=Student;