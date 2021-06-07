<template>
  <div class="h-screen text-gray-600 dark:bg-gray-900 dark:text-gray-100">
    <nav-bar class="sticky top-0"></nav-bar>
    <div class="my-0 mx-auto max-w-lg">
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
