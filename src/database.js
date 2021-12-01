const mongoose =require('mongoose');



 async function conexion(){
try {
    
    await mongoose.connect('mongodb://localhost/CRUD-user',{
        useNewUrlParser:true

    })
    console.log('conectado a la base de datos');

} catch (error) {
    console.log("error al conectar con la base de datos");
    console.log(error);
}
};

module.exports=conexion;