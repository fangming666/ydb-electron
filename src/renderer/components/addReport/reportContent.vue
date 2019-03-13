<template>
    <div class="report-content">
        <div class="add-report-item">
            <h2 class="add-report-title">第一步-基本信息设置</h2>
            <div class="form-inline">
                <div class="form-group">
                    <label>选择年级</label>
                    <select class="custom-select form-control-lg" v-model="gradeVal">
                        <option selected value="高二">高二</option>
                        <option value="高一">高一</option>
                        <option value="高三">高三</option>
                    </select>
                </div>
            </div>
            <div class="form-inline">
                <div class="form-group">
                    <label>考试名称</label>
                    <select class="custom-select form-control-lg" v-model="yearVal">
                        <option value="18-19学年" selected>18-19学年</option>
                        <option value="16-17学年">16-17学年</option>
                        <option value="17-18学年">17-18学年</option>
                    </select>
                    <select class="custom-select form-control-lg" v-model="termVal">
                        <option selected value="第二学期">第二学期</option>
                        <option value="第一学期">第一学期</option>
                    </select>
                    <input @keyup="inputChange"
                           v-model="examName"
                           :class="['form-control','form-control-lg',alertSwitch?'border-danger':'']"
                           placeholder="请输入考试名称">
                    <span v-if="alertSwitch" class="info-text">请输入考试名称</span>
                </div>
            </div>
        </div>
        <div class="add-report-item add-report-item-other">
            <h2 class="add-report-title">第二步-导入成绩</h2>
            <div class="text-center" v-if="analyse">
                <button class="btn btn-primary btn-lg" @click="leadingIn">
                    导入
                    <input type="file" :class="[fileSwitch?'':'hide','file-input']"
                           @change="changeFile">
                </button>
                <a href="#" class="install-link text-primary"><img :src="downloadIcon" alt="download">下载模版</a>
            </div>
            <div class="text-center" v-else>
                <p>已导入<span class="text-warning">650</span>名考生成绩</p>
                <button class="btn btn-outline-primary">重新导入
                    <input type="file" class="file-input" @change="changeFile">
                </button>
            </div>
        </div>
        <div class="add-report-item add-report-item-other">
            <h2 class="add-report-title">第三步-生成分析</h2>
            <div class="text-center" v-if="analyseSwitch">
                <button class="btn btn-primary btn-lg" :disabled="analyse" @click="goAnalyse">
                    分析
                </button>
                <a href="javascript:void(0)" @click="goAnalysisSetting" class="install-link text-primary"><img
                        :src="setIcon" alt="set">分析设置</a>
            </div>
            <div class="text-center" v-else>
                <p>
                    分析已完成<span>2019-03-4</span>
                </p>
                <button class="btn btn-outline-primary" @click="goAnalysisSetting">
                    分析设置
                </button>
            </div>
        </div>
        <Loading :reqLoadingClass="loadingClass">
            <div class="analyse-loading-info" v-if="analyseInfoSwitch">
                <p>{{analyseNum}}%</p>
                <p>正在分析</p>
            </div>
            <div class="analyse-loading-info" v-else>
                <p>导入中...</p>
            </div>
        </Loading>
        <analyseSuccessModal>
        </analyseSuccessModal>
    </div>
</template>

<script>
    import downloadIcon from "../../assets/download.svg"
    import setIcon from "../../assets/set.svg"
    import Loading from "../loading/loading"
    import analyseSuccessModal from "../analyseSuccess/analyseSuccess"
    import {mapActions} from "vuex"
    import $ from "jquery";

    export default {
        name: "reportContent",
        components: {
            Loading, analyseSuccessModal
        },
        data() {
            return {
                downloadIcon,
                setIcon,
                examName: '',//考试名称
                alertSwitch: false,//错误提示信息的开关
                fileSwitch: false,//上传文件的显示开关
                analyse: true,//分析按钮disabled的开关
                loadingClass: '',//loading的类名，便于做分析和导入不同的样式
                analyseInfoSwitch: false,//分析导入插槽的开关
                analyseNum: 1,//分析loading的进度
                analyseSwitch: true,//分析完成的开关
                gradeVal: "高二",//年纪的选项
                yearVal: "18-19学年",//学年的选择
                termVal: "第二学期",//学期的选择
            }
        },
        methods: {
            ...mapActions("examModules", ["change_list"]),
            //输入框的change事件
            inputChange() {
                this.alertSwitch = false;
                this.fileSwitch = (this.examName !== '');
            },
            //导入
            leadingIn() {
                this.alertSwitch = (this.examName === '');
                this.fileSwitch = (this.examName !== '');
            },
            //上传文件change事件
            changeFile() {
                this.loadingClass = '';
                this.analyseInfoSwitch = false;
                $("#loadingModal").modal("show");
                setTimeout(() => {
                    $("#loadingModal").modal("hide");
                    this.analyse = false;
                    this.analyseSwitch = true;
                    $(".file-input").val(null);
                }, 1000)
            },
            //分析
            goAnalyse() {
                this.loadingClass = 'analyse-loading';
                this.analyseInfoSwitch = true;
                $("#loadingModal").modal("show");
                let loadingIndex = setInterval(() => {
                    this.analyseNum++;
                    if (this.analyseNum === 100) {
                        //关闭loading，打开success模态框，进度清零
                        clearInterval(loadingIndex);
                        $("#loadingModal").modal("hide");
                        this.analyseNum = 1;
                        $("#analyseSuccessModal").modal("show");
                        this.analyseSwitch = false;
                        //得到当前的时间
                        let times = new Date();
                        let y = times.getFullYear();
                        let m = times.getMonth() + 1;
                        let d = times.getDate();
                        //改变vuex里面的报告列表的数组
                        this.change_list({
                            name: `${this.gradeVal}${this.yearVal}${this.termVal}${this.examName}`,
                            grade: `${this.gradeVal}`,
                            time: `${y}-${m}-${d}`,
                        });
                    }
                }, 20)
            },

            //进入分析设置组件
            goAnalysisSetting() {
                this.$emit("goAnalysisSetting")
            },

        },
    }
</script>

<style scoped lang="scss">
    @import "reportContent";
</style>
