<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        ellipsis="false"
        text-color="black"
    >
        <el-menu-item class="logo" index="0" @click="goHome">
            <span class="bold">Arkilovesprogramming</span>
        </el-menu-item>
        <el-switch class="light-switch" v-model="LightSwitchOn" />
        <div class="flex-grow" />
        <el-menu-item index="1" @click="goHome">
            <span>Home</span>
        </el-menu-item>
        <el-menu-item index="2" disabled>Resume</el-menu-item>
        <el-menu-item index="3" @click="goArticles">
            <span>Articles</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>Hands-ons</el-menu-item>
        <el-menu-item index="5" disabled>Search</el-menu-item>
        <el-menu-item index="6" disabled>Info</el-menu-item>
    </el-menu>
</template>
<script>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    export default {
        name: "PbHeader",
        setup(){

            const activeIndex = ref('1')

            let LightSwitchOn = ref(false);

            let router = useRouter();

            let goHome = ()=>{
                router.push("/home");
            }

            let goArticles = ()=>{
                router.push("/articles");
            }

            // let goArticle = ()=>{
            //     router.push(`/article/123`);
            // }

            return {
                activeIndex,
                LightSwitchOn,
                goHome,
                goArticles
            }

        }
    }
</script>
<style lang="css" scoped>
    .flex-grow {
        flex-grow: 1;
    }
    .light-switch{
        height: auto!important;;
    }
    li.logo.is-active{
        background-color: inherit!important;
        border-bottom: 2px solid white;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
        color: #409EFF;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item.logo:not(.is-disabled):hover{
        background-color: inherit;
        color: #409EFF;
    }
</style>