<template>
    <div>
        <PicProfile/>
        <MyInfo/>
        <ArticlePreview/>
    </div>
</template>
<script>
    import PicProfile from "../components/PicProfile.vue"
    import MyInfo from "../components/MyInfo.vue"
    import ArticlePreview from "../components/ArticlePreview.vue"
    export default {
        name: "HomePage",
        components: {
            PicProfile,
            MyInfo,
            ArticlePreview
        }
    }
</script>
<style lang="">
    
</style>