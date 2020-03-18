const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/index.html',
    './src/**/*.svelte'
  ],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const plugins =
  process.env.NODE_ENV === 'production'
    ? ['tailwindcss', 'autoprefixer', purgecss]
    : ['tailwindcss'];

module.exports = {plugins};
