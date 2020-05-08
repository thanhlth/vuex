import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/profile/Profile'
import Stocks from '@/components/stocks/Stocks'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      //name: 'Home',
      component: Profile
    },
    {
      path:'/stocks',
      component: Stocks
    }

  ]
})
