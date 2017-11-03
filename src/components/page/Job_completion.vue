<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark">当前功能:<b>作业信息查询 </b></div>
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

					课程:
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in courses" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>

					学员：
					<input type="text" class="inputText1" placeholder="请输入姓名"></input>

					<el-button type="primary" round>查询</el-button>

				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>作业信息查询 </b> (+ 单击标题栏展开)</div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="xh" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="学员">
				</el-table-column>
				<el-table-column prop="contentClass" label="班级">
				</el-table-column>
				<el-table-column prop="title" label="作业标题">
				</el-table-column>
				<el-table-column prop="buzhiDate" label="布置日期">
				</el-table-column>
				<el-table-column prop="course" label="课程">
				</el-table-column>
				<el-table-column prop="score" label="分数">
				</el-table-column>
			</el-table>
			<div class="contentBottom">
				<a href="#">『首页』</a>&nbsp;&nbsp;
				<a href="#">[上一页]</a>&nbsp;&nbsp;
				<a href="#">[下一页] </a>&nbsp;&nbsp;
				<a href="#">『尾页』</a>&nbsp;&nbsp;
				<span>共 0 条 共 0 页 第 1 页 </span> &nbsp;&nbsp;
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

				courses: [{
					value: '选项1',
					label: 'Java--从入门到放弃'
				}, {
					value: '选项2',
					label: 'JavaScript--从入门到精通'
				}, {
					value: '选项3',
					label: '人生苦短，我用Python'
				}, {
					value: '选项4',
					label: '颈椎病康复治疗'
				}, {
					value: '选项5',
					label: '代码大全2'
				}],
				value: '',

				tableData: [{
					xh: '1',
					name: '詹欣宇',
					contentClass: 'SD0806',
					title: '',
					buzhiDate: '',
					course: '一个演员的自我修养',
					score: '100.0'
				}]
			}
		}
	}
</script>

<style scoped>
	@import '../../../static/css/common.css';
</style>