<template>
  <form @submit.prevent="addArticle">
    <input
      v-model="product.name"
      type="text"
      class="form-input"
      placeholder="Name"
    />
    <input
      v-model="product.type"
      type="text"
      class="form-input"
      placeholder="Type"
    />
    <button type="submit">aa</button>
  </form>
</template>

<script>
export default {
  name: 'AddArticle',
  data() {
    return {
      product: {
        name: '',
        type: '',
      },
    }
  },
  methods: {
    addArticle() {
      if (this.product !== {}) {
        this.$store.dispatch('addArticle', this)
        this.product = {
          name: '',
          type: '',
        }
      }
    },
  },
}
</script>

<style scoped></style>
