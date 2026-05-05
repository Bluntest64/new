let array=[2, 5, 7, 15, -5, -100, 55];

//Primera versión
function getmenormayor(arr){
    return [Math.max(...arr),Math.min(...arr)];
}
let resultado=getmenormayor(array);
console.log(`De la lista [${array}]: `);
console.log(`EL número ${resultado[0]} es el mayor y el número ${resultado[1]} es el menor`);

//Segunda version
function getmenormayor(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let numero of arr) {
        if (numero > max){max = numero};
        if (numero < min){min = numero;};
    };
    return [max,min]
}
let numeros=getmenormayor(array);
console.log(`EL número ${numeros[0]} es el mayor y el número ${numeros[1]} es el menor`);