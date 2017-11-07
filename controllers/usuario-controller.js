"use strict";

const UsuarioModel = require('../models/usuario-model'),
      um= new UsuarioModel();


class UsuarioController{

getTodo(req,res,next){

 	            um.getTodo((err,data)=>{
                      if(!err){
                      	res.render('index',{
               		      titulo: "DATOS",
               		      data:data
               		      });
                      }
             });
}

	getUno(req,res,next){
        let id = req.params.id;
         console.log(id);

        um.getUno(id, (err,data)=>{
	       if(!err){
			res.render('editar' , {
				titulo: 'EDITAR USUARIO',
				data: data
			});
		}
})

	}

//si no existe crea, si no actualiza
   save(req,res,next){

   		let usuario = {
                id: (req.body.id || 0),
         		clave: req.body.password,
         		nombre: req.body.nombre,
         		correo: req.body.correo,
         		ciudad: req.body.ciudad
         	};

console.log(usuario);

um.save(usuario, (err) => {
	if(!err) {
		res.redirect('/');
	} else {
		return next( new Error('Registro no salvado') );
	}
});

   }

   delete(req,res,next){

		let id = req.params.id;
          console.log("ID A BORRAR" +id);
          um.delete(id, (err,data)=>{
          	if(!err) {
				res.redirect('/');
			} else{
				res.render('error',err)
			}
		
		
		});


   }

   addForm(req,res,next){
          res.render('add',{ // VISUALIZA LA VISTA ADD.PUG
        	title: 'AGREGAR USUARIO'
        });
   }


   error(req, res, next) {

	let err = new Error();
	err.status = 404;
	err.statusText = 'NOT FOUND';

	res.render('error', {error: err});
}
}


module.exports = UsuarioController;