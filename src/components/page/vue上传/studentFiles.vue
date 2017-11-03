<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark">当前功能:<b>学员信息查询</b></div>
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

					学员：
					<input type="text" class="inputText1" placeholder="请输入姓名"></input>

					性别:
					<select class="selectSex">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>

					毕业学校:
					<input type="text" class="inputText1" placeholder="请输入学校"></input>
				</div>

				<div class="navFirst">
					院系：
					<input type="text" class="inputText1" placeholder="请输入院系"></input>

					专业：
					<input type="text" class="inputText1" placeholder="请输入专业"></input>

					学历:
					<select class="selectSex">
						<option value="硕士">硕士</option>
						<option value="本科">本科</option>
						<option value="大专">大专</option>
						<option value="高中">高中</option>
						<option value="其他">其他</option>
					</select>
					联系电话：
					<input type="text" class="inputText1" placeholder="请输入电话"></input>

				</div>

				<div class="navFirst">
					就业薪资:<input type="text" class="inputText2"></input>至<input type="text" class="inputText2"></input>

					就业公司:<input type="text" class="inputText3" placeholder="请输入公司"></input>

					就业职位:<input type="text" class="inputText1" placeholder="请输入职位"></input>

					<el-button type="primary" round>查询</el-button>
					<el-button type="success" round>导出EXCEL</el-button>
				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>学员信息列表</b> (+ 单击标题栏展开)</div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="xh" label="序号" width="79px">
				</el-table-column>
				<el-table-column prop="name" label="学员名称" width="102px">
				</el-table-column>
				<el-table-column prop="id" label="学号" width="120px">
				</el-table-column>
				<el-table-column prop="contentClass" label="班级" width="88px">
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="74px">
				</el-table-column>
				<el-table-column prop="grad" label="学历" width="68px">
				</el-table-column>
				<el-table-column prop="startPhone" label="入学时联系电话" width="136px">
				</el-table-column>
				<el-table-column prop="endPhone" label="毕业时联系电话">
				</el-table-column>
			</el-table>
			<div class="contentBottom">
				<a href="#">『首页』</a>&nbsp;&nbsp;
				<a href="#">[上一页]</a>&nbsp;&nbsp;
				<a href="#">[下一页] </a>&nbsp;&nbsp;
				<a href="#">『尾页』</a>&nbsp;&nbsp;
				<span>共 2335 条 共 234 页 第 1 页 </span> &nbsp;&nbsp;
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
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '2',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '3',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '4',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '5',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '6',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '7',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '8',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '9',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}, {
					xh: '10',
					name: '张义增',
					id: '0200806001',
					contentClass: 'SD0806',
					sex: '男 ',
					grad: '本科',
					startPhone: '13242826559',
					endPhone: ''
				}]
			}
		}
	}
</script>


<style scoped>
  @import '../../../static/css/common.css';
</style>

