"use strict";

const conn = require('./conexion');

class UsuarioModel{
	getTodo(cb){
            conn.query("select * from usuario",cb);
	}

	getUno(id,cb){
conn.query('select  *  from usuario  where id = ?',id,cb);
	}

//si no existe insert, si no actualiza
   save(data,cb){
conn.query('select * from usuario where id = ?', data.id, (err, rows) => {
			console.log(`Número de registros: ${rows.length}`);

			if(!err)
				return ( rows.length == 1 )
					? conn.query('update usuario SET ? where id = ?', [data, data.id], cb)
					: conn.query('insert into usuario SET ?', data, cb);
		});
   }

   delete(id,cb){
         conn.query('delete from usuario where id = ?',id, cb) ;
         }
}

module.exports = UsuarioModel;