<template>
    <div class="contenu">
        <section>
            <div class="esp">
                <div class="btn1">
                    <div class="text1"><span>{{ txt }}</span></div>
                    <div>
                        <form action="">
                            <select class="cls">
                                <option selected
                                        value="">{{ clas1 }}</option>
                                <option value="">{{ clas2 }}</option>
                                <option value="">{{ clas3 }}</option>
                                <option value="">{{ clas4 }}</option>
                                <option value="">{{ clas5 }}</option>
                                <option value="">{{ clas6 }}</option>
                                <option value="">{{ clas7 }}</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div class="btn2">
                    <div class="text2"><span>{{ txt1 }}</span></div>
                    <div>
                        <form action="">
                            <select class="cls1">
                                <option selected
                                        value="">{{ mat1 }}</option>
                                <option value="">{{ mat2 }}</option>
                                <option value="">{{ mat3 }}</option>
                                <option value="">{{ mat4 }}</option>
                                <option value="">{{ mat5 }}</option>
                                <option value="">{{ mat6 }}</option>
                                <option value="">{{ mat7 }}</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>

            <div class="cls2">
                <div class="text">
                    <Span>{{ text2 }}</Span>
                </div>
                <div class="liste">
                    <Btn action="cours"/>
                     <Btn action="Exercices"/>
                     <Btn action="Epreuves"/>
                     <Btn action="vidéos"/>
                     <Btn action="Quizz"/>
                    <Btn action="Tout"/>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import Btn from "./Btn.vue";
defineProps({
   txt:{
    type:String,
   },
   txt1:{
    type:String,
   },
   text2:{
    type:String,
   },
   clas1:{
    type:String,
   },
   clas2:{
    type:String,
   },
   clas3:{
    type:String,
   },
   clas4:{
    type:String,
   },
   clas5:{
    type:String,
   },
   clas6:{
    type:String,
   },
   clas7:{
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
   mat7:{
    type:String,
   },
})
</script>


<style scoped>
.contenu{
    border: transparent solid;
    padding: 10px;
    background-color: #172D3B;
    border-radius: 25px;
    color:#fff;
    width: 70%;
    margin: auto;
}
.btn1{
    flex-wrap: wrap;
    padding: 10px;
}
.cls{
    background-color: rgb(76, 174, 255);
    color: white;
    border-radius: 30px;
    width: 80px;
    padding: 3px 3px;
}
.cls2{
    padding-top: 20px;
}
 option{
    color: white;
} 
select{
    border: transparent;
}
.btn2{
    flex-wrap: wrap;
    padding: 10px;
}
.cls1{
    background-color: rgb(76, 174, 255);
    color: white; 
    border-radius: 30px;
    width: 140px;
    padding: 3px 3px;
}
.esp{
    display: flex;
    justify-items: center;
    width: 20%;
    padding: 0 40px;
}
.esp-liste1{
    display: flex;
    width: 60%;
    padding: 0 50px;
    justify-content: space-between;
}
.esp-liste2{
    display: flex;
    width: 60%;
    justify-content: space-around;
}
.liste{
    display: flex;
    padding: 20px 0px;
    margin-left:50px;
    width: 60%;
    justify-content: space-between;
}
.text{
    font-weight: bold;
    padding: 0 60px;
}

.text1{
    padding: 10px;
    font-weight: bold;
}
.text2{
    padding: 10px;
    font-weight: bold;
}
.bt3{
  border: transparent solid ;
  border-radius: 20px;
  background-color: rgb(76, 174, 255);
  padding: 5px 22px;
  cursor: pointer;
}
.bt{
  border: 1px solid black;
  border-radius: 20px;
  padding: 6px 25px;
  background-color: white;
  cursor: pointer;
}
@media (max-width:600px) {
    .contenu{
        width: 90%;
    }
    .text{
        position: relative;
        top: 10px;
        font-size: 13px;
    }
    .liste{
        flex-wrap: wrap;
        padding: 20px;
        font-size: 13px;
    }
    .esp-liste1{
    display: flex;
    justify-items: center;
    justify-content: space-around;
    padding: 10px;
    margin: auto;
}
    .esp-liste2{
    display: flex;
    justify-items: center;
    justify-content: space-around;
    margin: auto;
    padding: 20px 0 0 20px;
}
.marge{
    padding: 5px;
}
.cls1{
 font-size: 13px;
}
.cls2{
    font-size: 13px;
}
}
</style>