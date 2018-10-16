<template>
    <div>
        <h1 class="home-title" @click="showHello">心之所向，素履以往12</h1>
        <img src="http://xiangleiboy.oss-cn-hangzhou.aliyuncs.com/xiangwang/IMG_20180728_124420.jpg"/>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    showHello() {
      this.$router.push('/hello')
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/common.scss";
  .home-title{
    color: #333;
  }
</style>
