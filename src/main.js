import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueRouter from './route/index.js'

const app = createApp(App);

app.use(ElementPlus)
app.use(VueRouter)

app.mount('#app')
