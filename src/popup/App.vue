<template>
<div class="antialiased box-border rounded-lg">
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
  width: 300px;
  height: 400px;
}
</style>
