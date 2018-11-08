<template>
    <div>
        <h1 class="home-title" @click="showHello">心之所向，素履以往kobe</h1>
        <!--<img src="http://xiangleiboy.oss-cn-hangzhou.aliyuncs.com/xiangwang/IMG_20180728_124420.jpg?x-oss-process=image/resize,w_500,limit_0"/>-->
        <row>
            <col span="12">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper"/>
                        内容管理
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people"/>
                        用户管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats"/>
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="ios-construct"/>
                        综合设置
                    </MenuItem>
                </Menu>
            </col>
        </row>
    </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        theme1: 'light'
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
