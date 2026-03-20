import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C1hFoLMQ.mjs';
import { manifest } from './manifest_CPEiNjAb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/ai-fallback.astro.mjs');
const _page3 = () => import('./pages/api/chat.astro.mjs');
const _page4 = () => import('./pages/api/reply.astro.mjs');
const _page5 = () => import('./pages/api/telegram-webhook.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/decisions/_slug_.astro.mjs');
const _page8 = () => import('./pages/decisions.astro.mjs');
const _page9 = () => import('./pages/journey.astro.mjs');
const _page10 = () => import('./pages/projects/_slug_.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/robots.txt.astro.mjs');
const _page13 = () => import('./pages/speaking.astro.mjs');
const _page14 = () => import('./pages/uses.astro.mjs');
const _page15 = () => import('./pages/writing/_slug_.astro.mjs');
const _page16 = () => import('./pages/writing/_---page_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/ai-fallback.ts", _page2],
    ["src/pages/api/chat.ts", _page3],
    ["src/pages/api/reply.ts", _page4],
    ["src/pages/api/telegram-webhook.ts", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/decisions/[slug].astro", _page7],
    ["src/pages/decisions/index.astro", _page8],
    ["src/pages/journey.astro", _page9],
    ["src/pages/projects/[slug].astro", _page10],
    ["src/pages/projects/index.astro", _page11],
    ["src/pages/robots.txt.ts", _page12],
    ["src/pages/speaking.astro", _page13],
    ["src/pages/uses.astro", _page14],
    ["src/pages/writing/[slug].astro", _page15],
    ["src/pages/writing/[...page].astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "25e91d63-33b5-47ee-9c88-b58f2276c066",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
