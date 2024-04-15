"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function (moduleName, callBack) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    fs.readFile(fichero, 'utf8',function(err, data){
        if(err){
            callBack(err);
            return;
        }

        //data = data + '---';  //Prueba error forzado para parsearJson

        //si no ha habido error
        //convertir a objeto

        var packageJson;
        try{
            packageJson = JSON.parse(data);

        } catch (e){
            callBack('Error al parsear ' + fichero);
            return;
        }

        if(packageJson && !packageJson.version){ 
            callBack('No se encuentra la etiqueta versión en ' + fichero);
            return;
        }

        //Llamamos callback de finalizacion
        callBack(null,packageJson.version);

    });
};

//uso de la funcion
var modulo = 'chance';
versionModulo(modulo, function(err, version){
    if(err) {
        console.log('Hubo un error: ', err);
        return;
    }
    console.log('Es la version del modulo ' + modulo + ' es: ' + version);

});