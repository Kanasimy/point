! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./", e(e.s = 4)
}([function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    var n, r;
    /*!
     * jQuery JavaScript Library v3.2.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2017-03-20T18:59Z
     */
    ! function(e, i) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, function(i, o) {
        "use strict";

        function s(t, e) {
            e = e || st;
            var i = e.createElement("script");
            i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
        }

        function a(t) {
            var e = !!t && "length" in t && t.length,
                i = yt.type(t);
            return "function" !== i && !yt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function l(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function c(t, e, i) {
            return yt.isFunction(e) ? yt.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? yt.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? yt.grep(t, function(t) {
                return ht.call(e, t) > -1 !== i
            }) : Pt.test(e) ? yt.filter(e, t, i) : (e = yt.filter(e, t), yt.grep(t, function(t) {
                return ht.call(e, t) > -1 !== i && 1 === t.nodeType
            }))
        }

        function u(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function h(t) {
            var e = {};
            return yt.each(t.match(Dt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function p(t) {
            return t
        }

        function d(t) {
            throw t
        }

        function f(t, e, i, n) {
            var r;
            try {
                t && yt.isFunction(r = t.promise) ? r.call(t).done(e).fail(i) : t && yt.isFunction(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }

        function m() {
            st.removeEventListener("DOMContentLoaded", m), i.removeEventListener("load", m), yt.ready()
        }

        function v() {
            this.expando = yt.expando + v.uid++
        }

        function g(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t)
        }

        function y(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(Xt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = g(i)
                    } catch (t) {}
                    Bt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function _(t, e, i, n) {
            var r, o = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return yt.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (yt.cssNumber[e] ? "" : "px"),
                u = (yt.cssNumber[e] || "px" !== c && +l) && qt.exec(yt.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], i = i || [], u = +l || 1;
                do {
                    o = o || ".5", u /= o, yt.style(t, e, u + c)
                } while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
        }

        function b(t) {
            var e, i = t.ownerDocument,
                n = t.nodeName,
                r = Ut[n];
            return r || (e = i.body.appendChild(i.createElement(n)), r = yt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Ut[n] = r, r)
        }

        function T(t, e) {
            for (var i, n, r = [], o = 0, s = t.length; o < s; o++) n = t[o], n.style && (i = n.style.display, e ? ("none" === i && (r[o] = Ft.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && Vt(n) && (r[o] = b(n))) : "none" !== i && (r[o] = "none", Ft.set(n, "display", i)));
            for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }

        function x(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && l(t, e) ? yt.merge([t], i) : i
        }

        function w(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Ft.set(t[i], "globalEval", !e || Ft.get(e[i], "globalEval"))
        }

        function C(t, e, i, n, r) {
            for (var o, s, a, l, c, u, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
                if ((o = t[d]) || 0 === o)
                    if ("object" === yt.type(o)) yt.merge(p, o.nodeType ? [o] : o);
                    else if (Jt.test(o)) {
                        for (s = s || h.appendChild(e.createElement("div")), a = (Gt.exec(o) || ["", ""])[1].toLowerCase(), l = Qt[a] || Qt._default, s.innerHTML = l[1] + yt.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                        yt.merge(p, s.childNodes), s = h.firstChild, s.textContent = ""
                    } else p.push(e.createTextNode(o));
            for (h.textContent = "", d = 0; o = p[d++];)
                if (n && yt.inArray(o, n) > -1) r && r.push(o);
                else if (c = yt.contains(o.ownerDocument, o), s = x(h.appendChild(o), "script"), c && w(s), i)
                    for (u = 0; o = s[u++];) Kt.test(o.type || "") && i.push(o);
            return h
        }

        function k() {
            return !0
        }

        function S() {
            return !1
        }

        function E() {
            try {
                return st.activeElement
            } catch (t) {}
        }

        function P(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) P(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = S;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) {
                return yt().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = yt.guid++)), t.each(function() {
                yt.event.add(this, e, r, n, i)
            })
        }

        function A(t, e) {
            return l(t, "table") && l(11 !== e.nodeType ? e : e.firstChild, "tr") ? yt(">tbody", t)[0] || t : t
        }

        function O(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function M(t) {
            var e = se.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function j(t, e) {
            var i, n, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (Ft.hasData(t) && (o = Ft.access(t), s = Ft.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                        for (i = 0, n = c[r].length; i < n; i++) yt.event.add(e, r, c[r][i])
                }
                Bt.hasData(t) && (a = Bt.access(t), l = yt.extend({}, a), Bt.set(e, l))
            }
        }

        function D(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && $t.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function R(t, e, i, n) {
            e = ct.apply([], e);
            var r, o, a, l, c, u, h = 0,
                p = t.length,
                d = p - 1,
                f = e[0],
                m = yt.isFunction(f);
            if (m || p > 1 && "string" == typeof f && !gt.checkClone && oe.test(f)) return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = f.call(this, r, o.html())), R(o, e, i, n)
            });
            if (p && (r = C(e, t[0].ownerDocument, !1, t, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
                for (a = yt.map(x(r, "script"), O), l = a.length; h < p; h++) c = r, h !== d && (c = yt.clone(c, !0, !0), l && yt.merge(a, x(c, "script"))), i.call(t[h], c, h);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, yt.map(a, M), h = 0; h < l; h++) c = a[h], Kt.test(c.type || "") && !Ft.access(c, "globalEval") && yt.contains(u, c) && (c.src ? yt._evalUrl && yt._evalUrl(c.src) : s(c.textContent.replace(ae, ""), u))
            }
            return t
        }

        function N(t, e, i) {
            for (var n, r = e ? yt.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || yt.cleanData(x(n)), n.parentNode && (i && yt.contains(n.ownerDocument, n) && w(x(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function L(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || ue(t), i && (s = i.getPropertyValue(e) || i[e], "" !== s || yt.contains(t.ownerDocument, t) || (s = yt.style(t, e)), !gt.pixelMarginRight() && ce.test(s) && le.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function I(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function F(t) {
            if (t in ve) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = me.length; i--;)
                if ((t = me[i] + e) in ve) return t
        }

        function B(t) {
            var e = yt.cssProps[t];
            return e || (e = yt.cssProps[t] = F(t) || t), e
        }

        function H(t, e, i) {
            var n = qt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function X(t, e, i, n, r) {
            var o, s = 0;
            for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (s += yt.css(t, i + Yt[o], !0, r)), n ? ("content" === i && (s -= yt.css(t, "padding" + Yt[o], !0, r)), "margin" !== i && (s -= yt.css(t, "border" + Yt[o] + "Width", !0, r))) : (s += yt.css(t, "padding" + Yt[o], !0, r), "padding" !== i && (s += yt.css(t, "border" + Yt[o] + "Width", !0, r)));
            return s
        }

        function z(t, e, i) {
            var n, r = ue(t),
                o = L(t, e, r),
                s = "border-box" === yt.css(t, "boxSizing", !1, r);
            return ce.test(o) ? o : (n = s && (gt.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + X(t, e, i || (s ? "border" : "content"), n, r) + "px")
        }

        function q(t, e, i, n, r) {
            return new q.prototype.init(t, e, i, n, r)
        }

        function Y() {
            ye && (!1 === st.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(Y) : i.setTimeout(Y, yt.fx.interval), yt.fx.tick())
        }

        function V() {
            return i.setTimeout(function() {
                ge = void 0
            }), ge = yt.now()
        }

        function W(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Yt[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function U(t, e, i) {
            for (var n, r = (K.tweeners[e] || []).concat(K.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function $(t, e, i) {
            var n, r, o, s, a, l, c, u, h = "width" in e || "height" in e,
                p = this,
                d = {},
                f = t.style,
                m = t.nodeType && Vt(t),
                v = Ft.get(t, "fxshow");
            i.queue || (s = yt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, yt.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (n in e)
                if (r = e[n], _e.test(r)) {
                    if (delete e[n], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[n]) continue;
                        m = !0
                    }
                    d[n] = v && v[n] || yt.style(t, n)
                }
            if ((l = !yt.isEmptyObject(e)) || !yt.isEmptyObject(d)) {
                h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = v && v.display, null == c && (c = Ft.get(t, "display")), u = yt.css(t, "display"), "none" === u && (c ? u = c : (T([t], !0), c = t.style.display || c, u = yt.css(t, "display"), T([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === yt.css(t, "float") && (l || (p.done(function() {
                    f.display = c
                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function() {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1;
                for (n in d) l || (v ? "hidden" in v && (m = v.hidden) : v = Ft.access(t, "fxshow", {
                    display: c
                }), o && (v.hidden = !m), m && T([t], !0), p.done(function() {
                    m || T([t]), Ft.remove(t, "fxshow");
                    for (n in d) yt.style(t, n, d[n])
                })), l = U(m ? v[n] : 0, n, p), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function G(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (n = yt.camelCase(i), r = e[n], o = t[i], Array.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (s = yt.cssHooks[n]) && "expand" in s) {
                    o = s.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = r)
                } else e[n] = r
        }

        function K(t, e, i) {
            var n, r, o = 0,
                s = K.prefilters.length,
                a = yt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = ge || V(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, i]), o < 1 && l ? i : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: yt.extend({}, e),
                    opts: yt.extend(!0, {
                        specialEasing: {},
                        easing: yt.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: ge || V(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = yt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i < n; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (G(u, c.opts.specialEasing); o < s; o++)
                if (n = K.prefilters[o].call(c, t, u, c.opts)) return yt.isFunction(n.stop) && (yt._queueHooks(c.elem, c.opts.queue).stop = yt.proxy(n.stop, n)), n;
            return yt.map(u, U, c), yt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), yt.fx.timer(yt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function Q(t) {
            return (t.match(Dt) || []).join(" ")
        }

        function J(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Z(t, e, i, n) {
            var r;
            if (Array.isArray(e)) yt.each(e, function(e, r) {
                i || Oe.test(t) ? n(t, r) : Z(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== yt.type(e)) n(t, e);
            else
                for (r in e) Z(t + "[" + r + "]", e[r], i, n)
        }

        function tt(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(Dt) || [];
                if (yt.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function et(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, yt.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                s = t === ze;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function it(t, e) {
            var i, n, r = yt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && yt.extend(!0, t, n), t
        }

        function nt(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in a)
                    if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), i[o]
        }

        function rt(t, e, i, n) {
            var r, o, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: e
            }
        }
        var ot = [],
            st = i.document,
            at = Object.getPrototypeOf,
            lt = ot.slice,
            ct = ot.concat,
            ut = ot.push,
            ht = ot.indexOf,
            pt = {},
            dt = pt.toString,
            ft = pt.hasOwnProperty,
            mt = ft.toString,
            vt = mt.call(Object),
            gt = {},
            yt = function(t, e) {
                return new yt.fn.init(t, e)
            },
            _t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            bt = /^-ms-/,
            Tt = /-([a-z])/g,
            xt = function(t, e) {
                return e.toUpperCase()
            };
        yt.fn = yt.prototype = {
            jquery: "3.2.1",
            constructor: yt,
            length: 0,
            toArray: function() {
                return lt.call(this)
            },
            get: function(t) {
                return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = yt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return yt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(yt.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(lt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ut,
            sort: ot.sort,
            splice: ot.splice
        }, yt.extend = yt.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || yt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], n = t[e], s !== n && (c && n && (yt.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = i && Array.isArray(i) ? i : []) : o = i && yt.isPlainObject(i) ? i : {}, s[e] = yt.extend(c, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, yt.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === yt.type(t)
            },
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = yt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== dt.call(t)) && (!(e = at(t)) || "function" == typeof(i = ft.call(e, "constructor") && e.constructor) && mt.call(i) === vt)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[dt.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                s(t)
            },
            camelCase: function(t) {
                return t.replace(bt, "ms-").replace(Tt, xt)
            },
            each: function(t, e) {
                var i, n = 0;
                if (a(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(_t, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (a(Object(t)) ? yt.merge(i, "string" == typeof t ? [t] : t) : ut.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : ht.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, o = t.length, s = !i; r < o; r++) !e(t[r], r) !== s && n.push(t[r]);
                return n
            },
            map: function(t, e, i) {
                var n, r, o = 0,
                    s = [];
                if (a(t))
                    for (n = t.length; o < n; o++) null != (r = e(t[o], o, i)) && s.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, i)) && s.push(r);
                return ct.apply([], s)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                if ("string" == typeof e && (i = t[e], e = t, t = i), yt.isFunction(t)) return n = lt.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(lt.call(arguments)))
                }, r.guid = t.guid = t.guid || yt.guid++, r
            },
            now: Date.now,
            support: gt
        }), "function" == typeof Symbol && (yt.fn[Symbol.iterator] = ot[Symbol.iterator]), yt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            pt["[object " + e + "]"] = e.toLowerCase()
        });
        var wt =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(t) {
                function e(t, e, i, n) {
                    var r, o, s, a, l, u, p, d = e && e.ownerDocument,
                        f = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
                    if (!n && ((e ? e.ownerDocument || e : B) !== M && O(e), e = e || M, D)) {
                        if (11 !== f && (l = mt.exec(t)))
                            if (r = l[1]) {
                                if (9 === f) {
                                    if (!(s = e.getElementById(r))) return i;
                                    if (s.id === r) return i.push(s), i
                                } else if (d && (s = d.getElementById(r)) && I(e, s) && s.id === r) return i.push(s), i
                            } else {
                                if (l[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                                if ((r = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(r)), i
                            }
                        if (b.qsa && !Y[t + " "] && (!R || !R.test(t))) {
                            if (1 !== f) d = e, p = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(_t, bt) : e.setAttribute("id", a = F), u = C(t), o = u.length; o--;) u[o] = "#" + a + " " + h(u[o]);
                                p = u.join(","), d = vt.test(t) && c(e.parentNode) || e
                            }
                            if (p) try {
                                return K.apply(i, d.querySelectorAll(p)), i
                            } catch (t) {} finally {
                                a === F && e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(ot, "$1"), e, i, n)
                }

                function i() {
                    function t(i, n) {
                        return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
                    }
                    var e = [];
                    return t
                }

                function n(t) {
                    return t[F] = !0, t
                }

                function r(t) {
                    var e = M.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
                }

                function s(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && xt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function l(t) {
                    return n(function(e) {
                        return e = +e, n(function(i, n) {
                            for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                        })
                    })
                }

                function c(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                function u() {}

                function h(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function p(t, e, i) {
                    var n = e.dir,
                        r = e.next,
                        o = r || n,
                        s = i && "parentNode" === o,
                        a = X++;
                    return e.first ? function(e, i, r) {
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) return t(e, i, r);
                        return !1
                    } : function(e, i, l) {
                        var c, u, h, p = [H, a];
                        if (l) {
                            for (; e = e[n];)
                                if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                        } else
                            for (; e = e[n];)
                                if (1 === e.nodeType || s)
                                    if (h = e[F] || (e[F] = {}), u = h[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
                                    else {
                                        if ((c = u[o]) && c[0] === H && c[1] === a) return p[2] = c[2];
                                        if (u[o] = p, p[2] = t(e, i, l)) return !0
                                    } return !1
                    }
                }

                function d(t) {
                    return t.length > 1 ? function(e, i, n) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function f(t, i, n) {
                    for (var r = 0, o = i.length; r < o; r++) e(t, i[r], n);
                    return n
                }

                function m(t, e, i, n, r) {
                    for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
                    return s
                }

                function v(t, e, i, r, o, s) {
                    return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), n(function(n, s, a, l) {
                        var c, u, h, p = [],
                            d = [],
                            v = s.length,
                            g = n || f(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !n && e ? g : m(g, p, t, a, l),
                            _ = i ? o || (n ? t : v || r) ? [] : s : y;
                        if (i && i(y, _, a, l), r)
                            for (c = m(_, d), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[d[u]] = !(y[d[u]] = h));
                        if (n) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], u = _.length; u--;)(h = _[u]) && c.push(y[u] = h);
                                    o(null, _ = [], c, l)
                                }
                                for (u = _.length; u--;)(h = _[u]) && (c = o ? J(n, h) : p[u]) > -1 && (n[c] = !(s[c] = h))
                            }
                        } else _ = m(_ === s ? _.splice(v, _.length) : _), o ? o(null, s, _, l) : K.apply(s, _)
                    })
                }

                function g(t) {
                    for (var e, i, n, r = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, s, !0), c = p(function(t) {
                        return J(e, t) > -1
                    }, s, !0), u = [function(t, i, n) {
                        var r = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, r
                    }]; a < r; a++)
                        if (i = T.relative[t[a].type]) u = [p(d(u), i)];
                        else {
                            if (i = T.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                                for (n = ++a; n < r && !T.relative[t[n].type]; n++);
                                return v(a > 1 && d(u), a > 1 && h(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ot, "$1"), i, a < n && g(t.slice(a, n)), n < r && g(t = t.slice(n)), n < r && h(t))
                            }
                            u.push(i)
                        }
                    return d(u)
                }

                function y(t, i) {
                    var r = i.length > 0,
                        o = t.length > 0,
                        s = function(n, s, a, l, c) {
                            var u, h, p, d = 0,
                                f = "0",
                                v = n && [],
                                g = [],
                                y = E,
                                _ = n || o && T.find.TAG("*", c),
                                b = H += null == y ? 1 : Math.random() || .1,
                                x = _.length;
                            for (c && (E = s === M || s || c); f !== x && null != (u = _[f]); f++) {
                                if (o && u) {
                                    for (h = 0, s || u.ownerDocument === M || (O(u), a = !D); p = t[h++];)
                                        if (p(u, s || M, a)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (H = b)
                                }
                                r && ((u = !p && u) && d--, n && v.push(u))
                            }
                            if (d += f, r && f !== d) {
                                for (h = 0; p = i[h++];) p(v, g, s, a);
                                if (n) {
                                    if (d > 0)
                                        for (; f--;) v[f] || g[f] || (g[f] = $.call(l));
                                    g = m(g)
                                }
                                K.apply(l, g), c && !n && g.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                            }
                            return c && (H = b, E = y), v
                        };
                    return r ? n(s) : s
                }
                var _, b, T, x, w, C, k, S, E, P, A, O, M, j, D, R, N, L, I, F = "sizzle" + 1 * new Date,
                    B = t.document,
                    H = 0,
                    X = 0,
                    z = i(),
                    q = i(),
                    Y = i(),
                    V = function(t, e) {
                        return t === e && (A = !0), 0
                    },
                    W = {}.hasOwnProperty,
                    U = [],
                    $ = U.pop,
                    G = U.push,
                    K = U.push,
                    Q = U.slice,
                    J = function(t, e) {
                        for (var i = 0, n = t.length; i < n; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    tt = "[\\x20\\t\\r\\n\\f]",
                    et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                    nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                    rt = new RegExp(tt + "+", "g"),
                    ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                    st = new RegExp("^" + tt + "*," + tt + "*"),
                    at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                    lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                    ct = new RegExp(nt),
                    ut = new RegExp("^" + et + "$"),
                    ht = {
                        ID: new RegExp("^#(" + et + ")"),
                        CLASS: new RegExp("^\\.(" + et + ")"),
                        TAG: new RegExp("^(" + et + "|[*])"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + nt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pt = /^(?:input|select|textarea|button)$/i,
                    dt = /^h\d$/i,
                    ft = /^[^{]+\{\s*\[native \w/,
                    mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    vt = /[+~]/,
                    gt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                    yt = function(t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    _t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    bt = function(t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    Tt = function() {
                        O()
                    },
                    xt = p(function(t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    K.apply(U = Q.call(B.childNodes), B.childNodes), U[B.childNodes.length].nodeType
                } catch (t) {
                    K = {
                        apply: U.length ? function(t, e) {
                            G.apply(t, Q.call(e))
                        } : function(t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }
                b = e.support = {}, w = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, O = e.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : B;
                    return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, j = M.documentElement, D = !w(M), B !== M && (i = M.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), b.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), b.getElementsByTagName = r(function(t) {
                        return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                    }), b.getElementsByClassName = ft.test(M.getElementsByClassName), b.getById = r(function(t) {
                        return j.appendChild(t).id = F, !M.getElementsByName || !M.getElementsByName(F).length
                    }), b.getById ? (T.filter.ID = function(t) {
                        var e = t.replace(gt, yt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, T.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && D) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (T.filter.ID = function(t) {
                        var e = t.replace(gt, yt);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, T.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && D) {
                            var i, n, r, o = e.getElementById(t);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                for (r = e.getElementsByName(t), n = 0; o = r[n++];)
                                    if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                            }
                            return []
                        }
                    }), T.find.TAG = b.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, T.find.CLASS = b.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && D) return e.getElementsByClassName(t)
                    }, N = [], R = [], (b.qsa = ft.test(M.querySelectorAll)) && (r(function(t) {
                        j.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + F + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]")
                    }), r(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = M.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), j.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
                    })), (b.matchesSelector = ft.test(L = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(t) {
                        b.disconnectedMatch = L.call(t, "*"), L.call(t, "[s!='']:x"), N.push("!=", nt)
                    }), R = R.length && new RegExp(R.join("|")), N = N.length && new RegExp(N.join("|")), e = ft.test(j.compareDocumentPosition), I = e || ft.test(j.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, V = e ? function(t, e) {
                        if (t === e) return A = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === M || t.ownerDocument === B && I(B, t) ? -1 : e === M || e.ownerDocument === B && I(B, e) ? 1 : P ? J(P, t) - J(P, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return A = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!r || !o) return t === M ? -1 : e === M ? 1 : r ? -1 : o ? 1 : P ? J(P, t) - J(P, e) : 0;
                        if (r === o) return s(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (; a[n] === l[n];) n++;
                        return n ? s(a[n], l[n]) : a[n] === B ? -1 : l[n] === B ? 1 : 0
                    }, M) : M
                }, e.matches = function(t, i) {
                    return e(t, null, null, i)
                }, e.matchesSelector = function(t, i) {
                    if ((t.ownerDocument || t) !== M && O(t), i = i.replace(lt, "='$1']"), b.matchesSelector && D && !Y[i + " "] && (!N || !N.test(i)) && (!R || !R.test(i))) try {
                        var n = L.call(t, i);
                        if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return e(i, M, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== M && O(t), I(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== M && O(t);
                    var i = T.attrHandle[e.toLowerCase()],
                        n = i && W.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
                    return void 0 !== n ? n : b.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, e.escape = function(t) {
                    return (t + "").replace(_t, bt)
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        r = 0;
                    if (A = !b.detectDuplicates, P = !b.sortStable && t.slice(0), t.sort(V), A) {
                        for (; e = t[r++];) e === t[r] && (n = i.push(r));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return P = null, t
                }, x = e.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += x(e);
                    return i
                }, T = e.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: ht,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(gt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(gt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(gt, yt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = z[t + " "];
                            return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, i, n) {
                            return function(r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, u, h, p, d, f, m = o !== s ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    g = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    _ = !1;
                                if (v) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = e; p = p[m];)
                                                if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (p = v, h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], d = c[0] === H && c[1], _ = d && c[2], p = d && v.childNodes[d]; p = ++d && p && p[m] || (_ = d = 0) || f.pop();)
                                            if (1 === p.nodeType && ++_ && p === e) {
                                                u[t] = [H, d, _];
                                                break
                                            }
                                    } else if (y && (p = e, h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], d = c[0] === H && c[1], _ = d), !1 === _)
                                        for (;
                                            (p = ++d && p && p[m] || (_ = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++_ || (y && (h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), u[t] = [H, _]), p !== e)););
                                    return (_ -= r) === n || _ % n == 0 && _ / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, i) {
                            var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[F] ? o(i) : o.length > 1 ? (r = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                                for (var n, r = o(t, i), s = r.length; s--;) n = J(t, r[s]), t[n] = !(e[n] = r[s])
                            }) : function(t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: n(function(t) {
                            var e = [],
                                i = [],
                                r = k(t.replace(ot, "$1"));
                            return r[F] ? n(function(t, e, i, n) {
                                for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, n, o) {
                                return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: n(function(t) {
                            return function(i) {
                                return e(t, i).length > 0
                            }
                        }),
                        contains: n(function(t) {
                            return t = t.replace(gt, yt),
                                function(e) {
                                    return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                                }
                        }),
                        lang: n(function(t) {
                            return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(gt, yt).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === j
                        },
                        focus: function(t) {
                            return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: a(!1),
                        disabled: a(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !T.pseudos.empty(t)
                        },
                        header: function(t) {
                            return dt.test(t.nodeName)
                        },
                        input: function(t) {
                            return pt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(t, e) {
                            return [e - 1]
                        }),
                        eq: l(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: l(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: l(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: l(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: l(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[_] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(_);
                for (_ in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[_] = function(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }(_);
                return u.prototype = T.filters = T.pseudos, T.setFilters = new u, C = e.tokenize = function(t, i) {
                    var n, r, o, s, a, l, c, u = q[t + " "];
                    if (u) return i ? 0 : u.slice(0);
                    for (a = t, l = [], c = T.preFilter; a;) {
                        n && !(r = st.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = at.exec(a)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(ot, " ")
                        }), a = a.slice(n.length));
                        for (s in T.filter) !(r = ht[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: s,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return i ? a.length : a ? e.error(t) : q(t, l).slice(0)
                }, k = e.compile = function(t, e) {
                    var i, n = [],
                        r = [],
                        o = Y[t + " "];
                    if (!o) {
                        for (e || (e = C(t)), i = e.length; i--;) o = g(e[i]), o[F] ? n.push(o) : r.push(o);
                        o = Y(t, y(r, n)), o.selector = t
                    }
                    return o
                }, S = e.select = function(t, e, i, n) {
                    var r, o, s, a, l, u = "function" == typeof t && t,
                        p = !n && C(t = u.selector || t);
                    if (i = i || [], 1 === p.length) {
                        if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && D && T.relative[o[1].type]) {
                            if (!(e = (T.find.ID(s.matches[0].replace(gt, yt), e) || [])[0])) return i;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                            if ((l = T.find[a]) && (n = l(s.matches[0].replace(gt, yt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(r, 1), !(t = n.length && h(o))) return K.apply(i, n), i;
                                break
                            }
                    }
                    return (u || k(t, p))(n, e, !D, i, !e || vt.test(t) && c(e.parentNode) || e), i
                }, b.sortStable = F.split("").sort(V).join("") === F, b.detectDuplicates = !!A, O(), b.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(M.createElement("fieldset"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(Z, function(t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), e
            }(i);
        yt.find = wt, yt.expr = wt.selectors, yt.expr[":"] = yt.expr.pseudos, yt.uniqueSort = yt.unique = wt.uniqueSort, yt.text = wt.getText, yt.isXMLDoc = wt.isXML, yt.contains = wt.contains, yt.escapeSelector = wt.escape;
        var Ct = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                     (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && yt(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            kt = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            St = yt.expr.match.needsContext,
            Et = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Pt = /^.[^:#\[\.,]*$/;
        yt.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? yt.find.matchesSelector(n, t) ? [n] : [] : yt.find.matches(t, yt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, yt.fn.extend({
            find: function(t) {
                var e, i, n = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(yt(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (yt.contains(r[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) yt.find(t, r[e], i);
                return n > 1 ? yt.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(c(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(c(this, t || [], !0))
            },
            is: function(t) {
                return !!c(this, "string" == typeof t && St.test(t) ? yt(t) : t || [], !1).length
            }
        });
        var At, Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (yt.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || At, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ot.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof yt ? e[0] : e, yt.merge(this, yt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : st, !0)), Et.test(n[1]) && yt.isPlainObject(e))
                        for (n in e) yt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = st.getElementById(n[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : yt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(yt) : yt.makeArray(t, this)
        }).prototype = yt.fn, At = yt(st);
        var Mt = /^(?:parents|prev(?:Until|All))/,
            jt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        yt.fn.extend({
            has: function(t) {
                var e = yt(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (yt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof t && yt(t);
                if (!St.test(t))
                    for (; n < r; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && yt.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            }
                return this.pushStack(o.length > 1 ? yt.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ht.call(yt(t), this[0]) : ht.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(yt.uniqueSort(yt.merge(this.get(), yt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), yt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Ct(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return Ct(t, "parentNode", i)
            },
            next: function(t) {
                return u(t, "nextSibling")
            },
            prev: function(t) {
                return u(t, "previousSibling")
            },
            nextAll: function(t) {
                return Ct(t, "nextSibling")
            },
            prevAll: function(t) {
                return Ct(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return Ct(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return Ct(t, "previousSibling", i)
            },
            siblings: function(t) {
                return kt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return kt(t.firstChild)
            },
            contents: function(t) {
                return l(t, "iframe") ? t.contentDocument : (l(t, "template") && (t = t.content || t), yt.merge([], t.childNodes))
            }
        }, function(t, e) {
            yt.fn[t] = function(i, n) {
                var r = yt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = yt.filter(n, r)), this.length > 1 && (jt[t] || yt.uniqueSort(r), Mt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var Dt = /[^\x20\t\r\n\f]+/g;
        yt.Callbacks = function(t) {
            t = "string" == typeof t ? h(t) : yt.extend({}, t);
            var e, i, n, r, o = [],
                s = [],
                a = -1,
                l = function() {
                    for (r = r || t.once, n = e = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                            yt.each(i, function(i, n) {
                                yt.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== yt.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return yt.each(arguments, function(t, e) {
                            for (var i;
                                 (i = yt.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? yt.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = i = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = s = [], i || e || (o = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = i || [], i = [t, i.slice ? i.slice() : i], s.push(i), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, yt.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", yt.Callbacks("memory"), yt.Callbacks("memory"), 2],
                        ["resolve", "done", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return yt.Deferred(function(i) {
                                yt.each(e, function(e, n) {
                                    var r = yt.isFunction(t[n[4]]) && t[n[4]];
                                    o[n[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && yt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            function o(t, e, n, r) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        c = function() {
                                            var i, c;
                                            if (!(t < s)) {
                                                if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                c = i && ("object" == typeof i || "function" == typeof i) && i.then, yt.isFunction(c) ? r ? c.call(i, o(s, e, p, r), o(s, e, d, r)) : (s++, c.call(i, o(s, e, p, r), o(s, e, d, r), o(s, e, p, e.notifyWith))) : (n !== p && (a = void 0, l = [i]), (r || e.resolveWith)(a, l))
                                            }
                                        },
                                        u = r ? c : function() {
                                            try {
                                                c()
                                            } catch (i) {
                                                yt.Deferred.exceptionHook && yt.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= s && (n !== d && (a = void 0, l = [i]), e.rejectWith(a, l))
                                            }
                                        };
                                    t ? u() : (yt.Deferred.getStackHook && (u.stackTrace = yt.Deferred.getStackHook()), i.setTimeout(u))
                                }
                            }
                            var s = 0;
                            return yt.Deferred(function(i) {
                                e[0][3].add(o(0, i, yt.isFunction(r) ? r : p, i.notifyWith)), e[1][3].add(o(0, i, yt.isFunction(t) ? t : p)), e[2][3].add(o(0, i, yt.isFunction(n) ? n : d))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? yt.extend(t, r) : r
                        }
                    },
                    o = {};
                return yt.each(e, function(t, i) {
                    var s = i[2],
                        a = i[5];
                    r[i[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[3 - t][2].disable, e[0][2].lock), s.add(i[3].fire), o[i[0]] = function() {
                        return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[i[0] + "With"] = s.fireWith
                }), r.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    r = lt.call(arguments),
                    o = yt.Deferred(),
                    s = function(t) {
                        return function(i) {
                            n[t] = this, r[t] = arguments.length > 1 ? lt.call(arguments) : i, --e || o.resolveWith(n, r)
                        }
                    };
                if (e <= 1 && (f(t, o.done(s(i)).resolve, o.reject, !e), "pending" === o.state() || yt.isFunction(r[i] && r[i].then))) return o.then();
                for (; i--;) f(r[i], s(i), o.reject);
                return o.promise()
            }
        });
        var Rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        yt.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && Rt.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, yt.readyException = function(t) {
            i.setTimeout(function() {
                throw t
            })
        };
        var Nt = yt.Deferred();
        yt.fn.ready = function(t) {
            return Nt.then(t).catch(function(t) {
                yt.readyException(t)
            }), this
        }, yt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --yt.readyWait : yt.isReady) || (yt.isReady = !0, !0 !== t && --yt.readyWait > 0 || Nt.resolveWith(st, [yt]))
            }
        }), yt.ready.then = Nt.then, "complete" === st.readyState || "loading" !== st.readyState && !st.documentElement.doScroll ? i.setTimeout(yt.ready) : (st.addEventListener("DOMContentLoaded", m), i.addEventListener("load", m));
        var Lt = function(t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === yt.type(i)) {
                    r = !0;
                    for (a in i) Lt(t, e, a, i[a], !0, o, s)
                } else if (void 0 !== n && (r = !0, yt.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(yt(t), i)
                    })), e))
                    for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
            },
            It = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        v.uid = 1, v.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, It(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[yt.camelCase(e)] = i;
                else
                    for (n in e) r[yt.camelCase(n)] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][yt.camelCase(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(yt.camelCase) : (e = yt.camelCase(e), e = e in n ? [e] : e.match(Dt) || []), i = e.length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || yt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !yt.isEmptyObject(e)
            }
        };
        var Ft = new v,
            Bt = new v,
            Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Xt = /[A-Z]/g;
        yt.extend({
            hasData: function(t) {
                return Bt.hasData(t) || Ft.hasData(t)
            },
            data: function(t, e, i) {
                return Bt.access(t, e, i)
            },
            removeData: function(t, e) {
                Bt.remove(t, e)
            },
            _data: function(t, e, i) {
                return Ft.access(t, e, i)
            },
            _removeData: function(t, e) {
                Ft.remove(t, e)
            }
        }), yt.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Bt.get(o), 1 === o.nodeType && !Ft.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = yt.camelCase(n.slice(5)), y(o, n, r[n])));
                        Ft.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Bt.set(this, t)
                }) : Lt(this, function(e) {
                    var i;
                    if (o && void 0 === e) {
                        if (void 0 !== (i = Bt.get(o, t))) return i;
                        if (void 0 !== (i = y(o, t))) return i
                    } else this.each(function() {
                        Bt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Bt.remove(this, t)
                })
            }
        }), yt.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = Ft.get(t, e), i && (!n || Array.isArray(i) ? n = Ft.access(t, e, yt.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = yt.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = yt._queueHooks(t, e),
                    s = function() {
                        yt.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Ft.get(t, i) || Ft.access(t, i, {
                    empty: yt.Callbacks("once memory").add(function() {
                        Ft.remove(t, [e + "queue", i])
                    })
                })
            }
        }), yt.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? yt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = yt.queue(this, t, e);
                    yt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && yt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    yt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = yt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = Ft.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            qt = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
            Yt = ["Top", "Right", "Bottom", "Left"],
            Vt = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && yt.contains(t.ownerDocument, t) && "none" === yt.css(t, "display")
            },
            Wt = function(t, e, i, n) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = i.apply(t, n || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            Ut = {};
        yt.fn.extend({
            show: function() {
                return T(this, !0)
            },
            hide: function() {
                return T(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Vt(this) ? yt(this).show() : yt(this).hide()
                })
            }
        });
        var $t = /^(?:checkbox|radio)$/i,
            Gt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Kt = /^$|\/(?:java|ecma)script/i,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td;
        var Jt = /<|&#?\w+;/;
        ! function() {
            var t = st.createDocumentFragment(),
                e = t.appendChild(st.createElement("div")),
                i = st.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), gt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", gt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Zt = st.documentElement,
            te = /^key/,
            ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ie = /^([^.]*)(?:\.(.+)|)/;
        yt.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, p, d, f, m, v = Ft.get(t);
                if (v)
                    for (i.handler && (o = i, i = o.handler, r = o.selector), r && yt.find.matchesSelector(Zt, r), i.guid || (i.guid = yt.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== yt && yt.event.triggered !== e.type ? yt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(Dt) || [""], c = e.length; c--;) a = ie.exec(e[c]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d && (h = yt.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = yt.event.special[d] || {}, u = yt.extend({
                        type: d,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && yt.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), yt.event.global[d] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, p, d, f, m, v = Ft.hasData(t) && Ft.get(t);
                if (v && (l = v.events)) {
                    for (e = (e || "").match(Dt) || [""], c = e.length; c--;)
                        if (a = ie.exec(e[c]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d) {
                            for (h = yt.event.special[d] || {}, d = (n ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                            s && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, v.handle) || yt.removeEvent(t, d, v.handle), delete l[d])
                        } else
                            for (d in l) yt.event.remove(t, d + e[c], i, n, !0);
                    yt.isEmptyObject(l) && Ft.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, r, o, s, a = yt.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Ft.get(this, "events") || {})[a.type] || [],
                    u = yt.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = yt.event.handlers.call(this, a, c), e = 0;
                         (r = s[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = r.elem, i = 0;
                             (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((yt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (o = [], s = {}, i = 0; i < l; i++) n = e[i], r = n.selector + " ", void 0 === s[r] && (s[r] = n.needsContext ? yt(r, this).index(c) > -1 : yt.find(r, this, null, [c]).length), s[r] && o.push(n);
                            o.length && a.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(yt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: yt.isFunction(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[yt.expando] ? t : new yt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== E() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === E() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return l(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, yt.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, yt.Event = function(t, e) {
            if (!(this instanceof yt.Event)) return new yt.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? k : S, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && yt.extend(this, e), this.timeStamp = t && t.timeStamp || yt.now(), this[yt.expando] = !0
        }, yt.Event.prototype = {
            constructor: yt.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, yt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && te.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ee.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, yt.event.addProp), yt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            yt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === n || yt.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), yt.fn.extend({
            on: function(t, e, i, n) {
                return P(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return P(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, yt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = S), this.each(function() {
                    yt.event.remove(this, t, i, e)
                })
            }
        });
        var ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            re = /<script|<style|<link/i,
            oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            se = /^true\/(.*)/,
            ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        yt.extend({
            htmlPrefilter: function(t) {
                return t.replace(ne, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = yt.contains(t.ownerDocument, t);
                if (!(gt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || yt.isXMLDoc(t)))
                    for (s = x(a), o = x(t), n = 0, r = o.length; n < r; n++) D(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || x(t), s = s || x(a), n = 0, r = o.length; n < r; n++) j(o[n], s[n]);
                    else j(t, a);
                return s = x(a, "script"), s.length > 0 && w(s, !l && x(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = yt.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (It(i)) {
                        if (e = i[Ft.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? yt.event.remove(i, n) : yt.removeEvent(i, n, e.handle);
                            i[Ft.expando] = void 0
                        }
                        i[Bt.expando] && (i[Bt.expando] = void 0)
                    }
            }
        }), yt.fn.extend({
            detach: function(t) {
                return N(this, t, !0)
            },
            remove: function(t) {
                return N(this, t)
            },
            text: function(t) {
                return Lt(this, function(t) {
                    return void 0 === t ? yt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return R(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        A(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return R(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = A(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (yt.cleanData(x(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return yt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Lt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !re.test(t) && !Qt[(Gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = yt.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (yt.cleanData(x(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return R(this, arguments, function(e) {
                    var i = this.parentNode;
                    yt.inArray(this, t) < 0 && (yt.cleanData(x(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), yt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            yt.fn[t] = function(t) {
                for (var i, n = [], r = yt(t), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), yt(r[s])[e](i), ut.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var le = /^margin/,
            ce = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
            ue = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = i), e.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(s);
                    var t = i.getComputedStyle(a);
                    e = "1%" !== t.top, o = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Zt.removeChild(s), a = null
                }
            }
            var e, n, r, o, s = st.createElement("div"),
                a = st.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", gt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), yt.extend(gt, {
                pixelPosition: function() {
                    return t(), e
                },
                boxSizingReliable: function() {
                    return t(), n
                },
                pixelMarginRight: function() {
                    return t(), r
                },
                reliableMarginLeft: function() {
                    return t(), o
                }
            }))
        }();
        var he = /^(none|table(?!-c[ea]).+)/,
            pe = /^--/,
            de = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            me = ["Webkit", "Moz", "ms"],
            ve = st.createElement("div").style;
        yt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = L(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = yt.camelCase(e),
                        l = pe.test(e),
                        c = t.style;
                    if (l || (e = B(a)), s = yt.cssHooks[e] || yt.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : c[e];
                    o = typeof i, "string" === o && (r = qt.exec(i)) && r[1] && (i = _(t, e, r), o = "number"), null != i && i === i && ("number" === o && (i += r && r[3] || (yt.cssNumber[a] ? "" : "px")), gt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = yt.camelCase(e);
                return pe.test(e) || (e = B(a)), s = yt.cssHooks[e] || yt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = L(t, e, n)), "normal" === r && e in fe && (r = fe[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
            }
        }), yt.each(["height", "width"], function(t, e) {
            yt.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return !he.test(yt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? z(t, e, n) : Wt(t, de, function() {
                        return z(t, e, n)
                    })
                },
                set: function(t, i, n) {
                    var r, o = n && ue(t),
                        s = n && X(t, e, n, "border-box" === yt.css(t, "boxSizing", !1, o), o);
                    return s && (r = qt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = yt.css(t, e)), H(t, i, s)
                }
            }
        }), yt.cssHooks.marginLeft = I(gt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(L(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), yt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            yt.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + Yt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, le.test(t) || (yt.cssHooks[t + e].set = H)
        }), yt.fn.extend({
            css: function(t, e) {
                return Lt(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (n = ue(t), r = e.length; s < r; s++) o[e[s]] = yt.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? yt.style(t, e, i) : yt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), yt.Tween = q, q.prototype = {
            constructor: q,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || yt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (yt.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = q.propHooks[this.prop];
                return t && t.get ? t.get(this) : q.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = q.propHooks[this.prop];
                return this.options.duration ? this.pos = e = yt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : q.propHooks._default.set(this), this
            }
        }, q.prototype.init.prototype = q.prototype, q.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = yt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    yt.fx.step[t.prop] ? yt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[yt.cssProps[t.prop]] && !yt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : yt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, yt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, yt.fx = q.prototype.init, yt.fx.step = {};
        var ge, ye, _e = /^(?:toggle|show|hide)$/,
            be = /queueHooks$/;
        yt.Animation = yt.extend(K, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return _(i.elem, t, qt.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                yt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], K.tweeners[i] = K.tweeners[i] || [], K.tweeners[i].unshift(e)
            },
            prefilters: [$],
            prefilter: function(t, e) {
                e ? K.prefilters.unshift(t) : K.prefilters.push(t)
            }
        }), yt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? yt.extend({}, t) : {
                complete: i || !i && e || yt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !yt.isFunction(e) && e
            };
            return yt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in yt.fx.speeds ? n.duration = yt.fx.speeds[n.duration] : n.duration = yt.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                yt.isFunction(n.old) && n.old.call(this), n.queue && yt.dequeue(this, n.queue)
            }, n
        }, yt.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Vt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = yt.isEmptyObject(t),
                    o = yt.speed(e, i, n),
                    s = function() {
                        var e = K(this, yt.extend({}, t), o);
                        (r || Ft.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = yt.timers,
                        s = Ft.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && be.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    !e && i || yt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = Ft.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        o = yt.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, yt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), yt.each(["toggle", "show", "hide"], function(t, e) {
            var i = yt.fn[e];
            yt.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(W(e, !0), t, n, r)
            }
        }), yt.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            yt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), yt.timers = [], yt.fx.tick = function() {
            var t, e = 0,
                i = yt.timers;
            for (ge = yt.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || yt.fx.stop(), ge = void 0
        }, yt.fx.timer = function(t) {
            yt.timers.push(t), yt.fx.start()
        }, yt.fx.interval = 13, yt.fx.start = function() {
            ye || (ye = !0, Y())
        }, yt.fx.stop = function() {
            ye = null
        }, yt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, yt.fn.delay = function(t, e) {
            return t = yt.fx ? yt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var r = i.setTimeout(e, t);
                n.stop = function() {
                    i.clearTimeout(r)
                }
            })
        },
            function() {
                var t = st.createElement("input"),
                    e = st.createElement("select"),
                    i = e.appendChild(st.createElement("option"));
                t.type = "checkbox", gt.checkOn = "" !== t.value, gt.optSelected = i.selected, t = st.createElement("input"), t.value = "t", t.type = "radio", gt.radioValue = "t" === t.value
            }();
        var Te, xe = yt.expr.attrHandle;
        yt.fn.extend({
            attr: function(t, e) {
                return Lt(this, yt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    yt.removeAttr(this, t)
                })
            }
        }), yt.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? yt.prop(t, e, i) : (1 === o && yt.isXMLDoc(t) || (r = yt.attrHooks[e.toLowerCase()] || (yt.expr.match.bool.test(e) ? Te : void 0)), void 0 !== i ? null === i ? void yt.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : (n = yt.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!gt.radioValue && "radio" === e && l(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0,
                    r = e && e.match(Dt);
                if (r && 1 === t.nodeType)
                    for (; i = r[n++];) t.removeAttribute(i)
            }
        }), Te = {
            set: function(t, e, i) {
                return !1 === e ? yt.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, yt.each(yt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = xe[e] || yt.find.attr;
            xe[e] = function(t, e, n) {
                var r, o, s = e.toLowerCase();
                return n || (o = xe[s], xe[s] = r, r = null != i(t, e, n) ? s : null, xe[s] = o), r
            }
        });
        var we = /^(?:input|select|textarea|button)$/i,
            Ce = /^(?:a|area)$/i;
        yt.fn.extend({
            prop: function(t, e) {
                return Lt(this, yt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[yt.propFix[t] || t]
                })
            }
        }), yt.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && yt.isXMLDoc(t) || (e = yt.propFix[e] || e, r = yt.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = yt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : we.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), gt.optSelected || (yt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), yt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            yt.propFix[this.toLowerCase()] = this
        }), yt.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (yt.isFunction(t)) return this.each(function(e) {
                    yt(this).addClass(t.call(this, e, J(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; i = this[l++];)
                        if (r = J(i), n = 1 === i.nodeType && " " + Q(r) + " ") {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = Q(n), r !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (yt.isFunction(t)) return this.each(function(e) {
                    yt(this).removeClass(t.call(this, e, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; i = this[l++];)
                        if (r = J(i), n = 1 === i.nodeType && " " + Q(r) + " ") {
                            for (s = 0; o = e[s++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            a = Q(n), r !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : yt.isFunction(t) ? this.each(function(i) {
                    yt(this).toggleClass(t.call(this, i, J(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i)
                        for (n = 0, r = yt(this), o = t.match(Dt) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = J(this), e && Ft.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ft.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + Q(J(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ke = /\r/g;
        yt.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0]; {
                    if (arguments.length) return n = yt.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? t.call(this, i, yt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = yt.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = yt.valHooks[this.type] || yt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (e = yt.valHooks[r.type] || yt.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(ke, "") : null == i ? "" : i)
                }
            }
        }), yt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = yt.find.attr(t, "value");
                        return null != e ? e : Q(yt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, r = t.options,
                            o = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            c = s ? o + 1 : r.length;
                        for (n = o < 0 ? c : s ? o : 0; n < c; n++)
                            if (i = r[n], (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !l(i.parentNode, "optgroup"))) {
                                if (e = yt(i).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = yt.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = yt.inArray(yt.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), yt.each(["radio", "checkbox"], function() {
            yt.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = yt.inArray(yt(t).val(), e) > -1
                }
            }, gt.checkOn || (yt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Se = /^(?:focusinfocus|focusoutblur)$/;
        yt.extend(yt.event, {
            trigger: function(t, e, n, r) {
                var o, s, a, l, c, u, h, p = [n || st],
                    d = ft.call(t, "type") ? t.type : t,
                    f = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = n = n || st, 3 !== n.nodeType && 8 !== n.nodeType && !Se.test(d + yt.event.triggered) && (d.indexOf(".") > -1 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[yt.expando] ? t : new yt.Event(d, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : yt.makeArray(e, [t]), h = yt.event.special[d] || {}, r || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                    if (!r && !h.noBubble && !yt.isWindow(n)) {
                        for (l = h.delegateType || d, Se.test(l + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (n.ownerDocument || st) && p.push(a.defaultView || a.parentWindow || i)
                    }
                    for (o = 0;
                         (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : h.bindType || d, u = (Ft.get(s, "events") || {})[t.type] && Ft.get(s, "handle"), u && u.apply(s, e), (u = c && s[c]) && u.apply && It(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = d, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), e) || !It(n) || c && yt.isFunction(n[d]) && !yt.isWindow(n) && (a = n[c], a && (n[c] = null), yt.event.triggered = d, n[d](), yt.event.triggered = void 0, a && (n[c] = a)), t.result
                }
            },
            simulate: function(t, e, i) {
                var n = yt.extend(new yt.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                yt.event.trigger(n, null, e)
            }
        }), yt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    yt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return yt.event.trigger(t, e, i, !0)
            }
        }), yt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            yt.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), yt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), gt.focusin = "onfocusin" in i, gt.focusin || yt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                yt.event.simulate(e, t.target, yt.event.fix(t))
            };
            yt.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = Ft.access(n, e);
                    r || n.addEventListener(t, i, !0), Ft.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = Ft.access(n, e) - 1;
                    r ? Ft.access(n, e, r) : (n.removeEventListener(t, i, !0), Ft.remove(n, e))
                }
            }
        });
        var Ee = i.location,
            Pe = yt.now(),
            Ae = /\?/;
        yt.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || yt.error("Invalid XML: " + t), e
        };
        var Oe = /\[\]$/,
            Me = /\r?\n/g,
            je = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;
        yt.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    var i = yt.isFunction(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (Array.isArray(t) || t.jquery && !yt.isPlainObject(t)) yt.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) Z(i, t[i], e, r);
            return n.join("&")
        }, yt.fn.extend({
            serialize: function() {
                return yt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = yt.prop(this, "elements");
                    return t ? yt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !yt(this).is(":disabled") && De.test(this.nodeName) && !je.test(t) && (this.checked || !$t.test(t))
                }).map(function(t, e) {
                    var i = yt(this).val();
                    return null == i ? null : Array.isArray(i) ? yt.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Me, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Me, "\r\n")
                    }
                }).get()
            }
        });
        var Re = /%20/g,
            Ne = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Be = /^(?:GET|HEAD)$/,
            He = /^\/\//,
            Xe = {},
            ze = {},
            qe = "*/".concat("*"),
            Ye = st.createElement("a");
        Ye.href = Ee.href, yt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ee.href,
                type: "GET",
                isLocal: Fe.test(Ee.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": yt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? it(it(t, yt.ajaxSettings), e) : it(yt.ajaxSettings, t)
            },
            ajaxPrefilter: tt(Xe),
            ajaxTransport: tt(ze),
            ajax: function(t, e) {
                function n(t, e, n, a) {
                    var c, p, d, b, T, x = e;
                    u || (u = !0, l && i.clearTimeout(l), r = void 0, s = a || "", w.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (b = nt(f, w, n)), b = rt(f, b, w, c), c ? (f.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (yt.lastModified[o] = T), (T = w.getResponseHeader("etag")) && (yt.etag[o] = T)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, p = b.data, d = b.error, c = !d)) : (d = x, !t && x || (x = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || x) + "", c ? g.resolveWith(m, [p, x, w]) : g.rejectWith(m, [w, x, d]), w.statusCode(_), _ = void 0, h && v.trigger(c ? "ajaxSuccess" : "ajaxError", [w, f, c ? p : d]), y.fireWith(m, [w, x]), h && (v.trigger("ajaxComplete", [w, f]), --yt.active || yt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, o, s, a, l, c, u, h, p, d, f = yt.ajaxSetup({}, e),
                    m = f.context || f,
                    v = f.context && (m.nodeType || m.jquery) ? yt(m) : yt.event,
                    g = yt.Deferred(),
                    y = yt.Callbacks("once memory"),
                    _ = f.statusCode || {},
                    b = {},
                    T = {},
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (u) {
                                if (!a)
                                    for (a = {}; e = Ie.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return u ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == u && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t, b[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == u && (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (u) w.always(t[w.status]);
                                else
                                    for (e in t) _[e] = [_[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return r && r.abort(e), n(0, e), this
                        }
                    };
                if (g.promise(w), f.url = ((t || f.url || Ee.href) + "").replace(He, Ee.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Dt) || [""], null == f.crossDomain) {
                    c = st.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = Ye.protocol + "//" + Ye.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = yt.param(f.data, f.traditional)), et(Xe, f, e, w), u) return w;
                h = yt.event && f.global, h && 0 == yt.active++ && yt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Be.test(f.type), o = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Re, "+")) : (d = f.url.slice(o.length), f.data && (o += (Ae.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Le, "$1"), d = (Ae.test(o) ? "&" : "?") + "_=" + Pe++ + d), f.url = o + d), f.ifModified && (yt.lastModified[o] && w.setRequestHeader("If-Modified-Since", yt.lastModified[o]), yt.etag[o] && w.setRequestHeader("If-None-Match", yt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]);
                for (p in f.headers) w.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || u)) return w.abort();
                if (x = "abort", y.add(f.complete), w.done(f.success), w.fail(f.error), r = et(ze, f, e, w)) {
                    if (w.readyState = 1, h && v.trigger("ajaxSend", [w, f]), u) return w;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function() {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, r.send(b, n)
                    } catch (t) {
                        if (u) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return yt.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return yt.get(t, void 0, e, "script")
            }
        }), yt.each(["get", "post"], function(t, e) {
            yt[e] = function(t, i, n, r) {
                return yt.isFunction(i) && (r = r || n, n = i, i = void 0), yt.ajax(yt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, yt.isPlainObject(t) && t))
            }
        }), yt._evalUrl = function(t) {
            return yt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, yt.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (yt.isFunction(t) && (t = t.call(this[0])), e = yt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return yt.isFunction(t) ? this.each(function(e) {
                    yt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = yt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = yt.isFunction(t);
                return this.each(function(i) {
                    yt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    yt(this).replaceWith(this.childNodes)
                }), this
            }
        }), yt.expr.pseudos.hidden = function(t) {
            return !yt.expr.pseudos.visible(t)
        }, yt.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, yt.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        };
        var Ve = {
                0: 200,
                1223: 204
            },
            We = yt.ajaxSettings.xhr();
        gt.cors = !!We && "withCredentials" in We, gt.ajax = We = !!We, yt.ajaxTransport(function(t) {
            var e, n;
            if (gt.cors || We && !t.crossDomain) return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    e = function(t) {
                        return function() {
                            e && (e = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ve[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), n = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && i.setTimeout(function() {
                            e && n()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), yt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), yt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return yt.globalEval(t), t
                }
            }
        }), yt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), yt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = yt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), st.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ue = [],
            $e = /(=)\?(?=&|$)|\?\?/;
        yt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ue.pop() || yt.expando + "_" + Pe++;
                return this[t] = !0, t
            }
        }), yt.ajaxPrefilter("json jsonp", function(t, e, n) {
            var r, o, s, a = !1 !== t.jsonp && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = yt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($e, "$1" + r) : !1 !== t.jsonp && (t.url += (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || yt.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = i[r], i[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === o ? yt(i).removeProp(r) : i[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, Ue.push(r)), s && yt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
        }), gt.createHTMLDocument = function() {
            var t = st.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), yt.parseHTML = function(t, e, i) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (i = e, e = !1);
            var n, r, o;
            return e || (gt.createHTMLDocument ? (e = st.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = st.location.href, e.head.appendChild(n)) : e = st), r = Et.exec(t), o = !i && [], r ? [e.createElement(r[1])] : (r = C([t], e, o), o && o.length && yt(o).remove(), yt.merge([], r.childNodes))
        }, yt.fn.load = function(t, e, i) {
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = Q(t.slice(a)), t = t.slice(0, a)), yt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && yt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? yt("<div>").append(yt.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, yt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            yt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), yt.expr.pseudos.animated = function(t) {
            return yt.grep(yt.timers, function(e) {
                return t === e.elem
            }).length
        }, yt.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, c, u = yt.css(t, "position"),
                    h = yt(t),
                    p = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), o = yt.css(t, "top"), l = yt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), yt.isFunction(e) && (e = e.call(t, i, yt.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
            }
        }, yt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    yt.offset.setOffset(this, t, e)
                });
                var e, i, n, r, o = this[0];
                if (o) return o.getClientRects().length ? (n = o.getBoundingClientRect(), e = o.ownerDocument, i = e.documentElement, r = e.defaultView, {
                    top: n.top + r.pageYOffset - i.clientTop,
                    left: n.left + r.pageXOffset - i.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === yt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
                        top: n.top + yt.css(t[0], "borderTopWidth", !0),
                        left: n.left + yt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - n.top - yt.css(i, "marginTop", !0),
                        left: e.left - n.left - yt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === yt.css(t, "position");) t = t.offsetParent;
                    return t || Zt
                })
            }
        }), yt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            yt.fn[t] = function(n) {
                return Lt(this, function(t, n, r) {
                    var o;
                    if (yt.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[n];
                    o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r
                }, t, n, arguments.length)
            }
        }), yt.each(["top", "left"], function(t, e) {
            yt.cssHooks[e] = I(gt.pixelPosition, function(t, i) {
                if (i) return i = L(t, e), ce.test(i) ? yt(t).position()[e] + "px" : i
            })
        }), yt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            yt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                yt.fn[n] = function(r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        a = i || (!0 === r || !0 === o ? "margin" : "border");
                    return Lt(this, function(e, i, r) {
                        var o;
                        return yt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? yt.css(e, i, a) : yt.style(e, i, r, a)
                    }, e, s ? r : void 0, s)
                }
            })
        }), yt.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), yt.holdReady = function(t) {
            t ? yt.readyWait++ : yt.ready(!0)
        }, yt.isArray = Array.isArray, yt.parseJSON = JSON.parse, yt.nodeName = l, n = [], void 0 !== (r = function() {
            return yt
        }.apply(e, n)) && (t.exports = r);
        var Ge = i.jQuery,
            Ke = i.$;
        return yt.noConflict = function(t) {
            return i.$ === yt && (i.$ = Ke), t && i.jQuery === yt && (i.jQuery = Ge), yt
        }, o || (i.jQuery = i.$ = yt), yt
    })
}, function(t, e, i) {
    (function(i) {
        var n, r, o = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
        (o._gsQueue || (o._gsQueue = [])).push(function() {
            "use strict";
            o._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    o = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = o.prototype.render
                    },
                    s = i._internals,
                    a = s.isSelector,
                    l = s.isArray,
                    c = o.prototype = i.to({}, .1, {}),
                    u = [];
                o.version = "1.20.3", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var s = this._totalTime;
                            this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                        } else if (this._initted = !1, this._init(), this._time > 0 || o)
                            for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                    return this
                }, c.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, o, a, l, c, u, h, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        v = this._totalTime,
                        g = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (n = !0, _ > 1e-10 && (o = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === y && _ > 0) && (o = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (_ >= 0 && (n = !0), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (c = this._time / y, u = this._easeType, h = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === h ? c *= c : 2 === h ? c *= c * c : 3 === h ? c *= c * c * c : 4 === h && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), m === this._time && !n && g === this._cycle) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = v, this._rawPrevTime = _, this._cycle = g, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== v || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== p && (this._rawPrevTime = 0)))
                }, o.to = function(t, e, i) {
                    return new o(t, e, i)
                }, o.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                }, o.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                }, o.staggerTo = o.allTo = function(t, e, s, c, h, p, d) {
                    c = c || 0;
                    var f, m, v, g, y = 0,
                        _ = [],
                        b = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), h.apply(d || s.callbackScope || this, p || u)
                        },
                        T = s.cycle,
                        x = s.startAt && s.startAt.cycle;
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], c < 0 && (t = n(t), t.reverse(), c *= -1), f = t.length - 1, v = 0; v <= f; v++) {
                        m = {};
                        for (g in s) m[g] = s[g];
                        if (T && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), x) {
                            x = m.startAt = {};
                            for (g in s.startAt) x[g] = s.startAt[g];
                            r(m.startAt, t, v)
                        }
                        m.delay = y + (m.delay || 0), v === f && h && (m.onComplete = b), _[v] = new o(t[v], e, m), y += c
                    }
                    return _
                }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
                }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
                }, o.delayedCall = function(t, e, i, n, r) {
                    return new o(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function(t, e) {
                    return new o(t, 0, e)
                }, o.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var h = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(h(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    p = o.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                o.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = p(0 != r),
                        c = l.length,
                        u = i && n && r;
                    for (a = 0; a < c; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, o.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, c, u, h, p, d = s.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (h = t.length; --h > -1;) o.killChildTweensOf(t[h], e);
                        else {
                            r = [];
                            for (u in d)
                                for (c = d[u].target.parentNode; c;) c === t && (r = r.concat(d[u].tweens)), c = c.parentNode;
                            for (p = r.length, h = 0; h < p; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = !1 !== i, n = !1 !== n, r = !1 !== r;
                    for (var o, s, a = p(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return o.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, o.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, o.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o
            }, !0), o._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = i._internals,
                    s = n._internals = {},
                    a = r.isSelector,
                    l = r.isArray,
                    c = r.lazyTweens,
                    u = r.lazyRender,
                    h = o._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    f = s.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    v = n.prototype = new e;
                return n.version = "1.20.3", v.constructor = n, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function(t, e, n, r) {
                    var o = n.repeat && h.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, v.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, v.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && h.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, v.staggerTo = function(t, e, r, o, s, l, c, u) {
                    var h, f, v = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= -1), f = 0; f < t.length; f++) h = p(r), h.startAt && (h.startAt = p(h.startAt), h.startAt.cycle && d(h.startAt, t, f)), g && (d(h, t, f), null != h.duration && (e = h.duration, delete h.duration)), v.to(t[f], e, h, f * o);
                    return this.add(v, s)
                }, v.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, v.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, v.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, v.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s, a, l = new n(t),
                        c = l._timeline;
                    for (null == e && (e = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, s = c._first; s;) a = s._next, e && s instanceof i && s.target === s.vars.onComplete || (o = s._startTime - s._delay, o < 0 && (r = 1), l.add(s, o)), s = a;
                    return c.add(l, 0), r && l.totalDuration(), l
                }, v.add = function(r, o, s, a) {
                    var c, u, h, p, d, f;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, c = o, u = r.length, h = 0; h < u; h++) l(p = r[h]) && (p = new n({
                                tweens: p
                            })), this.add(p, c), "string" != typeof p && "function" != typeof p && ("sequence" === s ? c = p._startTime + p.totalDuration() / p._timeScale : "start" === s && (p._startTime -= p.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (d = this, f = d.rawTime() > r._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                    return this
                }, v.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, v._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, v.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, v.insert = v.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, v.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, v.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, v.addPause = function(t, e, n, r) {
                    var o = i.delayedCall(0, f, n, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                }, v.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, v.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, v._parseTimeOrLabel = function(e, i, n, r) {
                    var o, s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                    else {
                        if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : o
                    }
                    return Number(e) + i
                }, v.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, v.stop = function() {
                    return this.paused(!0)
                }, v.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, v.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, v.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, s, a, l, h, p = this._time,
                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._startTime,
                        m = this._timeScale,
                        v = this._paused;
                    if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = d + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (a = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                            l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || a || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (h = this._time) >= p)
                            for (n = this._first; n && (o = n._next, h === this._time && (!this._paused || v));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, h === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (l === n) {
                                        for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), s && (this._gc || f !== this._startTime && m === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                    }
                }, v._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, v.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, v.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
                }, v.recent = function() {
                    return this._recent
                }, v._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, v.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, v._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, v.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, v.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, v._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, v.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, v.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, v.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, v.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, v.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, v.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), o._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = e._internals,
                    s = r.lazyTweens,
                    a = r.lazyRender,
                    l = o._gsDefine.globals,
                    c = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.3", u.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, o, s = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = i.repeat && l.TweenMax || e;
                    for (r in i) s[r] = i[r];
                    return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                    }, o
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, l, c, u, h, p, d = this._time,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        v = this._totalTime,
                        g = this._startTime,
                        y = this._timeScale,
                        _ = this._rawPrevTime,
                        b = this._paused,
                        T = this._cycle;
                    if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (c = !0, _ > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === m && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === m && _ < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= d || this._repeat && T !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                        h && h._startTime < m && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== T && !this._locked) {
                        var x = this._yoyo && 0 != (1 & T),
                            w = x === (this._yoyo && 0 != (1 & this._cycle)),
                            C = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            E = this._time;
                        if (this._totalTime = T * m, this._cycle < T ? x = !x : this._totalTime += m, this._time = d, this._rawPrevTime = 0 === m ? _ - 1e-4 : _, this._cycle = T, this._locked = !0, d = x ? 0 : m, this.render(d, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                        if (w && (this._cycle = T, this._locked = !0, d = x ? m + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = E, this._totalTime = C, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== d && this._first || i || c || h)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= d)
                        for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || b));) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (h === n) {
                                    for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                    h = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = o
                        }
                    this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), l && (this._locked || this._gc || g !== this._startTime && y === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; n < l; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; e < n; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
                function() {
                    var t = 180 / Math.PI,
                        e = [],
                        i = [],
                        n = [],
                        r = {},
                        s = o._gsDefine.globals,
                        a = function(t, e, i, n) {
                            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                        },
                        l = function(t, e, i, n) {
                            var r = {
                                    a: t
                                },
                                o = {},
                                s = {},
                                a = {
                                    c: n
                                },
                                l = (t + e) / 2,
                                c = (e + i) / 2,
                                u = (i + n) / 2,
                                h = (l + c) / 2,
                                p = (c + u) / 2,
                                d = (p - h) / 8;
                            return r.b = l + (t - l) / 4, o.b = h + d, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + p) / 2, s.b = p - d, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                        },
                        c = function(t, r, o, s, a) {
                            var c, u, h, p, d, f, m, v, g, y, _, b, T, x = t.length - 1,
                                w = 0,
                                C = t[0].a;
                            for (c = 0; c < x; c++) d = t[w], u = d.a, h = d.d, p = t[w + 1].d, a ? (_ = e[c], b = i[c], T = (b + _) * r * .25 / (s ? .5 : n[c] || .5), f = h - (h - u) * (s ? .5 * r : 0 !== _ ? T / _ : 0), m = h + (p - h) * (s ? .5 * r : 0 !== b ? T / b : 0), v = h - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = h - (h - u) * r * .5, m = h + (p - h) * r * .5, v = h - (f + m) / 2), f += v, m += v, d.c = g = f, d.b = 0 !== c ? C : C = d.a + .6 * (d.c - d.a), d.da = h - u, d.ca = g - u, d.ba = C - u, o ? (y = l(u, C, g, h), t.splice(w, 1, y[0], y[1], y[2], y[3]), w += 4) : w++, C = m;
                            d = t[w], d.b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = C - d.a, o && (y = l(d.a, C, d.c, d.d), t.splice(w, 1, y[0], y[1], y[2], y[3]))
                        },
                        u = function(t, n, r, o) {
                            var s, l, c, u, h, p, d = [];
                            if (o)
                                for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
                            if ((s = t.length - 2) < 0) return d[0] = new a(t[0][n], 0, 0, t[0][n]), d;
                            for (l = 0; l < s; l++) c = t[l][n], u = t[l + 1][n], d[l] = new a(c, 0, 0, u), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                            return d[l] = new a(t[l][n], 0, 0, t[l + 1][n]), d
                        },
                        h = function(t, o, s, a, l, h) {
                            var p, d, f, m, v, g, y, _, b = {},
                                T = [],
                                x = h || t[0];
                            l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1);
                            for (d in t[0]) T.push(d);
                            if (t.length > 1) {
                                for (_ = t[t.length - 1], y = !0, p = T.length; --p > -1;)
                                    if (d = T[p], Math.abs(x[d] - _[d]) > .05) {
                                        y = !1;
                                        break
                                    }
                                y && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
                            }
                            for (e.length = i.length = n.length = 0, p = T.length; --p > -1;) d = T[p], r[d] = -1 !== l.indexOf("," + d + ","), b[d] = u(t, d, r[d], h);
                            for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                            if (!a) {
                                for (p = T.length; --p > -1;)
                                    if (r[d])
                                        for (f = b[T[p]], g = f.length - 1, m = 0; m < g; m++) v = f[m + 1].da / i[m] + f[m].da / e[m] || 0, n[m] = (n[m] || 0) + v * v;
                                for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                            }
                            for (p = T.length, m = s ? 4 : 1; --p > -1;) d = T[p], f = b[d], c(f, o, s, a, r[d]), y && (f.splice(0, m), f.splice(f.length - m, m));
                            return b
                        },
                        p = function(t, e, i) {
                            e = e || "soft";
                            var n, r, o, s, l, c, u, h, p, d, f, m = {},
                                v = "cubic" === e ? 3 : 2,
                                g = "soft" === e,
                                y = [];
                            if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                            for (p in t[0]) y.push(p);
                            for (c = y.length; --c > -1;) {
                                for (p = y[c], m[p] = l = [], d = 0, h = t.length, u = 0; u < h; u++) n = null == i ? t[u][p] : "string" == typeof(f = t[u][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && u > 1 && u < h - 1 && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                                for (h = d - v + 1, d = 0, u = 0; u < h; u += v) n = l[u], r = l[u + 1], o = l[u + 2], s = 2 === v ? 0 : l[u + 3], l[d++] = f = 3 === v ? new a(n, r, o, s) : new a(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                                l.length = d
                            }
                            return m
                        },
                        d = function(t, e, i) {
                            for (var n, r, o, s, a, l, c, u, h, p, d, f = 1 / i, m = t.length; --m > -1;)
                                for (p = t[m], o = p.a, s = p.d - o, a = p.c - o, l = p.b - o, n = r = 0, u = 1; u <= i; u++) c = f * u, h = 1 - c, n = r - (r = (c * c * s + 3 * h * (c * a + h * l)) * c), d = m * i + u - 1, e[d] = (e[d] || 0) + n * n
                        },
                        f = function(t, e) {
                            e = e >> 0 || 6;
                            var i, n, r, o, s = [],
                                a = [],
                                l = 0,
                                c = 0,
                                u = e - 1,
                                h = [],
                                p = [];
                            for (i in t) d(t[i], s, e);
                            for (r = s.length, n = 0; n < r; n++) l += Math.sqrt(s[n]), o = n % e, p[o] = l, o === u && (c += l, o = n / e >> 0, h[o] = p, a[o] = c, l = 0, p = []);
                            return {
                                length: c,
                                lengths: a,
                                segments: h
                            }
                        },
                        m = o._gsDefine.plugin({
                            propName: "bezier",
                            priority: -1,
                            version: "1.3.8",
                            API: 2,
                            global: !0,
                            init: function(t, e, i) {
                                this._target = t, e instanceof Array && (e = {
                                    values: e
                                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                var n, r, o, s, a, l = e.values || [],
                                    c = {},
                                    u = l[0],
                                    d = e.autoRotate || i.vars.orientToBezier;
                                this._autoRotate = d ? d instanceof Array ? d : [
                                    ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                                ] : null;
                                for (n in u) this._props.push(n);
                                for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                    var m = f(this._beziers, this._timeRes);
                                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                }
                                if (d = this._autoRotate)
                                    for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
                                        for (s = 0; s < 3; s++) n = d[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                        n = d[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                    }
                                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                            },
                            set: function(e) {
                                var i, n, r, o, s, a, l, c, u, h, p = this._segCount,
                                    d = this._func,
                                    f = this._target,
                                    m = e !== this._startRatio;
                                if (this._timeRes) {
                                    if (u = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < p - 1) {
                                        for (c = p - 1; r < c && (this._l2 = u[++r]) <= e;);
                                        this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                    } else if (e < this._l1 && r > 0) {
                                        for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                        0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                    }
                                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                        for (c = h.length - 1; r < c && (this._s2 = h[++r]) <= e;);
                                        this._s1 = h[r - 1], this._si = r
                                    } else if (e < this._s1 && r > 0) {
                                        for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                        0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                    }
                                    a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                } else i = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                                for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, f)), d[o] ? f[o](l) : f[o] = l;
                                if (this._autoRotate) {
                                    var v, g, y, _, b, T, x, w = this._autoRotate;
                                    for (r = w.length; --r > -1;) o = w[r][2], T = w[r][3] || 0, x = !0 === w[r][4] ? 1 : t, s = this._beziers[w[r][0]], v = this._beziers[w[r][1]], s && v && (s = s[i], v = v[i], g = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, g += (_ - g) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = v.a + (v.b - v.a) * a, b = v.b + (v.c - v.b) * a, y += (b - y) * a, b += (v.c + (v.d - v.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - g) * x + T : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, f)), d[o] ? f[o](l) : f[o] = l)
                                }
                            }
                        }),
                        v = m.prototype;
                    m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                        return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, m._cssRegister = function() {
                        var t = s.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                n = e._setPluginRatio,
                                r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function(t, e, o, s, a, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }), l = new m;
                                    var c, u, h, p = e.values,
                                        d = p.length - 1,
                                        f = [],
                                        v = {};
                                    if (d < 0) return a;
                                    for (c = 0; c <= d; c++) h = i(t, p[c], s, a, l, d !== c), f[c] = h.end;
                                    for (u in e) v[u] = e[u];
                                    return v.values = f, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (c = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != h.end.left ? [
                                        ["left", "top", "rotation", c, !1]
                                    ] : null != h.end.x && [
                                        ["x", "y", "rotation", c, !1]
                                    ]), v.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(h.proxy, v, s._tween), a
                                }
                            })
                        }
                    }, v._mod = function(t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                    }, v._kill = function(t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(), o._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    l = o._gsDefine.globals,
                    c = {},
                    u = a.prototype = new t("css");
                u.constructor = a, a.version = "1.20.3", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, u = "px", a.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var h, p, d, f, m, v, g, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    C = /opacity *= *([^)]*)/i,
                    k = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    E = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    A = /-([a-z])/gi,
                    O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    M = function(t, e) {
                        return e.toUpperCase()
                    },
                    j = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    N = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    I = Math.PI / 180,
                    F = 180 / Math.PI,
                    B = {},
                    H = {
                        style: {}
                    },
                    X = o.document || {
                        createElement: function() {
                            return H
                        }
                    },
                    z = function(t, e) {
                        return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                    },
                    q = z("div"),
                    Y = z("img"),
                    V = a._internals = {
                        _specialProps: c
                    },
                    W = (o.navigator || {}).userAgent || "",
                    U = function() {
                        var t = W.indexOf("Android"),
                            e = z("a");
                        return d = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), m = d && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    $ = function(t) {
                        return C.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(t) {
                        o.console && console.log(t)
                    },
                    K = "",
                    Q = "",
                    J = function(t, e) {
                        e = e || q;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Q = 3 === n ? "ms" : i[n], K = "-" + Q.toLowerCase() + "-", Q + t) : null
                    },
                    Z = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                    tt = a.getStyle = function(t, e, i, n, r) {
                        var o;
                        return U || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Z(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : $(t)
                    },
                    et = V.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r && "lineHeight" !== i) return n;
                        if ("auto" === r || !n) return 0;
                        var s, l, c, u = j.test(i),
                            h = t,
                            p = q.style,
                            d = n < 0,
                            f = 1 === n;
                        if (d && (n = -n), f && (n *= 100), "lineHeight" !== i || r)
                            if ("%" === r && -1 !== i.indexOf("border")) s = n / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (p.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (h = t.parentNode || X.body, -1 !== tt(h, "display").indexOf("flex") && (p.position = "absolute"), l = h._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                    p[u ? "width" : "height"] = n + r
                                }
                                h.appendChild(q), s = parseFloat(q[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(q), u && "%" === r && !1 !== a.cacheWidths && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = s / n * 100), 0 !== s || o || (s = et(t, i, n, r, !0))
                            }
                        else l = Z(t).lineHeight, t.style.lineHeight = n, s = parseFloat(Z(t).lineHeight), t.style.lineHeight = l;
                        return f && (s /= 100), d ? -s : s
                    },
                    it = V.calculateOffset = function(t, e, i) {
                        if ("absolute" !== tt(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = tt(t, "margin" + n, i);
                        return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    nt = function(t, e) {
                        var i, n, r, o = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], -1 !== r.indexOf("-transform") && Ot !== r || (o[r.replace(A, M)] = e.getPropertyValue(r));
                            else
                                for (i in e) - 1 !== i.indexOf("Transform") && At !== i || (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(A, M)] = e[i]);
                        return U || (o.opacity = $(t)), n = Yt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, jt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    rt = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            c = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(x, "") ? o : 0 : it(t, s), void 0 !== c[s] && (a = new _t(c, s, c[s], a))));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    ot = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                        if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = ot[e],
                            o = r.length;
                        for (i = i || Z(t, null); --o > -1;) n -= parseFloat(tt(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    lt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i]));
                            return t.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(o.replace(x, "")), e.v = t), e || t
                    },
                    ct = function(t, e) {
                        return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ut = function(t, e) {
                        return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ht = function(t, e, i, n) {
                        var r, o, s, a, l;
                        return "function" == typeof t && (t = t(y, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r) !== s % (r / 2) && (s = s < 0 ? s + r : s - r), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a
                    },
                    pt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    dt = function(t, e, i) {
                        return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ft = a.parseColor = function(t, e) {
                        var i, n, r, o, s, a, l, c, u, h, p;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = p = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(b)
                                    } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = dt(s + 1 / 3, n, r), i[1] = dt(s, n, r), i[2] = dt(s - 1 / 3, n, r);
                                else i = t.match(_) || pt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = pt.black;
                        return e && !p && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), l = (c + u) / 2, c === u ? s = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === n ? (r - o) / h + (r < o ? 6 : 0) : c === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    mt = function(t, e) {
                        var i, n, r, o = t.match(vt) || [],
                            s = 0,
                            a = "";
                        if (!o.length) return t;
                        for (i = 0; i < o.length; i++) n = o[i], r = t.substr(s, t.indexOf(n, s) - s), s += r.length + n.length, n = ft(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(s)
                    },
                    vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in pt) vt += "|" + u + "\\b";
                vt = new RegExp(vt + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), vt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var gt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(vt) || [""])[0] : "",
                            s = t.split(o).join("").match(T) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = s.length,
                            h = u > 0 ? s[0].replace(_, "") : "";
                        return u ? r = e ? function(t) {
                            var e, p, d, f;
                            if ("number" == typeof t) t += h;
                            else if (n && N.test(t)) {
                                for (f = t.replace(N, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]);
                                return f.join(",")
                            }
                            if (e = (t.match(vt) || [o])[0], p = t.split(e).join("").match(T) || [], d = p.length, u > d--)
                                for (; ++d < u;) p[d] = i ? p[(d - 1) / 2 | 0] : s[d];
                            return a + p.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, p;
                            if ("number" == typeof t) t += h;
                            else if (n && N.test(t)) {
                                for (o = t.replace(N, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]);
                                return o.join(",")
                            }
                            if (e = t.match(T) || [], p = e.length, u > p--)
                                for (; ++p < u;) e[p] = i ? e[(p - 1) / 2 | 0] : s[p];
                            return a + e.join(c) + l
                        } : function(t) {
                            return t
                        }
                    },
                    yt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; l < 4; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    _t = (V._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                            for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = r
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    bt = (V._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, c, u, h = n,
                            p = {},
                            d = {},
                            f = i._transform,
                            m = B;
                        for (i._transform = null, B = e, n = u = i.parse(t, e, n, r), B = m, o && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (n.type <= 1 && (a = n.p, d[a] = n.s + n.c, p[a] = n.s, o || (c = new _t(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, d[a] = n.data[l], p[a] = n[l], o || (c = new _t(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: d,
                            firstMPT: c,
                            pt: u
                        }
                    }, V.CSSPropTween = function(t, e, n, r, o, a, l, c, u, h, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof bt || s.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
                    }),
                    Tt = function(t, e, i, n, r, o) {
                        var s = new bt(t, e, i, n - i, r, -1, o);
                        return s.b = i, s.e = s.xs0 = n, s
                    },
                    xt = a.parseComplex = function(t, e, i, n, r, o, s, l, c, u) {
                        i = i || o || "", "function" == typeof n && (n = n(y, g)), s = new bt(t, e, 0, 0, s, u ? 2 : 1, null, !1, l, i, n), n += "", r && vt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                        var p, d, f, m, v, T, x, w, C, k, S, E, P, A = i.split(", ").join(",").split(" "),
                            O = n.split(", ").join(",").split(" "),
                            M = A.length,
                            j = !1 !== h;
                        for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (A = A.join(" ").replace(N, ", ").split(" "), O = O.join(" ").replace(N, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), O = O.join(" ").split(",").join(", ").split(" ")), M = A.length), M !== O.length && (A = (o || "").split(" "), M = A.length), s.plugin = c, s.setRatio = u, vt.lastIndex = 0, p = 0; p < M; p++)
                            if (m = A[p], v = O[p], (w = parseFloat(m)) || 0 === w) s.appendXtra("", w, ct(v, w), v.replace(b, ""), j && -1 !== v.indexOf("px"), !0);
                            else if (r && vt.test(m)) E = v.indexOf(")") + 1, E = ")" + (E ? v.substr(E) : ""), P = -1 !== v.indexOf("hsl") && U, k = v, m = ft(m, P), v = ft(v, P), C = m.length + v.length > 6, C && !U && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(O[p]).join("transparent")) : (U || (C = !1), P ? s.appendXtra(k.substr(0, k.indexOf("hsl")) + (C ? "hsla(" : "hsl("), m[0], ct(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ct(v[1], m[1]), "%,", !1).appendXtra("", m[2], ct(v[2], m[2]), C ? "%," : "%" + E, !1) : s.appendXtra(k.substr(0, k.indexOf("rgb")) + (C ? "rgba(" : "rgb("), m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], C ? "," : E, !0), C && (m = m.length < 4 ? 1 : m[3], s.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, E, !1))), vt.lastIndex = 0;
                            else if (T = m.match(_)) {
                                if (!(x = v.match(b)) || x.length !== T.length) return s;
                                for (f = 0, d = 0; d < T.length; d++) S = T[d], k = m.indexOf(S, f), s.appendXtra(m.substr(f, k - f), Number(S), ct(x[d], S), "", j && "px" === m.substr(k + S.length, 2), 0 === d), f = k + S.length;
                                s["xs" + s.l] += m.substr(f)
                            } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + v : v;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (E = s.xs0 + s.data.s, p = 1; p < s.l; p++) E += s["xs" + p] + s.data["xn" + p];
                            s.e = E + s["xs" + p]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    wt = 9;
                for (u = bt.prototype, u.l = u.pr = 0; --wt > 0;) u["xn" + wt] = 0, u["xs" + wt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new bt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var Ct = function(t, e) {
                        e = e || {}, this.p = e.prefix ? J(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    kt = V._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new Ct(r[n], e)
                    },
                    St = V._registerPluginProp = function(t) {
                        if (!c[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            kt(t, {
                                parser: function(t, i, n, r, o, s, a) {
                                    var u = l.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), c[n].parse(t, i, n, r, o, s, a)) : (G("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                u = Ct.prototype, u.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, c, u, h, p = this.keyword;
                    if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, s = 0; s < c; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, p && (u = e.indexOf(p), h = i.indexOf(p), u !== h && (-1 === h ? a[s] = a[s].split(p).join("") : -1 === u && (a[s] += " " + p)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, u.parse = function(t, e, i, n, o, s, a) {
                    return this.parseComplex(t.style, this.format(tt(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, a.registerSpecialProp = function(t, e, i) {
                    kt(t, {
                        parser: function(t, n, r, o, s, a, l) {
                            var c = new bt(t, r, 0, 0, s, 2, r, !1, i);
                            return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = !0;
                var Et, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    At = J("transform"),
                    Ot = K + "transform",
                    Mt = J("transformOrigin"),
                    jt = null !== J("perspective"),
                    Dt = V.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !jt) && (a.defaultForce3D || "auto")
                    },
                    Rt = o.SVGElement,
                    Nt = function(t, e, i) {
                        var n, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Lt = X.documentElement || {},
                    It = function() {
                        var t, e, i, n = v || /Android/i.test(W) && !o.chrome;
                        return X.createElementNS && !n && (t = Nt("svg", Lt), e = Nt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Mt] = "50% 50%", e.style[At] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && jt), Lt.removeChild(t)), n
                    }(),
                    Ft = function(t, e, i, n, r, o) {
                        var s, l, c, u, h, p, d, f, m, v, g, y, _, b, T = t._gsTransform,
                            x = qt(t, !0);
                        T && (_ = T.xOrigin, b = T.yOrigin), (!n || (s = n.split(" ")).length < 2) && (d = t.getBBox(), 0 === d.x && 0 === d.y && d.width + d.height === 0 && (d = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = lt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && x !== zt && (p = x[0], d = x[1], f = x[2], m = x[3], v = x[4], g = x[5], (y = p * m - d * f) && (l = u * (m / y) + h * (-f / y) + (f * g - m * v) / y, c = u * (-d / y) + h * (p / y) - (p * g - d * v) / y, u = i.xOrigin = s[0] = l, h = i.yOrigin = s[1] = c)), T && (o && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = u - _, c = h - b, T.xOffset += l * x[0] + c * x[2] - l, T.yOffset += l * x[1] + c * x[3] - c) : T.xOffset = T.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Bt = function(t) {
                        var e, i = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            o = this.style.cssText;
                        if (Lt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), Lt.removeChild(i), this.style.cssText = o, e
                    },
                    Ht = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Bt.call(t, !0)
                        }
                    },
                    Xt = function(t) {
                        return !(!Rt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Ht(t))
                    },
                    zt = [1, 0, 0, 1, 0, 0],
                    qt = function(t, e) {
                        var i, n, r, o, s, a, l = t._gsTransform || new Dt,
                            c = t.style;
                        if (At ? n = tt(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(D), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !At || !(a = !Z(t) || "none" === Z(t).display) && t.parentNode || (a && (o = c.display, c.display = "block"), t.parentNode || (s = 1, Lt.appendChild(t)), n = tt(t, Ot, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && $t(c, "display"), s && Lt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (c[At] + "").indexOf("matrix") && (n = c[At], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return zt;
                        for (r = (n || "").match(_) || [], wt = r.length; --wt > -1;) o = Number(r[wt]), r[wt] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Yt = V.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, s, l, c, u, h, p = n ? t._gsTransform || new Dt : new Dt,
                            d = p.scaleX < 0,
                            f = jt ? parseFloat(tt(t, Mt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            m = parseFloat(a.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getCTM || !Xt(t)), p.svg && (Ft(t, tt(t, Mt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Et = a.useSVGTransformAttr || It), (o = qt(t)) !== zt) {
                            if (16 === o.length) {
                                var v, g, y, _, b, T = o[0],
                                    x = o[1],
                                    w = o[2],
                                    C = o[3],
                                    k = o[4],
                                    S = o[5],
                                    E = o[6],
                                    P = o[7],
                                    A = o[8],
                                    O = o[9],
                                    M = o[10],
                                    j = o[12],
                                    D = o[13],
                                    R = o[14],
                                    N = o[11],
                                    L = Math.atan2(E, M);
                                p.zOrigin && (R = -p.zOrigin, j = A * R - o[12], D = O * R - o[13], R = M * R + p.zOrigin - o[14]), p.rotationX = L * F, L && (_ = Math.cos(-L), b = Math.sin(-L), v = k * _ + A * b, g = S * _ + O * b, y = E * _ + M * b, A = k * -b + A * _, O = S * -b + O * _, M = E * -b + M * _, N = P * -b + N * _, k = v, S = g, E = y), L = Math.atan2(-w, M), p.rotationY = L * F, L && (_ = Math.cos(-L), b = Math.sin(-L), v = T * _ - A * b, g = x * _ - O * b, y = w * _ - M * b, O = x * b + O * _, M = w * b + M * _, N = C * b + N * _, T = v, x = g, w = y), L = Math.atan2(x, T), p.rotation = L * F, L && (_ = Math.cos(L), b = Math.sin(L), v = T * _ + x * b, g = k * _ + S * b, y = A * _ + O * b, x = x * _ - T * b, S = S * _ - k * b, O = O * _ - A * b, T = v, k = g, A = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), L = Math.atan2(k, S), p.scaleX = (1e5 * Math.sqrt(T * T + x * x + w * w) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(S * S + E * E) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(A * A + O * O + M * M) + .5 | 0) / 1e5, T /= p.scaleX, k /= p.scaleY, x /= p.scaleX, S /= p.scaleY, Math.abs(L) > 2e-5 ? (p.skewX = L * F, k = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(L))) : p.skewX = 0, p.perspective = N ? 1 / (N < 0 ? -N : N) : 0, p.x = j, p.y = D, p.z = R, p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * k), p.y -= p.yOrigin - (p.yOrigin * x - p.xOrigin * S))
                            } else if (!jt || r || !o.length || p.x !== o[4] || p.y !== o[5] || !p.rotationX && !p.rotationY) {
                                var I = o.length >= 6,
                                    B = I ? o[0] : 1,
                                    H = o[1] || 0,
                                    X = o[2] || 0,
                                    z = I ? o[3] : 1;
                                p.x = o[4] || 0, p.y = o[5] || 0, l = Math.sqrt(B * B + H * H), c = Math.sqrt(z * z + X * X), u = B || H ? Math.atan2(H, B) * F : p.rotation || 0, h = X || z ? Math.atan2(X, z) * F + u : p.skewX || 0, p.scaleX = l, p.scaleY = c, p.rotation = u, p.skewX = h, jt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = m, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * X), p.y -= p.yOrigin - (p.xOrigin * H + p.yOrigin * z))
                            }
                            Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = f;
                            for (s in p) p[s] < 2e-5 && p[s] > -2e-5 && (p[s] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (Et && t.style[At] ? e.delayedCall(.001, function() {
                            $t(t.style, At)
                        }) : !Et && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    Vt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * I,
                            o = r + n.skewX * I,
                            s = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                            a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                            l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                            c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                            u = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            i = a, a = -l, l = -i, e = h.filter, u.filter = "";
                            var p, d, f = this.t.offsetWidth,
                                m = this.t.offsetHeight,
                                g = "absolute" !== h.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + l + ", M22=" + c,
                                _ = n.x + f * n.xPercent / 100,
                                b = n.y + m * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2, d = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, _ += p - (p * s + d * a), b += d - (p * l + d * c)), g ? (p = f / 2, d = m / 2, y += ", Dx=" + (p - (p * s + d * a) + _) + ", Dy=" + (d - (p * l + d * c) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(R, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === l && 1 === c && (g && -1 === y.indexOf("Dx=0, Dy=0") || C.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                                var T, x, k, S = v < 8 ? 1 : -1;
                                for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((s < 0 ? -s : s) * f + (a < 0 ? -a : a) * m)) / 2 + _), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (l < 0 ? -l : l) * f)) / 2 + b), wt = 0; wt < 4; wt++) x = st[wt], T = h[x], i = -1 !== T.indexOf("px") ? parseFloat(T) : et(this.t, x, parseFloat(T), T.replace(w, "")) || 0, k = i !== n[x] ? wt < 2 ? -n.ieOffsetX : -n.ieOffsetY : wt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, u[x] = (n[x] = Math.round(i - k * (0 === wt || 2 === wt ? 1 : S))) + "px"
                            }
                        }
                    },
                    Wt = V.set3DTransformRatio = V.setTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, c, u, h, p, d, m, v, g, y, _, b, T, x, w, C, k = this.data,
                            S = this.t.style,
                            E = k.rotation,
                            P = k.rotationX,
                            A = k.rotationY,
                            O = k.scaleX,
                            M = k.scaleY,
                            j = k.scaleZ,
                            D = k.x,
                            R = k.y,
                            N = k.z,
                            L = k.svg,
                            F = k.perspective,
                            B = k.force3D,
                            H = k.skewY,
                            X = k.skewX;
                        if (H && (X += H, E += H), ((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !N && !F && !A && !P && 1 === j || Et && L || !jt) return void(E || X || L ? (E *= I, w = X * I, C = 1e5, i = Math.cos(E) * O, o = Math.sin(E) * O, n = Math.sin(E - w) * -M, s = Math.cos(E - w) * M, w && "simple" === k.skewType && (e = Math.tan(w - H * I), e = Math.sqrt(1 + e * e), n *= e, s *= e, H && (e = Math.tan(H * I), e = Math.sqrt(1 + e * e), i *= e, o *= e)), L && (D += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, Et && (k.xPercent || k.yPercent) && (v = this.t.getBBox(), D += .01 * k.xPercent * v.width, R += .01 * k.yPercent * v.height), v = 1e-6, D < v && D > -v && (D = 0), R < v && R > -v && (R = 0)), b = (i * C | 0) / C + "," + (o * C | 0) / C + "," + (n * C | 0) / C + "," + (s * C | 0) / C + "," + D + "," + R + ")", L && Et ? this.t.setAttribute("transform", "matrix(" + b) : S[At] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : S[At] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + M + "," + D + "," + R + ")");
                        if (f && (v = 1e-4, O < v && O > -v && (O = j = 2e-5), M < v && M > -v && (M = j = 2e-5), !F || k.z || k.rotationX || k.rotationY || (F = 0)), E || X) E *= I, g = i = Math.cos(E), y = o = Math.sin(E), X && (E -= X * I, g = Math.cos(E), y = Math.sin(E), "simple" === k.skewType && (e = Math.tan((X - H) * I), e = Math.sqrt(1 + e * e), g *= e, y *= e, k.skewY && (e = Math.tan(H * I), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -y, s = g;
                        else {
                            if (!(A || P || 1 !== j || F || L)) return void(S[At] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + N + "px)" + (1 !== O || 1 !== M ? " scale(" + O + "," + M + ")" : ""));
                            i = s = 1, n = o = 0
                        }
                        u = 1, r = a = l = c = h = p = 0, d = F ? -1 / F : 0, m = k.zOrigin, v = 1e-6, T = ",", x = "0", E = A * I, E && (g = Math.cos(E), y = Math.sin(E), l = -y, h = d * -y, r = i * y, a = o * y, u = g, d *= g, i *= g, o *= g), E = P * I, E && (g = Math.cos(E), y = Math.sin(E), e = n * g + r * y, _ = s * g + a * y, c = u * y, p = d * y, r = n * -y + r * g, a = s * -y + a * g, u *= g, d *= g, n = e, s = _), 1 !== j && (r *= j, a *= j, u *= j, d *= j), 1 !== M && (n *= M, s *= M, c *= M, p *= M), 1 !== O && (i *= O, o *= O, l *= O, h *= O), (m || L) && (m && (D += r * -m, R += a * -m, N += u * -m + m), L && (D += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), D < v && D > -v && (D = x), R < v && R > -v && (R = x), N < v && N > -v && (N = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < v && i > -v ? x : i) + T + (o < v && o > -v ? x : o) + T + (l < v && l > -v ? x : l), b += T + (h < v && h > -v ? x : h) + T + (n < v && n > -v ? x : n) + T + (s < v && s > -v ? x : s), P || A || 1 !== j ? (b += T + (c < v && c > -v ? x : c) + T + (p < v && p > -v ? x : p) + T + (r < v && r > -v ? x : r), b += T + (a < v && a > -v ? x : a) + T + (u < v && u > -v ? x : u) + T + (d < v && d > -v ? x : d) + T) : b += ",0,0,0,0,1,0,", b += D + T + R + T + N + T + (F ? 1 + -N / F : 1) + ")", S[At] = b
                    };
                u = Dt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, s, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var c, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (c = l[i], l[i] = e), u && (l.scale = u(y, t));
                        var h, p, d, f, m, v, _, b, T, x = t._gsTransform,
                            w = t.style,
                            C = Pt.length,
                            k = l,
                            S = {},
                            E = Yt(t, r, !0, k.parseTransform),
                            P = k.transform && ("function" == typeof k.transform ? k.transform(y, g) : k.transform);
                        if (E.skewType = k.skewType || E.skewType || a.defaultSkewType, n._transform = E, P && "string" == typeof P && At) p = q.style, p[At] = P, p.display = "block", p.position = "absolute", X.body.appendChild(q), h = Yt(q, null, !1), "simple" === E.skewType && (h.scaleY *= Math.cos(h.skewX * I)), E.svg && (v = E.xOrigin, _ = E.yOrigin, h.x -= E.xOffset, h.y -= E.yOffset, (k.transformOrigin || k.svgOrigin) && (P = {}, Ft(t, lt(k.transformOrigin), P, k.svgOrigin, k.smoothOrigin, !0), v = P.xOrigin, _ = P.yOrigin, h.x -= P.xOffset - E.xOffset, h.y -= P.yOffset - E.yOffset), (v || _) && (b = qt(q, !0), h.x -= v - (v * b[0] + _ * b[2]), h.y -= _ - (v * b[1] + _ * b[3]))), X.body.removeChild(q), h.perspective || (h.perspective = E.perspective), null != k.xPercent && (h.xPercent = ut(k.xPercent, E.xPercent)), null != k.yPercent && (h.yPercent = ut(k.yPercent, E.yPercent));
                        else if ("object" == typeof k) {
                            if (h = {
                                    scaleX: ut(null != k.scaleX ? k.scaleX : k.scale, E.scaleX),
                                    scaleY: ut(null != k.scaleY ? k.scaleY : k.scale, E.scaleY),
                                    scaleZ: ut(k.scaleZ, E.scaleZ),
                                    x: ut(k.x, E.x),
                                    y: ut(k.y, E.y),
                                    z: ut(k.z, E.z),
                                    xPercent: ut(k.xPercent, E.xPercent),
                                    yPercent: ut(k.yPercent, E.yPercent),
                                    perspective: ut(k.transformPerspective, E.perspective)
                                }, null != (m = k.directionalRotation))
                                if ("object" == typeof m)
                                    for (p in m) k[p] = m[p];
                                else k.rotation = m;
                            "string" == typeof k.x && -1 !== k.x.indexOf("%") && (h.x = 0, h.xPercent = ut(k.x, E.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (h.y = 0, h.yPercent = ut(k.y, E.yPercent)), h.rotation = ht("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : E.rotation, E.rotation, "rotation", S), jt && (h.rotationX = ht("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", S), h.rotationY = ht("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", S)), h.skewX = ht(k.skewX, E.skewX), h.skewY = ht(k.skewY, E.skewY)
                        }
                        for (jt && null != k.force3D && (E.force3D = k.force3D, f = !0), d = E.force3D || E.z || E.rotationX || E.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, d || null == k.scale || (h.scaleZ = 1); --C > -1;) T = Pt[C], ((P = h[T] - E[T]) > 1e-6 || P < -1e-6 || null != k[T] || null != B[T]) && (f = !0, o = new bt(E, T, E[T], P, o), T in S && (o.e = S[T]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
                        return P = k.transformOrigin, E.svg && (P || k.svgOrigin) && (v = E.xOffset, _ = E.yOffset, Ft(t, lt(P), h, k.svgOrigin, k.smoothOrigin), o = Tt(E, "xOrigin", (x ? E : h).xOrigin, h.xOrigin, o, "transformOrigin"), o = Tt(E, "yOrigin", (x ? E : h).yOrigin, h.yOrigin, o, "transformOrigin"), v === E.xOffset && _ === E.yOffset || (o = Tt(E, "xOffset", x ? v : E.xOffset, E.xOffset, o, "transformOrigin"), o = Tt(E, "yOffset", x ? _ : E.yOffset, E.yOffset, o, "transformOrigin")), P = "0px 0px"), (P || jt && d && E.zOrigin) && (At ? (f = !0, T = Mt, P = (P || tt(t, T, r, !1, "50% 50%")) + "", o = new bt(w, T, 0, 0, o, -1, "transformOrigin"), o.b = w[T], o.plugin = s, jt ? (p = E.zOrigin, P = P.split(" "), E.zOrigin = (P.length > 2 && (0 === p || "0px" !== P[2]) ? parseFloat(P[2]) : p) || 0, o.xs0 = o.e = P[0] + " " + (P[1] || "50%") + " 0px", o = new bt(E, "zOrigin", 0, 0, o, -1, o.n), o.b = p, o.xs0 = o.e = E.zOrigin) : o.xs0 = o.e = P) : lt(P + "", E)), f && (n._transformType = E.svg && Et || !d && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), u && (l.scale = u), o
                    },
                    prefix: !0
                }), kt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), kt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, s, a) {
                        e = this.format(e);
                        var l, c, u, h, p, d, f, m, v, g, y, _, b, T, x, w, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < C.length; c++) this.p.indexOf("border") && (C[c] = J(C[c])), p = h = tt(t, C[c], r, !1, "0px"), -1 !== p.indexOf(" ") && (h = p.split(" "), p = h[0], h = h[1]), d = u = l[c], f = parseFloat(p), _ = p.substr((f + "").length), b = "=" === d.charAt(1), b ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (T = et(t, "borderLeft", f, _), x = et(t, "borderTop", f, _), "%" === y ? (p = T / v * 100 + "%", h = x / g * 100 + "%") : "em" === y ? (w = et(t, "borderLeft", 1, "em"), p = T / w + "em", h = x / w + "em") : (p = T + "px", h = x + "px"), b && (d = parseFloat(p) + m + y, u = parseFloat(h) + m + y)), s = xt(k, C[c], p + " " + h, d + " " + u, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, o, s) {
                        return xt(t.style, i, this.format(tt(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: gt("0px 0px", !1, !0)
                }), kt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c, u, h, p, d = "background-position",
                            f = r || Z(t, null),
                            m = this.format((f ? v ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = tt(t, "backgroundImage").replace(O, "")) && "none" !== p) {
                            for (a = m.split(" "), l = g.split(" "), Y.setAttribute("src", p), c = 2; --c > -1;) m = a[c], (u = -1 !== m.indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, a[c] = u ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, o, s)
                    },
                    formatter: lt
                }), kt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), kt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), kt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), kt("transformStyle", {
                    prefix: !0
                }), kt("backfaceVisibility", {
                    prefix: !0
                }), kt("userSelect", {
                    prefix: !0
                }), kt("margin", {
                    parser: yt("marginTop,marginRight,marginBottom,marginLeft")
                }), kt("padding", {
                    parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), kt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c;
                        return v < 9 ? (l = t.currentStyle, c = v < 8 ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(tt(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), kt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), kt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), kt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        var a = tt(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            c = l[0].replace(w, "");
                        return "px" !== c && (a = parseFloat(a) / et(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", r, !1, "solid") + " " + tt(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                    }
                }), kt("borderWidth", {
                    parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), kt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, o) {
                        var s = t.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new bt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                    }
                });
                var Ut = function(t) {
                    var e, i = this.t,
                        n = i.filter || tt(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(C, "opacity=" + r))
                };
                kt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(tt(t, "opacity", r, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === tt(t, "visibility", r) && 0 !== e && (a = 0), U ? o = new bt(l, "opacity", a, e - a, o) : (o = new bt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ut), c && (o = new bt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var $t = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Gt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                kt("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var c, u, h, p, d, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (s = o._classNamePT = new bt(t, n, 0, 0, s, 2), s.setRatio = Gt, s.pr = -11, i = !0, s.b = f, u = nt(t, r), h = t._gsClassPT) {
                            for (p = {}, d = h.data; d;) p[d.p] = 1, d = d._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = rt(t, u, nt(t), l, p), t.setAttribute("class", f), s.data = c.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, c.difs, s, a)
                    }
                });
                var Kt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, s = this.t.style,
                            a = c.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], c[i] && (c[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Mt : c[i].p), $t(s, i);
                        r && ($t(s, At), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (kt("clearProps", {
                    parser: function(t, e, n, r, o) {
                        return o = new bt(t, n, 0, 0, o, 2), o.setRatio = Kt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                    }
                }), u = "bezier,throwProps,physicsProps,physics2D".split(","), wt = u.length; wt--;) St(u[wt]);
                u = a.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, o, l) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = o, this._vars = e, y = l, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = Z(t, ""), s = this._overwriteProps;
                    var u, f, v, _, b, T, x, w, C, S = t.style;
                    if (p && "" === S.zIndex && ("auto" !== (u = tt(t, "zIndex", r)) && "" !== u || this._addLazySet(S, "zIndex", 0)), "string" == typeof e && (_ = S.cssText, u = nt(t, r), S.cssText = _ + ";" + e, u = rt(t, u, nt(t)).difs, !U && k.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, S.cssText = _), e.className ? this._firstPT = f = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                        for (C = 3 === this._transformType, At ? d && (p = !0, "" === S.zIndex && ("auto" !== (x = tt(t, "zIndex", r)) && "" !== x || this._addLazySet(S, "zIndex", 0)), m && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : S.zoom = 1, v = f; v && v._next;) v = v._next;
                        w = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, v), w.setRatio = At ? Wt : Vt, w.data = this._transform || Yt(t, r, !0), w.tween = o, w.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (T = f._next, v = _; v && v.pr > f.pr;) v = v._next;
                            (f._prev = v ? v._prev : b) ? f._prev._next = f: _ = f, (f._next = v) ? v._prev = f : b = f, f = T
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function(t, e, i, o) {
                    var s, a, l, u, p, d, f, m, v, _, b = t.style;
                    for (s in e) {
                        if (d = e[s], "function" == typeof d && (d = d(y, g)), a = c[s]) i = a.parse(t, d, s, this, i, o, e);
                        else {
                            if ("--" === s.substr(0, 2)) {
                                this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", Z(t).getPropertyValue(s) + "", d + "", s, !1, s);
                                continue
                            }
                            p = tt(t, s, r) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && E.test(d) ? (v || (d = ft(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = xt(b, s, p, d, !0, "transparent", i, 0, o)) : v && L.test(d) ? i = xt(b, s, p, d, !0, null, i, 0, o) : (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", "" !== p && "auto" !== p || ("width" === s || "height" === s ? (l = at(t, s, r), f = "px") : "left" === s || "top" === s ? (l = it(t, s, r), f = "px") : (l = "opacity" !== s ? 0 : 1, f = "")), _ = v && "=" === d.charAt(1), _ ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(w, "")) : (u = parseFloat(d), m = v ? d.replace(w, "") : ""), "" === m && (m = s in n ? n[s] : f), d = u || 0 === u ? (_ ? u + l : u) + m : e[s], f !== m && ("" === m && "lineHeight" !== s || (u || 0 === u) && l && (l = et(t, s, l, f), "%" === m ? (l /= et(t, s, 100, "%") / 100, !0 !== e.strictUnits && (p = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, s, 1, m) : "px" !== m && (u = et(t, s, u, m), m = "px"), _ && (u || 0 === u) && (d = u + l + m))), _ && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== b[s] && (d || d + "" != "NaN" && null != d) ? (i = new bt(b, s, u || l || 0, 0, i, -1, s, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : p) : G("invalid " + s + " tween value: " + e[s]) : (i = new bt(b, s, l, u - l, i, 0, s, !1 !== h && ("px" === m || "zIndex" === s), 0, p, d), i.xs0 = m))
                        }
                        o && i && !i.plugin && (i.plugin = o)
                    }
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Yt(this._target, r, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
                };
                var Qt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Qt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, u._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, o)
                };
                var Jt = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Jt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(nt(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Jt(o, e, i)
                };
                return a.cascadeTo = function(t, i, n) {
                    var r, o, s, a, l = e.to(t, i, n),
                        c = [l],
                        u = [],
                        h = [],
                        p = [],
                        d = e._internals.reservedProps;
                    for (t = l._targets || l.target, Jt(t, u, p), l.render(i, !0, !0), Jt(t, h), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                        if (o = rt(p[r], u[r], h[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) d[s] && (o[s] = n[s]);
                            a = {};
                            for (s in o) a[s] = u[r][s];
                            c.push(e.fromTo(p[r], i, a, o))
                        }
                    return c
                }, t.activate([a]), a
            }, !0),
                function() {
                    var t = o._gsDefine.plugin({
                            propName: "roundProps",
                            version: "1.6.0",
                            priority: -1,
                            API: 2,
                            init: function(t, e, i) {
                                return this._tween = i, !0
                            }
                        }),
                        e = function(t) {
                            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                        },
                        i = t.prototype;
                    i._onInitAllProps = function() {
                        for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
                        for (s = o.length; --s > -1;)
                            for (t = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                        return !1
                    }, i._add = function(t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                    }
                }(),
                function() {
                    o._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function(t, e, i, n) {
                            var r, o;
                            if ("function" != typeof t.setAttribute) return !1;
                            for (r in e) o = e[r], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                            return !0
                        }
                    })
                }(), o._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, o, s, a, l, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), c = (a + "").split("_"), o = c[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = a - s, c.length && (o = c.join("_"), -1 !== o.indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, o._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = o.GreenSockGlobals || o,
                    s = r.com.greensock,
                    a = 2 * Math.PI,
                    l = Math.PI / 2,
                    c = s._class,
                    u = function(e, i) {
                        var n = c("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    h = t.register || function() {},
                    p = function(t, e, i, n, r) {
                        var o = c("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(o, t), o
                    },
                    d = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = c("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    m = p("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    v = c("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = v.prototype = new t;
                return g.constructor = v, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, v.ease = new v(.7, .7), g.config = v.config = function(t, e, i) {
                    return new v(t, e, i)
                }, e = c("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, i = c("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, h = 0 | (e.points || 20), p = h, f = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / h * p, n = v ? v.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (o = 1 - i, r = o * o * g) : "in" === l ? r = i * i * g : i < .5 ? (o = 2 * i, r = o * o * .5 * g) : (o = 2 * (1 - i), r = o * o * .5 * g), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), c[u++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new d(1, 1, null), p = h; --p > -1;) s = c[p], a = new d(s.x, s.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, p("Bounce", u("BounceOut", function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = t < .5;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), p("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = c("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, p("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), p("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), p("Sine", u("SineOut", function(t) {
                    return Math.sin(t * l)
                }), u("SineIn", function(t) {
                    return 1 - Math.cos(t * l)
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), c("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), m
            }, !0)
        }), o._gsDefine && o._gsQueue.pop()(),
            function(i, o) {
                "use strict";
                var s = {},
                    a = i.document,
                    l = i.GreenSockGlobals = i.GreenSockGlobals || i;
                if (!l.TweenLite) {
                    var c, u, h, p, d, f = function(t) {
                            var e, i = t.split("."),
                                n = l;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        m = f("com.greensock"),
                        v = function(t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        g = function() {},
                        y = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        _ = {},
                        b = function(i, o, a, c) {
                            this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = a;
                            var u = [];
                            this.check = function(h) {
                                for (var p, d, m, v, g = o.length, y = g; --g > -1;)(p = _[o[g]] || new b(o[g], [])).gsClass ? (u[g] = p.gsClass, y--) : h && p.sc.push(this);
                                if (0 === y && a) {
                                    if (d = ("com.greensock." + i).split("."), m = d.pop(), v = f(d.join("."))[m] = this.gsClass = a.apply(a, u), c)
                                        if (l[m] = s[m] = v, void 0 !== t && t.exports)
                                            if ("TweenMax" === i) {
                                                t.exports = s.TweenMax = v;
                                                for (g in s) v[g] = s[g]
                                            } else s.TweenMax && (s.TweenMax[m] = v);
                                        else n = [], void 0 !== (r = function() {
                                            return v
                                        }.apply(e, n)) && (t.exports = r);
                                    for (g = 0; g < this.sc.length; g++) this.sc[g].check()
                                }
                            }, this.check(!0)
                        },
                        T = i._gsDefine = function(t, e, i, n) {
                            return new b(t, e, i, n)
                        },
                        x = m._class = function(t, e, i) {
                            return e = e || function() {}, T(t, [], function() {
                                return e
                            }, i), e
                        };
                    T.globals = l;
                    var w = [0, 0, 1, 1],
                        C = x("easing.Ease", function(t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? w.concat(e) : w
                        }, !0),
                        k = C.map = {},
                        S = C.register = function(t, e, i, n) {
                            for (var r, o, s, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                                for (o = l[c], r = n ? x("easing." + o, null, !0) : m.easing[o] || {}, s = u.length; --s > -1;) a = u[s], k[o + "." + a] = k[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for (h = C.prototype, h._calcEnd = !1, h.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = c.length; --u > -1;) h = c[u] + ",Power" + u, S(new C(null, null, 1, u), h, "easeOut", !0), S(new C(null, null, 2, u), h, "easeIn" + (0 === u ? ",easeNone" : "")), S(new C(null, null, 3, u), h, "easeInOut");
                    k.linear = m.easing.Linear.easeIn, k.swing = m.easing.Quad.easeInOut;
                    var E = x("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    h = E.prototype, h.addEventListener = function(t, e, i, n, r) {
                        r = r || 0;
                        var o, s, a = this._listeners[t],
                            l = 0;
                        for (this !== p || d || p.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, h.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, h.dispatchEvent = function(t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var P = i.requestAnimationFrame,
                        A = i.cancelAnimationFrame,
                        O = Date.now || function() {
                            return (new Date).getTime()
                        },
                        M = O();
                    for (c = ["ms", "moz", "webkit", "o"], u = c.length; --u > -1 && !P;) P = i[c[u] + "RequestAnimationFrame"], A = i[c[u] + "CancelAnimationFrame"] || i[c[u] + "CancelRequestAnimationFrame"];
                    x("Ticker", function(t, e) {
                        var i, n, r, o, s, l = this,
                            c = O(),
                            u = !(!1 === e || !P) && "auto",
                            h = 500,
                            f = 33,
                            m = function(t) {
                                var e, a, u = O() - M;
                                u > h && (c += u - f), M += u, l.time = (M - c) / 1e3, e = l.time - s, (!i || e > 0 || !0 === t) && (l.frame++, s += e + (e >= o ? .004 : o - e), a = !0), !0 !== t && (r = n(m)), a && l.dispatchEvent("tick")
                            };
                        E.call(l), l.time = l.frame = 0, l.tick = function() {
                            m(!0)
                        }, l.lagSmoothing = function(t, e) {
                            if (!arguments.length) return h < 1e10;
                            h = t || 1e10, f = Math.min(e, h, 0)
                        }, l.sleep = function() {
                            null != r && (u && A ? A(r) : clearTimeout(r), n = g, r = null, l === p && (d = !1))
                        }, l.wake = function(t) {
                            null !== r ? l.sleep() : t ? c += -M + (M = O()) : l.frame > 10 && (M = O() - h + 5), n = 0 === i ? g : u && P ? P : function(t) {
                                return setTimeout(t, 1e3 * (s - l.time) + 1 | 0)
                            }, l === p && (d = !0), m(2)
                        }, l.fps = function(t) {
                            if (!arguments.length) return i;
                            i = t, o = 1 / (i || 60), s = this.time + o, l.wake()
                        }, l.useRAF = function(t) {
                            if (!arguments.length) return u;
                            l.sleep(), u = t, l.fps(i)
                        }, l.fps(t), setTimeout(function() {
                            "auto" === u && l.frame < 5 && "hidden" !== a.visibilityState && l.useRAF(!1)
                        }, 1500)
                    }), h = m.Ticker.prototype = new m.events.EventDispatcher, h.constructor = m.Ticker;
                    var j = x("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, J) {
                            d || p.wake();
                            var i = this.vars.useFrames ? Q : J;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    p = j.ticker = new m.Ticker, h = j.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
                    var D = function() {
                        d && O() - M > 2e3 && ("hidden" !== a.visibilityState || !p.lagSmoothing()) && p.wake();
                        var t = setTimeout(D, 2e3);
                        t.unref && t.unref()
                    };
                    D(), h.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, h.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, h.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, h.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, h.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, h.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, h.render = function(t, e, i) {}, h.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, h.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, h._enabled = function(t, e) {
                        return d || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, h._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, h.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, h._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, h._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, h._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (n ? n.length : 0) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, h.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, h.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, h.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, h.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, h.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, h.totalTime = function(t, e, i) {
                        if (d || p.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (F.length && tt(), this.render(t, e, !1), F.length && tt())
                        }
                        return this
                    }, h.progress = h.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, h.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, h.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, h.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, h.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, h.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (d || t || p.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var R = x("core.SimpleTimeline", function(t) {
                        j.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    h = R.prototype = new j, h.constructor = R, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(t, e, i, n) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, h._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, h.render = function(t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, h.rawTime = function() {
                        return d || p.wake(), this._totalTime
                    };
                    var N = x("TweenLite", function(t, e, n) {
                            if (j.call(this, e, n), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                            var r, o, s, a = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? K[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = s = v(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== i && o[0] && (o[0] === i || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(v(o))) : (this._siblings[r] = et(o, this, !1), 1 === l && this._siblings[r].length > 1 && nt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = s[r--] = N.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        L = function(t) {
                            return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        I = function(t, e) {
                            var i, n = {};
                            for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    h = N.prototype = new j, h.constructor = N, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, N.version = "1.20.3", N.defaultEase = h._ease = new C(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = p, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
                        p.lagSmoothing(t, e)
                    }, N.selector = i.$ || i.jQuery || function(t) {
                        var e = i.$ || i.jQuery;
                        return e ? (N.selector = e, e(t)) : void 0 === a ? t : a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var F = [],
                        B = {},
                        H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        X = /[\+-]=-?[\.\d]/,
                        z = function(t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        q = function(t, e, i, n) {
                            var r, o, s, a, l, c, u, h = [],
                                p = 0,
                                d = "",
                                f = 0;
                            for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(H) || [], o = e.match(H) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; a < l; a++) u = o[a], c = e.substr(p, e.indexOf(u, p) - p), d += c || !a ? c : ",", p += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === r[a] || r.length <= a ? d += u : (d && (h.push(d), d = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                                _next: h._firstPT,
                                t: h,
                                p: h.length - 1,
                                s: s,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                                f: 0,
                                m: f && f < 4 ? Math.round : 0
                            }), p += u.length;
                            return d += e.substr(p), d && h.push(d), h.setRatio = z, X.test(e) && (h.end = null), h
                        },
                        Y = function(t, e, i, n, r, o, s, a, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var c, u = typeof t[e],
                                h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                p = "get" !== i ? i : h ? s ? t[h](s) : t[h]() : t[e],
                                d = "string" == typeof n && "=" === n.charAt(1),
                                f = {
                                    t: t,
                                    p: e,
                                    s: p,
                                    f: "function" === u,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                                };
                            if (("number" != typeof p || "number" != typeof n && !d) && (s || isNaN(p) || !d && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (f.fp = s, c = q(p, d ? parseFloat(f.s) + f.c : n, a || N.defaultStringFilter, f), f = {
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (f.s = parseFloat(p), d || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
                        },
                        V = N._internals = {
                            isArray: y,
                            isSelector: L,
                            lazyTweens: F,
                            blobDif: q
                        },
                        W = N._plugins = {},
                        U = V.tweenLookup = {},
                        $ = 0,
                        G = V.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        K = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        Q = j._rootFramesTimeline = new R,
                        J = j._rootTimeline = new R,
                        Z = 30,
                        tt = V.lazyRender = function() {
                            var t, e = F.length;
                            for (B = {}; --e > -1;)(t = F[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            F.length = 0
                        };
                    J._startTime = p.time, Q._startTime = p.frame, J._active = Q._active = !0, setTimeout(tt, 1), j._updateRoot = N.render = function() {
                        var t, e, i;
                        if (F.length && tt(), J.render((p.time - J._startTime) * J._timeScale, !1, !1), Q.render((p.frame - Q._startTime) * Q._timeScale, !1, !1), F.length && tt(), p.frame >= Z) {
                            Z = p.frame + (parseInt(N.autoSleep, 10) || 120);
                            for (i in U) {
                                for (e = U[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete U[i]
                            }
                            if ((!(i = J._first) || i._paused) && N.autoSleep && !Q._first && 1 === p._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || p.sleep()
                            }
                        }
                    }, p.addEventListener("tick", j._updateRoot);
                    var et = function(t, e, i) {
                            var n, r, o = t._gsTweenID;
                            if (U[o || (t._gsTweenID = o = "t" + $++)] || (U[o] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = U[o].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return U[o].tweens
                        },
                        it = function(t, e, i, n) {
                            var r, o, s = t.vars.onOverwrite;
                            return s && (r = s(t, e, i, n)), s = N.onOverwrite, s && (o = s(t, e, i, n)), !1 !== r && !1 !== o
                        },
                        nt = function(t, e, i, n, r) {
                            var o, s, a, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, o = 0; o < l; o++)
                                    if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                                    else if (5 === n) break;
                                return s
                            }
                            var c, u = e._startTime + 1e-10,
                                h = [],
                                p = 0,
                                d = 0 === e._duration;
                            for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || rt(e, 0, d), 0 === rt(a, c, d) && (h[p++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((d || !a._initted) && u - a._startTime <= 2e-10 || (h[p++] = a)));
                            for (o = p; --o > -1;)
                                if (a = h[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                                    if (2 !== n && !it(a, e)) continue;
                                    a._enabled(!1, !1) && (s = !0)
                                }
                            return s
                        },
                        rt = function(t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                                if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return o /= r, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10
                        };
                    h._init = function() {
                        var t, e, i, n, r, o, s = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            c = !!s.immediateRender,
                            u = s.ease;
                        if (s.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in s.startAt) r[n] = s.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = N.to(this.target, 0, r), c)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (s.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (c = !1), i = {};
                                for (n in s) G[n] && "autoCSS" !== n || (i[n] = s[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== s.lazy, i.immediateRender = c, this._startAt = N.to(this.target, 0, i), c) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = u = u ? u instanceof C ? u : "function" == typeof u ? new C(u, s.easeParams) : k[u] || N.defaultEase : N.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = s.onUpdate, this._initted = !0
                    }, h._initProps = function(t, e, n, r, o) {
                        var s, a, l, c, u, h;
                        if (null == t) return !1;
                        B[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && W.css && !1 !== this.vars.autoCSS && I(this.vars, t);
                        for (s in this.vars)
                            if (h = this.vars[s], G[s]) h && (h instanceof Array || h.push && y(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                            else if (W[s] && (c = new W[s])._onInitTween(t, this.vars[s], this, o)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: s,
                                    pg: 1,
                                    pr: c._priority,
                                    m: 0
                                }, a = c._overwriteProps.length; --a > -1;) e[c._overwriteProps[a]] = this._firstPT;
                                (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                            } else e[s] = Y.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, e, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && nt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), l)
                    }, h.render = function(t, e, i) {
                        var n, r, o, s, a = this._time,
                            l = this._duration,
                            c = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var u = t / l,
                                h = this._easeType,
                                p = this._easePower;
                            (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : t / l < .5 ? u / 2 : 1 - u / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, F.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
                        }
                    }, h._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                        var n, r, o, s, a, l, c, u, h, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((y(e) || L(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in c) a[o] && (h || (h = []), h.push(o));
                                    if ((h || !t) && !it(this, i, e, h)) return !1
                                }
                                for (o in c)(s = a[o]) && (p && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, h.invalidate = function() {
                        return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], j.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, h._enabled = function(t, e) {
                        if (d || p.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = et(n[i], this, !0);
                            else this._siblings = et(this.target, this, !0)
                        }
                        return j.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, N.to = function(t, e, i) {
                        return new N(t, e, i)
                    }, N.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
                    }, N.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
                    }, N.delayedCall = function(t, e, i, n, r) {
                        return new N(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, N.set = function(t, e) {
                        return new N(t, 0, e)
                    }, N.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : N.selector(t) || t;
                        var i, n, r, o;
                        if ((y(t) || L(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(N.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (n = et(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = N.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var ot = x("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                    }, !0);
                    if (h = ot.prototype, ot.version = "1.19.0", ot.API = 2, h._firstPT = null, h._addTween = Y, h.setRatio = z, h._kill = function(t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, h._mod = h._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, N._onPluginEvent = function(t, e) {
                            var i, n, r, o, s, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                                    (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                                }
                                a = e._firstPT = r
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, ot.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === ot.API && (W[(new t[e])._propName] = t[e]);
                            return !0
                        }, T.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                s = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    ot.call(this, i, n), this._overwriteProps = r || []
                                }, !0 === t.global),
                                a = s.prototype = new ot(i);
                            a.constructor = s, s.API = t.API;
                            for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                            return s.version = t.version, ot.activate([s]), s
                        }, c = i._gsQueue) {
                        for (u = 0; u < c.length; u++) c[u]();
                        for (h in _) _[h].func || i.console.log("GSAP encountered missing dependency: " + h)
                    }
                    d = !1
                }
            }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";
    i.d(e, "b", function() {
        return n
    }), i.d(e, "a", function() {
        return r
    });
    var n = 1024,
        r = 1920
}, function(t, e, i) {
    t.exports = i(5)
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(1),
        r = i.n(n),
        o = i(6),
        s = (i.n(o), i(2)),
        a = (i.n(s), i(7)),
        l = i.n(a),
        c = i(8),
        u = i.n(c),
        h = i(9),
        p = i(10),
        d = i(11),
        f = i(3);
    window.videojs = u.a;
    var m = void 0,
        v = void 0,
        g = new h.a,
        y = function(t) {
            document.querySelector(".nav-list__item_active").classList.remove("nav-list__item_active"), document.querySelector(".nav-list .nav-list__item:nth-child(" + t + ")").classList.add("nav-list__item_active")
        },
        _ = void 0,
        b = void 0,
        T = !1,
        x = void 0,
        w = !1,
        C = !1,
        k = function(t) {
            var e = TITLES[t - 1].replace(/&lt;br&gt;/gi, "<br>");
            return document.querySelector(".common-items__title").innerHTML = e, !1
        },
        S = void 0,
        E = function(t) {
            t > 1 && !S && (S = window.videojs("phone__videojs-player", {
                autoplay: !0,
                controls: !1,
                loop: !0,
                showInfo: !1,
                playsinline: !0,
                muted: !0,
                width: 150,
                height: 150
            })), S && (S.src(MEDIA.desktop[t - 1]), S.poster(MEDIA.static[t - 1]))
        },
        P = [10, 20, 60, 1e3, 1e4],
        A = 2341,
        O = 34010,
        M = function(t) {
            return Math.floor(t / 1e3) + " " + (t % 1e3 == 0 ? "000" : t % 1e3 < 10 ? "00" + t % 1e3 : t % 1e3 < 100 ? "0" + t % 1e3 : t % 1e3)
        },
        j = function() {
            document.querySelector(".info-block_counter_stream .info-block__text").textContent = M(A += Math.floor(319 * Math.random() + 11))
        },
        D = function() {
            document.querySelector(".info-block_counter_coin .info-block__text").textContent = M(O += P[Math.floor(4 * Math.random() + 0)])
        },
        R = !0,
        N = function() {
            var t = function(t) {
                    var e = t.target.getAttribute("data-index-slide");
                    y(e), r.a.fn.fullpage.moveTo(e)
                },
                e = function(t) {
                    return 2 === t ? a[0].enable() : a[t - 1].enable()
                },
                i = function(t, e) {
                    var i = "down" === e ? -1 : 1;
                    s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-1", 2, {
                        marginTop: i * v * .5 + "px"
                    }), s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-2", 1, {
                        marginTop: i * v * .7 + "px"
                    })
                },
                n = function(t) {
                    R && (s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-1", 0, {
                        marginTop: .5 * v + "px"
                    }), s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-2", 0, {
                        marginTop: .7 * v + "px"
                    }), R = !1), s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-1", 2, {
                        marginTop: "-1px"
                    }), s.TweenMax.to(".section__" + t + ".parallax .parallax__layer-2", 1, {
                        marginTop: "-1px"
                    })
                },
                o = document.querySelectorAll(".nav-list__item");
            Array.from(o).forEach(function(e) {
                e.addEventListener("click", t)
            }), Object(p.a)(function() {
                return r.a.fn.fullpage.moveTo(x + 1)
            }, function() {
                return r.a.fn.fullpage.moveTo(x - 1)
            });
            for (var a = [], c = 0; c <= 6; c += 1) 1 !== c && (a[c] = new l.a(document.querySelector(".section__" + (c + 1) + ".parallax")), a[c].disable());
            if (m = r()(window).width(), v = r()(window).height(), !T) {
                var u = [".parallax__item_yellow-slide1", ".parallax__item_pink-slide1", ".parallax__item_violet-slide1", ".parallax__item_orange-slide1"];
                r()(".fullpage").fullpage({
                    anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7"],
                    onLeave: function(t, e, r) {
                        6 === t && "down" === r && (C = !0), 1 === t && 2 === e || s.TweenMax.to(".section__" + t, 1, {
                            opacity: "0"
                        }), i(t, r), n(e), (1 === t && "down" === r || 2 === t && "down" === r) && a[0].disable(), t > 2 && a[t - 1].disable(), s.TweenMax.to(".common-items__title", .8, {
                            ease: s.Expo.easeOut,
                            opacity: "0"
                        }), s.TweenMax.to(".common-items__title", .7, {
                            opacity: "1",
                            delay: 1
                        }), 1 === t ? (m < f.b ? (s.TweenMax.to(".jelly-container", 1.2, {
                            ease: s.Power4.easeInOut,
                            transform: "scale(0.4)",
                            opacity: "0"
                        }), s.TweenMax.to(".canvas-container__title", 1.2, {
                            ease: s.Power4.easeInOut,
                            opacity: "0"
                        })) : (s.TweenMax.to(".jelly-container", 1, {
                            ease: s.Power4.easeInOut,
                            transform: "scale(0.4)",
                            opacity: "0"
                        }), s.TweenMax.to(".canvas-container__title", 1, {
                            opacity: "0"
                        })), m < f.a ? (s.TweenMax.to(".phone__background", 1.7, {
                            ease: s.Expo.easeOut,
                            opacity: "1"
                        }), s.TweenMax.to(".common-items__title", .7, {
                            top: "2%"
                        })) : (s.TweenMax.to(".phone__background", 1.7, {
                            transform: "translateY(0vh)",
                            opacity: "1"
                        }), s.TweenMax.to(".common-items__title", .7, {
                            top: "2%"
                        })), m < f.b ? s.TweenMax.to(".phone", 1.7, {
                            display: "flex",
                            transform: "translateY(0vh)"
                        }) : m < f.a ? s.TweenMax.to(".phone", 1.7, {
                            display: "flex",
                            transform: "translateY(8vh)"
                        }) : s.TweenMax.to(".phone", 1.7, {
                            display: "flex",
                            transform: "translateY(0vh)"
                        }), s.TweenMax.to(".canvas-container", 0, {
                            display: "none",
                            delay: 1
                        })) : 2 === t ? "down" === r && (w = !0, s.TweenMax.to(".phone__background", 0, {
                            zIndex: "2"
                        }), s.TweenMax.to(u, .5, {
                            ease: s.Expo.easeOut,
                            opacity: "0"
                        })) : 4 === t ? (s.TweenMax.to(".flow-container", 0, {
                            display: "none"
                        }), g.pauseFlow()) : 6 === t ? ((_ || b) && (clearInterval(_), clearInterval(b)), s.TweenMax.to(".info-block", 0, {
                            display: "none"
                        })) : 7 === t && (C = !1, m < f.b ? (s.TweenMax.to(".common-items__title", .7, {
                            top: "2%",
                            fontSize: "18px"
                        }), s.TweenMax.to(".phone", 1.7, {
                            transform: "translateY(0vh)"
                        })) : m < f.a ? (s.TweenMax.to(".common-items__title", .7, {
                            top: "2%",
                            fontSize: "28px"
                        }), s.TweenMax.to(".phone", 1.7, {
                            transform: "translateY(8vh)"
                        })) : (s.TweenMax.to(".common-items__title", .7, {
                            top: "2%",
                            fontSize: "36px"
                        }), s.TweenMax.to(".phone", 1.7, {
                            transform: "translateY(0vh)"
                        }))), 1 === e ? (s.TweenMax.to(".phone", 1.7, {
                            transform: "translateY(90vh)"
                        }), s.TweenMax.to(".jelly-container", .7, {
                            top: "0%",
                            transform: "scale(1)",
                            opacity: "1"
                        }), s.TweenMax.to(".canvas-container__title", .8, {
                            opacity: "1"
                        }), s.TweenMax.to(".canvas-container", 0, {
                            display: "block"
                        }), w = !1, s.TweenMax.to(u, .5, {
                            ease: s.Power4.easeInOut,
                            opacity: "1"
                        })) : 2 === e ? (w = !1, s.TweenMax.to(u, .5, {
                            ease: s.Power4.easeInOut,
                            opacity: "1"
                        })) : 7 === e && (m < f.b ? s.TweenMax.to(".common-items__title", .7, {
                            top: "30%",
                            fontSize: "24px"
                        }) : m < f.a ? s.TweenMax.to(".common-items__title", .7, {
                            top: "30%",
                            fontSize: "36px"
                        }) : s.TweenMax.to(".common-items__title", .7, {
                            top: "35%",
                            fontSize: "48px"
                        }), s.TweenMax.to(".phone", 1.7, {
                            transform: "translateY(-60vh)"
                        }))
                    },
                    afterLoad: function(t, i) {
                        x = i, e(i), !w && i > 2 && (w = !0, s.TweenMax.to(u, .5, {
                            ease: s.Expo.easeOut,
                            opacity: "0"
                        })), 2 === i ? s.TweenMax.to([".section__1", ".section__2"], .5, {
                            opacity: "1"
                        }) : s.TweenMax.to(".section__" + i, .5, {
                            opacity: "1"
                        }), y(i), k(i), 7 !== i && E(i), 1 === i ? (e(1), s.TweenMax.to(".phone__background", 1.7, {
                            transform: "translateY(0vh)",
                            opacity: "0"
                        }), s.TweenMax.to(".phone__background", 0, {
                            zIndex: "2",
                            opacity: "0"
                        }), m < f.b ? s.TweenMax.to(".common-items__title", .7, {
                            top: "15%"
                        }) : m < f.a ? s.TweenMax.to(".common-items__title", .7, {
                            top: "12%"
                        }) : s.TweenMax.to(".common-items__title", .7, {
                            top: "10%"
                        })) : 4 === i ? (s.TweenMax.to(".flow-container", 0, {
                            display: "block"
                        }), g.startFlow()) : 6 === i ? (s.TweenMax.to(".info-block", 0, {
                            display: "flex"
                        }), _ = window.setInterval(j, 500), b = window.setInterval(D, 650)) : 7 !== i || C || E(6)
                    }
                }), T = !0
            }
        };
    r()(document).ready(N).ready(d.a), r()(window).resize(N)
}, function(t, e, i) {
    var n, r;
    /*!
     * fullPage 2.9.5
     * https://github.com/alvarotrigo/fullPage.js
     * @license MIT licensed
     *
     * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
     */
    ! function(o, s) {
        "use strict";
        n = [i(1)], void 0 !== (r = function(t) {
            return s(t, o, o.document, o.Math)
        }.apply(e, n)) && (t.exports = r)
    }("undefined" != typeof window ? window : this, function(t, e, i, n, r) {
        "use strict";
        var o = "fullpage-wrapper",
            s = "." + o,
            a = "fp-responsive",
            l = "fp-notransition",
            c = "fp-destroyed",
            u = "fp-enabled",
            h = "fp-viewing",
            p = "active",
            d = "." + p,
            f = "fp-completely",
            m = "." + f,
            v = "fp-section",
            g = "." + v,
            y = g + d,
            _ = g + ":first",
            b = g + ":last",
            T = "fp-tableCell",
            x = "." + T,
            w = "fp-nav",
            C = "#" + w,
            k = "fp-tooltip",
            S = "." + k,
            E = "fp-slide",
            P = "." + E,
            A = P + d,
            O = "fp-slides",
            M = "." + O,
            j = "fp-slidesContainer",
            D = "." + j,
            R = "fp-table",
            N = "fp-slidesNav",
            L = "." + N,
            I = L + " a",
            F = ".fp-controlArrow",
            B = "fp-prev",
            H = "." + B,
            X = "fp-controlArrow " + B,
            z = F + H,
            q = F + ".fp-next",
            Y = t(e),
            V = t(i);
        t.fn.fullpage = function(H) {
            function W(e, i) {
                e || Xe(0), We("autoScrolling", e, i);
                var n = t(y);
                H.autoScrolling && !H.scrollBar ? (Ge.css({
                    overflow: "hidden",
                    height: "100%"
                }), U(Ti.recordHistory, "internal"), oi.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), n.length && Xe(n.position().top)) : (Ge.css({
                    overflow: "visible",
                    height: "initial"
                }), U(!1, "internal"), oi.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), n.length && Ge.scrollTop(n.position().top))
            }

            function U(t, e) {
                We("recordHistory", t, e)
            }

            function $(t, e) {
                We("scrollingSpeed", t, e)
            }

            function G(t, e) {
                We("fitToSection", t, e)
            }

            function K(t) {
                H.lockAnchors = t
            }

            function Q(t) {
                t ? (Re(), Ne()) : (De(), Le())
            }

            function J(e, i) {
                void 0 !== i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                    qe(e, i, "m")
                })) : (qe(e, "all", "m"), e ? (Q(!0), Ie()) : (Q(!1), Fe()))
            }

            function Z(e, i) {
                void 0 !== i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                    qe(e, i, "k")
                })) : (qe(e, "all", "k"), H.keyboardScrolling = e)
            }

            function tt() {
                var e = t(y).prev(g);
                e.length || !H.loopTop && !H.continuousVertical || (e = t(g).last()), e.length && Nt(e, null, !0)
            }

            function et() {
                var e = t(y).next(g);
                e.length || !H.loopBottom && !H.continuousVertical || (e = t(g).first()), e.length && Nt(e, null, !1)
            }

            function it(t, e) {
                $(0, "internal"), nt(t, e), $(Ti.scrollingSpeed, "internal")
            }

            function nt(t, e) {
                var i = we(t);
                void 0 !== e ? ke(t, e) : i.length > 0 && Nt(i)
            }

            function rt(t) {
                jt("right", t)
            }

            function ot(t) {
                jt("left", t)
            }

            function st(e) {
                if (!oi.hasClass(c)) {
                    ai = !0, si = Y.height(), t(g).each(function() {
                        var e = t(this).find(M),
                            i = t(this).find(P);
                        H.verticalCentered && t(this).find(x).css("height", Te(t(this)) + "px"), t(this).css("height", si + "px"), i.length > 1 && ae(e, e.find(A))
                    }), H.scrollOverflow && pi.createScrollBarForAll();
                    var i = t(y),
                        n = i.index(g);
                    n && it(n + 1), ai = !1, t.isFunction(H.afterResize) && e && H.afterResize.call(oi), t.isFunction(H.afterReBuild) && !e && H.afterReBuild.call(oi)
                }
            }

            function at(e) {
                var i = Ke.hasClass(a);
                e ? i || (W(!1, "internal"), G(!1, "internal"), t(C).hide(), Ke.addClass(a), t.isFunction(H.afterResponsive) && H.afterResponsive.call(oi, e)) : i && (W(Ti.autoScrolling, "internal"), G(Ti.autoScrolling, "internal"), t(C).show(), Ke.removeClass(a), t.isFunction(H.afterResponsive) && H.afterResponsive.call(oi, e))
            }

            function lt() {
                var e = oi.find(H.sectionSelector);
                H.anchors.length || (H.anchors = e.filter("[data-anchor]").map(function() {
                    return t(this).data("anchor").toString()
                }).get()), H.navigationTooltips.length || (H.navigationTooltips = e.filter("[data-tooltip]").map(function() {
                    return t(this).data("tooltip").toString()
                }).get())
            }

            function ct() {
                oi.css({
                    height: "100%",
                    position: "relative"
                }), oi.addClass(o), t("html").addClass(u), si = Y.height(), oi.removeClass(c), dt(), t(g).each(function(e) {
                    var i = t(this),
                        n = i.find(P),
                        r = n.length;
                    ht(i, e), pt(i, e), r > 0 ? ut(i, n, r) : H.verticalCentered && be(i)
                }), H.fixedElements && H.css3 && t(H.fixedElements).appendTo(Ke), H.navigation && mt(), vt(), H.scrollOverflow ? pi = H.scrollOverflowHandler.init(H) : _t()
            }

            function ut(e, i, n) {
                var r = 100 * n,
                    o = 100 / n;
                i.wrapAll('<div class="' + j + '" />'), i.parent().wrap('<div class="' + O + '" />'), e.find(D).css("width", r + "%"), n > 1 && (H.controlArrows && ft(e), H.slidesNavigation && Ee(e, n)), i.each(function(e) {
                    t(this).css("width", o + "%"), H.verticalCentered && be(t(this))
                });
                var s = e.find(A);
                s.length && (0 !== t(y).index(g) || 0 === t(y).index(g) && 0 !== s.index()) ? He(s, "internal") : i.eq(0).addClass(p)
            }

            function ht(e, i) {
                i || 0 !== t(y).length || e.addClass(p), ei = t(y), e.css("height", si + "px"), H.paddingTop && e.css("padding-top", H.paddingTop), H.paddingBottom && e.css("padding-bottom", H.paddingBottom), void 0 !== H.sectionsColor[i] && e.css("background-color", H.sectionsColor[i]), void 0 !== H.anchors[i] && e.attr("data-anchor", H.anchors[i])
            }

            function pt(e, i) {
                void 0 !== H.anchors[i] && e.hasClass(p) && ge(H.anchors[i], i), H.menu && H.css3 && t(H.menu).closest(s).length && t(H.menu).appendTo(Ke)
            }

            function dt() {
                oi.find(H.sectionSelector).addClass(v), oi.find(H.slideSelector).addClass(E)
            }

            function ft(t) {
                t.find(M).after('<div class="' + X + '"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != H.controlArrowColor && (t.find(q).css("border-color", "transparent transparent transparent " + H.controlArrowColor), t.find(z).css("border-color", "transparent " + H.controlArrowColor + " transparent transparent")), H.loopHorizontal || t.find(z).hide()
            }

            function mt() {
                Ke.append('<div id="' + w + '"><ul></ul></div>');
                var e = t(C);
                e.addClass(function() {
                    return H.showActiveTooltip ? "fp-show-active " + H.navigationPosition : H.navigationPosition
                });
                for (var i = 0; i < t(g).length; i++) {
                    var n = "";
                    H.anchors.length && (n = H.anchors[i]);
                    var r = '<li><a href="#' + n + '"><span></span></a>',
                        o = H.navigationTooltips[i];
                    void 0 !== o && "" !== o && (r += '<div class="' + k + " " + H.navigationPosition + '">' + o + "</div>"), r += "</li>", e.find("ul").append(r)
                }
                t(C).css("margin-top", "-" + t(C).height() / 2 + "px"), t(C).find("li").eq(t(y).index(g)).find("a").addClass(p)
            }

            function vt() {
                oi.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    gt(t(this), "enablejsapi=1")
                })
            }

            function gt(t, e) {
                var i = t.attr("src");
                t.attr("src", i + yt(i) + e)
            }

            function yt(t) {
                return /\?/.test(t) ? "&" : "?"
            }

            function _t() {
                var e = t(y);
                e.addClass(f), zt(e), qt(e), H.scrollOverflow && H.scrollOverflowHandler.afterLoad(), bt() && t.isFunction(H.afterLoad) && H.afterLoad.call(e, e.data("anchor"), e.index(g) + 1), t.isFunction(H.afterRender) && H.afterRender.call(oi)
            }

            function bt() {
                var t = we(Gt().section);
                return !t.length || t.length && t.index() === ei.index()
            }

            function Tt() {
                var e;
                if (!H.autoScrolling || H.scrollBar) {
                    var n = Y.scrollTop(),
                        r = Ct(n),
                        o = 0,
                        s = n + Y.height() / 2,
                        a = Ke.height() - Y.height() === n,
                        l = i.querySelectorAll(g);
                    if (a) o = l.length - 1;
                    else if (n)
                        for (var c = 0; c < l.length; ++c) {
                            var u = l[c];
                            u.offsetTop <= s && (o = c)
                        } else o = 0;
                    if (wt(r) && (t(y).hasClass(f) || t(y).addClass(f).siblings().removeClass(f)), e = t(l).eq(o), !e.hasClass(p)) {
                        xi = !0;
                        var h, d, m = t(y),
                            v = m.index(g) + 1,
                            _ = ye(e),
                            b = e.data("anchor"),
                            T = e.index(g) + 1,
                            x = e.find(A);
                        x.length && (d = x.data("anchor"), h = x.index()), ci && (e.addClass(p).siblings().removeClass(p), t.isFunction(H.onLeave) && H.onLeave.call(m, v, T, _), t.isFunction(H.afterLoad) && H.afterLoad.call(e, b, T), Vt(m), zt(e), qt(e), ge(b, T - 1), H.anchors.length && (Je = b), Pe(h, d, b, T)), clearTimeout(vi), vi = setTimeout(function() {
                            xi = !1
                        }, 100)
                    }
                    H.fitToSection && (clearTimeout(gi), gi = setTimeout(function() {
                        H.fitToSection && t(y).outerHeight() <= si && xt()
                    }, H.fitToSectionDelay))
                }
            }

            function xt() {
                ci && (ai = !0, Nt(t(y)), ai = !1)
            }

            function wt(e) {
                var i = t(y).position().top,
                    n = i + Y.height();
                return "up" == e ? n >= Y.scrollTop() + Y.height() : i <= Y.scrollTop()
            }

            function Ct(t) {
                var e = t > wi ? "down" : "up";
                return wi = t, Ai = t, e
            }

            function kt(e) {
                if (hi.m[e]) {
                    var i = "down" === e ? et : tt;
                    if (H.scrollOverflow) {
                        var n = H.scrollOverflowHandler.scrollable(t(y)),
                            r = "down" === e ? "bottom" : "top";
                        if (n.length > 0) {
                            if (!H.scrollOverflowHandler.isScrolled(r, n)) return !0;
                            i()
                        } else i()
                    } else i()
                }
            }

            function St(t) {
                var e = t.originalEvent;
                H.autoScrolling && Pt(e) && t.preventDefault()
            }

            function Et(e) {
                var i = e.originalEvent,
                    r = t(i.target).closest(g);
                if (Pt(i)) {
                    H.autoScrolling && e.preventDefault();
                    var o = Be(i);
                    Si = o.y, Ei = o.x, r.find(M).length && n.abs(ki - Ei) > n.abs(Ci - Si) ? !ii && n.abs(ki - Ei) > Y.outerWidth() / 100 * H.touchSensitivity && (ki > Ei ? hi.m.right && rt(r) : hi.m.left && ot(r)) : H.autoScrolling && ci && n.abs(Ci - Si) > Y.height() / 100 * H.touchSensitivity && (Ci > Si ? kt("down") : Si > Ci && kt("up"))
                }
            }

            function Pt(t) {
                return void 0 === t.pointerType || "mouse" != t.pointerType
            }

            function At(t) {
                var e = t.originalEvent;
                if (H.fitToSection && Ge.stop(), Pt(e)) {
                    var i = Be(e);
                    Ci = i.y, ki = i.x
                }
            }

            function Ot(t, e) {
                for (var i = 0, r = t.slice(n.max(t.length - e, 1)), o = 0; o < r.length; o++) i += r[o];
                return n.ceil(i / e)
            }

            function Mt(i) {
                var r = (new Date).getTime(),
                    o = t(m).hasClass("fp-normal-scroll");
                if (H.autoScrolling && !ti && !o) {
                    i = i || e.event;
                    var s = i.wheelDelta || -i.deltaY || -i.detail,
                        a = n.max(-1, n.min(1, s)),
                        l = void 0 !== i.wheelDeltaX || void 0 !== i.deltaX,
                        c = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !l;
                    ui.length > 149 && ui.shift(), ui.push(n.abs(s)), H.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                    var u = r - Pi;
                    return Pi = r, u > 200 && (ui = []), ci && Ot(ui, 10) >= Ot(ui, 70) && c && kt(a < 0 ? "down" : "up"), !1
                }
                H.fitToSection && Ge.stop()
            }

            function jt(e, i) {
                var n = void 0 === i ? t(y) : i,
                    r = n.find(M),
                    o = r.find(P).length;
                if (!(!r.length || ii || o < 2)) {
                    var s = r.find(A),
                        a = null;
                    if (a = "left" === e ? s.prev(P) : s.next(P), !a.length) {
                        if (!H.loopHorizontal) return;
                        a = "left" === e ? s.siblings(":last") : s.siblings(":first")
                    }
                    ii = !0, ae(r, a, e)
                }
            }

            function Dt() {
                t(A).each(function() {
                    He(t(this), "internal")
                })
            }

            function Rt(t) {
                var e = t.position(),
                    i = e.top,
                    n = e.top > Ai,
                    r = i - si + t.outerHeight(),
                    o = H.bigSectionsDestination;
                return t.outerHeight() > si ? (n || o) && "bottom" !== o || (i = r) : (n || ai && t.is(":last-child")) && (i = r), Ai = i, i
            }

            function Nt(e, i, n) {
                if (void 0 !== e) {
                    var r, o, s = Rt(e),
                        a = {
                            element: e,
                            callback: i,
                            isMovementUp: n,
                            dtop: s,
                            yMovement: ye(e),
                            anchorLink: e.data("anchor"),
                            sectionIndex: e.index(g),
                            activeSlide: e.find(A),
                            activeSection: t(y),
                            leavingSection: t(y).index(g) + 1,
                            localIsResizing: ai
                        };
                    a.activeSection.is(e) && !ai || H.scrollBar && Y.scrollTop() === a.dtop && !e.hasClass("fp-auto-height") || (a.activeSlide.length && (r = a.activeSlide.data("anchor"), o = a.activeSlide.index()), t.isFunction(H.onLeave) && !a.localIsResizing && !1 === H.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) || (H.autoScrolling && H.continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Ft(a)), a.localIsResizing || Vt(a.activeSection), H.scrollOverflow && H.scrollOverflowHandler.beforeLeave(), e.addClass(p).siblings().removeClass(p), zt(e), H.scrollOverflow && H.scrollOverflowHandler.onLeave(), ci = !1, Pe(o, r, a.anchorLink, a.sectionIndex), Lt(a), Je = a.anchorLink, ge(a.anchorLink, a.sectionIndex)))
                }
            }

            function Lt(e) {
                if (H.css3 && H.autoScrolling && !H.scrollBar) xe("translate3d(0px, -" + n.round(e.dtop) + "px, 0px)", !0), H.scrollingSpeed ? (clearTimeout(fi), fi = setTimeout(function() {
                    Ht(e)
                }, H.scrollingSpeed)) : Ht(e);
                else {
                    var i = It(e);
                    t(i.element).animate(i.options, H.scrollingSpeed, H.easing).promise().done(function() {
                        H.scrollBar ? setTimeout(function() {
                            Ht(e)
                        }, 30) : Ht(e)
                    })
                }
            }

            function It(t) {
                var e = {};
                return H.autoScrolling && !H.scrollBar ? (e.options = {
                    top: -t.dtop
                }, e.element = s) : (e.options = {
                    scrollTop: t.dtop
                }, e.element = "html, body"), e
            }

            function Ft(e) {
                return e.isMovementUp ? t(y).before(e.activeSection.nextAll(g)) : t(y).after(e.activeSection.prevAll(g).get().reverse()), Xe(t(y).position().top), Dt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.position().top, e.yMovement = ye(e.element), e.leavingSection = e.activeSection.index(g) + 1, e.sectionIndex = e.element.index(g), e
            }

            function Bt(e) {
                e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(_).before(e.wrapAroundElements) : t(b).after(e.wrapAroundElements), Xe(t(y).position().top), Dt())
            }

            function Ht(e) {
                Bt(e), t.isFunction(H.afterLoad) && !e.localIsResizing && H.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), H.scrollOverflow && H.scrollOverflowHandler.afterLoad(), e.localIsResizing || qt(e.element), e.element.addClass(f).siblings().removeClass(f), ci = !0, t.isFunction(e.callback) && e.callback.call(this)
            }

            function Xt(t, e) {
                t.attr(e, t.data(e)).removeAttr("data-" + e)
            }

            function zt(e) {
                if (H.lazyLoading) {
                    var i;
                    Wt(e).find("img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                        if (i = t(this), t.each(["src", "srcset"], function(t, e) {
                                var n = i.attr("data-" + e);
                                void 0 !== n && n && Xt(i, e)
                            }), i.is("source")) {
                            var e = i.closest("video").length ? "video" : "audio";
                            i.closest(e).get(0).load()
                        }
                    })
                }
            }

            function qt(e) {
                var i = Wt(e);
                i.find("video, audio").each(function() {
                    var e = t(this).get(0);
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var e = t(this).get(0);
                    e.hasAttribute("data-autoplay") && Yt(e), e.onload = function() {
                        e.hasAttribute("data-autoplay") && Yt(e)
                    }
                })
            }

            function Yt(t) {
                t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function Vt(e) {
                var i = Wt(e);
                i.find("video, audio").each(function() {
                    var e = t(this).get(0);
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var e = t(this).get(0);
                    /youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function Wt(e) {
                var i = e.find(A);
                return i.length && (e = t(i)), e
            }

            function Ut() {
                var t = Gt(),
                    e = t.section,
                    i = t.slide;
                e && (H.animateAnchor ? ke(e, i) : it(e, i))
            }

            function $t() {
                if (!xi && !H.lockAnchors) {
                    var t = Gt(),
                        e = t.section,
                        i = t.slide,
                        n = void 0 === Je,
                        r = void 0 === Je && void 0 === i && !ii;
                    e.length && (e && e !== Je && !n || r || !ii && Ze != i) && ke(e, i)
                }
            }

            function Gt() {
                var t = e.location.hash,
                    i = t.replace("#", "").split("/"),
                    n = t.indexOf("#/") > -1;
                return {
                    section: n ? "/" + i[1] : decodeURIComponent(i[0]),
                    slide: n ? decodeURIComponent(i[2]) : decodeURIComponent(i[1])
                }
            }

            function Kt(e) {
                clearTimeout(yi);
                var i = t(":focus");
                if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && H.keyboardScrolling && H.autoScrolling) {
                    var n = e.which,
                        r = [40, 38, 32, 33, 34];
                    t.inArray(n, r) > -1 && e.preventDefault(), ti = e.ctrlKey, yi = setTimeout(function() {
                        oe(e)
                    }, 150)
                }
            }

            function Qt() {
                t(this).prev().trigger("click")
            }

            function Jt(t) {
                li && (ti = t.ctrlKey)
            }

            function Zt(t) {
                2 == t.which && (Oi = t.pageY, oi.on("mousemove", se))
            }

            function te(t) {
                2 == t.which && oi.off("mousemove")
            }

            function ee() {
                var e = t(this).closest(g);
                t(this).hasClass(B) ? hi.m.left && ot(e) : hi.m.right && rt(e)
            }

            function ie() {
                li = !1, ti = !1
            }

            function ne(e) {
                e.preventDefault();
                var i = t(this).parent().index();
                Nt(t(g).eq(i))
            }

            function re(e) {
                e.preventDefault();
                var i = t(this).closest(g).find(M);
                ae(i, i.find(P).eq(t(this).closest("li").index()))
            }

            function oe(e) {
                var i = e.shiftKey;
                if (ci || !([37, 39].indexOf(e.which) < 0)) switch (e.which) {
                    case 38:
                    case 33:
                        hi.k.up && tt();
                        break;
                    case 32:
                        if (i && hi.k.up) {
                            tt();
                            break
                        }
                    case 40:
                    case 34:
                        hi.k.down && et();
                        break;
                    case 36:
                        hi.k.up && nt(1);
                        break;
                    case 35:
                        hi.k.down && nt(t(g).length);
                        break;
                    case 37:
                        hi.k.left && ot();
                        break;
                    case 39:
                        hi.k.right && rt();
                        break;
                    default:
                        return
                }
            }

            function se(t) {
                ci && (t.pageY < Oi && hi.m.up ? tt() : t.pageY > Oi && hi.m.down && et()), Oi = t.pageY
            }

            function ae(e, i, n) {
                var r = e.closest(g),
                    o = {
                        slides: e,
                        destiny: i,
                        direction: n,
                        destinyPos: i.position(),
                        slideIndex: i.index(),
                        section: r,
                        sectionIndex: r.index(g),
                        anchorLink: r.data("anchor"),
                        slidesNav: r.find(L),
                        slideAnchor: Oe(i),
                        prevSlide: r.find(A),
                        prevSlideIndex: r.find(A).index(),
                        localIsResizing: ai
                    };
                if (o.xMovement = _e(o.prevSlideIndex, o.slideIndex), o.localIsResizing || (ci = !1), H.onSlideLeave && !o.localIsResizing && "none" !== o.xMovement && t.isFunction(H.onSlideLeave) && !1 === H.onSlideLeave.call(o.prevSlide, o.anchorLink, o.sectionIndex + 1, o.prevSlideIndex, o.direction, o.slideIndex)) return void(ii = !1);
                i.addClass(p).siblings().removeClass(p), o.localIsResizing || (Vt(o.prevSlide), zt(i)), !H.loopHorizontal && H.controlArrows && (r.find(z).toggle(0 !== o.slideIndex), r.find(q).toggle(!i.is(":last-child"))), r.hasClass(p) && !o.localIsResizing && Pe(o.slideIndex, o.slideAnchor, o.anchorLink, o.sectionIndex), ce(e, o, !0)
            }

            function le(e) {
                ue(e.slidesNav, e.slideIndex), e.localIsResizing || (t.isFunction(H.afterSlideLoad) && H.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), ci = !0, qt(e.destiny)), ii = !1
            }

            function ce(t, e, i) {
                var r = e.destinyPos;
                if (H.css3) {
                    var o = "translate3d(-" + n.round(r.left) + "px, 0px, 0px)";
                    de(t.find(D)).css(ze(o)), mi = setTimeout(function() {
                        i && le(e)
                    }, H.scrollingSpeed, H.easing)
                } else t.animate({
                    scrollLeft: n.round(r.left)
                }, H.scrollingSpeed, H.easing, function() {
                    i && le(e)
                })
            }

            function ue(t, e) {
                t.find(d).removeClass(p), t.find("li").eq(e).find("a").addClass(p)
            }

            function he() {
                if (pe(), ni) {
                    var e = t(i.activeElement);
                    if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                        var r = Y.height();
                        n.abs(r - Mi) > 20 * n.max(Mi, r) / 100 && (st(!0), Mi = r)
                    }
                } else clearTimeout(di), di = setTimeout(function() {
                    st(!0)
                }, 350)
            }

            function pe() {
                var t = H.responsive || H.responsiveWidth,
                    e = H.responsiveHeight,
                    i = t && Y.outerWidth() < t,
                    n = e && Y.height() < e;
                t && e ? at(i || n) : t ? at(i) : e && at(n)
            }

            function de(t) {
                var e = "all " + H.scrollingSpeed + "ms " + H.easingcss3;
                return t.removeClass(l), t.css({
                    "-webkit-transition": e,
                    transition: e
                })
            }

            function fe(t) {
                return t.addClass(l)
            }

            function me(e, i) {
                H.navigation && (t(C).find(d).removeClass(p), e ? t(C).find('a[href="#' + e + '"]').addClass(p) : t(C).find("li").eq(i).find("a").addClass(p))
            }

            function ve(e) {
                H.menu && (t(H.menu).find(d).removeClass(p), t(H.menu).find('[data-menuanchor="' + e + '"]').addClass(p))
            }

            function ge(t, e) {
                ve(t), me(t, e)
            }

            function ye(e) {
                var i = t(y).index(g),
                    n = e.index(g);
                return i == n ? "none" : i > n ? "up" : "down"
            }

            function _e(t, e) {
                return t == e ? "none" : t > e ? "left" : "right"
            }

            function be(t) {
                t.hasClass(R) || t.addClass(R).wrapInner('<div class="' + T + '" style="height:' + Te(t) + 'px;" />')
            }

            function Te(t) {
                var e = si;
                if (H.paddingTop || H.paddingBottom) {
                    var i = t;
                    i.hasClass(v) || (i = t.closest(g));
                    var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                    e = si - n
                }
                return e
            }

            function xe(t, e) {
                e ? de(oi) : fe(oi), oi.css(ze(t)), setTimeout(function() {
                    oi.removeClass(l)
                }, 10)
            }

            function we(e) {
                if (!e) return [];
                var i = oi.find(g + '[data-anchor="' + e + '"]');
                return i.length || (i = t(g).eq(e - 1)), i
            }

            function Ce(t, e) {
                var i = e.find(M),
                    n = i.find(P + '[data-anchor="' + t + '"]');
                return n.length || (n = i.find(P).eq(t)), n
            }

            function ke(t, e) {
                var i = we(t);
                i.length && (void 0 === e && (e = 0), t === Je || i.hasClass(p) ? Se(i, e) : Nt(i, function() {
                    Se(i, e)
                }))
            }

            function Se(t, e) {
                if (void 0 !== e) {
                    var i = t.find(M),
                        n = Ce(e, t);
                    n.length && ae(i, n)
                }
            }

            function Ee(t, e) {
                t.append('<div class="' + N + '"><ul></ul></div>');
                var i = t.find(L);
                i.addClass(H.slidesNavPosition);
                for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(p)
            }

            function Pe(t, e, i, n) {
                var r = "";
                H.anchors.length && !H.lockAnchors && (t ? (void 0 !== i && (r = i), void 0 === e && (e = t), Ze = e, Ae(r + "/" + e)) : void 0 !== t ? (Ze = e, Ae(i)) : Ae(i)), Me()
            }

            function Ae(t) {
                if (H.recordHistory) location.hash = t;
                else if (ni || ri) e.history.replaceState(r, r, "#" + t);
                else {
                    var i = e.location.href.split("#")[0];
                    e.location.replace(i + "#" + t)
                }
            }

            function Oe(t) {
                var e = t.data("anchor"),
                    i = t.index();
                return void 0 === e && (e = i), e
            }

            function Me() {
                var e = t(y),
                    i = e.find(A),
                    n = Oe(e),
                    r = Oe(i),
                    o = String(n);
                i.length && (o = o + "-" + r), o = o.replace("/", "-").replace("#", "");
                var s = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
                Ke[0].className = Ke[0].className.replace(s, ""), Ke.addClass(h + "-" + o)
            }

            function je() {
                var t, n = i.createElement("p"),
                    o = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                i.body.insertBefore(n, null);
                for (var s in o) n.style[s] !== r && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[s]));
                return i.body.removeChild(n), t !== r && t.length > 0 && "none" !== t
            }

            function De() {
                i.addEventListener ? (i.removeEventListener("mousewheel", Mt, !1), i.removeEventListener("wheel", Mt, !1), i.removeEventListener("MozMousePixelScroll", Mt, !1)) : i.detachEvent("onmousewheel", Mt)
            }

            function Re() {
                var t, n = "";
                e.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
                var o = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == o ? i[t](n + "MozMousePixelScroll", Mt, !1) : i[t](n + o, Mt, !1)
            }

            function Ne() {
                oi.on("mousedown", Zt).on("mouseup", te)
            }

            function Le() {
                oi.off("mousedown", Zt).off("mouseup", te)
            }

            function Ie() {
                (ni || ri) && (H.autoScrolling && Ke.off(bi.touchmove).on(bi.touchmove, St), t(s).off(bi.touchstart).on(bi.touchstart, At).off(bi.touchmove).on(bi.touchmove, Et))
            }

            function Fe() {
                (ni || ri) && (H.autoScrolling && Ke.off(bi.touchmove), t(s).off(bi.touchstart).off(bi.touchmove))
            }

            function Be(t) {
                var e = [];
                return e.y = void 0 !== t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = void 0 !== t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, ri && Pt(t) && H.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
            }

            function He(t, e) {
                $(0, "internal"), void 0 !== e && (ai = !0), ae(t.closest(M), t), void 0 !== e && (ai = !1), $(Ti.scrollingSpeed, "internal")
            }

            function Xe(t) {
                var e = n.round(t);
                H.css3 && H.autoScrolling && !H.scrollBar ? xe("translate3d(0px, -" + e + "px, 0px)", !1) : H.autoScrolling && !H.scrollBar ? oi.css("top", -e) : Ge.scrollTop(e)
            }

            function ze(t) {
                return {
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-ms-transform": t,
                    transform: t
                }
            }

            function qe(e, i, n) {
                "all" !== i ? hi[n][i] = e : t.each(Object.keys(hi[n]), function(t, i) {
                    hi[n][i] = e
                })
            }

            function Ye(e) {
                W(!1, "internal"), J(!1), Z(!1), oi.addClass(c), clearTimeout(mi), clearTimeout(fi), clearTimeout(di), clearTimeout(vi), clearTimeout(gi), Y.off("scroll", Tt).off("hashchange", $t).off("resize", he), V.off("click touchstart", C + " a").off("mouseenter", C + " li").off("mouseleave", C + " li").off("click touchstart", I).off("mouseover", H.normalScrollElements).off("mouseout", H.normalScrollElements), t(g).off("click touchstart", F), clearTimeout(mi), clearTimeout(fi), e && Ve()
            }

            function Ve() {
                Xe(0), oi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                    Xt(t(this), "src")
                }), oi.find("img[data-srcset]").each(function() {
                    Xt(t(this), "srcset")
                }), t(C + ", " + L + ", " + F).remove(), t(g).css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), t(P).css({
                    width: ""
                }), oi.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), Ge.css({
                    overflow: "",
                    height: ""
                }), t("html").removeClass(u), Ke.removeClass(a), t.each(Ke.get(0).className.split(/\s+/), function(t, e) {
                    0 === e.indexOf(h) && Ke.removeClass(e)
                }), t(g + ", " + P).each(function() {
                    H.scrollOverflowHandler && H.scrollOverflowHandler.remove(t(this)), t(this).removeClass(R + " " + p)
                }), fe(oi), oi.find(x + ", " + D + ", " + M).each(function() {
                    t(this).replaceWith(this.childNodes)
                }), oi.css({
                    "-webkit-transition": "none",
                    transition: "none"
                }), Ge.scrollTop(0);
                var e = [v, E, j];
                t.each(e, function(e, i) {
                    t("." + i).removeClass(i)
                })
            }

            function We(t, e, i) {
                H[t] = e, "internal" !== i && (Ti[t] = e)
            }

            function Ue() {
                var e = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
                if (t("html").hasClass(u)) return void $e("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
                H.continuousVertical && (H.loopTop || H.loopBottom) && (H.continuousVertical = !1, $e("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), H.scrollBar && H.scrollOverflow && $e("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !H.continuousVertical || !H.scrollBar && H.autoScrolling || (H.continuousVertical = !1, $e("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), H.scrollOverflow && !H.scrollOverflowHandler && (H.scrollOverflow = !1, $e("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), t.each(e, function(t, e) {
                    H[e] && $e("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
                }), t.each(H.anchors, function(e, i) {
                    var n = V.find("[name]").filter(function() {
                            return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
                        }),
                        r = V.find("[id]").filter(function() {
                            return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
                        });
                    (r.length || n.length) && ($e("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), r.length && $e("error", '"' + i + '" is is being used by another element `id` property'), n.length && $e("error", '"' + i + '" is is being used by another element `name` property'))
                })
            }

            function $e(t, e) {
                console && console[t] && console[t]("fullPage: " + e)
            }
            if (t("html").hasClass(u)) return void Ue();
            var Ge = t("html, body"),
                Ke = t("body"),
                Qe = t.fn.fullpage;
            H = t.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: t.fn.fp_scrolloverflow ? t.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, H);
            var Je, Ze, ti, ei, ii = !1,
                ni = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                ri = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                oi = t(this),
                si = Y.height(),
                ai = !1,
                li = !0,
                ci = !0,
                ui = [],
                hi = {};
            hi.m = {
                up: !0,
                down: !0,
                left: !0,
                right: !0
            }, hi.k = t.extend(!0, {}, hi.m);
            var pi, di, fi, mi, vi, gi, yi, _i = function() {
                    return e.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    }
                }(),
                bi = {
                    touchmove: "ontouchmove" in e ? "touchmove" : _i.move,
                    touchstart: "ontouchstart" in e ? "touchstart" : _i.down
                },
                Ti = t.extend(!0, {}, H);
            Ue(), t.extend(t.easing, {
                easeInOutCubic: function(t, e, i, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
                }
            }), t(this).length && (Qe.version = "2.9.5", Qe.setAutoScrolling = W, Qe.setRecordHistory = U, Qe.setScrollingSpeed = $, Qe.setFitToSection = G, Qe.setLockAnchors = K, Qe.setMouseWheelScrolling = Q, Qe.setAllowScrolling = J, Qe.setKeyboardScrolling = Z, Qe.moveSectionUp = tt, Qe.moveSectionDown = et, Qe.silentMoveTo = it, Qe.moveTo = nt, Qe.moveSlideRight = rt, Qe.moveSlideLeft = ot, Qe.fitToSection = xt, Qe.reBuild = st, Qe.setResponsive = at, Qe.destroy = Ye, Qe.shared = {
                afterRenderActions: _t
            }, function() {
                H.css3 && (H.css3 = je()), H.scrollBar = H.scrollBar || H.hybrid, lt(), ct(), J(!0), W(H.autoScrolling, "internal"), pe(), Me(), "complete" === i.readyState && Ut(), Y.on("load", Ut)
            }(), function() {
                Y.on("scroll", Tt).on("hashchange", $t).blur(ie).resize(he), V.keydown(Kt).keyup(Jt).on("click touchstart", C + " a", ne).on("click touchstart", I, re).on("click", S, Qt), t(g).on("click touchstart", F, ee), H.normalScrollElements && (V.on("mouseenter touchstart", H.normalScrollElements, function() {
                    J(!1)
                }), V.on("mouseleave touchend", H.normalScrollElements, function() {
                    J(!0)
                }))
            }());
            var xi = !1,
                wi = 0,
                Ci = 0,
                ki = 0,
                Si = 0,
                Ei = 0,
                Pi = (new Date).getTime(),
                Ai = 0,
                Oi = 0,
                Mi = si
        }
    })
}, function(t, e, i) {
    (function(e) {
        var i, i;
        ! function(e) {
            t.exports = e()
        }(function() {
            return function t(e, n, r) {
                function o(a, l) {
                    if (!n[a]) {
                        if (!e[a]) {
                            var c = "function" == typeof i && i;
                            if (!l && c) return i(a, !0);
                            if (s) return s(a, !0);
                            var u = new Error("Cannot find module '" + a + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var h = n[a] = {
                            exports: {}
                        };
                        e[a][0].call(h.exports, function(t) {
                            var i = e[a][1][t];
                            return o(i || t)
                        }, h, h.exports, t, e, n, r)
                    }
                    return n[a].exports
                }
                for (var s = "function" == typeof i && i, a = 0; a < r.length; a++) o(r[a]);
                return o
            }({
                1: [function(t, e, i) {
                    /*
                    object-assign
                    (c) Sindre Sorhus
                    @license MIT
                    */
                    "use strict";

                    function n(t) {
                        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }
                    var r = Object.getOwnPropertySymbols,
                        o = Object.prototype.hasOwnProperty,
                        s = Object.prototype.propertyIsEnumerable;
                    e.exports = function() {
                        try {
                            if (!Object.assign) return !1;
                            var t = new String("abc");
                            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                                    return e[t]
                                }).join("")) return !1;
                            var n = {};
                            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                                n[t] = t
                            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                        } catch (t) {
                            return !1
                        }
                    }() ? Object.assign : function(t, e) {
                        for (var i, a, l = n(t), c = 1; c < arguments.length; c++) {
                            i = Object(arguments[c]);
                            for (var u in i) o.call(i, u) && (l[u] = i[u]);
                            if (r) {
                                a = r(i);
                                for (var h = 0; h < a.length; h++) s.call(i, a[h]) && (l[a[h]] = i[a[h]])
                            }
                        }
                        return l
                    }
                }, {}],
                2: [function(t, e, i) {
                    (function(t) {
                        (function() {
                            var i, n, r, o, s, a;
                            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                                return performance.now()
                            } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function() {
                                return (i() - s) / 1e6
                            }, n = t.hrtime, i = function() {
                                var t;
                                return t = n(), 1e9 * t[0] + t[1]
                            }, o = i(), a = 1e9 * t.uptime(), s = o - a) : Date.now ? (e.exports = function() {
                                return Date.now() - r
                            }, r = Date.now()) : (e.exports = function() {
                                return (new Date).getTime() - r
                            }, r = (new Date).getTime())
                        }).call(this)
                    }).call(this, t("_process"))
                }, {
                    _process: 3
                }],
                3: [function(t, e, i) {
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function r() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function o(t) {
                        if (h === setTimeout) return setTimeout(t, 0);
                        if ((h === n || !h) && setTimeout) return h = setTimeout, setTimeout(t, 0);
                        try {
                            return h(t, 0)
                        } catch (e) {
                            try {
                                return h.call(null, t, 0)
                            } catch (e) {
                                return h.call(this, t, 0)
                            }
                        }
                    }

                    function s(t) {
                        if (p === clearTimeout) return clearTimeout(t);
                        if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
                        try {
                            return p(t)
                        } catch (e) {
                            try {
                                return p.call(null, t)
                            } catch (e) {
                                return p.call(this, t)
                            }
                        }
                    }

                    function a() {
                        v && f && (v = !1, f.length ? m = f.concat(m) : g = -1, m.length && l())
                    }

                    function l() {
                        if (!v) {
                            var t = o(a);
                            v = !0;
                            for (var e = m.length; e;) {
                                for (f = m, m = []; ++g < e;) f && f[g].run();
                                g = -1, e = m.length
                            }
                            f = null, v = !1, s(t)
                        }
                    }

                    function c(t, e) {
                        this.fun = t, this.array = e
                    }

                    function u() {}
                    var h, p, d = e.exports = {};
                    ! function() {
                        try {
                            h = "function" == typeof setTimeout ? setTimeout : n
                        } catch (t) {
                            h = n
                        }
                        try {
                            p = "function" == typeof clearTimeout ? clearTimeout : r
                        } catch (t) {
                            p = r
                        }
                    }();
                    var f, m = [],
                        v = !1,
                        g = -1;
                    d.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        m.push(new c(t, e)), 1 !== m.length || v || o(l)
                    }, c.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function(t) {
                        return []
                    }, d.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }, d.cwd = function() {
                        return "/"
                    }, d.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }, d.umask = function() {
                        return 0
                    }
                }, {}],
                4: [function(t, i, n) {
                    (function(e) {
                        for (var n = t("performance-now"), r = "undefined" == typeof window ? e : window, o = ["moz", "webkit"], s = "AnimationFrame", a = r["request" + s], l = r["cancel" + s] || r["cancelRequest" + s], c = 0; !a && c < o.length; c++) a = r[o[c] + "Request" + s], l = r[o[c] + "Cancel" + s] || r[o[c] + "CancelRequest" + s];
                        if (!a || !l) {
                            var u = 0,
                                h = 0,
                                p = [];
                            a = function(t) {
                                if (0 === p.length) {
                                    var e = n(),
                                        i = Math.max(0, 1e3 / 60 - (e - u));
                                    u = i + e, setTimeout(function() {
                                        var t = p.slice(0);
                                        p.length = 0;
                                        for (var e = 0; e < t.length; e++)
                                            if (!t[e].cancelled) try {
                                                t[e].callback(u)
                                            } catch (t) {
                                                setTimeout(function() {
                                                    throw t
                                                }, 0)
                                            }
                                    }, Math.round(i))
                                }
                                return p.push({
                                    handle: ++h,
                                    callback: t,
                                    cancelled: !1
                                }), h
                            }, l = function(t) {
                                for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0)
                            }
                        }
                        i.exports = function(t) {
                            return a.call(r, t)
                        }, i.exports.cancel = function() {
                            l.apply(r, arguments)
                        }, i.exports.polyfill = function() {
                            r.requestAnimationFrame = a, r.cancelAnimationFrame = l
                        }
                    }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    "performance-now": 2
                }],
                5: [function(t, e, i) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var r = function() {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var n = e[i];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            return function(e, i, n) {
                                return i && t(e.prototype, i), n && t(e, n), e
                            }
                        }(),
                        o = t("raf"),
                        s = t("object-assign"),
                        a = {
                            propertyCache: {},
                            vendors: [null, ["-webkit-", "webkit"],
                                ["-moz-", "Moz"],
                                ["-o-", "O"],
                                ["-ms-", "ms"]
                            ],
                            clamp: function(t, e, i) {
                                return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
                            },
                            data: function(t, e) {
                                return a.deserialize(t.getAttribute("data-" + e))
                            },
                            deserialize: function(t) {
                                return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                            },
                            camelCase: function(t) {
                                return t.replace(/-+(.)?/g, function(t, e) {
                                    return e ? e.toUpperCase() : ""
                                })
                            },
                            accelerate: function(t) {
                                a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
                            },
                            transformSupport: function(t) {
                                for (var e = document.createElement("div"), i = !1, n = null, r = !1, o = null, s = null, l = 0, c = a.vendors.length; l < c; l++)
                                    if (null !== a.vendors[l] ? (o = a.vendors[l][0] + "transform", s = a.vendors[l][1] + "Transform") : (o = "transform", s = "transform"), void 0 !== e.style[s]) {
                                        i = !0;
                                        break
                                    }
                                switch (t) {
                                    case "2D":
                                        r = i;
                                        break;
                                    case "3D":
                                        if (i) {
                                            var u = document.body || document.createElement("body"),
                                                h = document.documentElement,
                                                p = h.style.overflow,
                                                d = !1;
                                            document.body || (d = !0, h.style.overflow = "hidden", h.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[s] = "translate3d(1px,1px,1px)", n = window.getComputedStyle(e).getPropertyValue(o), r = void 0 !== n && n.length > 0 && "none" !== n, h.style.overflow = p, u.removeChild(e), d && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                        }
                                }
                                return r
                            },
                            css: function(t, e, i) {
                                var n = a.propertyCache[e];
                                if (!n)
                                    for (var r = 0, o = a.vendors.length; r < o; r++)
                                        if (n = null !== a.vendors[r] ? a.camelCase(a.vendors[r][1] + "-" + e) : e, void 0 !== t.style[n]) {
                                            a.propertyCache[e] = n;
                                            break
                                        }
                                t.style[n] = i
                            }
                        },
                        l = {
                            relativeInput: !1,
                            clipRelativeInput: !1,
                            inputElement: null,
                            hoverOnly: !1,
                            calibrationThreshold: 100,
                            calibrationDelay: 500,
                            supportDelay: 500,
                            calibrateX: !1,
                            calibrateY: !0,
                            invertX: !0,
                            invertY: !0,
                            limitX: !1,
                            limitY: !1,
                            scalarX: 10,
                            scalarY: 10,
                            frictionX: .1,
                            frictionY: .1,
                            originX: .5,
                            originY: .5,
                            pointerEvents: !1,
                            precision: 1,
                            onReady: null,
                            selector: null
                        },
                        c = function() {
                            function t(e, i) {
                                n(this, t), this.element = e;
                                var r = {
                                    calibrateX: a.data(this.element, "calibrate-x"),
                                    calibrateY: a.data(this.element, "calibrate-y"),
                                    invertX: a.data(this.element, "invert-x"),
                                    invertY: a.data(this.element, "invert-y"),
                                    limitX: a.data(this.element, "limit-x"),
                                    limitY: a.data(this.element, "limit-y"),
                                    scalarX: a.data(this.element, "scalar-x"),
                                    scalarY: a.data(this.element, "scalar-y"),
                                    frictionX: a.data(this.element, "friction-x"),
                                    frictionY: a.data(this.element, "friction-y"),
                                    originX: a.data(this.element, "origin-x"),
                                    originY: a.data(this.element, "origin-y"),
                                    pointerEvents: a.data(this.element, "pointer-events"),
                                    precision: a.data(this.element, "precision"),
                                    relativeInput: a.data(this.element, "relative-input"),
                                    clipRelativeInput: a.data(this.element, "clip-relative-input"),
                                    hoverOnly: a.data(this.element, "hover-only"),
                                    inputElement: document.querySelector(a.data(this.element, "input-element")),
                                    selector: a.data(this.element, "selector")
                                };
                                for (var o in r) null === r[o] && delete r[o];
                                s(this, l, r, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                            }
                            return r(t, [{
                                key: "initialise",
                                value: function() {
                                    void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                                }
                            }, {
                                key: "doReadyCallback",
                                value: function() {
                                    this.onReady && this.onReady()
                                }
                            }, {
                                key: "updateLayers",
                                value: function() {
                                    this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                                    for (var t = 0; t < this.layers.length; t++) {
                                        var e = this.layers[t];
                                        this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                        var i = a.data(e, "depth") || 0;
                                        this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                                    }
                                }
                            }, {
                                key: "updateDimensions",
                                value: function() {
                                    this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                                }
                            }, {
                                key: "updateBounds",
                                value: function() {
                                    this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                                }
                            }, {
                                key: "queueCalibration",
                                value: function(t) {
                                    clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = o(this.onAnimationFrame))
                                }
                            }, {
                                key: "disable",
                                value: function() {
                                    this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), o.cancel(this.raf))
                                }
                            }, {
                                key: "calibrate",
                                value: function(t, e) {
                                    this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                                }
                            }, {
                                key: "invert",
                                value: function(t, e) {
                                    this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                                }
                            }, {
                                key: "friction",
                                value: function(t, e) {
                                    this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                                }
                            }, {
                                key: "scalar",
                                value: function(t, e) {
                                    this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                                }
                            }, {
                                key: "limit",
                                value: function(t, e) {
                                    this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                                }
                            }, {
                                key: "origin",
                                value: function(t, e) {
                                    this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                                }
                            }, {
                                key: "setInputElement",
                                value: function(t) {
                                    this.inputElement = t, this.updateDimensions()
                                }
                            }, {
                                key: "setPosition",
                                value: function(t, e, i) {
                                    e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                                }
                            }, {
                                key: "onOrientationTimer",
                                value: function() {
                                    this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                                }
                            }, {
                                key: "onMotionTimer",
                                value: function() {
                                    this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                                }
                            }, {
                                key: "onCalibrationTimer",
                                value: function() {
                                    this.calibrationFlag = !0
                                }
                            }, {
                                key: "onWindowResize",
                                value: function() {
                                    this.updateDimensions()
                                }
                            }, {
                                key: "onAnimationFrame",
                                value: function() {
                                    this.updateBounds();
                                    var t = this.inputX - this.calibrationX,
                                        e = this.inputY - this.calibrationY;
                                    (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                                    for (var i = 0; i < this.layers.length; i++) {
                                        var n = this.layers[i],
                                            r = this.depthsX[i],
                                            s = this.depthsY[i],
                                            l = this.velocityX * (r * (this.invertX ? -1 : 1)),
                                            c = this.velocityY * (s * (this.invertY ? -1 : 1));
                                        this.setPosition(n, l, c)
                                    }
                                    this.raf = o(this.onAnimationFrame)
                                }
                            }, {
                                key: "rotate",
                                value: function(t, e) {
                                    var i = (t || 0) / 30,
                                        n = (e || 0) / 30,
                                        r = this.windowHeight > this.windowWidth;
                                    this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                                }
                            }, {
                                key: "onDeviceOrientation",
                                value: function(t) {
                                    var e = t.beta,
                                        i = t.gamma;
                                    null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                                }
                            }, {
                                key: "onDeviceMotion",
                                value: function(t) {
                                    var e = t.rotationRate.beta,
                                        i = t.rotationRate.gamma;
                                    null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                                }
                            }, {
                                key: "onMouseMove",
                                value: function(t) {
                                    var e = t.clientX,
                                        i = t.clientY;
                                    if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                                    this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                                    for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                                    delete this.element, delete this.layers
                                }
                            }, {
                                key: "version",
                                value: function() {
                                    return "3.1.0"
                                }
                            }]), t
                        }();
                    e.exports = c
                }, {
                    "object-assign": 1,
                    raf: 4
                }]
            }, {}, [5])(5)
        })
    }).call(e, i(0))
}, function(t, e, i) {
    (function(e) {
        /**
         * @license
         * Video.js 6.4.0 <http://videojs.com/>
         * Copyright Brightcove, Inc. <https://www.brightcove.com/>
         * Available under Apache License Version 2.0
         * <https://github.com/videojs/video.js/blob/master/LICENSE>
         *
         * Includes vtt.js <https://github.com/mozilla/vtt.js>
         * Available under Apache License Version 2.0
         * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
         */
        ! function(e, i) {
            t.exports = i()
        }(0, function() {
            function t(t, e) {
                return e = {
                    exports: {}
                }, t(e, e.exports), e.exports
            }

            function i(t, e) {
                Xe(t).forEach(function(i) {
                    return e(t[i], i)
                })
            }

            function n(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return Xe(t).reduce(function(i, n) {
                    return e(i, t[n], n)
                }, i)
            }

            function r(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                return Object.assign ? Object.assign.apply(Object, [t].concat(n)) : (n.forEach(function(e) {
                    e && i(e, function(e, i) {
                        t[i] = e
                    })
                }), t)
            }

            function o(t) {
                return !!t && "object" === (void 0 === t ? "undefined" : Ne(t))
            }

            function s(t) {
                return o(t) && "[object Object]" === He.call(t) && t.constructor === Object
            }

            function a(t) {
                return t.replace(/\n\r?\s*/g, "")
            }

            function l(t, e) {
                if (!t || !e) return "";
                if ("function" == typeof se.getComputedStyle) {
                    var i = se.getComputedStyle(t);
                    return i ? i[e] : ""
                }
                return t.currentStyle[e] || ""
            }

            function c(t) {
                return "string" == typeof t && /\S/.test(t)
            }

            function u(t) {
                if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
            }

            function h(t) {
                return new RegExp("(^|\\s)" + t + "($|\\s)")
            }

            function p() {
                return he === se.document && void 0 !== he.createElement
            }

            function d(t) {
                return o(t) && 1 === t.nodeType
            }

            function f() {
                try {
                    return se.parent !== se.self
                } catch (t) {
                    return !0
                }
            }

            function m(t) {
                return function(e, i) {
                    if (!c(e)) return he[t](null);
                    c(i) && (i = he.querySelector(i));
                    var n = d(i) ? i : he;
                    return n[t] && n[t](e)
                }
            }

            function v() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments[3],
                    r = he.createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    var i = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (We.warn(Ue($e, t, i)), r.setAttribute(t, i)) : "textContent" === t ? g(r, i) : r[t] = i
                }), Object.getOwnPropertyNames(i).forEach(function(t) {
                    r.setAttribute(t, i[t])
                }), n && L(r, n), r
            }

            function g(t, e) {
                return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
            }

            function y(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }

            function _(t, e) {
                return u(e), t.classList ? t.classList.contains(e) : h(e).test(t.className)
            }

            function b(t, e) {
                return t.classList ? t.classList.add(e) : _(t, e) || (t.className = (t.className + " " + e).trim()), t
            }

            function T(t, e) {
                return t.classList ? t.classList.remove(e) : (u(e), t.className = t.className.split(/\s+/).filter(function(t) {
                    return t !== e
                }).join(" ")), t
            }

            function x(t, e, i) {
                var n = _(t, e);
                if ("function" == typeof i && (i = i(t, e)), "boolean" != typeof i && (i = !n), i !== n) return i ? b(t, e) : T(t, e), t
            }

            function w(t, e) {
                Object.getOwnPropertyNames(e).forEach(function(i) {
                    var n = e[i];
                    null === n || void 0 === n || !1 === n ? t.removeAttribute(i) : t.setAttribute(i, !0 === n ? "" : n)
                })
            }

            function C(t) {
                var e = {};
                if (t && t.attributes && t.attributes.length > 0)
                    for (var i = t.attributes, n = i.length - 1; n >= 0; n--) {
                        var r = i[n].name,
                            o = i[n].value;
                        "boolean" != typeof t[r] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + r + ",") || (o = null !== o), e[r] = o
                    }
                return e
            }

            function k(t, e) {
                return t.getAttribute(e)
            }

            function S(t, e, i) {
                t.setAttribute(e, i)
            }

            function E(t, e) {
                t.removeAttribute(e)
            }

            function P() {
                he.body.focus(), he.onselectstart = function() {
                    return !1
                }
            }

            function A() {
                he.onselectstart = function() {
                    return !0
                }
            }

            function O(t) {
                if (t && t.getBoundingClientRect && t.parentNode) {
                    var e = t.getBoundingClientRect(),
                        i = {};
                    return ["bottom", "height", "left", "right", "top", "width"].forEach(function(t) {
                        void 0 !== e[t] && (i[t] = e[t])
                    }), i.height || (i.height = parseFloat(l(t, "height"))), i.width || (i.width = parseFloat(l(t, "width"))), i
                }
            }

            function M(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                    left: 0,
                    top: 0
                };
                var i = he.documentElement,
                    n = he.body,
                    r = i.clientLeft || n.clientLeft || 0,
                    o = se.pageXOffset || n.scrollLeft,
                    s = e.left + o - r,
                    a = i.clientTop || n.clientTop || 0,
                    l = se.pageYOffset || n.scrollTop,
                    c = e.top + l - a;
                return {
                    left: Math.round(s),
                    top: Math.round(c)
                }
            }

            function j(t, e) {
                var i = {},
                    n = M(t),
                    r = t.offsetWidth,
                    o = t.offsetHeight,
                    s = n.top,
                    a = n.left,
                    l = e.pageY,
                    c = e.pageX;
                return e.changedTouches && (c = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - l + o) / o)), i.x = Math.max(0, Math.min(1, (c - a) / r)), i
            }

            function D(t) {
                return o(t) && 3 === t.nodeType
            }

            function R(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                return t
            }

            function N(t) {
                return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
                    return "function" == typeof t && (t = t()), d(t) || D(t) ? t : "string" == typeof t && /\S/.test(t) ? he.createTextNode(t) : void 0
                }).filter(function(t) {
                    return t
                })
            }

            function L(t, e) {
                return N(e).forEach(function(e) {
                    return t.appendChild(e)
                }), t
            }

            function I(t, e) {
                return L(R(t), e)
            }

            function F() {
                return Je++
            }

            function B(t) {
                var e = t[ti];
                return e || (e = t[ti] = F()), Ze[e] || (Ze[e] = {}), Ze[e]
            }

            function H(t) {
                var e = t[ti];
                return !!e && !!Object.getOwnPropertyNames(Ze[e]).length
            }

            function X(t) {
                var e = t[ti];
                if (e) {
                    delete Ze[e];
                    try {
                        delete t[ti]
                    } catch (e) {
                        t.removeAttribute ? t.removeAttribute(ti) : t[ti] = null
                    }
                }
            }

            function z(t, e) {
                var i = B(t);
                0 === i.handlers[e].length && (delete i.handlers[e], t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && X(t)
            }

            function q(t, e, i, n) {
                i.forEach(function(i) {
                    t(e, i, n)
                })
            }

            function Y(t) {
                function e() {
                    return !0
                }

                function i() {
                    return !1
                }
                if (!t || !t.isPropagationStopped) {
                    var n = t || se.event;
                    t = {};
                    for (var r in n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (t[r] = n[r]));
                    if (t.target || (t.target = t.srcElement || he), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                            n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                        }, t.defaultPrevented = !1, t.stopPropagation = function() {
                            n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                        }, t.isPropagationStopped = i, t.stopImmediatePropagation = function() {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                        }, t.isImmediatePropagationStopped = i, null !== t.clientX && void 0 !== t.clientX) {
                        var o = he.documentElement,
                            s = he.body;
                        t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }
                return t
            }

            function V(t, e, i) {
                if (Array.isArray(e)) return q(V, t, e, i);
                var n = B(t);
                if (n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), i.guid || (i.guid = F()), n.handlers[e].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function(e, i) {
                        if (!n.disabled) {
                            e = Y(e);
                            var r = n.handlers[e.type];
                            if (r)
                                for (var o = r.slice(0), s = 0, a = o.length; s < a && !e.isImmediatePropagationStopped(); s++) try {
                                    o[s].call(t, e, i)
                                } catch (t) {
                                    We.error(t)
                                }
                        }
                    }), 1 === n.handlers[e].length)
                    if (t.addEventListener) {
                        var r = !1;
                        ei && ii.indexOf(e) > -1 && (r = {
                            passive: !0
                        }), t.addEventListener(e, n.dispatcher, r)
                    } else t.attachEvent && t.attachEvent("on" + e, n.dispatcher)
            }

            function W(t, e, i) {
                if (H(t)) {
                    var n = B(t);
                    if (n.handlers) {
                        if (Array.isArray(e)) return q(W, t, e, i);
                        var r = function(e) {
                            n.handlers[e] = [], z(t, e)
                        };
                        if (void 0 !== e) {
                            var o = n.handlers[e];
                            if (o) {
                                if (!i) return void r(e);
                                if (i.guid)
                                    for (var s = 0; s < o.length; s++) o[s].guid === i.guid && o.splice(s--, 1);
                                z(t, e)
                            }
                        } else
                            for (var a in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, a) && r(a)
                    }
                }
            }

            function U(t, e, i) {
                var n = H(t) ? B(t) : {},
                    r = t.parentNode || t.ownerDocument;
                if ("string" == typeof e && (e = {
                        type: e,
                        target: t
                    }), e = Y(e), n.dispatcher && n.dispatcher.call(t, e, i), r && !e.isPropagationStopped() && !0 === e.bubbles) U.call(null, r, e, i);
                else if (!r && !e.defaultPrevented) {
                    var o = B(e.target);
                    e.target[e.type] && (o.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), o.disabled = !1)
                }
                return !e.defaultPrevented
            }

            function $(t, e, i) {
                if (Array.isArray(e)) return q($, t, e, i);
                var n = function n() {
                    W(t, e, n), i.apply(this, arguments)
                };
                n.guid = i.guid = i.guid || F(), V(t, e, n)
            }

            function G(t, e) {
                e && (oi = e), se.setTimeout(si, t)
            }

            function K(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = e.eventBusKey;
                if (i) {
                    if (!t[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
                    t.eventBusEl_ = t[i]
                } else t.eventBusEl_ = v("span", {
                    className: "vjs-event-bus"
                });
                return r(t, _i), t.on("dispose", function() {
                    return t.off()
                }), t
            }

            function Q(t, e) {
                return r(t, bi), t.state = r({}, t.state, e), "function" == typeof t.handleStateChanged && pi(t) && t.on("statechanged", t.handleStateChanged), t
            }

            function J(t) {
                return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
            }

            function Z(t, e) {
                return J(t) === J(e)
            }

            function tt() {
                for (var t = {}, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return n.forEach(function(e) {
                    e && i(e, function(e, i) {
                        if (!s(e)) return void(t[i] = e);
                        s(t[i]) || (t[i] = {}), t[i] = tt(t[i], e)
                    })
                }), t
            }

            function et(t, e, i) {
                if ("number" != typeof e || e < 0 || e > i) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + i + ").")
            }

            function it(t, e, i, n) {
                return et(t, n, i.length - 1), i[n][e]
            }

            function nt(t) {
                return void 0 === t || 0 === t.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: t.length,
                    start: it.bind(null, "start", 0, t),
                    end: it.bind(null, "end", 1, t)
                }
            }

            function rt(t, e) {
                return Array.isArray(t) ? nt(t) : void 0 === t || void 0 === e ? nt() : nt([
                    [t, e]
                ])
            }

            function ot(t, e) {
                var i = 0,
                    n = void 0,
                    r = void 0;
                if (!e) return 0;
                t && t.length || (t = rt(0, 0));
                for (var o = 0; o < t.length; o++) n = t.start(o), r = t.end(o), r > e && (r = e), i += r - n;
                return i / e
            }

            function st(t) {
                if (t instanceof st) return t;
                "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : o(t) && ("number" == typeof t.code && (this.code = t.code), r(this, t)), this.message || (this.message = st.defaultMessages[this.code] || "")
            }

            function at(t, e) {
                var i, n = null;
                try {
                    i = JSON.parse(t, e)
                } catch (t) {
                    n = t
                }
                return [n, i]
            }

            function lt(t) {
                var e = nn.call(t);
                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            }

            function ct(t, e, i) {
                if (!en(e)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (i = this), "[object Array]" === sn.call(t) ? ut(t, e, i) : "string" == typeof t ? ht(t, e, i) : pt(t, e, i)
            }

            function ut(t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) an.call(t, n) && e.call(i, t[n], n, t)
            }

            function ht(t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) e.call(i, t.charAt(n), n, t)
            }

            function pt(t, e, i) {
                for (var n in t) an.call(t, n) && e.call(i, t[n], n, t)
            }

            function dt() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) hn.call(i, n) && (t[n] = i[n])
                }
                return t
            }

            function ft(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function mt(t, e, i) {
                var n = t;
                return en(e) ? (i = e, "string" == typeof t && (n = {
                    uri: t
                })) : n = un(e, {
                    uri: t
                }), n.callback = i, n
            }

            function vt(t, e, i) {
                return e = mt(t, e, i), gt(e)
            }

            function gt(t) {
                function e() {
                    4 === a.readyState && setTimeout(r, 0)
                }

                function i() {
                    var t = void 0;
                    if (t = a.response ? a.response : a.responseText || yt(a), v) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }

                function n(t) {
                    return clearTimeout(u), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, s(t, g)
                }

                function r() {
                    if (!c) {
                        var e;
                        clearTimeout(u), e = t.useXDR && void 0 === a.status ? 200 : 1223 === a.status ? 204 : a.status;
                        var n = g,
                            r = null;
                        return 0 !== e ? (n = {
                            body: i(),
                            statusCode: e,
                            method: p,
                            headers: {},
                            url: h,
                            rawRequest: a
                        }, a.getAllResponseHeaders && (n.headers = cn(a.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), s(r, n, n.body)
                    }
                }
                if (void 0 === t.callback) throw new Error("callback argument missing");
                var o = !1,
                    s = function(e, i, n) {
                        o || (o = !0, t.callback(e, i, n))
                    },
                    a = t.xhr || null;
                a || (a = t.cors || t.useXDR ? new vt.XDomainRequest : new vt.XMLHttpRequest);
                var l, c, u, h = a.url = t.uri || t.url,
                    p = a.method = t.method || "GET",
                    d = t.body || t.data,
                    f = a.headers = t.headers || {},
                    m = !!t.sync,
                    v = !1,
                    g = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: p,
                        url: h,
                        rawRequest: a
                    };
                if ("json" in t && !1 !== t.json && (v = !0, f.accept || f.Accept || (f.Accept = "application/json"), "GET" !== p && "HEAD" !== p && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), d = JSON.stringify(!0 === t.json ? d : t.json))), a.onreadystatechange = e, a.onload = r, a.onerror = n, a.onprogress = function() {}, a.onabort = function() {
                        c = !0
                    }, a.ontimeout = n, a.open(p, h, !m, t.username, t.password), m || (a.withCredentials = !!t.withCredentials), !m && t.timeout > 0 && (u = setTimeout(function() {
                        if (!c) {
                            c = !0, a.abort("timeout");
                            var t = new Error("XMLHttpRequest timeout");
                            t.code = "ETIMEDOUT", n(t)
                        }
                    }, t.timeout)), a.setRequestHeader)
                    for (l in f) f.hasOwnProperty(l) && a.setRequestHeader(l, f[l]);
                else if (t.headers && !ft(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (a.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(a), a.send(d || null), a
            }

            function yt(t) {
                if ("document" === t.responseType) return t.responseXML;
                var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                return "" !== t.responseType || e ? null : t.responseXML
            }

            function _t() {}

            function bt(t, e) {
                this.name = "ParsingError", this.code = t.code, this.message = e || t.message
            }

            function Tt(t) {
                function e(t, e, i, n) {
                    return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
                }
                var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
            }

            function xt() {
                this.values = Cn(null)
            }

            function wt(t, e, i, n) {
                var r = n ? t.split(n) : [t];
                for (var o in r)
                    if ("string" == typeof r[o]) {
                        var s = r[o].split(i);
                        if (2 === s.length) {
                            var a = s[0],
                                l = s[1];
                            e(a, l)
                        }
                    }
            }

            function Ct(t, e, i) {
                function n() {
                    var e = Tt(t);
                    if (null === e) throw new bt(bt.Errors.BadTimeStamp, "Malformed timestamp: " + o);
                    return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                }

                function r() {
                    t = t.replace(/^\s+/, "")
                }
                var o = t;
                if (r(), e.startTime = n(), r(), "--\x3e" !== t.substr(0, 3)) throw new bt(bt.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + o);
                t = t.substr(3), r(), e.endTime = n(), r(),
                    function(t, e) {
                        var n = new xt;
                        wt(t, function(t, e) {
                            switch (t) {
                                case "region":
                                    for (var r = i.length - 1; r >= 0; r--)
                                        if (i[r].id === e) {
                                            n.set(t, i[r].region);
                                            break
                                        }
                                    break;
                                case "vertical":
                                    n.alt(t, e, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var o = e.split(","),
                                        s = o[0];
                                    n.integer(t, s), n.percent(t, s) && n.set("snapToLines", !1), n.alt(t, s, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case "position":
                                    o = e.split(","), n.percent(t, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case "size":
                                    n.percent(t, e);
                                    break;
                                case "align":
                                    n.alt(t, e, ["start", "middle", "end", "left", "right"])
                            }
                        }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), e.line = n.get("line", "auto"), e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", "middle"), e.position = n.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        }, e.align), e.positionAlign = n.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        }, e.align)
                    }(t, e)
            }

            function kt(t, e) {
                function i(t) {
                    return kn[t]
                }
                for (var n, r = t.document.createElement("div"), o = r, s = []; null !== (n = function() {
                    if (!e) return null;
                    var t = e.match(/^([^<]*)(<[^>]+>?)?/);
                    return function(t) {
                        return e = e.substr(t.length), t
                    }(t[1] ? t[1] : t[2])
                }());)
                    if ("<" !== n[0]) o.appendChild(t.document.createTextNode(function(t) {
                        for (; c = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(c[0], i);
                        return t
                    }(n)));
                    else {
                        if ("/" === n[1]) {
                            s.length && s[s.length - 1] === n.substr(2).replace(">", "") && (s.pop(), o = o.parentNode);
                            continue
                        }
                        var a, l = Tt(n.substr(1, n.length - 2));
                        if (l) {
                            a = t.document.createProcessingInstruction("timestamp", l), o.appendChild(a);
                            continue
                        }
                        var c = n.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!c) continue;
                        if (!(a = function(e, i) {
                                var n = Sn[e];
                                if (!n) return null;
                                var r = t.document.createElement(n);
                                r.localName = n;
                                var o = En[e];
                                return o && i && (r[o] = i.trim()), r
                            }(c[1], c[3]))) continue;
                        if (! function(t, e) {
                                return !Pn[e.localName] || Pn[e.localName] === t.localName
                            }(o, a)) continue;
                        c[2] && (a.className = c[2].substr(1).replace(".", " ")), s.push(c[1]), o.appendChild(a), o = a
                    }
                return r
            }

            function St(t) {
                for (var e = 0; e < An.length; e++) {
                    var i = An[e];
                    if (t >= i[0] && t <= i[1]) return !0
                }
                return !1
            }

            function Et(t) {
                function e(t, e) {
                    for (var i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
                }

                function i(t) {
                    if (!t || !t.length) return null;
                    var n = t.pop(),
                        r = n.textContent || n.innerText;
                    if (r) {
                        var o = r.match(/^.*(\n|\r)/);
                        return o ? (t.length = 0, o[0]) : r
                    }
                    return "ruby" === n.tagName ? i(t) : n.childNodes ? (e(t, n), i(t)) : void 0
                }
                var n, r = [],
                    o = "";
                if (!t || !t.childNodes) return "ltr";
                for (e(r, t); o = i(r);)
                    for (var s = 0; s < o.length; s++)
                        if (n = o.charCodeAt(s), St(n)) return "rtl";
                return "ltr"
            }

            function Pt(t) {
                if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                for (var e = t.track, i = e.textTrackList, n = 0, r = 0; r < i.length && i[r] !== e; r++) "showing" === i[r].mode && n++;
                return -1 * ++n
            }

            function At() {}

            function Ot(t, e, i) {
                var n = /MSIE\s8\.0/.test(navigator.userAgent),
                    r = "rgba(255, 255, 255, 1)",
                    o = "rgba(0, 0, 0, 0.8)";
                n && (r = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), At.call(this), this.cue = e, this.cueDiv = kt(t, e.text);
                var s = {
                    color: r,
                    backgroundColor: o,
                    position: "relative",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline"
                };
                n || (s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", s.unicodeBidi = "plaintext"), this.applyStyles(s, this.cueDiv), this.div = t.document.createElement("div"), s = {
                    textAlign: "middle" === e.align ? "center" : e.align,
                    font: i.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                }, n || (s.direction = Et(this.cueDiv), s.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(s), this.div.appendChild(this.cueDiv);
                var a = 0;
                switch (e.positionAlign) {
                    case "start":
                        a = e.position;
                        break;
                    case "middle":
                        a = e.position - e.size / 2;
                        break;
                    case "end":
                        a = e.position - e.size
                }
                "" === e.vertical ? this.applyStyles({
                    left: this.formatStyle(a, "%"),
                    width: this.formatStyle(e.size, "%")
                }) : this.applyStyles({
                    top: this.formatStyle(a, "%"),
                    height: this.formatStyle(e.size, "%")
                }), this.move = function(t) {
                    this.applyStyles({
                        top: this.formatStyle(t.top, "px"),
                        bottom: this.formatStyle(t.bottom, "px"),
                        left: this.formatStyle(t.left, "px"),
                        right: this.formatStyle(t.right, "px"),
                        height: this.formatStyle(t.height, "px"),
                        width: this.formatStyle(t.width, "px")
                    })
                }
            }

            function Mt(t) {
                var e, i, n, r, o = /MSIE\s8\.0/.test(navigator.userAgent);
                if (t.div) {
                    i = t.div.offsetHeight, n = t.div.offsetWidth, r = t.div.offsetTop;
                    var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                    t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
                }
                this.left = t.left, this.right = t.right, this.top = t.top || r, this.height = t.height || i, this.bottom = t.bottom || r + (t.height || i), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
            }

            function jt(t, e, i, n) {
                var r = new Mt(e),
                    o = e.cue,
                    s = Pt(o),
                    a = [];
                if (o.snapToLines) {
                    var l;
                    switch (o.vertical) {
                        case "":
                            a = ["+y", "-y"], l = "height";
                            break;
                        case "rl":
                            a = ["+x", "-x"], l = "width";
                            break;
                        case "lr":
                            a = ["-x", "+x"], l = "width"
                    }
                    var c = r.lineHeight,
                        u = c * Math.round(s),
                        h = i[l] + c,
                        p = a[0];
                    Math.abs(u) > h && (u = u < 0 ? -1 : 1, u *= Math.ceil(h / c) * c), s < 0 && (u += "" === o.vertical ? i.height : i.width, a = a.reverse()), r.move(p, u)
                } else {
                    var d = r.lineHeight / i.height * 100;
                    switch (o.lineAlign) {
                        case "middle":
                            s -= d / 2;
                            break;
                        case "end":
                            s -= d
                    }
                    switch (o.vertical) {
                        case "":
                            e.applyStyles({
                                top: e.formatStyle(s, "%")
                            });
                            break;
                        case "rl":
                            e.applyStyles({
                                left: e.formatStyle(s, "%")
                            });
                            break;
                        case "lr":
                            e.applyStyles({
                                right: e.formatStyle(s, "%")
                            })
                    }
                    a = ["+y", "-x", "+x", "-y"], r = new Mt(e)
                }
                var f = function(t, e) {
                    for (var r, o = new Mt(t), s = 1, a = 0; a < e.length; a++) {
                        for (; t.overlapsOppositeAxis(i, e[a]) || t.within(i) && t.overlapsAny(n);) t.move(e[a]);
                        if (t.within(i)) return t;
                        var l = t.intersectPercentage(i);
                        s > l && (r = new Mt(t), s = l), t = new Mt(o)
                    }
                    return r || o
                }(r, a);
                e.move(f.toCSSCompatValues(i))
            }

            function Dt() {}

            function Rt(t) {
                return "string" == typeof t && (!!jn[t.toLowerCase()] && t.toLowerCase())
            }

            function Nt(t) {
                return "string" == typeof t && (!!Dn[t.toLowerCase()] && t.toLowerCase())
            }

            function Lt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) t[n] = i[n]
                }
                return t
            }

            function It(t, e, i) {
                var n = this,
                    r = /MSIE\s8\.0/.test(navigator.userAgent),
                    o = {};
                r ? n = document.createElement("custom") : o.enumerable = !0, n.hasBeenReset = !1;
                var s = "",
                    a = !1,
                    l = t,
                    c = e,
                    u = i,
                    h = null,
                    p = "",
                    d = !0,
                    f = "auto",
                    m = "start",
                    v = 50,
                    g = "middle",
                    y = 50,
                    _ = "middle";
                if (Object.defineProperty(n, "id", Lt({}, o, {
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            s = "" + t
                        }
                    })), Object.defineProperty(n, "pauseOnExit", Lt({}, o, {
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            a = !!t
                        }
                    })), Object.defineProperty(n, "startTime", Lt({}, o, {
                        get: function() {
                            return l
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "endTime", Lt({}, o, {
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            c = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "text", Lt({}, o, {
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            u = "" + t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "region", Lt({}, o, {
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            h = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "vertical", Lt({}, o, {
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            var e = Rt(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            p = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "snapToLines", Lt({}, o, {
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            d = !!t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "line", Lt({}, o, {
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            if ("number" != typeof t && t !== Mn) throw new SyntaxError("An invalid number or illegal string was specified.");
                            f = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "lineAlign", Lt({}, o, {
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            var e = Nt(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            m = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "position", Lt({}, o, {
                        get: function() {
                            return v
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            v = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "positionAlign", Lt({}, o, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            var e = Nt(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "size", Lt({}, o, {
                        get: function() {
                            return y
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            y = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(n, "align", Lt({}, o, {
                        get: function() {
                            return _
                        },
                        set: function(t) {
                            var e = Nt(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            _ = e, this.hasBeenReset = !0
                        }
                    })), n.displayState = void 0, r) return n
            }

            function Ft(t) {
                return "string" == typeof t && (!!Nn[t.toLowerCase()] && t.toLowerCase())
            }

            function Bt(t) {
                return "number" == typeof t && t >= 0 && t <= 100
            }

            function Ht() {
                var t = 100,
                    e = 3,
                    i = 0,
                    n = 100,
                    r = 0,
                    o = 100,
                    s = "";
                Object.defineProperties(this, {
                    width: {
                        enumerable: !0,
                        get: function() {
                            return t
                        },
                        set: function(e) {
                            if (!Bt(e)) throw new Error("Width must be between 0 and 100.");
                            t = e
                        }
                    },
                    lines: {
                        enumerable: !0,
                        get: function() {
                            return e
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                            e = t
                        }
                    },
                    regionAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            if (!Bt(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                            n = t
                        }
                    },
                    regionAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return i
                        },
                        set: function(t) {
                            if (!Bt(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                            i = t
                        }
                    },
                    viewportAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            if (!Bt(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                            o = t
                        }
                    },
                    viewportAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return r
                        },
                        set: function(t) {
                            if (!Bt(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                            r = t
                        }
                    },
                    scroll: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            var e = Ft(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            s = e
                        }
                    }
                })
            }

            function Xt(t, e, i, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    o = t.textTracks();
                r.kind = e, i && (r.label = i), n && (r.language = n), r.tech = t;
                var s = new wn.text.TrackClass(r);
                return o.addTrack(s), s
            }

            function zt(t, e) {
                Bn[t] = Bn[t] || [], Bn[t].push(e)
            }

            function qt(t, e, i) {
                t.setTimeout(function() {
                    return $t(e, Bn[e.type], i, t)
                }, 1)
            }

            function Yt(t, e) {
                t.forEach(function(t) {
                    return t.setTech && t.setTech(e)
                })
            }

            function Vt(t, e, i) {
                return t.reduceRight(Ut(i), e[i]())
            }

            function Wt(t, e, i, n) {
                return e[i](t.reduce(Ut(i), n))
            }

            function Ut(t) {
                return function(e, i) {
                    return i[t] ? i[t](e) : e
                }
            }

            function $t() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments[2],
                    n = arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    a = e[0],
                    l = e.slice(1);
                if ("string" == typeof a) $t(t, Bn[a], i, n, o, s);
                else if (a) {
                    var c = a(n);
                    c.setSource(r({}, t), function(e, r) {
                        if (e) return $t(t, l, i, n, o, s);
                        o.push(c), $t(r, t.type === r.type ? l : Bn[r.type], i, n, o, s)
                    })
                } else l.length ? $t(t, l, i, n, o, s) : s ? i(t, o) : $t(t, Bn["*"], i, n, o, !0)
            }

            function Gt(t, e) {
                return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
            }

            function Kt(t, e, i) {
                try {
                    t.style[e] = i
                } catch (t) {
                    return
                }
            }

            function Qt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                t = t < 0 ? 0 : t;
                var i = Math.floor(t % 60),
                    n = Math.floor(t / 60 % 60),
                    r = Math.floor(t / 3600),
                    o = Math.floor(e / 60 % 60),
                    s = Math.floor(e / 3600);
                return (isNaN(t) || t === 1 / 0) && (r = n = i = "-"), r = r > 0 || s > 0 ? r + ":" : "", n = ((r || o >= 10) && n < 10 ? "0" + n : n) + ":", i = i < 10 ? "0" + i : i, r + n + i
            }

            function Jt(t, e) {
                if (e && (t = e(t)), t && "none" !== t) return t
            }

            function Zt(t, e) {
                return Jt(t.options[t.options.selectedIndex].value, e)
            }

            function te(t, e, i) {
                if (e)
                    for (var n = 0; n < t.options.length; n++)
                        if (Jt(t.options[n].value, i) === e) {
                            t.selectedIndex = n;
                            break
                        }
            }

            function ee(t, e, i) {
                var n = void 0;
                if ("string" == typeof t) {
                    var r = ee.getPlayers();
                    if (0 === t.indexOf("#") && (t = t.slice(1)), r[t]) return e && We.warn('Player "' + t + '" is already initialised. Options will not be applied.'), i && r[t].ready(i), r[t];
                    n = Ge("#" + t)
                } else n = t;
                if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                if (d(n) && !he.body.contains(n) && We.warn("The element supplied is not included in the DOM"), n.player || co.players[n.playerId]) return n.player || co.players[n.playerId];
                e = e || {}, ee.hooks("beforesetup").forEach(function(t) {
                    var i = t(n, tt(e));
                    if (!o(i) || Array.isArray(i)) return void We.error("please return an object in beforesetup hooks");
                    e = tt(e, i)
                });
                var s = Ti.getComponent("Player"),
                    a = new s(n, e, i);
                return ee.hooks("setup").forEach(function(t) {
                    return t(a)
                }), a
            }
            var ie, ne = "6.4.0",
                re = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            ie = "undefined" != typeof window ? window : void 0 !== re ? re : "undefined" != typeof self ? self : {};
            var oe, se = ie,
                ae = {},
                le = (Object.freeze || Object)({
                    default: ae
                }),
                ce = le && ae || le,
                ue = void 0 !== re ? re : "undefined" != typeof window ? window : {};
            "undefined" != typeof document ? oe = document : (oe = ue["__GLOBAL_DOCUMENT_CACHE@4"]) || (oe = ue["__GLOBAL_DOCUMENT_CACHE@4"] = ce);
            var he = oe,
                pe = se.navigator && se.navigator.userAgent || "",
                de = /AppleWebKit\/([\d.]+)/i.exec(pe),
                fe = de ? parseFloat(de.pop()) : null,
                me = /iPad/i.test(pe),
                ve = /iPhone/i.test(pe) && !me,
                ge = /iPod/i.test(pe),
                ye = ve || me || ge,
                _e = function() {
                    var t = pe.match(/OS (\d+)_/i);
                    return t && t[1] ? t[1] : null
                }(),
                be = /Android/i.test(pe),
                Te = function() {
                    var t = pe.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!t) return null;
                    var e = t[1] && parseFloat(t[1]),
                        i = t[2] && parseFloat(t[2]);
                    return e && i ? parseFloat(t[1] + "." + t[2]) : e || null
                }(),
                xe = be && /webkit/i.test(pe) && Te < 2.3,
                we = be && Te < 5 && fe < 537,
                Ce = /Firefox/i.test(pe),
                ke = /Edge/i.test(pe),
                Se = !ke && /Chrome/i.test(pe),
                Ee = function() {
                    var t = pe.match(/Chrome\/(\d+)/);
                    return t && t[1] ? parseFloat(t[1]) : null
                }(),
                Pe = /MSIE\s8\.0/.test(pe),
                Ae = function() {
                    var t = /MSIE\s(\d+)\.\d/.exec(pe),
                        e = t && parseFloat(t[1]);
                    return !e && /Trident\/7.0/i.test(pe) && /rv:11.0/.test(pe) && (e = 11), e
                }(),
                Oe = /Safari/i.test(pe) && !Se && !be && !ke,
                Me = Oe || ye,
                je = p() && ("ontouchstart" in se || se.DocumentTouch && se.document instanceof se.DocumentTouch),
                De = p() && "backgroundSize" in se.document.createElement("video").style,
                Re = (Object.freeze || Object)({
                    IS_IPAD: me,
                    IS_IPHONE: ve,
                    IS_IPOD: ge,
                    IS_IOS: ye,
                    IOS_VERSION: _e,
                    IS_ANDROID: be,
                    ANDROID_VERSION: Te,
                    IS_OLD_ANDROID: xe,
                    IS_NATIVE_ANDROID: we,
                    IS_FIREFOX: Ce,
                    IS_EDGE: ke,
                    IS_CHROME: Se,
                    CHROME_VERSION: Ee,
                    IS_IE8: Pe,
                    IE_VERSION: Ae,
                    IS_SAFARI: Oe,
                    IS_ANY_SAFARI: Me,
                    TOUCH_ENABLED: je,
                    BACKGROUND_SIZE_SUPPORTED: De
                }),
                Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                Le = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                Ie = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                },
                Fe = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                },
                Be = function(t, e) {
                    return t.raw = e, t
                },
                He = Object.prototype.toString,
                Xe = function(t) {
                    return o(t) ? Object.keys(t) : []
                },
                ze = void 0,
                qe = "all",
                Ye = [],
                Ve = function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!Ae && Ae < 11,
                        n = ze.levels[qe],
                        r = new RegExp("^(" + n + ")$");
                    "log" !== t && e.unshift(t.toUpperCase() + ":"), Ye && Ye.push([].concat(e)), e.unshift("VIDEOJS:");
                    var s = se.console && se.console[t];
                    s && n && r.test(t) && (i && (e = e.map(function(t) {
                        if (o(t) || Array.isArray(t)) try {
                            return JSON.stringify(t)
                        } catch (e) {
                            return String(t)
                        }
                        return String(t)
                    }).join(" ")), s.apply ? s[Array.isArray(e) ? "apply" : "call"](se.console, e) : s(e))
                };
            ze = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                Ve("log", e)
            }, ze.levels = {
                all: "log|warn|error",
                error: "error",
                off: "",
                warn: "warn|error",
                DEFAULT: qe
            }, ze.level = function(t) {
                if ("string" == typeof t) {
                    if (!ze.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
                    qe = t
                }
                return qe
            }, ze.history = function() {
                return Ye ? [].concat(Ye) : []
            }, ze.history.clear = function() {
                Ye && (Ye.length = 0)
            }, ze.history.disable = function() {
                null !== Ye && (Ye.length = 0, Ye = null)
            }, ze.history.enable = function() {
                null === Ye && (Ye = [])
            }, ze.error = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Ve("error", e)
            }, ze.warn = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Ve("warn", e)
            };
            var We = ze,
                Ue = function(t) {
                    for (var e = "", i = 0; i < arguments.length; i++) e += a(t[i]) + (arguments[i + 1] || "");
                    return e
                },
                $e = Be(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
                Ge = m("querySelector"),
                Ke = m("querySelectorAll"),
                Qe = (Object.freeze || Object)({
                    isReal: p,
                    isEl: d,
                    isInFrame: f,
                    createEl: v,
                    textContent: g,
                    prependTo: y,
                    hasClass: _,
                    addClass: b,
                    removeClass: T,
                    toggleClass: x,
                    setAttributes: w,
                    getAttributes: C,
                    getAttribute: k,
                    setAttribute: S,
                    removeAttribute: E,
                    blockTextSelection: P,
                    unblockTextSelection: A,
                    getBoundingClientRect: O,
                    findPosition: M,
                    getPointerPosition: j,
                    isTextNode: D,
                    emptyEl: R,
                    normalizeContent: N,
                    appendContent: L,
                    insertContent: I,
                    $: Ge,
                    $$: Ke
                }),
                Je = 1,
                Ze = {},
                ti = "vdata" + (new Date).getTime(),
                ei = !1;
            ! function() {
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            ei = !0
                        }
                    });
                    se.addEventListener("test", null, t)
                } catch (t) {}
            }();
            var ii = ["touchstart", "touchmove"],
                ni = (Object.freeze || Object)({
                    fixEvent: Y,
                    on: V,
                    off: W,
                    trigger: U,
                    one: $
                }),
                ri = !1,
                oi = void 0,
                si = function() {
                    if (p()) {
                        var t = he.getElementsByTagName("video"),
                            e = he.getElementsByTagName("audio"),
                            i = [];
                        if (t && t.length > 0)
                            for (var n = 0, r = t.length; n < r; n++) i.push(t[n]);
                        if (e && e.length > 0)
                            for (var o = 0, s = e.length; o < s; o++) i.push(e[o]);
                        if (i && i.length > 0)
                            for (var a = 0, l = i.length; a < l; a++) {
                                var c = i[a];
                                if (!c || !c.getAttribute) {
                                    G(1);
                                    break
                                }
                                if (void 0 === c.player) {
                                    var u = c.getAttribute("data-setup");
                                    null !== u && oi(c)
                                }
                            } else ri || G(1)
                    }
                };
            p() && "complete" === he.readyState ? ri = !0 : $(se, "load", function() {
                ri = !0
            });
            var ai = function(t) {
                    var e = he.createElement("style");
                    return e.className = t, e
                },
                li = function(t, e) {
                    t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
                },
                ci = function(t, e, i) {
                    e.guid || (e.guid = F());
                    var n = function() {
                        return e.apply(t, arguments)
                    };
                    return n.guid = i ? i + "_" + e.guid : e.guid, n
                },
                ui = function(t, e) {
                    var i = Date.now();
                    return function() {
                        var n = Date.now();
                        n - i >= e && (t.apply(void 0, arguments), i = n)
                    }
                },
                hi = function() {};
            hi.prototype.allowedEvents_ = {}, hi.prototype.on = function(t, e) {
                var i = this.addEventListener;
                this.addEventListener = function() {}, V(this, t, e), this.addEventListener = i
            }, hi.prototype.addEventListener = hi.prototype.on, hi.prototype.off = function(t, e) {
                W(this, t, e)
            }, hi.prototype.removeEventListener = hi.prototype.off, hi.prototype.one = function(t, e) {
                var i = this.addEventListener;
                this.addEventListener = function() {}, $(this, t, e), this.addEventListener = i
            }, hi.prototype.trigger = function(t) {
                var e = t.type || t;
                "string" == typeof t && (t = {
                    type: e
                }), t = Y(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), U(this, t)
            }, hi.prototype.dispatchEvent = hi.prototype.trigger;
            var pi = function(t) {
                    return t instanceof hi || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(e) {
                        return "function" == typeof t[e]
                    })
                },
                di = function(t) {
                    return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
                },
                fi = function(t) {
                    if (!t.nodeName && !pi(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
                },
                mi = function(t) {
                    if (!di(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
                },
                vi = function(t) {
                    if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
                },
                gi = function(t, e) {
                    var i = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_,
                        n = void 0,
                        r = void 0,
                        o = void 0;
                    return i ? (n = t.eventBusEl_, e.length >= 3 && e.shift(), r = e[0], o = e[1]) : (n = e[0], r = e[1], o = e[2]), fi(n), mi(r), vi(o), o = ci(t, o), {
                        isTargetingSelf: i,
                        target: n,
                        type: r,
                        listener: o
                    }
                },
                yi = function(t, e, i, n) {
                    fi(t), t.nodeName ? ni[e](t, i, n) : t[e](i, n)
                },
                _i = {
                    on: function() {
                        for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        var r = gi(this, i),
                            o = r.isTargetingSelf,
                            s = r.target,
                            a = r.type,
                            l = r.listener;
                        if (yi(s, "on", a, l), !o) {
                            var c = function() {
                                return t.off(s, a, l)
                            };
                            c.guid = l.guid;
                            var u = function() {
                                return t.off("dispose", c)
                            };
                            u.guid = l.guid, yi(this, "on", "dispose", c), yi(s, "on", "dispose", u)
                        }
                    },
                    one: function() {
                        for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        var r = gi(this, i),
                            o = r.isTargetingSelf,
                            s = r.target,
                            a = r.type,
                            l = r.listener;
                        if (o) yi(s, "one", a, l);
                        else {
                            var c = function e() {
                                for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                                t.off(s, a, e), l.apply(null, n)
                            };
                            c.guid = l.guid, yi(s, "one", a, c)
                        }
                    },
                    off: function(t, e, i) {
                        if (!t || di(t)) W(this.eventBusEl_, t, e);
                        else {
                            var n = t,
                                r = e;
                            fi(n), mi(r), vi(i), i = ci(this, i), this.off("dispose", i), n.nodeName ? (W(n, r, i), W(n, "dispose", i)) : pi(n) && (n.off(r, i), n.off("dispose", i))
                        }
                    },
                    trigger: function(t, e) {
                        return U(this.eventBusEl_, t, e)
                    }
                },
                bi = {
                    state: {},
                    setState: function(t) {
                        var e = this;
                        "function" == typeof t && (t = t());
                        var n = void 0;
                        return i(t, function(t, i) {
                            e.state[i] !== t && (n = n || {}, n[i] = {
                                from: e.state[i],
                                to: t
                            }), e.state[i] = t
                        }), n && pi(this) && this.trigger({
                            changes: n,
                            type: "statechanged"
                        }), n
                    }
                },
                Ti = function() {
                    function t(e, i, n) {
                        if (Le(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = tt({}, this.options_), i = this.options_ = tt(this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
                            var r = e && e.id && e.id() || "no_player";
                            this.id_ = r + "_component_" + F()
                        }
                        this.name_ = i.name || null, i.el ? this.el_ = i.el : !1 !== i.createEl && (this.el_ = this.createEl()), K(this, {
                            eventBusKey: this.el_ ? "el_" : null
                        }), Q(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== i.initChildren && this.initChildren(), this.ready(n), !1 !== i.reportTouchActivity && this.enableTouchActivity()
                    }
                    return t.prototype.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), X(this.el_), this.el_ = null)
                    }, t.prototype.player = function() {
                        return this.player_
                    }, t.prototype.options = function(t) {
                        return We.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = tt(this.options_, t), this.options_) : this.options_
                    }, t.prototype.el = function() {
                        return this.el_
                    }, t.prototype.createEl = function(t, e, i) {
                        return v(t, e, i)
                    }, t.prototype.localize = function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            n = this.player_.language && this.player_.language(),
                            r = this.player_.languages && this.player_.languages(),
                            o = r && r[n],
                            s = n && n.split("-")[0],
                            a = r && r[s],
                            l = i;
                        return o && o[t] ? l = o[t] : a && a[t] && (l = a[t]), e && (l = l.replace(/\{(\d+)\}/g, function(t, i) {
                            var n = e[i - 1],
                                r = n;
                            return void 0 === n && (r = t), r
                        })), l
                    }, t.prototype.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, t.prototype.id = function() {
                        return this.id_
                    }, t.prototype.name = function() {
                        return this.name_
                    }, t.prototype.children = function() {
                        return this.children_
                    }, t.prototype.getChildById = function(t) {
                        return this.childIndex_[t]
                    }, t.prototype.getChild = function(t) {
                        if (t) return t = J(t), this.childNameIndex_[t]
                    }, t.prototype.addChild = function(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            r = void 0,
                            o = void 0;
                        if ("string" == typeof e) {
                            o = J(e);
                            var s = i.componentClass || o;
                            i.name = o;
                            var a = t.getComponent(s);
                            if (!a) throw new Error("Component " + s + " does not exist");
                            if ("function" != typeof a) return null;
                            r = new a(this.player_ || this, i)
                        } else r = e;
                        if (this.children_.splice(n, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), o = o || r.name && J(r.name()), o && (this.childNameIndex_[o] = r), "function" == typeof r.el && r.el()) {
                            var l = this.contentEl().children,
                                c = l[n] || null;
                            this.contentEl().insertBefore(r.el(), c)
                        }
                        return r
                    }, t.prototype.removeChild = function(t) {
                        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                            for (var e = !1, i = this.children_.length - 1; i >= 0; i--)
                                if (this.children_[i] === t) {
                                    e = !0, this.children_.splice(i, 1);
                                    break
                                }
                            if (e) {
                                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                var n = t.el();
                                n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                            }
                        }
                    }, t.prototype.initChildren = function() {
                        var e = this,
                            i = this.options_.children;
                        if (i) {
                            var n = this.options_,
                                r = function(t) {
                                    var i = t.name,
                                        r = t.opts;
                                    if (void 0 !== n[i] && (r = n[i]), !1 !== r) {
                                        !0 === r && (r = {}), r.playerOptions = e.options_.playerOptions;
                                        var o = e.addChild(i, r);
                                        o && (e[i] = o)
                                    }
                                },
                                o = void 0,
                                s = t.getComponent("Tech");
                            o = Array.isArray(i) ? i : Object.keys(i), o.concat(Object.keys(this.options_).filter(function(t) {
                                return !o.some(function(e) {
                                    return "string" == typeof e ? t === e : t === e.name
                                })
                            })).map(function(t) {
                                var n = void 0,
                                    r = void 0;
                                return "string" == typeof t ? (n = t, r = i[n] || e.options_[n] || {}) : (n = t.name, r = t), {
                                    name: n,
                                    opts: r
                                }
                            }).filter(function(e) {
                                var i = t.getComponent(e.opts.componentClass || J(e.name));
                                return i && !s.isTech(i)
                            }).forEach(r)
                        }
                    }, t.prototype.buildCSSClass = function() {
                        return ""
                    }, t.prototype.ready = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (t) return this.isReady_ ? void(e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
                    }, t.prototype.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var t = this.readyQueue_;
                            this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
                                t.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, t.prototype.$ = function(t, e) {
                        return Ge(t, e || this.contentEl())
                    }, t.prototype.$$ = function(t, e) {
                        return Ke(t, e || this.contentEl())
                    }, t.prototype.hasClass = function(t) {
                        return _(this.el_, t)
                    }, t.prototype.addClass = function(t) {
                        b(this.el_, t)
                    }, t.prototype.removeClass = function(t) {
                        T(this.el_, t)
                    }, t.prototype.toggleClass = function(t, e) {
                        x(this.el_, t, e)
                    }, t.prototype.show = function() {
                        this.removeClass("vjs-hidden")
                    }, t.prototype.hide = function() {
                        this.addClass("vjs-hidden")
                    }, t.prototype.lockShowing = function() {
                        this.addClass("vjs-lock-showing")
                    }, t.prototype.unlockShowing = function() {
                        this.removeClass("vjs-lock-showing")
                    }, t.prototype.getAttribute = function(t) {
                        return k(this.el_, t)
                    }, t.prototype.setAttribute = function(t, e) {
                        S(this.el_, t, e)
                    }, t.prototype.removeAttribute = function(t) {
                        E(this.el_, t)
                    }, t.prototype.width = function(t, e) {
                        return this.dimension("width", t, e)
                    }, t.prototype.height = function(t, e) {
                        return this.dimension("height", t, e)
                    }, t.prototype.dimensions = function(t, e) {
                        this.width(t, !0), this.height(e)
                    }, t.prototype.dimension = function(t, e, i) {
                        if (void 0 !== e) return null !== e && e === e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void(i || this.trigger("componentresize"));
                        if (!this.el_) return 0;
                        var n = this.el_.style[t],
                            r = n.indexOf("px");
                        return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + J(t)], 10)
                    }, t.prototype.currentDimension = function(t) {
                        var e = 0;
                        if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof se.getComputedStyle) {
                            var i = se.getComputedStyle(this.el_);
                            e = i.getPropertyValue(t) || i[t]
                        }
                        if (0 === (e = parseFloat(e))) {
                            var n = "offset" + J(t);
                            e = this.el_[n]
                        }
                        return e
                    }, t.prototype.currentDimensions = function() {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, t.prototype.currentWidth = function() {
                        return this.currentDimension("width")
                    }, t.prototype.currentHeight = function() {
                        return this.currentDimension("height")
                    }, t.prototype.focus = function() {
                        this.el_.focus()
                    }, t.prototype.blur = function() {
                        this.el_.blur()
                    }, t.prototype.emitTapEvents = function() {
                        var t = 0,
                            e = null,
                            i = void 0;
                        this.on("touchstart", function(n) {
                            1 === n.touches.length && (e = {
                                pageX: n.touches[0].pageX,
                                pageY: n.touches[0].pageY
                            }, t = (new Date).getTime(), i = !0)
                        }), this.on("touchmove", function(t) {
                            if (t.touches.length > 1) i = !1;
                            else if (e) {
                                var n = t.touches[0].pageX - e.pageX,
                                    r = t.touches[0].pageY - e.pageY,
                                    o = Math.sqrt(n * n + r * r);
                                o > 10 && (i = !1)
                            }
                        });
                        var n = function() {
                            i = !1
                        };
                        this.on("touchleave", n), this.on("touchcancel", n), this.on("touchend", function(n) {
                            if (e = null, !0 === i) {
                                (new Date).getTime() - t < 200 && (n.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, t.prototype.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var t = ci(this.player(), this.player().reportUserActivity),
                                e = void 0;
                            this.on("touchstart", function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var i = function(i) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
                        }
                    }, t.prototype.setTimeout = function(t, e) {
                        var i = this;
                        t = ci(this, t);
                        var n = se.setTimeout(t, e),
                            r = function() {
                                return i.clearTimeout(n)
                            };
                        return r.guid = "vjs-timeout-" + n, this.on("dispose", r), n
                    }, t.prototype.clearTimeout = function(t) {
                        se.clearTimeout(t);
                        var e = function() {};
                        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                    }, t.prototype.setInterval = function(t, e) {
                        var i = this;
                        t = ci(this, t);
                        var n = se.setInterval(t, e),
                            r = function() {
                                return i.clearInterval(n)
                            };
                        return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
                    }, t.prototype.clearInterval = function(t) {
                        se.clearInterval(t);
                        var e = function() {};
                        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                    }, t.prototype.requestAnimationFrame = function(t) {
                        var e = this;
                        if (this.supportsRaf_) {
                            t = ci(this, t);
                            var i = se.requestAnimationFrame(t),
                                n = function() {
                                    return e.cancelAnimationFrame(i)
                                };
                            return n.guid = "vjs-raf-" + i, this.on("dispose", n), i
                        }
                        return this.setTimeout(t, 1e3 / 60)
                    }, t.prototype.cancelAnimationFrame = function(t) {
                        if (this.supportsRaf_) {
                            se.cancelAnimationFrame(t);
                            var e = function() {};
                            return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
                        }
                        return this.clearTimeout(t)
                    }, t.registerComponent = function(e, i) {
                        if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
                        var n = t.getComponent("Tech"),
                            r = n && n.isTech(i),
                            o = t === i || t.prototype.isPrototypeOf(i.prototype);
                        if (r || !o) {
                            var s = void 0;
                            throw s = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + s + ".")
                        }
                        e = J(e), t.components_ || (t.components_ = {});
                        var a = t.getComponent("Player");
                        if ("Player" === e && a && a.players) {
                            var l = a.players,
                                c = Object.keys(l);
                            if (l && c.length > 0 && c.map(function(t) {
                                    return l[t]
                                }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                        }
                        return t.components_[e] = i, i
                    }, t.getComponent = function(e) {
                        if (e) return e = J(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
                    }, t
                }();
            Ti.prototype.supportsRaf_ = "function" == typeof se.requestAnimationFrame && "function" == typeof se.cancelAnimationFrame, Ti.registerComponent("Component", Ti);
            for (var xi = {}, wi = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], Ci = wi[0], ki = void 0, Si = 0; Si < wi.length; Si++)
                if (wi[Si][1] in he) {
                    ki = wi[Si];
                    break
                }
            if (ki)
                for (var Ei = 0; Ei < ki.length; Ei++) xi[Ci[Ei]] = ki[Ei];
            st.prototype.code = 0, st.prototype.message = "", st.prototype.status = null, st.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], st.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var Pi = 0; Pi < st.errorTypes.length; Pi++) st[st.errorTypes[Pi]] = Pi, st.prototype[st.errorTypes[Pi]] = Pi;
            var Ai = at,
                Oi = function(t) {
                    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, i, n) {
                        return t[i] && (e[i] = t[i]), e
                    }, {
                        cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                            return {
                                startTime: t.startTime,
                                endTime: t.endTime,
                                text: t.text,
                                id: t.id
                            }
                        })
                    })
                },
                Mi = function(t) {
                    var e = t.$$("track"),
                        i = Array.prototype.map.call(e, function(t) {
                            return t.track
                        });
                    return Array.prototype.map.call(e, function(t) {
                        var e = Oi(t.track);
                        return t.src && (e.src = t.src), e
                    }).concat(Array.prototype.filter.call(t.textTracks(), function(t) {
                        return -1 === i.indexOf(t)
                    }).map(Oi))
                },
                ji = function(t, e) {
                    return t.forEach(function(t) {
                        var i = e.addRemoteTextTrack(t).track;
                        !t.src && t.cues && t.cues.forEach(function(t) {
                            return i.addCue(t)
                        })
                    }), e.textTracks()
                },
                Di = {
                    textTracksToJson: Mi,
                    jsonToTextTracks: ji,
                    trackToJson_: Oi
                },
                Ri = "vjs-modal-dialog",
                Ni = function(t) {
                    function e(i, n) {
                        Le(this, e);
                        var r = Fe(this, t.call(this, i, n));
                        return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = v("div", {
                            className: Ri + "-content"
                        }, {
                            role: "document"
                        }), r.descEl_ = v("p", {
                            className: Ri + "-description vjs-control-text",
                            id: r.el().getAttribute("aria-describedby")
                        }), g(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
                    }
                    return Ie(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, e.prototype.buildCSSClass = function() {
                        return Ri + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleKeyPress = function(t) {
                        27 === t.which && this.closeable() && this.close()
                    }, e.prototype.label = function() {
                        return this.localize(this.options_.label || "Modal Window")
                    }, e.prototype.description = function() {
                        var t = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                    }, e.prototype.open = function() {
                        if (!this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", ci(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                    }, e.prototype.opened = function(t) {
                        return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
                    }, e.prototype.close = function() {
                        if (this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", ci(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                        }
                    }, e.prototype.closeable = function(t) {
                        if ("boolean" == typeof t) {
                            var e = this.closeable_ = !!t,
                                i = this.getChild("closeButton");
                            if (e && !i) {
                                var n = this.contentEl_;
                                this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                                    controlText: "Close Modal Dialog"
                                }), this.contentEl_ = n, this.on(i, "close", this.close)
                            }!e && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                        }
                        return this.closeable_
                    }, e.prototype.fill = function() {
                        this.fillWith(this.content())
                    }, e.prototype.fillWith = function(t) {
                        var e = this.contentEl(),
                            i = e.parentNode,
                            n = e.nextSibling;
                        this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(e), this.empty(), I(e, t), this.trigger("modalfill"), n ? i.insertBefore(e, n) : i.appendChild(e);
                        var r = this.getChild("closeButton");
                        r && i.appendChild(r.el_)
                    }, e.prototype.empty = function() {
                        this.trigger("beforemodalempty"), R(this.contentEl()), this.trigger("modalempty")
                    }, e.prototype.content = function(t) {
                        return void 0 !== t && (this.content_ = t), this.content_
                    }, e.prototype.conditionalFocus_ = function() {
                        var t = he.activeElement,
                            e = this.player_.el_;
                        this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(he, "keydown", this.handleKeyDown))
                    }, e.prototype.conditionalBlur_ = function() {
                        this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(he, "keydown", this.handleKeyDown)
                    }, e.prototype.handleKeyDown = function(t) {
                        if (9 === t.which) {
                            for (var e = this.focusableEls_(), i = this.el_.querySelector(":focus"), n = void 0, r = 0; r < e.length; r++)
                                if (i === e[r]) {
                                    n = r;
                                    break
                                }
                            he.activeElement === this.el_ && (n = 0), t.shiftKey && 0 === n ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || n !== e.length - 1 || (e[0].focus(), t.preventDefault())
                        }
                    }, e.prototype.focusableEls_ = function() {
                        var t = this.el_.querySelectorAll("*");
                        return Array.prototype.filter.call(t, function(t) {
                            return (t instanceof se.HTMLAnchorElement || t instanceof se.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof se.HTMLInputElement || t instanceof se.HTMLSelectElement || t instanceof se.HTMLTextAreaElement || t instanceof se.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof se.HTMLIFrameElement || t instanceof se.HTMLObjectElement || t instanceof se.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
                        })
                    }, e
                }(Ti);
            Ni.prototype.options_ = {
                pauseOnOpen: !0,
                temporary: !0
            }, Ti.registerComponent("ModalDialog", Ni);
            var Li = function(t) {
                function e() {
                    var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    Le(this, e);
                    var o = Fe(this, t.call(this));
                    if (!r && (r = o, Pe)) {
                        r = he.createElement("custom");
                        for (var s in e.prototype) "constructor" !== s && (r[s] = e.prototype[s])
                    }
                    r.tracks_ = [], Object.defineProperty(r, "length", {
                        get: function() {
                            return this.tracks_.length
                        }
                    });
                    for (var a = 0; a < n.length; a++) r.addTrack(n[a]);
                    return i = r, Fe(o, i)
                }
                return Ie(e, t), e.prototype.addTrack = function(t) {
                    var e = this.tracks_.length;
                    "" + e in this || Object.defineProperty(this, e, {
                        get: function() {
                            return this.tracks_[e]
                        }
                    }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({
                        track: t,
                        type: "addtrack"
                    }))
                }, e.prototype.removeTrack = function(t) {
                    for (var e = void 0, i = 0, n = this.length; i < n; i++)
                        if (this[i] === t) {
                            e = this[i], e.off && e.off(), this.tracks_.splice(i, 1);
                            break
                        }
                    e && this.trigger({
                        track: e,
                        type: "removetrack"
                    })
                }, e.prototype.getTrackById = function(t) {
                    for (var e = null, i = 0, n = this.length; i < n; i++) {
                        var r = this[i];
                        if (r.id === t) {
                            e = r;
                            break
                        }
                    }
                    return e
                }, e
            }(hi);
            Li.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var Ii in Li.prototype.allowedEvents_) Li.prototype["on" + Ii] = null;
            var Fi = function(t, e) {
                    for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].enabled = !1)
                },
                Bi = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        Le(this, e);
                        for (var o = void 0, s = r.length - 1; s >= 0; s--)
                            if (r[s].enabled) {
                                Fi(r, r[s]);
                                break
                            }
                        if (Pe) {
                            o = he.createElement("custom");
                            for (var a in Li.prototype) "constructor" !== a && (o[a] = Li.prototype[a]);
                            for (var l in e.prototype) "constructor" !== l && (o[l] = e.prototype[l])
                        }
                        return o = i = Fe(this, t.call(this, r, o)), o.changing_ = !1, n = o, Fe(i, n)
                    }
                    return Ie(e, t), e.prototype.addTrack = function(e) {
                        var i = this;
                        e.enabled && Fi(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function() {
                            i.changing_ || (i.changing_ = !0, Fi(i, e), i.changing_ = !1, i.trigger("change"))
                        })
                    }, e
                }(Li),
                Hi = function(t, e) {
                    for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].selected = !1)
                },
                Xi = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        Le(this, e);
                        for (var o = void 0, s = r.length - 1; s >= 0; s--)
                            if (r[s].selected) {
                                Hi(r, r[s]);
                                break
                            }
                        if (Pe) {
                            o = he.createElement("custom");
                            for (var a in Li.prototype) "constructor" !== a && (o[a] = Li.prototype[a]);
                            for (var l in e.prototype) "constructor" !== l && (o[l] = e.prototype[l])
                        }
                        return o = i = Fe(this, t.call(this, r, o)), o.changing_ = !1, Object.defineProperty(o, "selectedIndex", {
                            get: function() {
                                for (var t = 0; t < this.length; t++)
                                    if (this[t].selected) return t;
                                return -1
                            },
                            set: function() {}
                        }), n = o, Fe(i, n)
                    }
                    return Ie(e, t), e.prototype.addTrack = function(e) {
                        var i = this;
                        e.selected && Hi(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function() {
                            i.changing_ || (i.changing_ = !0, Hi(i, e), i.changing_ = !1, i.trigger("change"))
                        })
                    }, e
                }(Li),
                zi = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        Le(this, e);
                        var o = void 0;
                        if (Pe) {
                            o = he.createElement("custom");
                            for (var s in Li.prototype) "constructor" !== s && (o[s] = Li.prototype[s]);
                            for (var a in e.prototype) "constructor" !== a && (o[a] = e.prototype[a])
                        }
                        return o = i = Fe(this, t.call(this, r, o)), n = o, Fe(i, n)
                    }
                    return Ie(e, t), e.prototype.addTrack = function(e) {
                        t.prototype.addTrack.call(this, e), e.addEventListener("modechange", ci(this, function() {
                            this.trigger("change")
                        })), -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", ci(this, function() {
                            this.trigger("selectedlanguagechange")
                        }))
                    }, e
                }(Li),
                qi = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        Le(this, t);
                        var i = this;
                        if (Pe) {
                            i = he.createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
                        }
                        i.trackElements_ = [], Object.defineProperty(i, "length", {
                            get: function() {
                                return this.trackElements_.length
                            }
                        });
                        for (var r = 0, o = e.length; r < o; r++) i.addTrackElement_(e[r]);
                        if (Pe) return i
                    }
                    return t.prototype.addTrackElement_ = function(t) {
                        var e = this.trackElements_.length;
                        "" + e in this || Object.defineProperty(this, e, {
                            get: function() {
                                return this.trackElements_[e]
                            }
                        }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
                    }, t.prototype.getTrackElementByTrack_ = function(t) {
                        for (var e = void 0, i = 0, n = this.trackElements_.length; i < n; i++)
                            if (t === this.trackElements_[i].track) {
                                e = this.trackElements_[i];
                                break
                            }
                        return e
                    }, t.prototype.removeTrackElement_ = function(t) {
                        for (var e = 0, i = this.trackElements_.length; e < i; e++)
                            if (t === this.trackElements_[e]) {
                                this.trackElements_.splice(e, 1);
                                break
                            }
                    }, t
                }(),
                Yi = function() {
                    function t(e) {
                        Le(this, t);
                        var i = this;
                        if (Pe) {
                            i = he.createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
                        }
                        if (t.prototype.setCues_.call(i, e), Object.defineProperty(i, "length", {
                                get: function() {
                                    return this.length_
                                }
                            }), Pe) return i
                    }
                    return t.prototype.setCues_ = function(t) {
                        var e = this.length || 0,
                            i = 0,
                            n = t.length;
                        this.cues_ = t, this.length_ = t.length;
                        var r = function(t) {
                            "" + t in this || Object.defineProperty(this, "" + t, {
                                get: function() {
                                    return this.cues_[t]
                                }
                            })
                        };
                        if (e < n)
                            for (i = e; i < n; i++) r.call(this, i)
                    }, t.prototype.getCueById = function(t) {
                        for (var e = null, i = 0, n = this.length; i < n; i++) {
                            var r = this[i];
                            if (r.id === t) {
                                e = r;
                                break
                            }
                        }
                        return e
                    }, t
                }(),
                Vi = {
                    alternative: "alternative",
                    captions: "captions",
                    main: "main",
                    sign: "sign",
                    subtitles: "subtitles",
                    commentary: "commentary"
                },
                Wi = {
                    alternative: "alternative",
                    descriptions: "descriptions",
                    main: "main",
                    "main-desc": "main-desc",
                    translation: "translation",
                    commentary: "commentary"
                },
                Ui = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                },
                $i = {
                    disabled: "disabled",
                    hidden: "hidden",
                    showing: "showing"
                },
                Gi = function(t) {
                    function e() {
                        var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Le(this, e);
                        var r = Fe(this, t.call(this)),
                            o = r;
                        if (Pe) {
                            o = he.createElement("custom");
                            for (var s in e.prototype) "constructor" !== s && (o[s] = e.prototype[s])
                        }
                        var a = {
                            id: n.id || "vjs_track_" + F(),
                            kind: n.kind || "",
                            label: n.label || "",
                            language: n.language || ""
                        };
                        for (var l in a) ! function(t) {
                            Object.defineProperty(o, t, {
                                get: function() {
                                    return a[t]
                                },
                                set: function() {}
                            })
                        }(l);
                        return i = o, Fe(r, i)
                    }
                    return Ie(e, t), e
                }(hi),
                Ki = function(t) {
                    var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        i = he.createElement("a");
                    i.href = t;
                    var n = "" === i.host && "file:" !== i.protocol,
                        r = void 0;
                    n && (r = he.createElement("div"), r.innerHTML = '<a href="' + t + '"></a>', i = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), he.body.appendChild(r));
                    for (var o = {}, s = 0; s < e.length; s++) o[e[s]] = i[e[s]];
                    return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), o.protocol || (o.protocol = se.location.protocol), n && he.body.removeChild(r), o
                },
                Qi = function(t) {
                    if (!t.match(/^https?:\/\//)) {
                        var e = he.createElement("div");
                        e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                    }
                    return t
                },
                Ji = function(t) {
                    if ("string" == typeof t) {
                        var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                            i = e.exec(t);
                        if (i) return i.pop().toLowerCase()
                    }
                    return ""
                },
                Zi = function(t) {
                    var e = se.location,
                        i = Ki(t);
                    return (":" === i.protocol ? e.protocol : i.protocol) + i.host !== e.protocol + e.host
                },
                tn = (Object.freeze || Object)({
                    parseUrl: Ki,
                    getAbsoluteURL: Qi,
                    getFileExtension: Ji,
                    isCrossOrigin: Zi
                }),
                en = lt,
                nn = Object.prototype.toString,
                rn = t(function(t, e) {
                    function i(t) {
                        return t.replace(/^\s*|\s*$/g, "")
                    }
                    e = t.exports = i, e.left = function(t) {
                        return t.replace(/^\s*/, "")
                    }, e.right = function(t) {
                        return t.replace(/\s*$/, "")
                    }
                }),
                on = ct,
                sn = Object.prototype.toString,
                an = Object.prototype.hasOwnProperty,
                ln = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                cn = function(t) {
                    if (!t) return {};
                    var e = {};
                    return on(rn(t).split("\n"), function(t) {
                        var i = t.indexOf(":"),
                            n = rn(t.slice(0, i)).toLowerCase(),
                            r = rn(t.slice(i + 1));
                        void 0 === e[n] ? e[n] = r : ln(e[n]) ? e[n].push(r) : e[n] = [e[n], r]
                    }), e
                },
                un = dt,
                hn = Object.prototype.hasOwnProperty,
                pn = vt;
            vt.XMLHttpRequest = se.XMLHttpRequest || _t, vt.XDomainRequest = "withCredentials" in new vt.XMLHttpRequest ? vt.XMLHttpRequest : se.XDomainRequest,
                function(t, e) {
                    for (var i = 0; i < t.length; i++) e(t[i])
                }(["get", "put", "post", "patch", "head", "delete"], function(t) {
                    vt["delete" === t ? "del" : t] = function(e, i, n) {
                        return i = mt(e, i, n), i.method = t.toUpperCase(), gt(i)
                    }
                });
            var dn = function(t, e) {
                    var i = new se.WebVTT.Parser(se, se.vttjs, se.WebVTT.StringDecoder()),
                        n = [];
                    i.oncue = function(t) {
                        e.addCue(t)
                    }, i.onparsingerror = function(t) {
                        n.push(t)
                    }, i.onflush = function() {
                        e.trigger({
                            type: "loadeddata",
                            target: e
                        })
                    }, i.parse(t), n.length > 0 && (se.console && se.console.groupCollapsed && se.console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function(t) {
                        return We.error(t)
                    }), se.console && se.console.groupEnd && se.console.groupEnd()), i.flush()
                },
                fn = function(t, e) {
                    var i = {
                            uri: t
                        },
                        n = Zi(t);
                    n && (i.cors = n), pn(i, ci(this, function(t, i, n) {
                        if (t) return We.error(t, i);
                        if (e.loaded_ = !0, "function" != typeof se.WebVTT) {
                            if (e.tech_) {
                                var r = function() {
                                    return dn(n, e)
                                };
                                e.tech_.on("vttjsloaded", r), e.tech_.on("vttjserror", function() {
                                    We.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", r)
                                })
                            }
                        } else dn(n, e)
                    }))
                },
                mn = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (Le(this, e), !r.tech) throw new Error("A tech was not provided.");
                        var o = tt(r, {
                                kind: Ui[r.kind] || "subtitles",
                                language: r.language || r.srclang || ""
                            }),
                            s = $i[o.mode] || "disabled",
                            a = o.default;
                        "metadata" !== o.kind && "chapters" !== o.kind || (s = "hidden");
                        var l = i = Fe(this, t.call(this, o));
                        if (l.tech_ = o.tech, Pe)
                            for (var c in e.prototype) "constructor" !== c && (l[c] = e.prototype[c]);
                        l.cues_ = [], l.activeCues_ = [];
                        var u = new Yi(l.cues_),
                            h = new Yi(l.activeCues_),
                            p = !1,
                            d = ci(l, function() {
                                this.activeCues, p && (this.trigger("cuechange"), p = !1)
                            });
                        return "disabled" !== s && l.tech_.ready(function() {
                            l.tech_.on("timeupdate", d)
                        }, !0), Object.defineProperty(l, "default", {
                            get: function() {
                                return a
                            },
                            set: function() {}
                        }), Object.defineProperty(l, "mode", {
                            get: function() {
                                return s
                            },
                            set: function(t) {
                                var e = this;
                                $i[t] && (s = t, "showing" === s && this.tech_.ready(function() {
                                    e.tech_.on("timeupdate", d)
                                }, !0), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(l, "cues", {
                            get: function() {
                                return this.loaded_ ? u : null
                            },
                            set: function() {}
                        }), Object.defineProperty(l, "activeCues", {
                            get: function() {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return h;
                                for (var t = this.tech_.currentTime(), e = [], i = 0, n = this.cues.length; i < n; i++) {
                                    var r = this.cues[i];
                                    r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
                                }
                                if (p = !1, e.length !== this.activeCues_.length) p = !0;
                                else
                                    for (var o = 0; o < e.length; o++) - 1 === this.activeCues_.indexOf(e[o]) && (p = !0);
                                return this.activeCues_ = e, h.setCues_(this.activeCues_), h
                            },
                            set: function() {}
                        }), o.src ? (l.src = o.src, fn(o.src, l)) : l.loaded_ = !0, n = l, Fe(i, n)
                    }
                    return Ie(e, t), e.prototype.addCue = function(t) {
                        var e = t;
                        if (se.vttjs && !(t instanceof se.vttjs.VTTCue)) {
                            e = new se.vttjs.VTTCue(t.startTime, t.endTime, t.text);
                            for (var i in t) i in e || (e[i] = t[i]);
                            e.id = t.id, e.originalCue_ = t
                        }
                        for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(e);
                        this.cues_.push(e), this.cues.setCues_(this.cues_)
                    }, e.prototype.removeCue = function(t) {
                        for (var e = this.cues_.length; e--;) {
                            var i = this.cues_[e];
                            if (i === t || i.originalCue_ && i.originalCue_ === t) {
                                this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                                break
                            }
                        }
                    }, e
                }(Gi);
            mn.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            };
            var vn = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Le(this, e);
                        var o = tt(r, {
                                kind: Wi[r.kind] || ""
                            }),
                            s = i = Fe(this, t.call(this, o)),
                            a = !1;
                        if (Pe)
                            for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
                        return Object.defineProperty(s, "enabled", {
                            get: function() {
                                return a
                            },
                            set: function(t) {
                                "boolean" == typeof t && t !== a && (a = t, this.trigger("enabledchange"))
                            }
                        }), o.enabled && (s.enabled = o.enabled), s.loaded_ = !0, n = s, Fe(i, n)
                    }
                    return Ie(e, t), e
                }(Gi),
                gn = function(t) {
                    function e() {
                        var i, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Le(this, e);
                        var o = tt(r, {
                                kind: Vi[r.kind] || ""
                            }),
                            s = i = Fe(this, t.call(this, o)),
                            a = !1;
                        if (Pe)
                            for (var l in e.prototype) "constructor" !== l && (s[l] = e.prototype[l]);
                        return Object.defineProperty(s, "selected", {
                            get: function() {
                                return a
                            },
                            set: function(t) {
                                "boolean" == typeof t && t !== a && (a = t, this.trigger("selectedchange"))
                            }
                        }), o.selected && (s.selected = o.selected), n = s, Fe(i, n)
                    }
                    return Ie(e, t), e
                }(Gi),
                yn = 0,
                _n = 2,
                bn = function(t) {
                    function e() {
                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Le(this, e);
                        var n = Fe(this, t.call(this)),
                            r = void 0,
                            o = n;
                        if (Pe) {
                            o = he.createElement("custom");
                            for (var s in e.prototype) "constructor" !== s && (o[s] = e.prototype[s])
                        }
                        var a = new mn(i);
                        if (o.kind = a.kind, o.src = a.src, o.srclang = a.language, o.label = a.label, o.default = a.default, Object.defineProperty(o, "readyState", {
                                get: function() {
                                    return r
                                }
                            }), Object.defineProperty(o, "track", {
                                get: function() {
                                    return a
                                }
                            }), r = yn, a.addEventListener("loadeddata", function() {
                                r = _n, o.trigger({
                                    type: "load",
                                    target: o
                                })
                            }), Pe) {
                            var l;
                            return l = o, Fe(n, l)
                        }
                        return n
                    }
                    return Ie(e, t), e
                }(hi);
            bn.prototype.allowedEvents_ = {
                load: "load"
            }, bn.NONE = yn, bn.LOADING = 1, bn.LOADED = _n, bn.ERROR = 3;
            var Tn = {
                audio: {
                    ListClass: Bi,
                    TrackClass: vn,
                    capitalName: "Audio"
                },
                video: {
                    ListClass: Xi,
                    TrackClass: gn,
                    capitalName: "Video"
                },
                text: {
                    ListClass: zi,
                    TrackClass: mn,
                    capitalName: "Text"
                }
            };
            Object.keys(Tn).forEach(function(t) {
                Tn[t].getterName = t + "Tracks", Tn[t].privateName = t + "Tracks_"
            });
            var xn = {
                    remoteText: {
                        ListClass: zi,
                        TrackClass: mn,
                        capitalName: "RemoteText",
                        getterName: "remoteTextTracks",
                        privateName: "remoteTextTracks_"
                    },
                    remoteTextEl: {
                        ListClass: qi,
                        TrackClass: bn,
                        capitalName: "RemoteTextTrackEls",
                        getterName: "remoteTextTrackEls",
                        privateName: "remoteTextTrackEls_"
                    }
                },
                wn = tt(Tn, xn);
            xn.names = Object.keys(xn), Tn.names = Object.keys(Tn), wn.names = [].concat(xn.names).concat(Tn.names);
            var Cn = Object.create || function() {
                function t() {}
                return function(e) {
                    if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                    return t.prototype = e, new t
                }
            }();
            bt.prototype = Cn(Error.prototype), bt.prototype.constructor = bt, bt.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            }, xt.prototype = {
                set: function(t, e) {
                    this.get(t) || "" === e || (this.values[t] = e)
                },
                get: function(t, e, i) {
                    return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
                },
                has: function(t) {
                    return t in this.values
                },
                alt: function(t, e, i) {
                    for (var n = 0; n < i.length; ++n)
                        if (e === i[n]) {
                            this.set(t, e);
                            break
                        }
                },
                integer: function(t, e) {
                    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                },
                percent: function(t, e) {
                    return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
                }
            };
            var kn = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&lrm;": "‎",
                    "&rlm;": "‏",
                    "&nbsp;": " "
                },
                Sn = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                En = {
                    v: "title",
                    lang: "lang"
                },
                Pn = {
                    rt: "ruby"
                },
                An = [
                    [1470, 1470],
                    [1472, 1472],
                    [1475, 1475],
                    [1478, 1478],
                    [1488, 1514],
                    [1520, 1524],
                    [1544, 1544],
                    [1547, 1547],
                    [1549, 1549],
                    [1563, 1563],
                    [1566, 1610],
                    [1645, 1647],
                    [1649, 1749],
                    [1765, 1766],
                    [1774, 1775],
                    [1786, 1805],
                    [1807, 1808],
                    [1810, 1839],
                    [1869, 1957],
                    [1969, 1969],
                    [1984, 2026],
                    [2036, 2037],
                    [2042, 2042],
                    [2048, 2069],
                    [2074, 2074],
                    [2084, 2084],
                    [2088, 2088],
                    [2096, 2110],
                    [2112, 2136],
                    [2142, 2142],
                    [2208, 2208],
                    [2210, 2220],
                    [8207, 8207],
                    [64285, 64285],
                    [64287, 64296],
                    [64298, 64310],
                    [64312, 64316],
                    [64318, 64318],
                    [64320, 64321],
                    [64323, 64324],
                    [64326, 64449],
                    [64467, 64829],
                    [64848, 64911],
                    [64914, 64967],
                    [65008, 65020],
                    [65136, 65140],
                    [65142, 65276],
                    [67584, 67589],
                    [67592, 67592],
                    [67594, 67637],
                    [67639, 67640],
                    [67644, 67644],
                    [67647, 67669],
                    [67671, 67679],
                    [67840, 67867],
                    [67872, 67897],
                    [67903, 67903],
                    [67968, 68023],
                    [68030, 68031],
                    [68096, 68096],
                    [68112, 68115],
                    [68117, 68119],
                    [68121, 68147],
                    [68160, 68167],
                    [68176, 68184],
                    [68192, 68223],
                    [68352, 68405],
                    [68416, 68437],
                    [68440, 68466],
                    [68472, 68479],
                    [68608, 68680],
                    [126464, 126467],
                    [126469, 126495],
                    [126497, 126498],
                    [126500, 126500],
                    [126503, 126503],
                    [126505, 126514],
                    [126516, 126519],
                    [126521, 126521],
                    [126523, 126523],
                    [126530, 126530],
                    [126535, 126535],
                    [126537, 126537],
                    [126539, 126539],
                    [126541, 126543],
                    [126545, 126546],
                    [126548, 126548],
                    [126551, 126551],
                    [126553, 126553],
                    [126555, 126555],
                    [126557, 126557],
                    [126559, 126559],
                    [126561, 126562],
                    [126564, 126564],
                    [126567, 126570],
                    [126572, 126578],
                    [126580, 126583],
                    [126585, 126588],
                    [126590, 126590],
                    [126592, 126601],
                    [126603, 126619],
                    [126625, 126627],
                    [126629, 126633],
                    [126635, 126651],
                    [1114109, 1114109]
                ];
            At.prototype.applyStyles = function(t, e) {
                e = e || this.div;
                for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i])
            }, At.prototype.formatStyle = function(t, e) {
                return 0 === t ? 0 : t + e
            }, Ot.prototype = Cn(At.prototype), Ot.prototype.constructor = Ot, Mt.prototype.move = function(t, e) {
                switch (e = void 0 !== e ? e : this.lineHeight, t) {
                    case "+x":
                        this.left += e, this.right += e;
                        break;
                    case "-x":
                        this.left -= e, this.right -= e;
                        break;
                    case "+y":
                        this.top += e, this.bottom += e;
                        break;
                    case "-y":
                        this.top -= e, this.bottom -= e
                }
            }, Mt.prototype.overlaps = function(t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, Mt.prototype.overlapsAny = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (this.overlaps(t[e])) return !0;
                return !1
            }, Mt.prototype.within = function(t) {
                return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
            }, Mt.prototype.overlapsOppositeAxis = function(t, e) {
                switch (e) {
                    case "+x":
                        return this.left < t.left;
                    case "-x":
                        return this.right > t.right;
                    case "+y":
                        return this.top < t.top;
                    case "-y":
                        return this.bottom > t.bottom
                }
            }, Mt.prototype.intersectPercentage = function(t) {
                return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
            }, Mt.prototype.toCSSCompatValues = function(t) {
                return {
                    top: this.top - t.top,
                    bottom: t.bottom - this.bottom,
                    left: this.left - t.left,
                    right: t.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, Mt.getSimpleBoxPosition = function(t) {
                var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                    i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                    n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
                return t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t, {
                    left: t.left,
                    right: t.right,
                    top: t.top || n,
                    height: t.height || e,
                    bottom: t.bottom || n + (t.height || e),
                    width: t.width || i
                }
            }, Dt.StringDecoder = function() {
                return {
                    decode: function(t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            }, Dt.convertCueToDOMTree = function(t, e) {
                return t && e ? kt(t, e) : null
            };
            Dt.processCues = function(t, e, i) {
                if (!t || !e || !i) return null;
                for (; i.firstChild;) i.removeChild(i.firstChild);
                var n = t.document.createElement("div");
                if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", i.appendChild(n), function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].hasBeenReset || !t[e].displayState) return !0;
                        return !1
                    }(e)) {
                    var r = [],
                        o = Mt.getSimpleBoxPosition(n),
                        s = Math.round(.05 * o.height * 100) / 100,
                        a = {
                            font: s + "px sans-serif"
                        };
                    ! function() {
                        for (var i, s, l = 0; l < e.length; l++) s = e[l], i = new Ot(t, s, a), n.appendChild(i.div), jt(t, i, o, r), s.displayState = i.div, r.push(Mt.getSimpleBoxPosition(i))
                    }()
                } else
                    for (var l = 0; l < e.length; l++) n.appendChild(e[l].displayState)
            }, Dt.Parser = function(t, e, i) {
                i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
            }, Dt.Parser.prototype = {
                reportOrThrowError: function(t) {
                    if (!(t instanceof bt)) throw t;
                    this.onparsingerror && this.onparsingerror(t)
                },
                parse: function(t) {
                    function e() {
                        for (var t = r.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                        var i = t.substr(0, e);
                        return "\r" === t[e] && ++e, "\n" === t[e] && ++e, r.buffer = t.substr(e), i
                    }

                    function i(t) {
                        var e = new xt;
                        if (wt(t, function(t, i) {
                                switch (t) {
                                    case "id":
                                        e.set(t, i);
                                        break;
                                    case "width":
                                        e.percent(t, i);
                                        break;
                                    case "lines":
                                        e.integer(t, i);
                                        break;
                                    case "regionanchor":
                                    case "viewportanchor":
                                        var n = i.split(",");
                                        if (2 !== n.length) break;
                                        var r = new xt;
                                        if (r.percent("x", n[0]), r.percent("y", n[1]), !r.has("x") || !r.has("y")) break;
                                        e.set(t + "X", r.get("x")), e.set(t + "Y", r.get("y"));
                                        break;
                                    case "scroll":
                                        e.alt(t, i, ["up"])
                                }
                            }, /=/, /\s/), e.has("id")) {
                            var i = new(r.vttjs.VTTRegion || r.window.VTTRegion);
                            i.width = e.get("width", 100), i.lines = e.get("lines", 3), i.regionAnchorX = e.get("regionanchorX", 0), i.regionAnchorY = e.get("regionanchorY", 100), i.viewportAnchorX = e.get("viewportanchorX", 0), i.viewportAnchorY = e.get("viewportanchorY", 100), i.scroll = e.get("scroll", ""), r.onregion && r.onregion(i), r.regionList.push({
                                id: e.get("id"),
                                region: i
                            })
                        }
                    }

                    function n(t) {
                        var e = new xt;
                        wt(t, function(t, i) {
                            switch (t) {
                                case "MPEGT":
                                    e.integer(t + "S", i);
                                    break;
                                case "LOCA":
                                    e.set(t + "L", Tt(i))
                            }
                        }, /[^\d]:/, /,/), r.ontimestampmap && r.ontimestampmap({
                            MPEGTS: e.get("MPEGTS"),
                            LOCAL: e.get("LOCAL")
                        })
                    }
                    var r = this;
                    t && (r.buffer += r.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        var o;
                        if ("INITIAL" === r.state) {
                            if (!/\r\n|\n/.test(r.buffer)) return this;
                            o = e();
                            var s = o.match(/^WEBVTT([ \t].*)?$/);
                            if (!s || !s[0]) throw new bt(bt.Errors.BadSignature);
                            r.state = "HEADER"
                        }
                        for (var a = !1; r.buffer;) {
                            if (!/\r\n|\n/.test(r.buffer)) return this;
                            switch (a ? a = !1 : o = e(), r.state) {
                                case "HEADER":
                                    /:/.test(o) ? function(t) {
                                        t.match(/X-TIMESTAMP-MAP/) ? wt(t, function(t, e) {
                                            switch (t) {
                                                case "X-TIMESTAMP-MAP":
                                                    n(e)
                                            }
                                        }, /=/) : wt(t, function(t, e) {
                                            switch (t) {
                                                case "Region":
                                                    i(e)
                                            }
                                        }, /:/)
                                    }(o) : o || (r.state = "ID");
                                    continue;
                                case "NOTE":
                                    o || (r.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(o)) {
                                        r.state = "NOTE";
                                        break
                                    }
                                    if (!o) continue;
                                    if (r.cue = new(r.vttjs.VTTCue || r.window.VTTCue)(0, 0, ""), r.state = "CUE", -1 === o.indexOf("--\x3e")) {
                                        r.cue.id = o;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        Ct(o, r.cue, r.regionList)
                                    } catch (t) {
                                        r.reportOrThrowError(t), r.cue = null, r.state = "BADCUE";
                                        continue
                                    }
                                    r.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var l = -1 !== o.indexOf("--\x3e");
                                    if (!o || l && (a = !0)) {
                                        r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID";
                                        continue
                                    }
                                    r.cue.text && (r.cue.text += "\n"), r.cue.text += o;
                                    continue;
                                case "BADCUE":
                                    o || (r.state = "ID");
                                    continue
                            }
                        }
                    } catch (t) {
                        r.reportOrThrowError(t), "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    var t = this;
                    try {
                        if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new bt(bt.Errors.BadSignature)
                    } catch (e) {
                        t.reportOrThrowError(e)
                    }
                    return t.onflush && t.onflush(), this
                }
            };
            var On = Dt,
                Mn = "auto",
                jn = {
                    "": !0,
                    lr: !0,
                    rl: !0
                },
                Dn = {
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                };
            It.prototype.getCueAsHTML = function() {
                return WebVTT.convertCueToDOMTree(window, this.text)
            };
            var Rn = It,
                Nn = {
                    "": !0,
                    up: !0
                },
                Ln = Ht,
                In = t(function(t) {
                    var e = t.exports = {
                        WebVTT: On,
                        VTTCue: Rn,
                        VTTRegion: Ln
                    };
                    se.vttjs = e, se.WebVTT = e.WebVTT;
                    var i = e.VTTCue,
                        n = e.VTTRegion,
                        r = se.VTTCue,
                        o = se.VTTRegion;
                    e.shim = function() {
                        se.VTTCue = i, se.VTTRegion = n
                    }, e.restore = function() {
                        se.VTTCue = r, se.VTTRegion = o
                    }, se.VTTCue || e.shim()
                }),
                Fn = function(t) {
                    function e() {
                        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        Le(this, e), i.reportTouchActivity = !1;
                        var r = Fe(this, t.call(this, null, i, n));
                        return r.hasStarted_ = !1, r.on("playing", function() {
                            this.hasStarted_ = !0
                        }), r.on("loadstart", function() {
                            this.hasStarted_ = !1
                        }), wn.names.forEach(function(t) {
                            var e = wn[t];
                            i && i[e.getterName] && (r[e.privateName] = i[e.getterName])
                        }), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(t) {
                            !1 === i["native" + t + "Tracks"] && (r["featuresNative" + t + "Tracks"] = !1)
                        }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new wn.text.ListClass, r.initTrackListeners(), i.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
                    }
                    return Ie(e, t), e.prototype.manualProgressOn = function() {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, e.prototype.manualProgressOff = function() {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, e.prototype.trackProgress = function(t) {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(ci(this, function() {
                            var t = this.bufferedPercent();
                            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                        }), 500)
                    }, e.prototype.onDurationChange = function(t) {
                        this.duration_ = this.duration()
                    }, e.prototype.buffered = function() {
                        return rt(0, 0)
                    }, e.prototype.bufferedPercent = function() {
                        return ot(this.buffered(), this.duration_)
                    }, e.prototype.stopTrackingProgress = function() {
                        this.clearInterval(this.progressInterval)
                    }, e.prototype.manualTimeUpdatesOn = function() {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.manualTimeUpdatesOff = function() {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.trackCurrentTime = function() {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, e.prototype.stopTrackingCurrentTime = function() {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.dispose = function() {
                        this.clearTracks(Tn.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                    }, e.prototype.clearTracks = function(t) {
                        var e = this;
                        t = [].concat(t), t.forEach(function(t) {
                            for (var i = e[t + "Tracks"]() || [], n = i.length; n--;) {
                                var r = i[n];
                                "text" === t && e.removeRemoteTextTrack(r), i.removeTrack(r)
                            }
                        })
                    }, e.prototype.cleanupAutoTextTracks = function() {
                        for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
                            var i = t[e];
                            this.removeRemoteTextTrack(i)
                        }
                    }, e.prototype.reset = function() {}, e.prototype.error = function(t) {
                        return void 0 !== t && (this.error_ = new st(t), this.trigger("error")), this.error_
                    }, e.prototype.played = function() {
                        return this.hasStarted_ ? rt(0, 0) : rt()
                    }, e.prototype.setCurrentTime = function() {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.initTrackListeners = function() {
                        var t = this;
                        Tn.names.forEach(function(e) {
                            var i = Tn[e],
                                n = function() {
                                    t.trigger(e + "trackchange")
                                },
                                r = t[i.getterName]();
                            r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), t.on("dispose", function() {
                                r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                            })
                        })
                    }, e.prototype.addWebVttScript_ = function() {
                        var t = this;
                        if (!se.WebVTT)
                            if (he.body.contains(this.el())) {
                                if (!this.options_["vtt.js"] && s(In) && Object.keys(In).length > 0) return void this.trigger("vttjsloaded");
                                var e = he.createElement("script");
                                e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", e.onload = function() {
                                    t.trigger("vttjsloaded")
                                }, e.onerror = function() {
                                    t.trigger("vttjserror")
                                }, this.on("dispose", function() {
                                    e.onload = null, e.onerror = null
                                }), se.WebVTT = !0, this.el().parentNode.appendChild(e)
                            } else this.ready(this.addWebVttScript_)
                    }, e.prototype.emulateTextTracks = function() {
                        var t = this,
                            e = this.textTracks(),
                            i = this.remoteTextTracks(),
                            n = function(t) {
                                return e.addTrack(t.track)
                            },
                            r = function(t) {
                                return e.removeTrack(t.track)
                            };
                        i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_();
                        var o = function() {
                                return t.trigger("texttrackchange")
                            },
                            s = function() {
                                o();
                                for (var t = 0; t < e.length; t++) {
                                    var i = e[t];
                                    i.removeEventListener("cuechange", o), "showing" === i.mode && i.addEventListener("cuechange", o)
                                }
                            };
                        s(), e.addEventListener("change", s), e.addEventListener("addtrack", s), e.addEventListener("removetrack", s), this.on("dispose", function() {
                            i.off("addtrack", n), i.off("removetrack", r), e.removeEventListener("change", s), e.removeEventListener("addtrack", s), e.removeEventListener("removetrack", s);
                            for (var t = 0; t < e.length; t++) {
                                e[t].removeEventListener("cuechange", o)
                            }
                        })
                    }, e.prototype.addTextTrack = function(t, e, i) {
                        if (!t) throw new Error("TextTrack kind is required but was not provided");
                        return Xt(this, t, e, i)
                    }, e.prototype.createRemoteTextTrack = function(t) {
                        var e = tt(t, {
                            tech: this
                        });
                        return new xn.remoteTextEl.TrackClass(e)
                    }, e.prototype.addRemoteTextTrack = function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = arguments[1],
                            n = this.createRemoteTextTrack(e);
                        return !0 !== i && !1 !== i && (We.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== i && this.ready(function() {
                            return t.autoRemoteTextTracks_.addTrack(n.track)
                        }), n
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                        this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
                    }, e.prototype.getVideoPlaybackQuality = function() {
                        return {}
                    }, e.prototype.setPoster = function() {}, e.prototype.playsinline = function() {}, e.prototype.setPlaysinline = function() {}, e.prototype.canPlayType = function() {
                        return ""
                    }, e.canPlayType = function() {
                        return ""
                    }, e.canPlaySource = function(t, i) {
                        return e.canPlayType(t.type)
                    }, e.isTech = function(t) {
                        return t.prototype instanceof e || t instanceof e || t === e
                    }, e.registerTech = function(t, i) {
                        if (e.techs_ || (e.techs_ = {}), !e.isTech(i)) throw new Error("Tech " + t + " must be a Tech");
                        if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                        if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                        return t = J(t), e.techs_[t] = i, "Tech" !== t && e.defaultTechOrder_.push(t), i
                    }, e.getTech = function(t) {
                        if (t) return t = J(t), e.techs_ && e.techs_[t] ? e.techs_[t] : se && se.videojs && se.videojs[t] ? (We.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), se.videojs[t]) : void 0
                    }, e
                }(Ti);
            wn.names.forEach(function(t) {
                var e = wn[t];
                Fn.prototype[e.getterName] = function() {
                    return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
                }
            }), Fn.prototype.featuresVolumeControl = !0, Fn.prototype.featuresFullscreenResize = !1, Fn.prototype.featuresPlaybackRate = !1, Fn.prototype.featuresProgressEvents = !1, Fn.prototype.featuresTimeupdateEvents = !1, Fn.prototype.featuresNativeTextTracks = !1, Fn.withSourceHandlers = function(t) {
                t.registerSourceHandler = function(e, i) {
                    var n = t.sourceHandlers;
                    n || (n = t.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, e)
                }, t.canPlayType = function(e) {
                    for (var i = t.sourceHandlers || [], n = void 0, r = 0; r < i.length; r++)
                        if (n = i[r].canPlayType(e)) return n;
                    return ""
                }, t.selectSourceHandler = function(e, i) {
                    for (var n = t.sourceHandlers || [], r = 0; r < n.length; r++)
                        if (n[r].canHandleSource(e, i)) return n[r];
                    return null
                }, t.canPlaySource = function(e, i) {
                    var n = t.selectSourceHandler(e, i);
                    return n ? n.canHandleSource(e, i) : ""
                }, ["seekable", "duration"].forEach(function(t) {
                    var e = this[t];
                    "function" == typeof e && (this[t] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                    })
                }, t.prototype), t.prototype.setSource = function(e) {
                    var i = t.selectSourceHandler(e, this.options_);
                    i || (t.nativeSourceHandler ? i = t.nativeSourceHandler : We.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = i.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
                }, t.prototype.disposeSourceHandler = function() {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, Ti.registerComponent("Tech", Fn), Fn.registerTech("Tech", Fn), Fn.defaultTechOrder_ = [];
            var Bn = {},
                Hn = {
                    buffered: 1,
                    currentTime: 1,
                    duration: 1,
                    seekable: 1,
                    played: 1
                },
                Xn = {
                    setCurrentTime: 1
                },
                zn = function t(e) {
                    if (Array.isArray(e)) {
                        var i = [];
                        e.forEach(function(e) {
                            e = t(e), Array.isArray(e) ? i = i.concat(e) : o(e) && i.push(e)
                        }), e = i
                    } else e = "string" == typeof e && e.trim() ? [{
                        src: e
                    }] : o(e) && "string" == typeof e.src && e.src && e.src.trim() ? [e] : [];
                    return e
                },
                qn = function(t) {
                    function e(i, n, r) {
                        Le(this, e);
                        var o = tt({
                                createEl: !1
                            }, n),
                            s = Fe(this, t.call(this, i, o, r));
                        if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) i.src(n.playerOptions.sources);
                        else
                            for (var a = 0, l = n.playerOptions.techOrder; a < l.length; a++) {
                                var c = J(l[a]),
                                    u = Fn.getTech(c);
                                if (c || (u = Ti.getComponent(c)), u && u.isSupported()) {
                                    i.loadTech_(c);
                                    break
                                }
                            }
                        return s
                    }
                    return Ie(e, t), e
                }(Ti);
            Ti.registerComponent("MediaLoader", qn);
            var Yn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.emitTapEvents(), r.enable(), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i = r({
                        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                        className: this.buildCSSClass(),
                        tabIndex: 0
                    }, i), "button" === e && We.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = r({
                        role: "button",
                        "aria-live": "polite"
                    }, n), this.tabIndex_ = i.tabIndex;
                    var o = t.prototype.createEl.call(this, e, i, n);
                    return this.createControlTextEl(o), o
                }, e.prototype.createControlTextEl = function(t) {
                    return this.controlTextEl_ = v("span", {
                        className: "vjs-control-text"
                    }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
                }, e.prototype.controlText = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                    if (!t) return this.controlText_ || "Need Text";
                    var i = this.localize(t);
                    this.controlText_ = t, g(this.controlTextEl_, i), this.nonIconControl || e.setAttribute("title", i)
                }, e.prototype.buildCSSClass = function() {
                    return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.enable = function() {
                    this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
                }, e.prototype.disable = function() {
                    this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
                }, e.prototype.handleClick = function(t) {}, e.prototype.handleFocus = function(t) {
                    V(he, "keydown", ci(this, this.handleKeyPress))
                }, e.prototype.handleKeyPress = function(e) {
                    32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
                }, e.prototype.handleBlur = function(t) {
                    W(he, "keydown", ci(this, this.handleKeyPress))
                }, e
            }(Ti);
            Ti.registerComponent("ClickableComponent", Yn);
            var Vn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.update(), i.on("posterchange", ci(r, r.update)), r
                }
                return Ie(e, t), e.prototype.dispose = function() {
                    this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                }, e.prototype.createEl = function() {
                    var t = v("div", {
                        className: "vjs-poster",
                        tabIndex: -1
                    });
                    return De || (this.fallbackImg_ = v("img"), t.appendChild(this.fallbackImg_)), t
                }, e.prototype.update = function(t) {
                    var e = this.player().poster();
                    this.setSrc(e), e ? this.show() : this.hide()
                }, e.prototype.setSrc = function(t) {
                    if (this.fallbackImg_) this.fallbackImg_.src = t;
                    else {
                        var e = "";
                        t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                    }
                }, e.prototype.handleClick = function(t) {
                    this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
                }, e
            }(Yn);
            Ti.registerComponent("PosterImage", Vn);
            var Wn = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                Un = function(t) {
                    function e(i, n, r) {
                        Le(this, e);
                        var o = Fe(this, t.call(this, i, n, r));
                        return i.on("loadstart", ci(o, o.toggleDisplay)), i.on("texttrackchange", ci(o, o.updateDisplay)), i.on("loadstart", ci(o, o.preselectTrack)), i.ready(ci(o, function() {
                            if (i.tech_ && i.tech_.featuresNativeTextTracks) return void this.hide();
                            i.on("fullscreenchange", ci(this, this.updateDisplay));
                            for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                            this.preselectTrack()
                        })), o
                    }
                    return Ie(e, t), e.prototype.preselectTrack = function() {
                        for (var t = {
                            captions: 1,
                            subtitles: 1
                        }, e = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, n = void 0, r = void 0, o = void 0, s = 0; s < e.length; s++) {
                            var a = e[s];
                            i && i.enabled && i.language === a.language ? a.kind === i.kind ? o = a : o || (o = a) : i && !i.enabled ? (o = null, n = null, r = null) : a.default && ("descriptions" !== a.kind || n ? a.kind in t && !r && (r = a) : n = a)
                        }
                        o ? o.mode = "showing" : r ? r.mode = "showing" : n && (n.mode = "showing")
                    }, e.prototype.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        }, {
                            "aria-live": "off",
                            "aria-atomic": "true"
                        })
                    }, e.prototype.clearDisplay = function() {
                        "function" == typeof se.WebVTT && se.WebVTT.processCues(se, [], this.el_)
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.textTracks();
                        this.clearDisplay();
                        for (var e = null, i = null, n = t.length; n--;) {
                            var r = t[n];
                            "showing" === r.mode && ("descriptions" === r.kind ? e = r : i = r)
                        }
                        i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
                    }, e.prototype.updateForTrack = function(t) {
                        if ("function" == typeof se.WebVTT && t.activeCues) {
                            for (var e = this.player_.textTrackSettings.getValues(), i = [], n = 0; n < t.activeCues.length; n++) i.push(t.activeCues[n]);
                            se.WebVTT.processCues(se, i, this.el_);
                            for (var r = i.length; r--;) {
                                var o = i[r];
                                if (o) {
                                    var s = o.displayState;
                                    if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && Kt(s.firstChild, "color", Gt(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && Kt(s.firstChild, "backgroundColor", Gt(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? Kt(s, "backgroundColor", Gt(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), e.fontPercent && 1 !== e.fontPercent) {
                                        var a = se.parseFloat(s.style.fontSize);
                                        s.style.fontSize = a * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                                    }
                                    e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Wn[e.fontFamily])
                                }
                            }
                        }
                    }, e
                }(Ti);
            Ti.registerComponent("TextTrackDisplay", Un);
            var $n = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-loading-spinner",
                        dir: "ltr"
                    })
                }, e
            }(Ti);
            Ti.registerComponent("LoadingSpinner", $n);
            var Gn = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t = "button", e = r({
                        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                        className: this.buildCSSClass()
                    }, e), i = r({
                        type: "button",
                        "aria-live": "polite"
                    }, i);
                    var n = Ti.prototype.createEl.call(this, t, e, i);
                    return this.createControlTextEl(n), n
                }, e.prototype.addChild = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = this.constructor.name;
                    return We.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Ti.prototype.addChild.call(this, t, e)
                }, e.prototype.enable = function() {
                    t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                }, e.prototype.disable = function() {
                    t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                }, e.prototype.handleKeyPress = function(e) {
                    32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
                }, e
            }(Yn);
            Ti.registerComponent("Button", Gn);
            var Kn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.mouseused_ = !1, r.on("mousedown", r.handleMouseDown), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-big-play-button"
                }, e.prototype.handleClick = function(t) {
                    var e = this.player_.play();
                    if (!(this.mouseused_ && t.clientX && t.clientY)) {
                        var i = this.player_.getChild("controlBar"),
                            n = i && i.getChild("playToggle");
                        if (!n) return void this.player_.focus();
                        var r = function() {
                            return n.focus()
                        };
                        if (e && e.then) {
                            var o = function() {};
                            e.then(r, o)
                        } else this.setTimeout(r, 1)
                    }
                }, e.prototype.handleKeyPress = function(e) {
                    this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
                }, e.prototype.handleMouseDown = function(t) {
                    this.mouseused_ = !0
                }, e
            }(Gn);
            Kn.prototype.controlText_ = "Play Video", Ti.registerComponent("BigPlayButton", Kn);
            var Qn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.controlText(n && n.controlText || r.localize("Close")), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function(t) {
                    this.trigger({
                        type: "close",
                        bubbles: !1
                    })
                }, e
            }(Gn);
            Ti.registerComponent("CloseButton", Qn);
            var Jn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "play", r.handlePlay), r.on(i, "pause", r.handlePause), r.on(i, "ended", r.handleEnded), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function(t) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, e.prototype.handleSeeked = function(t) {
                    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
                }, e.prototype.handlePlay = function(t) {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                }, e.prototype.handlePause = function(t) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                }, e.prototype.handleEnded = function(t) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
                }, e
            }(Gn);
            Jn.prototype.controlText_ = "Play", Ti.registerComponent("PlayToggle", Jn);
            var Zn = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.throttledUpdateContent = ui(ci(r, r.updateContent), 25), r.on(i, "timeupdate", r.throttledUpdateContent), r
                }
                return Ie(e, t), e.prototype.createEl = function(e) {
                    var i = this.buildCSSClass(),
                        n = t.prototype.createEl.call(this, "div", {
                            className: i + " vjs-time-control vjs-control"
                        });
                    return this.contentEl_ = v("div", {
                        className: i + "-display"
                    }, {
                        "aria-live": "off"
                    }, v("span", {
                        className: "vjs-control-text",
                        textContent: this.localize(this.controlText_)
                    })), this.updateTextNode_(), n.appendChild(this.contentEl_), n
                }, e.prototype.updateTextNode_ = function() {
                    if (this.contentEl_) {
                        for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                        this.textNode_ = he.createTextNode(this.formattedTime_ || "0:00"), this.contentEl_.appendChild(this.textNode_)
                    }
                }, e.prototype.formatTime_ = function(t) {
                    return Qt(t)
                }, e.prototype.updateFormattedTime_ = function(t) {
                    var e = this.formatTime_(t);
                    e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
                }, e.prototype.updateContent = function(t) {}, e
            }(Ti);
            Zn.prototype.controlText_ = "Time", Ti.registerComponent("TimeDisplay", Zn);
            var tr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "ended", r.handleEnded), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-current-time"
                }, e.prototype.updateContent = function(t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.updateFormattedTime_(e)
                }, e.prototype.handleEnded = function(t) {
                    this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
                }, e
            }(Zn);
            tr.prototype.controlText_ = "Current Time", Ti.registerComponent("CurrentTimeDisplay", tr);
            var er = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "durationchange", r.updateContent), r.on(i, "loadedmetadata", r.throttledUpdateContent), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-duration"
                }, e.prototype.updateContent = function(t) {
                    var e = this.player_.duration();
                    e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
                }, e
            }(Zn);
            er.prototype.controlText_ = "Duration Time", Ti.registerComponent("DurationDisplay", er);
            var ir = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-time-control vjs-time-divider",
                        innerHTML: "<div><span>/</span></div>"
                    })
                }, e
            }(Ti);
            Ti.registerComponent("TimeDivider", ir);
            var nr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "durationchange", r.throttledUpdateContent), r.on(i, "ended", r.handleEnded), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-remaining-time"
                }, e.prototype.formatTime_ = function(e) {
                    return "-" + t.prototype.formatTime_.call(this, e)
                }, e.prototype.updateContent = function(t) {
                    this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
                }, e.prototype.handleEnded = function(t) {
                    this.player_.duration() && this.updateFormattedTime_(0)
                }, e
            }(Zn);
            nr.prototype.controlText_ = "Remaining Time", Ti.registerComponent("RemainingTimeDisplay", nr);
            var rr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    var e = t.prototype.createEl.call(this, "div", {
                        className: "vjs-live-control vjs-control"
                    });
                    return this.contentEl_ = v("div", {
                        className: "vjs-live-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                    }, {
                        "aria-live": "off"
                    }), e.appendChild(this.contentEl_), e
                }, e.prototype.updateShowing = function(t) {
                    this.player().duration() === 1 / 0 ? this.show() : this.hide()
                }, e
            }(Ti);
            Ti.registerComponent("LiveDisplay", rr);
            var or = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.bar = r.getChild(r.options_.barName), r.vertical(!!r.options_.vertical), r.enable(), r
                }
                return Ie(e, t), e.prototype.enabled = function() {
                    return this.enabled_
                }, e.prototype.enable = function() {
                    this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                }, e.prototype.disable = function() {
                    if (this.enabled()) {
                        var t = this.bar.el_.ownerDocument;
                        this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                    }
                }, e.prototype.createEl = function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return i.className = i.className + " vjs-slider", i = r({
                        tabIndex: 0
                    }, i), n = r({
                        role: "slider",
                        "aria-valuenow": 0,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        tabIndex: 0
                    }, n), t.prototype.createEl.call(this, e, i, n)
                }, e.prototype.handleMouseDown = function(t) {
                    var e = this.bar.el_.ownerDocument;
                    t.preventDefault(), P(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
                }, e.prototype.handleMouseMove = function(t) {}, e.prototype.handleMouseUp = function() {
                    var t = this.bar.el_.ownerDocument;
                    A(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
                }, e.prototype.update = function() {
                    if (this.el_) {
                        var t = this.getPercent(),
                            e = this.bar;
                        if (e) {
                            ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                            var i = (100 * t).toFixed(2) + "%",
                                n = e.el().style;
                            return this.vertical() ? n.height = i : n.width = i, t
                        }
                    }
                }, e.prototype.calculateDistance = function(t) {
                    var e = j(this.el_, t);
                    return this.vertical() ? e.y : e.x
                }, e.prototype.handleFocus = function() {
                    this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, e.prototype.handleKeyPress = function(t) {
                    37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
                }, e.prototype.handleBlur = function() {
                    this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, e.prototype.handleClick = function(t) {
                    t.stopImmediatePropagation(), t.preventDefault()
                }, e.prototype.vertical = function(t) {
                    if (void 0 === t) return this.vertical_ || !1;
                    this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
                }, e
            }(Ti);
            Ti.registerComponent("Slider", or);
            var sr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.partEls_ = [], r.on(i, "progress", r.update), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-load-progress",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                    })
                }, e.prototype.update = function(t) {
                    var e = this.player_.buffered(),
                        i = this.player_.duration(),
                        n = this.player_.bufferedEnd(),
                        r = this.partEls_,
                        o = function(t, e) {
                            var i = t / e || 0;
                            return 100 * (i >= 1 ? 1 : i) + "%"
                        };
                    this.el_.style.width = o(n, i);
                    for (var s = 0; s < e.length; s++) {
                        var a = e.start(s),
                            l = e.end(s),
                            c = r[s];
                        c || (c = this.el_.appendChild(v()), r[s] = c), c.style.left = o(a, n), c.style.width = o(l - a, n)
                    }
                    for (var u = r.length; u > e.length; u--) this.el_.removeChild(r[u - 1]);
                    r.length = e.length
                }, e
            }(Ti);
            Ti.registerComponent("LoadProgressBar", sr);
            var ar = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-time-tooltip"
                    })
                }, e.prototype.update = function(t, e, i) {
                    var n = O(this.el_),
                        r = O(this.player_.el()),
                        o = t.width * e;
                    if (r && n) {
                        var s = t.left - r.left + o,
                            a = t.width - o + (r.right - t.right),
                            l = n.width / 2;
                        s < l ? l += l - s : a < l && (l = a), l < 0 ? l = 0 : l > n.width && (l = n.width), this.el_.style.right = "-" + l + "px", g(this.el_, i)
                    }
                }, e
            }(Ti);
            Ti.registerComponent("TimeTooltip", ar);
            var lr = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-play-progress vjs-slider-bar",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                    })
                }, e.prototype.update = function(t, e) {
                    var i = this;
                    this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                        var n = i.player_.scrubbing() ? i.player_.getCache().currentTime : i.player_.currentTime(),
                            r = Qt(n, i.player_.duration()),
                            o = i.getChild("timeTooltip");
                        o && o.update(t, e, r)
                    })
                }, e
            }(Ti);
            lr.prototype.options_ = {
                children: []
            }, Ae && !(Ae > 8) || ye || be || lr.prototype.options_.children.push("timeTooltip"), Ti.registerComponent("PlayProgressBar", lr);
            var cr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.update = ui(ci(r, r.update), 25), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-mouse-display"
                    })
                }, e.prototype.update = function(t, e) {
                    var i = this;
                    this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                        var n = i.player_.duration(),
                            r = Qt(e * n, n);
                        i.el_.style.left = t.width * e + "px", i.getChild("timeTooltip").update(t, e, r)
                    })
                }, e
            }(Ti);
            cr.prototype.options_ = {
                children: ["timeTooltip"]
            }, Ti.registerComponent("MouseTimeDisplay", cr);
            var ur = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.update = ui(ci(r, r.update), 50), r.on(i, "timeupdate", r.update), r.on(i, "ended", r.handleEnded), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": this.localize("Progress Bar")
                    })
                }, e.prototype.update_ = function(t, e) {
                    var i = this.player_.duration();
                    this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Qt(t, i), Qt(i, i)], "{1} of {2}")), this.bar.update(O(this.el_), e)
                }, e.prototype.update = function(e) {
                    var i = t.prototype.update.call(this);
                    return this.update_(this.getCurrentTime_(), i), i
                }, e.prototype.getCurrentTime_ = function() {
                    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
                }, e.prototype.handleEnded = function(t) {
                    this.update_(this.player_.duration(), 1)
                }, e.prototype.getPercent = function() {
                    var t = this.getCurrentTime_() / this.player_.duration();
                    return t >= 1 ? 1 : t
                }, e.prototype.handleMouseDown = function(e) {
                    this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e)
                }, e.prototype.handleMouseMove = function(t) {
                    var e = this.calculateDistance(t) * this.player_.duration();
                    e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                }, e.prototype.enable = function() {
                    t.prototype.enable.call(this);
                    var e = this.getChild("mouseTimeDisplay");
                    e && e.show()
                }, e.prototype.disable = function() {
                    t.prototype.disable.call(this);
                    var e = this.getChild("mouseTimeDisplay");
                    e && e.hide()
                }, e.prototype.handleMouseUp = function(e) {
                    t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, e.prototype.stepForward = function() {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, e.prototype.stepBack = function() {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, e.prototype.handleAction = function(t) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, e.prototype.handleKeyPress = function(e) {
                    32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
                }, e
            }(or);
            ur.prototype.options_ = {
                children: ["loadProgressBar", "playProgressBar"],
                barName: "playProgressBar"
            }, Ae && !(Ae > 8) || ye || be || ur.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), ur.prototype.playerEvent = "timeupdate", Ti.registerComponent("SeekBar", ur);
            var hr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.handleMouseMove = ui(ci(r, r.handleMouseMove), 25), r.throttledHandleMouseSeek = ui(ci(r, r.handleMouseSeek), 25), r.enable(), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }, e.prototype.handleMouseMove = function(t) {
                    var e = this.getChild("seekBar"),
                        i = e.getChild("mouseTimeDisplay"),
                        n = e.el(),
                        r = O(n),
                        o = j(n, t).x;
                    o > 1 ? o = 1 : o < 0 && (o = 0), i && i.update(r, o)
                }, e.prototype.handleMouseSeek = function(t) {
                    this.getChild("seekBar").handleMouseMove(t)
                }, e.prototype.enabled = function() {
                    return this.enabled_
                }, e.prototype.disable = function() {
                    this.children().forEach(function(t) {
                        return t.disable && t.disable()
                    }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
                }, e.prototype.enable = function() {
                    this.children().forEach(function(t) {
                        return t.enable && t.enable()
                    }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                }, e.prototype.handleMouseDown = function(t) {
                    var e = this.el_.ownerDocument;
                    this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
                }, e.prototype.handleMouseUp = function(t) {
                    var e = this.el_.ownerDocument;
                    this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
                }, e
            }(Ti);
            hr.prototype.options_ = {
                children: ["seekBar"]
            }, Ti.registerComponent("ProgressControl", hr);
            var pr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "fullscreenchange", r.handleFullscreenChange), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleFullscreenChange = function(t) {
                    this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                }, e.prototype.handleClick = function(t) {
                    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                }, e
            }(Gn);
            pr.prototype.controlText_ = "Fullscreen", Ti.registerComponent("FullscreenToggle", pr);
            var dr = function(t, e) {
                    e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", function() {
                        e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
                    })
                },
                fr = function(t) {
                    function e() {
                        return Le(this, e), Fe(this, t.apply(this, arguments))
                    }
                    return Ie(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, e
                }(Ti);
            Ti.registerComponent("VolumeLevel", fr);
            var mr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on("slideractive", r.updateLastVolume_), r.on(i, "volumechange", r.updateARIAAttributes), i.ready(function() {
                        return r.updateARIAAttributes()
                    }), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": this.localize("Volume Level"),
                        "aria-live": "polite"
                    })
                }, e.prototype.handleMouseMove = function(t) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(t))
                }, e.prototype.checkMuted = function() {
                    this.player_.muted() && this.player_.muted(!1)
                }, e.prototype.getPercent = function() {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, e.prototype.stepForward = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, e.prototype.stepBack = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, e.prototype.updateARIAAttributes = function(t) {
                    var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                    this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
                }, e.prototype.volumeAsPercentage_ = function() {
                    return Math.round(100 * this.player_.volume())
                }, e.prototype.updateLastVolume_ = function() {
                    var t = this,
                        e = this.player_.volume();
                    this.one("sliderinactive", function() {
                        0 === t.player_.volume() && t.player_.lastVolume_(e)
                    })
                }, e
            }(or);
            mr.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, mr.prototype.playerEvent = "volumechange", Ti.registerComponent("VolumeBar", mr);
            var vr = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Le(this, e), n.vertical = n.vertical || !1, (void 0 === n.volumeBar || s(n.volumeBar)) && (n.volumeBar = n.volumeBar || {}, n.volumeBar.vertical = n.vertical);
                    var r = Fe(this, t.call(this, i, n));
                    return dr(r, i), r.throttledHandleMouseMove = ui(ci(r, r.handleMouseMove), 25), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on(r.volumeBar, ["focus", "slideractive"], function() {
                        r.volumeBar.addClass("vjs-slider-active"), r.addClass("vjs-slider-active"), r.trigger("slideractive")
                    }), r.on(r.volumeBar, ["blur", "sliderinactive"], function() {
                        r.volumeBar.removeClass("vjs-slider-active"), r.removeClass("vjs-slider-active"), r.trigger("sliderinactive")
                    }), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    var e = "vjs-volume-horizontal";
                    return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-control vjs-control " + e
                    })
                }, e.prototype.handleMouseDown = function(t) {
                    var e = this.el_.ownerDocument;
                    this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
                }, e.prototype.handleMouseUp = function(t) {
                    var e = this.el_.ownerDocument;
                    this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
                }, e.prototype.handleMouseMove = function(t) {
                    this.volumeBar.handleMouseMove(t)
                }, e
            }(Ti);
            vr.prototype.options_ = {
                children: ["volumeBar"]
            }, Ti.registerComponent("VolumeControl", vr);
            var gr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return dr(r, i), r.on(i, ["loadstart", "volumechange"], r.update), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function(t) {
                    var e = this.player_.volume(),
                        i = this.player_.lastVolume_();
                    if (0 === e) {
                        var n = i < .1 ? .1 : i;
                        this.player_.volume(n), this.player_.muted(!1)
                    } else this.player_.muted(!this.player_.muted())
                }, e.prototype.update = function(t) {
                    this.updateIcon_(), this.updateControlText_()
                }, e.prototype.updateIcon_ = function() {
                    var t = this.player_.volume(),
                        e = 3;
                    0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
                    for (var i = 0; i < 4; i++) T(this.el_, "vjs-vol-" + i);
                    b(this.el_, "vjs-vol-" + e)
                }, e.prototype.updateControlText_ = function() {
                    var t = this.player_.muted() || 0 === this.player_.volume(),
                        e = t ? "Unmute" : "Mute";
                    this.controlText() !== e && this.controlText(e)
                }, e
            }(Gn);
            gr.prototype.controlText_ = "Mute", Ti.registerComponent("MuteToggle", gr);
            var yr = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Le(this, e), void 0 !== n.inline ? n.inline = n.inline : n.inline = !0, (void 0 === n.volumeControl || s(n.volumeControl)) && (n.volumeControl = n.volumeControl || {}, n.volumeControl.vertical = !n.inline);
                    var r = Fe(this, t.call(this, i, n));
                    return dr(r, i), r.on(r.volumeControl, ["slideractive"], r.sliderActive_), r.on(r.muteToggle, "focus", r.sliderActive_), r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_), r.on(r.muteToggle, "blur", r.sliderInactive_), r
                }
                return Ie(e, t), e.prototype.sliderActive_ = function() {
                    this.addClass("vjs-slider-active")
                }, e.prototype.sliderInactive_ = function() {
                    this.removeClass("vjs-slider-active")
                }, e.prototype.createEl = function() {
                    var e = "vjs-volume-panel-horizontal";
                    return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-panel vjs-control " + e
                    })
                }, e
            }(Ti);
            yr.prototype.options_ = {
                children: ["muteToggle", "volumeControl"]
            }, Ti.registerComponent("VolumePanel", yr);
            var _r = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return n && (r.menuButton_ = n.menuButton), r.focusedChild_ = -1, r.on("keydown", r.handleKeyPress), r
                }
                return Ie(e, t), e.prototype.addItem = function(t) {
                    this.addChild(t), t.on("click", ci(this, function(e) {
                        this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
                    }))
                }, e.prototype.createEl = function() {
                    var e = this.options_.contentElType || "ul";
                    this.contentEl_ = v(e, {
                        className: "vjs-menu-content"
                    }), this.contentEl_.setAttribute("role", "menu");
                    var i = t.prototype.createEl.call(this, "div", {
                        append: this.contentEl_,
                        className: "vjs-menu"
                    });
                    return i.appendChild(this.contentEl_), V(i, "click", function(t) {
                        t.preventDefault(), t.stopImmediatePropagation()
                    }), i
                }, e.prototype.handleKeyPress = function(t) {
                    37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
                }, e.prototype.stepForward = function() {
                    var t = 0;
                    void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
                }, e.prototype.stepBack = function() {
                    var t = 0;
                    void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
                }, e.prototype.focus = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = this.children().slice();
                    e.length && e[0].className && /vjs-menu-title/.test(e[0].className) && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
                }, e
            }(Ti);
            Ti.registerComponent("Menu", _r);
            var br = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    r.menuButton_ = new Gn(i, n), r.menuButton_.controlText(r.controlText_), r.menuButton_.el_.setAttribute("aria-haspopup", "true");
                    var o = Gn.prototype.buildCSSClass();
                    return r.menuButton_.el_.className = r.buildCSSClass() + " " + o, r.menuButton_.removeClass("vjs-control"), r.addChild(r.menuButton_), r.update(), r.enabled_ = !0, r.on(r.menuButton_, "tap", r.handleClick), r.on(r.menuButton_, "click", r.handleClick), r.on(r.menuButton_, "focus", r.handleFocus), r.on(r.menuButton_, "blur", r.handleBlur), r.on("keydown", r.handleSubmenuKeyPress), r
                }
                return Ie(e, t), e.prototype.update = function() {
                    var t = this.createMenu();
                    this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
                }, e.prototype.createMenu = function() {
                    var t = new _r(this.player_, {
                        menuButton: this
                    });
                    if (this.hideThreshold_ = 0, this.options_.title) {
                        var e = v("li", {
                            className: "vjs-menu-title",
                            innerHTML: J(this.options_.title),
                            tabIndex: -1
                        });
                        this.hideThreshold_ += 1, t.children_.unshift(e), y(e, t.contentEl())
                    }
                    if (this.items = this.createItems(), this.items)
                        for (var i = 0; i < this.items.length; i++) t.addItem(this.items[i]);
                    return t
                }, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: this.buildWrapperCSSClass()
                    }, {})
                }, e.prototype.buildWrapperCSSClass = function() {
                    var e = "vjs-menu-button";
                    return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Gn.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildCSSClass = function() {
                    var e = "vjs-menu-button";
                    return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.controlText = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
                    return this.menuButton_.controlText(t, e)
                }, e.prototype.handleClick = function(t) {
                    this.one(this.menu.contentEl(), "mouseleave", ci(this, function(t) {
                        this.unpressButton(), this.el_.blur()
                    })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                }, e.prototype.focus = function() {
                    this.menuButton_.focus()
                }, e.prototype.blur = function() {
                    this.menuButton_.blur()
                }, e.prototype.handleFocus = function() {
                    V(he, "keydown", ci(this, this.handleKeyPress))
                }, e.prototype.handleBlur = function() {
                    W(he, "keydown", ci(this, this.handleKeyPress))
                }, e.prototype.handleKeyPress = function(t) {
                    27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
                }, e.prototype.handleSubmenuKeyPress = function(t) {
                    27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
                }, e.prototype.pressButton = function() {
                    this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), ye || f() || this.menu.focus())
                }, e.prototype.unpressButton = function() {
                    this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                }, e.prototype.disable = function() {
                    this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                }, e.prototype.enable = function() {
                    this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                }, e
            }(Ti);
            Ti.registerComponent("MenuButton", br);
            var Tr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = n.tracks,
                        o = Fe(this, t.call(this, i, n));
                    if (o.items.length <= 1 && o.hide(), !r) return Fe(o);
                    var s = ci(o, o.update);
                    return r.addEventListener("removetrack", s), r.addEventListener("addtrack", s), o.player_.on("ready", s), o.player_.on("dispose", function() {
                        r.removeEventListener("removetrack", s), r.removeEventListener("addtrack", s)
                    }), o
                }
                return Ie(e, t), e
            }(br);
            Ti.registerComponent("TrackButton", Tr);
            var xr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.selectable = n.selectable, r.selected(n.selected), r.selectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitem"), r
                }
                return Ie(e, t), e.prototype.createEl = function(e, i, n) {
                    return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", r({
                        className: "vjs-menu-item",
                        innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                        tabIndex: -1
                    }, i), n)
                }, e.prototype.handleClick = function(t) {
                    this.selected(!0)
                }, e.prototype.selected = function(t) {
                    this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                }, e
            }(Yn);
            Ti.registerComponent("MenuItem", xr);
            var wr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = n.track,
                        o = i.textTracks();
                    n.label = r.label || r.language || "Unknown", n.selected = "showing" === r.mode;
                    var s = Fe(this, t.call(this, i, n));
                    s.track = r;
                    var a = ci(s, s.handleTracksChange),
                        l = ci(s, s.handleSelectedLanguageChange);
                    if (i.on(["loadstart", "texttrackchange"], a), o.addEventListener("change", a), o.addEventListener("selectedlanguagechange", l), s.on("dispose", function() {
                            o.removeEventListener("change", a), o.removeEventListener("selectedlanguagechange", l)
                        }), void 0 === o.onchange) {
                        var c = void 0;
                        s.on(["tap", "click"], function() {
                            if ("object" !== Ne(se.Event)) try {
                                c = new se.Event("change")
                            } catch (t) {}
                            c || (c = he.createEvent("Event"), c.initEvent("change", !0, !0)), o.dispatchEvent(c)
                        })
                    }
                    return s
                }
                return Ie(e, t), e.prototype.handleClick = function(e) {
                    var i = this.track.kind,
                        n = this.track.kinds,
                        r = this.player_.textTracks();
                    if (n || (n = [i]), t.prototype.handleClick.call(this, e), r)
                        for (var o = 0; o < r.length; o++) {
                            var s = r[o];
                            s === this.track && n.indexOf(s.kind) > -1 ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled")
                        }
                }, e.prototype.handleTracksChange = function(t) {
                    this.selected("showing" === this.track.mode)
                }, e.prototype.handleSelectedLanguageChange = function(t) {
                    if ("showing" === this.track.mode) {
                        var e = this.player_.cache_.selectedLanguage;
                        if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
                        this.player_.cache_.selectedLanguage = {
                            enabled: !0,
                            language: this.track.language,
                            kind: this.track.kind
                        }
                    }
                }, e
            }(xr);
            Ti.registerComponent("TextTrackMenuItem", wr);
            var Cr = function(t) {
                function e(i, n) {
                    Le(this, e), n.track = {
                        player: i,
                        kind: n.kind,
                        kinds: n.kinds,
                        default: !1,
                        mode: "disabled"
                    }, n.kinds || (n.kinds = [n.kind]), n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off", n.selectable = !0;
                    var r = Fe(this, t.call(this, i, n));
                    return r.selected(!0), r
                }
                return Ie(e, t), e.prototype.handleTracksChange = function(t) {
                    for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (this.options_.kinds.indexOf(o.kind) > -1 && "showing" === o.mode) {
                            i = !1;
                            break
                        }
                    }
                    this.selected(i)
                }, e.prototype.handleSelectedLanguageChange = function(t) {
                    for (var e = this.player().textTracks(), i = !0, n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (["captions", "descriptions", "subtitles"].indexOf(o.kind) > -1 && "showing" === o.mode) {
                            i = !1;
                            break
                        }
                    }
                    i && (this.player_.cache_.selectedLanguage = {
                        enabled: !1
                    })
                }, e
            }(wr);
            Ti.registerComponent("OffTextTrackMenuItem", Cr);
            var kr = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Le(this, e), n.tracks = i.textTracks(), Fe(this, t.call(this, i, n))
                }
                return Ie(e, t), e.prototype.createItems = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wr,
                        i = void 0;
                    this.label_ && (i = this.label_ + " off"), t.push(new Cr(this.player_, {
                        kinds: this.kinds_,
                        kind: this.kind_,
                        label: i
                    })), this.hideThreshold_ += 1;
                    var n = this.player_.textTracks();
                    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (this.kinds_.indexOf(o.kind) > -1) {
                            var s = new e(this.player_, {
                                track: o,
                                selectable: !0
                            });
                            s.addClass("vjs-" + o.kind + "-menu-item"), t.push(s)
                        }
                    }
                    return t
                }, e
            }(Tr);
            Ti.registerComponent("TextTrackButton", kr);
            var Sr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = n.track,
                        o = n.cue,
                        s = i.currentTime();
                    n.selectable = !0, n.label = o.text, n.selected = o.startTime <= s && s < o.endTime;
                    var a = Fe(this, t.call(this, i, n));
                    return a.track = r, a.cue = o, r.addEventListener("cuechange", ci(a, a.update)), a
                }
                return Ie(e, t), e.prototype.handleClick = function(e) {
                    t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                }, e.prototype.update = function(t) {
                    var e = this.cue,
                        i = this.player_.currentTime();
                    this.selected(e.startTime <= i && i < e.endTime)
                }, e
            }(xr);
            Ti.registerComponent("ChaptersTrackMenuItem", Sr);
            var Er = function(t) {
                function e(i, n, r) {
                    return Le(this, e), Fe(this, t.call(this, i, n, r))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e.prototype.update = function(e) {
                    this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
                }, e.prototype.setTrack = function(t) {
                    if (this.track_ !== t) {
                        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                            var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                        }
                        if (this.track_ = t, this.track_) {
                            this.track_.mode = "hidden";
                            var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            i && i.addEventListener("load", this.updateHandler_)
                        }
                    }
                }, e.prototype.findChaptersTrack = function() {
                    for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        if (i.kind === this.kind_) return i
                    }
                }, e.prototype.getMenuCaption = function() {
                    return this.track_ && this.track_.label ? this.track_.label : this.localize(J(this.kind_))
                }, e.prototype.createMenu = function() {
                    return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
                }, e.prototype.createItems = function() {
                    var t = [];
                    if (!this.track_) return t;
                    var e = this.track_.cues;
                    if (!e) return t;
                    for (var i = 0, n = e.length; i < n; i++) {
                        var r = e[i],
                            o = new Sr(this.player_, {
                                track: this.track_,
                                cue: r
                            });
                        t.push(o)
                    }
                    return t
                }, e
            }(kr);
            Er.prototype.kind_ = "chapters", Er.prototype.controlText_ = "Chapters", Ti.registerComponent("ChaptersButton", Er);
            var Pr = function(t) {
                function e(i, n, r) {
                    Le(this, e);
                    var o = Fe(this, t.call(this, i, n, r)),
                        s = i.textTracks(),
                        a = ci(o, o.handleTracksChange);
                    return s.addEventListener("change", a), o.on("dispose", function() {
                        s.removeEventListener("change", a)
                    }), o
                }
                return Ie(e, t), e.prototype.handleTracksChange = function(t) {
                    for (var e = this.player().textTracks(), i = !1, n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (o.kind !== this.kind_ && "showing" === o.mode) {
                            i = !0;
                            break
                        }
                    }
                    i ? this.disable() : this.enable()
                }, e.prototype.buildCSSClass = function() {
                    return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e
            }(kr);
            Pr.prototype.kind_ = "descriptions", Pr.prototype.controlText_ = "Descriptions", Ti.registerComponent("DescriptionsButton", Pr);
            var Ar = function(t) {
                function e(i, n, r) {
                    return Le(this, e), Fe(this, t.call(this, i, n, r))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e
            }(kr);
            Ar.prototype.kind_ = "subtitles", Ar.prototype.controlText_ = "Subtitles", Ti.registerComponent("SubtitlesButton", Ar);
            var Or = function(t) {
                function e(i, n) {
                    Le(this, e), n.track = {
                        player: i,
                        kind: n.kind,
                        label: n.kind + " settings",
                        selectable: !1,
                        default: !1,
                        mode: "disabled"
                    }, n.selectable = !1, n.name = "CaptionSettingsMenuItem";
                    var r = Fe(this, t.call(this, i, n));
                    return r.addClass("vjs-texttrack-settings"), r.controlText(", opens " + n.kind + " settings dialog"), r
                }
                return Ie(e, t), e.prototype.handleClick = function(t) {
                    this.player().getChild("textTrackSettings").open()
                }, e
            }(wr);
            Ti.registerComponent("CaptionSettingsMenuItem", Or);
            var Mr = function(t) {
                function e(i, n, r) {
                    return Le(this, e), Fe(this, t.call(this, i, n, r))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e.prototype.createItems = function() {
                    var e = [];
                    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new Or(this.player_, {
                        kind: this.kind_
                    })), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
                }, e
            }(kr);
            Mr.prototype.kind_ = "captions", Mr.prototype.controlText_ = "Captions", Ti.registerComponent("CaptionsButton", Mr);
            var jr = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function(e, i, n) {
                    var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                    return "captions" === this.options_.track.kind && (o += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), o += "</span>", t.prototype.createEl.call(this, e, r({
                        innerHTML: o
                    }, i), n)
                }, e
            }(wr);
            Ti.registerComponent("SubsCapsMenuItem", jr);
            var Dr = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"), r.menuButton_.controlText(J(r.label_)), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e.prototype.createItems = function() {
                    var e = [];
                    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (e.push(new Or(this.player_, {
                        kind: this.label_
                    })), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, jr)
                }, e
            }(kr);
            Dr.prototype.kinds_ = ["captions", "subtitles"], Dr.prototype.controlText_ = "Subtitles", Ti.registerComponent("SubsCapsButton", Dr);
            var Rr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = n.track,
                        o = i.audioTracks();
                    n.label = r.label || r.language || "Unknown", n.selected = r.enabled;
                    var s = Fe(this, t.call(this, i, n));
                    s.track = r;
                    var a = ci(s, s.handleTracksChange);
                    return o.addEventListener("change", a), s.on("dispose", function() {
                        o.removeEventListener("change", a)
                    }), s
                }
                return Ie(e, t), e.prototype.handleClick = function(e) {
                    var i = this.player_.audioTracks();
                    t.prototype.handleClick.call(this, e);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n];
                        r.enabled = r === this.track
                    }
                }, e.prototype.handleTracksChange = function(t) {
                    this.selected(this.track.enabled)
                }, e
            }(xr);
            Ti.registerComponent("AudioTrackMenuItem", Rr);
            var Nr = function(t) {
                function e(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Le(this, e), n.tracks = i.audioTracks(), Fe(this, t.call(this, i, n))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
                }, e.prototype.createItems = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.hideThreshold_ = 1;
                    for (var e = this.player_.audioTracks(), i = 0; i < e.length; i++) {
                        var n = e[i];
                        t.push(new Rr(this.player_, {
                            track: n,
                            selectable: !0
                        }))
                    }
                    return t
                }, e
            }(Tr);
            Nr.prototype.controlText_ = "Audio Track", Ti.registerComponent("AudioTrackButton", Nr);
            var Lr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = n.rate,
                        o = parseFloat(r, 10);
                    n.label = r, n.selected = 1 === o, n.selectable = !0;
                    var s = Fe(this, t.call(this, i, n));
                    return s.label = r, s.rate = o, s.on(i, "ratechange", s.update), s
                }
                return Ie(e, t), e.prototype.handleClick = function(e) {
                    t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                }, e.prototype.update = function(t) {
                    this.selected(this.player().playbackRate() === this.rate)
                }, e
            }(xr);
            Lr.prototype.contentElType = "button", Ti.registerComponent("PlaybackRateMenuItem", Lr);
            var Ir = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.updateVisibility(), r.updateLabel(), r.on(i, "loadstart", r.updateVisibility), r.on(i, "ratechange", r.updateLabel), r
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    var e = t.prototype.createEl.call(this);
                    return this.labelEl_ = v("div", {
                        className: "vjs-playback-rate-value",
                        innerHTML: "1x"
                    }), e.appendChild(this.labelEl_), e
                }, e.prototype.buildCSSClass = function() {
                    return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.buildWrapperCSSClass = function() {
                    return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
                }, e.prototype.createMenu = function() {
                    var t = new _r(this.player()),
                        e = this.playbackRates();
                    if (e)
                        for (var i = e.length - 1; i >= 0; i--) t.addChild(new Lr(this.player(), {
                            rate: e[i] + "x"
                        }));
                    return t
                }, e.prototype.updateARIAAttributes = function() {
                    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                }, e.prototype.handleClick = function(t) {
                    for (var e = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                        if (i[r] > e) {
                            n = i[r];
                            break
                        }
                    this.player().playbackRate(n)
                }, e.prototype.playbackRates = function() {
                    return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                }, e.prototype.playbackRateSupported = function() {
                    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                }, e.prototype.updateVisibility = function(t) {
                    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                }, e.prototype.updateLabel = function(t) {
                    this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                }, e
            }(br);
            Ir.prototype.controlText_ = "Playback Rate", Ti.registerComponent("PlaybackRateMenuButton", Ir);
            var Fr = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: this.buildCSSClass()
                    })
                }, e
            }(Ti);
            Ti.registerComponent("Spacer", Fr);
            var Br = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.createEl = function() {
                    var e = t.prototype.createEl.call(this, {
                        className: this.buildCSSClass()
                    });
                    return e.innerHTML = "&nbsp;", e
                }, e
            }(Fr);
            Ti.registerComponent("CustomControlSpacer", Br);
            var Hr = function(t) {
                function e() {
                    return Le(this, e), Fe(this, t.apply(this, arguments))
                }
                return Ie(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {
                        role: "group"
                    })
                }, e
            }(Ti);
            Hr.prototype.options_ = {
                children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
            }, Ti.registerComponent("ControlBar", Hr);
            var Xr = function(t) {
                function e(i, n) {
                    Le(this, e);
                    var r = Fe(this, t.call(this, i, n));
                    return r.on(i, "error", r.open), r
                }
                return Ie(e, t), e.prototype.buildCSSClass = function() {
                    return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.content = function() {
                    var t = this.player().error();
                    return t ? this.localize(t.message) : ""
                }, e
            }(Ni);
            Xr.prototype.options_ = tt(Ni.prototype.options_, {
                pauseOnOpen: !1,
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), Ti.registerComponent("ErrorDisplay", Xr);
            var zr = ["#000", "Black"],
                qr = ["#00F", "Blue"],
                Yr = ["#0FF", "Cyan"],
                Vr = ["#0F0", "Green"],
                Wr = ["#F0F", "Magenta"],
                Ur = ["#F00", "Red"],
                $r = ["#FFF", "White"],
                Gr = ["#FF0", "Yellow"],
                Kr = ["1", "Opaque"],
                Qr = ["0.5", "Semi-Transparent"],
                Jr = ["0", "Transparent"],
                Zr = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [zr, $r, Ur, Vr, qr, Gr, Wr, Yr]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Transparency",
                        options: [Kr, Qr, Jr]
                    },
                    color: {
                        selector: ".vjs-fg-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [$r, zr, Ur, Vr, qr, Gr, Wr, Yr]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [
                            ["none", "None"],
                            ["raised", "Raised"],
                            ["depressed", "Depressed"],
                            ["uniform", "Uniform"],
                            ["dropshadow", "Dropshadow"]
                        ]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [
                            ["proportionalSansSerif", "Proportional Sans-Serif"],
                            ["monospaceSansSerif", "Monospace Sans-Serif"],
                            ["proportionalSerif", "Proportional Serif"],
                            ["monospaceSerif", "Monospace Serif"],
                            ["casual", "Casual"],
                            ["script", "Script"],
                            ["small-caps", "Small Caps"]
                        ]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [
                            ["0.50", "50%"],
                            ["0.75", "75%"],
                            ["1.00", "100%"],
                            ["1.25", "125%"],
                            ["1.50", "150%"],
                            ["1.75", "175%"],
                            ["2.00", "200%"],
                            ["3.00", "300%"],
                            ["4.00", "400%"]
                        ],
                        default: 2,
                        parser: function(t) {
                            return "1.00" === t ? null : Number(t)
                        }
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Transparency",
                        options: [Kr, Qr]
                    },
                    windowColor: {
                        selector: ".vjs-window-color > select",
                        id: "captions-window-color-%s",
                        label: "Color"
                    },
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Transparency",
                        options: [Jr, Qr, Kr]
                    }
                };
            Zr.windowColor.options = Zr.backgroundColor.options;
            var to = function(t) {
                function e(n, r) {
                    Le(this, e), r.temporary = !1;
                    var o = Fe(this, t.call(this, n, r));
                    return o.updateDisplay = ci(o, o.updateDisplay), o.fill(), o.hasBeenOpened_ = o.hasBeenFilled_ = !0, o.endDialog = v("p", {
                        className: "vjs-control-text",
                        textContent: o.localize("End of dialog window.")
                    }), o.el().appendChild(o.endDialog), o.setDefaults(), void 0 === r.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function() {
                        o.saveSettings(), o.close()
                    }), o.on(o.$(".vjs-default-button"), "click", function() {
                        o.setDefaults(), o.updateDisplay()
                    }), i(Zr, function(t) {
                        o.on(o.$(t.selector), "change", o.updateDisplay)
                    }), o.options_.persistTextTrackSettings && o.restoreSettings(), o
                }
                return Ie(e, t), e.prototype.createElSelect_ = function(t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label",
                        r = Zr[t],
                        o = r.id.replace("%s", this.id_);
                    return ["<" + n + ' id="' + o + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(r.label), "</" + n + ">", '<select aria-labelledby="' + ("" !== i ? i + " " : "") + o + '">'].concat(r.options.map(function(t) {
                        var n = o + "-" + t[1];
                        return ['<option id="' + n + '" value="' + t[0] + '" ', 'aria-labelledby="' + ("" !== i ? i + " " : "") + o + " " + n + '">', e.localize(t[1]), "</option>"].join("")
                    })).concat("</select>").join("")
                }, e.prototype.createElFgColor_ = function() {
                    var t = "captions-text-legend-" + this.id_;
                    return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
                }, e.prototype.createElBgColor_ = function() {
                    var t = "captions-background-" + this.id_;
                    return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
                }, e.prototype.createElWinColor_ = function() {
                    var t = "captions-window-" + this.id_;
                    return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
                }, e.prototype.createElColors_ = function() {
                    return v("div", {
                        className: "vjs-track-settings-colors",
                        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                    })
                }, e.prototype.createElFont_ = function() {
                    return v("div", {
                        className: 'vjs-track-settings-font">',
                        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                    })
                }, e.prototype.createElControls_ = function() {
                    var t = this.localize("restore all settings to the default values");
                    return v("div", {
                        className: "vjs-track-settings-controls",
                        innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                    })
                }, e.prototype.content = function() {
                    return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
                }, e.prototype.label = function() {
                    return this.localize("Caption Settings Dialog")
                }, e.prototype.description = function() {
                    return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                }, e.prototype.buildCSSClass = function() {
                    return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
                }, e.prototype.getValues = function() {
                    var t = this;
                    return n(Zr, function(e, i, n) {
                        var r = Zt(t.$(i.selector), i.parser);
                        return void 0 !== r && (e[n] = r), e
                    }, {})
                }, e.prototype.setValues = function(t) {
                    var e = this;
                    i(Zr, function(i, n) {
                        te(e.$(i.selector), t[n], i.parser)
                    })
                }, e.prototype.setDefaults = function() {
                    var t = this;
                    i(Zr, function(e) {
                        var i = e.hasOwnProperty("default") ? e.default : 0;
                        t.$(e.selector).selectedIndex = i
                    })
                }, e.prototype.restoreSettings = function() {
                    var t = void 0;
                    try {
                        t = JSON.parse(se.localStorage.getItem("vjs-text-track-settings"))
                    } catch (t) {
                        We.warn(t)
                    }
                    t && this.setValues(t)
                }, e.prototype.saveSettings = function() {
                    if (this.options_.persistTextTrackSettings) {
                        var t = this.getValues();
                        try {
                            Object.keys(t).length ? se.localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : se.localStorage.removeItem("vjs-text-track-settings")
                        } catch (t) {
                            We.warn(t)
                        }
                    }
                }, e.prototype.updateDisplay = function() {
                    var t = this.player_.getChild("textTrackDisplay");
                    t && t.updateDisplay()
                }, e.prototype.conditionalBlur_ = function() {
                    this.previouslyActiveEl_ = null, this.off(he, "keydown", this.handleKeyDown);
                    var t = this.player_.controlBar,
                        e = t && t.subsCapsButton,
                        i = t && t.captionsButton;
                    e ? e.focus() : i && i.focus()
                }, e
            }(Ni);
            Ti.registerComponent("TextTrackSettings", to);
            var eo = Be(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                io = function(t) {
                    function e(i, n) {
                        Le(this, e);
                        var r = Fe(this, t.call(this, i, n)),
                            o = i.source,
                            s = !1;
                        if (o && (r.el_.currentSrc !== o.src || i.tag && 3 === i.tag.initNetworkState_) ? r.setSource(o) : r.handleLateInit_(r.el_), r.el_.hasChildNodes()) {
                            for (var a = r.el_.childNodes, l = a.length, c = []; l--;) {
                                var u = a[l];
                                "track" === u.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(u), r.remoteTextTracks().addTrack(u.track), r.textTracks().addTrack(u.track), s || r.el_.hasAttribute("crossorigin") || !Zi(u.src) || (s = !0)) : c.push(u))
                            }
                            for (var h = 0; h < c.length; h++) r.el_.removeChild(c[h])
                        }
                        return r.proxyNativeTracks_(), r.featuresNativeTextTracks && s && We.warn(Ue(eo)), r.restoreMetadataTracksInIOSNativePlayer_(), (je || ve || we) && !0 === i.nativeControlsForTouch && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
                    }
                    return Ie(e, t), e.prototype.dispose = function() {
                        e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                    }, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() {
                        var t = this.textTracks(),
                            e = void 0,
                            i = function() {
                                e = [];
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    "metadata" === n.kind && e.push({
                                        track: n,
                                        storedMode: n.mode
                                    })
                                }
                            };
                        i(), t.addEventListener("change", i);
                        var n = function i() {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                "disabled" === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                            }
                            t.removeEventListener("change", i)
                        };
                        this.on("webkitbeginfullscreen", function() {
                            t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n)
                        }), this.on("webkitendfullscreen", function() {
                            t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n)
                        })
                    }, e.prototype.proxyNativeTracks_ = function() {
                        var t = this;
                        Tn.names.forEach(function(e) {
                            var i = Tn[e],
                                n = t.el()[i.getterName],
                                r = t[i.getterName]();
                            if (t["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
                                var o = {
                                        change: function(t) {
                                            r.trigger({
                                                type: "change",
                                                target: r,
                                                currentTarget: r,
                                                srcElement: r
                                            })
                                        },
                                        addtrack: function(t) {
                                            r.addTrack(t.track)
                                        },
                                        removetrack: function(t) {
                                            r.removeTrack(t.track)
                                        }
                                    },
                                    s = function() {
                                        for (var t = [], e = 0; e < r.length; e++) {
                                            for (var i = !1, o = 0; o < n.length; o++)
                                                if (n[o] === r[e]) {
                                                    i = !0;
                                                    break
                                                }
                                            i || t.push(r[e])
                                        }
                                        for (; t.length;) r.removeTrack(t.shift())
                                    };
                                Object.keys(o).forEach(function(e) {
                                    var i = o[e];
                                    n.addEventListener(e, i), t.on("dispose", function(t) {
                                        return n.removeEventListener(e, i)
                                    })
                                }), t.on("loadstart", s), t.on("dispose", function(e) {
                                    return t.off("loadstart", s)
                                })
                            }
                        })
                    }, e.prototype.createEl = function() {
                        var t = this.options_.tag;
                        if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                            if (t) {
                                var i = t.cloneNode(!0);
                                t.parentNode && t.parentNode.insertBefore(i, t), e.disposeMediaElement(t), t = i
                            } else {
                                t = he.createElement("video");
                                var n = this.options_.tag && C(this.options_.tag),
                                    o = tt({}, n);
                                je && !0 === this.options_.nativeControlsForTouch || delete o.controls, w(t, r(o, {
                                    id: this.options_.techId,
                                    class: "vjs-tech"
                                }))
                            }
                            t.playerId = this.options_.playerId
                        }
                        void 0 !== this.options_.preload && S(t, "preload", this.options_.preload);
                        for (var s = ["loop", "muted", "playsinline", "autoplay"], a = s.length - 1; a >= 0; a--) {
                            var l = s[a],
                                c = this.options_[l];
                            void 0 !== c && (c ? S(t, l, l) : E(t, l), t[l] = c)
                        }
                        return t
                    }, e.prototype.handleLateInit_ = function(t) {
                        if (0 !== t.networkState && 3 !== t.networkState) {
                            if (0 === t.readyState) {
                                var e = !1,
                                    i = function() {
                                        e = !0
                                    };
                                this.on("loadstart", i);
                                var n = function() {
                                    e || this.trigger("loadstart")
                                };
                                return this.on("loadedmetadata", n), void this.ready(function() {
                                    this.off("loadstart", i), this.off("loadedmetadata", n), e || this.trigger("loadstart")
                                })
                            }
                            var r = ["loadstart"];
                            r.push("loadedmetadata"), t.readyState >= 2 && r.push("loadeddata"), t.readyState >= 3 && r.push("canplay"), t.readyState >= 4 && r.push("canplaythrough"), this.ready(function() {
                                r.forEach(function(t) {
                                    this.trigger(t)
                                }, this)
                            })
                        }
                    }, e.prototype.setCurrentTime = function(t) {
                        try {
                            this.el_.currentTime = t
                        } catch (t) {
                            We(t, "Video is not ready. (Video.js)")
                        }
                    }, e.prototype.duration = function() {
                        var t = this;
                        if (this.el_.duration === 1 / 0 && be && Se && 0 === this.el_.currentTime) {
                            var e = function e() {
                                t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                            };
                            return this.on("timeupdate", e), NaN
                        }
                        return this.el_.duration || NaN
                    }, e.prototype.width = function() {
                        return this.el_.offsetWidth
                    }, e.prototype.height = function() {
                        return this.el_.offsetHeight
                    }, e.prototype.proxyWebkitFullscreen_ = function() {
                        var t = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var e = function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                i = function() {
                                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                                        isFullscreen: !0
                                    }))
                                };
                            this.on("webkitbeginfullscreen", i), this.on("dispose", function() {
                                t.off("webkitbeginfullscreen", i), t.off("webkitendfullscreen", e)
                            })
                        }
                    }, e.prototype.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = se.navigator && se.navigator.userAgent || "";
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        var t = this.el_;
                        t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            t.pause(), t.webkitEnterFullScreen()
                        }, 0)) : t.webkitEnterFullScreen()
                    }, e.prototype.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, e.prototype.src = function(t) {
                        if (void 0 === t) return this.el_.src;
                        this.setSrc(t)
                    }, e.prototype.reset = function() {
                        e.resetMediaElement(this.el_)
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, e.prototype.setControls = function(t) {
                        this.el_.controls = !!t
                    }, e.prototype.addTextTrack = function(e, i, n) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, i, n) : t.prototype.addTextTrack.call(this, e, i, n)
                    }, e.prototype.createRemoteTextTrack = function(e) {
                        if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
                        var i = he.createElement("track");
                        return e.kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e.default && (i.default = e.default), e.id && (i.id = e.id), e.src && (i.src = e.src), i
                    }, e.prototype.addRemoteTextTrack = function(e, i) {
                        var n = t.prototype.addRemoteTextTrack.call(this, e, i);
                        return this.featuresNativeTextTracks && this.el().appendChild(n), n
                    }, e.prototype.removeRemoteTextTrack = function(e) {
                        if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks)
                            for (var i = this.$$("track"), n = i.length; n--;) e !== i[n] && e !== i[n].track || this.el().removeChild(i[n])
                    }, e.prototype.getVideoPlaybackQuality = function() {
                        if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                        var t = {};
                        return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), se.performance && "function" == typeof se.performance.now ? t.creationTime = se.performance.now() : se.performance && se.performance.timing && "number" == typeof se.performance.timing.navigationStart && (t.creationTime = se.Date.now() - se.performance.timing.navigationStart), t
                    }, e
                }(Fn);
            if (p()) {
                io.TEST_VID = he.createElement("video");
                var no = he.createElement("track");
                no.kind = "captions", no.srclang = "en", no.label = "English", io.TEST_VID.appendChild(no)
            }
            io.isSupported = function() {
                try {
                    io.TEST_VID.volume = .5
                } catch (t) {
                    return !1
                }
                return !(!io.TEST_VID || !io.TEST_VID.canPlayType)
            }, io.canPlayType = function(t) {
                return io.TEST_VID.canPlayType(t)
            }, io.canPlaySource = function(t, e) {
                return io.canPlayType(t.type)
            }, io.canControlVolume = function() {
                try {
                    var t = io.TEST_VID.volume;
                    return io.TEST_VID.volume = t / 2 + .1, t !== io.TEST_VID.volume
                } catch (t) {
                    return !1
                }
            }, io.canControlPlaybackRate = function() {
                if (be && Se && Ee < 58) return !1;
                try {
                    var t = io.TEST_VID.playbackRate;
                    return io.TEST_VID.playbackRate = t / 2 + .1, t !== io.TEST_VID.playbackRate
                } catch (t) {
                    return !1
                }
            }, io.supportsNativeTextTracks = function() {
                return Me
            }, io.supportsNativeVideoTracks = function() {
                return !(!io.TEST_VID || !io.TEST_VID.videoTracks)
            }, io.supportsNativeAudioTracks = function() {
                return !(!io.TEST_VID || !io.TEST_VID.audioTracks)
            }, io.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], io.prototype.featuresVolumeControl = io.canControlVolume(), io.prototype.featuresPlaybackRate = io.canControlPlaybackRate(), io.prototype.movingMediaElementInDOM = !ye, io.prototype.featuresFullscreenResize = !0, io.prototype.featuresProgressEvents = !0, io.prototype.featuresTimeupdateEvents = !0, io.prototype.featuresNativeTextTracks = io.supportsNativeTextTracks(), io.prototype.featuresNativeVideoTracks = io.supportsNativeVideoTracks(), io.prototype.featuresNativeAudioTracks = io.supportsNativeAudioTracks();
            var ro = io.TEST_VID && io.TEST_VID.constructor.prototype.canPlayType,
                oo = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                so = /^video\/mp4/i;
            io.patchCanPlayType = function() {
                Te >= 4 && !Ce ? io.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && oo.test(t) ? "maybe" : ro.call(this, t)
                } : xe && (io.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && so.test(t) ? "maybe" : ro.call(this, t)
                })
            }, io.unpatchCanPlayType = function() {
                var t = io.TEST_VID.constructor.prototype.canPlayType;
                return io.TEST_VID.constructor.prototype.canPlayType = ro, t
            }, io.patchCanPlayType(), io.disposeMediaElement = function(t) {
                if (t) {
                    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.removeAttribute("src"), "function" == typeof t.load && function() {
                        try {
                            t.load()
                        } catch (t) {}
                    }()
                }
            }, io.resetMediaElement = function(t) {
                if (t) {
                    for (var e = t.querySelectorAll("source"), i = e.length; i--;) t.removeChild(e[i]);
                    t.removeAttribute("src"), "function" == typeof t.load && function() {
                        try {
                            t.load()
                        } catch (t) {}
                    }()
                }
            }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(t) {
                io.prototype[t] = function() {
                    return this.el_[t] || this.el_.hasAttribute(t)
                }
            }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(t) {
                io.prototype["set" + J(t)] = function(e) {
                    this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
                }
            }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(t) {
                io.prototype[t] = function() {
                    return this.el_[t]
                }
            }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(t) {
                io.prototype["set" + J(t)] = function(e) {
                    this.el_[t] = e
                }
            }), ["pause", "load", "play"].forEach(function(t) {
                io.prototype[t] = function() {
                    return this.el_[t]()
                }
            }), Fn.withSourceHandlers(io), io.nativeSourceHandler = {}, io.nativeSourceHandler.canPlayType = function(t) {
                try {
                    return io.TEST_VID.canPlayType(t)
                } catch (t) {
                    return ""
                }
            }, io.nativeSourceHandler.canHandleSource = function(t, e) {
                if (t.type) return io.nativeSourceHandler.canPlayType(t.type);
                if (t.src) {
                    var i = Ji(t.src);
                    return io.nativeSourceHandler.canPlayType("video/" + i)
                }
                return ""
            }, io.nativeSourceHandler.handleSource = function(t, e, i) {
                e.setSrc(t.src)
            }, io.nativeSourceHandler.dispose = function() {}, io.registerSourceHandler(io.nativeSourceHandler), Fn.registerTech("Html5", io);
            var ao = Be(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
                lo = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange"],
                co = function(t) {
                    function e(i, n, o) {
                        if (Le(this, e), i.id = i.id || "vjs_video_" + F(), n = r(e.getTagSettings(i), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, !n.language)
                            if ("function" == typeof i.closest) {
                                var s = i.closest("[lang]");
                                s && (n.language = s.getAttribute("lang"))
                            } else
                                for (var a = i; a && 1 === a.nodeType;) {
                                    if (C(a).hasOwnProperty("lang")) {
                                        n.language = a.getAttribute("lang");
                                        break
                                    }
                                    a = a.parentNode
                                }
                        var l = Fe(this, t.call(this, null, n, o));
                        if (l.isReady_ = !1, l.hasStarted_ = !1, !l.options_ || !l.options_.techOrder || !l.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        if (l.tag = i, l.tagAttributes = i && C(i), l.language(l.options_.language), n.languages) {
                            var c = {};
                            Object.getOwnPropertyNames(n.languages).forEach(function(t) {
                                c[t.toLowerCase()] = n.languages[t]
                            }), l.languages_ = c
                        } else l.languages_ = e.prototype.options_.languages;
                        l.cache_ = {}, l.poster_ = n.poster || "", l.controls_ = !!n.controls, l.cache_.lastVolume = 1, i.controls = !1, l.scrubbing_ = !1, l.el_ = l.createEl(), K(l, {
                            eventBusKey: "el_"
                        });
                        var u = tt(l.options_);
                        if (n.plugins) {
                            var h = n.plugins;
                            Object.keys(h).forEach(function(t) {
                                if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                                this[t](h[t])
                            }, l)
                        }
                        l.options_.playerOptions = u, l.middleware_ = [], l.initChildren(), l.isAudio("audio" === i.nodeName.toLowerCase()), l.controls() ? l.addClass("vjs-controls-enabled") : l.addClass("vjs-controls-disabled"), l.el_.setAttribute("role", "region"), l.isAudio() ? l.el_.setAttribute("aria-label", l.localize("Audio Player")) : l.el_.setAttribute("aria-label", l.localize("Video Player")), l.isAudio() && l.addClass("vjs-audio"), l.flexNotSupported_() && l.addClass("vjs-no-flex"), ye || l.addClass("vjs-workinghover"), e.players[l.id_] = l;
                        var p = ne.split(".")[0];
                        return l.addClass("vjs-v" + p), l.userActive(!0), l.reportUserActivity(), l.listenForUserActivity_(), l.on("fullscreenchange", l.handleFullscreenChange_), l.on("stageclick", l.handleStageClick_), l.changingSrc_ = !1, l
                    }
                    return Ie(e, t), e.prototype.dispose = function() {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var e = this.tag,
                            i = void 0,
                            n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player");
                        i = this.el_ = n ? e.parentNode : t.prototype.createEl.call(this, "div"), e.setAttribute("tabindex", "-1"), e.removeAttribute("width"), e.removeAttribute("height");
                        var r = C(e);
                        if (Object.getOwnPropertyNames(r).forEach(function(t) {
                                "class" === t ? i.className += " " + r[t] : i.setAttribute(t, r[t])
                            }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = i.player = this, this.addClass("vjs-paused"), !0 !== se.VIDEOJS_NO_DYNAMIC_STYLE) {
                            this.styleEl_ = ai("vjs-styles-dimensions");
                            var o = Ge(".vjs-styles-defaults"),
                                s = Ge("head");
                            s.insertBefore(this.styleEl_, o ? o.nextSibling : s.firstChild)
                        }
                        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                        for (var a = e.getElementsByTagName("a"), l = 0; l < a.length; l++) {
                            var c = a.item(l);
                            b(c, "vjs-hidden"), c.setAttribute("hidden", "hidden")
                        }
                        return e.initNetworkState_ = e.networkState, e.parentNode && !n && e.parentNode.insertBefore(i, e), y(e, i), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = i, i
                    }, e.prototype.width = function(t) {
                        return this.dimension("width", t)
                    }, e.prototype.height = function(t) {
                        return this.dimension("height", t)
                    }, e.prototype.dimension = function(t, e) {
                        var i = t + "_";
                        if (void 0 === e) return this[i] || 0;
                        if ("" === e) return this[i] = void 0, void this.updateStyleEl_();
                        var n = parseFloat(e);
                        if (isNaN(n)) return void We.error('Improper value "' + e + '" supplied for for ' + t);
                        this[i] = n, this.updateStyleEl_()
                    }, e.prototype.fluid = function(t) {
                        if (void 0 === t) return !!this.fluid_;
                        this.fluid_ = !!t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                    }, e.prototype.aspectRatio = function(t) {
                        if (void 0 === t) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                    }, e.prototype.updateStyleEl_ = function() {
                        if (!0 === se.VIDEOJS_NO_DYNAMIC_STYLE) {
                            var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                i = this.tech_ && this.tech_.el();
                            return void(i && (t >= 0 && (i.width = t), e >= 0 && (i.height = e)))
                        }
                        var n = void 0,
                            r = void 0,
                            o = void 0,
                            s = void 0;
                        o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var a = o.split(":"),
                            l = a[1] / a[0];
                        n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, r = void 0 !== this.height_ ? this.height_ : n * l, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), li(this.styleEl_, "\n      ." + s + " {\n        width: " + n + "px;\n        height: " + r + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                    }, e.prototype.loadTech_ = function(t, e) {
                        var i = this;
                        this.tech_ && this.unloadTech_();
                        var n = J(t),
                            o = t.charAt(0).toLowerCase() + t.slice(1);
                        "Html5" !== n && this.tag && (Fn.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
                        var s = {
                            source: e,
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + n + "_api",
                            autoplay: this.options_.autoplay,
                            playsinline: this.options_.playsinline,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            playerElIngest: this.playerElIngest_ || !1,
                            "vtt.js": this.options_["vtt.js"]
                        };
                        wn.names.forEach(function(t) {
                            var e = wn[t];
                            s[e.getterName] = i[e.privateName]
                        }), r(s, this.options_[n]), r(s, this.options_[o]), r(s, this.options_[t.toLowerCase()]), this.tag && (s.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime);
                        var a = Fn.getTech(t);
                        if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                        this.tech_ = new a(s), this.tech_.ready(ci(this, this.handleTechReady_), !0), Di.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), lo.forEach(function(t) {
                            i.on(i.tech_, t, i["handleTech" + J(t) + "_"])
                        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || y(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, e.prototype.unloadTech_ = function() {
                        var t = this;
                        wn.names.forEach(function(e) {
                            var i = wn[e];
                            t[i.privateName] = t[i.getterName]()
                        }), this.textTracksJson_ = Di.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, e.prototype.tech = function(t) {
                        return void 0 === t && We.warn(Ue(ao)), this.tech_
                    }, e.prototype.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, e.prototype.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, e.prototype.handleTechReady_ = function() {
                        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                            delete this.tag.poster
                        } catch (t) {
                            We("deleting tag.poster throws in some browsers", t)
                        }
                    }, e.prototype.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, e.prototype.hasStarted = function(t) {
                        if (void 0 === t) return this.hasStarted_;
                        t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                    }, e.prototype.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, e.prototype.handleTechWaiting_ = function() {
                        var t = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                            return t.removeClass("vjs-waiting")
                        })
                    }, e.prototype.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, e.prototype.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, e.prototype.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, e.prototype.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, e.prototype.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, e.prototype.handleTechFirstPlay_ = function() {
                        this.options_.starttime && (We.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, e.prototype.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.prototype.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, e.prototype.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, e.prototype.handleTechClick_ = function(t) {
                        0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, e.prototype.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, e.prototype.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, e.prototype.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, e.prototype.handleTechTouchEnd_ = function(t) {
                        t.preventDefault()
                    }, e.prototype.handleFullscreenChange_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, e.prototype.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, e.prototype.handleTechFullscreenChange_ = function(t, e) {
                        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                    }, e.prototype.handleTechError_ = function() {
                        var t = this.tech_.error();
                        this.error(t)
                    }, e.prototype.handleTechTextData_ = function() {
                        var t = null;
                        arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
                    }, e.prototype.getCache = function() {
                        return this.cache_
                    }, e.prototype.techCall_ = function(t, e) {
                        this.ready(function() {
                            if (t in Xn) return Wt(this.middleware_, this.tech_, t, e);
                            try {
                                this.tech_ && this.tech_[t](e)
                            } catch (t) {
                                throw We(t), t
                            }
                        }, !0)
                    }, e.prototype.techGet_ = function(t) {
                        if (this.tech_ && this.tech_.isReady_) {
                            if (t in Hn) return Vt(this.middleware_, this.tech_, t);
                            try {
                                return this.tech_[t]()
                            } catch (e) {
                                if (void 0 === this.tech_[t]) throw We("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                                if ("TypeError" === e.name) throw We("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                                throw We(e), e
                            }
                        }
                    }, e.prototype.play = function() {
                        if (this.changingSrc_) this.ready(function() {
                            var t = this.techGet_("play");
                            void 0 !== t && "function" == typeof t.then && t.then(null, function(t) {})
                        });
                        else {
                            if (this.isReady_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                            this.ready(function() {
                                this.tech_.one("loadstart", function() {
                                    var t = this.play();
                                    void 0 !== t && "function" == typeof t.then && t.then(null, function(t) {})
                                })
                            })
                        }
                    }, e.prototype.pause = function() {
                        this.techCall_("pause")
                    }, e.prototype.paused = function() {
                        return !1 !== this.techGet_("paused")
                    }, e.prototype.played = function() {
                        return this.techGet_("played") || rt(0, 0)
                    }, e.prototype.scrubbing = function(t) {
                        if (void 0 === t) return this.scrubbing_;
                        this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                    }, e.prototype.currentTime = function(t) {
                        return void 0 !== t ? void this.techCall_("setCurrentTime", t) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, e.prototype.duration = function(t) {
                        if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                        t = parseFloat(t), t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
                    }, e.prototype.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, e.prototype.remainingTimeDisplay = function() {
                        return Math.floor(this.duration()) - Math.floor(this.currentTime())
                    }, e.prototype.buffered = function() {
                        var t = this.techGet_("buffered");
                        return t && t.length || (t = rt(0, 0)), t
                    }, e.prototype.bufferedPercent = function() {
                        return ot(this.buffered(), this.duration())
                    }, e.prototype.bufferedEnd = function() {
                        var t = this.buffered(),
                            e = this.duration(),
                            i = t.end(t.length - 1);
                        return i > e && (i = e), i
                    }, e.prototype.volume = function(t) {
                        var e = void 0;
                        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void(e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                    }, e.prototype.muted = function(t) {
                        return void 0 !== t ? void this.techCall_("setMuted", t) : this.techGet_("muted") || !1
                    }, e.prototype.defaultMuted = function(t) {
                        return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
                    }, e.prototype.lastVolume_ = function(t) {
                        return void 0 !== t && 0 !== t ? void(this.cache_.lastVolume = t) : this.cache_.lastVolume
                    }, e.prototype.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, e.prototype.isFullscreen = function(t) {
                        return void 0 !== t ? void(this.isFullscreen_ = !!t) : !!this.isFullscreen_
                    }, e.prototype.requestFullscreen = function() {
                        var t = xi;
                        this.isFullscreen(!0), t.requestFullscreen ? (V(he, t.fullscreenchange, ci(this, function e(i) {
                            this.isFullscreen(he[t.fullscreenElement]), !1 === this.isFullscreen() && W(he, t.fullscreenchange, e), this.trigger("fullscreenchange")
                        })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
                    }, e.prototype.exitFullscreen = function() {
                        var t = xi;
                        this.isFullscreen(!1), t.requestFullscreen ? he[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
                    }, e.prototype.enterFullWindow = function() {
                        this.isFullWindow = !0, this.docOrigOverflow = he.documentElement.style.overflow, V(he, "keydown", ci(this, this.fullWindowOnEscKey)), he.documentElement.style.overflow = "hidden", b(he.body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.prototype.fullWindowOnEscKey = function(t) {
                        27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                    }, e.prototype.exitFullWindow = function() {
                        this.isFullWindow = !1, W(he, "keydown", this.fullWindowOnEscKey), he.documentElement.style.overflow = this.docOrigOverflow, T(he.body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, e.prototype.canPlayType = function(t) {
                        for (var e = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                            var r = n[i],
                                o = Fn.getTech(r);
                            if (o || (o = Ti.getComponent(r)), o) {
                                if (o.isSupported() && (e = o.canPlayType(t))) return e
                            } else We.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, e.prototype.selectSource = function(t) {
                        var e = this,
                            i = this.options_.techOrder.map(function(t) {
                                return [t, Fn.getTech(t)]
                            }).filter(function(t) {
                                var e = t[0],
                                    i = t[1];
                                return i ? i.isSupported() : (We.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }),
                            n = function(t, e, i) {
                                var n = void 0;
                                return t.some(function(t) {
                                    return e.some(function(e) {
                                        if (n = i(t, e)) return !0
                                    })
                                }), n
                            },
                            r = function(t, i) {
                                var n = t[0];
                                if (t[1].canPlaySource(i, e.options_[n.toLowerCase()])) return {
                                    source: i,
                                    tech: n
                                }
                            };
                        return (this.options_.sourceOrder ? n(t, i, function(t) {
                            return function(e, i) {
                                return t(i, e)
                            }
                        }(r)) : n(i, t, r)) || !1
                    }, e.prototype.src = function(t) {
                        var e = this;
                        if (void 0 === t) return this.cache_.src || "";
                        var i = zn(t);
                        if (!i.length) return void this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0);
                        this.cache_.sources = i, this.changingSrc_ = !0, this.cache_.source = i[0], qt(this, i[0], function(t, n) {
                            if (e.middleware_ = n, e.src_(t)) return i.length > 1 ? e.src(i.slice(1)) : (e.setTimeout(function() {
                                this.error({
                                    code: 4,
                                    message: this.localize(this.options_.notSupportedMessage)
                                })
                            }, 0), void e.triggerReady());
                            e.changingSrc_ = !1, e.cache_.src = t.src, Yt(n, e.tech_)
                        })
                    }, e.prototype.src_ = function(t) {
                        var e = this.selectSource([t]);
                        return !e || (Z(e.tech, this.techName_) ? (this.ready(function() {
                            this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load()
                        }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(e.tech, e.source), !1))
                    }, e.prototype.load = function() {
                        this.techCall_("load")
                    }, e.prototype.reset = function() {
                        this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
                    }, e.prototype.currentSources = function() {
                        var t = this.currentSource(),
                            e = [];
                        return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
                    }, e.prototype.currentSource = function() {
                        return this.cache_.source || {}
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource() && this.currentSource().src || ""
                    }, e.prototype.currentType = function() {
                        return this.currentSource() && this.currentSource().type || ""
                    }, e.prototype.preload = function(t) {
                        return void 0 !== t ? (this.techCall_("setPreload", t), void(this.options_.preload = t)) : this.techGet_("preload")
                    }, e.prototype.autoplay = function(t) {
                        return void 0 !== t ? (this.techCall_("setAutoplay", t), void(this.options_.autoplay = t)) : this.techGet_("autoplay", t)
                    }, e.prototype.playsinline = function(t) {
                        return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
                    }, e.prototype.loop = function(t) {
                        return void 0 !== t ? (this.techCall_("setLoop", t), void(this.options_.loop = t)) : this.techGet_("loop")
                    }, e.prototype.poster = function(t) {
                        if (void 0 === t) return this.poster_;
                        t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange")
                    }, e.prototype.handleTechPosterChange_ = function() {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, e.prototype.controls = function(t) {
                        return void 0 !== t ? (t = !!t, void(this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())))) : !!this.controls_
                    }, e.prototype.usingNativeControls = function(t) {
                        return void 0 !== t ? (t = !!t, void(this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))))) : !!this.usingNativeControls_
                    }, e.prototype.error = function(t) {
                        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new st(t), this.addClass("vjs-error"), We.error("(CODE:" + this.error_.code + " " + st.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
                    }, e.prototype.reportUserActivity = function(t) {
                        this.userActivity_ = !0
                    }, e.prototype.userActive = function(t) {
                        return void 0 !== t ? void((t = !!t) !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")))) : this.userActive_
                    }, e.prototype.listenForUserActivity_ = function() {
                        var t = void 0,
                            e = void 0,
                            i = void 0,
                            n = ci(this, this.reportUserActivity),
                            r = function(t) {
                                t.screenX === e && t.screenY === i || (e = t.screenX, i = t.screenY, n())
                            },
                            o = function() {
                                n(), this.clearInterval(t), t = this.setInterval(n, 250)
                            },
                            s = function(e) {
                                n(), this.clearInterval(t)
                            };
                        this.on("mousedown", o), this.on("mousemove", r), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
                        var a = void 0;
                        this.setInterval(function() {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                var t = this.options_.inactivityTimeout;
                                t > 0 && (a = this.setTimeout(function() {
                                    this.userActivity_ || this.userActive(!1)
                                }, t))
                            }
                        }, 250)
                    }, e.prototype.playbackRate = function(t) {
                        return void 0 !== t ? void this.techCall_("setPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, e.prototype.defaultPlaybackRate = function(t) {
                        return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                    }, e.prototype.isAudio = function(t) {
                        return void 0 !== t ? void(this.isAudio_ = !!t) : !!this.isAudio_
                    }, e.prototype.addTextTrack = function(t, e, i) {
                        if (this.tech_) return this.tech_.addTextTrack(t, e, i)
                    }, e.prototype.addRemoteTextTrack = function(t, e) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
                    }, e.prototype.removeRemoteTextTrack = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.track,
                            i = void 0 === e ? arguments[0] : e;
                        if (this.tech_) return this.tech_.removeRemoteTextTrack(i)
                    }, e.prototype.getVideoPlaybackQuality = function() {
                        return this.techGet_("getVideoPlaybackQuality")
                    }, e.prototype.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, e.prototype.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, e.prototype.language = function(t) {
                        if (void 0 === t) return this.language_;
                        this.language_ = String(t).toLowerCase()
                    }, e.prototype.languages = function() {
                        return tt(e.prototype.options_.languages, this.languages_)
                    }, e.prototype.toJSON = function() {
                        var t = tt(this.options_),
                            e = t.tracks;
                        t.tracks = [];
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n = tt(n), n.player = void 0, t.tracks[i] = n
                        }
                        return t
                    }, e.prototype.createModal = function(t, e) {
                        var i = this;
                        e = e || {}, e.content = t || "";
                        var n = new Ni(this, e);
                        return this.addChild(n), n.on("dispose", function() {
                            i.removeChild(n)
                        }), n.open(), n
                    }, e.getTagSettings = function(t) {
                        var e = {
                                sources: [],
                                tracks: []
                            },
                            i = C(t),
                            n = i["data-setup"];
                        if (_(t, "vjs-fluid") && (i.fluid = !0), null !== n) {
                            var o = Ai(n || "{}"),
                                s = o[0],
                                a = o[1];
                            s && We.error(s), r(i, a)
                        }
                        if (r(e, i), t.hasChildNodes())
                            for (var l = t.childNodes, c = 0, u = l.length; c < u; c++) {
                                var h = l[c],
                                    p = h.nodeName.toLowerCase();
                                "source" === p ? e.sources.push(C(h)) : "track" === p && e.tracks.push(C(h))
                            }
                        return e
                    }, e.prototype.flexNotSupported_ = function() {
                        var t = he.createElement("i");
                        return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
                    }, e
                }(Ti);
            wn.names.forEach(function(t) {
                var e = wn[t];
                co.prototype[e.getterName] = function() {
                    return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
                }
            }), co.players = {};
            var uo = se.navigator;
            co.prototype.options_ = {
                techOrder: Fn.defaultTechOrder_,
                html5: {},
                flash: {},
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: uo && (uo.languages && uo.languages[0] || uo.userLanguage || uo.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(t) {
                co.prototype[t] = function() {
                    return this.techGet_(t)
                }
            }), lo.forEach(function(t) {
                co.prototype["handleTech" + J(t) + "_"] = function() {
                    return this.trigger(t)
                }
            }), Ti.registerComponent("Player", co);
            var ho = {},
                po = function(t) {
                    return ho.hasOwnProperty(t)
                },
                fo = function(t) {
                    return po(t) ? ho[t] : void 0
                },
                mo = function(t, e) {
                    t.activePlugins_ = t.activePlugins_ || {}, t.activePlugins_[e] = !0
                },
                vo = function(t, e, i) {
                    var n = (i ? "before" : "") + "pluginsetup";
                    t.trigger(n, e), t.trigger(n + ":" + e.name, e)
                },
                go = function(t, e) {
                    var i = function() {
                        vo(this, {
                            name: t,
                            plugin: e,
                            instance: null
                        }, !0);
                        var i = e.apply(this, arguments);
                        return mo(this, t), vo(this, {
                            name: t,
                            plugin: e,
                            instance: i
                        }), i
                    };
                    return Object.keys(e).forEach(function(t) {
                        i[t] = e[t]
                    }), i
                },
                yo = function(t, e) {
                    return e.prototype.name = t,
                        function() {
                            vo(this, {
                                name: t,
                                plugin: e,
                                instance: null
                            }, !0);
                            for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            var o = new(Function.prototype.bind.apply(e, [null].concat([this].concat(n))));
                            return this[t] = function() {
                                return o
                            }, vo(this, o.getEventHash()), o
                        }
                },
                _o = function() {
                    function t(e) {
                        if (Le(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                        this.player = e, K(this), delete this.trigger, Q(this, this.constructor.defaultState), mo(e, this.name), this.dispose = ci(this, this.dispose), e.on("dispose", this.dispose)
                    }
                    return t.prototype.getEventHash = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
                    }, t.prototype.trigger = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return U(this.eventBusEl_, t, this.getEventHash(e))
                    }, t.prototype.handleStateChanged = function(t) {}, t.prototype.dispose = function() {
                        var t = this.name,
                            e = this.player;
                        this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e.activePlugins_[t] = !1, this.player = this.state = null, e[t] = yo(t, ho[t])
                    }, t.isBasic = function(e) {
                        var i = "string" == typeof e ? fo(e) : e;
                        return "function" == typeof i && !t.prototype.isPrototypeOf(i.prototype)
                    }, t.registerPlugin = function(e, i) {
                        if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : Ne(e)) + ".");
                        if (po(e)) We.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
                        else if (co.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                        if ("function" != typeof i) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === i ? "undefined" : Ne(i)) + ".");
                        return ho[e] = i, "plugin" !== e && (t.isBasic(i) ? co.prototype[e] = go(e, i) : co.prototype[e] = yo(e, i)), i
                    }, t.deregisterPlugin = function(t) {
                        if ("plugin" === t) throw new Error("Cannot de-register base plugin.");
                        po(t) && (delete ho[t], delete co.prototype[t])
                    }, t.getPlugins = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(ho),
                            e = void 0;
                        return t.forEach(function(t) {
                            var i = fo(t);
                            i && (e = e || {}, e[t] = i)
                        }), e
                    }, t.getPluginVersion = function(t) {
                        var e = fo(t);
                        return e && e.VERSION || ""
                    }, t
                }();
            _o.getPlugin = fo, _o.BASE_PLUGIN_NAME = "plugin", _o.registerPlugin("plugin", _o), co.prototype.usingPlugin = function(t) {
                return !!this.activePlugins_ && !0 === this.activePlugins_[t]
            }, co.prototype.hasPlugin = function(t) {
                return !!po(t)
            };
            var bo = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : Ne(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (t.super_ = e)
                },
                To = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = function() {
                            t.apply(this, arguments)
                        },
                        n = {};
                    "object" === (void 0 === e ? "undefined" : Ne(e)) ? (e.constructor !== Object.prototype.constructor && (i = e.constructor), n = e) : "function" == typeof e && (i = e), bo(i, t);
                    for (var r in n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
                    return i
                };
            if ("undefined" == typeof HTMLVideoElement && p() && (he.createElement("video"), he.createElement("audio"), he.createElement("track")), ee.hooks_ = {}, ee.hooks = function(t, e) {
                    return ee.hooks_[t] = ee.hooks_[t] || [], e && (ee.hooks_[t] = ee.hooks_[t].concat(e)), ee.hooks_[t]
                }, ee.hook = function(t, e) {
                    ee.hooks(t, e)
                }, ee.hookOnce = function(t, e) {
                    ee.hooks(t, [].concat(e).map(function(e) {
                        return function i() {
                            ee.removeHook(t, i), e.apply(void 0, arguments)
                        }
                    }))
                }, ee.removeHook = function(t, e) {
                    var i = ee.hooks(t).indexOf(e);
                    return !(i <= -1) && (ee.hooks_[t] = ee.hooks_[t].slice(), ee.hooks_[t].splice(i, 1), !0)
                }, !0 !== se.VIDEOJS_NO_DYNAMIC_STYLE && p()) {
                var xo = Ge(".vjs-styles-defaults");
                if (!xo) {
                    xo = ai("vjs-styles-defaults");
                    var wo = Ge("head");
                    wo && wo.insertBefore(xo, wo.firstChild), li(xo, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            return G(1, ee), ee.VERSION = ne, ee.options = co.prototype.options_, ee.getPlayers = function() {
                return co.players
            }, ee.players = co.players, ee.getComponent = Ti.getComponent, ee.registerComponent = function(t, e) {
                Fn.isTech(e) && We.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Ti.registerComponent.call(Ti, t, e)
            }, ee.getTech = Fn.getTech, ee.registerTech = Fn.registerTech, ee.use = zt, ee.browser = Re, ee.TOUCH_ENABLED = je, ee.extend = To, ee.mergeOptions = tt, ee.bind = ci, ee.registerPlugin = _o.registerPlugin, ee.plugin = function(t, e) {
                return We.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), _o.registerPlugin(t, e)
            }, ee.getPlugins = _o.getPlugins, ee.getPlugin = _o.getPlugin, ee.getPluginVersion = _o.getPluginVersion, ee.addLanguage = function(t, e) {
                var i;
                return t = ("" + t).toLowerCase(), ee.options.languages = tt(ee.options.languages, (i = {}, i[t] = e, i)), ee.options.languages[t]
            }, ee.log = We, ee.createTimeRange = ee.createTimeRanges = rt, ee.formatTime = Qt, ee.parseUrl = Ki, ee.isCrossOrigin = Zi, ee.EventTarget = hi, ee.on = V, ee.one = $, ee.off = W, ee.trigger = U, ee.xhr = pn, ee.TextTrack = mn, ee.AudioTrack = vn, ee.VideoTrack = gn, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(t) {
                ee[t] = function() {
                    return We.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), Qe[t].apply(null, arguments)
                }
            }), ee.computedStyle = l, ee.dom = Qe, ee.url = tn, ee
        })
    }).call(e, i(0))
}, function(t, e, i) {
    "use strict";

    function n() {
        this.windowWidth = window.innerWidth, this.windowWidth >= o.a ? (this.HeightMaxVal = 350, this.HeightMinVal = 80) : (this.HeightMaxVal = 305, this.HeightMinVal = 170), this.flows = []
    }
    e.a = n;
    var r = i(2),
        o = (i.n(r), i(3)),
        s = [{
            point: ".flow-container__item_money1",
            money: ".flow-container__item_money20",
            timeMultiplier: 2.4,
            translateX: "-70vw"
        }, {
            point: ".flow-container__item_money2",
            money: ".flow-container__item_money60",
            timeMultiplier: 3.5,
            translateX: "-80vw"
        }, {
            point: ".flow-container__item_money3",
            money: ".flow-container__item_money300",
            timeMultiplier: 2.2,
            translateX: "-75vw"
        }, {
            point: ".flow-container__item_money4",
            money: ".flow-container__item_money1000",
            timeMultiplier: 2.9,
            translateX: "-60vw"
        }, {
            point: ".flow-container__item_money5",
            money: ".flow-container__item_money10000",
            timeMultiplier: 2.5,
            translateX: "-70vw"
        }];
    n.prototype = {
        startFlow: function() {
            var t = this;
            if (this.flows.length) this.flows.forEach(function(t) {
                return t.resume()
            });
            else
                for (var e = 0; e <= 4; e += 1) ! function(e) {
                    ! function i() {
                        var n = 200 - (Math.floor(Math.random() * (t.HeightMaxVal - t.HeightMinVal)) + t.HeightMinVal),
                            o = s[e].timeMultiplier + (t.windowWidth - 300) / 564;
                        r.TweenMax.to(s[e].point, 0, {
                            transform: "translate(0, " + n + "px)"
                        }), r.TweenMax.to(s[e].money, 0, {
                            transform: "translate(" + s[e].translateX + ", " + n + "px)"
                        }), t.flows[2 * e] = r.TweenMax.to(s[e].money, o, {
                            transform: "translate(0, " + n + "px)",
                            ease: r.Linear.easeNone
                        }), t.flows[2 * e + 1] = r.TweenMax.to(s[e].point, o, {
                            transform: "translate(55vw, " + n + "px)",
                            onComplete: i,
                            ease: r.Linear.easeNone,
                            delay: o
                        })
                    }()
                }(e)
        },
        pauseFlow: function() {
            this.flows.forEach(function(t) {
                return t.pause()
            })
        }
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        var i = void 0,
            n = !0;
        document.querySelectorAll(".phone-land, .canvas-container").forEach(function(r) {
            r.addEventListener("touchmove", function(r) {
                if (!r.changedTouches[0].pageY || !n) return !1;
                var o = r.changedTouches[0].pageY - i;
                return o > 50 ? (n = !1, e()) : o < -50 && (n = !1, t()), !1
            }), r.addEventListener("touchstart", function(t) {
                i = t.changedTouches[0].pageY, n = !0
            })
        })
    }
    e.a = n
},
    function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            var n = t.ctx.createLinearGradient(30, 75, 155, 170);
            n.addColorStop(0, e), n.addColorStop(1, i), t.o[0].color = n, t.ctx.scale(2.3, 2.3)
        }

        function r(t) {
            for (var e = t.o[0], i = 0; i < e.points[e.index].length; i += 1) e.pointsData[0][i].ox = e.points[e.index][i].ox * t.ctx.canvas.width / 100, e.pointsData[0][i].oy = e.points[e.index][i].oy * t.ctx.canvas.height / 100
        }

        function o(t) {
            d
            var e = t.o[0];
            t.circleAnimation ? ((e.index >= e.points.length - 1 || e.index < 1 && e.iterator < 0) && (e.iterator *= -1), e.iterator += e.iterator) : e.index >= e.points.length - 1 ? e.index = 0 : e.index += 1
        }

        function s() {
            var t = new l.a(".jelly-canvas", p),
                e = new l.a(".jelly-canvas", d),
                i = new l.a(".jelly-canvas", f);
            n(t, "#FD3563", "#F15F58"), n(e, "#3458C7", "#A361EB"), n(i, "#FF8069", "#FEDF66"), setInterval(function() {
                r(t), r(e), r(i), o(t), o(e), o(i)
            }, 200), document.querySelector(".canvas-container").style.opacity = "1"
        }
        e.a = s;
        var a = i(12),
            l = i.n(a),
            c = [
                [{
                    ox: 12.3,
                    oy: 10.77
                }, {
                    ox: 27.2,
                    oy: 7.85
                }, {
                    ox: 37.69,
                    oy: 19.69
                }, {
                    ox: 28.46,
                    oy: 33.08
                }, {
                    ox: 11.54,
                    oy: 34.31
                }, {
                    ox: 3.69,
                    oy: 24.15
                }],
                [{
                    ox: 13.08,
                    oy: 10.15
                }, {
                    ox: 27.69,
                    oy: 8.77
                }, {
                    ox: 37.38,
                    oy: 20
                }, {
                    ox: 28.31,
                    oy: 33.54
                }, {
                    ox: 11.69,
                    oy: 34.61
                }, {
                    ox: 4.31,
                    oy: 24.15
                }],
                [{
                    ox: 13.23,
                    oy: 10
                }, {
                    ox: 28.77,
                    oy: 9.38
                }, {
                    ox: 37.23,
                    oy: 20.15
                }, {
                    ox: 28.15,
                    oy: 33.85
                }, {
                    ox: 11.85,
                    oy: 35.08
                }, {
                    ox: 3.85,
                    oy: 24.15
                }],
                [{
                    ox: 13.38,
                    oy: 9.69
                }, {
                    ox: 29.38,
                    oy: 9.38
                }, {
                    ox: 37.08,
                    oy: 20.46
                }, {
                    ox: 28.61,
                    oy: 34.15
                }, {
                    ox: 12,
                    oy: 35.38
                }, {
                    ox: 3.08,
                    oy: 24.31
                }],
                [{
                    ox: 13.38,
                    oy: 9.54
                }, {
                    ox: 30.31,
                    oy: 9.54
                }, {
                    ox: 36.92,
                    oy: 20.31
                }, {
                    ox: 28.46,
                    oy: 34.61
                }, {
                    ox: 12.15,
                    oy: 35.69
                }, {
                    ox: 3.69,
                    oy: 24.61
                }],
                [{
                    ox: 13.69,
                    oy: 9.08
                }, {
                    ox: 29.85,
                    oy: 9.38
                }, {
                    ox: 36.15,
                    oy: 19.84
                }, {
                    ox: 29.08,
                    oy: 35.23
                }, {
                    ox: 11.84,
                    oy: 36.15
                }, {
                    ox: 4.46,
                    oy: 23.84
                }],
                [{
                    ox: 13.23,
                    oy: 8.46
                }, {
                    ox: 29.23,
                    oy: 8.61
                }, {
                    ox: 36.92,
                    oy: 20.46
                }, {
                    ox: 28.92,
                    oy: 35.38
                }, {
                    ox: 12.61,
                    oy: 36
                }, {
                    ox: 5.69,
                    oy: 23.54
                }],
                [{
                    ox: 13.38,
                    oy: 8.31
                }, {
                    ox: 29.54,
                    oy: 8.15
                }, {
                    ox: 37.38,
                    oy: 20.77
                }, {
                    ox: 29.23,
                    oy: 34.77
                }, {
                    ox: 13.08,
                    oy: 35.54
                }, {
                    ox: 6,
                    oy: 23.23
                }],
                [{
                    ox: 12.92,
                    oy: 8.77
                }, {
                    ox: 28.92,
                    oy: 8.77
                }, {
                    ox: 37.84,
                    oy: 20.15
                }, {
                    ox: 28.77,
                    oy: 34.92
                }, {
                    ox: 12.77,
                    oy: 36
                }, {
                    ox: 5.84,
                    oy: 22.46
                }],
                [{
                    ox: 12.61,
                    oy: 9.38
                }, {
                    ox: 28.46,
                    oy: 9.38
                }, {
                    ox: 37.54,
                    oy: 19.85
                }, {
                    ox: 28.31,
                    oy: 34.61
                }, {
                    ox: 12.15,
                    oy: 35.69
                }, {
                    ox: 5.38,
                    oy: 22.31
                }],
                [{
                    ox: 13.23,
                    oy: 9.69
                }, {
                    ox: 29.23,
                    oy: 9.69
                }, {
                    ox: 36.92,
                    oy: 20.46
                }, {
                    ox: 28.31,
                    oy: 35.84
                }, {
                    ox: 12.15,
                    oy: 35.38
                }, {
                    ox: 5.08,
                    oy: 22.46
                }],
                [{
                    ox: 13.54,
                    oy: 10
                }, {
                    ox: 29.69,
                    oy: 9.54
                }, {
                    ox: 36.61,
                    oy: 20.15
                }, {
                    ox: 27.69,
                    oy: 35.38
                }, {
                    ox: 11.84,
                    oy: 35.08
                }, {
                    ox: 4.92,
                    oy: 22.15
                }]
            ],
            u = [
                [{
                    ox: 2.92,
                    oy: 21.08
                }, {
                    ox: 15.23,
                    oy: 7.38
                }, {
                    ox: 31.69,
                    oy: 9.38
                }, {
                    ox: 38.46,
                    oy: 22.77
                }, {
                    ox: 32.15,
                    oy: 36.15
                }, {
                    ox: 10.15,
                    oy: 36
                }],
                [{
                    ox: 3.54,
                    oy: 20.46
                }, {
                    ox: 14.61,
                    oy: 6.77
                }, {
                    ox: 32.46,
                    oy: 9.23
                }, {
                    ox: 37.85,
                    oy: 22.77
                }, {
                    ox: 31.54,
                    oy: 35.38
                }, {
                    ox: 9.54,
                    oy: 38.15
                }],
                [{
                    ox: 4.15,
                    oy: 20
                }, {
                    ox: 14.15,
                    oy: 6.15
                }, {
                    ox: 33.23,
                    oy: 9.08
                }, {
                    ox: 37.23,
                    oy: 23.08
                }, {
                    ox: 30.92,
                    oy: 34.77
                }, {
                    ox: 8.61,
                    oy: 38.61
                }],
                [{
                    ox: 4.62,
                    oy: 19.54
                }, {
                    ox: 13.54,
                    oy: 5.54
                }, {
                    ox: 33.54,
                    oy: 8.77
                }, {
                    ox: 36.77,
                    oy: 22.77
                }, {
                    ox: 30.46,
                    oy: 34
                }, {
                    ox: 9.54,
                    oy: 39.08
                }],
                [{
                    ox: 5.38,
                    oy: 19.38
                }, {
                    ox: 12.92,
                    oy: 5.08
                }, {
                    ox: 32.92,
                    oy: 9.08
                }, {
                    ox: 37.08,
                    oy: 22.77
                }, {
                    ox: 31.08,
                    oy: 34.92
                }, {
                    ox: 10.46,
                    oy: 38.46
                }],
                [{
                    ox: 6,
                    oy: 18.92
                }, {
                    ox: 15.69,
                    oy: 4.61
                }, {
                    ox: 33.54,
                    oy: 8.31
                }, {
                    ox: 37.69,
                    oy: 22.77
                }, {
                    ox: 31.69,
                    oy: 35.54
                }, {
                    ox: 11.38,
                    oy: 37.69
                }],
                [{
                    ox: 6.62,
                    oy: 18.46
                }, {
                    ox: 16.31,
                    oy: 3.84
                }, {
                    ox: 31.69,
                    oy: 7.69
                }, {
                    ox: 37.23,
                    oy: 23.08
                }, {
                    ox: 30.92,
                    oy: 34.77
                }, {
                    ox: 12.77,
                    oy: 37.08
                }],
                [{
                    ox: 5.84,
                    oy: 19.23
                }, {
                    ox: 16.61,
                    oy: 4.46
                }, {
                    ox: 30.77,
                    oy: 7.08
                }, {
                    ox: 36.77,
                    oy: 22.77
                }, {
                    ox: 30.46,
                    oy: 34
                }, {
                    ox: 13.84,
                    oy: 36
                }],
                [{
                    ox: 5.08,
                    oy: 19.85
                }, {
                    ox: 16.15,
                    oy: 5.38
                }, {
                    ox: 30.15,
                    oy: 7.85
                }, {
                    ox: 37.08,
                    oy: 22.77
                }, {
                    ox: 31.08,
                    oy: 34.92
                }, {
                    ox: 14.31,
                    oy: 36.92
                }],
                [{
                    ox: 4.15,
                    oy: 20.46
                }, {
                    ox: 15.69,
                    oy: 6.31
                }, {
                    ox: 30.92,
                    oy: 8.61
                }, {
                    ox: 37.69,
                    oy: 22.77
                }, {
                    ox: 31.69,
                    oy: 35.54
                }, {
                    ox: 13.54,
                    oy: 36.15
                }]
            ],
            h = [
                [{
                    ox: 4.92,
                    oy: 21.08
                }, {
                    ox: 12.15,
                    oy: 7.38
                }, {
                    ox: 28.62,
                    oy: 8.46
                }, {
                    ox: 38.15,
                    oy: 22
                }, {
                    ox: 29.08,
                    oy: 35.38
                }, {
                    ox: 13.38,
                    oy: 34.46
                }],
                [{
                    ox: 5.54,
                    oy: 20.46
                }, {
                    ox: 12.77,
                    oy: 7.69
                }, {
                    ox: 29.38,
                    oy: 8.31
                }, {
                    ox: 38.61,
                    oy: 22
                }, {
                    ox: 28.46,
                    oy: 35.85
                }, {
                    ox: 12.77,
                    oy: 35.08
                }],
                [{
                    ox: 5.54,
                    oy: 20.31
                }, {
                    ox: 13.23,
                    oy: 8.15
                }, {
                    ox: 30.15,
                    oy: 8.15
                }, {
                    ox: 38.92,
                    oy: 22.31
                }, {
                    ox: 27.85,
                    oy: 36.15
                }, {
                    ox: 11.85,
                    oy: 35.54
                }],
                [{
                    ox: 4.92,
                    oy: 21.08
                }, {
                    ox: 13.54,
                    oy: 8.46
                }, {
                    ox: 30.46,
                    oy: 7.85
                }, {
                    ox: 38,
                    oy: 22.62
                }, {
                    ox: 27.38,
                    oy: 35.85
                }, {
                    ox: 11.38,
                    oy: 36
                }],
                [{
                    ox: 4.92,
                    oy: 21.08
                }, {
                    ox: 13.08,
                    oy: 8
                }, {
                    ox: 29.85,
                    oy: 8.15
                }, {
                    ox: 37.23,
                    oy: 22.77
                }, {
                    ox: 28,
                    oy: 35.38
                }, {
                    ox: 10.61,
                    oy: 36.77
                }],
                [{
                    ox: 5.54,
                    oy: 20.46
                }, {
                    ox: 12.61,
                    oy: 6.92
                }, {
                    ox: 29.23,
                    oy: 8.31
                }, {
                    ox: 36.31,
                    oy: 22.15
                }, {
                    ox: 28.62,
                    oy: 34.92
                }, {
                    ox: 10,
                    oy: 36.31
                }]
            ],
            p = {
                paths: "#animated-path",
                pointsNumber: 6,
                maxDistance: 170,
                debug: !1,
                x: 0,
                y: 50,
                intensity: .85,
                points: c,
                iterator: 1,
                index: 0,
                circleAnimation: !0
            },
            d = {
                paths: "#animated-path",
                pointsNumber: 6,
                maxDistance: 170,
                debug: !1,
                fastness: .0035,
                x: 50,
                y: 50,
                intensity: .9,
                points: u,
                iterator: 1,
                index: 0,
                circleAnimation: !1
            },
            f = {
                paths: "#animated-path",
                pointsNumber: 6,
                maxDistance: 170,
                debug: !1,
                fastness: .0035,
                x: 30,
                y: 50,
                intensity: .95,
                points: h,
                iterator: 1,
                index: 0,
                circleAnimation: !0
            }
    },
    function(t, e, i) {
        var n, r, o;
        ! function(i, s) {
            r = [], n = s, void 0 !== (o = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = o)
        }(0, function() {
            function t(t, e) {
                for (var i in e) t[i] = s.arr(e[i]) ? e[i].slice(0) : e[i];
                return t
            }

            function e(e, i) {
                e || (e = {});
                for (var n = 1; n < arguments.length; n++) t(e, arguments[n]);
                return e
            }

            function i(t) {
                var e = 0 | t.clientWidth,
                    i = 0 | t.clientHeight;
                return (t.width !== e || t.height !== i) && (t.width = e, t.height = i, !0)
            }

            function n(t) {
                return {
                    count: 0,
                    async: !1,
                    add: function() {
                        this.count++, this.async = !0
                    },
                    check: function() {
                        0 == --this.count && t()
                    },
                    checkNoAsync: function() {
                        this.async || t()
                    }
                }
            }

            function r() {
                return new function() {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function(t, e) {
                        this.resolve = t, this.reject = e
                    }.bind(this))
                }
            }

            function o(t, e) {
                this.canvas = s.str(t) ? document.querySelector(t) : t, this.ctx = this.canvas.getContext("2d"), this.o = [], this.init(s.arr(e) ? e : [e])
            }
            var s = {
                arr: function(t) {
                    return Array.isArray(t)
                },
                str: function(t) {
                    return "string" == typeof t
                },
                fnc: function(t) {
                    return "function" == typeof t
                }
            };
            return o.prototype = {
                defaults: {
                    pathsContainer: document,
                    color: "#666",
                    imageCentroid: !0,
                    debug: !1,
                    pointsNumber: 10,
                    mouseIncidence: 40,
                    maxIncidence: 40,
                    maxDistance: 70,
                    intensity: .95,
                    fastness: .025,
                    ent: .25,
                    x: 0,
                    y: 0
                },
                init: function(t) {
                    i(this.canvas), this.width = this.canvas.width, this.height = this.canvas.height, this.d = r(), this.promise = this.d.promise, this.initEvents(), this.initOptions(t)
                },
                initEvents: function() {
                    var t = this;
                    this.canvas.onmousemove = function(e) {
                        e.preventDefault();
                        var i = t.canvas.getBoundingClientRect(),
                            n = e.clientX - i.left,
                            r = e.clientY - i.top,
                            o = n - t.mouseX,
                            s = r - t.mouseY,
                            a = Math.sqrt(o * o * 3 + s * s * 3);
                        a < 2 && (a = 0), a > 100 && (a = 100);
                        var l = i.width / t.canvas.offsetWidth,
                            c = i.height / t.canvas.offsetHeight;
                        t.mouseX = n * (1 / l), t.mouseY = r * (1 / c), t.speed = a ? a / 10 : 0
                    }, this.canvas.onmouseout = function(e) {
                        e.preventDefault(), t.mouseX = void 0, t.mouseY = void 0, t.speed = void 0
                    }
                },
                initOptions: function(t) {
                    function i(t, i) {
                        e(t, {
                            pointsData: r.getPointsData(t),
                            centroid: s.str(t.centroid) ? document.querySelector(t.centroid) : t.centroid
                        }), r.o[i] = e(t, {
                            centroidPoint: r.getCentroid(t.pointsData)
                        }), t.hidden && r.animate({
                            animate: !1,
                            i: i
                        }, !0)
                    }
                    for (var r = this, o = n(this.initJelly.bind(this)), a = 0; a < t.length; a++) ! function(t, e) {
                        if (t.svg) {
                            o.add();
                            var n = new XMLHttpRequest;
                            n.open("GET", t.svg), n.overrideMimeType("image/svg+xml"), n.onreadystatechange = function() {
                                if (4 === n.readyState) {
                                    var r = document.implementation.createHTMLDocument("");
                                    r.body.innerHTML = 200 === n.status ? n.responseText : "", t.pathsContainer = r, i(t, e), o.check()
                                }
                            }, n.send()
                        } else i(t, e)
                    }(e({}, this.defaults, t[a]), a);
                    o.checkNoAsync()
                },
                initJelly: function() {
                    for (var t = this, e = n(function() {
                        t.d.resolve(), t.renderJelly()
                    }), i = 0; i < this.o.length; i++) this.o[i].image && function(t) {
                        e.add();
                        var i = new Image;
                        i.onload = function() {
                            t.image = i, e.check()
                        }, i.src = t.image
                    }(this.o[i]);
                    e.checkNoAsync()
                },
                shake: function(t) {
                    var i = this;
                    this.promise.then(function() {
                        for (var n, r = e({
                            i: 0,
                            x: 0,
                            y: 0
                        }, t), o = i.o[r.i].pointsData, s = 0; s < o.length; s++) {
                            n = o[s];
                            for (var a = 0; a < n.length; a += 2) i.animateShake(n[a], r)
                        }
                    })
                },
                animateShake: function(t, e) {
                    t.x += e.x, t.y += e.y
                },
                morph: function(t) {
                    var i = this;
                    this.promise.then(function() {
                        for (var n, r, o = e({
                            i: 0,
                            maxDelay: 0,
                            animate: !0
                        }, t), s = i.o[o.i].pointsData, a = i.getPointsData(e(i.o[o.i], o)), l = 0; l < s.length; l++) {
                            n = s[l], r = a[l];
                            for (var c = 0; c < n.length; c++) i.animateMorph(n[c], r[c], o)
                        }
                    })
                },
                animateMorph: function(t, e, i) {
                    i.animate ? setTimeout(function() {
                        t.ox = e.ox, t.oy = e.oy
                    }, Math.floor(Math.random() * i.maxDelay)) : (t.ox = t.x = e.ox, t.oy = t.y = e.oy)
                },
                hide: function(t) {
                    var e = this;
                    this.promise.then(function() {
                        e.animate(t, !0)
                    })
                },
                show: function(t) {
                    var e = this;
                    this.promise.then(function() {
                        e.animate(t, !1)
                    })
                },
                animate: function(t, i) {
                    var n = e({
                        i: 0,
                        maxDelay: 0,
                        animate: !0
                    }, t);
                    i && e(n, this.o[n.i].centroidPoint);
                    for (var r, o = this.o[n.i].pointsData, s = 0; s < o.length; s++) {
                        r = o[s];
                        for (var a = 0; a < r.length; a++) i ? this.animateHide(r[a], n) : this.animateShow(r[a], n)
                    }
                },
                animateHide: function(t, e) {
                    t.oldX = t.ox, t.oldY = t.oy, e.animate ? setTimeout(function() {
                        t.oldX = t.ox, t.oldY = t.oy, t.ox = e.x, t.oy = e.y
                    }, Math.floor(Math.random() * e.maxDelay)) : (t.ox = t.x = e.x, t.oy = t.y = e.y)
                },
                animateShow: function(t, e) {
                    setTimeout(function() {
                        t.ox = void 0 !== t.oldX ? t.oldX : t.ox, t.oy = void 0 !== t.oldY ? t.oldY : t.oy
                    }, Math.floor(Math.random() * e.maxDelay)), e.animate ? setTimeout(function() {
                        t.ox = void 0 !== t.oldX ? t.oldX : t.ox, t.oy = void 0 !== t.oldY ? t.oldY : t.oy
                    }, Math.floor(Math.random() * e.maxDelay)) : (t.ox = t.x = void 0 !== t.oldX ? t.oldX : t.ox, t.oy = t.y = void 0 !== t.oldY ? t.oldY : t.oy)
                },
                getPointsData: function(t) {
                    for (var e = s.str(t.paths) ? t.pathsContainer.querySelectorAll(t.paths) : t.paths, i = [], n = 0; n < e.length; n++) i.push(this.getPathPoints(e[n], t));
                    return i
                },
                getPathPoints: function(t, i) {
                    for (var n, r = t.getTotalLength(), o = i.pointsNumber, s = r / o, a = 0, l = {
                        xs: 0,
                        ys: 0
                    }, c = []; o--;) n = t.getPointAtLength(a), l.x = n.x + i.x, l.y = n.y + i.y, c.push(e({
                        ox: l.x,
                        oy: l.y
                    }, l)), a += s;
                    return c
                },
                calcLoop: function(t, e) {
                    var i, n, r, o, s = t.length;
                    for (o = 0; o < s; o++) {
                        t[o].xs *= e.intensity, t[o].ys *= e.intensity, (t[o].xs > 11 || t[o].xs < -11) && (t[o].xs = 11 * (t[o].xs < 0 ? -1 : 1)), t[o].xs -= (t[o].x - t[o].ox) * e.fastness, t[o].ys -= (t[o].y - t[o].oy) * e.fastness, t[o].x += t[o].xs, t[o].y += t[o].ys;
                        var a = t[o].x - this.mouseX,
                            l = t[o].y - this.mouseY,
                            c = Math.sqrt(a * a + l * l),
                            u = Math.min(e.mouseIncidence * this.speed, e.maxIncidence);
                        c < u && (t[o].xs = a * u / 100, t[o].ys = l * u / 100)
                    }
                    var h = s - 1;
                    for (o = 0; o < s; o++) i = t[h].x - t[o].x, n = t[h].y - t[o].y, r = Math.sqrt(i * i + n * n), r > e.maxDistance && (t[o].xs += e.ent * i / r, t[o].ys += e.ent * n / r, t[h].xs -= e.ent * i / r, t[h].ys -= e.ent * n / r), h = o
                },
                renderJelly: function() {
                    this.ctx.clearRect(0, 0, this.width, this.height);
                    var t, e, i, n, r, o, s, a;
                    for (s = 0; s < this.o.length; s++) {
                        for (t = this.o[s], a = 0; a < t.pointsData.length; a++) e = t.pointsData[a], this.calcLoop(e, t);
                        for (t.centroidPoint = this.getCentroid(t.pointsData), t.centroid && (t.centroid.style.transform = "translate(" + t.centroidPoint.x + "px, " + t.centroidPoint.y + "px)"), a = 0; a < t.pointsData.length; a++) this.ctx.save(), e = t.pointsData[a], this.drawPath(e, t), t.hover = this.ctx.isPointInPath(this.mouseX, this.mouseY), this.ctx.clip(), t.image ? (r = t.image.width, o = t.image.height, i = t.imageCentroid ? t.centroidPoint.x - r / 2 : 0, n = t.imageCentroid ? t.centroidPoint.y - o / 2 : 0, this.ctx.drawImage(t.image, i, n, r, o)) : (this.ctx.fillStyle = t.color, this.ctx.fill()), this.ctx.restore(), t.debug && this.drawPoints(e, t)
                    }
                    window.requestAnimationFrame(this.renderJelly.bind(this))
                },
                drawPath: function(t) {
                    this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
                    var e, i, n, r = t.length;
                    for (e = 0; e <= r; e++) i = t[e >= r ? e - r : e], n = t[e + 1 >= r ? e + 1 - r : e + 1], this.ctx.quadraticCurveTo(i.x, i.y, .5 * (i.x + n.x), .5 * (i.y + n.y));
                    this.ctx.closePath()
                },
                drawPoints: function(t, e) {
                    for (var i = 0; i < t.length; i++) this.drawPoint(t[i]);
                    this.drawPoint(e.centroidPoint)
                },
                drawPoint: function(t) {
                    this.ctx.beginPath(), this.ctx.arc(t.x, t.y, 5, 0, 2 * Math.PI, !1), this.ctx.closePath(), this.ctx.fillStyle = "red", this.ctx.fill()
                },
                getCentroid: function(t) {
                    var e, i, n, r = 0,
                        o = 0,
                        s = 0;
                    for (e = 0; e < t.length; e++)
                        for (n = t[e], r += n.length, i = 0; i < n.length; i++) o += n[i].x, s += n[i].y;
                    return {
                        x: o / r,
                        y: s / r
                    }
                },
                getHoverIndex: function() {
                    for (var t = 0; t < this.o.length; t++)
                        if (this.o[t] && this.o[t].hover) return t;
                    return -1
                }
            }, o
        })
    }]);