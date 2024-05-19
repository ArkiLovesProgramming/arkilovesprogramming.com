<template>
    <div class="PicProfile">
        <p class="text1">Hi, I'm Arki! 👋</p>
        <el-avatar class="shadow-lg mb-4" :size="88" :src="arki_profile_pic" />
        <br>
        <p class="text2">An Experienced Full-Stack Web Developer 🧑‍💻</p>
        <el-text class="mx-1 mb-1" size="default" line-clamp="5">
            Graduated from Memorial University of Newfoundland with a <el-text tag="b">Master's degree</el-text> in Computer Science. Proficient in full-stack web development, including front-end frameworks (<el-text tag="b">Vue</el-text>, <el-text tag="b">React</el-text>), back-end API development (<el-text tag="b">Springboot</el-text>, <el-text tag="b">Node.js</el-text>, <el-text tag="b">Django</el-text>), and <el-text tag="b">CI/CD</el-text> with <el-text tag="b">Github Action</el-text>. Possess six years of extensive experience in Java development with rich project exposure. Demonstrated strong ability to work within agile development teams, with a deep understanding of agile methodologies. Experienced in cloud development with<el-text tag="b">AWS</el-text>, GCP, and Azure.
        </el-text>
        <div class="contact">
            <a class="hoover_scale" href="https://github.com/ArkiLovesProgramming" target="_blank"><img class="" src="../assets/github-mark.png" alt="GitHub"></a>
            <el-popover
                placement="bottom"
                title="Gmail"
                :width="200"
                trigger="click"
                content="betaweiwang@gmail.com"
            >
                <template #reference>
                    <a class="hoover_scale" href="mailto:betaweiwang@gmail.com" target="_top"><img class="" src="../assets/gmail_icon.png" alt="Gmail"></a>
                </template>
            </el-popover>
            <!-- <img class="x" src="../assets/x.png" alt="X"> -->
            <a class="hoover_scale" :href="wechat_qrcode_url" target="_blank"><img class="wechat-icon" src="../assets/wechat-icon.png" alt="WeChat"></a>
            <a class="hoover_scale" href="https://leetcode.com/u/betaweiwang/" target="_blank"><img class="wechat-icon" src="/static/img/LeetCode_logo_black.png" alt="LeetCode"></a>
            <a class="hoover_scale" href="https://www.linkedin.com/in/arkilovesprogramming/" target="_blank"><img class="" src="../assets/linked.png" alt="Linked"></a>
        </div>
    </div>
</template>
<script>
    import content from '../common/content'
    export default {
        name: "PicProfile",
        setup(){
            const profilepic = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
            const wechat_qrcode_url = require('@/assets/wechat_qrcode.jpg');
            const arki_profile_pic = require('@/assets/arki_profile_pic.jpg');

            return {
                profilepic,
                wechat_qrcode_url,
                arki_profile_pic,
                content
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
    .contact .hoover_scale{
        display: inline-block;
    }
    .text1{
        font-size: 26px;
        font-weight: bolder;
    }
    .text2{
        font-size: 20px;
        font-weight: bold;
    }
</style>