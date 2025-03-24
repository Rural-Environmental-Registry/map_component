var Sd = Object.defineProperty;
var Od = (e, i, r) => i in e ? Sd(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r;
var Ue = (e, i, r) => Od(e, typeof i != "symbol" ? i + "" : i, r);
import { getCurrentInstance as he, inject as Lt, ref as j, computed as P, unref as C, readonly as ga, getCurrentScope as Qd, onScopeDispose as Fd, onMounted as Kt, nextTick as Ci, shallowRef as Du, watchEffect as Tu, watch as _t, warn as Hd, defineComponent as J, createElementBlock as ht, openBlock as K, mergeProps as wn, renderSlot as yt, createElementVNode as Bt, toRef as Pe, onUnmounted as Rd, provide as Ee, onBeforeUnmount as Ce, normalizeStyle as Do, normalizeClass as Et, withDirectives as To, cloneVNode as Gd, Fragment as we, Text as Pu, Comment as zd, createVNode as xt, createBlock as vt, createCommentVNode as It, withCtx as mt, Teleport as Nd, onBeforeMount as Ud, Transition as va, vShow as Su, onDeactivated as Kd, toDisplayString as Se, useSlots as Yd, resolveDynamicComponent as We, reactive as Po, isVNode as al, toHandlers as jd, h as Pt, resolveComponent as Wd, createTextVNode as qd, withModifiers as _a, withKeys as Zd, renderList as Ou } from "vue";
const Vd = Symbol(), Er = "el", Jd = "is-", dn = (e, i, r, l, o) => {
  let s = `${e}-${i}`;
  return r && (s += `-${r}`), l && (s += `__${l}`), o && (s += `--${o}`), s;
}, Xd = Symbol("namespaceContextKey"), Aa = (e) => {
  const i = he() ? Lt(Xd, j(Er)) : j(Er);
  return P(() => C(i) || Er);
}, kt = (e, i) => {
  const r = Aa();
  return {
    namespace: r,
    b: (y = "") => dn(r.value, e, y, "", ""),
    e: (y) => y ? dn(r.value, e, "", y, "") : "",
    m: (y) => y ? dn(r.value, e, "", "", y) : "",
    be: (y, B) => y && B ? dn(r.value, e, y, B, "") : "",
    em: (y, B) => y && B ? dn(r.value, e, "", y, B) : "",
    bm: (y, B) => y && B ? dn(r.value, e, y, "", B) : "",
    bem: (y, B, A) => y && B && A ? dn(r.value, e, y, B, A) : "",
    is: (y, ...B) => {
      const A = B.length >= 1 ? B[0] : !0;
      return y && A ? `${Jd}${y}` : "";
    },
    cssVar: (y) => {
      const B = {};
      for (const A in y)
        y[A] && (B[`--${r.value}-${A}`] = y[A]);
      return B;
    },
    cssVarName: (y) => `--${r.value}-${y}`,
    cssVarBlock: (y) => {
      const B = {};
      for (const A in y)
        y[A] && (B[`--${r.value}-${e}-${A}`] = y[A]);
      return B;
    },
    cssVarBlockName: (y) => `--${r.value}-${e}-${y}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const bo = () => {
}, $d = Object.prototype.hasOwnProperty, sl = (e, i) => $d.call(e, i), gn = Array.isArray, fn = (e) => typeof e == "function", Jt = (e) => typeof e == "string", Si = (e) => e !== null && typeof e == "object", ll = (e) => (Si(e) || fn(e)) && fn(e.then) && fn(e.catch);
var tf = typeof global == "object" && global && global.Object === Object && global, ef = typeof self == "object" && self && self.Object === Object && self, ya = tf || ef || Function("return this")(), Xe = ya.Symbol, Qu = Object.prototype, nf = Qu.hasOwnProperty, of = Qu.toString, mi = Xe ? Xe.toStringTag : void 0;
function rf(e) {
  var i = nf.call(e, mi), r = e[mi];
  try {
    e[mi] = void 0;
    var l = !0;
  } catch {
  }
  var o = of.call(e);
  return l && (i ? e[mi] = r : delete e[mi]), o;
}
var af = Object.prototype, sf = af.toString;
function lf(e) {
  return sf.call(e);
}
var uf = "[object Null]", cf = "[object Undefined]", ul = Xe ? Xe.toStringTag : void 0;
function wa(e) {
  return e == null ? e === void 0 ? cf : uf : ul && ul in Object(e) ? rf(e) : lf(e);
}
function ba(e) {
  return e != null && typeof e == "object";
}
var hf = "[object Symbol]";
function Ea(e) {
  return typeof e == "symbol" || ba(e) && wa(e) == hf;
}
function df(e, i) {
  for (var r = -1, l = e == null ? 0 : e.length, o = Array(l); ++r < l; )
    o[r] = i(e[r], r, e);
  return o;
}
var Oi = Array.isArray, cl = Xe ? Xe.prototype : void 0, hl = cl ? cl.toString : void 0;
function Fu(e) {
  if (typeof e == "string")
    return e;
  if (Oi(e))
    return df(e, Fu) + "";
  if (Ea(e))
    return hl ? hl.call(e) : "";
  var i = e + "";
  return i == "0" && 1 / e == -1 / 0 ? "-0" : i;
}
function Eo(e) {
  var i = typeof e;
  return e != null && (i == "object" || i == "function");
}
function ff(e) {
  return e;
}
var pf = "[object AsyncFunction]", mf = "[object Function]", gf = "[object GeneratorFunction]", vf = "[object Proxy]";
function _f(e) {
  if (!Eo(e))
    return !1;
  var i = wa(e);
  return i == mf || i == gf || i == pf || i == vf;
}
var Lr = ya["__core-js_shared__"], dl = function() {
  var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Af(e) {
  return !!dl && dl in e;
}
var yf = Function.prototype, wf = yf.toString;
function bf(e) {
  if (e != null) {
    try {
      return wf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ef = /[\\^$.*+?()[\]{}|]/g, Lf = /^\[object .+?Constructor\]$/, Cf = Function.prototype, xf = Object.prototype, Mf = Cf.toString, If = xf.hasOwnProperty, Bf = RegExp(
  "^" + Mf.call(If).replace(Ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kf(e) {
  if (!Eo(e) || Af(e))
    return !1;
  var i = _f(e) ? Bf : Lf;
  return i.test(bf(e));
}
function Df(e, i) {
  return e == null ? void 0 : e[i];
}
function La(e, i) {
  var r = Df(e, i);
  return kf(r) ? r : void 0;
}
function Tf(e, i, r) {
  switch (r.length) {
    case 0:
      return e.call(i);
    case 1:
      return e.call(i, r[0]);
    case 2:
      return e.call(i, r[0], r[1]);
    case 3:
      return e.call(i, r[0], r[1], r[2]);
  }
  return e.apply(i, r);
}
var Pf = 800, Sf = 16, Of = Date.now;
function Qf(e) {
  var i = 0, r = 0;
  return function() {
    var l = Of(), o = Sf - (l - r);
    if (r = l, o > 0) {
      if (++i >= Pf)
        return arguments[0];
    } else
      i = 0;
    return e.apply(void 0, arguments);
  };
}
function Ff(e) {
  return function() {
    return e;
  };
}
var Lo = function() {
  try {
    var e = La(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Hf = Lo ? function(e, i) {
  return Lo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ff(i),
    writable: !0
  });
} : ff, Rf = Qf(Hf), Gf = 9007199254740991, zf = /^(?:0|[1-9]\d*)$/;
function Hu(e, i) {
  var r = typeof e;
  return i = i ?? Gf, !!i && (r == "number" || r != "symbol" && zf.test(e)) && e > -1 && e % 1 == 0 && e < i;
}
function Nf(e, i, r) {
  i == "__proto__" && Lo ? Lo(e, i, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[i] = r;
}
function Ru(e, i) {
  return e === i || e !== e && i !== i;
}
var Uf = Object.prototype, Kf = Uf.hasOwnProperty;
function Yf(e, i, r) {
  var l = e[i];
  (!(Kf.call(e, i) && Ru(l, r)) || r === void 0 && !(i in e)) && Nf(e, i, r);
}
var fl = Math.max;
function jf(e, i, r) {
  return i = fl(i === void 0 ? e.length - 1 : i, 0), function() {
    for (var l = arguments, o = -1, s = fl(l.length - i, 0), u = Array(s); ++o < s; )
      u[o] = l[i + o];
    o = -1;
    for (var d = Array(i + 1); ++o < i; )
      d[o] = l[o];
    return d[i] = r(u), Tf(e, this, d);
  };
}
var Wf = 9007199254740991;
function qf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wf;
}
var Zf = "[object Arguments]";
function pl(e) {
  return ba(e) && wa(e) == Zf;
}
var Gu = Object.prototype, Vf = Gu.hasOwnProperty, Jf = Gu.propertyIsEnumerable, zu = pl(/* @__PURE__ */ function() {
  return arguments;
}()) ? pl : function(e) {
  return ba(e) && Vf.call(e, "callee") && !Jf.call(e, "callee");
}, Xf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $f = /^\w*$/;
function tp(e, i) {
  if (Oi(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ea(e) ? !0 : $f.test(e) || !Xf.test(e) || i != null && e in Object(i);
}
var xi = La(Object, "create");
function ep() {
  this.__data__ = xi ? xi(null) : {}, this.size = 0;
}
function np(e) {
  var i = this.has(e) && delete this.__data__[e];
  return this.size -= i ? 1 : 0, i;
}
var ip = "__lodash_hash_undefined__", op = Object.prototype, rp = op.hasOwnProperty;
function ap(e) {
  var i = this.__data__;
  if (xi) {
    var r = i[e];
    return r === ip ? void 0 : r;
  }
  return rp.call(i, e) ? i[e] : void 0;
}
var sp = Object.prototype, lp = sp.hasOwnProperty;
function up(e) {
  var i = this.__data__;
  return xi ? i[e] !== void 0 : lp.call(i, e);
}
var cp = "__lodash_hash_undefined__";
function hp(e, i) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = xi && i === void 0 ? cp : i, this;
}
function _n(e) {
  var i = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++i < r; ) {
    var l = e[i];
    this.set(l[0], l[1]);
  }
}
_n.prototype.clear = ep;
_n.prototype.delete = np;
_n.prototype.get = ap;
_n.prototype.has = up;
_n.prototype.set = hp;
function dp() {
  this.__data__ = [], this.size = 0;
}
function So(e, i) {
  for (var r = e.length; r--; )
    if (Ru(e[r][0], i))
      return r;
  return -1;
}
var fp = Array.prototype, pp = fp.splice;
function mp(e) {
  var i = this.__data__, r = So(i, e);
  if (r < 0)
    return !1;
  var l = i.length - 1;
  return r == l ? i.pop() : pp.call(i, r, 1), --this.size, !0;
}
function gp(e) {
  var i = this.__data__, r = So(i, e);
  return r < 0 ? void 0 : i[r][1];
}
function vp(e) {
  return So(this.__data__, e) > -1;
}
function _p(e, i) {
  var r = this.__data__, l = So(r, e);
  return l < 0 ? (++this.size, r.push([e, i])) : r[l][1] = i, this;
}
function Wn(e) {
  var i = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++i < r; ) {
    var l = e[i];
    this.set(l[0], l[1]);
  }
}
Wn.prototype.clear = dp;
Wn.prototype.delete = mp;
Wn.prototype.get = gp;
Wn.prototype.has = vp;
Wn.prototype.set = _p;
var Ap = La(ya, "Map");
function yp() {
  this.size = 0, this.__data__ = {
    hash: new _n(),
    map: new (Ap || Wn)(),
    string: new _n()
  };
}
function wp(e) {
  var i = typeof e;
  return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
}
function Oo(e, i) {
  var r = e.__data__;
  return wp(i) ? r[typeof i == "string" ? "string" : "hash"] : r.map;
}
function bp(e) {
  var i = Oo(this, e).delete(e);
  return this.size -= i ? 1 : 0, i;
}
function Ep(e) {
  return Oo(this, e).get(e);
}
function Lp(e) {
  return Oo(this, e).has(e);
}
function Cp(e, i) {
  var r = Oo(this, e), l = r.size;
  return r.set(e, i), this.size += r.size == l ? 0 : 1, this;
}
function bn(e) {
  var i = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++i < r; ) {
    var l = e[i];
    this.set(l[0], l[1]);
  }
}
bn.prototype.clear = yp;
bn.prototype.delete = bp;
bn.prototype.get = Ep;
bn.prototype.has = Lp;
bn.prototype.set = Cp;
var xp = "Expected a function";
function Ca(e, i) {
  if (typeof e != "function" || i != null && typeof i != "function")
    throw new TypeError(xp);
  var r = function() {
    var l = arguments, o = i ? i.apply(this, l) : l[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var u = e.apply(this, l);
    return r.cache = s.set(o, u) || s, u;
  };
  return r.cache = new (Ca.Cache || bn)(), r;
}
Ca.Cache = bn;
var Mp = 500;
function Ip(e) {
  var i = Ca(e, function(l) {
    return r.size === Mp && r.clear(), l;
  }), r = i.cache;
  return i;
}
var Bp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kp = /\\(\\)?/g, Dp = Ip(function(e) {
  var i = [];
  return e.charCodeAt(0) === 46 && i.push(""), e.replace(Bp, function(r, l, o, s) {
    i.push(o ? s.replace(kp, "$1") : l || r);
  }), i;
});
function Tp(e) {
  return e == null ? "" : Fu(e);
}
function Qo(e, i) {
  return Oi(e) ? e : tp(e, i) ? [e] : Dp(Tp(e));
}
function xa(e) {
  if (typeof e == "string" || Ea(e))
    return e;
  var i = e + "";
  return i == "0" && 1 / e == -1 / 0 ? "-0" : i;
}
function Pp(e, i) {
  i = Qo(i, e);
  for (var r = 0, l = i.length; e != null && r < l; )
    e = e[xa(i[r++])];
  return r && r == l ? e : void 0;
}
function Sp(e, i) {
  for (var r = -1, l = i.length, o = e.length; ++r < l; )
    e[o + r] = i[r];
  return e;
}
var ml = Xe ? Xe.isConcatSpreadable : void 0;
function Op(e) {
  return Oi(e) || zu(e) || !!(ml && e && e[ml]);
}
function Qp(e, i, r, l, o) {
  var s = -1, u = e.length;
  for (r || (r = Op), o || (o = []); ++s < u; ) {
    var d = e[s];
    r(d) ? Sp(o, d) : o[o.length] = d;
  }
  return o;
}
function Fp(e) {
  var i = e == null ? 0 : e.length;
  return i ? Qp(e) : [];
}
function Hp(e) {
  return Rf(jf(e, void 0, Fp), e + "");
}
function Rp(e, i) {
  return e != null && i in Object(e);
}
function Gp(e, i, r) {
  i = Qo(i, e);
  for (var l = -1, o = i.length, s = !1; ++l < o; ) {
    var u = xa(i[l]);
    if (!(s = e != null && r(e, u)))
      break;
    e = e[u];
  }
  return s || ++l != o ? s : (o = e == null ? 0 : e.length, !!o && qf(o) && Hu(u, o) && (Oi(e) || zu(e)));
}
function zp(e, i) {
  return e != null && Gp(e, i, Rp);
}
function zr(e) {
  for (var i = -1, r = e == null ? 0 : e.length, l = {}; ++i < r; ) {
    var o = e[i];
    l[o[0]] = o[1];
  }
  return l;
}
function Mi(e) {
  return e == null;
}
function Np(e) {
  return e === void 0;
}
function Up(e, i, r, l) {
  if (!Eo(e))
    return e;
  i = Qo(i, e);
  for (var o = -1, s = i.length, u = s - 1, d = e; d != null && ++o < s; ) {
    var f = xa(i[o]), m = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (o != u) {
      var g = d[f];
      m = void 0, m === void 0 && (m = Eo(g) ? g : Hu(i[o + 1]) ? [] : {});
    }
    Yf(d, f, m), d = d[f];
  }
  return e;
}
function Kp(e, i, r) {
  for (var l = -1, o = i.length, s = {}; ++l < o; ) {
    var u = i[l], d = Pp(e, u);
    r(d, u) && Up(s, Qo(u, e), d);
  }
  return s;
}
function Yp(e, i) {
  return Kp(e, i, function(r, l) {
    return zp(e, l);
  });
}
var jp = Hp(function(e, i) {
  return e == null ? {} : Yp(e, i);
});
const Wp = (e) => e === void 0, Rn = (e) => typeof e == "boolean", Ve = (e) => typeof e == "number", Je = (e) => typeof Element > "u" ? !1 : e instanceof Element, qp = (e) => Jt(e) ? !Number.isNaN(Number(e)) : !1;
var Zp = Object.defineProperty, Vp = Object.defineProperties, Jp = Object.getOwnPropertyDescriptors, gl = Object.getOwnPropertySymbols, Xp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, vl = (e, i, r) => i in e ? Zp(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r, tm = (e, i) => {
  for (var r in i || (i = {}))
    Xp.call(i, r) && vl(e, r, i[r]);
  if (gl)
    for (var r of gl(i))
      $p.call(i, r) && vl(e, r, i[r]);
  return e;
}, em = (e, i) => Vp(e, Jp(i));
function nm(e, i) {
  var r;
  const l = Du();
  return Tu(() => {
    l.value = e();
  }, em(tm({}, i), {
    flush: (r = void 0) != null ? r : "sync"
  })), ga(l);
}
var _l;
const Xt = typeof window < "u", im = (e) => typeof e == "string", Nu = () => {
}, om = Xt && ((_l = window == null ? void 0 : window.navigator) == null ? void 0 : _l.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ma(e) {
  return typeof e == "function" ? e() : C(e);
}
function rm(e) {
  return e;
}
function Fo(e) {
  return Qd() ? (Fd(e), !0) : !1;
}
function am(e, i = !0) {
  he() ? Kt(e) : i ? e() : Ci(e);
}
function Al(e, i, r = {}) {
  const {
    immediate: l = !0
  } = r, o = j(!1);
  let s = null;
  function u() {
    s && (clearTimeout(s), s = null);
  }
  function d() {
    o.value = !1, u();
  }
  function f(...m) {
    u(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...m);
    }, Ma(i));
  }
  return l && (o.value = !0, Xt && f()), Fo(d), {
    isPending: ga(o),
    start: f,
    stop: d
  };
}
function qe(e) {
  var i;
  const r = Ma(e);
  return (i = r == null ? void 0 : r.$el) != null ? i : r;
}
const Ia = Xt ? window : void 0;
function Cr(...e) {
  let i, r, l, o;
  if (im(e[0]) || Array.isArray(e[0]) ? ([r, l, o] = e, i = Ia) : [i, r, l, o] = e, !i)
    return Nu;
  Array.isArray(r) || (r = [r]), Array.isArray(l) || (l = [l]);
  const s = [], u = () => {
    s.forEach((g) => g()), s.length = 0;
  }, d = (g, v, b, M) => (g.addEventListener(v, b, M), () => g.removeEventListener(v, b, M)), f = _t(() => [qe(i), Ma(o)], ([g, v]) => {
    u(), g && s.push(...r.flatMap((b) => l.map((M) => d(g, b, M, v))));
  }, { immediate: !0, flush: "post" }), m = () => {
    f(), u();
  };
  return Fo(m), m;
}
let yl = !1;
function sm(e, i, r = {}) {
  const { window: l = Ia, ignore: o = [], capture: s = !0, detectIframe: u = !1 } = r;
  if (!l)
    return;
  om && !yl && (yl = !0, Array.from(l.document.body.children).forEach((b) => b.addEventListener("click", Nu)));
  let d = !0;
  const f = (b) => o.some((M) => {
    if (typeof M == "string")
      return Array.from(l.document.querySelectorAll(M)).some((w) => w === b.target || b.composedPath().includes(w));
    {
      const w = qe(M);
      return w && (b.target === w || b.composedPath().includes(w));
    }
  }), g = [
    Cr(l, "click", (b) => {
      const M = qe(e);
      if (!(!M || M === b.target || b.composedPath().includes(M))) {
        if (b.detail === 0 && (d = !f(b)), !d) {
          d = !0;
          return;
        }
        i(b);
      }
    }, { passive: !0, capture: s }),
    Cr(l, "pointerdown", (b) => {
      const M = qe(e);
      M && (d = !b.composedPath().includes(M) && !f(b));
    }, { passive: !0 }),
    u && Cr(l, "blur", (b) => {
      var M;
      const w = qe(e);
      ((M = l.document.activeElement) == null ? void 0 : M.tagName) === "IFRAME" && !(w != null && w.contains(l.document.activeElement)) && i(b);
    })
  ].filter(Boolean);
  return () => g.forEach((b) => b());
}
function lm(e, i = !1) {
  const r = j(), l = () => r.value = !!e();
  return l(), am(l, i), r;
}
const wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bl = "__vueuse_ssr_handlers__";
wl[bl] = wl[bl] || {};
var El = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, hm = (e, i) => {
  var r = {};
  for (var l in e)
    um.call(e, l) && i.indexOf(l) < 0 && (r[l] = e[l]);
  if (e != null && El)
    for (var l of El(e))
      i.indexOf(l) < 0 && cm.call(e, l) && (r[l] = e[l]);
  return r;
};
function dm(e, i, r = {}) {
  const l = r, { window: o = Ia } = l, s = hm(l, ["window"]);
  let u;
  const d = lm(() => o && "ResizeObserver" in o), f = () => {
    u && (u.disconnect(), u = void 0);
  }, m = _t(() => qe(e), (v) => {
    f(), d.value && o && v && (u = new ResizeObserver(i), u.observe(v, s));
  }, { immediate: !0, flush: "post" }), g = () => {
    f(), m();
  };
  return Fo(g), {
    isSupported: d,
    stop: g
  };
}
var Ll;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ll || (Ll = {}));
var fm = Object.defineProperty, Cl = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, mm = Object.prototype.propertyIsEnumerable, xl = (e, i, r) => i in e ? fm(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r, gm = (e, i) => {
  for (var r in i || (i = {}))
    pm.call(i, r) && xl(e, r, i[r]);
  if (Cl)
    for (var r of Cl(i))
      mm.call(i, r) && xl(e, r, i[r]);
  return e;
};
const vm = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
gm({
  linear: rm
}, vm);
class Uu extends Error {
  constructor(i) {
    super(i), this.name = "ElementPlusError";
  }
}
function Ii(e, i) {
  throw new Uu(`[${e}] ${i}`);
}
function $e(e, i) {
  if (process.env.NODE_ENV !== "production") {
    const r = Jt(e) ? new Uu(`[${e}] ${i}`) : e;
    console.warn(r);
  }
}
const Ml = {
  current: 0
}, Il = j(0), _m = 2e3, Bl = Symbol("elZIndexContextKey"), Am = Symbol("zIndexContextKey"), ym = (e) => {
  const i = he() ? Lt(Bl, Ml) : Ml, r = he() ? Lt(Am, void 0) : void 0, l = P(() => {
    const u = C(r);
    return Ve(u) ? u : _m;
  }), o = P(() => l.value + Il.value), s = () => (i.current++, Il.value = i.current, o.value);
  return !Xt && !Lt(Bl) && $e("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: l,
    currentZIndex: o,
    nextZIndex: s
  };
}, Ku = "__epPropKey", dt = (e) => e, wm = (e) => Si(e) && !!e[Ku], Ho = (e, i) => {
  if (!Si(e) || wm(e))
    return e;
  const { values: r, required: l, default: o, type: s, validator: u } = e, f = {
    type: s,
    required: !!l,
    validator: r || u ? (m) => {
      let g = !1, v = [];
      if (r && (v = Array.from(r), sl(e, "default") && v.push(o), g || (g = v.includes(m))), u && (g || (g = u(m))), !g && v.length > 0) {
        const b = [...new Set(v)].map((M) => JSON.stringify(M)).join(", ");
        Hd(`Invalid prop: validation failed${i ? ` for prop "${i}"` : ""}. Expected one of [${b}], got value ${JSON.stringify(m)}.`);
      }
      return g;
    } : void 0,
    [Ku]: !0
  };
  return sl(e, "default") && (f.default = o), f;
}, Ot = (e) => zr(Object.entries(e).map(([i, r]) => [
  i,
  Ho(r, i)
])), Yu = ["", "default", "small", "large"], bm = Ho({
  type: String,
  values: Yu,
  required: !1
}), Em = Symbol("size"), Lm = () => {
  const e = Lt(Em, {});
  return P(() => C(e.size) || "");
}, kl = j();
function Cm(e, i = void 0) {
  const r = he() ? Lt(Vd, kl) : kl;
  return P(() => {
    var l, o;
    return (o = (l = r.value) == null ? void 0 : l[e]) != null ? o : i;
  });
}
const Nr = "update:modelValue", Ur = "change", Kr = "input";
var Qt = (e, i) => {
  const r = e.__vccOpts || e;
  for (const [l, o] of i)
    r[l] = o;
  return r;
};
const xm = "utils/dom/style", ju = (e = "") => e.split(" ").filter((i) => !!i.trim()), Mm = (e, i) => {
  if (!e || !i)
    return !1;
  if (i.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(i);
}, so = (e, i) => {
  !e || !i.trim() || e.classList.add(...ju(i));
}, xr = (e, i) => {
  !e || !i.trim() || e.classList.remove(...ju(i));
};
function Wu(e, i = "px") {
  if (!e)
    return "";
  if (Ve(e) || qp(e))
    return `${e}${i}`;
  if (Jt(e))
    return e;
  $e(xm, "binding value must be a string or number");
}
const He = (e, i) => {
  if (e.install = (r) => {
    for (const l of [e, ...Object.values(i ?? {})])
      r.component(l.name, l);
  }, i)
    for (const [r, l] of Object.entries(i))
      e[r] = l;
  return e;
}, Ro = (e) => (e.install = bo, e), Im = Ot({
  size: {
    type: dt([Number, String])
  },
  color: {
    type: String
  }
}), Bm = J({
  name: "ElIcon",
  inheritAttrs: !1
}), km = /* @__PURE__ */ J({
  ...Bm,
  props: Im,
  setup(e) {
    const i = e, r = kt("icon"), l = P(() => {
      const { size: o, color: s } = i;
      return !o && !s ? {} : {
        fontSize: Wp(o) ? void 0 : Wu(o),
        "--color": s
      };
    });
    return (o, s) => (K(), ht("i", wn({
      class: C(r).b(),
      style: C(l)
    }, o.$attrs), [
      yt(o.$slots, "default")
    ], 16));
  }
});
var Dm = /* @__PURE__ */ Qt(km, [["__file", "icon.vue"]]);
const _e = He(Dm);
/*! Element Plus Icons Vue v2.3.1 */
var Tm = /* @__PURE__ */ J({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (i, r) => (K(), ht("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Bt("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Pm = Tm, Sm = /* @__PURE__ */ J({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (i, r) => (K(), ht("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Bt("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), Om = Sm, Qm = /* @__PURE__ */ J({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (i, r) => (K(), ht("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Bt("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), qu = Qm, Fm = /* @__PURE__ */ J({
  name: "More",
  __name: "more",
  setup(e) {
    return (i, r) => (K(), ht("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Bt("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Hm = Fm;
const ce = dt([
  String,
  Object,
  Function
]), Rm = (e) => e, Gm = Ot({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Ba = (e) => jp(Gm, e), ka = Symbol("formContextKey"), Co = Symbol("formItemContextKey"), Yr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, zm = Symbol("elIdInjection"), Zu = () => he() ? Lt(zm, Yr) : Yr, Vu = (e) => {
  const i = Zu();
  !Xt && i === Yr && $e("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const r = Aa();
  return nm(() => C(e) || `${r.value}-id-${i.prefix}-${i.current++}`);
}, Ju = () => {
  const e = Lt(ka, void 0), i = Lt(Co, void 0);
  return {
    form: e,
    formItem: i
  };
}, Nm = (e, {
  formItemContext: i,
  disableIdGeneration: r,
  disableIdManagement: l
}) => {
  r || (r = j(!1)), l || (l = j(!1));
  const o = j();
  let s;
  const u = P(() => {
    var d;
    return !!(!(e.label || e.ariaLabel) && i && i.inputIds && ((d = i.inputIds) == null ? void 0 : d.length) <= 1);
  });
  return Kt(() => {
    s = _t([Pe(e, "id"), r], ([d, f]) => {
      const m = d ?? (f ? void 0 : Vu().value);
      m !== o.value && (i != null && i.removeInputId && (o.value && i.removeInputId(o.value), !(l != null && l.value) && !f && m && i.addInputId(m)), o.value = m);
    }, { immediate: !0 });
  }), Rd(() => {
    s && s(), i != null && i.removeInputId && o.value && i.removeInputId(o.value);
  }), {
    isLabeledByFormItem: u,
    inputId: o
  };
}, Xu = (e) => {
  const i = he();
  return P(() => {
    var r, l;
    return (l = (r = i == null ? void 0 : i.proxy) == null ? void 0 : r.$props) == null ? void 0 : l[e];
  });
}, $u = (e, i = {}) => {
  const r = j(void 0), l = i.prop ? r : Xu("size"), o = i.global ? r : Lm(), s = i.form ? { size: void 0 } : Lt(ka, void 0), u = i.formItem ? { size: void 0 } : Lt(Co, void 0);
  return P(() => l.value || C(e) || (u == null ? void 0 : u.size) || (s == null ? void 0 : s.size) || o.value || "");
}, Da = (e) => {
  const i = Xu("disabled"), r = Lt(ka, void 0);
  return P(() => i.value || C(e) || (r == null ? void 0 : r.disabled) || !1);
}, Ta = Symbol("popper"), tc = Symbol("popperContent"), Um = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ec = Ot({
  role: {
    type: String,
    values: Um,
    default: "tooltip"
  }
}), Km = J({
  name: "ElPopper",
  inheritAttrs: !1
}), Ym = /* @__PURE__ */ J({
  ...Km,
  props: ec,
  setup(e, { expose: i }) {
    const r = e, l = j(), o = j(), s = j(), u = j(), d = P(() => r.role), f = {
      triggerRef: l,
      popperInstanceRef: o,
      contentRef: s,
      referenceRef: u,
      role: d
    };
    return i(f), Ee(Ta, f), (m, g) => yt(m.$slots, "default");
  }
});
var jm = /* @__PURE__ */ Qt(Ym, [["__file", "popper.vue"]]);
const nc = Ot({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Wm = J({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), qm = /* @__PURE__ */ J({
  ...Wm,
  props: nc,
  setup(e, { expose: i }) {
    const r = e, l = kt("popper"), { arrowOffset: o, arrowRef: s, arrowStyle: u } = Lt(tc, void 0);
    return _t(() => r.arrowOffset, (d) => {
      o.value = d;
    }), Ce(() => {
      s.value = void 0;
    }), i({
      arrowRef: s
    }), (d, f) => (K(), ht("span", {
      ref_key: "arrowRef",
      ref: s,
      class: Et(C(l).e("arrow")),
      style: Do(C(u)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zm = /* @__PURE__ */ Qt(qm, [["__file", "arrow.vue"]]);
const ic = Ot({
  virtualRef: {
    type: dt(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: dt(Function)
  },
  onMouseleave: {
    type: dt(Function)
  },
  onClick: {
    type: dt(Function)
  },
  onKeydown: {
    type: dt(Function)
  },
  onFocus: {
    type: dt(Function)
  },
  onBlur: {
    type: dt(Function)
  },
  onContextmenu: {
    type: dt(Function)
  },
  id: String,
  open: Boolean
}), oc = Symbol("elForwardRef"), Vm = (e) => {
  Ee(oc, {
    setForwardRef: (r) => {
      e.value = r;
    }
  });
}, Jm = (e) => ({
  mounted(i) {
    e(i);
  },
  updated(i) {
    e(i);
  },
  unmounted() {
    e(null);
  }
}), jr = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, vo = function(e, i, ...r) {
  let l;
  i.includes("mouse") || i.includes("click") ? l = "MouseEvents" : i.includes("key") ? l = "KeyboardEvent" : l = "HTMLEvents";
  const o = document.createEvent(l);
  return o.initEvent(i, ...r), e.dispatchEvent(o), e;
}, Mr = "ElOnlyChild", Xm = J({
  name: Mr,
  setup(e, {
    slots: i,
    attrs: r
  }) {
    var l;
    const o = Lt(oc), s = Jm((l = o == null ? void 0 : o.setForwardRef) != null ? l : bo);
    return () => {
      var u;
      const d = (u = i.default) == null ? void 0 : u.call(i, r);
      if (!d)
        return null;
      if (d.length > 1)
        return $e(Mr, "requires exact only one valid child."), null;
      const f = rc(d);
      return f ? To(Gd(f, r), [[s]]) : ($e(Mr, "no valid child node found"), null);
    };
  }
});
function rc(e) {
  if (!e)
    return null;
  const i = e;
  for (const r of i) {
    if (Si(r))
      switch (r.type) {
        case zd:
          continue;
        case Pu:
        case "svg":
          return Dl(r);
        case we:
          return rc(r.children);
        default:
          return r;
      }
    return Dl(r);
  }
  return null;
}
function Dl(e) {
  const i = kt("only-child");
  return xt("span", {
    class: i.e("content")
  }, [e]);
}
const $m = J({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), tg = /* @__PURE__ */ J({
  ...$m,
  props: ic,
  setup(e, { expose: i }) {
    const r = e, { role: l, triggerRef: o } = Lt(Ta, void 0);
    Vm(o);
    const s = P(() => d.value ? r.id : void 0), u = P(() => {
      if (l && l.value === "tooltip")
        return r.open && r.id ? r.id : void 0;
    }), d = P(() => {
      if (l && l.value !== "tooltip")
        return l.value;
    }), f = P(() => d.value ? `${r.open}` : void 0);
    let m;
    const g = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Kt(() => {
      _t(() => r.virtualRef, (v) => {
        v && (o.value = qe(v));
      }, {
        immediate: !0
      }), _t(o, (v, b) => {
        m == null || m(), m = void 0, Je(v) && (g.forEach((M) => {
          var w;
          const y = r[M];
          y && (v.addEventListener(M.slice(2).toLowerCase(), y), (w = b == null ? void 0 : b.removeEventListener) == null || w.call(b, M.slice(2).toLowerCase(), y));
        }), jr(v) && (m = _t([s, u, d, f], (M) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((w, y) => {
            Mi(M[y]) ? v.removeAttribute(w) : v.setAttribute(w, M[y]);
          });
        }, { immediate: !0 }))), Je(b) && jr(b) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((M) => b.removeAttribute(M));
      }, {
        immediate: !0
      });
    }), Ce(() => {
      if (m == null || m(), m = void 0, o.value && Je(o.value)) {
        const v = o.value;
        g.forEach((b) => {
          const M = r[b];
          M && v.removeEventListener(b.slice(2).toLowerCase(), M);
        }), o.value = void 0;
      }
    }), i({
      triggerRef: o
    }), (v, b) => v.virtualTriggering ? It("v-if", !0) : (K(), vt(C(Xm), wn({ key: 0 }, v.$attrs, {
      "aria-controls": C(s),
      "aria-describedby": C(u),
      "aria-expanded": C(f),
      "aria-haspopup": C(d)
    }), {
      default: mt(() => [
        yt(v.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var eg = /* @__PURE__ */ Qt(tg, [["__file", "trigger.vue"]]);
const Ir = "focus-trap.focus-after-trapped", Br = "focus-trap.focus-after-released", ng = "focus-trap.focusout-prevented", Tl = {
  cancelable: !0,
  bubbles: !1
}, ig = {
  cancelable: !0,
  bubbles: !1
}, Pl = "focusAfterTrapped", Sl = "focusAfterReleased", og = Symbol("elFocusTrap"), Pa = j(), Go = j(0), Sa = j(0);
let lo = 0;
const ac = (e) => {
  const i = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (l) => {
      const o = l.tagName === "INPUT" && l.type === "hidden";
      return l.disabled || l.hidden || o ? NodeFilter.FILTER_SKIP : l.tabIndex >= 0 || l === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    i.push(r.currentNode);
  return i;
}, Ol = (e, i) => {
  for (const r of e)
    if (!rg(r, i))
      return r;
}, rg = (e, i) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (i && e === i)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, ag = (e) => {
  const i = ac(e), r = Ol(i, e), l = Ol(i.reverse(), e);
  return [r, l];
}, sg = (e) => e instanceof HTMLInputElement && "select" in e, De = (e, i) => {
  if (e && e.focus) {
    const r = document.activeElement;
    let l = !1;
    Je(e) && !jr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), l = !0), e.focus({ preventScroll: !0 }), Sa.value = window.performance.now(), e !== r && sg(e) && i && e.select(), Je(e) && l && e.removeAttribute("tabindex");
  }
};
function Ql(e, i) {
  const r = [...e], l = e.indexOf(i);
  return l !== -1 && r.splice(l, 1), r;
}
const lg = () => {
  let e = [];
  return {
    push: (l) => {
      const o = e[0];
      o && l !== o && o.pause(), e = Ql(e, l), e.unshift(l);
    },
    remove: (l) => {
      var o, s;
      e = Ql(e, l), (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o);
    }
  };
}, ug = (e, i = !1) => {
  const r = document.activeElement;
  for (const l of e)
    if (De(l, i), document.activeElement !== r)
      return;
}, Fl = lg(), cg = () => Go.value > Sa.value, uo = () => {
  Pa.value = "pointer", Go.value = window.performance.now();
}, Hl = () => {
  Pa.value = "keyboard", Go.value = window.performance.now();
}, hg = () => (Kt(() => {
  lo === 0 && (document.addEventListener("mousedown", uo), document.addEventListener("touchstart", uo), document.addEventListener("keydown", Hl)), lo++;
}), Ce(() => {
  lo--, lo <= 0 && (document.removeEventListener("mousedown", uo), document.removeEventListener("touchstart", uo), document.removeEventListener("keydown", Hl));
}), {
  focusReason: Pa,
  lastUserFocusTimestamp: Go,
  lastAutomatedFocusTimestamp: Sa
}), co = (e) => new CustomEvent(ng, {
  ...ig,
  detail: e
}), Ht = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  esc: "Escape",
  numpadEnter: "NumpadEnter"
};
let Fn = [];
const Rl = (e) => {
  e.code === Ht.esc && Fn.forEach((i) => i(e));
}, dg = (e) => {
  Kt(() => {
    Fn.length === 0 && document.addEventListener("keydown", Rl), Xt && Fn.push(e);
  }), Ce(() => {
    Fn = Fn.filter((i) => i !== e), Fn.length === 0 && Xt && document.removeEventListener("keydown", Rl);
  });
}, fg = J({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Pl,
    Sl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: i }) {
    const r = j();
    let l, o;
    const { focusReason: s } = hg();
    dg((w) => {
      e.trapped && !u.paused && i("release-requested", w);
    });
    const u = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, d = (w) => {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const { code: y, altKey: B, ctrlKey: A, metaKey: I, currentTarget: F, shiftKey: Q } = w, { loop: k } = e, U = y === Ht.tab && !B && !A && !I, G = document.activeElement;
      if (U && G) {
        const Z = F, [ut, rt] = ag(Z);
        if (ut && rt) {
          if (!Q && G === rt) {
            const X = co({
              focusReason: s.value
            });
            i("focusout-prevented", X), X.defaultPrevented || (w.preventDefault(), k && De(ut, !0));
          } else if (Q && [ut, Z].includes(G)) {
            const X = co({
              focusReason: s.value
            });
            i("focusout-prevented", X), X.defaultPrevented || (w.preventDefault(), k && De(rt, !0));
          }
        } else if (G === Z) {
          const X = co({
            focusReason: s.value
          });
          i("focusout-prevented", X), X.defaultPrevented || w.preventDefault();
        }
      }
    };
    Ee(og, {
      focusTrapRef: r,
      onKeydown: d
    }), _t(() => e.focusTrapEl, (w) => {
      w && (r.value = w);
    }, { immediate: !0 }), _t([r], ([w], [y]) => {
      w && (w.addEventListener("keydown", d), w.addEventListener("focusin", g), w.addEventListener("focusout", v)), y && (y.removeEventListener("keydown", d), y.removeEventListener("focusin", g), y.removeEventListener("focusout", v));
    });
    const f = (w) => {
      i(Pl, w);
    }, m = (w) => i(Sl, w), g = (w) => {
      const y = C(r);
      if (!y)
        return;
      const B = w.target, A = w.relatedTarget, I = B && y.contains(B);
      e.trapped || A && y.contains(A) || (l = A), I && i("focusin", w), !u.paused && e.trapped && (I ? o = B : De(o, !0));
    }, v = (w) => {
      const y = C(r);
      if (!(u.paused || !y))
        if (e.trapped) {
          const B = w.relatedTarget;
          !Mi(B) && !y.contains(B) && setTimeout(() => {
            if (!u.paused && e.trapped) {
              const A = co({
                focusReason: s.value
              });
              i("focusout-prevented", A), A.defaultPrevented || De(o, !0);
            }
          }, 0);
        } else {
          const B = w.target;
          B && y.contains(B) || i("focusout", w);
        }
    };
    async function b() {
      await Ci();
      const w = C(r);
      if (w) {
        Fl.push(u);
        const y = w.contains(document.activeElement) ? l : document.activeElement;
        if (l = y, !w.contains(y)) {
          const A = new Event(Ir, Tl);
          w.addEventListener(Ir, f), w.dispatchEvent(A), A.defaultPrevented || Ci(() => {
            let I = e.focusStartEl;
            Jt(I) || (De(I), document.activeElement !== I && (I = "first")), I === "first" && ug(ac(w), !0), (document.activeElement === y || I === "container") && De(w);
          });
        }
      }
    }
    function M() {
      const w = C(r);
      if (w) {
        w.removeEventListener(Ir, f);
        const y = new CustomEvent(Br, {
          ...Tl,
          detail: {
            focusReason: s.value
          }
        });
        w.addEventListener(Br, m), w.dispatchEvent(y), !y.defaultPrevented && (s.value == "keyboard" || !cg() || w.contains(document.activeElement)) && De(l ?? document.body), w.removeEventListener(Br, m), Fl.remove(u);
      }
    }
    return Kt(() => {
      e.trapped && b(), _t(() => e.trapped, (w) => {
        w ? b() : M();
      });
    }), Ce(() => {
      e.trapped && M(), r.value && (r.value.removeEventListener("keydown", d), r.value.removeEventListener("focusin", g), r.value.removeEventListener("focusout", v), r.value = void 0);
    }), {
      onKeydown: d
    };
  }
});
function pg(e, i, r, l, o, s) {
  return yt(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var mg = /* @__PURE__ */ Qt(fg, [["render", pg], ["__file", "focus-trap.vue"]]), Wt = "top", oe = "bottom", re = "right", qt = "left", Oa = "auto", Qi = [Wt, oe, re, qt], zn = "start", Bi = "end", gg = "clippingParents", sc = "viewport", gi = "popper", vg = "reference", Gl = Qi.reduce(function(e, i) {
  return e.concat([i + "-" + zn, i + "-" + Bi]);
}, []), Qa = [].concat(Qi, [Oa]).reduce(function(e, i) {
  return e.concat([i, i + "-" + zn, i + "-" + Bi]);
}, []), _g = "beforeRead", Ag = "read", yg = "afterRead", wg = "beforeMain", bg = "main", Eg = "afterMain", Lg = "beforeWrite", Cg = "write", xg = "afterWrite", Mg = [_g, Ag, yg, wg, bg, Eg, Lg, Cg, xg];
function Le(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function de(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var i = e.ownerDocument;
    return i && i.defaultView || window;
  }
  return e;
}
function Nn(e) {
  var i = de(e).Element;
  return e instanceof i || e instanceof Element;
}
function ie(e) {
  var i = de(e).HTMLElement;
  return e instanceof i || e instanceof HTMLElement;
}
function Fa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var i = de(e).ShadowRoot;
  return e instanceof i || e instanceof ShadowRoot;
}
function Ig(e) {
  var i = e.state;
  Object.keys(i.elements).forEach(function(r) {
    var l = i.styles[r] || {}, o = i.attributes[r] || {}, s = i.elements[r];
    !ie(s) || !Le(s) || (Object.assign(s.style, l), Object.keys(o).forEach(function(u) {
      var d = o[u];
      d === !1 ? s.removeAttribute(u) : s.setAttribute(u, d === !0 ? "" : d);
    }));
  });
}
function Bg(e) {
  var i = e.state, r = { popper: { position: i.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(i.elements.popper.style, r.popper), i.styles = r, i.elements.arrow && Object.assign(i.elements.arrow.style, r.arrow), function() {
    Object.keys(i.elements).forEach(function(l) {
      var o = i.elements[l], s = i.attributes[l] || {}, u = Object.keys(i.styles.hasOwnProperty(l) ? i.styles[l] : r[l]), d = u.reduce(function(f, m) {
        return f[m] = "", f;
      }, {});
      !ie(o) || !Le(o) || (Object.assign(o.style, d), Object.keys(s).forEach(function(f) {
        o.removeAttribute(f);
      }));
    });
  };
}
var lc = { name: "applyStyles", enabled: !0, phase: "write", fn: Ig, effect: Bg, requires: ["computeStyles"] };
function be(e) {
  return e.split("-")[0];
}
var vn = Math.max, xo = Math.min, Un = Math.round;
function Kn(e, i) {
  i === void 0 && (i = !1);
  var r = e.getBoundingClientRect(), l = 1, o = 1;
  if (ie(e) && i) {
    var s = e.offsetHeight, u = e.offsetWidth;
    u > 0 && (l = Un(r.width) / u || 1), s > 0 && (o = Un(r.height) / s || 1);
  }
  return { width: r.width / l, height: r.height / o, top: r.top / o, right: r.right / l, bottom: r.bottom / o, left: r.left / l, x: r.left / l, y: r.top / o };
}
function Ha(e) {
  var i = Kn(e), r = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(i.width - r) <= 1 && (r = i.width), Math.abs(i.height - l) <= 1 && (l = i.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: l };
}
function uc(e, i) {
  var r = i.getRootNode && i.getRootNode();
  if (e.contains(i)) return !0;
  if (r && Fa(r)) {
    var l = i;
    do {
      if (l && e.isSameNode(l)) return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Oe(e) {
  return de(e).getComputedStyle(e);
}
function kg(e) {
  return ["table", "td", "th"].indexOf(Le(e)) >= 0;
}
function on(e) {
  return ((Nn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zo(e) {
  return Le(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fa(e) ? e.host : null) || on(e);
}
function zl(e) {
  return !ie(e) || Oe(e).position === "fixed" ? null : e.offsetParent;
}
function Dg(e) {
  var i = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && ie(e)) {
    var l = Oe(e);
    if (l.position === "fixed") return null;
  }
  var o = zo(e);
  for (Fa(o) && (o = o.host); ie(o) && ["html", "body"].indexOf(Le(o)) < 0; ) {
    var s = Oe(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || i && s.willChange === "filter" || i && s.filter && s.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Fi(e) {
  for (var i = de(e), r = zl(e); r && kg(r) && Oe(r).position === "static"; ) r = zl(r);
  return r && (Le(r) === "html" || Le(r) === "body" && Oe(r).position === "static") ? i : r || Dg(e) || i;
}
function Ra(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ai(e, i, r) {
  return vn(e, xo(i, r));
}
function Tg(e, i, r) {
  var l = Ai(e, i, r);
  return l > r ? r : l;
}
function cc() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function hc(e) {
  return Object.assign({}, cc(), e);
}
function dc(e, i) {
  return i.reduce(function(r, l) {
    return r[l] = e, r;
  }, {});
}
var Pg = function(e, i) {
  return e = typeof e == "function" ? e(Object.assign({}, i.rects, { placement: i.placement })) : e, hc(typeof e != "number" ? e : dc(e, Qi));
};
function Sg(e) {
  var i, r = e.state, l = e.name, o = e.options, s = r.elements.arrow, u = r.modifiersData.popperOffsets, d = be(r.placement), f = Ra(d), m = [qt, re].indexOf(d) >= 0, g = m ? "height" : "width";
  if (!(!s || !u)) {
    var v = Pg(o.padding, r), b = Ha(s), M = f === "y" ? Wt : qt, w = f === "y" ? oe : re, y = r.rects.reference[g] + r.rects.reference[f] - u[f] - r.rects.popper[g], B = u[f] - r.rects.reference[f], A = Fi(s), I = A ? f === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, F = y / 2 - B / 2, Q = v[M], k = I - b[g] - v[w], U = I / 2 - b[g] / 2 + F, G = Ai(Q, U, k), Z = f;
    r.modifiersData[l] = (i = {}, i[Z] = G, i.centerOffset = G - U, i);
  }
}
function Og(e) {
  var i = e.state, r = e.options, l = r.element, o = l === void 0 ? "[data-popper-arrow]" : l;
  o != null && (typeof o == "string" && (o = i.elements.popper.querySelector(o), !o) || !uc(i.elements.popper, o) || (i.elements.arrow = o));
}
var Qg = { name: "arrow", enabled: !0, phase: "main", fn: Sg, effect: Og, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Yn(e) {
  return e.split("-")[1];
}
var Fg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hg(e) {
  var i = e.x, r = e.y, l = window, o = l.devicePixelRatio || 1;
  return { x: Un(i * o) / o || 0, y: Un(r * o) / o || 0 };
}
function Nl(e) {
  var i, r = e.popper, l = e.popperRect, o = e.placement, s = e.variation, u = e.offsets, d = e.position, f = e.gpuAcceleration, m = e.adaptive, g = e.roundOffsets, v = e.isFixed, b = u.x, M = b === void 0 ? 0 : b, w = u.y, y = w === void 0 ? 0 : w, B = typeof g == "function" ? g({ x: M, y }) : { x: M, y };
  M = B.x, y = B.y;
  var A = u.hasOwnProperty("x"), I = u.hasOwnProperty("y"), F = qt, Q = Wt, k = window;
  if (m) {
    var U = Fi(r), G = "clientHeight", Z = "clientWidth";
    if (U === de(r) && (U = on(r), Oe(U).position !== "static" && d === "absolute" && (G = "scrollHeight", Z = "scrollWidth")), U = U, o === Wt || (o === qt || o === re) && s === Bi) {
      Q = oe;
      var ut = v && U === k && k.visualViewport ? k.visualViewport.height : U[G];
      y -= ut - l.height, y *= f ? 1 : -1;
    }
    if (o === qt || (o === Wt || o === oe) && s === Bi) {
      F = re;
      var rt = v && U === k && k.visualViewport ? k.visualViewport.width : U[Z];
      M -= rt - l.width, M *= f ? 1 : -1;
    }
  }
  var tt = Object.assign({ position: d }, m && Fg), X = g === !0 ? Hg({ x: M, y }) : { x: M, y };
  if (M = X.x, y = X.y, f) {
    var gt;
    return Object.assign({}, tt, (gt = {}, gt[Q] = I ? "0" : "", gt[F] = A ? "0" : "", gt.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + M + "px, " + y + "px)" : "translate3d(" + M + "px, " + y + "px, 0)", gt));
  }
  return Object.assign({}, tt, (i = {}, i[Q] = I ? y + "px" : "", i[F] = A ? M + "px" : "", i.transform = "", i));
}
function Rg(e) {
  var i = e.state, r = e.options, l = r.gpuAcceleration, o = l === void 0 ? !0 : l, s = r.adaptive, u = s === void 0 ? !0 : s, d = r.roundOffsets, f = d === void 0 ? !0 : d, m = { placement: be(i.placement), variation: Yn(i.placement), popper: i.elements.popper, popperRect: i.rects.popper, gpuAcceleration: o, isFixed: i.options.strategy === "fixed" };
  i.modifiersData.popperOffsets != null && (i.styles.popper = Object.assign({}, i.styles.popper, Nl(Object.assign({}, m, { offsets: i.modifiersData.popperOffsets, position: i.options.strategy, adaptive: u, roundOffsets: f })))), i.modifiersData.arrow != null && (i.styles.arrow = Object.assign({}, i.styles.arrow, Nl(Object.assign({}, m, { offsets: i.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: f })))), i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-placement": i.placement });
}
var fc = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Rg, data: {} }, ho = { passive: !0 };
function Gg(e) {
  var i = e.state, r = e.instance, l = e.options, o = l.scroll, s = o === void 0 ? !0 : o, u = l.resize, d = u === void 0 ? !0 : u, f = de(i.elements.popper), m = [].concat(i.scrollParents.reference, i.scrollParents.popper);
  return s && m.forEach(function(g) {
    g.addEventListener("scroll", r.update, ho);
  }), d && f.addEventListener("resize", r.update, ho), function() {
    s && m.forEach(function(g) {
      g.removeEventListener("scroll", r.update, ho);
    }), d && f.removeEventListener("resize", r.update, ho);
  };
}
var pc = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Gg, data: {} }, zg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _o(e) {
  return e.replace(/left|right|bottom|top/g, function(i) {
    return zg[i];
  });
}
var Ng = { start: "end", end: "start" };
function Ul(e) {
  return e.replace(/start|end/g, function(i) {
    return Ng[i];
  });
}
function Ga(e) {
  var i = de(e), r = i.pageXOffset, l = i.pageYOffset;
  return { scrollLeft: r, scrollTop: l };
}
function za(e) {
  return Kn(on(e)).left + Ga(e).scrollLeft;
}
function Ug(e) {
  var i = de(e), r = on(e), l = i.visualViewport, o = r.clientWidth, s = r.clientHeight, u = 0, d = 0;
  return l && (o = l.width, s = l.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (u = l.offsetLeft, d = l.offsetTop)), { width: o, height: s, x: u + za(e), y: d };
}
function Kg(e) {
  var i, r = on(e), l = Ga(e), o = (i = e.ownerDocument) == null ? void 0 : i.body, s = vn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = vn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), d = -l.scrollLeft + za(e), f = -l.scrollTop;
  return Oe(o || r).direction === "rtl" && (d += vn(r.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: u, x: d, y: f };
}
function Na(e) {
  var i = Oe(e), r = i.overflow, l = i.overflowX, o = i.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + l);
}
function mc(e) {
  return ["html", "body", "#document"].indexOf(Le(e)) >= 0 ? e.ownerDocument.body : ie(e) && Na(e) ? e : mc(zo(e));
}
function yi(e, i) {
  var r;
  i === void 0 && (i = []);
  var l = mc(e), o = l === ((r = e.ownerDocument) == null ? void 0 : r.body), s = de(l), u = o ? [s].concat(s.visualViewport || [], Na(l) ? l : []) : l, d = i.concat(u);
  return o ? d : d.concat(yi(zo(u)));
}
function Wr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Yg(e) {
  var i = Kn(e);
  return i.top = i.top + e.clientTop, i.left = i.left + e.clientLeft, i.bottom = i.top + e.clientHeight, i.right = i.left + e.clientWidth, i.width = e.clientWidth, i.height = e.clientHeight, i.x = i.left, i.y = i.top, i;
}
function Kl(e, i) {
  return i === sc ? Wr(Ug(e)) : Nn(i) ? Yg(i) : Wr(Kg(on(e)));
}
function jg(e) {
  var i = yi(zo(e)), r = ["absolute", "fixed"].indexOf(Oe(e).position) >= 0, l = r && ie(e) ? Fi(e) : e;
  return Nn(l) ? i.filter(function(o) {
    return Nn(o) && uc(o, l) && Le(o) !== "body";
  }) : [];
}
function Wg(e, i, r) {
  var l = i === "clippingParents" ? jg(e) : [].concat(i), o = [].concat(l, [r]), s = o[0], u = o.reduce(function(d, f) {
    var m = Kl(e, f);
    return d.top = vn(m.top, d.top), d.right = xo(m.right, d.right), d.bottom = xo(m.bottom, d.bottom), d.left = vn(m.left, d.left), d;
  }, Kl(e, s));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function gc(e) {
  var i = e.reference, r = e.element, l = e.placement, o = l ? be(l) : null, s = l ? Yn(l) : null, u = i.x + i.width / 2 - r.width / 2, d = i.y + i.height / 2 - r.height / 2, f;
  switch (o) {
    case Wt:
      f = { x: u, y: i.y - r.height };
      break;
    case oe:
      f = { x: u, y: i.y + i.height };
      break;
    case re:
      f = { x: i.x + i.width, y: d };
      break;
    case qt:
      f = { x: i.x - r.width, y: d };
      break;
    default:
      f = { x: i.x, y: i.y };
  }
  var m = o ? Ra(o) : null;
  if (m != null) {
    var g = m === "y" ? "height" : "width";
    switch (s) {
      case zn:
        f[m] = f[m] - (i[g] / 2 - r[g] / 2);
        break;
      case Bi:
        f[m] = f[m] + (i[g] / 2 - r[g] / 2);
        break;
    }
  }
  return f;
}
function ki(e, i) {
  i === void 0 && (i = {});
  var r = i, l = r.placement, o = l === void 0 ? e.placement : l, s = r.boundary, u = s === void 0 ? gg : s, d = r.rootBoundary, f = d === void 0 ? sc : d, m = r.elementContext, g = m === void 0 ? gi : m, v = r.altBoundary, b = v === void 0 ? !1 : v, M = r.padding, w = M === void 0 ? 0 : M, y = hc(typeof w != "number" ? w : dc(w, Qi)), B = g === gi ? vg : gi, A = e.rects.popper, I = e.elements[b ? B : g], F = Wg(Nn(I) ? I : I.contextElement || on(e.elements.popper), u, f), Q = Kn(e.elements.reference), k = gc({ reference: Q, element: A, placement: o }), U = Wr(Object.assign({}, A, k)), G = g === gi ? U : Q, Z = { top: F.top - G.top + y.top, bottom: G.bottom - F.bottom + y.bottom, left: F.left - G.left + y.left, right: G.right - F.right + y.right }, ut = e.modifiersData.offset;
  if (g === gi && ut) {
    var rt = ut[o];
    Object.keys(Z).forEach(function(tt) {
      var X = [re, oe].indexOf(tt) >= 0 ? 1 : -1, gt = [Wt, oe].indexOf(tt) >= 0 ? "y" : "x";
      Z[tt] += rt[gt] * X;
    });
  }
  return Z;
}
function qg(e, i) {
  i === void 0 && (i = {});
  var r = i, l = r.placement, o = r.boundary, s = r.rootBoundary, u = r.padding, d = r.flipVariations, f = r.allowedAutoPlacements, m = f === void 0 ? Qa : f, g = Yn(l), v = g ? d ? Gl : Gl.filter(function(w) {
    return Yn(w) === g;
  }) : Qi, b = v.filter(function(w) {
    return m.indexOf(w) >= 0;
  });
  b.length === 0 && (b = v);
  var M = b.reduce(function(w, y) {
    return w[y] = ki(e, { placement: y, boundary: o, rootBoundary: s, padding: u })[be(y)], w;
  }, {});
  return Object.keys(M).sort(function(w, y) {
    return M[w] - M[y];
  });
}
function Zg(e) {
  if (be(e) === Oa) return [];
  var i = _o(e);
  return [Ul(e), i, Ul(i)];
}
function Vg(e) {
  var i = e.state, r = e.options, l = e.name;
  if (!i.modifiersData[l]._skip) {
    for (var o = r.mainAxis, s = o === void 0 ? !0 : o, u = r.altAxis, d = u === void 0 ? !0 : u, f = r.fallbackPlacements, m = r.padding, g = r.boundary, v = r.rootBoundary, b = r.altBoundary, M = r.flipVariations, w = M === void 0 ? !0 : M, y = r.allowedAutoPlacements, B = i.options.placement, A = be(B), I = A === B, F = f || (I || !w ? [_o(B)] : Zg(B)), Q = [B].concat(F).reduce(function(lt, $) {
      return lt.concat(be($) === Oa ? qg(i, { placement: $, boundary: g, rootBoundary: v, padding: m, flipVariations: w, allowedAutoPlacements: y }) : $);
    }, []), k = i.rects.reference, U = i.rects.popper, G = /* @__PURE__ */ new Map(), Z = !0, ut = Q[0], rt = 0; rt < Q.length; rt++) {
      var tt = Q[rt], X = be(tt), gt = Yn(tt) === zn, bt = [Wt, oe].indexOf(X) >= 0, N = bt ? "width" : "height", R = ki(i, { placement: tt, boundary: g, rootBoundary: v, altBoundary: b, padding: m }), T = bt ? gt ? re : qt : gt ? oe : Wt;
      k[N] > U[N] && (T = _o(T));
      var H = _o(T), at = [];
      if (s && at.push(R[X] <= 0), d && at.push(R[T] <= 0, R[H] <= 0), at.every(function(lt) {
        return lt;
      })) {
        ut = tt, Z = !1;
        break;
      }
      G.set(tt, at);
    }
    if (Z) for (var S = w ? 3 : 1, q = function(lt) {
      var $ = Q.find(function(nt) {
        var zt = G.get(nt);
        if (zt) return zt.slice(0, lt).every(function(Nt) {
          return Nt;
        });
      });
      if ($) return ut = $, "break";
    }, st = S; st > 0; st--) {
      var ft = q(st);
      if (ft === "break") break;
    }
    i.placement !== ut && (i.modifiersData[l]._skip = !0, i.placement = ut, i.reset = !0);
  }
}
var Jg = { name: "flip", enabled: !0, phase: "main", fn: Vg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Yl(e, i, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - i.height - r.y, right: e.right - i.width + r.x, bottom: e.bottom - i.height + r.y, left: e.left - i.width - r.x };
}
function jl(e) {
  return [Wt, re, oe, qt].some(function(i) {
    return e[i] >= 0;
  });
}
function Xg(e) {
  var i = e.state, r = e.name, l = i.rects.reference, o = i.rects.popper, s = i.modifiersData.preventOverflow, u = ki(i, { elementContext: "reference" }), d = ki(i, { altBoundary: !0 }), f = Yl(u, l), m = Yl(d, o, s), g = jl(f), v = jl(m);
  i.modifiersData[r] = { referenceClippingOffsets: f, popperEscapeOffsets: m, isReferenceHidden: g, hasPopperEscaped: v }, i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-reference-hidden": g, "data-popper-escaped": v });
}
var $g = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Xg };
function tv(e, i, r) {
  var l = be(e), o = [qt, Wt].indexOf(l) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, i, { placement: e })) : r, u = s[0], d = s[1];
  return u = u || 0, d = (d || 0) * o, [qt, re].indexOf(l) >= 0 ? { x: d, y: u } : { x: u, y: d };
}
function ev(e) {
  var i = e.state, r = e.options, l = e.name, o = r.offset, s = o === void 0 ? [0, 0] : o, u = Qa.reduce(function(g, v) {
    return g[v] = tv(v, i.rects, s), g;
  }, {}), d = u[i.placement], f = d.x, m = d.y;
  i.modifiersData.popperOffsets != null && (i.modifiersData.popperOffsets.x += f, i.modifiersData.popperOffsets.y += m), i.modifiersData[l] = u;
}
var nv = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ev };
function iv(e) {
  var i = e.state, r = e.name;
  i.modifiersData[r] = gc({ reference: i.rects.reference, element: i.rects.popper, placement: i.placement });
}
var vc = { name: "popperOffsets", enabled: !0, phase: "read", fn: iv, data: {} };
function ov(e) {
  return e === "x" ? "y" : "x";
}
function rv(e) {
  var i = e.state, r = e.options, l = e.name, o = r.mainAxis, s = o === void 0 ? !0 : o, u = r.altAxis, d = u === void 0 ? !1 : u, f = r.boundary, m = r.rootBoundary, g = r.altBoundary, v = r.padding, b = r.tether, M = b === void 0 ? !0 : b, w = r.tetherOffset, y = w === void 0 ? 0 : w, B = ki(i, { boundary: f, rootBoundary: m, padding: v, altBoundary: g }), A = be(i.placement), I = Yn(i.placement), F = !I, Q = Ra(A), k = ov(Q), U = i.modifiersData.popperOffsets, G = i.rects.reference, Z = i.rects.popper, ut = typeof y == "function" ? y(Object.assign({}, i.rects, { placement: i.placement })) : y, rt = typeof ut == "number" ? { mainAxis: ut, altAxis: ut } : Object.assign({ mainAxis: 0, altAxis: 0 }, ut), tt = i.modifiersData.offset ? i.modifiersData.offset[i.placement] : null, X = { x: 0, y: 0 };
  if (U) {
    if (s) {
      var gt, bt = Q === "y" ? Wt : qt, N = Q === "y" ? oe : re, R = Q === "y" ? "height" : "width", T = U[Q], H = T + B[bt], at = T - B[N], S = M ? -Z[R] / 2 : 0, q = I === zn ? G[R] : Z[R], st = I === zn ? -Z[R] : -G[R], ft = i.elements.arrow, lt = M && ft ? Ha(ft) : { width: 0, height: 0 }, $ = i.modifiersData["arrow#persistent"] ? i.modifiersData["arrow#persistent"].padding : cc(), nt = $[bt], zt = $[N], Nt = Ai(0, G[R], lt[R]), Gi = F ? G[R] / 2 - S - Nt - nt - rt.mainAxis : q - Nt - nt - rt.mainAxis, Zn = F ? -G[R] / 2 + S + Nt + zt + rt.mainAxis : st + Nt + zt + rt.mainAxis, rn = i.elements.arrow && Fi(i.elements.arrow), an = rn ? Q === "y" ? rn.clientTop || 0 : rn.clientLeft || 0 : 0, En = (gt = tt == null ? void 0 : tt[Q]) != null ? gt : 0, Wo = T + Gi - En - an, zi = T + Zn - En, Vn = Ai(M ? xo(H, Wo) : H, T, M ? vn(at, zi) : at);
      U[Q] = Vn, X[Q] = Vn - T;
    }
    if (d) {
      var Ln, Cn = Q === "x" ? Wt : qt, qo = Q === "x" ? oe : re, fe = U[k], Ge = k === "y" ? "height" : "width", Jn = fe + B[Cn], Xn = fe - B[qo], $n = [Wt, qt].indexOf(A) !== -1, Ni = (Ln = tt == null ? void 0 : tt[k]) != null ? Ln : 0, xn = $n ? Jn : fe - G[Ge] - Z[Ge] - Ni + rt.altAxis, ti = $n ? fe + G[Ge] + Z[Ge] - Ni - rt.altAxis : Xn, ei = M && $n ? Tg(xn, fe, ti) : Ai(M ? xn : Jn, fe, M ? ti : Xn);
      U[k] = ei, X[k] = ei - fe;
    }
    i.modifiersData[l] = X;
  }
}
var av = { name: "preventOverflow", enabled: !0, phase: "main", fn: rv, requiresIfExists: ["offset"] };
function sv(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function lv(e) {
  return e === de(e) || !ie(e) ? Ga(e) : sv(e);
}
function uv(e) {
  var i = e.getBoundingClientRect(), r = Un(i.width) / e.offsetWidth || 1, l = Un(i.height) / e.offsetHeight || 1;
  return r !== 1 || l !== 1;
}
function cv(e, i, r) {
  r === void 0 && (r = !1);
  var l = ie(i), o = ie(i) && uv(i), s = on(i), u = Kn(e, o), d = { scrollLeft: 0, scrollTop: 0 }, f = { x: 0, y: 0 };
  return (l || !l && !r) && ((Le(i) !== "body" || Na(s)) && (d = lv(i)), ie(i) ? (f = Kn(i, !0), f.x += i.clientLeft, f.y += i.clientTop) : s && (f.x = za(s))), { x: u.left + d.scrollLeft - f.x, y: u.top + d.scrollTop - f.y, width: u.width, height: u.height };
}
function hv(e) {
  var i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(s) {
    i.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var u = [].concat(s.requires || [], s.requiresIfExists || []);
    u.forEach(function(d) {
      if (!r.has(d)) {
        var f = i.get(d);
        f && o(f);
      }
    }), l.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || o(s);
  }), l;
}
function dv(e) {
  var i = hv(e);
  return Mg.reduce(function(r, l) {
    return r.concat(i.filter(function(o) {
      return o.phase === l;
    }));
  }, []);
}
function fv(e) {
  var i;
  return function() {
    return i || (i = new Promise(function(r) {
      Promise.resolve().then(function() {
        i = void 0, r(e());
      });
    })), i;
  };
}
function pv(e) {
  var i = e.reduce(function(r, l) {
    var o = r[l.name];
    return r[l.name] = o ? Object.assign({}, o, l, { options: Object.assign({}, o.options, l.options), data: Object.assign({}, o.data, l.data) }) : l, r;
  }, {});
  return Object.keys(i).map(function(r) {
    return i[r];
  });
}
var Wl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ql() {
  for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
  return !i.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function Ua(e) {
  e === void 0 && (e = {});
  var i = e, r = i.defaultModifiers, l = r === void 0 ? [] : r, o = i.defaultOptions, s = o === void 0 ? Wl : o;
  return function(u, d, f) {
    f === void 0 && (f = s);
    var m = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Wl, s), modifiersData: {}, elements: { reference: u, popper: d }, attributes: {}, styles: {} }, g = [], v = !1, b = { state: m, setOptions: function(y) {
      var B = typeof y == "function" ? y(m.options) : y;
      w(), m.options = Object.assign({}, s, m.options, B), m.scrollParents = { reference: Nn(u) ? yi(u) : u.contextElement ? yi(u.contextElement) : [], popper: yi(d) };
      var A = dv(pv([].concat(l, m.options.modifiers)));
      return m.orderedModifiers = A.filter(function(I) {
        return I.enabled;
      }), M(), b.update();
    }, forceUpdate: function() {
      if (!v) {
        var y = m.elements, B = y.reference, A = y.popper;
        if (ql(B, A)) {
          m.rects = { reference: cv(B, Fi(A), m.options.strategy === "fixed"), popper: Ha(A) }, m.reset = !1, m.placement = m.options.placement, m.orderedModifiers.forEach(function(Z) {
            return m.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var I = 0; I < m.orderedModifiers.length; I++) {
            if (m.reset === !0) {
              m.reset = !1, I = -1;
              continue;
            }
            var F = m.orderedModifiers[I], Q = F.fn, k = F.options, U = k === void 0 ? {} : k, G = F.name;
            typeof Q == "function" && (m = Q({ state: m, options: U, name: G, instance: b }) || m);
          }
        }
      }
    }, update: fv(function() {
      return new Promise(function(y) {
        b.forceUpdate(), y(m);
      });
    }), destroy: function() {
      w(), v = !0;
    } };
    if (!ql(u, d)) return b;
    b.setOptions(f).then(function(y) {
      !v && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function M() {
      m.orderedModifiers.forEach(function(y) {
        var B = y.name, A = y.options, I = A === void 0 ? {} : A, F = y.effect;
        if (typeof F == "function") {
          var Q = F({ state: m, name: B, instance: b, options: I }), k = function() {
          };
          g.push(Q || k);
        }
      });
    }
    function w() {
      g.forEach(function(y) {
        return y();
      }), g = [];
    }
    return b;
  };
}
Ua();
var mv = [pc, vc, fc, lc];
Ua({ defaultModifiers: mv });
var gv = [pc, vc, fc, lc, nv, Jg, av, Qg, $g], vv = Ua({ defaultModifiers: gv });
const _v = ["fixed", "absolute"], Av = Ot({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: dt(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Qa,
    default: "bottom"
  },
  popperOptions: {
    type: dt(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: _v,
    default: "absolute"
  }
}), _c = Ot({
  ...Av,
  id: String,
  style: {
    type: dt([String, Array, Object])
  },
  className: {
    type: dt([String, Array, Object])
  },
  effect: {
    type: dt(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: dt([String, Array, Object])
  },
  popperStyle: {
    type: dt([String, Array, Object])
  },
  referenceEl: {
    type: dt(Object)
  },
  triggerTargetEl: {
    type: dt(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Ba(["ariaLabel"])
}), yv = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, wv = (e, i) => {
  const r = j(!1), l = j();
  return {
    focusStartRef: l,
    trapped: r,
    onFocusAfterReleased: (m) => {
      var g;
      ((g = m.detail) == null ? void 0 : g.focusReason) !== "pointer" && (l.value = "first", i("blur"));
    },
    onFocusAfterTrapped: () => {
      i("focus");
    },
    onFocusInTrap: (m) => {
      e.visible && !r.value && (m.target && (l.value = m.target), r.value = !0);
    },
    onFocusoutPrevented: (m) => {
      e.trapping || (m.detail.focusReason === "pointer" && m.preventDefault(), r.value = !1);
    },
    onReleaseRequested: () => {
      r.value = !1, i("close");
    }
  };
}, bv = (e, i = []) => {
  const { placement: r, strategy: l, popperOptions: o } = e, s = {
    placement: r,
    strategy: l,
    ...o,
    modifiers: [...Lv(e), ...i]
  };
  return Cv(s, o == null ? void 0 : o.modifiers), s;
}, Ev = (e) => {
  if (Xt)
    return qe(e);
};
function Lv(e) {
  const { offset: i, gpuAcceleration: r, fallbackPlacements: l } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, i ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: l
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: r
      }
    }
  ];
}
function Cv(e, i) {
  i && (e.modifiers = [...e.modifiers, ...i ?? []]);
}
const xv = (e, i, r = {}) => {
  const l = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: f }) => {
      const m = Mv(f);
      Object.assign(u.value, m);
    },
    requires: ["computeStyles"]
  }, o = P(() => {
    const { onFirstUpdate: f, placement: m, strategy: g, modifiers: v } = C(r);
    return {
      onFirstUpdate: f,
      placement: m || "bottom",
      strategy: g || "absolute",
      modifiers: [
        ...v || [],
        l,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Du(), u = j({
    styles: {
      popper: {
        position: C(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), d = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return _t(o, (f) => {
    const m = C(s);
    m && m.setOptions(f);
  }, {
    deep: !0
  }), _t([e, i], ([f, m]) => {
    d(), !(!f || !m) && (s.value = vv(f, m, C(o)));
  }), Ce(() => {
    d();
  }), {
    state: P(() => {
      var f;
      return { ...((f = C(s)) == null ? void 0 : f.state) || {} };
    }),
    styles: P(() => C(u).styles),
    attributes: P(() => C(u).attributes),
    update: () => {
      var f;
      return (f = C(s)) == null ? void 0 : f.update();
    },
    forceUpdate: () => {
      var f;
      return (f = C(s)) == null ? void 0 : f.forceUpdate();
    },
    instanceRef: P(() => C(s))
  };
};
function Mv(e) {
  const i = Object.keys(e.elements), r = zr(i.map((o) => [o, e.styles[o] || {}])), l = zr(i.map((o) => [o, e.attributes[o]]));
  return {
    styles: r,
    attributes: l
  };
}
const Iv = 0, Bv = (e) => {
  const { popperInstanceRef: i, contentRef: r, triggerRef: l, role: o } = Lt(Ta, void 0), s = j(), u = j(), d = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), f = P(() => {
    var A;
    const I = C(s), F = (A = C(u)) != null ? A : Iv;
    return {
      name: "arrow",
      enabled: !Np(I),
      options: {
        element: I,
        padding: F
      }
    };
  }), m = P(() => ({
    onFirstUpdate: () => {
      w();
    },
    ...bv(e, [
      C(f),
      C(d)
    ])
  })), g = P(() => Ev(e.referenceEl) || C(l)), { attributes: v, state: b, styles: M, update: w, forceUpdate: y, instanceRef: B } = xv(g, r, m);
  return _t(B, (A) => i.value = A), Kt(() => {
    _t(() => {
      var A;
      return (A = C(g)) == null ? void 0 : A.getBoundingClientRect();
    }, () => {
      w();
    });
  }), {
    attributes: v,
    arrowRef: s,
    contentRef: r,
    instanceRef: B,
    state: b,
    styles: M,
    role: o,
    forceUpdate: y,
    update: w
  };
}, kv = (e, {
  attributes: i,
  styles: r,
  role: l
}) => {
  const { nextZIndex: o } = ym(), s = kt("popper"), u = P(() => C(i).popper), d = j(Ve(e.zIndex) ? e.zIndex : o()), f = P(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), m = P(() => [
    { zIndex: C(d) },
    C(r).popper,
    e.popperStyle || {}
  ]), g = P(() => l.value === "dialog" ? "false" : void 0), v = P(() => C(r).arrow || {});
  return {
    ariaModal: g,
    arrowStyle: v,
    contentAttrs: u,
    contentClass: f,
    contentStyle: m,
    contentZIndex: d,
    updateZIndex: () => {
      d.value = Ve(e.zIndex) ? e.zIndex : o();
    }
  };
}, Dv = J({
  name: "ElPopperContent"
}), Tv = /* @__PURE__ */ J({
  ...Dv,
  props: _c,
  emits: yv,
  setup(e, { expose: i, emit: r }) {
    const l = e, {
      focusStartRef: o,
      trapped: s,
      onFocusAfterReleased: u,
      onFocusAfterTrapped: d,
      onFocusInTrap: f,
      onFocusoutPrevented: m,
      onReleaseRequested: g
    } = wv(l, r), { attributes: v, arrowRef: b, contentRef: M, styles: w, instanceRef: y, role: B, update: A } = Bv(l), {
      ariaModal: I,
      arrowStyle: F,
      contentAttrs: Q,
      contentClass: k,
      contentStyle: U,
      updateZIndex: G
    } = kv(l, {
      styles: w,
      attributes: v,
      role: B
    }), Z = Lt(Co, void 0), ut = j();
    Ee(tc, {
      arrowStyle: F,
      arrowRef: b,
      arrowOffset: ut
    }), Z && Ee(Co, {
      ...Z,
      addInputId: bo,
      removeInputId: bo
    });
    let rt;
    const tt = (gt = !0) => {
      A(), gt && G();
    }, X = () => {
      tt(!1), l.visible && l.focusOnShow ? s.value = !0 : l.visible === !1 && (s.value = !1);
    };
    return Kt(() => {
      _t(() => l.triggerTargetEl, (gt, bt) => {
        rt == null || rt(), rt = void 0;
        const N = C(gt || M.value), R = C(bt || M.value);
        Je(N) && (rt = _t([B, () => l.ariaLabel, I, () => l.id], (T) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, at) => {
            Mi(T[at]) ? N.removeAttribute(H) : N.setAttribute(H, T[at]);
          });
        }, { immediate: !0 })), R !== N && Je(R) && ["role", "aria-label", "aria-modal", "id"].forEach((T) => {
          R.removeAttribute(T);
        });
      }, { immediate: !0 }), _t(() => l.visible, X, { immediate: !0 });
    }), Ce(() => {
      rt == null || rt(), rt = void 0;
    }), i({
      popperContentRef: M,
      popperInstanceRef: y,
      updatePopper: tt,
      contentStyle: U
    }), (gt, bt) => (K(), ht("div", wn({
      ref_key: "contentRef",
      ref: M
    }, C(Q), {
      style: C(U),
      class: C(k),
      tabindex: "-1",
      onMouseenter: (N) => gt.$emit("mouseenter", N),
      onMouseleave: (N) => gt.$emit("mouseleave", N)
    }), [
      xt(C(mg), {
        trapped: C(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": C(M),
        "focus-start-el": C(o),
        onFocusAfterTrapped: C(d),
        onFocusAfterReleased: C(u),
        onFocusin: C(f),
        onFocusoutPrevented: C(m),
        onReleaseRequested: C(g)
      }, {
        default: mt(() => [
          yt(gt.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Pv = /* @__PURE__ */ Qt(Tv, [["__file", "content.vue"]]);
const Sv = He(jm), Ka = Symbol("elTooltip");
function Zl() {
  let e;
  const i = (l, o) => {
    r(), e = window.setTimeout(l, o);
  }, r = () => window.clearTimeout(e);
  return Fo(() => r()), {
    registerTimeout: i,
    cancelTimeout: r
  };
}
const Ov = Ot({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), Qv = ({
  showAfter: e,
  hideAfter: i,
  autoClose: r,
  open: l,
  close: o
}) => {
  const { registerTimeout: s } = Zl(), {
    registerTimeout: u,
    cancelTimeout: d
  } = Zl();
  return {
    onOpen: (g) => {
      s(() => {
        l(g);
        const v = C(r);
        Ve(v) && v > 0 && u(() => {
          o(g);
        }, v);
      }, C(e));
    },
    onClose: (g) => {
      d(), s(() => {
        o(g);
      }, C(i));
    }
  };
}, Ac = Ot({
  ...Ov,
  ..._c,
  appendTo: {
    type: dt([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: dt(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Ba(["ariaLabel"])
}), yc = Ot({
  ...ic,
  disabled: Boolean,
  trigger: {
    type: dt([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: dt(Array),
    default: () => [Ht.enter, Ht.numpadEnter, Ht.space]
  }
}), Fv = Ho({
  type: dt(Boolean),
  default: null
}), Hv = Ho({
  type: dt(Function)
}), Rv = (e) => {
  const i = `update:${e}`, r = `onUpdate:${e}`, l = [i], o = {
    [e]: Fv,
    [r]: Hv
  };
  return {
    useModelToggle: ({
      indicator: u,
      toggleReason: d,
      shouldHideWhenRouteChanges: f,
      shouldProceed: m,
      onShow: g,
      onHide: v
    }) => {
      const b = he(), { emit: M } = b, w = b.props, y = P(() => fn(w[r])), B = P(() => w[e] === null), A = (G) => {
        u.value !== !0 && (u.value = !0, d && (d.value = G), fn(g) && g(G));
      }, I = (G) => {
        u.value !== !1 && (u.value = !1, d && (d.value = G), fn(v) && v(G));
      }, F = (G) => {
        if (w.disabled === !0 || fn(m) && !m())
          return;
        const Z = y.value && Xt;
        Z && M(i, !0), (B.value || !Z) && A(G);
      }, Q = (G) => {
        if (w.disabled === !0 || !Xt)
          return;
        const Z = y.value && Xt;
        Z && M(i, !1), (B.value || !Z) && I(G);
      }, k = (G) => {
        Rn(G) && (w.disabled && G ? y.value && M(i, !1) : u.value !== G && (G ? A() : I()));
      }, U = () => {
        u.value ? Q() : F();
      };
      return _t(() => w[e], k), f && b.appContext.config.globalProperties.$route !== void 0 && _t(() => ({
        ...b.proxy.$route
      }), () => {
        f.value && u.value && Q();
      }), Kt(() => {
        k(w[e]);
      }), {
        hide: Q,
        show: F,
        toggle: U,
        hasUpdateHandler: y
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: l
  };
}, {
  useModelToggleProps: Gv,
  useModelToggleEmits: zv,
  useModelToggle: Nv
} = Rv("visible"), Uv = Ot({
  ...ec,
  ...Gv,
  ...Ac,
  ...yc,
  ...nc,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Kv = [
  ...zv,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Yv = (e, i) => gn(e) ? e.includes(i) : e === i, Qn = (e, i, r) => (l) => {
  Yv(C(e), i) && r(l);
}, Te = (e, i, { checkForDefaultPrevented: r = !0 } = {}) => (o) => {
  const s = e == null ? void 0 : e(o);
  if (r === !1 || !s)
    return i == null ? void 0 : i(o);
}, jv = J({
  name: "ElTooltipTrigger"
}), Wv = /* @__PURE__ */ J({
  ...jv,
  props: yc,
  setup(e, { expose: i }) {
    const r = e, l = kt("tooltip"), { controlled: o, id: s, open: u, onOpen: d, onClose: f, onToggle: m } = Lt(Ka, void 0), g = j(null), v = () => {
      if (C(o) || r.disabled)
        return !0;
    }, b = Pe(r, "trigger"), M = Te(v, Qn(b, "hover", d)), w = Te(v, Qn(b, "hover", f)), y = Te(v, Qn(b, "click", (Q) => {
      Q.button === 0 && m(Q);
    })), B = Te(v, Qn(b, "focus", d)), A = Te(v, Qn(b, "focus", f)), I = Te(v, Qn(b, "contextmenu", (Q) => {
      Q.preventDefault(), m(Q);
    })), F = Te(v, (Q) => {
      const { code: k } = Q;
      r.triggerKeys.includes(k) && (Q.preventDefault(), m(Q));
    });
    return i({
      triggerRef: g
    }), (Q, k) => (K(), vt(C(eg), {
      id: C(s),
      "virtual-ref": Q.virtualRef,
      open: C(u),
      "virtual-triggering": Q.virtualTriggering,
      class: Et(C(l).e("trigger")),
      onBlur: C(A),
      onClick: C(y),
      onContextmenu: C(I),
      onFocus: C(B),
      onMouseenter: C(M),
      onMouseleave: C(w),
      onKeydown: C(F)
    }, {
      default: mt(() => [
        yt(Q.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var qv = /* @__PURE__ */ Qt(Wv, [["__file", "trigger.vue"]]);
const Zv = Ot({
  to: {
    type: dt([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Vv = /* @__PURE__ */ J({
  __name: "teleport",
  props: Zv,
  setup(e) {
    return (i, r) => i.disabled ? yt(i.$slots, "default", { key: 0 }) : (K(), vt(Nd, {
      key: 1,
      to: i.to
    }, [
      yt(i.$slots, "default")
    ], 8, ["to"]));
  }
});
var Jv = /* @__PURE__ */ Qt(Vv, [["__file", "teleport.vue"]]);
const Xv = He(Jv), wc = () => {
  const e = Aa(), i = Zu(), r = P(() => `${e.value}-popper-container-${i.prefix}`), l = P(() => `#${r.value}`);
  return {
    id: r,
    selector: l
  };
}, $v = (e) => {
  const i = document.createElement("div");
  return i.id = e, document.body.appendChild(i), i;
}, t_ = () => {
  const { id: e, selector: i } = wc();
  return Ud(() => {
    Xt && (process.env.NODE_ENV === "test" || !document.body.querySelector(i.value)) && $v(e.value);
  }), {
    id: e,
    selector: i
  };
}, e_ = J({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), n_ = /* @__PURE__ */ J({
  ...e_,
  props: Ac,
  setup(e, { expose: i }) {
    const r = e, { selector: l } = wc(), o = kt("tooltip"), s = j();
    let u;
    const {
      controlled: d,
      id: f,
      open: m,
      trigger: g,
      onClose: v,
      onOpen: b,
      onShow: M,
      onHide: w,
      onBeforeShow: y,
      onBeforeHide: B
    } = Lt(Ka, void 0), A = P(() => r.transition || `${o.namespace.value}-fade-in-linear`), I = P(() => process.env.NODE_ENV === "test" ? !0 : r.persistent);
    Ce(() => {
      u == null || u();
    });
    const F = P(() => C(I) ? !0 : C(m)), Q = P(() => r.disabled ? !1 : C(m)), k = P(() => r.appendTo || l.value), U = P(() => {
      var T;
      return (T = r.style) != null ? T : {};
    }), G = j(!0), Z = () => {
      w(), R() && De(document.body), G.value = !0;
    }, ut = () => {
      if (C(d))
        return !0;
    }, rt = Te(ut, () => {
      r.enterable && C(g) === "hover" && b();
    }), tt = Te(ut, () => {
      C(g) === "hover" && v();
    }), X = () => {
      var T, H;
      (H = (T = s.value) == null ? void 0 : T.updatePopper) == null || H.call(T), y == null || y();
    }, gt = () => {
      B == null || B();
    }, bt = () => {
      M(), u = sm(P(() => {
        var T;
        return (T = s.value) == null ? void 0 : T.popperContentRef;
      }), () => {
        if (C(d))
          return;
        C(g) !== "hover" && v();
      });
    }, N = () => {
      r.virtualTriggering || v();
    }, R = (T) => {
      var H;
      const at = (H = s.value) == null ? void 0 : H.popperContentRef, S = (T == null ? void 0 : T.relatedTarget) || document.activeElement;
      return at == null ? void 0 : at.contains(S);
    };
    return _t(() => C(m), (T) => {
      T ? G.value = !1 : u == null || u();
    }, {
      flush: "post"
    }), _t(() => r.content, () => {
      var T, H;
      (H = (T = s.value) == null ? void 0 : T.updatePopper) == null || H.call(T);
    }), i({
      contentRef: s,
      isFocusInsideContent: R
    }), (T, H) => (K(), vt(C(Xv), {
      disabled: !T.teleported,
      to: C(k)
    }, {
      default: mt(() => [
        xt(va, {
          name: C(A),
          onAfterLeave: Z,
          onBeforeEnter: X,
          onAfterEnter: bt,
          onBeforeLeave: gt
        }, {
          default: mt(() => [
            C(F) ? To((K(), vt(C(Pv), wn({
              key: 0,
              id: C(f),
              ref_key: "contentRef",
              ref: s
            }, T.$attrs, {
              "aria-label": T.ariaLabel,
              "aria-hidden": G.value,
              "boundaries-padding": T.boundariesPadding,
              "fallback-placements": T.fallbackPlacements,
              "gpu-acceleration": T.gpuAcceleration,
              offset: T.offset,
              placement: T.placement,
              "popper-options": T.popperOptions,
              strategy: T.strategy,
              effect: T.effect,
              enterable: T.enterable,
              pure: T.pure,
              "popper-class": T.popperClass,
              "popper-style": [T.popperStyle, C(U)],
              "reference-el": T.referenceEl,
              "trigger-target-el": T.triggerTargetEl,
              visible: C(Q),
              "z-index": T.zIndex,
              onMouseenter: C(rt),
              onMouseleave: C(tt),
              onBlur: N,
              onClose: C(v)
            }), {
              default: mt(() => [
                yt(T.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Su, C(Q)]
            ]) : It("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var i_ = /* @__PURE__ */ Qt(n_, [["__file", "content.vue"]]);
const o_ = J({
  name: "ElTooltip"
}), r_ = /* @__PURE__ */ J({
  ...o_,
  props: Uv,
  emits: Kv,
  setup(e, { expose: i, emit: r }) {
    const l = e;
    t_();
    const o = Vu(), s = j(), u = j(), d = () => {
      var A;
      const I = C(s);
      I && ((A = I.popperInstanceRef) == null || A.update());
    }, f = j(!1), m = j(), { show: g, hide: v, hasUpdateHandler: b } = Nv({
      indicator: f,
      toggleReason: m
    }), { onOpen: M, onClose: w } = Qv({
      showAfter: Pe(l, "showAfter"),
      hideAfter: Pe(l, "hideAfter"),
      autoClose: Pe(l, "autoClose"),
      open: g,
      close: v
    }), y = P(() => Rn(l.visible) && !b.value);
    Ee(Ka, {
      controlled: y,
      id: o,
      open: ga(f),
      trigger: Pe(l, "trigger"),
      onOpen: (A) => {
        M(A);
      },
      onClose: (A) => {
        w(A);
      },
      onToggle: (A) => {
        C(f) ? w(A) : M(A);
      },
      onShow: () => {
        r("show", m.value);
      },
      onHide: () => {
        r("hide", m.value);
      },
      onBeforeShow: () => {
        r("before-show", m.value);
      },
      onBeforeHide: () => {
        r("before-hide", m.value);
      },
      updatePopper: d
    }), _t(() => l.disabled, (A) => {
      A && f.value && (f.value = !1);
    });
    const B = (A) => {
      var I;
      return (I = u.value) == null ? void 0 : I.isFocusInsideContent(A);
    };
    return Kd(() => f.value && v()), i({
      popperRef: s,
      contentRef: u,
      isFocusInsideContent: B,
      updatePopper: d,
      onOpen: M,
      onClose: w,
      hide: v
    }), (A, I) => (K(), vt(C(Sv), {
      ref_key: "popperRef",
      ref: s,
      role: A.role
    }, {
      default: mt(() => [
        xt(qv, {
          disabled: A.disabled,
          trigger: A.trigger,
          "trigger-keys": A.triggerKeys,
          "virtual-ref": A.virtualRef,
          "virtual-triggering": A.virtualTriggering
        }, {
          default: mt(() => [
            A.$slots.default ? yt(A.$slots, "default", { key: 0 }) : It("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        xt(i_, {
          ref_key: "contentRef",
          ref: u,
          "aria-label": A.ariaLabel,
          "boundaries-padding": A.boundariesPadding,
          content: A.content,
          disabled: A.disabled,
          effect: A.effect,
          enterable: A.enterable,
          "fallback-placements": A.fallbackPlacements,
          "hide-after": A.hideAfter,
          "gpu-acceleration": A.gpuAcceleration,
          offset: A.offset,
          persistent: A.persistent,
          "popper-class": A.popperClass,
          "popper-style": A.popperStyle,
          placement: A.placement,
          "popper-options": A.popperOptions,
          pure: A.pure,
          "raw-content": A.rawContent,
          "reference-el": A.referenceEl,
          "trigger-target-el": A.triggerTargetEl,
          "show-after": A.showAfter,
          strategy: A.strategy,
          teleported: A.teleported,
          transition: A.transition,
          "virtual-triggering": A.virtualTriggering,
          "z-index": A.zIndex,
          "append-to": A.appendTo
        }, {
          default: mt(() => [
            yt(A.$slots, "content", {}, () => [
              A.rawContent ? (K(), ht("span", {
                key: 0,
                innerHTML: A.content
              }, null, 8, ["innerHTML"])) : (K(), ht("span", { key: 1 }, Se(A.content), 1))
            ]),
            A.showArrow ? (K(), vt(C(Zm), {
              key: 0,
              "arrow-offset": A.arrowOffset
            }, null, 8, ["arrow-offset"])) : It("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var a_ = /* @__PURE__ */ Qt(r_, [["__file", "tooltip.vue"]]);
const bc = He(a_), Ec = Symbol("buttonGroupContextKey"), s_ = ({ from: e, replacement: i, scope: r, version: l, ref: o, type: s = "API" }, u) => {
  _t(() => C(u), (d) => {
    d && $e(r, `[${s}] ${e} is about to be deprecated in version ${l}, please use ${i} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, l_ = (e, i) => {
  s_({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, P(() => e.type === "text"));
  const r = Lt(Ec, void 0), l = Cm("button"), { form: o } = Ju(), s = $u(P(() => r == null ? void 0 : r.size)), u = Da(), d = j(), f = Yd(), m = P(() => e.type || (r == null ? void 0 : r.type) || ""), g = P(() => {
    var w, y, B;
    return (B = (y = e.autoInsertSpace) != null ? y : (w = l.value) == null ? void 0 : w.autoInsertSpace) != null ? B : !1;
  }), v = P(() => e.tag === "button" ? {
    ariaDisabled: u.value || e.loading,
    disabled: u.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), b = P(() => {
    var w;
    const y = (w = f.default) == null ? void 0 : w.call(f);
    if (g.value && (y == null ? void 0 : y.length) === 1) {
      const B = y[0];
      if ((B == null ? void 0 : B.type) === Pu) {
        const A = B.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(A.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: u,
    _size: s,
    _type: m,
    _ref: d,
    _props: v,
    shouldAddSpace: b,
    handleClick: (w) => {
      if (u.value || e.loading) {
        w.stopPropagation();
        return;
      }
      e.nativeType === "reset" && (o == null || o.resetFields()), i("click", w);
    }
  };
}, u_ = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], c_ = ["button", "submit", "reset"], qr = Ot({
  size: bm,
  disabled: Boolean,
  type: {
    type: String,
    values: u_,
    default: ""
  },
  icon: {
    type: ce
  },
  nativeType: {
    type: String,
    values: c_,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: ce,
    default: () => qu
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: dt([String, Object]),
    default: "button"
  }
}), h_ = {
  click: (e) => e instanceof MouseEvent
};
function Rt(e, i) {
  d_(e) && (e = "100%");
  var r = f_(e);
  return e = i === 360 ? e : Math.min(i, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * i), 10) / 100), Math.abs(e - i) < 1e-6 ? 1 : (i === 360 ? e = (e < 0 ? e % i + i : e % i) / parseFloat(String(i)) : e = e % i / parseFloat(String(i)), e);
}
function fo(e) {
  return Math.min(1, Math.max(0, e));
}
function d_(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function f_(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Lc(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function po(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function pn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function p_(e, i, r) {
  return {
    r: Rt(e, 255) * 255,
    g: Rt(i, 255) * 255,
    b: Rt(r, 255) * 255
  };
}
function Vl(e, i, r) {
  e = Rt(e, 255), i = Rt(i, 255), r = Rt(r, 255);
  var l = Math.max(e, i, r), o = Math.min(e, i, r), s = 0, u = 0, d = (l + o) / 2;
  if (l === o)
    u = 0, s = 0;
  else {
    var f = l - o;
    switch (u = d > 0.5 ? f / (2 - l - o) : f / (l + o), l) {
      case e:
        s = (i - r) / f + (i < r ? 6 : 0);
        break;
      case i:
        s = (r - e) / f + 2;
        break;
      case r:
        s = (e - i) / f + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: u, l: d };
}
function kr(e, i, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (i - e) * (6 * r) : r < 1 / 2 ? i : r < 2 / 3 ? e + (i - e) * (2 / 3 - r) * 6 : e;
}
function m_(e, i, r) {
  var l, o, s;
  if (e = Rt(e, 360), i = Rt(i, 100), r = Rt(r, 100), i === 0)
    o = r, s = r, l = r;
  else {
    var u = r < 0.5 ? r * (1 + i) : r + i - r * i, d = 2 * r - u;
    l = kr(d, u, e + 1 / 3), o = kr(d, u, e), s = kr(d, u, e - 1 / 3);
  }
  return { r: l * 255, g: o * 255, b: s * 255 };
}
function Jl(e, i, r) {
  e = Rt(e, 255), i = Rt(i, 255), r = Rt(r, 255);
  var l = Math.max(e, i, r), o = Math.min(e, i, r), s = 0, u = l, d = l - o, f = l === 0 ? 0 : d / l;
  if (l === o)
    s = 0;
  else {
    switch (l) {
      case e:
        s = (i - r) / d + (i < r ? 6 : 0);
        break;
      case i:
        s = (r - e) / d + 2;
        break;
      case r:
        s = (e - i) / d + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: f, v: u };
}
function g_(e, i, r) {
  e = Rt(e, 360) * 6, i = Rt(i, 100), r = Rt(r, 100);
  var l = Math.floor(e), o = e - l, s = r * (1 - i), u = r * (1 - o * i), d = r * (1 - (1 - o) * i), f = l % 6, m = [r, u, s, s, d, r][f], g = [d, r, r, u, s, s][f], v = [s, s, d, r, r, u][f];
  return { r: m * 255, g: g * 255, b: v * 255 };
}
function Xl(e, i, r, l) {
  var o = [
    pn(Math.round(e).toString(16)),
    pn(Math.round(i).toString(16)),
    pn(Math.round(r).toString(16))
  ];
  return l && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function v_(e, i, r, l, o) {
  var s = [
    pn(Math.round(e).toString(16)),
    pn(Math.round(i).toString(16)),
    pn(Math.round(r).toString(16)),
    pn(__(l))
  ];
  return o && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function __(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function $l(e) {
  return Zt(e) / 255;
}
function Zt(e) {
  return parseInt(e, 16);
}
function A_(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Zr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function y_(e) {
  var i = { r: 0, g: 0, b: 0 }, r = 1, l = null, o = null, s = null, u = !1, d = !1;
  return typeof e == "string" && (e = E_(e)), typeof e == "object" && (ke(e.r) && ke(e.g) && ke(e.b) ? (i = p_(e.r, e.g, e.b), u = !0, d = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ke(e.h) && ke(e.s) && ke(e.v) ? (l = po(e.s), o = po(e.v), i = g_(e.h, l, o), u = !0, d = "hsv") : ke(e.h) && ke(e.s) && ke(e.l) && (l = po(e.s), s = po(e.l), i = m_(e.h, l, s), u = !0, d = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Lc(r), {
    ok: u,
    format: e.format || d,
    r: Math.min(255, Math.max(i.r, 0)),
    g: Math.min(255, Math.max(i.g, 0)),
    b: Math.min(255, Math.max(i.b, 0)),
    a: r
  };
}
var w_ = "[-\\+]?\\d+%?", b_ = "[-\\+]?\\d*\\.\\d+%?", Ze = "(?:".concat(b_, ")|(?:").concat(w_, ")"), Dr = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), Tr = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), le = {
  CSS_UNIT: new RegExp(Ze),
  rgb: new RegExp("rgb" + Dr),
  rgba: new RegExp("rgba" + Tr),
  hsl: new RegExp("hsl" + Dr),
  hsla: new RegExp("hsla" + Tr),
  hsv: new RegExp("hsv" + Dr),
  hsva: new RegExp("hsva" + Tr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function E_(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var i = !1;
  if (Zr[e])
    e = Zr[e], i = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = le.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = le.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = le.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = le.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = le.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = le.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = le.hex8.exec(e), r ? {
    r: Zt(r[1]),
    g: Zt(r[2]),
    b: Zt(r[3]),
    a: $l(r[4]),
    format: i ? "name" : "hex8"
  } : (r = le.hex6.exec(e), r ? {
    r: Zt(r[1]),
    g: Zt(r[2]),
    b: Zt(r[3]),
    format: i ? "name" : "hex"
  } : (r = le.hex4.exec(e), r ? {
    r: Zt(r[1] + r[1]),
    g: Zt(r[2] + r[2]),
    b: Zt(r[3] + r[3]),
    a: $l(r[4] + r[4]),
    format: i ? "name" : "hex8"
  } : (r = le.hex3.exec(e), r ? {
    r: Zt(r[1] + r[1]),
    g: Zt(r[2] + r[2]),
    b: Zt(r[3] + r[3]),
    format: i ? "name" : "hex"
  } : !1)))))))));
}
function ke(e) {
  return !!le.CSS_UNIT.exec(String(e));
}
var Cc = (
  /** @class */
  function() {
    function e(i, r) {
      i === void 0 && (i = ""), r === void 0 && (r = {});
      var l;
      if (i instanceof e)
        return i;
      typeof i == "number" && (i = A_(i)), this.originalInput = i;
      var o = y_(i);
      this.originalInput = i, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (l = r.format) !== null && l !== void 0 ? l : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var i = this.toRgb();
      return (i.r * 299 + i.g * 587 + i.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var i = this.toRgb(), r, l, o, s = i.r / 255, u = i.g / 255, d = i.b / 255;
      return s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), u <= 0.03928 ? l = u / 12.92 : l = Math.pow((u + 0.055) / 1.055, 2.4), d <= 0.03928 ? o = d / 12.92 : o = Math.pow((d + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * l + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(i) {
      return this.a = Lc(i), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var i = this.toHsl().s;
      return i === 0;
    }, e.prototype.toHsv = function() {
      var i = Jl(this.r, this.g, this.b);
      return { h: i.h * 360, s: i.s, v: i.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var i = Jl(this.r, this.g, this.b), r = Math.round(i.h * 360), l = Math.round(i.s * 100), o = Math.round(i.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(l, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(l, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var i = Vl(this.r, this.g, this.b);
      return { h: i.h * 360, s: i.s, l: i.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var i = Vl(this.r, this.g, this.b), r = Math.round(i.h * 360), l = Math.round(i.s * 100), o = Math.round(i.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(l, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(l, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(i) {
      return i === void 0 && (i = !1), Xl(this.r, this.g, this.b, i);
    }, e.prototype.toHexString = function(i) {
      return i === void 0 && (i = !1), "#" + this.toHex(i);
    }, e.prototype.toHex8 = function(i) {
      return i === void 0 && (i = !1), v_(this.r, this.g, this.b, this.a, i);
    }, e.prototype.toHex8String = function(i) {
      return i === void 0 && (i = !1), "#" + this.toHex8(i);
    }, e.prototype.toHexShortString = function(i) {
      return i === void 0 && (i = !1), this.a === 1 ? this.toHexString(i) : this.toHex8String(i);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var i = Math.round(this.r), r = Math.round(this.g), l = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(i, ", ").concat(r, ", ").concat(l, ")") : "rgba(".concat(i, ", ").concat(r, ", ").concat(l, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var i = function(r) {
        return "".concat(Math.round(Rt(r, 255) * 100), "%");
      };
      return {
        r: i(this.r),
        g: i(this.g),
        b: i(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var i = function(r) {
        return Math.round(Rt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(i(this.r), "%, ").concat(i(this.g), "%, ").concat(i(this.b), "%)") : "rgba(".concat(i(this.r), "%, ").concat(i(this.g), "%, ").concat(i(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var i = "#" + Xl(this.r, this.g, this.b, !1), r = 0, l = Object.entries(Zr); r < l.length; r++) {
        var o = l[r], s = o[0], u = o[1];
        if (i === u)
          return s;
      }
      return !1;
    }, e.prototype.toString = function(i) {
      var r = !!i;
      i = i ?? this.format;
      var l = !1, o = this.a < 1 && this.a >= 0, s = !r && o && (i.startsWith("hex") || i === "name");
      return s ? i === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (i === "rgb" && (l = this.toRgbString()), i === "prgb" && (l = this.toPercentageRgbString()), (i === "hex" || i === "hex6") && (l = this.toHexString()), i === "hex3" && (l = this.toHexString(!0)), i === "hex4" && (l = this.toHex8String(!0)), i === "hex8" && (l = this.toHex8String()), i === "name" && (l = this.toName()), i === "hsl" && (l = this.toHslString()), i === "hsv" && (l = this.toHsvString()), l || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(i) {
      i === void 0 && (i = 10);
      var r = this.toHsl();
      return r.l += i / 100, r.l = fo(r.l), new e(r);
    }, e.prototype.brighten = function(i) {
      i === void 0 && (i = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(i / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(i / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(i / 100)))), new e(r);
    }, e.prototype.darken = function(i) {
      i === void 0 && (i = 10);
      var r = this.toHsl();
      return r.l -= i / 100, r.l = fo(r.l), new e(r);
    }, e.prototype.tint = function(i) {
      return i === void 0 && (i = 10), this.mix("white", i);
    }, e.prototype.shade = function(i) {
      return i === void 0 && (i = 10), this.mix("black", i);
    }, e.prototype.desaturate = function(i) {
      i === void 0 && (i = 10);
      var r = this.toHsl();
      return r.s -= i / 100, r.s = fo(r.s), new e(r);
    }, e.prototype.saturate = function(i) {
      i === void 0 && (i = 10);
      var r = this.toHsl();
      return r.s += i / 100, r.s = fo(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(i) {
      var r = this.toHsl(), l = (r.h + i) % 360;
      return r.h = l < 0 ? 360 + l : l, new e(r);
    }, e.prototype.mix = function(i, r) {
      r === void 0 && (r = 50);
      var l = this.toRgb(), o = new e(i).toRgb(), s = r / 100, u = {
        r: (o.r - l.r) * s + l.r,
        g: (o.g - l.g) * s + l.g,
        b: (o.b - l.b) * s + l.b,
        a: (o.a - l.a) * s + l.a
      };
      return new e(u);
    }, e.prototype.analogous = function(i, r) {
      i === void 0 && (i = 6), r === void 0 && (r = 30);
      var l = this.toHsl(), o = 360 / r, s = [this];
      for (l.h = (l.h - (o * i >> 1) + 720) % 360; --i; )
        l.h = (l.h + o) % 360, s.push(new e(l));
      return s;
    }, e.prototype.complement = function() {
      var i = this.toHsl();
      return i.h = (i.h + 180) % 360, new e(i);
    }, e.prototype.monochromatic = function(i) {
      i === void 0 && (i = 6);
      for (var r = this.toHsv(), l = r.h, o = r.s, s = r.v, u = [], d = 1 / i; i--; )
        u.push(new e({ h: l, s: o, v: s })), s = (s + d) % 1;
      return u;
    }, e.prototype.splitcomplement = function() {
      var i = this.toHsl(), r = i.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: i.s, l: i.l }),
        new e({ h: (r + 216) % 360, s: i.s, l: i.l })
      ];
    }, e.prototype.onBackground = function(i) {
      var r = this.toRgb(), l = new e(i).toRgb(), o = r.a + l.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + l.r * l.a * (1 - r.a)) / o,
        g: (r.g * r.a + l.g * l.a * (1 - r.a)) / o,
        b: (r.b * r.a + l.b * l.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(i) {
      for (var r = this.toHsl(), l = r.h, o = [this], s = 360 / i, u = 1; u < i; u++)
        o.push(new e({ h: (l + u * s) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(i) {
      return this.toRgbString() === new e(i).toRgbString();
    }, e;
  }()
);
function Ke(e, i = 20) {
  return e.mix("#141414", i).toString();
}
function L_(e) {
  const i = Da(), r = kt("button");
  return P(() => {
    let l = {}, o = e.color;
    if (o) {
      const s = o.match(/var\((.*?)\)/);
      s && (o = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const u = new Cc(o), d = e.dark ? u.tint(20).toString() : Ke(u, 20);
      if (e.plain)
        l = r.cssVarBlock({
          "bg-color": e.dark ? Ke(u, 90) : u.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? Ke(u, 50) : u.tint(50).toString(),
          "hover-text-color": `var(${r.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": d,
          "active-text-color": `var(${r.cssVarName("color-white")})`,
          "active-border-color": d
        }), i.value && (l[r.cssVarBlockName("disabled-bg-color")] = e.dark ? Ke(u, 90) : u.tint(90).toString(), l[r.cssVarBlockName("disabled-text-color")] = e.dark ? Ke(u, 50) : u.tint(50).toString(), l[r.cssVarBlockName("disabled-border-color")] = e.dark ? Ke(u, 80) : u.tint(80).toString());
      else {
        const f = e.dark ? Ke(u, 30) : u.tint(30).toString(), m = u.isDark() ? `var(${r.cssVarName("color-white")})` : `var(${r.cssVarName("color-black")})`;
        if (l = r.cssVarBlock({
          "bg-color": o,
          "text-color": m,
          "border-color": o,
          "hover-bg-color": f,
          "hover-text-color": m,
          "hover-border-color": f,
          "active-bg-color": d,
          "active-border-color": d
        }), i.value) {
          const g = e.dark ? Ke(u, 50) : u.tint(50).toString();
          l[r.cssVarBlockName("disabled-bg-color")] = g, l[r.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${r.cssVarName("color-white")})`, l[r.cssVarBlockName("disabled-border-color")] = g;
        }
      }
    }
    return l;
  });
}
const C_ = J({
  name: "ElButton"
}), x_ = /* @__PURE__ */ J({
  ...C_,
  props: qr,
  emits: h_,
  setup(e, { expose: i, emit: r }) {
    const l = e, o = L_(l), s = kt("button"), { _ref: u, _size: d, _type: f, _disabled: m, _props: g, shouldAddSpace: v, handleClick: b } = l_(l, r), M = P(() => [
      s.b(),
      s.m(f.value),
      s.m(d.value),
      s.is("disabled", m.value),
      s.is("loading", l.loading),
      s.is("plain", l.plain),
      s.is("round", l.round),
      s.is("circle", l.circle),
      s.is("text", l.text),
      s.is("link", l.link),
      s.is("has-bg", l.bg)
    ]);
    return i({
      ref: u,
      size: d,
      type: f,
      disabled: m,
      shouldAddSpace: v
    }), (w, y) => (K(), vt(We(w.tag), wn({
      ref_key: "_ref",
      ref: u
    }, C(g), {
      class: C(M),
      style: C(o),
      onClick: C(b)
    }), {
      default: mt(() => [
        w.loading ? (K(), ht(we, { key: 0 }, [
          w.$slots.loading ? yt(w.$slots, "loading", { key: 0 }) : (K(), vt(C(_e), {
            key: 1,
            class: Et(C(s).is("loading"))
          }, {
            default: mt(() => [
              (K(), vt(We(w.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : w.icon || w.$slots.icon ? (K(), vt(C(_e), { key: 1 }, {
          default: mt(() => [
            w.icon ? (K(), vt(We(w.icon), { key: 0 })) : yt(w.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : It("v-if", !0),
        w.$slots.default ? (K(), ht("span", {
          key: 2,
          class: Et({ [C(s).em("text", "expand")]: C(v) })
        }, [
          yt(w.$slots, "default")
        ], 2)) : It("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var M_ = /* @__PURE__ */ Qt(x_, [["__file", "button.vue"]]);
const I_ = {
  size: qr.size,
  type: qr.type
}, B_ = J({
  name: "ElButtonGroup"
}), k_ = /* @__PURE__ */ J({
  ...B_,
  props: I_,
  setup(e) {
    const i = e;
    Ee(Ec, Po({
      size: Pe(i, "size"),
      type: Pe(i, "type")
    }));
    const r = kt("button");
    return (l, o) => (K(), ht("div", {
      class: Et(C(r).b("group"))
    }, [
      yt(l.$slots, "default")
    ], 2));
  }
});
var xc = /* @__PURE__ */ Qt(k_, [["__file", "button-group.vue"]]);
const D_ = He(M_, {
  ButtonGroup: xc
});
Ro(xc);
function T_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Ao = (e) => {
  const i = gn(e) ? e : [e], r = [];
  return i.forEach((l) => {
    var o;
    gn(l) ? r.push(...Ao(l)) : al(l) && ((o = l.component) != null && o.subTree) ? r.push(l, ...Ao(l.component.subTree)) : al(l) && gn(l.children) ? r.push(...Ao(l.children)) : r.push(l);
  }), r;
}, je = /* @__PURE__ */ new Map();
if (Xt) {
  let e;
  document.addEventListener("mousedown", (i) => e = i), document.addEventListener("mouseup", (i) => {
    if (e) {
      for (const r of je.values())
        for (const { documentHandler: l } of r)
          l(i, e);
      e = void 0;
    }
  });
}
function tu(e, i) {
  let r = [];
  return gn(i.arg) ? r = i.arg : Je(i.arg) && r.push(i.arg), function(l, o) {
    const s = i.instance.popperRef, u = l.target, d = o == null ? void 0 : o.target, f = !i || !i.instance, m = !u || !d, g = e.contains(u) || e.contains(d), v = e === u, b = r.length && r.some((w) => w == null ? void 0 : w.contains(u)) || r.length && r.includes(d), M = s && (s.contains(u) || s.contains(d));
    f || m || g || v || b || M || i.value(l, o);
  };
}
const P_ = {
  beforeMount(e, i) {
    je.has(e) || je.set(e, []), je.get(e).push({
      documentHandler: tu(e, i),
      bindingFn: i.value
    });
  },
  updated(e, i) {
    je.has(e) || je.set(e, []);
    const r = je.get(e), l = r.findIndex((s) => s.bindingFn === i.oldValue), o = {
      documentHandler: tu(e, i),
      bindingFn: i.value
    };
    l >= 0 ? r.splice(l, 1, o) : r.push(o);
  },
  unmounted(e) {
    je.delete(e);
  }
}, S_ = J({
  name: "ElCollapseTransition"
}), O_ = /* @__PURE__ */ J({
  ...S_,
  setup(e) {
    const i = kt("collapse-transition"), r = (o) => {
      o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
    }, l = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.height && (o.dataset.elExistsHeight = o.style.height), o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        requestAnimationFrame(() => {
          o.dataset.oldOverflow = o.style.overflow, o.dataset.elExistsHeight ? o.style.maxHeight = o.dataset.elExistsHeight : o.scrollHeight !== 0 ? o.style.maxHeight = `${o.scrollHeight}px` : o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom, o.style.overflow = "hidden";
        });
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      enterCancelled(o) {
        r(o);
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        r(o);
      },
      leaveCancelled(o) {
        r(o);
      }
    };
    return (o, s) => (K(), vt(va, wn({
      name: C(i).b()
    }, jd(l)), {
      default: mt(() => [
        yt(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var Q_ = /* @__PURE__ */ Qt(O_, [["__file", "collapse-transition.vue"]]);
const F_ = He(Q_), H_ = Ot({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: dt(String),
    default: "solid"
  }
}), R_ = J({
  name: "ElDivider"
}), G_ = /* @__PURE__ */ J({
  ...R_,
  props: H_,
  setup(e) {
    const i = e, r = kt("divider"), l = P(() => r.cssVar({
      "border-style": i.borderStyle
    }));
    return (o, s) => (K(), ht("div", {
      class: Et([C(r).b(), C(r).m(o.direction)]),
      style: Do(C(l)),
      role: "separator"
    }, [
      o.$slots.default && o.direction !== "vertical" ? (K(), ht("div", {
        key: 0,
        class: Et([C(r).e("text"), C(r).is(o.contentPosition)])
      }, [
        yt(o.$slots, "default")
      ], 2)) : It("v-if", !0)
    ], 6));
  }
});
var z_ = /* @__PURE__ */ Qt(G_, [["__file", "divider.vue"]]);
const Vr = He(z_);
let N_ = class {
  constructor(i, r) {
    this.parent = i, this.domNode = r, this.subIndex = 0, this.subIndex = 0, this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
  }
  gotoSubIndex(i) {
    i === this.subMenuItems.length ? i = 0 : i < 0 && (i = this.subMenuItems.length - 1), this.subMenuItems[i].focus(), this.subIndex = i;
  }
  addListeners() {
    const i = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (r) => {
      r.addEventListener("keydown", (l) => {
        let o = !1;
        switch (l.code) {
          case Ht.down: {
            this.gotoSubIndex(this.subIndex + 1), o = !0;
            break;
          }
          case Ht.up: {
            this.gotoSubIndex(this.subIndex - 1), o = !0;
            break;
          }
          case Ht.tab: {
            vo(i, "mouseleave");
            break;
          }
          case Ht.enter:
          case Ht.numpadEnter:
          case Ht.space: {
            o = !0, l.currentTarget.click();
            break;
          }
        }
        return o && (l.preventDefault(), l.stopPropagation()), !1;
      });
    });
  }
}, U_ = class {
  constructor(i, r) {
    this.domNode = i, this.submenu = null, this.submenu = null, this.init(r);
  }
  init(i) {
    this.domNode.setAttribute("tabindex", "0");
    const r = this.domNode.querySelector(`.${i}-menu`);
    r && (this.submenu = new N_(this, r)), this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (i) => {
      let r = !1;
      switch (i.code) {
        case Ht.down: {
          vo(i.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), r = !0;
          break;
        }
        case Ht.up: {
          vo(i.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), r = !0;
          break;
        }
        case Ht.tab: {
          vo(i.currentTarget, "mouseleave");
          break;
        }
        case Ht.enter:
        case Ht.numpadEnter:
        case Ht.space: {
          r = !0, i.currentTarget.click();
          break;
        }
      }
      r && i.preventDefault();
    });
  }
}, K_ = class {
  constructor(i, r) {
    this.domNode = i, this.init(r);
  }
  init(i) {
    const r = this.domNode.childNodes;
    Array.from(r).forEach((l) => {
      l.nodeType === 1 && new U_(l, i);
    });
  }
};
const Y_ = J({
  name: "ElMenuCollapseTransition",
  setup() {
    const e = kt("menu");
    return {
      listeners: {
        onBeforeEnter: (r) => r.style.opacity = "0.2",
        onEnter(r, l) {
          so(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "1", l();
        },
        onAfterEnter(r) {
          xr(r, `${e.namespace.value}-opacity-transition`), r.style.opacity = "";
        },
        onBeforeLeave(r) {
          r.dataset || (r.dataset = {}), Mm(r, e.m("collapse")) ? (xr(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), so(r, e.m("collapse"))) : (so(r, e.m("collapse")), r.dataset.oldOverflow = r.style.overflow, r.dataset.scrollWidth = r.clientWidth.toString(), xr(r, e.m("collapse"))), r.style.width = `${r.scrollWidth}px`, r.style.overflow = "hidden";
        },
        onLeave(r) {
          so(r, "horizontal-collapse-transition"), r.style.width = `${r.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
function j_(e, i, r, l, o, s) {
  return K(), vt(va, wn({ mode: "out-in" }, e.listeners), {
    default: mt(() => [
      yt(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var W_ = /* @__PURE__ */ Qt(Y_, [["render", j_], ["__file", "menu-collapse-transition.vue"]]);
function Mc(e, i) {
  const r = P(() => {
    let o = e.parent;
    const s = [i.value];
    for (; o.type.name !== "ElMenu"; )
      o.props.index && s.unshift(o.props.index), o = o.parent;
    return s;
  });
  return {
    parentMenu: P(() => {
      let o = e.parent;
      for (; o && !["ElMenu", "ElSubMenu"].includes(o.type.name); )
        o = o.parent;
      return o;
    }),
    indexPath: r
  };
}
function q_(e) {
  return P(() => {
    const r = e.backgroundColor;
    return r ? new Cc(r).shade(20).toString() : "";
  });
}
const Ic = (e, i) => {
  const r = kt("menu");
  return P(() => r.cssVarBlock({
    "text-color": e.textColor || "",
    "hover-text-color": e.textColor || "",
    "bg-color": e.backgroundColor || "",
    "hover-bg-color": q_(e).value || "",
    "active-color": e.activeTextColor || "",
    level: `${i}`
  }));
}, Z_ = Ot({
  index: {
    type: String,
    required: !0
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: ce
  },
  expandOpenIcon: {
    type: ce
  },
  collapseCloseIcon: {
    type: ce
  },
  collapseOpenIcon: {
    type: ce
  }
}), Pr = "ElSubMenu";
var Ya = J({
  name: Pr,
  props: Z_,
  setup(e, { slots: i, expose: r }) {
    const l = he(), { indexPath: o, parentMenu: s } = Mc(l, P(() => e.index)), u = kt("menu"), d = kt("sub-menu"), f = Lt("rootMenu");
    f || Ii(Pr, "can not inject root menu");
    const m = Lt(`subMenu:${s.value.uid}`);
    m || Ii(Pr, "can not inject sub menu");
    const g = j({}), v = j({});
    let b;
    const M = j(!1), w = j(), y = j(null), B = P(() => Z.value === "horizontal" && I.value ? "bottom-start" : "right-start"), A = P(() => Z.value === "horizontal" && I.value || Z.value === "vertical" && !f.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? U.value ? e.expandOpenIcon : e.expandCloseIcon : Pm : e.collapseCloseIcon && e.collapseOpenIcon ? U.value ? e.collapseOpenIcon : e.collapseCloseIcon : Om), I = P(() => m.level === 0), F = P(() => {
      const S = e.teleported;
      return S === void 0 ? I.value : S;
    }), Q = P(() => f.props.collapse ? `${u.namespace.value}-zoom-in-left` : `${u.namespace.value}-zoom-in-top`), k = P(() => Z.value === "horizontal" && I.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]), U = P(() => f.openedMenus.includes(e.index)), G = P(() => {
      let S = !1;
      return Object.values(g.value).forEach((q) => {
        q.active && (S = !0);
      }), Object.values(v.value).forEach((q) => {
        q.active && (S = !0);
      }), S;
    }), Z = P(() => f.props.mode), ut = Po({
      index: e.index,
      indexPath: o,
      active: G
    }), rt = Ic(f.props, m.level + 1), tt = P(() => {
      var S;
      return (S = e.popperOffset) != null ? S : f.props.popperOffset;
    }), X = P(() => {
      var S;
      return (S = e.popperClass) != null ? S : f.props.popperClass;
    }), gt = P(() => {
      var S;
      return (S = e.showTimeout) != null ? S : f.props.showTimeout;
    }), bt = P(() => {
      var S;
      return (S = e.hideTimeout) != null ? S : f.props.hideTimeout;
    }), N = () => {
      var S, q, st;
      return (st = (q = (S = y.value) == null ? void 0 : S.popperRef) == null ? void 0 : q.popperInstanceRef) == null ? void 0 : st.destroy();
    }, R = (S) => {
      S || N();
    }, T = () => {
      f.props.menuTrigger === "hover" && f.props.mode === "horizontal" || f.props.collapse && f.props.mode === "vertical" || e.disabled || f.handleSubMenuClick({
        index: e.index,
        indexPath: o.value,
        active: G.value
      });
    }, H = (S, q = gt.value) => {
      var st;
      if (S.type !== "focus") {
        if (f.props.menuTrigger === "click" && f.props.mode === "horizontal" || !f.props.collapse && f.props.mode === "vertical" || e.disabled) {
          m.mouseInChild.value = !0;
          return;
        }
        m.mouseInChild.value = !0, b == null || b(), { stop: b } = Al(() => {
          f.openMenu(e.index, o.value);
        }, q), F.value && ((st = s.value.vnode.el) == null || st.dispatchEvent(new MouseEvent("mouseenter")));
      }
    }, at = (S = !1) => {
      var q;
      if (f.props.menuTrigger === "click" && f.props.mode === "horizontal" || !f.props.collapse && f.props.mode === "vertical") {
        m.mouseInChild.value = !1;
        return;
      }
      b == null || b(), m.mouseInChild.value = !1, { stop: b } = Al(() => !M.value && f.closeMenu(e.index, o.value), bt.value), F.value && S && ((q = m.handleMouseleave) == null || q.call(m, !0));
    };
    _t(() => f.props.collapse, (S) => R(!!S));
    {
      const S = (st) => {
        v.value[st.index] = st;
      }, q = (st) => {
        delete v.value[st.index];
      };
      Ee(`subMenu:${l.uid}`, {
        addSubMenu: S,
        removeSubMenu: q,
        handleMouseleave: at,
        mouseInChild: M,
        level: m.level + 1
      });
    }
    return r({
      opened: U
    }), Kt(() => {
      f.addSubMenu(ut), m.addSubMenu(ut);
    }), Ce(() => {
      m.removeSubMenu(ut), f.removeSubMenu(ut);
    }), () => {
      var S;
      const q = [
        (S = i.title) == null ? void 0 : S.call(i),
        Pt(_e, {
          class: d.e("icon-arrow"),
          style: {
            transform: U.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && f.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => Jt(A.value) ? Pt(l.appContext.components[A.value]) : Pt(A.value)
        })
      ], st = f.isMenuPopup ? Pt(bc, {
        ref: y,
        visible: U.value,
        effect: "light",
        pure: !0,
        offset: tt.value,
        showArrow: !1,
        persistent: !0,
        popperClass: X.value,
        placement: B.value,
        teleported: F.value,
        fallbackPlacements: k.value,
        transition: Q.value,
        gpuAcceleration: !1
      }, {
        content: () => {
          var ft;
          return Pt("div", {
            class: [
              u.m(Z.value),
              u.m("popup-container"),
              X.value
            ],
            onMouseenter: (lt) => H(lt, 100),
            onMouseleave: () => at(!0),
            onFocus: (lt) => H(lt, 100)
          }, [
            Pt("ul", {
              class: [
                u.b(),
                u.m("popup"),
                u.m(`popup-${B.value}`)
              ],
              style: rt.value
            }, [(ft = i.default) == null ? void 0 : ft.call(i)])
          ]);
        },
        default: () => Pt("div", {
          class: d.e("title"),
          onClick: T
        }, q)
      }) : Pt(we, {}, [
        Pt("div", {
          class: d.e("title"),
          ref: w,
          onClick: T
        }, q),
        Pt(F_, {}, {
          default: () => {
            var ft;
            return To(Pt("ul", {
              role: "menu",
              class: [u.b(), u.m("inline")],
              style: rt.value
            }, [(ft = i.default) == null ? void 0 : ft.call(i)]), [[Su, U.value]]);
          }
        })
      ]);
      return Pt("li", {
        class: [
          d.b(),
          d.is("active", G.value),
          d.is("opened", U.value),
          d.is("disabled", e.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: !0,
        ariaExpanded: U.value,
        onMouseenter: H,
        onMouseleave: () => at(),
        onFocus: H
      }, [st]);
    };
  }
});
const V_ = Ot({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: dt(Array),
    default: () => Rm([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: !0
  },
  ellipsis: {
    type: Boolean,
    default: !0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: ce,
    default: () => Hm
  },
  popperEffect: {
    type: dt(String),
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  }
}), Sr = (e) => gn(e) && e.every((i) => Jt(i)), J_ = {
  close: (e, i) => Jt(e) && Sr(i),
  open: (e, i) => Jt(e) && Sr(i),
  select: (e, i, r, l) => Jt(e) && Sr(i) && Si(r) && (l === void 0 || l instanceof Promise)
};
var X_ = J({
  name: "ElMenu",
  props: V_,
  emits: J_,
  setup(e, { emit: i, slots: r, expose: l }) {
    const o = he(), s = o.appContext.config.globalProperties.$router, u = j(), d = kt("menu"), f = kt("sub-menu"), m = j(-1), g = j(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), v = j(e.defaultActive), b = j({}), M = j({}), w = P(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), y = () => {
      const N = v.value && b.value[v.value];
      if (!N || e.mode === "horizontal" || e.collapse)
        return;
      N.indexPath.forEach((T) => {
        const H = M.value[T];
        H && B(T, H.indexPath);
      });
    }, B = (N, R) => {
      g.value.includes(N) || (e.uniqueOpened && (g.value = g.value.filter((T) => R.includes(T))), g.value.push(N), i("open", N, R));
    }, A = (N) => {
      const R = g.value.indexOf(N);
      R !== -1 && g.value.splice(R, 1);
    }, I = (N, R) => {
      A(N), i("close", N, R);
    }, F = ({
      index: N,
      indexPath: R
    }) => {
      g.value.includes(N) ? I(N, R) : B(N, R);
    }, Q = (N) => {
      (e.mode === "horizontal" || e.collapse) && (g.value = []);
      const { index: R, indexPath: T } = N;
      if (!(Mi(R) || Mi(T)))
        if (e.router && s) {
          const H = N.route || R, at = s.push(H).then((S) => (S || (v.value = R), S));
          i("select", R, T, { index: R, indexPath: T, route: H }, at);
        } else
          v.value = R, i("select", R, T, { index: R, indexPath: T });
    }, k = (N) => {
      const R = b.value, T = R[N] || v.value && R[v.value] || R[e.defaultActive];
      T ? v.value = T.index : v.value = N;
    }, U = (N) => {
      const R = getComputedStyle(N), T = Number.parseInt(R.marginLeft, 10), H = Number.parseInt(R.marginRight, 10);
      return N.offsetWidth + T + H || 0;
    }, G = () => {
      var N, R;
      if (!u.value)
        return -1;
      const T = Array.from((R = (N = u.value) == null ? void 0 : N.childNodes) != null ? R : []).filter(($) => $.nodeName !== "#text" || $.nodeValue), H = 64, at = getComputedStyle(u.value), S = Number.parseInt(at.paddingLeft, 10), q = Number.parseInt(at.paddingRight, 10), st = u.value.clientWidth - S - q;
      let ft = 0, lt = 0;
      return T.forEach(($, nt) => {
        $.nodeName !== "#comment" && (ft += U($), ft <= st - H && (lt = nt + 1));
      }), lt === T.length ? -1 : lt;
    }, Z = (N) => M.value[N].indexPath, ut = (N, R = 33.34) => {
      let T;
      return () => {
        T && clearTimeout(T), T = setTimeout(() => {
          N();
        }, R);
      };
    };
    let rt = !0;
    const tt = () => {
      if (m.value === G())
        return;
      const N = () => {
        m.value = -1, Ci(() => {
          m.value = G();
        });
      };
      rt ? N() : ut(N)(), rt = !1;
    };
    _t(() => e.defaultActive, (N) => {
      b.value[N] || (v.value = ""), k(N);
    }), _t(() => e.collapse, (N) => {
      N && (g.value = []);
    }), _t(b.value, y);
    let X;
    Tu(() => {
      e.mode === "horizontal" && e.ellipsis ? X = dm(u, tt).stop : X == null || X();
    });
    const gt = j(!1);
    {
      const N = (at) => {
        M.value[at.index] = at;
      }, R = (at) => {
        delete M.value[at.index];
      };
      Ee("rootMenu", Po({
        props: e,
        openedMenus: g,
        items: b,
        subMenus: M,
        activeIndex: v,
        isMenuPopup: w,
        addMenuItem: (at) => {
          b.value[at.index] = at;
        },
        removeMenuItem: (at) => {
          delete b.value[at.index];
        },
        addSubMenu: N,
        removeSubMenu: R,
        openMenu: B,
        closeMenu: I,
        handleMenuItemClick: Q,
        handleSubMenuClick: F
      })), Ee(`subMenu:${o.uid}`, {
        addSubMenu: N,
        removeSubMenu: R,
        mouseInChild: gt,
        level: 0
      });
    }
    Kt(() => {
      e.mode === "horizontal" && new K_(o.vnode.el, d.namespace.value);
    }), l({
      open: (R) => {
        const { indexPath: T } = M.value[R];
        T.forEach((H) => B(H, T));
      },
      close: A,
      handleResize: tt
    });
    const bt = Ic(e, 0);
    return () => {
      var N, R;
      let T = (R = (N = r.default) == null ? void 0 : N.call(r)) != null ? R : [];
      const H = [];
      if (e.mode === "horizontal" && u.value) {
        const q = Ao(T), st = m.value === -1 ? q : q.slice(0, m.value), ft = m.value === -1 ? [] : q.slice(m.value);
        ft != null && ft.length && e.ellipsis && (T = st, H.push(Pt(Ya, {
          index: "sub-menu-more",
          class: f.e("hide-arrow"),
          popperOffset: e.popperOffset
        }, {
          title: () => Pt(_e, {
            class: f.e("icon-more")
          }, {
            default: () => Pt(e.ellipsisIcon)
          }),
          default: () => ft
        })));
      }
      const at = e.closeOnClickOutside ? [
        [
          P_,
          () => {
            g.value.length && (gt.value || (g.value.forEach((q) => i("close", q, Z(q))), g.value = []));
          }
        ]
      ] : [], S = To(Pt("ul", {
        key: String(e.collapse),
        role: "menubar",
        ref: u,
        style: bt.value,
        class: {
          [d.b()]: !0,
          [d.m(e.mode)]: !0,
          [d.m("collapse")]: e.collapse
        }
      }, [...T, ...H]), at);
      return e.collapseTransition && e.mode === "vertical" ? Pt(W_, () => S) : S;
    };
  }
});
const $_ = Ot({
  index: {
    type: dt([String, null]),
    default: null
  },
  route: {
    type: dt([String, Object])
  },
  disabled: Boolean
}), tA = {
  click: (e) => Jt(e.index) && gn(e.indexPath)
}, Or = "ElMenuItem", eA = J({
  name: Or,
  components: {
    ElTooltip: bc
  },
  props: $_,
  emits: tA,
  setup(e, { emit: i }) {
    const r = he(), l = Lt("rootMenu"), o = kt("menu"), s = kt("menu-item");
    l || Ii(Or, "can not inject root menu");
    const { parentMenu: u, indexPath: d } = Mc(r, Pe(e, "index")), f = Lt(`subMenu:${u.value.uid}`);
    f || Ii(Or, "can not inject sub menu");
    const m = P(() => e.index === l.activeIndex), g = Po({
      index: e.index,
      indexPath: d,
      active: m
    }), v = () => {
      e.disabled || (l.handleMenuItemClick({
        index: e.index,
        indexPath: d.value,
        route: e.route
      }), i("click", g));
    };
    return Kt(() => {
      f.addSubMenu(g), l.addMenuItem(g);
    }), Ce(() => {
      f.removeSubMenu(g), l.removeMenuItem(g);
    }), {
      parentMenu: u,
      rootMenu: l,
      active: m,
      nsMenu: o,
      nsMenuItem: s,
      handleClick: v
    };
  }
});
function nA(e, i, r, l, o, s) {
  const u = Wd("el-tooltip");
  return K(), ht("li", {
    class: Et([
      e.nsMenuItem.b(),
      e.nsMenuItem.is("active", e.active),
      e.nsMenuItem.is("disabled", e.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: e.handleClick
  }, [
    e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (K(), vt(u, {
      key: 0,
      effect: e.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: mt(() => [
        yt(e.$slots, "title")
      ]),
      default: mt(() => [
        Bt("div", {
          class: Et(e.nsMenu.be("tooltip", "trigger"))
        }, [
          yt(e.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (K(), ht(we, { key: 1 }, [
      yt(e.$slots, "default"),
      yt(e.$slots, "title")
    ], 64))
  ], 10, ["onClick"]);
}
var Bc = /* @__PURE__ */ Qt(eA, [["render", nA], ["__file", "menu-item.vue"]]);
const iA = {
  title: String
}, oA = "ElMenuItemGroup", rA = J({
  name: oA,
  props: iA,
  setup() {
    return {
      ns: kt("menu-item-group")
    };
  }
});
function aA(e, i, r, l, o, s) {
  return K(), ht("li", {
    class: Et(e.ns.b())
  }, [
    Bt("div", {
      class: Et(e.ns.e("title"))
    }, [
      e.$slots.title ? yt(e.$slots, "title", { key: 1 }) : (K(), ht(we, { key: 0 }, [
        qd(Se(e.title), 1)
      ], 64))
    ], 2),
    Bt("ul", null, [
      yt(e.$slots, "default")
    ])
  ], 2);
}
var kc = /* @__PURE__ */ Qt(rA, [["render", aA], ["__file", "menu-item-group.vue"]]);
const sA = He(X_, {
  MenuItem: Bc,
  MenuItemGroup: kc,
  SubMenu: Ya
}), lA = Ro(Bc);
Ro(kc);
const uA = Ro(Ya), cA = (e) => ["", ...Yu].includes(e), hA = Ot({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: cA
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: ce
  },
  activeActionIcon: {
    type: ce
  },
  activeIcon: {
    type: ce
  },
  inactiveIcon: {
    type: ce
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: dt(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Ba(["ariaLabel"])
}), dA = {
  [Nr]: (e) => Rn(e) || Jt(e) || Ve(e),
  [Ur]: (e) => Rn(e) || Jt(e) || Ve(e),
  [Kr]: (e) => Rn(e) || Jt(e) || Ve(e)
}, Jr = "ElSwitch", fA = J({
  name: Jr
}), pA = /* @__PURE__ */ J({
  ...fA,
  props: hA,
  emits: dA,
  setup(e, { expose: i, emit: r }) {
    const l = e, { formItem: o } = Ju(), s = $u(), u = kt("switch"), { inputId: d } = Nm(l, {
      formItemContext: o
    }), f = Da(P(() => l.loading)), m = j(l.modelValue !== !1), g = j(), v = j(), b = P(() => [
      u.b(),
      u.m(s.value),
      u.is("disabled", f.value),
      u.is("checked", A.value)
    ]), M = P(() => [
      u.e("label"),
      u.em("label", "left"),
      u.is("active", !A.value)
    ]), w = P(() => [
      u.e("label"),
      u.em("label", "right"),
      u.is("active", A.value)
    ]), y = P(() => ({
      width: Wu(l.width)
    }));
    _t(() => l.modelValue, () => {
      m.value = !0;
    });
    const B = P(() => m.value ? l.modelValue : !1), A = P(() => B.value === l.activeValue);
    [l.activeValue, l.inactiveValue].includes(B.value) || (r(Nr, l.inactiveValue), r(Ur, l.inactiveValue), r(Kr, l.inactiveValue)), _t(A, (k) => {
      var U;
      g.value.checked = k, l.validateEvent && ((U = o == null ? void 0 : o.validate) == null || U.call(o, "change").catch((G) => $e(G)));
    });
    const I = () => {
      const k = A.value ? l.inactiveValue : l.activeValue;
      r(Nr, k), r(Ur, k), r(Kr, k), Ci(() => {
        g.value.checked = A.value;
      });
    }, F = () => {
      if (f.value)
        return;
      const { beforeChange: k } = l;
      if (!k) {
        I();
        return;
      }
      const U = k();
      [
        ll(U),
        Rn(U)
      ].includes(!0) || Ii(Jr, "beforeChange must return type `Promise<boolean>` or `boolean`"), ll(U) ? U.then((Z) => {
        Z && I();
      }).catch((Z) => {
        $e(Jr, `some error occurred: ${Z}`);
      }) : U && I();
    }, Q = () => {
      var k, U;
      (U = (k = g.value) == null ? void 0 : k.focus) == null || U.call(k);
    };
    return Kt(() => {
      g.value.checked = A.value;
    }), i({
      focus: Q,
      checked: A
    }), (k, U) => (K(), ht("div", {
      class: Et(C(b)),
      onClick: _a(F, ["prevent"])
    }, [
      Bt("input", {
        id: C(d),
        ref_key: "input",
        ref: g,
        class: Et(C(u).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": C(A),
        "aria-disabled": C(f),
        "aria-label": k.ariaLabel,
        name: k.name,
        "true-value": k.activeValue,
        "false-value": k.inactiveValue,
        disabled: C(f),
        tabindex: k.tabindex,
        onChange: I,
        onKeydown: Zd(F, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !k.inlinePrompt && (k.inactiveIcon || k.inactiveText) ? (K(), ht("span", {
        key: 0,
        class: Et(C(M))
      }, [
        k.inactiveIcon ? (K(), vt(C(_e), { key: 0 }, {
          default: mt(() => [
            (K(), vt(We(k.inactiveIcon)))
          ]),
          _: 1
        })) : It("v-if", !0),
        !k.inactiveIcon && k.inactiveText ? (K(), ht("span", {
          key: 1,
          "aria-hidden": C(A)
        }, Se(k.inactiveText), 9, ["aria-hidden"])) : It("v-if", !0)
      ], 2)) : It("v-if", !0),
      Bt("span", {
        ref_key: "core",
        ref: v,
        class: Et(C(u).e("core")),
        style: Do(C(y))
      }, [
        k.inlinePrompt ? (K(), ht("div", {
          key: 0,
          class: Et(C(u).e("inner"))
        }, [
          k.activeIcon || k.inactiveIcon ? (K(), vt(C(_e), {
            key: 0,
            class: Et(C(u).is("icon"))
          }, {
            default: mt(() => [
              (K(), vt(We(C(A) ? k.activeIcon : k.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : k.activeText || k.inactiveText ? (K(), ht("span", {
            key: 1,
            class: Et(C(u).is("text")),
            "aria-hidden": !C(A)
          }, Se(C(A) ? k.activeText : k.inactiveText), 11, ["aria-hidden"])) : It("v-if", !0)
        ], 2)) : It("v-if", !0),
        Bt("div", {
          class: Et(C(u).e("action"))
        }, [
          k.loading ? (K(), vt(C(_e), {
            key: 0,
            class: Et(C(u).is("loading"))
          }, {
            default: mt(() => [
              xt(C(qu))
            ]),
            _: 1
          }, 8, ["class"])) : C(A) ? yt(k.$slots, "active-action", { key: 1 }, () => [
            k.activeActionIcon ? (K(), vt(C(_e), { key: 0 }, {
              default: mt(() => [
                (K(), vt(We(k.activeActionIcon)))
              ]),
              _: 1
            })) : It("v-if", !0)
          ]) : C(A) ? It("v-if", !0) : yt(k.$slots, "inactive-action", { key: 2 }, () => [
            k.inactiveActionIcon ? (K(), vt(C(_e), { key: 0 }, {
              default: mt(() => [
                (K(), vt(We(k.inactiveActionIcon)))
              ]),
              _: 1
            })) : It("v-if", !0)
          ])
        ], 2)
      ], 6),
      !k.inlinePrompt && (k.activeIcon || k.activeText) ? (K(), ht("span", {
        key: 1,
        class: Et(C(w))
      }, [
        k.activeIcon ? (K(), vt(C(_e), { key: 0 }, {
          default: mt(() => [
            (K(), vt(We(k.activeIcon)))
          ]),
          _: 1
        })) : It("v-if", !0),
        !k.activeIcon && k.activeText ? (K(), ht("span", {
          key: 1,
          "aria-hidden": !C(A)
        }, Se(k.activeText), 9, ["aria-hidden"])) : It("v-if", !0)
      ], 2)) : It("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var mA = /* @__PURE__ */ Qt(pA, [["__file", "switch.vue"]]);
const Dc = He(mA);
var vi = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var gA = vi.exports, eu;
function vA() {
  return eu || (eu = 1, function(e, i) {
    (function(r, l) {
      l(i);
    })(gA, function(r) {
      var l = "1.9.4";
      function o(t) {
        var n, a, c, h;
        for (a = 1, c = arguments.length; a < c; a++) {
          h = arguments[a];
          for (n in h)
            t[n] = h[n];
        }
        return t;
      }
      var s = Object.create || /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          return t.prototype = n, new t();
        };
      }();
      function u(t, n) {
        var a = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, a.call(arguments, 1));
        var c = a.call(arguments, 2);
        return function() {
          return t.apply(n, c.length ? c.concat(a.call(arguments)) : arguments);
        };
      }
      var d = 0;
      function f(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++d), t._leaflet_id;
      }
      function m(t, n, a) {
        var c, h, p, _;
        return _ = function() {
          c = !1, h && (p.apply(a, h), h = !1);
        }, p = function() {
          c ? h = arguments : (t.apply(a, arguments), setTimeout(_, n), c = !0);
        }, p;
      }
      function g(t, n, a) {
        var c = n[1], h = n[0], p = c - h;
        return t === c && a ? t : ((t - h) % p + p) % p + h;
      }
      function v() {
        return !1;
      }
      function b(t, n) {
        if (n === !1)
          return t;
        var a = Math.pow(10, n === void 0 ? 6 : n);
        return Math.round(t * a) / a;
      }
      function M(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function w(t) {
        return M(t).split(/\s+/);
      }
      function y(t, n) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? s(t.options) : {});
        for (var a in n)
          t.options[a] = n[a];
        return t.options;
      }
      function B(t, n, a) {
        var c = [];
        for (var h in t)
          c.push(encodeURIComponent(a ? h.toUpperCase() : h) + "=" + encodeURIComponent(t[h]));
        return (!n || n.indexOf("?") === -1 ? "?" : "&") + c.join("&");
      }
      var A = /\{ *([\w_ -]+) *\}/g;
      function I(t, n) {
        return t.replace(A, function(a, c) {
          var h = n[c];
          if (h === void 0)
            throw new Error("No value provided for variable " + a);
          return typeof h == "function" && (h = h(n)), h;
        });
      }
      var F = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function Q(t, n) {
        for (var a = 0; a < t.length; a++)
          if (t[a] === n)
            return a;
        return -1;
      }
      var k = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function U(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var G = 0;
      function Z(t) {
        var n = +/* @__PURE__ */ new Date(), a = Math.max(0, 16 - (n - G));
        return G = n + a, window.setTimeout(t, a);
      }
      var ut = window.requestAnimationFrame || U("RequestAnimationFrame") || Z, rt = window.cancelAnimationFrame || U("CancelAnimationFrame") || U("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function tt(t, n, a) {
        if (a && ut === Z)
          t.call(n);
        else
          return ut.call(window, u(t, n));
      }
      function X(t) {
        t && rt.call(window, t);
      }
      var gt = {
        __proto__: null,
        extend: o,
        create: s,
        bind: u,
        get lastId() {
          return d;
        },
        stamp: f,
        throttle: m,
        wrapNum: g,
        falseFn: v,
        formatNum: b,
        trim: M,
        splitWords: w,
        setOptions: y,
        getParamString: B,
        template: I,
        isArray: F,
        indexOf: Q,
        emptyImageUrl: k,
        requestFn: ut,
        cancelFn: rt,
        requestAnimFrame: tt,
        cancelAnimFrame: X
      };
      function bt() {
      }
      bt.extend = function(t) {
        var n = function() {
          y(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, a = n.__super__ = this.prototype, c = s(a);
        c.constructor = n, n.prototype = c;
        for (var h in this)
          Object.prototype.hasOwnProperty.call(this, h) && h !== "prototype" && h !== "__super__" && (n[h] = this[h]);
        return t.statics && o(n, t.statics), t.includes && (N(t.includes), o.apply(null, [c].concat(t.includes))), o(c, t), delete c.statics, delete c.includes, c.options && (c.options = a.options ? s(a.options) : {}, o(c.options, t.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var p = 0, _ = c._initHooks.length; p < _; p++)
              c._initHooks[p].call(this);
          }
        }, n;
      }, bt.include = function(t) {
        var n = this.prototype.options;
        return o(this.prototype, t), t.options && (this.prototype.options = n, this.mergeOptions(t.options)), this;
      }, bt.mergeOptions = function(t) {
        return o(this.prototype.options, t), this;
      }, bt.addInitHook = function(t) {
        var n = Array.prototype.slice.call(arguments, 1), a = typeof t == "function" ? t : function() {
          this[t].apply(this, n);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(a), this;
      };
      function N(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = F(t) ? t : [t];
          for (var n = 0; n < t.length; n++)
            t[n] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var R = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(t, n, a) {
          if (typeof t == "object")
            for (var c in t)
              this._on(c, t[c], n);
          else {
            t = w(t);
            for (var h = 0, p = t.length; h < p; h++)
              this._on(t[h], n, a);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(t, n, a) {
          if (!arguments.length)
            delete this._events;
          else if (typeof t == "object")
            for (var c in t)
              this._off(c, t[c], n);
          else {
            t = w(t);
            for (var h = arguments.length === 1, p = 0, _ = t.length; p < _; p++)
              h ? this._off(t[p]) : this._off(t[p], n, a);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(t, n, a, c) {
          if (typeof n != "function") {
            console.warn("wrong listener type: " + typeof n);
            return;
          }
          if (this._listens(t, n, a) === !1) {
            a === this && (a = void 0);
            var h = { fn: n, ctx: a };
            c && (h.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(h);
          }
        },
        _off: function(t, n, a) {
          var c, h, p;
          if (this._events && (c = this._events[t], !!c)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (h = 0, p = c.length; h < p; h++)
                  c[h].fn = v;
              delete this._events[t];
              return;
            }
            if (typeof n != "function") {
              console.warn("wrong listener type: " + typeof n);
              return;
            }
            var _ = this._listens(t, n, a);
            if (_ !== !1) {
              var E = c[_];
              this._firingCount && (E.fn = v, this._events[t] = c = c.slice()), c.splice(_, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(t, n, a) {
          if (!this.listens(t, a))
            return this;
          var c = o({}, n, {
            type: t,
            target: this,
            sourceTarget: n && n.sourceTarget || this
          });
          if (this._events) {
            var h = this._events[t];
            if (h) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var p = 0, _ = h.length; p < _; p++) {
                var E = h[p], x = E.fn;
                E.once && this.off(t, x, E.ctx), x.call(E.ctx || this, c);
              }
              this._firingCount--;
            }
          }
          return a && this._propagateEvent(c), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(t, n, a, c) {
          typeof t != "string" && console.warn('"string" type argument expected');
          var h = n;
          typeof n != "function" && (c = !!n, h = void 0, a = void 0);
          var p = this._events && this._events[t];
          if (p && p.length && this._listens(t, h, a) !== !1)
            return !0;
          if (c) {
            for (var _ in this._eventParents)
              if (this._eventParents[_].listens(t, n, a, c))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(t, n, a) {
          if (!this._events)
            return !1;
          var c = this._events[t] || [];
          if (!n)
            return !!c.length;
          a === this && (a = void 0);
          for (var h = 0, p = c.length; h < p; h++)
            if (c[h].fn === n && c[h].ctx === a)
              return h;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(t, n, a) {
          if (typeof t == "object")
            for (var c in t)
              this._on(c, t[c], n, !0);
          else {
            t = w(t);
            for (var h = 0, p = t.length; h < p; h++)
              this._on(t[h], n, a, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[f(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[f(t)], this;
        },
        _propagateEvent: function(t) {
          for (var n in this._eventParents)
            this._eventParents[n].fire(t.type, o({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      R.addEventListener = R.on, R.removeEventListener = R.clearAllEventListeners = R.off, R.addOneTimeEventListener = R.once, R.fireEvent = R.fire, R.hasEventListeners = R.listens;
      var T = bt.extend(R);
      function H(t, n, a) {
        this.x = a ? Math.round(t) : t, this.y = a ? Math.round(n) : n;
      }
      var at = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      H.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new H(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(S(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(S(t));
        },
        _subtract: function(t) {
          return this.x -= t.x, this.y -= t.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function(t) {
          return this.x /= t, this.y /= t, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function(t) {
          return this.x *= t, this.y *= t, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(t) {
          return new H(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new H(this.x / t.x, this.y / t.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = at(this.x), this.y = at(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = S(t);
          var n = t.x - this.x, a = t.y - this.y;
          return Math.sqrt(n * n + a * a);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = S(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = S(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + b(this.x) + ", " + b(this.y) + ")";
        }
      };
      function S(t, n, a) {
        return t instanceof H ? t : F(t) ? new H(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new H(t.x, t.y) : new H(t, n, a);
      }
      function q(t, n) {
        if (t)
          for (var a = n ? [t, n] : t, c = 0, h = a.length; c < h; c++)
            this.extend(a[c]);
      }
      q.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var n, a;
          if (!t)
            return this;
          if (t instanceof H || typeof t[0] == "number" || "x" in t)
            n = a = S(t);
          else if (t = st(t), n = t.min, a = t.max, !n || !a)
            return this;
          return !this.min && !this.max ? (this.min = n.clone(), this.max = a.clone()) : (this.min.x = Math.min(n.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(n.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return S(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return S(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return S(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          var n, a;
          return typeof t[0] == "number" || t instanceof H ? t = S(t) : t = st(t), t instanceof q ? (n = t.min, a = t.max) : n = a = t, n.x >= this.min.x && a.x <= this.max.x && n.y >= this.min.y && a.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = st(t);
          var n = this.min, a = this.max, c = t.min, h = t.max, p = h.x >= n.x && c.x <= a.x, _ = h.y >= n.y && c.y <= a.y;
          return p && _;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = st(t);
          var n = this.min, a = this.max, c = t.min, h = t.max, p = h.x > n.x && c.x < a.x, _ = h.y > n.y && c.y < a.y;
          return p && _;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var n = this.min, a = this.max, c = Math.abs(n.x - a.x) * t, h = Math.abs(n.y - a.y) * t;
          return st(
            S(n.x - c, n.y - h),
            S(a.x + c, a.y + h)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = st(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function st(t, n) {
        return !t || t instanceof q ? t : new q(t, n);
      }
      function ft(t, n) {
        if (t)
          for (var a = n ? [t, n] : t, c = 0, h = a.length; c < h; c++)
            this.extend(a[c]);
      }
      ft.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var n = this._southWest, a = this._northEast, c, h;
          if (t instanceof $)
            c = t, h = t;
          else if (t instanceof ft) {
            if (c = t._southWest, h = t._northEast, !c || !h)
              return this;
          } else
            return t ? this.extend(nt(t) || lt(t)) : this;
          return !n && !a ? (this._southWest = new $(c.lat, c.lng), this._northEast = new $(h.lat, h.lng)) : (n.lat = Math.min(c.lat, n.lat), n.lng = Math.min(c.lng, n.lng), a.lat = Math.max(h.lat, a.lat), a.lng = Math.max(h.lng, a.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var n = this._southWest, a = this._northEast, c = Math.abs(n.lat - a.lat) * t, h = Math.abs(n.lng - a.lng) * t;
          return new ft(
            new $(n.lat - c, n.lng - h),
            new $(a.lat + c, a.lng + h)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new $(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new $(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new $(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          typeof t[0] == "number" || t instanceof $ || "lat" in t ? t = nt(t) : t = lt(t);
          var n = this._southWest, a = this._northEast, c, h;
          return t instanceof ft ? (c = t.getSouthWest(), h = t.getNorthEast()) : c = h = t, c.lat >= n.lat && h.lat <= a.lat && c.lng >= n.lng && h.lng <= a.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = lt(t);
          var n = this._southWest, a = this._northEast, c = t.getSouthWest(), h = t.getNorthEast(), p = h.lat >= n.lat && c.lat <= a.lat, _ = h.lng >= n.lng && c.lng <= a.lng;
          return p && _;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = lt(t);
          var n = this._southWest, a = this._northEast, c = t.getSouthWest(), h = t.getNorthEast(), p = h.lat > n.lat && c.lat < a.lat, _ = h.lng > n.lng && c.lng < a.lng;
          return p && _;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, n) {
          return t ? (t = lt(t), this._southWest.equals(t.getSouthWest(), n) && this._northEast.equals(t.getNorthEast(), n)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function lt(t, n) {
        return t instanceof ft ? t : new ft(t, n);
      }
      function $(t, n, a) {
        if (isNaN(t) || isNaN(n))
          throw new Error("Invalid LatLng object: (" + t + ", " + n + ")");
        this.lat = +t, this.lng = +n, a !== void 0 && (this.alt = +a);
      }
      $.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, n) {
          if (!t)
            return !1;
          t = nt(t);
          var a = Math.max(
            Math.abs(this.lat - t.lat),
            Math.abs(this.lng - t.lng)
          );
          return a <= (n === void 0 ? 1e-9 : n);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(t) {
          return "LatLng(" + b(this.lat, t) + ", " + b(this.lng, t) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(t) {
          return Nt.distance(this, nt(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Nt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var n = 180 * t / 40075017, a = n / Math.cos(Math.PI / 180 * this.lat);
          return lt(
            [this.lat - n, this.lng - a],
            [this.lat + n, this.lng + a]
          );
        },
        clone: function() {
          return new $(this.lat, this.lng, this.alt);
        }
      };
      function nt(t, n, a) {
        return t instanceof $ ? t : F(t) && typeof t[0] != "object" ? t.length === 3 ? new $(t[0], t[1], t[2]) : t.length === 2 ? new $(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new $(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : n === void 0 ? null : new $(t, n, a);
      }
      var zt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(t, n) {
          var a = this.projection.project(t), c = this.scale(n);
          return this.transformation._transform(a, c);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(t, n) {
          var a = this.scale(n), c = this.transformation.untransform(t, a);
          return this.projection.unproject(c);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(t) {
          return this.projection.project(t);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(t) {
          return this.projection.unproject(t);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(t) {
          return 256 * Math.pow(2, t);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(t) {
          return Math.log(t / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(t) {
          if (this.infinite)
            return null;
          var n = this.projection.bounds, a = this.scale(t), c = this.transformation.transform(n.min, a), h = this.transformation.transform(n.max, a);
          return new q(c, h);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(t) {
          var n = this.wrapLng ? g(t.lng, this.wrapLng, !0) : t.lng, a = this.wrapLat ? g(t.lat, this.wrapLat, !0) : t.lat, c = t.alt;
          return new $(a, n, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(t) {
          var n = t.getCenter(), a = this.wrapLatLng(n), c = n.lat - a.lat, h = n.lng - a.lng;
          if (c === 0 && h === 0)
            return t;
          var p = t.getSouthWest(), _ = t.getNorthEast(), E = new $(p.lat - c, p.lng - h), x = new $(_.lat - c, _.lng - h);
          return new ft(E, x);
        }
      }, Nt = o({}, zt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, n) {
          var a = Math.PI / 180, c = t.lat * a, h = n.lat * a, p = Math.sin((n.lat - t.lat) * a / 2), _ = Math.sin((n.lng - t.lng) * a / 2), E = p * p + Math.cos(c) * Math.cos(h) * _ * _, x = 2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E));
          return this.R * x;
        }
      }), Gi = 6378137, Zn = {
        R: Gi,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var n = Math.PI / 180, a = this.MAX_LATITUDE, c = Math.max(Math.min(a, t.lat), -a), h = Math.sin(c * n);
          return new H(
            this.R * t.lng * n,
            this.R * Math.log((1 + h) / (1 - h)) / 2
          );
        },
        unproject: function(t) {
          var n = 180 / Math.PI;
          return new $(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * n,
            t.x * n / this.R
          );
        },
        bounds: function() {
          var t = Gi * Math.PI;
          return new q([-t, -t], [t, t]);
        }()
      };
      function rn(t, n, a, c) {
        if (F(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = n, this._c = a, this._d = c;
      }
      rn.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(t, n) {
          return this._transform(t.clone(), n);
        },
        // destructive transform (faster)
        _transform: function(t, n) {
          return n = n || 1, t.x = n * (this._a * t.x + this._b), t.y = n * (this._c * t.y + this._d), t;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(t, n) {
          return n = n || 1, new H(
            (t.x / n - this._b) / this._a,
            (t.y / n - this._d) / this._c
          );
        }
      };
      function an(t, n, a, c) {
        return new rn(t, n, a, c);
      }
      var En = o({}, Nt, {
        code: "EPSG:3857",
        projection: Zn,
        transformation: function() {
          var t = 0.5 / (Math.PI * Zn.R);
          return an(t, 0.5, -t, 0.5);
        }()
      }), Wo = o({}, En, {
        code: "EPSG:900913"
      });
      function zi(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function Vn(t, n) {
        var a = "", c, h, p, _, E, x;
        for (c = 0, p = t.length; c < p; c++) {
          for (E = t[c], h = 0, _ = E.length; h < _; h++)
            x = E[h], a += (h ? "L" : "M") + x.x + " " + x.y;
          a += n ? W.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var Ln = document.documentElement.style, Cn = "ActiveXObject" in window, qo = Cn && !document.addEventListener, fe = "msLaunchUri" in navigator && !("documentMode" in document), Ge = pe("webkit"), Jn = pe("android"), Xn = pe("android 2") || pe("android 3"), $n = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ni = Jn && pe("Google") && $n < 537 && !("AudioNode" in window), xn = !!window.opera, ti = !fe && pe("chrome"), ei = pe("gecko") && !Ge && !xn && !Cn, ph = !ti && pe("safari"), os = pe("phantom"), rs = "OTransition" in Ln, mh = navigator.platform.indexOf("Win") === 0, as = Cn && "transition" in Ln, Zo = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Xn, ss = "MozPerspective" in Ln, gh = !window.L_DISABLE_3D && (as || Zo || ss) && !rs && !os, ni = typeof orientation < "u" || pe("mobile"), vh = ni && Ge, _h = ni && Zo, ls = !window.PointerEvent && window.MSPointerEvent, us = !!(window.PointerEvent || ls), cs = "ontouchstart" in window || !!window.TouchEvent, Ah = !window.L_NO_TOUCH && (cs || us), yh = ni && xn, wh = ni && ei, bh = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Eh = function() {
        var t = !1;
        try {
          var n = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", v, n), window.removeEventListener("testPassiveEventSupport", v, n);
        } catch {
        }
        return t;
      }(), Lh = function() {
        return !!document.createElement("canvas").getContext;
      }(), Vo = !!(document.createElementNS && zi("svg").createSVGRect), Ch = !!Vo && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), xh = !Vo && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var n = t.firstChild;
          return n.style.behavior = "url(#default#VML)", n && typeof n.adj == "object";
        } catch {
          return !1;
        }
      }(), Mh = navigator.platform.indexOf("Mac") === 0, Ih = navigator.platform.indexOf("Linux") === 0;
      function pe(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var W = {
        ie: Cn,
        ielt9: qo,
        edge: fe,
        webkit: Ge,
        android: Jn,
        android23: Xn,
        androidStock: Ni,
        opera: xn,
        chrome: ti,
        gecko: ei,
        safari: ph,
        phantom: os,
        opera12: rs,
        win: mh,
        ie3d: as,
        webkit3d: Zo,
        gecko3d: ss,
        any3d: gh,
        mobile: ni,
        mobileWebkit: vh,
        mobileWebkit3d: _h,
        msPointer: ls,
        pointer: us,
        touch: Ah,
        touchNative: cs,
        mobileOpera: yh,
        mobileGecko: wh,
        retina: bh,
        passiveEvents: Eh,
        canvas: Lh,
        svg: Vo,
        vml: xh,
        inlineSvg: Ch,
        mac: Mh,
        linux: Ih
      }, hs = W.msPointer ? "MSPointerDown" : "pointerdown", ds = W.msPointer ? "MSPointerMove" : "pointermove", fs = W.msPointer ? "MSPointerUp" : "pointerup", ps = W.msPointer ? "MSPointerCancel" : "pointercancel", Jo = {
        touchstart: hs,
        touchmove: ds,
        touchend: fs,
        touchcancel: ps
      }, ms = {
        touchstart: Sh,
        touchmove: Ui,
        touchend: Ui,
        touchcancel: Ui
      }, Mn = {}, gs = !1;
      function Bh(t, n, a) {
        return n === "touchstart" && Ph(), ms[n] ? (a = ms[n].bind(this, a), t.addEventListener(Jo[n], a, !1), a) : (console.warn("wrong event specified:", n), v);
      }
      function kh(t, n, a) {
        if (!Jo[n]) {
          console.warn("wrong event specified:", n);
          return;
        }
        t.removeEventListener(Jo[n], a, !1);
      }
      function Dh(t) {
        Mn[t.pointerId] = t;
      }
      function Th(t) {
        Mn[t.pointerId] && (Mn[t.pointerId] = t);
      }
      function vs(t) {
        delete Mn[t.pointerId];
      }
      function Ph() {
        gs || (document.addEventListener(hs, Dh, !0), document.addEventListener(ds, Th, !0), document.addEventListener(fs, vs, !0), document.addEventListener(ps, vs, !0), gs = !0);
      }
      function Ui(t, n) {
        if (n.pointerType !== (n.MSPOINTER_TYPE_MOUSE || "mouse")) {
          n.touches = [];
          for (var a in Mn)
            n.touches.push(Mn[a]);
          n.changedTouches = [n], t(n);
        }
      }
      function Sh(t, n) {
        n.MSPOINTER_TYPE_TOUCH && n.pointerType === n.MSPOINTER_TYPE_TOUCH && Ft(n), Ui(t, n);
      }
      function Oh(t) {
        var n = {}, a, c;
        for (c in t)
          a = t[c], n[c] = a && a.bind ? a.bind(t) : a;
        return t = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
      }
      var Qh = 200;
      function Fh(t, n) {
        t.addEventListener("dblclick", n);
        var a = 0, c;
        function h(p) {
          if (p.detail !== 1) {
            c = p.detail;
            return;
          }
          if (!(p.pointerType === "mouse" || p.sourceCapabilities && !p.sourceCapabilities.firesTouchEvents)) {
            var _ = bs(p);
            if (!(_.some(function(x) {
              return x instanceof HTMLLabelElement && x.attributes.for;
            }) && !_.some(function(x) {
              return x instanceof HTMLInputElement || x instanceof HTMLSelectElement;
            }))) {
              var E = Date.now();
              E - a <= Qh ? (c++, c === 2 && n(Oh(p))) : c = 1, a = E;
            }
          }
        }
        return t.addEventListener("click", h), {
          dblclick: n,
          simDblclick: h
        };
      }
      function Hh(t, n) {
        t.removeEventListener("dblclick", n.dblclick), t.removeEventListener("click", n.simDblclick);
      }
      var Xo = ji(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), ii = ji(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), _s = ii === "webkitTransition" || ii === "OTransition" ? ii + "End" : "transitionend";
      function As(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function oi(t, n) {
        var a = t.style[n] || t.currentStyle && t.currentStyle[n];
        if ((!a || a === "auto") && document.defaultView) {
          var c = document.defaultView.getComputedStyle(t, null);
          a = c ? c[n] : null;
        }
        return a === "auto" ? null : a;
      }
      function pt(t, n, a) {
        var c = document.createElement(t);
        return c.className = n || "", a && a.appendChild(c), c;
      }
      function Ct(t) {
        var n = t.parentNode;
        n && n.removeChild(t);
      }
      function Ki(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function In(t) {
        var n = t.parentNode;
        n && n.lastChild !== t && n.appendChild(t);
      }
      function Bn(t) {
        var n = t.parentNode;
        n && n.firstChild !== t && n.insertBefore(t, n.firstChild);
      }
      function $o(t, n) {
        if (t.classList !== void 0)
          return t.classList.contains(n);
        var a = Yi(t);
        return a.length > 0 && new RegExp("(^|\\s)" + n + "(\\s|$)").test(a);
      }
      function it(t, n) {
        if (t.classList !== void 0)
          for (var a = w(n), c = 0, h = a.length; c < h; c++)
            t.classList.add(a[c]);
        else if (!$o(t, n)) {
          var p = Yi(t);
          tr(t, (p ? p + " " : "") + n);
        }
      }
      function Mt(t, n) {
        t.classList !== void 0 ? t.classList.remove(n) : tr(t, M((" " + Yi(t) + " ").replace(" " + n + " ", " ")));
      }
      function tr(t, n) {
        t.className.baseVal === void 0 ? t.className = n : t.className.baseVal = n;
      }
      function Yi(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function te(t, n) {
        "opacity" in t.style ? t.style.opacity = n : "filter" in t.style && Rh(t, n);
      }
      function Rh(t, n) {
        var a = !1, c = "DXImageTransform.Microsoft.Alpha";
        try {
          a = t.filters.item(c);
        } catch {
          if (n === 1)
            return;
        }
        n = Math.round(n * 100), a ? (a.Enabled = n !== 100, a.Opacity = n) : t.style.filter += " progid:" + c + "(opacity=" + n + ")";
      }
      function ji(t) {
        for (var n = document.documentElement.style, a = 0; a < t.length; a++)
          if (t[a] in n)
            return t[a];
        return !1;
      }
      function sn(t, n, a) {
        var c = n || new H(0, 0);
        t.style[Xo] = (W.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (a ? " scale(" + a + ")" : "");
      }
      function Dt(t, n) {
        t._leaflet_pos = n, W.any3d ? sn(t, n) : (t.style.left = n.x + "px", t.style.top = n.y + "px");
      }
      function ln(t) {
        return t._leaflet_pos || new H(0, 0);
      }
      var ri, ai, er;
      if ("onselectstart" in document)
        ri = function() {
          et(window, "selectstart", Ft);
        }, ai = function() {
          At(window, "selectstart", Ft);
        };
      else {
        var si = ji(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        ri = function() {
          if (si) {
            var t = document.documentElement.style;
            er = t[si], t[si] = "none";
          }
        }, ai = function() {
          si && (document.documentElement.style[si] = er, er = void 0);
        };
      }
      function nr() {
        et(window, "dragstart", Ft);
      }
      function ir() {
        At(window, "dragstart", Ft);
      }
      var Wi, or;
      function rr(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (qi(), Wi = t, or = t.style.outlineStyle, t.style.outlineStyle = "none", et(window, "keydown", qi));
      }
      function qi() {
        Wi && (Wi.style.outlineStyle = or, Wi = void 0, or = void 0, At(window, "keydown", qi));
      }
      function ys(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function ar(t) {
        var n = t.getBoundingClientRect();
        return {
          x: n.width / t.offsetWidth || 1,
          y: n.height / t.offsetHeight || 1,
          boundingClientRect: n
        };
      }
      var Gh = {
        __proto__: null,
        TRANSFORM: Xo,
        TRANSITION: ii,
        TRANSITION_END: _s,
        get: As,
        getStyle: oi,
        create: pt,
        remove: Ct,
        empty: Ki,
        toFront: In,
        toBack: Bn,
        hasClass: $o,
        addClass: it,
        removeClass: Mt,
        setClass: tr,
        getClass: Yi,
        setOpacity: te,
        testProp: ji,
        setTransform: sn,
        setPosition: Dt,
        getPosition: ln,
        get disableTextSelection() {
          return ri;
        },
        get enableTextSelection() {
          return ai;
        },
        disableImageDrag: nr,
        enableImageDrag: ir,
        preventOutline: rr,
        restoreOutline: qi,
        getSizedParentNode: ys,
        getScale: ar
      };
      function et(t, n, a, c) {
        if (n && typeof n == "object")
          for (var h in n)
            lr(t, h, n[h], a);
        else {
          n = w(n);
          for (var p = 0, _ = n.length; p < _; p++)
            lr(t, n[p], a, c);
        }
        return this;
      }
      var me = "_leaflet_events";
      function At(t, n, a, c) {
        if (arguments.length === 1)
          ws(t), delete t[me];
        else if (n && typeof n == "object")
          for (var h in n)
            ur(t, h, n[h], a);
        else if (n = w(n), arguments.length === 2)
          ws(t, function(E) {
            return Q(n, E) !== -1;
          });
        else
          for (var p = 0, _ = n.length; p < _; p++)
            ur(t, n[p], a, c);
        return this;
      }
      function ws(t, n) {
        for (var a in t[me]) {
          var c = a.split(/\d/)[0];
          (!n || n(c)) && ur(t, c, null, null, a);
        }
      }
      var sr = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function lr(t, n, a, c) {
        var h = n + f(a) + (c ? "_" + f(c) : "");
        if (t[me] && t[me][h])
          return this;
        var p = function(E) {
          return a.call(c || t, E || window.event);
        }, _ = p;
        !W.touchNative && W.pointer && n.indexOf("touch") === 0 ? p = Bh(t, n, p) : W.touch && n === "dblclick" ? p = Fh(t, p) : "addEventListener" in t ? n === "touchstart" || n === "touchmove" || n === "wheel" || n === "mousewheel" ? t.addEventListener(sr[n] || n, p, W.passiveEvents ? { passive: !1 } : !1) : n === "mouseenter" || n === "mouseleave" ? (p = function(E) {
          E = E || window.event, hr(t, E) && _(E);
        }, t.addEventListener(sr[n], p, !1)) : t.addEventListener(n, _, !1) : t.attachEvent("on" + n, p), t[me] = t[me] || {}, t[me][h] = p;
      }
      function ur(t, n, a, c, h) {
        h = h || n + f(a) + (c ? "_" + f(c) : "");
        var p = t[me] && t[me][h];
        if (!p)
          return this;
        !W.touchNative && W.pointer && n.indexOf("touch") === 0 ? kh(t, n, p) : W.touch && n === "dblclick" ? Hh(t, p) : "removeEventListener" in t ? t.removeEventListener(sr[n] || n, p, !1) : t.detachEvent("on" + n, p), t[me][h] = null;
      }
      function un(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function cr(t) {
        return lr(t, "wheel", un), this;
      }
      function li(t) {
        return et(t, "mousedown touchstart dblclick contextmenu", un), t._leaflet_disable_click = !0, this;
      }
      function Ft(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function cn(t) {
        return Ft(t), un(t), this;
      }
      function bs(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var n = [], a = t.target; a; )
          n.push(a), a = a.parentNode;
        return n;
      }
      function Es(t, n) {
        if (!n)
          return new H(t.clientX, t.clientY);
        var a = ar(n), c = a.boundingClientRect;
        return new H(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - c.left) / a.x - n.clientLeft,
          (t.clientY - c.top) / a.y - n.clientTop
        );
      }
      var zh = W.linux && W.chrome ? window.devicePixelRatio : W.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Ls(t) {
        return W.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / zh : (
            // Pixels
            t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
              // Lines
              t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
                // Pages
                t.deltaX || t.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                      // Legacy Moz lines
                      t.detail ? t.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function hr(t, n) {
        var a = n.relatedTarget;
        if (!a)
          return !0;
        try {
          for (; a && a !== t; )
            a = a.parentNode;
        } catch {
          return !1;
        }
        return a !== t;
      }
      var Nh = {
        __proto__: null,
        on: et,
        off: At,
        stopPropagation: un,
        disableScrollPropagation: cr,
        disableClickPropagation: li,
        preventDefault: Ft,
        stop: cn,
        getPropagationPath: bs,
        getMousePosition: Es,
        getWheelDelta: Ls,
        isExternalTarget: hr,
        addListener: et,
        removeListener: At
      }, Cs = T.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, n, a, c) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = a || 0.25, this._easeOutPower = 1 / Math.max(c || 0.5, 0.2), this._startPos = ln(t), this._offset = n.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = tt(this._animate, this), this._step();
        },
        _step: function(t) {
          var n = +/* @__PURE__ */ new Date() - this._startTime, a = this._duration * 1e3;
          n < a ? this._runFrame(this._easeOut(n / a), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, n) {
          var a = this._startPos.add(this._offset.multiplyBy(t));
          n && a._round(), Dt(this._el, a), this.fire("step");
        },
        _complete: function() {
          X(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), ct = T.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: En,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(t, n) {
          n = y(this, n), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = u(this._onResize, this), this._initEvents(), n.maxBounds && this.setMaxBounds(n.maxBounds), n.zoom !== void 0 && (this._zoom = this._limitZoom(n.zoom)), n.center && n.zoom !== void 0 && this.setView(nt(n.center), n.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ii && W.any3d && !W.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), et(this._proxy, _s, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, n, a) {
          if (n = n === void 0 ? this._zoom : this._limitZoom(n), t = this._limitCenter(nt(t), n, this.options.maxBounds), a = a || {}, this._stop(), this._loaded && !a.reset && a !== !0) {
            a.animate !== void 0 && (a.zoom = o({ animate: a.animate }, a.zoom), a.pan = o({ animate: a.animate, duration: a.duration }, a.pan));
            var c = this._zoom !== n ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, n, a.zoom) : this._tryAnimatedPan(t, a.pan);
            if (c)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, n, a.pan && a.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(t, n) {
          return this._loaded ? this.setView(this.getCenter(), t, { zoom: n }) : (this._zoom = t, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(t, n) {
          return t = t || (W.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, n);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, n) {
          return t = t || (W.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, n);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, n, a) {
          var c = this.getZoomScale(n), h = this.getSize().divideBy(2), p = t instanceof H ? t : this.latLngToContainerPoint(t), _ = p.subtract(h).multiplyBy(1 - 1 / c), E = this.containerPointToLatLng(h.add(_));
          return this.setView(E, n, { zoom: a });
        },
        _getBoundsCenterZoom: function(t, n) {
          n = n || {}, t = t.getBounds ? t.getBounds() : lt(t);
          var a = S(n.paddingTopLeft || n.padding || [0, 0]), c = S(n.paddingBottomRight || n.padding || [0, 0]), h = this.getBoundsZoom(t, !1, a.add(c));
          if (h = typeof n.maxZoom == "number" ? Math.min(n.maxZoom, h) : h, h === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: h
            };
          var p = c.subtract(a).divideBy(2), _ = this.project(t.getSouthWest(), h), E = this.project(t.getNorthEast(), h), x = this.unproject(_.add(E).divideBy(2).add(p), h);
          return {
            center: x,
            zoom: h
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, n) {
          if (t = lt(t), !t.isValid())
            throw new Error("Bounds are not valid.");
          var a = this._getBoundsCenterZoom(t, n);
          return this.setView(a.center, a.zoom, n);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(t, n) {
          return this.setView(t, this._zoom, { pan: n });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(t, n) {
          if (t = S(t).round(), n = n || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (n.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Cs(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), n.noMoveStart || this.fire("movestart"), n.animate !== !1) {
            it(this._mapPane, "leaflet-pan-anim");
            var a = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, a, n.duration || 0.25, n.easeLinearity);
          } else
            this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(t, n, a) {
          if (a = a || {}, a.animate === !1 || !W.any3d)
            return this.setView(t, n, a);
          this._stop();
          var c = this.project(this.getCenter()), h = this.project(t), p = this.getSize(), _ = this._zoom;
          t = nt(t), n = n === void 0 ? _ : n;
          var E = Math.max(p.x, p.y), x = E * this.getZoomScale(_, n), D = h.distanceTo(c) || 1, z = 1.42, V = z * z;
          function ot(Tt) {
            var ao = Tt ? -1 : 1, kd = Tt ? x : E, Dd = x * x - E * E + ao * V * V * D * D, Td = 2 * kd * V * D, br = Dd / Td, rl = Math.sqrt(br * br + 1) - br, Pd = rl < 1e-9 ? -18 : Math.log(rl);
            return Pd;
          }
          function Ut(Tt) {
            return (Math.exp(Tt) - Math.exp(-Tt)) / 2;
          }
          function St(Tt) {
            return (Math.exp(Tt) + Math.exp(-Tt)) / 2;
          }
          function ne(Tt) {
            return Ut(Tt) / St(Tt);
          }
          var Yt = ot(0);
          function On(Tt) {
            return E * (St(Yt) / St(Yt + z * Tt));
          }
          function xd(Tt) {
            return E * (St(Yt) * ne(Yt + z * Tt) - Ut(Yt)) / V;
          }
          function Md(Tt) {
            return 1 - Math.pow(1 - Tt, 1.5);
          }
          var Id = Date.now(), il = (ot(1) - Yt) / z, Bd = a.duration ? 1e3 * a.duration : 1e3 * il * 0.8;
          function ol() {
            var Tt = (Date.now() - Id) / Bd, ao = Md(Tt) * il;
            Tt <= 1 ? (this._flyToFrame = tt(ol, this), this._move(
              this.unproject(c.add(h.subtract(c).multiplyBy(xd(ao) / D)), _),
              this.getScaleZoom(E / On(ao), _),
              { flyTo: !0 }
            )) : this._move(t, n)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), ol.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(t, n) {
          var a = this._getBoundsCenterZoom(t, n);
          return this.flyTo(a.center, a.zoom, n);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(t) {
          return t = lt(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(t) {
          var n = this.options.minZoom;
          return this.options.minZoom = t, this._loaded && n !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(t) {
          var n = this.options.maxZoom;
          return this.options.maxZoom = t, this._loaded && n !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(t, n) {
          this._enforcingBounds = !0;
          var a = this.getCenter(), c = this._limitCenter(a, this._zoom, lt(t));
          return a.equals(c) || this.panTo(c, n), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, n) {
          n = n || {};
          var a = S(n.paddingTopLeft || n.padding || [0, 0]), c = S(n.paddingBottomRight || n.padding || [0, 0]), h = this.project(this.getCenter()), p = this.project(t), _ = this.getPixelBounds(), E = st([_.min.add(a), _.max.subtract(c)]), x = E.getSize();
          if (!E.contains(p)) {
            this._enforcingBounds = !0;
            var D = p.subtract(E.getCenter()), z = E.extend(p).getSize().subtract(x);
            h.x += D.x < 0 ? -z.x : z.x, h.y += D.y < 0 ? -z.y : z.y, this.panTo(this.unproject(h), n), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(t) {
          if (!this._loaded)
            return this;
          t = o({
            animate: !1,
            pan: !0
          }, t === !0 ? { animate: !0 } : t);
          var n = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var a = this.getSize(), c = n.divideBy(2).round(), h = a.divideBy(2).round(), p = c.subtract(h);
          return !p.x && !p.y ? this : (t.animate && t.pan ? this.panBy(p) : (t.pan && this._rawPanBy(p), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(u(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: n,
            newSize: a
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(t) {
          if (t = this._locateOptions = o({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, t), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var n = u(this._handleGeolocationResponse, this), a = u(this._handleGeolocationError, this);
          return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, a, t) : navigator.geolocation.getCurrentPosition(n, a, t), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(t) {
          if (this._container._leaflet_id) {
            var n = t.code, a = t.message || (n === 1 ? "permission denied" : n === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: n,
              message: "Geolocation error: " + a + "."
            });
          }
        },
        _handleGeolocationResponse: function(t) {
          if (this._container._leaflet_id) {
            var n = t.coords.latitude, a = t.coords.longitude, c = new $(n, a), h = c.toBounds(t.coords.accuracy * 2), p = this._locateOptions;
            if (p.setView) {
              var _ = this.getBoundsZoom(h);
              this.setView(c, p.maxZoom ? Math.min(_, p.maxZoom) : _);
            }
            var E = {
              latlng: c,
              bounds: h,
              timestamp: t.timestamp
            };
            for (var x in t.coords)
              typeof t.coords[x] == "number" && (E[x] = t.coords[x]);
            this.fire("locationfound", E);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(t, n) {
          if (!n)
            return this;
          var a = this[t] = new n(this);
          return this._handlers.push(a), this.options[t] && a.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Ct(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (X(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            Ct(this._panes[t]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(t, n) {
          var a = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), c = pt("div", a, n || this._mapPane);
          return t && (this._panes[t] = c), c;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var t = this.getPixelBounds(), n = this.unproject(t.getBottomLeft()), a = this.unproject(t.getTopRight());
          return new ft(n, a);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(t, n, a) {
          t = lt(t), a = S(a || [0, 0]);
          var c = this.getZoom() || 0, h = this.getMinZoom(), p = this.getMaxZoom(), _ = t.getNorthWest(), E = t.getSouthEast(), x = this.getSize().subtract(a), D = st(this.project(E, c), this.project(_, c)).getSize(), z = W.any3d ? this.options.zoomSnap : 1, V = x.x / D.x, ot = x.y / D.y, Ut = n ? Math.max(V, ot) : Math.min(V, ot);
          return c = this.getScaleZoom(Ut, c), z && (c = Math.round(c / (z / 100)) * (z / 100), c = n ? Math.ceil(c / z) * z : Math.floor(c / z) * z), Math.max(h, Math.min(p, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new H(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, n) {
          var a = this._getTopLeftPoint(t, n);
          return new q(a, a.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(t, n) {
          var a = this.options.crs;
          return n = n === void 0 ? this._zoom : n, a.scale(t) / a.scale(n);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(t, n) {
          var a = this.options.crs;
          n = n === void 0 ? this._zoom : n;
          var c = a.zoom(t * a.scale(n));
          return isNaN(c) ? 1 / 0 : c;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(t, n) {
          return n = n === void 0 ? this._zoom : n, this.options.crs.latLngToPoint(nt(t), n);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(t, n) {
          return n = n === void 0 ? this._zoom : n, this.options.crs.pointToLatLng(S(t), n);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var n = S(t).add(this.getPixelOrigin());
          return this.unproject(n);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(t) {
          var n = this.project(nt(t))._round();
          return n._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(t) {
          return this.options.crs.wrapLatLng(nt(t));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(t) {
          return this.options.crs.wrapLatLngBounds(lt(t));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(t, n) {
          return this.options.crs.distance(nt(t), nt(n));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(t) {
          return S(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return S(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var n = this.containerPointToLayerPoint(S(t));
          return this.layerPointToLatLng(n);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(nt(t)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(t) {
          return Es(t, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        // map initialization methods
        _initContainer: function(t) {
          var n = this._container = As(t);
          if (n) {
            if (n._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          et(n, "scroll", this._onScroll, this), this._containerId = f(n);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && W.any3d, it(t, "leaflet-container" + (W.touch ? " leaflet-touch" : "") + (W.retina ? " leaflet-retina" : "") + (W.ielt9 ? " leaflet-oldie" : "") + (W.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var n = oi(t, "position");
          n !== "absolute" && n !== "relative" && n !== "fixed" && n !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Dt(this._mapPane, new H(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (it(t.markerPane, "leaflet-zoom-hide"), it(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, n, a) {
          Dt(this._mapPane, new H(0, 0));
          var c = !this._loaded;
          this._loaded = !0, n = this._limitZoom(n), this.fire("viewprereset");
          var h = this._zoom !== n;
          this._moveStart(h, a)._move(t, n)._moveEnd(h), this.fire("viewreset"), c && this.fire("load");
        },
        _moveStart: function(t, n) {
          return t && this.fire("zoomstart"), n || this.fire("movestart"), this;
        },
        _move: function(t, n, a, c) {
          n === void 0 && (n = this._zoom);
          var h = this._zoom !== n;
          return this._zoom = n, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), c ? a && a.pinch && this.fire("zoom", a) : ((h || a && a.pinch) && this.fire("zoom", a), this.fire("move", a)), this;
        },
        _moveEnd: function(t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return X(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          Dt(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(t) {
          this._targets = {}, this._targets[f(this._container)] = this;
          var n = t ? At : et;
          n(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && n(window, "resize", this._onResize, this), W.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          X(this._resizeRequest), this._resizeRequest = tt(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(t, n) {
          for (var a = [], c, h = n === "mouseout" || n === "mouseover", p = t.target || t.srcElement, _ = !1; p; ) {
            if (c = this._targets[f(p)], c && (n === "click" || n === "preclick") && this._draggableMoved(c)) {
              _ = !0;
              break;
            }
            if (c && c.listens(n, !0) && (h && !hr(p, t) || (a.push(c), h)) || p === this._container)
              break;
            p = p.parentNode;
          }
          return !a.length && !_ && !h && this.listens(n, !0) && (a = [this]), a;
        },
        _isClickDisabled: function(t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click)
              return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function(t) {
          var n = t.target || t.srcElement;
          if (!(!this._loaded || n._leaflet_disable_events || t.type === "click" && this._isClickDisabled(n))) {
            var a = t.type;
            a === "mousedown" && rr(n), this._fireDOMEvent(t, a);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, n, a) {
          if (t.type === "click") {
            var c = o({}, t);
            c.type = "preclick", this._fireDOMEvent(c, c.type, a);
          }
          var h = this._findEventTargets(t, n);
          if (a) {
            for (var p = [], _ = 0; _ < a.length; _++)
              a[_].listens(n, !0) && p.push(a[_]);
            h = p.concat(h);
          }
          if (h.length) {
            n === "contextmenu" && Ft(t);
            var E = h[0], x = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var D = E.getLatLng && (!E._radius || E._radius <= 10);
              x.containerPoint = D ? this.latLngToContainerPoint(E.getLatLng()) : this.mouseEventToContainerPoint(t), x.layerPoint = this.containerPointToLayerPoint(x.containerPoint), x.latlng = D ? E.getLatLng() : this.layerPointToLatLng(x.layerPoint);
            }
            for (_ = 0; _ < h.length; _++)
              if (h[_].fire(n, x, !0), x.originalEvent._stopped || h[_].options.bubblingMouseEvents === !1 && Q(this._mouseEvents, n) !== -1)
                return;
          }
        },
        _draggableMoved: function(t) {
          return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var t = 0, n = this._handlers.length; t < n; t++)
            this._handlers[t].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(t, n) {
          return this._loaded ? t.call(n || this, { target: this }) : this.on("load", t, n), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return ln(this._mapPane) || new H(0, 0);
        },
        _moved: function() {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function(t, n) {
          var a = t && n !== void 0 ? this._getNewPixelOrigin(t, n) : this.getPixelOrigin();
          return a.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(t, n) {
          var a = this.getSize()._divideBy(2);
          return this.project(t, n)._subtract(a)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(t, n, a) {
          var c = this._getNewPixelOrigin(a, n);
          return this.project(t, n)._subtract(c);
        },
        _latLngBoundsToNewLayerBounds: function(t, n, a) {
          var c = this._getNewPixelOrigin(a, n);
          return st([
            this.project(t.getSouthWest(), n)._subtract(c),
            this.project(t.getNorthWest(), n)._subtract(c),
            this.project(t.getSouthEast(), n)._subtract(c),
            this.project(t.getNorthEast(), n)._subtract(c)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(t, n, a) {
          if (!a)
            return t;
          var c = this.project(t, n), h = this.getSize().divideBy(2), p = new q(c.subtract(h), c.add(h)), _ = this._getBoundsOffset(p, a, n);
          return Math.abs(_.x) <= 1 && Math.abs(_.y) <= 1 ? t : this.unproject(c.add(_), n);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, n) {
          if (!n)
            return t;
          var a = this.getPixelBounds(), c = new q(a.min.add(t), a.max.add(t));
          return t.add(this._getBoundsOffset(c, n));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, n, a) {
          var c = st(
            this.project(n.getNorthEast(), a),
            this.project(n.getSouthWest(), a)
          ), h = c.min.subtract(t.min), p = c.max.subtract(t.max), _ = this._rebound(h.x, -p.x), E = this._rebound(h.y, -p.y);
          return new H(_, E);
        },
        _rebound: function(t, n) {
          return t + n > 0 ? Math.round(t - n) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(n));
        },
        _limitZoom: function(t) {
          var n = this.getMinZoom(), a = this.getMaxZoom(), c = W.any3d ? this.options.zoomSnap : 1;
          return c && (t = Math.round(t / c) * c), Math.max(n, Math.min(a, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          Mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, n) {
          var a = this._getCenterOffset(t)._trunc();
          return (n && n.animate) !== !0 && !this.getSize().contains(a) ? !1 : (this.panBy(a, n), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = pt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(n) {
            var a = Xo, c = this._proxy.style[a];
            sn(this._proxy, this.project(n.center, n.zoom), this.getZoomScale(n.zoom, 1)), c === this._proxy.style[a] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          Ct(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), n = this.getZoom();
          sn(this._proxy, this.project(t, n), this.getZoomScale(n, 1));
        },
        _catchTransitionEnd: function(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(t, n, a) {
          if (this._animatingZoom)
            return !0;
          if (a = a || {}, !this._zoomAnimated || a.animate === !1 || this._nothingToAnimate() || Math.abs(n - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var c = this.getZoomScale(n), h = this._getCenterOffset(t)._divideBy(1 - 1 / c);
          return a.animate !== !0 && !this.getSize().contains(h) ? !1 : (tt(function() {
            this._moveStart(!0, a.noMoveStart || !1)._animateZoom(t, n, !0);
          }, this), !0);
        },
        _animateZoom: function(t, n, a, c) {
          this._mapPane && (a && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = n, it(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: n,
            noUpdate: c
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(u(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function Uh(t, n) {
        return new ct(t, n);
      }
      var ae = bt.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          y(this, t);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(t) {
          var n = this._map;
          return n && n.removeControl(this), this.options.position = t, n && n.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(t) {
          this.remove(), this._map = t;
          var n = this._container = this.onAdd(t), a = this.getPosition(), c = t._controlCorners[a];
          return it(n, "leaflet-control"), a.indexOf("bottom") !== -1 ? c.insertBefore(n, c.firstChild) : c.appendChild(n), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (Ct(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), ui = function(t) {
        return new ae(t);
      };
      ct.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(t) {
          return t.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(t) {
          return t.remove(), this;
        },
        _initControlPos: function() {
          var t = this._controlCorners = {}, n = "leaflet-", a = this._controlContainer = pt("div", n + "control-container", this._container);
          function c(h, p) {
            var _ = n + h + " " + n + p;
            t[h + p] = pt("div", _, a);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            Ct(this._controlCorners[t]);
          Ct(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var xs = ae.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(t, n, a, c) {
            return a < c ? -1 : c < a ? 1 : 0;
          }
        },
        initialize: function(t, n, a) {
          y(this, a), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var c in t)
            this._addLayer(t[c], c);
          for (c in n)
            this._addLayer(n[c], c, !0);
        },
        onAdd: function(t) {
          this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
          for (var n = 0; n < this._layers.length; n++)
            this._layers[n].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(t) {
          return ae.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(t, n) {
          return this._addLayer(t, n), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(t, n) {
          return this._addLayer(t, n, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(t) {
          t.off("add remove", this._onLayerChange, this);
          var n = this._getLayer(f(t));
          return n && this._layers.splice(this._layers.indexOf(n), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          it(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (it(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : Mt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Mt(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", n = this._container = pt("div", t), a = this.options.collapsed;
          n.setAttribute("aria-haspopup", !0), li(n), cr(n);
          var c = this._section = pt("section", t + "-list");
          a && (this._map.on("click", this.collapse, this), et(n, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var h = this._layersLink = pt("a", t + "-toggle", n);
          h.href = "#", h.title = "Layers", h.setAttribute("role", "button"), et(h, {
            keydown: function(p) {
              p.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(p) {
              Ft(p), this._expandSafely();
            }
          }, this), a || this.expand(), this._baseLayersList = pt("div", t + "-base", c), this._separator = pt("div", t + "-separator", c), this._overlaysList = pt("div", t + "-overlays", c), n.appendChild(c);
        },
        _getLayer: function(t) {
          for (var n = 0; n < this._layers.length; n++)
            if (this._layers[n] && f(this._layers[n].layer) === t)
              return this._layers[n];
        },
        _addLayer: function(t, n, a) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: n,
            overlay: a
          }), this.options.sortLayers && this._layers.sort(u(function(c, h) {
            return this.options.sortFunction(c.layer, h.layer, c.name, h.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Ki(this._baseLayersList), Ki(this._overlaysList), this._layerControlInputs = [];
          var t, n, a, c, h = 0;
          for (a = 0; a < this._layers.length; a++)
            c = this._layers[a], this._addItem(c), n = n || c.overlay, t = t || !c.overlay, h += c.overlay ? 0 : 1;
          return this.options.hideSingleBase && (t = t && h > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = n && t ? "" : "none", this;
        },
        _onLayerChange: function(t) {
          this._handlingClick || this._update();
          var n = this._getLayer(f(t.target)), a = n.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
          a && this._map.fire(a, n);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(t, n) {
          var a = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (n ? ' checked="checked"' : "") + "/>", c = document.createElement("div");
          return c.innerHTML = a, c.firstChild;
        },
        _addItem: function(t) {
          var n = document.createElement("label"), a = this._map.hasLayer(t.layer), c;
          t.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = a) : c = this._createRadioElement("leaflet-base-layers_" + f(this), a), this._layerControlInputs.push(c), c.layerId = f(t.layer), et(c, "click", this._onInputClick, this);
          var h = document.createElement("span");
          h.innerHTML = " " + t.name;
          var p = document.createElement("span");
          n.appendChild(p), p.appendChild(c), p.appendChild(h);
          var _ = t.overlay ? this._overlaysList : this._baseLayersList;
          return _.appendChild(n), this._checkDisabledLayers(), n;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var t = this._layerControlInputs, n, a, c = [], h = [];
            this._handlingClick = !0;
            for (var p = t.length - 1; p >= 0; p--)
              n = t[p], a = this._getLayer(n.layerId).layer, n.checked ? c.push(a) : n.checked || h.push(a);
            for (p = 0; p < h.length; p++)
              this._map.hasLayer(h[p]) && this._map.removeLayer(h[p]);
            for (p = 0; p < c.length; p++)
              this._map.hasLayer(c[p]) || this._map.addLayer(c[p]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var t = this._layerControlInputs, n, a, c = this._map.getZoom(), h = t.length - 1; h >= 0; h--)
            n = t[h], a = this._getLayer(n.layerId).layer, n.disabled = a.options.minZoom !== void 0 && c < a.options.minZoom || a.options.maxZoom !== void 0 && c > a.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var t = this._section;
          this._preventClick = !0, et(t, "click", Ft), this.expand();
          var n = this;
          setTimeout(function() {
            At(t, "click", Ft), n._preventClick = !1;
          });
        }
      }), Kh = function(t, n, a) {
        return new xs(t, n, a);
      }, dr = ae.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
          var n = "leaflet-control-zoom", a = pt("div", n + " leaflet-bar"), c = this.options;
          return this._zoomInButton = this._createButton(
            c.zoomInText,
            c.zoomInTitle,
            n + "-in",
            a,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            c.zoomOutText,
            c.zoomOutTitle,
            n + "-out",
            a,
            this._zoomOut
          ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), a;
        },
        onRemove: function(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(t) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function(t) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function(t, n, a, c, h) {
          var p = pt("a", a, c);
          return p.innerHTML = t, p.href = "#", p.title = n, p.setAttribute("role", "button"), p.setAttribute("aria-label", n), li(p), et(p, "click", cn), et(p, "click", h, this), et(p, "click", this._refocusOnMap, this), p;
        },
        _updateDisabled: function() {
          var t = this._map, n = "leaflet-disabled";
          Mt(this._zoomInButton, n), Mt(this._zoomOutButton, n), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (it(this._zoomOutButton, n), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (it(this._zoomInButton, n), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      ct.mergeOptions({
        zoomControl: !0
      }), ct.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new dr(), this.addControl(this.zoomControl));
      });
      var Yh = function(t) {
        return new dr(t);
      }, Ms = ae.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(t) {
          var n = "leaflet-control-scale", a = pt("div", n), c = this.options;
          return this._addScales(c, n + "-line", a), t.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), a;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, n, a) {
          t.metric && (this._mScale = pt("div", n, a)), t.imperial && (this._iScale = pt("div", n, a));
        },
        _update: function() {
          var t = this._map, n = t.getSize().y / 2, a = t.distance(
            t.containerPointToLatLng([0, n]),
            t.containerPointToLatLng([this.options.maxWidth, n])
          );
          this._updateScales(a);
        },
        _updateScales: function(t) {
          this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function(t) {
          var n = this._getRoundNum(t), a = n < 1e3 ? n + " m" : n / 1e3 + " km";
          this._updateScale(this._mScale, a, n / t);
        },
        _updateImperial: function(t) {
          var n = t * 3.2808399, a, c, h;
          n > 5280 ? (a = n / 5280, c = this._getRoundNum(a), this._updateScale(this._iScale, c + " mi", c / a)) : (h = this._getRoundNum(n), this._updateScale(this._iScale, h + " ft", h / n));
        },
        _updateScale: function(t, n, a) {
          t.style.width = Math.round(this.options.maxWidth * a) + "px", t.innerHTML = n;
        },
        _getRoundNum: function(t) {
          var n = Math.pow(10, (Math.floor(t) + "").length - 1), a = t / n;
          return a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1, n * a;
        }
      }), jh = function(t) {
        return new Ms(t);
      }, Wh = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', fr = ae.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (W.inlineSvg ? Wh + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          y(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = pt("div", "leaflet-control-attribution"), li(this._container);
          for (var n in t._layers)
            t._layers[n].getAttribution && this.addAttribution(t._layers[n].getAttribution());
          return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(t) {
          t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
            this.removeAttribution(t.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(t) {
          return this.options.prefix = t, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var t = [];
            for (var n in this._attributions)
              this._attributions[n] && t.push(n);
            var a = [];
            this.options.prefix && a.push(this.options.prefix), t.length && a.push(t.join(", ")), this._container.innerHTML = a.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      ct.mergeOptions({
        attributionControl: !0
      }), ct.addInitHook(function() {
        this.options.attributionControl && new fr().addTo(this);
      });
      var qh = function(t) {
        return new fr(t);
      };
      ae.Layers = xs, ae.Zoom = dr, ae.Scale = Ms, ae.Attribution = fr, ui.layers = Kh, ui.zoom = Yh, ui.scale = jh, ui.attribution = qh;
      var ge = bt.extend({
        initialize: function(t) {
          this._map = t;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      ge.addTo = function(t, n) {
        return t.addHandler(n, this), this;
      };
      var Zh = { Events: R }, Is = W.touch ? "touchstart mousedown" : "mousedown", ze = T.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(t, n, a, c) {
          y(this, c), this._element = t, this._dragStartTarget = n || t, this._preventOutline = a;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (et(this._dragStartTarget, Is, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (ze._dragging === this && this.finishDrag(!0), At(this._dragStartTarget, Is, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !$o(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              ze._dragging === this && this.finishDrag();
              return;
            }
            if (!(ze._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (ze._dragging = this, this._preventOutline && rr(this._element), nr(), ri(), !this._moving)) {
              this.fire("down");
              var n = t.touches ? t.touches[0] : t, a = ys(this._element);
              this._startPoint = new H(n.clientX, n.clientY), this._startPos = ln(this._element), this._parentScale = ar(a);
              var c = t.type === "mousedown";
              et(document, c ? "mousemove" : "touchmove", this._onMove, this), et(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var n = t.touches && t.touches.length === 1 ? t.touches[0] : t, a = new H(n.clientX, n.clientY)._subtract(this._startPoint);
            !a.x && !a.y || Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (a.x /= this._parentScale.x, a.y /= this._parentScale.y, Ft(t), this._moved || (this.fire("dragstart"), this._moved = !0, it(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), it(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), Dt(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          Mt(document.body, "leaflet-dragging"), this._lastTarget && (Mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), At(document, "mousemove touchmove", this._onMove, this), At(document, "mouseup touchend touchcancel", this._onUp, this), ir(), ai();
          var n = this._moved && this._moving;
          this._moving = !1, ze._dragging = !1, n && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Bs(t, n, a) {
        var c, h = [1, 4, 2, 8], p, _, E, x, D, z, V, ot;
        for (p = 0, z = t.length; p < z; p++)
          t[p]._code = hn(t[p], n);
        for (E = 0; E < 4; E++) {
          for (V = h[E], c = [], p = 0, z = t.length, _ = z - 1; p < z; _ = p++)
            x = t[p], D = t[_], x._code & V ? D._code & V || (ot = Zi(D, x, V, n, a), ot._code = hn(ot, n), c.push(ot)) : (D._code & V && (ot = Zi(D, x, V, n, a), ot._code = hn(ot, n), c.push(ot)), c.push(x));
          t = c;
        }
        return t;
      }
      function ks(t, n) {
        var a, c, h, p, _, E, x, D, z;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ee(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var V = nt([0, 0]), ot = lt(t), Ut = ot.getNorthWest().distanceTo(ot.getSouthWest()) * ot.getNorthEast().distanceTo(ot.getNorthWest());
        Ut < 1700 && (V = pr(t));
        var St = t.length, ne = [];
        for (a = 0; a < St; a++) {
          var Yt = nt(t[a]);
          ne.push(n.project(nt([Yt.lat - V.lat, Yt.lng - V.lng])));
        }
        for (E = x = D = 0, a = 0, c = St - 1; a < St; c = a++)
          h = ne[a], p = ne[c], _ = h.y * p.x - p.y * h.x, x += (h.x + p.x) * _, D += (h.y + p.y) * _, E += _ * 3;
        E === 0 ? z = ne[0] : z = [x / E, D / E];
        var On = n.unproject(S(z));
        return nt([On.lat + V.lat, On.lng + V.lng]);
      }
      function pr(t) {
        for (var n = 0, a = 0, c = 0, h = 0; h < t.length; h++) {
          var p = nt(t[h]);
          n += p.lat, a += p.lng, c++;
        }
        return nt([n / c, a / c]);
      }
      var Vh = {
        __proto__: null,
        clipPolygon: Bs,
        polygonCenter: ks,
        centroid: pr
      };
      function Ds(t, n) {
        if (!n || !t.length)
          return t.slice();
        var a = n * n;
        return t = $h(t, a), t = Xh(t, a), t;
      }
      function Ts(t, n, a) {
        return Math.sqrt(ci(t, n, a, !0));
      }
      function Jh(t, n, a) {
        return ci(t, n, a);
      }
      function Xh(t, n) {
        var a = t.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, h = new c(a);
        h[0] = h[a - 1] = 1, mr(t, h, n, 0, a - 1);
        var p, _ = [];
        for (p = 0; p < a; p++)
          h[p] && _.push(t[p]);
        return _;
      }
      function mr(t, n, a, c, h) {
        var p = 0, _, E, x;
        for (E = c + 1; E <= h - 1; E++)
          x = ci(t[E], t[c], t[h], !0), x > p && (_ = E, p = x);
        p > a && (n[_] = 1, mr(t, n, a, c, _), mr(t, n, a, _, h));
      }
      function $h(t, n) {
        for (var a = [t[0]], c = 1, h = 0, p = t.length; c < p; c++)
          td(t[c], t[h]) > n && (a.push(t[c]), h = c);
        return h < p - 1 && a.push(t[p - 1]), a;
      }
      var Ps;
      function Ss(t, n, a, c, h) {
        var p = c ? Ps : hn(t, a), _ = hn(n, a), E, x, D;
        for (Ps = _; ; ) {
          if (!(p | _))
            return [t, n];
          if (p & _)
            return !1;
          E = p || _, x = Zi(t, n, E, a, h), D = hn(x, a), E === p ? (t = x, p = D) : (n = x, _ = D);
        }
      }
      function Zi(t, n, a, c, h) {
        var p = n.x - t.x, _ = n.y - t.y, E = c.min, x = c.max, D, z;
        return a & 8 ? (D = t.x + p * (x.y - t.y) / _, z = x.y) : a & 4 ? (D = t.x + p * (E.y - t.y) / _, z = E.y) : a & 2 ? (D = x.x, z = t.y + _ * (x.x - t.x) / p) : a & 1 && (D = E.x, z = t.y + _ * (E.x - t.x) / p), new H(D, z, h);
      }
      function hn(t, n) {
        var a = 0;
        return t.x < n.min.x ? a |= 1 : t.x > n.max.x && (a |= 2), t.y < n.min.y ? a |= 4 : t.y > n.max.y && (a |= 8), a;
      }
      function td(t, n) {
        var a = n.x - t.x, c = n.y - t.y;
        return a * a + c * c;
      }
      function ci(t, n, a, c) {
        var h = n.x, p = n.y, _ = a.x - h, E = a.y - p, x = _ * _ + E * E, D;
        return x > 0 && (D = ((t.x - h) * _ + (t.y - p) * E) / x, D > 1 ? (h = a.x, p = a.y) : D > 0 && (h += _ * D, p += E * D)), _ = t.x - h, E = t.y - p, c ? _ * _ + E * E : new H(h, p);
      }
      function ee(t) {
        return !F(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Os(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ee(t);
      }
      function Qs(t, n) {
        var a, c, h, p, _, E, x, D;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ee(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var z = nt([0, 0]), V = lt(t), ot = V.getNorthWest().distanceTo(V.getSouthWest()) * V.getNorthEast().distanceTo(V.getNorthWest());
        ot < 1700 && (z = pr(t));
        var Ut = t.length, St = [];
        for (a = 0; a < Ut; a++) {
          var ne = nt(t[a]);
          St.push(n.project(nt([ne.lat - z.lat, ne.lng - z.lng])));
        }
        for (a = 0, c = 0; a < Ut - 1; a++)
          c += St[a].distanceTo(St[a + 1]) / 2;
        if (c === 0)
          D = St[0];
        else
          for (a = 0, p = 0; a < Ut - 1; a++)
            if (_ = St[a], E = St[a + 1], h = _.distanceTo(E), p += h, p > c) {
              x = (p - c) / h, D = [
                E.x - x * (E.x - _.x),
                E.y - x * (E.y - _.y)
              ];
              break;
            }
        var Yt = n.unproject(S(D));
        return nt([Yt.lat + z.lat, Yt.lng + z.lng]);
      }
      var ed = {
        __proto__: null,
        simplify: Ds,
        pointToSegmentDistance: Ts,
        closestPointOnSegment: Jh,
        clipSegment: Ss,
        _getEdgeIntersection: Zi,
        _getBitCode: hn,
        _sqClosestPointOnSegment: ci,
        isFlat: ee,
        _flat: Os,
        polylineCenter: Qs
      }, gr = {
        project: function(t) {
          return new H(t.lng, t.lat);
        },
        unproject: function(t) {
          return new $(t.y, t.x);
        },
        bounds: new q([-180, -90], [180, 90])
      }, vr = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new q([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var n = Math.PI / 180, a = this.R, c = t.lat * n, h = this.R_MINOR / a, p = Math.sqrt(1 - h * h), _ = p * Math.sin(c), E = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - _) / (1 + _), p / 2);
          return c = -a * Math.log(Math.max(E, 1e-10)), new H(t.lng * n * a, c);
        },
        unproject: function(t) {
          for (var n = 180 / Math.PI, a = this.R, c = this.R_MINOR / a, h = Math.sqrt(1 - c * c), p = Math.exp(-t.y / a), _ = Math.PI / 2 - 2 * Math.atan(p), E = 0, x = 0.1, D; E < 15 && Math.abs(x) > 1e-7; E++)
            D = h * Math.sin(_), D = Math.pow((1 - D) / (1 + D), h / 2), x = Math.PI / 2 - 2 * Math.atan(p * D) - _, _ += x;
          return new $(_ * n, t.x * n / a);
        }
      }, nd = {
        __proto__: null,
        LonLat: gr,
        Mercator: vr,
        SphericalMercator: Zn
      }, id = o({}, Nt, {
        code: "EPSG:3395",
        projection: vr,
        transformation: function() {
          var t = 0.5 / (Math.PI * vr.R);
          return an(t, 0.5, -t, 0.5);
        }()
      }), Fs = o({}, Nt, {
        code: "EPSG:4326",
        projection: gr,
        transformation: an(1 / 180, 1, -1 / 180, 0.5)
      }), od = o({}, zt, {
        projection: gr,
        transformation: an(1, 0, -1, 0),
        scale: function(t) {
          return Math.pow(2, t);
        },
        zoom: function(t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function(t, n) {
          var a = n.lng - t.lng, c = n.lat - t.lat;
          return Math.sqrt(a * a + c * c);
        },
        infinite: !0
      });
      zt.Earth = Nt, zt.EPSG3395 = id, zt.EPSG3857 = En, zt.EPSG900913 = Wo, zt.EPSG4326 = Fs, zt.Simple = od;
      var se = T.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(t) {
          return t.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(t) {
          return t && t.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function(t) {
          return this._map._targets[f(t)] = this, this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[f(t)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(t) {
          var n = t.target;
          if (n.hasLayer(this)) {
            if (this._map = n, this._zoomAnimated = n._zoomAnimated, this.getEvents) {
              var a = this.getEvents();
              n.on(a, this), this.once("remove", function() {
                n.off(a, this);
              }, this);
            }
            this.onAdd(n), this.fire("add"), n.fire("layeradd", { layer: this });
          }
        }
      });
      ct.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(t) {
          if (!t._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var n = f(t);
          return this._layers[n] ? this : (this._layers[n] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(t) {
          var n = f(t);
          return this._layers[n] ? (this._loaded && t.onRemove(this), delete this._layers[n], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(t) {
          return f(t) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(t, n) {
          for (var a in this._layers)
            t.call(n, this._layers[a]);
          return this;
        },
        _addLayers: function(t) {
          t = t ? F(t) ? t : [t] : [];
          for (var n = 0, a = t.length; n < a; n++)
            this.addLayer(t[n]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var n = f(t);
          this._zoomBoundLayers[n] && (delete this._zoomBoundLayers[n], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var t = 1 / 0, n = -1 / 0, a = this._getZoomSpan();
          for (var c in this._zoomBoundLayers) {
            var h = this._zoomBoundLayers[c].options;
            t = h.minZoom === void 0 ? t : Math.min(t, h.minZoom), n = h.maxZoom === void 0 ? n : Math.max(n, h.maxZoom);
          }
          this._layersMaxZoom = n === -1 / 0 ? void 0 : n, this._layersMinZoom = t === 1 / 0 ? void 0 : t, a !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var kn = se.extend({
        initialize: function(t, n) {
          y(this, n), this._layers = {};
          var a, c;
          if (t)
            for (a = 0, c = t.length; a < c; a++)
              this.addLayer(t[a]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(t) {
          var n = this.getLayerId(t);
          return this._layers[n] = t, this._map && this._map.addLayer(t), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(t) {
          var n = t in this._layers ? t : this.getLayerId(t);
          return this._map && this._layers[n] && this._map.removeLayer(this._layers[n]), delete this._layers[n], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(t) {
          var n = typeof t == "number" ? t : this.getLayerId(t);
          return n in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(t) {
          var n = Array.prototype.slice.call(arguments, 1), a, c;
          for (a in this._layers)
            c = this._layers[a], c[t] && c[t].apply(c, n);
          return this;
        },
        onAdd: function(t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function(t) {
          this.eachLayer(t.removeLayer, t);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(t, n) {
          for (var a in this._layers)
            t.call(n, this._layers[a]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(t) {
          return this._layers[t];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(t) {
          return this.invoke("setZIndex", t);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(t) {
          return f(t);
        }
      }), rd = function(t, n) {
        return new kn(t, n);
      }, xe = kn.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), kn.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), kn.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(t) {
          return this.invoke("setStyle", t);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var t = new ft();
          for (var n in this._layers) {
            var a = this._layers[n];
            t.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return t;
        }
      }), ad = function(t, n) {
        return new xe(t, n);
      }, Dn = bt.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(t) {
          y(this, t);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(t) {
          return this._createIcon("icon", t);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function(t, n) {
          var a = this._getIconUrl(t);
          if (!a) {
            if (t === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var c = this._createImg(a, n && n.tagName === "IMG" ? n : null);
          return this._setIconStyles(c, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (c.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), c;
        },
        _setIconStyles: function(t, n) {
          var a = this.options, c = a[n + "Size"];
          typeof c == "number" && (c = [c, c]);
          var h = S(c), p = S(n === "shadow" && a.shadowAnchor || a.iconAnchor || h && h.divideBy(2, !0));
          t.className = "leaflet-marker-" + n + " " + (a.className || ""), p && (t.style.marginLeft = -p.x + "px", t.style.marginTop = -p.y + "px"), h && (t.style.width = h.x + "px", t.style.height = h.y + "px");
        },
        _createImg: function(t, n) {
          return n = n || document.createElement("img"), n.src = t, n;
        },
        _getIconUrl: function(t) {
          return W.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function sd(t) {
        return new Dn(t);
      }
      var hi = Dn.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
          return typeof hi.imagePath != "string" && (hi.imagePath = this._detectIconPath()), (this.options.imagePath || hi.imagePath) + Dn.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var n = function(a, c, h) {
            var p = c.exec(a);
            return p && p[h];
          };
          return t = n(t, /^url\((['"])?(.+)\1\)$/, 2), t && n(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = pt("div", "leaflet-default-icon-path", document.body), n = oi(t, "background-image") || oi(t, "backgroundImage");
          if (document.body.removeChild(t), n = this._stripUrl(n), n)
            return n;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        }
      }), Hs = ge.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new ze(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), it(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Mt(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var n = this._marker, a = n._map, c = this._marker.options.autoPanSpeed, h = this._marker.options.autoPanPadding, p = ln(n._icon), _ = a.getPixelBounds(), E = a.getPixelOrigin(), x = st(
            _.min._subtract(E).add(h),
            _.max._subtract(E).subtract(h)
          );
          if (!x.contains(p)) {
            var D = S(
              (Math.max(x.max.x, p.x) - x.max.x) / (_.max.x - x.max.x) - (Math.min(x.min.x, p.x) - x.min.x) / (_.min.x - x.min.x),
              (Math.max(x.max.y, p.y) - x.max.y) / (_.max.y - x.max.y) - (Math.min(x.min.y, p.y) - x.min.y) / (_.min.y - x.min.y)
            ).multiplyBy(c);
            a.panBy(D, { animate: !1 }), this._draggable._newPos._add(D), this._draggable._startPos._add(D), Dt(n._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = tt(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (X(this._panRequest), this._panRequest = tt(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var n = this._marker, a = n._shadow, c = ln(n._icon), h = n._map.layerPointToLatLng(c);
          a && Dt(a, c), n._latlng = h, t.latlng = h, t.oldLatLng = this._oldLatLng, n.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          X(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), Vi = se.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new hi(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(t, n) {
          y(this, n), this._latlng = nt(t);
        },
        onAdd: function(t) {
          this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(t) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(t) {
          var n = this._latlng;
          return this._latlng = nt(t), this.update(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(t) {
          return this.options.zIndexOffset = t, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function() {
          var t = this.options, n = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), a = t.icon.createIcon(this._icon), c = !1;
          a !== this._icon && (this._icon && this._removeIcon(), c = !0, t.title && (a.title = t.title), a.tagName === "IMG" && (a.alt = t.alt || "")), it(a, n), t.keyboard && (a.tabIndex = "0", a.setAttribute("role", "button")), this._icon = a, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && et(a, "focus", this._panOnFocus, this);
          var h = t.icon.createShadow(this._shadow), p = !1;
          h !== this._shadow && (this._removeShadow(), p = !0), h && (it(h, n), h.alt = ""), this._shadow = h, t.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), h && p && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && At(this._icon, "focus", this._panOnFocus, this), Ct(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && Ct(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && Dt(this._icon, t), this._shadow && Dt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(n);
        },
        _initInteraction: function() {
          if (this.options.interactive && (it(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Hs)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Hs(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && te(this._icon, t), this._shadow && te(this._shadow, t);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var t = this._map;
          if (t) {
            var n = this.options.icon.options, a = n.iconSize ? S(n.iconSize) : S(0, 0), c = n.iconAnchor ? S(n.iconAnchor) : S(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: c,
              paddingBottomRight: a.subtract(c)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function ld(t, n) {
        return new Vi(t, n);
      }
      var Ne = se.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(t) {
          return y(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), Ji = Ne.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, n) {
          y(this, n), this._latlng = nt(t), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(t) {
          var n = this._latlng;
          return this._latlng = nt(t), this.redraw(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(t) {
          return this.options.radius = this._radius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(t) {
          var n = t && t.radius || this._radius;
          return Ne.prototype.setStyle.call(this, t), this.setRadius(n), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, n = this._radiusY || t, a = this._clickTolerance(), c = [t + a, n + a];
          this._pxBounds = new q(this._point.subtract(c), this._point.add(c));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function ud(t, n) {
        return new Ji(t, n);
      }
      var _r = Ji.extend({
        initialize: function(t, n, a) {
          if (typeof n == "number" && (n = o({}, a, { radius: n })), y(this, n), this._latlng = nt(t), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(t) {
          return this._mRadius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var t = [this._radius, this._radiusY || this._radius];
          return new ft(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: Ne.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, n = this._latlng.lat, a = this._map, c = a.options.crs;
          if (c.distance === Nt.distance) {
            var h = Math.PI / 180, p = this._mRadius / Nt.R / h, _ = a.project([n + p, t]), E = a.project([n - p, t]), x = _.add(E).divideBy(2), D = a.unproject(x).lat, z = Math.acos((Math.cos(p * h) - Math.sin(n * h) * Math.sin(D * h)) / (Math.cos(n * h) * Math.cos(D * h))) / h;
            (isNaN(z) || z === 0) && (z = p / Math.cos(Math.PI / 180 * n)), this._point = x.subtract(a.getPixelOrigin()), this._radius = isNaN(z) ? 0 : x.x - a.project([D, t - z]).x, this._radiusY = x.y - _.y;
          } else {
            var V = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(V).x;
          }
          this._updateBounds();
        }
      });
      function cd(t, n, a) {
        return new _r(t, n, a);
      }
      var Me = Ne.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(t, n) {
          y(this, n), this._setLatLngs(t);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(t) {
          return this._setLatLngs(t), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(t) {
          for (var n = 1 / 0, a = null, c = ci, h, p, _ = 0, E = this._parts.length; _ < E; _++)
            for (var x = this._parts[_], D = 1, z = x.length; D < z; D++) {
              h = x[D - 1], p = x[D];
              var V = c(t, h, p, !0);
              V < n && (n = V, a = c(t, h, p));
            }
          return a && (a.distance = Math.sqrt(n)), a;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Qs(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(t, n) {
          return n = n || this._defaultShape(), t = nt(t), n.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function(t) {
          this._bounds = new ft(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return ee(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var n = [], a = ee(t), c = 0, h = t.length; c < h; c++)
            a ? (n[c] = nt(t[c]), this._bounds.extend(n[c])) : n[c] = this._convertLatLngs(t[c]);
          return n;
        },
        _project: function() {
          var t = new q();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), n = new H(t, t);
          this._rawPxBounds && (this._pxBounds = new q([
            this._rawPxBounds.min.subtract(n),
            this._rawPxBounds.max.add(n)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, n, a) {
          var c = t[0] instanceof $, h = t.length, p, _;
          if (c) {
            for (_ = [], p = 0; p < h; p++)
              _[p] = this._map.latLngToLayerPoint(t[p]), a.extend(_[p]);
            n.push(_);
          } else
            for (p = 0; p < h; p++)
              this._projectLatlngs(t[p], n, a);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var t = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var n = this._parts, a, c, h, p, _, E, x;
            for (a = 0, h = 0, p = this._rings.length; a < p; a++)
              for (x = this._rings[a], c = 0, _ = x.length; c < _ - 1; c++)
                E = Ss(x[c], x[c + 1], t, c, !0), E && (n[h] = n[h] || [], n[h].push(E[0]), (E[1] !== x[c + 1] || c === _ - 2) && (n[h].push(E[1]), h++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, n = this.options.smoothFactor, a = 0, c = t.length; a < c; a++)
            t[a] = Ds(t[a], n);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, n) {
          var a, c, h, p, _, E, x = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (a = 0, p = this._parts.length; a < p; a++)
            for (E = this._parts[a], c = 0, _ = E.length, h = _ - 1; c < _; h = c++)
              if (!(!n && c === 0) && Ts(t, E[h], E[c]) <= x)
                return !0;
          return !1;
        }
      });
      function hd(t, n) {
        return new Me(t, n);
      }
      Me._flat = Os;
      var Tn = Me.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return ks(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var n = Me.prototype._convertLatLngs.call(this, t), a = n.length;
          return a >= 2 && n[0] instanceof $ && n[0].equals(n[a - 1]) && n.pop(), n;
        },
        _setLatLngs: function(t) {
          Me.prototype._setLatLngs.call(this, t), ee(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ee(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, n = this.options.weight, a = new H(n, n);
          if (t = new q(t.min.subtract(a), t.max.add(a)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, h = this._rings.length, p; c < h; c++)
              p = Bs(this._rings[c], t, !0), p.length && this._parts.push(p);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var n = !1, a, c, h, p, _, E, x, D;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (p = 0, x = this._parts.length; p < x; p++)
            for (a = this._parts[p], _ = 0, D = a.length, E = D - 1; _ < D; E = _++)
              c = a[_], h = a[E], c.y > t.y != h.y > t.y && t.x < (h.x - c.x) * (t.y - c.y) / (h.y - c.y) + c.x && (n = !n);
          return n || Me.prototype._containsPoint.call(this, t, !0);
        }
      });
      function dd(t, n) {
        return new Tn(t, n);
      }
      var Ie = xe.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(t, n) {
          y(this, n), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var n = F(t) ? t : t.features, a, c, h;
          if (n) {
            for (a = 0, c = n.length; a < c; a++)
              h = n[a], (h.geometries || h.geometry || h.features || h.coordinates) && this.addData(h);
            return this;
          }
          var p = this.options;
          if (p.filter && !p.filter(t))
            return this;
          var _ = Xi(t, p);
          return _ ? (_.feature = eo(t), _.defaultOptions = _.options, this.resetStyle(_), p.onEachFeature && p.onEachFeature(t, _), this.addLayer(_)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = o({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(t) {
          return this.eachLayer(function(n) {
            this._setLayerStyle(n, t);
          }, this);
        },
        _setLayerStyle: function(t, n) {
          t.setStyle && (typeof n == "function" && (n = n(t.feature)), t.setStyle(n));
        }
      });
      function Xi(t, n) {
        var a = t.type === "Feature" ? t.geometry : t, c = a ? a.coordinates : null, h = [], p = n && n.pointToLayer, _ = n && n.coordsToLatLng || Ar, E, x, D, z;
        if (!c && !a)
          return null;
        switch (a.type) {
          case "Point":
            return E = _(c), Rs(p, t, E, n);
          case "MultiPoint":
            for (D = 0, z = c.length; D < z; D++)
              E = _(c[D]), h.push(Rs(p, t, E, n));
            return new xe(h);
          case "LineString":
          case "MultiLineString":
            return x = $i(c, a.type === "LineString" ? 0 : 1, _), new Me(x, n);
          case "Polygon":
          case "MultiPolygon":
            return x = $i(c, a.type === "Polygon" ? 1 : 2, _), new Tn(x, n);
          case "GeometryCollection":
            for (D = 0, z = a.geometries.length; D < z; D++) {
              var V = Xi({
                geometry: a.geometries[D],
                type: "Feature",
                properties: t.properties
              }, n);
              V && h.push(V);
            }
            return new xe(h);
          case "FeatureCollection":
            for (D = 0, z = a.features.length; D < z; D++) {
              var ot = Xi(a.features[D], n);
              ot && h.push(ot);
            }
            return new xe(h);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Rs(t, n, a, c) {
        return t ? t(n, a) : new Vi(a, c && c.markersInheritOptions && c);
      }
      function Ar(t) {
        return new $(t[1], t[0], t[2]);
      }
      function $i(t, n, a) {
        for (var c = [], h = 0, p = t.length, _; h < p; h++)
          _ = n ? $i(t[h], n - 1, a) : (a || Ar)(t[h]), c.push(_);
        return c;
      }
      function yr(t, n) {
        return t = nt(t), t.alt !== void 0 ? [b(t.lng, n), b(t.lat, n), b(t.alt, n)] : [b(t.lng, n), b(t.lat, n)];
      }
      function to(t, n, a, c) {
        for (var h = [], p = 0, _ = t.length; p < _; p++)
          h.push(n ? to(t[p], ee(t[p]) ? 0 : n - 1, a, c) : yr(t[p], c));
        return !n && a && h.length > 0 && h.push(h[0].slice()), h;
      }
      function Pn(t, n) {
        return t.feature ? o({}, t.feature, { geometry: n }) : eo(n);
      }
      function eo(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var wr = {
        toGeoJSON: function(t) {
          return Pn(this, {
            type: "Point",
            coordinates: yr(this.getLatLng(), t)
          });
        }
      };
      Vi.include(wr), _r.include(wr), Ji.include(wr), Me.include({
        toGeoJSON: function(t) {
          var n = !ee(this._latlngs), a = to(this._latlngs, n ? 1 : 0, !1, t);
          return Pn(this, {
            type: (n ? "Multi" : "") + "LineString",
            coordinates: a
          });
        }
      }), Tn.include({
        toGeoJSON: function(t) {
          var n = !ee(this._latlngs), a = n && !ee(this._latlngs[0]), c = to(this._latlngs, a ? 2 : n ? 1 : 0, !0, t);
          return n || (c = [c]), Pn(this, {
            type: (a ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), kn.include({
        toMultiPoint: function(t) {
          var n = [];
          return this.eachLayer(function(a) {
            n.push(a.toGeoJSON(t).geometry.coordinates);
          }), Pn(this, {
            type: "MultiPoint",
            coordinates: n
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(t) {
          var n = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (n === "MultiPoint")
            return this.toMultiPoint(t);
          var a = n === "GeometryCollection", c = [];
          return this.eachLayer(function(h) {
            if (h.toGeoJSON) {
              var p = h.toGeoJSON(t);
              if (a)
                c.push(p.geometry);
              else {
                var _ = eo(p);
                _.type === "FeatureCollection" ? c.push.apply(c, _.features) : c.push(_);
              }
            }
          }), a ? Pn(this, {
            geometries: c,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: c
          };
        }
      });
      function Gs(t, n) {
        return new Ie(t, n);
      }
      var fd = Gs, no = se.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(t, n, a) {
          this._url = t, this._bounds = lt(n), y(this, a);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (it(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          Ct(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(t) {
          return this.options.opacity = t, this._image && this._updateOpacity(), this;
        },
        setStyle: function(t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && In(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Bn(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = lt(t), this._map && this._reset(), this;
        },
        getEvents: function() {
          var t = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var t = this._url.tagName === "IMG", n = this._image = t ? this._url : pt("img");
          if (it(n, "leaflet-image-layer"), this._zoomAnimated && it(n, "leaflet-zoom-animated"), this.options.className && it(n, this.options.className), n.onselectstart = v, n.onmousemove = v, n.onload = u(this.fire, this, "load"), n.onerror = u(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = n.src;
            return;
          }
          n.src = this._url, n.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var n = this._map.getZoomScale(t.zoom), a = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          sn(this._image, a, n);
        },
        _reset: function() {
          var t = this._image, n = new q(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), a = n.getSize();
          Dt(t, n.min), t.style.width = a.x + "px", t.style.height = a.y + "px";
        },
        _updateOpacity: function() {
          te(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && (this._url = t, this._image.src = t);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), pd = function(t, n, a) {
        return new no(t, n, a);
      }, zs = no.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var t = this._url.tagName === "VIDEO", n = this._image = t ? this._url : pt("video");
          if (it(n, "leaflet-image-layer"), this._zoomAnimated && it(n, "leaflet-zoom-animated"), this.options.className && it(n, this.options.className), n.onselectstart = v, n.onmousemove = v, n.onloadeddata = u(this.fire, this, "load"), t) {
            for (var a = n.getElementsByTagName("source"), c = [], h = 0; h < a.length; h++)
              c.push(a[h].src);
            this._url = a.length > 0 ? c : [n.src];
            return;
          }
          F(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(n.style, "objectFit") && (n.style.objectFit = "fill"), n.autoplay = !!this.options.autoplay, n.loop = !!this.options.loop, n.muted = !!this.options.muted, n.playsInline = !!this.options.playsInline;
          for (var p = 0; p < this._url.length; p++) {
            var _ = pt("source");
            _.src = this._url[p], n.appendChild(_);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function md(t, n, a) {
        return new zs(t, n, a);
      }
      var Ns = no.extend({
        _initImage: function() {
          var t = this._image = this._url;
          it(t, "leaflet-image-layer"), this._zoomAnimated && it(t, "leaflet-zoom-animated"), this.options.className && it(t, this.options.className), t.onselectstart = v, t.onmousemove = v;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function gd(t, n, a) {
        return new Ns(t, n, a);
      }
      var ve = se.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(t, n) {
          t && (t instanceof $ || F(t)) ? (this._latlng = nt(t), y(this, n)) : (y(this, t), this._source = n), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(t) {
          return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
        },
        onAdd: function(t) {
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && te(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && te(this._container, 1), this.bringToFront(), this.options.interactive && (it(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (te(this._container, 0), this._removeTimeout = setTimeout(u(Ct, void 0, this._container), 200)) : Ct(this._container), this.options.interactive && (Mt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(t) {
          return this._latlng = nt(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(t) {
          return this._content = t, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var t = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && In(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Bn(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var n = this._source;
          if (!n._map)
            return !1;
          if (n instanceof xe) {
            n = null;
            var a = this._source._layers;
            for (var c in a)
              if (a[c]._map) {
                n = a[c];
                break;
              }
            if (!n)
              return !1;
            this._source = n;
          }
          if (!t)
            if (n.getCenter)
              t = n.getCenter();
            else if (n.getLatLng)
              t = n.getLatLng();
            else if (n.getBounds)
              t = n.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(t), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var t = this._contentNode, n = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof n == "string")
              t.innerHTML = n;
            else {
              for (; t.hasChildNodes(); )
                t.removeChild(t.firstChild);
              t.appendChild(n);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng), n = S(this.options.offset), a = this._getAnchor();
            this._zoomAnimated ? Dt(this._container, t.add(a)) : n = n.add(t).add(a);
            var c = this._containerBottom = -n.y, h = this._containerLeft = -Math.round(this._containerWidth / 2) + n.x;
            this._container.style.bottom = c + "px", this._container.style.left = h + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      ct.include({
        _initOverlay: function(t, n, a, c) {
          var h = n;
          return h instanceof t || (h = new t(c).setContent(n)), a && h.setLatLng(a), h;
        }
      }), se.include({
        _initOverlay: function(t, n, a, c) {
          var h = a;
          return h instanceof t ? (y(h, c), h._source = this) : (h = n && !c ? n : new t(c, this), h.setContent(a)), h;
        }
      });
      var io = ve.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ve.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          ve.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ne || this._source.on("preclick", un));
        },
        onRemove: function(t) {
          ve.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ne || this._source.off("preclick", un));
        },
        getEvents: function() {
          var t = ve.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", n = this._container = pt(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), a = this._wrapper = pt("div", t + "-content-wrapper", n);
          if (this._contentNode = pt("div", t + "-content", a), li(n), cr(this._contentNode), et(n, "contextmenu", un), this._tipContainer = pt("div", t + "-tip-container", n), this._tip = pt("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = pt("a", t + "-close-button", n);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', et(c, "click", function(h) {
              Ft(h), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, n = t.style;
          n.width = "", n.whiteSpace = "nowrap";
          var a = t.offsetWidth;
          a = Math.min(a, this.options.maxWidth), a = Math.max(a, this.options.minWidth), n.width = a + 1 + "px", n.whiteSpace = "", n.height = "";
          var c = t.offsetHeight, h = this.options.maxHeight, p = "leaflet-popup-scrolled";
          h && c > h ? (n.height = h + "px", it(t, p)) : Mt(t, p), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), a = this._getAnchor();
          Dt(this._container, n.add(a));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, n = parseInt(oi(this._container, "marginBottom"), 10) || 0, a = this._container.offsetHeight + n, c = this._containerWidth, h = new H(this._containerLeft, -a - this._containerBottom);
            h._add(ln(this._container));
            var p = t.layerPointToContainerPoint(h), _ = S(this.options.autoPanPadding), E = S(this.options.autoPanPaddingTopLeft || _), x = S(this.options.autoPanPaddingBottomRight || _), D = t.getSize(), z = 0, V = 0;
            p.x + c + x.x > D.x && (z = p.x + c - D.x + x.x), p.x - z - E.x < 0 && (z = p.x - E.x), p.y + a + x.y > D.y && (V = p.y + a - D.y + x.y), p.y - V - E.y < 0 && (V = p.y - E.y), (z || V) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([z, V]));
          }
        },
        _getAnchor: function() {
          return S(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), vd = function(t, n) {
        return new io(t, n);
      };
      ct.mergeOptions({
        closePopupOnClick: !0
      }), ct.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(t, n, a) {
          return this._initOverlay(io, t, n, a).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(t) {
          return t = arguments.length ? t : this._popup, t && t.close(), this;
        }
      }), se.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(t, n) {
          return this._popup = this._initOverlay(io, this._popup, t, n), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(t) {
          return this._popup && (this instanceof xe || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(t) {
          return this._popup && this._popup.setContent(t), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(t) {
          if (!(!this._popup || !this._map)) {
            cn(t);
            var n = t.layer || t.target;
            if (this._popup._source === n && !(n instanceof Ne)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
              return;
            }
            this._popup._source = n, this.openPopup(t.latlng);
          }
        },
        _movePopup: function(t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function(t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        }
      });
      var oo = ve.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(t) {
          ve.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          ve.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = ve.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", n = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = pt("div", n), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var n, a, c = this._map, h = this._container, p = c.latLngToContainerPoint(c.getCenter()), _ = c.layerPointToContainerPoint(t), E = this.options.direction, x = h.offsetWidth, D = h.offsetHeight, z = S(this.options.offset), V = this._getAnchor();
          E === "top" ? (n = x / 2, a = D) : E === "bottom" ? (n = x / 2, a = 0) : E === "center" ? (n = x / 2, a = D / 2) : E === "right" ? (n = 0, a = D / 2) : E === "left" ? (n = x, a = D / 2) : _.x < p.x ? (E = "right", n = 0, a = D / 2) : (E = "left", n = x + (z.x + V.x) * 2, a = D / 2), t = t.subtract(S(n, a, !0)).add(z).add(V), Mt(h, "leaflet-tooltip-right"), Mt(h, "leaflet-tooltip-left"), Mt(h, "leaflet-tooltip-top"), Mt(h, "leaflet-tooltip-bottom"), it(h, "leaflet-tooltip-" + E), Dt(h, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && te(this._container, t);
        },
        _animateZoom: function(t) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(n);
        },
        _getAnchor: function() {
          return S(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), _d = function(t, n) {
        return new oo(t, n);
      };
      ct.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, n, a) {
          return this._initOverlay(oo, t, n, a).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(t) {
          return t.close(), this;
        }
      }), se.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(t, n) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(oo, this._tooltip, t, n), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var n = t ? "off" : "on", a = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? a.add = this._openTooltip : (a.mouseover = this._openTooltip, a.mouseout = this.closeTooltip, a.click = this._openTooltip, this._map ? this._addFocusListeners() : a.add = this._addFocusListeners), this._tooltip.options.sticky && (a.mousemove = this._moveTooltip), this[n](a), this._tooltipHandlersAdded = !t;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(t) {
          return this._tooltip && (this instanceof xe || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(t) {
          var n = typeof t.getElement == "function" && t.getElement();
          n && (et(n, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), et(n, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(t) {
          var n = typeof t.getElement == "function" && t.getElement();
          n && n.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(t) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var n = this;
              this._map.once("moveend", function() {
                n._openOnceFlag = !1, n._openTooltip(t);
              });
              return;
            }
            this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
          }
        },
        _moveTooltip: function(t) {
          var n = t.latlng, a, c;
          this._tooltip.options.sticky && t.originalEvent && (a = this._map.mouseEventToContainerPoint(t.originalEvent), c = this._map.containerPointToLayerPoint(a), n = this._map.layerPointToLatLng(c)), this._tooltip.setLatLng(n);
        }
      });
      var Us = Dn.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(t) {
          var n = t && t.tagName === "DIV" ? t : document.createElement("div"), a = this.options;
          if (a.html instanceof Element ? (Ki(n), n.appendChild(a.html)) : n.innerHTML = a.html !== !1 ? a.html : "", a.bgPos) {
            var c = S(a.bgPos);
            n.style.backgroundPosition = -c.x + "px " + -c.y + "px";
          }
          return this._setIconStyles(n, "icon"), n;
        },
        createShadow: function() {
          return null;
        }
      });
      function Ad(t) {
        return new Us(t);
      }
      Dn.Default = hi;
      var di = se.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: W.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(t) {
          y(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), Ct(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (In(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Bn(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var t = this._clampZoom(this._map.getZoom());
            t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var t = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = m(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var t = this.options.tileSize;
          return t instanceof H ? t : new H(t, t);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(t) {
          for (var n = this.getPane().children, a = -t(-1 / 0, 1 / 0), c = 0, h = n.length, p; c < h; c++)
            p = n[c].style.zIndex, n[c] !== this._container && p && (a = t(a, +p));
          isFinite(a) && (this.options.zIndex = a + t(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !W.ielt9) {
            te(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), n = !1, a = !1;
            for (var c in this._tiles) {
              var h = this._tiles[c];
              if (!(!h.current || !h.loaded)) {
                var p = Math.min(1, (t - h.loaded) / 200);
                te(h.el, p), p < 1 ? n = !0 : (h.active ? a = !0 : this._onOpaqueTile(h), h.active = !0);
              }
            }
            a && !this._noPrune && this._pruneTiles(), n && (X(this._fadeFrame), this._fadeFrame = tt(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: v,
        _initContainer: function() {
          this._container || (this._container = pt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, n = this.options.maxZoom;
          if (t !== void 0) {
            for (var a in this._levels)
              a = Number(a), this._levels[a].el.children.length || a === t ? (this._levels[a].el.style.zIndex = n - Math.abs(t - a), this._onUpdateLevel(a)) : (Ct(this._levels[a].el), this._removeTilesAtZoom(a), this._onRemoveLevel(a), delete this._levels[a]);
            var c = this._levels[t], h = this._map;
            return c || (c = this._levels[t] = {}, c.el = pt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = n, c.origin = h.project(h.unproject(h.getPixelOrigin()), t).round(), c.zoom = t, this._setZoomTransform(c, h.getCenter(), h.getZoom()), v(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
          }
        },
        _onUpdateLevel: v,
        _onRemoveLevel: v,
        _onCreateLevel: v,
        _pruneTiles: function() {
          if (this._map) {
            var t, n, a = this._map.getZoom();
            if (a > this.options.maxZoom || a < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (t in this._tiles)
              n = this._tiles[t], n.retain = n.current;
            for (t in this._tiles)
              if (n = this._tiles[t], n.current && !n.active) {
                var c = n.coords;
                this._retainParent(c.x, c.y, c.z, c.z - 5) || this._retainChildren(c.x, c.y, c.z, c.z + 2);
              }
            for (t in this._tiles)
              this._tiles[t].retain || this._removeTile(t);
          }
        },
        _removeTilesAtZoom: function(t) {
          for (var n in this._tiles)
            this._tiles[n].coords.z === t && this._removeTile(n);
        },
        _removeAllTiles: function() {
          for (var t in this._tiles)
            this._removeTile(t);
        },
        _invalidateAll: function() {
          for (var t in this._levels)
            Ct(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, n, a, c) {
          var h = Math.floor(t / 2), p = Math.floor(n / 2), _ = a - 1, E = new H(+h, +p);
          E.z = +_;
          var x = this._tileCoordsToKey(E), D = this._tiles[x];
          return D && D.active ? (D.retain = !0, !0) : (D && D.loaded && (D.retain = !0), _ > c ? this._retainParent(h, p, _, c) : !1);
        },
        _retainChildren: function(t, n, a, c) {
          for (var h = 2 * t; h < 2 * t + 2; h++)
            for (var p = 2 * n; p < 2 * n + 2; p++) {
              var _ = new H(h, p);
              _.z = a + 1;
              var E = this._tileCoordsToKey(_), x = this._tiles[E];
              if (x && x.active) {
                x.retain = !0;
                continue;
              } else x && x.loaded && (x.retain = !0);
              a + 1 < c && this._retainChildren(h, p, a + 1, c);
            }
        },
        _resetView: function(t) {
          var n = t && (t.pinch || t.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), n, n);
        },
        _animateZoom: function(t) {
          this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom: function(t) {
          var n = this.options;
          return n.minNativeZoom !== void 0 && t < n.minNativeZoom ? n.minNativeZoom : n.maxNativeZoom !== void 0 && n.maxNativeZoom < t ? n.maxNativeZoom : t;
        },
        _setView: function(t, n, a, c) {
          var h = Math.round(n);
          this.options.maxZoom !== void 0 && h > this.options.maxZoom || this.options.minZoom !== void 0 && h < this.options.minZoom ? h = void 0 : h = this._clampZoom(h);
          var p = this.options.updateWhenZooming && h !== this._tileZoom;
          (!c || p) && (this._tileZoom = h, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), h !== void 0 && this._update(t), a || this._pruneTiles(), this._noPrune = !!a), this._setZoomTransforms(t, n);
        },
        _setZoomTransforms: function(t, n) {
          for (var a in this._levels)
            this._setZoomTransform(this._levels[a], t, n);
        },
        _setZoomTransform: function(t, n, a) {
          var c = this._map.getZoomScale(a, t.zoom), h = t.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(n, a)).round();
          W.any3d ? sn(t.el, h, c) : Dt(t.el, h);
        },
        _resetGrid: function() {
          var t = this._map, n = t.options.crs, a = this._tileSize = this.getTileSize(), c = this._tileZoom, h = this._map.getPixelWorldBounds(this._tileZoom);
          h && (this._globalTileRange = this._pxBoundsToTileRange(h)), this._wrapX = n.wrapLng && !this.options.noWrap && [
            Math.floor(t.project([0, n.wrapLng[0]], c).x / a.x),
            Math.ceil(t.project([0, n.wrapLng[1]], c).x / a.y)
          ], this._wrapY = n.wrapLat && !this.options.noWrap && [
            Math.floor(t.project([n.wrapLat[0], 0], c).y / a.x),
            Math.ceil(t.project([n.wrapLat[1], 0], c).y / a.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(t) {
          var n = this._map, a = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(), c = n.getZoomScale(a, this._tileZoom), h = n.project(t, this._tileZoom).floor(), p = n.getSize().divideBy(c * 2);
          return new q(h.subtract(p), h.add(p));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var n = this._map;
          if (n) {
            var a = this._clampZoom(n.getZoom());
            if (t === void 0 && (t = n.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(t), h = this._pxBoundsToTileRange(c), p = h.getCenter(), _ = [], E = this.options.keepBuffer, x = new q(
                h.getBottomLeft().subtract([E, -E]),
                h.getTopRight().add([E, -E])
              );
              if (!(isFinite(h.min.x) && isFinite(h.min.y) && isFinite(h.max.x) && isFinite(h.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var D in this._tiles) {
                var z = this._tiles[D].coords;
                (z.z !== this._tileZoom || !x.contains(new H(z.x, z.y))) && (this._tiles[D].current = !1);
              }
              if (Math.abs(a - this._tileZoom) > 1) {
                this._setView(t, a);
                return;
              }
              for (var V = h.min.y; V <= h.max.y; V++)
                for (var ot = h.min.x; ot <= h.max.x; ot++) {
                  var Ut = new H(ot, V);
                  if (Ut.z = this._tileZoom, !!this._isValidTile(Ut)) {
                    var St = this._tiles[this._tileCoordsToKey(Ut)];
                    St ? St.current = !0 : _.push(Ut);
                  }
                }
              if (_.sort(function(Yt, On) {
                return Yt.distanceTo(p) - On.distanceTo(p);
              }), _.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var ne = document.createDocumentFragment();
                for (ot = 0; ot < _.length; ot++)
                  this._addTile(_[ot], ne);
                this._level.el.appendChild(ne);
              }
            }
          }
        },
        _isValidTile: function(t) {
          var n = this._map.options.crs;
          if (!n.infinite) {
            var a = this._globalTileRange;
            if (!n.wrapLng && (t.x < a.min.x || t.x > a.max.x) || !n.wrapLat && (t.y < a.min.y || t.y > a.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var c = this._tileCoordsToBounds(t);
          return lt(this.options.bounds).overlaps(c);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var n = this._map, a = this.getTileSize(), c = t.scaleBy(a), h = c.add(a), p = n.unproject(c, t.z), _ = n.unproject(h, t.z);
          return [p, _];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var n = this._tileCoordsToNwSe(t), a = new ft(n[0], n[1]);
          return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var n = t.split(":"), a = new H(+n[0], +n[1]);
          return a.z = +n[2], a;
        },
        _removeTile: function(t) {
          var n = this._tiles[t];
          n && (Ct(n.el), delete this._tiles[t], this.fire("tileunload", {
            tile: n.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          it(t, "leaflet-tile");
          var n = this.getTileSize();
          t.style.width = n.x + "px", t.style.height = n.y + "px", t.onselectstart = v, t.onmousemove = v, W.ielt9 && this.options.opacity < 1 && te(t, this.options.opacity);
        },
        _addTile: function(t, n) {
          var a = this._getTilePos(t), c = this._tileCoordsToKey(t), h = this.createTile(this._wrapCoords(t), u(this._tileReady, this, t));
          this._initTile(h), this.createTile.length < 2 && tt(u(this._tileReady, this, t, null, h)), Dt(h, a), this._tiles[c] = {
            el: h,
            coords: t,
            current: !0
          }, n.appendChild(h), this.fire("tileloadstart", {
            tile: h,
            coords: t
          });
        },
        _tileReady: function(t, n, a) {
          n && this.fire("tileerror", {
            error: n,
            tile: a,
            coords: t
          });
          var c = this._tileCoordsToKey(t);
          a = this._tiles[c], a && (a.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (te(a.el, 0), X(this._fadeFrame), this._fadeFrame = tt(this._updateOpacity, this)) : (a.active = !0, this._pruneTiles()), n || (it(a.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: a.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), W.ielt9 || !this._map._fadeAnimated ? tt(this._pruneTiles, this) : setTimeout(u(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var n = new H(
            this._wrapX ? g(t.x, this._wrapX) : t.x,
            this._wrapY ? g(t.y, this._wrapY) : t.y
          );
          return n.z = t.z, n;
        },
        _pxBoundsToTileRange: function(t) {
          var n = this.getTileSize();
          return new q(
            t.min.unscaleBy(n).floor(),
            t.max.unscaleBy(n).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var t in this._tiles)
            if (!this._tiles[t].loaded)
              return !1;
          return !0;
        }
      });
      function yd(t) {
        return new di(t);
      }
      var Sn = di.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(t, n) {
          this._url = t, n = y(this, n), n.detectRetina && W.retina && n.maxZoom > 0 ? (n.tileSize = Math.floor(n.tileSize / 2), n.zoomReverse ? (n.zoomOffset--, n.minZoom = Math.min(n.maxZoom, n.minZoom + 1)) : (n.zoomOffset++, n.maxZoom = Math.max(n.minZoom, n.maxZoom - 1)), n.minZoom = Math.max(0, n.minZoom)) : n.zoomReverse ? n.minZoom = Math.min(n.maxZoom, n.minZoom) : n.maxZoom = Math.max(n.minZoom, n.maxZoom), typeof n.subdomains == "string" && (n.subdomains = n.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(t, n) {
          return this._url === t && n === void 0 && (n = !0), this._url = t, n || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(t, n) {
          var a = document.createElement("img");
          return et(a, "load", u(this._tileOnLoad, this, n, a)), et(a, "error", u(this._tileOnError, this, n, a)), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (a.referrerPolicy = this.options.referrerPolicy), a.alt = "", a.src = this.getTileUrl(t), a;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var n = {
            r: W.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var a = this._globalTileRange.max.y - t.y;
            this.options.tms && (n.y = a), n["-y"] = a;
          }
          return I(this._url, o(n, this.options));
        },
        _tileOnLoad: function(t, n) {
          W.ielt9 ? setTimeout(u(t, this, null, n), 0) : t(null, n);
        },
        _tileOnError: function(t, n, a) {
          var c = this.options.errorTileUrl;
          c && n.getAttribute("src") !== c && (n.src = c), t(a, n);
        },
        _onTileRemove: function(t) {
          t.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var t = this._tileZoom, n = this.options.maxZoom, a = this.options.zoomReverse, c = this.options.zoomOffset;
          return a && (t = n - t), t + c;
        },
        _getSubdomain: function(t) {
          var n = Math.abs(t.x + t.y) % this.options.subdomains.length;
          return this.options.subdomains[n];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var t, n;
          for (t in this._tiles)
            if (this._tiles[t].coords.z !== this._tileZoom && (n = this._tiles[t].el, n.onload = v, n.onerror = v, !n.complete)) {
              n.src = k;
              var a = this._tiles[t].coords;
              Ct(n), delete this._tiles[t], this.fire("tileabort", {
                tile: n,
                coords: a
              });
            }
        },
        _removeTile: function(t) {
          var n = this._tiles[t];
          if (n)
            return n.el.setAttribute("src", k), di.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, n, a) {
          if (!(!this._map || a && a.getAttribute("src") === k))
            return di.prototype._tileReady.call(this, t, n, a);
        }
      });
      function Ks(t, n) {
        return new Sn(t, n);
      }
      var Ys = Sn.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(t, n) {
          this._url = t;
          var a = o({}, this.defaultWmsParams);
          for (var c in n)
            c in this.options || (a[c] = n[c]);
          n = y(this, n);
          var h = n.detectRetina && W.retina ? 2 : 1, p = this.getTileSize();
          a.width = p.x * h, a.height = p.y * h, this.wmsParams = a;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var n = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[n] = this._crs.code, Sn.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var n = this._tileCoordsToNwSe(t), a = this._crs, c = st(a.project(n[0]), a.project(n[1])), h = c.min, p = c.max, _ = (this._wmsVersion >= 1.3 && this._crs === Fs ? [h.y, h.x, p.y, p.x] : [h.x, h.y, p.x, p.y]).join(","), E = Sn.prototype.getTileUrl.call(this, t);
          return E + B(this.wmsParams, E, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + _;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, n) {
          return o(this.wmsParams, t), n || this.redraw(), this;
        }
      });
      function wd(t, n) {
        return new Ys(t, n);
      }
      Sn.WMS = Ys, Ks.wms = wd;
      var Be = se.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          y(this, t), f(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), it(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function(t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(t, n) {
          var a = this._map.getZoomScale(n, this._zoom), c = this._map.getSize().multiplyBy(0.5 + this.options.padding), h = this._map.project(this._center, n), p = c.multiplyBy(-a).add(h).subtract(this._map._getNewPixelOrigin(t, n));
          W.any3d ? sn(this._container, p, a) : Dt(this._container, p);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers)
            this._layers[t]._reset();
        },
        _onZoomEnd: function() {
          for (var t in this._layers)
            this._layers[t]._project();
        },
        _updatePaths: function() {
          for (var t in this._layers)
            this._layers[t]._update();
        },
        _update: function() {
          var t = this.options.padding, n = this._map.getSize(), a = this._map.containerPointToLayerPoint(n.multiplyBy(-t)).round();
          this._bounds = new q(a, a.add(n.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), js = Be.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = Be.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Be.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          et(t, "mousemove", this._onMouseMove, this), et(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), et(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          X(this._redrawRequest), delete this._ctx, Ct(this._container), At(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var n in this._layers)
              t = this._layers[n], t._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Be.prototype._update.call(this);
            var t = this._bounds, n = this._container, a = t.getSize(), c = W.retina ? 2 : 1;
            Dt(n, t.min), n.width = c * a.x, n.height = c * a.y, n.style.width = a.x + "px", n.style.height = a.y + "px", W.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Be.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(t) {
          this._updateDashArray(t), this._layers[f(t)] = t;
          var n = t._order = {
            layer: t,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = n), this._drawLast = n, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(t) {
          this._requestRedraw(t);
        },
        _removePath: function(t) {
          var n = t._order, a = n.next, c = n.prev;
          a ? a.prev = c : this._drawLast = c, c ? c.next = a : this._drawFirst = a, delete t._order, delete this._layers[f(t)], this._requestRedraw(t);
        },
        _updatePath: function(t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function(t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function(t) {
          if (typeof t.options.dashArray == "string") {
            var n = t.options.dashArray.split(/[, ]+/), a = [], c, h;
            for (h = 0; h < n.length; h++) {
              if (c = Number(n[h]), isNaN(c))
                return;
              a.push(c);
            }
            t.options._dashArray = a;
          } else
            t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function(t) {
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || tt(this._redraw, this));
        },
        _extendRedrawBounds: function(t) {
          if (t._pxBounds) {
            var n = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new q(), this._redrawBounds.extend(t._pxBounds.min.subtract([n, n])), this._redrawBounds.extend(t._pxBounds.max.add([n, n]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var t = this._redrawBounds;
          if (t) {
            var n = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, n.x, n.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var t, n = this._redrawBounds;
          if (this._ctx.save(), n) {
            var a = n.getSize();
            this._ctx.beginPath(), this._ctx.rect(n.min.x, n.min.y, a.x, a.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var c = this._drawFirst; c; c = c.next)
            t = c.layer, (!n || t._pxBounds && t._pxBounds.intersects(n)) && t._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(t, n) {
          if (this._drawing) {
            var a, c, h, p, _ = t._parts, E = _.length, x = this._ctx;
            if (E) {
              for (x.beginPath(), a = 0; a < E; a++) {
                for (c = 0, h = _[a].length; c < h; c++)
                  p = _[a][c], x[c ? "lineTo" : "moveTo"](p.x, p.y);
                n && x.closePath();
              }
              this._fillStroke(x, t);
            }
          }
        },
        _updateCircle: function(t) {
          if (!(!this._drawing || t._empty())) {
            var n = t._point, a = this._ctx, c = Math.max(Math.round(t._radius), 1), h = (Math.max(Math.round(t._radiusY), 1) || c) / c;
            h !== 1 && (a.save(), a.scale(1, h)), a.beginPath(), a.arc(n.x, n.y / h, c, 0, Math.PI * 2, !1), h !== 1 && a.restore(), this._fillStroke(a, t);
          }
        },
        _fillStroke: function(t, n) {
          var a = n.options;
          a.fill && (t.globalAlpha = a.fillOpacity, t.fillStyle = a.fillColor || a.color, t.fill(a.fillRule || "evenodd")), a.stroke && a.weight !== 0 && (t.setLineDash && t.setLineDash(n.options && n.options._dashArray || []), t.globalAlpha = a.opacity, t.lineWidth = a.weight, t.strokeStyle = a.color, t.lineCap = a.lineCap, t.lineJoin = a.lineJoin, t.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(t) {
          for (var n = this._map.mouseEventToLayerPoint(t), a, c, h = this._drawFirst; h; h = h.next)
            a = h.layer, a.options.interactive && a._containsPoint(n) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(a)) && (c = a);
          this._fireEvent(c ? [c] : !1, t);
        },
        _onMouseMove: function(t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var n = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, n);
          }
        },
        _handleMouseOut: function(t) {
          var n = this._hoveredLayer;
          n && (Mt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, n) {
          if (!this._mouseHoverThrottled) {
            for (var a, c, h = this._drawFirst; h; h = h.next)
              a = h.layer, a.options.interactive && a._containsPoint(n) && (c = a);
            c !== this._hoveredLayer && (this._handleMouseOut(t), c && (it(this._container, "leaflet-interactive"), this._fireEvent([c], t, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(u(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(t, n, a) {
          this._map._fireDOMEvent(n, a || n.type, t);
        },
        _bringToFront: function(t) {
          var n = t._order;
          if (n) {
            var a = n.next, c = n.prev;
            if (a)
              a.prev = c;
            else
              return;
            c ? c.next = a : a && (this._drawFirst = a), n.prev = this._drawLast, this._drawLast.next = n, n.next = null, this._drawLast = n, this._requestRedraw(t);
          }
        },
        _bringToBack: function(t) {
          var n = t._order;
          if (n) {
            var a = n.next, c = n.prev;
            if (c)
              c.next = a;
            else
              return;
            a ? a.prev = c : c && (this._drawLast = c), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t);
          }
        }
      });
      function Ws(t) {
        return W.canvas ? new js(t) : null;
      }
      var fi = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), bd = {
        _initContainer: function() {
          this._container = pt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Be.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var n = t._container = fi("shape");
          it(n, "leaflet-vml-shape " + (this.options.className || "")), n.coordsize = "1 1", t._path = fi("path"), n.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
        },
        _addPath: function(t) {
          var n = t._container;
          this._container.appendChild(n), t.options.interactive && t.addInteractiveTarget(n);
        },
        _removePath: function(t) {
          var n = t._container;
          Ct(n), t.removeInteractiveTarget(n), delete this._layers[f(t)];
        },
        _updateStyle: function(t) {
          var n = t._stroke, a = t._fill, c = t.options, h = t._container;
          h.stroked = !!c.stroke, h.filled = !!c.fill, c.stroke ? (n || (n = t._stroke = fi("stroke")), h.appendChild(n), n.weight = c.weight + "px", n.color = c.color, n.opacity = c.opacity, c.dashArray ? n.dashStyle = F(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : n.dashStyle = "", n.endcap = c.lineCap.replace("butt", "flat"), n.joinstyle = c.lineJoin) : n && (h.removeChild(n), t._stroke = null), c.fill ? (a || (a = t._fill = fi("fill")), h.appendChild(a), a.color = c.fillColor || c.color, a.opacity = c.fillOpacity) : a && (h.removeChild(a), t._fill = null);
        },
        _updateCircle: function(t) {
          var n = t._point.round(), a = Math.round(t._radius), c = Math.round(t._radiusY || a);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + n.x + "," + n.y + " " + a + "," + c + " 0," + 65535 * 360);
        },
        _setPath: function(t, n) {
          t._path.v = n;
        },
        _bringToFront: function(t) {
          In(t._container);
        },
        _bringToBack: function(t) {
          Bn(t._container);
        }
      }, ro = W.vml ? fi : zi, pi = Be.extend({
        _initContainer: function() {
          this._container = ro("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ro("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          Ct(this._container), At(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Be.prototype._update.call(this);
            var t = this._bounds, n = t.getSize(), a = this._container;
            (!this._svgSize || !this._svgSize.equals(n)) && (this._svgSize = n, a.setAttribute("width", n.x), a.setAttribute("height", n.y)), Dt(a, t.min), a.setAttribute("viewBox", [t.min.x, t.min.y, n.x, n.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var n = t._path = ro("path");
          t.options.className && it(n, t.options.className), t.options.interactive && it(n, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          Ct(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var n = t._path, a = t.options;
          n && (a.stroke ? (n.setAttribute("stroke", a.color), n.setAttribute("stroke-opacity", a.opacity), n.setAttribute("stroke-width", a.weight), n.setAttribute("stroke-linecap", a.lineCap), n.setAttribute("stroke-linejoin", a.lineJoin), a.dashArray ? n.setAttribute("stroke-dasharray", a.dashArray) : n.removeAttribute("stroke-dasharray"), a.dashOffset ? n.setAttribute("stroke-dashoffset", a.dashOffset) : n.removeAttribute("stroke-dashoffset")) : n.setAttribute("stroke", "none"), a.fill ? (n.setAttribute("fill", a.fillColor || a.color), n.setAttribute("fill-opacity", a.fillOpacity), n.setAttribute("fill-rule", a.fillRule || "evenodd")) : n.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, n) {
          this._setPath(t, Vn(t._parts, n));
        },
        _updateCircle: function(t) {
          var n = t._point, a = Math.max(Math.round(t._radius), 1), c = Math.max(Math.round(t._radiusY), 1) || a, h = "a" + a + "," + c + " 0 1,0 ", p = t._empty() ? "M0 0" : "M" + (n.x - a) + "," + n.y + h + a * 2 + ",0 " + h + -a * 2 + ",0 ";
          this._setPath(t, p);
        },
        _setPath: function(t, n) {
          t._path.setAttribute("d", n);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(t) {
          In(t._path);
        },
        _bringToBack: function(t) {
          Bn(t._path);
        }
      });
      W.vml && pi.include(bd);
      function qs(t) {
        return W.svg || W.vml ? new pi(t) : null;
      }
      ct.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(t) {
          var n = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
          return n || (n = this._renderer = this._createRenderer()), this.hasLayer(n) || this.addLayer(n), n;
        },
        _getPaneRenderer: function(t) {
          if (t === "overlayPane" || t === void 0)
            return !1;
          var n = this._paneRenderers[t];
          return n === void 0 && (n = this._createRenderer({ pane: t }), this._paneRenderers[t] = n), n;
        },
        _createRenderer: function(t) {
          return this.options.preferCanvas && Ws(t) || qs(t);
        }
      });
      var Zs = Tn.extend({
        initialize: function(t, n) {
          Tn.prototype.initialize.call(this, this._boundsToLatLngs(t), n);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = lt(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function Ed(t, n) {
        return new Zs(t, n);
      }
      pi.create = ro, pi.pointsToPath = Vn, Ie.geometryToLayer = Xi, Ie.coordsToLatLng = Ar, Ie.coordsToLatLngs = $i, Ie.latLngToCoords = yr, Ie.latLngsToCoords = to, Ie.getFeature = Pn, Ie.asFeature = eo, ct.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Vs = ge.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          et(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          At(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          Ct(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(t) {
          if (!t.shiftKey || t.which !== 1 && t.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), ri(), nr(), this._startPoint = this._map.mouseEventToContainerPoint(t), et(document, {
            contextmenu: cn,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = pt("div", "leaflet-zoom-box", this._container), it(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var n = new q(this._point, this._startPoint), a = n.getSize();
          Dt(this._box, n.min), this._box.style.width = a.x + "px", this._box.style.height = a.y + "px";
        },
        _finish: function() {
          this._moved && (Ct(this._box), Mt(this._container, "leaflet-crosshair")), ai(), ir(), At(document, {
            contextmenu: cn,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(u(this._resetState, this), 0);
            var n = new ft(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(n).fire("boxzoomend", { boxZoomBounds: n });
          }
        },
        _onKeyDown: function(t) {
          t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      ct.addInitHook("addHandler", "boxZoom", Vs), ct.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var Js = ge.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(t) {
          var n = this._map, a = n.getZoom(), c = n.options.zoomDelta, h = t.originalEvent.shiftKey ? a - c : a + c;
          n.options.doubleClickZoom === "center" ? n.setZoom(h) : n.setZoomAround(t.containerPoint, h);
        }
      });
      ct.addInitHook("addHandler", "doubleClickZoom", Js), ct.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var Xs = ge.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new ze(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          it(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Mt(this._map._container, "leaflet-grab"), Mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var t = this._map;
          if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var n = lt(this._map.options.maxBounds);
            this._offsetLimit = st(
              this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(t) {
          if (this._map.options.inertia) {
            var n = this._lastTime = +/* @__PURE__ */ new Date(), a = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(a), this._times.push(n), this._prunePositions(n);
          }
          this._map.fire("move", t).fire("drag", t);
        },
        _prunePositions: function(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var t = this._map.getSize().divideBy(2), n = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = n.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(t, n) {
          return t - (t - n) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos), n = this._offsetLimit;
            t.x < n.min.x && (t.x = this._viscousLimit(t.x, n.min.x)), t.y < n.min.y && (t.y = this._viscousLimit(t.y, n.min.y)), t.x > n.max.x && (t.x = this._viscousLimit(t.x, n.max.x)), t.y > n.max.y && (t.y = this._viscousLimit(t.y, n.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
          }
        },
        _onPreDragWrap: function() {
          var t = this._worldWidth, n = Math.round(t / 2), a = this._initialWorldOffset, c = this._draggable._newPos.x, h = (c - n + a) % t + n - a, p = (c + n + a) % t - n - a, _ = Math.abs(h + a) < Math.abs(p + a) ? h : p;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = _;
        },
        _onDragEnd: function(t) {
          var n = this._map, a = n.options, c = !a.inertia || t.noInertia || this._times.length < 2;
          if (n.fire("dragend", t), c)
            n.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var h = this._lastPos.subtract(this._positions[0]), p = (this._lastTime - this._times[0]) / 1e3, _ = a.easeLinearity, E = h.multiplyBy(_ / p), x = E.distanceTo([0, 0]), D = Math.min(a.inertiaMaxSpeed, x), z = E.multiplyBy(D / x), V = D / (a.inertiaDeceleration * _), ot = z.multiplyBy(-V / 2).round();
            !ot.x && !ot.y ? n.fire("moveend") : (ot = n._limitOffset(ot, n.options.maxBounds), tt(function() {
              n.panBy(ot, {
                duration: V,
                easeLinearity: _,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      ct.addInitHook("addHandler", "dragging", Xs), ct.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var $s = ge.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
          this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"), et(t, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), At(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var t = document.body, n = document.documentElement, a = t.scrollTop || n.scrollTop, c = t.scrollLeft || n.scrollLeft;
            this._map._container.focus(), window.scrollTo(c, a);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(t) {
          var n = this._panKeys = {}, a = this.keyCodes, c, h;
          for (c = 0, h = a.left.length; c < h; c++)
            n[a.left[c]] = [-1 * t, 0];
          for (c = 0, h = a.right.length; c < h; c++)
            n[a.right[c]] = [t, 0];
          for (c = 0, h = a.down.length; c < h; c++)
            n[a.down[c]] = [0, t];
          for (c = 0, h = a.up.length; c < h; c++)
            n[a.up[c]] = [0, -1 * t];
        },
        _setZoomDelta: function(t) {
          var n = this._zoomKeys = {}, a = this.keyCodes, c, h;
          for (c = 0, h = a.zoomIn.length; c < h; c++)
            n[a.zoomIn[c]] = t;
          for (c = 0, h = a.zoomOut.length; c < h; c++)
            n[a.zoomOut[c]] = -t;
        },
        _addHooks: function() {
          et(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          At(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var n = t.keyCode, a = this._map, c;
            if (n in this._panKeys) {
              if (!a._panAnim || !a._panAnim._inProgress)
                if (c = this._panKeys[n], t.shiftKey && (c = S(c).multiplyBy(3)), a.options.maxBounds && (c = a._limitOffset(S(c), a.options.maxBounds)), a.options.worldCopyJump) {
                  var h = a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(c)));
                  a.panTo(h);
                } else
                  a.panBy(c);
            } else if (n in this._zoomKeys)
              a.setZoom(a.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
            else if (n === 27 && a._popup && a._popup.options.closeOnEscapeKey)
              a.closePopup();
            else
              return;
            cn(t);
          }
        }
      });
      ct.addInitHook("addHandler", "keyboard", $s), ct.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var tl = ge.extend({
        addHooks: function() {
          et(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          At(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var n = Ls(t), a = this._map.options.wheelDebounceTime;
          this._delta += n, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(a - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(u(this._performZoom, this), c), cn(t);
        },
        _performZoom: function() {
          var t = this._map, n = t.getZoom(), a = this._map.options.zoomSnap || 0;
          t._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), h = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, p = a ? Math.ceil(h / a) * a : h, _ = t._limitZoom(n + (this._delta > 0 ? p : -p)) - n;
          this._delta = 0, this._startTime = null, _ && (t.options.scrollWheelZoom === "center" ? t.setZoom(n + _) : t.setZoomAround(this._lastMousePos, n + _));
        }
      });
      ct.addInitHook("addHandler", "scrollWheelZoom", tl);
      var Ld = 600;
      ct.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: W.touchNative && W.safari && W.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var el = ge.extend({
        addHooks: function() {
          et(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          At(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var n = t.touches[0];
            this._startPos = this._newPos = new H(n.clientX, n.clientY), this._holdTimeout = setTimeout(u(function() {
              this._cancel(), this._isTapValid() && (et(document, "touchend", Ft), et(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", n));
            }, this), Ld), et(document, "touchend touchcancel contextmenu", this._cancel, this), et(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          At(document, "touchend", Ft), At(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), At(document, "touchend touchcancel contextmenu", this._cancel, this), At(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var n = t.touches[0];
          this._newPos = new H(n.clientX, n.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(t, n) {
          var a = new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: n.screenX,
            screenY: n.screenY,
            clientX: n.clientX,
            clientY: n.clientY
            // button: 2,
            // buttons: 2
          });
          a._simulated = !0, n.target.dispatchEvent(a);
        }
      });
      ct.addInitHook("addHandler", "tapHold", el), ct.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: W.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var nl = ge.extend({
        addHooks: function() {
          it(this._map._container, "leaflet-touch-zoom"), et(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Mt(this._map._container, "leaflet-touch-zoom"), At(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var n = this._map;
          if (!(!t.touches || t.touches.length !== 2 || n._animatingZoom || this._zooming)) {
            var a = n.mouseEventToContainerPoint(t.touches[0]), c = n.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), n.options.touchZoom !== "center" && (this._pinchStartLatLng = n.containerPointToLatLng(a.add(c)._divideBy(2))), this._startDist = a.distanceTo(c), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), et(document, "touchmove", this._onTouchMove, this), et(document, "touchend touchcancel", this._onTouchEnd, this), Ft(t);
          }
        },
        _onTouchMove: function(t) {
          if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
            var n = this._map, a = n.mouseEventToContainerPoint(t.touches[0]), c = n.mouseEventToContainerPoint(t.touches[1]), h = a.distanceTo(c) / this._startDist;
            if (this._zoom = n.getScaleZoom(h, this._startZoom), !n.options.bounceAtZoomLimits && (this._zoom < n.getMinZoom() && h < 1 || this._zoom > n.getMaxZoom() && h > 1) && (this._zoom = n._limitZoom(this._zoom)), n.options.touchZoom === "center") {
              if (this._center = this._startLatLng, h === 1)
                return;
            } else {
              var p = a._add(c)._divideBy(2)._subtract(this._centerPoint);
              if (h === 1 && p.x === 0 && p.y === 0)
                return;
              this._center = n.unproject(n.project(this._pinchStartLatLng, this._zoom).subtract(p), this._zoom);
            }
            this._moved || (n._moveStart(!0, !1), this._moved = !0), X(this._animRequest);
            var _ = u(n._move, n, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = tt(_, this, !0), Ft(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, X(this._animRequest), At(document, "touchmove", this._onTouchMove, this), At(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      ct.addInitHook("addHandler", "touchZoom", nl), ct.BoxZoom = Vs, ct.DoubleClickZoom = Js, ct.Drag = Xs, ct.Keyboard = $s, ct.ScrollWheelZoom = tl, ct.TapHold = el, ct.TouchZoom = nl, r.Bounds = q, r.Browser = W, r.CRS = zt, r.Canvas = js, r.Circle = _r, r.CircleMarker = Ji, r.Class = bt, r.Control = ae, r.DivIcon = Us, r.DivOverlay = ve, r.DomEvent = Nh, r.DomUtil = Gh, r.Draggable = ze, r.Evented = T, r.FeatureGroup = xe, r.GeoJSON = Ie, r.GridLayer = di, r.Handler = ge, r.Icon = Dn, r.ImageOverlay = no, r.LatLng = $, r.LatLngBounds = ft, r.Layer = se, r.LayerGroup = kn, r.LineUtil = ed, r.Map = ct, r.Marker = Vi, r.Mixin = Zh, r.Path = Ne, r.Point = H, r.PolyUtil = Vh, r.Polygon = Tn, r.Polyline = Me, r.Popup = io, r.PosAnimation = Cs, r.Projection = nd, r.Rectangle = Zs, r.Renderer = Be, r.SVG = pi, r.SVGOverlay = Ns, r.TileLayer = Sn, r.Tooltip = oo, r.Transformation = rn, r.Util = gt, r.VideoOverlay = zs, r.bind = u, r.bounds = st, r.canvas = Ws, r.circle = cd, r.circleMarker = ud, r.control = ui, r.divIcon = Ad, r.extend = o, r.featureGroup = ad, r.geoJSON = Gs, r.geoJson = fd, r.gridLayer = yd, r.icon = sd, r.imageOverlay = pd, r.latLng = nt, r.latLngBounds = lt, r.layerGroup = rd, r.map = Uh, r.marker = ld, r.point = S, r.polygon = dd, r.polyline = hd, r.popup = vd, r.rectangle = Ed, r.setOptions = y, r.stamp = f, r.svg = qs, r.svgOverlay = gd, r.tileLayer = Ks, r.tooltip = _d, r.transformation = an, r.version = l, r.videoOverlay = md;
      var Cd = window.L;
      r.noConflict = function() {
        return window.L = Cd, this;
      }, window.L = r;
    });
  }(vi, vi.exports)), vi.exports;
}
var wi = vA();
const Vt = /* @__PURE__ */ T_(wi);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _A(e, i, r) {
  return (i = yA(i)) in e ? Object.defineProperty(e, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[i] = r, e;
}
function nu(e, i) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    i && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function O(e) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2 ? nu(Object(r), !0).forEach(function(l) {
      _A(e, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nu(Object(r)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return e;
}
function AA(e, i) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(e, i);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function yA(e) {
  var i = AA(e, "string");
  return typeof i == "symbol" ? i : i + "";
}
const iu = () => {
};
let ja = {}, Tc = {}, Pc = null, Sc = {
  mark: iu,
  measure: iu
};
try {
  typeof window < "u" && (ja = window), typeof document < "u" && (Tc = document), typeof MutationObserver < "u" && (Pc = MutationObserver), typeof performance < "u" && (Sc = performance);
} catch {
}
const {
  userAgent: ou = ""
} = ja.navigator || {}, tn = ja, wt = Tc, ru = Pc, mo = Sc;
tn.document;
const Re = !!wt.documentElement && !!wt.head && typeof wt.addEventListener == "function" && typeof wt.createElement == "function", Oc = ~ou.indexOf("MSIE") || ~ou.indexOf("Trident/");
var wA = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, bA = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Qc = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, EA = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Fc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Gt = "classic", No = "duotone", LA = "sharp", CA = "sharp-duotone", Hc = [Gt, No, LA, CA], xA = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, MA = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, IA = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), BA = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, kA = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], au = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, DA = ["kit"], TA = {
  kit: {
    "fa-kit": "fak"
  }
}, PA = ["fak", "fakd"], SA = {
  kit: {
    fak: "fa-kit"
  }
}, su = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, go = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, OA = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], QA = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], FA = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, HA = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, RA = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Xr = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, GA = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], $r = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...OA, ...GA], zA = ["solid", "regular", "light", "thin", "duotone", "brands"], Rc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], NA = Rc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), UA = [...Object.keys(RA), ...zA, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", go.GROUP, go.SWAP_OPACITY, go.PRIMARY, go.SECONDARY].concat(Rc.map((e) => "".concat(e, "x"))).concat(NA.map((e) => "w-".concat(e))), KA = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Qe = "___FONT_AWESOME___", ta = 16, Gc = "fa", zc = "svg-inline--fa", An = "data-fa-i2svg", ea = "data-fa-pseudo-element", YA = "data-fa-pseudo-element-pending", Wa = "data-prefix", qa = "data-icon", lu = "fontawesome-i2svg", jA = "async", WA = ["HTML", "HEAD", "STYLE", "SCRIPT"], Nc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Hi(e) {
  return new Proxy(e, {
    get(i, r) {
      return r in i ? i[r] : i[Gt];
    }
  });
}
const Uc = O({}, Qc);
Uc[Gt] = O(O(O(O({}, {
  "fa-duotone": "duotone"
}), Qc[Gt]), au.kit), au["kit-duotone"]);
const qA = Hi(Uc), na = O({}, BA);
na[Gt] = O(O(O(O({}, {
  duotone: "fad"
}), na[Gt]), su.kit), su["kit-duotone"]);
const uu = Hi(na), ia = O({}, Xr);
ia[Gt] = O(O({}, ia[Gt]), SA.kit);
const Za = Hi(ia), oa = O({}, HA);
oa[Gt] = O(O({}, oa[Gt]), TA.kit);
Hi(oa);
const ZA = wA, Kc = "fa-layers-text", VA = bA, JA = O({}, xA);
Hi(JA);
const XA = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Qr = EA, $A = [...DA, ...UA], bi = tn.FontAwesomeConfig || {};
function ty(e) {
  var i = wt.querySelector("script[" + e + "]");
  if (i)
    return i.getAttribute(e);
}
function ey(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
wt && typeof wt.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((i) => {
  let [r, l] = i;
  const o = ey(ty(r));
  o != null && (bi[l] = o);
});
const Yc = {
  styleDefault: "solid",
  familyDefault: Gt,
  cssPrefix: Gc,
  replacementClass: zc,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
bi.familyPrefix && (bi.cssPrefix = bi.familyPrefix);
const jn = O(O({}, Yc), bi);
jn.autoReplaceSvg || (jn.observeMutations = !1);
const Y = {};
Object.keys(Yc).forEach((e) => {
  Object.defineProperty(Y, e, {
    enumerable: !0,
    set: function(i) {
      jn[e] = i, Ei.forEach((r) => r(Y));
    },
    get: function() {
      return jn[e];
    }
  });
});
Object.defineProperty(Y, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    jn.cssPrefix = e, Ei.forEach((i) => i(Y));
  },
  get: function() {
    return jn.cssPrefix;
  }
});
tn.FontAwesomeConfig = Y;
const Ei = [];
function ny(e) {
  return Ei.push(e), () => {
    Ei.splice(Ei.indexOf(e), 1);
  };
}
const Ye = ta, Ae = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function iy(e) {
  if (!e || !Re)
    return;
  const i = wt.createElement("style");
  i.setAttribute("type", "text/css"), i.innerHTML = e;
  const r = wt.head.childNodes;
  let l = null;
  for (let o = r.length - 1; o > -1; o--) {
    const s = r[o], u = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(u) > -1 && (l = s);
  }
  return wt.head.insertBefore(i, l), e;
}
const oy = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Di() {
  let e = 12, i = "";
  for (; e-- > 0; )
    i += oy[Math.random() * 62 | 0];
  return i;
}
function qn(e) {
  const i = [];
  for (let r = (e || []).length >>> 0; r--; )
    i[r] = e[r];
  return i;
}
function Va(e) {
  return e.classList ? qn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((i) => i);
}
function jc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ry(e) {
  return Object.keys(e || {}).reduce((i, r) => i + "".concat(r, '="').concat(jc(e[r]), '" '), "").trim();
}
function Uo(e) {
  return Object.keys(e || {}).reduce((i, r) => i + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Ja(e) {
  return e.size !== Ae.size || e.x !== Ae.x || e.y !== Ae.y || e.rotate !== Ae.rotate || e.flipX || e.flipY;
}
function ay(e) {
  let {
    transform: i,
    containerWidth: r,
    iconWidth: l
  } = e;
  const o = {
    transform: "translate(".concat(r / 2, " 256)")
  }, s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), d = "rotate(".concat(i.rotate, " 0 0)"), f = {
    transform: "".concat(s, " ").concat(u, " ").concat(d)
  }, m = {
    transform: "translate(".concat(l / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: f,
    path: m
  };
}
function sy(e) {
  let {
    transform: i,
    width: r = ta,
    height: l = ta,
    startCentered: o = !1
  } = e, s = "";
  return o && Oc ? s += "translate(".concat(i.x / Ye - r / 2, "em, ").concat(i.y / Ye - l / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(i.x / Ye, "em), calc(-50% + ").concat(i.y / Ye, "em)) ") : s += "translate(".concat(i.x / Ye, "em, ").concat(i.y / Ye, "em) "), s += "scale(".concat(i.size / Ye * (i.flipX ? -1 : 1), ", ").concat(i.size / Ye * (i.flipY ? -1 : 1), ") "), s += "rotate(".concat(i.rotate, "deg) "), s;
}
var ly = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Wc() {
  const e = Gc, i = zc, r = Y.cssPrefix, l = Y.replacementClass;
  let o = ly;
  if (r !== e || l !== i) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), d = new RegExp("\\.".concat(i), "g");
    o = o.replace(s, ".".concat(r, "-")).replace(u, "--".concat(r, "-")).replace(d, ".".concat(l));
  }
  return o;
}
let cu = !1;
function Fr() {
  Y.autoAddCss && !cu && (iy(Wc()), cu = !0);
}
var uy = {
  mixout() {
    return {
      dom: {
        css: Wc,
        insertCss: Fr
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Fr();
      },
      beforeI2svg() {
        Fr();
      }
    };
  }
};
const Fe = tn || {};
Fe[Qe] || (Fe[Qe] = {});
Fe[Qe].styles || (Fe[Qe].styles = {});
Fe[Qe].hooks || (Fe[Qe].hooks = {});
Fe[Qe].shims || (Fe[Qe].shims = []);
var ye = Fe[Qe];
const qc = [], Zc = function() {
  wt.removeEventListener("DOMContentLoaded", Zc), Mo = 1, qc.map((e) => e());
};
let Mo = !1;
Re && (Mo = (wt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wt.readyState), Mo || wt.addEventListener("DOMContentLoaded", Zc));
function cy(e) {
  Re && (Mo ? setTimeout(e, 0) : qc.push(e));
}
function Ri(e) {
  const {
    tag: i,
    attributes: r = {},
    children: l = []
  } = e;
  return typeof e == "string" ? jc(e) : "<".concat(i, " ").concat(ry(r), ">").concat(l.map(Ri).join(""), "</").concat(i, ">");
}
function hu(e, i, r) {
  if (e && e[i] && e[i][r])
    return {
      prefix: i,
      iconName: r,
      icon: e[i][r]
    };
}
var Hr = function(i, r, l, o) {
  var s = Object.keys(i), u = s.length, d = r, f, m, g;
  for (l === void 0 ? (f = 1, g = i[s[0]]) : (f = 0, g = l); f < u; f++)
    m = s[f], g = d(g, i[m], m, i);
  return g;
};
function hy(e) {
  const i = [];
  let r = 0;
  const l = e.length;
  for (; r < l; ) {
    const o = e.charCodeAt(r++);
    if (o >= 55296 && o <= 56319 && r < l) {
      const s = e.charCodeAt(r++);
      (s & 64512) == 56320 ? i.push(((o & 1023) << 10) + (s & 1023) + 65536) : (i.push(o), r--);
    } else
      i.push(o);
  }
  return i;
}
function ra(e) {
  const i = hy(e);
  return i.length === 1 ? i[0].toString(16) : null;
}
function dy(e, i) {
  const r = e.length;
  let l = e.charCodeAt(i), o;
  return l >= 55296 && l <= 56319 && r > i + 1 && (o = e.charCodeAt(i + 1), o >= 56320 && o <= 57343) ? (l - 55296) * 1024 + o - 56320 + 65536 : l;
}
function du(e) {
  return Object.keys(e).reduce((i, r) => {
    const l = e[r];
    return !!l.icon ? i[l.iconName] = l.icon : i[r] = l, i;
  }, {});
}
function aa(e, i) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: l = !1
  } = r, o = du(i);
  typeof ye.hooks.addPack == "function" && !l ? ye.hooks.addPack(e, du(i)) : ye.styles[e] = O(O({}, ye.styles[e] || {}), o), e === "fas" && aa("fa", i);
}
const {
  styles: Ti,
  shims: fy
} = ye, Vc = Object.keys(Za), py = Vc.reduce((e, i) => (e[i] = Object.keys(Za[i]), e), {});
let Xa = null, Jc = {}, Xc = {}, $c = {}, th = {}, eh = {};
function my(e) {
  return ~$A.indexOf(e);
}
function gy(e, i) {
  const r = i.split("-"), l = r[0], o = r.slice(1).join("-");
  return l === e && o !== "" && !my(o) ? o : null;
}
const nh = () => {
  const e = (l) => Hr(Ti, (o, s, u) => (o[u] = Hr(s, l, {}), o), {});
  Jc = e((l, o, s) => (o[3] && (l[o[3]] = s), o[2] && o[2].filter((d) => typeof d == "number").forEach((d) => {
    l[d.toString(16)] = s;
  }), l)), Xc = e((l, o, s) => (l[s] = s, o[2] && o[2].filter((d) => typeof d == "string").forEach((d) => {
    l[d] = s;
  }), l)), eh = e((l, o, s) => {
    const u = o[2];
    return l[s] = s, u.forEach((d) => {
      l[d] = s;
    }), l;
  });
  const i = "far" in Ti || Y.autoFetchSvg, r = Hr(fy, (l, o) => {
    const s = o[0];
    let u = o[1];
    const d = o[2];
    return u === "far" && !i && (u = "fas"), typeof s == "string" && (l.names[s] = {
      prefix: u,
      iconName: d
    }), typeof s == "number" && (l.unicodes[s.toString(16)] = {
      prefix: u,
      iconName: d
    }), l;
  }, {
    names: {},
    unicodes: {}
  });
  $c = r.names, th = r.unicodes, Xa = Ko(Y.styleDefault, {
    family: Y.familyDefault
  });
};
ny((e) => {
  Xa = Ko(e.styleDefault, {
    family: Y.familyDefault
  });
});
nh();
function $a(e, i) {
  return (Jc[e] || {})[i];
}
function vy(e, i) {
  return (Xc[e] || {})[i];
}
function mn(e, i) {
  return (eh[e] || {})[i];
}
function ih(e) {
  return $c[e] || {
    prefix: null,
    iconName: null
  };
}
function _y(e) {
  const i = th[e], r = $a("fas", e);
  return i || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function en() {
  return Xa;
}
const oh = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ay(e) {
  let i = Gt;
  const r = Vc.reduce((l, o) => (l[o] = "".concat(Y.cssPrefix, "-").concat(o), l), {});
  return Hc.forEach((l) => {
    (e.includes(r[l]) || e.some((o) => py[l].includes(o))) && (i = l);
  }), i;
}
function Ko(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = Gt
  } = i, l = qA[r][e];
  if (r === No && !e)
    return "fad";
  const o = uu[r][e] || uu[r][l], s = e in ye.styles ? e : null;
  return o || s || null;
}
function yy(e) {
  let i = [], r = null;
  return e.forEach((l) => {
    const o = gy(Y.cssPrefix, l);
    o ? r = o : l && i.push(l);
  }), {
    iconName: r,
    rest: i
  };
}
function fu(e) {
  return e.sort().filter((i, r, l) => l.indexOf(i) === r);
}
function Yo(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = i;
  let l = null;
  const o = $r.concat(QA), s = fu(e.filter((v) => o.includes(v))), u = fu(e.filter((v) => !$r.includes(v))), d = s.filter((v) => (l = v, !Fc.includes(v))), [f = null] = d, m = Ay(s), g = O(O({}, yy(u)), {}, {
    prefix: Ko(f, {
      family: m
    })
  });
  return O(O(O({}, g), Ly({
    values: e,
    family: m,
    styles: Ti,
    config: Y,
    canonical: g,
    givenPrefix: l
  })), wy(r, l, g));
}
function wy(e, i, r) {
  let {
    prefix: l,
    iconName: o
  } = r;
  if (e || !l || !o)
    return {
      prefix: l,
      iconName: o
    };
  const s = i === "fa" ? ih(o) : {}, u = mn(l, o);
  return o = s.iconName || u || o, l = s.prefix || l, l === "far" && !Ti.far && Ti.fas && !Y.autoFetchSvg && (l = "fas"), {
    prefix: l,
    iconName: o
  };
}
const by = Hc.filter((e) => e !== Gt || e !== No), Ey = Object.keys(Xr).filter((e) => e !== Gt).map((e) => Object.keys(Xr[e])).flat();
function Ly(e) {
  const {
    values: i,
    family: r,
    canonical: l,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, d = r === No, f = i.includes("fa-duotone") || i.includes("fad"), m = u.familyDefault === "duotone", g = l.prefix === "fad" || l.prefix === "fa-duotone";
  if (!d && (f || m || g) && (l.prefix = "fad"), (i.includes("fa-brands") || i.includes("fab")) && (l.prefix = "fab"), !l.prefix && by.includes(r) && (Object.keys(s).find((b) => Ey.includes(b)) || u.autoFetchSvg)) {
    const b = IA.get(r).defaultShortPrefixId;
    l.prefix = b, l.iconName = mn(l.prefix, l.iconName) || l.iconName;
  }
  return (l.prefix === "fa" || o === "fa") && (l.prefix = en() || "fas"), l;
}
class Cy {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    const o = r.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = O(O({}, this.definitions[s] || {}), o[s]), aa(s, o[s]);
      const u = Za[Gt][s];
      u && aa(u, o[s]), nh();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(i, r) {
    const l = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(l).map((o) => {
      const {
        prefix: s,
        iconName: u,
        icon: d
      } = l[o], f = d[2];
      i[s] || (i[s] = {}), f.length > 0 && f.forEach((m) => {
        typeof m == "string" && (i[s][m] = d);
      }), i[s][u] = d;
    }), i;
  }
}
let pu = [], Hn = {};
const Gn = {}, xy = Object.keys(Gn);
function My(e, i) {
  let {
    mixoutsTo: r
  } = i;
  return pu = e, Hn = {}, Object.keys(Gn).forEach((l) => {
    xy.indexOf(l) === -1 && delete Gn[l];
  }), pu.forEach((l) => {
    const o = l.mixout ? l.mixout() : {};
    if (Object.keys(o).forEach((s) => {
      typeof o[s] == "function" && (r[s] = o[s]), typeof o[s] == "object" && Object.keys(o[s]).forEach((u) => {
        r[s] || (r[s] = {}), r[s][u] = o[s][u];
      });
    }), l.hooks) {
      const s = l.hooks();
      Object.keys(s).forEach((u) => {
        Hn[u] || (Hn[u] = []), Hn[u].push(s[u]);
      });
    }
    l.provides && l.provides(Gn);
  }), r;
}
function sa(e, i) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    l[o - 2] = arguments[o];
  return (Hn[e] || []).forEach((u) => {
    i = u.apply(null, [i, ...l]);
  }), i;
}
function yn(e) {
  for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
    r[l - 1] = arguments[l];
  (Hn[e] || []).forEach((s) => {
    s.apply(null, r);
  });
}
function nn() {
  const e = arguments[0], i = Array.prototype.slice.call(arguments, 1);
  return Gn[e] ? Gn[e].apply(null, i) : void 0;
}
function la(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: i
  } = e;
  const r = e.prefix || en();
  if (i)
    return i = mn(r, i) || i, hu(rh.definitions, r, i) || hu(ye.styles, r, i);
}
const rh = new Cy(), Iy = () => {
  Y.autoReplaceSvg = !1, Y.observeMutations = !1, yn("noAuto");
}, By = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Re ? (yn("beforeI2svg", e), nn("pseudoElements2svg", e), nn("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: i
    } = e;
    Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0), Y.observeMutations = !0, cy(() => {
      Dy({
        autoReplaceSvgRoot: i
      }), yn("watch", e);
    });
  }
}, ky = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: mn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const i = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Ko(e[0]);
      return {
        prefix: r,
        iconName: mn(r, i) || i
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Y.cssPrefix, "-")) > -1 || e.match(ZA))) {
      const i = Yo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || en(),
        iconName: mn(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      const i = en();
      return {
        prefix: i,
        iconName: mn(i, e) || e
      };
    }
  }
}, $t = {
  noAuto: Iy,
  config: Y,
  dom: By,
  parse: ky,
  library: rh,
  findIconDefinition: la,
  toHtml: Ri
}, Dy = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: i = wt
  } = e;
  (Object.keys(ye.styles).length > 0 || Y.autoFetchSvg) && Re && Y.autoReplaceSvg && $t.dom.i2svg({
    node: i
  });
};
function jo(e, i) {
  return Object.defineProperty(e, "abstract", {
    get: i
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Ri(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Re) return;
      const r = wt.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function Ty(e) {
  let {
    children: i,
    main: r,
    mask: l,
    attributes: o,
    styles: s,
    transform: u
  } = e;
  if (Ja(u) && r.found && !l.found) {
    const {
      width: d,
      height: f
    } = r, m = {
      x: d / f / 2,
      y: 0.5
    };
    o.style = Uo(O(O({}, s), {}, {
      "transform-origin": "".concat(m.x + u.x / 16, "em ").concat(m.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: i
  }];
}
function Py(e) {
  let {
    prefix: i,
    iconName: r,
    children: l,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(i, "-").concat(Y.cssPrefix, "-").concat(r) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: O(O({}, o), {}, {
        id: u
      }),
      children: l
    }]
  }];
}
function ts(e) {
  const {
    icons: {
      main: i,
      mask: r
    },
    prefix: l,
    iconName: o,
    transform: s,
    symbol: u,
    title: d,
    maskId: f,
    titleId: m,
    extra: g,
    watchable: v = !1
  } = e, {
    width: b,
    height: M
  } = r.found ? r : i, w = PA.includes(l), y = [Y.replacementClass, o ? "".concat(Y.cssPrefix, "-").concat(o) : ""].filter((k) => g.classes.indexOf(k) === -1).filter((k) => k !== "" || !!k).concat(g.classes).join(" ");
  let B = {
    children: [],
    attributes: O(O({}, g.attributes), {}, {
      "data-prefix": l,
      "data-icon": o,
      class: y,
      role: g.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(M)
    })
  };
  const A = w && !~g.classes.indexOf("fa-fw") ? {
    width: "".concat(b / M * 16 * 0.0625, "em")
  } : {};
  v && (B.attributes[An] = ""), d && (B.children.push({
    tag: "title",
    attributes: {
      id: B.attributes["aria-labelledby"] || "title-".concat(m || Di())
    },
    children: [d]
  }), delete B.attributes.title);
  const I = O(O({}, B), {}, {
    prefix: l,
    iconName: o,
    main: i,
    mask: r,
    maskId: f,
    transform: s,
    symbol: u,
    styles: O(O({}, A), g.styles)
  }), {
    children: F,
    attributes: Q
  } = r.found && i.found ? nn("generateAbstractMask", I) || {
    children: [],
    attributes: {}
  } : nn("generateAbstractIcon", I) || {
    children: [],
    attributes: {}
  };
  return I.children = F, I.attributes = Q, u ? Py(I) : Ty(I);
}
function mu(e) {
  const {
    content: i,
    width: r,
    height: l,
    transform: o,
    title: s,
    extra: u,
    watchable: d = !1
  } = e, f = O(O(O({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  d && (f[An] = "");
  const m = O({}, u.styles);
  Ja(o) && (m.transform = sy({
    transform: o,
    startCentered: !0,
    width: r,
    height: l
  }), m["-webkit-transform"] = m.transform);
  const g = Uo(m);
  g.length > 0 && (f.style = g);
  const v = [];
  return v.push({
    tag: "span",
    attributes: f,
    children: [i]
  }), s && v.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), v;
}
function Sy(e) {
  const {
    content: i,
    title: r,
    extra: l
  } = e, o = O(O(O({}, l.attributes), r ? {
    title: r
  } : {}), {}, {
    class: l.classes.join(" ")
  }), s = Uo(l.styles);
  s.length > 0 && (o.style = s);
  const u = [];
  return u.push({
    tag: "span",
    attributes: o,
    children: [i]
  }), r && u.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), u;
}
const {
  styles: Rr
} = ye;
function ua(e) {
  const i = e[0], r = e[1], [l] = e.slice(4);
  let o = null;
  return Array.isArray(l) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Y.cssPrefix, "-").concat(Qr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Qr.SECONDARY),
        fill: "currentColor",
        d: l[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Qr.PRIMARY),
        fill: "currentColor",
        d: l[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: l
    }
  }, {
    found: !0,
    width: i,
    height: r,
    icon: o
  };
}
const Oy = {
  found: !1,
  width: 512,
  height: 512
};
function Qy(e, i) {
  !Nc && !Y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(i, '" is missing.'));
}
function ca(e, i) {
  let r = i;
  return i === "fa" && Y.styleDefault !== null && (i = en()), new Promise((l, o) => {
    if (r === "fa") {
      const s = ih(e) || {};
      e = s.iconName || e, i = s.prefix || i;
    }
    if (e && i && Rr[i] && Rr[i][e]) {
      const s = Rr[i][e];
      return l(ua(s));
    }
    Qy(e, i), l(O(O({}, Oy), {}, {
      icon: Y.showMissingIcons && e ? nn("missingIconAbstract") || {} : {}
    }));
  });
}
const gu = () => {
}, ha = Y.measurePerformance && mo && mo.mark && mo.measure ? mo : {
  mark: gu,
  measure: gu
}, _i = 'FA "6.7.2"', Fy = (e) => (ha.mark("".concat(_i, " ").concat(e, " begins")), () => ah(e)), ah = (e) => {
  ha.mark("".concat(_i, " ").concat(e, " ends")), ha.measure("".concat(_i, " ").concat(e), "".concat(_i, " ").concat(e, " begins"), "".concat(_i, " ").concat(e, " ends"));
};
var es = {
  begin: Fy,
  end: ah
};
const yo = () => {
};
function vu(e) {
  return typeof (e.getAttribute ? e.getAttribute(An) : null) == "string";
}
function Hy(e) {
  const i = e.getAttribute ? e.getAttribute(Wa) : null, r = e.getAttribute ? e.getAttribute(qa) : null;
  return i && r;
}
function Ry(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Y.replacementClass);
}
function Gy() {
  return Y.autoReplaceSvg === !0 ? wo.replace : wo[Y.autoReplaceSvg] || wo.replace;
}
function zy(e) {
  return wt.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ny(e) {
  return wt.createElement(e);
}
function sh(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? zy : Ny
  } = i;
  if (typeof e == "string")
    return wt.createTextNode(e);
  const l = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    l.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    l.appendChild(sh(s, {
      ceFn: r
    }));
  }), l;
}
function Uy(e) {
  let i = " ".concat(e.outerHTML, " ");
  return i = "".concat(i, "Font Awesome fontawesome.com "), i;
}
const wo = {
  replace: function(e) {
    const i = e[0];
    if (i.parentNode)
      if (e[1].forEach((r) => {
        i.parentNode.insertBefore(sh(r), i);
      }), i.getAttribute(An) === null && Y.keepOriginalSource) {
        let r = wt.createComment(Uy(i));
        i.parentNode.replaceChild(r, i);
      } else
        i.remove();
  },
  nest: function(e) {
    const i = e[0], r = e[1];
    if (~Va(i).indexOf(Y.replacementClass))
      return wo.replace(e);
    const l = new RegExp("".concat(Y.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const s = r[0].attributes.class.split(" ").reduce((u, d) => (d === Y.replacementClass || d.match(l) ? u.toSvg.push(d) : u.toNode.push(d), u), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? i.removeAttribute("class") : i.setAttribute("class", s.toNode.join(" "));
    }
    const o = r.map((s) => Ri(s)).join(`
`);
    i.setAttribute(An, ""), i.innerHTML = o;
  }
};
function _u(e) {
  e();
}
function lh(e, i) {
  const r = typeof i == "function" ? i : yo;
  if (e.length === 0)
    r();
  else {
    let l = _u;
    Y.mutateApproach === jA && (l = tn.requestAnimationFrame || _u), l(() => {
      const o = Gy(), s = es.begin("mutate");
      e.map(o), s(), r();
    });
  }
}
let ns = !1;
function uh() {
  ns = !0;
}
function da() {
  ns = !1;
}
let Io = null;
function Au(e) {
  if (!ru || !Y.observeMutations)
    return;
  const {
    treeCallback: i = yo,
    nodeCallback: r = yo,
    pseudoElementsCallback: l = yo,
    observeMutationsRoot: o = wt
  } = e;
  Io = new ru((s) => {
    if (ns) return;
    const u = en();
    qn(s).forEach((d) => {
      if (d.type === "childList" && d.addedNodes.length > 0 && !vu(d.addedNodes[0]) && (Y.searchPseudoElements && l(d.target), i(d.target)), d.type === "attributes" && d.target.parentNode && Y.searchPseudoElements && l(d.target.parentNode), d.type === "attributes" && vu(d.target) && ~XA.indexOf(d.attributeName))
        if (d.attributeName === "class" && Hy(d.target)) {
          const {
            prefix: f,
            iconName: m
          } = Yo(Va(d.target));
          d.target.setAttribute(Wa, f || u), m && d.target.setAttribute(qa, m);
        } else Ry(d.target) && r(d.target);
    });
  }), Re && Io.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Ky() {
  Io && Io.disconnect();
}
function Yy(e) {
  const i = e.getAttribute("style");
  let r = [];
  return i && (r = i.split(";").reduce((l, o) => {
    const s = o.split(":"), u = s[0], d = s.slice(1);
    return u && d.length > 0 && (l[u] = d.join(":").trim()), l;
  }, {})), r;
}
function jy(e) {
  const i = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), l = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Yo(Va(e));
  return o.prefix || (o.prefix = en()), i && r && (o.prefix = i, o.iconName = r), o.iconName && o.prefix || (o.prefix && l.length > 0 && (o.iconName = vy(o.prefix, e.innerText) || $a(o.prefix, ra(e.innerText))), !o.iconName && Y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function Wy(e) {
  const i = qn(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), r = e.getAttribute("title"), l = e.getAttribute("data-fa-title-id");
  return Y.autoA11y && (r ? i["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(l || Di()) : (i["aria-hidden"] = "true", i.focusable = "false")), i;
}
function qy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ae,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function yu(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: l,
    rest: o
  } = jy(e), s = Wy(e), u = sa("parseNodeAttributes", {}, e);
  let d = i.styleParser ? Yy(e) : [];
  return O({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: l,
    transform: Ae,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: d,
      attributes: s
    }
  }, u);
}
const {
  styles: Zy
} = ye;
function ch(e) {
  const i = Y.autoReplaceSvg === "nest" ? yu(e, {
    styleParser: !1
  }) : yu(e);
  return ~i.extra.classes.indexOf(Kc) ? nn("generateLayersText", e, i) : nn("generateSvgReplacementMutation", e, i);
}
function Vy() {
  return [...kA, ...$r];
}
function wu(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Re) return Promise.resolve();
  const r = wt.documentElement.classList, l = (g) => r.add("".concat(lu, "-").concat(g)), o = (g) => r.remove("".concat(lu, "-").concat(g)), s = Y.autoFetchSvg ? Vy() : Fc.concat(Object.keys(Zy));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(Kc, ":not([").concat(An, "])")].concat(s.map((g) => ".".concat(g, ":not([").concat(An, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let d = [];
  try {
    d = qn(e.querySelectorAll(u));
  } catch {
  }
  if (d.length > 0)
    l("pending"), o("complete");
  else
    return Promise.resolve();
  const f = es.begin("onTree"), m = d.reduce((g, v) => {
    try {
      const b = ch(v);
      b && g.push(b);
    } catch (b) {
      Nc || b.name === "MissingIcon" && console.error(b);
    }
    return g;
  }, []);
  return new Promise((g, v) => {
    Promise.all(m).then((b) => {
      lh(b, () => {
        l("active"), l("complete"), o("pending"), typeof i == "function" && i(), f(), g();
      });
    }).catch((b) => {
      f(), v(b);
    });
  });
}
function Jy(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ch(e).then((r) => {
    r && lh([r], i);
  });
}
function Xy(e) {
  return function(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const l = (i || {}).icon ? i : la(i || {});
    let {
      mask: o
    } = r;
    return o && (o = (o || {}).icon ? o : la(o || {})), e(l, O(O({}, r), {}, {
      mask: o
    }));
  };
}
const $y = function(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = Ae,
    symbol: l = !1,
    mask: o = null,
    maskId: s = null,
    title: u = null,
    titleId: d = null,
    classes: f = [],
    attributes: m = {},
    styles: g = {}
  } = i;
  if (!e) return;
  const {
    prefix: v,
    iconName: b,
    icon: M
  } = e;
  return jo(O({
    type: "icon"
  }, e), () => (yn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: i
  }), Y.autoA11y && (u ? m["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(d || Di()) : (m["aria-hidden"] = "true", m.focusable = "false")), ts({
    icons: {
      main: ua(M),
      mask: o ? ua(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: v,
    iconName: b,
    transform: O(O({}, Ae), r),
    symbol: l,
    title: u,
    maskId: s,
    titleId: d,
    extra: {
      attributes: m,
      styles: g,
      classes: f
    }
  })));
};
var tw = {
  mixout() {
    return {
      icon: Xy($y)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = wu, e.nodeCallback = Jy, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(i) {
      const {
        node: r = wt,
        callback: l = () => {
        }
      } = i;
      return wu(r, l);
    }, e.generateSvgReplacementMutation = function(i, r) {
      const {
        iconName: l,
        title: o,
        titleId: s,
        prefix: u,
        transform: d,
        symbol: f,
        mask: m,
        maskId: g,
        extra: v
      } = r;
      return new Promise((b, M) => {
        Promise.all([ca(l, u), m.iconName ? ca(m.iconName, m.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((w) => {
          let [y, B] = w;
          b([i, ts({
            icons: {
              main: y,
              mask: B
            },
            prefix: u,
            iconName: l,
            transform: d,
            symbol: f,
            maskId: g,
            title: o,
            titleId: s,
            extra: v,
            watchable: !0
          })]);
        }).catch(M);
      });
    }, e.generateAbstractIcon = function(i) {
      let {
        children: r,
        attributes: l,
        main: o,
        transform: s,
        styles: u
      } = i;
      const d = Uo(u);
      d.length > 0 && (l.style = d);
      let f;
      return Ja(s) && (f = nn("generateAbstractTransformGrouping", {
        main: o,
        transform: s,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(f || o.icon), {
        children: r,
        attributes: l
      };
    };
  }
}, ew = {
  mixout() {
    return {
      layer(e) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = i;
        return jo({
          type: "layer"
        }, () => {
          yn("beforeDOMElementCreation", {
            assembler: e,
            params: i
          });
          let l = [];
          return e((o) => {
            Array.isArray(o) ? o.map((s) => {
              l = l.concat(s.abstract);
            }) : l = l.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Y.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: l
          }];
        });
      }
    };
  }
}, nw = {
  mixout() {
    return {
      counter(e) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: l = [],
          attributes: o = {},
          styles: s = {}
        } = i;
        return jo({
          type: "counter",
          content: e
        }, () => (yn("beforeDOMElementCreation", {
          content: e,
          params: i
        }), Sy({
          content: e.toString(),
          title: r,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(Y.cssPrefix, "-layers-counter"), ...l]
          }
        })));
      }
    };
  }
}, iw = {
  mixout() {
    return {
      text(e) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = Ae,
          title: l = null,
          classes: o = [],
          attributes: s = {},
          styles: u = {}
        } = i;
        return jo({
          type: "text",
          content: e
        }, () => (yn("beforeDOMElementCreation", {
          content: e,
          params: i
        }), mu({
          content: e,
          transform: O(O({}, Ae), r),
          title: l,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(Y.cssPrefix, "-layers-text"), ...o]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(i, r) {
      const {
        title: l,
        transform: o,
        extra: s
      } = r;
      let u = null, d = null;
      if (Oc) {
        const f = parseInt(getComputedStyle(i).fontSize, 10), m = i.getBoundingClientRect();
        u = m.width / f, d = m.height / f;
      }
      return Y.autoA11y && !l && (s.attributes["aria-hidden"] = "true"), Promise.resolve([i, mu({
        content: i.innerHTML,
        width: u,
        height: d,
        transform: o,
        title: l,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const ow = new RegExp('"', "ug"), bu = [1105920, 1112319], Eu = O(O(O(O({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), MA), KA), FA), fa = Object.keys(Eu).reduce((e, i) => (e[i.toLowerCase()] = Eu[i], e), {}), rw = Object.keys(fa).reduce((e, i) => {
  const r = fa[i];
  return e[i] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function aw(e) {
  const i = e.replace(ow, ""), r = dy(i, 0), l = r >= bu[0] && r <= bu[1], o = i.length === 2 ? i[0] === i[1] : !1;
  return {
    value: ra(o ? i[0] : i),
    isSecondary: l || o
  };
}
function sw(e, i) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), l = parseInt(i), o = isNaN(l) ? "normal" : l;
  return (fa[r] || {})[o] || rw[r];
}
function Lu(e, i) {
  const r = "".concat(YA).concat(i.replace(":", "-"));
  return new Promise((l, o) => {
    if (e.getAttribute(r) !== null)
      return l();
    const u = qn(e.children).filter((b) => b.getAttribute(ea) === i)[0], d = tn.getComputedStyle(e, i), f = d.getPropertyValue("font-family"), m = f.match(VA), g = d.getPropertyValue("font-weight"), v = d.getPropertyValue("content");
    if (u && !m)
      return e.removeChild(u), l();
    if (m && v !== "none" && v !== "") {
      const b = d.getPropertyValue("content");
      let M = sw(f, g);
      const {
        value: w,
        isSecondary: y
      } = aw(b), B = m[0].startsWith("FontAwesome");
      let A = $a(M, w), I = A;
      if (B) {
        const F = _y(w);
        F.iconName && F.prefix && (A = F.iconName, M = F.prefix);
      }
      if (A && !y && (!u || u.getAttribute(Wa) !== M || u.getAttribute(qa) !== I)) {
        e.setAttribute(r, I), u && e.removeChild(u);
        const F = qy(), {
          extra: Q
        } = F;
        Q.attributes[ea] = i, ca(A, M).then((k) => {
          const U = ts(O(O({}, F), {}, {
            icons: {
              main: k,
              mask: oh()
            },
            prefix: M,
            iconName: I,
            extra: Q,
            watchable: !0
          })), G = wt.createElementNS("http://www.w3.org/2000/svg", "svg");
          i === "::before" ? e.insertBefore(G, e.firstChild) : e.appendChild(G), G.outerHTML = U.map((Z) => Ri(Z)).join(`
`), e.removeAttribute(r), l();
        }).catch(o);
      } else
        l();
    } else
      l();
  });
}
function lw(e) {
  return Promise.all([Lu(e, "::before"), Lu(e, "::after")]);
}
function uw(e) {
  return e.parentNode !== document.head && !~WA.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ea) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Cu(e) {
  if (Re)
    return new Promise((i, r) => {
      const l = qn(e.querySelectorAll("*")).filter(uw).map(lw), o = es.begin("searchPseudoElements");
      uh(), Promise.all(l).then(() => {
        o(), da(), i();
      }).catch(() => {
        o(), da(), r();
      });
    });
}
var cw = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Cu, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(i) {
      const {
        node: r = wt
      } = i;
      Y.searchPseudoElements && Cu(r);
    };
  }
};
let xu = !1;
var hw = {
  mixout() {
    return {
      dom: {
        unwatch() {
          uh(), xu = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Au(sa("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Ky();
      },
      watch(e) {
        const {
          observeMutationsRoot: i
        } = e;
        xu ? da() : Au(sa("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
};
const Mu = (e) => {
  let i = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, l) => {
    const o = l.toLowerCase().split("-"), s = o[0];
    let u = o.slice(1).join("-");
    if (s && u === "h")
      return r.flipX = !0, r;
    if (s && u === "v")
      return r.flipY = !0, r;
    if (u = parseFloat(u), isNaN(u))
      return r;
    switch (s) {
      case "grow":
        r.size = r.size + u;
        break;
      case "shrink":
        r.size = r.size - u;
        break;
      case "left":
        r.x = r.x - u;
        break;
      case "right":
        r.x = r.x + u;
        break;
      case "up":
        r.y = r.y - u;
        break;
      case "down":
        r.y = r.y + u;
        break;
      case "rotate":
        r.rotate = r.rotate + u;
        break;
    }
    return r;
  }, i);
};
var dw = {
  mixout() {
    return {
      parse: {
        transform: (e) => Mu(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, i) {
        const r = i.getAttribute("data-fa-transform");
        return r && (e.transform = Mu(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(i) {
      let {
        main: r,
        transform: l,
        containerWidth: o,
        iconWidth: s
      } = i;
      const u = {
        transform: "translate(".concat(o / 2, " 256)")
      }, d = "translate(".concat(l.x * 32, ", ").concat(l.y * 32, ") "), f = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "), m = "rotate(".concat(l.rotate, " 0 0)"), g = {
        transform: "".concat(d, " ").concat(f, " ").concat(m)
      }, v = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, b = {
        outer: u,
        inner: g,
        path: v
      };
      return {
        tag: "g",
        attributes: O({}, b.outer),
        children: [{
          tag: "g",
          attributes: O({}, b.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: O(O({}, r.icon.attributes), b.path)
          }]
        }]
      };
    };
  }
};
const Gr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Iu(e) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || i) && (e.attributes.fill = "black"), e;
}
function fw(e) {
  return e.tag === "g" ? e.children : [e];
}
var pw = {
  hooks() {
    return {
      parseNodeAttributes(e, i) {
        const r = i.getAttribute("data-fa-mask"), l = r ? Yo(r.split(" ").map((o) => o.trim())) : oh();
        return l.prefix || (l.prefix = en()), e.mask = l, e.maskId = i.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(i) {
      let {
        children: r,
        attributes: l,
        main: o,
        mask: s,
        maskId: u,
        transform: d
      } = i;
      const {
        width: f,
        icon: m
      } = o, {
        width: g,
        icon: v
      } = s, b = ay({
        transform: d,
        containerWidth: g,
        iconWidth: f
      }), M = {
        tag: "rect",
        attributes: O(O({}, Gr), {}, {
          fill: "white"
        })
      }, w = m.children ? {
        children: m.children.map(Iu)
      } : {}, y = {
        tag: "g",
        attributes: O({}, b.inner),
        children: [Iu(O({
          tag: m.tag,
          attributes: O(O({}, m.attributes), b.path)
        }, w))]
      }, B = {
        tag: "g",
        attributes: O({}, b.outer),
        children: [y]
      }, A = "mask-".concat(u || Di()), I = "clip-".concat(u || Di()), F = {
        tag: "mask",
        attributes: O(O({}, Gr), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [M, B]
      }, Q = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: fw(v)
        }, F]
      };
      return r.push(Q, {
        tag: "rect",
        attributes: O({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(A, ")")
        }, Gr)
      }), {
        children: r,
        attributes: l
      };
    };
  }
}, mw = {
  provides(e) {
    let i = !1;
    tn.matchMedia && (i = tn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], l = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: O(O({}, l), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = O(O({}, o), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: O(O({}, l), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return i || u.children.push({
        tag: "animate",
        attributes: O(O({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: O(O({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(u), r.push({
        tag: "path",
        attributes: O(O({}, l), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: i ? [] : [{
          tag: "animate",
          attributes: O(O({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), i || r.push({
        tag: "path",
        attributes: O(O({}, l), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: O(O({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, gw = {
  hooks() {
    return {
      parseNodeAttributes(e, i) {
        const r = i.getAttribute("data-fa-symbol"), l = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = l, e;
      }
    };
  }
}, vw = [uy, tw, ew, nw, iw, cw, hw, dw, pw, mw, gw];
My(vw, {
  mixoutsTo: $t
});
$t.noAuto;
const hh = $t.config, _w = $t.library;
$t.dom;
const Bo = $t.parse;
$t.findIconDefinition;
$t.toHtml;
const Aw = $t.icon;
$t.layer;
const yw = $t.text;
$t.counter;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ww = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, bw = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Ew = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Lw = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
function Bu(e, i) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    i && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function ue(e) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Bu(Object(r), !0).forEach(function(l) {
      jt(e, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bu(Object(r)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return e;
}
function Cw(e, i) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(e, i);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function xw(e) {
  var i = Cw(e, "string");
  return typeof i == "symbol" ? i : i + "";
}
function ko(e) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, ko(e);
}
function jt(e, i, r) {
  return i = xw(i), i in e ? Object.defineProperty(e, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[i] = r, e;
}
function Mw(e, i) {
  if (e == null) return {};
  var r = {};
  for (var l in e)
    if (Object.prototype.hasOwnProperty.call(e, l)) {
      if (i.indexOf(l) >= 0) continue;
      r[l] = e[l];
    }
  return r;
}
function Iw(e, i) {
  if (e == null) return {};
  var r = Mw(e, i), l, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      l = s[o], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
  }
  return r;
}
function pa(e) {
  return Bw(e) || kw(e) || Dw(e) || Tw();
}
function Bw(e) {
  if (Array.isArray(e)) return ma(e);
}
function kw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Dw(e, i) {
  if (e) {
    if (typeof e == "string") return ma(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ma(e, i);
  }
}
function ma(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, l = new Array(i); r < i; r++) l[r] = e[r];
  return l;
}
function Tw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Pw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dh = { exports: {} };
(function(e) {
  (function(i) {
    var r = function(A, I, F) {
      if (!m(I) || v(I) || b(I) || M(I) || f(I))
        return I;
      var Q, k = 0, U = 0;
      if (g(I))
        for (Q = [], U = I.length; k < U; k++)
          Q.push(r(A, I[k], F));
      else {
        Q = {};
        for (var G in I)
          Object.prototype.hasOwnProperty.call(I, G) && (Q[A(G, F)] = r(A, I[G], F));
      }
      return Q;
    }, l = function(A, I) {
      I = I || {};
      var F = I.separator || "_", Q = I.split || /(?=[A-Z])/;
      return A.split(Q).join(F);
    }, o = function(A) {
      return w(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(I, F) {
        return F ? F.toUpperCase() : "";
      }), A.substr(0, 1).toLowerCase() + A.substr(1));
    }, s = function(A) {
      var I = o(A);
      return I.substr(0, 1).toUpperCase() + I.substr(1);
    }, u = function(A, I) {
      return l(A, I).toLowerCase();
    }, d = Object.prototype.toString, f = function(A) {
      return typeof A == "function";
    }, m = function(A) {
      return A === Object(A);
    }, g = function(A) {
      return d.call(A) == "[object Array]";
    }, v = function(A) {
      return d.call(A) == "[object Date]";
    }, b = function(A) {
      return d.call(A) == "[object RegExp]";
    }, M = function(A) {
      return d.call(A) == "[object Boolean]";
    }, w = function(A) {
      return A = A - 0, A === A;
    }, y = function(A, I) {
      var F = I && "process" in I ? I.process : I;
      return typeof F != "function" ? A : function(Q, k) {
        return F(Q, A, k);
      };
    }, B = {
      camelize: o,
      decamelize: u,
      pascalize: s,
      depascalize: u,
      camelizeKeys: function(A, I) {
        return r(y(o, I), A);
      },
      decamelizeKeys: function(A, I) {
        return r(y(u, I), A, I);
      },
      pascalizeKeys: function(A, I) {
        return r(y(s, I), A);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = B : i.humps = B;
  })(Pw);
})(dh);
var Sw = dh.exports, Ow = ["class", "style"];
function Qw(e) {
  return e.split(";").map(function(i) {
    return i.trim();
  }).filter(function(i) {
    return i;
  }).reduce(function(i, r) {
    var l = r.indexOf(":"), o = Sw.camelize(r.slice(0, l)), s = r.slice(l + 1).trim();
    return i[o] = s, i;
  }, {});
}
function Fw(e) {
  return e.split(/\s+/).reduce(function(i, r) {
    return i[r] = !0, i;
  }, {});
}
function is(e) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var l = (e.children || []).map(function(f) {
    return is(f);
  }), o = Object.keys(e.attributes || {}).reduce(function(f, m) {
    var g = e.attributes[m];
    switch (m) {
      case "class":
        f.class = Fw(g);
        break;
      case "style":
        f.style = Qw(g);
        break;
      default:
        f.attrs[m] = g;
    }
    return f;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var s = r.style, u = s === void 0 ? {} : s, d = Iw(r, Ow);
  return Pt(e.tag, ue(ue(ue({}, i), {}, {
    class: o.class,
    style: ue(ue({}, o.style), u)
  }, o.attrs), d), l);
}
var fh = !1;
try {
  fh = process.env.NODE_ENV === "production";
} catch {
}
function Hw() {
  if (!fh && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Li(e, i) {
  return Array.isArray(i) && i.length > 0 || !Array.isArray(i) && i ? jt({}, e, i) : {};
}
function Rw(e) {
  var i, r = (i = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, jt(jt(jt(jt(jt(jt(jt(jt(jt(jt(i, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), jt(jt(i, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(r).map(function(l) {
    return r[l] ? l : null;
  }).filter(function(l) {
    return l;
  });
}
function ku(e) {
  if (e && ko(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Bo.icon)
    return Bo.icon(e);
  if (e === null)
    return null;
  if (ko(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var Gw = J({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(i) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(i) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(i) {
        return ["right", "left"].indexOf(i) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(i) {
        return [90, 180, 270].indexOf(Number.parseInt(i, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(i) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(i) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(i, r) {
    var l = r.attrs, o = P(function() {
      return ku(i.icon);
    }), s = P(function() {
      return Li("classes", Rw(i));
    }), u = P(function() {
      return Li("transform", typeof i.transform == "string" ? Bo.transform(i.transform) : i.transform);
    }), d = P(function() {
      return Li("mask", ku(i.mask));
    }), f = P(function() {
      return Aw(o.value, ue(ue(ue(ue({}, s.value), u.value), d.value), {}, {
        symbol: i.symbol,
        title: i.title,
        titleId: i.titleId,
        maskId: i.maskId
      }));
    });
    _t(f, function(g) {
      if (!g)
        return Hw("Could not find one or more icon(s)", o.value, d.value);
    }, {
      immediate: !0
    });
    var m = P(function() {
      return f.value ? is(f.value.abstract[0], {}, l) : null;
    });
    return function() {
      return m.value;
    };
  }
});
J({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(i, r) {
    var l = r.slots, o = hh.familyPrefix, s = P(function() {
      return ["".concat(o, "-layers")].concat(pa(i.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return Pt("div", {
        class: s.value
      }, l.default ? l.default() : []);
    };
  }
});
J({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(i) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(i) > -1;
      }
    }
  },
  setup: function(i, r) {
    var l = r.attrs, o = hh.familyPrefix, s = P(function() {
      return Li("classes", [].concat(pa(i.counter ? ["".concat(o, "-layers-counter")] : []), pa(i.position ? ["".concat(o, "-layers-").concat(i.position)] : [])));
    }), u = P(function() {
      return Li("transform", typeof i.transform == "string" ? Bo.transform(i.transform) : i.transform);
    }), d = P(function() {
      var m = yw(i.value.toString(), ue(ue({}, u.value), s.value)), g = m.abstract;
      return i.counter && (g[0].attributes.class = g[0].attributes.class.replace("fa-layers-text", "")), g[0];
    }), f = P(function() {
      return is(d.value, {}, l);
    });
    return function() {
      return f.value;
    };
  }
});
const Pi = /* @__PURE__ */ J({
  __name: "FontAwesomeIcon",
  props: {
    iconName: {}
  },
  setup(e) {
    return _w.add(Lw, ww, Ew, bw), (i, r) => (K(), vt(C(Gw), {
      icon: ["fas", i.iconName]
    }, null, 8, ["icon"]));
  }
}), zw = { class: "child-menu-row" }, Nw = { class: "child-layer-title" }, Uw = { class: "switch-component" }, Kw = { class: "child-layer-status" }, Yw = /* @__PURE__ */ J({
  __name: "ChildMenu",
  props: {
    data: {}
  },
  emits: ["onChildLayerToggle"],
  setup(e, { emit: i }) {
    const r = e, l = i, o = P({
      get: () => r.data.active,
      set: (u) => {
        s(u);
      }
    }), s = (u) => {
      const d = { ...r.data, active: u };
      l("onChildLayerToggle", d);
    };
    return Kt(() => {
      r.data.activeDefault && setTimeout(() => {
        s(r.data.activeDefault);
      }, 100);
    }), (u, d) => (K(), ht(we, null, [
      xt(C(lA), {
        index: u.data.key,
        class: "child-menu"
      }, {
        title: mt(() => [
          Bt("div", zw, [
            Bt("div", Nw, [
              Bt("span", {
                class: "child-layer-legend",
                style: Do({
                  borderColor: u.data.style.fillColor,
                  backgroundColor: u.data.style.color
                })
              }, null, 4),
              Bt("span", null, Se(u.data.name), 1)
            ]),
            Bt("span", Uw, [
              xt(C(Dc), {
                modelValue: o.value,
                "onUpdate:modelValue": d[0] || (d[0] = (f) => o.value = f),
                onClick: d[1] || (d[1] = _a(() => {
                }, ["stop"]))
              }, {
                "active-action": mt(() => [
                  xt(Pi, { iconName: "check" })
                ]),
                "inactive-action": mt(() => [
                  xt(Pi, { iconName: "xmark" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              Bt("span", Kw, Se(o.value ? u.data.toggle.active : u.data.toggle.inactive), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["index"]),
      xt(C(Vr), { class: "child-menu-divider-row" })
    ], 64));
  }
}), jw = { class: "parent-menu-row" }, Ww = { class: "parent-layer-title" }, qw = { class: "switch-component" }, Zw = { class: "parent-layer-status" }, Vw = /* @__PURE__ */ J({
  __name: "ParentMenu",
  props: {
    groupData: {}
  },
  emits: ["onChildLayerToggle", "onGroupLayerToggle"],
  setup(e, { emit: i }) {
    const r = e, l = i, o = j(r.groupData.layers), s = () => {
      l("onGroupLayerToggle", {
        ...r.groupData,
        layers: o.value
      });
    }, u = P({
      get: () => o.value.some((f) => f.active),
      set: (f) => {
        o.value = r.groupData.layers.map((m) => ({
          ...m,
          active: f
        })), s();
      }
    }), d = (f, m) => {
      o.value[m] = f, l("onChildLayerToggle", f);
    };
    return (f, m) => (K(), ht(we, null, [
      xt(C(uA), {
        index: f.groupData.key,
        class: "parent-menu"
      }, {
        title: mt(() => [
          Bt("div", jw, [
            Bt("div", Ww, Se(f.groupData.name), 1),
            Bt("span", qw, [
              xt(C(Dc), {
                modelValue: u.value,
                "onUpdate:modelValue": m[0] || (m[0] = (g) => u.value = g),
                onClick: m[1] || (m[1] = _a(() => {
                }, ["stop"]))
              }, {
                "active-action": mt(() => [
                  xt(Pi, { iconName: "check" })
                ]),
                "inactive-action": mt(() => [
                  xt(Pi, { iconName: "xmark" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              Bt("span", Zw, Se(u.value ? f.groupData.toggle.active : f.groupData.toggle.inactive), 1),
              xt(C(Vr), {
                class: "divider-bar",
                direction: "vertical"
              })
            ])
          ])
        ]),
        default: mt(() => [
          (K(!0), ht(we, null, Ou(o.value, (g, v) => (K(), ht(we, null, [
            g.name ? (K(), vt(Yw, {
              key: 0,
              data: g,
              onOnChildLayerToggle: (b) => d(b, v)
            }, null, 8, ["data", "onOnChildLayerToggle"])) : It("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["index"]),
      xt(C(Vr), { class: "parent-menu-divider-row" })
    ], 64));
  }
}), Jw = /* @__PURE__ */ J({
  __name: "LayerMenu",
  props: {
    layersConfig: {},
    options: {},
    map: {},
    layerControl: {}
  },
  emits: ["startLoading", "stopLoading", "onChildLayerToggle", "onGroupLayerToggle"],
  setup(e, { emit: i }) {
    const r = i, l = e, o = j(!1), s = j({}), u = P(() => {
      var y;
      const w = o.value ? "open" : "close";
      return {
        layerMenu: `layer-menu layer-menu-${((y = l.options) == null ? void 0 : y.size) || "medium"}`,
        menuButton: `map-menu-button map-menu-button-${w}`,
        customMenu: `map-custom-menu map-custom-menu-${w}`
      };
    }), d = P(() => o.value ? "chevron-left" : "chevron-right"), f = (w) => {
      v(w), r("onChildLayerToggle", w);
    }, m = (w) => {
      w.layers.forEach((y) => v(y)), r("onGroupLayerToggle", w);
    }, g = (w) => {
      const y = Vt.tileLayer.wms(w.baseUrl, {
        layers: w.layers,
        format: w.format || "image/png",
        transparent: w.transparent
      });
      return M(y), y;
    }, v = (w) => {
      if (s.value[w.key] && !w.active)
        return b(w);
      if (!w.active) return;
      const y = g(w);
      s.value[w.key] = y, y.addTo(l.map), l.layerControl.addOverlay(y, `${y.options.attribution}`);
    }, b = (w) => {
      l.map.removeLayer(s.value[w.key]), l.layerControl.removeLayer(s.value[w.key]), delete s.value[w.key];
    }, M = (w) => {
      w.on("loading", () => {
        r("startLoading");
      }), w.on("load", () => {
        r("stopLoading");
      }), w.on("error", () => {
        r("stopLoading");
      });
    };
    return (w, y) => (K(), ht("div", {
      class: Et(u.value.layerMenu)
    }, [
      xt(C(D_), {
        class: Et(u.value.menuButton),
        onClick: y[0] || (y[0] = (B) => o.value = !o.value)
      }, {
        default: mt(() => [
          xt(Pi, { iconName: d.value }, null, 8, ["iconName"])
        ]),
        _: 1
      }, 8, ["class"]),
      xt(C(sA), {
        class: Et(u.value.customMenu),
        mode: "vertical"
      }, {
        default: mt(() => [
          (K(!0), ht(we, null, Ou(l.layersConfig, (B) => (K(), vt(Vw, {
            groupData: B,
            onOnChildLayerToggle: f,
            onOnGroupLayerToggle: m
          }, null, 8, ["groupData"]))), 256))
        ]),
        _: 1
      }, 8, ["class"])
    ], 2));
  }
});
(function(e, i, r) {
  function l(o, s) {
    for (; (o = o.parentElement) && !o.classList.contains(s); ) ;
    return o;
  }
  L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = { draw: { toolbar: { actions: { title: "Cancel drawing", text: "Cancel" }, finish: { title: "Finish drawing", text: "Finish" }, undo: { title: "Delete last point drawn", text: "Delete last point" }, buttons: { polyline: "Draw a polyline", polygon: "Draw a polygon", rectangle: "Draw a rectangle", circle: "Draw a circle", marker: "Draw a marker", circlemarker: "Draw a circlemarker" } }, handlers: { circle: { tooltip: { start: "Click and drag to draw circle." }, radius: "Radius" }, circlemarker: { tooltip: { start: "Click map to place circle marker." } }, marker: { tooltip: { start: "Click map to place marker." } }, polygon: { tooltip: { start: "Click to start drawing shape.", cont: "Click to continue drawing shape.", end: "Click first point to close this shape." } }, polyline: { error: "<strong>Error:</strong> shape edges cannot cross!", tooltip: { start: "Click to start drawing line.", cont: "Click to continue drawing line.", end: "Click last point to finish line." } }, rectangle: { tooltip: { start: "Click and drag to draw rectangle." } }, simpleshape: { tooltip: { end: "Release mouse to finish drawing." } } } }, edit: { toolbar: { actions: { save: { title: "Save changes", text: "Save" }, cancel: { title: "Cancel editing, discards all changes", text: "Cancel" }, clearAll: { title: "Clear all layers", text: "Clear All" } }, buttons: { edit: "Edit layers", editDisabled: "No layers to edit", remove: "Delete layers", removeDisabled: "No layers to delete" } }, handlers: { edit: { tooltip: { text: "Drag handles or markers to edit features.", subtext: "Click cancel to undo changes." } }, remove: { tooltip: { text: "Click on a feature to remove." } } } } }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({ initialize: function(o, s) {
    this._map = o, this._container = o._container, this._overlayPane = o._panes.overlayPane, this._popupPane = o._panes.popupPane, s && s.shapeOptions && (s.shapeOptions = L.Util.extend({}, this.options.shapeOptions, s.shapeOptions)), L.setOptions(this, s);
    var u = L.version.split(".");
    parseInt(u[0], 10) === 1 && parseInt(u[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events);
  }, enable: function() {
    this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type }));
  }, disable: function() {
    this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (L.DomUtil.disableTextSelection(), o.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this));
  }, removeHooks: function() {
    this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this));
  }, setOptions: function(o) {
    L.setOptions(this, o);
  }, _fireCreatedEvent: function(o) {
    this._map.fire(L.Draw.Event.CREATED, { layer: o, layerType: this.type });
  }, _cancelDrawing: function(o) {
    o.keyCode === 27 && (this._map.fire("draw:canceled", { layerType: this.type }), this.disable());
  } }), L.Draw.Polyline = L.Draw.Feature.extend({ statics: { TYPE: "polyline" }, Poly: L.Polyline, options: { allowIntersection: !0, repeatMode: !1, drawError: { color: "#b00b00", timeout: 2500 }, icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), guidelineDistance: 20, maxGuideLineLength: 4e3, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !1, clickable: !0 }, metric: !0, feet: !0, nautic: !1, showLength: !0, zIndexOffset: 2e3, factor: 1, maxPoints: 0 }, initialize: function(o, s) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, s && s.drawError && (s.drawError = L.Util.extend({}, this.options.drawError, s.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, o, s);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup(), this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this);
  }, deleteLastVertex: function() {
    if (!(this._markers.length <= 1)) {
      var o = this._markers.pop(), s = this._poly, u = s.getLatLngs(), d = u.splice(-1, 1)[0];
      this._poly.setLatLngs(u), this._markerGroup.removeLayer(o), s.getLatLngs().length < 2 && this._map.removeLayer(s), this._vertexChanged(d, !1);
    }
  }, addVertex: function(o) {
    if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(o)) return void this._showErrorTooltip();
    this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(o)), this._poly.addLatLng(o), this._poly.getLatLngs().length === 2 && this._map.addLayer(this._poly), this._vertexChanged(o, !0);
  }, completeShape: function() {
    this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
  }, _finishShape: function() {
    var o = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(), s = this._poly.newLatLngIntersects(o[o.length - 1]);
    if (!this.options.allowIntersection && s || !this._shapeIsValid()) return void this._showErrorTooltip();
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _shapeIsValid: function() {
    return !0;
  }, _onZoomEnd: function() {
    this._markers !== null && this._updateGuide();
  }, _onMouseMove: function(o) {
    var s = this._map.mouseEventToLayerPoint(o.originalEvent), u = this._map.layerPointToLatLng(s);
    this._currentLatLng = u, this._updateTooltip(u), this._updateGuide(s), this._mouseMarker.setLatLng(u), L.DomEvent.preventDefault(o.originalEvent);
  }, _vertexChanged: function(o, s) {
    this._map.fire(L.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }), this._updateFinishHandler(), this._updateRunningMeasure(o, s), this._clearGuides(), this._updateTooltip();
  }, _onMouseDown: function(o) {
    if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
      this._onMouseMove(o), this._clickHandled = !0, this._disableNewMarkers();
      var s = o.originalEvent, u = s.clientX, d = s.clientY;
      this._startPoint.call(this, u, d);
    }
  }, _startPoint: function(o, s) {
    this._mouseDownOrigin = L.point(o, s);
  }, _onMouseUp: function(o) {
    var s = o.originalEvent, u = s.clientX, d = s.clientY;
    this._endPoint.call(this, u, d, o), this._clickHandled = null;
  }, _endPoint: function(o, s, u) {
    if (this._mouseDownOrigin) {
      var d = L.point(o, s).distanceTo(this._mouseDownOrigin), f = this._calculateFinishDistance(u.latlng);
      this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(u.latlng), this._finishShape()) : f < 10 && L.Browser.touch ? this._finishShape() : Math.abs(d) < 9 * (e.devicePixelRatio || 1) && this.addVertex(u.latlng), this._enableNewMarkers();
    }
    this._mouseDownOrigin = null;
  }, _onTouch: function(o) {
    var s, u, d = o.originalEvent;
    !d.touches || !d.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (s = d.touches[0].clientX, u = d.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, s, u), this._endPoint.call(this, s, u, o), this._touchHandled = null), this._clickHandled = null;
  }, _onMouseOut: function() {
    this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
  }, _calculateFinishDistance: function(o) {
    var s;
    if (this._markers.length > 0) {
      var u;
      if (this.type === L.Draw.Polyline.TYPE) u = this._markers[this._markers.length - 1];
      else {
        if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
        u = this._markers[0];
      }
      var d = this._map.latLngToContainerPoint(u.getLatLng()), f = new L.Marker(o, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset }), m = this._map.latLngToContainerPoint(f.getLatLng());
      s = d.distanceTo(m);
    } else s = 1 / 0;
    return s;
  }, _updateFinishHandler: function() {
    var o = this._markers.length;
    o > 1 && this._markers[o - 1].on("click", this._finishShape, this), o > 2 && this._markers[o - 2].off("click", this._finishShape, this);
  }, _createMarker: function(o) {
    var s = new L.Marker(o, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset });
    return this._markerGroup.addLayer(s), s;
  }, _updateGuide: function(o) {
    var s = this._markers ? this._markers.length : 0;
    s > 0 && (o = o || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[s - 1].getLatLng()), o));
  }, _updateTooltip: function(o) {
    var s = this._getTooltipText();
    o && this._tooltip.updatePosition(o), this._errorShown || this._tooltip.updateContent(s);
  }, _drawGuide: function(o, s) {
    var u, d, f, m = Math.floor(Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2))), g = this.options.guidelineDistance, v = this.options.maxGuideLineLength, b = m > v ? m - v : g;
    for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); b < m; b += this.options.guidelineDistance) u = b / m, d = { x: Math.floor(o.x * (1 - u) + u * s.x), y: Math.floor(o.y * (1 - u) + u * s.y) }, f = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), f.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(f, d);
  }, _updateGuideColor: function(o) {
    if (this._guidesContainer) for (var s = 0, u = this._guidesContainer.childNodes.length; s < u; s++) this._guidesContainer.childNodes[s].style.backgroundColor = o;
  }, _clearGuides: function() {
    if (this._guidesContainer) for (; this._guidesContainer.firstChild; ) this._guidesContainer.removeChild(this._guidesContainer.firstChild);
  }, _getTooltipText: function() {
    var o, s, u = this.options.showLength;
    return this._markers.length === 0 ? o = { text: L.drawLocal.draw.handlers.polyline.tooltip.start } : (s = u ? this._getMeasurementString() : "", o = this._markers.length === 1 ? { text: L.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: s } : { text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: s }), o;
  }, _updateRunningMeasure: function(o, s) {
    var u, d, f = this._markers.length;
    this._markers.length === 1 ? this._measurementRunningTotal = 0 : (u = f - (s ? 2 : 1), d = L.GeometryUtil.isVersion07x() ? o.distanceTo(this._markers[u].getLatLng()) * (this.options.factor || 1) : this._map.distance(o, this._markers[u].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += d * (s ? 1 : -1));
  }, _getMeasurementString: function() {
    var o, s = this._currentLatLng, u = this._markers[this._markers.length - 1].getLatLng();
    return o = L.GeometryUtil.isVersion07x() ? u && s && s.distanceTo ? this._measurementRunningTotal + s.distanceTo(u) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : u && s ? this._measurementRunningTotal + this._map.distance(s, u) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(o, this.options.metric, this.options.feet, this.options.nautic, this.options.precision);
  }, _showErrorTooltip: function() {
    this._errorShown = !0, this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({ color: this.options.drawError.color }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout);
  }, _hideErrorTooltip: function() {
    this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({ color: this.options.shapeOptions.color });
  }, _clearHideErrorTimeout: function() {
    this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null);
  }, _disableNewMarkers: function() {
    this._disableMarkers = !0;
  }, _enableNewMarkers: function() {
    setTimeout((function() {
      this._disableMarkers = !1;
    }).bind(this), 50);
  }, _cleanUpShape: function() {
    this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this);
  }, _fireCreatedEvent: function() {
    var o = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  } }), L.Draw.Polygon = L.Draw.Polyline.extend({ statics: { TYPE: "polygon" }, Poly: L.Polygon, options: { showArea: !1, showLength: !1, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, metric: !0, feet: !0, nautic: !1, precision: {} }, initialize: function(o, s) {
    L.Draw.Polyline.prototype.initialize.call(this, o, s), this.type = L.Draw.Polygon.TYPE;
  }, _updateFinishHandler: function() {
    var o = this._markers.length;
    o === 1 && this._markers[0].on("click", this._finishShape, this), o > 2 && (this._markers[o - 1].on("dblclick", this._finishShape, this), o > 3 && this._markers[o - 2].off("dblclick", this._finishShape, this));
  }, _getTooltipText: function() {
    var o, s;
    return this._markers.length === 0 ? o = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (o = L.drawLocal.draw.handlers.polygon.tooltip.cont, s = this._getMeasurementString()) : (o = L.drawLocal.draw.handlers.polygon.tooltip.end, s = this._getMeasurementString()), { text: o, subtext: s };
  }, _getMeasurementString: function() {
    var o = this._area, s = "";
    return o || this.options.showLength ? (this.options.showLength && (s = L.Draw.Polyline.prototype._getMeasurementString.call(this)), o && (s += "<br>" + L.GeometryUtil.readableArea(o, this.options.metric, this.options.precision)), s) : null;
  }, _shapeIsValid: function() {
    return this._markers.length >= 3;
  }, _vertexChanged: function(o, s) {
    var u;
    !this.options.allowIntersection && this.options.showArea && (u = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(u)), L.Draw.Polyline.prototype._vertexChanged.call(this, o, s);
  }, _cleanUpShape: function() {
    var o = this._markers.length;
    o > 0 && (this._markers[0].off("click", this._finishShape, this), o > 2 && this._markers[o - 1].off("dblclick", this._finishShape, this));
  } }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({ options: { repeatMode: !1 }, initialize: function(o, s) {
    this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, o, s);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({ text: this._initialLabelText }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), i.addEventListener("touchstart", L.DomEvent.preventDefault, { passive: !1 }));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(i, "mouseup", this._onMouseUp, this), L.DomEvent.off(i, "touchend", this._onMouseUp, this), i.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1;
  }, _getTooltipText: function() {
    return { text: this._endLabelText };
  }, _onMouseDown: function(o) {
    this._isDrawing = !0, this._startLatLng = o.latlng, L.DomEvent.on(i, "mouseup", this._onMouseUp, this).on(i, "touchend", this._onMouseUp, this).preventDefault(o.originalEvent);
  }, _onMouseMove: function(o) {
    var s = o.latlng;
    this._tooltip.updatePosition(s), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(s));
  }, _onMouseUp: function() {
    this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  } }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({ statics: { TYPE: "rectangle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showArea: !0, metric: !0 }, initialize: function(o, s) {
    this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, s);
  }, disable: function() {
    this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this));
  }, _onMouseUp: function(o) {
    if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void (this._isCurrentlyTwoClickDrawing = !0);
    this._isCurrentlyTwoClickDrawing && !l(o.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this);
  }, _drawShape: function(o) {
    this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, o)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, o), this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var o = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
  }, _getTooltipText: function() {
    var o, s, u, d = L.Draw.SimpleShape.prototype._getTooltipText.call(this), f = this._shape, m = this.options.showArea;
    return f && (o = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), s = L.GeometryUtil.geodesicArea(o), u = m ? L.GeometryUtil.readableArea(s, this.options.metric) : ""), { text: d.text, subtext: u };
  } }), L.Draw.Marker = L.Draw.Feature.extend({ statics: { TYPE: "marker" }, options: { icon: new L.Icon.Default(), repeatMode: !1, zIndexOffset: 2e3 }, initialize: function(o, s) {
    this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, s);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({ text: this._initialLabelText }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this));
  }, _onMouseMove: function(o) {
    var s = o.latlng;
    this._tooltip.updatePosition(s), this._mouseMarker.setLatLng(s), this._marker ? (s = this._mouseMarker.getLatLng(), this._marker.setLatLng(s)) : (this._marker = this._createMarker(s), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker));
  }, _createMarker: function(o) {
    return new L.Marker(o, { icon: this.options.icon, zIndexOffset: this.options.zIndexOffset });
  }, _onClick: function() {
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _onTouch: function(o) {
    this._onMouseMove(o), this._onClick();
  }, _fireCreatedEvent: function() {
    var o = new L.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  } }), L.Draw.CircleMarker = L.Draw.Marker.extend({ statics: { TYPE: "circlemarker" }, options: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0, zIndexOffset: 2e3 }, initialize: function(o, s) {
    this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, s);
  }, _fireCreatedEvent: function() {
    var o = new L.CircleMarker(this._marker.getLatLng(), this.options);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  }, _createMarker: function(o) {
    return new L.CircleMarker(o, this.options);
  } }), L.Draw.Circle = L.Draw.SimpleShape.extend({ statics: { TYPE: "circle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showRadius: !0, metric: !0, feet: !0, nautic: !1 }, initialize: function(o, s) {
    this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, s);
  }, _drawShape: function(o) {
    if (L.GeometryUtil.isVersion07x()) var s = this._startLatLng.distanceTo(o);
    else var s = this._map.distance(this._startLatLng, o);
    this._shape ? this._shape.setRadius(s) : (this._shape = new L.Circle(this._startLatLng, s, this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var o = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
  }, _onMouseMove: function(o) {
    var s, u = o.latlng, d = this.options.showRadius, f = this.options.metric;
    if (this._tooltip.updatePosition(u), this._isDrawing) {
      this._drawShape(u), s = this._shape.getRadius().toFixed(1);
      var m = "";
      d && (m = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(s, f, this.options.feet, this.options.nautic)), this._tooltip.updateContent({ text: this._endLabelText, subtext: m });
    }
  } }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({ initialize: function(o, s) {
    this._marker = o, L.setOptions(this, s);
  }, addHooks: function() {
    var o = this._marker;
    o.dragging.enable(), o.on("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
  }, removeHooks: function() {
    var o = this._marker;
    o.dragging.disable(), o.off("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
  }, _onDragEnd: function(o) {
    var s = o.target;
    s.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: s });
  }, _toggleMarkerHighlight: function() {
    var o = this._marker._icon;
    o && (o.style.display = "none", L.DomUtil.hasClass(o, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, -4)) : (L.DomUtil.addClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, 4)), o.style.display = "");
  }, _offsetMarker: function(o, s) {
    var u = parseInt(o.style.marginTop, 10) - s, d = parseInt(o.style.marginLeft, 10) - s;
    o.style.marginTop = u + "px", o.style.marginLeft = d + "px";
  } }), L.Marker.addInitHook(function() {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({ initialize: function(o) {
    this.latlngs = [o._latlngs], o._holes && (this.latlngs = this.latlngs.concat(o._holes)), this._poly = o, this._poly.on("revert-edited", this._updateLatLngs, this);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs;
  }, _eachVertexHandler: function(o) {
    for (var s = 0; s < this._verticesHandlers.length; s++) o(this._verticesHandlers[s]);
  }, addHooks: function() {
    this._initHandlers(), this._eachVertexHandler(function(o) {
      o.addHooks();
    });
  }, removeHooks: function() {
    this._eachVertexHandler(function(o) {
      o.removeHooks();
    });
  }, updateMarkers: function() {
    this._eachVertexHandler(function(o) {
      o.updateMarkers();
    });
  }, _initHandlers: function() {
    this._verticesHandlers = [];
    for (var o = 0; o < this.latlngs.length; o++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[o], this._poly.options.poly));
  }, _updateLatLngs: function(o) {
    this.latlngs = [o.layer._latlngs], o.layer._holes && (this.latlngs = this.latlngs.concat(o.layer._holes));
  } }), L.Edit.PolyVerticesEdit = L.Handler.extend({ options: { icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), drawError: { color: "#b00b00", timeout: 1e3 } }, initialize: function(o, s, u) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = o, u && u.drawError && (u.drawError = L.Util.extend({}, this.options.drawError, u.drawError)), this._latlngs = s, L.setOptions(this, u);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
  }, addHooks: function() {
    var o = this._poly, s = o._path;
    o instanceof L.Polygon || (o.options.fill = !1, o.options.editing && (o.options.editing.fill = !1)), s && o.options.editing && o.options.editing.className && (o.options.original.className && o.options.original.className.split(" ").forEach(function(u) {
      L.DomUtil.removeClass(s, u);
    }), o.options.editing.className.split(" ").forEach(function(u) {
      L.DomUtil.addClass(s, u);
    })), o.setStyle(o.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup));
  }, removeHooks: function() {
    var o = this._poly, s = o._path;
    s && o.options.editing && o.options.editing.className && (o.options.editing.className.split(" ").forEach(function(u) {
      L.DomUtil.removeClass(s, u);
    }), o.options.original.className && o.options.original.className.split(" ").forEach(function(u) {
      L.DomUtil.addClass(s, u);
    })), o.setStyle(o.options.original), o._map && (o._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._markers = [];
    var o, s, u, d, f = this._defaultShape();
    for (o = 0, u = f.length; o < u; o++) d = this._createMarker(f[o], o), d.on("click", this._onMarkerClick, this), d.on("contextmenu", this._onContextMenu, this), this._markers.push(d);
    var m, g;
    for (o = 0, s = u - 1; o < u; s = o++) (o !== 0 || L.Polygon && this._poly instanceof L.Polygon) && (m = this._markers[s], g = this._markers[o], this._createMiddleMarker(m, g), this._updatePrevNext(m, g));
  }, _createMarker: function(o, s) {
    var u = new L.Marker.Touch(o, { draggable: !0, icon: this.options.icon });
    return u._origLatLng = o, u._index = s, u.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(u), u;
  }, _onMarkerDragStart: function() {
    this._poly.fire("editstart");
  }, _spliceLatLngs: function() {
    var o = this._defaultShape(), s = [].splice.apply(o, arguments);
    return this._poly._convertLatLngs(o, !0), this._poly.redraw(), s;
  }, _removeMarker: function(o) {
    var s = o._index;
    this._markerGroup.removeLayer(o), this._markers.splice(s, 1), this._spliceLatLngs(s, 1), this._updateIndexes(s, -1), o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this);
  }, _fireEdit: function() {
    this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, { layers: this._markerGroup, poly: this._poly });
  }, _onMarkerDrag: function(o) {
    var s = o.target, u = this._poly, d = L.LatLngUtil.cloneLatLng(s._origLatLng);
    if (L.extend(s._origLatLng, s._latlng), u.options.poly) {
      var f = u._map._editTooltip;
      if (!u.options.poly.allowIntersection && u.intersects()) {
        L.extend(s._origLatLng, d), s.setLatLng(d);
        var m = u.options.color;
        u.setStyle({ color: this.options.drawError.color }), f && f.updateContent({ text: L.drawLocal.draw.handlers.polyline.error }), setTimeout(function() {
          u.setStyle({ color: m }), f && f.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext });
        }, 1e3);
      }
    }
    s._middleLeft && s._middleLeft.setLatLng(this._getMiddleLatLng(s._prev, s)), s._middleRight && s._middleRight.setLatLng(this._getMiddleLatLng(s, s._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
    var g = this._poly.getLatLngs();
    this._poly._convertLatLngs(g, !0), this._poly.redraw(), this._poly.fire("editdrag");
  }, _onMarkerClick: function(o) {
    var s = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, u = o.target;
    this._defaultShape().length < s || (this._removeMarker(u), this._updatePrevNext(u._prev, u._next), u._middleLeft && this._markerGroup.removeLayer(u._middleLeft), u._middleRight && this._markerGroup.removeLayer(u._middleRight), u._prev && u._next ? this._createMiddleMarker(u._prev, u._next) : u._prev ? u._next || (u._prev._middleRight = null) : u._next._middleLeft = null, this._fireEdit());
  }, _onContextMenu: function(o) {
    var s = o.target;
    this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, { marker: s, layers: this._markerGroup, poly: this._poly }), L.DomEvent.stopPropagation;
  }, _onTouchMove: function(o) {
    var s = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), u = this._map.layerPointToLatLng(s), d = o.target;
    L.extend(d._origLatLng, u), d._middleLeft && d._middleLeft.setLatLng(this._getMiddleLatLng(d._prev, d)), d._middleRight && d._middleRight.setLatLng(this._getMiddleLatLng(d, d._next)), this._poly.redraw(), this.updateMarkers();
  }, _updateIndexes: function(o, s) {
    this._markerGroup.eachLayer(function(u) {
      u._index > o && (u._index += s);
    });
  }, _createMiddleMarker: function(o, s) {
    var u, d, f, m = this._getMiddleLatLng(o, s), g = this._createMarker(m);
    g.setOpacity(0.6), o._middleRight = s._middleLeft = g, d = function() {
      g.off("touchmove", d, this);
      var v = s._index;
      g._index = v, g.off("click", u, this).on("click", this._onMarkerClick, this), m.lat = g.getLatLng().lat, m.lng = g.getLatLng().lng, this._spliceLatLngs(v, 0, m), this._markers.splice(v, 0, g), g.setOpacity(1), this._updateIndexes(v, 1), s._index++, this._updatePrevNext(o, g), this._updatePrevNext(g, s), this._poly.fire("editstart");
    }, f = function() {
      g.off("dragstart", d, this), g.off("dragend", f, this), g.off("touchmove", d, this), this._createMiddleMarker(o, g), this._createMiddleMarker(g, s);
    }, u = function() {
      d.call(this), f.call(this), this._fireEdit();
    }, g.on("click", u, this).on("dragstart", d, this).on("dragend", f, this).on("touchmove", d, this), this._markerGroup.addLayer(g);
  }, _updatePrevNext: function(o, s) {
    o && (o._next = s), s && (s._prev = o);
  }, _getMiddleLatLng: function(o, s) {
    var u = this._poly._map, d = u.project(o.getLatLng()), f = u.project(s.getLatLng());
    return u.unproject(d._add(f)._divideBy(2));
  } }), L.Polyline.addInitHook(function() {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    }));
  }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({ options: { moveIcon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move" }), resizeIcon: new L.DivIcon({
    iconSize: new L.Point(8, 8),
    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
  }), touchMoveIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon" }), touchResizeIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon" }) }, initialize: function(o, s) {
    L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = o, L.Util.setOptions(this, s);
  }, addHooks: function() {
    var o = this._shape;
    this._shape._map && (this._map = this._shape._map, o.setStyle(o.options.editing), o._map && (this._map = o._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)));
  }, removeHooks: function() {
    var o = this._shape;
    if (o.setStyle(o.options.original), o._map) {
      this._unbindMarker(this._moveMarker);
      for (var s = 0, u = this._resizeMarkers.length; s < u; s++) this._unbindMarker(this._resizeMarkers[s]);
      this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup;
    }
    this._map = null;
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._createMoveMarker(), this._createResizeMarker();
  }, _createMoveMarker: function() {
  }, _createResizeMarker: function() {
  }, _createMarker: function(o, s) {
    var u = new L.Marker.Touch(o, { draggable: !0, icon: s, zIndexOffset: 10 });
    return this._bindMarker(u), this._markerGroup.addLayer(u), u;
  }, _bindMarker: function(o) {
    o.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this);
  }, _unbindMarker: function(o) {
    o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this);
  }, _onMarkerDragStart: function(o) {
    o.target.setOpacity(0), this._shape.fire("editstart");
  }, _fireEdit: function() {
    this._shape.edited = !0, this._shape.fire("edit");
  }, _onMarkerDrag: function(o) {
    var s = o.target, u = s.getLatLng();
    s === this._moveMarker ? this._move(u) : this._resize(u), this._shape.redraw(), this._shape.fire("editdrag");
  }, _onMarkerDragEnd: function(o) {
    o.target.setOpacity(1), this._fireEdit();
  }, _onTouchStart: function(o) {
    if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o), typeof this._getCorners == "function") {
      var s = this._getCorners(), u = o.target, d = u._cornerIndex;
      u.setOpacity(0), this._oppositeCorner = s[(d + 2) % 4], this._toggleCornerMarkers(0, d);
    }
    this._shape.fire("editstart");
  }, _onTouchMove: function(o) {
    var s = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), u = this._map.layerPointToLatLng(s);
    return o.target === this._moveMarker ? this._move(u) : this._resize(u), this._shape.redraw(), !1;
  }, _onTouchEnd: function(o) {
    o.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
  }, _move: function() {
  }, _resize: function() {
  } }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var o = this._shape.getBounds(), s = o.getCenter();
    this._moveMarker = this._createMarker(s, this.options.moveIcon);
  }, _createResizeMarker: function() {
    var o = this._getCorners();
    this._resizeMarkers = [];
    for (var s = 0, u = o.length; s < u; s++) this._resizeMarkers.push(this._createMarker(o[s], this.options.resizeIcon)), this._resizeMarkers[s]._cornerIndex = s;
  }, _onMarkerDragStart: function(o) {
    L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o);
    var s = this._getCorners(), u = o.target, d = u._cornerIndex;
    this._oppositeCorner = s[(d + 2) % 4], this._toggleCornerMarkers(0, d);
  }, _onMarkerDragEnd: function(o) {
    var s, u, d = o.target;
    d === this._moveMarker && (s = this._shape.getBounds(), u = s.getCenter(), d.setLatLng(u)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, o);
  }, _move: function(o) {
    for (var s, u = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), d = this._shape.getBounds(), f = d.getCenter(), m = [], g = 0, v = u.length; g < v; g++) s = [u[g].lat - f.lat, u[g].lng - f.lng], m.push([o.lat + s[0], o.lng + s[1]]);
    this._shape.setLatLngs(m), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  }, _resize: function(o) {
    var s;
    this._shape.setBounds(L.latLngBounds(o, this._oppositeCorner)), s = this._shape.getBounds(), this._moveMarker.setLatLng(s.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  }, _getCorners: function() {
    var o = this._shape.getBounds();
    return [o.getNorthWest(), o.getNorthEast(), o.getSouthEast(), o.getSouthWest()];
  }, _toggleCornerMarkers: function(o) {
    for (var s = 0, u = this._resizeMarkers.length; s < u; s++) this._resizeMarkers[s].setOpacity(o);
  }, _repositionCornerMarkers: function() {
    for (var o = this._getCorners(), s = 0, u = this._resizeMarkers.length; s < u; s++) this._resizeMarkers[s].setLatLng(o[s]);
  } }), L.Rectangle.addInitHook(function() {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var o = this._shape.getLatLng();
    this._moveMarker = this._createMarker(o, this.options.moveIcon);
  }, _createResizeMarker: function() {
    this._resizeMarkers = [];
  }, _move: function(o) {
    if (this._resizeMarkers.length) {
      var s = this._getResizeMarkerPoint(o);
      this._resizeMarkers[0].setLatLng(s);
    }
    this._shape.setLatLng(o), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  } }), L.CircleMarker.addInitHook(function() {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    });
  }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({ _createResizeMarker: function() {
    var o = this._shape.getLatLng(), s = this._getResizeMarkerPoint(o);
    this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(s, this.options.resizeIcon));
  }, _getResizeMarkerPoint: function(o) {
    var s = this._shape._radius * Math.cos(Math.PI / 4), u = this._map.project(o);
    return this._map.unproject([u.x + s, u.y - s]);
  }, _resize: function(o) {
    var s = this._moveMarker.getLatLng();
    L.GeometryUtil.isVersion07x() ? radius = s.distanceTo(o) : radius = this._map.distance(s, o), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic) }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  } }), L.Circle.addInitHook(function() {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable());
  }), L.Map.mergeOptions({ touchExtend: !0 }), L.Map.TouchExtend = L.Handler.extend({ initialize: function(o) {
    this._map = o, this._container = o._container, this._pane = o._panes.overlayPane;
  }, addHooks: function() {
    L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this));
  }, removeHooks: function() {
    L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this));
  }, _touchEvent: function(o, s) {
    var u = {};
    if (o.touches !== void 0) {
      if (!o.touches.length) return;
      u = o.touches[0];
    } else if (o.pointerType !== "touch" || (u = o, !this._filterClick(o))) return;
    var d = this._map.mouseEventToContainerPoint(u), f = this._map.mouseEventToLayerPoint(u), m = this._map.layerPointToLatLng(f);
    this._map.fire(s, { latlng: m, layerPoint: f, containerPoint: d, pageX: u.pageX, pageY: u.pageY, originalEvent: o });
  }, _filterClick: function(o) {
    var s = o.timeStamp || o.originalEvent.timeStamp, u = L.DomEvent._lastClick && s - L.DomEvent._lastClick;
    return u && u > 100 && u < 500 || o.target._simulatedClick && !o._simulated ? (L.DomEvent.stop(o), !1) : (L.DomEvent._lastClick = s, !0);
  }, _onTouchStart: function(o) {
    this._map._loaded && this._touchEvent(o, "touchstart");
  }, _onTouchEnd: function(o) {
    this._map._loaded && this._touchEvent(o, "touchend");
  }, _onTouchCancel: function(o) {
    if (this._map._loaded) {
      var s = "touchcancel";
      this._detectIE() && (s = "pointercancel"), this._touchEvent(o, s);
    }
  }, _onTouchLeave: function(o) {
    this._map._loaded && this._touchEvent(o, "touchleave");
  }, _onTouchMove: function(o) {
    this._map._loaded && this._touchEvent(o, "touchmove");
  }, _detectIE: function() {
    var o = e.navigator.userAgent, s = o.indexOf("MSIE ");
    if (s > 0) return parseInt(o.substring(s + 5, o.indexOf(".", s)), 10);
    if (o.indexOf("Trident/") > 0) {
      var u = o.indexOf("rv:");
      return parseInt(o.substring(u + 3, o.indexOf(".", u)), 10);
    }
    var d = o.indexOf("Edge/");
    return d > 0 && parseInt(o.substring(d + 5, o.indexOf(".", d)), 10);
  } }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({ _initInteraction: function() {
    return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy();
  }, _initInteractionLegacy: function() {
    if (this.options.clickable) {
      var o = this._icon, s = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
      this._detectIE ? s.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : s.concat(["touchcancel"]), L.DomUtil.addClass(o, "leaflet-clickable"), L.DomEvent.on(o, "click", this._onMouseClick, this), L.DomEvent.on(o, "keypress", this._onKeyPress, this);
      for (var u = 0; u < s.length; u++) L.DomEvent.on(o, s[u], this._fireMouseEvent, this);
      L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
    }
  }, _detectIE: function() {
    var o = e.navigator.userAgent, s = o.indexOf("MSIE ");
    if (s > 0) return parseInt(o.substring(s + 5, o.indexOf(".", s)), 10);
    if (o.indexOf("Trident/") > 0) {
      var u = o.indexOf("rv:");
      return parseInt(o.substring(u + 3, o.indexOf(".", u)), 10);
    }
    var d = o.indexOf("Edge/");
    return d > 0 && parseInt(o.substring(d + 5, o.indexOf(".", d)), 10);
  } }), L.LatLngUtil = { cloneLatLngs: function(o) {
    for (var s = [], u = 0, d = o.length; u < d; u++) Array.isArray(o[u]) ? s.push(L.LatLngUtil.cloneLatLngs(o[u])) : s.push(this.cloneLatLng(o[u]));
    return s;
  }, cloneLatLng: function(o) {
    return L.latLng(o.lat, o.lng);
  } }, function() {
    var o = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, { geodesicArea: function(s) {
      var u, d, f = s.length, m = 0, g = Math.PI / 180;
      if (f > 2) {
        for (var v = 0; v < f; v++) u = s[v], d = s[(v + 1) % f], m += (d.lng - u.lng) * g * (2 + Math.sin(u.lat * g) + Math.sin(d.lat * g));
        m = 6378137 * m * 6378137 / 2;
      }
      return Math.abs(m);
    }, formattedNumber: function(s, u) {
      var d = parseFloat(s).toFixed(u), f = L.drawLocal.format && L.drawLocal.format.numeric, m = f && f.delimiters, g = m && m.thousands, v = m && m.decimal;
      if (g || v) {
        var b = d.split(".");
        d = g ? b[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + g) : b[0], v = v || ".", b.length > 1 && (d = d + v + b[1]);
      }
      return d;
    }, readableArea: function(s, u, g) {
      var f, m, g = L.Util.extend({}, o, g);
      return u ? (m = ["ha", "m"], type = typeof u, type === "string" ? m = [u] : type !== "boolean" && (m = u), f = s >= 1e6 && m.indexOf("km") !== -1 ? L.GeometryUtil.formattedNumber(1e-6 * s, g.km) + " km²" : s >= 1e4 && m.indexOf("ha") !== -1 ? L.GeometryUtil.formattedNumber(1e-4 * s, g.ha) + " ha" : L.GeometryUtil.formattedNumber(s, g.m) + " m²") : (s /= 0.836127, f = s >= 3097600 ? L.GeometryUtil.formattedNumber(s / 3097600, g.mi) + " mi²" : s >= 4840 ? L.GeometryUtil.formattedNumber(s / 4840, g.ac) + " acres" : L.GeometryUtil.formattedNumber(s, g.yd) + " yd²"), f;
    }, readableDistance: function(s, u, d, f, v) {
      var g, v = L.Util.extend({}, o, v);
      switch (u ? typeof u == "string" ? u : "metric" : d ? "feet" : f ? "nauticalMile" : "yards") {
        case "metric":
          g = s > 1e3 ? L.GeometryUtil.formattedNumber(s / 1e3, v.km) + " km" : L.GeometryUtil.formattedNumber(s, v.m) + " m";
          break;
        case "feet":
          s *= 3.28083, g = L.GeometryUtil.formattedNumber(s, v.ft) + " ft";
          break;
        case "nauticalMile":
          s *= 0.53996, g = L.GeometryUtil.formattedNumber(s / 1e3, v.nm) + " nm";
          break;
        case "yards":
        default:
          s *= 1.09361, g = s > 1760 ? L.GeometryUtil.formattedNumber(s / 1760, v.mi) + " miles" : L.GeometryUtil.formattedNumber(s, v.yd) + " yd";
      }
      return g;
    }, isVersion07x: function() {
      var s = L.version.split(".");
      return parseInt(s[0], 10) === 0 && parseInt(s[1], 10) === 7;
    } });
  }(), L.Util.extend(L.LineUtil, { segmentsIntersect: function(o, s, u, d) {
    return this._checkCounterclockwise(o, u, d) !== this._checkCounterclockwise(s, u, d) && this._checkCounterclockwise(o, s, u) !== this._checkCounterclockwise(o, s, d);
  }, _checkCounterclockwise: function(o, s, u) {
    return (u.y - o.y) * (s.x - o.x) > (s.y - o.y) * (u.x - o.x);
  } }), L.Polyline.include({ intersects: function() {
    var o, s, u, d = this._getProjectedPoints(), f = d ? d.length : 0;
    if (this._tooFewPointsForIntersection()) return !1;
    for (o = f - 1; o >= 3; o--) if (s = d[o - 1], u = d[o], this._lineSegmentsIntersectsRange(s, u, o - 2)) return !0;
    return !1;
  }, newLatLngIntersects: function(o, s) {
    return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(o), s);
  }, newPointIntersects: function(o, s) {
    var u = this._getProjectedPoints(), d = u ? u.length : 0, f = u ? u[d - 1] : null, m = d - 2;
    return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(f, o, m, s ? 1 : 0);
  }, _tooFewPointsForIntersection: function(o) {
    var s = this._getProjectedPoints(), u = s ? s.length : 0;
    return u += o || 0, !s || u <= 3;
  }, _lineSegmentsIntersectsRange: function(o, s, u, d) {
    var f, m, g = this._getProjectedPoints();
    d = d || 0;
    for (var v = u; v > d; v--) if (f = g[v - 1], m = g[v], L.LineUtil.segmentsIntersect(o, s, f, m)) return !0;
    return !1;
  }, _getProjectedPoints: function() {
    if (!this._defaultShape) return this._originalPoints;
    for (var o = [], s = this._defaultShape(), u = 0; u < s.length; u++) o.push(this._map.latLngToLayerPoint(s[u]));
    return o;
  } }), L.Polygon.include({ intersects: function() {
    var o, s, u, d, f = this._getProjectedPoints();
    return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (o = f.length, s = f[0], u = f[o - 1], d = o - 2, this._lineSegmentsIntersectsRange(u, s, d, 1)));
  } }), L.Control.Draw = L.Control.extend({ options: { position: "topleft", draw: {}, edit: !1 }, initialize: function(o) {
    if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
    L.Control.prototype.initialize.call(this, o);
    var s;
    this._toolbars = {}, L.DrawToolbar && this.options.draw && (s = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = s, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (s = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = s, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this;
  }, onAdd: function(o) {
    var s, u = L.DomUtil.create("div", "leaflet-draw"), d = !1;
    for (var f in this._toolbars) this._toolbars.hasOwnProperty(f) && (s = this._toolbars[f].addToolbar(o)) && (d || (L.DomUtil.hasClass(s, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(s.childNodes[0], "leaflet-draw-toolbar-top"), d = !0), u.appendChild(s));
    return u;
  }, onRemove: function() {
    for (var o in this._toolbars) this._toolbars.hasOwnProperty(o) && this._toolbars[o].removeToolbar();
  }, setDrawingOptions: function(o) {
    for (var s in this._toolbars) this._toolbars[s] instanceof L.DrawToolbar && this._toolbars[s].setOptions(o);
  }, _toolbarEnabled: function(o) {
    var s = o.target;
    for (var u in this._toolbars) this._toolbars[u] !== s && this._toolbars[u].disable();
  } }), L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }), L.Map.addInitHook(function() {
    this.options.drawControl && (this.drawControl = new L.Control.Draw(), this.addControl(this.drawControl));
  }), L.Toolbar = L.Class.extend({ initialize: function(o) {
    L.setOptions(this, o), this._modes = {}, this._actionButtons = [], this._activeMode = null;
    var s = L.version.split(".");
    parseInt(s[0], 10) === 1 && parseInt(s[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events);
  }, enabled: function() {
    return this._activeMode !== null;
  }, disable: function() {
    this.enabled() && this._activeMode.handler.disable();
  }, addToolbar: function(o) {
    var s, u = L.DomUtil.create("div", "leaflet-draw-section"), d = 0, f = this._toolbarClass || "", m = this.getModeHandlers(o);
    for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = o, s = 0; s < m.length; s++) m[s].enabled && this._initModeHandler(m[s].handler, this._toolbarContainer, d++, f, m[s].title);
    if (d) return this._lastButtonIndex = --d, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), u.appendChild(this._toolbarContainer), u.appendChild(this._actionsContainer), u;
  }, removeToolbar: function() {
    for (var o in this._modes) this._modes.hasOwnProperty(o) && (this._disposeButton(this._modes[o].button, this._modes[o].handler.enable, this._modes[o].handler), this._modes[o].handler.disable(), this._modes[o].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
    this._modes = {};
    for (var s = 0, u = this._actionButtons.length; s < u; s++) this._disposeButton(this._actionButtons[s].button, this._actionButtons[s].callback, this);
    this._actionButtons = [], this._actionsContainer = null;
  }, _initModeHandler: function(o, s, u, d, f) {
    var m = o.type;
    this._modes[m] = {}, this._modes[m].handler = o, this._modes[m].button = this._createButton({ type: m, title: f, className: d + "-" + m, container: s, callback: this._modes[m].handler.enable, context: this._modes[m].handler }), this._modes[m].buttonIndex = u, this._modes[m].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this);
  }, _detectIOS: function() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream;
  }, _createButton: function(o) {
    var s = L.DomUtil.create("a", o.className || "", o.container), u = L.DomUtil.create("span", "sr-only", o.container);
    s.href = "#", s.appendChild(u), o.title && (s.title = o.title, u.innerHTML = o.title), o.text && (s.innerHTML = o.text, u.innerHTML = o.text);
    var d = this._detectIOS() ? "touchstart" : "click";
    return L.DomEvent.on(s, "click", L.DomEvent.stopPropagation).on(s, "mousedown", L.DomEvent.stopPropagation).on(s, "dblclick", L.DomEvent.stopPropagation).on(s, "touchstart", L.DomEvent.stopPropagation).on(s, "click", L.DomEvent.preventDefault).on(s, d, o.callback, o.context), s;
  }, _disposeButton: function(o, s) {
    var u = this._detectIOS() ? "touchstart" : "click";
    L.DomEvent.off(o, "click", L.DomEvent.stopPropagation).off(o, "mousedown", L.DomEvent.stopPropagation).off(o, "dblclick", L.DomEvent.stopPropagation).off(o, "touchstart", L.DomEvent.stopPropagation).off(o, "click", L.DomEvent.preventDefault).off(o, u, s);
  }, _handlerActivated: function(o) {
    this.disable(), this._activeMode = this._modes[o.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable");
  }, _handlerDeactivated: function() {
    this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable");
  }, _createActions: function(o) {
    var s, u, d, f, m = this._actionsContainer, g = this.getActions(o), v = g.length;
    for (u = 0, d = this._actionButtons.length; u < d; u++) this._disposeButton(this._actionButtons[u].button, this._actionButtons[u].callback);
    for (this._actionButtons = []; m.firstChild; ) m.removeChild(m.firstChild);
    for (var b = 0; b < v; b++) "enabled" in g[b] && !g[b].enabled || (s = L.DomUtil.create("li", "", m), f = this._createButton({ title: g[b].title, text: g[b].text, container: s, callback: g[b].callback, context: g[b].context }), this._actionButtons.push({ button: f, callback: g[b].callback }));
  }, _showActionsToolbar: function() {
    var o = this._activeMode.buttonIndex, s = this._lastButtonIndex, u = this._activeMode.button.offsetTop - 1;
    this._createActions(this._activeMode.handler), this._actionsContainer.style.top = u + "px", o === 0 && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), o === s && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED);
  }, _hideActionsToolbar: function() {
    this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED);
  } }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({ initialize: function(o) {
    this._map = o, this._popupPane = o._panes.popupPane, this._visible = !1, this._container = o.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this);
  }, dispose: function() {
    this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null);
  }, updateContent: function(o) {
    return this._container ? (o.subtext = o.subtext || "", o.subtext.length !== 0 || this._singleLineLabel ? o.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (o.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + o.subtext + "</span><br />" : "") + "<span>" + o.text + "</span>", o.text || o.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this;
  }, updatePosition: function(o) {
    var s = this._map.latLngToLayerPoint(o), u = this._container;
    return this._container && (this._visible && (u.style.visibility = "inherit"), L.DomUtil.setPosition(u, s)), this;
  }, showAsError: function() {
    return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, removeError: function() {
    return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, _onMouseOut: function() {
    this._container && (this._container.style.visibility = "hidden");
  } }), L.DrawToolbar = L.Toolbar.extend({ statics: { TYPE: "draw" }, options: { polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {} }, initialize: function(o) {
    for (var s in this.options) this.options.hasOwnProperty(s) && o[s] && (o[s] = L.extend({}, this.options[s], o[s]));
    this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, o);
  }, getModeHandlers: function(o) {
    return [{ enabled: this.options.polyline, handler: new L.Draw.Polyline(o, this.options.polyline), title: L.drawLocal.draw.toolbar.buttons.polyline }, { enabled: this.options.polygon, handler: new L.Draw.Polygon(o, this.options.polygon), title: L.drawLocal.draw.toolbar.buttons.polygon }, { enabled: this.options.rectangle, handler: new L.Draw.Rectangle(o, this.options.rectangle), title: L.drawLocal.draw.toolbar.buttons.rectangle }, { enabled: this.options.circle, handler: new L.Draw.Circle(o, this.options.circle), title: L.drawLocal.draw.toolbar.buttons.circle }, { enabled: this.options.marker, handler: new L.Draw.Marker(o, this.options.marker), title: L.drawLocal.draw.toolbar.buttons.marker }, { enabled: this.options.circlemarker, handler: new L.Draw.CircleMarker(o, this.options.circlemarker), title: L.drawLocal.draw.toolbar.buttons.circlemarker }];
  }, getActions: function(o) {
    return [{ enabled: o.completeShape, title: L.drawLocal.draw.toolbar.finish.title, text: L.drawLocal.draw.toolbar.finish.text, callback: o.completeShape, context: o }, { enabled: o.deleteLastVertex, title: L.drawLocal.draw.toolbar.undo.title, text: L.drawLocal.draw.toolbar.undo.text, callback: o.deleteLastVertex, context: o }, { title: L.drawLocal.draw.toolbar.actions.title, text: L.drawLocal.draw.toolbar.actions.text, callback: this.disable, context: this }];
  }, setOptions: function(o) {
    L.setOptions(this, o);
    for (var s in this._modes) this._modes.hasOwnProperty(s) && o.hasOwnProperty(s) && this._modes[s].handler.setOptions(o[s]);
  } }), L.EditToolbar = L.Toolbar.extend({ statics: { TYPE: "edit" }, options: { edit: { selectedPathOptions: { dashArray: "10, 10", fill: !0, fillColor: "#fe57a1", fillOpacity: 0.1, maintainColor: !1 } }, remove: {}, poly: null, featureGroup: null }, initialize: function(o) {
    o.edit && (o.edit.selectedPathOptions === void 0 && (o.edit.selectedPathOptions = this.options.edit.selectedPathOptions), o.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, o.edit.selectedPathOptions)), o.remove && (o.remove = L.extend({}, this.options.remove, o.remove)), o.poly && (o.poly = L.extend({}, this.options.poly, o.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, o), this._selectedFeatureCount = 0;
  }, getModeHandlers: function(o) {
    var s = this.options.featureGroup;
    return [{ enabled: this.options.edit, handler: new L.EditToolbar.Edit(o, { featureGroup: s, selectedPathOptions: this.options.edit.selectedPathOptions, poly: this.options.poly }), title: L.drawLocal.edit.toolbar.buttons.edit }, { enabled: this.options.remove, handler: new L.EditToolbar.Delete(o, { featureGroup: s }), title: L.drawLocal.edit.toolbar.buttons.remove }];
  }, getActions: function(o) {
    var s = [{ title: L.drawLocal.edit.toolbar.actions.save.title, text: L.drawLocal.edit.toolbar.actions.save.text, callback: this._save, context: this }, { title: L.drawLocal.edit.toolbar.actions.cancel.title, text: L.drawLocal.edit.toolbar.actions.cancel.text, callback: this.disable, context: this }];
    return o.removeAllLayers && s.push({ title: L.drawLocal.edit.toolbar.actions.clearAll.title, text: L.drawLocal.edit.toolbar.actions.clearAll.text, callback: this._clearAllLayers, context: this }), s;
  }, addToolbar: function(o) {
    var s = L.Toolbar.prototype.addToolbar.call(this, o);
    return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), s;
  }, removeToolbar: function() {
    this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this);
  }, disable: function() {
    this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this));
  }, _save: function() {
    this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
  }, _clearAllLayers: function() {
    this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable();
  }, _checkDisabled: function() {
    var o, s = this.options.featureGroup, u = s.getLayers().length !== 0;
    this.options.edit && (o = this._modes[L.EditToolbar.Edit.TYPE].button, u ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute("title", u ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (o = this._modes[L.EditToolbar.Delete.TYPE].button, u ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute("title", u ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled));
  } }), L.EditToolbar.Edit = L.Handler.extend({ statics: { TYPE: "edit" }, initialize: function(o, s) {
    if (L.Handler.prototype.initialize.call(this, o), L.setOptions(this, s), this._featureGroup = s.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
    var u = L.version.split(".");
    parseInt(u[0], 10) === 1 && parseInt(u[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
  }, disable: function() {
    this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (o.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext }), o._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, removeHooks: function() {
    this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, revertLayers: function() {
    this._featureGroup.eachLayer(function(o) {
      this._revertLayer(o);
    }, this);
  }, save: function() {
    var o = new L.LayerGroup();
    this._featureGroup.eachLayer(function(s) {
      s.edited && (o.addLayer(s), s.edited = !1);
    }), this._map.fire(L.Draw.Event.EDITED, { layers: o });
  }, _backupLayer: function(o) {
    var s = L.Util.stamp(o);
    this._uneditedLayerProps[s] || (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? this._uneditedLayerProps[s] = { latlngs: L.LatLngUtil.cloneLatLngs(o.getLatLngs()) } : o instanceof L.Circle ? this._uneditedLayerProps[s] = { latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()), radius: o.getRadius() } : (o instanceof L.Marker || o instanceof L.CircleMarker) && (this._uneditedLayerProps[s] = { latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()) }));
  }, _getTooltipText: function() {
    return { text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext };
  }, _updateTooltip: function() {
    this._tooltip.updateContent(this._getTooltipText());
  }, _revertLayer: function(o) {
    var s = L.Util.stamp(o);
    o.edited = !1, this._uneditedLayerProps.hasOwnProperty(s) && (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? o.setLatLngs(this._uneditedLayerProps[s].latlngs) : o instanceof L.Circle ? (o.setLatLng(this._uneditedLayerProps[s].latlng), o.setRadius(this._uneditedLayerProps[s].radius)) : (o instanceof L.Marker || o instanceof L.CircleMarker) && o.setLatLng(this._uneditedLayerProps[s].latlng), o.fire("revert-edited", { layer: o }));
  }, _enableLayerEdit: function(o) {
    var s, u, d = o.layer || o.target || o;
    this._backupLayer(d), this.options.poly && (u = L.Util.extend({}, this.options.poly), d.options.poly = u), this.options.selectedPathOptions && (s = L.Util.extend({}, this.options.selectedPathOptions), s.maintainColor && (s.color = d.options.color, s.fillColor = d.options.fillColor), d.options.original = L.extend({}, d.options), d.options.editing = s), d instanceof L.Marker ? (d.editing && d.editing.enable(), d.dragging.enable(), d.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : d.editing.enable();
  }, _disableLayerEdit: function(o) {
    var s = o.layer || o.target || o;
    s.edited = !1, s.editing && s.editing.disable(), delete s.options.editing, delete s.options.original, this._selectedPathOptions && (s instanceof L.Marker ? this._toggleMarkerHighlight(s) : (s.setStyle(s.options.previousOptions), delete s.options.previousOptions)), s instanceof L.Marker ? (s.dragging.disable(), s.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : s.editing.disable();
  }, _onMouseMove: function(o) {
    this._tooltip.updatePosition(o.latlng);
  }, _onMarkerDragEnd: function(o) {
    var s = o.target;
    s.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: s });
  }, _onTouchMove: function(o) {
    var s = o.originalEvent.changedTouches[0], u = this._map.mouseEventToLayerPoint(s), d = this._map.layerPointToLatLng(u);
    o.target.setLatLng(d);
  }, _hasAvailableLayers: function() {
    return this._featureGroup.getLayers().length !== 0;
  } }), L.EditToolbar.Delete = L.Handler.extend({ statics: { TYPE: "remove" }, initialize: function(o, s) {
    if (L.Handler.prototype.initialize.call(this, o), L.Util.setOptions(this, s), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this.type = L.EditToolbar.Delete.TYPE;
    var u = L.version.split(".");
    parseInt(u[0], 10) === 1 && parseInt(u[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this));
  }, disable: function() {
    this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (o.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup(), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.remove.tooltip.text }), this._map.on("mousemove", this._onMouseMove, this));
  }, removeHooks: function() {
    this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this));
  }, revertLayers: function() {
    this._deletedLayers.eachLayer(function(o) {
      this._deletableLayers.addLayer(o), o.fire("revert-deleted", { layer: o });
    }, this);
  }, save: function() {
    this._map.fire(L.Draw.Event.DELETED, { layers: this._deletedLayers });
  }, removeAllLayers: function() {
    this._deletableLayers.eachLayer(function(o) {
      this._removeLayer({ layer: o });
    }, this), this.save();
  }, _enableLayerDelete: function(o) {
    (o.layer || o.target || o).on("click", this._removeLayer, this);
  }, _disableLayerDelete: function(o) {
    var s = o.layer || o.target || o;
    s.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(s);
  }, _removeLayer: function(o) {
    var s = o.layer || o.target || o;
    this._deletableLayers.removeLayer(s), this._deletedLayers.addLayer(s), s.fire("deleted");
  }, _onMouseMove: function(o) {
    this._tooltip.updatePosition(o.latlng);
  }, _hasAvailableLayers: function() {
    return this._deletableLayers.getLayers().length !== 0;
  } });
})(window, document);
const Xw = "data:image/svg+xml,%3csvg%20viewBox='0%200%201024%201024'%20class='icon'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20fill='%233acb5e'%20stroke='%233acb5e'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M512%2085.333333c-164.949333%200-298.666667%20133.738667-298.666667%20298.666667%200%20164.949333%20298.666667%20554.666667%20298.666667%20554.666667s298.666667-389.717333%20298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z%20m0%20448a149.333333%20149.333333%200%201%201%200-298.666666%20149.333333%20149.333333%200%200%201%200%20298.666666z'%20fill='%2345b625'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", $w = {
  zoomControl: !1,
  minZoom: 3,
  maxZoom: 17,
  center: [-15.235, -51.9253],
  zoom: 4
}, t0 = wi.Icon.extend({
  options: {
    iconUrl: Xw,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  }
}), e0 = {
  position: "topright",
  draw: {
    polygon: {
      showArea: !0,
      showLength: !0,
      precision: {
        km: 1,
        ha: 1,
        m: 0
      },
      shapeOptions: {
        color: "#0fdd61"
      }
    },
    marker: {
      icon: new t0()
    },
    circle: {
      shapeOptions: {
        color: "#0fdd61"
      }
    },
    rectangle: {
      shapeOptions: {
        color: "#0fdd61"
      }
    },
    polyline: {
      shapeOptions: {
        color: "#0fdd61"
      }
    },
    circlemarker: {
      color: "#0fdd61"
    }
  }
}, n0 = {
  draw: {
    toolbar: {
      actions: {
        title: "Cancelar desenho",
        text: "Cancelar"
      },
      finish: {
        title: "Terminar desenho",
        text: "Terminar"
      },
      undo: {
        title: "Apagar último ponto desenhado",
        text: "Apagar último ponto"
      },
      buttons: {
        polyline: "Desenhar uma linha",
        polygon: "Desenhar um polígono",
        rectangle: "Desenhar um retângulo",
        circle: "Desenhar um círculo",
        marker: "Desenhar um marcador",
        circlemarker: "Desenhar um marcador de círculo"
      }
    },
    handlers: {
      circle: {
        tooltip: {
          start: "Clique e arraste para desenhar círculo"
        },
        radius: "Raio"
      },
      circlemarker: {
        tooltip: {
          start: "Clique no mapa para colocar um marcador de círculo"
        }
      },
      marker: {
        tooltip: {
          start: "Clique no mapa para colocar um marcador"
        }
      },
      polygon: {
        tooltip: {
          start: "Clique para começar a desenhar forma",
          cont: "Clique para continuar desenhando forma",
          end: "Clique no primeiro ponto para fechar esta forma"
        }
      },
      polyline: {
        error: "<strong>Erro:</strong> as bordas da forma não podem se cruzar!",
        tooltip: {
          start: "Clique para começar a desenhar linha",
          cont: "Clique para continuar desenhando linha",
          end: "Clique no último ponto para terminar a linha"
        }
      },
      rectangle: {
        tooltip: {
          start: "Clique e arraste para desenhar retângulo"
        }
      },
      simpleshape: {
        tooltip: {
          end: "Solte o mouse para terminar o desenho"
        }
      }
    }
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: "Salvar alterações",
          text: "Salvar"
        },
        cancel: {
          title: "Cancelar edição, descartar todas as alterações",
          text: "Cancelar"
        },
        clearAll: {
          title: "Limpar todas as camadas",
          text: "Limpar tudo"
        }
      },
      buttons: {
        edit: "Editar camadas",
        editDisabled: "Nenhuma camada para editar",
        remove: "Apagar camadas",
        removeDisabled: "Nenhuma camada para apagar"
      }
    },
    handlers: {
      edit: {
        tooltip: {
          text: "Arraste os pontos ou marcadores para editar a forma",
          subtext: "Clique em cancelar para desfazer as alterações"
        }
      },
      remove: {
        tooltip: {
          text: "Clique em uma forma para removê-la"
        }
      }
    }
  }
};
window.type = !0;
window.radius = !0;
class i0 {
  constructor(i, r, l) {
    Ue(this, "_map");
    Ue(this, "_drawItemsGroup");
    Ue(this, "_options");
    this._map = i, this._drawItemsGroup = r, this._options = this.formatOptions(l == null ? void 0 : l.config), this.addTranslation(
      (l == null ? void 0 : l.controlTexts) || n0
    );
  }
  get drawItemsGroup() {
    return this._drawItemsGroup;
  }
  get map() {
    return this._map;
  }
  get options() {
    return this._options;
  }
  formatOptions(i) {
    let r = e0;
    return i && (r = i), r.edit = {
      ...r.edit,
      featureGroup: this._drawItemsGroup
    }, r;
  }
  calculateAreas(i) {
    const r = wi.GeometryUtil.geodesicArea(i);
    return {
      m2: r,
      km2: r / 1e6,
      ha: r / 1e4
    };
  }
  incrementLayerInfosOnCreate(i) {
    return ["rectangle", "polygon"].includes(i.layerType) && (i.layer.drawnArea = this.calculateAreas(i.layer.getLatLngs()[0])), i;
  }
  incrementLayerInfosOnEdit(i) {
    const r = i;
    return r.drawnArea && (r.drawnArea = this.calculateAreas(r.getLatLngs()[0])), r;
  }
  handleDrawingEvents(i) {
    this._map.on("draw:created", (r) => {
      const l = r;
      this._drawItemsGroup.addLayer(l.layer);
      const { layer: o } = this.incrementLayerInfosOnCreate(l);
      i({ type: "created", layer: o });
    }), this._map.on("draw:edited", (r) => {
      const l = r, o = [];
      l.layers.eachLayer((s) => {
        const u = this.incrementLayerInfosOnEdit(s);
        o.push(u);
      }), i({ type: "edited", layers: o });
    }), this._map.on("draw:deleted", (r) => {
      const l = r, o = [];
      l.layers.eachLayer((s) => {
        o.push(s);
      }), i({ type: "deleted", layers: o });
    });
  }
  addTranslation(i) {
    wi.drawLocal.draw = i.draw, wi.drawLocal.edit = i.edit;
  }
}
const o0 = [{ name: "Esri Imagery", default: !0, key: "esri", url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" }, { name: "OpenStreetMap", default: !1, key: "osm", url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }], r0 = {
  mapLayers: o0
};
class a0 {
  constructor(i) {
    Ue(this, "_map");
    Ue(this, "_mapOptions");
    Ue(this, "_mapLayers");
    Ue(this, "_layerControl");
    this._mapOptions = i || $w, this._map = Vt.map("map", {
      zoomControl: this._mapOptions.zoomControl,
      minZoom: this._mapOptions.minZoom,
      maxZoom: this._mapOptions.maxZoom
    }).setView(this._mapOptions.center, this._mapOptions.zoom);
  }
  get map() {
    return this._map;
  }
  get layerControl() {
    return this._layerControl;
  }
  addControls() {
    this._map.addControl(Vt.control.zoom({ position: "topright" })), this._layerControl = Vt.control.layers().addTo(this._map);
  }
  addBaseLayer(i) {
    (this._mapLayers.mapLayers || r0.mapLayers).forEach((l) => {
      const o = Vt.tileLayer(l.url);
      this.watchLayerStatus(o, i), l.default && o.addTo(this._map), this._layerControl.addBaseLayer(o, l.name);
    });
  }
  disableLayerControlHover() {
    setTimeout(() => {
      const i = document.querySelector(
        ".leaflet-control-layers"
      );
      if (!i) return;
      const r = Vt.DomEvent._originalExpand || i._expand;
      Vt.DomEvent.off(i), Vt.DomEvent.on(i, "click", function(l) {
        i.classList.contains("leaflet-control-layers-expanded") ? i._collapse() : r ? r.call(i) : i.classList.add("leaflet-control-layers-expanded"), Vt.DomEvent.stopPropagation(l), Vt.DomEvent.preventDefault(l);
      }), Vt.DomEvent._originalExpand = r;
    }, 100);
  }
  watchLayerStatus(i, r) {
    i.on("loading", () => {
      r("startLoading");
    }), i.on("load", () => {
      r("stopLoading");
    }), i.on("error", () => {
      r("stopLoading");
    });
  }
  init(i, r) {
    this._mapLayers = i, this.addControls(), this.addBaseLayer(r), setTimeout(() => {
      this._map.invalidateSize();
    }, 300), this.disableLayerControlHover();
  }
}
const s0 = { id: "map" }, l0 = /* @__PURE__ */ J({
  __name: "LeafletMap",
  props: {
    mapOptions: {},
    layers: {},
    drawingOptions: {}
  },
  emits: ["startLoading", "stopLoading", "onDrawing"],
  setup(e, { expose: i, emit: r }) {
    const l = r, o = e, s = j(), u = j(), d = j(), f = j();
    Kt(() => {
      var v;
      m(), (v = o.drawingOptions) != null && v.show && g();
    });
    const m = () => {
      const { config: v } = o.mapOptions, b = new a0(v), M = (w) => {
        w === "startLoading" && l("startLoading"), w === "stopLoading" && l("stopLoading");
      };
      b.init(o.layers, M), s.value = b.map, u.value = b.layerControl;
    }, g = () => {
      f.value = new Vt.FeatureGroup(), s.value.addLayer(f.value);
      const v = new i0(
        s.value,
        f.value,
        o.drawingOptions
      );
      d.value = new Vt.Control.Draw(v.options), s.value.addControl(d.value), v.handleDrawingEvents((b) => {
        l("onDrawing", b);
      }), f.value = v.drawItemsGroup, s.value = v.map;
    };
    return i({
      map: s,
      layerControl: u,
      drawControl: d,
      drawItemsGroup: f
    }), (v, b) => (K(), ht("div", s0));
  }
}), u0 = "data:image/gif;base64,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", c0 = {
  key: 0,
  class: "map-loading"
}, h0 = /* @__PURE__ */ J({
  __name: "Loading",
  props: {
    isLoading: { type: Boolean }
  },
  setup(e) {
    return (i, r) => i.isLoading ? (K(), ht("div", c0, r[0] || (r[0] = [
      Bt("img", { src: u0 }, null, -1)
    ]))) : It("", !0);
  }
}), d0 = { class: "map-container" }, _0 = /* @__PURE__ */ J({
  __name: "MapDPG",
  props: {
    layers: {},
    options: {},
    showLoading: { type: Boolean }
  },
  emits: ["onGroupLayerToggle", "onChildLayerToggle", "onDrawing"],
  setup(e, { expose: i, emit: r }) {
    const l = r, o = j(), s = j(!1);
    return i({
      map: P(() => {
        var u;
        return (u = o.value) == null ? void 0 : u.map;
      }),
      layerControl: P(() => {
        var u;
        return (u = o.value) == null ? void 0 : u.layerControl;
      }),
      drawControl: P(() => {
        var u;
        return (u = o.value) == null ? void 0 : u.drawControl;
      }),
      drawItemsGroup: P(() => {
        var u;
        return (u = o.value) == null ? void 0 : u.drawItemsGroup;
      })
    }), (u, d) => (K(), ht("div", d0, [
      xt(h0, {
        isLoading: s.value || u.showLoading
      }, null, 8, ["isLoading"]),
      o.value && u.layers.customLayers ? (K(), vt(Jw, {
        key: 0,
        layersConfig: u.layers.customLayers,
        options: u.options.layersMenu,
        map: o.value.map,
        layerControl: o.value.layerControl,
        onStartLoading: d[0] || (d[0] = (f) => s.value = !0),
        onStopLoading: d[1] || (d[1] = (f) => s.value = !1),
        onOnChildLayerToggle: d[2] || (d[2] = (f) => l("onChildLayerToggle", f)),
        onOnGroupLayerToggle: d[3] || (d[3] = (f) => l("onGroupLayerToggle", f))
      }, null, 8, ["layersConfig", "options", "map", "layerControl"])) : It("", !0),
      xt(l0, {
        ref_key: "mapRef",
        ref: o,
        layers: u.layers,
        mapOptions: u.options.map,
        drawingOptions: u.options.drawing,
        onStartLoading: d[4] || (d[4] = (f) => s.value = !0),
        onStopLoading: d[5] || (d[5] = (f) => s.value = !1),
        onOnDrawing: d[6] || (d[6] = (f) => l("onDrawing", f))
      }, null, 8, ["layers", "mapOptions", "drawingOptions"])
    ]));
  }
});
export {
  _0 as default
};
