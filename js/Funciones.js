/*const nombre =prompt("Captura tu nombre ")
const saludo = (_nombre)=>{
    console.log("Hola "+ _nombre)
}
saludo(nombre); */

const edad = prompt("Ingresa tu edad ")
const años =(_edad) =>{
if(_edad < 0 || _edad > 100){
    console.log("Edad no valida")
}else{
    if(_edad >= 18){
        console.log("Felicidades ya eres mayor de edad!!")
    }else{
        console.log("Aun eres menor, sigue esperando :(")
    }
}
}
años(edad);