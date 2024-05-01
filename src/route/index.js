import { createRouter,createWebHistory, } from "vue-router";

const HomePage = () => import("../pages/HomePage.vue")
const ArticlePage = () => import("../pages/ArticlePage.vue")
const ArticleDetailPage = () => import("../pages/ArticleDetailPage.vue")
const ProjectsDisplay = () => import("../pages/ProjectDisplay.vue")

const routes = [
  {
    path: "/",
    name: "root",
    component: HomePage
  },
  {
    path: "/home",
    name: "home",
    component: HomePage
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlePage
  },
  {
    path: "/article/:articleId",
    name: "article",
    component: ArticleDetailPage,
    props: true
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsDisplay
  }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})