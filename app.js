"use strict";

// plugin usados
const express = require('express'),
	pug = require('pug'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'), //variable oculta  _method para usar metodos de rest post, get , put , delete
	favicon = require('serve-favicon')(`${__dirname}/public/favicon.ico`),
	publicDir = express.static(`${__dirname}/public`),  // archivos de carpeta publica
	viewDir = `${__dirname}/public/views`,// directorio de vistas
	//puerto applicacion
	port = (process.env.PORT || 2222),
  routes= require('./routes/usuario-router');



let app = express();

// node .. metodos set -- establecer parametros
//                          get
//                            use


app.set( 'views', viewDir ); //
app.set( 'view engine', 'pug' ); // motor de vistas
app.set( 'port', port );  // puerto  2222


// definir middleware
app.use( bodyParser.json() ); // para manipular el envio en formato json
app.use( bodyParser.urlencoded({ extended: false }) );//
app.use( publicDir );
app.use( favicon );
app.use(morgan('dev')); // mensajes en la consola de las peticiones al server
app.use(routes);
app.use(restFul);


module.exports= app;
