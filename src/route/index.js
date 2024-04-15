import { createRouter,createWebHistory} from "vue-router";

const HomePage = () => import("../pages/HomePage.vue")
const ArticlePage = () => import("../pages/ArticlePage.vue")
const ArticleDetailPage = () => import("../pages/ArticleDetailPage.vue")

const routes = [
  {
    path: ["/home", "/"],
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
  }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})