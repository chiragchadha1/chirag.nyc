import { a as F } from './chunk-LGS56I6L.mjs';
import { a as V } from './chunk-PDZCMCUW.mjs';
import { d as y } from './chunk-563FXLF3.mjs';
import { a as X, b as P, c as H, d as u, e as q } from './chunk-NAADEYMU.mjs';
import './chunk-42U43NKG.mjs';
import {
    F as r,
    Fa as A,
    G as a,
    Ga as t,
    Ia as R,
    Ja as mr,
    Ka as h,
    N as K,
    O as $,
    S as _,
    aa as E,
    ba as T,
    c as e,
    ea as f,
    fa as o,
    g as Z,
    ha as rr,
    ia as er,
    ka as ar,
    la as c,
    m as Q,
    n as U,
    na as m,
    oa as tr,
    p as w,
    ra as i,
    v as p,
    x as D,
    xa as nr,
} from './chunk-HX7BIDD5.mjs';
import './chunk-ELYU6EKT.mjs';
var wr = h(H),
    Rr = h(u),
    g = T(t),
    s = T(p.div),
    ir = T(A),
    yr = h(P),
    vr = h(F),
    br = h(y),
    _r = h(q),
    Tr = h(X);
var Ir = {
        b7UOhdrri: '(max-width: 767px)',
        efinEt9Z3: '(min-width: 1920px)',
        EPH2ITdiI: '(min-width: 1440px) and (max-width: 1919px)',
        Ssw7mXvCQ: '(min-width: 768px) and (max-width: 1439px)',
    },
    Cr = () => typeof document < 'u',
    sr = 'framer-zsu8R',
    kr = { b7UOhdrri: 'framer-v-1i9ztku', efinEt9Z3: 'framer-v-41kc85', EPH2ITdiI: 'framer-v-8pznem', Ssw7mXvCQ: 'framer-v-yj79nc' },
    S = { damping: 40, delay: 0, mass: 1, stiffness: 200, type: 'spring' },
    I = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: S, x: 0, y: 0 },
    d = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 160 },
    Sr = { damping: 40, delay: 0.2, mass: 1, stiffness: 200, type: 'spring' },
    C = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: Sr, x: 0, y: 0 },
    jr = { damping: 40, delay: 0.4, mass: 1, stiffness: 200, type: 'spring' },
    M = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: jr, x: 0, y: 0 },
    fr = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 80 },
    or = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: S, x: 0, y: 80 },
    k = V(),
    Yr = { Desktop: 'efinEt9Z3', Laptop: 'EPH2ITdiI', Phone: 'b7UOhdrri', Tablet: 'Ssw7mXvCQ' },
    Nr = ({ height: B, id: v, width: Y, ...b }) => {
        var x, z;
        return {
            ...b,
            variant: (z = (x = Yr[b.variant]) !== null && x !== void 0 ? x : b.variant) !== null && z !== void 0 ? z : 'EPH2ITdiI',
        };
    },
    Wr = Z(function (B, v) {
        let { activeLocale: Y, setLocale: b } = $(),
            { style: x, className: z, layoutId: N, variant: lr, ...cr } = Nr(B);
        U(() => {
            let l = V(void 0, Y);
            if (((document.title = l.title || ''), l.viewport)) {
                var W;
                (W = document.querySelector('meta[name="viewport"]')) === null || W === void 0 || W.setAttribute('content', l.viewport);
            }
            if (l.bodyClassName)
                return (
                    Array.from(document.body.classList)
                        .filter((L) => L.startsWith('framer-body-'))
                        .map((L) => document.body.classList.remove(L)),
                    document.body.classList.add(`${l.bodyClassName}-framer-zsu8R`),
                    () => {
                        document.body.classList.remove(`${l.bodyClassName}-framer-zsu8R`);
                    }
                );
        }, [void 0, Y]);
        let [n, Er] = nr(lr, Ir, !1),
            Ar = void 0,
            dr = w(null),
            pr = _('IfBBZ5kQy'),
            hr = w(null),
            O = () => (Cr() ? n !== 'b7UOhdrri' : !0),
            ur = _('F4XeT2ldw'),
            gr = w(null),
            G = w(null),
            xr = _('puP_dlZnC'),
            Fr = K(),
            zr = Q(),
            J = [];
        return (
            er({}),
            r(ar.Provider, {
                value: { primaryVariantId: 'EPH2ITdiI', variantClassNames: kr },
                children: a(D, {
                    id: N ?? zr,
                    children: [
                        a(p.div, {
                            ...cr,
                            className: E(sr, ...J, 'framer-8pznem', z),
                            ref: v ?? dr,
                            style: { ...x },
                            children: [
                                a('div', {
                                    className: 'framer-1ictinb',
                                    'data-framer-name': 'Hero',
                                    name: 'Hero',
                                    children: [
                                        r(f, {
                                            width: '100vw',
                                            children: r(o, {
                                                className: 'framer-1u5ofgx-container',
                                                id: pr,
                                                ref: hr,
                                                children: r(m, {
                                                    breakpoint: n,
                                                    overrides: { b7UOhdrri: { variant: 'TIQjt2_VD' } },
                                                    children: r(H, {
                                                        height: '100%',
                                                        id: 'IfBBZ5kQy',
                                                        layoutId: 'IfBBZ5kQy',
                                                        style: { width: '100%' },
                                                        variant: 'zPO_Rs6g_',
                                                        width: '100%',
                                                    }),
                                                }),
                                            }),
                                        }),
                                        r('div', {
                                            className: 'framer-lwlkr5',
                                            'data-framer-name': 'Hero',
                                            name: 'Hero',
                                            children: r('div', {
                                                className: 'framer-ojoshh',
                                                'data-framer-name': 'Top',
                                                name: 'Top',
                                                children: a('div', {
                                                    className: 'framer-1ne18jd',
                                                    'data-framer-name': 'Text',
                                                    name: 'Text',
                                                    children: [
                                                        r(m, {
                                                            breakpoint: n,
                                                            overrides: {
                                                                b7UOhdrri: {
                                                                    'data-framer-appear-id': 'p2bt93',
                                                                    animate: i('animate', 'p2bt93', I, '1i9ztku'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '50px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-2px',
                                                                                '--framer-line-height': '40px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'Chirag',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', 'p2bt93', d, '1i9ztku'),
                                                                },
                                                                efinEt9Z3: {
                                                                    'data-framer-appear-id': 'scpcw6',
                                                                    animate: i('animate', 'scpcw6', I, '41kc85'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '180px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-7px',
                                                                                '--framer-line-height': '150px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'Chirag',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', 'scpcw6', d, '41kc85'),
                                                                },
                                                                Ssw7mXvCQ: {
                                                                    'data-framer-appear-id': '10onyzt',
                                                                    animate: i('animate', '10onyzt', I, 'yj79nc'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '90px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-4px',
                                                                                '--framer-line-height': '70px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'Chirag',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', '10onyzt', d, 'yj79nc'),
                                                                },
                                                            },
                                                            children: r(t, {
                                                                __fromCanvasComponent: !0,
                                                                animate: i('animate', 'pgkxl0', I, '8pznem'),
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '140px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-5px',
                                                                            '--framer-line-height': '110px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'Chirag',
                                                                    }),
                                                                }),
                                                                className: 'framer-pgkxl0',
                                                                'data-framer-appear-id': 'pgkxl0',
                                                                'data-framer-name': 'Text 1',
                                                                fonts: ['GF;Instrument Sans-700'],
                                                                initial: i('initial', 'pgkxl0', d, '8pznem'),
                                                                name: 'Text 1',
                                                                style: { transformPerspective: 1200 },
                                                                verticalAlignment: 'top',
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                        r(m, {
                                                            breakpoint: n,
                                                            overrides: {
                                                                b7UOhdrri: {
                                                                    'data-framer-appear-id': '1qyd65h',
                                                                    animate: i('animate', '1qyd65h', C, '1i9ztku'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '50px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-2px',
                                                                                '--framer-line-height': '40px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'chadha',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', '1qyd65h', d, '1i9ztku'),
                                                                },
                                                                efinEt9Z3: {
                                                                    'data-framer-appear-id': 'uxbzhm',
                                                                    animate: i('animate', 'uxbzhm', C, '41kc85'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '180px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-7px',
                                                                                '--framer-line-height': '150px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'chadha',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', 'uxbzhm', d, '41kc85'),
                                                                },
                                                                Ssw7mXvCQ: {
                                                                    'data-framer-appear-id': 'iv7h5l',
                                                                    animate: i('animate', 'iv7h5l', C, 'yj79nc'),
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '90px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-4px',
                                                                                '--framer-line-height': '70px',
                                                                                '--framer-text-alignment': 'center',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'chadha',
                                                                        }),
                                                                    }),
                                                                    initial: i('initial', 'iv7h5l', d, 'yj79nc'),
                                                                },
                                                            },
                                                            children: r(t, {
                                                                __fromCanvasComponent: !0,
                                                                animate: i('animate', 'r8p1d1', C, '8pznem'),
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '140px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-5px',
                                                                            '--framer-line-height': '110px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'chadha',
                                                                    }),
                                                                }),
                                                                className: 'framer-r8p1d1',
                                                                'data-framer-appear-id': 'r8p1d1',
                                                                'data-framer-name': 'Text 2',
                                                                fonts: ['GF;Instrument Sans-700'],
                                                                initial: i('initial', 'r8p1d1', d, '8pznem'),
                                                                name: 'Text 2',
                                                                style: { transformPerspective: 1200 },
                                                                verticalAlignment: 'top',
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        O() &&
                                            r(m, {
                                                breakpoint: n,
                                                overrides: {
                                                    efinEt9Z3: {
                                                        'data-framer-appear-id': 'a98f6g',
                                                        animate: i('animate', 'a98f6g', M, '41kc85'),
                                                        initial: i('initial', 'a98f6g', d, '41kc85'),
                                                    },
                                                    Ssw7mXvCQ: {
                                                        'data-framer-appear-id': '9fph7k',
                                                        animate: i('animate', '9fph7k', M, 'yj79nc'),
                                                        initial: i('initial', '9fph7k', d, 'yj79nc'),
                                                    },
                                                },
                                                children: a(p.div, {
                                                    animate: i('animate', '16fo7wd', M, '8pznem'),
                                                    className: 'framer-16fo7wd hidden-1i9ztku',
                                                    'data-framer-appear-id': '16fo7wd',
                                                    'data-framer-name': 'Bottom Text',
                                                    initial: i('initial', '16fo7wd', d, '8pznem'),
                                                    name: 'Bottom Text',
                                                    style: { transformPerspective: 1200 },
                                                    children: [
                                                        r('div', {
                                                            className: 'framer-1krcjp1',
                                                            'data-framer-name': 'Left',
                                                            name: 'Left',
                                                            children: r(t, {
                                                                __fromCanvasComponent: !0,
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '17px',
                                                                            '--framer-font-weight': '600',
                                                                            '--framer-letter-spacing': '0px',
                                                                            '--framer-line-height': '21px',
                                                                            '--framer-text-color': 'rgb(56, 56, 56)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'BASED IN NEW YORK, NY',
                                                                    }),
                                                                }),
                                                                className: 'framer-oy8tau',
                                                                'data-framer-name': 'Text 2',
                                                                fonts: ['GF;Instrument Sans-600'],
                                                                name: 'Text 2',
                                                                verticalAlignment: 'top',
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                        r('div', {
                                                            className: 'framer-os08ha',
                                                            'data-framer-name': 'Right',
                                                            name: 'Right',
                                                            children: r(c, {
                                                                href: { hash: ':F4XeT2ldw', webPageId: 'aIxubhzMw' },
                                                                openInNewTab: !1,
                                                                smoothScroll: !0,
                                                                children: r('a', {
                                                                    className: 'framer-az40jn framer-1s3gldu',
                                                                    'data-framer-name': 'Link',
                                                                    name: 'Link',
                                                                    children: r(f, {
                                                                        children: r(o, {
                                                                            className: 'framer-h77bai-container',
                                                                            children: r(u, {
                                                                                EHwggOTIz: 'SOFTWARE ENGINEER',
                                                                                height: '100%',
                                                                                HmWXS9X01: 17,
                                                                                id: 'LvW8ZowDp',
                                                                                layoutId: 'LvW8ZowDp',
                                                                                nKqPNlRNt: 'rgb(56, 56, 56)',
                                                                                style: { height: '100%' },
                                                                                width: '100%',
                                                                                Y1jKtkJjZ: 'rgb(56, 56, 56)',
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                    ],
                                }),
                                a('div', {
                                    className: 'framer-y5dbyx',
                                    'data-framer-name': 'About Image',
                                    id: ur,
                                    name: 'About Image',
                                    ref: gr,
                                    children: [
                                        r('div', {
                                            className: 'framer-nwi79n',
                                            'data-framer-name': 'Top',
                                            name: 'Top',
                                            children: r(s, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 500,
                                                    type: 'spring',
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                    {
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                        },
                                                    },
                                                    {
                                                        ref: G,
                                                        target: {
                                                            opacity: 0,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 0.4,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                        },
                                                    },
                                                ],
                                                __framer__transformTrigger: 'onScrollTarget',
                                                __framer__transformViewportThreshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: 'framer-3l6xwu',
                                                'data-framer-name': 'Title',
                                                name: 'Title',
                                                style: { transformPerspective: 1200 },
                                                children: r('div', {
                                                    className: 'framer-3vgkk',
                                                    'data-framer-name': 'Line 1',
                                                    name: 'Line 1',
                                                    children: r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                __framer__spring: {
                                                                    damping: 90,
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [0.44, 0, 0.56, 1],
                                                                    mass: 1,
                                                                    stiffness: 500,
                                                                    type: 'spring',
                                                                },
                                                                __framer__transformTargets: [
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 40,
                                                                        },
                                                                    },
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 0,
                                                                        },
                                                                    },
                                                                ],
                                                                children: r(e, {
                                                                    children: r('h2', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '40px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-1.3px',
                                                                            '--framer-line-height': '30px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'About Chirag ',
                                                                    }),
                                                                }),
                                                            },
                                                            Ssw7mXvCQ: {
                                                                children: r(e, {
                                                                    children: a('h2', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '110px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-3px',
                                                                            '--framer-line-height': '100px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: ['About ', r('br', {}), 'Chirag '],
                                                                    }),
                                                                }),
                                                            },
                                                        },
                                                        children: r(g, {
                                                            __framer__spring: {
                                                                damping: 60,
                                                                delay: 0,
                                                                duration: 0.3,
                                                                ease: [0.44, 0, 0.56, 1],
                                                                mass: 1.5,
                                                                stiffness: 300,
                                                                type: 'spring',
                                                            },
                                                            __framer__styleTransformEffectEnabled: !0,
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 110,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                            __framer__transformTrigger: 'onInView',
                                                            __fromCanvasComponent: !0,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '110px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-3px',
                                                                        '--framer-line-height': '100px',
                                                                        '--framer-text-alignment': 'center',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'About Chirag ',
                                                                }),
                                                            }),
                                                            className: 'framer-1t452jp',
                                                            'data-framer-name': 'Text',
                                                            fonts: ['GF;Instrument Sans-700'],
                                                            name: 'Text',
                                                            style: { transformPerspective: 1200 },
                                                            verticalAlignment: 'top',
                                                            withExternalLayout: !0,
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        }),
                                        r('div', {
                                            className: 'framer-1lvhr3w',
                                            'data-framer-name': 'Bottom',
                                            name: 'Bottom',
                                            children: r('div', {
                                                className: 'framer-kemeso',
                                                'data-border': !0,
                                                'data-framer-name': 'Image',
                                                id: xr,
                                                name: 'Image',
                                                ref: G,
                                                children: r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            background: {
                                                                alt: '',
                                                                fit: 'fill',
                                                                intrinsicHeight: 1542,
                                                                intrinsicWidth: 1030,
                                                                pixelHeight: 2304,
                                                                pixelWidth: 1536,
                                                                sizes: 'max(100vw - 40px, 1px)',
                                                                src: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048',
                                                                srcSet: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg 1536w',
                                                            },
                                                        },
                                                        Ssw7mXvCQ: {
                                                            background: {
                                                                alt: '',
                                                                fit: 'fill',
                                                                intrinsicHeight: 1542,
                                                                intrinsicWidth: 1030,
                                                                loading: 'lazy',
                                                                pixelHeight: 2304,
                                                                pixelWidth: 1536,
                                                                sizes: '638px',
                                                                src: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048',
                                                                srcSet: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg 1536w',
                                                            },
                                                        },
                                                    },
                                                    children: r(ir, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 500,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 2,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                            alt: '',
                                                            fit: 'fill',
                                                            intrinsicHeight: 1542,
                                                            intrinsicWidth: 1030,
                                                            loading: 'lazy',
                                                            pixelHeight: 2304,
                                                            pixelWidth: 1536,
                                                            sizes: '504px',
                                                            src: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048',
                                                            srcSet: 'https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/vgTCsxSi8TTjQDqn1O1SsIHQE.jpg 1536w',
                                                        },
                                                        className: 'framer-v40bcf',
                                                        'data-framer-name': 'Fill Your Image Here',
                                                        name: 'Fill Your Image Here',
                                                        style: { transformPerspective: 1200 },
                                                    }),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                r('div', {
                                    className: 'framer-18swtpq',
                                    'data-framer-name': 'About Text',
                                    name: 'About Text',
                                    children: a('div', {
                                        className: 'framer-1spd20m',
                                        'data-framer-name': 'Text',
                                        name: 'Text',
                                        children: [
                                            a('div', {
                                                className: 'framer-16qjw4b',
                                                'data-framer-name': 'Title & Body Text',
                                                name: 'Title & Body Text',
                                                children: [
                                                    r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '30px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '0px',
                                                                            '--framer-line-height': '28px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        },
                                                                        children:
                                                                            "I'M A VERSATILE SOFTWARE ENGINEER AND VISIONARY IN NEW YORK CITY. MY ENTHUSIASM FOR USER-CENTRIC DESIGN, SLEEK INTERFACES, AND INNOVATIVE SOLUTIONS DRIVES MY WORK.",
                                                                    }),
                                                                }),
                                                            },
                                                            Ssw7mXvCQ: {
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '30px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '0px',
                                                                            '--framer-line-height': '38px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        },
                                                                        children:
                                                                            "I'M A VERSATILE SOFTWARE ENGINEER AND VISIONARY IN NEW YORK CITY. MY ENTHUSIASM FOR USER-CENTRIC DESIGN, SLEEK INTERFACES, AND INNOVATIVE SOLUTIONS DRIVES MY WORK.",
                                                                    }),
                                                                }),
                                                            },
                                                        },
                                                        children: r(t, {
                                                            __fromCanvasComponent: !0,
                                                            children: r(e, {
                                                                children: r('p', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '30px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '0px',
                                                                        '--framer-line-height': '40px',
                                                                        '--framer-text-alignment': 'center',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                    },
                                                                    children:
                                                                        "I'M A VERSATILE SOFTWARE ENGINEER AND VISIONARY IN NEW YORK CITY. MY ENTHUSIASM FOR USER-CENTRIC DESIGN, SLEEK INTERFACES, AND INNOVATIVE SOLUTIONS DRIVES MY WORK.",
                                                                }),
                                                            }),
                                                            className: 'framer-9626xh',
                                                            'data-framer-name': 'Text 1',
                                                            fonts: ['GF;Instrument Sans-700'],
                                                            name: 'Text 1',
                                                            verticalAlignment: 'top',
                                                            withExternalLayout: !0,
                                                        }),
                                                    }),
                                                    r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                children: r(e, {
                                                                    children: r('p', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                            '--framer-font-family':
                                                                                '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                            '--framer-font-size': '24px',
                                                                            '--framer-font-weight': '500',
                                                                            '--framer-letter-spacing': '0.4px',
                                                                            '--framer-line-height': '32px',
                                                                            '--framer-text-alignment': 'center',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        },
                                                                        children:
                                                                            "I'm at the forefront of blending cutting-edge technology with aesthetic design. Whether I'm developing intuitive apps or complex algorithms, my approach marries functionality with creativity. ",
                                                                    }),
                                                                }),
                                                            },
                                                        },
                                                        children: r(t, {
                                                            __fromCanvasComponent: !0,
                                                            children: r(e, {
                                                                children: r('p', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                        '--framer-font-family':
                                                                            '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                        '--framer-font-size': '24px',
                                                                        '--framer-font-weight': '500',
                                                                        '--framer-letter-spacing': '0.4px',
                                                                        '--framer-line-height': '34px',
                                                                        '--framer-text-alignment': 'center',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                    },
                                                                    children:
                                                                        "I'm at the forefront of blending cutting-edge technology with aesthetic design. Whether I'm developing intuitive apps or complex algorithms, my approach marries functionality with creativity. My work exemplifies my dedication to transcending traditional boundaries \u2014 finding unique, impactful ways technology and art can enhance and personalize the human experience.",
                                                                }),
                                                            }),
                                                            className: 'framer-1lltahb',
                                                            'data-framer-name': 'Text 2',
                                                            fonts: ['GF;Inter Tight-500'],
                                                            name: 'Text 2',
                                                            verticalAlignment: 'top',
                                                            withExternalLayout: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            r(c, {
                                                href: 'https://chirag.nyc/assets/pdf/Chirag Chadha Resume.pdf',
                                                openInNewTab: !0,
                                                children: r('a', {
                                                    className: 'framer-n7aig4 framer-1s3gldu',
                                                    'data-framer-name': 'Download Resume Button',
                                                    name: 'Download Resume Button',
                                                    children: r(f, {
                                                        children: r(o, {
                                                            className: 'framer-110476r-container',
                                                            children: r(P, {
                                                                bjcosRlf4: 'rgb(0, 0, 0)',
                                                                height: '100%',
                                                                id: 'KH6GowFI9',
                                                                layoutId: 'KH6GowFI9',
                                                                variant: 'qUuA_Sj8g',
                                                                width: '100%',
                                                                yfxVfmJ9O: 'DOWNLOAD RESUME',
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                r('div', {
                                    className: 'framer-1n3z1t',
                                    'data-framer-name': 'Clients',
                                    name: 'Clients',
                                    children: r(f, {
                                        children: r(o, {
                                            className: 'framer-isnu0k-container',
                                            children: r(F, {
                                                alignment: 'center',
                                                direction: 'left',
                                                fadeOptions: { fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 20, overflow: !1 },
                                                gap: 50,
                                                height: '100%',
                                                hoverFactor: 0.8,
                                                id: 'OmMeQKthG',
                                                layoutId: 'OmMeQKthG',
                                                padding: 10,
                                                paddingBottom: 10,
                                                paddingLeft: 10,
                                                paddingPerSide: !1,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                sizingOptions: { heightType: !0, widthType: !0 },
                                                slots: [
                                                    r(c, {
                                                        href: 'https://defye.us',
                                                        openInNewTab: !0,
                                                        children: r(p.a, {
                                                            className: 'framer-1c14jv8 framer-1s3gldu',
                                                            'data-border': !0,
                                                            'data-framer-name': 'Defye',
                                                            name: 'Defye',
                                                            style: { rotate: 5 },
                                                            children: r(A, {
                                                                background: {
                                                                    alt: '',
                                                                    fit: 'fill',
                                                                    pixelHeight: 1500,
                                                                    pixelWidth: 1500,
                                                                    sizes: '163px',
                                                                    src: 'https://framerusercontent.com/images/uCNN4auSVOL8CoEWPuJ8yN1mHnk.png',
                                                                    srcSet: 'https://framerusercontent.com/images/uCNN4auSVOL8CoEWPuJ8yN1mHnk.png?scale-down-to=512 512w,https://framerusercontent.com/images/uCNN4auSVOL8CoEWPuJ8yN1mHnk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/uCNN4auSVOL8CoEWPuJ8yN1mHnk.png 1500w',
                                                                },
                                                                className: 'framer-eds128',
                                                            }),
                                                        }),
                                                    }),
                                                    r(c, {
                                                        href: 'https://www.nuentrepreneursclub.com/',
                                                        openInNewTab: !0,
                                                        children: r(p.a, {
                                                            className: 'framer-1j4ujk framer-1s3gldu',
                                                            'data-border': !0,
                                                            'data-framer-name': 'NU Entrepreneurs Club',
                                                            name: 'NU Entrepreneurs Club',
                                                            style: { rotate: 4 },
                                                            children: r(R, {
                                                                className: 'framer-1ng0c8y',
                                                                'data-framer-name': 'nu_entrepreneurs_club_logo',
                                                                layout: 'position',
                                                                name: 'nu_entrepreneurs_club_logo',
                                                                opacity: 1,
                                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 85 92.5"><path d="M 55.17 2.502 C 58.81 4.08 62.103 6.124 65.094 8.672 C 67.689 10.882 70.027 13.327 72.05 16.063 C 75.021 20.079 77.369 24.412 78.613 29.288 C 78.686 29.571 78.795 29.846 78.923 30.234 C 80.109 28.484 80.272 26.387 81.367 24.727 L 81.546 24.747 C 81.577 24.966 81.644 25.186 81.634 25.402 C 81.537 27.651 81.498 29.905 81.302 32.146 C 81.081 34.664 80.826 37.19 80.387 39.678 C 79.586 44.224 78.15 48.574 75.546 52.435 C 73.992 54.739 72.109 56.781 70.037 58.652 C 67.573 60.878 64.847 62.715 61.967 64.343 C 61.771 64.454 61.554 64.527 61.347 64.617 L 61.212 64.493 L 62.93 61.281 L 62.802 61.127 C 62.037 61.23 61.274 61.399 60.506 61.425 C 58.387 61.498 56.258 61.64 54.146 61.521 C 48.623 61.211 43.36 59.666 38.155 57.906 C 37.096 57.548 36.049 57.153 34.999 56.767 C 34.868 56.719 34.755 56.624 34.64 56.47 C 38.093 56.233 41.54 56.062 44.954 55.274 C 41.474 54.175 38.455 52.412 36.033 49.725 L 36.127 49.519 C 36.292 49.553 36.464 49.568 36.622 49.624 C 39.35 50.578 42.166 51.11 45.039 51.34 C 48.626 51.628 52.191 51.5 55.713 50.671 C 60.274 49.597 64.368 47.58 67.996 44.624 C 68.194 44.463 68.365 44.172 68.397 43.922 C 68.547 42.741 68.705 41.555 68.73 40.369 C 68.74 39.867 68.516 39.305 68.248 38.861 C 66.239 35.539 63.981 32.393 61.393 29.494 C 60.24 28.202 59.09 26.906 57.871 25.678 C 57.459 25.262 56.876 24.909 56.311 24.766 C 53.509 24.058 50.703 23.353 47.868 22.798 C 45.917 22.416 43.902 22.361 41.943 22.008 C 40.515 21.751 39.396 22.316 38.262 22.964 C 34.243 25.261 30.408 27.828 26.841 30.784 C 26.053 31.437 25.29 32.123 24.484 32.754 C 23.698 33.368 23.397 34.244 23.093 35.124 C 21.535 39.644 20.385 44.263 19.762 49.007 C 19.728 49.266 19.807 49.568 19.916 49.814 C 20.877 51.995 21.773 54.211 22.85 56.335 C 25.037 60.647 27.593 64.739 30.635 68.509 C 30.946 68.896 31.417 69.224 31.882 69.407 C 36.761 71.325 41.808 72.657 46.986 73.437 C 49.264 73.78 51.58 73.902 53.884 74.043 C 58.544 74.328 63.104 73.728 67.57 72.375 C 70.194 71.581 72.663 70.453 74.973 68.985 C 78.298 66.872 81.13 64.234 83.394 61.004 C 83.832 60.379 84.234 59.73 84.659 59.096 C 84.737 58.979 84.843 58.879 84.953 58.753 C 85.179 59.374 83.173 63.91 81.532 66.727 C 80.065 69.247 78.265 71.505 76.242 73.598 L 76.326 73.712 C 76.568 73.596 76.818 73.495 77.051 73.363 C 79.614 71.905 82.103 70.336 84.375 68.446 C 84.433 68.399 84.484 68.328 84.55 68.309 C 84.684 68.27 84.826 68.259 84.965 68.236 C 84.958 68.387 85.004 68.568 84.937 68.682 C 84.305 69.758 83.681 70.84 83.003 71.887 C 81.369 74.413 79.504 76.755 77.335 78.849 C 74.214 81.864 70.676 84.223 66.578 85.713 C 63.411 86.865 60.153 87.487 56.778 87.469 C 56.546 87.468 56.314 87.496 56.069 87.585 C 58.282 88.737 60.704 89.312 62.997 90.218 L 62.996 90.423 C 62.576 90.479 62.158 90.575 61.738 90.585 C 59.482 90.636 57.225 90.746 54.972 90.687 C 50.837 90.578 46.705 90.361 42.615 89.682 C 36.239 88.624 30.175 86.722 24.76 83.074 C 24.637 82.991 24.508 82.915 24.379 82.84 C 24.35 82.823 24.308 82.826 24.133 82.796 C 25.384 86.189 27.163 89.231 28.97 92.26 L 28.852 92.392 C 28.666 92.282 28.458 92.197 28.297 92.059 C 26.351 90.382 24.356 88.755 22.485 86.999 C 20.558 85.191 18.683 83.317 16.915 81.355 C 15.21 79.463 13.607 77.47 12.074 75.434 C 9.891 72.536 8.115 69.388 6.752 66.018 C 6.48 65.346 6.246 64.658 5.991 63.979 C 5.929 63.815 5.853 63.656 5.718 63.499 C 4.838 66.121 4.421 68.832 3.913 71.522 L 3.718 71.542 C 3.64 71.299 3.527 71.061 3.487 70.811 C 3.104 68.422 2.7 66.035 2.366 63.638 C 1.968 60.78 1.779 57.906 1.649 55.019 C 1.409 49.693 1.883 44.448 3.183 39.292 C 3.645 37.46 4.398 35.696 5.095 33.931 C 5.483 32.947 6.03 32.027 6.503 31.076 C 6.592 30.897 6.67 30.712 6.69 30.461 C 4.39 31.707 2.362 33.338 0.2 34.837 C 0.22 33.664 -0.169 32.51 0.526 31.409 C 2.729 27.921 5.167 24.616 7.926 21.544 C 10.767 18.381 13.865 15.494 17.5 13.285 C 19.657 11.974 22.015 10.994 24.285 9.87 C 24.56 9.734 24.85 9.628 25.12 9.436 C 21.843 8.825 18.539 8.971 15.245 8.943 L 15.208 8.78 C 15.361 8.717 15.509 8.639 15.667 8.593 C 20.38 7.215 25.155 6.098 30.018 5.413 C 32.246 5.099 34.503 4.973 36.751 4.817 C 38.127 4.721 39.507 4.684 40.886 4.707 C 44.837 4.774 48.728 5.28 52.52 6.43 C 52.645 6.468 52.772 6.5 52.899 6.526 C 52.929 6.532 52.965 6.503 53.084 6.456 C 52.925 6.278 52.804 6.105 52.646 5.975 C 50.238 3.993 47.671 2.242 44.957 0.705 C 44.908 0.677 44.848 0.659 44.814 0.619 C 44.693 0.474 44.581 0.322 44.465 0.173 C 44.65 0.119 44.844 0 45.019 0.022 C 46.386 0.193 47.782 0.267 49.107 0.609 C 51.141 1.134 53.126 1.849 55.17 2.502 Z" fill="rgb(29,29,31)"></path></svg>',
                                                                svgContentId: 2292672323,
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                    }),
                                                    r(c, {
                                                        href: 'https://hubspot.com',
                                                        openInNewTab: !0,
                                                        children: r(p.a, {
                                                            className: 'framer-36vn62 framer-1s3gldu',
                                                            'data-border': !0,
                                                            'data-framer-name': 'HubSpot',
                                                            name: 'HubSpot',
                                                            style: { rotate: -4 },
                                                            children: r(R, {
                                                                className: 'framer-has1ve',
                                                                'data-framer-name': 'hubspot_logo',
                                                                layout: 'position',
                                                                name: 'hubspot_logo',
                                                                opacity: 1,
                                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 45.5"><path d="M 17.328 7.522 L 17.328 20.333 L 5.576 20.333 L 5.576 7.522 L 0 7.522 L 0 38.104 L 5.577 38.104 L 5.577 25.708 L 17.327 25.708 L 17.327 38.104 L 22.906 38.104 L 22.906 7.522 Z M 40.758 28.219 C 40.758 30.772 38.691 32.841 36.143 32.841 C 33.594 32.841 31.528 30.772 31.528 28.219 L 31.528 15.119 L 26.237 15.119 L 26.237 28.219 C 26.237 33.692 30.668 38.129 36.133 38.129 C 41.598 38.129 46.029 33.692 46.029 28.219 L 46.029 15.119 L 40.758 15.119 Z M 79.959 16.469 C 79.959 13.783 81.733 12.932 83.675 12.932 C 85.242 12.932 87.31 14.126 88.664 15.574 L 92.128 11.484 C 90.398 9.141 86.891 7.522 84.018 7.522 C 78.278 7.522 74.127 10.888 74.127 16.469 C 74.127 26.824 86.764 23.538 86.764 29.333 C 86.764 31.12 85.031 32.698 83.048 32.698 C 79.918 32.698 78.904 31.167 77.467 29.546 L 73.621 33.551 C 76.082 36.574 79.115 38.11 82.749 38.11 C 88.202 38.11 92.589 34.702 92.589 29.375 C 92.589 17.881 79.95 21.453 79.95 16.469 M 158.139 33.218 C 155.013 33.218 154.124 31.864 154.124 29.79 L 154.124 20.607 L 158.984 20.607 L 158.984 15.954 L 154.124 15.954 L 154.124 9.815 L 148.759 12.226 L 148.759 30.931 C 148.759 35.715 152.056 38.126 156.575 38.126 C 157.285 38.138 157.994 38.081 158.691 37.957 L 160 33.132 C 159.41 33.173 158.732 33.213 158.139 33.213 M 60.897 15.272 C 58.276 15.272 56.447 16.034 54.678 17.771 L 54.678 7.705 L 49.38 7.705 L 49.38 26.363 C 49.38 33.347 54.421 38.132 60.088 38.132 C 66.373 38.132 71.902 33.262 71.902 26.704 C 71.902 20.229 66.814 15.277 60.897 15.277 M 60.863 32.792 C 59.269 32.792 57.739 32.157 56.612 31.028 C 55.484 29.899 54.85 28.367 54.851 26.77 C 54.85 25.173 55.484 23.641 56.612 22.512 C 57.739 21.383 59.269 20.749 60.863 20.749 C 62.458 20.749 63.987 21.383 65.115 22.512 C 67.463 24.864 67.463 28.676 65.115 31.028 C 63.987 32.157 62.458 32.792 60.863 32.792 Z M 118.436 26.426 C 118.436 19.857 112.919 14.998 106.622 14.998 C 100.957 14.998 95.914 19.783 95.914 26.768 L 95.914 45.437 L 101.212 45.437 L 101.212 35.357 C 102.978 37.091 104.811 37.856 107.428 37.856 C 113.345 37.856 118.436 32.904 118.436 26.426 Z M 113.419 26.36 C 113.419 27.957 112.785 29.488 111.658 30.618 C 109.31 32.969 105.503 32.969 103.154 30.618 C 100.806 28.266 100.806 24.454 103.154 22.102 C 105.503 19.75 109.31 19.75 111.658 22.102 C 112.785 23.231 113.419 24.763 113.419 26.36 Z" fill="rgb(29,29,31)"></path><path d="M 135.556 14.741 L 135.556 9.41 C 136.992 8.738 137.913 7.297 137.92 5.709 L 137.92 5.587 C 137.92 3.32 136.085 1.481 133.82 1.481 L 133.698 1.481 C 131.434 1.481 129.598 3.32 129.598 5.587 L 129.598 5.709 C 129.606 7.297 130.526 8.738 131.962 9.41 L 131.962 14.741 C 129.94 15.051 128.036 15.891 126.442 17.175 L 111.842 5.787 C 111.946 5.41 112 5.023 112.006 4.635 C 112.009 3.25 111.391 1.936 110.324 1.056 C 109.256 0.175 107.851 -0.18 106.494 0.087 C 104.162 0.547 102.559 2.703 102.789 5.072 C 103.018 7.441 105.005 9.249 107.381 9.251 C 108.18 9.247 108.965 9.034 109.656 8.631 L 124.033 19.836 C 122.742 21.79 122.068 24.088 122.1 26.431 C 122.131 28.774 122.867 31.053 124.211 32.972 L 119.838 37.352 C 119.485 37.239 119.117 37.179 118.746 37.174 C 116.796 37.177 115.167 38.659 114.976 40.602 C 114.786 42.544 116.097 44.315 118.008 44.698 C 119.121 44.92 120.276 44.631 121.154 43.91 C 122.032 43.189 122.541 42.113 122.542 40.976 C 122.537 40.604 122.477 40.235 122.364 39.881 L 126.69 35.547 C 129.549 37.751 133.265 38.507 136.756 37.593 C 140.246 36.68 143.118 34.2 144.534 30.876 C 145.95 27.553 145.751 23.761 143.995 20.605 C 142.239 17.448 139.123 15.284 135.556 14.741 Z M 133.763 32.276 C 131.586 32.336 129.549 31.208 128.443 29.329 C 127.337 27.451 127.337 25.119 128.443 23.241 C 129.549 21.362 131.586 20.234 133.763 20.294 C 136.984 20.407 139.537 23.053 139.538 26.281 C 139.54 29.508 136.99 32.157 133.769 32.273" fill="rgb(29,29,31)"></path></svg>',
                                                                svgContentId: 2816373405,
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                    }),
                                                    r(c, {
                                                        href: 'https://vuehealth.com',
                                                        openInNewTab: !0,
                                                        children: r(p.a, {
                                                            className: 'framer-tyxvdv framer-1s3gldu',
                                                            'data-border': !0,
                                                            'data-framer-name': 'Vue Health',
                                                            name: 'Vue Health',
                                                            style: { rotate: -2 },
                                                            children: r(R, {
                                                                className: 'framer-1757c1t',
                                                                'data-framer-name': 'vue_health_logo',
                                                                fill: 'black',
                                                                intrinsicHeight: 135,
                                                                intrinsicWidth: 590,
                                                                name: 'vue_health_logo',
                                                                svg: '<svg width="590" height="135" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M153.06 9.71 111.78 81.2a6.27 6.27 0 0 1-10.86 0 6.296 6.296 0 0 1 0-6.26l10.23-17.71a6.273 6.273 0 0 0-2.295-8.565 6.268 6.268 0 0 0-8.565 2.295l-3 5.17a6.268 6.268 0 0 1-10.517.808 6.27 6.27 0 0 1-.343-7.068L108.92 11a6.25 6.25 0 0 1 5.42-3.13 6.16 6.16 0 0 1 3.13.84 6.258 6.258 0 0 1 2.3 8.56l-5 8.66a6.273 6.273 0 0 0 0 6.27 6.27 6.27 0 0 0 10.85 0L142.2 3.44A6.274 6.274 0 0 1 147.63.3a6.18 6.18 0 0 1 3.14.85 6.259 6.259 0 0 1 2.29 8.56ZM82.84 125.09 12.61 3.44A6.27 6.27 0 0 0 1.75 9.71L72 131.35a6.269 6.269 0 0 0 10.86 0 6.25 6.25 0 0 0-.02-6.26ZM97.32 100 45.9 11a6.26 6.26 0 0 0-8.56-2.29A6.27 6.27 0 0 0 35 17.23l51.42 89.05a6.269 6.269 0 0 0 10.86 0 6.302 6.302 0 0 0 .04-6.28Zm111.29 8.39a6.9 6.9 0 0 1 1.37 2.26c.309.918.458 1.882.44 2.85a8.103 8.103 0 0 1-2.86 6.38 10.356 10.356 0 0 1-7.1 2.51 13.326 13.326 0 0 1-3.92-.6 14.976 14.976 0 0 1-3.37-1.48l-.89 1.51h-1.65l-.29-10H192a23.283 23.283 0 0 0 1.21 3.35A11.724 11.724 0 0 0 195 118a8.23 8.23 0 0 0 2.5 1.93 7.318 7.318 0 0 0 3.33.72 7.48 7.48 0 0 0 2.48-.37 4.16 4.16 0 0 0 1.67-.999 4.16 4.16 0 0 0 1.03-1.651 6.46 6.46 0 0 0 .32-2.11 5.871 5.871 0 0 0-1-3.27 6.072 6.072 0 0 0-2.95-2.3c-.89-.36-1.91-.75-3.07-1.18-1.16-.43-2.14-.84-3-1.22a9.638 9.638 0 0 1-3.84-2.91 7.594 7.594 0 0 1-1.37-4.71 7.053 7.053 0 0 1 .68-3.1 8.133 8.133 0 0 1 1.93-2.58 8.998 8.998 0 0 1 2.82-1.68 9.78 9.78 0 0 1 3.4-.6 10 10 0 0 1 3.62.61c1.035.381 2.032.856 2.98 1.42l.84-1.4H209l.17 9.69h-1.67c-.3-1.11-.64-2.17-1-3.19a11.72 11.72 0 0 0-1.5-2.78 6.77 6.77 0 0 0-2.16-1.9 6.438 6.438 0 0 0-3.13-.71A4.808 4.808 0 0 0 196.4 95a4.006 4.006 0 0 0-1.4 3 5.269 5.269 0 0 0 .88 3.14 6.501 6.501 0 0 0 2.58 2c1 .48 2 .9 3 1.25s1.91.72 2.82 1.12c.816.355 1.607.762 2.37 1.22a8.73 8.73 0 0 1 1.96 1.66Zm22.98 8.61a10.367 10.367 0 0 1-3.42 3.87 8.58 8.58 0 0 1-4.92 1.44c-1.476.03-2.94-.264-4.29-.86a8.499 8.499 0 0 1-3-2.35 9.875 9.875 0 0 1-1.78-3.46 14.676 14.676 0 0 1-.59-4.18c0-1.319.213-2.629.63-3.88a10.92 10.92 0 0 1 1.84-3.43 9.124 9.124 0 0 1 2.92-2.36 8.363 8.363 0 0 1 3.9-.89 9.348 9.348 0 0 1 3.81.7 6.665 6.665 0 0 1 2.57 1.91 7.574 7.574 0 0 1 1.42 2.72c.313 1.106.468 2.251.46 3.4V111h-13.49c-.01 1.22.117 2.438.38 3.63a8.836 8.836 0 0 0 1.21 2.87 5.632 5.632 0 0 0 2.1 1.89 6.48 6.48 0 0 0 3.09.69 5.727 5.727 0 0 0 3.16-.86 8.511 8.511 0 0 0 2.56-3.1l1.44.88Zm-4.59-7.72a16.883 16.883 0 0 0-.19-2.47 7.811 7.811 0 0 0-.63-2.19 4.165 4.165 0 0 0-1.3-1.54 3.517 3.517 0 0 0-2.12-.6 4.403 4.403 0 0 0-3.59 1.8 8.286 8.286 0 0 0-1.56 5H227Zm22.49-5.17A3.335 3.335 0 0 1 249 106a1.753 1.753 0 0 1-1.58.82 2.387 2.387 0 0 1-1.76-.6 1.818 1.818 0 0 1-.61-1.32c-.004-.275.019-.55.07-.82 0-.25.09-.5.14-.75a4.57 4.57 0 0 0-2.27.79 6.58 6.58 0 0 0-2.2 2.22v11.82c-.016.41.077.817.27 1.18.21.315.52.551.88.67.429.159.875.263 1.33.31.54.067 1.01.117 1.41.15v1.36h-10.74v-1.36l1-.08c.295-.024.587-.081.87-.17.359-.1.666-.332.86-.65.199-.368.296-.782.28-1.2v-12.56a2.827 2.827 0 0 0-.3-1.25 2.53 2.53 0 0 0-.84-1 3 3 0 0 0-.92-.36 8.073 8.073 0 0 0-1.16-.15v-1.35l6.76-.46.29.29v2.87h.1a9.234 9.234 0 0 1 2.84-2.54 6.075 6.075 0 0 1 2.86-.86c.391-.016.781.051 1.144.196.364.144.693.364.966.644a3.124 3.124 0 0 1 .8 2.27Zm11.57 17.69h-9.8v-1.36l1-.08c.295-.025.587-.082.87-.17.359-.1.666-.332.86-.65a2.34 2.34 0 0 0 .27-1.2v-12.53a2.532 2.532 0 0 0-.29-1.2 2.733 2.733 0 0 0-.84-.92 4.084 4.084 0 0 0-1.13-.42 8.235 8.235 0 0 0-1.36-.21v-1.36l7.17-.46.28.29v16.56a2.42 2.42 0 0 0 .28 1.2c.199.326.507.571.87.69a5.828 5.828 0 0 0 1.84.46l-.02 1.36Zm-2.57-28.56a2.997 2.997 0 0 1-.78 2 2.423 2.423 0 0 1-1.9.88 2.389 2.389 0 0 1-1.82-.84 2.702 2.702 0 0 1-.78-1.9 2.827 2.827 0 0 1 .78-2 2.381 2.381 0 0 1 1.82-.84 2.518 2.518 0 0 1 1.92.79 2.562 2.562 0 0 1 .76 1.91Zm24.89 18.2a13.21 13.21 0 0 1-.68 4.21 10.076 10.076 0 0 1-1.93 3.51 9 9 0 0 1-3.3 2.45 10.552 10.552 0 0 1-4.21.8 9.463 9.463 0 0 1-3.69-.73 9.081 9.081 0 0 1-3.11-2.13 10.3 10.3 0 0 1-2.14-3.36 12.173 12.173 0 0 1-.79-4.46 11.133 11.133 0 0 1 2.77-7.79 10.17 10.17 0 0 1 14.31-.15 10.537 10.537 0 0 1 2.77 7.65Zm-4.26 0a18.008 18.008 0 0 0-.31-3.26 10.564 10.564 0 0 0-.93-2.92 5.804 5.804 0 0 0-1.73-2 4.413 4.413 0 0 0-2.62-.77 4.635 4.635 0 0 0-2.71.78 5.84 5.84 0 0 0-1.82 2.13 9.559 9.559 0 0 0-.93 2.87 18.739 18.739 0 0 0-.27 3.11 19.853 19.853 0 0 0 .32 3.65 11.003 11.003 0 0 0 1 3 5.833 5.833 0 0 0 1.77 2.07 4.436 4.436 0 0 0 2.63.75 4.576 4.576 0 0 0 4.08-2.49 13.247 13.247 0 0 0 1.52-6.88v-.04Zm28.95 9.99-6.63.45-.31-.29V119H301c-.33.34-.7.71-1.11 1.1a7.86 7.86 0 0 1-1.42 1.06 8.964 8.964 0 0 1-1.79.84 7.794 7.794 0 0 1-2.44.29 4.901 4.901 0 0 1-4.1-1.76 8.004 8.004 0 0 1-1.41-5.11v-9.71a2.577 2.577 0 0 0-.28-1.24 2.627 2.627 0 0 0-.82-.88 2.829 2.829 0 0 0-.93-.36 10.838 10.838 0 0 0-1.19-.15v-1.36l6.78-.5.31.29v14.11a4.879 4.879 0 0 0 1 3.32 3.052 3.052 0 0 0 2.36 1.11 5.524 5.524 0 0 0 2-.35 5.998 5.998 0 0 0 1.49-.83 6.54 6.54 0 0 0 1-.91 5.05 5.05 0 0 0 .65-.9v-11.47a2.408 2.408 0 0 0-.29-1.21 2.818 2.818 0 0 0-.8-.89 2.192 2.192 0 0 0-1.1-.3l-1.64-.09v-1.36l7.39-.5.31.29v16.11c-.011.415.089.826.29 1.19.202.341.479.632.81.85.268.16.569.259.88.29.34 0 .72.08 1.13.1l-.01 1.36Zm15.93-9.58a5.13 5.13 0 0 1 1.3 1.71c.32.748.474 1.557.45 2.37a5.758 5.758 0 0 1-2.11 4.61 8.188 8.188 0 0 1-5.47 1.79 8.11 8.11 0 0 1-3.26-.64 8.503 8.503 0 0 1-2.13-1.17l-.41 1.34h-1.55l-.2-7.06H312c.151.651.387 1.279.7 1.87.34.721.773 1.393 1.29 2a7.504 7.504 0 0 0 1.93 1.53 5.177 5.177 0 0 0 2.52.62 4.614 4.614 0 0 0 3.05-.9 3.21 3.21 0 0 0 1.07-2.58 3.087 3.087 0 0 0-.34-1.5 3.356 3.356 0 0 0-1-1.1 7.864 7.864 0 0 0-1.67-.85c-.66-.26-1.39-.51-2.2-.76-.732-.22-1.45-.483-2.15-.79a8.411 8.411 0 0 1-2-1.18 5.79 5.79 0 0 1-1.48-1.77 4.999 4.999 0 0 1-.58-2.47 5.605 5.605 0 0 1 1.85-4.23 7.003 7.003 0 0 1 5-1.72c.822.003 1.641.104 2.44.3a8.707 8.707 0 0 1 2 .75l.47-1.08h1.48l.31 6.53h-1.42a6.563 6.563 0 0 0-1.86-3.56 4.858 4.858 0 0 0-3.49-1.38 3.86 3.86 0 0 0-2.66.85 2.637 2.637 0 0 0-1 2 3.396 3.396 0 0 0 .32 1.55c.243.413.587.757 1 1 .488.31 1.008.568 1.55.77.63.24 1.4.51 2.32.81.875.275 1.73.609 2.56 1 .725.348 1.395.8 1.99 1.34Zm14.3 9.95h-9.9v-1.36l1-.09c.297-.028.592-.081.88-.16.361-.1.671-.332.87-.65.206-.365.306-.781.29-1.2V94.8a3.144 3.144 0 0 0-.32-1.39 2.757 2.757 0 0 0-.84-1 4.369 4.369 0 0 0-1.36-.45 12.36 12.36 0 0 0-1.58-.25v-1.34l7.64-.45.29.31v27.86c-.014.409.075.815.26 1.18.201.329.508.579.87.71.288.134.59.238.9.31.329.076.663.126 1 .15v1.36Zm1.01 6.63a2.438 2.438 0 0 1 .57-1.68 1.805 1.805 0 0 1 1.41-.65 2.33 2.33 0 0 1 1.13.25 2.9 2.9 0 0 1 .84.63c.252.253.474.535.66.84.24.35.42.64.56.88a8.162 8.162 0 0 0 2.46-2.9 23.863 23.863 0 0 0 2.07-4.11c-1.3-3.25-2.49-6.16-3.54-8.73-1.05-2.57-2.16-5.22-3.32-8a3.002 3.002 0 0 0-1.31-1.47 5.587 5.587 0 0 0-1.86-.67v-1.36h9.27v1.44c-.501.032-.998.12-1.48.26-.58.16-.86.34-.86.55a1.6 1.6 0 0 0 .09.41c.06.19.13.39.21.59.52 1.333 1.317 3.293 2.39 5.88a272.64 272.64 0 0 1 2.48 6.14c.62-1.467 1.263-2.987 1.93-4.56.67-1.57 1.41-3.42 2.24-5.56.09-.26.23-.62.41-1.08.162-.377.253-.78.27-1.19 0-.35-.32-.68-.94-1a5.635 5.635 0 0 0-1.78-.57v-1.32h7.54v1.28a5.002 5.002 0 0 0-1.63.71 3.709 3.709 0 0 0-1.5 1.72 687.505 687.505 0 0 0-4.36 10.36c-1.27 3.11-2.23 5.41-2.89 6.87a36.021 36.021 0 0 1-2.32 4.5 13.774 13.774 0 0 1-2 2.55 6.094 6.094 0 0 1-1.72 1.16c-.51.198-1.053.3-1.6.3a3.868 3.868 0 0 1-2.52-.76 2.246 2.246 0 0 1-.9-1.71Zm45.87-5.93a12.702 12.702 0 0 1-5-1 12.998 12.998 0 0 1-4.25-3 14.508 14.508 0 0 1-2.92-4.73 17.145 17.145 0 0 1-1.09-6.3 18.008 18.008 0 0 1 1.07-6.35 14.886 14.886 0 0 1 3-4.92 12.998 12.998 0 0 1 4.43-3.15 14.24 14.24 0 0 1 9.36-.58c1.152.372 2.254.886 3.28 1.53l.84-1.4h1.65l.19 10.42h-1.69a24.454 24.454 0 0 0-1-3.31 12.924 12.924 0 0 0-1.54-3 7.51 7.51 0 0 0-2.35-2.19 6 6 0 0 0-3.1-.79 8 8 0 0 0-3.72.88 8.56 8.56 0 0 0-3 2.62 13 13 0 0 0-1.87 4.25 22.605 22.605 0 0 0-.68 5.75 17.767 17.767 0 0 0 .71 5.14 13.174 13.174 0 0 0 2 4.11 9.745 9.745 0 0 0 3.11 2.74 8.216 8.216 0 0 0 4 1 8.59 8.59 0 0 0 5.49-1.91 11.001 11.001 0 0 0 3.08-4.58l1.55.74a11.543 11.543 0 0 1-11.65 8.08l.1-.05Zm29.23-18.39a3.419 3.419 0 0 1-.51 1.86 1.761 1.761 0 0 1-1.59.82 2.4 2.4 0 0 1-1.76-.6 1.842 1.842 0 0 1-.61-1.32c-.001-.275.026-.55.08-.82.05-.25.09-.5.13-.75-.81.058-1.59.331-2.26.79a6.7 6.7 0 0 0-2.21 2.22v11.82c-.013.411.083.819.28 1.18.21.315.52.551.88.67.425.159.869.263 1.32.31.547.067 1.017.117 1.41.15v1.36h-10.7v-1.36l1-.08c.299-.024.594-.081.88-.17.356-.1.66-.333.85-.65.204-.366.301-.782.28-1.2v-12.53a2.827 2.827 0 0 0-.3-1.25c-.184-.4-.47-.745-.83-1a2.996 2.996 0 0 0-.93-.36 7.8 7.8 0 0 0-1.15-.15v-1.35l6.75-.46.29.29v2.87h.11a9.115 9.115 0 0 1 2.84-2.54 6.001 6.001 0 0 1 2.86-.86 2.815 2.815 0 0 1 2.11.84c.549.624.83 1.44.78 2.27ZM434.18 117a10.367 10.367 0 0 1-3.42 3.87 8.58 8.58 0 0 1-4.92 1.44c-1.476.03-2.94-.264-4.29-.86a8.499 8.499 0 0 1-3-2.35 10.046 10.046 0 0 1-1.78-3.46 14.676 14.676 0 0 1-.59-4.18c0-1.319.213-2.629.63-3.88a10.92 10.92 0 0 1 1.84-3.43 9.124 9.124 0 0 1 2.92-2.36 8.363 8.363 0 0 1 3.9-.89 9.348 9.348 0 0 1 3.81.7 6.665 6.665 0 0 1 2.57 1.91 7.574 7.574 0 0 1 1.42 2.72c.313 1.106.468 2.251.46 3.4V111h-13.49c-.01 1.22.117 2.438.38 3.63a8.836 8.836 0 0 0 1.21 2.87 5.632 5.632 0 0 0 2.1 1.89 6.48 6.48 0 0 0 3.09.69 5.727 5.727 0 0 0 3.16-.86 8.511 8.511 0 0 0 2.56-3.1l1.44.88Zm-4.55-7.74a16.883 16.883 0 0 0-.19-2.47 7.811 7.811 0 0 0-.63-2.19 4.165 4.165 0 0 0-1.3-1.54 3.517 3.517 0 0 0-2.12-.6 4.403 4.403 0 0 0-3.59 1.8 8.286 8.286 0 0 0-1.56 5h9.39Zm26.13 12.17c-.64.23-1.21.42-1.7.56a5.613 5.613 0 0 1-1.65.22 4.068 4.068 0 0 1-2.57-.75 3.48 3.48 0 0 1-1.22-2.2h-.13a10.004 10.004 0 0 1-2.87 2.27 8.057 8.057 0 0 1-3.7.78 5.2 5.2 0 0 1-3.75-1.4 4.82 4.82 0 0 1-1.48-3.66 6.17 6.17 0 0 1 .33-2.1 4.997 4.997 0 0 1 1-1.67 4.902 4.902 0 0 1 1.36-1.1 11.59 11.59 0 0 1 1.59-.78c.61-.23 1.87-.66 3.76-1.29 1.306-.4 2.58-.898 3.81-1.49v-2a7.821 7.821 0 0 0-.11-1 4.448 4.448 0 0 0-.48-1.44 4.07 4.07 0 0 0-1.17-1.32 3.464 3.464 0 0 0-2.13-.57 4.664 4.664 0 0 0-1.76.32 3.067 3.067 0 0 0-1.14.67c.023.409.09.815.2 1.21.122.484.185.981.19 1.48a1.768 1.768 0 0 1-.65 1.32 2.54 2.54 0 0 1-1.8.6 1.673 1.673 0 0 1-1.51-.73 2.844 2.844 0 0 1-.49-1.64 2.997 2.997 0 0 1 .67-1.81 6.938 6.938 0 0 1 1.74-1.55 9.853 9.853 0 0 1 2.25-1 8.719 8.719 0 0 1 2.57-.4 16.84 16.84 0 0 1 3 .23 5.586 5.586 0 0 1 2.34 1 4.72 4.72 0 0 1 1.59 2.07 8.74 8.74 0 0 1 .55 3.37c0 2 0 3.7-.07 5.22-.07 1.52-.06 3.17-.06 5-.018.444.078.884.28 1.28.213.336.509.612.86.8.31.153.654.225 1 .21h1.37l-.02 1.29Zm-7.18-10.88c-1.17.35-2.19.68-3.07 1-.858.326-1.679.742-2.45 1.24a5.584 5.584 0 0 0-1.63 1.66 4.21 4.21 0 0 0-.6 2.28 3.204 3.204 0 0 0 .9 2.52 3.27 3.27 0 0 0 2.27.81 4.707 4.707 0 0 0 2.58-.71 7.606 7.606 0 0 0 1.87-1.69l.13-7.11Zm21.74 10.36c-.89.37-1.73.68-2.53.94a9.87 9.87 0 0 1-2.92.38 4.398 4.398 0 0 1-3.6-1.29 5.656 5.656 0 0 1-1-3.63v-13.76h-3.66v-2h3.75v-6.3h3.74v6.32h5.83v2h-5.83v11.33c-.009.711.025 1.423.1 2.13.048.521.197 1.027.44 1.49a2.14 2.14 0 0 0 1 .91 4.323 4.323 0 0 0 1.77.31c.34 0 .85 0 1.51-.1a6.939 6.939 0 0 0 1.41-.23l-.01 1.5Zm11.86.89h-9.8v-1.36l1-.08a3.84 3.84 0 0 0 .87-.17c.359-.1.666-.332.86-.65.204-.366.301-.782.28-1.2v-12.53a2.43 2.43 0 0 0-.3-1.2 2.733 2.733 0 0 0-.84-.92 3.999 3.999 0 0 0-1.13-.42 8.013 8.013 0 0 0-1.36-.21v-1.36l7.17-.46.29.29v16.56c-.015.417.078.83.27 1.2.204.321.511.565.87.69a5.704 5.704 0 0 0 1.88.46l-.06 1.36Zm-2.57-28.56a3.002 3.002 0 0 1-.77 2 2.446 2.446 0 0 1-1.91.88 2.4 2.4 0 0 1-1.82-.84 2.693 2.693 0 0 1-.77-1.9c-.017-.742.26-1.46.77-2a2.402 2.402 0 0 1 1.82-.84 2.532 2.532 0 0 1 1.93.79 2.6 2.6 0 0 1 .75 1.91Zm25.14 9.51c-.623.113-1.22.34-1.76.67a4.005 4.005 0 0 0-1.43 1.78 2108.33 2108.33 0 0 0-2.51 5.75c-.87 2-1.76 4.1-2.7 6.3-.27.63-.57 1.38-.87 2.24-.3.86-.6 1.7-.86 2.49H493c-1.31-3.22-2.51-6.17-3.61-8.82-1.1-2.65-2.24-5.38-3.42-8.17a2.998 2.998 0 0 0-1.33-1.47 5.382 5.382 0 0 0-1.84-.67v-1.36h9.4v1.44a7.907 7.907 0 0 0-1.55.26c-.61.16-.92.37-.92.65.018.111.052.219.1.32.07.17.14.36.21.58.56 1.4 1.353 3.357 2.38 5.87 1 2.51 1.86 4.53 2.5 6.06l1.87-4.4c.75-1.75 1.55-3.71 2.42-5.88l.39-1c.121-.319.182-.658.18-1a.789.789 0 0 0-.33-.62 3.408 3.408 0 0 0-.82-.49 5.854 5.854 0 0 0-.92-.31l-.75-.14v-1.32h7.77l.02 1.24ZM523.68 117a10.367 10.367 0 0 1-3.42 3.87 8.62 8.62 0 0 1-4.92 1.44 10.127 10.127 0 0 1-4.3-.86 8.459 8.459 0 0 1-3-2.35 9.875 9.875 0 0 1-1.78-3.46 14.321 14.321 0 0 1-.59-4.18c0-1.319.213-2.629.63-3.88a10.92 10.92 0 0 1 1.84-3.43 9.005 9.005 0 0 1 2.91-2.36 8.403 8.403 0 0 1 3.91-.89 9.348 9.348 0 0 1 3.81.7 6.738 6.738 0 0 1 2.57 1.91 7.722 7.722 0 0 1 1.41 2.72c.317 1.105.472 2.25.46 3.4V111h-13.47a15.657 15.657 0 0 0 .38 3.63 8.627 8.627 0 0 0 1.2 2.87 5.79 5.79 0 0 0 2.1 1.89 6.53 6.53 0 0 0 3.09.69 5.694 5.694 0 0 0 3.16-.86 8.521 8.521 0 0 0 2.57-3.1l1.44.88Zm-4.55-7.74a16.882 16.882 0 0 0-.2-2.47 7.505 7.505 0 0 0-.63-2.19 3.996 3.996 0 0 0-1.29-1.54 3.517 3.517 0 0 0-2.12-.6 4.424 4.424 0 0 0-3.6 1.8 8.348 8.348 0 0 0-1.55 5h9.39ZM204.34 69.09l-24.27-51.61a1.478 1.478 0 0 1-.19-.61c0-1.46 3.38-1.46 6.75-1.46 3.77 0 7.57 0 8.15 1.35l11.82 27.8 11.79-27.8c.61-1.35 4.34-1.35 8.14-1.35 3.38 0 6.76 0 6.76 1.46a1.63 1.63 0 0 1-.16.58l-24.22 51.64c-.43.77-1.46.81-2.27.81s-1.92-.04-2.3-.81Zm34.85-16.59V17.06c0-1.57 3.31-1.57 6.57-1.57 3.26 0 6.6 0 6.6 1.61v31.52c0 4.8 3.42 7.72 8.49 7.72 4.57 0 8.49-2.57 8.49-7.72V17.06c0-1.57 3.34-1.57 6.6-1.57s6.6 0 6.6 1.61v35.4c0 9.41-8.14 17.28-21.69 17.28-14.01 0-21.66-8.21-21.66-17.28Zm51.03 15.4V17a1.006 1.006 0 0 1 .598-.997c.127-.055.264-.083.402-.083h35c1.65 0 1.69 3.15 1.69 6.34s0 6.41-1.69 6.41h-22.83V36h18.93c1.57 0 1.61 2.8 1.61 5.57 0 2.77 0 5.6-1.61 5.6h-18.93v9.07h22.84c1.69 0 1.73 3.18 1.73 6.41s0 6.37-1.69 6.37h-35a1.092 1.092 0 0 1-1.05-1.12Zm61.33-.12V17.06c0-1.53 3.26-1.57 6.6-1.57s6.57 0 6.57 1.57v18h23v-18c0-1.53 3.3-1.57 6.56-1.57s6.61 0 6.61 1.57v50.69c0 1.57-3.3 1.61-6.61 1.61-3.31 0-6.56 0-6.56-1.58v-20h-23v19.97c0 1.57-3.26 1.61-6.57 1.61-3.31 0-6.6-.04-6.6-1.58Zm55.93-18.54c0-11.44 7.72-20.16 19.16-20.16 12 0 17.43 9 17.43 20.35 0 1.73 0 3.46-1.19 3.46h-22.61c.53 3.61 3.83 6 7.71 6a18.07 18.07 0 0 0 9.72-2.69c.173-.1.37-.152.57-.15 1.12 0 2 1.84 2.73 3.91a14.53 14.53 0 0 1 1.23 4.53c0 .66-.16 1.16-.62 1.39a28.5 28.5 0 0 1-15.12 4c-11.72-.1-19.01-9.05-19.01-20.64Zm19.16-9.52a6.54 6.54 0 0 0-6.53 5.91h11.67c-.07-3.07-1.23-5.91-5.14-5.91Zm23.5 19.43c0-7.18 6.18-11.41 14.9-13.1l5.6-1.07v-1.92c0-1.77-1.11-3-3.53-3a22 22 0 0 0-10.44 2.88.998.998 0 0 1-.47.12c-1.11 0-2.22-2.07-3.14-4.3a12.213 12.213 0 0 1-1.19-4 1.592 1.592 0 0 1 .8-1.54 30.337 30.337 0 0 1 15.09-4.11c9.72 0 15.71 4.15 15.71 15v23.71c0 1.54-3 1.54-5.92 1.54s-6 0-6-1.54v-3.38c-2.22 3.23-5.37 5.34-10.59 5.34-6.02 0-10.82-3.42-10.82-10.63Zm20.5-4.15v-2.42l-4.49.92a3.308 3.308 0 0 0-3.15 3.11 2.583 2.583 0 0 0 1.819 2.403c.343.106.705.139 1.061.097a4.37 4.37 0 0 0 4.76-4.11Zm22.2 3.19V12.76c0-1.57 3.23-1.57 6.46-1.57s6.45 0 6.45 1.57v42.58a2.009 2.009 0 0 0 .538 1.665 2.004 2.004 0 0 0 1.642.605c.741 0 1.478-.104 2.19-.31.116-.02.234-.02.35 0 1.38 0 1.38 2.77 1.38 5.57 0 3 0 6-1.38 6.3-2.186.44-4.41.658-6.64.65-7.45-.04-10.99-5.3-10.99-11.63Zm28.81-3.69V41H516c-1.57 0-1.57-2.8-1.57-5.56s0-5.57 1.57-5.57h5.65v-10c0-1.57 3.26-1.57 6.45-1.57 3.19 0 6.45 0 6.45 1.57v10h8c1.66 0 1.66 2.76 1.66 5.57 0 2.81 0 5.56-1.66 5.56h-8v13.5c0 2 .81 3.84 3.22 3.84a10.72 10.72 0 0 0 5.19-1.5c.173-.1.37-.152.57-.15 1.16 0 2 1.92 2.81 4.18a16.572 16.572 0 0 1 1.23 4.84 1.519 1.519 0 0 1-.58 1.42 21.939 21.939 0 0 1-11.37 2.65c-9.44 0-13.97-5.53-13.97-15.28Zm31.61 13.28V12.65c0-1.58 3.22-1.58 6.49-1.58s6.48 0 6.48 1.58v21.88A12.363 12.363 0 0 1 576.49 29c8.1 0 13.13 6.15 13.13 16.4v22.38c0 1.58-3.23 1.58-6.49 1.58-3.26 0-6.49 0-6.49-1.58v-21.5c0-2.69-1.54-5-4.69-5-3.64 0-5.72 2.81-5.72 6.11v20.39c0 1.58-3.3 1.58-6.52 1.58-3.22 0-6.45 0-6.45-1.58Z" fill="#1D1D1F"/></svg>',
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                    }),
                                                    r(c, {
                                                        href: 'https://generatenu.com',
                                                        openInNewTab: !0,
                                                        children: r(p.a, {
                                                            className: 'framer-pj71au framer-1s3gldu',
                                                            'data-border': !0,
                                                            'data-framer-name': 'Generate',
                                                            name: 'Generate',
                                                            style: { rotate: 4 },
                                                            children: r(R, {
                                                                className: 'framer-maegfz',
                                                                'data-framer-name': 'generate_logo',
                                                                layout: 'position',
                                                                name: 'generate_logo',
                                                                opacity: 1,
                                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80"><path d="M 51.084 42.971 C 51.084 45.741 50.261 48.448 48.721 50.751 C 47.18 53.055 44.99 54.85 42.429 55.909 C 39.867 56.969 37.049 57.246 34.33 56.706 C 31.611 56.166 29.113 54.832 27.152 52.873 C 25.192 50.915 23.857 48.419 23.316 45.702 C 22.775 42.985 23.053 40.169 24.115 37.611 C 25.176 35.051 26.974 32.864 29.279 31.326 C 31.585 29.788 34.295 28.967 37.067 28.967 C 40.784 28.967 44.349 30.443 46.978 33.07 C 49.606 35.695 51.083 39.257 51.084 42.971 Z M 37.147 20.483 C 38.064 20.483 38.98 20.538 39.89 20.65 L 42.387 0.334 C 40.6 0.112 38.802 0 37.002 0 C 30.082 -0.011 23.262 1.654 17.125 4.853 L 26.682 23.053 C 29.908 21.359 33.497 20.477 37.141 20.483 M 77.242 27.813 L 58.189 35.013 C 59.797 39.282 60.075 43.937 58.986 48.367 L 78.758 53.248 C 80.828 44.811 80.299 35.944 77.24 27.813 M 55.609 30.214 L 72.4 18.662 C 67.47 11.493 60.484 5.982 52.36 2.854 L 45.087 21.949 C 49.352 23.577 53.023 26.458 55.616 30.214" fill="rgb(29,29,31)"></path><path d="M 12.505 15.238 L 22.154 26.139 C 19.684 28.323 17.725 31.022 16.414 34.047 C 13.763 40.169 13.969 47.153 16.976 53.108 C 18.463 56.05 20.578 58.63 23.172 60.664 C 25.766 62.7 28.777 64.14 31.989 64.885 C 35.203 65.629 38.541 65.659 41.767 64.972 C 44.992 64.285 48.028 62.898 50.659 60.91 C 53.289 58.922 55.449 56.38 56.988 53.465 L 67.547 58.991 L 69.877 60.212 C 67.346 65.015 63.789 69.202 59.46 72.478 C 55.129 75.755 50.132 78.04 44.82 79.173 C 39.508 80.307 34.011 80.26 28.719 79.036 C 23.428 77.813 18.47 75.442 14.195 72.092 C 9.923 68.743 6.439 64.496 3.99 59.651 C 1.541 54.807 0.189 49.485 0.027 44.06 C -0.134 38.636 0.9 33.243 3.056 28.262 C 5.213 23.281 8.439 18.835 12.505 15.238 Z" fill="rgb(29,29,31)"></path></svg>',
                                                                svgContentId: 3150963241,
                                                                withExternalLayout: !0,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                                speed: 60,
                                                style: { height: '100%', width: '100%' },
                                                width: '100%',
                                            }),
                                        }),
                                    }),
                                }),
                                a('div', {
                                    className: 'framer-1rszne8',
                                    'data-framer-name': 'Services',
                                    name: 'Services',
                                    children: [
                                        a('div', {
                                            className: 'framer-rx20vu',
                                            'data-framer-name': 'Heading',
                                            name: 'Heading',
                                            children: [
                                                r('div', {
                                                    className: 'framer-1f5l6ep',
                                                    'data-framer-name': 'Line 1',
                                                    name: 'Line 1',
                                                    children: r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                __framer__spring: {
                                                                    damping: 90,
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [0.44, 0, 0.56, 1],
                                                                    mass: 1,
                                                                    stiffness: 500,
                                                                    type: 'spring',
                                                                },
                                                                __framer__transformTargets: [
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 40,
                                                                        },
                                                                    },
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 0,
                                                                        },
                                                                    },
                                                                ],
                                                                children: r(e, {
                                                                    children: r('h2', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '40px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-1.3px',
                                                                            '--framer-line-height': '30px',
                                                                            '--framer-text-alignment': 'left',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'My',
                                                                    }),
                                                                }),
                                                            },
                                                        },
                                                        children: r(g, {
                                                            __framer__spring: {
                                                                damping: 60,
                                                                delay: 0,
                                                                duration: 0.3,
                                                                ease: [0.44, 0, 0.56, 1],
                                                                mass: 1.5,
                                                                stiffness: 300,
                                                                type: 'spring',
                                                            },
                                                            __framer__styleTransformEffectEnabled: !0,
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 100,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                            __framer__transformTrigger: 'onInView',
                                                            __fromCanvasComponent: !0,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '90px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-2.3px',
                                                                        '--framer-line-height': '80px',
                                                                        '--framer-text-alignment': 'left',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'My',
                                                                }),
                                                            }),
                                                            className: 'framer-143eg3z',
                                                            'data-framer-name': 'Text',
                                                            fonts: ['GF;Instrument Sans-700'],
                                                            name: 'Text',
                                                            style: { transformPerspective: 1200 },
                                                            verticalAlignment: 'top',
                                                            withExternalLayout: !0,
                                                        }),
                                                    }),
                                                }),
                                                r('div', {
                                                    className: 'framer-voblb1',
                                                    'data-framer-name': 'Line 2',
                                                    name: 'Line 2',
                                                    children: r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                __framer__spring: {
                                                                    damping: 90,
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [0.44, 0, 0.56, 1],
                                                                    mass: 1,
                                                                    stiffness: 500,
                                                                    type: 'spring',
                                                                },
                                                                __framer__transformTargets: [
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 40,
                                                                        },
                                                                    },
                                                                    {
                                                                        target: {
                                                                            opacity: 1,
                                                                            rotate: 0,
                                                                            rotateX: 0,
                                                                            rotateY: 0,
                                                                            scale: 1,
                                                                            skewX: 0,
                                                                            skewY: 0,
                                                                            x: 0,
                                                                            y: 0,
                                                                        },
                                                                    },
                                                                ],
                                                                children: r(e, {
                                                                    children: r('h2', {
                                                                        style: {
                                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                            '--framer-font-family':
                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                            '--framer-font-size': '40px',
                                                                            '--framer-font-weight': '700',
                                                                            '--framer-letter-spacing': '-1.3px',
                                                                            '--framer-line-height': '30px',
                                                                            '--framer-text-alignment': 'left',
                                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                                            '--framer-text-transform': 'uppercase',
                                                                        },
                                                                        children: 'EXPERTISE',
                                                                    }),
                                                                }),
                                                            },
                                                        },
                                                        children: r(g, {
                                                            __framer__spring: {
                                                                damping: 60,
                                                                delay: 0,
                                                                duration: 0.3,
                                                                ease: [0.44, 0, 0.56, 1],
                                                                mass: 1.5,
                                                                stiffness: 300,
                                                                type: 'spring',
                                                            },
                                                            __framer__styleTransformEffectEnabled: !0,
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 100,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                            __framer__transformTrigger: 'onInView',
                                                            __fromCanvasComponent: !0,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '90px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-2.3px',
                                                                        '--framer-line-height': '80px',
                                                                        '--framer-text-alignment': 'left',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'EXPERTISE',
                                                                }),
                                                            }),
                                                            className: 'framer-rih03x',
                                                            'data-framer-name': 'Text',
                                                            fonts: ['GF;Instrument Sans-700'],
                                                            name: 'Text',
                                                            style: { transformPerspective: 1200 },
                                                            verticalAlignment: 'top',
                                                            withExternalLayout: !0,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        a('div', {
                                            className: 'framer-1ed4s8m',
                                            'data-framer-name': 'Cards',
                                            name: 'Cards',
                                            children: [
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: { __framer__styleAppearEffectEnabled: void 0 },
                                                        Ssw7mXvCQ: { __framer__styleAppearEffectEnabled: void 0 },
                                                    },
                                                    children: a(s, {
                                                        __framer__animate: { transition: S },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: fr,
                                                        __framer__exit: or,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-18x41da',
                                                        'data-framer-name': '1, 2 & 3',
                                                        name: '1, 2 & 3',
                                                        style: { transformPerspective: 1597 },
                                                        children: [
                                                            r(m, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                    b7UOhdrri: {
                                                                        __framer__spring: {
                                                                            damping: 60,
                                                                            delay: 0,
                                                                            duration: 0.3,
                                                                            ease: [0.44, 0, 0.56, 1],
                                                                            mass: 1,
                                                                            stiffness: 300,
                                                                            type: 'spring',
                                                                        },
                                                                        __framer__styleTransformEffectEnabled: !0,
                                                                        __framer__transformTargets: [
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 50,
                                                                                },
                                                                            },
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 0,
                                                                                },
                                                                            },
                                                                        ],
                                                                        __framer__transformTrigger: 'onInView',
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        style: { transformPerspective: 1200 },
                                                                    },
                                                                },
                                                                children: a(s, {
                                                                    className: 'framer-qyq5wf',
                                                                    'data-border': !0,
                                                                    'data-framer-name': '1',
                                                                    name: '1',
                                                                    children: [
                                                                        r('div', {
                                                                            className: 'framer-6mqkee',
                                                                            'data-framer-name': 'Text',
                                                                            name: 'Text',
                                                                            children: a('div', {
                                                                                className: 'framer-12rmvbu',
                                                                                'data-framer-name': 'Top',
                                                                                name: 'Top',
                                                                                children: [
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '2.4px',
                                                                                                    '--framer-line-height': '16px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: '(1)',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-1ol5s45',
                                                                                        'data-framer-name': 'Line 1',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Line 1',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: a(e, {
                                                                                                    children: [
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: r('strong', {
                                                                                                                children: 'SOFTWARE ',
                                                                                                            }),
                                                                                                        }),
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: r('strong', {
                                                                                                                children: 'ENGINEERING',
                                                                                                            }),
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '30px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '-0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: r('strong', {
                                                                                                        children: 'SOFTWARE ENGINEERING',
                                                                                                    }),
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-1svnd2y',
                                                                                            'data-framer-name': 'Line 2',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Line 2',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        r(m, {
                                                                            breakpoint: n,
                                                                            overrides: {
                                                                                efinEt9Z3: {
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your personality.',
                                                                                        }),
                                                                                    }),
                                                                                },
                                                                            },
                                                                            children: r(t, {
                                                                                __fromCanvasComponent: !0,
                                                                                children: r(e, {
                                                                                    children: r('p', {
                                                                                        style: {
                                                                                            '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                            '--framer-font-family':
                                                                                                '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                            '--framer-font-size': '20px',
                                                                                            '--framer-font-weight': '500',
                                                                                            '--framer-letter-spacing': '0.5px',
                                                                                            '--framer-line-height': '31px',
                                                                                            '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                        },
                                                                                        children:
                                                                                            'Leverage Python, Java, TypeScript, and other technologies to develop robust and scalable software solutions. From front-end interfaces to backend services, ensure seamless functionality and exceptional user experiences.',
                                                                                    }),
                                                                                }),
                                                                                className: 'framer-q5xh81',
                                                                                'data-framer-name': 'Body Text',
                                                                                fonts: ['GF;Inter Tight-500'],
                                                                                name: 'Body Text',
                                                                                verticalAlignment: 'top',
                                                                                withExternalLayout: !0,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            r(m, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                    b7UOhdrri: {
                                                                        __framer__spring: {
                                                                            damping: 60,
                                                                            delay: 0,
                                                                            duration: 0.3,
                                                                            ease: [0.44, 0, 0.56, 1],
                                                                            mass: 1,
                                                                            stiffness: 300,
                                                                            type: 'spring',
                                                                        },
                                                                        __framer__styleTransformEffectEnabled: !0,
                                                                        __framer__transformTargets: [
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 50,
                                                                                },
                                                                            },
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 0,
                                                                                },
                                                                            },
                                                                        ],
                                                                        __framer__transformTrigger: 'onInView',
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        style: { transformPerspective: 1200 },
                                                                    },
                                                                },
                                                                children: a(s, {
                                                                    className: 'framer-1tdnol0',
                                                                    'data-border': !0,
                                                                    'data-framer-name': '2',
                                                                    name: '2',
                                                                    children: [
                                                                        r('div', {
                                                                            className: 'framer-7xzc9o',
                                                                            'data-framer-name': 'Text',
                                                                            name: 'Text',
                                                                            children: a('div', {
                                                                                className: 'framer-3oinq3',
                                                                                'data-framer-name': 'Top',
                                                                                name: 'Top',
                                                                                children: [
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '2.4px',
                                                                                                    '--framer-line-height': '16px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: '(2)',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-32il5t',
                                                                                        'data-framer-name': 'Line 1',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Line 1',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-size': '30px',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '-0.2px',
                                                                                                    '--framer-line-height': '26px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: 'UI/UX DESIGN',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-449rug',
                                                                                        'data-framer-name': 'Line 2',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Line 2',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        r(t, {
                                                                            __fromCanvasComponent: !0,
                                                                            children: r(e, {
                                                                                children: r('p', {
                                                                                    style: {
                                                                                        '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                        '--framer-font-family':
                                                                                            '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                        '--framer-font-size': '20px',
                                                                                        '--framer-font-weight': '500',
                                                                                        '--framer-letter-spacing': '0.5px',
                                                                                        '--framer-line-height': '31px',
                                                                                        '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                    },
                                                                                    children:
                                                                                        'Craft intuitive and visually stunning interfaces that elevate user engagement and satisfaction. Utilize design principles and user-centric approaches to create immersive digital experiences across platforms.',
                                                                                }),
                                                                            }),
                                                                            className: 'framer-1g33ke2',
                                                                            'data-framer-name': 'Body Text',
                                                                            fonts: ['GF;Inter Tight-500'],
                                                                            name: 'Body Text',
                                                                            verticalAlignment: 'top',
                                                                            withExternalLayout: !0,
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            r(m, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                    b7UOhdrri: {
                                                                        __framer__spring: {
                                                                            damping: 60,
                                                                            delay: 0,
                                                                            duration: 0.3,
                                                                            ease: [0.44, 0, 0.56, 1],
                                                                            mass: 1,
                                                                            stiffness: 300,
                                                                            type: 'spring',
                                                                        },
                                                                        __framer__styleTransformEffectEnabled: !0,
                                                                        __framer__transformTargets: [
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 50,
                                                                                },
                                                                            },
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 0,
                                                                                },
                                                                            },
                                                                        ],
                                                                        __framer__transformTrigger: 'onInView',
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        style: { transformPerspective: 1200 },
                                                                    },
                                                                },
                                                                children: a(s, {
                                                                    className: 'framer-5ooo2h',
                                                                    'data-border': !0,
                                                                    'data-framer-name': '3',
                                                                    name: '3',
                                                                    children: [
                                                                        r('div', {
                                                                            className: 'framer-1rna1k0',
                                                                            'data-framer-name': 'Text',
                                                                            name: 'Text',
                                                                            children: a('div', {
                                                                                className: 'framer-1tocjw7',
                                                                                'data-framer-name': 'Top',
                                                                                name: 'Top',
                                                                                children: [
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '2.4px',
                                                                                                    '--framer-line-height': '16px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: '(3)',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-18bau4f',
                                                                                        'data-framer-name': 'Line 1',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Line 1',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: a(e, {
                                                                                                    children: [
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: 'AI & MACHINE ',
                                                                                                        }),
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: 'LEARNING',
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '30px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '-0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'AI & MACHINE LEARNING',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-10ftiqp',
                                                                                            'data-framer-name': 'Line 2',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Line 2',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        r(m, {
                                                                            breakpoint: n,
                                                                            overrides: {
                                                                                b7UOhdrri: {
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'The process involves building virtual 3D models and materials, setting lighting, and then the images.',
                                                                                        }),
                                                                                    }),
                                                                                },
                                                                                efinEt9Z3: {
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'The process involves building virtual 3D models and materials, setting lighting, and then rendering the images.',
                                                                                        }),
                                                                                    }),
                                                                                },
                                                                            },
                                                                            children: r(t, {
                                                                                __fromCanvasComponent: !0,
                                                                                children: r(e, {
                                                                                    children: r('p', {
                                                                                        style: {
                                                                                            '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                            '--framer-font-family':
                                                                                                '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                            '--framer-font-size': '20px',
                                                                                            '--framer-font-weight': '500',
                                                                                            '--framer-letter-spacing': '0.5px',
                                                                                            '--framer-line-height': '31px',
                                                                                            '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                        },
                                                                                        children:
                                                                                            'Architect and implement AI-driven solutions to analyze and interpret vast datasets, empowering personalized insights and predictive modeling. From concept to deployment, leverage AI algorithms to drive innovation and efficiency.',
                                                                                    }),
                                                                                }),
                                                                                className: 'framer-1yridoy',
                                                                                'data-framer-name': 'Body Text',
                                                                                fonts: ['GF;Inter Tight-500'],
                                                                                name: 'Body Text',
                                                                                verticalAlignment: 'top',
                                                                                withExternalLayout: !0,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: { __framer__styleAppearEffectEnabled: void 0, style: {} },
                                                        Ssw7mXvCQ: { __framer__styleAppearEffectEnabled: void 0, style: {} },
                                                    },
                                                    children: a(s, {
                                                        __framer__animate: { transition: S },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: fr,
                                                        __framer__exit: or,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__threshold: 0,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-1urx5fb',
                                                        'data-framer-name': '4 & 5',
                                                        name: '4 & 5',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r(m, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                    b7UOhdrri: {
                                                                        __framer__spring: {
                                                                            damping: 60,
                                                                            delay: 0,
                                                                            duration: 0.3,
                                                                            ease: [0.44, 0, 0.56, 1],
                                                                            mass: 1,
                                                                            stiffness: 300,
                                                                            type: 'spring',
                                                                        },
                                                                        __framer__styleTransformEffectEnabled: !0,
                                                                        __framer__transformTargets: [
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 50,
                                                                                },
                                                                            },
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 0,
                                                                                },
                                                                            },
                                                                        ],
                                                                        __framer__transformTrigger: 'onInView',
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        style: { transformPerspective: 1200 },
                                                                    },
                                                                },
                                                                children: a(s, {
                                                                    className: 'framer-kkwhkx',
                                                                    'data-border': !0,
                                                                    'data-framer-name': '4',
                                                                    name: '4',
                                                                    children: [
                                                                        r('div', {
                                                                            className: 'framer-1176wf5',
                                                                            'data-framer-name': 'Text',
                                                                            name: 'Text',
                                                                            children: a('div', {
                                                                                className: 'framer-1yjh99d',
                                                                                'data-framer-name': 'Top',
                                                                                name: 'Top',
                                                                                children: [
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '2.4px',
                                                                                                    '--framer-line-height': '16px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: '(4)',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-1xhekt',
                                                                                        'data-framer-name': 'Top',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Top',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                    r('div', {
                                                                                        className: 'framer-1xy57wr',
                                                                                        'data-framer-name': 'Bottom',
                                                                                        name: 'Bottom',
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '30px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '-0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'DIGITAL MARKETING',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-1xpjk5f',
                                                                                            'data-framer-name': 'Line 1',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Line 1',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        r(t, {
                                                                            __fromCanvasComponent: !0,
                                                                            children: r(e, {
                                                                                children: r('p', {
                                                                                    style: {
                                                                                        '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                        '--framer-font-family':
                                                                                            '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                        '--framer-font-size': '20px',
                                                                                        '--framer-font-weight': '500',
                                                                                        '--framer-letter-spacing': '0.5px',
                                                                                        '--framer-line-height': '31px',
                                                                                        '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                    },
                                                                                    children:
                                                                                        'Develop strategic marketing campaigns and branding initiatives to enhance brand visibility and drive customer engagement. Utilize analytics and data-driven approaches to optimize campaigns and maximize ROI.',
                                                                                }),
                                                                            }),
                                                                            className: 'framer-he2gb2',
                                                                            'data-framer-name': 'Body Text',
                                                                            fonts: ['GF;Inter Tight-500'],
                                                                            name: 'Body Text',
                                                                            verticalAlignment: 'top',
                                                                            withExternalLayout: !0,
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            r(m, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                    b7UOhdrri: {
                                                                        __framer__spring: {
                                                                            damping: 60,
                                                                            delay: 0,
                                                                            duration: 0.3,
                                                                            ease: [0.44, 0, 0.56, 1],
                                                                            mass: 1,
                                                                            stiffness: 300,
                                                                            type: 'spring',
                                                                        },
                                                                        __framer__styleTransformEffectEnabled: !0,
                                                                        __framer__transformTargets: [
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 50,
                                                                                },
                                                                            },
                                                                            {
                                                                                target: {
                                                                                    opacity: 1,
                                                                                    rotate: 0,
                                                                                    rotateX: 0,
                                                                                    rotateY: 0,
                                                                                    scale: 1,
                                                                                    skewX: 0,
                                                                                    skewY: 0,
                                                                                    x: 0,
                                                                                    y: 0,
                                                                                },
                                                                            },
                                                                        ],
                                                                        __framer__transformTrigger: 'onInView',
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        style: { transformPerspective: 1200 },
                                                                    },
                                                                },
                                                                children: a(s, {
                                                                    className: 'framer-s5sjmg',
                                                                    'data-border': !0,
                                                                    'data-framer-name': '5',
                                                                    name: '5',
                                                                    children: [
                                                                        r('div', {
                                                                            className: 'framer-e4ld6n',
                                                                            'data-framer-name': 'Top',
                                                                            name: 'Top',
                                                                            children: a('div', {
                                                                                className: 'framer-15sx3sv',
                                                                                'data-framer-name': 'Text',
                                                                                name: 'Text',
                                                                                children: [
                                                                                    r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '2.4px',
                                                                                                    '--framer-line-height': '16px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: '(5)',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-x7v9c5',
                                                                                        'data-framer-name': 'Line 1',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Line 1',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: a(e, {
                                                                                                    children: [
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: r('strong', {
                                                                                                                children: 'PROJECT ',
                                                                                                            }),
                                                                                                        }),
                                                                                                        r('p', {
                                                                                                            style: {
                                                                                                                '--font-selector':
                                                                                                                    'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                                '--framer-font-family':
                                                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                                '--framer-font-size':
                                                                                                                    '30px',
                                                                                                                '--framer-font-weight':
                                                                                                                    '700',
                                                                                                                '--framer-letter-spacing':
                                                                                                                    '-0.2px',
                                                                                                                '--framer-text-color':
                                                                                                                    'rgb(29, 29, 31)',
                                                                                                                '--framer-text-transform':
                                                                                                                    'uppercase',
                                                                                                            },
                                                                                                            children: r('strong', {
                                                                                                                children: 'MANAGEMENT',
                                                                                                            }),
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '30px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '-0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: r('strong', {
                                                                                                        children: 'PROJECT MANAGEMENT',
                                                                                                    }),
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-17mnm4a',
                                                                                            'data-framer-name': 'Line 2',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Line 2',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        r(t, {
                                                                            __fromCanvasComponent: !0,
                                                                            children: r(e, {
                                                                                children: r('p', {
                                                                                    style: {
                                                                                        '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                        '--framer-font-family':
                                                                                            '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                        '--framer-font-size': '20px',
                                                                                        '--framer-font-weight': '500',
                                                                                        '--framer-letter-spacing': '0.5px',
                                                                                        '--framer-line-height': '31px',
                                                                                        '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                    },
                                                                                    children:
                                                                                        'Lead cross-functional teams and projects from conception to execution, ensuring on-time delivery and alignment with strategic objectives. Foster collaboration, mentorship, and continuous improvement to drive project success.',
                                                                                }),
                                                                            }),
                                                                            className: 'framer-l6dcey',
                                                                            'data-framer-name': 'Body Text',
                                                                            fonts: ['GF;Inter Tight-500'],
                                                                            name: 'Body Text',
                                                                            verticalAlignment: 'top',
                                                                            withExternalLayout: !0,
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                a('div', {
                                    className: 'framer-1j53vem',
                                    'data-framer-name': 'Motive',
                                    name: 'Motive',
                                    children: [
                                        r('div', {
                                            className: 'framer-11it4s1',
                                            'data-framer-name': 'Left',
                                            name: 'Left',
                                            children: r('div', {
                                                className: 'framer-162qtoj',
                                                'data-framer-name': 'Title',
                                                name: 'Title',
                                                children: r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__spring: {
                                                                damping: 90,
                                                                delay: 0,
                                                                duration: 0.3,
                                                                ease: [0.44, 0, 0.56, 1],
                                                                mass: 1,
                                                                stiffness: 500,
                                                                type: 'spring',
                                                            },
                                                            __framer__styleTransformEffectEnabled: !0,
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 40,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                            __framer__transformTrigger: 'onInView',
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '40px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-0.8px',
                                                                        '--framer-line-height': '30px',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'Motivation',
                                                                }),
                                                            }),
                                                            style: { transformPerspective: 1200 },
                                                        },
                                                        Ssw7mXvCQ: {
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '30px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-0.8px',
                                                                        '--framer-line-height': '30px',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'Motivation',
                                                                }),
                                                            }),
                                                        },
                                                    },
                                                    children: r(g, {
                                                        __fromCanvasComponent: !0,
                                                        children: r(e, {
                                                            children: r('h2', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                    '--framer-font-family':
                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                    '--framer-font-size': '50px',
                                                                    '--framer-font-weight': '700',
                                                                    '--framer-letter-spacing': '-0.8px',
                                                                    '--framer-line-height': '57px',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                    '--framer-text-transform': 'uppercase',
                                                                },
                                                                children: 'Motivation',
                                                            }),
                                                        }),
                                                        className: 'framer-u8dman',
                                                        'data-framer-name': 'Text',
                                                        fonts: ['GF;Instrument Sans-700'],
                                                        name: 'Text',
                                                        verticalAlignment: 'top',
                                                        withExternalLayout: !0,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        r(m, {
                                            breakpoint: n,
                                            overrides: {
                                                b7UOhdrri: {
                                                    __framer__transformTargets: [
                                                        {
                                                            target: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 10,
                                                            },
                                                        },
                                                        {
                                                            target: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                x: 0,
                                                                y: 0,
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            children: r(s, {
                                                __framer__spring: {
                                                    damping: 60,
                                                    delay: 0,
                                                    duration: 0.3,
                                                    ease: [0.44, 0, 0.56, 1],
                                                    mass: 1,
                                                    stiffness: 300,
                                                    type: 'spring',
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                    {
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 50,
                                                        },
                                                    },
                                                    {
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                        },
                                                    },
                                                ],
                                                __framer__transformTrigger: 'onInView',
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                className: 'framer-1lhlpgq',
                                                'data-framer-name': 'Right',
                                                name: 'Right',
                                                style: { transformPerspective: 1200 },
                                                children: r(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(e, {
                                                        children: [
                                                            a('p', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                    '--framer-font-family':
                                                                        '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                    '--framer-font-size': '24px',
                                                                    '--framer-font-weight': '500',
                                                                    '--framer-letter-spacing': '0.4px',
                                                                    '--framer-line-height': '34px',
                                                                    '--framer-text-alignment': 'left',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                },
                                                                children: [
                                                                    'More than just a profession, my role as a software engineer and designer is a ',
                                                                    r('strong', { children: 'canvas for innovation' }),
                                                                    '. I thrive on transforming complex ideas into elegant, functional creations that not only meet user needs but also elevate their digital experience. At the core of my work is a passion for merging art with technology\u2014each line of code and design element is a step toward building more intuitive and engaging platforms. ',
                                                                ],
                                                            }),
                                                            r('p', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                    '--framer-font-family':
                                                                        '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                    '--framer-font-size': '24px',
                                                                    '--framer-font-weight': '500',
                                                                    '--framer-letter-spacing': '0.4px',
                                                                    '--framer-line-height': '34px',
                                                                    '--framer-text-alignment': 'left',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                },
                                                                children: r('br', { className: 'trailing-break' }),
                                                            }),
                                                            a('p', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                    '--framer-font-family':
                                                                        '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                    '--framer-font-size': '24px',
                                                                    '--framer-font-weight': '500',
                                                                    '--framer-letter-spacing': '0.4px',
                                                                    '--framer-line-height': '34px',
                                                                    '--framer-text-alignment': 'left',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                },
                                                                children: [
                                                                    'Whether it\u2019s crafting AI-driven models at Anlyst, leading breakthrough projects at Generate, or steering my own agency, Defye, I am constantly propelled by the ',
                                                                    r('strong', {
                                                                        children:
                                                                            'challenge of turning visionary concepts into real-world solutions',
                                                                    }),
                                                                    '. ',
                                                                ],
                                                            }),
                                                            r('p', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                    '--framer-font-family':
                                                                        '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                    '--framer-font-size': '24px',
                                                                    '--framer-font-weight': '500',
                                                                    '--framer-letter-spacing': '0.4px',
                                                                    '--framer-line-height': '34px',
                                                                    '--framer-text-alignment': 'left',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                },
                                                                children: r('br', { className: 'trailing-break' }),
                                                            }),
                                                            a('p', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                    '--framer-font-family':
                                                                        '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                    '--framer-font-size': '24px',
                                                                    '--framer-font-weight': '500',
                                                                    '--framer-letter-spacing': '0.4px',
                                                                    '--framer-line-height': '34px',
                                                                    '--framer-text-alignment': 'left',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                },
                                                                children: [
                                                                    'The dynamic nature of tech keeps me agile, always ready to explore new horizons and redefine the boundaries of what\u2019s possible. Each project is a chance to leave a mark, inspire change, and drive progress in the digital landscape. This is not just my job; it\u2019s my ',
                                                                    r('strong', { children: 'adventure in innovation' }),
                                                                    ', where every challenge is an opportunity to learn, grow, and impact the world around me.',
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    className: 'framer-bry7t',
                                                    'data-framer-name': 'Line 1',
                                                    fonts: ['GF;Inter Tight-500', 'GF;Inter Tight-700'],
                                                    name: 'Line 1',
                                                    verticalAlignment: 'top',
                                                    withExternalLayout: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                a('div', {
                                    className: 'framer-17x8vxm',
                                    'data-framer-name': 'Experience',
                                    name: 'Experience',
                                    children: [
                                        r('div', {
                                            className: 'framer-1fj2yqw',
                                            'data-framer-name': 'Left',
                                            name: 'Left',
                                            children: r('div', {
                                                className: 'framer-1admpkr',
                                                'data-framer-name': 'Title',
                                                name: 'Title',
                                                children: r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__spring: {
                                                                damping: 90,
                                                                delay: 0,
                                                                duration: 0.3,
                                                                ease: [0.44, 0, 0.56, 1],
                                                                mass: 1,
                                                                stiffness: 500,
                                                                type: 'spring',
                                                            },
                                                            __framer__styleTransformEffectEnabled: !0,
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 40,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                            __framer__transformTrigger: 'onInView',
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '40px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-0.8px',
                                                                        '--framer-line-height': '30px',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'EXPERIENCE',
                                                                }),
                                                            }),
                                                            style: { transformPerspective: 1200 },
                                                        },
                                                        Ssw7mXvCQ: {
                                                            children: r(e, {
                                                                children: r('h2', {
                                                                    style: {
                                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                        '--framer-font-family':
                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                        '--framer-font-size': '30px',
                                                                        '--framer-font-weight': '700',
                                                                        '--framer-letter-spacing': '-0.8px',
                                                                        '--framer-line-height': '30px',
                                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                                        '--framer-text-transform': 'uppercase',
                                                                    },
                                                                    children: 'EXPERIENCE',
                                                                }),
                                                            }),
                                                        },
                                                    },
                                                    children: r(g, {
                                                        __fromCanvasComponent: !0,
                                                        children: r(e, {
                                                            children: r('h2', {
                                                                style: {
                                                                    '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                    '--framer-font-family':
                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                    '--framer-font-size': '50px',
                                                                    '--framer-font-weight': '700',
                                                                    '--framer-letter-spacing': '-0.8px',
                                                                    '--framer-line-height': '50px',
                                                                    '--framer-text-color': 'rgb(29, 29, 31)',
                                                                    '--framer-text-transform': 'uppercase',
                                                                },
                                                                children: 'EXPERIENCE',
                                                            }),
                                                        }),
                                                        className: 'framer-11wzbtj',
                                                        'data-framer-name': 'Text',
                                                        fonts: ['GF;Instrument Sans-700'],
                                                        name: 'Text',
                                                        verticalAlignment: 'top',
                                                        withExternalLayout: !0,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        a('div', {
                                            className: 'framer-18tbvoi',
                                            'data-framer-name': 'Right',
                                            name: 'Right',
                                            children: [
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 10,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    children: a(s, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 300,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 50,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-l7me05',
                                                        'data-framer-name': '1',
                                                        name: '1',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r('div', {
                                                                className: 'framer-126ohcj',
                                                                'data-framer-name': 'Top',
                                                                name: 'Top',
                                                                children: r(t, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '30px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-0.6px',
                                                                                '--framer-line-height': '30px',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'hubspot',
                                                                        }),
                                                                    }),
                                                                    className: 'framer-z0xpcx',
                                                                    'data-framer-name': 'Title',
                                                                    fonts: ['GF;Instrument Sans-700'],
                                                                    name: 'Title',
                                                                    verticalAlignment: 'top',
                                                                    withExternalLayout: !0,
                                                                }),
                                                            }),
                                                            a('div', {
                                                                className: 'framer-rddtb0',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: [
                                                                    a('div', {
                                                                        className: 'framer-189103u',
                                                                        'data-framer-name': 'Text',
                                                                        name: 'Text',
                                                                        children: [
                                                                            a('div', {
                                                                                className: 'framer-7rr01m',
                                                                                'data-framer-name': 'Position & Year',
                                                                                name: 'Position & Year',
                                                                                children: [
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '26px',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'software engineer',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'software engineer',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-efdeh4',
                                                                                            'data-framer-name': 'Position',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Position',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                    a('div', {
                                                                                        className: 'framer-191cyva',
                                                                                        children: [
                                                                                            r('div', { className: 'framer-1bo40er' }),
                                                                                            r('div', { className: 'framer-3hy2ei' }),
                                                                                        ],
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '20px',
                                                                                                            '--framer-text-alignment':
                                                                                                                'left',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'jan \u2014 May 2024',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'right',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'jan \u2014 May 2024',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-1d6giyx',
                                                                                            'data-framer-name': 'Year',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Year',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            r('div', {
                                                                                className: 'framer-1ye7n16',
                                                                                'data-framer-name': 'Body Text',
                                                                                name: 'Body Text',
                                                                                children: r(t, {
                                                                                    __fromCanvasComponent: !0,
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'At HubSpot, I led engineering enhancements in user interfaces and backend services using Python, Java, and TypeScript, significantly boosting system functionality and user engagement. I also fostered a collaborative team environment by mentoring and conducting technical workshops on efficient front-end debugging.',
                                                                                        }),
                                                                                    }),
                                                                                    className: 'framer-1ylulp',
                                                                                    'data-framer-name': 'Text',
                                                                                    fonts: ['GF;Inter Tight-500'],
                                                                                    name: 'Text',
                                                                                    verticalAlignment: 'top',
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    r('div', {
                                                                        className: 'framer-jsdaa5',
                                                                        'data-framer-name': 'Line',
                                                                        name: 'Line',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 10,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    children: a(s, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 300,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 50,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-1n3djqi',
                                                        'data-framer-name': '2',
                                                        name: '2',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r('div', {
                                                                className: 'framer-1x3wexk',
                                                                'data-framer-name': 'Top',
                                                                name: 'Top',
                                                                children: r(t, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '30px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-0.6px',
                                                                                '--framer-line-height': '30px',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'generate product development ',
                                                                        }),
                                                                    }),
                                                                    className: 'framer-1v9i0mt',
                                                                    'data-framer-name': 'Title',
                                                                    fonts: ['GF;Instrument Sans-700'],
                                                                    name: 'Title',
                                                                    verticalAlignment: 'top',
                                                                    withExternalLayout: !0,
                                                                }),
                                                            }),
                                                            a('div', {
                                                                className: 'framer-1v4o249',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: [
                                                                    a('div', {
                                                                        className: 'framer-1sk47wp',
                                                                        'data-framer-name': 'Text',
                                                                        name: 'Text',
                                                                        children: [
                                                                            a('div', {
                                                                                className: 'framer-se0b90',
                                                                                'data-framer-name': 'Position & Year',
                                                                                name: 'Position & Year',
                                                                                children: [
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '26px',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'engagement director',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'engagement director',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-odd2o2',
                                                                                            'data-framer-name': 'Position',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Position',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '20px',
                                                                                                            '--framer-text-alignment':
                                                                                                                'left',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'apr 2024 \u2014 present',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'right',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'apr 2024 \u2014 present',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-12j6135',
                                                                                            'data-framer-name': 'Year',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Year',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            r('div', {
                                                                                className: 'framer-wbyjua',
                                                                                'data-framer-name': 'Body Text',
                                                                                name: 'Body Text',
                                                                                children: r(t, {
                                                                                    __fromCanvasComponent: !0,
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                "As Engagement Director, spearhead all initiatives related to Generate's student engagement, external relations, marketing, and content creation. Strategically drive high-impact events, foster industry partnerships, and execute compelling promotional campaigns across digital channels to significantly amplify brand visibility. Oversee production of visually appealing merchandise and multimedia content to elevate Generate's market positioning. Align engagement efforts with organizational objectives, streamlining processes and promoting seamless cross-functional collaboration to cultivate an active, passionate student community.",
                                                                                        }),
                                                                                    }),
                                                                                    className: 'framer-1tzfemf',
                                                                                    'data-framer-name': 'Text',
                                                                                    fonts: ['GF;Inter Tight-500'],
                                                                                    name: 'Text',
                                                                                    verticalAlignment: 'top',
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    r('div', {
                                                                        className: 'framer-1odqd07',
                                                                        'data-framer-name': 'Line',
                                                                        name: 'Line',
                                                                    }),
                                                                ],
                                                            }),
                                                            a('div', {
                                                                className: 'framer-q4rhwm',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: [
                                                                    a('div', {
                                                                        className: 'framer-1dpwuac',
                                                                        'data-framer-name': 'Text',
                                                                        name: 'Text',
                                                                        children: [
                                                                            a('div', {
                                                                                className: 'framer-pjjb9z',
                                                                                'data-framer-name': 'Position & Year',
                                                                                name: 'Position & Year',
                                                                                children: [
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '26px',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'project lead, couplet',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'project lead, couplet',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-v8xq57',
                                                                                            'data-framer-name': 'Position',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Position',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '20px',
                                                                                                            '--framer-text-alignment':
                                                                                                                'left',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'jan \u2014 apr 2024',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'right',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'jan \u2014 apr 2024',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-1h6fcpx',
                                                                                            'data-framer-name': 'Year',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Year',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            r('div', {
                                                                                className: 'framer-yek9h4',
                                                                                'data-framer-name': 'Body Text',
                                                                                name: 'Body Text',
                                                                                children: r(t, {
                                                                                    __fromCanvasComponent: !0,
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'As Project Lead for Couplet, I directed the development of a pioneering mobile app that redefines social networking by connecting users with shared interests in local events, enhancing engagement and user experience. My leadership spanned full product cycles, from concept to Showcase, driving team success and achieving significant user adoption and market visibility.',
                                                                                        }),
                                                                                    }),
                                                                                    className: 'framer-2e9kzn',
                                                                                    'data-framer-name': 'Text',
                                                                                    fonts: ['GF;Inter Tight-500'],
                                                                                    name: 'Text',
                                                                                    verticalAlignment: 'top',
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    r('div', {
                                                                        className: 'framer-8tlep6',
                                                                        'data-framer-name': 'Line',
                                                                        name: 'Line',
                                                                    }),
                                                                ],
                                                            }),
                                                            a('div', {
                                                                className: 'framer-1kygp2v',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: [
                                                                    a('div', {
                                                                        className: 'framer-14vrdn0',
                                                                        'data-framer-name': 'Text',
                                                                        name: 'Text',
                                                                        children: [
                                                                            a('div', {
                                                                                className: 'framer-1wedp89',
                                                                                'data-framer-name': 'Position & Year',
                                                                                name: 'Position & Year',
                                                                                children: [
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '26px',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'content lead',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'content lead',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-8c0dlo',
                                                                                            'data-framer-name': 'Position',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Position',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '20px',
                                                                                                            '--framer-text-alignment':
                                                                                                                'left',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children:
                                                                                                            'aug 2022 \u2014 may 2023',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'right',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'aug 2022 \u2014 may 2023',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-1p5dhqo',
                                                                                            'data-framer-name': 'Year',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Year',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            r('div', {
                                                                                className: 'framer-zqnb6t',
                                                                                'data-framer-name': 'Body Text',
                                                                                name: 'Body Text',
                                                                                children: r(t, {
                                                                                    __fromCanvasComponent: !0,
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'As Content Lead for Generate, I spearheaded a rebranding campaign and digital strategy that garnered over 103,773 impressions, designing appealing merchandise and promotional materials. My leadership in aligning content initiatives with organizational goals enhanced cross-functional teamwork and streamlined processes.',
                                                                                        }),
                                                                                    }),
                                                                                    className: 'framer-8rj9aq',
                                                                                    'data-framer-name': 'Text',
                                                                                    fonts: ['GF;Inter Tight-500'],
                                                                                    name: 'Text',
                                                                                    verticalAlignment: 'top',
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    r('div', {
                                                                        className: 'framer-1oahvv5',
                                                                        'data-framer-name': 'Line',
                                                                        name: 'Line',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 10,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    children: a(s, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 300,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 50,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-djjtu8',
                                                        'data-framer-name': '3',
                                                        name: '3',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r('div', {
                                                                className: 'framer-kw1gbh',
                                                                'data-framer-name': 'Top',
                                                                name: 'Top',
                                                                children: r(t, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '30px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-0.6px',
                                                                                '--framer-line-height': '30px',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'Defye',
                                                                        }),
                                                                    }),
                                                                    className: 'framer-ewcxsu',
                                                                    'data-framer-name': 'Title',
                                                                    fonts: ['GF;Instrument Sans-700'],
                                                                    name: 'Title',
                                                                    verticalAlignment: 'top',
                                                                    withExternalLayout: !0,
                                                                }),
                                                            }),
                                                            a('div', {
                                                                className: 'framer-13rhs4x',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: [
                                                                    a('div', {
                                                                        className: 'framer-2ql464',
                                                                        'data-framer-name': 'Text',
                                                                        name: 'Text',
                                                                        children: [
                                                                            a('div', {
                                                                                className: 'framer-d2gso',
                                                                                'data-framer-name': 'Position & Year',
                                                                                name: 'Position & Year',
                                                                                children: [
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '26px',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'Ceo/founder',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'Ceo/founder',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-dip0f4',
                                                                                            'data-framer-name': 'Position',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Position',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                    r(m, {
                                                                                        breakpoint: n,
                                                                                        overrides: {
                                                                                            b7UOhdrri: {
                                                                                                children: r(e, {
                                                                                                    children: r('p', {
                                                                                                        style: {
                                                                                                            '--font-selector':
                                                                                                                'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                            '--framer-font-family':
                                                                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                            '--framer-font-size': '22px',
                                                                                                            '--framer-font-weight': '700',
                                                                                                            '--framer-letter-spacing':
                                                                                                                '0.2px',
                                                                                                            '--framer-line-height': '20px',
                                                                                                            '--framer-text-alignment':
                                                                                                                'left',
                                                                                                            '--framer-text-color':
                                                                                                                'rgb(29, 29, 31)',
                                                                                                            '--framer-text-transform':
                                                                                                                'uppercase',
                                                                                                        },
                                                                                                        children: 'sep 2017 \u2014 present',
                                                                                                    }),
                                                                                                }),
                                                                                            },
                                                                                        },
                                                                                        children: r(t, {
                                                                                            __fromCanvasComponent: !0,
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'right',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'sep 2017 \u2014 present',
                                                                                                }),
                                                                                            }),
                                                                                            className: 'framer-17tgt27',
                                                                                            'data-framer-name': 'Year',
                                                                                            fonts: ['GF;Instrument Sans-700'],
                                                                                            name: 'Year',
                                                                                            verticalAlignment: 'top',
                                                                                            withExternalLayout: !0,
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            r('div', {
                                                                                className: 'framer-1v3ptyg',
                                                                                'data-framer-name': 'Body Text',
                                                                                name: 'Body Text',
                                                                                children: r(t, {
                                                                                    __fromCanvasComponent: !0,
                                                                                    children: r(e, {
                                                                                        children: r('p', {
                                                                                            style: {
                                                                                                '--font-selector':
                                                                                                    'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                                '--framer-font-family':
                                                                                                    '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                                '--framer-font-size': '20px',
                                                                                                '--framer-font-weight': '500',
                                                                                                '--framer-letter-spacing': '0.5px',
                                                                                                '--framer-line-height': '31px',
                                                                                                '--framer-text-color':
                                                                                                    'rgba(29, 29, 31, 0.7)',
                                                                                            },
                                                                                            children:
                                                                                                'As CEO and Founder of Defye, a New York-based digital design agency, I lead strategic and technical operations to align with our vision and surpass client expectations, ensuring high-quality deliverables. My innovative strategies have expanded our client base, enhanced service offerings, and significantly boosted revenue and customer growth.',
                                                                                        }),
                                                                                    }),
                                                                                    className: 'framer-1su1i74',
                                                                                    'data-framer-name': 'Text',
                                                                                    fonts: ['GF;Inter Tight-500'],
                                                                                    name: 'Text',
                                                                                    verticalAlignment: 'top',
                                                                                    withExternalLayout: !0,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    r('div', {
                                                                        className: 'framer-awhuac',
                                                                        'data-framer-name': 'Line',
                                                                        name: 'Line',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 10,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    children: a(s, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 300,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 50,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-1rtiuv4',
                                                        'data-framer-name': '4',
                                                        name: '4',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r('div', {
                                                                className: 'framer-1j4xfa5',
                                                                'data-framer-name': 'Top',
                                                                name: 'Top',
                                                                children: r(t, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '30px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-0.6px',
                                                                                '--framer-line-height': '30px',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'vue health',
                                                                        }),
                                                                    }),
                                                                    className: 'framer-7pm4tg',
                                                                    'data-framer-name': 'Title',
                                                                    fonts: ['GF;Instrument Sans-700'],
                                                                    name: 'Title',
                                                                    verticalAlignment: 'top',
                                                                    withExternalLayout: !0,
                                                                }),
                                                            }),
                                                            r('div', {
                                                                className: 'framer-oww0a8',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: a('div', {
                                                                    className: 'framer-2x5yyo',
                                                                    'data-framer-name': 'Text',
                                                                    name: 'Text',
                                                                    children: [
                                                                        a('div', {
                                                                            className: 'framer-kue7tk',
                                                                            'data-framer-name': 'Position & Year',
                                                                            name: 'Position & Year',
                                                                            children: [
                                                                                r(m, {
                                                                                    breakpoint: n,
                                                                                    overrides: {
                                                                                        b7UOhdrri: {
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'front-end developer',
                                                                                                }),
                                                                                            }),
                                                                                        },
                                                                                    },
                                                                                    children: r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-size': '22px',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '0.2px',
                                                                                                    '--framer-line-height': '20px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: 'front-end developer',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-rks157',
                                                                                        'data-framer-name': 'Position',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Position',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                }),
                                                                                r(m, {
                                                                                    breakpoint: n,
                                                                                    overrides: {
                                                                                        b7UOhdrri: {
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'left',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'jan \u2014 jun 2023',
                                                                                                }),
                                                                                            }),
                                                                                        },
                                                                                    },
                                                                                    children: r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-size': '22px',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '0.2px',
                                                                                                    '--framer-line-height': '20px',
                                                                                                    '--framer-text-alignment': 'right',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: 'jan \u2014 jun 2023',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-alcxo3',
                                                                                        'data-framer-name': 'Year',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Year',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        r('div', {
                                                                            className: 'framer-1p3ctxy',
                                                                            'data-framer-name': 'Body Text',
                                                                            name: 'Body Text',
                                                                            children: r(t, {
                                                                                __fromCanvasComponent: !0,
                                                                                children: r(e, {
                                                                                    children: r('p', {
                                                                                        style: {
                                                                                            '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                            '--framer-font-family':
                                                                                                '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                            '--framer-font-size': '20px',
                                                                                            '--framer-font-weight': '500',
                                                                                            '--framer-letter-spacing': '0.5px',
                                                                                            '--framer-line-height': '31px',
                                                                                            '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                        },
                                                                                        children:
                                                                                            'At VUE Health as a Front-End Developer, I crafted responsive websites for top healthcare brands, enhancing user experience and performance with a robust technology stack. My collaboration with design and accounts teams aligned development with client objectives, significantly advancing the company\u2019s digital transformation and championing best practices in accessibility and user-centered design.',
                                                                                    }),
                                                                                }),
                                                                                className: 'framer-1fpj3rf',
                                                                                'data-framer-name': 'Text',
                                                                                fonts: ['GF;Inter Tight-500'],
                                                                                name: 'Text',
                                                                                verticalAlignment: 'top',
                                                                                withExternalLayout: !0,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: {
                                                            __framer__transformTargets: [
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 10,
                                                                    },
                                                                },
                                                                {
                                                                    target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    children: a(s, {
                                                        __framer__spring: {
                                                            damping: 60,
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [0.44, 0, 0.56, 1],
                                                            mass: 1,
                                                            stiffness: 300,
                                                            type: 'spring',
                                                        },
                                                        __framer__styleTransformEffectEnabled: !0,
                                                        __framer__transformTargets: [
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 50,
                                                                },
                                                            },
                                                            {
                                                                target: {
                                                                    opacity: 1,
                                                                    rotate: 0,
                                                                    rotateX: 0,
                                                                    rotateY: 0,
                                                                    scale: 1,
                                                                    skewX: 0,
                                                                    skewY: 0,
                                                                    x: 0,
                                                                    y: 0,
                                                                },
                                                            },
                                                        ],
                                                        __framer__transformTrigger: 'onInView',
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: 'framer-1avhc6',
                                                        'data-framer-name': '4',
                                                        name: '4',
                                                        style: { transformPerspective: 1200 },
                                                        children: [
                                                            r('div', {
                                                                className: 'framer-2ujsrl',
                                                                'data-framer-name': 'Top',
                                                                name: 'Top',
                                                                children: r(t, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: r(e, {
                                                                        children: r('p', {
                                                                            style: {
                                                                                '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                '--framer-font-family':
                                                                                    '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                '--framer-font-size': '30px',
                                                                                '--framer-font-weight': '700',
                                                                                '--framer-letter-spacing': '-0.6px',
                                                                                '--framer-line-height': '30px',
                                                                                '--framer-text-color': 'rgb(29, 29, 31)',
                                                                                '--framer-text-transform': 'uppercase',
                                                                            },
                                                                            children: 'Entrepreneurs Club',
                                                                        }),
                                                                    }),
                                                                    className: 'framer-12jc5o4',
                                                                    'data-framer-name': 'Title',
                                                                    fonts: ['GF;Instrument Sans-700'],
                                                                    name: 'Title',
                                                                    verticalAlignment: 'top',
                                                                    withExternalLayout: !0,
                                                                }),
                                                            }),
                                                            r('div', {
                                                                className: 'framer-1onl2n3',
                                                                'data-framer-name': 'Bottom',
                                                                name: 'Bottom',
                                                                children: a('div', {
                                                                    className: 'framer-v8nax3',
                                                                    'data-framer-name': 'Text',
                                                                    name: 'Text',
                                                                    children: [
                                                                        a('div', {
                                                                            className: 'framer-5sc2lf',
                                                                            'data-framer-name': 'Position & Year',
                                                                            name: 'Position & Year',
                                                                            children: [
                                                                                r(m, {
                                                                                    breakpoint: n,
                                                                                    overrides: {
                                                                                        b7UOhdrri: {
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '26px',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'Co-Director of Engage',
                                                                                                }),
                                                                                            }),
                                                                                        },
                                                                                    },
                                                                                    children: r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-size': '22px',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '0.2px',
                                                                                                    '--framer-line-height': '20px',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: 'Co-Director of Engage',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-9a6stw',
                                                                                        'data-framer-name': 'Position',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Position',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                }),
                                                                                r(m, {
                                                                                    breakpoint: n,
                                                                                    overrides: {
                                                                                        b7UOhdrri: {
                                                                                            children: r(e, {
                                                                                                children: r('p', {
                                                                                                    style: {
                                                                                                        '--font-selector':
                                                                                                            'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                        '--framer-font-family':
                                                                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                        '--framer-font-size': '22px',
                                                                                                        '--framer-font-weight': '700',
                                                                                                        '--framer-letter-spacing': '0.2px',
                                                                                                        '--framer-line-height': '20px',
                                                                                                        '--framer-text-alignment': 'left',
                                                                                                        '--framer-text-color':
                                                                                                            'rgb(29, 29, 31)',
                                                                                                        '--framer-text-transform':
                                                                                                            'uppercase',
                                                                                                    },
                                                                                                    children: 'jan \u2014 may 2023',
                                                                                                }),
                                                                                            }),
                                                                                        },
                                                                                    },
                                                                                    children: r(t, {
                                                                                        __fromCanvasComponent: !0,
                                                                                        children: r(e, {
                                                                                            children: r('p', {
                                                                                                style: {
                                                                                                    '--font-selector':
                                                                                                        'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                                                                    '--framer-font-family':
                                                                                                        '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                                                                    '--framer-font-size': '22px',
                                                                                                    '--framer-font-weight': '700',
                                                                                                    '--framer-letter-spacing': '0.2px',
                                                                                                    '--framer-line-height': '20px',
                                                                                                    '--framer-text-alignment': 'right',
                                                                                                    '--framer-text-color':
                                                                                                        'rgb(29, 29, 31)',
                                                                                                    '--framer-text-transform': 'uppercase',
                                                                                                },
                                                                                                children: 'jan \u2014 may 2023',
                                                                                            }),
                                                                                        }),
                                                                                        className: 'framer-1l755ic',
                                                                                        'data-framer-name': 'Year',
                                                                                        fonts: ['GF;Instrument Sans-700'],
                                                                                        name: 'Year',
                                                                                        verticalAlignment: 'top',
                                                                                        withExternalLayout: !0,
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        r('div', {
                                                                            className: 'framer-1i3once',
                                                                            'data-framer-name': 'Body Text',
                                                                            name: 'Body Text',
                                                                            children: r(t, {
                                                                                __fromCanvasComponent: !0,
                                                                                children: r(e, {
                                                                                    children: r('p', {
                                                                                        style: {
                                                                                            '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNTAw',
                                                                                            '--framer-font-family':
                                                                                                '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                                                                            '--framer-font-size': '20px',
                                                                                            '--framer-font-weight': '500',
                                                                                            '--framer-letter-spacing': '0.5px',
                                                                                            '--framer-line-height': '31px',
                                                                                            '--framer-text-color': 'rgba(29, 29, 31, 0.7)',
                                                                                        },
                                                                                        children:
                                                                                            "As Co-Director of Engage at the Entrepreneurs Club, I co-led the design and delivery of high-impact entrepreneurship workshops, enhancing skill development and industry insight for club members. My strategic initiatives increased engagement, broadened community reach, and brought in high-profile speakers, significantly enriching the club's offerings.",
                                                                                    }),
                                                                                }),
                                                                                className: 'framer-9x4ue1',
                                                                                'data-framer-name': 'Text',
                                                                                fonts: ['GF;Inter Tight-500'],
                                                                                name: 'Text',
                                                                                verticalAlignment: 'top',
                                                                                withExternalLayout: !0,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                a('div', {
                                    className: 'framer-1yqy75l',
                                    'data-framer-name': 'Contact',
                                    name: 'Contact',
                                    children: [
                                        a('div', {
                                            className: 'framer-1sjt9tf',
                                            'data-framer-name': 'Image',
                                            name: 'Image',
                                            children: [
                                                O() &&
                                                    r('div', {
                                                        className: 'framer-17cs6re hidden-1i9ztku',
                                                        'data-framer-name': 'Spacer',
                                                        name: 'Spacer',
                                                    }),
                                                r('div', {
                                                    className: 'framer-1yt9fuk',
                                                    'data-framer-name': 'Parallax Image',
                                                    name: 'Parallax Image',
                                                    children: r(m, {
                                                        breakpoint: n,
                                                        overrides: {
                                                            b7UOhdrri: {
                                                                background: {
                                                                    alt: '',
                                                                    fit: 'fill',
                                                                    intrinsicHeight: 3500,
                                                                    intrinsicWidth: 2333,
                                                                    loading: 'lazy',
                                                                    pixelHeight: 2304,
                                                                    pixelWidth: 1536,
                                                                    sizes: 'calc(100vw - 40px)',
                                                                    src: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg',
                                                                    srcSet: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg 1536w',
                                                                },
                                                            },
                                                            Ssw7mXvCQ: {
                                                                background: {
                                                                    alt: '',
                                                                    fit: 'fill',
                                                                    intrinsicHeight: 3500,
                                                                    intrinsicWidth: 2333,
                                                                    loading: 'lazy',
                                                                    pixelHeight: 2304,
                                                                    pixelWidth: 1536,
                                                                    sizes: 'calc(max((100vw - 180px) / 6, 20px) * 4 + 60px)',
                                                                    src: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg',
                                                                    srcSet: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg 1536w',
                                                                },
                                                            },
                                                        },
                                                        children: r(ir, {
                                                            __framer__adjustPosition: !0,
                                                            __framer__offset: 0,
                                                            __framer__parallaxTransformEnabled: !0,
                                                            __framer__speed: 110,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                                alt: '',
                                                                fit: 'fill',
                                                                intrinsicHeight: 3500,
                                                                intrinsicWidth: 2333,
                                                                loading: 'lazy',
                                                                pixelHeight: 2304,
                                                                pixelWidth: 1536,
                                                                sizes: 'calc(max((100vw - 220px) / 8, 20px) * 2 + 20px)',
                                                                src: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg',
                                                                srcSet: 'https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/wwjZjgupQIEgbnHIKMhXJKyYc.jpg 1536w',
                                                            },
                                                            className: 'framer-3pfvty',
                                                            'data-framer-name': 'Fill Your Image Here',
                                                            name: 'Fill Your Image Here',
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        a('div', {
                                            className: 'framer-1m8sgiw',
                                            'data-framer-name': 'Text',
                                            name: 'Text',
                                            children: [
                                                r('div', {
                                                    className: 'framer-2zyt3f',
                                                    'data-framer-name': 'Social Links',
                                                    name: 'Social Links',
                                                    children: r(c, {
                                                        href: 'https://instagram.com/chiragcchadha',
                                                        openInNewTab: !0,
                                                        children: a('a', {
                                                            className: 'framer-q2dp0c framer-1s3gldu',
                                                            'data-framer-name': 'Link 1',
                                                            name: 'Link 1',
                                                            children: [
                                                                r(f, {
                                                                    children: r(o, {
                                                                        className: 'framer-q23phd-container',
                                                                        children: r(u, {
                                                                            EHwggOTIz: 'Instagram',
                                                                            height: '100%',
                                                                            HmWXS9X01: 18,
                                                                            id: 'WtcrXBBlL',
                                                                            layoutId: 'WtcrXBBlL',
                                                                            nKqPNlRNt: 'rgb(29, 29, 31)',
                                                                            style: { height: '100%' },
                                                                            width: '100%',
                                                                            Y1jKtkJjZ: 'rgb(29, 29, 31)',
                                                                        }),
                                                                    }),
                                                                }),
                                                                r('div', {
                                                                    className: 'framer-1mx0hcf',
                                                                    'data-framer-name': 'Icon',
                                                                    name: 'Icon',
                                                                    children: r(f, {
                                                                        children: r(o, {
                                                                            className: 'framer-g7xo6t-container',
                                                                            style: { rotate: 45 },
                                                                            children: r(y, {
                                                                                color: 'rgb(29, 29, 31)',
                                                                                height: '100%',
                                                                                iconSearch: 'arrowoutward',
                                                                                iconSelection: 'ArrowUpward',
                                                                                iconStyle15: 'Filled',
                                                                                iconStyle2: 'Filled',
                                                                                iconStyle7: 'Filled',
                                                                                id: 'AUrMmc49L',
                                                                                layoutId: 'AUrMmc49L',
                                                                                mirrored: !1,
                                                                                selectByList: !0,
                                                                                style: { height: '100%', width: '100%' },
                                                                                width: '100%',
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                r('div', {
                                                    className: 'framer-45vfuf',
                                                    'data-framer-name': 'Social Links',
                                                    name: 'Social Links',
                                                    children: r(c, {
                                                        href: 'https://www.linkedin.com/in/chiragkchadha/',
                                                        openInNewTab: !0,
                                                        children: a('a', {
                                                            className: 'framer-1witu81 framer-1s3gldu',
                                                            'data-framer-name': 'Link 1',
                                                            name: 'Link 1',
                                                            children: [
                                                                r(f, {
                                                                    children: r(o, {
                                                                        className: 'framer-j6hhr4-container',
                                                                        children: r(u, {
                                                                            EHwggOTIz: 'Linkedin',
                                                                            height: '100%',
                                                                            HmWXS9X01: 18,
                                                                            id: 'WV3DXDxIH',
                                                                            layoutId: 'WV3DXDxIH',
                                                                            nKqPNlRNt: 'rgb(29, 29, 31)',
                                                                            style: { height: '100%' },
                                                                            width: '100%',
                                                                            Y1jKtkJjZ: 'rgb(29, 29, 31)',
                                                                        }),
                                                                    }),
                                                                }),
                                                                r('div', {
                                                                    className: 'framer-1axqgrr',
                                                                    'data-framer-name': 'Icon',
                                                                    name: 'Icon',
                                                                    children: r(f, {
                                                                        children: r(o, {
                                                                            className: 'framer-1gm1knd-container',
                                                                            style: { rotate: 45 },
                                                                            children: r(y, {
                                                                                color: 'rgb(29, 29, 31)',
                                                                                height: '100%',
                                                                                iconSearch: 'arrowoutward',
                                                                                iconSelection: 'ArrowUpward',
                                                                                iconStyle15: 'Filled',
                                                                                iconStyle2: 'Filled',
                                                                                iconStyle7: 'Filled',
                                                                                id: 'eG3FWzOx_',
                                                                                layoutId: 'eG3FWzOx_',
                                                                                mirrored: !1,
                                                                                selectByList: !0,
                                                                                style: { height: '100%', width: '100%' },
                                                                                width: '100%',
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                r('div', {
                                                    className: 'framer-17lixsn',
                                                    'data-framer-name': 'Social Links',
                                                    name: 'Social Links',
                                                    children: r(c, {
                                                        href: 'https://github.com/chiragchadha1',
                                                        openInNewTab: !0,
                                                        children: a('a', {
                                                            className: 'framer-1mjgux2 framer-1s3gldu',
                                                            'data-framer-name': 'Link 1',
                                                            name: 'Link 1',
                                                            children: [
                                                                r(f, {
                                                                    children: r(o, {
                                                                        className: 'framer-yaoisf-container',
                                                                        children: r(u, {
                                                                            EHwggOTIz: 'Github',
                                                                            height: '100%',
                                                                            HmWXS9X01: 18,
                                                                            id: 'IqeB1CUTg',
                                                                            layoutId: 'IqeB1CUTg',
                                                                            nKqPNlRNt: 'rgb(29, 29, 31)',
                                                                            style: { height: '100%' },
                                                                            width: '100%',
                                                                            Y1jKtkJjZ: 'rgb(29, 29, 31)',
                                                                        }),
                                                                    }),
                                                                }),
                                                                r('div', {
                                                                    className: 'framer-y4hlgh',
                                                                    'data-framer-name': 'Icon',
                                                                    name: 'Icon',
                                                                    children: r(f, {
                                                                        children: r(o, {
                                                                            className: 'framer-ft5ag4-container',
                                                                            style: { rotate: 45 },
                                                                            children: r(y, {
                                                                                color: 'rgb(29, 29, 31)',
                                                                                height: '100%',
                                                                                iconSearch: 'arrowoutward',
                                                                                iconSelection: 'ArrowUpward',
                                                                                iconStyle15: 'Filled',
                                                                                iconStyle2: 'Filled',
                                                                                iconStyle7: 'Filled',
                                                                                id: 'x6Y0f63CB',
                                                                                layoutId: 'x6Y0f63CB',
                                                                                mirrored: !1,
                                                                                selectByList: !0,
                                                                                style: { height: '100%', width: '100%' },
                                                                                width: '100%',
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r('div', {
                                    className: 'framer-17h8hji',
                                    'data-framer-name': 'Footer Text',
                                    name: 'Footer Text',
                                    children: r(m, {
                                        breakpoint: n,
                                        overrides: {
                                            b7UOhdrri: {
                                                __framer__transformTargets: [
                                                    {
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 50,
                                                        },
                                                    },
                                                    {
                                                        target: {
                                                            opacity: 1,
                                                            rotate: 0,
                                                            rotateX: 0,
                                                            rotateY: 0,
                                                            scale: 1,
                                                            skewX: 0,
                                                            skewY: 0,
                                                            x: 0,
                                                            y: 0,
                                                        },
                                                    },
                                                ],
                                                children: r(e, {
                                                    children: a('p', {
                                                        style: {
                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                            '--framer-font-family':
                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                            '--framer-font-size': '25px',
                                                            '--framer-font-weight': '700',
                                                            '--framer-letter-spacing': '2em',
                                                            '--framer-line-height': '50px',
                                                            '--framer-text-alignment': 'center',
                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                            '--framer-text-transform': 'uppercase',
                                                        },
                                                        children: [
                                                            'chadh',
                                                            r('span', { style: { '--framer-letter-spacing': '0em' }, children: 'a' }),
                                                        ],
                                                    }),
                                                }),
                                            },
                                            efinEt9Z3: {
                                                children: r(e, {
                                                    children: a('p', {
                                                        style: {
                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                            '--framer-font-family':
                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                            '--framer-font-size': '201px',
                                                            '--framer-font-weight': '700',
                                                            '--framer-letter-spacing': '100px',
                                                            '--framer-line-height': '240px',
                                                            '--framer-text-alignment': 'center',
                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                            '--framer-text-transform': 'uppercase',
                                                        },
                                                        children: [
                                                            'chadh',
                                                            r('span', { style: { '--framer-letter-spacing': '0px' }, children: 'a' }),
                                                        ],
                                                    }),
                                                }),
                                            },
                                            Ssw7mXvCQ: {
                                                children: r(e, {
                                                    children: a('p', {
                                                        style: {
                                                            '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                            '--framer-font-family':
                                                                '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                            '--framer-font-size': '50px',
                                                            '--framer-font-weight': '700',
                                                            '--framer-letter-spacing': '100px',
                                                            '--framer-line-height': '110px',
                                                            '--framer-text-alignment': 'center',
                                                            '--framer-text-color': 'rgb(29, 29, 31)',
                                                            '--framer-text-transform': 'uppercase',
                                                        },
                                                        children: [
                                                            'chadh',
                                                            r('span', { style: { '--framer-letter-spacing': '0px' }, children: 'a' }),
                                                        ],
                                                    }),
                                                }),
                                            },
                                        },
                                        children: r(g, {
                                            __framer__spring: {
                                                damping: 60,
                                                delay: 0,
                                                duration: 0.3,
                                                ease: [0.44, 0, 0.56, 1],
                                                mass: 1,
                                                stiffness: 300,
                                                type: 'spring',
                                            },
                                            __framer__styleTransformEffectEnabled: !0,
                                            __framer__transformTargets: [
                                                {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 140,
                                                    },
                                                },
                                                {
                                                    target: {
                                                        opacity: 1,
                                                        rotate: 0,
                                                        rotateX: 0,
                                                        rotateY: 0,
                                                        scale: 1,
                                                        skewX: 0,
                                                        skewY: 0,
                                                        x: 0,
                                                        y: 0,
                                                    },
                                                },
                                            ],
                                            __framer__transformTrigger: 'onInView',
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: r(e, {
                                                children: a('p', {
                                                    style: {
                                                        '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                                                        '--framer-font-family':
                                                            '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                                        '--framer-font-size': '201px',
                                                        '--framer-font-weight': '700',
                                                        '--framer-letter-spacing': '100px',
                                                        '--framer-line-height': '150px',
                                                        '--framer-text-alignment': 'center',
                                                        '--framer-text-color': 'rgb(29, 29, 31)',
                                                        '--framer-text-transform': 'uppercase',
                                                    },
                                                    children: [
                                                        'chadh',
                                                        r('span', { style: { '--framer-letter-spacing': '0px' }, children: 'a' }),
                                                    ],
                                                }),
                                            }),
                                            className: 'framer-9qopmp',
                                            'data-framer-name': 'Text',
                                            fonts: ['GF;Instrument Sans-700'],
                                            name: 'Text',
                                            style: { transformPerspective: 1200 },
                                            verticalAlignment: 'top',
                                            withExternalLayout: !0,
                                        }),
                                    }),
                                }),
                                r(tr, {
                                    links: [
                                        { href: { hash: ':IfBBZ5kQy', webPageId: 'aIxubhzMw' }, implicitPathVariables: void 0 },
                                        { href: { hash: ':IfBBZ5kQy', webPageId: 'aIxubhzMw' }, implicitPathVariables: void 0 },
                                        { href: { hash: ':IfBBZ5kQy', webPageId: 'aIxubhzMw' }, implicitPathVariables: void 0 },
                                        { href: { hash: ':IfBBZ5kQy', webPageId: 'aIxubhzMw' }, implicitPathVariables: void 0 },
                                    ],
                                    children: (l) =>
                                        r(f, {
                                            width: '100vw',
                                            children: r(o, {
                                                className: 'framer-mfpdio-container',
                                                children: r(m, {
                                                    breakpoint: n,
                                                    overrides: {
                                                        b7UOhdrri: { V4AKsldnT: l[2], variant: 'KA6ilXxrI' },
                                                        efinEt9Z3: { V4AKsldnT: l[3] },
                                                        Ssw7mXvCQ: { V4AKsldnT: l[1] },
                                                    },
                                                    children: r(q, {
                                                        height: '100%',
                                                        id: 'eYxbySqno',
                                                        layoutId: 'eYxbySqno',
                                                        style: { width: '100%' },
                                                        V4AKsldnT: l[0],
                                                        variant: 'cJsuhy05P',
                                                        width: '100%',
                                                    }),
                                                }),
                                            }),
                                        }),
                                }),
                                r(f, {
                                    children: r(o, {
                                        className: 'framer-k21fql-container',
                                        children: r(X, {
                                            height: '100%',
                                            id: 'wUABeXbHh',
                                            intensity: 16,
                                            layoutId: 'wUABeXbHh',
                                            width: '100%',
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        r('div', { className: E(sr, ...J), id: 'overlay' }),
                    ],
                }),
            })
        );
    }),
    Lr = [
        '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
        `.${k.bodyClassName}-framer-zsu8R { background: rgb(255, 255, 255); }`,
        '.framer-zsu8R.framer-1s3gldu, .framer-zsu8R .framer-1s3gldu { display: block; }',
        '.framer-zsu8R.framer-8pznem { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }',
        '.framer-zsu8R .framer-1ictinb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 90vh; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-1u5ofgx-container, .framer-zsu8R .framer-mfpdio-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-lwlkr5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-ojoshh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1ne18jd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-pgkxl0 { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-r8p1d1, .framer-zsu8R .framer-q5xh81, .framer-zsu8R .framer-1g33ke2, .framer-zsu8R .framer-1yridoy, .framer-zsu8R .framer-he2gb2, .framer-zsu8R .framer-l6dcey { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-16fo7wd { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 46px; justify-content: space-between; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-1krcjp1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-oy8tau, .framer-zsu8R .framer-1ol5s45, .framer-zsu8R .framer-1svnd2y, .framer-zsu8R .framer-32il5t, .framer-zsu8R .framer-449rug, .framer-zsu8R .framer-18bau4f, .framer-zsu8R .framer-10ftiqp, .framer-zsu8R .framer-1xhekt, .framer-zsu8R .framer-1xpjk5f, .framer-zsu8R .framer-x7v9c5, .framer-zsu8R .framer-17mnm4a, .framer-zsu8R .framer-efdeh4, .framer-zsu8R .framer-1d6giyx, .framer-zsu8R .framer-odd2o2, .framer-zsu8R .framer-12j6135, .framer-zsu8R .framer-v8xq57, .framer-zsu8R .framer-1h6fcpx, .framer-zsu8R .framer-8c0dlo, .framer-zsu8R .framer-1p5dhqo, .framer-zsu8R .framer-dip0f4, .framer-zsu8R .framer-17tgt27, .framer-zsu8R .framer-rks157, .framer-zsu8R .framer-alcxo3, .framer-zsu8R .framer-9a6stw, .framer-zsu8R .framer-1l755ic { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
        '.framer-zsu8R .framer-os08ha { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-az40jn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 21px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
        '.framer-zsu8R .framer-h77bai-container, .framer-zsu8R .framer-q23phd-container, .framer-zsu8R .framer-j6hhr4-container, .framer-zsu8R .framer-yaoisf-container { flex: none; height: 21px; position: relative; width: auto; }',
        '.framer-zsu8R .framer-y5dbyx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 80px 50px 80px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-nwi79n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 40vh; justify-content: center; overflow: hidden; padding: 40px 0px 40px 0px; position: sticky; top: 0px; width: 100%; will-change: transform; }',
        '.framer-zsu8R .framer-3l6xwu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-3vgkk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1t452jp, .framer-zsu8R .framer-u8dman, .framer-zsu8R .framer-11wzbtj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
        '.framer-zsu8R .framer-1lvhr3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 4; }',
        '.framer-zsu8R .framer-kemeso { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.04); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 0.7 / 1; border-bottom-left-radius: 300px; border-bottom-right-radius: 300px; border-top-left-radius: 300px; border-top-right-radius: 300px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 720px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 504px; will-change: var(--framer-will-change-override, transform); }',
        '.framer-zsu8R .framer-v40bcf { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
        '.framer-zsu8R .framer-18swtpq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 100px 40px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-1spd20m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-16qjw4b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1360px; z-index: 2; }',
        '.framer-zsu8R .framer-9626xh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1015px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-1lltahb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 922px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-n7aig4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
        '.framer-zsu8R .framer-110476r-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }',
        '.framer-zsu8R .framer-1n3z1t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 100px 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-isnu0k-container { flex: none; height: 304px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1c14jv8, .framer-zsu8R .framer-1j4ujk, .framer-zsu8R .framer-36vn62, .framer-zsu8R .framer-tyxvdv, .framer-zsu8R .framer-pj71au { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.04); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; background-color: #f5f5f7; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; height: var(--framer-aspect-ratio-supported, 230px); overflow: hidden; position: relative; text-decoration: none; width: 230px; will-change: var(--framer-will-change-override, transform); }',
        '.framer-zsu8R .framer-eds128 { flex: none; height: 122px; left: calc(52.17391304347828% - 163px / 2); position: absolute; top: calc(47.39130434782611% - 122px / 2); width: 163px; }',
        '.framer-zsu8R .framer-1ng0c8y { bottom: 73px; flex: none; height: 93px; left: 72px; position: absolute; width: 85px; }',
        '.framer-zsu8R .framer-has1ve { bottom: 92px; flex: none; height: 46px; left: 35px; position: absolute; width: 160px; }',
        '.framer-zsu8R .framer-1757c1t { aspect-ratio: 4.4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 41px); left: 25px; position: absolute; right: 25px; top: 95px; }',
        '.framer-zsu8R .framer-maegfz { bottom: 75px; flex: none; height: 80px; left: 75px; position: absolute; width: 80px; }',
        '.framer-zsu8R .framer-1rszne8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 30px 40px 0px 40px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-rx20vu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1f5l6ep, .framer-zsu8R .framer-voblb1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-143eg3z, .framer-zsu8R .framer-rih03x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-1ed4s8m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-18x41da { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 371px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-qyq5wf, .framer-zsu8R .framer-1tdnol0, .framer-zsu8R .framer-5ooo2h, .framer-zsu8R .framer-kkwhkx, .framer-zsu8R .framer-s5sjmg { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.04); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #f5f5f7; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 30px 30px 40px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }',
        '.framer-zsu8R .framer-6mqkee, .framer-zsu8R .framer-7xzc9o, .framer-zsu8R .framer-1rna1k0, .framer-zsu8R .framer-1176wf5, .framer-zsu8R .framer-e4ld6n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-12rmvbu, .framer-zsu8R .framer-3oinq3, .framer-zsu8R .framer-1tocjw7, .framer-zsu8R .framer-15sx3sv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1urx5fb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 278px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1yjh99d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1xy57wr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 26px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1j53vem, .framer-zsu8R .framer-17x8vxm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 120px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-11it4s1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }',
        '.framer-zsu8R .framer-162qtoj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1lhlpgq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }',
        '.framer-zsu8R .framer-bry7t { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 700px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-1fj2yqw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: sticky; top: 100px; width: min-content; will-change: transform; z-index: 1; }',
        '.framer-zsu8R .framer-1admpkr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-18tbvoi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 846px; z-index: 1; }',
        '.framer-zsu8R .framer-l7me05, .framer-zsu8R .framer-1n3djqi, .framer-zsu8R .framer-djjtu8, .framer-zsu8R .framer-1rtiuv4, .framer-zsu8R .framer-1avhc6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-126ohcj, .framer-zsu8R .framer-1x3wexk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-z0xpcx, .framer-zsu8R .framer-1v9i0mt, .framer-zsu8R .framer-ewcxsu, .framer-zsu8R .framer-7pm4tg, .framer-zsu8R .framer-12jc5o4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-rddtb0, .framer-zsu8R .framer-1v4o249, .framer-zsu8R .framer-q4rhwm, .framer-zsu8R .framer-1kygp2v, .framer-zsu8R .framer-13rhs4x, .framer-zsu8R .framer-oww0a8, .framer-zsu8R .framer-1onl2n3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-189103u, .framer-zsu8R .framer-1sk47wp, .framer-zsu8R .framer-1dpwuac, .framer-zsu8R .framer-14vrdn0, .framer-zsu8R .framer-2ql464, .framer-zsu8R .framer-2x5yyo, .framer-zsu8R .framer-v8nax3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-7rr01m, .framer-zsu8R .framer-se0b90, .framer-zsu8R .framer-pjjb9z, .framer-zsu8R .framer-1wedp89, .framer-zsu8R .framer-d2gso, .framer-zsu8R .framer-kue7tk, .framer-zsu8R .framer-5sc2lf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-191cyva { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 10px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 3px; }',
        '.framer-zsu8R .framer-1bo40er { background-color: #bbddff; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-3hy2ei { background-color: #cceeff; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1ye7n16, .framer-zsu8R .framer-wbyjua, .framer-zsu8R .framer-yek9h4, .framer-zsu8R .framer-zqnb6t, .framer-zsu8R .framer-1v3ptyg, .framer-zsu8R .framer-1p3ctxy, .framer-zsu8R .framer-1i3once { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-1ylulp, .framer-zsu8R .framer-1tzfemf, .framer-zsu8R .framer-2e9kzn, .framer-zsu8R .framer-8rj9aq, .framer-zsu8R .framer-1su1i74, .framer-zsu8R .framer-1fpj3rf, .framer-zsu8R .framer-9x4ue1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 623px; word-break: break-word; word-wrap: break-word; }',
        '.framer-zsu8R .framer-jsdaa5, .framer-zsu8R .framer-1odqd07, .framer-zsu8R .framer-8tlep6, .framer-zsu8R .framer-1oahvv5, .framer-zsu8R .framer-awhuac { align-content: center; align-items: center; background-color: rgba(38, 38, 38, 0.16); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-kw1gbh, .framer-zsu8R .framer-1j4xfa5, .framer-zsu8R .framer-2ujsrl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
        '.framer-zsu8R .framer-1yqy75l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 110px 40px 50px 40px; position: relative; width: 100%; z-index: 1; }',
        '.framer-zsu8R .framer-1sjt9tf { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(8, minmax(20px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }',
        '.framer-zsu8R .framer-17cs6re { align-self: start; flex: none; grid-column: auto / span 3; height: 100%; justify-self: start; overflow: hidden; position: relative; width: 100%; z-index: 0; }',
        '.framer-zsu8R .framer-1yt9fuk { align-self: start; aspect-ratio: 0.6691919191919192 / 1; border-bottom-left-radius: 240px; border-bottom-right-radius: 240px; border-top-left-radius: 240px; border-top-right-radius: 240px; flex: none; grid-column: auto / span 2; height: var(--framer-aspect-ratio-supported, 486px); justify-self: start; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
        '.framer-zsu8R .framer-3pfvty { bottom: -120px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -120px; }',
        '.framer-zsu8R .framer-1m8sgiw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-2zyt3f, .framer-zsu8R .framer-45vfuf, .framer-zsu8R .framer-17lixsn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
        '.framer-zsu8R .framer-q2dp0c, .framer-zsu8R .framer-1witu81, .framer-zsu8R .framer-1mjgux2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
        '.framer-zsu8R .framer-1mx0hcf, .framer-zsu8R .framer-1axqgrr, .framer-zsu8R .framer-y4hlgh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 20px; }',
        '.framer-zsu8R .framer-g7xo6t-container, .framer-zsu8R .framer-1gm1knd-container, .framer-zsu8R .framer-ft5ag4-container { flex: none; height: 22px; position: relative; width: 22px; }',
        '.framer-zsu8R .framer-17h8hji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }',
        '.framer-zsu8R .framer-9qopmp { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
        '.framer-zsu8R .framer-k21fql-container { flex: none; height: auto; position: relative; width: auto; z-index: 0; }',
        '@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zsu8R.framer-8pznem, .framer-zsu8R .framer-lwlkr5, .framer-zsu8R .framer-ojoshh, .framer-zsu8R .framer-1ne18jd, .framer-zsu8R .framer-1krcjp1, .framer-zsu8R .framer-os08ha, .framer-zsu8R .framer-az40jn, .framer-zsu8R .framer-y5dbyx, .framer-zsu8R .framer-nwi79n, .framer-zsu8R .framer-3l6xwu, .framer-zsu8R .framer-3vgkk, .framer-zsu8R .framer-1lvhr3w, .framer-zsu8R .framer-kemeso, .framer-zsu8R .framer-18swtpq, .framer-zsu8R .framer-1spd20m, .framer-zsu8R .framer-16qjw4b, .framer-zsu8R .framer-n7aig4, .framer-zsu8R .framer-1n3z1t, .framer-zsu8R .framer-1rszne8, .framer-zsu8R .framer-rx20vu, .framer-zsu8R .framer-1f5l6ep, .framer-zsu8R .framer-voblb1, .framer-zsu8R .framer-1ed4s8m, .framer-zsu8R .framer-18x41da, .framer-zsu8R .framer-qyq5wf, .framer-zsu8R .framer-6mqkee, .framer-zsu8R .framer-12rmvbu, .framer-zsu8R .framer-1tdnol0, .framer-zsu8R .framer-7xzc9o, .framer-zsu8R .framer-3oinq3, .framer-zsu8R .framer-5ooo2h, .framer-zsu8R .framer-1rna1k0, .framer-zsu8R .framer-1tocjw7, .framer-zsu8R .framer-1urx5fb, .framer-zsu8R .framer-kkwhkx, .framer-zsu8R .framer-1176wf5, .framer-zsu8R .framer-1yjh99d, .framer-zsu8R .framer-1xy57wr, .framer-zsu8R .framer-s5sjmg, .framer-zsu8R .framer-e4ld6n, .framer-zsu8R .framer-15sx3sv, .framer-zsu8R .framer-11it4s1, .framer-zsu8R .framer-162qtoj, .framer-zsu8R .framer-1lhlpgq, .framer-zsu8R .framer-1fj2yqw, .framer-zsu8R .framer-1admpkr, .framer-zsu8R .framer-18tbvoi, .framer-zsu8R .framer-l7me05, .framer-zsu8R .framer-126ohcj, .framer-zsu8R .framer-rddtb0, .framer-zsu8R .framer-189103u, .framer-zsu8R .framer-191cyva, .framer-zsu8R .framer-1ye7n16, .framer-zsu8R .framer-jsdaa5, .framer-zsu8R .framer-1n3djqi, .framer-zsu8R .framer-1x3wexk, .framer-zsu8R .framer-1v4o249, .framer-zsu8R .framer-1sk47wp, .framer-zsu8R .framer-wbyjua, .framer-zsu8R .framer-1odqd07, .framer-zsu8R .framer-q4rhwm, .framer-zsu8R .framer-1dpwuac, .framer-zsu8R .framer-yek9h4, .framer-zsu8R .framer-8tlep6, .framer-zsu8R .framer-1kygp2v, .framer-zsu8R .framer-14vrdn0, .framer-zsu8R .framer-zqnb6t, .framer-zsu8R .framer-1oahvv5, .framer-zsu8R .framer-djjtu8, .framer-zsu8R .framer-kw1gbh, .framer-zsu8R .framer-13rhs4x, .framer-zsu8R .framer-2ql464, .framer-zsu8R .framer-1v3ptyg, .framer-zsu8R .framer-awhuac, .framer-zsu8R .framer-1rtiuv4, .framer-zsu8R .framer-1j4xfa5, .framer-zsu8R .framer-oww0a8, .framer-zsu8R .framer-2x5yyo, .framer-zsu8R .framer-1p3ctxy, .framer-zsu8R .framer-1avhc6, .framer-zsu8R .framer-2ujsrl, .framer-zsu8R .framer-1onl2n3, .framer-zsu8R .framer-v8nax3, .framer-zsu8R .framer-1i3once, .framer-zsu8R .framer-1yqy75l, .framer-zsu8R .framer-1m8sgiw, .framer-zsu8R .framer-2zyt3f, .framer-zsu8R .framer-q2dp0c, .framer-zsu8R .framer-1mx0hcf, .framer-zsu8R .framer-45vfuf, .framer-zsu8R .framer-1witu81, .framer-zsu8R .framer-1axqgrr, .framer-zsu8R .framer-17lixsn, .framer-zsu8R .framer-1mjgux2, .framer-zsu8R .framer-y4hlgh, .framer-zsu8R .framer-17h8hji { gap: 0px; } .framer-zsu8R.framer-8pznem > *, .framer-zsu8R .framer-ojoshh > *, .framer-zsu8R .framer-16qjw4b > *, .framer-zsu8R .framer-l7me05 > *, .framer-zsu8R .framer-1n3djqi > *, .framer-zsu8R .framer-djjtu8 > *, .framer-zsu8R .framer-1rtiuv4 > *, .framer-zsu8R .framer-1avhc6 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-zsu8R.framer-8pznem > :first-child, .framer-zsu8R .framer-lwlkr5 > :first-child, .framer-zsu8R .framer-ojoshh > :first-child, .framer-zsu8R .framer-1ne18jd > :first-child, .framer-zsu8R .framer-1krcjp1 > :first-child, .framer-zsu8R .framer-y5dbyx > :first-child, .framer-zsu8R .framer-nwi79n > :first-child, .framer-zsu8R .framer-3l6xwu > :first-child, .framer-zsu8R .framer-18swtpq > :first-child, .framer-zsu8R .framer-1spd20m > :first-child, .framer-zsu8R .framer-16qjw4b > :first-child, .framer-zsu8R .framer-1n3z1t > :first-child, .framer-zsu8R .framer-1rszne8 > :first-child, .framer-zsu8R .framer-rx20vu > :first-child, .framer-zsu8R .framer-1ed4s8m > :first-child, .framer-zsu8R .framer-qyq5wf > :first-child, .framer-zsu8R .framer-6mqkee > :first-child, .framer-zsu8R .framer-12rmvbu > :first-child, .framer-zsu8R .framer-1tdnol0 > :first-child, .framer-zsu8R .framer-7xzc9o > :first-child, .framer-zsu8R .framer-3oinq3 > :first-child, .framer-zsu8R .framer-5ooo2h > :first-child, .framer-zsu8R .framer-1rna1k0 > :first-child, .framer-zsu8R .framer-1tocjw7 > :first-child, .framer-zsu8R .framer-kkwhkx > :first-child, .framer-zsu8R .framer-1176wf5 > :first-child, .framer-zsu8R .framer-1yjh99d > :first-child, .framer-zsu8R .framer-s5sjmg > :first-child, .framer-zsu8R .framer-e4ld6n > :first-child, .framer-zsu8R .framer-15sx3sv > :first-child, .framer-zsu8R .framer-11it4s1 > :first-child, .framer-zsu8R .framer-1lhlpgq > :first-child, .framer-zsu8R .framer-1fj2yqw > :first-child, .framer-zsu8R .framer-18tbvoi > :first-child, .framer-zsu8R .framer-l7me05 > :first-child, .framer-zsu8R .framer-rddtb0 > :first-child, .framer-zsu8R .framer-189103u > :first-child, .framer-zsu8R .framer-191cyva > :first-child, .framer-zsu8R .framer-1n3djqi > :first-child, .framer-zsu8R .framer-1v4o249 > :first-child, .framer-zsu8R .framer-1sk47wp > :first-child, .framer-zsu8R .framer-q4rhwm > :first-child, .framer-zsu8R .framer-1dpwuac > :first-child, .framer-zsu8R .framer-1kygp2v > :first-child, .framer-zsu8R .framer-14vrdn0 > :first-child, .framer-zsu8R .framer-djjtu8 > :first-child, .framer-zsu8R .framer-13rhs4x > :first-child, .framer-zsu8R .framer-2ql464 > :first-child, .framer-zsu8R .framer-1rtiuv4 > :first-child, .framer-zsu8R .framer-oww0a8 > :first-child, .framer-zsu8R .framer-2x5yyo > :first-child, .framer-zsu8R .framer-1avhc6 > :first-child, .framer-zsu8R .framer-1onl2n3 > :first-child, .framer-zsu8R .framer-v8nax3 > :first-child, .framer-zsu8R .framer-1yqy75l > :first-child, .framer-zsu8R .framer-17h8hji > :first-child { margin-top: 0px; } .framer-zsu8R.framer-8pznem > :last-child, .framer-zsu8R .framer-lwlkr5 > :last-child, .framer-zsu8R .framer-ojoshh > :last-child, .framer-zsu8R .framer-1ne18jd > :last-child, .framer-zsu8R .framer-1krcjp1 > :last-child, .framer-zsu8R .framer-y5dbyx > :last-child, .framer-zsu8R .framer-nwi79n > :last-child, .framer-zsu8R .framer-3l6xwu > :last-child, .framer-zsu8R .framer-18swtpq > :last-child, .framer-zsu8R .framer-1spd20m > :last-child, .framer-zsu8R .framer-16qjw4b > :last-child, .framer-zsu8R .framer-1n3z1t > :last-child, .framer-zsu8R .framer-1rszne8 > :last-child, .framer-zsu8R .framer-rx20vu > :last-child, .framer-zsu8R .framer-1ed4s8m > :last-child, .framer-zsu8R .framer-qyq5wf > :last-child, .framer-zsu8R .framer-6mqkee > :last-child, .framer-zsu8R .framer-12rmvbu > :last-child, .framer-zsu8R .framer-1tdnol0 > :last-child, .framer-zsu8R .framer-7xzc9o > :last-child, .framer-zsu8R .framer-3oinq3 > :last-child, .framer-zsu8R .framer-5ooo2h > :last-child, .framer-zsu8R .framer-1rna1k0 > :last-child, .framer-zsu8R .framer-1tocjw7 > :last-child, .framer-zsu8R .framer-kkwhkx > :last-child, .framer-zsu8R .framer-1176wf5 > :last-child, .framer-zsu8R .framer-1yjh99d > :last-child, .framer-zsu8R .framer-s5sjmg > :last-child, .framer-zsu8R .framer-e4ld6n > :last-child, .framer-zsu8R .framer-15sx3sv > :last-child, .framer-zsu8R .framer-11it4s1 > :last-child, .framer-zsu8R .framer-1lhlpgq > :last-child, .framer-zsu8R .framer-1fj2yqw > :last-child, .framer-zsu8R .framer-18tbvoi > :last-child, .framer-zsu8R .framer-l7me05 > :last-child, .framer-zsu8R .framer-rddtb0 > :last-child, .framer-zsu8R .framer-189103u > :last-child, .framer-zsu8R .framer-191cyva > :last-child, .framer-zsu8R .framer-1n3djqi > :last-child, .framer-zsu8R .framer-1v4o249 > :last-child, .framer-zsu8R .framer-1sk47wp > :last-child, .framer-zsu8R .framer-q4rhwm > :last-child, .framer-zsu8R .framer-1dpwuac > :last-child, .framer-zsu8R .framer-1kygp2v > :last-child, .framer-zsu8R .framer-14vrdn0 > :last-child, .framer-zsu8R .framer-djjtu8 > :last-child, .framer-zsu8R .framer-13rhs4x > :last-child, .framer-zsu8R .framer-2ql464 > :last-child, .framer-zsu8R .framer-1rtiuv4 > :last-child, .framer-zsu8R .framer-oww0a8 > :last-child, .framer-zsu8R .framer-2x5yyo > :last-child, .framer-zsu8R .framer-1avhc6 > :last-child, .framer-zsu8R .framer-1onl2n3 > :last-child, .framer-zsu8R .framer-v8nax3 > :last-child, .framer-zsu8R .framer-1yqy75l > :last-child, .framer-zsu8R .framer-17h8hji > :last-child { margin-bottom: 0px; } .framer-zsu8R .framer-lwlkr5 > * { margin: 0px; margin-bottom: calc(44px / 2); margin-top: calc(44px / 2); } .framer-zsu8R .framer-1ne18jd > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-zsu8R .framer-1krcjp1 > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-zsu8R .framer-os08ha > *, .framer-zsu8R .framer-1lvhr3w > *, .framer-zsu8R .framer-kemeso > *, .framer-zsu8R .framer-q2dp0c > *, .framer-zsu8R .framer-1witu81 > *, .framer-zsu8R .framer-1mjgux2 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-zsu8R .framer-os08ha > :first-child, .framer-zsu8R .framer-az40jn > :first-child, .framer-zsu8R .framer-3vgkk > :first-child, .framer-zsu8R .framer-1lvhr3w > :first-child, .framer-zsu8R .framer-kemeso > :first-child, .framer-zsu8R .framer-n7aig4 > :first-child, .framer-zsu8R .framer-1f5l6ep > :first-child, .framer-zsu8R .framer-voblb1 > :first-child, .framer-zsu8R .framer-18x41da > :first-child, .framer-zsu8R .framer-1urx5fb > :first-child, .framer-zsu8R .framer-1xy57wr > :first-child, .framer-zsu8R .framer-162qtoj > :first-child, .framer-zsu8R .framer-1admpkr > :first-child, .framer-zsu8R .framer-126ohcj > :first-child, .framer-zsu8R .framer-1ye7n16 > :first-child, .framer-zsu8R .framer-jsdaa5 > :first-child, .framer-zsu8R .framer-1x3wexk > :first-child, .framer-zsu8R .framer-wbyjua > :first-child, .framer-zsu8R .framer-1odqd07 > :first-child, .framer-zsu8R .framer-yek9h4 > :first-child, .framer-zsu8R .framer-8tlep6 > :first-child, .framer-zsu8R .framer-zqnb6t > :first-child, .framer-zsu8R .framer-1oahvv5 > :first-child, .framer-zsu8R .framer-kw1gbh > :first-child, .framer-zsu8R .framer-1v3ptyg > :first-child, .framer-zsu8R .framer-awhuac > :first-child, .framer-zsu8R .framer-1j4xfa5 > :first-child, .framer-zsu8R .framer-1p3ctxy > :first-child, .framer-zsu8R .framer-2ujsrl > :first-child, .framer-zsu8R .framer-1i3once > :first-child, .framer-zsu8R .framer-1m8sgiw > :first-child, .framer-zsu8R .framer-2zyt3f > :first-child, .framer-zsu8R .framer-q2dp0c > :first-child, .framer-zsu8R .framer-1mx0hcf > :first-child, .framer-zsu8R .framer-45vfuf > :first-child, .framer-zsu8R .framer-1witu81 > :first-child, .framer-zsu8R .framer-1axqgrr > :first-child, .framer-zsu8R .framer-17lixsn > :first-child, .framer-zsu8R .framer-1mjgux2 > :first-child, .framer-zsu8R .framer-y4hlgh > :first-child { margin-left: 0px; } .framer-zsu8R .framer-os08ha > :last-child, .framer-zsu8R .framer-az40jn > :last-child, .framer-zsu8R .framer-3vgkk > :last-child, .framer-zsu8R .framer-1lvhr3w > :last-child, .framer-zsu8R .framer-kemeso > :last-child, .framer-zsu8R .framer-n7aig4 > :last-child, .framer-zsu8R .framer-1f5l6ep > :last-child, .framer-zsu8R .framer-voblb1 > :last-child, .framer-zsu8R .framer-18x41da > :last-child, .framer-zsu8R .framer-1urx5fb > :last-child, .framer-zsu8R .framer-1xy57wr > :last-child, .framer-zsu8R .framer-162qtoj > :last-child, .framer-zsu8R .framer-1admpkr > :last-child, .framer-zsu8R .framer-126ohcj > :last-child, .framer-zsu8R .framer-1ye7n16 > :last-child, .framer-zsu8R .framer-jsdaa5 > :last-child, .framer-zsu8R .framer-1x3wexk > :last-child, .framer-zsu8R .framer-wbyjua > :last-child, .framer-zsu8R .framer-1odqd07 > :last-child, .framer-zsu8R .framer-yek9h4 > :last-child, .framer-zsu8R .framer-8tlep6 > :last-child, .framer-zsu8R .framer-zqnb6t > :last-child, .framer-zsu8R .framer-1oahvv5 > :last-child, .framer-zsu8R .framer-kw1gbh > :last-child, .framer-zsu8R .framer-1v3ptyg > :last-child, .framer-zsu8R .framer-awhuac > :last-child, .framer-zsu8R .framer-1j4xfa5 > :last-child, .framer-zsu8R .framer-1p3ctxy > :last-child, .framer-zsu8R .framer-2ujsrl > :last-child, .framer-zsu8R .framer-1i3once > :last-child, .framer-zsu8R .framer-1m8sgiw > :last-child, .framer-zsu8R .framer-2zyt3f > :last-child, .framer-zsu8R .framer-q2dp0c > :last-child, .framer-zsu8R .framer-1mx0hcf > :last-child, .framer-zsu8R .framer-45vfuf > :last-child, .framer-zsu8R .framer-1witu81 > :last-child, .framer-zsu8R .framer-1axqgrr > :last-child, .framer-zsu8R .framer-17lixsn > :last-child, .framer-zsu8R .framer-1mjgux2 > :last-child, .framer-zsu8R .framer-y4hlgh > :last-child { margin-right: 0px; } .framer-zsu8R .framer-az40jn > *, .framer-zsu8R .framer-n7aig4 > *, .framer-zsu8R .framer-1xy57wr > *, .framer-zsu8R .framer-162qtoj > *, .framer-zsu8R .framer-126ohcj > *, .framer-zsu8R .framer-1ye7n16 > *, .framer-zsu8R .framer-jsdaa5 > *, .framer-zsu8R .framer-1x3wexk > *, .framer-zsu8R .framer-wbyjua > *, .framer-zsu8R .framer-1odqd07 > *, .framer-zsu8R .framer-yek9h4 > *, .framer-zsu8R .framer-8tlep6 > *, .framer-zsu8R .framer-zqnb6t > *, .framer-zsu8R .framer-1oahvv5 > *, .framer-zsu8R .framer-kw1gbh > *, .framer-zsu8R .framer-1v3ptyg > *, .framer-zsu8R .framer-awhuac > *, .framer-zsu8R .framer-1j4xfa5 > *, .framer-zsu8R .framer-1p3ctxy > *, .framer-zsu8R .framer-2ujsrl > *, .framer-zsu8R .framer-1i3once > *, .framer-zsu8R .framer-1mx0hcf > *, .framer-zsu8R .framer-1axqgrr > *, .framer-zsu8R .framer-y4hlgh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-zsu8R .framer-y5dbyx > *, .framer-zsu8R .framer-3l6xwu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-zsu8R .framer-nwi79n > *, .framer-zsu8R .framer-189103u > *, .framer-zsu8R .framer-1sk47wp > *, .framer-zsu8R .framer-1dpwuac > *, .framer-zsu8R .framer-14vrdn0 > *, .framer-zsu8R .framer-2ql464 > *, .framer-zsu8R .framer-2x5yyo > *, .framer-zsu8R .framer-v8nax3 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-zsu8R .framer-3vgkk > *, .framer-zsu8R .framer-1f5l6ep > *, .framer-zsu8R .framer-voblb1 > *, .framer-zsu8R .framer-1admpkr > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-zsu8R .framer-18swtpq > *, .framer-zsu8R .framer-1lhlpgq > *, .framer-zsu8R .framer-18tbvoi > *, .framer-zsu8R .framer-rddtb0 > *, .framer-zsu8R .framer-1v4o249 > *, .framer-zsu8R .framer-q4rhwm > *, .framer-zsu8R .framer-1kygp2v > *, .framer-zsu8R .framer-13rhs4x > *, .framer-zsu8R .framer-oww0a8 > *, .framer-zsu8R .framer-1onl2n3 > *, .framer-zsu8R .framer-1yqy75l > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-zsu8R .framer-1spd20m > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-zsu8R .framer-1n3z1t > *, .framer-zsu8R .framer-1rszne8 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-zsu8R .framer-rx20vu > *, .framer-zsu8R .framer-6mqkee > *, .framer-zsu8R .framer-7xzc9o > *, .framer-zsu8R .framer-1rna1k0 > *, .framer-zsu8R .framer-1176wf5 > *, .framer-zsu8R .framer-e4ld6n > *, .framer-zsu8R .framer-191cyva > *, .framer-zsu8R .framer-17h8hji > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-zsu8R .framer-1ed4s8m > *, .framer-zsu8R .framer-qyq5wf > *, .framer-zsu8R .framer-1tdnol0 > *, .framer-zsu8R .framer-5ooo2h > *, .framer-zsu8R .framer-kkwhkx > *, .framer-zsu8R .framer-s5sjmg > *, .framer-zsu8R .framer-11it4s1 > *, .framer-zsu8R .framer-1fj2yqw > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-zsu8R .framer-18x41da > *, .framer-zsu8R .framer-1urx5fb > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-zsu8R .framer-12rmvbu > *, .framer-zsu8R .framer-3oinq3 > *, .framer-zsu8R .framer-1tocjw7 > *, .framer-zsu8R .framer-1yjh99d > *, .framer-zsu8R .framer-15sx3sv > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-zsu8R .framer-1m8sgiw > * { margin: 0px; margin-left: calc(34px / 2); margin-right: calc(34px / 2); } .framer-zsu8R .framer-2zyt3f > *, .framer-zsu8R .framer-45vfuf > *, .framer-zsu8R .framer-17lixsn > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }',
        '@media (min-width: 1440px) and (max-width: 1919px) { .framer-zsu8R .hidden-8pznem { display: none !important; } }',
        `@media (min-width: 768px) and (max-width: 1439px) { .framer-zsu8R .hidden-yj79nc { display: none !important; } .${k.bodyClassName}-framer-zsu8R { background: rgb(255, 255, 255); } .framer-zsu8R.framer-8pznem { width: 768px; } .framer-zsu8R .framer-1ictinb { order: 0; } .framer-zsu8R .framer-r8p1d1 { overflow: hidden; text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25); } .framer-zsu8R .framer-y5dbyx { order: 3; padding: 0px 16px 80px 16px; } .framer-zsu8R .framer-3l6xwu { gap: 16px; } .framer-zsu8R .framer-1lvhr3w { width: min-content; } .framer-zsu8R .framer-kemeso { aspect-ratio: unset; height: 969px; width: 638px; } .framer-zsu8R .framer-18swtpq { order: 4; padding: 120px 40px 120px 40px; } .framer-zsu8R .framer-1spd20m, .framer-zsu8R .framer-16qjw4b, .framer-zsu8R .framer-9626xh, .framer-zsu8R .framer-1lltahb, .framer-zsu8R .framer-bry7t, .framer-zsu8R .framer-1ye7n16, .framer-zsu8R .framer-wbyjua, .framer-zsu8R .framer-yek9h4, .framer-zsu8R .framer-zqnb6t, .framer-zsu8R .framer-1v3ptyg, .framer-zsu8R .framer-1p3ctxy, .framer-zsu8R .framer-1i3once { width: 100%; } .framer-zsu8R .framer-1n3z1t { order: 5; } .framer-zsu8R .framer-1rszne8 { order: 6; padding: 30px 40px 100px 40px; } .framer-zsu8R .framer-1ed4s8m { gap: 60px; } .framer-zsu8R .framer-18x41da { flex-direction: column; height: min-content; padding: 0px 0px 125px 0px; } .framer-zsu8R .framer-qyq5wf, .framer-zsu8R .framer-1tdnol0, .framer-zsu8R .framer-5ooo2h, .framer-zsu8R .framer-kkwhkx, .framer-zsu8R .framer-s5sjmg { flex: none; height: min-content; width: 100%; } .framer-zsu8R .framer-1urx5fb { flex-direction: column; gap: 27px; } .framer-zsu8R .framer-1j53vem { gap: 74px; justify-content: flex-start; order: 7; padding: 80px 40px 0px 40px; } .framer-zsu8R .framer-1lhlpgq, .framer-zsu8R .framer-18tbvoi, .framer-zsu8R .framer-1ylulp, .framer-zsu8R .framer-1tzfemf, .framer-zsu8R .framer-2e9kzn, .framer-zsu8R .framer-8rj9aq, .framer-zsu8R .framer-1su1i74, .framer-zsu8R .framer-1fpj3rf, .framer-zsu8R .framer-9x4ue1, .framer-zsu8R .framer-2zyt3f, .framer-zsu8R .framer-45vfuf, .framer-zsu8R .framer-17lixsn { flex: 1 0 0px; width: 1px; } .framer-zsu8R .framer-17x8vxm { gap: 74px; justify-content: flex-start; order: 9; padding: 80px 40px 0px 40px; } .framer-zsu8R .framer-1yqy75l { order: 15; padding: 120px 40px 40px 40px; } .framer-zsu8R .framer-1sjt9tf { grid-template-columns: repeat(6, minmax(20px, 1fr)); } .framer-zsu8R .framer-17cs6re { grid-column: unset; } .framer-zsu8R .framer-1yt9fuk { align-self: center; aspect-ratio: 0.6672932330827067 / 1; grid-column: auto / span 4; height: var(--framer-aspect-ratio-supported, 678px); justify-self: center; } .framer-zsu8R .framer-1m8sgiw { width: 660px; } .framer-zsu8R .framer-17h8hji { order: 16; padding: 0px; } .framer-zsu8R .framer-mfpdio-container { order: 17; } .framer-zsu8R .framer-k21fql-container { order: 18; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zsu8R .framer-3l6xwu, .framer-zsu8R .framer-1ed4s8m, .framer-zsu8R .framer-18x41da, .framer-zsu8R .framer-1urx5fb, .framer-zsu8R .framer-1j53vem, .framer-zsu8R .framer-17x8vxm { gap: 0px; } .framer-zsu8R .framer-3l6xwu > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-zsu8R .framer-3l6xwu > :first-child, .framer-zsu8R .framer-1ed4s8m > :first-child, .framer-zsu8R .framer-18x41da > :first-child, .framer-zsu8R .framer-1urx5fb > :first-child { margin-top: 0px; } .framer-zsu8R .framer-3l6xwu > :last-child, .framer-zsu8R .framer-1ed4s8m > :last-child, .framer-zsu8R .framer-18x41da > :last-child, .framer-zsu8R .framer-1urx5fb > :last-child { margin-bottom: 0px; } .framer-zsu8R .framer-1ed4s8m > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-zsu8R .framer-18x41da > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-zsu8R .framer-1urx5fb > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-zsu8R .framer-1j53vem > *, .framer-zsu8R .framer-17x8vxm > * { margin: 0px; margin-left: calc(74px / 2); margin-right: calc(74px / 2); } .framer-zsu8R .framer-1j53vem > :first-child, .framer-zsu8R .framer-17x8vxm > :first-child { margin-left: 0px; } .framer-zsu8R .framer-1j53vem > :last-child, .framer-zsu8R .framer-17x8vxm > :last-child { margin-right: 0px; } }}`,
        `@media (max-width: 767px) { .framer-zsu8R .hidden-1i9ztku { display: none !important; } .${k.bodyClassName}-framer-zsu8R { background: rgb(255, 255, 255); } .framer-zsu8R.framer-8pznem { width: 390px; } .framer-zsu8R .framer-1ictinb { gap: 100px; height: 60vh; justify-content: flex-start; } .framer-zsu8R .framer-lwlkr5, .framer-zsu8R .framer-1n3z1t { padding: 0px 0px 40px 0px; } .framer-zsu8R .framer-ojoshh, .framer-zsu8R .framer-3l6xwu { gap: 16px; } .framer-zsu8R .framer-y5dbyx { padding: 0px 20px 20px 20px; } .framer-zsu8R .framer-nwi79n { height: min-content; } .framer-zsu8R .framer-kemeso { aspect-ratio: 0.5857142857142857 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 598px); width: 1px; } .framer-zsu8R .framer-18swtpq { gap: 40px; padding: 20px 25px 60px 25px; } .framer-zsu8R .framer-1spd20m { gap: 15px; width: 100%; } .framer-zsu8R .framer-16qjw4b { gap: 25px; padding: 0px 0px 20px 0px; width: 100%; } .framer-zsu8R .framer-9626xh, .framer-zsu8R .framer-1lltahb, .framer-zsu8R .framer-11it4s1, .framer-zsu8R .framer-bry7t, .framer-zsu8R .framer-18tbvoi, .framer-zsu8R .framer-1ye7n16, .framer-zsu8R .framer-wbyjua, .framer-zsu8R .framer-yek9h4, .framer-zsu8R .framer-zqnb6t, .framer-zsu8R .framer-1v3ptyg, .framer-zsu8R .framer-1p3ctxy, .framer-zsu8R .framer-1i3once, .framer-zsu8R .framer-1m8sgiw { width: 100%; } .framer-zsu8R .framer-1rszne8 { gap: 50px; padding: 30px 20px 0px 20px; } .framer-zsu8R .framer-rx20vu { align-content: center; align-items: center; gap: 6px; } .framer-zsu8R .framer-1ed4s8m, .framer-zsu8R .framer-l7me05, .framer-zsu8R .framer-1n3djqi, .framer-zsu8R .framer-djjtu8, .framer-zsu8R .framer-1rtiuv4, .framer-zsu8R .framer-1avhc6 { gap: 20px; } .framer-zsu8R .framer-18x41da, .framer-zsu8R .framer-1urx5fb { flex-direction: column; gap: 20px; height: min-content; } .framer-zsu8R .framer-qyq5wf, .framer-zsu8R .framer-1tdnol0, .framer-zsu8R .framer-5ooo2h, .framer-zsu8R .framer-kkwhkx, .framer-zsu8R .framer-s5sjmg { flex: none; height: min-content; width: 100%; } .framer-zsu8R .framer-12rmvbu, .framer-zsu8R .framer-3oinq3, .framer-zsu8R .framer-1tocjw7, .framer-zsu8R .framer-1yjh99d, .framer-zsu8R .framer-15sx3sv { gap: 22px; } .framer-zsu8R .framer-1j53vem { flex-direction: column; gap: 50px; justify-content: flex-start; padding: 80px 30px 0px 30px; } .framer-zsu8R .framer-162qtoj { overflow: hidden; width: 100%; } .framer-zsu8R .framer-u8dman { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-zsu8R .framer-1lhlpgq { gap: 40px; width: 100%; } .framer-zsu8R .framer-17x8vxm { flex-direction: column; gap: 60px; justify-content: flex-start; padding: 60px 30px 0px 30px; } .framer-zsu8R .framer-1fj2yqw { position: relative; top: unset; } .framer-zsu8R .framer-1admpkr { overflow: hidden; } .framer-zsu8R .framer-7rr01m, .framer-zsu8R .framer-se0b90, .framer-zsu8R .framer-pjjb9z, .framer-zsu8R .framer-1wedp89, .framer-zsu8R .framer-d2gso, .framer-zsu8R .framer-kue7tk, .framer-zsu8R .framer-5sc2lf { flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-zsu8R .framer-efdeh4, .framer-zsu8R .framer-1d6giyx, .framer-zsu8R .framer-odd2o2, .framer-zsu8R .framer-12j6135, .framer-zsu8R .framer-v8xq57, .framer-zsu8R .framer-1h6fcpx, .framer-zsu8R .framer-8c0dlo, .framer-zsu8R .framer-1p5dhqo, .framer-zsu8R .framer-dip0f4, .framer-zsu8R .framer-17tgt27, .framer-zsu8R .framer-rks157, .framer-zsu8R .framer-alcxo3, .framer-zsu8R .framer-9a6stw, .framer-zsu8R .framer-1l755ic { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-zsu8R .framer-1ylulp, .framer-zsu8R .framer-1tzfemf, .framer-zsu8R .framer-2e9kzn, .framer-zsu8R .framer-8rj9aq, .framer-zsu8R .framer-1su1i74, .framer-zsu8R .framer-1fpj3rf, .framer-zsu8R .framer-9x4ue1 { flex: 1 0 0px; width: 1px; } .framer-zsu8R .framer-1yqy75l { gap: 40px; padding: 50px 20px 0px 20px; } .framer-zsu8R .framer-1sjt9tf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-zsu8R .framer-1yt9fuk { align-self: unset; aspect-ratio: 0.6679389312977099 / 1; height: var(--framer-aspect-ratio-supported, 524px); } .framer-zsu8R .framer-2zyt3f, .framer-zsu8R .framer-45vfuf, .framer-zsu8R .framer-17lixsn { flex-direction: column; } .framer-zsu8R .framer-17h8hji { padding: 20px 20px 0px 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zsu8R .framer-1ictinb, .framer-zsu8R .framer-ojoshh, .framer-zsu8R .framer-3l6xwu, .framer-zsu8R .framer-18swtpq, .framer-zsu8R .framer-1spd20m, .framer-zsu8R .framer-16qjw4b, .framer-zsu8R .framer-1rszne8, .framer-zsu8R .framer-rx20vu, .framer-zsu8R .framer-1ed4s8m, .framer-zsu8R .framer-18x41da, .framer-zsu8R .framer-12rmvbu, .framer-zsu8R .framer-3oinq3, .framer-zsu8R .framer-1tocjw7, .framer-zsu8R .framer-1urx5fb, .framer-zsu8R .framer-1yjh99d, .framer-zsu8R .framer-15sx3sv, .framer-zsu8R .framer-1j53vem, .framer-zsu8R .framer-1lhlpgq, .framer-zsu8R .framer-17x8vxm, .framer-zsu8R .framer-l7me05, .framer-zsu8R .framer-7rr01m, .framer-zsu8R .framer-1n3djqi, .framer-zsu8R .framer-se0b90, .framer-zsu8R .framer-pjjb9z, .framer-zsu8R .framer-1wedp89, .framer-zsu8R .framer-djjtu8, .framer-zsu8R .framer-d2gso, .framer-zsu8R .framer-1rtiuv4, .framer-zsu8R .framer-kue7tk, .framer-zsu8R .framer-1avhc6, .framer-zsu8R .framer-5sc2lf, .framer-zsu8R .framer-1yqy75l, .framer-zsu8R .framer-1sjt9tf, .framer-zsu8R .framer-2zyt3f, .framer-zsu8R .framer-45vfuf, .framer-zsu8R .framer-17lixsn { gap: 0px; } .framer-zsu8R .framer-1ictinb > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-zsu8R .framer-1ictinb > :first-child, .framer-zsu8R .framer-ojoshh > :first-child, .framer-zsu8R .framer-3l6xwu > :first-child, .framer-zsu8R .framer-18swtpq > :first-child, .framer-zsu8R .framer-1spd20m > :first-child, .framer-zsu8R .framer-16qjw4b > :first-child, .framer-zsu8R .framer-1rszne8 > :first-child, .framer-zsu8R .framer-rx20vu > :first-child, .framer-zsu8R .framer-1ed4s8m > :first-child, .framer-zsu8R .framer-18x41da > :first-child, .framer-zsu8R .framer-12rmvbu > :first-child, .framer-zsu8R .framer-3oinq3 > :first-child, .framer-zsu8R .framer-1tocjw7 > :first-child, .framer-zsu8R .framer-1urx5fb > :first-child, .framer-zsu8R .framer-1yjh99d > :first-child, .framer-zsu8R .framer-15sx3sv > :first-child, .framer-zsu8R .framer-1j53vem > :first-child, .framer-zsu8R .framer-1lhlpgq > :first-child, .framer-zsu8R .framer-17x8vxm > :first-child, .framer-zsu8R .framer-l7me05 > :first-child, .framer-zsu8R .framer-7rr01m > :first-child, .framer-zsu8R .framer-1n3djqi > :first-child, .framer-zsu8R .framer-se0b90 > :first-child, .framer-zsu8R .framer-pjjb9z > :first-child, .framer-zsu8R .framer-1wedp89 > :first-child, .framer-zsu8R .framer-djjtu8 > :first-child, .framer-zsu8R .framer-d2gso > :first-child, .framer-zsu8R .framer-1rtiuv4 > :first-child, .framer-zsu8R .framer-kue7tk > :first-child, .framer-zsu8R .framer-1avhc6 > :first-child, .framer-zsu8R .framer-5sc2lf > :first-child, .framer-zsu8R .framer-1yqy75l > :first-child, .framer-zsu8R .framer-1sjt9tf > :first-child, .framer-zsu8R .framer-2zyt3f > :first-child, .framer-zsu8R .framer-45vfuf > :first-child, .framer-zsu8R .framer-17lixsn > :first-child { margin-top: 0px; } .framer-zsu8R .framer-1ictinb > :last-child, .framer-zsu8R .framer-ojoshh > :last-child, .framer-zsu8R .framer-3l6xwu > :last-child, .framer-zsu8R .framer-18swtpq > :last-child, .framer-zsu8R .framer-1spd20m > :last-child, .framer-zsu8R .framer-16qjw4b > :last-child, .framer-zsu8R .framer-1rszne8 > :last-child, .framer-zsu8R .framer-rx20vu > :last-child, .framer-zsu8R .framer-1ed4s8m > :last-child, .framer-zsu8R .framer-18x41da > :last-child, .framer-zsu8R .framer-12rmvbu > :last-child, .framer-zsu8R .framer-3oinq3 > :last-child, .framer-zsu8R .framer-1tocjw7 > :last-child, .framer-zsu8R .framer-1urx5fb > :last-child, .framer-zsu8R .framer-1yjh99d > :last-child, .framer-zsu8R .framer-15sx3sv > :last-child, .framer-zsu8R .framer-1j53vem > :last-child, .framer-zsu8R .framer-1lhlpgq > :last-child, .framer-zsu8R .framer-17x8vxm > :last-child, .framer-zsu8R .framer-l7me05 > :last-child, .framer-zsu8R .framer-7rr01m > :last-child, .framer-zsu8R .framer-1n3djqi > :last-child, .framer-zsu8R .framer-se0b90 > :last-child, .framer-zsu8R .framer-pjjb9z > :last-child, .framer-zsu8R .framer-1wedp89 > :last-child, .framer-zsu8R .framer-djjtu8 > :last-child, .framer-zsu8R .framer-d2gso > :last-child, .framer-zsu8R .framer-1rtiuv4 > :last-child, .framer-zsu8R .framer-kue7tk > :last-child, .framer-zsu8R .framer-1avhc6 > :last-child, .framer-zsu8R .framer-5sc2lf > :last-child, .framer-zsu8R .framer-1yqy75l > :last-child, .framer-zsu8R .framer-1sjt9tf > :last-child, .framer-zsu8R .framer-2zyt3f > :last-child, .framer-zsu8R .framer-45vfuf > :last-child, .framer-zsu8R .framer-17lixsn > :last-child { margin-bottom: 0px; } .framer-zsu8R .framer-ojoshh > *, .framer-zsu8R .framer-3l6xwu > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-zsu8R .framer-18swtpq > *, .framer-zsu8R .framer-1lhlpgq > *, .framer-zsu8R .framer-1yqy75l > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-zsu8R .framer-1spd20m > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-zsu8R .framer-16qjw4b > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-zsu8R .framer-1rszne8 > *, .framer-zsu8R .framer-1j53vem > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-zsu8R .framer-rx20vu > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-zsu8R .framer-1ed4s8m > *, .framer-zsu8R .framer-18x41da > *, .framer-zsu8R .framer-1urx5fb > *, .framer-zsu8R .framer-l7me05 > *, .framer-zsu8R .framer-7rr01m > *, .framer-zsu8R .framer-1n3djqi > *, .framer-zsu8R .framer-se0b90 > *, .framer-zsu8R .framer-pjjb9z > *, .framer-zsu8R .framer-1wedp89 > *, .framer-zsu8R .framer-djjtu8 > *, .framer-zsu8R .framer-d2gso > *, .framer-zsu8R .framer-1rtiuv4 > *, .framer-zsu8R .framer-kue7tk > *, .framer-zsu8R .framer-1avhc6 > *, .framer-zsu8R .framer-5sc2lf > *, .framer-zsu8R .framer-1sjt9tf > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-zsu8R .framer-12rmvbu > *, .framer-zsu8R .framer-3oinq3 > *, .framer-zsu8R .framer-1tocjw7 > *, .framer-zsu8R .framer-1yjh99d > *, .framer-zsu8R .framer-15sx3sv > * { margin: 0px; margin-bottom: calc(22px / 2); margin-top: calc(22px / 2); } .framer-zsu8R .framer-17x8vxm > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-zsu8R .framer-2zyt3f > *, .framer-zsu8R .framer-45vfuf > *, .framer-zsu8R .framer-17lixsn > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }}`,
        `@media (min-width: 1920px) { .framer-zsu8R .hidden-41kc85 { display: none !important; } .${k.bodyClassName}-framer-zsu8R { background: rgb(255, 255, 255); } .framer-zsu8R.framer-8pznem { width: 1920px; } .framer-zsu8R .framer-3l6xwu { z-index: 1; } .framer-zsu8R .framer-1ed4s8m { height: 604px; } .framer-zsu8R .framer-bry7t, .framer-zsu8R .framer-18tbvoi { width: 1156px; } .framer-zsu8R .framer-1yt9fuk { height: var(--framer-aspect-ratio-supported, 665px); }}`,
        '.framer-zsu8R[data-border="true"]::after, .framer-zsu8R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    ],
    j = rr(Wr, Lr, 'framer-zsu8R'),
    $r = j;
j.displayName = 'Portfolio Dark Home';
j.defaultProps = { height: 8453.5, width: 1440 };
mr(
    j,
    [
        {
            explicitInter: !0,
            fonts: [
                {
                    family: 'Instrument Sans',
                    source: 'google',
                    style: 'normal',
                    url: 'https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSQi_gfwmS0v3_7Y.woff2',
                    weight: '700',
                },
                {
                    family: 'Instrument Sans',
                    source: 'google',
                    style: 'normal',
                    url: 'https://fonts.gstatic.com/s/instrumentsans/v1/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSQb_gfwmS0v3_7Y.woff2',
                    weight: '600',
                },
                {
                    family: 'Inter Tight',
                    source: 'google',
                    style: 'normal',
                    url: 'https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2',
                    weight: '500',
                },
                {
                    family: 'Inter Tight',
                    source: 'google',
                    style: 'normal',
                    url: 'https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqWSRToK8EPg.woff2',
                    weight: '700',
                },
            ],
        },
        ...wr,
        ...Rr,
        ...yr,
        ...vr,
        ...br,
        ..._r,
        ...Tr,
    ],
    { supportsExplicitInterCodegen: !0 }
);
var re = {
    exports: {
        Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
        default: {
            type: 'reactComponent',
            name: 'FrameraIxubhzMw',
            slots: [],
            annotations: {
                framerResponsiveScreen: '',
                framerContractVersion: '1',
                framerIntrinsicHeight: '8453.5',
                framerCanvasComponentVariantDetails:
                    '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Ssw7mXvCQ":{"layout":["fixed","auto"]},"b7UOhdrri":{"layout":["fixed","auto"]},"efinEt9Z3":{"layout":["fixed","auto"]}}}',
                framerImmutableVariables: 'true',
                framerComponentViewportWidth: 'true',
                framerIntrinsicWidth: '1440',
                framerDisplayContentsDiv: 'false',
            },
        },
        __FramerMetadata__: { type: 'variable' },
    },
};
export { re as __FramerMetadata__, $r as default };
//# sourceMappingURL=hZMnwWo1844dNHsryzxgbwr99ZgA5EoqNkibuojX3oc.F5SBW3VM.mjs.map
