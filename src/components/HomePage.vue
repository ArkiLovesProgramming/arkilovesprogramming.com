<template>
    <div>
        <PicProfile/>
        <PicProfile/>
        <MyInfo/>
        <ArticlePreview/>
    </div>
</template>
<script>
    import PicProfile from "./PicProfile.vue"
    import MyInfo from "./MyInfo.vue"
    import ArticlePreview from "./ArticlePreview.vue"
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