module.exports = (ctx) => ({
  indent: 'postcss',
  parser: ctx.parser ? 'sugarss': false,
  map: ctx.env === 'development' ? ctx.map : false,
  syntax: 'postcss-scss',
  plugins: {
    'cssnano': {},
    'postcss-normalize': {},
    'postcss-cssnext': {},
    'postcss-plugin': ctx.options.plugin,
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
    },
  },
});
