<template>
  <form class="w-full" @submit.prevent="addArticle">
    <div class="my-2">
      <input
        v-model="product.name"
        type="text"
        placeholder="Product"
        class="form-input mt-1 block w-full placeholder-gray-600 dark:bg-gray-800 dark:border-gray-900"
        :class="{
          'placeholder-red-500': errors.length > 0,
          'border-red-500': errors.length > 0,
        }"
      />

      <div v-if="errors.length">
        <div v-for="error in errors" :key="error.name">
          <p v-if="error.name === 'name'" class="my-1 mx-2 text-red-500">
            {{ error.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="my-2">
      <select
        v-model="product.type"
        class="form-input text-gray-600 dark:bg-gray-800 mt-1 block w-full dark:border-gray-900"
        :class="{
          'text-red-500': errors.length > 0,
          'border-red-500': errors.length > 0,
        }"
      >
        <option disabled value="">Choose type</option>
        <option v-for="type in prods" :key="type.id">{{ type.name }}</option>
      </select>

      <div v-if="errors.length">
        <div v-for="error in errors" :key="error.name">
          <p v-if="error.name === 'type'" class="my-1 mx-2 text-red-500">
            {{ error.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="wrapper-btn flex justify-end">
      <button
        type="submit"
        class="mt-4 bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-300 font-medium text-violet-700 px-6 py-2 rounded-lg"
      >
        Create
      </button>
    </div>
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
      prods: [
        { id: 1, name: 'Food' },
        { id: 2, name: 'Fruit' },
        { id: 3, name: 'Vegetables' },
        { id: 4, name: 'Drinks' },
        { id: 5, name: 'Dairy' },
        { id: 6, name: 'Meat' },
        { id: 7, name: 'Fish' },
        { id: 8, name: 'Frozen' },
        { id: 9, name: 'Home' },
        { id: 10, name: 'Pets' },
        { id: 11, name: 'Snacks' },
        { id: 12, name: 'Candy' },
        { id: 13, name: 'Other' },
      ],
      errors: [],
    }
  },
  methods: {
    addArticle() {
      const errors = this.checkForm()
      if (errors.length === 0) {
        console.log(this)
        this.$store.dispatch('addArticle', this)
        this.product = {
          name: '',
          type: '',
        }
      }
    },
    checkForm() {
      this.errors = []
      if (!this.product.name) {
        this.errors.push({ name: 'name', text: 'Name required' })
      }
      if (!this.product.type) {
        this.errors.push({ name: 'type', text: 'Type required' })
      }
      return this.errors
    },
  },
}
</script>
