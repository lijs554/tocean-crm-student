<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple-dark"><i>当前功能:</i><b>学员考勤信息查询 </b></div>
            </el-col>
        </el-row>

        <div class="content1">
            <div class="contentTitle"><b>学员考勤信息列表 </b> <i>(+ 单击标题栏展开)</i></div>
            <table class="table" style="width: 100%">
                <tr>
                    <th prop="name" label="" width="150px" height="50px">
                        姓名
                    </th>
                    <th prop="class" label="" width="150px" height="50px">
                        班级
                    </th>
                    <th prop="direction" label="" width="180px" height="50px">
                        期望就业方向
                    </th>
                    <th prop="place" label="" width="190px" height="50px">
                        期望就业地点
                    </th>
                    <th prop="time" label="" width="190px" height="50px">
                        期望推荐时间
                    </th>
                    <th prop="Whether" label="" width="190px" height="50px">
                        是否需要拓胜推荐
                    </th>
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
                    <td>
                        <div class="block">
                            <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">
                            </el-date-picker>
                        </div>
                    </td>
                    <td>
                        <select name="">
                            <option value="0">是</option>
                            <option value="1">否</option>
                        </select>
                    </td>
                </tr>

            </table>
            <div class="contentBottom button">
                    <div class="hr1"></div>
                    <el-button type="primary" round>确认提交</el-button>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                tableData: [
                    {
                        name: '王小虎',
                        class: 'SD0806 ',
                        direction: '',
                        place: 'SD0806 ',
                        time: 'SD0806 ',
                        Whether: 'SD0806 '
                   }
                ]
            };
        }
    };
</script>
<style scoped>
    @import '../../../static/css/common.css';
</style>
