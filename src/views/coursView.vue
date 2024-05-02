<template>
  <navigation lasylab="public/Fichier 4logo-lasylab 1.png" txt1="ADMINISTRATION"/>
  <titre1 text="Nouveau cours"/>
  <block1 classe="Classe" niveau="3eme" nv1="6eme" nv2="5eme" nv3="4eme" nv4="2nde" nv5="1ere" nv6="Tle" nom="matière" matiere="mathématiques"
  mat1="Anglais" mat2="ECM" mat3="Français" mat4="géographie" mat5="SVTEEHB" mat6="Histoire" titre="Titre du cours"
   intitule="pythagore pour les nuls" objectif="objectif du cours" description="l'oblectif du cours permet d'utiliser la propriété de pythagore"/>
  <block2 text1="Pas de problème, allons ! Imaginez que vous ètes entrain de surfer sur les vagues
   de l'océan des maths. Vous tombez sur une équation du second degré qui ressemble à ça :" text2="aX² + bX + c = 0" 
   text3="C'est comme une vague géante et a, b et c sont vos planches de surf, mais attention, à ne pas etre 
   égale à zéro, sinon vous tomberez de votre planche ! Pour surfer sur cette vague, vous avez besoin de la
   formule quadratique, qui est votre guide :" text4=" X = 2a - b +/- b² - 4 ac"/>
  <lasylab title="@lasylab 2023"/>

</template>

<script setup>
import navigation from '../components/navigation.vue'
import titre1 from '../components/titre1.vue'
import block1 from '../components/block1.vue'
import block2 from '../components/block2.vue'
import lasylab from '../components/lasylab.vue'
</script>
