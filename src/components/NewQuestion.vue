<template>
    <div style="margin: auto; margin-top: 13vh">

        <router-link to="/adsurveydesign">
                <b-button class="button1">  <b-img :src="require('../photo/b.png')" class="img-body2"></b-img></b-button>
        </router-link>
        
        <h1>Pick & Choose</h1>
        <div>
            <router-link to="/choice" >
                <b-button class="buttonCSS" >Multiple choices</b-button>            
            </router-link>     

            <router-link to="/picture">
                <b-button class="buttonCSS" >Picture</b-button>
            </router-link> 
        </div>
        <div >
            <!-- v-on:click="text()" -->
            <router-link to="/text">
                <b-button class="buttonCSS" >Text input</b-button>
            </router-link>   

            <router-link to="/yesno">
                <b-button class="buttonCSS" >Yes or No</b-button>
            </router-link> 
        </div>
        <div >
            
            <router-link to="/satisfaction">
            <b-button class="buttonCSS">Satisfaction</b-button>
            </router-link>   

            <router-link to="/opinion">
            <b-button class="buttonCSS" >Opinion</b-button>
            </router-link> 
        </div>

        <div>
            <router-link to="/expect">
            <b-button class="buttonCSS" >Expect</b-button>
            </router-link> 

            <router-link to="/radio">
            <b-button class="buttonCSS" >Radio</b-button>
            </router-link> 
        </div>
        <div>
            <router-link to="/expend">
            <b-button class="buttonCSS" >Expend</b-button>
            </router-link>
        </div>
            

    </div>
</template>

<script>
import {firestore} from '../firebase.js'

export default {

     data (){
        return{
            surveys:[],
            id:''
        }
    },
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    },
    // methods:{
    //     choice(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     },
    //     picture(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     },
    //     text(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     },
    //     yesno(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     },
    //     satisfaction(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     },
    //     opinion(){
    //         var length = this.surveys.length+1;
    //         var newQ = 'q'+length++;
    //         var id = length-1;
    //         console.log(newQ);
    //         console.log(id);
    //         this.$firestore.surveys.doc(newQ).set({qid:id});
    //     }
    // }
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
    border-radius: 50%;
    width: 21vw;
    height: 15vh;
    font-size: 3.5vh;

    margin-top: 12px;
    margin-bottom: 12px;
    margin-right: 50px;
    margin-left: 70px;
}

h1{
    color: white;
    margin-right: 570px;
}
.img-body{
        height: 20vh; 
}
.img-body2{
        height: 7vh;
        width: 7vh 
}
</style>
