"use strict";

// plugin usados
const express = require('express'),
	pug = require('pug'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'), //variable oculta en el front de la aplicacion llamada '_method' para usar metodos de rest post, get , put , delete

	routes= require('./routes/usuario-router'),
	favicon = require('serve-favicon')(`${__dirname}/public/favicon.ico`),
	publicDir = express.static(`${__dirname}/public`),  // archivos de carpeta publica
	viewDir = `${__dirname}/views`,// directorio de vistas
	//puerto applicacion
	port = (process.env.PORT || 2222);
 



let app = express();

// node .. metodos set -- establecer parametros
//                          get
//                            use


app
.set( 'views', viewDir ) //
.set( 'view engine', 'pug' ) // motor de vistas
.set( 'port', port ) // puerto  2222


// definir middleware
.use( bodyParser.json() ) // para manipular el envio en formato json
.use( bodyParser.urlencoded() )//

.use( publicDir )
.use( favicon )
.use(morgan('dev')) // mensajes en la consola de las peticiones al server
.use( restFul )
.use(routes);



module.exports= app;
