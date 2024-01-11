<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        ellipsis="false"
        text-color="black"
    >
        <el-menu-item class="logo" index="0">
            <span class="bold">Arkilovesprogramming</span>
        </el-menu-item>
        <el-switch class="light-switch" v-model="LightSwitchOn" />
        <div class="flex-grow" />
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Resume</el-menu-item>
        <el-menu-item index="3">Articles</el-menu-item>
        <el-menu-item index="4">Hands-ons</el-menu-item>
        <el-menu-item index="5">Search</el-menu-item>
        <el-menu-item index="6">Info</el-menu-item>
    </el-menu>
</template>
<script>
    import { ref } from 'vue'
    export default {
        name: "PbHeader",
        setup(){

            const activeIndex = ref('1')

            const handleSelect = (key, keyPath) => {
                console.log(key, keyPath)
            }

            let LightSwitchOn = ref(false);

            return {
                activeIndex,
                LightSwitchOn
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