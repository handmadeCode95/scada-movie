import LoginView from "@/views/LoginView.vue";
import MoviesView from "@/views/MoviesView.vue";
import JoinView from "@/views/JoinView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: MoviesView,
    },
    {
        path: "/login",
        component: LoginView,
    },
    {
        path: "/join",
        component: JoinView,
    },
    {
        path: "/reviews",
        component: MoviesView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
