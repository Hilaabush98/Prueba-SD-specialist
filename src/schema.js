const {buildSchema}=require('graphql');


var schema= buildSchema(`
type Query{
    hello:String
    buscar:Int
}

`);



module.exports=schema;
