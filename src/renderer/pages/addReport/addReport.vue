<template>
    <div class="add-report">
        <BaseHead>
        </BaseHead>
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">考试报告</router-link>
            </li>
            <li :class="['breadcrumb-item',reportSwitch?'active':'']">
                <a  @click="changeReport" v-if='!reportSwitch' href="javascript:void(0)">新增报告</a>
                <span v-else>新增报告</span>
            </li>
            <li v-if="!reportSwitch" class="breadcrumb-item active">分析设置</li>
        </ol>
        <ReportContent @goAnalysisSetting="goAnalysisSetting" v-if="reportSwitch">
        </ReportContent>
        <AnalysisSetting v-else>
        </AnalysisSetting>
    </div>
</template>

<script>
    import BaseHead from '../../components/head/head'
    import ReportContent from "../../components/addReport/reportContent"
    import AnalysisSetting from "../../components/AnalysisSetting/AnalysisSetting"

    export default {
        name: "addReport",
        data() {
            return {
                reportSwitch: true,//报告设置（true）||分析设置(false)
            }
        },
        components: {
            BaseHead, ReportContent, AnalysisSetting
        },
        methods: {
            //切换到分析设置
            goAnalysisSetting() {
                this.reportSwitch = false;
            },
            //回到报告设置
            changeReport() {
                if (this.reportSwitch) return;
                this.reportSwitch = true;
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "addReport";
</style>
