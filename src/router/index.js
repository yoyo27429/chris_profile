import { createRouter, createWebHistory } from "vue-router";
import NotFoundComponent from "../views/NotFoundPage.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("../views/Project.vue"),
    children: [
      {
        path: "",
        name: "ProjectHome",
        component: () => import("@/components/Project/Post.vue"),
      },
      {
        path: "/project/post",
        name: "Post",
        component: () => import("@/components/Project/Post.vue"),
      },
      {
        path: "/project/under",
        name: "Under",
        component: () => import("@/components/Project/Under.vue"),
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
  { path: "/:pathMactvh(.*)", component: NotFoundComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
