<template>
    <h1 @click="showHello">心之所向，素履以往12</h1>
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

<style>

</style>