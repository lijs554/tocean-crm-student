<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark">当前功能:<b>项目考核信息查询 </b></div>
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

					考评类型:
					<select class="selectQk">
						<option value="初次考核">初次考核</option>
						<option value="最终考核">最终考核</option>
					</select>

					项目:
					<select class="selectXM">
						<option value="DMS">DMS</option>
						<option value="GWAP1.0">GWAP1.0</option>
						<option value="GWAP2.0">GWAP2.0</option>
						<option value="GWAP3.0">GWAP3.0</option>
						<option value="电信计费项目">电信计费项目</option>
					</select>

				</div>


				<div class="navFirst">
					
					时间:
					
						<span class="demonstration"></span>
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
						</el-date-picker>
					 至
						<span class="demonstration"></span>
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
						</el-date-picker>
					
					得分:<input type="text" class="inputText2"></input>至<input type="text" class="inputText2"></input>
					
					<el-button type="primary" round>查询</el-button>
					
				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>项目考核信息列表</b> (+ 单击标题栏展开)</div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="xh" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="学员">
				</el-table-column>
				<el-table-column prop="contentClass" label="班级">
				</el-table-column>
				<el-table-column prop="xiangmu" label="项目">
				</el-table-column>
				<el-table-column prop="khDate" label="考核日期" width="120px">
				</el-table-column>
				<el-table-column prop="khType" label="考核类型">
				</el-table-column>
				<el-table-column prop="score" label="分数">
				</el-table-column>
			</el-table>
			<div class="contentBottom">
				<a href="#">『首页』</a>&nbsp;&nbsp;
				<a href="#">[上一页]</a>&nbsp;&nbsp;
				<a href="#">[下一页] </a>&nbsp;&nbsp;
				<a href="#">『尾页』</a>&nbsp;&nbsp;
				<span>共 2 条 共 1 页 第 1 页 </span> &nbsp;&nbsp;
				<span>转到第<input type="text" class="inputText4" value="1"></input>页 &nbsp;&nbsp; 
					每页<input type="text" class="inputText4" value="10"></input>条 &nbsp;&nbsp;
				</span>
				<el-button type="primary" round>提交</el-button>
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

				tableData: [{
					xh: '1',
					name: '',
					contentClass: '',
					xiangmu: 'DMS',
					khDate: '2017-11-10',
					khType: '初次考核',
					score: '0'
				}, {
					xh: '2',
					name: '',
					contentClass: '',
					xiangmu: 'DMS',
					khDate: '2017-11-10',
					khType: '初次考核',
					score: '0'
				}],

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