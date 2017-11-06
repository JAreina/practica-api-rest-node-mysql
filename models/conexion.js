"use strict"


const mysql= require('mysql'),

	conf = require('./DBconf'),
	dbOptions ={
		host: conf.mysql.host,
		user:conf.mysql.user,
		password: conf.mysql.password,
		port: conf.mysql.port,
		database:conf.mysql.db
	},
	conn= mysql.createConnection(dbOptions);

       conn.connect((err)=>{
                  return (err)
                                  ? console.log(`ERROR DE CONEXION A MYSQLE : ${err.starck}`)
                                  :  console.log(`CONEXION ESTABLECIDA Nº : ${conn.threadId}`)
       });
module.exports= conn;