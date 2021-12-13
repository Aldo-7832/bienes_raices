import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  
      {
        path:'/dashMain',
        name:'Main',
        component:()=>import('../views/Main.vue')
      },
      {
        path:'/availableHousing',
        name:'AvailableHousing',
        component:()=>import('../views/AvailableHousing.vue')
      },
      {
        path:'/chat',
        name:'Chat',
        component:()=>import('../views/Chat.vue')
      },
      {
        path:'/dashboardAdmin',
        name:'DashboardAdmin',
        component:()=>import('../views/DashboardAdmin.vue')
      },
      {
        path:'/detailsHousing',
        name:'DetailsHousing',
        component:()=>import('../views/DetailsHousing.vue')
      },
      {
        path:'/error',
        name:'Error',
        component:()=>import('../views/Error.vue')
      },
      {
        path:'/favorite',
        name:'Favorite',
        component:()=>import('../views/Favorite.vue')
      },
      {
        path:'/favorite2',
        name:'Favorite2',
        component:()=>import('../views/Favorite02.vue')
      },
      {
        path:'/form',
        name:'Form',
        component:()=>import('../views/Form.vue')
      },
      // {
      //   path:'/login',
      //   name:'Login',
      //   component:()=>import('../views/Login.vue')
      // },
      {
        path:'/mailbox',
        name:'Mailbox',
        component:()=>import('../views/Mailbox.vue')
      },
      {
        path:'/notification',
        name:'Notification',
        component:()=>import('../views/Notification.vue')
      },
      {
        path:'/pricing',
        name:'Pricing',
        component:()=>import('../views/Pricing.vue')
      },
      {
        path:'/register',
        name:'Register',
        component:()=>import('../views/Register.vue')
      },
      {
        path:'/schedule',
        name:'Schedule',
        component:()=>import('../views/Schedule.vue')
      },
      {
        path:'/registerHousing',
        name:'RegisterHousing',
        component:()=>import('../views/RegisterHousing.vue')
      },
      {
        path:'/typeHousing',
        name:'TypeHousing',
        component:()=>import('../views/TypeHousing.vue')
      },
      {
        path:'/typeHousingTable',
        name:'TypeHousingTable',
        component:()=>import('../views/TypeHousingTable.vue')
      },
      {
        path:'/userProfile',
        name:'UserProfile',
        component:()=>import('../views/UserProfile.vue')
      },
      {
        path:'/verifyData',
        name:'VerifyData',
        component:()=>import('../views/VerifyData.vue')
      },
      {
        path:'/wizard',
        name:'Wizard',
        component:()=>import('../views/Wizard.vue')
      },

      {
        path:'/login',
        redirect:'login',
        component:Login,
        children:[
          {
            path:'/login',
            name:'Login',
            component:()=>import('../views/Login.vue')
          }
        ]
      }
     
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const router = new VueRouter({
//   routes
// })


export default router

