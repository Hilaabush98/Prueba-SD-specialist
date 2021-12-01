const personas= require("./objetos/Personas");
const User=require("./objetos/User");
const resolver={

    hello:()=>{
        return 'hello world graphql'
        },
    buscar:()=>{
    return 3

    },
    greet(root,{name},context){
        console.log(context);
    return `hello ${name}!`;
    
    },
    persona(){
    return personas;

    },

    //MUTACION
    createuser({input}){
        console.log(input);
        input._id=personas.length;
        
        personas.push(input);
       return input;
    } 



};



module.exports=resolver;