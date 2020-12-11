<template>
<div>
  <Header/>
  <router-view/>
</div>


</template>

<script>
import Header from "@/components/UI/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    this.$router.push('/')
  }
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
