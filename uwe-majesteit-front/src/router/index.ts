import Vue from 'vue'
import VueRouter from 'vue-router'
// import { AuthService } from '@/services/authService';
import App from '../App.vue'
import DashBoard from '@/components/dashboard/dashboard.component.vue';
import ChaoticMess from '@/components/chaoticmess/chaoticmess.component.vue';
import PrivacyStatement from '@/components/privacy/privacy.component.vue';
import Login from '@/components/login/login.component.vue';

Vue.use(VueRouter);
// Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'dashboard', component: DashBoard },
    { path: '/chaoticmess', name: 'chaoticmess', component: ChaoticMess },
    { path: '/login', name: 'login', component: Login },
    { path: '/privacy', name: 'privacy', component: PrivacyStatement },
  ]
});

// router.redirect({
//   '*': '/dashboard'
// });

// Authentication guard: redirect to login if credentials not provided
// const authService = new AuthService();
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !authService.checkToken()) next({ name: 'Login' });
//   else next();
// });

export default router
