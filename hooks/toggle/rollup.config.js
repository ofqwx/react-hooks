import typescript from "rollup-plugin-typescript";
const pkg = require("./package.json");

export default {
  input: "source/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [typescript()]
};
