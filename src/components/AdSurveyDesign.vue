<template>
    <div style="margin: auto; margin-top: 13vh">
        <router-link to="/adminhome">
                <b-button class="button1">  <b-img :src="require('../photo/b.png')" class="img-body2"></b-img></b-button>
        </router-link>
        <h1>New Question</h1>

        <div>
            <router-link to="/newquestion">
                <b-button class="buttonCSS">  <b-img :src="require('../photo/add.png')" class="img-body"></b-img></b-button>
            </router-link>     
                      
            <b-button class="buttonCSS" v-for="ch in surveys" v-bind:key="ch.qid" v-on:click="send(ch.qid)">
                Question {{ch.qid}} 
            </b-button>
            
        </div>
        
    </div>
</template>

<script>
import {firestore} from '../firebase.js'

export default {

     data (){
        return{
            surveys:[],
        }
    },
    firestore (){
        return {
            surveys : firestore.collection('surveys').orderBy('qid')
        }
    },
    methods:{
        send(id){
            this.$router.push({ path:'./surveydetail/'+id })
            //วิทีส่งค่า
        }
    }
}
</script>

<style scoped>
.button1 {
  background-color:inherit;
  border-radius:50%;
  border-color: inherit;
  width: auto;
  height: auto;
  

  margin-top: -100px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 120vh;
}
.marginTop{
    margin-top: 7vh
}

.buttonCSS{
    background-color: rgb(6, 139, 106);
    border-radius: 55px;
    width: 14vw;
    height: 22vh;
    font-size: 3.5vh;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
}

h1{
    color: white;
    margin-right: 570px;
}
.img-body{

    height: 20vh; 
}
.img-body2{
    width: 7vh;
    height: 7vh; 
}
</style>
