import Vue from 'vue';
import Router from 'vue-router';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: '/about' },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/events',
            name: 'events',
            component: () => import(/* webpackChunkName: "about" */ './views/Events.vue') // LazyLoading
        },
        {
            path: '/price',
            name: 'price',
            component: () => import(/* webpackChunkName: "price" */ './views/Price.vue')
        },
        {
            path: '/school',
            name: 'school',
            component: () => import(/* webpackChunkName: "school" */ './views/School.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue')
        }
    ],
});
