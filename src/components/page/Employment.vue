<template>
    <div>
        <div class="crumbs" >
            <el-row>
                <el-col :span="2" ><div class="grid-content bg-purple-light font1">当前功能：</div></el-col>
                <el-col :span="90"><div class="grid-content bg-purple-light font2">就业申请信息</div></el-col>
            </el-row>
        </div>
        <div class="border">
            <div class="select-tips">
                <i class="s1">申请列表</i><i class="s2"> (+ 单击标题栏展开)</i>
            </div>
            <table class="imagetable">
                <tr>
                    <th>姓名</th><th>班级</th><th>期望就业方向</th><th>期望就业地点</th><th>期望推荐时间</th><th>是否需要拓胜推荐</th>
                </tr>
                <tr>
                    <td>徐子荣</td><td>SD0806 </td>
                    <td>
                        <select name="">
                            <option value="0">Android</option>
                            <option value="1">Java</option>
                            <option value="2">运维</option>
                            <option value="3">前端</option>
                            <option value="4">php</option>
                            <option value="5">python</option>
                            <option value="6">C++</option>
                            <option value="7">C#</option>
                            <option value="8">测试方向</option>
                        </select>
                    </td>
                    <td>
                        <select name="">
                            <option value="0">广州</option>
                            <option value="1">深圳</option>
                            <option value="2">佛山</option>
                            <option value="3">东莞</option>
                            <option value="4">上海</option>
                            <option value="5">北京</option>
                            <option value="6">测试地点</option>
                        </select>
                    </td>
                    <td> <input type="text" id="date" /></td>
                    <td>
                        <select name="">
                            <option value="0">是</option>
                            <option value="1">否</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <div class="select-btn">
              <button>确认提交</button>
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
        margin:20px auto 20px;
    }
    table.imagetable th {
        background: #eef7fd;
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #999999;
    }
    table.imagetable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #999999;
        text-align: center;
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
        height:auto;
        border:1px solid #d1e2f2;
    }
    .select-btn{
        width:100%;
        height: 50px;
        background: #d1e2f2;
        line-height: 35px;
        margin-top:20px;
    }
    .select-btn button{
        width:60px;
        height: 35px;
        background: #d1e2f2;
        line-height: 35px;
       text-align: center;
        color: #409EFF;
        border:1px solid #00d1b2;
        position: relative;
        left: 50%;
        margin-left:-30px;
        margin-top:8px;
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
