"use strict";

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

function serie(n, func, callBackFin){
    if(lista.length == 0){
        callBackFin();
        return;
    }
    func(lista.shift(), function(){
        serie(lista, func, callBackFin);
    })
}

var lista = [1,2,3,4,5];

serie(lista, escribeTrasDosSegundos, function(){
    console.log('He terminado')
})