<template>
    <div class="PicProfile">
        <el-avatar class="shadow-lg" :size="88" :src="profilepic" />
        <br>
        <el-text class="mx-1 mt-4 mb-1" size="large" truncated>
            Arki loves programming, Arki loves Alisha
        </el-text>
        <div class="contact">
            <img class="" src="../assets/github-mark.png" alt="GitHub">
            <img class="" src="../assets/gmail_icon.png" alt="Gmail">
            <img class="x" src="../assets/x.png" alt="X">
            <img class="wechat-icon" src="../assets/wechat-icon.png" alt="WeChat">
            <img class="" src="../assets/linked.png" alt="Linked">
        </div>
    </div>
</template>
<script>
    export default {
        name: "PicProfile",
        setup(){
            const profilepic = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
            return {
                profilepic,
            }
        }
    }
</script>
<style lang="css" scoped>
    .PicProfile{
        /* background-color: beige; */
        text-align:center;
        padding: 40px 0px;
        /* border-bottom: 1px 1px dotted grey; */
    }
    .contact img{
        /* width: 23px; */
        height: 23px;
        margin: 0px 10px;
    }
    .contact .x{
        width: 20px;
        height: 20px;
    }
    .contact .wechat-icon{
        width: 25px;
        height: 25px;
    }
</style>