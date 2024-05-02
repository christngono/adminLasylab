<template>
     <section>
  <div class="block">
   
<div class="info">
    <div >
        <div>{{ classe }}</div>
    <div class="pad1">   
     <form action="">
    <select class="btn1">
    <option selected value="">{{ niveau }}</option>
    <option value="">{{ nv1 }}</option>
    <option value="">{{ nv2 }}</option>
    <option value="">{{ nv3 }}</option>
    <option value="">{{ nv4 }}</option>
    <option value="">{{ nv5 }}</option>
    <option value="">{{ nv6 }}</option>
    </select>
    </form>
</div>
    </div>
    <div style="padding: 0 20px;">
        <div>{{ nom }}</div>
        <div class="pad2">
            <form action="">
    <select class="btn2">
    <option selected value="">{{ matiere }}</option>
    <option value="">{{ mat1 }}</option>
    <option value="">{{ mat2 }}</option>
    <option value="">{{ mat3 }}</option>
    <option value="">{{ mat4 }}</option>
    <option value="">{{ mat5 }}</option>
    <option value="">{{ mat6 }}</option>
    </select>
    </form>
        </div>
    </div>
</div>
<div class="wrap">
    <div class="besoin">  
        <div class="titre1">{{ titre }}</div>
        <div style="padding-top: 20px;">
            <input type="text" class="cls1"><span class="styl1">{{ intitule }}</span>
        </div>
</div>
<div class="detail">
    <div class="titre2">{{ objectif }}</div>
    <div style="padding-top: 13px;">
        <input type="text" class="cls2">
            <span class="styl2">{{ description }}</span>
        </div>

    </div>
</div>
</div>
</section>
</template>

<script setup>
defineProps({
   classe:{
    type:String,
   },
   niveau:{
    type:String,
   },
   nv1:{
    type:String
   },
   nv2:{
    type:String
   },
   nv3:{
    type:String
   },
   nv4:{
    type:String
   },
   nv5:{
    type:String
   },
   nv6:{
    type:String
   },
   nom:{
    type:String,
   },
   matiere:{
    type:String,
   },
   mat1:{
      type:String,
   },
   mat2:{
      type:String,
   },
   mat3:{
      type:String,
   },
   mat4:{
      type:String,
   },
   mat5:{
      type:String,
   },
   mat6:{
      type:String,
   },
   titre:{
    type:String,
   },
   intitule:{
    type:String,
   },
   objectif:{
    type:String,
   },
   description:{
    type:String,
   }
})
</script>

<style scoped>
section{
    padding-top: 50px;
}
.block{
    display: flex;
    justify-items: center;
    justify-content: space-around;
    border: 1px dashed #ccc;
    border-radius: 20px;
    width: 90%;
    padding: 20px 0 20px 0 ;
    margin: auto;
}
.info{
    display: flex;
    width: 20%;
    justify-content: space-around;
    padding: 0 160px;
}
.pad1{
    padding-top: 10px;
}
.pad2{
    padding-top: 10px;
}
.btn1{
 border: transparent solid;
 border-radius: 30px;
 background-color: rgb(76, 174, 255);
 padding: 2px 13px;
 color:#fff;
}
.btn2{
    border: transparent solid;
 border-radius: 30px;
 background-color: rgb(76, 174, 255);
 padding: 2px 20px;
 color:#fff;
}
.wrap{
    display: flex;
}
.cls1{
    padding: 30px 0;
    border: 1px solid black;
    border-radius: 10px;
    width: 117%;
    position: relative;
    right: 8px;
}
.cls2{
    border: 1px solid black;
    border-radius: 10px;
    width: 116%;
    padding: 54px 0;
}
.styl1{
    position: relative;
    bottom: 60px;
    padding: 0 10px;
}
.styl2{
    position: relative;
    bottom: 100px;
    padding: 0 20px;
}
.detail{
    padding: 0 88px;
}
@media (max-width: 600px) {
   .block{
    flex-wrap: wrap;
    padding: 25px 0;
    padding-bottom: 0;
    font-size: 13px;
   }
   .wrap{
    flex-wrap: wrap;
   }
   .besoin{
      padding-left: 38px;
      padding-top: 30px;
   }
   .cls1{
     padding: 37px 8px;
     position: relative;
     bottom: 10px;
     padding-bottom: 0;
     width: 111%;
     
   }
   .styl1{
      padding: 0;
      left: 4px;
    position: relative;
   }
   .detail{
    padding-top: 0px;
    position: relative;
    bottom: 20px;
    right: 53px;
    padding-right: 0;
   }
   .cls2{
    padding: 50px 10px;
    position: relative;
    padding-bottom: 0;
   }
   .styl2{
    padding: 0 5px;
    padding-left: 0;
   }
   .titre2{
      padding-top: 30px;
   }
}

</style>