import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/readme'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/employment',
                    component: resolve => require(['../components/page/Employment.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/questionnaire',
                    component: resolve => require(['../components/page/Questionnaire.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/his_questionnaire',
                    component: resolve => require(['../components/page/His_Questionnaire.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/week_report',
                    component: resolve => require(['../components/page/week_Report.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/day_report',
                    component: resolve => require(['../components/page/day_Report.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/week_history_report',
                    component: resolve => require(['../components/page/week_history_Report.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/day_history_report',
                    component: resolve => require(['../components/page/day_history_Report.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/operation',
                    component: resolve => require(['../components/page/Operation.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/project',
                    component: resolve => require(['../components/page/Project.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/student_files',
                    component: resolve => require(['../components/page/Student_files.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/attendance_Record',
                    component: resolve => require(['../components/page/Attendance_Record.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/discipline_record',
                    component: resolve => require(['../components/page/Discipline_record.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/praise_record',
                    component: resolve => require(['../components/page/Praise_record.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/job_completion',
                    component: resolve => require(['../components/page/Job_completion.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/project_assessment',
                    component: resolve => require(['../components/page/Project_assessment.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/cl_ma_initiative',
                    component: resolve => require(['../components/page/Cl_ma_initiative.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/speech_inquiries',
                    component: resolve => require(['../components/page/Speech_inquiries.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/gr_dis_query',
                    component: resolve => require(['../components/page/Gr_dis_query.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/comprehensive_score',
                    component: resolve => require(['../components/page/Comprehensive_score.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
