/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'covid-red-primary': '#EB4559',
        'covid-red-primary-darker': '#D5152C',
        'covid-red-tint': '#FCECED',
        'covid-gray-primary': '#666666',
        'covid-gray-tint': '#FBFBFB',
        'covid-blue-primary': '#468CCC',
        'covid-blue-darken': '#151D41',
        'covid-green-primary': '#38a363'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
