<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>
            <b-form-input class="input" type="text" v-model="inputtitle" placeholder="Input your title ..." ></b-form-input><br>
            <div>

                <b-button class="button1">  <b-img :src="require('../photo/s1.png')" class="img-body"></b-img></b-button>
                <b-button class="button1">  <b-img :src="require('../photo/s2.png')" class="img-body"></b-img></b-button>
                <b-button class="button1">  <b-img :src="require('../photo/s3.png')" class="img-body"></b-img></b-button>
                <b-button class="button1">  <b-img :src="require('../photo/s4.png')" class="img-body"></b-img></b-button>       
                <b-button class="button1">  <b-img :src="require('../photo/s5.png')" class="img-body"></b-img></b-button>

            </div>
             <div>
                <input type="text" class="input2" v-model="newchoice" placeholder="Add question expect ...">
            
                <b-button class="buttonCSS3" v-on:click="add()">Add</b-button>
                
                <b-radio name="choice" v-for="ch in this.newchoices" :key="ch" class="input5" id="radio" >{{ch}}</b-radio>
            </div>
            <div>

                <router-link class="qw" to="/newquestion">
                    <b-button class="buttonCSS" v-on:click="save()">Save</b-button>
                </router-link>

                <router-link class="qw" to="/newquestion">
                    <b-button class="buttonCSS2" >Cancel</b-button>    
                </router-link>  
             
            </div>
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
      inputtitle: "",
      newchoices: [], // radio
      newchoice: ""
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

      var newdatas = [];
      for (var i = 0; i < this.newchoices.length; i++) {
        var newdata = {
          option: this.newchoices[i]
        };
        newdatas.push(newdata);
      }

      this.$firestore.surveys
        .doc()
        .set({
          qid: id,
          qsub: newdatas,
          type: "qagreement",
          qtitle: this.inputtitle
        });
    },

    add() {
      console.log(this.newchoice);
      this.newchoices.push(this.newchoice);
      console.log(this.newchoices);
    }
    // cancel(){
    //     var length = this.surveys.length;
    //     var newQ = 'q'+length;

    //     this.$firestore.surveys.doc(newQ).delete()
    // }
  }
};
</script>

<style scoped>
.input5 {
  width: 70vw;
  height: 11vh;
  font-size: 21px;
  margin-top: 2vh;
  margin-bottom: -15vh;
}
.button1 {
  background-color: inherit;
  border-radius: inherit;
  width: auto;
  height: auto;

  border-radius: 50%;

  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.qw {
  color: white;
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
.input2 {
  width: 35vw;
  height: 8vh;
  margin-left: inherit;
  margin-right: 5vh;
  margin-left: -1vh;
  border: 3px;
  padding: 10px;
  font-size: 20px;
}
.img-body {
  height: 15vh;
  width: 15vh;
}
.marginTop {
  margin-top: 7vh;
}
p {
  color: black;
}
.input {
  width: 70vw;
  height: 11vh;
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

h1 {
  color: white;
  margin-right: 1000px;
  margin-bottom: 50px;
}
.img-body {
  width: 9vh;
  height: 9vh;
}
</style>
