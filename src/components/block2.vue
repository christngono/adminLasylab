<template>
    <div class="port">
    <div class="top">
  <div class="bord">
    <div class="titre">LES ELEMENTS</div>
    <div class="elt">
        <div class="disp"><div class="esp">TITRE</div></div>
        <div class="disp"><div class="esp">PARAGRAPH</div></div>
        <div class="disp"><div class="esp">TITRE NIVEAU 1</div></div>
        <div class="disp"><div class="esp1">TITRE NIVEAU 2</div></div>
        <div class="disp"><div class="esp">ILLUSTRATION</div></div>
        <div class="disp"><div class="esp">EXEMPLE</div></div>
    </div>
  </div>
</div>
<div class="wrap">
   <div class="bord2">
    <div class="titre1">
     <div class="tlt">TITRE</div>
     <div class="text-block">
     <div class="txt">
        <div class="texte">
        <p>{{ text1 }}</p> 
        <p>{{ text2 }}</p> 
        <p>{{ text3 }}</p> 
        <p>{{ text4 }}</p>
        </div>
   </div>
</div>
</div>
<div class="clc">
    <div class="cc">CONCLUSION</div>
    <div class="text-block2">
    <div class="txt1">
        <div class="text2"></div>
</div>
</div>
</div>
</div>
    </div>
</div>

<div class="btn">
    <div class="bt"><div class="grey">voir les cours</div> </div>
    <div class="bt"><div class="blue">mettre en brouillon</div> </div>
    <div class="bt"><div class="orange">enregistrer</div> </div>
   </div>
</template>

<script setup>
defineProps({
    text1:{
        type:String,
    },
    text2:{
        type:String,
    },
    text3:{
        type:String,
    },
    text4:{
        type:String,
    }
})
</script>

<style scoped>
.port{
    display: flex;
}
.top{
    padding-top: 50px;
    padding-left: 70px;
}
  .bord{
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 120%;
    padding-top: 44px;
    padding-bottom: 173px;
    font-weight: bold;
    text-align: center;
  }
  .titre{
    border: transparent solid;
    border-bottom:1px outset #ccc;
    padding: 6px;
    position: relative;
    bottom: 35px;
  }
  .esp,.esp1{
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 8px 20px;
  }
  .esp1{
    font-size: 15px;
    padding: 10px 20px;
  }

  .disp{
    padding: 15px;
    position: relative;
    bottom: 25px;
  }
  .wrap{
    padding-top: 50px;
    padding-left: 228px;
  }
  .bord2{
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 92%;
    padding-bottom: 62px;
  }
  .titre1{
    padding: 20px;
    padding-top: 30px;
  }
  .tlt{
    border: transparent solid;
    background-color: rgb(76, 174, 255);
    color: white;
    border-radius: 30px;
    width: 30%;
    padding: 5px 10px;
    text-align: center;
    margin: auto;
  }
  .text-block{
    padding-top: 20px;
  }
  .texte{
    padding: 0;
  }
  .txt{
    border: 1px dashed #ccc;
    background-color: whitesmoke;
    width: 95%;
    margin: auto;
    padding: 20px 20px;
    padding-bottom: 165px;
  }
  .clc{
    padding-top: 25px;
  }
  .cc{
    border: transparent solid;
    background-color: rgb(76, 174, 255);
    color: white;
    border-radius: 30px;
    width: 50%;
    padding: 5px 10px;
    text-align: center;
    margin: auto;
  }
  .text-block2{
    padding-top: 20px;
  }
  .txt1{
    border: 1px dashed #ccc;
    background-color: whitesmoke;
    width: 91%;
    margin: auto;
    padding: 45px;
  }
  .text2{
    padding: 0;
    position: relative;
    bottom: 25px;
    right: 25px;
  }
  .btn{
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    position: relative;
    left: 30%;
    width: 66%;
    text-align: center;
  }
  .bt{
    padding: 30px 0;
  }
  .grey{
    font-weight: bold;
     border: transparent solid;
     border-radius: 30px;
     width: 114%;
     padding: 5px 10px;
     background-color: whitesmoke;
  }
  .blue{
    font-weight: bold;
    border: transparent solid;
     border-radius: 30px;
     width: 105%;
     padding: 5px 10px;
     background-color: rgb(76, 174, 255);
  }
  .orange{
    font-weight: bold;
    border: transparent solid;
     border-radius: 30px;
     width: 114%;
     padding: 5px 10px;
     background-color: rgb(255, 136, 0);
  }
  @media (max-width: 600px) {
    .port{
        flex-wrap: wrap;
        border-radius: 20px;
        padding: 25px 0;
        padding-bottom: 20px;
        font-size: 13px;
        padding-top: 40px;
    }
    .top{
        padding: 0 4px;
        margin: auto;
    }
    .disp{
        padding: 5px;
    }
    .bord{
        padding-bottom: 70px;
    }
    .bord,.esp1{
        font-size: 9px;
    }
    .esp, .esp1{
        padding: 3px 23px;
        width: 82%;
        margin: auto;
    }
    .bord2{
        width: 80%;
        padding-top: 0;
        margin: auto;
        padding-bottom: 20px;
    }
    .titre1{
        font-size: 13px;
    }
    .wrap{
        padding-left: 0;
        padding-top: 10px;
    }
    .txt{
        padding: 10px 10px 10px 10px;
    }
    .txt1{
        padding: 40px 0 45px 0;
        width: 82%;
    }
    .btn{
     margin: auto;
     flex-wrap: wrap;
     position: relative;
    }
    .bt{
        width: 102%;
     text-align: center; 
     padding: 10px;
     position: relative;
     right: 60%;
    }
    .grey{
       padding: 2px;
       width: 50%;
       font-size: 13px;
    }
    .blue{
       padding: 2px;
       width: 70%;
       font-size: 13px;
    }
    .orange{
        padding: 2px;
        font-size: 13px;
        width: 50%;
    }
  
  }
</style>