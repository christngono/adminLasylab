import { createRouter, createWebHistory } from 'vue-router'

// import applicationView from '../views/applicationView.vue'
import HomeView from '../views/HomeView.vue'
import coursView from "../views/coursView.vue"
import contenueView from '../views/contenueView.vue'
import EditcourseView from '../views/EditcourseView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     
      {
        path:'/',
        name:'home',
        component: HomeView
      },
      {
        path:'/forme',
        name:'cours',
        component:coursView
      },
     {
      path:'/contenu',
      name:'contenue',
      component:contenueView
     },
     {
      path:'/edit',
      name:'edit',
      component:EditcourseView
     }
  ]
})

export default router
