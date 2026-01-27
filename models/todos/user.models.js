import mongoose  from "mongoose"

const userSchema = new mongoose.Schema({

    username :{
        type : String ,
        required : true ,
        unique : true,
        lowercase: true,
    } ,
    email : { 
        type : String,
        require : true,
        unique : true,
        lowercase : true
    } , 
    password : {
        type : stirng ,
        required : [true, "password is mendatory"]
    }
    
    
},
{
        timestamps : true
    }) // creates a schema 

export const User= mongoose.model("User",userSchema)