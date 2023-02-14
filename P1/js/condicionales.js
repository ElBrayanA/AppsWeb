var edad = prompt("Ingresa tu edad");

if(edad < 0 || edad > 100){
    console.log("Edad no valida")
}else{
    if(edad >= 18){
        console.log("Felicidades ya eres mayor de edad!!")
    }else{
        console.log("Aun eres menor, sigue esperando :(")
    }
}

/*
//var
var nombre = prompt("Captura tu nombre");
var edad = 19;
var estatura = 1.88;
var peso = "80Kg";
var carrera ="Tecnologias de la informacion";
const fechaNac = new Date("2003-04-29");
var ciudad= "San Luis Rio Colorado";
var colorFav="Blanco";


//let

//const


//concatenar con el signo +
console.log("Hola desde java script soy "+ nombre+" y tengo una edad de"+edad);


//concatenar con el signo $
console.log(`Hola desde javascript mi nombre es ${nombre} y tengo una edad de ${edad}`)


console.log("Practica");

console.log(`Hola desde javascript mi nombre es ${nombre} y tengo una edad de ${edad} , mido ${estatura} peso ${peso}.
 Estudio la carrera de ${carrera} vivo en ${ciudad}, naci en el año ${fechaNac} y mi color favorito es el ${colorFav}`)
 




Funcion PROMPT()
var nombre = prompt("Captura tu nombre");
console.log(`Mi nombre es ${nombre}`)
</script>*/

