"use strict";
const UsuarioController= require('../controllers/usuario-controller'),
         express = require('express'),
         uc = new UsuarioController(),
         router = express.Router();


// RUTAS
// middelawwre paramatros:  PETICION, RESPUESTA Y NEXT
router.get('/', uc.getTodo );
//ruta

router.get('/agregar',uc.addForm);


// AGREAGAR A LA BASE DE DATOS POR POST
router.post('/', uc.save);

// consulta para actualizar los datos
router.get('/editar/:id', (req,res,next)=>{
	let id = req.params.id;
	 req.getConnection((err,conn)=>{
	conn.query('select * from usuario  where id=?',id,(err,data)=>{
		if(!err){
			res.render('editar' , {
				titulo: 'EDITAR USUARIO',
				data: data
			});
		}else{
			console.log(err);
		}
	});
});
	});

// EDITAR LOS DATO S
router.post('/actualizar/:id', uc.save);

// eliminar registro de base de datos
router.post('/eliminar/:id', (req, res, next) => {
	req.getConnection((err, conn) => {
		let id = req.params.id;

		conn.query('DELETE FROM usuario WHERE id = ?', id, (err, data) => {
			if(!err) {
				res.redirect('/');
			} else {
				return next(new Error('Registro no encontrado'));
			}
		});
	});
});


function error404(req,res,next){
	let err = new Error();
	err.status = 404;
	err.statusText = "NOT FOUND";
	res.render('error',{error:err});
}
// manejo de 404
router.use(error404);


module.exports=router;