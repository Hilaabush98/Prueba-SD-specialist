const personas= require("./objetos/Personas");
const User=require("./objetos/User");
//const Empleados=require("./objetos/empleados.js");
import Empleados from "./objetos/empleados ";
const resolver={

    hello:()=>{
        return 'hello world graphql'
        },
    buscar:()=>{
    return 3

    },
    greet(root,{name},context){
        console.log(context);
    return `hello ${name}`;
     
    },
    persona(){
    return personas;

    },

    //MUTACION
    createuser({input}){
      
       return input;
    }, 
    createpersona({input}){
        console.log(input);
        input._id=personas.length;
        
        personas.push(input);
       return input;
    },
    RegisterEmployee({input}){

    const newEmpleado  = new Empleados(input)
        console.log(newEmpleado);
        return newEmpleado;
        
    }


};



module.exports=resolver;