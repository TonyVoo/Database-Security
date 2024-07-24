import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SignupPage from '@/components/SignupPage.vue'
import RegisterAuthentication from '@/components/RegisterAuthentication.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/loginpage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/signuppage',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/registerauthentication',
        name: 'RegisterAuthentication',
        component: RegisterAuthentication
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router