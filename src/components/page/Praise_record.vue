<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark"><i>当前功能:</i><b>学员表扬信息查询 </b></div>
			</el-col>
		</el-row>

        <div class="navMessage">
            <div class="nav">
                <div class="navFirst">
                    班级:
                    <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                    &nbsp
					学员:
					<input type="text" class="inputText1" placeholder="请输入姓名"></input>


                </div>
                <div class="navFirst">
                    &nbsp
					时间:

					<span class="demonstration"></span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                    </el-date-picker>
                    至
                    <span class="demonstration"></span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                    </el-date-picker>
                    &nbsp
					<select class="selectSex">
                    <option value="正常">正常</option>
                    <option value="请假">请假</option>
                    <option value="迟到">迟到</option>
                    <option value="早退">早退</option>
                    <option value="旷课">旷课</option>
                </select>
                    &nbsp
					<el-button type="primary" round>查询</el-button>
                </div>
            </div>

        </div>

		<div class="content1">
			<div class="contentTitle"><b>学员表扬信息查询 </b> <i>(+ 单击标题栏展开)</i></div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="xh" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="学员">
				</el-table-column>
				<el-table-column prop="contentClass" label="班级">
				</el-table-column>
				<el-table-column prop="biaoyang" label="表扬时间">
				</el-table-column>
				<el-table-column prop="reason" label="表扬原因">
				</el-table-column>
				<el-table-column prop="addFen" label="表扬加分">
				</el-table-column>
			</el-table>
            <div class="contentBottom">
                <div class="hr1"></div>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </div>
                <el-button type="primary" class="button" round>提交</el-button>
            </div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',

				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				},
				value1: '',

			}
		}
	}
</script>

<style scoped>
	@import '../../../static/css/common.css';
</style>
