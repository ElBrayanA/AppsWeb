Vue.createApp({
    data(){
        return{
            imagen:""
        }
    },
    computed:{
        mostrar(){
            if(this.imagen == "Mustang"){
                return "https://th.bing.com/th/id/OIP.qwADl5rg0UmRZmcaUXjc_wHaE5?pid=ImgDet&rs=1"
            }
            if(this.imagen == "Charger"){
                return "https://th.bing.com/th/id/OIP.5WJcj7wHHmqkq6sbQUjvrQHaE8?pid=ImgDet&rs=1"
            }
            if(this.imagen == "Carlo"){
                return "https://th.bing.com/th/id/R.872071a58f7dcc0793cc76c1f3f4db7d?rik=OGNsfyJNh8usYQ&pid=ImgRaw&r=0"
            }
            if(this.imagen == "Camaro"){
                return "https://cdn.dealeraccelerate.com/vanguard/1/1744/207417/1920x1440/1968-chevrolet-camaro"
            }
            if(this.imagen == "GTO"){
                return "https://th.bing.com/th/id/R.69789d74c11a0f611612a6c886143173?rik=iXMCF5Ok1e85TQ&pid=ImgRaw&r=0"
            }
        }
        }
    }).mount("#app")