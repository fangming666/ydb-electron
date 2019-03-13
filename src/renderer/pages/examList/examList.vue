<template>
    <div class="wrapper">
        <BaseHead>
           <span class="nav-link nav-link-active">
               考试报告
           </span>
            <span class="nav-link" @click="openLink('',4)">
                学情跟踪
            </span>
        </BaseHead>
        <div v-for="(item,index) in _examList" :key="index" class="exam-item">
            <span class="grade">{{item.grade}}</span>
            <h5 class="exam-name">{{item.name}}</h5>
            <span class="exam-time">{{item.time}}</span>
            <div class="btn-group clearfix">
                <button @click="openLink(item.grade,0)">全科报告</button>
                <button @click="openLink(item.grade,1)">数学报告</button>
                <button @click="openLink('',2)">试卷讲评</button>
                <button @click="openLink('',3)">学生讲题</button>
            </div>
        </div>
        <span class="add-report-fixed" @click="toAddReport">
            新增报告
        </span>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import BaseHead from '../../components/head/head'

    export default {
        name: 'exam-list',
        data() {
            return {
                reportLink: "http://home.yuandingbang.cn/report/demo/index?index=1",//3+3全科分析报告
                reportMathLink: "http://home.yuandingbang.cn/report/demo/index?index=1",//3+3数学报告
                reportOtherLink: "http://home.yuandingbang.cn/report/demo/kw?index=1",//非3+3全科分析报告
                reportMathOtherLink: "http://home.yuandingbang.cn/report/demo/kw?index=2",//非3+3数学报告
                trackingLink: "http://home.yuandingbang.cn/report/demo/kw?index=3",//学情跟踪的链接
                paperLink: "http://home.yuandingbang.cn/report/demo/kw?index=4",//试卷讲评的链接
                speechLink: "http://home.yuandingbang.cn/report/demo/kw?index=5",//学生讲题链接
            }
        },
        components: {
            BaseHead
        },
        computed: {
            ...mapState({
                _examList: ({examModules}) => examModules._examList
            })
        },
        created() {
            this.testWidth = document.body.offsetWidth;
        },
        methods: {
            //点击按钮进入不同的页面
            openLink(...data) {
                let [grade, index] = data;
                let linkMap = new Map([
                    [0, grade === "高二" ? this.reportLink : this.reportOtherLink],
                    [1, grade === "高二" ? this.reportMathLink : this.reportMathOtherLink],
                    [2, this.paperLink],
                    [3, this.speechLink],
                    [4, this.trackingLink]
                ]);
                let link = linkMap.get(index);
                this.$router.push({
                    path: '/webView', query: {
                        link, reqBackBtn: index === 3 ? 'back-btn-speech' : 'back-btn-paper',
                        backHomeSwitch: index !== 3,
                        reqBackHomeBtn: index === 2 ? 'back-home-paper' : '',
                    }
                })
            },

            //跳转到添加报告页面
            toAddReport() {
                this.$router.push({path: "/addReport"})
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "examList";
</style>
