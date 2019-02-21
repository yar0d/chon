import Vue from 'vue'
import Router from 'vue-router'
import { loadLanguageAsync } from '@/locales'
import Home from '@/views/Home.vue'
import Foods from '@/views/Foods.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/food',
      name: 'food',
      component: Foods
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang)
    .then(() => next())
    .catch(error => {
      console.error('Cannot load language file:', error)
      next()
    })
})

export default router
