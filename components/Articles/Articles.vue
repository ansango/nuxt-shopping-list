<template>
  <ul class="articles my-10 mx-4">
    <li
      v-for="article in articles"
      :key="article.id"
      class="article flex items-center w-full rounded-lg px-2 py-1 mb-1 dark:bg-gray-800 dark:text-blue-200"
    >
      <div class="w-2/3 flex items-center">
        <input
          :id="article.id"
          name="checkbox"
          type="checkbox"
          :checked="article.completed"
          class="form-checkbox dark:bg-gray-700 dark:border-gray-700"
          @click="updateArticle(article.id)"
        />
        <div class="flex" :class="{ checked: article.completed === true }">
          <p class="mx-2">
            {{ article.product.name.replace(/^\w/, (c) => c.toUpperCase()) }}
          </p>
          <p class="mx-2">
            {{ article.product.type.replace(/^\w/, (c) => c.toUpperCase()) }}
          </p>
        </div>
      </div>
      <div class="w-1/3 flex justify-end items-center">
        <button
          class="dark:text-gray-600 mr-2"
          @click="deleteArticle(article.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Articles',
  computed: {
    articles() {
      return this.$store.getters.getArticles
    },
    numberArticles() {
      return this.$store.getters.getNumberOfArticles
    },
  },
  watch: {
    articles: {
      deep: true,
      handler: 'save',
    },
  },
  created() {
    this.$store.dispatch('loadArticles')
  },
  methods: {
    updateArticle(id) {
      this.$store.dispatch('updateArticle', id)
    },
    deleteArticle(id) {
      this.$store.dispatch('deleteArticle', id)
    },
    save() {
      this.$store.dispatch('saveArticles')
    },
  },
}
</script>

<style>
.checked {
  @apply line-through;
}
</style>
