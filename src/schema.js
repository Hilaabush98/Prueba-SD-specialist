const {buildSchema}=require('graphql');



var schema= buildSchema(`
type Query{
    hello:String
    buscar:Int
    greet(name:String!):String
    persona:[persona]
}
type persona{
    _id: ID
    nombre:String!
    descripcion:String!
    numero:Int
}
input PersonaInput{

    nombre:String!
    descripcion:String!
    numero:Int
}
type Mutation{
    createuser(input: PersonaInput): persona
   
}

`);



module.exports=schema;
