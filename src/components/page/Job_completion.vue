<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="bg-purple-dark"><i>当前功能:</i><b>作业信息查询 </b></div>
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
					课程:
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in courses" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
                    &nbsp
					学员：
					<input type="text" class="inputText1" placeholder="请输入姓名"></input>
                    &nbsp
					<el-button type="primary" round>查询</el-button>

				</div>

			</div>

		</div>

		<div class="content1">
			<div class="contentTitle"><b>作业信息查询 </b> <i>(+ 单击标题栏展开)</i></div>
			<el-table :data="data" border style="width: 100%">
				<el-table-column prop="Number" label="序号" width="130px">
				</el-table-column>
				<el-table-column prop="name" label="学员" width="130px">
				</el-table-column>
				<el-table-column prop="class" label="班级" width="130px">
				</el-table-column>
				<el-table-column prop="title" label="作业标题" width="140px">
				</el-table-column>
				<el-table-column prop="date" label="布置日期" width="140px">
				</el-table-column>
				<el-table-column prop="curriculum" label="课程" width="250px">
				</el-table-column>
				<el-table-column prop="fraction" label="分数" width="130px">
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
                    self.url = '/ms/example/check';
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
