import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";
import config from "./src/config.js"; // wherever your config lives

const defaultConfig = config.default;

// helper to turn your TS config into CSS text
function generateCSS() {
    const prefix = defaultConfig.attributePrefix; // e.g. "onview"
    const sel = `data-${prefix}`; // e.g. "data-onview"

    return `/* hide all [${sel}] */
[${sel}] {
    opacity: 0;
}
`;
}

export default {
    input: "src/index.ts",
    output: [
        { file: "dist/index.esm.js", format: "esm" },
        { file: "dist/index.cjs.js", format: "cjs" },
    ],
    external: ["motion"],
    plugins: [
        del({ targets: "dist/*" }),
        typescript(),
        {
            name: "emit-css",
            generateBundle() {
                this.emitFile({
                    type: "asset",
                    fileName: "cascade.css",
                    source: generateCSS(),
                });
            },
        },
    ],
};
