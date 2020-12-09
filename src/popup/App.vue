<template>
<div class="container mx-auto px-4">
  <hello-world />
  <div class="ml-5"> Hello from Tailwind</div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
