<template>
  <div class="common-layout index">
      <el-container>
        <el-header>
          <PbHeader/>
        </el-header>
        <el-main class="container">
          <!-- <HomePage/> -->
          <!-- <ArticleDetailPage/> -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <PbFooter/>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
  import PbHeader from "./components/PbHeader.vue"
  import PbFooter from "./components/PbFooter.vue"
  export default {
    name: 'App',
    components: {
      PbHeader,
      PbFooter
    },
    setup(){

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
