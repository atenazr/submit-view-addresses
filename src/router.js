import {createRouter,createWebHistory} from 'vue-router'

import newAddress from './components/pages/newAddress.vue'
import viewAddresses from './components/pages/viewAddresses.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',component:newAddress
        },
        {
            path:'/newAddress',component:newAddress
        },
        {
            path:'/viewAddresses',component:viewAddresses
        },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;