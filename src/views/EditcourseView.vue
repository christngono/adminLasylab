<script>
import axios from 'axios'
import navigation from "@/components/navigation.vue"
export default {
    components: {
        "Navigation":navigation
    },
    data() {
        return {
            title: '',
            porpose: '',
            matter: "",
            classroom:"",
            content:"",
            isSuccess: false,
        };
    },
    methods: {
        onCreateCourse() {
            axios
                .post('http://localhost:8000/api/course', {
                    title: this.title,
                    porpose: this.porpose,
                     content: this.content,
                      matter: this.matter,
                      classroom: this.classroom,
                })
                .then((response) => {
                    this.isSuccess = true;
                    console.log(response);
                    this.$emit('postcreated');
                });
        },
    },
    
};
</script>

<template>
<div>
<navigation lasylab="public/Fichier 4logo-lasylab 1.png"
              txt1="ADMINISTRATION" action="voir la liste des cours" link="/"/>
 <div class="alert-message" v-if="isSuccess">
        le cour à été crée
    </div>

    <div class="name_c">
        Créer un cours
    </div>
 <div class='container-form'>
   
    <form @submit.prevent ="onCreateCourse">
        <div class="group">
             <label> titre de la leçons</label><br/>
             <input type="text" name="title" v-model="title"/>
        </div>
        <div class="group">
             <label> objectif</label><br/>
             <input type="text"   v-model="porpose"/>
        </div>
        <div class="group">
             <label> matiere</label><br/>
             <input type="text"  v-model="matter"/>
        </div>
         <div class="group">
             <label> classe</label><br/>
             <input type="text"  v-model="classroom"/>
        </div>
         <div class="group">
             <label> contenus</label><br/>
             <textarea type="text"  v-model="content"></textarea>
        </div>
        <div>
            <button type='submit'>créer le cours</button>
        </div>
       
    </form>
 </div>
 </div>  

</template>



<style>
button{
  color:#fff;
  padding:12px 20px;
  cursor: pointer;
  border:none;
  margin-top:10px;
  border-radius:30px;
  background-color: rgb(76, 174, 255);   
}
.container-form{
    color:#fff;
    display:flex;
    justify-content: center;
    padding-bottom:50px;
}
input{
    width:500px;
    height:30px;
}
.alert-message{
    color:rgb(1, 29, 18);
    background-color:#09925f;
   text-align: center;
}
textarea{
   
  width: 100%;
  height: 400px;
}
.group{
    padding-top:10px;
}
label{
    margin-bottom:20px;
}
.name_c{
    color:#fff;
    text-align:center;
    font-weight: bold;
    font-size:1.6rem;
    padding-top:20px;
    padding-bottom:20px;
}
</style>