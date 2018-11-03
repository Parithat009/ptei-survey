<template>
    <div style="margin: auto; margin-top: 28vh">
        <div>
            <router-link to="/home">
                <b-button class="buttonCSS">Start new questionare</b-button>
            </router-link>            
        </div>
        <div class="marginTop">
            
            <router-link to="/login">
            <b-button class="buttonCSS">Manage Responses</b-button>
            </router-link>   
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.marginTop{
    margin-top: 7vh
}

.buttonCSS{
    background-color: rgb(6, 139, 106);
    border-radius: 10px;
    width: 30vw;
    height: 10vh;
    font-size: 3.5vh;
}
</style>
