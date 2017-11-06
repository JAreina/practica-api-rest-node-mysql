"use strict"

const app = require('./app'),
         server= app.listen( app.get('port'), () =>
         	console.log(`Iniciando API REST Express con MySQL en puerto ${app.get('port')}`) );
