<template>
    <div>
        <h1 class="home-title" @click="showHello">心之所向，素履以往</h1>
        <!--<img src="http://xiangleiboy.oss-cn-hangzhou.aliyuncs.com/xiangwang/IMG_20180728_124420.jpg?x-oss-process=image/resize,w_500,limit_0"/>-->

    </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        theme1: 'light',
        menu: [
          { title: 'hello' },
          { title: 'about' },
          { title: 'game' },
          { title: 'QQ' },
          { title: 'contact' }
        ]
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

    .home-title {
        color: #333;
    }
</style>
