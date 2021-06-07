<template>
  <div class="flex flex-col w-full">
    <div class="mx-2 flex justify-between items-center">
      <h1 class="title mx-2">Shopping List</h1>
      <span
        class="flex items-center cursor-pointer m-1 p-2 rounded-full bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
        @click="displayAddForm"
      >
        <div v-if="!displayForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </span>
    </div>
    <div
      v-if="numberArticles > 0"
      class="mx-2 flex justify-between items-center"
    >
      <h2 class="mx-2">Articles in list</h2>

      <span
        class="flex items-center m-1 my-1 rounded-full bg-green-200 px-2 text-sm py-2 font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
      >
        <p class="w-5 y-4 text-center">{{ numberArticles }}</p>
      </span>
    </div>

    <articles></articles>
    <div class="flex flex-col items-center mx-4">
      <span
        v-if="displayForm"
        class="p-2 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-500 cursor-pointer"
        @click="displayAddForm"
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
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <add-article v-if="displayForm"></add-article>
    </div>
  </div>
</template>
<script>
import AddArticle from '~/components/Articles/AddArticle.vue'
import Articles from '~/components/Articles/Articles.vue'

export default {
  components: {
    AddArticle,
    Articles,
  },
  data() {
    return {
      displayForm: false,
    }
  },
  computed: {
    numberArticles() {
      return this.$store.getters.getNumberOfArticles
    },
  },
  methods: {
    displayAddForm() {
      this.displayForm = !this.displayForm
    },
  },
}
</script>
