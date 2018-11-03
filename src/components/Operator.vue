<template>
    <div style="margin: auto; margin-top:20vh; margin-left:30vw;margin-right:30vw;">
      <b-card bg-variant="dark" text-variant="white" class="text-center">
                <div class="img">
                    <b-img :src="require('../photo/page1.png')" class="img-body"></b-img>
                </div>
                <h1>Manage Responses</h1>
                <b-form-input class="input" type="password" placeholder="Enter Password"></b-form-input>
            <b-button class="btn">Enter</b-button>
        </b-card>
    </div>
</template>

<style>
    .card-body{
        text-align: center;
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 3vh;
        width: 30vw;
        height: 7vh;
    }
    .input{
        text-align: center;
        width: 30vw;
        height: 7vh;
        margin: auto;
    }
</style>
