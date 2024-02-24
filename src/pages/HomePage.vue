<template>
    <div>
        <PicProfile/>
        <BadgesShow/>
        <TechStack/>
        <MyInfo/>
        <ArticlePreview/>
        <el-backtop :right="44" :bottom="44" />
    </div>
</template>
<script>
    import PicProfile from "../components/PicProfile.vue"
    import MyInfo from "../components/MyInfo.vue"
    import ArticlePreview from "../components/ArticlePreview.vue"
    import BadgesShow from "../components/Badges.vue"
    import TechStack from "../components/TechStack.vue"
    export default {
        name: "HomePage",
        components: {
            PicProfile,
            MyInfo,
            ArticlePreview,
            BadgesShow,
            TechStack
        }
    }
</script>
<style lang="css">
    
</style>