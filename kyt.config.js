
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {
    if (options.type === 'client') {

      config.resolve.extensions.push('.ts')
      config.resolve.extensions.push('.tsx')

      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      }));

      // Add TypeScript support
      config.module.rules.push({
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /(node_modules)/,
      })

      console.log('========');
      console.log(config);
      console.log('========');
    }

    return config;
  },
};
