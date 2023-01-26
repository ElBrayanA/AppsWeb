Vue.createApp({
    data() {
        return {
            /*   carrito:[
                
              ],
              producto:"" */
              nombre:"",
              precio:"",
              cantidad:"",
              color:"",
              departamento:"",
              fecha:"",
            productos: []
        }
    },
    methods: {
        /*  agregarProducto(){
             this.carrito.push(this.producto);
             this.producto="";
         } */
        AgregarProductos(){
           const producto ={
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad,
            color: this.color,
            departamento:this.departamento,
            fecha:this.fecha
           }
           this.productos.push(producto)
        },
        clear(){
            this.productos=""
        }
    }

},
).mount("#CR")