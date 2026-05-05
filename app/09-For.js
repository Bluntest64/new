//for (inicializacion=null/**Se crea una variable nueva*/;comparacion=null/**Lo que debe pasar para que el loop se mantenga encendido*/;terminariteracion=null/**Lo que debe pasar para que el loop termine, usualmente lo que aumente el valor de un contador interno o externo*/){break
//Aqui se escrribe todo el resto del contenido ya sean variables, operadores if/else o incluso codigo para alterar el loop
//}

//Tabien puede ser:

/**for (let contador = 1; contador <= 10; contador++)/**El "++" sirve para sumar uno a cualquier variable, esta se va a encargar de ir suuubiendo el contador uno por unohasta llega a 10 en donde gracias a la condicion el loop deja derepetirse*/ /**{
    if (contador === 4) {
        console.log(contador, "Es un número")
    } else if (contador === 6) {
        console.log("Tocó salto de número camarada")
        contador++//Esta linea es como la que está para finalizar el for, lo que hace es agregar una unidad más al contador por lo que pasa del 6 
    } else {
        console.log(contador)
    };
}*/
//Recorrer arrays  con el loop for─────────────────────────────────────────────
/**let animes=["Death_note", "HunterXHunter", "SpyXFamily", "Demon_Slayer", "Evangelion"];
for (let anime of animes.length)/**"for(...of...)Sirve para recorrer varios tipos de datos y obtener los datos almacenados en él{
        console.log(anime)
}*/

let user={//(id,name,age) Son propiedades y (1,Deku,16) son valores dentro de un objeto
    id:1,
    name:"Deku",
    age:16,
};
for (let prop in user){//"prop" por si solo almacena solo las propiedades
    console.log(prop, user[prop])
};
