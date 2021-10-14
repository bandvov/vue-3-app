import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Posts from "../pages/Posts.vue";
import About from "../pages/About.vue";
import DetailPage from "../pages/PostDetailPage.vue";

const routes = [
  { paht: "/", component: Main },
  { path: "/posts", component: Posts },
  { path: "/posts/:id", component: DetailPage },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
