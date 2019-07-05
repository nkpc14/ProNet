import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
Vue.use(Router);

// My Fucntion to load dynamic Views
function loadView(view) {
  return () => import(/*webpackChunkName: "view-[request]"*/ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('Dashboard'),
      // beforeEnter(to,from,next){
      //   if(store.state.idToken){
      //     next()
      //   }
      //   else{
      //     next('/')
      //   }
      // }
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: loadView('Dashboard'),
      // beforeEnter(to,from,next){
      //   if(store.state.idToken){
      //     next()
      //   }
      //   else{
      //     next('/')
      //   }
      // }
    },
  ]
})
