import esbuild from "esbuild";

const baseConfig = {
  entryPoints: ["src/index.ts"],
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

  esbuild
    .build({
      ...baseConfig,
      format: "esm",
    })
    .catch(() => {
      console.error("Build Faild");
      process.exit(1);
    }),
]);