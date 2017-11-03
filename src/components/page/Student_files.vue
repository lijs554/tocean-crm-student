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
				<a href="#">『首页』</a>&nbsp;&nbsp;
				<a href="#">[上一页]</a>&nbsp;&nbsp;
				<a href="#">[下一页] </a>&nbsp;&nbsp;
				<a href="#">『尾页』</a>&nbsp;&nbsp;
                <span><i>共 2335 条</i> <i>共 234 页</i> <i>第 1 页</i> </span> &nbsp;&nbsp;
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
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
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
