/* const usuario ={
    nombre:'Brayan',
    email:'ffrfdke86@gmail.com',
    password:'1234'
} */

//∟console.log(usuario.email)

const brayan={
    nombre:'Brayan Enrique',
    edad:19,
    estatura:1.87,
    ciudad:'San Luis Rio Colorado',
    correo:'ffrfdke86@gmail.com',
    passwordd:'ber44565'

}
/* const nombre =brayan.nombre;
const edad =brayan.edad;
const estatura= brayan.estatura;
const ciudad = brayan.ciudad;
const correo = brayan.correo;
const password = brayan.passwordd; */

//desestructurar un objeto
const {nombre,edad,estatura,ciudad,correo,passwordd} = brayan;

console.log(`Mi nombre es ${nombre} tengo ${edad} años, mido ${estatura} vivo en ${ciudad}. 
Mi correo es ${correo} y la contraseña es ${passwordd}`)


