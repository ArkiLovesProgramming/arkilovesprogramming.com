<template>
    <div class="MyInfo">
        <div>
            <h4 class="hp_title">Work experience</h4>
            <div class="content">
                <ul>
                    <li class="workexp_title">
                        <el-text class="mx-1" tag="b">Java Software Engineer</el-text>&nbsp;<el-divider
                            direction="vertical" />&nbsp;<el-text>Beijing Seeyon Software Co., Ltd.</el-text>
                    </li>
                    <li>
                        <el-text class="">Involved in the development of the company's product
                            <el-text tag="b">A8+</el-text> (An office automation platform),
                            fixed hundreds of App bugs.</el-text>
                    </li>
                    <li>
                        <el-text class="">Developed a third-party software access module using
                            <el-text tag="b">Spring Boot</el-text> by integrating many
                            third-party application APIs.</el-text>
                    </li>
                    <li>
                        <el-text class="">Realized an authentication token management module used for the
                            access of third-party App by integrating
                            <el-text tag="b">AWS KMS</el-text>.</el-text>
                    </li>
                    <li>
                        <el-text class="">Worked in a development team that adhered to the
                            <el-text tag="b">Scrum</el-text> framework, consistently delivering
                            increments in every sprint.</el-text>
                    </li>
                    <li>
                        <el-text class="">Solved the abnormal data structure issues caused by the client's
                            version iteration, saving around 70% of labour cost by coding a
                            <el-text tag="b">Java</el-text>-based database operation program
                            integrating <el-text tag="b">Hibernate</el-text>, automating the
                            execution of SQL statements.</el-text>
                    </li>
                </ul>
                <!-- - Developed third-party software access module by callaborating with team, which needs to interface with third-party applications and handle a large number of third-party application API interfaces.<br/>
            - Acquired with full-stack development skills to deal with back-end server maintenance, front-end page presentation, and manipulate database by writing sql statement.<br/>
            - Solved the problem of abnormal data structure caused by the client's version iteration and turned the manual data maintenance into an automated operation to save almost 70% labor cost by writing a java-based database operation program to automate the execution of sql.<br/>
            - updated the client data maintenance scheme from postman tool to a java-based program by proposing the idea of automatically splicing the token of a target client and calling its api，thereby making the maintenance process easier, quicker, and more efficiently. -->
            </div>
        </div>
        <div>
            <h4 class="hp_title">Projects</h4>
            <div class="content">
                <ul>
                    <li>
                        <el-text class="mx-1"><a @click="toProjects" href="#">Task Sync
                                - A synchronized task management tool for team projects
                            </a></el-text>
                        <el-tag :type="randomTagColor()" size="small">Node.js</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">React.js</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">Redux</el-tag>
                        <el-text class="float-end" type="info">2024-05-01</el-text>
                    </li>
                    <li>
                        <el-text class="mx-1"><a @click="toProjects" href="#">Let's Chat
                                - A real-time chat platform based on microservice architecture
                            </a></el-text>
                        <el-tag :type="randomTagColor()" size="small">SpringBoot</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">Websocket</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">MongoDB</el-tag>
                        <el-text class="float-end" type="info">2023-11-01</el-text>
                    </li>
                    <li>
                        <el-text class="mx-1"><a @click="toProjects" href="#">Smart Search
                                - A Search Engine powered by Semantic Analysis
                            </a></el-text>
                        <el-tag :type="randomTagColor()" size="small">Spring Security</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">Elasticsearch</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">Naive Bayes</el-tag>
                        <el-text class="float-end" type="info">2022-11-01</el-text>
                    </li>
                    <li>
                        <el-text class="mx-1"><a @click="toProjects" href="#">WEIBlog
                                - A Comprehensive Social Blog System
                            </a></el-text>
                        <el-tag :type="randomTagColor()" size="small">Spring MVC</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">MyBatis</el-tag>&nbsp;
                        <el-tag :type="randomTagColor()" size="small">Redis</el-tag>
                        <el-text class="float-end" type="info">2022-05-01</el-text>
                    </li>
                </ul>
                <!-- - Developed third-party software access module by callaborating with team, which needs to interface with third-party applications and handle a large number of third-party application API interfaces.<br/>
            - Acquired with full-stack development skills to deal with back-end server maintenance, front-end page presentation, and manipulate database by writing sql statement.<br/>
            - Solved the problem of abnormal data structure caused by the client's version iteration and turned the manual data maintenance into an automated operation to save almost 70% labor cost by writing a java-based database operation program to automate the execution of sql.<br/>
            - updated the client data maintenance scheme from postman tool to a java-based program by proposing the idea of automatically splicing the token of a target client and calling its api，thereby making the maintenance process easier, quicker, and more efficiently. -->
            </div>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { randomTagColor } from '../common/common'
export default {
    name: "MyInfo",
    setup() {

        const router = useRouter()
        const toProjects = (e)=>{
            e.preventDefault();
            router.push("/projects")
        }

        return {
            randomTagColor,
            toProjects
        }
    },
};
</script>
<style lang="css" scoped>
.MyInfo {
    margin-bottom: 20px;
}

.content>ul>li:last-child {
    /* list-style: none; */
}

.workexp_title {
    display: flex;
    align-items: center;
}
</style>