import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Register=()=>import('@/pages/register');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/register'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
