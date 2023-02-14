Vue.createApp({
    data() {
        return {
            colorTable:'',
              nombre:"",
              precio:"",
              cantidad:"",
              color:"",
              departamento:"",
              fecha:"",
              url:"",
            productos: []
        }
    },
    methods: {
        AgregarProductos(){
           const producto ={
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad,
            color: this.color,
            departamento:this.departamento,
            fecha:this.fecha,
            url:this.url
           }
           this.productos.push(producto)
        },
        clear(){
            this.productos=""
        }
    }

},
).mount("#CR")