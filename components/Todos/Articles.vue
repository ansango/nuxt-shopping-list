<template>
  <div>
    <div>
      <ul class="articles">
        <li
          v-for="article in articles"
          :key="article.id"
          class="article flex justify-center"
        >
          <input
            :id="article.id"
            name="radio"
            type="checkbox"
            :checked="article.completed"
            class="form-checkbox"
            @click="updateArticle(article.id)"
          />

          <p>{{ article.product }}</p>

          <span @click="deleteArticle(article.id)">
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
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  computed: {
    articles() {
      return this.$store.getters.getArticles
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

<style scoped></style>
