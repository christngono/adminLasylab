<template>
  <div class="align">
    <div class="block">
     <div class="left"><div class="bord">{{ crs }}</div></div>   
        <div class="bord-plus">
        <div class="pst">
   <div class="plus">
    <div class="center">
    <div class="esp"><div class="long"></div> </div>
   <div class="esp"><div class="large"></div></div> 
    </div>
</div>
</div>
    </div>
    </div>
        <div class="block">
       <div class="left"><div class="bord">{{ vde }}</div></div> 
        <div class="bord-plus">
        <div class="pst">
   <div class="plus">
    <div class="center">
    <div class="esp"><div class="long"></div> </div>
   <div class="esp"><div class="large"></div></div> 
    </div>
</div>
    </div>
</div>
    </div>
        <div class="block">
       <div class="left"><div class="bord">{{ epv }}</div></div> 
        <div class="bord-plus">
        <div class="pst">
   <div class="plus">
    <div class="center">
    <div class="esp"><div class="long"></div> </div>
   <div class="esp"><div class="large"></div></div> 
    </div>
</div>
</div>
    </div>
    </div>
        <div class="block">
      <div class="left"><div class="bord">{{ qiz }}</div></div>  
        <div class="bord-plus">
        <div class="pst">
   <div class="plus">
    <div class="center">
    <div class="esp"><div class="long"></div> </div>
   <div class="esp"><div class="large"></div></div> 
    </div>
</div>
</div>
    </div>
    </div>
   
</div>
    <div class="block1">
     <div class="left1"><div class="bord1">{{ exo }}</div></div>  
        <div class="bord-plus1">
        <div class="pst1">
   <div class="plus1">
    <div class="center1">
    <div class="esp"><div class="long"></div> </div>
   <div class="esp"><div class="large"></div></div> 
    </div>
</div>
</div>
    </div>
    </div>

</template>

<script setup>
defineProps({
    crs:{
        type:String,
    },
    vde:{
        type:String, 
    },
    epv:{
        type:String,
    },
    qiz:{
        type:String,
    },
    exo:{
        type:String,
    }
    
})
</script>

<style scoped>
.align{
    display: flex;
    padding-top: 50px;
}
.block{
    margin: auto;
    padding-left: 60px;
    width: 24%;
}
.block1{
    padding: 30px 5.5% 0;
}
.bord{
    border: 1px solid #ccc;
    border-radius: 30px;
    width: 60%;
    padding: 5px;
    text-align: center;
    font-weight: bold;
}
.left{
    position: relative;
    left: 5px;
}
.left1{
    margin: auto;
}
.bord1{
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 30px;
    width: 14%;
    padding: 5px;
    text-align: center;
}
.plus{
    border: transparent solid;
    border-radius: 50%;
    width: 10%;
    padding: 10px 90px;
    background-color: #fff;
    position: relative;
    bottom: 30px;
    margin: auto;
}
.pst{
    padding-top: 60px;
}
.long{
   border: transparent solid;
   background-color: #ccc;
   padding: 8px;
   width: 118px;
   margin: auto;
   position: relative;
   top: 84px;
   right: 60px;
}
.large{
    border: transparent solid;
    background-color: #ccc;
    padding: 5px 11px 70px;
    width: 20px;
    margin: auto;
    padding-top: 41px;
    position: relative;
    right: 17px;
}
.esp{
    padding: 6px;
}
.center{
   position: relative;
   bottom: 20px;
   right: 5px;
}
.bord-plus{
    border: transparent solid;
    border-radius: 20px;
    background-color: #ccc;
    width: 90%;
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
    right: 10%;
    top: 10px;
}
.plus1{
    border: transparent solid;
    border-radius: 50%;
    width: 10%;
    padding: 10px 90px;
    background-color: #fff;
    position: relative;
    bottom: 25px;
    margin: auto;
}
.bord-plus1{
    border: transparent solid;
    border-radius: 20px;
    background-color: #ccc;
    width: 20%;
    padding-top: 5%;
    position: relative;
    right: 3%;
    top: 10px;
}
.pst1{
    padding-bottom: 10px;
}
.center1{
    position: relative;
   bottom: 20px;
   right: 5px;
}
/* .esp-img{
  border: transparent solid;
  border-radius: 20px;
  background-color: #ccc;
  width: 120%;
  padding-top: 30%;
 position: relative;
 right: 23%;

}
.top{
    padding-top: 10px;
}
.esp-img1{
    border: transparent solid;
  border-radius: 20px;
  background-color: #ccc;
  width: 26%;
  padding-top: 5%;
  position: relative;
  right: 5%;
}
.img{
  border: transparent solid;
  border-radius: 50%;
  width: 80%;
  background-color: white;
  padding: 86px 80px;
  margin: auto;
}

img{
  height:80px;
}
.port{
    position: relative;
    bottom: 40px;
    padding: 0 5px 5px 0;
}
.port1{
    position: relative;
    bottom: 30px;
    padding: 0 5px 5px 0;
} */
</style>