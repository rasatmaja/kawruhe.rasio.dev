export const actions = {
  async getConfirmedCase () {
    const res = await this.$axios.get('/api/positif/')
    return res
  },
  async getRecoveredCase () {
    const res = await this.$axios.get('/api/sembuh/')
    return res
  },
  async getDeathsCase () {
    const res = await this.$axios.get('/api/meninggal/')
    return res
  },
  async getIndonesiaCase () {
    const res = await this.$axios.get('/api/indonesia/')
    return res
  }
}
