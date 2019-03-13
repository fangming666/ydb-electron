// 头部区域
<template>
  <div class="base-head clearfix">
    <img :src="logoImg" alt="logo" class="logo float-left">
    <slot></slot>
    <div class="user-name float-right">
      <img :src="headImg" alt="head-sculpture">
      {{_username}}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
const logoImg = require("../../assets/logo.png");
const headImg = require("../../assets/head.png");
export default {
  name: "base-head",
  data() {
    return {
      logoImg, // logo的路径
      headImg // 头像的路径
    };
  },
  computed: {
    ...mapState({
      _username: ({ examModules }) => examModules._username
    })
  }
};
</script>
<style lang="sass">
  @import "./head"
</style>


