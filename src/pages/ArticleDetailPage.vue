<template>
    <div ref="containerRef">
        <div class="article_info">
            <h4 class="title_general d-inline-block">Strongly Typed String Literal Split-Map-Join in TypeScript&nbsp;<el-tag>Spring</el-tag></h4>
            <br><el-text><a href="#">Arki</a>, Written in 2022-2-21</el-text>
        </div>
        <div class="article_body">
            <div>
                <div class="paragraph">
                    <h5><a id="part1">#</a>Introduction of Resdis</h5>
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph" id="part2">
                    <h5><a>#</a>Introduction of Resdis</h5>
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph">
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph">
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph">
                    <h5><a id="part3">#</a>Introduction of Resdis</h5>
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph">
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
                <div class="paragraph">
                    <p class="mx-2">
                        Automatic assembly means that spring automatically assembles its own (such as the dispatchservlet of MVC) and third-party (such as mybatis) beans into the IOC container to achieve mutual injection between beans and complete the relevant configuration. @ EnableAutoConfiguration under @ SpringBoot Application annotation, Inject the implementation of ImportSelector class through @ Import (AutoConfiguration ImportSelector. Class), and then dig deeper to find the following figure:
                    </p>
                </div>
            </div>
            <div>
                <el-anchor
                    :container=Window
                    direction="vertical"
                    class="my_anchor"
                    type="default"
                    :offset="76"
                    @click="handleClick"
                    >
                    <el-anchor-link href="#part1" title="part1" />
                    <el-anchor-link href="#part2" title="part2" />
                    <el-anchor-link href="#part3" title="part3" />
                </el-anchor>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetailPage",
        props: ["articleId"],
        setup(){
            
        }
    }
</script>

<style lang="css" scoped>
    .title{
        color: black;
    }
    .title_general::before{
        content: '# ';
        color: #409EFF;
    }
    .article_info{
        border-bottom: 1px dotted #DCDFE6;
        padding-bottom: 10px;
    }
    .article_info > h4 > el-tag{
        vertical-align: bottom;
    }
    .article_body{
        padding: 10px 0px;
        max-width: 900px;
        margin: auto;
        /* //// */
        display: flex;
        height: 100%;
        overflow: auto;
        
    }
    .article_body .paragraph h5 > a{
        font-weight: bolder;
        color: #79bbff;
        margin-right: 5px;
    }
    .article_body .paragraph h5 > a:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    .article_body .paragraph h5{
        margin: 16px 0px;
    }
    .article_body .paragraph p{
        color: #303133!important;
        font-size: 16px;
        line-height: 27.5px;
        font-weight: 400;
    }

    .my_anchor{
        right: 0px;
        top: 186px;
        position: fixed;
        /* background-color: #79bbff; */
        width: 60px;
        border-radius: 8px 0px 0px 8px;
    }

</style>