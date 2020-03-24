const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/index.html',
    './src/**/*.svelte'
  ],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => {
    const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
    const matchedTokens = [];
    let match = regExp.exec(content);
    while (match) {
      if (match[0].startsWith('class:')) {
        matchedTokens.push(match[0].substring(6));
      } else {
        matchedTokens.push(match[0]);
      }
      match = regExp.exec(content);
    }
    return matchedTokens;
  }
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [tailwindcss, autoprefixer, purgecss]
    : [tailwindcss];

module.exports = {plugins};
