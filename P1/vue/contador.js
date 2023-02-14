Vue.createApp({
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        restar(){
            this.contador--;
            if(this.contador < 0){
                this.contador = 0;
                alert("No se admiten numeros negativos");
            }
        },
        incrementar(){
            this.contador++;
            if(this.contador == 50){
                this.contador = 50;
                alert("El Limite es 50")
            }
        },
        reset(){
            this.contador =0;
        }
    }
}).mount("#js");