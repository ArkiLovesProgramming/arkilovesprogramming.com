<template>
    <div class="MyInfo">
        <!-- <el-text class="" size="large">My experience</el-text> -->
        <h4>My experience</h4>
        <div class="content">
            <ul>
                <li><el-text class="" siz>Involved in the development and iteration of the company's product A8+ Collaboration Management Platform (a multi- platform automated office system), fixing hundreds of customer bugs for the company.</el-text></li>
                <li><el-text class="">Developed third-party software access module by callaborating with team, which needs to interface with third-party applications and handle a large number of third-party application API interfaces.</el-text></li>
                <li><el-text class="">Acquired with full-stack development skills to deal with back-end server maintenance, front-end page presentation, and manipulate database by writing sql statement.</el-text></li>
                <li><el-text class=""><a href="">More</a></el-text></li>
            </ul>
            <!-- - Developed third-party software access module by callaborating with team, which needs to interface with third-party applications and handle a large number of third-party application API interfaces.<br/>
            - Acquired with full-stack development skills to deal with back-end server maintenance, front-end page presentation, and manipulate database by writing sql statement.<br/>
            - Solved the problem of abnormal data structure caused by the client's version iteration and turned the manual data maintenance into an automated operation to save almost 70% labor cost by writing a java-based database operation program to automate the execution of sql.<br/>
            - updated the client data maintenance scheme from postman tool to a java-based program by proposing the idea of automatically splicing the token of a target client and calling its api，thereby making the maintenance process easier, quicker, and more efficiently. -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "MyInfo",
        setup(){
            
        }
    }
</script>
<style lang="css" scoped>
    .MyInfo{
        margin-bottom: 20px;
    }
    .content > ul > li:last-child{
        list-style: none;
    }
</style>