<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item :index="items[0].index" >
                <i :class="items[0].icon"></i>{{ items[0].title }}
            </el-menu-item>
            <template v-for="item in items2"  v-if="!!username">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" >
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        index: 'readme',
                        title: '公告栏'
                    },
                    {
                        index: 'Operation',
                        title: '提交作业',
                    },
                    {
                        index: 'Project',
                        title: '提交项目'
                    },
                    {
                        index: '4',
                        title: '提交报告',
                        subs: [
                            {
                                index: 'day_Report',
                                title: '提交日报'
                            },
                            {
                                index: 'week_Report',
                                title: '提交周报'
                            },
                            {
                                index: 'day_history_Report',
                                title: '历史日报'
                            },
                            {
                                index: 'week_history_Report',
                                title: '历史周报'
                            }
                        ]
                    },
                    {
                        index: 'basecharts',
                        title: '问卷调查',
                        subs: [
                            {
                                index: 'Questionnaire',
                                title: '填写问卷'
                            },
                            {
                                index: 'His_Questionnaire',
                                title: '历史问卷'
                            },
                        ]
                    },
                    {
                        index: 'Upload',
                        title: '上传简历'
                    },
                    {
                        index: 'Employment',
                        title: '就业申请'
                    },
                    {
                        index: '10',
                        title: '学员信息查询',
                        subs: [
                            {
                                index: 'Student_files',
                                title: '学员档案'
                            },
                            {
                                index: 'Attendance_Record',
                                title: '考勤记录'
                            },
                            {
                                index: 'Discipline_record',
                                title: '违纪记录'
                            },
                            {
                                index: 'Praise_record',
                                title: '表扬记录'
                            },
                            {
                                index: 'Job_completion',
                                title: '作业完成情况'
                            },
                            {
                                index: 'Project_assessment',
                                title: '项目考核情况'
                            },
                            {
                                index: 'Cl_ma_initiative',
                                title: ' 班级管理积极性 '
                            },
                            {
                                index: 'Speech_inquiries',
                                title: '演讲查询'
                            },
                            {
                                index: 'Gr_dis_query',
                                title: ' 分组讨论查询 '
                            },
                            {
                                index: 'Comprehensive_score',
                                title: ' 综合考评分 '
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            },
            username(){
                let username = localStorage.getItem('ms_username');
                return username ;
            },
            items2(){
                return this.items.splice(1)
            }
        }

    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
        overflow-y:scroll
    }
    .sidebar > ul {
        height:100%;
    }
</style>
