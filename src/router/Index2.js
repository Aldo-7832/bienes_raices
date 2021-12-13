import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'


Vue.use(VueRouter)


const router2 = [
    {
      path: '/',
      redirect: 'login',
      component: Login,
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('../views/Login.vue')
        }
      ]
    },
  ]

  const routes2 = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    router2
  
    
  })

  export default routes2