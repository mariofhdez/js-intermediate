"use strict";

var async = require('async');

console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000)
}

//Bucle asincrono en serie
//Llamar a una funcion N veces en serie
//al finalizar llamar callback de finalizacion

var lista = [1,2,'tres',4,5];

async.eachSeries(lista, escribeTrasDosSegundos, function(){
    console.log('He terminado')
})