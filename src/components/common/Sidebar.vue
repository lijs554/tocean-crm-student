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
                        index: '2',
                        title: '提交作业',
                    },
                    {
                        index: '2',
                        title: '提交项目'
                    },
                    {
                        index: '4',
                        title: '提交报告',
                        subs: [
                            {
                                index: 'baseform',
                                title: '提交日报'
                            },
                            {
                                index: 'vueeditor',
                                title: '提交周报'
                            },
                            {
                                index: 'markdown',
                                title: '历史日报'
                            },
                            {
                                index: 'upload',
                                title: '历史周报'
                            }
                        ]
                    },
                    {
                        index: 'basecharts',
                        title: '问卷调查',
                        subs: [
                            {
                                index: 'baseform',
                                title: '填写问卷'
                            },
                            {
                                index: 'vueeditor',
                                title: '历史问卷'
                            },
                        ]
                    },
                    {
                        index: 'drag',
                        title: '上传简历'
                    },
                    {
                        index: 'drag',
                        title: '就业申请'
                    },
                    {
                        index: 'drag',
                        title: '学员信息查询'
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
    }
    .sidebar > ul {
        height:100%;
    }
</style>
