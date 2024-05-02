<template>
    <div> <span>{{ action }}</span></div>
 
</template>

<script setup>
defineProps({
    action: {
        type: String,
    },
});
</script>

<style scoped>
span{
    padding:10px 20px;
    border-radius:30px;
    color:black;
    cursor: pointer;
    font-weight: bold;
    background-color: #fff;
}
span:hover{
  color:#fff;
  background-color: rgb(76, 174, 255);  

}
</style>