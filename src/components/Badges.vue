<template>
    <div class="badges_box">
        <h4>Certificates</h4>
        <div>
            <a href="https://www.credly.com/earner/earned/badge/b999edbd-4d5a-475a-95af-80c2b2c16574" target=”_blank”><img src="../assets/aws-certified-cloud-practitioner.png" alt="aws-certified-cloud-practitioner"></a>
            <a href="https://www.credly.com/badges/e7c2573a-3dee-492b-a546-9171688adbf2/linked_in_profile" target=”_blank”><img src="../assets/aws-certified-developer-associate.png" alt="aws-certified-developer-associate"></a>
            <a href="https://www.credly.com/earner/earned/badge/b7af8d18-325a-42ab-b257-fea0c5f81851" target=”_blank”><img src="../assets/professional-scrum-master-i-psm-i.png" alt="aws-certified-cloud-practitioner"></a>
            <a href="https://www.coursera.org/account/accomplishments/specialization/UFQEPQG4LFRH" target=”_blank”><img src="../assets/meta-icon.png" alt="aws-certified-cloud-practitioner"></a>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BadgesShow",
        setup(){
            
        }
    }
</script>
<style>
    .badges_box{
        /* background-color: aqua; */
        /* height: 100px; */
        /* width: 100%; */
        margin-bottom: 20px;
    }
    .badges_box a{
        /* margin-right: 10px; */
        display: inline-block;
        padding: 5px;
    }
    .badges_box a:hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    .badges_box img{
        width: 72px;
        height: 72px;
    }
</style>