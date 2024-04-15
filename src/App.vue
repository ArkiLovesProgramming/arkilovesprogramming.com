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
    height: auto;
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
  body{
    font-family: MD Primer Bold,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  }

  .hoover_scale{
    transition: transform 0.1s;
  }
  .hoover_scale:hover{
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
  .hp_title:before{
    content: "# ";
    color: #409EFF;
  }
  .mydark{
    background-color: rgb(27, 27, 31)!important;
  }
  .mydark .el-menu-item{
    color: white!important;
  }
  ::v-deep .mydark h1,
  ::v-deep .mydark h2,
  ::v-deep .mydark h3,
  ::v-deep .mydark h4,
  ::v-deep .mydark h5,
  ::v-deep .mydark h6,
  ::v-deep .mydark p {
    color: white !important;
  }
</style>
