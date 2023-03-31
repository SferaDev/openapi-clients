import typescript from "@rollup/plugin-typescript";
import builtins from "builtin-modules";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.cjs",
                format: "cjs",
            },
            {
                file: "dist/index.mjs",
                format: "esm",
            },
        ],
        external: [...builtins, ...Object.keys(pkg.dependencies)],
        plugins: [typescript()],
    },
    {
        input: "./src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];