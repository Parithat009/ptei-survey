<template>
    <div style="margin: auto; margin-top: 10vh;margin-right:15vh">
            
        <div v-for="(res,index) in answers" :key="index" v-if="++index == $route.params.rid">
            <h1>Tourist {{index}}</h1>    
            
            <table class="table" style="margin: 10vh; margin-right :10vh;"  >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Type</th>
                        <th>Question</th>
                        <th>Answer {{index}}</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="question in surveys" :key="question.qid" v-if="index == $route.params.rid" >

                        <td>Question {{question.qid}}</td>
                        <td> {{question.type}}</td>

                        <td > 
                            <div v-for="s in question.qsub" :key="s.option" v-if="question.type == 'qsatisfaction'">
                                {{s.option}}
                            </div>
                            <div v-for="s in question.qsub" :key="s.option" v-if="question.type == 'qexpect'">
                                {{s.option}}
                            </div>
                            <div v-if="question.type == 'qtextinput'">
                                {{question.qname}}
                            </div>
                            <div  v-if="question.type == 'q-yes-no'">
                                {{question.qname}}
                            </div>
                            <div  v-if="question.type == 'mchoice'">
                               {{question.qname}}
                            </div>
                            <div v-for="s in question.qsub" :key="s.option" v-if="question.type == 'qexpend'">
                                {{s.option}}
                            </div>
                            <div v-for="s in question.qsub" :key="s.option" v-if="question.type == 'qagreement'">
                                {{s.option}}
                            </div>
                            <div  v-if="question.type == 'qradio'">
                                {{question.qname}}
                            </div>
                            <div  v-if="question.type == 'qimg'">
                                {{question.qname}}
                            </div>
                            
                            
                        </td>

                        <td  v-for="ans in res.answered" :key="ans.qid" v-if="question.qid == ans.qid" >
                            <div v-if="question.type == 'qtextinput'">
                                {{ans.text}} 
                            </div>
                            <div v-for="aa in ans.selectedChoice" :key="aa" v-if="question.type == 'mchoice'">
                                {{aa}}
                            </div>
                            <div v-if="question.type == 'qimg'">
                                {{ans.selected}} 
                            </div>
                            <div v-for="(aa,index) in ans.selectedA" :key="index" v-if="question.type == 'qsatisfaction'">
                                {{aa}} 
                            </div>
                            <div v-for="(aa,index) in ans.selected" :key="index" v-if="question.type == 'qagreement'">
                                {{aa}} 
                            </div>
                            <div v-for="(qq,index) in ans.value" :key="index" v-if="question.type == 'qexpend'">
                                {{qq}}
                            </div>
                            <div  v-if="question.type == 'qradio'">
                                {{ans.selectedRadio}}
                            </div>
                            <div v-if="question.type == 'q-yes-no'">
                                {{ans.selected}} <br> {{ans.text}}
                            </div>
                            <div v-for="(s,index) in ans.selectedE" :key="index" v-if="question.type == 'qexpect'"> 
                                {{s}}
                            </div>

                        
                            <!-- v-if="question.qid == question.qid " -->
                            <!-- <p v-for="(qq,index) in ans.value" :key="index">{{qq}}</p> -->
                           
                            
                            <!-- <div v-for="e in ans.selectedE" :key="e">
                                {{e}}
                            </div> -->
                            
                            <!-- <div v-for="value in ans.selectedEx" :key="value">
                                <p>{{value}}</p>
                            </div> -->
                        </td >

                        <td  v-for="(ans,index) in res.answered" :key="index" v-if="question.qid == ans.qid" >
                            <div v-for="(s,index) in ans.selectedB" :key="index" v-if="question.type == 'qsatisfaction'">
                                {{s}}
                            </div>
                            <div v-for="(s,index) in ans.selectedS" :key="index" v-if="question.type == 'qexpect'">
                                {{s}}
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
    
        </div>
    </div>   
</template>

<script>
import {firestore} from '../firebase.js'

export default {
    
    data (){
        return{
            surveys: [],
            answers: []    
        }
    },
    firestore (){
        return {
            surveys : firestore.collection('surveys').orderBy("qid"),
            //answers : firestore.collection('answers').doc('tourist1').collection('responses').doc('r1')
            answers : firestore.collection('answers')
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
