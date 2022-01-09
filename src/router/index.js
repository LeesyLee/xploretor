import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Visualization = () => import('../views/visualization/Visualization')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')
const Relay = () => import('../views/relay/Relay')
const Docker = () => import('../views/docker/Docker')
const Database = () => import('../views/database/Database')
const Etc = () => import('../views/etc/Etc')
const Deploy = () => import('../views/deploy/Deploy')




const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};



Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/visualization',
    component: Visualization
  },
  {
    path: '/relay',
    component: Relay
  },
  {
    path: '/docker',
    component: Docker
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/etc',
    component: Etc
  },
  {
    path: '/database',
    component: Database
  },
  {
    path: '/deploy',
    component: Deploy
  }

]

const router = new VueRouter({
  routes
})



// const originalPush = router.prototype.push

// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }



export default router