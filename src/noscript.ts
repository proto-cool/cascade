import config from "./config";

function generateNoscript(): string {
    const prefix = config.attributePrefix; // e.g. "cascade"
    const sel = `data-${prefix}`; // e.g. "data-cascade"

    const noscript = `
<noscript>
    <style>
        /* show all [${sel}] if javascript is disabled */
        [${sel}] {
            opacity: 1 !important;
        }
        \`
    </style>
</noscript>`;

    return noscript.trim();
}

export default generateNoscript;
