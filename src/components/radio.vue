<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>
            <div>
                <input class="input" type="text" v-model="newText" placeholder="Input your question ..." />         
                
                <input type="text" class="input2" v-model="newchoice" placeholder="Add Choice ...">
                <b-button class="buttonCSS3" v-on:click="add()">Add</b-button>
                
                <b-radio name="choice" v-for="ch in this.newchoices" :key="ch" class="input5" id="radio" ><h2>{{ch}}</h2></b-radio>
  
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
import { firestore } from "../firebase.js";

export default {
  data() {
    return {
      newText: "",
      id: "",
      surveys: [],
      newchoices: [], // radio
      newchoice: "", //text
      newc: {}
    };
  },

  firestore() {
    return {
      surveys: firestore.collection("surveys")
    };
  },

  methods: {
    save() {
      console.log(this.newText);
      var length = this.surveys.length + 1;
      var newQ = "q" + length;
      var id = length++;
      console.log(newQ);
      console.log(id);

      var newdatas = []
      for (var i = 0; i < this.newchoices.length; i++) {
        var newdata = {
          option: this.newchoices[i]
        };
        newdatas.push(newdata);
      }
  

      this.$firestore.surveys.doc().set({qid: id, qname: this.newText, type: "qradio",
      // ans: this.newchoices});
         ans: newdatas});
    },
    add() {
      console.log(this.newchoice);
      this.newchoices.push(this.newchoice);
      console.log(this.newchoices);
      
    }
    // cancel() {
    //   var length = this.surveys.length;
    //   var newQ = "q" + length;

    //   this.$firestore.surveys.doc(newQ).delete();
    // }
  }
};
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
p {
  color: black;
}
.qw {
  color: white;
}
.input {
  width: 70vw;
  height: 11vh;
  font-size: 20px;
}
.input2 {
  width: 40vw;
  height: 8vh;
  width: 37vw;
  height: 8.5vh;
  margin: auto;
  border: 3px;
  padding: 10px;
  font-size: 20px;
}

.center {
  width: 37vw;
  height: 8.5vh;
  margin: auto;
  border: 3px;
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
.buttonCSS3 {
  background-color: Orange;
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
