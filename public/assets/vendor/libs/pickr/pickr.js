!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var o = e();
        for (var n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
    }
})(self, function () {
    return (function () {
        var t = {
                9612: function (t) {
                    self,
                        (t.exports = (() => {
                            "use strict";
                            var t = {
                                    d: (e, o) => {
                                        for (var n in o)
                                            t.o(o, n) &&
                                                !t.o(e, n) &&
                                                Object.defineProperty(e, n, {
                                                    enumerable: !0,
                                                    get: o[n],
                                                });
                                    },
                                    o: (t, e) =>
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            e
                                        ),
                                    r: (t) => {
                                        "undefined" != typeof Symbol &&
                                            Symbol.toStringTag &&
                                            Object.defineProperty(
                                                t,
                                                Symbol.toStringTag,
                                                { value: "Module" }
                                            ),
                                            Object.defineProperty(
                                                t,
                                                "__esModule",
                                                { value: !0 }
                                            );
                                    },
                                },
                                e = {};
                            t.d(e, { default: () => O });
                            var o = {};
                            function n(t, e, o, n, i = {}) {
                                e instanceof HTMLCollection ||
                                e instanceof NodeList
                                    ? (e = Array.from(e))
                                    : Array.isArray(e) || (e = [e]),
                                    Array.isArray(o) || (o = [o]);
                                for (const r of e)
                                    for (const e of o)
                                        r[t](e, n, { capture: !1, ...i });
                                return Array.prototype.slice.call(arguments, 1);
                            }
                            t.r(o),
                                t.d(o, {
                                    adjustableInputNumbers: () => p,
                                    createElementFromString: () => s,
                                    createFromTemplate: () => a,
                                    eventPath: () => l,
                                    off: () => r,
                                    on: () => i,
                                    resolveElement: () => c,
                                });
                            const i = n.bind(null, "addEventListener"),
                                r = n.bind(null, "removeEventListener");
                            function s(t) {
                                const e = document.createElement("div");
                                return (
                                    (e.innerHTML = t.trim()),
                                    e.firstElementChild
                                );
                            }
                            function a(t) {
                                const e = (t, e) => {
                                        const o = t.getAttribute(e);
                                        return t.removeAttribute(e), o;
                                    },
                                    o = (t, n = {}) => {
                                        const i = e(t, ":obj"),
                                            r = e(t, ":ref"),
                                            s = i ? (n[i] = {}) : n;
                                        r && (n[r] = t);
                                        for (const n of Array.from(
                                            t.children
                                        )) {
                                            const t = e(n, ":arr"),
                                                i = o(n, t ? {} : s);
                                            t &&
                                                (s[t] || (s[t] = [])).push(
                                                    Object.keys(i).length
                                                        ? i
                                                        : n
                                                );
                                        }
                                        return n;
                                    };
                                return o(s(t));
                            }
                            function l(t) {
                                let e =
                                    t.path ||
                                    (t.composedPath && t.composedPath());
                                if (e) return e;
                                let o = t.target.parentElement;
                                for (e = [t.target, o]; (o = o.parentElement); )
                                    e.push(o);
                                return e.push(document, window), e;
                            }
                            function c(t) {
                                return t instanceof Element
                                    ? t
                                    : "string" == typeof t
                                    ? t
                                          .split(/>>/g)
                                          .reduce(
                                              (t, e, o, n) => (
                                                  (t = t.querySelector(e)),
                                                  o < n.length - 1
                                                      ? t.shadowRoot
                                                      : t
                                              ),
                                              document
                                          )
                                    : null;
                            }
                            function p(t, e = (t) => t) {
                                function o(o) {
                                    const n =
                                        [0.001, 0.01, 0.1][
                                            Number(o.shiftKey || 2 * o.ctrlKey)
                                        ] * (o.deltaY < 0 ? 1 : -1);
                                    let i = 0,
                                        r = t.selectionStart;
                                    (t.value = t.value.replace(
                                        /[\d.]+/g,
                                        (t, o) =>
                                            o <= r && o + t.length >= r
                                                ? ((r = o), e(Number(t), n, i))
                                                : (i++, t)
                                    )),
                                        t.focus(),
                                        t.setSelectionRange(r, r),
                                        o.preventDefault(),
                                        t.dispatchEvent(new Event("input"));
                                }
                                i(t, "focus", () =>
                                    i(window, "wheel", o, { passive: !1 })
                                ),
                                    i(t, "blur", () => r(window, "wheel", o));
                            }
                            const { min: u, max: h, floor: d, round: f } = Math;
                            function m(t, e, o) {
                                (e /= 100), (o /= 100);
                                const n = d((t = (t / 360) * 6)),
                                    i = t - n,
                                    r = o * (1 - e),
                                    s = o * (1 - i * e),
                                    a = o * (1 - (1 - i) * e),
                                    l = n % 6;
                                return [
                                    255 * [o, s, r, r, a, o][l],
                                    255 * [a, o, o, s, r, r][l],
                                    255 * [r, r, a, o, o, s][l],
                                ];
                            }
                            function v(t, e, o) {
                                const n = ((2 - (e /= 100)) * (o /= 100)) / 2;
                                return (
                                    0 !== n &&
                                        (e =
                                            1 === n
                                                ? 0
                                                : n < 0.5
                                                ? (e * o) / (2 * n)
                                                : (e * o) / (2 - 2 * n)),
                                    [t, 100 * e, 100 * n]
                                );
                            }
                            function b(t, e, o) {
                                const n = u((t /= 255), (e /= 255), (o /= 255)),
                                    i = h(t, e, o),
                                    r = i - n;
                                let s, a;
                                if (0 === r) s = a = 0;
                                else {
                                    a = r / i;
                                    const n = ((i - t) / 6 + r / 2) / r,
                                        l = ((i - e) / 6 + r / 2) / r,
                                        c = ((i - o) / 6 + r / 2) / r;
                                    t === i
                                        ? (s = c - l)
                                        : e === i
                                        ? (s = 1 / 3 + n - c)
                                        : o === i && (s = 2 / 3 + l - n),
                                        s < 0 ? (s += 1) : s > 1 && (s -= 1);
                                }
                                return [360 * s, 100 * a, 100 * i];
                            }
                            function y(t, e, o, n) {
                                return (
                                    (e /= 100),
                                    (o /= 100),
                                    [
                                        ...b(
                                            255 *
                                                (1 -
                                                    u(
                                                        1,
                                                        (t /= 100) *
                                                            (1 - (n /= 100)) +
                                                            n
                                                    )),
                                            255 * (1 - u(1, e * (1 - n) + n)),
                                            255 * (1 - u(1, o * (1 - n) + n))
                                        ),
                                    ]
                                );
                            }
                            function g(t, e, o) {
                                e /= 100;
                                const n =
                                        ((2 *
                                            (e *=
                                                (o /= 100) < 0.5 ? o : 1 - o)) /
                                            (o + e)) *
                                        100,
                                    i = 100 * (o + e);
                                return [t, isNaN(n) ? 0 : n, i];
                            }
                            function _(t) {
                                return b(
                                    ...t
                                        .match(/.{2}/g)
                                        .map((t) => parseInt(t, 16))
                                );
                            }
                            function w(t = 0, e = 0, o = 0, n = 1) {
                                const i =
                                        (t, e) =>
                                        (o = -1) =>
                                            e(
                                                ~o
                                                    ? t.map((t) =>
                                                          Number(t.toFixed(o))
                                                      )
                                                    : t
                                            ),
                                    r = {
                                        h: t,
                                        s: e,
                                        v: o,
                                        a: n,
                                        toHSVA() {
                                            const t = [r.h, r.s, r.v, r.a];
                                            return (
                                                (t.toString = i(
                                                    t,
                                                    (t) =>
                                                        `hsva(${t[0]}, ${t[1]}%, ${t[2]}%, ${r.a})`
                                                )),
                                                t
                                            );
                                        },
                                        toHSLA() {
                                            const t = [
                                                ...v(r.h, r.s, r.v),
                                                r.a,
                                            ];
                                            return (
                                                (t.toString = i(
                                                    t,
                                                    (t) =>
                                                        `hsla(${t[0]}, ${t[1]}%, ${t[2]}%, ${r.a})`
                                                )),
                                                t
                                            );
                                        },
                                        toRGBA() {
                                            const t = [
                                                ...m(r.h, r.s, r.v),
                                                r.a,
                                            ];
                                            return (
                                                (t.toString = i(
                                                    t,
                                                    (t) =>
                                                        `rgba(${t[0]}, ${t[1]}, ${t[2]}, ${r.a})`
                                                )),
                                                t
                                            );
                                        },
                                        toCMYK() {
                                            const t = (function (t, e, o) {
                                                const n = m(t, e, o),
                                                    i = n[0] / 255,
                                                    r = n[1] / 255,
                                                    s = n[2] / 255,
                                                    a = u(1 - i, 1 - r, 1 - s);
                                                return [
                                                    100 *
                                                        (1 === a
                                                            ? 0
                                                            : (1 - i - a) /
                                                              (1 - a)),
                                                    100 *
                                                        (1 === a
                                                            ? 0
                                                            : (1 - r - a) /
                                                              (1 - a)),
                                                    100 *
                                                        (1 === a
                                                            ? 0
                                                            : (1 - s - a) /
                                                              (1 - a)),
                                                    100 * a,
                                                ];
                                            })(r.h, r.s, r.v);
                                            return (
                                                (t.toString = i(
                                                    t,
                                                    (t) =>
                                                        `cmyk(${t[0]}%, ${t[1]}%, ${t[2]}%, ${t[3]}%)`
                                                )),
                                                t
                                            );
                                        },
                                        toHEXA() {
                                            const t = (function (t, e, o) {
                                                    return m(t, e, o).map((t) =>
                                                        f(t)
                                                            .toString(16)
                                                            .padStart(2, "0")
                                                    );
                                                })(r.h, r.s, r.v),
                                                e =
                                                    r.a >= 1
                                                        ? ""
                                                        : Number(
                                                              (
                                                                  255 * r.a
                                                              ).toFixed(0)
                                                          )
                                                              .toString(16)
                                                              .toUpperCase()
                                                              .padStart(2, "0");
                                            return (
                                                e && t.push(e),
                                                (t.toString = () =>
                                                    `#${t
                                                        .join("")
                                                        .toUpperCase()}`),
                                                t
                                            );
                                        },
                                        clone: () => w(r.h, r.s, r.v, r.a),
                                    };
                                return r;
                            }
                            const A = (t) => Math.max(Math.min(t, 1), 0);
                            function C(t) {
                                const e = {
                                        options: Object.assign(
                                            {
                                                lock: null,
                                                onchange: () => 0,
                                                onstop: () => 0,
                                            },
                                            t
                                        ),
                                        _keyboard(t) {
                                            const { options: o } = e,
                                                { type: n, key: i } = t;
                                            if (
                                                document.activeElement ===
                                                o.wrapper
                                            ) {
                                                const { lock: o } = e.options,
                                                    r = "ArrowUp" === i,
                                                    s = "ArrowRight" === i,
                                                    a = "ArrowDown" === i,
                                                    l = "ArrowLeft" === i;
                                                if (
                                                    "keydown" === n &&
                                                    (r || s || a || l)
                                                ) {
                                                    let n = 0,
                                                        i = 0;
                                                    "v" === o
                                                        ? (n = r || s ? 1 : -1)
                                                        : "h" === o
                                                        ? (n = r || s ? -1 : 1)
                                                        : ((i = r
                                                              ? -1
                                                              : a
                                                              ? 1
                                                              : 0),
                                                          (n = l
                                                              ? -1
                                                              : s
                                                              ? 1
                                                              : 0)),
                                                        e.update(
                                                            A(
                                                                e.cache.x +
                                                                    0.01 * n
                                                            ),
                                                            A(
                                                                e.cache.y +
                                                                    0.01 * i
                                                            )
                                                        ),
                                                        t.preventDefault();
                                                } else
                                                    i.startsWith("Arrow") &&
                                                        (e.options.onstop(),
                                                        t.preventDefault());
                                            }
                                        },
                                        _tapstart(t) {
                                            i(
                                                document,
                                                [
                                                    "mouseup",
                                                    "touchend",
                                                    "touchcancel",
                                                ],
                                                e._tapstop
                                            ),
                                                i(
                                                    document,
                                                    ["mousemove", "touchmove"],
                                                    e._tapmove
                                                ),
                                                t.cancelable &&
                                                    t.preventDefault(),
                                                e._tapmove(t);
                                        },
                                        _tapmove(t) {
                                            const { options: o, cache: n } = e,
                                                {
                                                    lock: i,
                                                    element: r,
                                                    wrapper: s,
                                                } = o,
                                                a = s.getBoundingClientRect();
                                            let l = 0,
                                                c = 0;
                                            if (t) {
                                                const e =
                                                    t &&
                                                    t.touches &&
                                                    t.touches[0];
                                                (l = t ? (e || t).clientX : 0),
                                                    (c = t
                                                        ? (e || t).clientY
                                                        : 0),
                                                    l < a.left
                                                        ? (l = a.left)
                                                        : l >
                                                              a.left +
                                                                  a.width &&
                                                          (l =
                                                              a.left + a.width),
                                                    c < a.top
                                                        ? (c = a.top)
                                                        : c >
                                                              a.top +
                                                                  a.height &&
                                                          (c =
                                                              a.top + a.height),
                                                    (l -= a.left),
                                                    (c -= a.top);
                                            } else
                                                n &&
                                                    ((l = n.x * a.width),
                                                    (c = n.y * a.height));
                                            "h" !== i &&
                                                (r.style.left = `calc(${
                                                    (l / a.width) * 100
                                                }% - ${r.offsetWidth / 2}px)`),
                                                "v" !== i &&
                                                    (r.style.top = `calc(${
                                                        (c / a.height) * 100
                                                    }% - ${
                                                        r.offsetHeight / 2
                                                    }px)`),
                                                (e.cache = {
                                                    x: l / a.width,
                                                    y: c / a.height,
                                                });
                                            const p = A(l / a.width),
                                                u = A(c / a.height);
                                            switch (i) {
                                                case "v":
                                                    return o.onchange(p);
                                                case "h":
                                                    return o.onchange(u);
                                                default:
                                                    return o.onchange(p, u);
                                            }
                                        },
                                        _tapstop() {
                                            e.options.onstop(),
                                                r(
                                                    document,
                                                    [
                                                        "mouseup",
                                                        "touchend",
                                                        "touchcancel",
                                                    ],
                                                    e._tapstop
                                                ),
                                                r(
                                                    document,
                                                    ["mousemove", "touchmove"],
                                                    e._tapmove
                                                );
                                        },
                                        trigger() {
                                            e._tapmove();
                                        },
                                        update(t = 0, o = 0) {
                                            const {
                                                left: n,
                                                top: i,
                                                width: r,
                                                height: s,
                                            } = e.options.wrapper.getBoundingClientRect();
                                            "h" === e.options.lock && (o = t),
                                                e._tapmove({
                                                    clientX: n + r * t,
                                                    clientY: i + s * o,
                                                });
                                        },
                                        destroy() {
                                            const {
                                                options: t,
                                                _tapstart: o,
                                                _keyboard: n,
                                            } = e;
                                            r(
                                                document,
                                                ["keydown", "keyup"],
                                                n
                                            ),
                                                r(
                                                    [t.wrapper, t.element],
                                                    "mousedown",
                                                    o
                                                ),
                                                r(
                                                    [t.wrapper, t.element],
                                                    "touchstart",
                                                    o,
                                                    { passive: !1 }
                                                );
                                        },
                                    },
                                    {
                                        options: o,
                                        _tapstart: n,
                                        _keyboard: s,
                                    } = e;
                                return (
                                    i([o.wrapper, o.element], "mousedown", n),
                                    i([o.wrapper, o.element], "touchstart", n, {
                                        passive: !1,
                                    }),
                                    i(document, ["keydown", "keyup"], s),
                                    e
                                );
                            }
                            function $(t = {}) {
                                t = Object.assign(
                                    {
                                        onchange: () => 0,
                                        className: "",
                                        elements: [],
                                    },
                                    t
                                );
                                const e = i(t.elements, "click", (e) => {
                                    t.elements.forEach((o) =>
                                        o.classList[
                                            e.target === o ? "add" : "remove"
                                        ](t.className)
                                    ),
                                        t.onchange(e),
                                        e.stopPropagation();
                                });
                                return { destroy: () => r(...e) };
                            }
                            const k = {
                                variantFlipOrder: {
                                    start: "sme",
                                    middle: "mse",
                                    end: "ems",
                                },
                                positionFlipOrder: {
                                    top: "tbrl",
                                    right: "rltb",
                                    bottom: "btrl",
                                    left: "lrbt",
                                },
                                position: "bottom",
                                margin: 8,
                            };
                            function S(t, e, o) {
                                return (
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: o,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = o),
                                    t
                                );
                            }
                            class O {
                                constructor(t) {
                                    S(this, "_initializingActive", !0),
                                        S(this, "_recalc", !0),
                                        S(this, "_nanopop", null),
                                        S(this, "_root", null),
                                        S(this, "_color", w()),
                                        S(this, "_lastColor", w()),
                                        S(this, "_swatchColors", []),
                                        S(this, "_setupAnimationFrame", null),
                                        S(this, "_eventListener", {
                                            init: [],
                                            save: [],
                                            hide: [],
                                            show: [],
                                            clear: [],
                                            change: [],
                                            changestop: [],
                                            cancel: [],
                                            swatchselect: [],
                                        }),
                                        (this.options = t =
                                            Object.assign(
                                                { ...O.DEFAULT_OPTIONS },
                                                t
                                            ));
                                    const {
                                        swatches: e,
                                        components: o,
                                        theme: n,
                                        sliders: i,
                                        lockOpacity: r,
                                        padding: s,
                                    } = t;
                                    ["nano", "monolith"].includes(n) &&
                                        !i &&
                                        (t.sliders = "h"),
                                        o.interaction || (o.interaction = {});
                                    const {
                                        preview: a,
                                        opacity: l,
                                        hue: c,
                                        palette: p,
                                    } = o;
                                    (o.opacity = !r && l),
                                        (o.palette = p || a || l || c),
                                        this._preBuild(),
                                        this._buildComponents(),
                                        this._bindEvents(),
                                        this._finalBuild(),
                                        e &&
                                            e.length &&
                                            e.forEach((t) => this.addSwatch(t));
                                    const { button: u, app: h } = this._root;
                                    (this._nanopop = ((t, e, o) => {
                                        const n =
                                            "object" != typeof t ||
                                            t instanceof HTMLElement
                                                ? {
                                                      reference: t,
                                                      popper: e,
                                                      ...o,
                                                  }
                                                : t;
                                        return {
                                            update(t = n) {
                                                const {
                                                    reference: e,
                                                    popper: o,
                                                } = Object.assign(n, t);
                                                if (!o || !e)
                                                    throw new Error(
                                                        "Popper- or reference-element missing."
                                                    );
                                                return ((t, e, o) => {
                                                    const {
                                                            container: n,
                                                            margin: i,
                                                            position: r,
                                                            variantFlipOrder: s,
                                                            positionFlipOrder:
                                                                a,
                                                        } = {
                                                            container:
                                                                document.documentElement.getBoundingClientRect(),
                                                            ...k,
                                                            ...o,
                                                        },
                                                        { left: l, top: c } =
                                                            e.style;
                                                    (e.style.left = "0"),
                                                        (e.style.top = "0");
                                                    const p =
                                                            t.getBoundingClientRect(),
                                                        u =
                                                            e.getBoundingClientRect(),
                                                        h = {
                                                            t:
                                                                p.top -
                                                                u.height -
                                                                i,
                                                            b: p.bottom + i,
                                                            r: p.right + i,
                                                            l:
                                                                p.left -
                                                                u.width -
                                                                i,
                                                        },
                                                        d = {
                                                            vs: p.left,
                                                            vm:
                                                                p.left +
                                                                p.width / 2 +
                                                                -u.width / 2,
                                                            ve:
                                                                p.left +
                                                                p.width -
                                                                u.width,
                                                            hs: p.top,
                                                            hm:
                                                                p.bottom -
                                                                p.height / 2 -
                                                                u.height / 2,
                                                            he:
                                                                p.bottom -
                                                                u.height,
                                                        },
                                                        [f, m = "middle"] =
                                                            r.split("-"),
                                                        v = a[f],
                                                        b = s[m],
                                                        {
                                                            top: y,
                                                            left: g,
                                                            bottom: _,
                                                            right: w,
                                                        } = n;
                                                    for (const t of v) {
                                                        const o =
                                                                "t" === t ||
                                                                "b" === t,
                                                            n = h[t],
                                                            [i, r] = o
                                                                ? [
                                                                      "top",
                                                                      "left",
                                                                  ]
                                                                : [
                                                                      "left",
                                                                      "top",
                                                                  ],
                                                            [s, a] = o
                                                                ? [
                                                                      u.height,
                                                                      u.width,
                                                                  ]
                                                                : [
                                                                      u.width,
                                                                      u.height,
                                                                  ],
                                                            [l, c] = o
                                                                ? [_, w]
                                                                : [w, _],
                                                            [p, f] = o
                                                                ? [y, g]
                                                                : [g, y];
                                                        if (
                                                            !(
                                                                n < p ||
                                                                n + s > l
                                                            )
                                                        )
                                                            for (const s of b) {
                                                                const l =
                                                                    d[
                                                                        (o
                                                                            ? "v"
                                                                            : "h") +
                                                                            s
                                                                    ];
                                                                if (
                                                                    !(
                                                                        l < f ||
                                                                        l + a >
                                                                            c
                                                                    )
                                                                )
                                                                    return (
                                                                        (e.style[
                                                                            r
                                                                        ] =
                                                                            l -
                                                                            u[
                                                                                r
                                                                            ] +
                                                                            "px"),
                                                                        (e.style[
                                                                            i
                                                                        ] =
                                                                            n -
                                                                            u[
                                                                                i
                                                                            ] +
                                                                            "px"),
                                                                        t + s
                                                                    );
                                                            }
                                                    }
                                                    return (
                                                        (e.style.left = l),
                                                        (e.style.top = c),
                                                        null
                                                    );
                                                })(e, o, n);
                                            },
                                        };
                                    })(u, h, { margin: s })),
                                        u.setAttribute("role", "button"),
                                        u.setAttribute(
                                            "aria-label",
                                            this._t("btn:toggle")
                                        );
                                    const d = this;
                                    this._setupAnimationFrame =
                                        requestAnimationFrame(function e() {
                                            if (!h.offsetWidth)
                                                return requestAnimationFrame(e);
                                            d.setColor(t.default),
                                                d._rePositioningPicker(),
                                                t.defaultRepresentation &&
                                                    ((d._representation =
                                                        t.defaultRepresentation),
                                                    d.setColorRepresentation(
                                                        d._representation
                                                    )),
                                                t.showAlways && d.show(),
                                                (d._initializingActive = !1),
                                                d._emit("init");
                                        });
                                }
                                _preBuild() {
                                    const { options: t } = this;
                                    for (const e of ["el", "container"])
                                        t[e] = c(t[e]);
                                    (this._root = ((t) => {
                                        const {
                                                components: e,
                                                useAsButton: o,
                                                inline: n,
                                                appClass: i,
                                                theme: r,
                                                lockOpacity: s,
                                            } = t.options,
                                            l = (t) =>
                                                t
                                                    ? ""
                                                    : 'style="display:none" hidden',
                                            c = (e) => t._t(e),
                                            p = a(
                                                `\n      <div :ref="root" class="pickr">\n\n        ${
                                                    o
                                                        ? ""
                                                        : '<button type="button" :ref="button" class="pcr-button"></button>'
                                                }\n\n        <div :ref="app" class="pcr-app ${
                                                    i || ""
                                                }" data-theme="${r}" ${
                                                    n
                                                        ? 'style="position: unset"'
                                                        : ""
                                                } aria-label="${c(
                                                    "ui:dialog"
                                                )}" role="window">\n          <div class="pcr-selection" ${l(
                                                    e.palette
                                                )}>\n            <div :obj="preview" class="pcr-color-preview" ${l(
                                                    e.preview
                                                )}>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${c(
                                                    "btn:last-color"
                                                )}"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${c(
                                                    "aria:palette"
                                                )}" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ${l(
                                                    e.hue
                                                )}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${c(
                                                    "aria:hue"
                                                )}" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ${l(
                                                    e.opacity
                                                )}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${c(
                                                    "aria:opacity"
                                                )}" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ${
                                                    e.palette ? "" : "pcr-last"
                                                }" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ${l(
                                                    Object.keys(e.interaction)
                                                        .length
                                                )}>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${l(
                                                    e.interaction.input
                                                )} aria-label="${c(
                                                    "aria:input"
                                                )}">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="${
                                                    s ? "HEX" : "HEXA"
                                                }" type="button" ${l(
                                                    e.interaction.hex
                                                )}>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="${
                                                    s ? "RGB" : "RGBA"
                                                }" type="button" ${l(
                                                    e.interaction.rgba
                                                )}>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="${
                                                    s ? "HSL" : "HSLA"
                                                }" type="button" ${l(
                                                    e.interaction.hsla
                                                )}>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="${
                                                    s ? "HSV" : "HSVA"
                                                }" type="button" ${l(
                                                    e.interaction.hsva
                                                )}>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${l(
                                                    e.interaction.cmyk
                                                )}>\n\n            <input :ref="save" class="pcr-save" value="${c(
                                                    "btn:save"
                                                )}" type="button" ${l(
                                                    e.interaction.save
                                                )} aria-label="${c(
                                                    "aria:btn:save"
                                                )}">\n            <input :ref="cancel" class="pcr-cancel" value="${c(
                                                    "btn:cancel"
                                                )}" type="button" ${l(
                                                    e.interaction.cancel
                                                )} aria-label="${c(
                                                    "aria:btn:cancel"
                                                )}">\n            <input :ref="clear" class="pcr-clear" value="${c(
                                                    "btn:clear"
                                                )}" type="button" ${l(
                                                    e.interaction.clear
                                                )} aria-label="${c(
                                                    "aria:btn:clear"
                                                )}">\n          </div>\n        </div>\n      </div>\n    `
                                            ),
                                            u = p.interaction;
                                        return (
                                            u.options.find(
                                                (t) =>
                                                    !t.hidden &&
                                                    !t.classList.add("active")
                                            ),
                                            (u.type = () =>
                                                u.options.find((t) =>
                                                    t.classList.contains(
                                                        "active"
                                                    )
                                                )),
                                            p
                                        );
                                    })(this)),
                                        t.useAsButton &&
                                            (this._root.button = t.el),
                                        t.container.appendChild(
                                            this._root.root
                                        );
                                }
                                _finalBuild() {
                                    const t = this.options,
                                        e = this._root;
                                    if (
                                        (t.container.removeChild(e.root),
                                        t.inline)
                                    ) {
                                        const o = t.el.parentElement;
                                        t.el.nextSibling
                                            ? o.insertBefore(
                                                  e.app,
                                                  t.el.nextSibling
                                              )
                                            : o.appendChild(e.app);
                                    } else t.container.appendChild(e.app);
                                    t.useAsButton
                                        ? t.inline && t.el.remove()
                                        : t.el.parentNode.replaceChild(
                                              e.root,
                                              t.el
                                          ),
                                        t.disabled && this.disable(),
                                        t.comparison ||
                                            ((e.button.style.transition =
                                                "none"),
                                            t.useAsButton ||
                                                (e.preview.lastColor.style.transition =
                                                    "none")),
                                        this.hide();
                                }
                                _buildComponents() {
                                    const t = this,
                                        e = this.options.components,
                                        o = (t.options.sliders || "v").repeat(
                                            2
                                        ),
                                        [n, i] = o.match(/^[vh]+$/g) ? o : [],
                                        r = () =>
                                            this._color ||
                                            (this._color =
                                                this._lastColor.clone()),
                                        s = {
                                            palette: C({
                                                element: t._root.palette.picker,
                                                wrapper:
                                                    t._root.palette.palette,
                                                onstop: () =>
                                                    t._emit(
                                                        "changestop",
                                                        "slider",
                                                        t
                                                    ),
                                                onchange(o, n) {
                                                    if (!e.palette) return;
                                                    const i = r(),
                                                        {
                                                            _root: s,
                                                            options: a,
                                                        } = t,
                                                        {
                                                            lastColor: l,
                                                            currentColor: c,
                                                        } = s.preview;
                                                    t._recalc &&
                                                        ((i.s = 100 * o),
                                                        (i.v = 100 - 100 * n),
                                                        i.v < 0 && (i.v = 0),
                                                        t._updateOutput(
                                                            "slider"
                                                        ));
                                                    const p = i
                                                        .toRGBA()
                                                        .toString(0);
                                                    (this.element.style.background =
                                                        p),
                                                        (this.wrapper.style.background = `\n                        linear-gradient(to top, rgba(0, 0, 0, ${i.a}), transparent),\n                        linear-gradient(to left, hsla(${i.h}, 100%, 50%, ${i.a}), rgba(255, 255, 255, ${i.a}))\n                    `),
                                                        a.comparison
                                                            ? a.useAsButton ||
                                                              t._lastColor ||
                                                              l.style.setProperty(
                                                                  "--pcr-color",
                                                                  p
                                                              )
                                                            : (s.button.style.setProperty(
                                                                  "--pcr-color",
                                                                  p
                                                              ),
                                                              s.button.classList.remove(
                                                                  "clear"
                                                              ));
                                                    const u = i
                                                        .toHEXA()
                                                        .toString();
                                                    for (const {
                                                        el: e,
                                                        color: o,
                                                    } of t._swatchColors)
                                                        e.classList[
                                                            u ===
                                                            o
                                                                .toHEXA()
                                                                .toString()
                                                                ? "add"
                                                                : "remove"
                                                        ]("pcr-active");
                                                    c.style.setProperty(
                                                        "--pcr-color",
                                                        p
                                                    );
                                                },
                                            }),
                                            hue: C({
                                                lock: "v" === i ? "h" : "v",
                                                element: t._root.hue.picker,
                                                wrapper: t._root.hue.slider,
                                                onstop: () =>
                                                    t._emit(
                                                        "changestop",
                                                        "slider",
                                                        t
                                                    ),
                                                onchange(o) {
                                                    if (!e.hue || !e.palette)
                                                        return;
                                                    const n = r();
                                                    t._recalc &&
                                                        (n.h = 360 * o),
                                                        (this.element.style.backgroundColor = `hsl(${n.h}, 100%, 50%)`),
                                                        s.palette.trigger();
                                                },
                                            }),
                                            opacity: C({
                                                lock: "v" === n ? "h" : "v",
                                                element: t._root.opacity.picker,
                                                wrapper: t._root.opacity.slider,
                                                onstop: () =>
                                                    t._emit(
                                                        "changestop",
                                                        "slider",
                                                        t
                                                    ),
                                                onchange(o) {
                                                    if (
                                                        !e.opacity ||
                                                        !e.palette
                                                    )
                                                        return;
                                                    const n = r();
                                                    t._recalc &&
                                                        (n.a =
                                                            Math.round(
                                                                100 * o
                                                            ) / 100),
                                                        (this.element.style.background = `rgba(0, 0, 0, ${n.a})`),
                                                        s.palette.trigger();
                                                },
                                            }),
                                            selectable: $({
                                                elements:
                                                    t._root.interaction.options,
                                                className: "active",
                                                onchange(e) {
                                                    (t._representation =
                                                        e.target
                                                            .getAttribute(
                                                                "data-type"
                                                            )
                                                            .toUpperCase()),
                                                        t._recalc &&
                                                            t._updateOutput(
                                                                "swatch"
                                                            );
                                                },
                                            }),
                                        };
                                    this._components = s;
                                }
                                _bindEvents() {
                                    const { _root: t, options: e } = this,
                                        o = [
                                            i(
                                                t.interaction.clear,
                                                "click",
                                                () => this._clearColor()
                                            ),
                                            i(
                                                [
                                                    t.interaction.cancel,
                                                    t.preview.lastColor,
                                                ],
                                                "click",
                                                () => {
                                                    this.setHSVA(
                                                        ...(
                                                            this._lastColor ||
                                                            this._color
                                                        ).toHSVA(),
                                                        !0
                                                    ),
                                                        this._emit("cancel");
                                                }
                                            ),
                                            i(
                                                t.interaction.save,
                                                "click",
                                                () => {
                                                    !this.applyColor() &&
                                                        !e.showAlways &&
                                                        this.hide();
                                                }
                                            ),
                                            i(
                                                t.interaction.result,
                                                ["keyup", "input"],
                                                (t) => {
                                                    this.setColor(
                                                        t.target.value,
                                                        !0
                                                    ) &&
                                                        !this
                                                            ._initializingActive &&
                                                        (this._emit(
                                                            "change",
                                                            this._color,
                                                            "input",
                                                            this
                                                        ),
                                                        this._emit(
                                                            "changestop",
                                                            "input",
                                                            this
                                                        )),
                                                        t.stopImmediatePropagation();
                                                }
                                            ),
                                            i(
                                                t.interaction.result,
                                                ["focus", "blur"],
                                                (t) => {
                                                    (this._recalc =
                                                        "blur" === t.type),
                                                        this._recalc &&
                                                            this._updateOutput(
                                                                null
                                                            );
                                                }
                                            ),
                                            i(
                                                [
                                                    t.palette.palette,
                                                    t.palette.picker,
                                                    t.hue.slider,
                                                    t.hue.picker,
                                                    t.opacity.slider,
                                                    t.opacity.picker,
                                                ],
                                                ["mousedown", "touchstart"],
                                                () => (this._recalc = !0),
                                                { passive: !0 }
                                            ),
                                        ];
                                    if (!e.showAlways) {
                                        const n = e.closeWithKey;
                                        o.push(
                                            i(t.button, "click", () =>
                                                this.isOpen()
                                                    ? this.hide()
                                                    : this.show()
                                            ),
                                            i(
                                                document,
                                                "keyup",
                                                (t) =>
                                                    this.isOpen() &&
                                                    (t.key === n ||
                                                        t.code === n) &&
                                                    this.hide()
                                            ),
                                            i(
                                                document,
                                                ["touchstart", "mousedown"],
                                                (e) => {
                                                    this.isOpen() &&
                                                        !l(e).some(
                                                            (e) =>
                                                                e === t.app ||
                                                                e === t.button
                                                        ) &&
                                                        this.hide();
                                                },
                                                { capture: !0 }
                                            )
                                        );
                                    }
                                    if (e.adjustableNumbers) {
                                        const e = {
                                            rgba: [255, 255, 255, 1],
                                            hsva: [360, 100, 100, 1],
                                            hsla: [360, 100, 100, 1],
                                            cmyk: [100, 100, 100, 100],
                                        };
                                        p(t.interaction.result, (t, o, n) => {
                                            const i =
                                                e[
                                                    this.getColorRepresentation().toLowerCase()
                                                ];
                                            if (i) {
                                                const e = i[n],
                                                    r =
                                                        t +
                                                        (e >= 100
                                                            ? 1e3 * o
                                                            : o);
                                                return r <= 0
                                                    ? 0
                                                    : Number(
                                                          (r < e
                                                              ? r
                                                              : e
                                                          ).toPrecision(3)
                                                      );
                                            }
                                            return t;
                                        });
                                    }
                                    if (e.autoReposition && !e.inline) {
                                        let t = null;
                                        const n = this;
                                        o.push(
                                            i(
                                                window,
                                                ["scroll", "resize"],
                                                () => {
                                                    n.isOpen() &&
                                                        (e.closeOnScroll &&
                                                            n.hide(),
                                                        null === t
                                                            ? ((t = setTimeout(
                                                                  () =>
                                                                      (t =
                                                                          null),
                                                                  100
                                                              )),
                                                              requestAnimationFrame(
                                                                  function e() {
                                                                      n._rePositioningPicker(),
                                                                          null !==
                                                                              t &&
                                                                              requestAnimationFrame(
                                                                                  e
                                                                              );
                                                                  }
                                                              ))
                                                            : (clearTimeout(t),
                                                              (t = setTimeout(
                                                                  () =>
                                                                      (t =
                                                                          null),
                                                                  100
                                                              ))));
                                                },
                                                { capture: !0 }
                                            )
                                        );
                                    }
                                    this._eventBindings = o;
                                }
                                _rePositioningPicker() {
                                    const { options: t } = this;
                                    if (
                                        !t.inline &&
                                        !this._nanopop.update({
                                            container:
                                                document.body.getBoundingClientRect(),
                                            position: t.position,
                                        })
                                    ) {
                                        const t = this._root.app,
                                            e = t.getBoundingClientRect();
                                        (t.style.top =
                                            (window.innerHeight - e.height) /
                                                2 +
                                            "px"),
                                            (t.style.left =
                                                (window.innerWidth - e.width) /
                                                    2 +
                                                "px");
                                    }
                                }
                                _updateOutput(t) {
                                    const {
                                        _root: e,
                                        _color: o,
                                        options: n,
                                    } = this;
                                    if (e.interaction.type()) {
                                        const t = `to${e.interaction
                                            .type()
                                            .getAttribute("data-type")}`;
                                        e.interaction.result.value =
                                            "function" == typeof o[t]
                                                ? o[t]().toString(
                                                      n.outputPrecision
                                                  )
                                                : "";
                                    }
                                    !this._initializingActive &&
                                        this._recalc &&
                                        this._emit("change", o, t, this);
                                }
                                _clearColor(t = !1) {
                                    const { _root: e, options: o } = this;
                                    o.useAsButton ||
                                        e.button.style.setProperty(
                                            "--pcr-color",
                                            "rgba(0, 0, 0, 0.15)"
                                        ),
                                        e.button.classList.add("clear"),
                                        o.showAlways || this.hide(),
                                        (this._lastColor = null),
                                        this._initializingActive ||
                                            t ||
                                            (this._emit("save", null),
                                            this._emit("clear"));
                                }
                                _parseLocalColor(t) {
                                    const {
                                            values: e,
                                            type: o,
                                            a: n,
                                        } = (function (t) {
                                            t = t.match(/^[a-zA-Z]+$/)
                                                ? (function (t) {
                                                      if (
                                                          "black" ===
                                                          t.toLowerCase()
                                                      )
                                                          return "#000";
                                                      const e = document
                                                          .createElement(
                                                              "canvas"
                                                          )
                                                          .getContext("2d");
                                                      return (
                                                          (e.fillStyle = t),
                                                          "#000" === e.fillStyle
                                                              ? null
                                                              : e.fillStyle
                                                      );
                                                  })(t)
                                                : t;
                                            const e = {
                                                    cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
                                                    rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                                                    hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                                                    hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                                                    hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
                                                },
                                                o = (t) =>
                                                    t.map((t) =>
                                                        /^(|\d+)\.\d+|\d+$/.test(
                                                            t
                                                        )
                                                            ? Number(t)
                                                            : void 0
                                                    );
                                            let n;
                                            t: for (const i in e) {
                                                if (!(n = e[i].exec(t)))
                                                    continue;
                                                const r = (t) =>
                                                    !!n[2] ==
                                                    ("number" == typeof t);
                                                switch (i) {
                                                    case "cmyk": {
                                                        const [, t, e, r, s] =
                                                            o(n);
                                                        if (
                                                            t > 100 ||
                                                            e > 100 ||
                                                            r > 100 ||
                                                            s > 100
                                                        )
                                                            break t;
                                                        return {
                                                            values: y(
                                                                t,
                                                                e,
                                                                r,
                                                                s
                                                            ),
                                                            type: i,
                                                        };
                                                    }
                                                    case "rgba": {
                                                        const [
                                                            ,
                                                            ,
                                                            ,
                                                            t,
                                                            e,
                                                            s,
                                                            a,
                                                        ] = o(n);
                                                        if (
                                                            t > 255 ||
                                                            e > 255 ||
                                                            s > 255 ||
                                                            a < 0 ||
                                                            a > 1 ||
                                                            !r(a)
                                                        )
                                                            break t;
                                                        return {
                                                            values: [
                                                                ...b(t, e, s),
                                                                a,
                                                            ],
                                                            a: a,
                                                            type: i,
                                                        };
                                                    }
                                                    case "hexa": {
                                                        let [, t] = n;
                                                        (4 !== t.length &&
                                                            3 !== t.length) ||
                                                            (t = t
                                                                .split("")
                                                                .map(
                                                                    (t) => t + t
                                                                )
                                                                .join(""));
                                                        const e = t.substring(
                                                            0,
                                                            6
                                                        );
                                                        let o = t.substring(6);
                                                        return (
                                                            (o = o
                                                                ? parseInt(
                                                                      o,
                                                                      16
                                                                  ) / 255
                                                                : void 0),
                                                            {
                                                                values: [
                                                                    ..._(e),
                                                                    o,
                                                                ],
                                                                a: o,
                                                                type: i,
                                                            }
                                                        );
                                                    }
                                                    case "hsla": {
                                                        const [
                                                            ,
                                                            ,
                                                            ,
                                                            t,
                                                            e,
                                                            s,
                                                            a,
                                                        ] = o(n);
                                                        if (
                                                            t > 360 ||
                                                            e > 100 ||
                                                            s > 100 ||
                                                            a < 0 ||
                                                            a > 1 ||
                                                            !r(a)
                                                        )
                                                            break t;
                                                        return {
                                                            values: [
                                                                ...g(t, e, s),
                                                                a,
                                                            ],
                                                            a: a,
                                                            type: i,
                                                        };
                                                    }
                                                    case "hsva": {
                                                        const [
                                                            ,
                                                            ,
                                                            ,
                                                            t,
                                                            e,
                                                            s,
                                                            a,
                                                        ] = o(n);
                                                        if (
                                                            t > 360 ||
                                                            e > 100 ||
                                                            s > 100 ||
                                                            a < 0 ||
                                                            a > 1 ||
                                                            !r(a)
                                                        )
                                                            break t;
                                                        return {
                                                            values: [
                                                                t,
                                                                e,
                                                                s,
                                                                a,
                                                            ],
                                                            a: a,
                                                            type: i,
                                                        };
                                                    }
                                                }
                                            }
                                            return { values: null, type: null };
                                        })(t),
                                        { lockOpacity: i } = this.options,
                                        r = void 0 !== n && 1 !== n;
                                    return (
                                        e && 3 === e.length && (e[3] = void 0),
                                        {
                                            values: !e || (i && r) ? null : e,
                                            type: o,
                                        }
                                    );
                                }
                                _t(t) {
                                    return (
                                        this.options.i18n[t] ||
                                        O.I18N_DEFAULTS[t]
                                    );
                                }
                                _emit(t, ...e) {
                                    this._eventListener[t].forEach((t) =>
                                        t(...e, this)
                                    );
                                }
                                on(t, e) {
                                    return this._eventListener[t].push(e), this;
                                }
                                off(t, e) {
                                    const o = this._eventListener[t] || [],
                                        n = o.indexOf(e);
                                    return ~n && o.splice(n, 1), this;
                                }
                                addSwatch(t) {
                                    const { values: e } =
                                        this._parseLocalColor(t);
                                    if (e) {
                                        const { _swatchColors: t, _root: o } =
                                                this,
                                            n = w(...e),
                                            r = s(
                                                `<button type="button" style="--pcr-color: ${n
                                                    .toRGBA()
                                                    .toString(
                                                        0
                                                    )}" aria-label="${this._t(
                                                    "btn:swatch"
                                                )}"/>`
                                            );
                                        return (
                                            o.swatches.appendChild(r),
                                            t.push({ el: r, color: n }),
                                            this._eventBindings.push(
                                                i(r, "click", () => {
                                                    this.setHSVA(
                                                        ...n.toHSVA(),
                                                        !0
                                                    ),
                                                        this._emit(
                                                            "swatchselect",
                                                            n
                                                        ),
                                                        this._emit(
                                                            "change",
                                                            n,
                                                            "swatch",
                                                            this
                                                        );
                                                })
                                            ),
                                            !0
                                        );
                                    }
                                    return !1;
                                }
                                removeSwatch(t) {
                                    const e = this._swatchColors[t];
                                    if (e) {
                                        const { el: o } = e;
                                        return (
                                            this._root.swatches.removeChild(o),
                                            this._swatchColors.splice(t, 1),
                                            !0
                                        );
                                    }
                                    return !1;
                                }
                                applyColor(t = !1) {
                                    const { preview: e, button: o } =
                                            this._root,
                                        n = this._color.toRGBA().toString(0);
                                    return (
                                        e.lastColor.style.setProperty(
                                            "--pcr-color",
                                            n
                                        ),
                                        this.options.useAsButton ||
                                            o.style.setProperty(
                                                "--pcr-color",
                                                n
                                            ),
                                        o.classList.remove("clear"),
                                        (this._lastColor = this._color.clone()),
                                        this._initializingActive ||
                                            t ||
                                            this._emit("save", this._color),
                                        this
                                    );
                                }
                                destroy() {
                                    cancelAnimationFrame(
                                        this._setupAnimationFrame
                                    ),
                                        this._eventBindings.forEach((t) =>
                                            r(...t)
                                        ),
                                        Object.keys(this._components).forEach(
                                            (t) => this._components[t].destroy()
                                        );
                                }
                                destroyAndRemove() {
                                    this.destroy();
                                    const { root: t, app: e } = this._root;
                                    t.parentElement &&
                                        t.parentElement.removeChild(t),
                                        e.parentElement.removeChild(e),
                                        Object.keys(this).forEach(
                                            (t) => (this[t] = null)
                                        );
                                }
                                hide() {
                                    return (
                                        !!this.isOpen() &&
                                        (this._root.app.classList.remove(
                                            "visible"
                                        ),
                                        this._emit("hide"),
                                        !0)
                                    );
                                }
                                show() {
                                    return (
                                        !this.options.disabled &&
                                        !this.isOpen() &&
                                        (this._root.app.classList.add(
                                            "visible"
                                        ),
                                        this._rePositioningPicker(),
                                        this._emit("show", this._color),
                                        this)
                                    );
                                }
                                isOpen() {
                                    return this._root.app.classList.contains(
                                        "visible"
                                    );
                                }
                                setHSVA(t = 360, e = 0, o = 0, n = 1, i = !1) {
                                    const r = this._recalc;
                                    if (
                                        ((this._recalc = !1),
                                        t < 0 ||
                                            t > 360 ||
                                            e < 0 ||
                                            e > 100 ||
                                            o < 0 ||
                                            o > 100 ||
                                            n < 0 ||
                                            n > 1)
                                    )
                                        return !1;
                                    this._color = w(t, e, o, n);
                                    const {
                                        hue: s,
                                        opacity: a,
                                        palette: l,
                                    } = this._components;
                                    return (
                                        s.update(t / 360),
                                        a.update(n),
                                        l.update(e / 100, 1 - o / 100),
                                        i || this.applyColor(),
                                        r && this._updateOutput(),
                                        (this._recalc = r),
                                        !0
                                    );
                                }
                                setColor(t, e = !1) {
                                    if (null === t)
                                        return this._clearColor(e), !0;
                                    const { values: o, type: n } =
                                        this._parseLocalColor(t);
                                    if (o) {
                                        const t = n.toUpperCase(),
                                            { options: i } =
                                                this._root.interaction,
                                            r = i.find(
                                                (e) =>
                                                    e.getAttribute(
                                                        "data-type"
                                                    ) === t
                                            );
                                        if (r && !r.hidden)
                                            for (const t of i)
                                                t.classList[
                                                    t === r ? "add" : "remove"
                                                ]("active");
                                        return (
                                            !!this.setHSVA(...o, e) &&
                                            this.setColorRepresentation(t)
                                        );
                                    }
                                    return !1;
                                }
                                setColorRepresentation(t) {
                                    return (
                                        (t = t.toUpperCase()),
                                        !!this._root.interaction.options.find(
                                            (e) =>
                                                e
                                                    .getAttribute("data-type")
                                                    .startsWith(t) && !e.click()
                                        )
                                    );
                                }
                                getColorRepresentation() {
                                    return this._representation;
                                }
                                getColor() {
                                    return this._color;
                                }
                                getSelectedColor() {
                                    return this._lastColor;
                                }
                                getRoot() {
                                    return this._root;
                                }
                                disable() {
                                    return (
                                        this.hide(),
                                        (this.options.disabled = !0),
                                        this._root.button.classList.add(
                                            "disabled"
                                        ),
                                        this
                                    );
                                }
                                enable() {
                                    return (
                                        (this.options.disabled = !1),
                                        this._root.button.classList.remove(
                                            "disabled"
                                        ),
                                        this
                                    );
                                }
                            }
                            return (
                                S(O, "utils", o),
                                S(O, "version", "1.8.2"),
                                S(O, "I18N_DEFAULTS", {
                                    "ui:dialog": "color picker dialog",
                                    "btn:toggle": "toggle color picker dialog",
                                    "btn:swatch": "color swatch",
                                    "btn:last-color": "use previous color",
                                    "btn:save": "Save",
                                    "btn:cancel": "Cancel",
                                    "btn:clear": "Clear",
                                    "aria:btn:save": "save and close",
                                    "aria:btn:cancel": "cancel and close",
                                    "aria:btn:clear": "clear and close",
                                    "aria:input": "color input field",
                                    "aria:palette": "color selection area",
                                    "aria:hue": "hue selection slider",
                                    "aria:opacity": "selection slider",
                                }),
                                S(O, "DEFAULT_OPTIONS", {
                                    appClass: null,
                                    theme: "classic",
                                    useAsButton: !1,
                                    padding: 8,
                                    disabled: !1,
                                    comparison: !0,
                                    closeOnScroll: !1,
                                    outputPrecision: 0,
                                    lockOpacity: !1,
                                    autoReposition: !0,
                                    container: "body",
                                    components: { interaction: {} },
                                    i18n: {},
                                    swatches: null,
                                    inline: !1,
                                    sliders: null,
                                    default: "#42445a",
                                    defaultRepresentation: null,
                                    position: "bottom-middle",
                                    adjustableNumbers: !0,
                                    showAlways: !1,
                                    closeWithKey: "Escape",
                                }),
                                S(O, "create", (t) => new O(t)),
                                e.default
                            );
                        })());
                },
            },
            e = {};
        function o(n) {
            var i = e[n];
            if (void 0 !== i) return i.exports;
            var r = (e[n] = { exports: {} });
            return t[n](r, r.exports, o), r.exports;
        }
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return o.d(e, { a: e }), e;
        }),
            (o.d = function (t, e) {
                for (var n in e)
                    o.o(e, n) &&
                        !o.o(t, n) &&
                        Object.defineProperty(t, n, {
                            enumerable: !0,
                            get: e[n],
                        });
            }),
            (o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (o.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var n = {};
        return (
            (function () {
                "use strict";
                o.r(n),
                    o.d(n, {
                        pickr: function () {
                            return t;
                        },
                    });
                var t = o(9612);
            })(),
            n
        );
    })();
});
