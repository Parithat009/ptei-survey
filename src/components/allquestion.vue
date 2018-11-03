<template>
    <div style="margin: auto; margin-top: 10vh;margin-right:15vh">
        <h1>All Question</h1>
        
        <div v-for="(res,index) in surveys" :key="index" >

            <h5>Question : {{res.qid}}</h5>  
            <p>Question : {{res.qname}} {{res.qtitle}}</p>  
            <p >Type : {{res.type}}</p>
            
            <table class="table" style="margin: 10vh; margin-right :10vh;" ref="example" >
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
                <tbody>
                    <tr   v-for="(a,index) in answers" :key="index" >
                        <td>Tourist {{a.datetime}}</td>

                        <td v-if="res.type == 'qsatisfaction'" >
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

                        <td  v-for="(ans,index) in a.answered" :key="index" v-if="ans.qid == res.qid" >

                            <div v-if="res.type == 'qtextinput'">
                                {{ans.text}} 
                            </div>
                            <div v-for="(aa,index) in ans.selectedChoice" :key="index" v-if="res.type == 'mchoice'">
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
        </div>
    </div>   
</template>


<script>
import { firestore } from "../firebase.js";
//import XLSX from "xlsx";
//import saveAs from "file-saver";

export default {
  data() {
    return {
      surveys: [],
      answers: [],
      Datas: {
        // We will make a Workbook contains 2 Worksheets
        animals: [
          { name: "cat", category: "animal" },
          { name: "dog", category: "animal" },
          { name: "pig", category: "animal" }
        ],
        pokemons: [
          { name: "pikachu", category: "pokemon" },
          { name: "Arbok", category: "pokemon" },
          { name: "Eevee", category: "pokemon" }
        ]
      }
    };
  },
  firestore() {
    return {
      surveys: firestore.collection("surveys").orderBy("qid"),
      answers: firestore.collection("answers")
    };
  },
//   methods: {
//     onTestSaveFile() {
//       console.log(this.$refs.example);
//       var wb = XLSX.utils.table_to_book(this.$refs.example, {
//         sheet: "response"
//       });
//       var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
//       XLSX.writeFile(wb, "book.xlsx");

//         var pokemonWS = XLSX.utils.json_to_sheet(this.$refs.example);
//       console.log(this.$refs.example);
//       console.log(pokemonWS);
//         var wb = XLSX.utils.book_new(); // make Workbook of Excel

//         XLSX.utils.book_append_sheet(wb, pokemonWS, "response");

//         XLSX.writeFile(wb, "book.xlsx");
//     }
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
  margin-right: 800px;
  margin-bottom: 50px;
}
h5 {
  color: white;
  margin-right: 800px;
  margin-bottom: 50px;
  margin-bottom: 1.5vh;
  font-size: 3.5vh;
}
.img-body {
  height: 20vh;
}
</style>
