import {
    H as w,
    J as c,
    L as r,
    M as b,
    Q as Y,
    V as R,
    X,
    _ as I,
    ca as v,
    e as o,
    fa as F,
    i as y,
    ma as k,
    ya as z,
} from './chunk-HX7BIDD5.mjs';
import { c as t } from './chunk-ELYU6EKT.mjs';
var W = 'default' in c ? w : c,
    p = {},
    E = W;
p.createRoot = E.createRoot;
p.hydrateRoot = E.hydrateRoot;
var x = p.createRoot,
    P = p.hydrateRoot;
t.__framer_importFromPackage = (e, s) => () => o(R, { error: 'Package component not supported: "' + s + '" in "' + e + '"' });
t.process = { ...t.process, env: { ...(t.process ? t.process.env : void 0), NODE_ENV: 'production' } };
X();
t.__framer_events = t.__framer_events || [];
function O() {
    t.__framer_events.push(arguments);
}
(async () => {
    let e = {
            aIxubhzMw: {
                elements: { F4XeT2ldw: 'about', IfBBZ5kQy: 'nav', puP_dlZnC: 'about-image' },
                page: r(() => import('./hZMnwWo1844dNHsryzxgbwr99ZgA5EoqNkibuojX3oc.F5SBW3VM.mjs')),
                path: '/',
            },
            IexgfYraa: {
                elements: { Ufc4DuaQz: 'nav' },
                page: r(() => import('./82jsdGAI6qXxPtnR2QIB3hso2EUYI7y701k6-n4frZo.43DZCR5I.mjs')),
                path: '/portfolio-light-contact',
            },
            gzbtZvbNt: {
                elements: { pS91u2lp0: 'nav' },
                page: r(() => import('./49W1Dj50kVNHKaocoOrqH8egrbIvXB3BrPLt7lLaXcw.MLCIHGMA.mjs')),
                path: '/portfolio-light-work',
            },
            b4hKsWPD1: {
                elements: { o7zAzlttD: 'nav' },
                page: r(() => import('./MoyK89B_lzOObAYYIGAjt6Z5lv0t22wtS_f6crj-8Zw.5KLGNO4H.mjs')),
                path: '/portfolio-light-photography',
            },
            x95mB7h17: {
                elements: { gcFb52Vmq: 'nav' },
                page: r(() => import('./0FG8E7sHRMXgQt-lj_wepr5LD6gNzUsgP3_z_rXhRFs.WOVACZDB.mjs')),
                path: '/portfolio-light-pricing',
            },
            KhM_ff1oP: {
                collectionId: 'nlLEDkRHt',
                elements: { CN1EukjAy: 'nav' },
                page: r(() => import('./4T7ow2upZwJ1H7-3EcwEluheEdn_iwyLBk1J3WbpRWU.B6WI3FL3.mjs')),
                path: '/work/:b2Rr5R0HL',
            },
        },
        s = { nlLEDkRHt: async () => (await import('./data-module.vHpWCznwQ5WFHqr3JPJhBJDuF-MbsyFckuGaGFnrwTc.AP2C54DD.mjs'))?.utils },
        u = [{ code: 'en', id: 'default', name: 'English', slug: '' }],
        D = r(() => import('./__framer-not-found-page.RQL3FEFU.mjs')),
        i = document.getElementById('main'),
        n,
        d,
        l,
        f,
        m = !1;
    if ('framerHydrateV2' in i.dataset) {
        let a = JSON.parse(i.dataset.framerHydrateV2);
        (n = a.routeId), (d = a.localeId), (l = a.pathVariables), (f = a.breakpoints), (m = !0);
    } else {
        let a = Y(e, decodeURIComponent(location.pathname), !0, u);
        (n = a.routeId), (d = a.localeId), (l = a.pathVariables);
    }
    let _ = await e[n].page.preload();
    e[n].page = _;
    let g = !0,
        M = o(k, {
            RootComponent: _,
            isWebsite: !0,
            routeId: n,
            pathVariables: l,
            routes: e,
            collectionUtils: s,
            notFoundPage: D,
            isReducedMotion: void 0,
            localeId: d,
            locales: u,
            preserveQueryParams: void 0,
            enableImproveInpDuringHydration: g,
            shouldMarkHydrationEnd: m,
        }),
        N = o(I, { children: M, value: { imgSizesWorkaroundEnabled: !1 } }),
        h = o(b, {
            children: N,
            value: {
                global: {
                    enter: {
                        opacity: 0,
                        rotate: 0,
                        rotate3d: !1,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        transition: {
                            damping: 30,
                            delay: 0,
                            duration: 0.1,
                            ease: [0.27, 0, 0.51, 1],
                            mass: 1,
                            stiffness: 400,
                            type: 'tween',
                        },
                        x: '0px',
                        y: '0px',
                    },
                },
                routes: {
                    aIxubhzMw: {
                        b4hKsWPD1: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        gzbtZvbNt: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        IexgfYraa: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        KhM_ff1oP: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        x95mB7h17: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                    b4hKsWPD1: {
                        aIxubhzMw: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        gzbtZvbNt: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        IexgfYraa: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        KhM_ff1oP: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        x95mB7h17: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                    gzbtZvbNt: {
                        aIxubhzMw: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        b4hKsWPD1: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        IexgfYraa: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        KhM_ff1oP: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        x95mB7h17: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                    IexgfYraa: {
                        aIxubhzMw: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        b4hKsWPD1: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        gzbtZvbNt: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        KhM_ff1oP: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        x95mB7h17: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                    KhM_ff1oP: {
                        aIxubhzMw: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        b4hKsWPD1: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        gzbtZvbNt: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        IexgfYraa: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        x95mB7h17: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                    x95mB7h17: {
                        aIxubhzMw: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        b4hKsWPD1: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        gzbtZvbNt: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        IexgfYraa: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                        KhM_ff1oP: {
                            enter: {
                                opacity: 0,
                                rotate: 0,
                                rotate3d: !1,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                transition: {
                                    damping: 30,
                                    delay: 0,
                                    duration: 0.1,
                                    ease: [0.27, 0, 0.51, 1],
                                    mass: 1,
                                    stiffness: 400,
                                    type: 'tween',
                                },
                                x: '0px',
                                y: '0px',
                            },
                        },
                    },
                },
            },
        });
    m
        ? (performance.mark('framer-rewrite-breakpoints-start'),
          z(f),
          t.__framer_onRewriteBreakpoints?.(f),
          performance.mark('framer-rewrite-breakpoints-end'),
          performance.measure('framer-rewrite-breakpoints', 'framer-rewrite-breakpoints-start', 'framer-rewrite-breakpoints-end'),
          y(() => {
              performance.mark('framer-hydration-start'), g && t.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(), P(i, h);
          }))
        : x(i).render(h);
})().catch((e) => {
    throw (
        (O('published_site_load_error', { message: String(e), stack: e instanceof Error && typeof e.stack == 'string' ? e.stack : null }),
        e)
    );
});
(async () => {
    let { default: e } = await import('./__framer-badge.XMBBPSTE.mjs'),
        s = v(F);
    y(() => {
        x(document.getElementById('__framer-badge-container')).render(
            o(
                s,
                {
                    className: '__framer-badge',
                    __framer__threshold: 0.5,
                    __framer__animateOnce: !0,
                    __framer__opacity: 0,
                    __framer__targetOpacity: 1,
                    __framer__rotate: 0,
                    __framer__x: 0,
                    __framer__y: 10,
                    __framer__scale: 1,
                    __framer__transition: {
                        type: 'spring',
                        ease: [0.44, 0, 0.56, 1],
                        duration: 0.3,
                        delay: 1,
                        stiffness: 350,
                        damping: 40,
                        mass: 1.5,
                    },
                    __framer__rotateX: 0,
                    __framer__rotateY: 0,
                    __framer__perspective: 1200,
                },
                o(e)
            )
        );
    });
})();
//# sourceMappingURL=default_script0.7YMJWFUK.mjs.map
