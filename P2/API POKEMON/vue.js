Vue.createApp({
    data() {
        return {
            Pokemon:null
        }
    }, methods: {
        /*  tipo de peticiones
         Get ---- obtiene informacion
         Post --- crear recursos
         Put ---- modificar recursos
         Delete --- elimminar recursos */
        async getPokemon() {
            const random = Math.floor(Math.random() * 630);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ random, {
                method: 'GET'
            });
            const data = await response.json();
            this.Pokemon=data;
        }
    }
}
).mount("#API")