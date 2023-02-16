Vue.createApp({
    data() {
        return {
            pokemones:"",
            Pokemon:[]
        }
    }, methods: {
        /*  tipo de peticiones
         Get ---- obtiene informacion
         Post --- crear recursos
         Put ---- modificar recursos
         Delete --- elimminar recursos */
        async getPokemon() {
            for(i=1;i<=50;i++){
/*             const random = Math.floor(Math.random() * 630);
 */            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ i, {
                method: 'GET'
            });
            const data = await response.json();
            this.Pokemon=data;
            this.pokemons={
                pokemones:response
            }
            this.pokemons.push()
        }
        }
    }
}
).mount("#API")