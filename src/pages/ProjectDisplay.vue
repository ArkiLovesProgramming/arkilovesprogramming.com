<template>
    <div>
        <h4>
            Projects
        </h4>
        <div class="projects_content_box">
            <el-timeline style="max-width: ">
                <el-timeline-item timestamp="Nov 2023-Jan 2024" placement="top">
                    <div class="project_item">
                        <div class="project_item_left">
                            <a href="https://letschat.arkilovesprogramming.com">
                                <img src="../assets/ProjectsPic/chat.png" alt="Let's Chat">
                            </a>
                        </div>
                        <div class="project_item_right">
                            <div style="display: flex;">
                                <h5>Let's Chat</h5>
                                <span style="line-height: 24px;">&nbsp;-&nbsp;A real-time chat platform based on microservice architecture</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <el-text line-clamp="">
                                    Let's Chat is a real-time chat platform built on a microservice architecture. It features a Single Page Application developed with <el-text tag="b">React.js</el-text> and <el-text tag="b">Material UI</el-text> for UI rendering and routing. Real-time messages are stored using <el-text tag="b">Spring Data</el-text> and <el-text tag="b">MongoDB</el-text>, with communication facilitated between services through <el-text tag="b">Kafka</el-text>, <el-text tag="b">Amazon SNS</el-text>, and <el-text tag="b">Amazon SQS</el-text>. Communication is achieved through <el-text tag="b">WebSocket</el-text> with <el-text tag="b">Spring Boot</el-text>, ensuring real-time message streaming. High availability is maintained through multizone deployment and load balancing, with scalability ensured by <el-text tag="b">AWS autoscaling groups</el-text>. User authentication and authorization are managed using <el-text tag="b">AWS Cognito</el-text>, enabling Single Sign-on.       
                                    <!-- Let's Chat is a real-time chat platform built on a microservice architecture. It features a Single Page Application developed with React.js and Material UI for UI rendering and routing. Real-time messages are stored using Spring Data and MongoDB, with communication facilitated between services through Kafka, Amazon SNS, and Amazon SQS. Communication is achieved through WebSocket with Spring Boot, ensuring real-time message streaming. High availability is maintained through multizone deployment and load balancing, with scalability ensured by AWS autoscaling groups. User authentication and authorization are managed using AWS Cognito, enabling Single Sign-on across web pages.       -->
                                </el-text>
                            </div>
                            <div>
                                Demo Website: 
                                <a href="https://letschat.arkilovesprogramming.com">https://smartsearch.arkilovesprogramming.com</a><br>
                                Source Code: 
                                <a href="https://github.com/ArkiLovesProgramming/lets-chat">https://smartsearch.arkilovesprogramming.com</a>
                            </div>
                        </div>
                    </div>
                </el-timeline-item>
                <el-timeline-item timestamp="Nov 2023-Jan 2024" placement="top">
                    <div class="project_item">
                        <div class="project_item_left">
                            <a href="https://smartsearch.arkilovesprogramming.com">
                                <img src="../assets/ProjectsPic/sm.png" alt="Smart Search">
                            </a>                            
                        </div>
                        <div class="project_item_right">
                            <div style="display: flex;">
                                <h5>Smart Search</h5>
                                <span style="line-height: 24px;">&nbsp;-&nbsp;A Search Engine powered by Semantic Analysis</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <el-text line-clamp="6">
                                    <el-text tag="b">Smart Search</el-text> is a semantic analysis-driven search engine project. It employs <el-text tag="b">Vue.js</el-text> for frontend development and <el-text tag="b">Spring Boot</el-text> for backend microservices, standardized with <el-text tag="b">Swagger</el-text>. Security is strengthened using <el-text tag="b">Spring Security</el-text> + <el-text tag="b">JWT</el-text>, and data encryption is managed by <el-text tag="b">AWS Secrets Manager</el-text>. Leveraging <el-text tag="b">Elastic Search</el-text>'s features enables efficient document search and similarity ranking. A <el-text tag="b">Naive Bayes classifier</el-text> enhances its capabilities. Automated CI/CD pipeline with <el-text tag="b">GitHub Actions</el-text> handles build, test, deployment, and release, with <el-text tag="b">Docker</el-text> containerization and deployment on <el-text tag="b">AWS ECS</el-text>, integrated with <el-text tag="b">AWS RDS</el-text>, <el-text tag="b">ALB</el-text>, and related services.
                                    <!-- Smart Search is a semantic analysis-driven search engine project. It employs Vue.js for frontend development and Spring Boot for backend microservices, standardized with Swagger. Security is strengthened using Spring Security + JWT, and data encryption is managed by AWS Secrets Manager. Leveraging Elastic Search's features enables efficient document search and similarity ranking. A Naive Bayes classifier enhances its capabilities. Automated CI/CD pipeline with GitHub Actions handles build, test, deployment, and release, with Docker containerization and deployment on AWS ECS, integrated with AWS RDS, ALB, and related services. -->
                                </el-text>
                            </div>
                            <div>
                                Demo Website: 
                                <a href="https://smartsearch.arkilovesprogramming.com">https://smartsearch.arkilovesprogramming.com</a><br>
                                Source Code: 
                                <a href="https://github.com/ArkiLovesProgramming/smart-search">https://smartsearch.arkilovesprogramming.com</a>
                            </div>
                        </div>
                    </div>
                </el-timeline-item>
                <el-timeline-item timestamp="Nov 2023-Jan 2024" placement="top">
                    <div class="project_item">
                        <div class="project_item_left">
                            <a href="http://weiblog.arkilovesprogramming.com">
                                <img src="../assets/ProjectsPic/weiblog.png" alt="Smart Search">
                            </a>
                        </div>
                        <div class="project_item_right">
                            <div style="display: flex;">
                                <h5>WEIBlog</h5>
                                <span style="line-height: 24px;">&nbsp;-&nbsp;A Comprehensive Social Blog System</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <el-text line-clamp="6">    
                                    <el-text tag="b">WEIBlog</el-text> is a comprehensive social blog system project. It features MVC models built with <el-text tag="b">Spring</el-text>, <el-text tag="b">Spring MVC</el-text>, <el-text tag="b">MyBatis</el-text>, etc., rendering UI pages via the JSP template engine. Responsive layout is ensured across different devices through <el-text tag="b">Bootstrap.css</el-text> implementation for an optimal user experience. Database architecture and table relationships are optimized, enabling a multilevel nested blog comment system. The system's capacity to handle traffic spikes is enhanced by introducing the <el-text tag="b">Redis</el-text> cache database before the persistent database. Keyword-based retrieval of blog content, user information, and other data is achieved through editing distance calculation.
                                    <!-- WEIBlog is a comprehensive social blog system project. It features MVC models built with Spring, Spring MVC, MyBatis, etc., rendering UI pages via the JSP template engine. Responsive layout is ensured across different devices through Bootstrap.css implementation for an optimal user experience. Database architecture and table relationships are optimized, enabling a multilevel nested blog comment system. The system's capacity to handle traffic spikes is enhanced by introducing Redis cache database before the persistent database. Keyword-based retrieval of blog content, user information, and other data is achieved through editing distance calculation. -->
                                </el-text>
                            </div>
                            <div>
                                Demo Website: 
                                <a href="http://weiblog.arkilovesprogramming.com">http://weiblog.arkilovesprogramming.com</a><br>
                                Source Code: 
                                <a href="https://github.com/ArkiLovesProgramming/wei-blog">https://github.com/ArkiLovesProgramming/wei-blog</a>
                            </div>
                        </div>
                    </div>
                </el-timeline-item>
            </el-timeline> 
        </div>
    </div>
</template>
<script>
export default {
    name: "ProjectDisplay",
    setup(){
        
    }
}
</script>
<style scoped>

    .project_item{
        display: flex;
        max-height: 288px;
        /* background-color: antiquewhite; */
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        width: 100%;
    }

    .project_item img{
        max-height: 288px;
    }

    .project_item_left{
        /* float: left */
    }

    .project_item_right{
        overflow: auto;
        /* max-height: 288px; */
        padding: 15px 25px;
    }

    @media screen and (max-width: 800px) {
        .project_item{
            flex-direction: column;
            max-height: max-content;
        }
        .project_item img{
            max-width: 100%;
        }
    }

   
</style>