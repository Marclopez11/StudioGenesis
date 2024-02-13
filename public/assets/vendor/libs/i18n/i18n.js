! function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var o in n)("object" == typeof exports ? exports : t)[o] = n[o]
    }
}(self, (function() {
    return function() {
        var t, e, n = {
                4098: function(t, e) {
                    var n = "undefined" != typeof self ? self : this,
                        o = function() {
                            function t() {
                                this.fetch = !1, this.DOMException = n.DOMException
                            }
                            return t.prototype = n, new t
                        }();
                    ! function(t) {
                        ! function(e) {
                            var n = "URLSearchParams" in t,
                                o = "Symbol" in t && "iterator" in Symbol,
                                i = "FileReader" in t && "Blob" in t && function() {
                                    try {
                                        return new Blob, !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(),
                                r = "FormData" in t,
                                s = "ArrayBuffer" in t;
                            if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                                l = ArrayBuffer.isView || function(t) {
                                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                                };

                            function u(t) {
                                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                                return t.toLowerCase()
                            }

                            function c(t) {
                                return "string" != typeof t && (t = String(t)), t
                            }

                            function p(t) {
                                var e = {
                                    next: function() {
                                        var e = t.shift();
                                        return {
                                            done: void 0 === e,
                                            value: e
                                        }
                                    }
                                };
                                return o && (e[Symbol.iterator] = function() {
                                    return e
                                }), e
                            }

                            function h(t) {
                                this.map = {}, t instanceof h ? t.forEach((function(t, e) {
                                    this.append(e, t)
                                }), this) : Array.isArray(t) ? t.forEach((function(t) {
                                    this.append(t[0], t[1])
                                }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                                    this.append(e, t[e])
                                }), this)
                            }

                            function f(t) {
                                if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                                t.bodyUsed = !0
                            }

                            function d(t) {
                                return new Promise((function(e, n) {
                                    t.onload = function() {
                                        e(t.result)
                                    }, t.onerror = function() {
                                        n(t.error)
                                    }
                                }))
                            }

                            function g(t) {
                                var e = new FileReader,
                                    n = d(e);
                                return e.readAsArrayBuffer(t), n
                            }

                            function y(t) {
                                if (t.slice) return t.slice(0);
                                var e = new Uint8Array(t.byteLength);
                                return e.set(new Uint8Array(t)), e.buffer
                            }

                            function m() {
                                return this.bodyUsed = !1, this._initBody = function(t) {
                                    var e;
                                    this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : r && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && i && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = y(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || l(t)) ? this._bodyArrayBuffer = y(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                                }, i && (this.blob = function() {
                                    var t = f(this);
                                    if (t) return t;
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                    return Promise.resolve(new Blob([this._bodyText]))
                                }, this.arrayBuffer = function() {
                                    return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                                }), this.text = function() {
                                    var t, e, n, o = f(this);
                                    if (o) return o;
                                    if (this._bodyBlob) return t = this._bodyBlob, n = d(e = new FileReader), e.readAsText(t), n;
                                    if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                        for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
                                        return n.join("")
                                    }(this._bodyArrayBuffer));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                    return Promise.resolve(this._bodyText)
                                }, r && (this.formData = function() {
                                    return this.text().then(w)
                                }), this.json = function() {
                                    return this.text().then(JSON.parse)
                                }, this
                            }
                            h.prototype.append = function(t, e) {
                                t = u(t), e = c(e);
                                var n = this.map[t];
                                this.map[t] = n ? n + ", " + e : e
                            }, h.prototype.delete = function(t) {
                                delete this.map[u(t)]
                            }, h.prototype.get = function(t) {
                                return t = u(t), this.has(t) ? this.map[t] : null
                            }, h.prototype.has = function(t) {
                                return this.map.hasOwnProperty(u(t))
                            }, h.prototype.set = function(t, e) {
                                this.map[u(t)] = c(e)
                            }, h.prototype.forEach = function(t, e) {
                                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                            }, h.prototype.keys = function() {
                                var t = [];
                                return this.forEach((function(e, n) {
                                    t.push(n)
                                })), p(t)
                            }, h.prototype.values = function() {
                                var t = [];
                                return this.forEach((function(e) {
                                    t.push(e)
                                })), p(t)
                            }, h.prototype.entries = function() {
                                var t = [];
                                return this.forEach((function(e, n) {
                                    t.push([n, e])
                                })), p(t)
                            }, o && (h.prototype[Symbol.iterator] = h.prototype.entries);
                            var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                            function b(t, e) {
                                var n, o, i = (e = e || {}).body;
                                if (t instanceof b) {
                                    if (t.bodyUsed) throw new TypeError("Already read");
                                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new h(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                                } else this.url = String(t);
                                if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new h(e.headers)), this.method = (o = (n = e.method || this.method || "GET").toUpperCase(), v.indexOf(o) > -1 ? o : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                                this._initBody(i)
                            }

                            function w(t) {
                                var e = new FormData;
                                return t.trim().split("&").forEach((function(t) {
                                    if (t) {
                                        var n = t.split("="),
                                            o = n.shift().replace(/\+/g, " "),
                                            i = n.join("=").replace(/\+/g, " ");
                                        e.append(decodeURIComponent(o), decodeURIComponent(i))
                                    }
                                })), e
                            }

                            function x(t, e) {
                                e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new h(e.headers), this.url = e.url || "", this._initBody(t)
                            }
                            b.prototype.clone = function() {
                                return new b(this, {
                                    body: this._bodyInit
                                })
                            }, m.call(b.prototype), m.call(x.prototype), x.prototype.clone = function() {
                                return new x(this._bodyInit, {
                                    status: this.status,
                                    statusText: this.statusText,
                                    headers: new h(this.headers),
                                    url: this.url
                                })
                            }, x.error = function() {
                                var t = new x(null, {
                                    status: 0,
                                    statusText: ""
                                });
                                return t.type = "error", t
                            };
                            var S = [301, 302, 303, 307, 308];
                            x.redirect = function(t, e) {
                                if (-1 === S.indexOf(e)) throw new RangeError("Invalid status code");
                                return new x(null, {
                                    status: e,
                                    headers: {
                                        location: t
                                    }
                                })
                            }, e.DOMException = t.DOMException;
                            try {
                                new e.DOMException
                            } catch (t) {
                                e.DOMException = function(t, e) {
                                    this.message = t, this.name = e;
                                    var n = Error(t);
                                    this.stack = n.stack
                                }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                            }

                            function k(t, n) {
                                return new Promise((function(o, r) {
                                    var s = new b(t, n);
                                    if (s.signal && s.signal.aborted) return r(new e.DOMException("Aborted", "AbortError"));
                                    var a = new XMLHttpRequest;

                                    function l() {
                                        a.abort()
                                    }
                                    a.onload = function() {
                                        var t, e, n = {
                                            status: a.status,
                                            statusText: a.statusText,
                                            headers: (t = a.getAllResponseHeaders() || "", e = new h, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                                var n = t.split(":"),
                                                    o = n.shift().trim();
                                                if (o) {
                                                    var i = n.join(":").trim();
                                                    e.append(o, i)
                                                }
                                            })), e)
                                        };
                                        n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                        var i = "response" in a ? a.response : a.responseText;
                                        o(new x(i, n))
                                    }, a.onerror = function() {
                                        r(new TypeError("Network request failed"))
                                    }, a.ontimeout = function() {
                                        r(new TypeError("Network request failed"))
                                    }, a.onabort = function() {
                                        r(new e.DOMException("Aborted", "AbortError"))
                                    }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && i && (a.responseType = "blob"), s.headers.forEach((function(t, e) {
                                        a.setRequestHeader(e, t)
                                    })), s.signal && (s.signal.addEventListener("abort", l), a.onreadystatechange = function() {
                                        4 === a.readyState && s.signal.removeEventListener("abort", l)
                                    }), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
                                }))
                            }
                            k.polyfill = !0, t.fetch || (t.fetch = k, t.Headers = h, t.Request = b, t.Response = x), e.Headers = h, e.Request = b, e.Response = x, e.fetch = k, Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }({})
                    }(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
                    var i = o;
                    (e = i.fetch).default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
                },
                3154: function(t, e, n) {
                    var o;
                    if ("function" == typeof fetch && (o = void 0 !== n.g && n.g.fetch ? n.g.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), "undefined" == typeof window || void 0 === window.document) {
                        var i = o || n(4098);
                        i.default && (i = i.default), e.default = i, t.exports = e.default
                    }
                }
            },
            o = {};

        function i(t) {
            var e = o[t];
            if (void 0 !== e) return e.exports;
            var r = o[t] = {
                exports: {}
            };
            return n[t].call(r.exports, r, r.exports, i), r.exports
        }
        e = Object.getPrototypeOf ? function(t) {
            return Object.getPrototypeOf(t)
        } : function(t) {
            return t.__proto__
        }, i.t = function(n, o) {
            if (1 & o && (n = this(n)), 8 & o) return n;
            if ("object" == typeof n && n) {
                if (4 & o && n.__esModule) return n;
                if (16 & o && "function" == typeof n.then) return n
            }
            var r = Object.create(null);
            i.r(r);
            var s = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var a = 2 & o && n;
                "object" == typeof a && !~t.indexOf(a); a = e(a)) Object.getOwnPropertyNames(a).forEach((function(t) {
                s[t] = function() {
                    return n[t]
                }
            }));
            return s.default = function() {
                return n
            }, i.d(r, s), r
        }, i.d = function(t, e) {
            for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }, i.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        };
        var r = {};
        return function() {
            "use strict";
            i.r(r), i.d(r, {
                i18NextHttpBackend: function() {
                    return st
                },
                i18next: function() {
                    return _
                },
                languageDetector: function() {
                    return Lt
                }
            });
            const t = {
                type: "logger",
                log(t) {
                    this.output("log", t)
                },
                warn(t) {
                    this.output("warn", t)
                },
                error(t) {
                    this.output("error", t)
                },
                output(t, e) {
                    console && console[t] && console[t].apply(console, e)
                }
            };
            class e {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(t, e)
                }
                init(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = e || t, this.options = n, this.debug = n.debug
                }
                log() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "log", "", !0)
                }
                warn() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "", !0)
                }
                error() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "error", "")
                }
                deprecate() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(t, e, n, o) {
                    return o && !this.debug ? null : ("string" == typeof t[0] && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[e](t))
                }
                create(t) {
                    return new e(this.logger, {
                        prefix: `${this.prefix}:${t}:`,
                        ...this.options
                    })
                }
                clone(t) {
                    return (t = t || this.options).prefix = t.prefix || this.prefix, new e(this.logger, t)
                }
            }
            var n = new e;
            class o {
                constructor() {
                    this.observers = {}
                }
                on(t, e) {
                    return t.split(" ").forEach((t => {
                        this.observers[t] = this.observers[t] || [], this.observers[t].push(e)
                    })), this
                }
                off(t, e) {
                    this.observers[t] && (e ? this.observers[t] = this.observers[t].filter((t => t !== e)) : delete this.observers[t])
                }
                emit(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    this.observers[t] && [].concat(this.observers[t]).forEach((t => {
                        t(...n)
                    })), this.observers["*"] && [].concat(this.observers["*"]).forEach((e => {
                        e.apply(e, [t, ...n])
                    }))
                }
            }

            function s() {
                let t, e;
                const n = new Promise(((n, o) => {
                    t = n, e = o
                }));
                return n.resolve = t, n.reject = e, n
            }

            function a(t) {
                return null == t ? "" : "" + t
            }

            function l(t, e, n) {
                function o(t) {
                    return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
                }

                function i() {
                    return !t || "string" == typeof t
                }
                const r = "string" != typeof e ? [].concat(e) : e.split(".");
                for (; r.length > 1;) {
                    if (i()) return {};
                    const e = o(r.shift());
                    !t[e] && n && (t[e] = new n), t = Object.prototype.hasOwnProperty.call(t, e) ? t[e] : {}
                }
                return i() ? {} : {
                    obj: t,
                    k: o(r.shift())
                }
            }

            function u(t, e, n) {
                const {
                    obj: o,
                    k: i
                } = l(t, e, Object);
                o[i] = n
            }

            function c(t, e) {
                const {
                    obj: n,
                    k: o
                } = l(t, e);
                if (n) return n[o]
            }

            function p(t, e, n) {
                for (const o in e) "__proto__" !== o && "constructor" !== o && (o in t ? "string" == typeof t[o] || t[o] instanceof String || "string" == typeof e[o] || e[o] instanceof String ? n && (t[o] = e[o]) : p(t[o], e[o], n) : t[o] = e[o]);
                return t
            }

            function h(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var f = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function d(t) {
                return "string" == typeof t ? t.replace(/[&<>"'\/]/g, (t => f[t])) : t
            }
            const g = [" ", ",", "?", "!", ";"];

            function y(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (!t) return;
                if (t[e]) return t[e];
                const o = e.split(n);
                let i = t;
                for (let t = 0; t < o.length; ++t) {
                    if (!i) return;
                    if ("string" == typeof i[o[t]] && t + 1 < o.length) return;
                    if (void 0 === i[o[t]]) {
                        let r = 2,
                            s = o.slice(t, t + r).join(n),
                            a = i[s];
                        for (; void 0 === a && o.length > t + r;) r++, s = o.slice(t, t + r).join(n), a = i[s];
                        if (void 0 === a) return;
                        if (null === a) return null;
                        if (e.endsWith(s)) {
                            if ("string" == typeof a) return a;
                            if (s && "string" == typeof a[s]) return a[s]
                        }
                        const l = o.slice(t + r).join(n);
                        return l ? y(a, l, n) : void 0
                    }
                    i = i[o[t]]
                }
                return i
            }

            function m(t) {
                return t && t.indexOf("_") > 0 ? t.replace("_", "-") : t
            }
            class v extends o {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = t || {}, this.options = e, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(t) {
                    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                }
                removeNamespaces(t) {
                    const e = this.options.ns.indexOf(t);
                    e > -1 && this.options.ns.splice(e, 1)
                }
                getResource(t, e, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                        r = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    let s = [t, e];
                    n && "string" != typeof n && (s = s.concat(n)), n && "string" == typeof n && (s = s.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (s = t.split("."));
                    const a = c(this.data, s);
                    return a || !r || "string" != typeof n ? a : y(this.data && this.data[t] && this.data[t][e], n, i)
                }
                addResource(t, e, n, o) {
                    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    };
                    const r = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator;
                    let s = [t, e];
                    n && (s = s.concat(r ? n.split(r) : n)), t.indexOf(".") > -1 && (s = t.split("."), o = e, e = s[1]), this.addNamespaces(e), u(this.data, s, o), i.silent || this.emit("added", t, e, n, o)
                }
                addResources(t, e, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (const o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(t, e, o, n[o], {
                        silent: !0
                    });
                    o.silent || this.emit("added", t, e, n)
                }
                addResourceBundle(t, e, n, o, i) {
                    let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1
                        },
                        s = [t, e];
                    t.indexOf(".") > -1 && (s = t.split("."), o = n, n = e, e = s[1]), this.addNamespaces(e);
                    let a = c(this.data, s) || {};
                    o ? p(a, n, i) : a = {
                        ...a,
                        ...n
                    }, u(this.data, s, a), r.silent || this.emit("added", t, e, n)
                }
                removeResourceBundle(t, e) {
                    this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                }
                hasResourceBundle(t, e) {
                    return void 0 !== this.getResource(t, e)
                }
                getResourceBundle(t, e) {
                    return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? {
                        ...this.getResource(t, e)
                    } : this.getResource(t, e)
                }
                getDataByLanguage(t) {
                    return this.data[t]
                }
                hasLanguageSomeTranslations(t) {
                    const e = this.getDataByLanguage(t);
                    return !!(e && Object.keys(e) || []).find((t => e[t] && Object.keys(e[t]).length > 0))
                }
                toJSON() {
                    return this.data
                }
            }
            var b = {
                processors: {},
                addPostProcessor(t) {
                    this.processors[t.name] = t
                },
                handle(t, e, n, o, i) {
                    return t.forEach((t => {
                        this.processors[t] && (e = this.processors[t].process(e, n, o, i))
                    })), e
                }
            };
            const w = {};
            class x extends o {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var o, i;
                    super(), o = t, i = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach((t => {
                        o[t] && (i[t] = o[t])
                    })), this.options = e, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = n.create("translator")
                }
                changeLanguage(t) {
                    t && (this.language = t)
                }
                exists(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == t) return !1;
                    const n = this.resolve(t, e);
                    return n && void 0 !== n.res
                }
                extractFromKey(t, e) {
                    let n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    const o = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator;
                    let i = e.ns || this.options.defaultNS || [];
                    const r = n && t.indexOf(n) > -1,
                        s = !(this.options.userDefinedKeySeparator || e.keySeparator || this.options.userDefinedNsSeparator || e.nsSeparator || function(t, e, n) {
                            e = e || "", n = n || "";
                            const o = g.filter((t => e.indexOf(t) < 0 && n.indexOf(t) < 0));
                            if (0 === o.length) return !0;
                            const i = new RegExp(`(${o.map((t=>"?"===t?"\\?":t)).join("|")})`);
                            let r = !i.test(t);
                            if (!r) {
                                const e = t.indexOf(n);
                                e > 0 && !i.test(t.substring(0, e)) && (r = !0)
                            }
                            return r
                        }(t, n, o));
                    if (r && !s) {
                        const e = t.match(this.interpolator.nestingRegexp);
                        if (e && e.length > 0) return {
                            key: t,
                            namespaces: i
                        };
                        const r = t.split(n);
                        (n !== o || n === o && this.options.ns.indexOf(r[0]) > -1) && (i = r.shift()), t = r.join(o)
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: t,
                        namespaces: i
                    }
                }
                translate(t, e, n) {
                    if ("object" != typeof e && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof e && (e = {
                            ...e
                        }), e || (e = {}), null == t) return "";
                    Array.isArray(t) || (t = [String(t)]);
                    const o = void 0 !== e.returnDetails ? e.returnDetails : this.options.returnDetails,
                        i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                        {
                            key: r,
                            namespaces: s
                        } = this.extractFromKey(t[t.length - 1], e),
                        a = s[s.length - 1],
                        l = e.lng || this.language,
                        u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (l && "cimode" === l.toLowerCase()) {
                        if (u) {
                            const t = e.nsSeparator || this.options.nsSeparator;
                            return o ? {
                                res: `${a}${t}${r}`,
                                usedKey: r,
                                exactUsedKey: r,
                                usedLng: l,
                                usedNS: a
                            } : `${a}${t}${r}`
                        }
                        return o ? {
                            res: r,
                            usedKey: r,
                            exactUsedKey: r,
                            usedLng: l,
                            usedNS: a
                        } : r
                    }
                    const c = this.resolve(t, e);
                    let p = c && c.res;
                    const h = c && c.usedKey || r,
                        f = c && c.exactUsedKey || r,
                        d = Object.prototype.toString.apply(p),
                        g = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays,
                        y = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (y && p && "string" != typeof p && "boolean" != typeof p && "number" != typeof p && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(d) < 0 && ("string" != typeof g || "[object Array]" !== d)) {
                        if (!e.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            const t = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, p, {
                                ...e,
                                ns: s
                            }) : `key '${r} (${this.language})' returned an object instead of string.`;
                            return o ? (c.res = t, c) : t
                        }
                        if (i) {
                            const t = "[object Array]" === d,
                                n = t ? [] : {},
                                o = t ? f : h;
                            for (const t in p)
                                if (Object.prototype.hasOwnProperty.call(p, t)) {
                                    const r = `${o}${i}${t}`;
                                    n[t] = this.translate(r, {
                                        ...e,
                                        joinArrays: !1,
                                        ns: s
                                    }), n[t] === r && (n[t] = p[t])
                                } p = n
                        }
                    } else if (y && "string" == typeof g && "[object Array]" === d) p = p.join(g), p && (p = this.extendTranslation(p, t, e, n));
                    else {
                        let o = !1,
                            s = !1;
                        const u = void 0 !== e.count && "string" != typeof e.count,
                            h = x.hasDefaultValue(e),
                            f = u ? this.pluralResolver.getSuffix(l, e.count, e) : "",
                            d = e.ordinal && u ? this.pluralResolver.getSuffix(l, e.count, {
                                ordinal: !1
                            }) : "",
                            g = e[`defaultValue${f}`] || e[`defaultValue${d}`] || e.defaultValue;
                        !this.isValidLookup(p) && h && (o = !0, p = g), this.isValidLookup(p) || (s = !0, p = r);
                        const y = (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && s ? void 0 : p,
                            m = h && g !== p && this.options.updateMissing;
                        if (s || o || m) {
                            if (this.logger.log(m ? "updateKey" : "missingKey", l, a, r, m ? g : p), i) {
                                const t = this.resolve(r, {
                                    ...e,
                                    keySeparator: !1
                                });
                                t && t.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let t = [];
                            const n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let e = 0; e < n.length; e++) t.push(n[e]);
                            else "all" === this.options.saveMissingTo ? t = this.languageUtils.toResolveHierarchy(e.lng || this.language) : t.push(e.lng || this.language);
                            const o = (t, n, o) => {
                                const i = h && o !== p ? o : y;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(t, a, n, i, m, e) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(t, a, n, i, m, e), this.emit("missingKey", t, a, n, p)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && u ? t.forEach((t => {
                                this.pluralResolver.getSuffixes(t, e).forEach((n => {
                                    o([t], r + n, e[`defaultValue${n}`] || g)
                                }))
                            })) : o(t, r, g))
                        }
                        p = this.extendTranslation(p, t, e, c, n), s && p === r && this.options.appendNamespaceToMissingKey && (p = `${a}:${r}`), (s || o) && this.options.parseMissingKeyHandler && (p = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${r}` : r, o ? p : void 0) : this.options.parseMissingKeyHandler(p))
                    }
                    return o ? (c.res = p, c) : p
                }
                extendTranslation(t, e, n, o, i) {
                    var r = this;
                    if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, o.usedLng, o.usedNS, o.usedKey, {
                        resolved: o
                    });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init({
                            ...n,
                            interpolation: {
                                ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        const s = "string" == typeof t && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        let a;
                        if (s) {
                            const e = t.match(this.interpolator.nestingRegexp);
                            a = e && e.length
                        }
                        let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = {
                                ...this.options.interpolation.defaultVariables,
                                ...l
                            }), t = this.interpolator.interpolate(t, l, n.lng || this.language, n), s) {
                            const e = t.match(this.interpolator.nestingRegexp);
                            a < (e && e.length) && (n.nest = !1)
                        }!n.lng && "v1" !== this.options.compatibilityAPI && o && o.res && (n.lng = o.usedLng), !1 !== n.nest && (t = this.interpolator.nest(t, (function() {
                            for (var t = arguments.length, o = new Array(t), s = 0; s < t; s++) o[s] = arguments[s];
                            return i && i[0] === o[0] && !n.context ? (r.logger.warn(`It seems you are nesting recursively key: ${o[0]} in key: ${e[0]}`), null) : r.translate(...o, e)
                        }), n)), n.interpolation && this.interpolator.reset()
                    }
                    const s = n.postProcess || this.options.postProcess,
                        a = "string" == typeof s ? [s] : s;
                    return null != t && a && a.length && !1 !== n.applyPostProcessor && (t = b.handle(a, t, e, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: o,
                        ...n
                    } : n, this)), t
                }
                resolve(t) {
                    let e, n, o, i, r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof t && (t = [t]), t.forEach((t => {
                        if (this.isValidLookup(e)) return;
                        const a = this.extractFromKey(t, s),
                            l = a.key;
                        n = l;
                        let u = a.namespaces;
                        this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                        const c = void 0 !== s.count && "string" != typeof s.count,
                            p = c && !s.ordinal && 0 === s.count && this.pluralResolver.shouldUseIntlApi(),
                            h = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                            f = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
                        u.forEach((t => {
                            this.isValidLookup(e) || (r = t, !w[`${f[0]}-${t}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(r) && (w[`${f[0]}-${t}`] = !0, this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((n => {
                                if (this.isValidLookup(e)) return;
                                i = n;
                                const r = [l];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(r, l, n, t, s);
                                else {
                                    let t;
                                    c && (t = this.pluralResolver.getSuffix(n, s.count, s));
                                    const e = `${this.options.pluralSeparator}zero`,
                                        o = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (c && (r.push(l + t), s.ordinal && 0 === t.indexOf(o) && r.push(l + t.replace(o, this.options.pluralSeparator)), p && r.push(l + e)), h) {
                                        const n = `${l}${this.options.contextSeparator}${s.context}`;
                                        r.push(n), c && (r.push(n + t), s.ordinal && 0 === t.indexOf(o) && r.push(n + t.replace(o, this.options.pluralSeparator)), p && r.push(n + e))
                                    }
                                }
                                let a;
                                for (; a = r.pop();) this.isValidLookup(e) || (o = a, e = this.getResource(n, t, a, s))
                            })))
                        }))
                    })), {
                        res: e,
                        usedKey: n,
                        exactUsedKey: o,
                        usedLng: i,
                        usedNS: r
                    }
                }
                isValidLookup(t) {
                    return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
                }
                getResource(t, e, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, o) : this.resourceStore.getResource(t, e, n, o)
                }
                static hasDefaultValue(t) {
                    for (const e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e) && "defaultValue" === e.substring(0, 12) && void 0 !== t[e]) return !0;
                    return !1
                }
            }

            function S(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            class k {
                constructor(t) {
                    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = n.create("languageUtils")
                }
                getScriptPartFromCode(t) {
                    if (!(t = m(t)) || t.indexOf("-") < 0) return null;
                    const e = t.split("-");
                    return 2 === e.length ? null : (e.pop(), "x" === e[e.length - 1].toLowerCase() ? null : this.formatLanguageCode(e.join("-")))
                }
                getLanguagePartFromCode(t) {
                    if (!(t = m(t)) || t.indexOf("-") < 0) return t;
                    const e = t.split("-");
                    return this.formatLanguageCode(e[0])
                }
                formatLanguageCode(t) {
                    if ("string" == typeof t && t.indexOf("-") > -1) {
                        const e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                        let n = t.split("-");
                        return this.options.lowerCaseLng ? n = n.map((t => t.toLowerCase())) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = S(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = S(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = S(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                }
                isSupportedCode(t) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
                }
                getBestMatchFromCodes(t) {
                    if (!t) return null;
                    let e;
                    return t.forEach((t => {
                        if (e) return;
                        const n = this.formatLanguageCode(t);
                        this.options.supportedLngs && !this.isSupportedCode(n) || (e = n)
                    })), !e && this.options.supportedLngs && t.forEach((t => {
                        if (e) return;
                        const n = this.getLanguagePartFromCode(t);
                        if (this.isSupportedCode(n)) return e = n;
                        e = this.options.supportedLngs.find((t => t === n ? t : t.indexOf("-") < 0 && n.indexOf("-") < 0 ? void 0 : 0 === t.indexOf(n) ? t : void 0))
                    })), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e
                }
                getFallbackCodes(t, e) {
                    if (!t) return [];
                    if ("function" == typeof t && (t = t(e)), "string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                    if (!e) return t.default || [];
                    let n = t[e];
                    return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t[this.getLanguagePartFromCode(e)]), n || (n = t.default), n || []
                }
                toResolveHierarchy(t, e) {
                    const n = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                        o = [],
                        i = t => {
                            t && (this.isSupportedCode(t) ? o.push(t) : this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))
                        };
                    return "string" == typeof t && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" == typeof t && i(this.formatLanguageCode(t)), n.forEach((t => {
                        o.indexOf(t) < 0 && i(this.formatLanguageCode(t))
                    })), o
                }
            }
            let O = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                L = {
                    1: function(t) {
                        return Number(t > 1)
                    },
                    2: function(t) {
                        return Number(1 != t)
                    },
                    3: function(t) {
                        return 0
                    },
                    4: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    5: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    },
                    6: function(t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    },
                    7: function(t) {
                        return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    8: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    },
                    9: function(t) {
                        return Number(t >= 2)
                    },
                    10: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    },
                    11: function(t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    },
                    12: function(t) {
                        return Number(t % 10 != 1 || t % 100 == 11)
                    },
                    13: function(t) {
                        return Number(0 !== t)
                    },
                    14: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    },
                    15: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    16: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    },
                    17: function(t) {
                        return Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1)
                    },
                    18: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                    },
                    19: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    },
                    20: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    },
                    21: function(t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    },
                    22: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
                    }
                };
            const P = ["v1", "v2", "v3"],
                R = ["v4"],
                j = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                };
            class E {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = t, this.options = e, this.logger = n.create("pluralResolver"), this.options.compatibilityJSON && !R.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
                        const t = {};
                        return O.forEach((e => {
                            e.lngs.forEach((n => {
                                t[n] = {
                                    numbers: e.nr,
                                    plurals: L[e.fc]
                                }
                            }))
                        })), t
                    }()
                }
                addRule(t, e) {
                    this.rules[t] = e
                }
                getRule(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        return new Intl.PluralRules(m(t), {
                            type: e.ordinal ? "ordinal" : "cardinal"
                        })
                    } catch {
                        return
                    }
                    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                }
                needsPlural(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(t, e);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(t, n).map((t => `${e}${t}`))
                }
                getSuffixes(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(t, e);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort(((t, e) => j[t] - j[e])).map((t => `${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`)) : n.numbers.map((n => this.getSuffix(t, n, e))) : []
                }
                getSuffix(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const o = this.getRule(t, n);
                    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o.select(e)}` : this.getSuffixRetroCompatible(o, e) : (this.logger.warn(`no plural rule found for: ${t}`), "")
                }
                getSuffixRetroCompatible(t, e) {
                    const n = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e));
                    let o = t.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                    const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? `_plural_${o.toString()}` : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !P.includes(this.options.compatibilityJSON)
                }
            }

            function N(t, e, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                    i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    r = function(t, e, n) {
                        const o = c(t, n);
                        return void 0 !== o ? o : c(e, n)
                    }(t, e, n);
                return !r && i && "string" == typeof n && (r = y(t, n, o), void 0 === r && (r = y(e, n, o))), r
            }
            class C {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = n.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (t => t), this.init(t)
                }
                init() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.interpolation || (t.interpolation = {
                        escapeValue: !0
                    });
                    const e = t.interpolation;
                    this.escape = void 0 !== e.escape ? e.escape : d, this.escapeValue = void 0 === e.escapeValue || e.escapeValue, this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape, this.prefix = e.prefix ? h(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? h(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? h(e.nestingPrefix) : e.nestingPrefixEscaped || h("$t("), this.nestingSuffix = e.nestingSuffix ? h(e.nestingSuffix) : e.nestingSuffixEscaped || h(")"), this.nestingOptionsSeparator = e.nestingOptionsSeparator ? e.nestingOptionsSeparator : e.nestingOptionsSeparator || ",", this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3, this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    const t = `${this.prefix}(.+?)${this.suffix}`;
                    this.regexp = new RegExp(t, "g");
                    const e = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
                    this.regexpUnescape = new RegExp(e, "g");
                    const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
                    this.nestingRegexp = new RegExp(n, "g")
                }
                interpolate(t, e, n, o) {
                    let i, r, s;
                    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                    function u(t) {
                        return t.replace(/\$/g, "$$$$")
                    }
                    const c = t => {
                        if (t.indexOf(this.formatSeparator) < 0) {
                            const i = N(e, l, t, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(i, void 0, n, {
                                ...o,
                                ...e,
                                interpolationkey: t
                            }) : i
                        }
                        const i = t.split(this.formatSeparator),
                            r = i.shift().trim(),
                            s = i.join(this.formatSeparator).trim();
                        return this.format(N(e, l, r, this.options.keySeparator, this.options.ignoreJSONStructure), s, n, {
                            ...o,
                            ...e,
                            interpolationkey: r
                        })
                    };
                    this.resetRegExp();
                    const p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        h = o && o.interpolation && void 0 !== o.interpolation.skipOnVariables ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: t => u(t)
                    }, {
                        regex: this.regexp,
                        safeValue: t => this.escapeValue ? u(this.escape(t)) : u(t)
                    }].forEach((e => {
                        for (s = 0; i = e.regex.exec(t);) {
                            const n = i[1].trim();
                            if (r = c(n), void 0 === r)
                                if ("function" == typeof p) {
                                    const e = p(t, i, o);
                                    r = "string" == typeof e ? e : ""
                                } else if (o && Object.prototype.hasOwnProperty.call(o, n)) r = "";
                            else {
                                if (h) {
                                    r = i[0];
                                    continue
                                }
                                this.logger.warn(`missed to pass in variable ${n} for interpolating ${t}`), r = ""
                            } else "string" == typeof r || this.useRawValueToEscape || (r = a(r));
                            const l = e.safeValue(r);
                            if (t = t.replace(i[0], l), h ? (e.regex.lastIndex += r.length, e.regex.lastIndex -= i[0].length) : e.regex.lastIndex = 0, s++, s >= this.maxReplaces) break
                        }
                    })), t
                }
                nest(t, e) {
                    let n, o, i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                    function s(t, e) {
                        const n = this.nestingOptionsSeparator;
                        if (t.indexOf(n) < 0) return t;
                        const o = t.split(new RegExp(`${n}[ ]*{`));
                        let r = `{${o[1]}`;
                        t = o[0], r = this.interpolate(r, i);
                        const s = r.match(/'/g),
                            a = r.match(/"/g);
                        (s && s.length % 2 == 0 && !a || a.length % 2 != 0) && (r = r.replace(/'/g, '"'));
                        try {
                            i = JSON.parse(r), e && (i = {
                                ...e,
                                ...i
                            })
                        } catch (e) {
                            return this.logger.warn(`failed parsing options string in nesting for key ${t}`, e), `${t}${n}${r}`
                        }
                        return delete i.defaultValue, t
                    }
                    for (; n = this.nestingRegexp.exec(t);) {
                        let l = [];
                        i = {
                            ...r
                        }, i = i.replace && "string" != typeof i.replace ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
                        let u = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            const t = n[1].split(this.formatSeparator).map((t => t.trim()));
                            n[1] = t.shift(), l = t, u = !0
                        }
                        if (o = e(s.call(this, n[1].trim(), i), i), o && n[0] === t && "string" != typeof o) return o;
                        "string" != typeof o && (o = a(o)), o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`), o = ""), u && (o = l.reduce(((t, e) => this.format(t, e, r.lng, {
                            ...r,
                            interpolationkey: n[1].trim()
                        })), o.trim())), t = t.replace(n[0], o), this.regexp.lastIndex = 0
                    }
                    return t
                }
            }

            function T(t) {
                const e = {};
                return function(n, o, i) {
                    const r = o + JSON.stringify(i);
                    let s = e[r];
                    return s || (s = t(m(o), i), e[r] = s), s(n)
                }
            }
            class $ {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = n.create("formatter"), this.options = t, this.formats = {
                        number: T(((t, e) => {
                            const n = new Intl.NumberFormat(t, {
                                ...e
                            });
                            return t => n.format(t)
                        })),
                        currency: T(((t, e) => {
                            const n = new Intl.NumberFormat(t, {
                                ...e,
                                style: "currency"
                            });
                            return t => n.format(t)
                        })),
                        datetime: T(((t, e) => {
                            const n = new Intl.DateTimeFormat(t, {
                                ...e
                            });
                            return t => n.format(t)
                        })),
                        relativetime: T(((t, e) => {
                            const n = new Intl.RelativeTimeFormat(t, {
                                ...e
                            });
                            return t => n.format(t, e.range || "day")
                        })),
                        list: T(((t, e) => {
                            const n = new Intl.ListFormat(t, {
                                ...e
                            });
                            return t => n.format(t)
                        }))
                    }, this.init(t)
                }
                init(t) {
                    const e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }).interpolation;
                    this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ","
                }
                add(t, e) {
                    this.formats[t.toLowerCase().trim()] = e
                }
                addCached(t, e) {
                    this.formats[t.toLowerCase().trim()] = T(e)
                }
                format(t, e, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return e.split(this.formatSeparator).reduce(((t, e) => {
                        const {
                            formatName: i,
                            formatOptions: r
                        } = function(t) {
                            let e = t.toLowerCase().trim();
                            const n = {};
                            if (t.indexOf("(") > -1) {
                                const o = t.split("(");
                                e = o[0].toLowerCase().trim();
                                const i = o[1].substring(0, o[1].length - 1);
                                "currency" === e && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : "relativetime" === e && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((t => {
                                    if (!t) return;
                                    const [e, ...o] = t.split(":"), i = o.join(":").trim().replace(/^'+|'+$/g, "");
                                    n[e.trim()] || (n[e.trim()] = i), "false" === i && (n[e.trim()] = !1), "true" === i && (n[e.trim()] = !0), isNaN(i) || (n[e.trim()] = parseInt(i, 10))
                                }))
                            }
                            return {
                                formatName: e,
                                formatOptions: n
                            }
                        }(e);
                        if (this.formats[i]) {
                            let e = t;
                            try {
                                const s = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
                                    a = s.locale || s.lng || o.locale || o.lng || n;
                                e = this.formats[i](t, a, {
                                    ...r,
                                    ...o,
                                    ...s
                                })
                            } catch (t) {
                                this.logger.warn(t)
                            }
                            return e
                        }
                        return this.logger.warn(`there was no format function for ${i}`), t
                    }), t)
                }
            }
            class A extends o {
                constructor(t, e, o) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = t, this.store = e, this.services = o, this.languageUtils = o.languageUtils, this.options = i, this.logger = n.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(o, i.backend, i)
                }
                queueLoad(t, e, n, o) {
                    const i = {},
                        r = {},
                        s = {},
                        a = {};
                    return t.forEach((t => {
                        let o = !0;
                        e.forEach((e => {
                            const s = `${t}|${e}`;
                            !n.reload && this.store.hasResourceBundle(t, e) ? this.state[s] = 2 : this.state[s] < 0 || (1 === this.state[s] ? void 0 === r[s] && (r[s] = !0) : (this.state[s] = 1, o = !1, void 0 === r[s] && (r[s] = !0), void 0 === i[s] && (i[s] = !0), void 0 === a[e] && (a[e] = !0)))
                        })), o || (s[t] = !0)
                    })), (Object.keys(i).length || Object.keys(r).length) && this.queue.push({
                        pending: r,
                        pendingCount: Object.keys(r).length,
                        loaded: {},
                        errors: [],
                        callback: o
                    }), {
                        toLoad: Object.keys(i),
                        pending: Object.keys(r),
                        toLoadLanguages: Object.keys(s),
                        toLoadNamespaces: Object.keys(a)
                    }
                }
                loaded(t, e, n) {
                    const o = t.split("|"),
                        i = o[0],
                        r = o[1];
                    e && this.emit("failedLoading", i, r, e), n && this.store.addResourceBundle(i, r, n), this.state[t] = e ? -1 : 2;
                    const s = {};
                    this.queue.forEach((n => {
                        ! function(t, e, n, o) {
                            const {
                                obj: i,
                                k: r
                            } = l(t, e, Object);
                            i[r] = i[r] || [], i[r].push(n)
                        }(n.loaded, [i], r),
                        function(t, e) {
                            void 0 !== t.pending[e] && (delete t.pending[e], t.pendingCount--)
                        }(n, t), e && n.errors.push(e), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((t => {
                            s[t] || (s[t] = {});
                            const e = n.loaded[t];
                            e.length && e.forEach((e => {
                                void 0 === s[t][e] && (s[t][e] = !0)
                            }))
                        })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    })), this.emit("loaded", s), this.queue = this.queue.filter((t => !t.done))
                }
                read(t, e, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        r = arguments.length > 5 ? arguments[5] : void 0;
                    if (!t.length) return r(null, {});
                    if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                        lng: t,
                        ns: e,
                        fcName: n,
                        tried: o,
                        wait: i,
                        callback: r
                    });
                    this.readingCalls++;
                    const s = (s, a) => {
                            if (this.readingCalls--, this.waitingReads.length > 0) {
                                const t = this.waitingReads.shift();
                                this.read(t.lng, t.ns, t.fcName, t.tried, t.wait, t.callback)
                            }
                            s && a && o < this.maxRetries ? setTimeout((() => {
                                this.read.call(this, t, e, n, o + 1, 2 * i, r)
                            }), i) : r(s, a)
                        },
                        a = this.backend[n].bind(this.backend);
                    if (2 !== a.length) return a(t, e, s);
                    try {
                        const n = a(t, e);
                        n && "function" == typeof n.then ? n.then((t => s(null, t))).catch(s) : s(null, n)
                    } catch (t) {
                        s(t)
                    }
                }
                prepareLoading(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                    "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                    const i = this.queueLoad(t, e, n, o);
                    if (!i.toLoad.length) return i.pending.length || o(), null;
                    i.toLoad.forEach((t => {
                        this.loadOne(t)
                    }))
                }
                load(t, e, n) {
                    this.prepareLoading(t, e, {}, n)
                }
                reload(t, e, n) {
                    this.prepareLoading(t, e, {
                        reload: !0
                    }, n)
                }
                loadOne(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    const n = t.split("|"),
                        o = n[0],
                        i = n[1];
                    this.read(o, i, "read", void 0, void 0, ((n, r) => {
                        n && this.logger.warn(`${e}loading namespace ${i} for language ${o} failed`, n), !n && r && this.logger.log(`${e}loaded namespace ${i} for language ${o}`, r), this.loaded(t, n, r)
                    }))
                }
                saveMissing(t, e, n, o, i) {
                    let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e)) this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    else if (null != n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            const a = {
                                    ...r,
                                    isUpdate: i
                                },
                                l = this.backend.create.bind(this.backend);
                            if (l.length < 6) try {
                                let i;
                                i = 5 === l.length ? l(t, e, n, o, a) : l(t, e, n, o), i && "function" == typeof i.then ? i.then((t => s(null, t))).catch(s) : s(null, i)
                            } catch (t) {
                                s(t)
                            } else l(t, e, n, o, s, a)
                        }
                        t && t[0] && this.store.addResource(t[0], e, n, o)
                    }
                }
            }

            function I() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(t) {
                        let e = {};
                        if ("object" == typeof t[1] && (e = t[1]), "string" == typeof t[1] && (e.defaultValue = t[1]), "string" == typeof t[2] && (e.tDescription = t[2]), "object" == typeof t[2] || "object" == typeof t[3]) {
                            const n = t[3] || t[2];
                            Object.keys(n).forEach((t => {
                                e[t] = n[t]
                            }))
                        }
                        return e
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: (t, e, n, o) => t,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }
            }

            function D(t) {
                return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t
            }

            function F() {}
            class U extends o {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    var o;
                    if (super(), this.options = D(t), this.services = {}, this.logger = n, this.modules = {
                            external: []
                        }, o = this, Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((t => {
                            "function" == typeof o[t] && (o[t] = o[t].bind(o))
                        })), e && !this.isInitialized && !t.isClone) {
                        if (!this.options.initImmediate) return this.init(t, e), this;
                        setTimeout((() => {
                            this.init(t, e)
                        }), 0)
                    }
                }
                init() {
                    var t = this;
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = arguments.length > 1 ? arguments[1] : void 0;
                    "function" == typeof e && (o = e, e = {}), !e.defaultNS && !1 !== e.defaultNS && e.ns && ("string" == typeof e.ns ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
                    const i = I();

                    function r(t) {
                        return t ? "function" == typeof t ? new t : t : null
                    }
                    if (this.options = {
                            ...i,
                            ...this.options,
                            ...D(e)
                        }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                            ...i.interpolation,
                            ...this.options.interpolation
                        }), void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator), !this.options.isClone) {
                        let e;
                        this.modules.logger ? n.init(r(this.modules.logger), this.options) : n.init(null, this.options), this.modules.formatter ? e = this.modules.formatter : "undefined" != typeof Intl && (e = $);
                        const o = new k(this.options);
                        this.store = new v(this.options.resources, this.options);
                        const s = this.services;
                        s.logger = n, s.resourceStore = this.store, s.languageUtils = o, s.pluralResolver = new E(o, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), !e || this.options.interpolation.format && this.options.interpolation.format !== i.interpolation.format || (s.formatter = r(e), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new C(this.options), s.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, s.backendConnector = new A(r(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", (function(e) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                            t.emit(e, ...o)
                        })), this.modules.languageDetector && (s.languageDetector = r(this.modules.languageDetector), s.languageDetector.init && s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = r(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new x(this.services, this.options), this.translator.on("*", (function(e) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                            t.emit(e, ...o)
                        })), this.modules.external.forEach((t => {
                            t.init && t.init(this)
                        }))
                    }
                    if (this.format = this.options.interpolation.format, o || (o = F), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        const t = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        t.length > 0 && "dev" !== t[0] && (this.options.lng = t[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((e => {
                        this[e] = function() {
                            return t.store[e](...arguments)
                        }
                    })), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((e => {
                        this[e] = function() {
                            return t.store[e](...arguments), t
                        }
                    }));
                    const a = s(),
                        l = () => {
                            const t = (t, e) => {
                                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(e), o(t, e)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return t(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, t)
                        };
                    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), a
                }
                loadResources(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F;
                    const n = "string" == typeof t ? t : this.language;
                    if ("function" == typeof t && (e = t), !this.options.resources || this.options.partialBundledLanguages) {
                        if (n && "cimode" === n.toLowerCase()) return e();
                        const t = [],
                            o = e => {
                                e && this.services.languageUtils.toResolveHierarchy(e).forEach((e => {
                                    t.indexOf(e) < 0 && t.push(e)
                                }))
                            };
                        n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((t => o(t))), this.options.preload && this.options.preload.forEach((t => o(t))), this.services.backendConnector.load(t, this.options.ns, (t => {
                            t || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), e(t)
                        }))
                    } else e(null)
                }
                reloadResources(t, e, n) {
                    const o = s();
                    return t || (t = this.languages), e || (e = this.options.ns), n || (n = F), this.services.backendConnector.reload(t, e, (t => {
                        o.resolve(), n(t)
                    })), o
                }
                use(t) {
                    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === t.type && (this.modules.backend = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "i18nFormat" === t.type && (this.modules.i18nFormat = t), "postProcessor" === t.type && b.addPostProcessor(t), "formatter" === t.type && (this.modules.formatter = t), "3rdParty" === t.type && this.modules.external.push(t), this
                }
                setResolvedLanguage(t) {
                    if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
                        for (let t = 0; t < this.languages.length; t++) {
                            const e = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                                this.resolvedLanguage = e;
                                break
                            }
                        }
                }
                changeLanguage(t, e) {
                    var n = this;
                    this.isLanguageChangingTo = t;
                    const o = s();
                    this.emit("languageChanging", t);
                    const i = t => {
                            this.language = t, this.languages = this.services.languageUtils.toResolveHierarchy(t), this.resolvedLanguage = void 0, this.setResolvedLanguage(t)
                        },
                        r = (t, r) => {
                            r ? (i(r), this.translator.changeLanguage(r), this.isLanguageChangingTo = void 0, this.emit("languageChanged", r), this.logger.log("languageChanged", r)) : this.isLanguageChangingTo = void 0, o.resolve((function() {
                                return n.t(...arguments)
                            })), e && e(t, (function() {
                                return n.t(...arguments)
                            }))
                        },
                        a = e => {
                            t || e || !this.services.languageDetector || (e = []);
                            const n = "string" == typeof e ? e : this.services.languageUtils.getBestMatchFromCodes(e);
                            n && (this.language || i(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, (t => {
                                r(t, n)
                            }))
                        };
                    return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t) : a(this.services.languageDetector.detect()), o
                }
                getFixedT(t, e, n) {
                    var o = this;
                    const i = function(t, e) {
                        let r;
                        if ("object" != typeof e) {
                            for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) a[l - 2] = arguments[l];
                            r = o.options.overloadTranslationOptionHandler([t, e].concat(a))
                        } else r = {
                            ...e
                        };
                        r.lng = r.lng || i.lng, r.lngs = r.lngs || i.lngs, r.ns = r.ns || i.ns, r.keyPrefix = r.keyPrefix || n || i.keyPrefix;
                        const u = o.options.keySeparator || ".";
                        let c;
                        return c = r.keyPrefix && Array.isArray(t) ? t.map((t => `${r.keyPrefix}${u}${t}`)) : r.keyPrefix ? `${r.keyPrefix}${u}${t}` : t, o.t(c, r)
                    };
                    return "string" == typeof t ? i.lng = t : i.lngs = t, i.ns = e, i.keyPrefix = n, i
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(t) {
                    this.options.defaultNS = t
                }
                hasLoadedNamespace(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    const n = e.lng || this.resolvedLanguage || this.languages[0],
                        o = !!this.options && this.options.fallbackLng,
                        i = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    const r = (t, e) => {
                        const n = this.services.backendConnector.state[`${t}|${e}`];
                        return -1 === n || 2 === n
                    };
                    if (e.precheck) {
                        const t = e.precheck(this, r);
                        if (void 0 !== t) return t
                    }
                    return !(!this.hasResourceBundle(n, t) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!r(n, t) || o && !r(i, t)))
                }
                loadNamespaces(t, e) {
                    const n = s();
                    return this.options.ns ? ("string" == typeof t && (t = [t]), t.forEach((t => {
                        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                    })), this.loadResources((t => {
                        n.resolve(), e && e(t)
                    })), n) : (e && e(), Promise.resolve())
                }
                loadLanguages(t, e) {
                    const n = s();
                    "string" == typeof t && (t = [t]);
                    const o = this.options.preload || [],
                        i = t.filter((t => o.indexOf(t) < 0));
                    return i.length ? (this.options.preload = o.concat(i), this.loadResources((t => {
                        n.resolve(), e && e(t)
                    })), n) : (e && e(), Promise.resolve())
                }
                dir(t) {
                    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
                    const e = this.services && this.services.languageUtils || new k(I());
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(e.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
                static createInstance() {
                    return new U(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                }
                cloneInstance() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F;
                    const n = t.forkResourceStore;
                    n && delete t.forkResourceStore;
                    const o = {
                            ...this.options,
                            ...t,
                            isClone: !0
                        },
                        i = new U(o);
                    return void 0 === t.debug && void 0 === t.prefix || (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((t => {
                        i[t] = this[t]
                    })), i.services = {
                        ...this.services
                    }, i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    }, n && (i.store = new v(this.store.data, o), i.services.resourceStore = i.store), i.translator = new x(i.services, o), i.translator.on("*", (function(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                        i.emit(t, ...n)
                    })), i.init(o, e), i.translator.options = o, i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    }, i
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            const _ = U.createInstance();

            function M(t) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, M(t)
            }
            _.createInstance = U.createInstance, _.createInstance, _.dir, _.init, _.loadResources, _.reloadResources, _.use, _.changeLanguage, _.getFixedT, _.t, _.exists, _.setDefaultNamespace, _.hasLoadedNamespace, _.loadNamespaces, _.loadLanguages;
            var B = [],
                H = B.forEach,
                q = B.slice;

            function V(t) {
                return H.call(q.call(arguments, 1), (function(e) {
                    if (e)
                        for (var n in e) void 0 === t[n] && (t[n] = e[n])
                })), t
            }

            function K() {
                return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : M(XMLHttpRequest))
            }
            var J, z, X, G = i(3154),
                W = i.t(G, 2);

            function Y(t) {
                return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Y(t)
            }
            "function" == typeof fetch && (J = "undefined" != typeof global && global.fetch ? global.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), K() && ("undefined" != typeof global && global.XMLHttpRequest ? z = global.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (z = window.XMLHttpRequest)), "function" == typeof ActiveXObject && ("undefined" != typeof global && global.ActiveXObject ? X = global.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (X = window.ActiveXObject)), J || !W || z || X || (J = G || W), "function" != typeof J && (J = void 0);
            var Q = function(t, e) {
                    if (e && "object" === Y(e)) {
                        var n = "";
                        for (var o in e) n += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
                        if (!n) return t;
                        t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
                    }
                    return t
                },
                Z = function(t, e, n) {
                    var o = function(t) {
                        if (!t.ok) return n(t.statusText || "Error", {
                            status: t.status
                        });
                        t.text().then((function(e) {
                            n(null, {
                                status: t.status,
                                data: e
                            })
                        })).catch(n)
                    };
                    "function" == typeof fetch ? fetch(t, e).then(o).catch(n) : J(t, e).then(o).catch(n)
                },
                tt = !1,
                et = function(t, e, n, o) {
                    return "function" == typeof n && (o = n, n = void 0), o = o || function() {}, J && 0 !== e.indexOf("file:") ? function(t, e, n, o) {
                        t.queryStringParams && (e = Q(e, t.queryStringParams));
                        var i = V({}, "function" == typeof t.customHeaders ? t.customHeaders() : t.customHeaders);
                        n && (i["Content-Type"] = "application/json");
                        var r = "function" == typeof t.requestOptions ? t.requestOptions(n) : t.requestOptions,
                            s = V({
                                method: n ? "POST" : "GET",
                                body: n ? t.stringify(n) : void 0,
                                headers: i
                            }, tt ? {} : r);
                        try {
                            Z(e, s, o)
                        } catch (t) {
                            if (!r || 0 === Object.keys(r).length || !t.message || t.message.indexOf("not implemented") < 0) return o(t);
                            try {
                                Object.keys(r).forEach((function(t) {
                                    delete s[t]
                                })), Z(e, s, o), tt = !0
                            } catch (t) {
                                o(t)
                            }
                        }
                    }(t, e, n, o) : K() || "function" == typeof ActiveXObject ? function(t, e, n, o) {
                        n && "object" === Y(n) && (n = Q("", n).slice(1)), t.queryStringParams && (e = Q(e, t.queryStringParams));
                        try {
                            var i;
                            (i = z ? new z : new X("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", e, 1), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!t.withCredentials, n && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
                            var r = t.customHeaders;
                            if (r = "function" == typeof r ? r() : r)
                                for (var s in r) i.setRequestHeader(s, r[s]);
                            i.onreadystatechange = function() {
                                i.readyState > 3 && o(i.status >= 400 ? i.statusText : null, {
                                    status: i.status,
                                    data: i.responseText
                                })
                            }, i.send(n)
                        } catch (t) {
                            console && console.log(t)
                        }
                    }(t, e, n, o) : void o(new Error("No fetch and no xhr implementation found!"))
                };

            function nt(t) {
                return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, nt(t)
            }

            function ot(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, it(o.key), o)
                }
            }

            function it(t) {
                var e = function(t, e) {
                    if ("object" !== nt(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, "string");
                        if ("object" !== nt(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === nt(e) ? e : String(e)
            }
            var rt = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.services = e, this.options = n, this.allOptions = o, this.type = "backend", this.init(e, n, o)
                }
                var e, n;
                return e = t, n = [{
                    key: "init",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = t, this.options = V(n, this.options || {}, {
                            loadPath: "/locales/{{lng}}/{{ns}}.json",
                            addPath: "/locales/add/{{lng}}/{{ns}}",
                            parse: function(t) {
                                return JSON.parse(t)
                            },
                            stringify: JSON.stringify,
                            parsePayload: function(t, e, n) {
                                return function(t, e, n) {
                                    return (e = it(e)) in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }({}, e, n || "")
                            },
                            parseLoadPayload: function(t, e) {},
                            request: et,
                            reloadInterval: "undefined" == typeof window && 36e5,
                            customHeaders: {},
                            queryStringParams: {},
                            crossDomain: !1,
                            withCredentials: !1,
                            overrideMimeType: !1,
                            requestOptions: {
                                mode: "cors",
                                credentials: "same-origin",
                                cache: "default"
                            }
                        }), this.allOptions = o, this.services && this.options.reloadInterval && setInterval((function() {
                            return e.reload()
                        }), this.options.reloadInterval)
                    }
                }, {
                    key: "readMulti",
                    value: function(t, e, n) {
                        this._readAny(t, t, e, e, n)
                    }
                }, {
                    key: "read",
                    value: function(t, e, n) {
                        this._readAny([t], t, [e], e, n)
                    }
                }, {
                    key: "_readAny",
                    value: function(t, e, n, o, i) {
                        var r, s = this,
                            a = this.options.loadPath;
                        "function" == typeof this.options.loadPath && (a = this.options.loadPath(t, n)), (a = function(t) {
                            return !!t && "function" == typeof t.then
                        }(r = a) ? r : Promise.resolve(r)).then((function(r) {
                            if (!r) return i(null, {});
                            var a = s.services.interpolator.interpolate(r, {
                                lng: t.join("+"),
                                ns: n.join("+")
                            });
                            s.loadUrl(a, i, e, o)
                        }))
                    }
                }, {
                    key: "loadUrl",
                    value: function(t, e, n, o) {
                        var i = this,
                            r = "string" == typeof n ? [n] : n,
                            s = "string" == typeof o ? [o] : o,
                            a = this.options.parseLoadPayload(r, s);
                        this.options.request(this.options, t, a, (function(r, s) {
                            if (s && (s.status >= 500 && s.status < 600 || !s.status)) return e("failed loading " + t + "; status code: " + s.status, !0);
                            if (s && s.status >= 400 && s.status < 500) return e("failed loading " + t + "; status code: " + s.status, !1);
                            if (!s && r && r.message && r.message.indexOf("Failed to fetch") > -1) return e("failed loading " + t + ": " + r.message, !0);
                            if (r) return e(r, !1);
                            var a, l;
                            try {
                                a = "string" == typeof s.data ? i.options.parse(s.data, n, o) : s.data
                            } catch (e) {
                                l = "failed parsing " + t + " to json"
                            }
                            if (l) return e(l, !1);
                            e(null, a)
                        }))
                    }
                }, {
                    key: "create",
                    value: function(t, e, n, o, i) {
                        var r = this;
                        if (this.options.addPath) {
                            "string" == typeof t && (t = [t]);
                            var s = this.options.parsePayload(e, n, o),
                                a = 0,
                                l = [],
                                u = [];
                            t.forEach((function(n) {
                                var o = r.options.addPath;
                                "function" == typeof r.options.addPath && (o = r.options.addPath(n, e));
                                var c = r.services.interpolator.interpolate(o, {
                                    lng: n,
                                    ns: e
                                });
                                r.options.request(r.options, c, s, (function(e, n) {
                                    a += 1, l.push(e), u.push(n), a === t.length && "function" == typeof i && i(l, u)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "reload",
                    value: function() {
                        var t = this,
                            e = this.services,
                            n = e.backendConnector,
                            o = e.languageUtils,
                            i = e.logger,
                            r = n.language;
                        if (!r || "cimode" !== r.toLowerCase()) {
                            var s = [],
                                a = function(t) {
                                    o.toResolveHierarchy(t).forEach((function(t) {
                                        s.indexOf(t) < 0 && s.push(t)
                                    }))
                                };
                            a(r), this.allOptions.preload && this.allOptions.preload.forEach((function(t) {
                                return a(t)
                            })), s.forEach((function(e) {
                                t.allOptions.ns.forEach((function(t) {
                                    n.read(e, t, "read", null, null, (function(o, r) {
                                        o && i.warn("loading namespace ".concat(t, " for language ").concat(e, " failed"), o), !o && r && i.log("loaded namespace ".concat(t, " for language ").concat(e), r), n.loaded("".concat(e, "|").concat(t), o, r)
                                    }))
                                }))
                            }))
                        }
                    }
                }], n && ot(e.prototype, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            rt.type = "backend";
            var st = rt;

            function at(t) {
                return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, at(t)
            }

            function lt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, (i = o.key, r = void 0, r = function(t, e) {
                        if ("object" !== at(t) || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(t, "string");
                            if ("object" !== at(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(i), "symbol" === at(r) ? r : String(r)), o)
                }
                var i, r
            }
            var ut = [],
                ct = ut.forEach,
                pt = ut.slice,
                ht = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                ft = {
                    name: "cookie",
                    lookup: function(t) {
                        var e;
                        if (t.lookupCookie && "undefined" != typeof document) {
                            var n = function(t) {
                                for (var e = "".concat(t, "="), n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                                    for (var i = n[o];
                                        " " === i.charAt(0);) i = i.substring(1, i.length);
                                    if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
                                }
                                return null
                            }(t.lookupCookie);
                            n && (e = n)
                        }
                        return e
                    },
                    cacheUserLanguage: function(t, e) {
                        e.lookupCookie && "undefined" != typeof document && function(t, e, n, o) {
                            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                path: "/",
                                sameSite: "strict"
                            };
                            n && (i.expires = new Date, i.expires.setTime(i.expires.getTime() + 60 * n * 1e3)), o && (i.domain = o), document.cookie = function(t, e, n) {
                                var o = n || {};
                                o.path = o.path || "/";
                                var i = encodeURIComponent(e),
                                    r = "".concat(t, "=").concat(i);
                                if (o.maxAge > 0) {
                                    var s = o.maxAge - 0;
                                    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
                                    r += "; Max-Age=".concat(Math.floor(s))
                                }
                                if (o.domain) {
                                    if (!ht.test(o.domain)) throw new TypeError("option domain is invalid");
                                    r += "; Domain=".concat(o.domain)
                                }
                                if (o.path) {
                                    if (!ht.test(o.path)) throw new TypeError("option path is invalid");
                                    r += "; Path=".concat(o.path)
                                }
                                if (o.expires) {
                                    if ("function" != typeof o.expires.toUTCString) throw new TypeError("option expires is invalid");
                                    r += "; Expires=".concat(o.expires.toUTCString())
                                }
                                if (o.httpOnly && (r += "; HttpOnly"), o.secure && (r += "; Secure"), o.sameSite) switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                                    case !0:
                                        r += "; SameSite=Strict";
                                        break;
                                    case "lax":
                                        r += "; SameSite=Lax";
                                        break;
                                    case "strict":
                                        r += "; SameSite=Strict";
                                        break;
                                    case "none":
                                        r += "; SameSite=None";
                                        break;
                                    default:
                                        throw new TypeError("option sameSite is invalid")
                                }
                                return r
                            }(t, encodeURIComponent(e), i)
                        }(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain, e.cookieOptions)
                    }
                },
                dt = {
                    name: "querystring",
                    lookup: function(t) {
                        var e;
                        if ("undefined" != typeof window) {
                            var n = window.location.search;
                            !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                            for (var o = n.substring(1).split("&"), i = 0; i < o.length; i++) {
                                var r = o[i].indexOf("=");
                                r > 0 && o[i].substring(0, r) === t.lookupQuerystring && (e = o[i].substring(r + 1))
                            }
                        }
                        return e
                    }
                },
                gt = null,
                yt = function() {
                    if (null !== gt) return gt;
                    try {
                        gt = "undefined" !== window && null !== window.localStorage;
                        var t = "i18next.translate.boo";
                        window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t)
                    } catch (t) {
                        gt = !1
                    }
                    return gt
                },
                mt = {
                    name: "localStorage",
                    lookup: function(t) {
                        var e;
                        if (t.lookupLocalStorage && yt()) {
                            var n = window.localStorage.getItem(t.lookupLocalStorage);
                            n && (e = n)
                        }
                        return e
                    },
                    cacheUserLanguage: function(t, e) {
                        e.lookupLocalStorage && yt() && window.localStorage.setItem(e.lookupLocalStorage, t)
                    }
                },
                vt = null,
                bt = function() {
                    if (null !== vt) return vt;
                    try {
                        vt = "undefined" !== window && null !== window.sessionStorage;
                        var t = "i18next.translate.boo";
                        window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t)
                    } catch (t) {
                        vt = !1
                    }
                    return vt
                },
                wt = {
                    name: "sessionStorage",
                    lookup: function(t) {
                        var e;
                        if (t.lookupSessionStorage && bt()) {
                            var n = window.sessionStorage.getItem(t.lookupSessionStorage);
                            n && (e = n)
                        }
                        return e
                    },
                    cacheUserLanguage: function(t, e) {
                        e.lookupSessionStorage && bt() && window.sessionStorage.setItem(e.lookupSessionStorage, t)
                    }
                },
                xt = {
                    name: "navigator",
                    lookup: function(t) {
                        var e = [];
                        if ("undefined" != typeof navigator) {
                            if (navigator.languages)
                                for (var n = 0; n < navigator.languages.length; n++) e.push(navigator.languages[n]);
                            navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
                        }
                        return e.length > 0 ? e : void 0
                    }
                },
                St = {
                    name: "htmlTag",
                    lookup: function(t) {
                        var e, n = t.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                        return n && "function" == typeof n.getAttribute && (e = n.getAttribute("lang")), e
                    }
                },
                kt = {
                    name: "path",
                    lookup: function(t) {
                        var e;
                        if ("undefined" != typeof window) {
                            var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                            if (n instanceof Array)
                                if ("number" == typeof t.lookupFromPathIndex) {
                                    if ("string" != typeof n[t.lookupFromPathIndex]) return;
                                    e = n[t.lookupFromPathIndex].replace("/", "")
                                } else e = n[0].replace("/", "")
                        }
                        return e
                    }
                },
                Ot = {
                    name: "subdomain",
                    lookup: function(t) {
                        var e = "number" == typeof t.lookupFromSubdomainIndex ? t.lookupFromSubdomainIndex + 1 : 1,
                            n = "undefined" != typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
                        if (n) return n[e]
                    }
                },
                Lt = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                    }
                    var e, n;
                    return e = t, n = [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = t || {
                                languageUtils: {}
                            }, this.options = function(t) {
                                return ct.call(pt.call(arguments, 1), (function(e) {
                                    if (e)
                                        for (var n in e) void 0 === t[n] && (t[n] = e[n])
                                })), t
                            }(e, this.options || {}, {
                                order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                lookupQuerystring: "lng",
                                lookupCookie: "i18next",
                                lookupLocalStorage: "i18nextLng",
                                lookupSessionStorage: "i18nextLng",
                                caches: ["localStorage"],
                                excludeCacheFor: ["cimode"],
                                convertDetectedLanguage: function(t) {
                                    return t
                                }
                            }), "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(t) {
                                return t.replace("-", "_")
                            }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(ft), this.addDetector(dt), this.addDetector(mt), this.addDetector(wt), this.addDetector(xt), this.addDetector(St), this.addDetector(kt), this.addDetector(Ot)
                        }
                    }, {
                        key: "addDetector",
                        value: function(t) {
                            this.detectors[t.name] = t
                        }
                    }, {
                        key: "detect",
                        value: function(t) {
                            var e = this;
                            t || (t = this.options.order);
                            var n = [];
                            return t.forEach((function(t) {
                                if (e.detectors[t]) {
                                    var o = e.detectors[t].lookup(e.options);
                                    o && "string" == typeof o && (o = [o]), o && (n = n.concat(o))
                                }
                            })), n = n.map((function(t) {
                                return e.options.convertDetectedLanguage(t)
                            })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                        }
                    }, {
                        key: "cacheUserLanguage",
                        value: function(t, e) {
                            var n = this;
                            e || (e = this.options.caches), e && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || e.forEach((function(e) {
                                n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options)
                            })))
                        }
                    }], n && lt(e.prototype, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            Lt.type = "languageDetector"
        }(), r
    }()
}));
