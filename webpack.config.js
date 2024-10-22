const path = require("path");
const PugPlugin = require("pug-plugin");

const config = {
  output: {
    path: path.join(__dirname, "build/"),
    publicPath: "/",
  },
  plugins: [
    new PugPlugin({
      pretty: "auto",
      //☝🏽 Format HTML (only in dev mode)
      entry: {
        // Insert your PUG templates here
        index: "./src/index.pug",
      },
      js: {
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "build"),
    watchFiles: {
      paths: ["src/**/*.*", "assets/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
  stats: "errors-only",
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.output.publicPath = "/crm-dashboard-customer/";
  }

  return config;
};
