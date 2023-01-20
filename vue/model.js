Vue.createApp({
    data(){
        return{
        nombre:'',
        carrera:'',
        edad:"",
        resultado:""
        }
    },
    methods:{
        calcular_edad(){
            if (this.edad >= 18){
                this.resultado="Ya eres mayor"
            }
            else{
                this.resultado="Aun eres menor"
            }
        }
    }
}).mount('#MD')
