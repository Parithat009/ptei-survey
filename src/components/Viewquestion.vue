<template>
    <div style="margin: auto; margin-top: 10vh;margin-right:15vh">
            
        <div v-for="(res,index) in surveys" :key="index" v-if="res.qid == $route.params.id">

            <h1>Question {{$route.params.id}}</h1>  
            <p>Question : {{res.qname}} {{res.qtitle}}</p>  
            <p >Type : {{res.type}}</p>
            
            <table class="table" style="margin: 10vh; margin-right :10vh;" id="mytable" >
                <thead>
                    <tr>    
                        <th>No.</th>

                        <th v-if="res.type == 'qsatisfaction'">Sub Question</th>
                        <th v-if="res.type == 'qexpend'">Sub Question</th>
                        <th v-if="res.type == 'qexpect'">Sub Question</th>
                        <th v-if="res.type == 'qagreement'">Sub Question</th>

                        <th>Answer</th>
                        
                    </tr>
                </thead>
                <tbody v-for="a in answers" :key="a.datetime">
                    <tr   >
                        <td>Tourist {{a.datetime}}</td>

                        <td v-if="res.type == 'qsatisfaction'">
                            <div v-for="(ww,index) in res.qsub" :key="index">
                                {{ww.option}}
                            </div>
                        </td>
                        <td v-if="res.type == 'qexpend'">
                            <div v-for="(ww,index) in res.qsub" :key="index">
                                {{ww.option}}
                            </div>
                        </td>
                        <td v-if="res.type == 'qexpect'">
                            <div v-for="(ww,index) in res.qsub" :key="index">
                                {{ww.option}}
                            </div>
                        </td>
                        <td v-if="res.type == 'qagreement'">
                            <div v-for="(ww,index) in res.qsub" :key="index">
                                {{ww.option}}
                            </div>
                        </td>

                        <td  v-for="ans in a.answered" :key="ans.qid" v-if="ans.qid == $route.params.id" >

                            <div v-if="res.type == 'qtextinput'">
                                {{ans.text}} 
                            </div>
                            <div v-for="aa in ans.selectedChoice" :key="aa" v-if="res.type == 'mchoice'">
                                {{aa}}
                            </div>
                            <div v-if="res.type == 'qimg'">
                                {{ans.selected}} 
                            </div>
                            <div v-for="(aa,index) in ans.selectedA" :key="index" v-if="res.type == 'qsatisfaction'">
                                {{aa}} 
                            </div>
                            <div v-for="(aa,index) in ans.selected" :key="index" v-if="res.type == 'qagreement'">
                                {{aa}} 
                            </div>
                            <div v-for="(qq,index) in ans.value" :key="index" v-if="res.type == 'qexpend'">
                                {{qq}}
                            </div>
                            <div  v-if="res.type == 'qradio'">
                                {{ans.selectedRadio}}
                            </div>
                            <div v-if="res.type == 'q-yes-no'">
                                {{ans.selected}} <br> {{ans.text}}
                            </div>
                            <div v-for="(s,index) in ans.selectedE" :key="index" v-if="res.type == 'qexpect'"> 
                                {{s}}
                            </div>

                            <!-- <p v-for="aa in ans.selectedChoice" :key="aa" >{{aa}}</p>
                            {{ans.selected}}     
                            <div v-for="(qq,index) in ans.value" :key="index">{{qq}}</div>
                            <div>{{ans.text}}</div>
                            <p>{{ans.selectedA}}</p> 
                            <p>{{ans.selectedB}}</p>
                            {{ans.selectedE}} &nbsp; {{ans.selectedS}}
                            
                            <p>{{ans.selectedRadio}}  </p> -->
                            
                        </td >
                        
                        <td  v-for="(ans,index) in a.answered" :key="index" v-if="res.qid == ans.qid" >

                            <div v-for="(s,index) in ans.selectedB" :key="index" v-if="res.type == 'qsatisfaction'">
                                {{s}}
                            </div>
                            <div v-for="(s,index) in ans.selectedS" :key="index" v-if="res.type == 'qexpect'">
                                {{s}}
                            </div>

                        </td>
                        
                        
                    </tr>
                </tbody>
            </table>
            <!-- <button v-on:click="button">555</button> -->
    
        </div>
    </div>   
</template>

<script>
import { firestore } from "../firebase.js";
//import { functions } from 'firebase';
//import XLSX from "xlsx";

export default {
  data() {
    return {
      surveys: [],
      answers: []
    };
  },
  firestore() {
    return {
      surveys: firestore.collection("surveys").orderBy("qid"),
      //answers : firestore.collection('answers').doc('tourist1').collection('responses').doc('r1')
      answers: firestore.collection("answers")
    };
  },
//   methods:{
//       button(){
          
//           var table = document.getElementById('mytable').data();
//           console.log(table);

//       }
//   }
};
</script>

<style scoped>
.marginTop {
  margin-top: 7vh;
}
p {
  color: black;
}
.input {
  width: 70vw;
  height: 11vh;
}
.center {
  width: 37vw;
  height: 8.5vh;
  margin: auto;
  border: 3px;
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
.buttonCSS2 {
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
