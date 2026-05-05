/**function cualEsMayor1(a,b){//Forma comun de resolverlo
    if (a>b){
        return a;
    }else if (a===b){
        return "Ninguno es mayor";
    }else{
        return b;
    }
}
let mayor=cualEsMayor1(10,10)
console.log(mayor)*/

function cualEsMayor2(a,b){//Más compacta pero solo tiene dos posibles opciones
    return ( a > b ) ? a : b;
}
let mayor=cualEsMayor2(15,20)
console.log(mayor)