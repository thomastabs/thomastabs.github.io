/* Build-time Open Graph cards (1200×630): the notebook page, a § kicker,
   the title in Fraunces, one line of description, and the site's red pen. */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const font = (p: string) => readFileSync(require.resolve(p));
const fonts = [
  { name: 'Fraunces Variable', data: font('@fontsource/fraunces/files/fraunces-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: font('@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Mono', data: font('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Mono', data: font('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
];

const PAPER = '#f4f5f7', INK = '#16181d', INK2 = '#4a4f59', MUTED = '#62666f', PEN = '#d6003f';

const clip = (t: string, n: number) => (t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n)).replace(/[,;:.]$/, '') + '…');

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({ type, props: { style, children } });

export type OgCard = { kicker: string; title: string; description?: string; footer?: string };

export async function renderOg({ kicker, title, description, footer = 'tomastaborda.com' }: OgCard): Promise<Buffer> {
  const size = title.length > 60 ? 62 : title.length > 36 ? 74 : 92;
  const tree = h('div', {
    width: 1200, height: 630, display: 'flex', backgroundColor: PAPER, position: 'relative',
    fontFamily: 'IBM Plex Sans', color: INK,
  }, [
    h('div', { position: 'absolute', left: 72, top: 64, display: 'flex', alignItems: 'center', fontSize: 28, color: MUTED }, kicker),
    h('div', { position: 'absolute', left: 72, right: 72, bottom: 170, display: 'flex', flexDirection: 'column' }, [
      h('div', { fontFamily: 'Fraunces Variable', fontWeight: 600, fontSize: size, lineHeight: 1.05, maxWidth: 1000 }, title),
      description ? h('div', { marginTop: 26, fontSize: 30, lineHeight: 1.4, color: INK2, maxWidth: 980 }, clip(description, 120)) : null,
    ].filter(Boolean)),
    h('div', { position: 'absolute', left: 72, right: 72, bottom: 56, height: 70, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: `2px solid ${INK}`, paddingTop: 22 }, [
      h('div', { display: 'flex', fontFamily: 'Fraunces Variable', fontWeight: 600, fontSize: 34 }, [
        h('span', { color: PEN }, 'T'), h('span', {}, 'omás'), h('span', { color: PEN, marginLeft: 12 }, 'T'), h('span', {}, 'aborda'),
      ]),
      h('div', { display: 'flex', fontFamily: 'IBM Plex Mono', fontWeight: 500, fontSize: 24, color: INK2, borderBottom: `3px solid ${PEN}`, paddingBottom: 4 }, footer),
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}

/** Map a page pathname to its card path: `/pt/caderno/x/` → `/og/pt/caderno/x.png`, `/` → `/og/index.png`. */
export const ogPathFor = (pathname: string) => {
  const p = pathname.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
  return `/og/${p === '' ? 'index' : p === 'pt' ? 'pt/index' : p}.png`;
};
