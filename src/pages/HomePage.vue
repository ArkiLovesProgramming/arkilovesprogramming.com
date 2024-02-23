<template>
    <div>
        <PicProfile/>
        <BadgesShow/>
        <MyInfo/>
        <ArticlePreview/>
    </div>
</template>
<script>
    import PicProfile from "../components/PicProfile.vue"
    import MyInfo from "../components/MyInfo.vue"
    import ArticlePreview from "../components/ArticlePreview.vue"
    import BadgesShow from "../components/Badges.vue"
    export default {
        name: "HomePage",
        components: {
            PicProfile,
            MyInfo,
            ArticlePreview,
            BadgesShow
        }
    }
</script>
<style lang="css">
    
</style>