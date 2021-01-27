<template>
  <div class="container">
    <div>
      <h1 class="title">Shopping List</h1>
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
}
</script>
