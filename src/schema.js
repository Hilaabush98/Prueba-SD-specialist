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
input EmpleadoInput{

        id_employee:Int!
        name:String
        lastname:String
        email:String
        nationality:String
        phone:Int
        civilstatus:String
        birthday:String
        pass:String!
        user:String!
}
type Empleado{

        id_employee:ID
        name:String
        lastname:String
        email:String
        nationality:String
        phone:Int
        civilstatus:String
        birthday:String
        pass:String!
        user:String!
}
type Mutation{
    createPersona(input: PersonaInput): persona
    RegisterEmployee(input:EmpleadoInput):Empleado
}

`);



module.exports=schema;
