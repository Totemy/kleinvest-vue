module.exports = {
  chainWebpack: config => {
    config.optimization.splitChunks().clear();
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
  },
  configureWebpack: {
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js"
    }
  },
  css: {
    extract: {
      filename: "css/[name].css",
      chunkFilename: "css/[name].css"
    }
  }
};
