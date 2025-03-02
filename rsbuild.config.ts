import { defineConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck(),
    pluginImageCompress(),
    pluginNodePolyfill(),
  ],

  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
});
