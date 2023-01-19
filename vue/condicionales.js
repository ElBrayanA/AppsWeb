Vue.createApp({
    data(){
        return{
            becado:true
        }
    },
    methods:    {
        conBeca(){
            this.becado = true;
        },
        sinbeca(){
            this.becado = false;
        }
        }
    }
).mount("#App")