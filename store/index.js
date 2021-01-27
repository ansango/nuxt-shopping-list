export const state = () => ({
  articles: [],
})

export const getters = {
  getArticles: (state) => state.articles,
}

export const mutations = {
  SET_ARTICLES(state, payload) {
    state.articles = payload
  },
  ADD_ARTICLE(state, payload) {
    const newProduct = {
      id: new Date().getTime(),
      name: payload.name,
      type: payload.type,
      product: payload.product,
      completed: false,
    }
    state.articles.push(newProduct)
  },
  UPDATE_ARTICLE(state, payload) {
    const item = state.articles.find((article) => article.id === payload)
    if (item) {
      item.completed = !item.completed
    }
  },
  DELETE_ARTICLE(state, payload) {
    const index = state.articles.findIndex((article) => article.id === payload)
    state.articles.splice(index, 1)
  },
}

export const actions = {
  addArticle({ commit }, article) {
    commit('ADD_ARTICLE', article)
  },
  updateArticle({ commit }, articles) {
    commit('UPDATE_ARTICLE', articles)
  },
  deleteArticle({ commit }, articles) {
    commit('DELETE_ARTICLE', articles)
  },
  saveArticles({ state }) {
    localStorage.setItem('articleStore', JSON.stringify(state.articles))
  },
  loadArticles({ commit }) {
    commit(
      'SET_ARTICLES',
      JSON.parse(localStorage.getItem('articleStore')) || []
    )
  },
}
