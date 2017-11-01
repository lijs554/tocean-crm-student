<template>
    <div class="header">
        <div class="logo">tocean-crm-student</div>
        <div class="user-info">

            <el-dropdown trigger="click" @command="handleCommand" >
                <span class="el-dropdown-link" v-if="!!username" >
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <span class="el-dropdown-link" @click="handleCommand('loginin')" v-else >
                    <img class="user-logo" src="../../../static/img/img.jpg">
                      登录
                </span>
                <el-dropdown-menu slot="dropdown"  v-if="!!username">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'li'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : '';
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.go(0);
                } else if(command == 'loginin'){
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
