const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const basePath = path.resolve(__dirname, '../', 'packages');
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
);

module.exports = async ({ config, mode }) => {
  config.resolve.extensions.push('.js', '.jsx');
  Object.assign(config.resolve.alias, {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@wmsa-ui/${name}`]: path.join(basePath, name, 'src'),
      }),
      {},
    ),
  });

  return config;
};
