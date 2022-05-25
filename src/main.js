import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {createRouter,createWebHistory} from 'vue-router'

import studentDataComp from './components/showStudentData.vue';
import studentFormComp from './components/studentForm.vue';
import homepageComp from './components/Homepage.vue';
import notfoundComp from './components/navigation.vue' ;
import studentDetailsComp from './components/studentDetails.vue';

import axios  from 'axios';

const routes = [
    {
        path:'/students', 
        component:studentDataComp,
       
    },
    {
        path:'/students/:id',
        component:studentDetailsComp,
        props:true
    },
    {
        path:'/Add_Student',
        component:studentFormComp
    },
    {
        path:'/home',
        component:homepageComp
    },
    {
        path:'/',
        component:homepageComp
    },
    {
        path:'/:Notfound(.*)*',
        component:notfoundComp
    }
    
    
]

axios.defaults.baseURL='http://localhost:2000/'
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

