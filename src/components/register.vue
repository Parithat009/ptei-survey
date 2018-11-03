<template>
    <div style="margin: auto; margin-top:20vh; margin-left:30vw;margin-right:30vw;">
      
                
                <h1>Register Account</h1> <br><br>

                <b-form-input class="input" v-model="email" type="text"  placeholder="Enter Username"></b-form-input><br>

                <b-form-input class="input" v-model="password" type="password" placeholder="Enter Password"></b-form-input>
                
                
                <b-button class="btn-success" v-on:click="register()">Register</b-button>
                

                <router-link to="/adminhome">
                <b-button class="btn-danger" >Back</b-button>
                </router-link>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
     
    data(){
        return {
            email: '',
            password: ''
               
        };
    },
    methods:{
        register(){

            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Create account complete ' );
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
    h1{
        color: white;
    }
    .card-body{
        text-align: center;
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 3vh;
        width: 12vw;
        height: 7vh;
        margin: 3vh;
    }
    .input{
        text-align: center;
        width: 35vw;
        height: 7vh;
        margin: auto;
    }
</style>
