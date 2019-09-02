import Home from './views/Home.vue';
import Login from './views/Login.vue';
import AnimaisLista from './views/AnimaisLista';


const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/animais', component: AnimaisLista }
];

export default routes;