<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>
            <div>
                <input class="input" type="text" v-model="question.qname" placeholder="Input your question ..." />         
                
                <input type="text" class="input2" v-model="newchoice" placeholder="Add Choice ...">
                <b-button class="buttonCSS3" v-on:click="add()">Add</b-button>

                <b-radio name="choice" v-for="ch in this.question.ans" :key="ch.option" class="input5" id="radio" ><h2>
                    {{ch.option}}</h2></b-radio>
                
                <!-- <b-radio name="choice" v-for="ch in this.question.ans" :key="ch.option" class="input" id="radio" ><h2>
                    {{ch.option}}</h2></b-radio> -->
            </div>

                <router-link to='/adsurveydesign'>    
                    <b-button class="buttonCSS" v-on:click="save(question['.key'])"> Save</b-button>
                </router-link>
                <!-- <b-button class="buttonCSS2" v-on:click="cancel()">Cancel</b-button>-->

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
            surveys: [],
            newchoices :[], // radio
            newchoice:'' //text   
          
        }
    },
    
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    },

    methods:{
        save(key){
           
            var id = 'q'+this.question.qid;
            console.log('update--'+id);
        
            this.$firestore.surveys.doc(key).update({qid:this.question.qid,qname:this.question.qname,type:"qradio",
            ans:this.question.ans})
        },
         add() {
            
            console.log(this.newchoice);
            this.question.ans.push({
                option:this.newchoice
                });
            console.log(this.newchoices);
 
        },
        cancel(key){
            this.$firestore.surveys.doc(key).delete()
        }
    }
}

</script>

<style scoped>
.input5 {
  width: 70vw;
  height: 11vh;
  font-size: 18px;
  margin-top: 2vh;
  margin-bottom: -15vh;
}
.marginTop {
  margin-top: 7vh;  
}
p{
    color: black;
}

.input{
    width: 80vw;
    height: 11vh;
    font-size: 20px;
}
.input2{
    font-size: 20px;
    width: 40vw;
    height: 8vh;
    width: 37vw;
    height: 8.5vh;
     margin: auto;
    border: 3px ;
    padding: 10px;
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
.buttonCSS3{
     background-color:Orange;
  border-radius: 30px;
  width: 7vw;
  height: 7vh;
  font-size: 3vh;

  margin-top: 30px;
  margin-right: 5px;
  margin-bottom: 50px;
  margin-left: 50px;
}



h1 {
  color: white;
  margin-right: 1000px;
  margin-bottom: 50px;
}
h2 {
  color: rgb(24, 22, 22);
   font-size: 21px;
   
}
.img-body {
  height: 20vh;
}
</style>
