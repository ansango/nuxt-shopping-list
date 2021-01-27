<template>
  <div class="bg-yellow dark:bg-gray-900">
    <nav-bar class="sticky top-0"></nav-bar>
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: { NavBar },
  colorMode: 'light',
}
</script>
