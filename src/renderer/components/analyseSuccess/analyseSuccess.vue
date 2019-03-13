<template>
    <div class="modal fade analyse-success-modal" id="analyseSuccessModal" tabindex="-1" role="dialog"
         aria-labelledby="loadingModal"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <img :src="successImg" alt="success-img">
                    <p>分析已完成！</p>
                    <div class="clearfix">
                        <button class="btn btn-secondary float-left btn-lg" @click="leave(false)">
                            留在本页面
                        </button>
                        <button class="btn btn-primary float-right btn-lg" @click="leave(true)">
                            回到分析列表
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import successImg from "../../assets/success.png";
    import $ from "jquery";

    export default {
        name: "analyseSuccess",
        data() {
            return {
                successImg,
            }
        },
        methods: {
            //关闭模态框：true(回到分析列表页面)||false(留在本页面)
            leave(examSwitch) {
                $("#analyseSuccessModal").modal("hide");
                examSwitch && this.$router.push({path: "/"});
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "analyseSuccess";
</style>
