//@ts-ignore
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

module.exports = {
  plugins: [TanStackRouterRspack()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
        type: "css",
      },
    ],
  },
};
