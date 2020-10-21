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
  // Fetch data to get confirmed, recovered, and deaths worldwide cases
  async fetchWorlwideCase ({ commit }) {
    commit('SET_LOADING_STATUS', true)

    const confirmed = this.$axios.get('/api/covid/positif/')
    const recovered = this.$axios.get('/api/covid/sembuh/')
    const deaths = this.$axios.get('/api/covid/meninggal/')

    // create parrarel API request
    await Promise.all([confirmed, recovered, deaths]).then((res) => {
      const data = {
        confirmed: res[0].data.value,
        recovered: res[1].data.value,
        deaths: res[2].data.value
      }
      commit('SET_WORLDWIDE_DATA', data)
      commit('SET_LOADING_STATUS', false)
    })
  },
  // Fetch data to get confirmed, recovered, and deaths indonesia cases
  async fetchIndonesiaCase ({ commit }) {
    commit('SET_LOADING_STATUS', true)
    const res = await this.$axios.get('/api/covid/indonesia/')
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
