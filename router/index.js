import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {   
        path:'/',
        name:'Main',
        component: () => import('../src/views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component: () => import('../src/views/home/index.vue')
            },
            {   
                path:'/user',
                name:'User',
                component: () => import('../src/views/user/index.vue')
            }
        ]
    }
]

const router =new VueRouter({
    routes,
    mode:'history',
    
    
})

export default router