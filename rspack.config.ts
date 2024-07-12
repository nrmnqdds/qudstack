//@ts-ignore
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

import path from "node:path";

module.exports = {
  plugins: [TanStackRouterRspack()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
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
