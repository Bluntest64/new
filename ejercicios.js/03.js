function getbyidx(arr,id){
 return arr[id]===undefined? "Fuera de limites":arr[id];
}
let resultado=getbyidx([1,2,3,4,5,6,7,8,9,10],5);
console.group(resultado);

//Funcion random que solo da numeros entre 0 y 1 por lo que se debe multiplicar X10 si se quiere tener un numero entre 0 y 10, y floor que sirve para redondear a un enteroel numero.
let num = Math.floor(Math.random() * 10);
console.log(num);