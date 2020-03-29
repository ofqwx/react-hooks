import typescript from "rollup-plugin-typescript";
const pkg = require("./package.json");

export default {
  input: "index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    },
    {
      file: pkg.browser,
      format: "amd"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [typescript()]
};
