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

	}

//si no existe crea, si no actualiza
   save(req,res,next){

   		let usuario = {
                id:(req.body.id || 0),
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

   }

   addForm(req,res,next){
          res.render('add',{ // VISUALIZA LA VISTA ADD.PUG
        	title: 'AGREGAR USUARIO'
        });
   }
}


module.exports = UsuarioController;