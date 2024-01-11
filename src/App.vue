<template>
  <div class="common-layout index">
      <el-container>
        <el-header>
          <PbHeader/>
        </el-header>
        <el-main class="container">
          <!-- <HomePage/> -->
          <ArticleDetailPage/>
        </el-main>
        <el-footer>
          <PbFooter/>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
  import PbHeader from "./components/PbHeader.vue"
  // import HomePage from "./components/HomePage.vue"
  // import PbArticle from "./components/PbArticle.vue"
  import ArticleDetailPage from "./components/ArticleDetailPage.vue";
  import PbFooter from "./components/PbFooter.vue"
  // import { computed, ref } from 'vue'
  export default {
    name: 'App',
    components: {
      PbHeader,
      // HomePage,
      // PbArticle,
      ArticleDetailPage,
      PbFooter
    }
    
  }
</script>

<style>
  a{
    text-decoration: none;
  }
  .container{
    height: auto;
  }


.index {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.el-main {
  height: 100%;
  overflow: hidden;
}
.el-footer {
  /* display: flex; */
  height: 4vh;
  width: 100%;
  align-items: center;
}
</style>
