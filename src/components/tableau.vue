<template>
    <div class="tab">
        <table>
            <thead>
                <tr>
                    <th scope="col" >N:</th>
                    <th scope="col" >TITRE:</th>
                    <th scope="col" >OBJECTIF</th>
                    <th scope="col" >MATIERES</th>
                    <th scope="col" >CLASSE</th>
                    <th scope="col" >CONTENUS</th>
                    <th scope="col" >ACTION</th>
                </tr>
            </thead>
            <tbody>
               
                <tr v-for="cour in this.cours" :key="cour.id">
                    <td>{{ cour.id }}</td>
                    <td>{{ cour.title}}</td>
                    <td>{{ cour.porpose}}</td>
                    <td>{{ cour.matter }}</td>
                    <td>{{ cour.classroom }}</td>
                    <td>{{ cour.content }}</td>
                    <td class="td-color"> 
                        <span class="btnblue">modifier</span>
                        <span class="btnred">supprime</span></td>
                </tr>
            </tbody>
        </table>
              
     </div>
</template>

<script >
import axios from 'axios'
export default{
   
    data() {
        return {
            cours: {},
        }
    },
    methods: {
        async getAnswer() {
            const { data } = await axios.get("http://localhost:8000/api/course");
            this.cours = data;
        }
    },
        beforeMount() {
            this.getAnswer();
            console.log('cest bon')
},
}

</script>

<style scoped>
.tab{
    padding: 50px;
}

th[scope='col'] {
  background-color: #172D3B;
  color: #fff;
  padding:10px;
}
table{
    border-collapse: collapse;
    margin: 20px auto;
    width: 80%;
}
td{
    border-bottom: 1px solid #ccc ;
    color:#fff;
    padding: 10px;
    text-align: center;
}
.edt{
   padding: 10px;
   border: transparent;
   color: white;
   background-color: rgb(45, 178, 255);
   border-radius: 10px;
   cursor:pointer;
}
.
.td-color{
    background-color: rgb(184, 184, 184);
}
.btnred{
   padding: 8px 10px;
   border: transparent;
   color: white;
   background-color: red;
   border-radius: 30px;
   cursor: pointer;
}
.btnblue{
   padding: 8px 10px;
   border: transparent;
   color: white;
   background-color:#4CAEFF;
   border-radius: 30px;
   cursor: pointer;
margin-left:15px;
}

  
    
</style>