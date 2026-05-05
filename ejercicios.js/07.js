let array = [2, 5, 7, 15, -5, -100, 55];
function getmenormayor(arr) {
    let max = 0;
    let min = 0;
    for (numero of array) {
        numero > max ? max = numero : null;
        numero < min ? min = numero : null;
    };
    return [max,min]
}
let numeros=getmenormayor(array);
console.log(`EL número ${numeros[0]} es el mayor y el número ${numeros[1]} es el menor`);