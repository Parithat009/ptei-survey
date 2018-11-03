<template>
    <div style="margin: auto; margin-top: 10vh;margin-right:15vh" >         
        <div >
            <h1>View All </h1>  
            <button v-on:click="onTestSaveFile()">export excel</button>
            <table class="table" style="margin: 10vh; margin-right :10vh;" ref="example">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th v-for="(res,index) in surveys" :key="index" >
                            Question<br>{{res.qid}}
                        </th>
                        
                    </tr>
                </thead>
                <tbody >
                    
                    <tr v-for="(a,index) in answers" :key="index"  >

                        <td>Tourist {{a.datetime}}</td>

                        <!-- <td  v-for="ans in a.answered" :key="ans.qid" >
                        
                            <div >
                                {{ans.text}} 
                            </div>
                            <div v-for="(aa,index) in ans.selectedChoice" :key="index" >
                                {{aa}}
                            </div>
                            <div >
                                {{ans.selected}} 
                            </div>
                            <div v-for="(aa,index) in ans.selectedA" :key="index" >
                                {{aa}} 
                            </div>
                            <div v-for="(aa,index) in ans.selected" :key="index" >
                                {{aa}} 
                            </div>
                            <div v-for="(qq,index) in ans.value" :key="index">
                                {{qq}}
                            </div>
                            <div >
                                {{ans.selectedRadio}}
                            </div>
                            <div>
                                {{ans.selected}} <br> {{ans.text}}
                            </div>
                            <div v-for="(s,index) in ans.selectedE" :key="index" > 
                                {{s}}
                            </div>
                            
                        </td > -->

                        <td  v-for="(ans,index) in a.answered" :key="index" >
                        
                            <!-- <p v-for="aa in ans.selectedChoice" :key="aa" >{{aa}}</p>
                            <p v-for="(qq,index) in ans.value" :key="index">{{qq}}</p> -->
                            <p >{{ans.selectedChoice}}</p>
                            <p >{{ans.value}}</p>
                            
                            <p>{{ans.selectedA}}</p> 
                            <p>{{ans.selectedB}}</p>
                            <p >{{ans.selectedE}} </p> 
                            <p>{{ans.selectedS}}  </p>
                            
                            <p>{{ans.selected}}  </p>   
                            <p>{{ans.text}}</p>
                            <p>{{ans.selectedRadio}}  </p>
                            
                        </td >
                        
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>   
</template>

<script>
import { firestore } from "../firebase.js";
import XLSX from "xlsx";

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
  methods: {
    onTestSaveFile() {
      //   var blob = new Blob([this.$refs.example.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      //   saveAs.saveAs(blob, "hello world.xlsx");
    console.log(this.$refs.example);
    //var pokemonWS = XLSX.utils.table_to_book(this.$refs.example);
    var wb = XLSX.utils.table_to_book(this.$refs.example, {sheet:"response"});
    //var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
    XLSX.writeFile(wb, "book.xlsx");


    //   console.log(pokemonWS);
    //   var wb = XLSX.utils.book_new(); // make Workbook of Excel

    //   XLSX.utils.book_append_sheet(wb, pokemonWS, "response");

    //   XLSX.writeFile(wb, "book.xlsx");
    }
  }
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
