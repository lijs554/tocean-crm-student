<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark"><i>当前功能:</i><b>学员信息查询</b></div>
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
					学员：
					<input type="text" class="inputText1" placeholder="请输入姓名"></input>
                    &nbsp
					性别:
					<select class="selectSex">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
                    &nbsp
                   毕业学校:
                   <input type="text" class="inputText1" placeholder="请输入学校"></input>
				</div>

				<div class="navFirst">
					院系：
					<input type="text" class="inputText1" placeholder="请输入院系"></input>
                    &nbsp
                   专业：
                   <input type="text" class="inputText1" placeholder="请输入专业"></input>
                    &nbsp
					学历:
					<select class="selectSex">
						<option value="硕士">硕士</option>
						<option value="本科">本科</option>
						<option value="大专">大专</option>
						<option value="高中">高中</option>
						<option value="其他">其他</option>
					</select>
                    &nbsp
					联系电话：
					<input type="text" class="inputText1" placeholder="请输入电话"></input>

				</div>

				<div class="navFirst">
					就业薪资:&nbsp<input type="text" class="inputText2"></input>至<input type="text" class="inputText2"></input>
                    &nbsp
                   就业公司:<input type="text" class="inputText3" placeholder="请输入公司"></input>
                    &nbsp
					就业职位:<input type="text" class="inputText1" placeholder="请输入职位"></input>
                    &nbsp
					<el-button type="primary" round>查询</el-button>
                    &nbsp
					<el-button type="success" round>导出EXCEL</el-button>
				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>学员信息列表</b> <i>(+ 单击标题栏展开)</i></div>
			<el-table :data="data"  border style="width: 100%">
				<el-table-column prop="Number" label="序号" width="79px">
				</el-table-column>
				<el-table-column prop="name" label="学员名称" width="102px">
				</el-table-column>
				<el-table-column prop="id" label="学号" width="120px">
				</el-table-column>
				<el-table-column prop="class" label="班级" width="88px">
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="74px">
				</el-table-column>
				<el-table-column prop="Education" label="学历" width="68px">
				</el-table-column>
				<el-table-column prop="phone" label="入学时联系电话" width="136px">
				</el-table-column>
				<el-table-column prop="endPhone" label="毕业时联系电话">
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
                    self.url = '/ms/example/student';
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
