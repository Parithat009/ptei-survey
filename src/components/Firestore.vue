<template>
<div class="container">
  <h1>Firestore</h1> 
  <button v-for="question in surveys" v-bind:key="question.docid">
  {{ question.qid }} {{ question.qname }} {{ question.type }}    
  </button> 

<b-form-input class="input" type="text"  v-for="question in surveys" v-bind:key="question.docid" 
    v-bind:value="question.qname"  ></b-form-input>
  
</div>
</template>
<script>

import {firestore} from '../firebase.js'

export default {

    data (){
        return{
            surveys: []
        }
    },
    
    firestore (){
        return {
            surveys : firestore.collection('surveys')
        }
    }

}
</script>
