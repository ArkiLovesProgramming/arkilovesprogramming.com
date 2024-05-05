<template>
    <div class="TechStack">
        <h4 class="hp_title">Tech Stack</h4>
        <el-row :gutter="2" justify="space-around">
            <el-col :span="8">
                <div style="text-align: center;"><h5>Back-end Development</h5></div>
                <div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-spring ci-3x"></i>
                        <p>Spring Boot</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-nodejs ci-3x"></i>
                        <p>Node.js</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-django-wordmark ci-3x"></i>
                        <p>Django</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/flask.jpg" alt="Flask">
                        <p>Flask</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-redis ci-3x"></i>
                        <p>Redis</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/elasticsearch.png" alt="ElasticSearch">
                        <p>ElasticSearch</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-mysql-vertical ci-3x"></i>
                        <p>MySql</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-mongodb-horizontal ci-3x"></i>
                        <p>MongoDB</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-postgresql ci-3x"></i>
                        <p>Postgredb</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/hibernate.png" alt="Hibernate">
                        <p>Hibernate</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/mybatis.jpg" alt="ElasticSearch">
                        <p>Mybatis</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/maven-svgrepo-com.png" alt="maven">
                        <p>Maven</p>
                    </div>
                    <!-- <div class="spacer"></div> -->
                </div>
            </el-col>
            <el-col :span="8">
                <div style="text-align: center;"><h5>Front-end Development</h5></div>
                <div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-reactjs ci-3x"></i>
                        <p>React</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-vuejs ci-3x"></i>
                        <p>Vue2 & 3</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-html ci-3x"></i>
                        <p>Html5</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-css ci-3x"></i>
                        <p>CSS3</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-js ci-3x"></i>
                        <p>JavaScript</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/es6.png" alt="ES6">
                        <p>ES6</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-ts ci-3x"></i>
                        <p>TypeScript</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/jquery.png" alt="Jquery">
                        <p>Jquery</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-npm-wordmark ci-3x"></i>
                        <p>npm</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/nginx.png" alt="Nginx">
                        <p>Nginx</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-bootstrap ci-3x"></i>
                        <p>Bootstrap</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img style="width: auto;" src="../assets/TeckIcons/ElementUI.jpg" alt="ElementUI">
                        <p>ElementUI</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-tailwind ci-3x"></i>
                        <p>Tailwind</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div style="text-align: center;"><h5>Tools & Environments & Languages</h5></div>
                <div>
                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/postman-icon.png" alt="Postman">
                        <p>Postman</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-gcd ci-3x"></i>
                        <p>GCP</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-aws ci-3x"></i>
                        <p>AWS</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-docker-vertical ci-3x"></i>
                        <p>Docker</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-git ci-3x"></i>
                        <p>Git</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-github ci-3x"></i>
                        <p>Action</p>
                    </div>

                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/TeckIcons/ubuntu-color-icon.png" alt="ubuntu">
                        <p>Ubuntu</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-java ci-3x"></i>
                        <p>Java</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <i className="ci ci-python ci-3x"></i>
                        <p>Python</p>
                    </div>

                    <div class="tech_stack_icon hoover_scale">
                        <img src="../assets/professional-scrum-master-i-psm-i.png" alt="ubuntu">
                        <p>Scrum</p>
                    </div>
                    <div class="tech_stack_icon hoover_scale">
                        <img style="width: auto;" src="../assets/TeckIcons/kafka.png" alt="Kafka">
                        <p>Kafka</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "TechStack",
    setup() {
        return {

        }
    }
}
</script>
<style>
    .TechStack{
        margin-bottom: 20px;
    }
    .tech_stack_icon{
        display: inline-block;
        /* background-color: antiquewhite; */
        width: 75px;
        height: 75px;
        margin: 10px;
        text-align: center;
        /* box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset; */
    }
    .tech_stack_icon p{
        font-size: 13px;
    }
    .tech_stack_icon img{
        width: 48px;
        height: 48px;
        vertical-align: baseline;
    }
    .el-col{
        text-align: center;
        /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
        border-right: 1px solid #dedfe0;
    }
    .el-col:last-child{
        border: none;
    }
</style>