"use strict";

const conn = require('./conexion');

class UsuarioModel{
	getTodo(cb){
            conn.query("select * from usuario",cb);
	}

	getUno(id,cb){

	}

//si no existe crea, si no actualiza
   save(data,cb){
conn.query('SELECT * FROM usuario where id = ?', data.id, (err, rows) => {
			console.log(`Número de registros: ${rows.length}`);

			if(!err)
				return ( rows.length == 1 )
					? conn.query('UPDATE usuario SET ? WHERE id = ?', [data, data.id], cb)
					: conn.query('INSERT INTO usuario SET ?', data, cb);
		});
   }

   delete(id,cb){

   }
}

module.exports = UsuarioModel;