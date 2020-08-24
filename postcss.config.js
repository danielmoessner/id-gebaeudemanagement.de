const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer');

module.exports = ({ env }) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss"),
    env === 'production' ? purgecss({
      content: ['./src/**/*.svelte', './src/**/*.html'],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    }) : null,
    env === 'production' ? autoprefixer() : null,
    env === 'production' ? cssnano({
      preset: 'default'
    }) : null,
  ],
})
