Vue.createApp({
    data(){
        return{
            pokemon: null
            
        }
    }, methods:{
        async getPokemon(){
            //GET --> Obtener informacion
            //POST --> Crear Recursos
            //PUT --> Modificar recursos
            //DELETE --> Borrar recursos

            const random = Math.floor(Math.random() * 630)
            const response = await fetch('https://rickandmortyapi.com/api/character/'+random,{ 
            metdhod: 'GET'
        }); /*Peticion http*/
        const data = await response.json();
        this.pokemon = data;
        console.log(this.pokemon)
        }
    }
}).mount('#app')