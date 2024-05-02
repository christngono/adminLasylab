<template>
     <div class="bord">
         <header>
            <div class="container">
                <div class="img"><img src="src/assets/image/Fichier 4logo-lasylab 1.png" alt="#"></div>
                <div class="esp-menu">
                    <div class="esp"><span>{{ txt1 }}</span></div>
                    <div class="esp-btn">
                    <div><a :href="link"><span class="btnact">{{ action }}</span></a></div>
                    
            </div>
            </div>
            <div class="deroul">
                <div class="solid"></div>
                <div class="solid2"></div>
                <div class="solid3"></div>
            </div>
            </div>
         </header>
        </div>
</template>

<script setup>


defineProps({
    txt1:{
        type:String,
    },
    action:{
        type:String, 
    },
    link:{
       type:String,  
    }
})
</script>

<style scoped>
a{
    text-decoration: none;
}
img{
    height: 65px;
}
.bord{
    border: transparent solid;
    background: #2D2E31;
    color:#fff;

}
header{
    width: 80%;
    padding-top: 10px;
    padding-left: 4%;
}
.container{
    display: flex;
    justify-items: center;
    padding: 0 10px;
}
.esp-menu{
    display: flex;
    padding: 10px 0;
    width: 80%;
    justify-items: center;
    justify-content: space-between;
}
.esp{
    font-weight: bold;
    padding: 15px 0;
}
span{
    margin: auto;
    padding: 0 10px;
}
.esp-btn{
    padding: 5px 0 ;
    position: relative;
    left: 25%;
}
.btnact{
    padding:10px 20px;
    border-radius:30px;
    color:black;
    cursor: pointer;
    font-weight: bold;
    background-color: #fff;
}
.btnact:hover{
  color:#fff;
  background-color: rgb(76, 174, 255);  

}

/* @media (max-width:600px) {
} */
   

</style>