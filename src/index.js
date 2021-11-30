const express=require('express');
const app =express();

const path=require ('path');
//app.set('port',3002);

//settings
app.set('port',process.env.PORT||3030);
app.set('views',path.join(__dirname,'vistas'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//docs staticos
app.use(express.static(path.join(__dirname,'public')));

//rutas
app.use(require('./routes/index'));

//listening
app.listen(app.get('port'),()=>{
console.log("server desplegado en el puerto",app.get('port'));

});