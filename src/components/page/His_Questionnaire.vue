<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple-dark"><i>当前功能:</i><b>调查列表管理 </b></div>
            </el-col>
        </el-row>

        <div class="content1">
            <div class="contentTitle"><b>调查列表</b> <i>(+ 单击标题栏展开)</i></div>
            <el-table :data="data"  border style="width: 100%">
                <el-table-column prop="Number" label="序号" width="180px">
                </el-table-column>
                <el-table-column prop="name" label="调查名称" width="210px">
                </el-table-column>
                <el-table-column prop="id" label="调查内容" width="220px">
                </el-table-column>
                <el-table-column prop="class" label="考评对象" width="220px">
                </el-table-column>
                <el-table-column prop="sex" label="调查时间" width="220px">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
    @import '../../../static/css/common.css';
</style>
