<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark">当前功能:<b>学员考勤信息查询 </b></div>
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

					时间:
					
						<span class="demonstration"></span>
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
						</el-date-picker>
					 至
						<span class="demonstration"></span>
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
						</el-date-picker>
					
					<select class="selectSex">
						<option value="正常">正常</option>
						<option value="请假">请假</option>
						<option value="迟到">迟到</option>
						<option value="早退">早退</option>
						<option value="旷课">旷课</option>
					</select>
					<el-button type="primary" round>查询</el-button>
					
				</div>

				
				
			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>学员考勤信息列表 </b> (+ 单击标题栏展开)</div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="xh" label="序号" width="79px">
				</el-table-column>
				<el-table-column prop="name" label="学员" width="102px">
				</el-table-column>
				<el-table-column prop="contentClass" label="班级" width="88px">
				</el-table-column>
				<el-table-column prop="date" label="日期" width="122px">
				</el-table-column>
				<el-table-column prop="startTime" label="开始时间" width="117px">
				</el-table-column>
				<el-table-column prop="endTime" label="结束时间" width="136px">
				</el-table-column>
				<el-table-column prop="state" label="状态">
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
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				}, {
					xh: '2',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: '迟到'
				}, {
					xh: '3',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				}, {
					xh: '4',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				},{
					xh: '5',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: '旷课'
				},{
					xh: '6',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				},{
					xh: '7',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				},{
					xh: '8',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: '早退'
				},{
					xh: '9',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
				},{
					xh: '10',
					name: '张义增',
					contentClass: 'SD0806',
					date: '2017-11-11',
					startTime: '08:46 ',
					endTime: '18:01',
					state: ''
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
