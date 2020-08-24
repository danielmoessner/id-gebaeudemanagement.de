const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer');

module.exports = ({ env }) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss"),
    env === 'production' ? purgecss({
      content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }) : null,
    env === 'production' ? autoprefixer() : null,
    env === 'production' ? cssnano({
      preset: 'default'
    }) : null,
  ],
})
