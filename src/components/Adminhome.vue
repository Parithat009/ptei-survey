<template>
    <div style="margin: auto; margin-top: 28vh">
        <b-button class="button1" v-on:click="logout()">  <b-img :src="require('../photo/logout-icon.png')" class="img-body2"></b-img></b-button>
        
        <b-button class="button2" v-on:click="register()">  <b-img :src="require('../photo/register.png')" class="img-body2"></b-img></b-button>
        
        <p >{{currentUsersh}}</p>
        <div>
            <router-link to="/adsurveydesign">
                <b-button class="buttonCSS">Survey Designer</b-button>
            </router-link>            
        </div>
        <div class="marginTop">
            
            <router-link to="/view">
            <b-button class="buttonCSS">View Data</b-button>
            </router-link>   
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data () {
        return {
            currentUsersh: firebase.auth().currentUser.email,

            isLoggedIn: false,
            currentUser: false

        }
    }, 
    methods:{
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push('/adminlogin');
                alert('Log out');
            });
        },
        register(){
            this.$router.push('/register');
        }
    }
}
</script>

<style scoped>
.marginTop{
    margin-top: 7vh
}

.buttonCSS{
    background-color: rgb(6, 139, 106);
    border-radius: 40px;
    width: 45vh;
    height: 14vh;
    font-size: 3.5vh;
    margin-top: -30px;
}
.button1 {
  background-color:inherit;
  border-radius:50%;
  border-color: inherit;
  width: auto;
  height: auto;
  

  margin-top: -250px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 140vh;
}
.button2 {
  background-color:inherit;
  border-radius:50%;
  border-color: inherit;
  width: auto;
  height: auto;
  

  margin-top: -298px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 115vh;
}
.img-body2{
    width: 6vh;
    height: 6vh; 
}
p {
  background-color:inherit;
  border-radius:10px;
  border-color: inherit;
  width: auto;
  height: auto;
  

  margin-top: -180px;
  margin-right: 10px;
  margin-bottom: 190px;
  margin-left: 80vh;
}
</style>
