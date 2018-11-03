<template>
    <div style="margin: auto; margin-top: 13vh">
        
        <router-link to="/adminhome">
                <b-button class="button1">  <b-img :src="require('../photo/b.png')" class="img-body2"></b-img></b-button>
        </router-link>
        <h1>View Data</h1>

        <router-link to="/adviewdata">
            <b-button class="buttonCSS">Tourist</b-button>
        </router-link> 

        <router-link to="/showq">
            <b-button class="buttonCSS">Question</b-button>
        </router-link> 

        <router-link to="/allview">
            <b-button class="buttonCSS">All</b-button>
        </router-link> 
    </div>
</template>


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
    border-radius: 45px;
    width: 25vh;
    height: 20vh;
    font-size: 3.5vh;

    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    margin-left: 30px;
}

h1{
    color: white;
    margin-right: 570px;
}
.img-body{

    height: 20vh; 
}
.img-body2{
    width: 7vh;
    height: 7vh; 
}
</style>
