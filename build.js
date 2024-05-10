const esbuild = require("esbuild");

const baseConfig = {
  entryPoints: ["src/graphics-math.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch(() => {
  process.exit(1);
});
