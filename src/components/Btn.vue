<!-- bouton action -->
<template>
   <div class="btn"><span>{{ action}}</span></div>
</template>

<script setup>

defineProps({
action:{
    type:String,
},
});

</script>

<style scoped> 
span{
    padding:10px 20px;
    border-radius:30px;
    color:white;
    cursor: pointer;
    border:1px solid #fff;
}
span:hover{
  color:#fff;
  background-color: rgb(76, 174, 255);  

}
</style>