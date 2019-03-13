<template>
    <div class="modal fade loading-modal" id="loadingModal" tabindex="-1" role="dialog" aria-labelledby="loadingModal"
         aria-hidden="true">
        <div :class="['modal-dialog',reqLoadingClass]" role="document">
            <div class="modal-content">

                <div class="modal-body text-center">
                    <img :src="loadingImg" alt="loading-img">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import loadingImg from "../../assets/loading.gif";

    export default {
        name: "loading",
        props: ['reqLoadingClass'],
        data(){
            return{
                loadingImg
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "loading";
</style>
