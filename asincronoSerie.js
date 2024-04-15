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
    if(n == 0){
        callBackFin();
        return;
    }
    n--;
    func(n, function(){
        serie(n, func, callBackFin);
    })
}

serie(5, escribeTrasDosSegundos, function(){
    console.log('He terminado')
})