<template>
        <div>
            <!-- วิทีส่งค่า prop ไปยังอีกหน้า -->
             <b-btn-toolbar v-for="question in surveys" :key="question.qid"  v-if="question.qid == $route.params.qid" > 
                 <!-- v-if="question.qid == surveyid" -->
                <qtext v-if="question.type == 'qtextinput'" :question="question"></qtext>
                <qyesno v-if="question.type == 'q-yes-no'" :question="question"></qyesno>
                <qchoice v-if="question.type == 'mchoice'" :question="question"></qchoice>
                <qopinion v-if="question.type == 'qagreement'" :question="question"></qopinion>
                <qsatisfaction v-if="question.type == 'qsatisfaction'" :question="question"></qsatisfaction>
                <qpicture v-if="question.type == 'qimg'" :question="question"></qpicture>
                <qexpect v-if="question.type == 'qexpect'" :question="question"></qexpect>
                <qradio v-if="question.type == 'qradio'" :question="question"></qradio>
                <qexpend v-if="question.type == 'qexpend'" :question="question"></qexpend>

            </b-btn-toolbar>
        </div>   
</template>

<script>
import qtext from './qtext.vue'
import qyesno from './qyesno.vue'
import qchoice from './qchoice.vue'
import qsatisfaction from './qsatisfaction.vue'
import qopinion from './qopinion.vue'
import qpicture from './qpicture.vue'
import qexpect from './qexpect.vue'
import qradio from './qradio.vue'
import qexpend from './qexpend.vue'

import {firestore} from '../firebase.js'

export default {
    
     components:{
        qtext,
        qyesno,
        qchoice,
        qsatisfaction,
        qopinion,
        qpicture,
        qexpect,
        qradio,
        qexpend
    },
    data (){
        return{
            surveys: []
        }
    },
    firestore (){
        return {
            surveys : firestore.collection('surveys').orderBy("qid"),
        }
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
.input{
    width: 70vw;
    height: 11vh;
}
.center{
    width: 37vw;
    height: 8.5vh;
     margin: auto;
    border: 3px ;
    padding: 10px;
}

.buttonCSS {
  background-color: green;
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
