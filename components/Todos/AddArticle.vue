<template>
  <form @submit.prevent="addArticle">
    <input
      v-model="product"
      type="text"
      class="form-input"
      placeholder="Add a new article"
    />
  </form>
</template>

<script>
export default {
  name: 'AddArticle',
  data() {
    return {
      product: '',
    }
  },
  computed: {
    articles() {
      return this.$store.getters.getArticles
    },
  },
  methods: {
    addArticle() {
      if (this.product !== '') {
        this.$store.dispatch('addArticle', this)
        this.product = ''
      }
    },
  },
}
</script>

<style scoped></style>
