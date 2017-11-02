<template>
    <div>
        <div class="crumbs" >
            <el-row>
                <el-col :span="2" ><div class="grid-content bg-purple-light font1">当前功能：</div></el-col>
                <el-col :span="90"><div class="grid-content bg-purple-light font2">调查列表管理</div></el-col>
            </el-row>
        </div>
        <div class="select-tips">
            <i class="s1">调查列表</i><i class="s2"> (+ 单击标题栏展开)</i>
        </div>
        <div class="border">
            <table class="imagetable">
                <tr>
                    <th>序号</th><th>调查名称</th><th>调查内容</th><th>考评对象</th><th>调查时间</th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    table.imagetable {
        font-family: verdana,arial,sans-serif;
        font-size:11px;
        color:#409EFF;
        border-width: 1px;
        border-color: #999999;
        border-collapse: collapse;
        width:95%;
        margin:20px auto 0;
    }
    table.imagetable th {
        background: #eef7fd;
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #999999;
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
    .border{
        width:100%;
        height:600px;
        border:1px solid #d1e2f2;
    }

    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
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
