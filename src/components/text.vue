<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>
            <div>
                <b-form-input class="input" type="text" v-model="newText" placeholder="Input your question ..." ></b-form-input><br>  
            </div>

            <router-link class="qw" to="/newquestion">
                <b-button class="buttonCSS" v-on:click="save()">Save</b-button>
            </router-link>

            <router-link class="qw" to="/newquestion">
                <b-button class="buttonCSS2" >Cancel</b-button>    
            </router-link>   
             
            
        </div>   
    </div>
</template>

<script>
import {firestore} from '../firebase.js'

export default {
    //props:['question'],
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
        save(){
            console.log(this.newText);
            var length = this.surveys.length+1;
            var newQ = 'q'+length;
            var id = length++;
            console.log(newQ);
            console.log(id);
            
            this.$firestore.surveys.doc().set({qid:id,qname:this.newText,type:"qtextinput"})
        },
        // cancel(){
        //     var length = this.surveys.length;
        //     var newQ = 'q'+length;

        //     this.$firestore.surveys.doc(newQ).delete()
        // }
    }



}

</script>

<style scoped>
.marginTop {
  margin-top: 7vh;

  
}
p{
    color: black;
}
.qw {
    color: white;
}
.input{
    width: 70vw;
    height: 11vh;
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
