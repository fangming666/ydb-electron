<template>
    <!-----内嵌页面---->
    <div>
        <button @click="back(false)" v-if="backSwitch" :class="['back-btn','btn','btn-secondary',reqBackBtn]">
            <i class="fa fa-angle-double-left"></i> 返回
        </button>
        <button @click="back(true)" v-if="backSwitch&&backHomeSwitch"
                :class="['back-btn','btn','btn-secondary','back-btn-other',reqBackHomeBtn]">
            <i class="fa fa-angle-double-left"></i> 返回首页
        </button>

        <iframe :src="reqLink"
                class="page-layout"
                :height="iframeHeight"
                @load="iframeInit"
                width="100%"
                name="demo"
                id="demo"
                frameborder="no"></iframe>
        <Loading>
            <div class="analyse-loading-info">
                <p>加载中...</p>
            </div>
        </Loading>

    </div>
</template>

<script>
    import Loading from "../../components/loading/loading"
    import $ from "jquery"

    export default {
        name: "webView",
        data() {
            return {
                reqLink: '',
                backSwitch: false,//当iframe内有链接时，返回显示
                iframeHeight: 0,//iframe的高度
                reqBackBtn: '',//返回按钮的类名
                reqBackHomeBtn: '',//返回首页的样式类名
                backHomeSwitch: false,//返回首页的开关
            }
        },
        components: {
            Loading
        },
        created() {
            this.reqLink = this.$route.query.link;
            this.reqBackBtn = this.$route.query.reqBackBtn;
            this.backHomeSwitch = this.$route.query.backHomeSwitch;
            this.reqBackHomeBtn = this.$route.query.reqBackHomeBtn;
        },
        mounted() {
            $("#loadingModal").modal("show");
            this.iframeHeight = document.documentElement.clientHeight - 5;
            setTimeout(() => {
                $("#loadingModal").modal("hide");
            }, 2000)
        },
        methods: {
            //返回上一页
            back(homeSwitch) {
                if (homeSwitch) {
                    this.$router.push({path: "/"});
                } else {
                    this.$router.back(-1);
                }
            },
            //iframe初始化
            iframeInit() {
                $("#loadingModal").modal("hide");
                this.backSwitch = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "webView";
</style>
