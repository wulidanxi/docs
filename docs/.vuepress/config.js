import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "@vuepress/cli";

export default defineUserConfig({
  bundler: webpackBundler({
    chainWebpack: (config) => {
      config.module
        .rule("compile")
        .test(/\.js$/)
        .use("babel")
        .loader("babel-loader")
        .options({
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"],
        });
      console.log("module2");
    },
  }),
});
