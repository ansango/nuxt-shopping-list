<template>
  <div class="container">
    <div class="mx-2 my-2">
      <h1 class="title">Shopping List</h1>
    </div>
    <div class="mx-2 my-2 flex justify-between">
      <h2>Articles</h2>
      <div class="counter">{{ numberArticles }}</div>
    </div>
    <add-article></add-article>
    <articles></articles>
  </div>
</template>
<script>
import AddArticle from '~/components/Todos/AddArticle.vue'
import Articles from '~/components/Todos/Articles.vue'

export default {
  components: {
    AddArticle,
    Articles,
  },
  computed: {
    numberArticles() {
      return this.$store.getters.getNumberOfArticles
    },
  },
}
</script>
