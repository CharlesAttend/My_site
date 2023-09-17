import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { vitePreprocess } from "@sveltejs/kit/vite";

export default defineConfig({
  preprocess: vitePreprocess(),
  ssr: {
    noExternal: [
      "tsparticles",
      "tsparticles-slim",
      "tsparticles-engine",
      "svelte-particles",
    ], // add all tsparticles libraries here, they're not made for SSR, they're client only
  },
  plugins: [sveltekit()],
});
