<template>
  <div class="esp">
    <footer>
       <span>{{ title }}</span>
    </footer>
  </div>
</template>

<script setup>
defineProps({
    title:{
        type:String,
    }
})
</script>

<style scoped>
.esp{
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
}
@media (max-width: 600px) {
  .esp{
    position: relative;
    bottom: 10px;
  }
}
</style>