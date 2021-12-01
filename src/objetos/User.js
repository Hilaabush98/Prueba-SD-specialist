const { Schema } = require("mongoose");
const {model}=require("mongoose"); 

const  userSchema=new Schema({
    firstname:{
    type:String,
    required:true
    },
    lastname:String,
    age:Number

});

module.export=model('User',userSchema);
