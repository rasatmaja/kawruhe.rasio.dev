export { default as Logo } from '../../components/Logo.vue'
export { default as VirusImage } from '../../components/covid/virus-image.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyVirusImage = import('../../components/covid/virus-image.vue' /* webpackChunkName: "components/covid/virus-image" */).then(c => c.default || c)
