<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark"><i>当前功能:</i><b>项目考核信息查询 </b></div>
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
                   考评类型:
                   <select class="selectQk">
						<option value="初次考核">初次考核</option>
						<option value="最终考核">最终考核</option>
					</select>
                    &nbsp
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
                    &nbsp
                   得分:<input type="text" class="inputText2"></input>至<input type="text" class="inputText2"></input>
                    &nbsp
					<el-button type="primary" round>查询</el-button>

				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>项目考核信息列表</b><i>(+ 单击标题栏展开)</i></div>
			<el-table :data="data" border style="width: 100%">
				<el-table-column prop="Number" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="学员">
				</el-table-column>
				<el-table-column prop="class" label="班级">
				</el-table-column>
				<el-table-column prop="project" label="项目">
				</el-table-column>
				<el-table-column prop="date" label="考核日期" width="120px">
				</el-table-column>
				<el-table-column prop="type" label="考核类型">
				</el-table-column>
				<el-table-column prop="fraction" label="分数">
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
                tableData: []
            }
        },
        created(){
            this.getData();
        },
        computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
//                    let is_del = false;
//                    for (let i = 0; i < self.del_list.length; i++) {
//                        if(d.name === self.del_list[i].name){
//                            is_del = true;
//                            break;
//                        }
//                    }
//                    if(!is_del){
//                        if(d.address.indexOf(self.select_cate) > -1 &&
//                            (d.name.indexOf(self.select_word) > -1 ||
//                            d.address.indexOf(self.select_word) > -1)
//                        ){
//                            return d;
//                        }
//                    }
                    return true;
                })
            }
        },
        methods: {
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/ms/example/project';
                };
                self.$axios.get(self.url, {page:self.cur_page}).then((res) => {
                    self.tableData = res.data.data;
                })
            }

        }

    }
</script>

<style scoped>
	@import '../../../static/css/common.css';
</style>
