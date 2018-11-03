<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>

            <b-form-input class="input" type="text" v-model="question.qname" placeholder="Input your question ..." ></b-form-input><br>
               
            <router-link to='/adsurveydesign'>    
                <b-button class="buttonCSS" v-on:click="save(question['.key'])"> Save</b-button>
            </router-link>

            <router-link to='/adsurveydesign'>
                <b-button class="buttonCSS4" >Back</b-button>
            </router-link> 

            <router-link to='/adsurveydesign'>
                <b-button class="buttonCSS2" v-on:click="cancel(question['.key'])">Delete</b-button>
            </router-link>
              
        </div>   
    </div>
</template>

<script>
import {firestore} from '../firebase.js'

export default {
    props:['question'],
    data (){
        return{
            newText: '',
            id:'',
            surveys: []
        }
    },
    
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    },
    methods:{
        save(key){
            console.log(this.newText);
            var length = this.surveys.length;
            var newQ = 'q'+length;
            var id = 'q'+this.question.qid;
            console.log(newQ);
            console.log('update--'+id);
            
            this.$firestore.surveys.doc(key).update({qid:this.question.qid,qname:this.question.qname,type:"qtextinput"})
        },
         cancel(key){
           // var length = this.surveys.length;
            //var newQ = 'q'+length;

            this.$firestore.surveys.doc(key).delete()
        }
    }
}
</script>

<style scoped>
.buttonCSS4{
     background-color: 	#1E90FF;
  border-radius: 40px;
  width: 12vw;
  height: 12vh;
  font-size: 3.5vh;

  margin-top: 30px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}
.button1 {
  background-color:inherit;
  border-radius:10px;
  border-color: inherit;
  width: 11vh;
  height: 11vh;

  margin-top: 100px;
  margin-right: 100vh;
  margin-bottom: 10px;
  margin-left: -150vh;
}
.img-body2{
    width: 7vh;
    height: 7vh; 
}

.marginTop {
  margin-top: 7vh;
}
p{
    color: black;
}
.input{
    width: 80vw;
    height: 13vh;
    font-size: 20px;
}
.center{
    width: 37vw;
    height: 8.5vh;
     margin: auto;
    border: 3px ;
    padding: 10px;
}

.buttonCSS {
  background-color: rgb(9, 245, 9);
  border-radius: 40px;
  width: 12vw;
  height: 12vh;
  font-size: 3.5vh;

  margin-top: 30px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}
.buttonCSS2{
     background-color: red;
  border-radius: 40px;
  width: 12vw;
  height: 12vh;
  font-size: 3.5vh;

  margin-top: 30px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}



h1 {
  color: white;
  margin-right: 1000px;
  margin-bottom: 50px;
}
.img-body {
  height: 20vh;
}
</style>
