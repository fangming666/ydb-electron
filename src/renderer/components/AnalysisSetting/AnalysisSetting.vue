<!--分析设置-->
<template>
    <div class="analysis-setting">
        <div class="analysis-setting-item">
            <h2 class="analysis-setting-title">
                学生筛选
            </h2>
            <div class="form-block">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">不计算缺考学生</span>
                </label>
            </div>
            <div class="form-block">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">不计算特殊考生</span>
                </label>
            </div>
            <div class="form-block form-block-other">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">不计算单科低于</span>
                    <input type="text" class="form-control d-inline-block" value="10">
                    <span class="custom-control-description">分学生</span>
                </label>
            </div>
            <div class="form-block form-block-other">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">不计算全科低于</span>
                    <input type="text" class="form-control d-inline-block" value="10">
                    <span class="custom-control-description">分学生</span>
                </label>
            </div>
            <div class="form-block form-block-other">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">考试科目不足</span>
                    <input type="text" class="form-control d-inline-block" value="1">
                    <span class="custom-control-description">科，全科分析时不计算该学生</span>
                </label>
            </div>
        </div>
        <div class="analysis-setting-item">
            <h2 class="analysis-setting-title">
                优良中差标准
            </h2>
            <label class="custom-control custom-radio">
                <input id="radio1" name="standard" checked type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">暂无</span>
            </label>
            <label class="custom-control custom-radio">
                <input id="radio2" name="standard" type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">优秀80%，及格60%</span>
            </label>
            <label class="custom-control custom-radio">
                <input id="radio3" name="standard" type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">优秀90%，及格60%</span>
            </label>
            <label class="custom-control custom-radio">
                <input id="radio4" name="standard" type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">优秀85%，及格60%</span>
            </label>
        </div>
        <div class="analysis-setting-item">
            <h2 class="analysis-setting-title">
                优良中差标准
            </h2>
            <label class="custom-control custom-radio">
                <input id="radio01" name="grade" checked type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">山东省等级方案</span>
            </label>
            <label class="custom-control custom-radio">
                <input id="radio02" name="grade" type="radio" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">山东省等级方案</span>
            </label>
        </div>
        <div class="analysis-setting-item">
            <h2 class="analysis-setting-title">
                全科分数段间隔
            </h2>
            <div class="form-block ">
                <div class="form-block form-block-other">
                    <label class="custom-control custom-checkbox custom-checkbox-none">
                        <span class="custom-control-description">每</span>
                        <input type="text" class="form-control d-inline-block" value="20">
                        <span class="custom-control-description">分一个分数段</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="analysis-setting-item">
            <h2 class="analysis-setting-title">
                单科分数段间隔
            </h2>
            <div class="form-block">
                <div class="form-block form-block-other">
                    <label class="custom-control custom-checkbox custom-checkbox-none">
                        <span class="custom-control-description">每</span>
                        <input type="text" class="form-control d-inline-block" value="10">
                        <span class="custom-control-description">分一个分数段</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "analysisSetting"
    }
</script>

<style scoped lang="scss">
    @import "AnalysisSetting";
</style>
