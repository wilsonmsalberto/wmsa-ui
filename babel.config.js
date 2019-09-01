module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  env: {
    build: {
      ignore: [
        './**/*.story.{js,jsx}',
        './**/*.spec.{js,jsx}',
        './**/*.snap',
      ],
    },
  },
  ignore: ['node_modules'],
};
