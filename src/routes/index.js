const express =require('express');
const router =express.Router();

//Rutas de despliegue 

router.get('/',(req,res)=>{

res.json({

    message:'Hello world'
})

});



module.exports=router;