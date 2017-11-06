<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple-dark"><i>当前功能:</i><b>提交作业 </b></div>
            </el-col>
        </el-row>
        <div class="el-button1"  style="
             background-color:  #d1e2f2;height: 50px"  >

            <el-button class="elbutton1" style="margin-bottom: 15px;margin-top: 10px;margin-left: 900px" @click="onSubmit">提交</el-button>
        </div>
        <div class="middle">
            <el-collapse v-model="activeNames" @change="handleChange">

                <el-collapse-item title="基本资料(+ 单击标题栏展开)" name="1">
                    <div class="top"><span class="middle-top-s2">您不是学员，不能提交作业！</span></div>
                    <div class="bottom">
                        <table class="middle-table" border="1">
                            <tr>
                                <td align="center">标题</td>
                                <td><input class="middle-input"/></td>
                                <td align="center" width="100px">学员</td>
                                <td><input  class="middle-input"/></td>
                            </tr>
                            <tr>
                                <td align="center">源代码和文档</td>
                                <td colspan="3"><input  type="file" class="middle-input-1" placeholder="未选择任何项目"/></td>
                            </tr>
                        </table>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>


        <div class="middle-last" align="center">
            <el-button class="middle-last-button" style="margin-top: 10px;margin-bottom: 10px" @click="sure">确认提交</el-button>
            <el-button class="middle-last-button" style="margin-top: 10px;margin-bottom: 10px" @click="again">重新输入</el-button>
        </div>

    </div>
</template>

<script>
    import ElButtonGroup from "../../../node_modules/element-ui/packages/button/src/button-group";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    export default {

        methods: {
            onSubmit() {
                this.$message({
                    showClose: true,
                    message: "提交成功"

                });
            },
            sure(){
                this.$message({
                    showClose: true,
                    message: "信息已确认，我爱你！"

                });
            },
            again(){
                this.$message({
                    showClose: true,
                    message: "重新输入中，我还是爱你！"

                });
            }
        }
    }
</script>
<style >
    .middle{

        margin-top: 20px;
    }
    .middle-top{
        margin:10px 0px 10px 10px;
    }
    span.middle-top-s1{

        font-weight: bold;
    }
    span.middle-top-s{
        font-size: 10px;
    }
    span.middle-top-s2{
        background-color: yellow;
    }
    table.middle-table{
        width: 950px;
        margin-left: 25px;
        margin-top: 20px;
        margin-bottom: 20px;

        border-collapse: collapse;
    }
    input.middle-input{
        width: 300px;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
    }
    input.middle-input-1{
        width: 500px;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
    }
    .middle-last{
        background-color: #d1e2f2;
        margin-top: 20px;
    }

    @import '../../../static/css/common.css';

</style>
