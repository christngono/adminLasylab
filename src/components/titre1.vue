<template>
  <div class="titre">
    <h1>{{ text }}</h1>
  </div>
</template>

<script setup>
defineProps({
    text:{
        type:String,
    }
})
</script>

<style scoped>
.titre{
  text-align: center;
  padding-top: 50px;
}
</style>