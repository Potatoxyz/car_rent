import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Register=()=>import('@/pages/register');
const VerifyCode=()=>import('@/pages/verifyCode');
const SetPwd=()=>import('@/pages/setPwd');
const RegisterSuccess=()=>import('@/pages/registerSuccess');
const Login=()=>import('@/pages/login');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect:'/register'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/verifyCode',
      name: 'VerifyCode',
      component: VerifyCode
    },
    {
      path: '/setPwd',
      name: 'SetPwd',
      component: SetPwd
    },
    {
      path: '/registerSuccess',
      name: 'RegisterSuccess',
      component: RegisterSuccess
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
