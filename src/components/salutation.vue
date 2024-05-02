<template>
     <div class="contain">
            <main><h3>{{ txt }}</h3></main>
        </div>
</template>

<script setup>
defineProps({
    txt:{
        type:String,
       
    }
})
</script>

<style scoped>
.contain{
    padding: 50px;
    text-align: center;
}
main{
    border: transparent solid;
    border-radius: 20px;
    background-color:#172D3B;
    width: 50%;
    font-weight: bold;
    margin: auto;
    color:#fff;
    padding: 40px 40px;
}
@media (max-width:600px) {
    main{
        padding: 20px 20px;
    }
    h3{
        font-size: 13px;
    }
}
</style>