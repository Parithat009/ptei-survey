<template>
    <div style="margin: auto; margin-top:20vh; margin-left:30vw;margin-right:30vw;">

                <div class="img">
                    <b-img :src="require('../photo/page1.png')" class="img-body"></b-img>
                </div>
                <h1>PTEI Survey Designer</h1>

                <b-form-input class="input" v-model="email" type="text" placeholder="Enter Username"></b-form-input><br>

                <b-form-input class="input" v-model="password" type="password" placeholder="Enter Password"></b-form-input>
                
                <!-- <router-link to="/adminhome"> -->
                <b-button class="btn" v-on:click="login()">Login</b-button>
                <!-- </router-link> -->
    </div>
</template>

<script>
import firebase from 'firebase';

export default {

     data (){
        return{
            email:'',
            password:''
            
        }
    },
    methods:{
        login(){

             firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Log In Complete : '+this.email );
                    this.$router.push('/adminhome');
                })
                .catch((err) => {
                    alert(err.message);
                });
            
        }
    }
    
}
</script>


<style>
    .card-body{
        text-align: center;
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 3vh;
        width: 30vw;
        height: 7vh;
    }
    .input{
        text-align: center;
        width: 30vw;
        height: 7vh;
        margin: auto;
    }
</style>
