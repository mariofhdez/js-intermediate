"use strict";

console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000)
}

escribeTrasDosSegundos('Hola mundo', function(){
    console.log('fin1');
    escribeTrasDosSegundos('texto 2', function(){
        console.log('fin2');
    });
});

