/**function Saludar (nombre){
    console.log("Hola Aprendiz "+ nombre)
}

Saludar();*/


/**function sandwich (ingrediente){
    if (ingrediente === "pollo"){
        console.log("Su sandwich es de ", ingrediente)
    } else if (ingrediente === "carne")
        console.log("Su sandwich es de ", ingrediente)
};

sandwich("pollo");*/

/**function simular_energia (energia){
    while (true){
        if (energia>0){
        console.log("Te queda ", energia, "puedes seguir jugando.")
        energia--
    } else{
        console.log("Te quedaste sin energia, para seguir jugando recarga.")
        break}
    }
}
simular_energia(9)*/

function opciones(orden) {
    let numeros = [2, 3, 5, 7, 9, 11, 13]
    if (orden===1){
    //Sirve para contar la cantidad de datos en una lista
    console.log(numeros.length);
    
    }if(orden===2){
    //Agrega un nuevo dato a la ultima parte de la lista
    numeros.push(15)
    console.log(numeros)
    console.log(numeros.length)

    }else if(orden===3){


    }else if(orden===4){


    }else if(orden===5){


    }else if(orden===6){

    }

    //Sirve para eliminar el último numero de la lista
    numeros.pop()
    console.log(numeros)
    console.log(numeros.length)
}
