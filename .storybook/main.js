const path = require('path');
const fs = require('fs');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.tsx?$/,
          include: [path.resolve(__dirname, '../src/stories')],
        },
        loaderOptions: {
          prettierConfig: fs.readFileSync(
            path.resolve(__dirname, '../.prettierrc'),
            {
              encoding: 'utf8',
            },
          ),
        },
      },
    },
  ],
};
