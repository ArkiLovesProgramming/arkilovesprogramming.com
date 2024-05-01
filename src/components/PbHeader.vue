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
        <el-menu-item index="4" @click="goProjects">Hands-ons</el-menu-item>
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

            const LightSwitchOn = ref(false);

            const router = useRouter();

            const goHome = ()=>{
                router.push("/home");
            }

            const goArticles = ()=>{
                router.push("/articles");
            }

            const goProjects = ()=>{
                router.push("/projects")
            }

            return {
                activeIndex,
                LightSwitchOn,
                goHome,
                goArticles,
                goProjects
            }

        }
    }
</script>
<style lang="css" scoped>
    .el-menu-demo{
        background-color: white;
        z-index: 1;
        position: fixed;
        width: calc(100% - 40px);
    }
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