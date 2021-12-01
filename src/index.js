
const express=require('express');
const app =express();
const {graphqlHTTP}=require('express-graphql');
const resolver = require('./resolvers');
const schema=require('./schema');
const conexion =require('./database');

const path=require ('path');


conexion();
//app.set('port',3002);

//settings
app.set('port',process.env.PORT||3030);
app.set('views',path.join(__dirname,'vistas'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//docs staticos
app.use(express.static(path.join(__dirname,'public')));

//variable



//rutas
app.use(require('./routes/index'));

app.use('/graphql',graphqlHTTP({
graphiql:true,
schema:schema,
rootValue:resolver,
    context:{
        meesageId:'test'

    }

}));

//listening
app.listen(app.get('port'),()=>{
console.log("server desplegado en el puerto",app.get('port'));

});