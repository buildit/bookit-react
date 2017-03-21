
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {
    if (options.type === 'client') {

      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      }));

      // Add TypeScript support
      config.module.rules.push({
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /(node_modules)/,
      })

      // Override kyt's .scss loader.
      // config.module.rules = config.module.rules.map((loader) => {
      //   if ('.scss'.match(loader.test)) {
      //     return {
      //       test: /\.scss$/,
      //       loader: 'css!postcss!sass'
      //     };
      //   }
      //   return loader;
      // });

      console.log('========');
      console.log(config.module.rules);
      console.log('========');
    }

    return config;
  },
};
