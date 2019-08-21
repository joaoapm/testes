import Home from './views/Home.vue';
import Login from './views/Login.vue';


const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Home }
];

export default routes;