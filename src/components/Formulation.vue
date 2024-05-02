<template>
  <div class="barre">
    <section>
        <div class="text">
            <span>{{ text }}</span>
        </div>
        <div class="esp">
         
              <BtnAct action='brouillon'/>
              <BtnAct :class=' btn2' action='ajouter un cour'/>
        </div>
    </section>
  </div>
</template>

<script setup>
import BtnAct from './BtnAct.vue';
defineProps({
      text:{
        type:String,
      }
})
</script>

<style scoped>
.barre{
    padding-top: 20px;
}

section{
    background: #2D2E31;
    color:#fff;
    border-radius: 30px;
    border:none;
    margin: auto;
    padding: 20px;
    width: 80%;
    display: flex;
    justify-content: space-between;
   
}
.text{
    font-weight: bold;
    width: 20%;
    padding:5px 0 0 30px;
}
.esp{
    display: flex;
    width: 40%;
    justify-content: space-around;
}

.btn2{
 
    background-color: rgb(255, 166, 0);
   
}
@media (max-width:600px) {
    section{
        width: 90%;
    }
    .esp{
        flex-wrap: wrap;
        margin: auto;
    }
  .btn2{
     font-size: 13px;
     padding: 2px 2px;
     position: relative;
     top: 4px;
     width: 150px;
  }
  .btn1{
    font-size: 13px;
    padding: 2px 2px;
  }
  .text{
    font-size: 13px;
    width: 50%;
  }
}
</style>