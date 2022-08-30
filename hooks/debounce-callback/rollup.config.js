import typescript from "rollup-plugin-typescript";
const pkg = require("./package.json");

export default {
  input: "source/index.ts",
  output: [
    {
      file: pkg.module,
      format: "esm"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [typescript()]
};
