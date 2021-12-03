const { Schema } = require("mongoose");
const {model}=require("mongoose"); 

const  empleadosSchema=new Schema({
   
    id_employee:{
    type:Number,
    required:true
    },
    name:String,
    lastname:String,
    email:String,
    nationality:String,
    phone:Number,
    civilstatus:String,
    birthday:Date,
    pass:{type:String,required:true},
    user:String
    

});

module.export=model('Empleados',empleadosSchema);
