<template>
    <div>
        <div class="crumbs">
            <el-row>
                <el-col :span="2" ><div class="grid-content bg-purple-light font1">当前功能：</div></el-col>
                <el-col :span="90"><div class="grid-content bg-purple-light font2">调查列表管理</div></el-col>
            </el-row>
        </div>
        <div class="plugins-tips">
            <input class="btn" type="button" value="提交"/>
        </div>
        <div class="border">
            <div class="select-tips">
                <i class="s1">基本资料</i><i class="s2"> (+ 单击标题栏展开) </i>
            </div>
            <table class="imagetable">
                <tr>
                    <th>简历:</th>
                    <td><input class="k1"  type="file" accept="image/*" /></td>
                </tr>
            </table>
        </div>
        <div class="max_btn">
            <div class="btn_box">
                <input class="btn1" type="button" value="确认提交"/>
                <input class="btn1" type="button" value="重新输入"/>
            </div>
        </div>

    </div>
</template>

<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        data: function(){
            return {
                src: './static/img/img.jpg',
                fileList: []
            }
        },
        components: {
                VueCoreImageUpload
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            }
        }
    }
</script>

<style scoped>
    .border{
        width:100%;
        height:auto;
        border:1px solid #d1e2f2;
    }
    table.imagetable {
        font-family: verdana,arial,sans-serif;
        font-size:11px;
        color:#409EFF;
        border-width: 1px;
        border-color: #999999;
        border-collapse: collapse;
        width:95%;
        margin:20px auto 20px;
    }
    table.imagetable th {
        background: #eef7fd;
        border-width: 1px;
        border-style: solid;
        border-color: #999999;
        text-align: right;
        width:150px;
        padding-right:10px;
    }
    table.imagetable td {
        background: #eef7fd;
        border-width: 1px;
        padding:8px 0;
        border-style: solid;
        border-color: #999999;
        width:1000px;
        text-align: right;
    }
    table.imagetable td .k1 {
        border-width: 1px;
        border-style: solid;
        border-color: #999999;
        width:500px;
        height:auto;
        float: left;
        margin-left:50px;
        float: left;
        text-align: right;
    }
    table.imagetable td .k2 {
        width:70px;
        height:auto;
        margin-left:0px;
    }
    .select-tips{
        width:100%;
        height: 35px;
        background: #d1e2f2;
        line-height: 35px;
    }
    .select-tips .s1{
        color: #409EFF;
        font-size:16px;
        font-weight: bold;
        font-style: normal;
        padding-left:5px;
    }
    .select-tips .s2{
        font-size: 12px;
        color:#409EFF;
        font-style: normal;
    }
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .max_btn{
        width:100%;
        height: 45px;
        background: #d1e2f2;
        line-height: 45px;
    }
    .max_btn .btn_box{
        width:150px;
        height:auto;
        position: relative;
        left:50%;
        margin-left:-50px;
        margin-top:30px;
    }
    .plugins-tips .btn{
        background: #f0f0f0;
        color: #409EFF;
        float: right;
        border: 1px solid #d1e2f2;
        margin-top: -10px;
        margin-right: 20px;
    }
    .plugins-tips .btn1{
        background: #f0f0f0;
        color: #409EFF;
        float: right;
        border: 1px solid #d1e2f2;
        margin-top: -10px;
        margin-right:10px;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        min-height: 36px;
        line-height: 36px;
    }
    .font1{
        font-size: 12px;
        padding-left:5px;
        color:#409EFF;
    }
    .font2{
        font-size: 20px;
        color: #409EFF;
        font-weight: bold;
    }
</style>
