<template>
  <form @submit.prevent="addArticle">
    <div class="mx-2 my-2">
      <input
        v-model="product.name"
        type="text"
        placeholder="Product"
        class="form-input mt-1 block w-full placeholder-gray-600"
      />

      <div v-if="errors.length">
        <div v-for="error in errors" :key="error.name">
          <p v-if="error.name === 'name'" class="my-1 text-red-500">
            {{ error.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="mx-2 my-2">
      <select
        v-model="product.type"
        class="form-input text-gray-600 mt-1 block w-full"
      >
        <option disabled value="">Choose type</option>
        <option v-for="type in prods" :key="type.id">{{ type.name }}</option>
      </select>

      <div v-if="errors.length">
        <div v-for="error in errors" :key="error.name">
          <p v-if="error.name === 'type'" class="my-1 text-red-500">
            {{ error.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="wrapper-btn flex justify-end mx-2">
      <button
        type="submit"
        class="mt-4 bg-purple-200 text-purple-800 font-semibold text-violet-700 px-6 py-2 rounded-lg"
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
        { id: 1, name: 'drinks' },
        { id: 2, name: 'food' },
        { id: 3, name: 'clean' },
      ],
      errors: [],
    }
  },
  methods: {
    addArticle() {
      const errors = this.checkForm()
      if (errors.length === 0) {
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
