const express =require('express');
const router =express.Router();
//Despliegue de sitios we

router.get('/',(req,res)=>{

res.render('index.html');

});



module.exports=router;