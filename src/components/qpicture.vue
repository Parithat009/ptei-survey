<template>
    <div style="margin: auto; margin-top: 10vh">
        <h1>PTEI Survey</h1>
        <div>
            <b-form-input class="input" type="text" v-model="question.qname" placeholder="Input your question ..." ></b-form-input><br>
            <input type="text" class="input2" v-model="newchoice" placeholder="Add Choice ...">
        </div>
        <img :src="imagepreview"  width="150" height="125" class="preview-image" v-on:click="openupload()" 
            alt="Responsive image" />

        <input type="file" id="file-filed" @change="previewFile" />
        <img :src="url" v-for="img in this.url2" :key="img"/> 

        <b-button class="buttonCSS3" @click="add">add</b-button><br>
        <div v-for="img in this.question.ans" :key="img.url">
            <img :src="img.url" />
        </div>
         

        <b-radio name="choice" v-for="ch in this.question.ans" :key="ch.option" class="input5" id="radio" ><h2>
        {{ch.option}}</h2></b-radio>

        <div>
            <router-link to='/adsurveydesign'>    
                    <b-button class="buttonCSS" v-on:click="save(question['.key'])"> Save</b-button>
                </router-link>
                <!-- <b-button class="buttonCSS2" v-on:click="cancel()">Cancel</b-button>-->

                <router-link to='/adsurveydesign'>
                    <b-button class="buttonCSS4" >Back</b-button> 
                </router-link>

                <router-link to='/adsurveydesign'>
                    <b-button class="buttonCSS2" v-on:click="cancel(question['.key'])">Delete</b-button>
                </router-link>
        </div>   
    </div>
</template>


<script>
import { firestore } from "../firebase.js";
import firebase from "firebase";

export default {
  props: ["question"],
  data() {
    return {
      newText: "",
      id: "",
      surveys: [],
      image: [],
      imagepreview: require("../photo/picc.png"),
      pic: [],
      someData: null,
      url: null,
      url2: [],
      newchoices: [], // radio
      newchoice: "" //text
    };
  },

  firestore() {
    return {
      surveys: firestore.collection("surveys")
    };
  },
  methods: {
    save(key) {
      console.log(this.newText);
      var length = this.surveys.length;
      var newQ = "q" + length;
      var id = "q" + this.question.qid;
      console.log(newQ);
      console.log("update--" + id);

      this.$firestore.surveys.doc(key).update({
        qid: this.question.qid,
        qname: this.question.qname,
        type: "qimg",
        ans: this.question.ans
      });
    },
    add() {
        
     var filename = this.someData.name;
      var storageRef = firebase.storage().ref("img/" + filename);
      //var upload = storageRef.put(this.someData);
      var parent = this;
      storageRef.put(this.someData).then(function(snapshot) {
        console.log("Uploaded a blob or file!");

        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          //console.log("File available at", downloadURL);
          //console.log(downloadURL);
          parent.show(downloadURL);
          
        });
      });
      console.log(this.newchoice);
      this.question.ans.push({
        option: this.newchoice,
        url: this.url2
      });
      console.log(this.newchoices);
    },
    show(downloadURL){
      console.log(downloadURL);
      //this.imagepreview= require(downloadURL);
      this.url = downloadURL;
      this.puturl();
      
    },
    puturl(){
      this.url2.push(this.url);
    },
    cancel(key) {
      this.$firestore.surveys.doc(key).delete();
    },
    previewFile(event) {
      this.someData = event.target.files[0];
      //this.add(this.someData);
    },
    openupload() {
      document.getElementById("file-filed").click();
    }
  }
};
</script>

<style scoped>
.buttonCSS4 {
  background-color: #1e90ff;
  border-radius: 40px;
  width: 12vw;
  height: 12vh;
  font-size: 3.5vh;

  margin-top: 70px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}
.input5 {
  width: 70vw;
  height: 11vh;
  font-size: 21px;
  margin-top: 2vh;
  margin-bottom: -15vh;
}
h2{
  font-size: 21px;
}
img{
  width: 23vh;
  height: 23vh;
  margin: 1vh;
  border-style:inset;
  border-width: 1.5px;
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
.marginTop {
  margin-top: 7vh;
}
p {
  color: black;
}
.input {
  width: 70vw;
  height: 11vh;
  font-size: 21px;
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

  margin-top: 70px;
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

  margin-top: 70px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}
.button1 {
  background-color: yellowgreen;
  border-radius: 20px;
  width: 18vw;
  height: 30vh;
  font-size: 3.5vh;

  margin-top: 70px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-left: 80px;
}
.button4 {
  background-color: inherit;
  border-radius: inherit;
  width: auto;
  height: auto;

  margin-top: 30px;
  margin-right: 70px;
  margin-bottom: 20px;
  margin-left: 80px;
}

h1 {
  color: white;
  margin-right: 1000px;
  margin-bottom: 50px;
}
.img-body {
  height: 30vh;
  width: 30vh;
}
</style>
