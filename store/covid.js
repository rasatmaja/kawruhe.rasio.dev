export const state = () => ({
  isLoading: true,
  indonesiaCases: {
    confirmed: '0',
    recovered: '0',
    deaths: '0'
  },
  worldwideCases: {
    confirmed: '0',
    recovered: '0',
    deaths: '0'
  }
})

export const mutations = {
  SET_LOADING_STATUS (state, loading = false) {
    state.isLoading = loading
  },
  SET_INDONESIA_DATA (state, params) {
    state.indonesiaCases.confirmed = params.data[0].positif
    state.indonesiaCases.recovered = params.data[0].sembuh
    state.indonesiaCases.deaths = params.data[0].meninggal
  },
  SET_WORLDWIDE_DATA (state, params) {
    state.worldwideCases.confirmed = params.confirmed
    state.worldwideCases.recovered = params.recovered
    state.worldwideCases.deaths = params.deaths
  }

}

export const actions = {

  async fetchWorlwideCase ({ commit }) {
    commit('SET_LOADING_STATUS', true)

    const confirmed = await this.$axios.get('/api/positif/')
    const recovered = await this.$axios.get('/api/sembuh/')
    const deaths = await this.$axios.get('/api/meninggal/')

    const data = {
      confirmed: confirmed.data.value,
      recovered: recovered.data.value,
      deaths: deaths.data.value
    }

    commit('SET_WORLDWIDE_DATA', data)
    commit('SET_LOADING_STATUS', false)
  },
  async fetchIndonesiaCase ({ commit }) {
    commit('SET_LOADING_STATUS', true)
    const res = await this.$axios.get('/api/indonesia/')
    commit('SET_INDONESIA_DATA', res)
    commit('SET_LOADING_STATUS', false)
  }
}

export const getters = {
  getIndonesiaData: (state) => {
    return state.indonesiaCases
  },
  getWorldwideData: (state) => {
    return state.worldwideCases
  },
  isLoading: (state) => {
    return state.isLoading
  }
}
