<template>
    <div class="ArticlePreview">
        <h4>Article Preview</h4>
        <div class="content">
            <ul>
                <li>
                    <el-text>
                        <a href="#">Innerworkings of Springboot</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round>Spring</el-tag>
                    <el-text class="article-date">2019-8-23</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">What is git? How to use cherry pick?</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round type="danger">Git</el-tag>
                    <el-text class="article-date">2012-4-13</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">How doese HashMap works in Java? What can you get out of it?</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round>Java concept</el-tag>
                    <el-text class="article-date">2022-4-13</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">Innerworkings of Springboot</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round type="success">Spring</el-tag>
                    <el-text class="article-date">2019-8-23</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">What is git? How to use cherry pick?</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round>Git</el-tag>
                    <el-text class="article-date">2012-4-13</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">How doese HashMap works in Java? What can you get out of it?</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round>Java concept</el-tag>
                    <el-text class="article-date">2022-4-13</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">Innerworkings of Springboot</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round type="warning">Spring</el-tag>
                    <el-text class="article-date">2019-8-23</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">What is git? How to use cherry pick?</a>
                    </el-text>
                    &nbsp;
                    <el-tag size="small" round>Git</el-tag>
                    <el-text class="article-date">2012-4-13</el-text>
                </li>
                <li>
                    <el-text>
                        <a href="#">More</a>
                    </el-text>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ArticlePreview",
        setup(){
            
        }
    }
</script>
<style lang="css" scoped>
    .ArticlePreview{
        margin-bottom: 20px;
    }
    .article-date{
        float: right;
    }
    .content li:last-child{
        list-style: none;
    }
</style>