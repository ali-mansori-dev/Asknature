/**handles:civilization-scripts**/
"use strict";
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.balanceText = e());
})(this, function () {
  var x,
    r,
    a,
    n = { sel: [], el: [] },
    o = !1,
    l = !1;
  function t() {}
  function P(t, e) {
    Array.prototype.forEach.call(t, e);
  }
  function A() {
    this.reset();
  }
  function h(e) {
    return r.some(function (t) {
      return t.start < e && e < t.end;
    });
  }
  function p(t, e) {
    var i;
    t.nodeType === t.ELEMENT_NODE
      ? "nowrap" === window.getComputedStyle(t).whiteSpace
        ? ((i = t.outerHTML.length), r.push({ start: a, end: a + i }), (a += i))
        : (P(t.childNodes, function (t) {
            p(t, !0);
          }),
          e && (a += t.outerHTML.length - t.innerHTML.length))
      : t.nodeType === t.COMMENT_NODE
      ? (a += t.length + 7)
      : t.nodeType === t.PROCESSING_INSTRUCTION_NODE
      ? (a += t.length + 2)
      : (a += t.length);
  }
  function C(t, e, i) {
    var s;
    0 === i
      ? ((t.style.whiteSpace = e),
        (a = 0),
        p(t, !(r = [])),
        (t.style.whiteSpace = "nowrap"))
      : ((s = []),
        r.forEach(function (t) {
          t.start > i && s.push({ start: t.start - i, end: t.end - i });
        }),
        (r = s));
  }
  A.prototype.reset = function () {
    (this.index = 0), (this.width = 0);
  };
  var e,
    _ = function (t) {
      return (
        "justify" ===
        (t.currentStyle || window.getComputedStyle(t, null)).textAlign
      );
    };
  function E(t, e, i) {
    var s,
      t,
      r,
      s,
      s,
      s = (e = e.trim()).split(" ").length;
    return (
      (e += " "),
      s < 2
        ? e
        : (((r = document.createElement("span")).innerHTML = e),
          t.appendChild(r),
          (t = r.offsetWidth),
          r.parentNode.removeChild(r),
          (s = Math.floor((i - t) / (s - 1))),
          (r.style.wordSpacing = s + "px"),
          r.setAttribute("data-owner", "balance-text-justify"),
          (s = document.createElement("div")).appendChild(r),
          s.innerHTML)
    );
  }
  function i(t, e) {
    var i,
      s = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;
    if (!x)
      for (x = [], i = s.exec(t); null !== i; )
        h(i.index) || x.push(i.index), (i = s.exec(t));
    return -1 !== x.indexOf(e);
  }
  function d(t, e) {
    return 0 === e || e === t.length || (i(t, e - 1) && !i(t, e));
  }
  function M(t, e, i, s, r, a, n) {
    var o;
    if (e && "string" == typeof e)
      for (;;) {
        for (; !d(e, a); ) a += r;
        if (((t.innerHTML = e.substr(0, a)), (o = t.offsetWidth), r < 0)) {
          if (o <= s || o <= 0 || 0 === a) break;
        } else if (s <= o || i <= o || a === e.length) break;
        a += r;
      }
    (n.index = a), (n.width = o);
  }
  function c(t) {
    return t
      ? "string" == typeof t
        ? document.querySelectorAll(t)
        : t.tagName && t.querySelectorAll
        ? [t]
        : t
      : [];
  }
  function f(t) {
    P(c(t), function (t) {
      !(function (t) {
        var e;
        P(
          (e = t.querySelectorAll('br[data-owner="balance-text-hyphen"]')),
          function (t) {
            t.outerHTML = "";
          }
        ),
          P(
            (e = t.querySelectorAll('br[data-owner="balance-text"]')),
            function (t) {
              t.outerHTML = " ";
            }
          );
        var i = t.querySelectorAll(
            'span[data-owner="balance-text-softhyphen"]'
          ),
          s;
        0 < i.length &&
          P(i, function (t) {
            var e = document.createTextNode("­");
            t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t);
          }),
          0 <
            (i = t.querySelectorAll('span[data-owner="balance-text-justify"]'))
              .length &&
            ((s = ""),
            P(i, function (t) {
              (s += t.textContent), t.parentNode.removeChild(t);
            }),
            (t.innerHTML = s));
      })(t);
      var e = t.style.whiteSpace,
        i = t.style.float,
        s = t.style.display,
        r = t.style.position,
        a = t.style.lineHeight;
      t.style.lineHeight = "normal";
      var n = t.offsetWidth,
        o = t.offsetHeight;
      (t.style.whiteSpace = "nowrap"),
        (t.style.float = "none"),
        (t.style.display = "inline"),
        (t.style.position = "static");
      var l = t.offsetWidth,
        h = t.offsetHeight,
        p =
          "pre-wrap" === e
            ? 0
            : ((d = t),
              (c = h),
              ((u = document.createElement("div")).style.display = "block"),
              (u.style.position = "absolute"),
              (u.style.bottom = 0),
              (u.style.right = 0),
              (u.style.width = 0),
              (u.style.height = 0),
              (u.style.margin = 0),
              (u.style.padding = 0),
              (u.style.visibility = "hidden"),
              (u.style.overflow = "hidden"),
              ((f = document.createElement("span")).style.fontSize = "2000px"),
              (f.innerHTML = "&nbsp;"),
              u.appendChild(f),
              d.appendChild(u),
              (f = f.getBoundingClientRect()),
              u.parentNode.removeChild(u),
              c / (f.height / f.width)),
        d,
        c,
        f,
        u;
      if (0 < n && n < l && l < 5e3) {
        for (
          var m,
            g,
            y,
            g,
            y,
            v = t.innerHTML,
            b = "",
            w = "",
            S = _(t),
            k = Math.round(o / h),
            T = 0;
          1 < k;

        )
          (x = null),
            C(t, e, T),
            M(
              t,
              v,
              n,
              (m = Math.round((l + p) / k - p)),
              -1,
              Math.round((v.length + 1) / k) - 1,
              (g = new A())
            ),
            (y = new A()),
            M(t, v, n, m, 1, g.index, y),
            g.reset(),
            M(t, v, n, m, -1, y.index, g),
            (g = (
              0 !== g.index &&
              (n < y.width ||
                g.index === y.index ||
                Math.abs(m - g.width) < Math.abs(y.width - m))
                ? g
                : y
            ).index),
            (w = v.substr(0, g).replace(/\s$/, "")),
            (y = Boolean(w.match(/\u00ad$/))) &&
              (w = w.replace(
                /\u00ad$/,
                '<span data-owner="balance-text-softhyphen">-</span>'
              )),
            S
              ? (b += E(t, w, n))
              : ((b += w),
                (b +=
                  y || Boolean(w.match(/(-|\u2014|\u2013)$/))
                    ? '<br data-owner="balance-text-hyphen" />'
                    : '<br data-owner="balance-text" />')),
            (v = v.substr(g)),
            (T = g),
            k--,
            (t.innerHTML = v),
            (l = t.offsetWidth);
        t.innerHTML = S ? b + E(t, v, n) : b + v;
      }
      (t.style.whiteSpace = e),
        (t.style.float = i),
        (t.style.display = s),
        (t.style.position = r),
        (t.style.lineHeight = a);
    });
  }
  function u() {
    var t = c(n.sel.join(","));
    f(Array.prototype.concat.apply(n.el, t));
  }
  function m() {
    var t, i, e, s, r;
    o ||
      ((t = u),
      "loading" !== document.readyState
        ? t()
        : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", t)
        : document.attachEvent("onreadystatechange", function () {
            "loading" !== document.readyState && t();
          }),
      window.addEventListener("load", u),
      window.addEventListener(
        "resize",
        ((i = u),
        function () {
          var t = this,
            e = arguments;
          r && clearTimeout(r),
            (r = setTimeout(function () {
              i.apply(t, e), (r = null);
            }, 100));
        })
      ),
      (o = !0));
  }
  function s(t, e) {
    var i, s;
    t
      ? e && !0 === e.watch
        ? ("string" == typeof (s = t)
            ? n.sel.push(s)
            : P(c(s), function (t) {
                n.el.push(t);
              }),
          m(),
          u())
        : e && !1 === e.watch
        ? "string" == typeof (i = t)
          ? (n.sel = n.sel.filter(function (t) {
              return t !== i;
            }))
          : ((i = c(i)),
            (n.el = n.el.filter(function (t) {
              return -1 === i.indexOf(t);
            })))
        : f(t)
      : l || (n.sel.push(".balance-text"), m(), (l = !0));
  }
  return (
    (s.updateWatched = u),
    (e = document.documentElement.style).textWrap ||
    e.WebkitTextWrap ||
    e.MozTextWrap ||
    e.MsTextWrap
      ? (t.updateWatched = t)
      : s
  );
}),
  (function (t, e) {
    var i = (function (s, f) {
      if (f.getElementsByClassName) {
        var u,
          m,
          g = f.documentElement,
          o = s.Date,
          r = s.HTMLPictureElement,
          a = "addEventListener",
          y = "getAttribute",
          e = s[a],
          h = s.setTimeout,
          i = s.requestAnimationFrame || h,
          l = s.requestIdleCallback,
          p = /^picture$/i,
          n = ["load", "error", "lazyincluded", "_lazyloaded"],
          d = {},
          c = Array.prototype.forEach,
          v = function (t, e) {
            return (
              d[e] || (d[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
              d[e].test(t[y]("class") || "") && d[e]
            );
          },
          b = function (t, e) {
            v(t, e) ||
              t.setAttribute("class", (t[y]("class") || "").trim() + " " + e);
          },
          w = function (t, e) {
            var e;
            (e = v(t, e)) &&
              t.setAttribute("class", (t[y]("class") || "").replace(e, " "));
          },
          S = function (e, i, t) {
            var s = t ? a : "removeEventListener";
            t && S(e, i),
              n.forEach(function (t) {
                e[s](t, i);
              });
          },
          k = function (t, e, i, s, r) {
            var a = f.createEvent("Event");
            return (
              ((i = i || {}).instance = u),
              a.initEvent(e, !s, !r),
              (a.detail = i),
              t.dispatchEvent(a),
              a
            );
          },
          T = function (t, e) {
            var i;
            !r && (i = s.picturefill || m.pf)
              ? (e &&
                  e.src &&
                  !t[y]("srcset") &&
                  t.setAttribute("srcset", e.src),
                i({ reevaluate: !0, elements: [t] }))
              : e && e.src && (t.src = e.src);
          },
          x = function (t, e) {
            return (getComputedStyle(t, null) || {})[e];
          },
          P = function (t, e, i) {
            for (
              i = i || t.offsetWidth;
              i < m.minSize && e && !t._lazysizesWidth;

            )
              (i = e.offsetWidth), (e = e.parentNode);
            return i;
          },
          A =
            ((D = []),
            (I = $ = []),
            ((t = function (t, e) {
              E && !e
                ? t.apply(this, arguments)
                : (I.push(t), M || ((M = !0), (f.hidden ? h : i)(F)));
            })._lsFlush = F =
              function () {
                var t = I;
                for (I = $.length ? D : $, M = !(E = !0); t.length; )
                  t.shift()();
                E = !1;
              }),
            t),
          C = function (i, t) {
            return t
              ? function () {
                  A(i);
                }
              : function () {
                  var t = this,
                    e = arguments;
                  A(function () {
                    i.apply(t, e);
                  });
                };
          },
          t = function (t) {
            var i,
              s = 0,
              r = m.throttleDelay,
              a = m.ricTimeout,
              e = function () {
                (i = !1), (s = o.now()), t();
              },
              n =
                l && 49 < a
                  ? function () {
                      l(e, { timeout: a }),
                        a !== m.ricTimeout && (a = m.ricTimeout);
                    }
                  : C(function () {
                      h(e);
                    }, !0);
            return function (t) {
              var e;
              (t = !0 === t) && (a = 33),
                i ||
                  ((i = !0),
                  (e = r - (o.now() - s)) < 0 && (e = 0),
                  t || e < 9 ? n() : h(n, e));
            };
          },
          _ = function (t) {
            var e,
              i,
              s = 99,
              r = function () {
                (e = null), t();
              },
              a = function () {
                var t = o.now() - i;
                t < 99 ? h(a, 99 - t) : (l || r)(r);
              };
            return function () {
              (i = o.now()), (e = e || h(a, 99));
            };
          },
          E,
          M,
          $,
          D,
          I,
          F,
          t;
        !(function () {
          var t,
            e = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125,
            };
          for (t in ((m = s.lazySizesConfig || s.lazysizesConfig || {}), e))
            t in m || (m[t] = e[t]);
          (s.lazySizesConfig = m),
            h(function () {
              m.init && z();
            });
        })();
        var O =
            ((tt = /^img$/i),
            (et = /^iframe$/i),
            (it = "onscroll" in s && !/(gle|ing)bot/.test(navigator.userAgent)),
            (at = rt = st = 0),
            (nt = -1),
            (ot = function (t) {
              at--,
                t && t.target && S(t.target, ot),
                (t && !(at < 0) && t.target) || (at = 0);
            }),
            (lt = function (t) {
              return (
                (Q = null == Q ? "hidden" == x(f.body, "visibility") : Q) ||
                ("hidden" != x(t.parentNode, "visibility") &&
                  "hidden" != x(t, "visibility"))
              );
            }),
            (ht = function (t, e) {
              var i,
                s = t,
                r = lt(t);
              for (
                X -= e, J += e, K -= e, Z += e;
                r && (s = s.offsetParent) && s != f.body && s != g;

              )
                (r = 0 < (x(s, "opacity") || 1)) &&
                  "visible" != x(s, "overflow") &&
                  ((i = s.getBoundingClientRect()),
                  (r =
                    Z > i.left &&
                    K < i.right &&
                    J > i.top - 1 &&
                    X < i.bottom + 1));
              return r;
            }),
            (dt = t(
              (pt = function () {
                var t,
                  e,
                  i,
                  s,
                  r,
                  a,
                  n,
                  o,
                  l,
                  h,
                  p,
                  d,
                  c = u.elements;
                if ((W = m.loadMode) && at < 8 && (t = c.length)) {
                  for (
                    e = 0,
                      nt++,
                      p =
                        (h =
                          !m.expand || m.expand < 1
                            ? 500 < g.clientHeight && 500 < g.clientWidth
                              ? 500
                              : 370
                            : m.expand) * m.expFactor,
                      d = m.hFac,
                      Q = null,
                      rt < p && at < 1 && 2 < nt && 2 < W && !f.hidden
                        ? ((rt = p), (nt = 0))
                        : (rt = 1 < W && 1 < nt && at < 6 ? h : 0);
                    e < t;
                    e++
                  )
                    if (c[e] && !c[e]._lazyRace)
                      if (it)
                        if (
                          (l !==
                            (a =
                              !(o = c[e][y]("data-expand")) || !(a = +o)
                                ? rt
                                : a) &&
                            ((U = innerWidth + a * d),
                            (Y = innerHeight + a),
                            (n = -1 * a),
                            (l = a)),
                          (i = c[e].getBoundingClientRect()),
                          (J = i.bottom) >= n &&
                            (X = i.top) <= Y &&
                            (Z = i.right) >= n * d &&
                            (K = i.left) <= U &&
                            (J || Z || K || X) &&
                            (m.loadHidden || lt(c[e])) &&
                            ((G && at < 3 && !o && (W < 3 || nt < 4)) ||
                              ht(c[e], a)))
                        ) {
                          if ((vt(c[e]), (r = !0), 9 < at)) break;
                        } else
                          !r &&
                            G &&
                            !s &&
                            at < 4 &&
                            nt < 4 &&
                            2 < W &&
                            (B[0] || m.preloadAfterLoad) &&
                            (B[0] ||
                              (!o &&
                                (J ||
                                  Z ||
                                  K ||
                                  X ||
                                  "auto" != c[e][y](m.sizesAttr)))) &&
                            (s = B[0] || c[e]);
                      else vt(c[e]);
                  s && !r && vt(s);
                }
              })
            )),
            (ft = C(
              (ct = function (t) {
                b(t.target, m.loadedClass),
                  w(t.target, m.loadingClass),
                  S(t.target, ut),
                  k(t.target, "lazyloaded");
              })
            )),
            (ut = function (t) {
              ft({ target: t.target });
            }),
            (mt = function (e, i) {
              try {
                e.contentWindow.location.replace(i);
              } catch (t) {
                e.src = i;
              }
            }),
            (gt = function (t) {
              var e,
                i = t[y](m.srcsetAttr);
              (e = m.customMedia[t[y]("data-media") || t[y]("media")]) &&
                t.setAttribute("media", e),
                i && t.setAttribute("srcset", i);
            }),
            (yt = C(function (t, e, i, s, r) {
              var s, i, a, n, o, l;
              (o = k(t, "lazybeforeunveil", e)).defaultPrevented ||
                (s && (i ? b(t, m.autosizesClass) : t.setAttribute("sizes", s)),
                (i = t[y](m.srcsetAttr)),
                (s = t[y](m.srcAttr)),
                r && (n = (a = t.parentNode) && p.test(a.nodeName || "")),
                (l = e.firesLoad || ("src" in t && (i || s || n))),
                (o = { target: t }),
                l &&
                  (S(t, ot, !0),
                  clearTimeout(j),
                  (j = h(ot, 2500)),
                  b(t, m.loadingClass),
                  S(t, ut, !0)),
                n && c.call(a.getElementsByTagName("source"), gt),
                i
                  ? t.setAttribute("srcset", i)
                  : s && !n && (et.test(t.nodeName) ? mt(t, s) : (t.src = s)),
                r && (i || n) && T(t, { src: s })),
                t._lazyRace && delete t._lazyRace,
                w(t, m.lazyClass),
                A(function () {
                  (!l || (t.complete && 1 < t.naturalWidth)) &&
                    (l ? ot(o) : at--, ct(o));
                }, !0);
            })),
            (bt = function () {
              var t;
              G ||
                (o.now() - q < 999
                  ? h(bt, 999)
                  : ((t = _(function () {
                      (m.loadMode = 3), dt();
                    })),
                    (G = !0),
                    (m.loadMode = 3),
                    dt(),
                    e(
                      "scroll",
                      function () {
                        3 == m.loadMode && (m.loadMode = 2), t();
                      },
                      !0
                    )));
            }),
            {
              _: function () {
                (q = o.now()),
                  (u.elements = f.getElementsByClassName(m.lazyClass)),
                  (B = f.getElementsByClassName(
                    m.lazyClass + " " + m.preloadClass
                  )),
                  e("scroll", dt, !0),
                  e("resize", dt, !0),
                  s.MutationObserver
                    ? new MutationObserver(dt).observe(g, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      })
                    : (g[a]("DOMNodeInserted", dt, !0),
                      g[a]("DOMAttrModified", dt, !0),
                      setInterval(dt, 999)),
                  e("hashchange", dt, !0),
                  [
                    "focus",
                    "mouseover",
                    "click",
                    "load",
                    "transitionend",
                    "animationend",
                    "webkitAnimationEnd",
                  ].forEach(function (t) {
                    f[a](t, dt, !0);
                  }),
                  /d$|^c/.test(f.readyState)
                    ? bt()
                    : (e("load", bt), f[a]("DOMContentLoaded", dt), h(bt, 2e4)),
                  u.elements.length ? (pt(), A._lsFlush()) : dt();
              },
              checkElems: dt,
              unveil: (vt = function (t) {
                var e,
                  i = tt.test(t.nodeName),
                  s = i && (t[y](m.sizesAttr) || t[y]("sizes")),
                  r = "auto" == s;
                ((!r && G) ||
                  !i ||
                  (!t[y]("src") && !t.srcset) ||
                  t.complete ||
                  v(t, m.errorClass) ||
                  !v(t, m.lazyClass)) &&
                  ((e = k(t, "lazyunveilread").detail),
                  r && L.updateElem(t, !0, t.offsetWidth),
                  (t._lazyRace = !0),
                  at++,
                  yt(t, e, r, s, i));
              }),
            }),
          L =
            ((V = C(function (t, e, i, s) {
              var r, a, n;
              if (
                ((t._lazysizesWidth = s),
                t.setAttribute("sizes", (s += "px")),
                p.test(e.nodeName || ""))
              )
                for (
                  a = 0, n = (r = e.getElementsByTagName("source")).length;
                  a < n;
                  a++
                )
                  r[a].setAttribute("sizes", s);
              i.detail.dataAttr || T(t, i.detail);
            })),
            {
              _: function () {
                (R = f.getElementsByClassName(m.autosizesClass)),
                  e("resize", N);
              },
              checkElems: (N = _(function () {
                var t,
                  e = R.length;
                if (e) for (t = 0; t < e; t++) H(R[t]);
              })),
              updateElem: (H = function (t, e, i) {
                var e,
                  s = t.parentNode;
                s &&
                  ((i = P(t, s, i)),
                  (e = k(t, "lazybeforesizes", { width: i, dataAttr: !!e }))
                    .defaultPrevented ||
                    ((i = e.detail.width) &&
                      i !== t._lazysizesWidth &&
                      V(t, s, e, i)));
              }),
            }),
          z = function () {
            z.i || ((z.i = !0), L._(), O._());
          },
          R,
          V,
          H,
          N,
          B,
          G,
          j,
          W,
          q,
          U,
          Y,
          X,
          K,
          Z,
          J,
          Q,
          tt,
          et,
          it,
          st,
          rt,
          at,
          nt,
          ot,
          lt,
          ht,
          pt,
          dt,
          ct,
          ft,
          ut,
          mt,
          gt,
          yt,
          vt,
          bt;
        return (u = {
          cfg: m,
          autoSizer: L,
          loader: O,
          init: z,
          uP: T,
          aC: b,
          rC: w,
          hC: v,
          fire: k,
          gW: P,
          rAF: A,
        });
      }
    })(t, t.document);
    (t.lazySizes = i),
      "object" == typeof module && module.exports && (module.exports = i);
  })(window),
  (function (t) {
    var e,
      i,
      a,
      h,
      s,
      p = !!window.getComputedStyle,
      r;
    function n(t, e) {
      var i,
        t,
        e,
        s,
        e,
        s = e.window,
        i = 0 !== u(),
        r = e.useLayoutViewport && "Width" === t,
        i = i || !f() || r,
        r = i ? s.document.documentElement["client" + t] : v(t, s);
      return (
        e.useLayoutViewport &&
          !i &&
          ((t = r),
          (e = o(s, { asRange: !0 })),
          (r = Math.round(t * e.calculated)),
          a ||
            ((i = s.document.documentElement.clientHeight),
            (s = (t - 1) * e.min),
            (e = (t + 1) * e.max),
            ((r <= i + 3 && i - 3 <= r) || (s <= i && i <= e && e < i + 30)) &&
              (r = i))),
        r
      );
    }
    function o(t, e) {
      var e,
        t,
        i = e && e.asRange,
        s = { calculated: 1, min: 1, max: 1 };
      return (
        0 === u() &&
          f() &&
          ((e = (t = t || window).document.documentElement.clientWidth),
          (t = y(t)),
          (s.calculated = e / t),
          i &&
            (a
              ? (s.min = s.max = s.calculated)
              : ((s.min = e / (t + 1)), (s.max = e / (t - 1))))),
        i ? s : s.calculated
      );
    }
    function l(t) {
      var e,
        i,
        s,
        r = window,
        a = !0;
      return (
        t &&
          t.length &&
          ((e = w((t = Array.prototype.slice.call(t))[0])) || (t[0] = c(t[0])),
          (i = !e && t[0]) || (t[1] = c(t[1])),
          (s = !i && t[1]),
          e
            ? ((r = t[0]), s && t[1].viewport && (a = d(t[1].viewport)))
            : i
            ? (t[0].viewport && (a = d(t[0].viewport)), w(t[1]) && (r = t[1]))
            : !t[0] &&
              t[1] &&
              (s && t[1].viewport
                ? (a = d(t[1].viewport))
                : w(t[1]) && (r = t[1]))),
        { window: r, useVisualViewport: a, useLayoutViewport: !a }
      );
    }
    function d(t) {
      var e = S(t) && t.toLowerCase();
      if (t && !e) throw new Error("Invalid viewport option: " + t);
      if (e && "visual" !== e && "layout" !== e)
        throw new Error("Invalid viewport name: " + t);
      return "visual" === e;
    }
    function c(t) {
      return S(t) && "" !== t ? { viewport: t } : t;
    }
    function f() {
      return (i = void 0 === i ? 10 < y() : i);
    }
    function u() {
      var t;
      return (
        void 0 === e &&
          (((t = document.createElement("div")).style.cssText =
            "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -500px; left: -500px; margin: 0px; padding: 0px; border: none;"),
          document.body.appendChild(t),
          (e = t.offsetWidth - t.clientWidth),
          document.body.removeChild(t)),
        e
      );
    }
    function m() {
      var t,
        e,
        i,
        i,
        s = (function () {
          var t = document.createElement("iframe"),
            e = document.body;
          if (
            ((t.style.cssText =
              "position: absolute; top: -600px; left: -600px; width: 500px; height: 500px; margin: 0px; padding: 0px; border: none; display: block;"),
            (t.frameborder = "0"),
            e.appendChild(t),
            (t.src = "about:blank"),
            t.contentDocument)
          )
            return (
              t.contentDocument.write(
                '<!DOCTYPE html><html><head><meta charset="UTF-8"><title></title><style type="text/css">html, body { overflow: hidden; }</style></head><body></body></html>'
              ),
              t
            );
        })(),
        r = (s && s.contentDocument) || document,
        a = r.body,
        n = r !== document,
        t,
        o,
        t,
        l,
        r,
        i;
      ((e = r.createElement("div")).style.cssText =
        "width: 1px; height: 1px; position: relative; top: 0px; left: 32000px;"),
        n ||
          ((o = document.documentElement),
          (t = document.body),
          (l = p ? window.getComputedStyle(o, null) : o.currentStyle),
          (r = p ? window.getComputedStyle(t, null) : t.currentStyle),
          (i = (l.overflowX || l.overflow || "visible").toLowerCase()),
          (l =
            "hidden" !==
            (r.overflowX || r.overflow || "visible").toLowerCase()),
          (i = {
            documentElement: { modified: (r = "visible" === i) },
            body: { modified: l },
          }),
          r &&
            ((o = o.style),
            (i.documentElement.styleOverflowX = o.overflowX),
            (o.overflowX = "auto")),
          l &&
            ((t = t.style),
            (i.body.styleOverflowX = t.overflowX),
            (t.overflowX = "hidden")),
          (t = i)),
        (i = a.scrollWidth),
        a.appendChild(e),
        (i = i !== a.scrollWidth),
        a.removeChild(e),
        n ||
          ((t = t).documentElement.modified &&
            (document.documentElement.style.overflowX =
              t.documentElement.styleOverflowX),
          t.body.modified &&
            (document.body.style.overflowX = t.body.styleOverflowX)),
        (h = i ? "documentElement" : "body"),
        s && document.body.removeChild(s);
    }
    function g(t, e) {
      var i = e.documentElement;
      return Math.max(
        i.body["scroll" + t],
        e["scroll" + t],
        i.body["offset" + t],
        e["offset" + t],
        e["client" + t]
      );
    }
    function y(t) {
      return v("Width", t);
    }
    function v(t, e) {
      var i,
        s,
        t = (e || window).visualViewport
          ? (e || window).visualViewport[t.toLowerCase()]
          : (e || window)["inner" + t];
      return t && (a || t !== +t || t === (0 | t) || (a = !0)), t;
    }
    function b() {
      return a;
    }
    function w(t) {
      return null != t && t.window == t;
    }
    function S(t) {
      return (
        "string" == typeof t ||
        (t &&
          "object" == typeof t &&
          "[object String]" === Object.prototype.toString.call(t)) ||
        !1
      );
    }
    function k() {
      var t;
      return (
        void 0 === s &&
          ((s = !1),
          (t = navigator && navigator.userAgent),
          navigator &&
            "Microsoft Internet Explorer" === navigator.appName &&
            t &&
            null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t) &&
            (s = parseFloat(RegExp.$1))),
        s
      );
    }
    if (
      ((t.documentWidth = function (e) {
        var i;
        e = e || document;
        try {
          void 0 === h && m(), (i = e[h].scrollWidth);
        } catch (t) {
          i = g("Width", e);
        }
        return i;
      }),
      (t.documentHeight = function (e) {
        var i;
        e = e || document;
        try {
          void 0 === h && m(), (i = e[h].scrollHeight);
        } catch (t) {
          i = g("Height", e);
        }
        return i;
      }),
      (t.windowWidth = function (t, e) {
        return n("Width", l(arguments));
      }),
      (t.windowHeight = function (t, e) {
        return n("Height", l(arguments));
      }),
      (t.pinchZoomFactor = function (t) {
        return o(t);
      }),
      (t.scrollbarWidth = u),
      "function" == typeof t && !((r = k()) && r < 8) && 9 !== k())
    )
      try {
        t(function () {
          void 0 === h && m(), u();
        });
      } catch (e) {}
  })(
    "undefined" != typeof jQuery
      ? jQuery
      : "undefined" != typeof Zepto
      ? Zepto
      : $
  ),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (n) {
    var s = -1,
      r = -1,
      o = function (t) {
        return parseFloat(t) || 0;
      },
      l = function (t) {
        var t = n(t),
          s = null,
          r = [];
        return (
          t.each(function () {
            var t = n(this),
              e = t.offset().top - o(t.css("margin-top")),
              i = 0 < r.length ? r[r.length - 1] : null;
            null !== i && Math.floor(Math.abs(s - e)) <= 1
              ? (r[r.length - 1] = i.add(t))
              : r.push(t),
              (s = e);
          }),
          r
        );
      },
      h = function (t) {
        var e = { byRow: !0, property: "height", target: null, remove: !1 };
        return "object" == typeof t
          ? n.extend(e, t)
          : ("boolean" == typeof t
              ? (e.byRow = t)
              : "remove" === t && (e.remove = !0),
            e);
      },
      p = (n.fn.matchHeight = function (t) {
        var t = h(t);
        if (t.remove) {
          var i = this;
          return (
            this.css(t.property, ""),
            n.each(p._groups, function (t, e) {
              e.elements = e.elements.not(i);
            }),
            this
          );
        }
        return (
          (this.length <= 1 && !t.target) ||
            (p._groups.push({ elements: this, options: t }), p._apply(this, t)),
          this
        );
      });
    (p.version = "master"),
      (p._groups = []),
      (p._throttle = 80),
      (p._maintainScroll = !1),
      (p._beforeUpdate = null),
      (p._afterUpdate = null),
      (p._rows = l),
      (p._parse = o),
      (p._parseOptions = h),
      (p._apply = function (t, e) {
        var r = h(e),
          i = n(t),
          s = [i],
          a = n(window).scrollTop(),
          e = n("html").outerHeight(!0),
          t = i.parents().filter(":hidden");
        return (
          t.each(function () {
            var t = n(this);
            t.data("style-cache", t.attr("style"));
          }),
          t.css("display", "block"),
          r.byRow &&
            !r.target &&
            (i.each(function () {
              var t = n(this),
                e = t.css("display");
              "inline-block" !== e &&
                "flex" !== e &&
                "inline-flex" !== e &&
                (e = "block"),
                t.data("style-cache", t.attr("style")),
                t.css({
                  display: e,
                  "padding-top": "0",
                  "padding-bottom": "0",
                  "margin-top": "0",
                  "margin-bottom": "0",
                  "border-top-width": "0",
                  "border-bottom-width": "0",
                  height: "100px",
                  overflow: "hidden",
                });
            }),
            (s = l(i)),
            i.each(function () {
              var t = n(this);
              t.attr("style", t.data("style-cache") || "");
            })),
          n.each(s, function (t, e) {
            var e = n(e),
              s = 0;
            if (r.target) s = r.target.outerHeight(!1);
            else {
              if (r.byRow && e.length <= 1) return void e.css(r.property, "");
              e.each(function () {
                var t = n(this),
                  e = t.attr("style"),
                  i = t.css("display"),
                  i = {
                    display: (i =
                      "inline-block" !== i &&
                      "flex" !== i &&
                      "inline-flex" !== i
                        ? "block"
                        : i),
                  };
                (i[r.property] = ""),
                  t.css(i),
                  t.outerHeight(!1) > s && (s = t.outerHeight(!1)),
                  e ? t.attr("style", e) : t.css("display", "");
              });
            }
            e.each(function () {
              var t = n(this),
                e = 0;
              (r.target && t.is(r.target)) ||
                ("border-box" !== t.css("box-sizing") &&
                  ((e +=
                    o(t.css("border-top-width")) +
                    o(t.css("border-bottom-width"))),
                  (e += o(t.css("padding-top")) + o(t.css("padding-bottom")))),
                t.css(r.property, s - e + "px"));
            });
          }),
          t.each(function () {
            var t = n(this);
            t.attr("style", t.data("style-cache") || null);
          }),
          p._maintainScroll &&
            n(window).scrollTop((a / e) * n("html").outerHeight(!0)),
          this
        );
      }),
      (p._applyDataApi = function () {
        var i = {};
        n("[data-match-height], [data-mh]").each(function () {
          var t = n(this),
            e = t.attr("data-mh") || t.attr("data-match-height");
          i[e] = e in i ? i[e].add(t) : t;
        }),
          n.each(i, function () {
            this.matchHeight(!0);
          });
      });
    var a = function (t) {
      p._beforeUpdate && p._beforeUpdate(t, p._groups),
        n.each(p._groups, function () {
          p._apply(this.elements, this.options);
        }),
        p._afterUpdate && p._afterUpdate(t, p._groups);
    };
    (p._update = function (t, e) {
      if (e && "resize" === e.type) {
        var i = n(window).width();
        if (i === s) return;
        s = i;
      }
      t
        ? -1 === r &&
          (r = setTimeout(function () {
            a(e), (r = -1);
          }, p._throttle))
        : a(e);
    }),
      n(p._applyDataApi);
    var t = n.fn.on ? "on" : "bind";
    n(window)[t]("load", function (t) {
      p._update(!1, t);
    }),
      n(window)[t]("resize orientationchange", function (t) {
        p._update(!0, t);
      });
  }),
  (function (r) {
    r.fn.fitVids = function (t) {
      var i = { customSelector: null },
        e,
        s;
      return (
        document.getElementById("fit-vids-style") ||
          ((e = document.head || document.getElementsByTagName("head")[0]),
          ((s = document.createElement("div")).innerHTML =
            '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
          e.appendChild(s.childNodes[1])),
        t && r.extend(i, t),
        this.each(function () {
          var t = [
              "iframe[src*='player.vimeo.com']",
              "iframe[src*='youtube.com']",
              "iframe[src*='wistia.net']",
              "iframe[src*='youtube-nocookie.com']",
              "iframe[src*='kickstarter.com'][src*='video.html']",
              "object",
              "embed",
            ],
            e;
          i.customSelector && t.push(i.customSelector),
            (e = (e = r(this).find(t.join(","))).not("object object")).each(
              function () {
                var t = r(this),
                  e,
                  i;
                ("embed" === this.tagName.toLowerCase() &&
                  t.parent("object").length) ||
                  t.parent(".fluid-width-video-wrapper").length ||
                  (t.css("height") ||
                    t.css("width") ||
                    (!isNaN(t.attr("height")) && !isNaN(t.attr("width"))) ||
                    (t.attr("height", 9), t.attr("width", 16)),
                  (e =
                    ("object" === this.tagName.toLowerCase() ||
                    (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)))
                      ? parseInt(t.attr("height"), 10)
                      : t.height()) /
                    (isNaN(parseInt(t.attr("width"), 10))
                      ? t.width()
                      : parseInt(t.attr("width"), 10))),
                  t.attr("id") ||
                    ((i = "fitvid" + Math.floor(999999 * Math.random())),
                    t.attr("id", i)),
                  t
                    .wrap('<div class="fluid-width-video-wrapper"></div>')
                    .parent(".fluid-width-video-wrapper")
                    .css("padding-top", 100 * e + "%"),
                  t.removeAttr("height").removeAttr("width"));
              }
            );
        })
      );
    };
  })(window.jQuery || window.Zepto),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (h) {
    var s,
      n = window.Slick || {},
      s = 0;
    ((n = function (t, e) {
      var t,
        i = this;
      (i.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: h(t),
        appendDots: h(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (t, e) {
          return h('<button type="button" />').text(e + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (i.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        h.extend(i, i.initials),
        (i.activeBreakpoint = null),
        (i.animType = null),
        (i.animProp = null),
        (i.breakpoints = []),
        (i.breakpointSettings = []),
        (i.cssTransitions = !1),
        (i.focussed = !1),
        (i.interrupted = !1),
        (i.hidden = "hidden"),
        (i.paused = !0),
        (i.positionProp = null),
        (i.respondTo = null),
        (i.rowCount = 1),
        (i.shouldClick = !0),
        (i.$slider = h(t)),
        (i.$slidesCache = null),
        (i.transformType = null),
        (i.transitionType = null),
        (i.visibilityChange = "visibilitychange"),
        (i.windowWidth = 0),
        (i.windowTimer = null),
        (t = h(t).data("slick") || {}),
        (i.options = h.extend({}, i.defaults, e, t)),
        (i.currentSlide = i.options.initialSlide),
        (i.originalSettings = i.options),
        void 0 !== document.mozHidden
          ? ((i.hidden = "mozHidden"),
            (i.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((i.hidden = "webkitHidden"),
            (i.visibilityChange = "webkitvisibilitychange")),
        (i.autoPlay = h.proxy(i.autoPlay, i)),
        (i.autoPlayClear = h.proxy(i.autoPlayClear, i)),
        (i.autoPlayIterator = h.proxy(i.autoPlayIterator, i)),
        (i.changeSlide = h.proxy(i.changeSlide, i)),
        (i.clickHandler = h.proxy(i.clickHandler, i)),
        (i.selectHandler = h.proxy(i.selectHandler, i)),
        (i.setPosition = h.proxy(i.setPosition, i)),
        (i.swipeHandler = h.proxy(i.swipeHandler, i)),
        (i.dragHandler = h.proxy(i.dragHandler, i)),
        (i.keyHandler = h.proxy(i.keyHandler, i)),
        (i.instanceUid = s++),
        (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        i.registerBreakpoints(),
        i.init(!0);
    }).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (n.prototype.addSlide = n.prototype.slickAdd =
        function (t, e, i) {
          var s = this;
          if ("boolean" == typeof e) (i = e), (e = null);
          else if (e < 0 || e >= s.slideCount) return !1;
          s.unload(),
            "number" == typeof e
              ? 0 === e && 0 === s.$slides.length
                ? h(t).appendTo(s.$slideTrack)
                : i
                ? h(t).insertBefore(s.$slides.eq(e))
                : h(t).insertAfter(s.$slides.eq(e))
              : !0 === i
              ? h(t).prependTo(s.$slideTrack)
              : h(t).appendTo(s.$slideTrack),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            s.$slides.each(function (t, e) {
              h(e).attr("data-slick-index", t);
            }),
            (s.$slidesCache = s.$slides),
            s.reinit();
        }),
      (n.prototype.animateHeight = function () {
        var t = this,
          e;
        1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical &&
          ((e = t.$slides.eq(t.currentSlide).outerHeight(!0)),
          t.$list.animate({ height: e }, t.options.speed));
      }),
      (n.prototype.animateSlide = function (t, e) {
        var i = {},
          s = this;
        s.animateHeight(),
          !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
          !1 === s.transformsEnabled
            ? !1 === s.options.vertical
              ? s.$slideTrack.animate(
                  { left: t },
                  s.options.speed,
                  s.options.easing,
                  e
                )
              : s.$slideTrack.animate(
                  { top: t },
                  s.options.speed,
                  s.options.easing,
                  e
                )
            : !1 === s.cssTransitions
            ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
              h({ animStart: s.currentLeft }).animate(
                { animStart: t },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === s.options.vertical
                        ? (i[s.animType] = "translate(" + t + "px, 0px)")
                        : (i[s.animType] = "translate(0px," + t + "px)"),
                      s.$slideTrack.css(i);
                  },
                  complete: function () {
                    e && e.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (t = Math.ceil(t)),
              !1 === s.options.vertical
                ? (i[s.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[s.animType] = "translate3d(0px," + t + "px, 0px)"),
              s.$slideTrack.css(i),
              e &&
                setTimeout(function () {
                  s.disableTransition(), e.call();
                }, s.options.speed));
      }),
      (n.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return (t = t && null !== t ? h(t).not(this.$slider) : t);
      }),
      (n.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t &&
          "object" == typeof t &&
          t.each(function () {
            var t = h(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
          });
      }),
      (n.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade
          ? (i[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (i[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(i);
      }),
      (n.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (n.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (n.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (n.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = h(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = h(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (n.prototype.buildDots = function () {
        var t,
          e,
          i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
          for (
            i.$slider.addClass("slick-dotted"),
              e = h("<ul />").addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            e.append(
              h("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = e.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (n.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, e) {
            h(e)
              .attr("data-slick-index", t)
              .data("originalStyling", h(e).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? h('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          h("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (n.prototype.buildRows = function () {
        var t,
          e,
          i,
          s,
          r,
          a,
          n,
          o = this,
          s = document.createDocumentFragment(),
          a = o.$slider.children();
        if (0 < o.options.rows) {
          for (
            n = o.options.slidesPerRow * o.options.rows,
              r = Math.ceil(a.length / n),
              t = 0;
            t < r;
            t++
          ) {
            for (
              var l = document.createElement("div"), e = 0;
              e < o.options.rows;
              e++
            ) {
              for (
                var h = document.createElement("div"), i = 0;
                i < o.options.slidesPerRow;
                i++
              ) {
                var p = t * n + (e * o.options.slidesPerRow + i);
                a.get(p) && h.appendChild(a.get(p));
              }
              l.appendChild(h);
            }
            s.appendChild(l);
          }
          o.$slider.empty().append(s),
            o.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (n.prototype.checkResponsive = function (t, e) {
        var i,
          s,
          r,
          a = this,
          n = !1,
          o = a.$slider.width(),
          l = window.innerWidth || h(window).width();
        if (
          ("window" === a.respondTo
            ? (r = l)
            : "slider" === a.respondTo
            ? (r = o)
            : "min" === a.respondTo && (r = Math.min(l, o)),
          a.options.responsive &&
            a.options.responsive.length &&
            null !== a.options.responsive)
        ) {
          for (i in ((s = null), a.breakpoints))
            a.breakpoints.hasOwnProperty(i) &&
              (!1 === a.originalSettings.mobileFirst
                ? r < a.breakpoints[i] && (s = a.breakpoints[i])
                : r > a.breakpoints[i] && (s = a.breakpoints[i]));
          null !== s
            ? (null !== a.activeBreakpoint && s === a.activeBreakpoint && !e) ||
              ((a.activeBreakpoint = s),
              "unslick" === a.breakpointSettings[s]
                ? a.unslick(s)
                : ((a.options = h.extend(
                    {},
                    a.originalSettings,
                    a.breakpointSettings[s]
                  )),
                  !0 === t && (a.currentSlide = a.options.initialSlide),
                  a.refresh(t)),
              (n = s))
            : null !== a.activeBreakpoint &&
              ((a.activeBreakpoint = null),
              (a.options = a.originalSettings),
              !0 === t && (a.currentSlide = a.options.initialSlide),
              a.refresh(t),
              (n = s)),
            t || !1 === n || a.$slider.trigger("breakpoint", [a, n]);
        }
      }),
      (n.prototype.changeSlide = function (t, e) {
        var i,
          s,
          r = this,
          a = h(t.currentTarget);
        switch (
          (a.is("a") && t.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (i =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (s =
              0 == i ? r.options.slidesToScroll : r.options.slidesToShow - i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide - s, !1, e);
            break;
          case "next":
            (s = 0 == i ? r.options.slidesToScroll : i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide + s, !1, e);
            break;
          case "index":
            var s =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(s), !1, e),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (n.prototype.checkNavigable = function (t) {
        var e,
          i,
          i = 0;
        if (t > (e = this.getNavigableIndexes())[e.length - 1])
          t = e[e.length - 1];
        else
          for (var s in e) {
            if (t < e[s]) {
              t = i;
              break;
            }
            i = e[s];
          }
        return t;
      }),
      (n.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (h("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", h.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", h.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          h(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            h(t.$slideTrack).children().off("click.slick", t.selectHandler),
          h(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          h(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          h("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          h(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (n.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", h.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", h.proxy(t.interrupt, t, !1));
      }),
      (n.prototype.cleanUpRows = function () {
        var t,
          e = this;
        0 < e.options.rows &&
          ((t = e.$slides.children().children()).removeAttr("style"),
          e.$slider.empty().append(t));
      }),
      (n.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (n.prototype.destroy = function (t) {
        var e = this;
        e.autoPlayClear(),
          (e.touchObject = {}),
          e.cleanUpEvents(),
          h(".slick-cloned", e.$slider).detach(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.$prevArrow.length &&
            (e.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
          e.$nextArrow &&
            e.$nextArrow.length &&
            (e.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
          e.$slides &&
            (e.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                h(this).attr("style", h(this).data("originalStyling"));
              }),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slideTrack.detach(),
            e.$list.detach(),
            e.$slider.append(e.$slides)),
          e.cleanUpRows(),
          e.$slider.removeClass("slick-slider"),
          e.$slider.removeClass("slick-initialized"),
          e.$slider.removeClass("slick-dotted"),
          (e.unslicked = !0),
          t || e.$slider.trigger("destroy", [e]);
      }),
      (n.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] = ""),
          (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(i);
      }),
      (n.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (n.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions
          ? e.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: e.options.zIndex - 2 },
                e.options.speed,
                e.options.easing
              )
          : (e.applyTransition(t),
            e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (n.prototype.filterSlides = n.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            ((e.$slidesCache = e.$slides),
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (n.prototype.focusHandler = function () {
        var i = this;
        i.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick", "*", function (t) {
            var e = h(this);
            setTimeout(function () {
              i.options.pauseOnFocus &&
                e.is(":focus") &&
                ((i.focussed = !0), i.autoPlay());
            }, 0);
          })
          .on("blur.slick", "*", function (t) {
            h(this),
              i.options.pauseOnFocus && ((i.focussed = !1), i.autoPlay());
          });
      }),
      (n.prototype.getCurrent = n.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (n.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          s = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++s;
          else
            for (; e < t.slideCount; )
              ++s,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) s = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++s,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
        else
          s =
            1 +
            Math.ceil(
              (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            );
        return s - 1;
      }),
      (n.prototype.getLeft = function (t) {
        var e,
          e,
          i,
          s,
          r = this,
          i = 0;
        return (
          (r.slideOffset = 0),
          (e = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (s = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (s = -1.5)
                    : 1 === r.options.slidesToShow && (s = -2)),
                (i = e * r.options.slidesToShow * s)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                t + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (i =
                  t > r.slideCount
                    ? ((r.slideOffset =
                        (r.options.slidesToShow - (t - r.slideCount)) *
                        r.slideWidth *
                        -1),
                      (r.options.slidesToShow - (t - r.slideCount)) * e * -1)
                    : ((r.slideOffset =
                        (r.slideCount % r.options.slidesToScroll) *
                        r.slideWidth *
                        -1),
                      (r.slideCount % r.options.slidesToScroll) * e * -1)))
            : t + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (t + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (i = (t + r.options.slidesToShow - r.slideCount) * e)),
          r.slideCount <= r.options.slidesToShow && (i = r.slideOffset = 0),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (e =
            !1 === r.options.vertical
              ? t * r.slideWidth * -1 + r.slideOffset
              : t * e * -1 + i),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(t)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(t + r.options.slidesToShow)),
            (e =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children(".slick-slide").eq(t)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(t + r.options.slidesToShow + 1)),
              (e =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (e += (r.$list.width() - i.outerWidth()) / 2))),
          e
        );
      }),
      (n.prototype.getOption = n.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (n.prototype.getNavigableIndexes = function () {
        for (
          var t,
            e = this,
            i = 0,
            s = 0,
            r = [],
            t =
              !1 === e.options.infinite
                ? e.slideCount
                : ((i = -1 * e.options.slidesToScroll),
                  (s = -1 * e.options.slidesToScroll),
                  2 * e.slideCount);
          i < t;

        )
          r.push(i),
            (i = s + e.options.slidesToScroll),
            (s +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return r;
      }),
      (n.prototype.getSlick = function () {
        return this;
      }),
      (n.prototype.getSlideCount = function () {
        var r,
          a,
          t,
          n = this,
          t = !0 === n.options.centerMode ? Math.floor(n.$list.width() / 2) : 0,
          a = -1 * n.swipeLeft + t;
        return !0 === n.options.swipeToSlide
          ? (n.$slideTrack.find(".slick-slide").each(function (t, e) {
              var i,
                s,
                i = h(e).outerWidth(),
                s = e.offsetLeft;
              if ((!0 !== n.options.centerMode && (s += i / 2), a < s + i))
                return (r = e), !1;
            }),
            Math.abs(h(r).attr("data-slick-index") - n.currentSlide) || 1)
          : n.options.slidesToScroll;
      }),
      (n.prototype.goTo = n.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (n.prototype.init = function (t) {
        var e = this;
        h(e.$slider).hasClass("slick-initialized") ||
          (h(e.$slider).addClass("slick-initialized"),
          e.buildRows(),
          e.buildOut(),
          e.setProps(),
          e.startLoad(),
          e.loadSlider(),
          e.initializeEvents(),
          e.updateArrows(),
          e.updateDots(),
          e.checkResponsive(!0),
          e.focusHandler()),
          t && e.$slider.trigger("init", [e]),
          !0 === e.options.accessibility && e.initADA(),
          e.options.autoplay && ((e.paused = !1), e.autoPlay());
      }),
      (n.prototype.initADA = function () {
        var i = this,
          s = Math.ceil(i.slideCount / i.options.slidesToShow),
          r = i.getNavigableIndexes().filter(function (t) {
            return 0 <= t && t < i.slideCount;
          });
        i.$slides
          .add(i.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== i.$dots &&
            (i.$slides
              .not(i.$slideTrack.find(".slick-cloned"))
              .each(function (t) {
                var e = r.indexOf(t),
                  e;
                h(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + i.instanceUid + t,
                  tabindex: -1,
                }),
                  -1 !== e &&
                    ((e = "slick-slide-control" + i.instanceUid + e),
                    h("#" + e).length &&
                      h(this).attr({ "aria-describedby": e }));
              }),
            i.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (t) {
                var e = r[t];
                h(this).attr({ role: "presentation" }),
                  h(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + i.instanceUid + t,
                      "aria-controls": "slick-slide" + i.instanceUid + e,
                      "aria-label": t + 1 + " of " + s,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(i.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++)
          i.options.focusOnChange
            ? i.$slides.eq(t).attr({ tabindex: "0" })
            : i.$slides.eq(t).removeAttr("tabindex");
        i.activateADA();
      }),
      (n.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, t.changeSlide),
          t.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow.on("keydown.slick", t.keyHandler),
            t.$nextArrow.on("keydown.slick", t.keyHandler)));
      }),
      (n.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          t.slideCount > t.options.slidesToShow &&
          (h("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            t.slideCount > t.options.slidesToShow &&
            h("li", t.$dots)
              .on("mouseenter.slick", h.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", h.proxy(t.interrupt, t, !1));
      }),
      (n.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", h.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", h.proxy(t.interrupt, t, !1)));
      }),
      (n.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          h(document).on(t.visibilityChange, h.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            h(t.$slideTrack).children().on("click.slick", t.selectHandler),
          h(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            h.proxy(t.orientationChange, t)
          ),
          h(window).on(
            "resize.slick.slick-" + t.instanceUid,
            h.proxy(t.resize, t)
          ),
          h("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          h(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          h(t.setPosition);
      }),
      (n.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.show(), t.$nextArrow.show()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show();
      }),
      (n.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === e.options.accessibility
            ? e.changeSlide({
                data: { message: !0 === e.options.rtl ? "next" : "previous" },
              })
            : 39 === t.keyCode &&
              !0 === e.options.accessibility &&
              e.changeSlide({
                data: { message: !0 === e.options.rtl ? "previous" : "next" },
              }));
      }),
      (n.prototype.lazyLoad = function () {
        var t,
          e,
          i,
          a = this;
        function s(t) {
          h("img[data-lazy]", t).each(function () {
            var t = h(this),
              e = h(this).attr("data-lazy"),
              i = h(this).attr("data-srcset"),
              s = h(this).attr("data-sizes") || a.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr("srcset", i), s && t.attr("sizes", s)),
                  t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  a.$slider.trigger("lazyLoaded", [a, t, e]);
              });
            }),
              (r.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, t, e]);
              }),
              (r.src = e);
          });
        }
        if (
          (!0 === a.options.centerMode
            ? (i =
                !0 === a.options.infinite
                  ? (e = a.currentSlide + (a.options.slidesToShow / 2 + 1)) +
                    a.options.slidesToShow +
                    2
                  : ((e = Math.max(
                      0,
                      a.currentSlide - (a.options.slidesToShow / 2 + 1)
                    )),
                    a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide))
            : ((e = a.options.infinite
                ? a.options.slidesToShow + a.currentSlide
                : a.currentSlide),
              (i = Math.ceil(e + a.options.slidesToShow)),
              !0 === a.options.fade &&
                (0 < e && e--, i <= a.slideCount && i++)),
          (t = a.$slider.find(".slick-slide").slice(e, i)),
          "anticipated" === a.options.lazyLoad)
        )
          for (
            var r = e - 1, n = i, o = a.$slider.find(".slick-slide"), l = 0;
            l < a.options.slidesToScroll;
            l++
          )
            r < 0 && (r = a.slideCount - 1),
              (t = (t = t.add(o.eq(r))).add(o.eq(n))),
              r--,
              n++;
        s(t),
          a.slideCount <= a.options.slidesToShow
            ? s(a.$slider.find(".slick-slide"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow
            ? s(
                a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow)
              )
            : 0 === a.currentSlide &&
              s(
                a.$slider
                  .find(".slick-cloned")
                  .slice(-1 * a.options.slidesToShow)
              );
      }),
      (n.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass("slick-loading"),
          t.initUI(),
          "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
      }),
      (n.prototype.next = n.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (n.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (n.prototype.pause = n.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (n.prototype.play = n.prototype.slickPlay =
        function () {
          var t = this;
          t.autoPlay(),
            (t.options.autoplay = !0),
            (t.paused = !1),
            (t.focussed = !1),
            (t.interrupted = !1);
        }),
      (n.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked ||
          (e.$slider.trigger("afterChange", [e, t]),
          (e.animating = !1),
          e.slideCount > e.options.slidesToShow && e.setPosition(),
          (e.swipeLeft = null),
          e.options.autoplay && e.autoPlay(),
          !0 === e.options.accessibility &&
            (e.initADA(),
            e.options.focusOnChange &&
              h(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (n.prototype.prev = n.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (n.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (n.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var e,
          i,
          s,
          r,
          a,
          n = this,
          a = h("img[data-lazy]", n.$slider);
        a.length
          ? ((e = a.first()),
            (i = e.attr("data-lazy")),
            (s = e.attr("data-srcset")),
            (r = e.attr("data-sizes") || n.$slider.attr("data-sizes")),
            ((a = document.createElement("img")).onload = function () {
              s && (e.attr("srcset", s), r && e.attr("sizes", r)),
                e
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === n.options.adaptiveHeight && n.setPosition(),
                n.$slider.trigger("lazyLoaded", [n, e, i]),
                n.progressiveLazyLoad();
            }),
            (a.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    n.progressiveLazyLoad(t + 1);
                  }, 500)
                : (e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  n.$slider.trigger("lazyLoadError", [n, e, i]),
                  n.progressiveLazyLoad());
            }),
            (a.src = i))
          : n.$slider.trigger("allImagesLoaded", [n]);
      }),
      (n.prototype.refresh = function (t) {
        var e,
          e,
          i = this,
          e = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > e && (i.currentSlide = e),
          i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
          (e = i.currentSlide),
          i.destroy(!0),
          h.extend(i, i.initials, { currentSlide: e }),
          i.init(),
          t || i.changeSlide({ data: { message: "index", index: e } }, !1);
      }),
      (n.prototype.registerBreakpoints = function () {
        var t,
          e,
          i,
          s = this,
          r = s.options.responsive || null;
        if ("array" === h.type(r) && r.length) {
          for (t in ((s.respondTo = s.options.respondTo || "window"), r))
            if (((i = s.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (e = r[t].breakpoint; 0 <= i; )
                s.breakpoints[i] &&
                  s.breakpoints[i] === e &&
                  s.breakpoints.splice(i, 1),
                  i--;
              s.breakpoints.push(e), (s.breakpointSettings[e] = r[t].settings);
            }
          s.breakpoints.sort(function (t, e) {
            return s.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (n.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            h(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (n.prototype.resize = function () {
        var t = this;
        h(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = h(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (n.prototype.removeSlide = n.prototype.slickRemove =
        function (t, e, i) {
          var s = this;
          if (
            ((t =
              "boolean" == typeof t
                ? !0 === (e = t)
                  ? 0
                  : s.slideCount - 1
                : !0 === e
                ? --t
                : t),
            s.slideCount < 1 || t < 0 || t > s.slideCount - 1)
          )
            return !1;
          s.unload(),
            (!0 === i
              ? s.$slideTrack.children()
              : s.$slideTrack.children(this.options.slide).eq(t)
            ).remove(),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            (s.$slidesCache = s.$slides),
            s.reinit();
        }),
      (n.prototype.setCSS = function (t) {
        var e,
          i,
          s = this,
          r = {};
        !0 === s.options.rtl && (t = -t),
          (e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
          (i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
          (r[s.positionProp] = t),
          !1 === s.transformsEnabled ||
            (!(r = {}) === s.cssTransitions
              ? (r[s.animType] = "translate(" + e + ", " + i + ")")
              : (r[s.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
          s.$slideTrack.css(r);
      }),
      (n.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (n.prototype.setFade = function () {
        var i,
          s = this;
        s.$slides.each(function (t, e) {
          (i = s.slideWidth * t * -1),
            !0 === s.options.rtl
              ? h(e).css({
                  position: "relative",
                  right: i,
                  top: 0,
                  zIndex: s.options.zIndex - 2,
                  opacity: 0,
                })
              : h(e).css({
                  position: "relative",
                  left: i,
                  top: 0,
                  zIndex: s.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          s.$slides
            .eq(s.currentSlide)
            .css({ zIndex: s.options.zIndex - 1, opacity: 1 });
      }),
      (n.prototype.setHeight = function () {
        var t = this,
          e;
        1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical &&
          ((e = t.$slides.eq(t.currentSlide).outerHeight(!0)),
          t.$list.css("height", e));
      }),
      (n.prototype.setOption = n.prototype.slickSetOption =
        function () {
          var t,
            e,
            i,
            s,
            r,
            a = this,
            n = !1;
          if (
            ("object" === h.type(arguments[0])
              ? ((i = arguments[0]), (n = arguments[1]), (r = "multiple"))
              : "string" === h.type(arguments[0]) &&
                ((i = arguments[0]),
                (s = arguments[1]),
                (n = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === h.type(arguments[1])
                  ? (r = "responsive")
                  : void 0 !== arguments[1] && (r = "single")),
            "single" === r)
          )
            a.options[i] = s;
          else if ("multiple" === r)
            h.each(i, function (t, e) {
              a.options[t] = e;
            });
          else if ("responsive" === r)
            for (e in s)
              if ("array" !== h.type(a.options.responsive))
                a.options.responsive = [s[e]];
              else {
                for (t = a.options.responsive.length - 1; 0 <= t; )
                  a.options.responsive[t].breakpoint === s[e].breakpoint &&
                    a.options.responsive.splice(t, 1),
                    t--;
                a.options.responsive.push(s[e]);
              }
          n && (a.unload(), a.reinit());
        }),
      (n.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(),
          t.setHeight(),
          !1 === t.options.fade
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
          t.$slider.trigger("setPosition", [t]);
      }),
      (n.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (n.prototype.setSlideClasses = function (t) {
        var e,
          i,
          s,
          e,
          r = this,
          a,
          e,
          i = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true");
        r.$slides.eq(t).addClass("slick-current"),
          !0 === r.options.centerMode
            ? ((a = r.options.slidesToShow % 2 == 0 ? 1 : 0),
              (e = Math.floor(r.options.slidesToShow / 2)),
              !0 === r.options.infinite &&
                (e <= t && t <= r.slideCount - 1 - e
                  ? r.$slides
                      .slice(t - e + a, t + e + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((s = r.options.slidesToShow + t),
                    i
                      .slice(s - e + 1 + a, s + e + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === t
                  ? i
                      .eq(i.length - 1 - r.options.slidesToShow)
                      .addClass("slick-center")
                  : t === r.slideCount - 1 &&
                    i.eq(r.options.slidesToShow).addClass("slick-center")),
              r.$slides.eq(t).addClass("slick-center"))
            : 0 <= t && t <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(t, t + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= r.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((e = r.slideCount % r.options.slidesToShow),
              (s = !0 === r.options.infinite ? r.options.slidesToShow + t : t),
              (r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - t < r.options.slidesToShow
                ? i.slice(s - (r.options.slidesToShow - e), s + e)
                : i.slice(s, s + r.options.slidesToShow)
              )
                .addClass("slick-active")
                .attr("aria-hidden", "false")),
          ("ondemand" !== r.options.lazyLoad &&
            "anticipated" !== r.options.lazyLoad) ||
            r.lazyLoad();
      }),
      (n.prototype.setupInfinite = function () {
        var t,
          e,
          i,
          s = this;
        if (
          (!0 === s.options.fade && (s.options.centerMode = !1),
          !0 === s.options.infinite &&
            !1 === s.options.fade &&
            ((e = null), s.slideCount > s.options.slidesToShow))
        ) {
          for (
            i =
              !0 === s.options.centerMode
                ? s.options.slidesToShow + 1
                : s.options.slidesToShow,
              t = s.slideCount;
            t > s.slideCount - i;
            --t
          )
            h(s.$slides[(e = t - 1)])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
          for (t = 0; t < i + s.slideCount; t += 1)
            h(s.$slides[(e = t)])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
          s.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              h(this).attr("id", "");
            });
        }
      }),
      (n.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (n.prototype.selectHandler = function (t) {
        var e = this,
          t = h(t.target).is(".slick-slide")
            ? h(t.target)
            : h(t.target).parents(".slick-slide"),
          t,
          t = (t = parseInt(t.attr("data-slick-index"))) || 0;
        e.slideCount <= e.options.slidesToShow
          ? e.slideHandler(t, !1, !0)
          : e.slideHandler(t);
      }),
      (n.prototype.slideHandler = function (t, e, i) {
        var s,
          r,
          e,
          e,
          a,
          n,
          o = this;
        if (
          ((e = e || !1),
          !(
            (!0 === o.animating && !0 === o.options.waitForAnimate) ||
            (!0 === o.options.fade && o.currentSlide === t)
          ))
        )
          if (
            (!1 === e && o.asNavFor(t),
            (a = o.getLeft((s = t))),
            (e = o.getLeft(o.currentSlide)),
            (o.currentLeft = null === o.swipeLeft ? e : o.swipeLeft),
            !1 === o.options.infinite &&
              !1 === o.options.centerMode &&
              (t < 0 || t > o.getDotCount() * o.options.slidesToScroll))
          )
            !1 === o.options.fade &&
              ((s = o.currentSlide),
              !0 !== i && o.slideCount > o.options.slidesToShow
                ? o.animateSlide(e, function () {
                    o.postSlide(s);
                  })
                : o.postSlide(s));
          else if (
            !1 === o.options.infinite &&
            !0 === o.options.centerMode &&
            (t < 0 || t > o.slideCount - o.options.slidesToScroll)
          )
            !1 === o.options.fade &&
              ((s = o.currentSlide),
              !0 !== i && o.slideCount > o.options.slidesToShow
                ? o.animateSlide(e, function () {
                    o.postSlide(s);
                  })
                : o.postSlide(s));
          else {
            if (
              (o.options.autoplay && clearInterval(o.autoPlayTimer),
              (r =
                s < 0
                  ? o.slideCount % o.options.slidesToScroll != 0
                    ? o.slideCount - (o.slideCount % o.options.slidesToScroll)
                    : o.slideCount + s
                  : s >= o.slideCount
                  ? o.slideCount % o.options.slidesToScroll != 0
                    ? 0
                    : s - o.slideCount
                  : s),
              (o.animating = !0),
              o.$slider.trigger("beforeChange", [o, o.currentSlide, r]),
              (e = o.currentSlide),
              (o.currentSlide = r),
              o.setSlideClasses(o.currentSlide),
              o.options.asNavFor &&
                (n = (n = o.getNavTarget()).slick("getSlick")).slideCount <=
                  n.options.slidesToShow &&
                n.setSlideClasses(o.currentSlide),
              o.updateDots(),
              o.updateArrows(),
              !0 === o.options.fade)
            )
              return (
                !0 !== i
                  ? (o.fadeSlideOut(e),
                    o.fadeSlide(r, function () {
                      o.postSlide(r);
                    }))
                  : o.postSlide(r),
                void o.animateHeight()
              );
            !0 !== i && o.slideCount > o.options.slidesToShow
              ? o.animateSlide(a, function () {
                  o.postSlide(r);
                })
              : o.postSlide(r);
          }
      }),
      (n.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass("slick-loading");
      }),
      (n.prototype.swipeDirection = function () {
        var t,
          e,
          t,
          t,
          i = this,
          t = i.touchObject.startX - i.touchObject.curX,
          e = i.touchObject.startY - i.touchObject.curY,
          t = Math.atan2(e, t);
        return ((t =
          (t = Math.round((180 * t) / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <=
          45 &&
          0 <= t) ||
          (t <= 360 && 315 <= t)
          ? !1 === i.options.rtl
            ? "left"
            : "right"
          : 135 <= t && t <= 225
          ? !1 === i.options.rtl
            ? "right"
            : "left"
          : !0 === i.options.verticalSwiping
          ? 35 <= t && t <= 135
            ? "down"
            : "up"
          : "vertical";
      }),
      (n.prototype.swipeEnd = function (t) {
        var e,
          i,
          s = this;
        if (((s.dragging = !1), (s.swiping = !1), s.scrolling))
          return (s.scrolling = !1);
        if (
          ((s.interrupted = !1),
          (s.shouldClick = !(10 < s.touchObject.swipeLength)),
          void 0 === s.touchObject.curX)
        )
          return !1;
        if (
          (!0 === s.touchObject.edgeHit &&
            s.$slider.trigger("edge", [s, s.swipeDirection()]),
          s.touchObject.swipeLength >= s.touchObject.minSwipe)
        ) {
          switch ((i = s.swipeDirection())) {
            case "left":
            case "down":
              (e = s.options.swipeToSlide
                ? s.checkNavigable(s.currentSlide + s.getSlideCount())
                : s.currentSlide + s.getSlideCount()),
                (s.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = s.options.swipeToSlide
                ? s.checkNavigable(s.currentSlide - s.getSlideCount())
                : s.currentSlide - s.getSlideCount()),
                (s.currentDirection = 1);
          }
          "vertical" != i &&
            (s.slideHandler(e),
            (s.touchObject = {}),
            s.$slider.trigger("swipe", [s, i]));
        } else
          s.touchObject.startX !== s.touchObject.curX &&
            (s.slideHandler(s.currentSlide), (s.touchObject = {}));
      }),
      (n.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (n.prototype.swipeMove = function (t) {
        var e,
          i,
          t,
          s,
          i,
          s,
          r = this,
          i = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
        return (
          !(!r.dragging || r.scrolling || (i && 1 !== i.length)) &&
          ((e = r.getLeft(r.currentSlide)),
          (r.touchObject.curX = void 0 !== i ? i[0].pageX : t.clientX),
          (r.touchObject.curY = void 0 !== i ? i[0].pageY : t.clientY),
          (r.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))
          )),
          (s = Math.round(
            Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))
          )),
          !r.options.verticalSwiping && !r.swiping && 4 < s
            ? !(r.scrolling = !0)
            : (!0 === r.options.verticalSwiping &&
                (r.touchObject.swipeLength = s),
              (i = r.swipeDirection()),
              void 0 !== t.originalEvent &&
                4 < r.touchObject.swipeLength &&
                ((r.swiping = !0), t.preventDefault()),
              (s =
                (!1 === r.options.rtl ? 1 : -1) *
                (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
              !0 === r.options.verticalSwiping &&
                (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1),
              (t = r.touchObject.swipeLength),
              (r.touchObject.edgeHit = !1) === r.options.infinite &&
                ((0 === r.currentSlide && "right" === i) ||
                  (r.currentSlide >= r.getDotCount() && "left" === i)) &&
                ((t = r.touchObject.swipeLength * r.options.edgeFriction),
                (r.touchObject.edgeHit = !0)),
              !1 === r.options.vertical
                ? (r.swipeLeft = e + t * s)
                : (r.swipeLeft = e + t * (r.$list.height() / r.listWidth) * s),
              !0 === r.options.verticalSwiping && (r.swipeLeft = e + t * s),
              !0 !== r.options.fade &&
                !1 !== r.options.touchMove &&
                (!0 === r.animating
                  ? ((r.swipeLeft = null), !1)
                  : void r.setCSS(r.swipeLeft))))
        );
      }),
      (n.prototype.swipeStart = function (t) {
        var e,
          i = this;
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return !(i.touchObject = {});
        void 0 !== t.originalEvent &&
          void 0 !== t.originalEvent.touches &&
          (e = t.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== e ? e.pageX : t.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== e ? e.pageY : t.clientY),
          (i.dragging = !0);
      }),
      (n.prototype.unfilterSlides = n.prototype.slickUnfilter =
        function () {
          var t = this;
          null !== t.$slidesCache &&
            (t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.appendTo(t.$slideTrack),
            t.reinit());
        }),
      (n.prototype.unload = function () {
        var t = this;
        h(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (n.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy();
      }),
      (n.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            t.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === t.currentSlide
              ? (t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                  !1 === t.options.centerMode) ||
                  (t.currentSlide >= t.slideCount - 1 &&
                    !0 === t.options.centerMode)) &&
                (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (n.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots &&
          (t.$dots.find("li").removeClass("slick-active").end(),
          t.$dots
            .find("li")
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (n.prototype.visibility = function () {
        var t = this;
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
      }),
      (h.fn.slick = function () {
        for (
          var t,
            e,
            i = this,
            s = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            a = i.length,
            t = 0;
          t < a;
          t++
        )
          if (
            ("object" == typeof s || void 0 === s
              ? (i[t].slick = new n(i[t], s))
              : (e = i[t].slick[s].apply(i[t].slick, r)),
            void 0 !== e)
          )
            return e;
        return i;
      });
  });
var objectFitImages = (function () {
    var o = "bfred-it:object-fit-images",
      l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
      t =
        "undefined" == typeof Image
          ? { style: { "object-position": 1 } }
          : new Image(),
      h = "object-fit" in t.style,
      r = "object-position" in t.style,
      a = "background-size" in t.style,
      p = "string" == typeof t.currentSrc,
      d = t.getAttribute,
      c = t.setAttribute,
      n = !1;
    function f(t, e, i) {
      var i =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
        (e || 1) +
        "' height='" +
        (i || 0) +
        "'%3E%3C/svg%3E";
      d.call(t, "src") !== i && c.call(t, "src", i);
    }
    function u(t, e) {
      t.naturalWidth ? e(t) : setTimeout(u, 100, t, e);
    }
    function m(e) {
      var t = (function (t) {
          for (
            var e, i = getComputedStyle(t).fontFamily, s = {};
            null !== (e = l.exec(i));

          )
            s[e[1]] = e[2];
          return s;
        })(e),
        i = e[o],
        s,
        r,
        a,
        n;
      if (((t["object-fit"] = t["object-fit"] || "fill"), !i.img)) {
        if ("fill" === t["object-fit"]) return;
        if (!i.skipTest && h && !t["object-position"]) return;
      }
      if (!i.img) {
        (i.img = new Image(e.width, e.height)),
          (i.img.srcset = d.call(e, "data-ofi-srcset") || e.srcset),
          (i.img.src = d.call(e, "data-ofi-src") || e.src),
          c.call(e, "data-ofi-src", e.src),
          e.srcset && c.call(e, "data-ofi-srcset", e.srcset),
          f(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
          e.srcset && (e.srcset = "");
        try {
          (s = e),
            (r = {
              get: function (t) {
                return s[o].img[t || "src"];
              },
              set: function (t, e) {
                return (
                  (s[o].img[e || "src"] = t),
                  c.call(s, "data-ofi-" + e, t),
                  m(s),
                  t
                );
              },
            }),
            Object.defineProperty(s, "src", r),
            Object.defineProperty(s, "currentSrc", {
              get: function () {
                return r.get("currentSrc");
              },
            }),
            Object.defineProperty(s, "srcset", {
              get: function () {
                return r.get("srcset");
              },
              set: function (t) {
                return r.set(t, "srcset");
              },
            });
        } catch (t) {
          window.console && console.warn("https://bit.ly/ofi-old-browser");
        }
      }
      (a = i.img).srcset &&
        !p &&
        window.picturefill &&
        ((a[(n = window.picturefill._).ns] && a[n.ns].evaled) ||
          n.fillImg(a, { reselect: !0 }),
        a[n.ns].curSrc ||
          ((a[n.ns].supported = !1), n.fillImg(a, { reselect: !0 })),
        (a.currentSrc = a[n.ns].curSrc || a.src)),
        (e.style.backgroundImage =
          'url("' +
          (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') +
          '")'),
        (e.style.backgroundPosition = t["object-position"] || "center"),
        (e.style.backgroundRepeat = "no-repeat"),
        (e.style.backgroundOrigin = "content-box"),
        /scale-down/.test(t["object-fit"])
          ? u(i.img, function () {
              i.img.naturalWidth > e.width || i.img.naturalHeight > e.height
                ? (e.style.backgroundSize = "contain")
                : (e.style.backgroundSize = "auto");
            })
          : (e.style.backgroundSize = t["object-fit"]
              .replace("none", "auto")
              .replace("fill", "100% 100%")),
        u(i.img, function (t) {
          f(e, t.naturalWidth, t.naturalHeight);
        });
    }
    function g(t, e) {
      var i = !n && !t;
      if (((e = e || {}), (r && !e.skipTest) || !a)) return !1;
      "img" === (t = t || "img")
        ? (t = document.getElementsByTagName("img"))
        : "string" == typeof t
        ? (t = document.querySelectorAll(t))
        : "length" in t || (t = [t]);
      for (var s = 0; s < t.length; s++)
        (t[s][o] = t[s][o] || { skipTest: e.skipTest }), m(t[s]);
      i &&
        (document.body.addEventListener(
          "load",
          function (t) {
            "IMG" === t.target.tagName && g(t.target, { skipTest: e.skipTest });
          },
          !0
        ),
        (n = !0),
        (t = "img")),
        e.watchMQ &&
          window.addEventListener(
            "resize",
            g.bind(null, t, { skipTest: e.skipTest })
          );
    }
    return (
      (g.supportsObjectFit = h),
      (g.supportsObjectPosition = r) ||
        ((HTMLImageElement.prototype.getAttribute = function (t) {
          return d.call(i(this, t), t);
        }),
        (HTMLImageElement.prototype.setAttribute = function (t, e) {
          return c.call(i(this, t), t, String(e));
        })),
      g
    );
    function i(t, e) {
      return t[o] && t[o].img && ("src" === e || "srcset" === e) ? t[o].img : t;
    }
  })(),
  a,
  b,
  lazyInitThrottle;
!(function () {
  var t, s, r, e;
  "undefined" != typeof window &&
    ((t = window.navigator.userAgent.match(/Edge\/(\d{2})\./)),
    (s = !!t && 16 <= parseInt(t[1], 10)),
    "objectFit" in document.documentElement.style == 0 || s
      ? ((r = function (t) {
          var e = t.parentNode,
            i,
            s,
            r,
            a;
          (i = e),
            (s = window.getComputedStyle(i, null)),
            (r = s.getPropertyValue("position")),
            (a = s.getPropertyValue("overflow")),
            (s = s.getPropertyValue("display")),
            (r && "static" !== r) || (i.style.position = "relative"),
            "hidden" !== a && (i.style.overflow = "hidden"),
            (s && "inline" !== s) || (i.style.display = "block"),
            0 === i.clientHeight && (i.style.height = "100%"),
            -1 === i.className.indexOf("object-fit-polyfill") &&
              (i.className = i.className + " object-fit-polyfill"),
            (function (t) {
              var e = window.getComputedStyle(t, null),
                i = {
                  "max-width": "none",
                  "max-height": "none",
                  "min-width": "0px",
                  "min-height": "0px",
                  top: "auto",
                  right: "auto",
                  bottom: "auto",
                  left: "auto",
                  "margin-top": "0px",
                  "margin-right": "0px",
                  "margin-bottom": "0px",
                  "margin-left": "0px",
                },
                s;
              for (s in i)
                e.getPropertyValue(s) !== i[s] && (t.style[s] = i[s]);
            })(t),
            (t.style.position = "absolute"),
            (t.style.height = "100%"),
            (t.style.width = "auto"),
            t.clientWidth > e.clientWidth
              ? ((t.style.top = "0"),
                (t.style.marginTop = "0"),
                (t.style.left = "50%"),
                (t.style.marginLeft = t.clientWidth / -2 + "px"))
              : ((t.style.width = "100%"),
                (t.style.height = "auto"),
                (t.style.left = "0"),
                (t.style.marginLeft = "0"),
                (t.style.top = "50%"),
                (t.style.marginTop = t.clientHeight / -2 + "px"));
        }),
        (e = function (t) {
          if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
          else if (t && t.nodeName) t = [t];
          else if ("object" != typeof t || !t.length || !t[0].nodeName)
            return !1;
          for (var e = 0, i; e < t.length; e++) {
            t[e].nodeName &&
              ("img" !== (i = t[e].nodeName.toLowerCase()) || s
                ? "video" === i &&
                  (0 < t[e].readyState
                    ? r(t[e])
                    : t[e].addEventListener("loadedmetadata", function () {
                        r(this);
                      }))
                : t[e].complete
                ? r(t[e])
                : t[e].addEventListener("load", function () {
                    r(this);
                  }));
          }
          return !0;
        }),
        document.addEventListener("DOMContentLoaded", function () {
          e();
        }),
        window.addEventListener("resize", function () {
          e();
        }),
        (window.objectFitPolyfill = e))
      : (window.objectFitPolyfill = function () {
          return !1;
        }));
})(),
  (function () {
    var a =
        "undefined" != typeof window && void 0 !== window.document
          ? window.document
          : {},
      t = "undefined" != typeof module && module.exports,
      i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      s = (function () {
        for (
          var t,
            e = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            i = 0,
            s = e.length,
            r = {};
          i < s;
          i++
        )
          if ((t = e[i]) && t[1] in a) {
            for (i = 0; i < t.length; i++) r[e[0][i]] = t[i];
            return r;
          }
        return !1;
      })(),
      r = { change: s.fullscreenchange, error: s.fullscreenerror },
      e = {
        request: function (t) {
          var e = s.requestFullscreen;
          (t = t || a.documentElement),
            / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)
              ? t[e]()
              : t[e](i ? Element.ALLOW_KEYBOARD_INPUT : {});
        },
        exit: function () {
          a[s.exitFullscreen]();
        },
        toggle: function (t) {
          this.isFullscreen ? this.exit() : this.request(t);
        },
        onchange: function (t) {
          this.on("change", t);
        },
        onerror: function (t) {
          this.on("error", t);
        },
        on: function (t, e) {
          var t = r[t];
          t && a.addEventListener(t, e, !1);
        },
        off: function (t, e) {
          var t = r[t];
          t && a.removeEventListener(t, e, !1);
        },
        raw: s,
      };
    s
      ? (Object.defineProperties(e, {
          isFullscreen: {
            get: function () {
              return Boolean(a[s.fullscreenElement]);
            },
          },
          element: {
            enumerable: !0,
            get: function () {
              return a[s.fullscreenElement];
            },
          },
          enabled: {
            enumerable: !0,
            get: function () {
              return Boolean(a[s.fullscreenEnabled]);
            },
          },
        }),
        t ? (module.exports = e) : (window.screenfull = e))
      : t
      ? (module.exports = !1)
      : (window.screenfull = !1);
  })(),
  (function (r) {
    var a = function (t, e) {
      (this.el = r(t)),
        (this.options = r.extend({}, r.fn.typed.defaults, e)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = !this.isInput && this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    };
    (a.prototype = {
      constructor: a,
      init: function () {
        var e = this;
        e.timeout = setTimeout(function () {
          for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
          e.shuffle && (e.sequence = e.shuffleArray(e.sequence)),
            e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
        }, e.startDelay);
      },
      build: function () {
        !0 === this.showCursor &&
          ((this.cursor = r(
            '<span class="typed-cursor">' + this.cursorChar + "</span>"
          )),
          this.el.after(this.cursor)),
          this.init();
      },
      typewrite: function (r, a) {
        var t, n;
        !0 !== this.stop &&
          ((t = Math.round(70 * Math.random()) + this.typeSpeed),
          ((n = this).timeout = setTimeout(function () {
            var t = 0,
              e = r.substr(a),
              i;
            if (
              ("^" === e.charAt(0) &&
                ((i = 1),
                /^\^\d+/.test(e) &&
                  ((i += (e = /\d+/.exec(e)[0]).length), (t = parseInt(e))),
                (r = r.substring(0, a) + r.substring(a + i))),
              "html" === n.contentType)
            ) {
              var i = r.substr(a).charAt(0);
              if ("<" === i || "&" === i) {
                for (
                  var s, s = "<" === i ? ">" : ";";
                  r.substr(a).charAt(0) !== s;

                )
                  r.substr(a).charAt(0), a++;
                a++;
              }
            }
            n.timeout = setTimeout(function () {
              var t;
              a === r.length
                ? (n.options.onStringTyped(n.arrayPos),
                  (n.arrayPos === n.strings.length - 1 &&
                    (n.options.callback(),
                    n.curLoop++,
                    !1 === n.loop || n.curLoop === n.loopCount)) ||
                    (n.timeout = setTimeout(function () {
                      n.backspace(r, a);
                    }, n.backDelay)))
                : (0 === a && n.options.preStringTyped(n.arrayPos),
                  (t = r.substr(0, a + 1)),
                  n.attr
                    ? n.el.attr(n.attr, t)
                    : n.isInput
                    ? n.el.val(t)
                    : "html" === n.contentType
                    ? n.el.html(t)
                    : n.el.text(t),
                  a++,
                  n.typewrite(r, a));
            }, t);
          }, t)));
      },
      backspace: function (e, i) {
        var t, s;
        !0 !== this.stop &&
          ((t = Math.round(70 * Math.random()) + this.backSpeed),
          ((s = this).timeout = setTimeout(function () {
            if ("html" === s.contentType && ">" === e.substr(i).charAt(0)) {
              for (; "<" !== e.substr(i).charAt(0); )
                e.substr(i).charAt(0), i--;
              i--;
            }
            var t = e.substr(0, i);
            s.attr
              ? s.el.attr(s.attr, t)
              : s.isInput
              ? s.el.val(t)
              : "html" === s.contentType
              ? s.el.html(t)
              : s.el.text(t),
              i > s.stopNum
                ? (i--, s.backspace(e, i))
                : i <= s.stopNum &&
                  (s.arrayPos++,
                  s.arrayPos === s.strings.length
                    ? ((s.arrayPos = 0),
                      s.shuffle && (s.sequence = s.shuffleArray(s.sequence)),
                      s.init())
                    : s.typewrite(s.strings[s.sequence[s.arrayPos]], i));
          }, t)));
      },
      shuffleArray: function (t) {
        var e,
          i,
          s = t.length;
        if (s)
          for (; --s; )
            (e = t[(i = Math.floor(Math.random() * (s + 1)))]),
              (t[i] = t[s]),
              (t[s] = e);
        return t;
      },
      reset: function () {
        clearInterval(this.timeout);
        var t = this.el.attr("id");
        this.el.after('<span id="' + t + '"/>'),
          this.el.remove(),
          void 0 !== this.cursor && this.cursor.remove(),
          this.options.resetCallback();
      },
    }),
      (r.fn.typed = function (s) {
        return this.each(function () {
          var t = r(this),
            e = t.data("typed"),
            i;
          e || t.data("typed", (e = new a(this, "object" == typeof s && s))),
            "string" == typeof s && e[s]();
        });
      }),
      (r.fn.typed.defaults = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {},
      });
  })(window.jQuery),
  "undefined" != typeof navigator &&
    ((a = window || {}),
    (b = function (window) {
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        initialDefaultFrame = -999999,
        subframeEnabled = !0,
        expressionsPlugin,
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd,
        bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};
      function ProjectInterface() {
        return {};
      }
      !(function () {
        for (
          var t,
            e = [
              "abs",
              "acos",
              "acosh",
              "asin",
              "asinh",
              "atan",
              "atanh",
              "atan2",
              "ceil",
              "cbrt",
              "expm1",
              "clz32",
              "cos",
              "cosh",
              "exp",
              "floor",
              "fround",
              "hypot",
              "imul",
              "log",
              "log1p",
              "log2",
              "log10",
              "max",
              "min",
              "pow",
              "random",
              "round",
              "sign",
              "sin",
              "sinh",
              "sqrt",
              "tan",
              "tanh",
              "trunc",
              "E",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "PI",
              "SQRT1_2",
              "SQRT2",
            ],
            i = e.length,
            t = 0;
          t < i;
          t += 1
        )
          BMMath[e[t]] = Math[e[t]];
      })(),
        (BMMath.random = Math.random),
        (BMMath.abs = function (t) {
          if ("object" == typeof t && t.length) {
            for (
              var e, i = createSizedArray(t.length), s = t.length, e = 0;
              e < s;
              e += 1
            )
              i[e] = Math.abs(t[e]);
            return i;
          }
          return Math.abs(t);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function roundValues(t) {
        bm_rnd = t
          ? Math.round
          : function (t) {
              return t;
            };
      }
      function styleDiv(t) {
        (t.style.position = "absolute"),
          (t.style.top = 0),
          (t.style.left = 0),
          (t.style.display = "block"),
          (t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0"),
          (t.style.backfaceVisibility = t.style.webkitBackfaceVisibility =
            "visible"),
          (t.style.transformStyle =
            t.style.webkitTransformStyle =
            t.style.mozTransformStyle =
              "preserve-3d");
      }
      function BMEnterFrameEvent(t, e, i, s) {
        (this.type = t),
          (this.currentTime = e),
          (this.totalTime = i),
          (this.direction = s < 0 ? -1 : 1);
      }
      function BMCompleteEvent(t, e) {
        (this.type = t), (this.direction = e < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(t, e, i, s) {
        (this.type = t),
          (this.currentLoop = i),
          (this.totalLoops = e),
          (this.direction = s < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(t, e, i) {
        (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
      }
      function BMDestroyEvent(t, e) {
        (this.type = t), (this.target = e);
      }
      roundValues(!1);
      var createElementID =
          ((D = 0),
          function () {
            return "__lottie_element_" + ++D;
          }),
        D;
      function HSVtoRGB(t, e, i) {
        var s,
          r,
          a,
          n,
          t,
          o,
          l,
          h,
          o = i * (1 - e),
          l = i * (1 - (t = 6 * t - (n = Math.floor(6 * t))) * e),
          h = i * (1 - (1 - t) * e);
        switch (n % 6) {
          case 0:
            (s = i), (r = h), (a = o);
            break;
          case 1:
            (s = l), (r = i), (a = o);
            break;
          case 2:
            (s = o), (r = i), (a = h);
            break;
          case 3:
            (s = o), (r = l), (a = i);
            break;
          case 4:
            (s = h), (r = o), (a = i);
            break;
          case 5:
            (s = i), (r = o), (a = l);
        }
        return [s, r, a];
      }
      function RGBtoHSV(t, e, i) {
        var s,
          r = Math.max(t, e, i),
          a = Math.min(t, e, i),
          n = r - a,
          o = 0 === r ? 0 : n / r,
          l = r / 255;
        switch (r) {
          case a:
            s = 0;
            break;
          case t:
            (s = e - i + n * (e < i ? 6 : 0)), (s /= 6 * n);
            break;
          case e:
            (s = i - t + 2 * n), (s /= 6 * n);
            break;
          case i:
            (s = t - e + 4 * n), (s /= 6 * n);
        }
        return [s, o, l];
      }
      function addSaturationToRGB(t, e) {
        var t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (t[1] += e),
          1 < t[1] ? (t[1] = 1) : t[1] <= 0 && (t[1] = 0),
          HSVtoRGB(t[0], t[1], t[2])
        );
      }
      function addBrightnessToRGB(t, e) {
        var t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (t[2] += e),
          1 < t[2] ? (t[2] = 1) : t[2] < 0 && (t[2] = 0),
          HSVtoRGB(t[0], t[1], t[2])
        );
      }
      function addHueToRGB(t, e) {
        var t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (
          (t[0] += e / 360),
          1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1),
          HSVtoRGB(t[0], t[1], t[2])
        );
      }
      var rgbToHex = (function () {
        for (var t, e, s = [], t = 0; t < 256; t += 1)
          (e = t.toString(16)), (s[t] = 1 == e.length ? "0" + e : e);
        return function (t, e, i) {
          return (
            "#" +
            s[(t = t < 0 ? 0 : t)] +
            s[(e = e < 0 ? 0 : e)] +
            s[(i = i < 0 ? 0 : i)]
          );
        };
      })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (t, e) {
          if (this._cbs[t])
            for (var i = this._cbs[t].length, s = 0; s < i; s++)
              this._cbs[t][s](e);
        },
        addEventListener: function (t, e) {
          return (
            this._cbs[t] || (this._cbs[t] = []),
            this._cbs[t].push(e),
            function () {
              this.removeEventListener(t, e);
            }.bind(this)
          );
        },
        removeEventListener: function (t, e) {
          if (e) {
            if (this._cbs[t]) {
              for (var i = 0, s = this._cbs[t].length; i < s; )
                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), --i, --s),
                  (i += 1);
              this._cbs[t].length || (this._cbs[t] = null);
            }
          } else this._cbs[t] = null;
        },
      };
      var createTypedArray =
        "function" == typeof Uint8ClampedArray &&
        "function" == typeof Float32Array
          ? function (t, e) {
              return "float32" === t
                ? new Float32Array(e)
                : "int16" === t
                ? new Int16Array(e)
                : "uint8c" === t
                ? new Uint8ClampedArray(e)
                : void 0;
            }
          : function (t, e) {
              var i,
                s = 0,
                r = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  i = 1;
                  break;
                default:
                  i = 1.1;
              }
              for (s = 0; s < e; s += 1) r.push(i);
              return r;
            };
      function createSizedArray(t) {
        return Array.apply(null, { length: t });
      }
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function createTag(t) {
        return document.createElement(t);
      }
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
          -1 === this.dynamicProperties.indexOf(t) &&
            (this.dynamicProperties.push(t),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          this._mdf = !1;
          for (var t, e = this.dynamicProperties.length, t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue(),
              this.dynamicProperties[t]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (t) {
          (this.container = t),
            (this.dynamicProperties = []),
            (this._mdf = !1),
            (this._isAnimated = !1);
        },
      };
      var getBlendMode =
          ((Ma = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity",
          }),
          function (t) {
            return Ma[t] || "";
          }),
        Ma,
        Matrix =
          ((D8 = Math.cos),
          (E8 = Math.sin),
          (F8 = Math.tan),
          (G8 = Math.round),
          function () {
            (this.reset = H8),
              (this.rotate = I8),
              (this.rotateX = J8),
              (this.rotateY = K8),
              (this.rotateZ = L8),
              (this.skew = N8),
              (this.skewFromAxis = O8),
              (this.shear = M8),
              (this.scale = P8),
              (this.setTransform = Q8),
              (this.translate = R8),
              (this.transform = S8),
              (this.applyToPoint = X8),
              (this.applyToX = Y8),
              (this.applyToY = Z8),
              (this.applyToZ = $8),
              (this.applyToPointArray = ci),
              (this.applyToTriplePoints = bi),
              (this.applyToPointStringified = di),
              (this.toCSS = ei),
              (this.to2dCSS = gi),
              (this.clone = V8),
              (this.cloneFromProps = W8),
              (this.equals = U8),
              (this.inversePoints = ai),
              (this.inversePoint = _8),
              (this._t = this.transform),
              (this.isIdentity = T8),
              (this._identity = !0),
              (this._identityCalculated = !1),
              (this.props = createTypedArray("float32", 16)),
              this.reset();
          }),
        D8,
        E8,
        F8,
        G8;
      function H8() {
        return (
          (this.props[0] = 1),
          (this.props[1] = 0),
          (this.props[2] = 0),
          (this.props[3] = 0),
          (this.props[4] = 0),
          (this.props[5] = 1),
          (this.props[6] = 0),
          (this.props[7] = 0),
          (this.props[8] = 0),
          (this.props[9] = 0),
          (this.props[10] = 1),
          (this.props[11] = 0),
          (this.props[12] = 0),
          (this.props[13] = 0),
          (this.props[14] = 0),
          (this.props[15] = 1),
          this
        );
      }
      function I8(t) {
        if (0 === t) return this;
        var e = D8(t),
          t = E8(t);
        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function J8(t) {
        if (0 === t) return this;
        var e = D8(t),
          t = E8(t);
        return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1);
      }
      function K8(t) {
        if (0 === t) return this;
        var e = D8(t),
          t = E8(t);
        return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1);
      }
      function L8(t) {
        if (0 === t) return this;
        var e = D8(t),
          t = E8(t);
        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function M8(t, e) {
        return this._t(1, e, t, 1, 0, 0);
      }
      function N8(t, e) {
        return this.shear(F8(t), F8(e));
      }
      function O8(t, e) {
        var i = D8(e),
          e = E8(e);
        return this._t(i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(1, 0, 0, 0, F8(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(i, -e, 0, 0, e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function P8(t, e, i) {
        return (
          i || 0 === i || (i = 1),
          1 === t && 1 === e && 1 === i
            ? this
            : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
        );
      }
      function Q8(t, e, i, s, r, a, n, o, l, h, p, d, c, f, u, m) {
        return (
          (this.props[0] = t),
          (this.props[1] = e),
          (this.props[2] = i),
          (this.props[3] = s),
          (this.props[4] = r),
          (this.props[5] = a),
          (this.props[6] = n),
          (this.props[7] = o),
          (this.props[8] = l),
          (this.props[9] = h),
          (this.props[10] = p),
          (this.props[11] = d),
          (this.props[12] = c),
          (this.props[13] = f),
          (this.props[14] = u),
          (this.props[15] = m),
          this
        );
      }
      function R8(t, e, i) {
        return (
          (i = i || 0),
          0 !== t || 0 !== e || 0 !== i
            ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
            : this
        );
      }
      function S8(t, e, i, s, r, a, n, o, l, h, p, d, c, f, u, m) {
        var g = this.props;
        if (
          1 === t &&
          0 === e &&
          0 === i &&
          0 === s &&
          0 === r &&
          1 === a &&
          0 === n &&
          0 === o &&
          0 === l &&
          0 === h &&
          1 === p &&
          0 === d
        )
          return (
            (g[12] = g[12] * t + g[15] * c),
            (g[13] = g[13] * a + g[15] * f),
            (g[14] = g[14] * p + g[15] * u),
            (g[15] = g[15] * m),
            (this._identityCalculated = !1),
            this
          );
        var y = g[0],
          v = g[1],
          b = g[2],
          w = g[3],
          S = g[4],
          k = g[5],
          T = g[6],
          x = g[7],
          P = g[8],
          A = g[9],
          C = g[10],
          _ = g[11],
          E = g[12],
          M = g[13],
          $ = g[14],
          D = g[15];
        return (
          (g[0] = y * t + v * r + b * l + w * c),
          (g[1] = y * e + v * a + b * h + w * f),
          (g[2] = y * i + v * n + b * p + w * u),
          (g[3] = y * s + v * o + b * d + w * m),
          (g[4] = S * t + k * r + T * l + x * c),
          (g[5] = S * e + k * a + T * h + x * f),
          (g[6] = S * i + k * n + T * p + x * u),
          (g[7] = S * s + k * o + T * d + x * m),
          (g[8] = P * t + A * r + C * l + _ * c),
          (g[9] = P * e + A * a + C * h + _ * f),
          (g[10] = P * i + A * n + C * p + _ * u),
          (g[11] = P * s + A * o + C * d + _ * m),
          (g[12] = E * t + M * r + $ * l + D * c),
          (g[13] = E * e + M * a + $ * h + D * f),
          (g[14] = E * i + M * n + $ * p + D * u),
          (g[15] = E * s + M * o + $ * d + D * m),
          (this._identityCalculated = !1),
          this
        );
      }
      function T8() {
        return (
          this._identityCalculated ||
            ((this._identity = !(
              1 !== this.props[0] ||
              0 !== this.props[1] ||
              0 !== this.props[2] ||
              0 !== this.props[3] ||
              0 !== this.props[4] ||
              1 !== this.props[5] ||
              0 !== this.props[6] ||
              0 !== this.props[7] ||
              0 !== this.props[8] ||
              0 !== this.props[9] ||
              1 !== this.props[10] ||
              0 !== this.props[11] ||
              0 !== this.props[12] ||
              0 !== this.props[13] ||
              0 !== this.props[14] ||
              1 !== this.props[15]
            )),
            (this._identityCalculated = !0)),
          this._identity
        );
      }
      function U8(t) {
        for (var e = 0; e < 16; ) {
          if (t.props[e] !== this.props[e]) return !1;
          e += 1;
        }
        return !0;
      }
      function V8(t) {
        for (var e, e = 0; e < 16; e += 1) t.props[e] = this.props[e];
      }
      function W8(t) {
        for (var e, e = 0; e < 16; e += 1) this.props[e] = t[e];
      }
      function X8(t, e, i) {
        return {
          x:
            t * this.props[0] +
            e * this.props[4] +
            i * this.props[8] +
            this.props[12],
          y:
            t * this.props[1] +
            e * this.props[5] +
            i * this.props[9] +
            this.props[13],
          z:
            t * this.props[2] +
            e * this.props[6] +
            i * this.props[10] +
            this.props[14],
        };
      }
      function Y8(t, e, i) {
        return (
          t * this.props[0] +
          e * this.props[4] +
          i * this.props[8] +
          this.props[12]
        );
      }
      function Z8(t, e, i) {
        return (
          t * this.props[1] +
          e * this.props[5] +
          i * this.props[9] +
          this.props[13]
        );
      }
      function $8(t, e, i) {
        return (
          t * this.props[2] +
          e * this.props[6] +
          i * this.props[10] +
          this.props[14]
        );
      }
      function _8(t) {
        var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
          i = this.props[5] / e,
          s = -this.props[1] / e,
          r = -this.props[4] / e,
          a = this.props[0] / e,
          n =
            (this.props[4] * this.props[13] - this.props[5] * this.props[12]) /
            e,
          e =
            -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) /
            e;
        return [t[0] * i + t[1] * r + n, t[0] * s + t[1] * a + e, 0];
      }
      function ai(t) {
        for (var e, i = t.length, s = [], e = 0; e < i; e += 1) s[e] = _8(t[e]);
        return s;
      }
      function bi(t, e, i) {
        var s = createTypedArray("float32", 6),
          r,
          a,
          n,
          o,
          l,
          h;
        return (
          this.isIdentity()
            ? ((s[0] = t[0]),
              (s[1] = t[1]),
              (s[2] = e[0]),
              (s[3] = e[1]),
              (s[4] = i[0]),
              (s[5] = i[1]))
            : ((r = this.props[0]),
              (a = this.props[1]),
              (n = this.props[4]),
              (o = this.props[5]),
              (l = this.props[12]),
              (h = this.props[13]),
              (s[0] = t[0] * r + t[1] * n + l),
              (s[1] = t[0] * a + t[1] * o + h),
              (s[2] = e[0] * r + e[1] * n + l),
              (s[3] = e[0] * a + e[1] * o + h),
              (s[4] = i[0] * r + i[1] * n + l),
              (s[5] = i[0] * a + i[1] * o + h)),
          s
        );
      }
      function ci(t, e, i) {
        return this.isIdentity()
          ? [t, e, i]
          : [
              t * this.props[0] +
                e * this.props[4] +
                i * this.props[8] +
                this.props[12],
              t * this.props[1] +
                e * this.props[5] +
                i * this.props[9] +
                this.props[13],
              t * this.props[2] +
                e * this.props[6] +
                i * this.props[10] +
                this.props[14],
            ];
      }
      function di(t, e) {
        if (this.isIdentity()) return t + "," + e;
        var i = this.props;
        return (
          Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
          "," +
          Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
        );
      }
      function ei() {
        for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
          (i += G8(1e4 * e[t]) / 1e4), (i += 15 === t ? ")" : ","), (t += 1);
        return i;
      }
      function fi(t) {
        return (t < 1e-6 && 0 < t) || (-1e-6 < t && t < 0)
          ? G8(1e4 * t) / 1e4
          : t;
      }
      function gi() {
        var t = this.props;
        return (
          "matrix(" +
          fi(t[0]) +
          "," +
          fi(t[1]) +
          "," +
          fi(t[4]) +
          "," +
          fi(t[5]) +
          "," +
          fi(t[12]) +
          "," +
          fi(t[13]) +
          ")"
        );
      }
      !(function (a, n) {
        var t,
          o = this,
          l = 256,
          h = "random",
          p = n.pow(l, 6),
          d = n.pow(2, 52),
          c = 2 * d,
          f = l - 1;
        function u(t) {
          var e,
            i = t.length,
            n = this,
            s = 0,
            r = (n.i = n.j = 0),
            a = (n.S = []);
          for (i || (t = [i++]); s < l; ) a[s] = s++;
          for (s = 0; s < l; s++)
            (a[s] = a[(r = f & (r + t[s % i] + (e = a[s])))]), (a[r] = e);
          n.g = function (t) {
            for (var e, i = 0, s = n.i, r = n.j, a = n.S; t--; )
              (e = a[(s = f & (s + 1))]),
                (i =
                  i * l + a[f & ((a[s] = a[(r = f & (r + e))]) + (a[r] = e))]);
            return (n.i = s), (n.j = r), i;
          };
        }
        function m(t, e) {
          return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
        }
        function g(t, e) {
          for (var i, s = t + "", r = 0; r < s.length; )
            e[f & r] = f & ((i ^= 19 * e[f & r]) + s.charCodeAt(r++));
          return y(e);
        }
        function y(t) {
          return String.fromCharCode.apply(0, t);
        }
        (n.seedrandom = function (t, e, i) {
          var s = [],
            t = g(
              (function t(e, i) {
                var s,
                  r = [],
                  a = typeof e;
                if (i && "object" == a)
                  for (s in e)
                    try {
                      r.push(t(e[s], i - 1));
                    } catch (t) {}
                return r.length ? r : "string" == a ? e : e + "\0";
              })(
                (e = !0 === e ? { entropy: !0 } : e || {}).entropy
                  ? [t, y(a)]
                  : null === t
                  ? (function () {
                      try {
                        var t = new Uint8Array(l);
                        return (
                          (o.crypto || o.msCrypto).getRandomValues(t), y(t)
                        );
                      } catch (t) {
                        var e = o.navigator,
                          e = e && e.plugins;
                        return [+new Date(), o, e, o.screen, y(a)];
                      }
                    })()
                  : t,
                3
              ),
              s
            ),
            r = new u(s),
            s = function () {
              for (var t = r.g(6), e = p, i = 0; t < d; )
                (t = (t + i) * l), (e *= l), (i = r.g(1));
              for (; c <= t; ) (t /= 2), (e /= 2), (i >>>= 1);
              return (t + i) / e;
            };
          return (
            (s.int32 = function () {
              return 0 | r.g(4);
            }),
            (s.quick = function () {
              return r.g(4) / 4294967296;
            }),
            (s.double = s),
            g(y(r.S), a),
            (
              e.pass ||
              i ||
              function (t, e, i, s) {
                return (
                  s &&
                    (s.S && m(s, r),
                    (t.state = function () {
                      return m(r, {});
                    })),
                  i ? ((n[h] = t), e) : t
                );
              }
            )(s, t, "global" in e ? e.global : this == n, e.state)
          );
        }),
          g(n.random(), a);
      })([], BMMath);
      var BezierFactory =
          ((Dk = {
            getBezierEasing: function (t, e, i, s, r) {
              var r =
                r ||
                ("bez_" + t + "_" + e + "_" + i + "_" + s).replace(/\./g, "p");
              if (Ek[r]) return Ek[r];
              var s = new Nk([t, e, i, s]);
              return (Ek[r] = s);
            },
          }),
          (Ek = {}),
          (Fk = 11),
          (Gk = 1 / (Fk - 1)),
          (Hk = "function" == typeof Float32Array),
          (Nk.prototype = {
            get: function (t) {
              var e = this._p[0],
                i = this._p[1],
                s = this._p[2],
                r = this._p[3];
              return (
                this._precomputed || this._precompute(),
                e === i && s === r
                  ? t
                  : 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : Lk(this._getTForX(t), i, r)
              );
            },
            _precompute: function () {
              var t = this._p[0],
                e = this._p[1],
                i = this._p[2],
                s = this._p[3];
              (this._precomputed = !0),
                (t === e && i === s) || this._calcSampleValues();
            },
            _calcSampleValues: function () {
              for (var t = this._p[0], e = this._p[2], i = 0; i < Fk; ++i)
                this._mSampleValues[i] = Lk(i * Gk, t, e);
            },
            _getTForX: function (t) {
              for (
                var e = this._p[0],
                  i = this._p[2],
                  s = this._mSampleValues,
                  r = 0,
                  a = 1,
                  n = Fk - 1;
                a !== n && s[a] <= t;
                ++a
              )
                r += Gk;
              var o = r + ((t - s[--a]) / (s[a + 1] - s[a])) * Gk,
                l = Mk(o, e, i);
              return 0.001 <= l
                ? (function (t, e, i, s) {
                    for (var r = 0; r < 4; ++r) {
                      var a = Mk(e, i, s);
                      if (0 === a) return e;
                      e -= (Lk(e, i, s) - t) / a;
                    }
                    return e;
                  })(t, o, e, i)
                : 0 === l
                ? o
                : (function (t, e, i, s, r) {
                    for (
                      var a, n, o = 0;
                      0 < (a = Lk((n = e + (i - e) / 2), s, r) - t)
                        ? (i = n)
                        : (e = n),
                        1e-7 < Math.abs(a) && ++o < 10;

                    );
                    return n;
                  })(t, r, r + Gk, e, i);
            },
          }),
          Dk),
        Dk,
        Ek,
        Fk,
        Gk,
        Hk;
      function Ik(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function Jk(t, e) {
        return 3 * e - 6 * t;
      }
      function Kk(t) {
        return 3 * t;
      }
      function Lk(t, e, i) {
        return ((Ik(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      }
      function Mk(t, e, i) {
        return 3 * Ik(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e;
      }
      function Nk(t) {
        (this._p = t),
          (this._mSampleValues = new (Hk ? Float32Array : Array)(Fk)),
          (this._precomputed = !1),
          (this.get = this.get.bind(this));
      }
      function extendPrototype(t, e) {
        for (var i, s, r = t.length, i = 0; i < r; i += 1)
          for (var a in (s = t[i].prototype))
            s.hasOwnProperty(a) && (e.prototype[a] = s[a]);
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        return (e.prototype = t), e;
      }
      function bezFunction() {
        function g(t, e, i, s, r, a) {
          var e = t * s + e * r + i * a - r * s - a * t - i * e;
          return -0.001 < e && e < 0.001;
        }
        Math;
        var p = function (t, e, i, s) {
          for (
            var r,
              a,
              n,
              o,
              l,
              h,
              p = defaultCurveSegments,
              d = 0,
              c = [],
              f = [],
              u = bezier_length_pool.newElement(),
              n = i.length,
              r = 0;
            r < p;
            r += 1
          ) {
            for (l = r / (p - 1), a = h = 0; a < n; a += 1)
              (o =
                bm_pow(1 - l, 3) * t[a] +
                3 * bm_pow(1 - l, 2) * l * i[a] +
                3 * (1 - l) * bm_pow(l, 2) * s[a] +
                bm_pow(l, 3) * e[a]),
                (c[a] = o),
                null !== f[a] && (h += bm_pow(c[a] - f[a], 2)),
                (f[a] = c[a]);
            h && (d += h = bm_sqrt(h)), (u.percents[r] = l), (u.lengths[r] = d);
          }
          return (u.addedLength = d), u;
        };
        function y(t) {
          (this.segmentLength = 0), (this.points = new Array(t));
        }
        function v(t, e) {
          (this.partialLength = t), (this.point = e);
        }
        var b,
          t =
            ((b = {}),
            function (t, e, i, s) {
              var r = (
                t[0] +
                "_" +
                t[1] +
                "_" +
                e[0] +
                "_" +
                e[1] +
                "_" +
                i[0] +
                "_" +
                i[1] +
                "_" +
                s[0] +
                "_" +
                s[1]
              ).replace(/\./g, "p");
              if (!b[r]) {
                for (
                  var a,
                    n,
                    o,
                    l,
                    h,
                    p,
                    d,
                    c = defaultCurveSegments,
                    f = 0,
                    u = null,
                    m = new y(
                      (c =
                        2 === t.length &&
                        (t[0] != e[0] || t[1] != e[1]) &&
                        g(t[0], t[1], e[0], e[1], t[0] + i[0], t[1] + i[1]) &&
                        g(t[0], t[1], e[0], e[1], e[0] + s[0], e[1] + s[1])
                          ? 2
                          : c)
                    ),
                    o = i.length,
                    a = 0;
                  a < c;
                  a += 1
                ) {
                  for (
                    d = createSizedArray(o), h = a / (c - 1), n = p = 0;
                    n < o;
                    n += 1
                  )
                    (l =
                      bm_pow(1 - h, 3) * t[n] +
                      3 * bm_pow(1 - h, 2) * h * (t[n] + i[n]) +
                      3 * (1 - h) * bm_pow(h, 2) * (e[n] + s[n]) +
                      bm_pow(h, 3) * e[n]),
                      (d[n] = l),
                      null !== u && (p += bm_pow(d[n] - u[n], 2));
                  (f += p = bm_sqrt(p)), (m.points[a] = new v(p, d)), (u = d);
                }
                (m.segmentLength = f), (b[r] = m);
              }
              return b[r];
            });
        function A(t, e) {
          var i = e.percents,
            s = e.lengths,
            r = i.length,
            a = bm_floor((r - 1) * t),
            n = t * e.addedLength,
            o = 0;
          if (a === r - 1 || 0 === a || n === s[a]) return i[a];
          for (var l = s[a] > n ? -1 : 1, h = !0; h; )
            if (
              (s[a] <= n && s[a + 1] > n
                ? ((o = (n - s[a]) / (s[a + 1] - s[a])), (h = !1))
                : (a += l),
              a < 0 || r - 1 <= a)
            ) {
              if (a === r - 1) return i[a];
              h = !1;
            }
          return i[a] + (i[a + 1] - i[a]) * o;
        }
        var C = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function (t) {
            for (
              var e,
                i = segments_length_pool.newElement(),
                s = t.c,
                r = t.v,
                a = t.o,
                n = t.i,
                o = t._length,
                l = i.lengths,
                h = 0,
                e = 0;
              e < o - 1;
              e += 1
            )
              (l[e] = p(r[e], r[e + 1], a[e], n[e + 1])),
                (h += l[e].addedLength);
            return (
              s &&
                o &&
                ((l[e] = p(r[e], r[0], a[e], n[0])), (h += l[e].addedLength)),
              (i.totalLength = h),
              i
            );
          },
          getNewSegment: function (t, e, i, s, r, a, n) {
            for (
              var o,
                l = A((r = r < 0 ? 0 : 1 < r ? 1 : r), n),
                r = A((a = 1 < a ? 1 : a), n),
                h = t.length,
                a = 1 - l,
                n = 1 - r,
                p = a * a * a,
                d = l * a * a * 3,
                c = l * l * a * 3,
                f = l * l * l,
                u = a * a * n,
                m = l * a * n + a * l * n + a * a * r,
                g = l * l * n + a * l * r + l * a * r,
                y = l * l * r,
                v = a * n * n,
                b = l * n * n + a * r * n + a * n * r,
                w = l * r * n + a * r * r + l * n * r,
                S = l * r * r,
                k = n * n * n,
                T = r * n * n + n * r * n + n * n * r,
                x = r * r * n + n * r * r + r * n * r,
                P = r * r * r,
                o = 0;
              o < h;
              o += 1
            )
              (C[4 * o] =
                Math.round(1e3 * (p * t[o] + d * i[o] + c * s[o] + f * e[o])) /
                1e3),
                (C[4 * o + 1] =
                  Math.round(
                    1e3 * (u * t[o] + m * i[o] + g * s[o] + y * e[o])
                  ) / 1e3),
                (C[4 * o + 2] =
                  Math.round(
                    1e3 * (v * t[o] + b * i[o] + w * s[o] + S * e[o])
                  ) / 1e3),
                (C[4 * o + 3] =
                  Math.round(
                    1e3 * (k * t[o] + T * i[o] + x * s[o] + P * e[o])
                  ) / 1e3);
            return C;
          },
          getPointInSegment: function (t, e, i, s, r, a) {
            var r = A(r, a),
              a = 1 - r;
            return [
              Math.round(
                1e3 *
                  (a * a * a * t[0] +
                    (r * a * a + a * r * a + a * a * r) * i[0] +
                    (r * r * a + a * r * r + r * a * r) * s[0] +
                    r * r * r * e[0])
              ) / 1e3,
              Math.round(
                1e3 *
                  (a * a * a * t[1] +
                    (r * a * a + a * r * a + a * a * r) * i[1] +
                    (r * r * a + a * r * r + r * a * r) * s[1] +
                    r * r * r * e[1])
              ) / 1e3,
            ];
          },
          buildBezierData: t,
          pointOnLine2D: g,
          pointOnLine3D: function (t, e, i, s, r, a, n, o, l) {
            if (0 === i && 0 === a && 0 === l) return g(t, e, s, r, n, o);
            var a,
              h = Math.sqrt(
                Math.pow(s - t, 2) + Math.pow(r - e, 2) + Math.pow(a - i, 2)
              ),
              i = Math.sqrt(
                Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(l - i, 2)
              ),
              a = Math.sqrt(
                Math.pow(n - s, 2) + Math.pow(o - r, 2) + Math.pow(l - a, 2)
              );
            return (
              -1e-4 <
                (a =
                  i < h
                    ? a < h
                      ? h - i - a
                      : a - i - h
                    : i < a
                    ? a - i - h
                    : i - h - a) && a < 1e-4
            );
          },
        };
      }
      !(function () {
        for (
          var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0;
          e < t.length && !window.requestAnimationFrame;
          ++e
        )
          (window.requestAnimationFrame =
            window[t[e] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[t[e] + "CancelAnimationFrame"] ||
              window[t[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (t, e) {
            var i = new Date().getTime(),
              s = Math.max(0, 16 - (i - a)),
              r = setTimeout(function () {
                t(i + s);
              }, s);
            return (a = i + s), r;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (t) {
              clearTimeout(t);
            });
      })();
      var bez = bezFunction();
      function dataFunctionManager() {
        function c(t, e) {
          for (var i = 0, s = e.length; i < s; ) {
            if (e[i].id === t)
              return e[i].layers.__used
                ? JSON.parse(JSON.stringify(e[i].layers))
                : ((e[i].layers.__used = !0), e[i].layers);
            i += 1;
          }
        }
        function f(t) {
          for (var e, i, s, e = t.length - 1; 0 <= e; --e)
            if ("sh" == t[e].ty)
              if (t[e].ks.k.i) u(t[e].ks.k);
              else
                for (s = t[e].ks.k.length, i = 0; i < s; i += 1)
                  t[e].ks.k[i].s && u(t[e].ks.k[i].s[0]),
                    t[e].ks.k[i].e && u(t[e].ks.k[i].e[0]);
            else "gr" == t[e].ty && f(t[e].it);
        }
        function u(t) {
          for (var e, i = t.i.length, e = 0; e < i; e += 1)
            (t.i[e][0] += t.v[e][0]),
              (t.i[e][1] += t.v[e][1]),
              (t.o[e][0] += t.v[e][0]),
              (t.o[e][1] += t.v[e][1]);
        }
        function o(t, e) {
          var e = e ? e.split(".") : [100, 100, 100];
          return (
            t[0] > e[0] ||
            (!(e[0] > t[0]) &&
              (t[1] > e[1] ||
                (!(e[1] > t[1]) && (t[2] > e[2] || (e[2], t[2], 0)))))
          );
        }
        var l,
          i =
            ((p = [4, 4, 14]),
            function (t) {
              if (o(p, t.v) && (v(t.layers), t.assets))
                for (var e, i = t.assets.length, e = 0; e < i; e += 1)
                  t.assets[e].layers && v(t.assets[e].layers);
            }),
          s =
            ((l = [4, 7, 99]),
            function (t) {
              if (t.chars && !o(l, t.v))
                for (
                  var e, i, s, r, a, n = t.chars.length, e = 0;
                  e < n;
                  e += 1
                )
                  if (t.chars[e].data && t.chars[e].data.shapes)
                    for (
                      s = (a = t.chars[e].data.shapes[0].it).length, i = 0;
                      i < s;
                      i += 1
                    )
                      (r = a[i].ks.k).__converted ||
                        (u(a[i].ks.k), (r.__converted = !0));
            }),
          r =
            ((h = [4, 1, 9]),
            function (t) {
              if (o(h, t.v) && (y(t.layers), t.assets))
                for (var e, i = t.assets.length, e = 0; e < i; e += 1)
                  t.assets[e].layers && y(t.assets[e].layers);
            }),
          a =
            ((n = [4, 4, 18]),
            function (t) {
              if (o(n, t.v) && (m(t.layers), t.assets))
                for (var e, i = t.assets.length, e = 0; e < i; e += 1)
                  t.assets[e].layers && m(t.assets[e].layers);
            }),
          t,
          n,
          h,
          p;
        function d(t) {
          for (var e, i, s, e = t.length - 1; 0 <= e; --e)
            if ("sh" == t[e].ty)
              if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;
              else
                for (s = t[e].ks.k.length, i = 0; i < s; i += 1)
                  t[e].ks.k[i].s && (t[e].ks.k[i].s[0].c = t[e].closed),
                    t[e].ks.k[i].e && (t[e].ks.k[i].e[0].c = t[e].closed);
            else "gr" == t[e].ty && d(t[e].it);
        }
        function m(t) {
          for (var e, i, s, r, a, n, o = t.length, i = 0; i < o; i += 1) {
            if ((e = t[i]).hasMask)
              for (
                var l = e.masksProperties, r = l.length, s = 0;
                s < r;
                s += 1
              )
                if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                else
                  for (n = l[s].pt.k.length, a = 0; a < n; a += 1)
                    l[s].pt.k[a].s && (l[s].pt.k[a].s[0].c = l[s].cl),
                      l[s].pt.k[a].e && (l[s].pt.k[a].e[0].c = l[s].cl);
            4 === e.ty && d(e.shapes);
          }
        }
        function g(t) {
          for (var e, i, s, r = t.length, e = 0; e < r; e += 1)
            if ("gr" === t[e].ty) g(t[e].it);
            else if ("fl" === t[e].ty || "st" === t[e].ty)
              if (t[e].c.k && t[e].c.k[0].i)
                for (s = t[e].c.k.length, i = 0; i < s; i += 1)
                  t[e].c.k[i].s &&
                    ((t[e].c.k[i].s[0] /= 255),
                    (t[e].c.k[i].s[1] /= 255),
                    (t[e].c.k[i].s[2] /= 255),
                    (t[e].c.k[i].s[3] /= 255)),
                    t[e].c.k[i].e &&
                      ((t[e].c.k[i].e[0] /= 255),
                      (t[e].c.k[i].e[1] /= 255),
                      (t[e].c.k[i].e[2] /= 255),
                      (t[e].c.k[i].e[3] /= 255));
              else
                (t[e].c.k[0] /= 255),
                  (t[e].c.k[1] /= 255),
                  (t[e].c.k[2] /= 255),
                  (t[e].c.k[3] /= 255);
        }
        function y(t) {
          for (var e, i = t.length, e = 0; e < i; e += 1)
            4 === t[e].ty && g(t[e].shapes);
        }
        function v(t) {
          for (var e, i, s, r = t.length, e = 0; e < r; e += 1)
            5 === t[e].ty &&
              ((s = (i = t[e]).t.d), (i.t.d = { k: [{ s: s, t: 0 }] }));
        }
        return {
          completeData: function (t, e) {
            t.__complete ||
              (r(t),
              i(t),
              s(t),
              a(t),
              (function t(e, i, s) {
                for (
                  var r, a, n, o, l, h, r, p = e.length, a = 0;
                  a < p;
                  a += 1
                )
                  if ("ks" in (r = e[a]) && !r.completed) {
                    if (
                      ((r.completed = !0),
                      r.tt && (e[a - 1].td = r.tt),
                      r.hasMask)
                    )
                      for (
                        var d = r.masksProperties, o = d.length, n = 0;
                        n < o;
                        n += 1
                      )
                        if (d[n].pt.k.i) u(d[n].pt.k);
                        else
                          for (h = d[n].pt.k.length, l = 0; l < h; l += 1)
                            d[n].pt.k[l].s && u(d[n].pt.k[l].s[0]),
                              d[n].pt.k[l].e && u(d[n].pt.k[l].e[0]);
                    0 === r.ty
                      ? ((r.layers = c(r.refId, i)), t(r.layers, i, s))
                      : 4 === r.ty
                      ? f(r.shapes)
                      : 5 == r.ty &&
                        (0 !== (r = r).t.a.length ||
                          "m" in r.t.p ||
                          (r.singleShape = !0));
                  }
              })(t.layers, t.assets, e),
              (t.__complete = !0));
          },
        };
      }
      var dataManager = dataFunctionManager(),
        FontManager =
          ((_p = { w: 0, size: 0, shapes: [] }),
          (aq = (aq = []).concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ])),
          (cq = function () {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this.initTime = Date.now());
          }),
          (cq.getCombinedCharacterCodes = function () {
            return aq;
          }),
          (cq.prototype.addChars = function (t) {
            if (t) {
              this.chars || (this.chars = []);
              for (
                var e, i, s, r = t.length, a = this.chars.length, e = 0;
                e < r;
                e += 1
              ) {
                for (i = 0, s = !1; i < a; )
                  this.chars[i].style === t[e].style &&
                    this.chars[i].fFamily === t[e].fFamily &&
                    this.chars[i].ch === t[e].ch &&
                    (s = !0),
                    (i += 1);
                s || (this.chars.push(t[e]), (a += 1));
              }
            }
          }),
          (cq.prototype.addFonts = function (t, e) {
            if (t) {
              if (this.chars)
                return (this.isLoaded = !0), void (this.fonts = t.list);
              for (
                var i, s, r, a, n = t.list, o = n.length, l = o, i = 0;
                i < o;
                i += 1
              ) {
                var h,
                  p,
                  d = !0,
                  s,
                  r,
                  a;
                if (
                  ((n[i].loaded = !1),
                  (n[i].monoCase = bq(n[i].fFamily, "monospace")),
                  (n[i].sansCase = bq(n[i].fFamily, "sans-serif")),
                  n[i].fPath)
                ) {
                  if ("p" === n[i].fOrigin || 3 === n[i].origin)
                    (d =
                      !(
                        0 <
                        (h = document.querySelectorAll(
                          'style[f-forigin="p"][f-family="' +
                            n[i].fFamily +
                            '"], style[f-origin="3"][f-family="' +
                            n[i].fFamily +
                            '"]'
                        )).length
                      ) && d) &&
                      ((s = createTag("style")).setAttribute(
                        "f-forigin",
                        n[i].fOrigin
                      ),
                      s.setAttribute("f-origin", n[i].origin),
                      s.setAttribute("f-family", n[i].fFamily),
                      (s.type = "text/css"),
                      (s.innerHTML =
                        "@font-face {font-family: " +
                        n[i].fFamily +
                        "; font-style: normal; src: url('" +
                        n[i].fPath +
                        "');}"),
                      e.appendChild(s));
                  else if ("g" === n[i].fOrigin || 1 === n[i].origin) {
                    for (
                      h = document.querySelectorAll(
                        'link[f-forigin="g"], link[f-origin="1"]'
                      ),
                        p = 0;
                      p < h.length;
                      p++
                    )
                      -1 !== h[p].href.indexOf(n[i].fPath) && (d = !1);
                    d &&
                      ((r = createTag("link")).setAttribute(
                        "f-forigin",
                        n[i].fOrigin
                      ),
                      r.setAttribute("f-origin", n[i].origin),
                      (r.type = "text/css"),
                      (r.rel = "stylesheet"),
                      (r.href = n[i].fPath),
                      document.body.appendChild(r));
                  } else if ("t" === n[i].fOrigin || 2 === n[i].origin) {
                    for (
                      h = document.querySelectorAll(
                        'script[f-forigin="t"], script[f-origin="2"]'
                      ),
                        p = 0;
                      p < h.length;
                      p++
                    )
                      n[i].fPath === h[p].src && (d = !1);
                    d &&
                      ((a = createTag("link")).setAttribute(
                        "f-forigin",
                        n[i].fOrigin
                      ),
                      a.setAttribute("f-origin", n[i].origin),
                      a.setAttribute("rel", "stylesheet"),
                      a.setAttribute("href", n[i].fPath),
                      e.appendChild(a));
                  }
                } else (n[i].loaded = !0), --l;
                (n[i].helper =
                  ((s = e),
                  (r = n[i]),
                  (a = void 0),
                  ((a = createNS("text")).style.fontSize = "100px"),
                  a.setAttribute("font-family", r.fFamily),
                  a.setAttribute("font-style", r.fStyle),
                  a.setAttribute("font-weight", r.fWeight),
                  (a.textContent = "1"),
                  r.fClass
                    ? ((a.style.fontFamily = "inherit"),
                      a.setAttribute("class", r.fClass))
                    : (a.style.fontFamily = r.fFamily),
                  s.appendChild(a),
                  (createTag("canvas").getContext("2d").font =
                    r.fWeight + " " + r.fStyle + " 100px " + r.fFamily),
                  a)),
                  (n[i].cache = {}),
                  this.fonts.push(n[i]);
              }
              0 === l
                ? (this.isLoaded = !0)
                : setTimeout(this.checkLoadedFonts.bind(this), 100);
            } else this.isLoaded = !0;
          }),
          (cq.prototype.getCharData = function (t, e, i) {
            for (var s = 0, r = this.chars.length; s < r; ) {
              if (
                this.chars[s].ch === t &&
                this.chars[s].style === e &&
                this.chars[s].fFamily === i
              )
                return this.chars[s];
              s += 1;
            }
            return (
              (("string" == typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                console &&
                console.warn &&
                console.warn(
                  "Missing character from exported characters list: ",
                  t,
                  e,
                  i
                ),
              _p
            );
          }),
          (cq.prototype.getFontByName = function (t) {
            for (var e = 0, i = this.fonts.length; e < i; ) {
              if (this.fonts[e].fName === t) return this.fonts[e];
              e += 1;
            }
            return this.fonts[0];
          }),
          (cq.prototype.measureText = function (t, e, i) {
            var s = this.getFontByName(e),
              r = t.charCodeAt(0),
              a,
              n,
              e;
            return (
              s.cache[r + 1] ||
                ((a = s.helper),
                " " === t
                  ? ((a.textContent = "|" + t + "|"),
                    (n = a.getComputedTextLength()),
                    (a.textContent = "||"),
                    (e = a.getComputedTextLength()),
                    (s.cache[r + 1] = (n - e) / 100))
                  : ((a.textContent = t),
                    (s.cache[r + 1] = a.getComputedTextLength() / 100))),
              s.cache[r + 1] * i
            );
          }),
          (cq.prototype.checkLoadedFonts = function () {
            for (
              var t, e, i, s = this.fonts.length, r = s, t = 0;
              t < s;
              t += 1
            )
              this.fonts[t].loaded
                ? --r
                : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin
                ? (this.fonts[t].loaded = !0)
                : ((e = this.fonts[t].monoCase.node),
                  (i = this.fonts[t].monoCase.w),
                  e.offsetWidth !== i
                    ? (--r, (this.fonts[t].loaded = !0))
                    : ((e = this.fonts[t].sansCase.node),
                      (i = this.fonts[t].sansCase.w),
                      e.offsetWidth !== i &&
                        (--r, (this.fonts[t].loaded = !0))),
                  this.fonts[t].loaded &&
                    (this.fonts[t].sansCase.parent.parentNode.removeChild(
                      this.fonts[t].sansCase.parent
                    ),
                    this.fonts[t].monoCase.parent.parentNode.removeChild(
                      this.fonts[t].monoCase.parent
                    )));
            0 !== r && Date.now() - this.initTime < 5e3
              ? setTimeout(this.checkLoadedFonts.bind(this), 20)
              : setTimeout(
                  function () {
                    this.isLoaded = !0;
                  }.bind(this),
                  0
                );
          }),
          (cq.prototype.loaded = function () {
            return this.isLoaded;
          }),
          cq),
        PropertyFactory =
          ((Yq = initialDefaultFrame),
          (Zq = Math.abs),
          {
            getProp: function (t, e, i, s, r) {
              var a;
              if (e.k.length)
                if ("number" == typeof e.k[0]) a = new fr(t, e, s, r);
                else
                  switch (i) {
                    case 0:
                      a = new gr(t, e, s, r);
                      break;
                    case 1:
                      a = new hr(t, e, s, r);
                  }
              else a = new er(t, e, s, r);
              return a.effectsSequence.length && r.addDynamicProperty(a), a;
            },
          }),
        TransformPropertyFactory =
          ((kt.prototype = {
            applyToMatrix: function (t) {
              var e = this._mdf;
              this.iterateDynamicProperties(),
                (this._mdf = this._mdf || e),
                this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                this.r
                  ? t.rotate(-this.r.v)
                  : t
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                this.data.p.s
                  ? this.data.p.z
                    ? t.translate(this.px.v, this.py.v, -this.pz.v)
                    : t.translate(this.px.v, this.py.v, 0)
                  : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            },
            getValue: function (t) {
              var e, i, s, e, i, r, t;
              this.elem.globalData.frameId !== this.frameId &&
                (this._isDirty &&
                  (this.precalculateMatrix(), (this._isDirty = !1)),
                this.iterateDynamicProperties(),
                (this._mdf || t) &&
                  (this.v.cloneFromProps(this.pre.props),
                  this.appliedTransformations < 1 &&
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  this.appliedTransformations < 2 &&
                    this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  this.sk &&
                    this.appliedTransformations < 3 &&
                    this.v.skewFromAxis(-this.sk.v, this.sa.v),
                  this.r && this.appliedTransformations < 4
                    ? this.v.rotate(-this.r.v)
                    : !this.r &&
                      this.appliedTransformations < 4 &&
                      this.v
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                  this.autoOriented &&
                    ((s = this.elem.globalData.frameRate),
                    this.p && this.p.keyframes && this.p.getValueAtTime
                      ? (i =
                          this.p._caching.lastFrame + this.p.offsetTime <=
                          this.p.keyframes[0].t
                            ? ((e = this.p.getValueAtTime(
                                (this.p.keyframes[0].t + 0.01) / s,
                                0
                              )),
                              this.p.getValueAtTime(
                                this.p.keyframes[0].t / s,
                                0
                              ))
                            : this.p._caching.lastFrame + this.p.offsetTime >=
                              this.p.keyframes[this.p.keyframes.length - 1].t
                            ? ((e = this.p.getValueAtTime(
                                this.p.keyframes[this.p.keyframes.length - 1]
                                  .t / s,
                                0
                              )),
                              this.p.getValueAtTime(
                                (this.p.keyframes[this.p.keyframes.length - 1]
                                  .t -
                                  0.01) /
                                  s,
                                0
                              ))
                            : ((e = this.p.pv),
                              this.p.getValueAtTime(
                                (this.p._caching.lastFrame +
                                  this.p.offsetTime -
                                  0.01) /
                                  s,
                                this.p.offsetTime
                              )))
                      : this.px &&
                        this.px.keyframes &&
                        this.py.keyframes &&
                        this.px.getValueAtTime &&
                        this.py.getValueAtTime &&
                        ((e = []),
                        (i = []),
                        (r = this.px),
                        (t = this.py),
                        r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t
                          ? ((e[0] = r.getValueAtTime(
                              (r.keyframes[0].t + 0.01) / s,
                              0
                            )),
                            (e[1] = t.getValueAtTime(
                              (t.keyframes[0].t + 0.01) / s,
                              0
                            )),
                            (i[0] = r.getValueAtTime(r.keyframes[0].t / s, 0)),
                            (i[1] = t.getValueAtTime(t.keyframes[0].t / s, 0)))
                          : r._caching.lastFrame + r.offsetTime >=
                            r.keyframes[r.keyframes.length - 1].t
                          ? ((e[0] = r.getValueAtTime(
                              r.keyframes[r.keyframes.length - 1].t / s,
                              0
                            )),
                            (e[1] = t.getValueAtTime(
                              t.keyframes[t.keyframes.length - 1].t / s,
                              0
                            )),
                            (i[0] = r.getValueAtTime(
                              (r.keyframes[r.keyframes.length - 1].t - 0.01) /
                                s,
                              0
                            )),
                            (i[1] = t.getValueAtTime(
                              (t.keyframes[t.keyframes.length - 1].t - 0.01) /
                                s,
                              0
                            )))
                          : ((e = [r.pv, t.pv]),
                            (i[0] = r.getValueAtTime(
                              (r._caching.lastFrame + r.offsetTime - 0.01) / s,
                              r.offsetTime
                            )),
                            (i[1] = t.getValueAtTime(
                              (t._caching.lastFrame + t.offsetTime - 0.01) / s,
                              t.offsetTime
                            )))),
                    this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]))),
                  this.data.p && this.data.p.s
                    ? this.data.p.z
                      ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                      : this.v.translate(this.px.v, this.py.v, 0)
                    : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])),
                (this.frameId = this.elem.globalData.frameId));
            },
            precalculateMatrix: function () {
              if (
                !this.a.k &&
                (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                (this.appliedTransformations = 1),
                !this.s.effectsSequence.length)
              ) {
                if (
                  (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  (this.appliedTransformations = 2),
                  this.sk)
                ) {
                  if (
                    this.sk.effectsSequence.length ||
                    this.sa.effectsSequence.length
                  )
                    return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                    (this.appliedTransformations = 3);
                }
                this.r
                  ? this.r.effectsSequence.length ||
                    (this.pre.rotate(-this.r.v),
                    (this.appliedTransformations = 4))
                  : this.rz.effectsSequence.length ||
                    this.ry.effectsSequence.length ||
                    this.rx.effectsSequence.length ||
                    this.or.effectsSequence.length ||
                    (this.pre
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                    (this.appliedTransformations = 4));
              }
            },
            autoOrient: function () {},
          }),
          extendPrototype([DynamicPropertyContainer], kt),
          (kt.prototype.addDynamicProperty = function (t) {
            this._addDynamicProperty(t),
              this.elem.addDynamicProperty(t),
              (this._isDirty = !0);
          }),
          (kt.prototype._addDynamicProperty =
            DynamicPropertyContainer.prototype.addDynamicProperty),
          {
            getTransformProperty: function (t, e, i) {
              return new kt(t, e, i);
            },
          }),
        Yq,
        Zq,
        _p,
        aq,
        cq;
      function kt(t, e, i) {
        if (
          ((this.elem = t),
          (this.frameId = -1),
          (this.propType = "transform"),
          (this.data = e),
          (this.v = new Matrix()),
          (this.pre = new Matrix()),
          (this.appliedTransformations = 0),
          this.initDynamicPropertyContainer(i || t),
          e.p && e.p.s
            ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
              (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
              e.p.z &&
                (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
            : (this.p = PropertyFactory.getProp(
                t,
                e.p || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
          e.rx)
        ) {
          if (
            ((this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this)),
            (this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this)),
            (this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this)),
            e.or.k[0].ti)
          )
            for (var s, r = e.or.k.length, s = 0; s < r; s += 1)
              e.or.k[s].to = e.or.k[s].ti = null;
          (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)),
            (this.or.sh = !0);
        } else
          this.r = PropertyFactory.getProp(
            t,
            e.r || { k: 0 },
            0,
            degToRads,
            this
          );
        e.sk &&
          ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
          (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
          (this.a = PropertyFactory.getProp(
            t,
            e.a || { k: [0, 0, 0] },
            1,
            0,
            this
          )),
          (this.s = PropertyFactory.getProp(
            t,
            e.s || { k: [100, 100, 100] },
            1,
            0.01,
            this
          )),
          e.o
            ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
            : (this.o = { _mdf: !1, v: 1 }),
          (this._isDirty = !0),
          this.dynamicProperties.length || this.getValue(!0);
      }
      function $q(t, e) {
        var i,
          s = this.offsetTime;
        "multidimensional" === this.propType &&
          (i = createTypedArray("float32", this.pv.length));
        for (
          var r,
            a,
            n,
            o,
            l,
            h,
            p,
            d,
            c = e.lastIndex,
            f = c,
            u = this.keyframes.length - 1,
            m = !0;
          m;

        ) {
          if (
            ((r = this.keyframes[f]),
            (a = this.keyframes[f + 1]),
            f === u - 1 && t >= a.t - s)
          ) {
            r.h && (r = a), (c = 0);
            break;
          }
          if (a.t - s > t) {
            c = f;
            break;
          }
          f < u - 1 ? (f += 1) : ((c = 0), (m = !1));
        }
        var g,
          y,
          v,
          b,
          w,
          S,
          k,
          T,
          x,
          S,
          P = a.t - s,
          A = r.t - s,
          C,
          _,
          k,
          w,
          x,
          E,
          M,
          $,
          S,
          D,
          I,
          b,
          T;
        if (r.to) {
          r.bezierData ||
            (r.bezierData = bez.buildBezierData(r.s, a.s || r.e, r.to, r.ti));
          var F = r.bezierData;
          if (P <= t || t < A)
            for (
              var O = P <= t ? F.points.length - 1 : 0,
                o = F.points[O].point.length,
                n = 0;
              n < o;
              n += 1
            )
              i[n] = F.points[O].point[n];
          else {
            r.__fnct
              ? (d = r.__fnct)
              : ((d = BezierFactory.getBezierEasing(
                  r.o.x,
                  r.o.y,
                  r.i.x,
                  r.i.y,
                  r.n
                ).get),
                (r.__fnct = d));
            for (
              var l = d((t - A) / (P - A)),
                L,
                z = F.segmentLength * l,
                R =
                  e.lastFrame < t && e._lastKeyframeIndex === f
                    ? e._lastAddedLength
                    : 0,
                p =
                  e.lastFrame < t && e._lastKeyframeIndex === f
                    ? e._lastPoint
                    : 0,
                m = !0,
                h = F.points.length;
              m;

            ) {
              if (
                ((R += F.points[p].partialLength),
                0 == z || 0 === l || p === F.points.length - 1)
              ) {
                for (o = F.points[p].point.length, n = 0; n < o; n += 1)
                  i[n] = F.points[p].point[n];
                break;
              }
              if (R <= z && z < R + F.points[p + 1].partialLength) {
                for (
                  L = (z - R) / F.points[p + 1].partialLength,
                    o = F.points[p].point.length,
                    n = 0;
                  n < o;
                  n += 1
                )
                  i[n] =
                    F.points[p].point[n] +
                    (F.points[p + 1].point[n] - F.points[p].point[n]) * L;
                break;
              }
              p < h - 1 ? (p += 1) : (m = !1);
            }
            (e._lastPoint = p),
              (e._lastAddedLength = R - F.points[p].partialLength),
              (e._lastKeyframeIndex = f);
          }
        } else {
          var V,
            H,
            N,
            B,
            G,
            u = r.s.length,
            g = a.s || r.e;
          if (this.sh && 1 !== r.h)
            P <= t
              ? ((i[0] = g[0]), (i[1] = g[1]), (i[2] = g[2]))
              : t <= A
              ? ((i[0] = r.s[0]), (i[1] = r.s[1]), (i[2] = r.s[2]))
              : ((y = i),
                (C = _q(r.s)),
                (_ = _q(g)),
                (k = (t - A) / (P - A)),
                (x = []),
                (E = C[0]),
                (M = C[1]),
                ($ = C[2]),
                (S = C[3]),
                (D = _[0]),
                (I = _[1]),
                (b = _[2]),
                (T = _[3]),
                (C = E * D + M * I + $ * b + S * T) < 0 &&
                  ((C = -C), (D = -D), (I = -I), (b = -b), (T = -T)),
                (k =
                  1e-6 < 1 - C
                    ? ((_ = Math.acos(C)),
                      (C = Math.sin(_)),
                      (w = Math.sin((1 - k) * _) / C),
                      Math.sin(k * _) / C)
                    : ((w = 1 - k), k)),
                (x[0] = w * E + k * D),
                (x[1] = w * M + k * I),
                (x[2] = w * $ + k * b),
                (x[3] = w * S + k * T),
                (b = x[0]),
                (w = x[1]),
                (S = x[2]),
                (k = x[3]),
                (T = Math.atan2(
                  2 * w * k - 2 * b * S,
                  1 - 2 * w * w - 2 * S * S
                )),
                (x = Math.asin(2 * b * w + 2 * S * k)),
                (S = Math.atan2(
                  2 * b * k - 2 * w * S,
                  1 - 2 * b * b - 2 * S * S
                )),
                (y[0] = T / degToRads),
                (y[1] = x / degToRads),
                (y[2] = S / degToRads));
          else
            for (f = 0; f < u; f += 1)
              1 !== r.h &&
                (l =
                  P <= t
                    ? 1
                    : t < A
                    ? 0
                    : (r.o.x.constructor === Array
                        ? (r.__fnct || (r.__fnct = []),
                          r.__fnct[f]
                            ? (d = r.__fnct[f])
                            : ((V = void 0 === r.o.x[f] ? r.o.x[0] : r.o.x[f]),
                              (H = void 0 === r.o.y[f] ? r.o.y[0] : r.o.y[f]),
                              (N = void 0 === r.i.x[f] ? r.i.x[0] : r.i.x[f]),
                              (B = void 0 === r.i.y[f] ? r.i.y[0] : r.i.y[f]),
                              (d = BezierFactory.getBezierEasing(
                                V,
                                H,
                                N,
                                B
                              ).get),
                              (r.__fnct[f] = d)))
                        : r.__fnct
                        ? (d = r.__fnct)
                        : ((V = r.o.x),
                          (H = r.o.y),
                          (N = r.i.x),
                          (B = r.i.y),
                          (d = BezierFactory.getBezierEasing(V, H, N, B).get),
                          (r.__fnct = d)),
                      d((t - A) / (P - A)))),
                (g = a.s || r.e),
                (G = 1 === r.h ? r.s[f] : r.s[f] + (g[f] - r.s[f]) * l),
                1 === u ? (i = G) : (i[f] = G);
        }
        return (e.lastIndex = c), i;
      }
      function _q(t) {
        var e = t[0] * degToRads,
          i = t[1] * degToRads,
          s = t[2] * degToRads,
          r = Math.cos(e / 2),
          a = Math.cos(i / 2),
          t = Math.cos(s / 2),
          e = Math.sin(e / 2),
          i = Math.sin(i / 2),
          s = Math.sin(s / 2);
        return [
          e * i * t + r * a * s,
          e * a * t + r * i * s,
          r * i * t - e * a * s,
          r * a * t - e * i * s,
        ];
      }
      function ar() {
        var t = this.comp.renderedFrame - this.offsetTime,
          e = this.keyframes[0].t - this.offsetTime,
          i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
          e;
        return (
          t === this._caching.lastFrame ||
            (this._caching.lastFrame !== Yq &&
              ((this._caching.lastFrame >= i && i <= t) ||
                (this._caching.lastFrame < e && t < e))) ||
            (this._caching.lastFrame >= t &&
              ((this._caching._lastKeyframeIndex = -1),
              (this._caching.lastIndex = 0)),
            (e = this.interpolateValue(t, this._caching)),
            (this.pv = e)),
          (this._caching.lastFrame = t),
          this.pv
        );
      }
      function br(t) {
        var e;
        if ("unidimensional" === this.propType)
          (e = t * this.mult),
            1e-5 < Zq(this.v - e) && ((this.v = e), (this._mdf = !0));
        else
          for (var i = 0, s = this.v.length; i < s; )
            (e = t[i] * this.mult),
              1e-5 < Zq(this.v[i] - e) && ((this.v[i] = e), (this._mdf = !0)),
              (i += 1);
      }
      function cr() {
        if (
          this.elem.globalData.frameId !== this.frameId &&
          this.effectsSequence.length
        )
          if (this.lock) this.setVValue(this.pv);
          else {
            (this.lock = !0), (this._mdf = this._isFirstFrame);
            for (
              var t,
                e = this.effectsSequence.length,
                i = this.kf ? this.pv : this.data.k,
                t = 0;
              t < e;
              t += 1
            )
              i = this.effectsSequence[t](i);
            this.setVValue(i),
              (this._isFirstFrame = !1),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId);
          }
      }
      function dr(t) {
        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
      }
      function er(t, e, i, s) {
        (this.propType = "unidimensional"),
          (this.mult = i || 1),
          (this.data = e),
          (this.v = i ? e.k * i : e.k),
          (this.pv = e.k),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = s),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.vel = 0),
          (this.effectsSequence = []),
          (this._isFirstFrame = !0),
          (this.getValue = cr),
          (this.setVValue = br),
          (this.addEffect = dr);
      }
      function fr(t, e, i, s) {
        (this.propType = "multidimensional"),
          (this.mult = i || 1),
          (this.data = e),
          (this._mdf = !1),
          (this.elem = t),
          (this.container = s),
          (this.comp = t.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.frameId = -1);
        var r,
          a = e.k.length;
        for (
          this.v = createTypedArray("float32", a),
            this.pv = createTypedArray("float32", a),
            createTypedArray("float32", a),
            this.vel = createTypedArray("float32", a),
            r = 0;
          r < a;
          r += 1
        )
          (this.v[r] = e.k[r] * this.mult), (this.pv[r] = e.k[r]);
        (this._isFirstFrame = !0),
          (this.effectsSequence = []),
          (this.getValue = cr),
          (this.setVValue = br),
          (this.addEffect = dr);
      }
      function gr(t, e, i, s) {
        (this.propType = "unidimensional"),
          (this.keyframes = e.k),
          (this.offsetTime = t.data.st),
          (this.frameId = -1),
          (this._caching = {
            lastFrame: Yq,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1,
          }),
          (this.k = !0),
          (this.kf = !0),
          (this.data = e),
          (this.mult = i || 1),
          (this.elem = t),
          (this.container = s),
          (this.comp = t.comp),
          (this.v = Yq),
          (this.pv = Yq),
          (this._isFirstFrame = !0),
          (this.getValue = cr),
          (this.setVValue = br),
          (this.interpolateValue = $q),
          (this.effectsSequence = [ar.bind(this)]),
          (this.addEffect = dr);
      }
      function hr(t, e, i, s) {
        this.propType = "multidimensional";
        for (var r, a, n, o, l, h = e.k.length, r = 0; r < h - 1; r += 1)
          e.k[r].to &&
            e.k[r].s &&
            e.k[r].e &&
            ((a = e.k[r].s),
            (n = e.k[r].e),
            (o = e.k[r].to),
            (l = e.k[r].ti),
            ((2 === a.length &&
              (a[0] !== n[0] || a[1] !== n[1]) &&
              bez.pointOnLine2D(
                a[0],
                a[1],
                n[0],
                n[1],
                a[0] + o[0],
                a[1] + o[1]
              ) &&
              bez.pointOnLine2D(
                a[0],
                a[1],
                n[0],
                n[1],
                n[0] + l[0],
                n[1] + l[1]
              )) ||
              (3 === a.length &&
                (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) &&
                bez.pointOnLine3D(
                  a[0],
                  a[1],
                  a[2],
                  n[0],
                  n[1],
                  n[2],
                  a[0] + o[0],
                  a[1] + o[1],
                  a[2] + o[2]
                ) &&
                bez.pointOnLine3D(
                  a[0],
                  a[1],
                  a[2],
                  n[0],
                  n[1],
                  n[2],
                  n[0] + l[0],
                  n[1] + l[1],
                  n[2] + l[2]
                ))) &&
              ((e.k[r].to = null), (e.k[r].ti = null)),
            a[0] === n[0] &&
              a[1] === n[1] &&
              0 === o[0] &&
              0 === o[1] &&
              0 === l[0] &&
              0 === l[1] &&
              (2 === a.length || (a[2] === n[2] && 0 === o[2] && 0 === l[2])) &&
              ((e.k[r].to = null), (e.k[r].ti = null)));
        (this.effectsSequence = [ar.bind(this)]),
          (this.keyframes = e.k),
          (this.offsetTime = t.data.st),
          (this.k = !0),
          (this.kf = !0),
          (this._isFirstFrame = !0),
          (this.mult = i || 1),
          (this.elem = t),
          (this.container = s),
          (this.comp = t.comp),
          (this.getValue = cr),
          (this.setVValue = br),
          (this.interpolateValue = $q),
          (this.frameId = -1);
        var p = e.k[0].s.length;
        for (
          this.v = createTypedArray("float32", p),
            this.pv = createTypedArray("float32", p),
            r = 0;
          r < p;
          r += 1
        )
          (this.v[r] = Yq), (this.pv[r] = Yq);
        (this._caching = {
          lastFrame: Yq,
          lastIndex: 0,
          value: createTypedArray("float32", p),
        }),
          (this.addEffect = dr);
      }
      function bq(t, e) {
        var i = createTag("span");
        i.style.fontFamily = e;
        var s = createTag("span");
        (s.innerHTML = "giItT1WQy@!-/#"),
          (i.style.position = "absolute"),
          (i.style.left = "-10000px"),
          (i.style.top = "-10000px"),
          (i.style.fontSize = "300px"),
          (i.style.fontVariant = "normal"),
          (i.style.fontStyle = "normal"),
          (i.style.fontWeight = "normal"),
          (i.style.letterSpacing = "0"),
          i.appendChild(s),
          document.body.appendChild(i);
        var r = s.offsetWidth;
        return (
          (s.style.fontFamily = t + ", " + e), { node: s, w: r, parent: i }
        );
      }
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (t, e) {
        (this.c = t), this.setLength(e);
        for (var i = 0; i < e; )
          (this.v[i] = point_pool.newElement()),
            (this.o[i] = point_pool.newElement()),
            (this.i[i] = point_pool.newElement()),
            (i += 1);
      }),
        (ShapePath.prototype.setLength = function (t) {
          for (; this._maxLength < t; ) this.doubleArrayLength();
          this._length = t;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (t, e, i, s, r) {
          var a;
          switch (
            ((this._length = Math.max(this._length, s + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            i)
          ) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
          }
          (a[s] && (!a[s] || r)) || (a[s] = point_pool.newElement()),
            (a[s][0] = t),
            (a[s][1] = e);
        }),
        (ShapePath.prototype.setTripleAt = function (t, e, i, s, r, a, n, o) {
          this.setXYAt(t, e, "v", n, o),
            this.setXYAt(i, s, "o", n, o),
            this.setXYAt(r, a, "i", n, o);
        }),
        (ShapePath.prototype.reverse = function () {
          var t = new ShapePath();
          t.setPathData(this.c, this._length);
          var e = this.v,
            i = this.o,
            s = this.i,
            r = 0;
          this.c &&
            (t.setTripleAt(
              e[0][0],
              e[0][1],
              s[0][0],
              s[0][1],
              i[0][0],
              i[0][1],
              0,
              !1
            ),
            (r = 1));
          for (
            var a, n = this._length - 1, o = this._length, a = r;
            a < o;
            a += 1
          )
            t.setTripleAt(
              e[n][0],
              e[n][1],
              s[n][0],
              s[n][1],
              i[n][0],
              i[n][1],
              a,
              !1
            ),
              --n;
          return t;
        });
      var ShapePropertyFactory = (function () {
          var r = -999999;
          function t(t, e, i) {
            var s,
              r,
              a,
              n,
              o,
              l,
              h,
              p,
              d,
              c = i.lastIndex,
              f = this.keyframes;
            if (t < f[0].t - this.offsetTime)
              (s = f[0].s[0]), (a = !0), (c = 0);
            else if (t >= f[f.length - 1].t - this.offsetTime)
              (s = (
                f[f.length - 1].s ? f[f.length - 1].s : f[f.length - 2].e
              )[0]),
                (a = !0);
            else {
              for (
                var u, m, g = c, y = f.length - 1, v = !0;
                v && ((u = f[g]), !((m = f[g + 1]).t - this.offsetTime > t));

              )
                g < y - 1 ? (g += 1) : (v = !1);
              var b,
                p,
                r,
                c = g;
              (a = 1 === u.h) ||
                ((p =
                  t >= m.t - this.offsetTime
                    ? 1
                    : t < u.t - this.offsetTime
                    ? 0
                    : (u.__fnct
                        ? (b = u.__fnct)
                        : ((b = BezierFactory.getBezierEasing(
                            u.o.x,
                            u.o.y,
                            u.i.x,
                            u.i.y
                          ).get),
                          (u.__fnct = b)),
                      b(
                        (t - (u.t - this.offsetTime)) /
                          (m.t - this.offsetTime - (u.t - this.offsetTime))
                      ))),
                (r = (m.s || u.e)[0])),
                (s = u.s[0]);
            }
            for (
              l = e._length, h = s.i[0].length, i.lastIndex = c, n = 0;
              n < l;
              n += 1
            )
              for (o = 0; o < h; o += 1)
                (d = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p),
                  (e.i[n][o] = d),
                  (d = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p),
                  (e.o[n][o] = d),
                  (d = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p),
                  (e.v[n][o] = d);
          }
          function s() {
            this.paths = this.localShapeCollection;
          }
          function e(t) {
            !(function (t, e) {
              if (t._length === e._length && t.c === e.c) {
                for (var i, s = t._length, i = 0; i < s; i += 1)
                  if (
                    t.v[i][0] !== e.v[i][0] ||
                    t.v[i][1] !== e.v[i][1] ||
                    t.o[i][0] !== e.o[i][0] ||
                    t.o[i][1] !== e.o[i][1] ||
                    t.i[i][0] !== e.i[i][0] ||
                    t.i[i][1] !== e.i[i][1]
                  )
                    return;
                return 1;
              }
            })(this.v, t) &&
              ((this.v = shape_pool.clone(t)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._mdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function i() {
            if (
              this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length
            )
              if (this.lock) this.setVValue(this.pv);
              else {
                (this.lock = !0), (this._mdf = !1);
                for (
                  var t,
                    e = this.kf ? this.pv : (this.data.ks || this.data.pt).k,
                    i = this.effectsSequence.length,
                    t = 0;
                  t < i;
                  t += 1
                )
                  e = this.effectsSequence[t](e);
                this.setVValue(e),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
          }
          function a(t, e, i) {
            (this.propType = "shape"),
              (this.comp = t.comp),
              (this.container = t),
              (this.elem = t),
              (this.data = e),
              (this.k = !1),
              (this.kf = !1),
              (this._mdf = !1);
            var e = (3 === i ? e.pt : e.ks).k;
            (this.v = shape_pool.clone(e)),
              (this.pv = shape_pool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollection_pool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = s),
              (this.effectsSequence = []);
          }
          function n(t) {
            this.effectsSequence.push(t),
              this.container.addDynamicProperty(this);
          }
          function o(t, e, i) {
            (this.propType = "shape"),
              (this.comp = t.comp),
              (this.elem = t),
              (this.container = t),
              (this.offsetTime = t.data.st),
              (this.keyframes = (3 === i ? e.pt : e.ks).k),
              (this.k = !0),
              (this.kf = !0);
            var e = this.keyframes[0].s[0].i.length;
            this.keyframes[0].s[0].i[0].length,
              (this.v = shape_pool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, e),
              (this.pv = shape_pool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollection_pool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = r),
              (this.reset = s),
              (this._caching = { lastFrame: r, lastIndex: 0 }),
              (this.effectsSequence = [
                function () {
                  var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    i =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime,
                    s = this._caching.lastFrame;
                  return (
                    (s !== r && ((s < e && t < e) || (i < s && i < t))) ||
                      ((this._caching.lastIndex =
                        s < t ? this._caching.lastIndex : 0),
                      this.interpolateShape(t, this.pv, this._caching)),
                    (this._caching.lastFrame = t),
                    this.pv
                  );
                }.bind(this),
              ]);
          }
          (a.prototype.interpolateShape = t),
            (a.prototype.getValue = i),
            (a.prototype.setVValue = e),
            (a.prototype.addEffect = n),
            (o.prototype.getValue = i),
            (o.prototype.interpolateShape = t),
            (o.prototype.setVValue = e),
            (o.prototype.addEffect = n);
          var l =
              ((c = roundCorner),
              (m.prototype = {
                reset: s,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertEllToPath());
                },
                convertEllToPath: function () {
                  var t = this.p.v[0],
                    e = this.p.v[1],
                    i = this.s.v[0] / 2,
                    s = this.s.v[1] / 2,
                    r = 3 !== this.d,
                    a = this.v;
                  (a.v[0][0] = t),
                    (a.v[0][1] = e - s),
                    (a.v[1][0] = r ? t + i : t - i),
                    (a.v[1][1] = e),
                    (a.v[2][0] = t),
                    (a.v[2][1] = e + s),
                    (a.v[3][0] = r ? t - i : t + i),
                    (a.v[3][1] = e),
                    (a.i[0][0] = r ? t - i * c : t + i * c),
                    (a.i[0][1] = e - s),
                    (a.i[1][0] = r ? t + i : t - i),
                    (a.i[1][1] = e - s * c),
                    (a.i[2][0] = r ? t + i * c : t - i * c),
                    (a.i[2][1] = e + s),
                    (a.i[3][0] = r ? t - i : t + i),
                    (a.i[3][1] = e + s * c),
                    (a.o[0][0] = r ? t + i * c : t - i * c),
                    (a.o[0][1] = e - s),
                    (a.o[1][0] = r ? t + i : t - i),
                    (a.o[1][1] = e + s * c),
                    (a.o[2][0] = r ? t - i * c : t + i * c),
                    (a.o[2][1] = e + s),
                    (a.o[3][0] = r ? t - i : t + i),
                    (a.o[3][1] = e - s * c);
                },
              }),
              extendPrototype([DynamicPropertyContainer], m),
              m),
            h =
              ((u.prototype = {
                reset: s,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertToPath());
                },
                convertStarToPath: function () {
                  var t,
                    e,
                    i,
                    s,
                    r = 2 * Math.floor(this.pt.v),
                    a = (2 * Math.PI) / r,
                    n = !0,
                    o = this.or.v,
                    l = this.ir.v,
                    h = this.os.v,
                    p = this.is.v,
                    d = (2 * Math.PI * o) / (2 * r),
                    c = (2 * Math.PI * l) / (2 * r),
                    f = -Math.PI / 2;
                  f += this.r.v;
                  for (
                    var u = 3 === this.data.d ? -1 : 1,
                      t = (this.v._length = 0);
                    t < r;
                    t += 1
                  ) {
                    var i = n ? h : p,
                      s = n ? d : c,
                      m = (e = n ? o : l) * Math.cos(f),
                      g = e * Math.sin(f),
                      y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                      e =
                        0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                    (m += +this.p.v[0]),
                      (g += +this.p.v[1]),
                      this.v.setTripleAt(
                        m,
                        g,
                        m - y * s * i * u,
                        g - e * s * i * u,
                        m + y * s * i * u,
                        g + e * s * i * u,
                        t,
                        !0
                      ),
                      (n = !n),
                      (f += a * u);
                  }
                },
                convertPolygonToPath: function () {
                  var t,
                    e = Math.floor(this.pt.v),
                    i = (2 * Math.PI) / e,
                    s = this.or.v,
                    r = this.os.v,
                    a = (2 * Math.PI * s) / (4 * e),
                    n = -Math.PI / 2,
                    o = 3 === this.data.d ? -1 : 1;
                  for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                    var l = s * Math.cos(n),
                      h = s * Math.sin(n),
                      p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                      d =
                        0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                    (l += +this.p.v[0]),
                      (h += +this.p.v[1]),
                      this.v.setTripleAt(
                        l,
                        h,
                        l - p * a * r * o,
                        h - d * a * r * o,
                        l + p * a * r * o,
                        h + d * a * r * o,
                        t,
                        !0
                      ),
                      (n += i * o);
                  }
                  (this.paths.length = 0), (this.paths[0] = this.v);
                },
              }),
              extendPrototype([DynamicPropertyContainer], u),
              u),
            p =
              ((f.prototype = {
                convertRectToPath: function () {
                  var t = this.p.v[0],
                    e = this.p.v[1],
                    i = this.s.v[0] / 2,
                    s = this.s.v[1] / 2,
                    r = bm_min(i, s, this.r.v),
                    a = r * (1 - roundCorner);
                  (this.v._length = 0),
                    2 === this.d || 1 === this.d
                      ? (this.v.setTripleAt(
                          t + i,
                          e - s + r,
                          t + i,
                          e - s + r,
                          t + i,
                          e - s + a,
                          0,
                          !0
                        ),
                        this.v.setTripleAt(
                          t + i,
                          e + s - r,
                          t + i,
                          e + s - a,
                          t + i,
                          e + s - r,
                          1,
                          !0
                        ),
                        0 !== r
                          ? (this.v.setTripleAt(
                              t + i - r,
                              e + s,
                              t + i - r,
                              e + s,
                              t + i - a,
                              e + s,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i + r,
                              e + s,
                              t - i + a,
                              e + s,
                              t - i + r,
                              e + s,
                              3,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e + s - r,
                              t - i,
                              e + s - r,
                              t - i,
                              e + s - a,
                              4,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e - s + r,
                              t - i,
                              e - s + a,
                              t - i,
                              e - s + r,
                              5,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i + r,
                              e - s,
                              t - i + r,
                              e - s,
                              t - i + a,
                              e - s,
                              6,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + i - r,
                              e - s,
                              t + i - a,
                              e - s,
                              t + i - r,
                              e - s,
                              7,
                              !0
                            ))
                          : (this.v.setTripleAt(
                              t - i,
                              e + s,
                              t - i + a,
                              e + s,
                              t - i,
                              e + s,
                              2
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e - s,
                              t - i,
                              e - s + a,
                              t - i,
                              e - s,
                              3
                            )))
                      : (this.v.setTripleAt(
                          t + i,
                          e - s + r,
                          t + i,
                          e - s + a,
                          t + i,
                          e - s + r,
                          0,
                          !0
                        ),
                        0 !== r
                          ? (this.v.setTripleAt(
                              t + i - r,
                              e - s,
                              t + i - r,
                              e - s,
                              t + i - a,
                              e - s,
                              1,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i + r,
                              e - s,
                              t - i + a,
                              e - s,
                              t - i + r,
                              e - s,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e - s + r,
                              t - i,
                              e - s + r,
                              t - i,
                              e - s + a,
                              3,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e + s - r,
                              t - i,
                              e + s - a,
                              t - i,
                              e + s - r,
                              4,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i + r,
                              e + s,
                              t - i + r,
                              e + s,
                              t - i + a,
                              e + s,
                              5,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + i - r,
                              e + s,
                              t + i - a,
                              e + s,
                              t + i - r,
                              e + s,
                              6,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + i,
                              e + s - r,
                              t + i,
                              e + s - r,
                              t + i,
                              e + s - a,
                              7,
                              !0
                            ))
                          : (this.v.setTripleAt(
                              t - i,
                              e - s,
                              t - i + a,
                              e - s,
                              t - i,
                              e - s,
                              1,
                              !0
                            ),
                            this.v.setTripleAt(
                              t - i,
                              e + s,
                              t - i,
                              e + s - a,
                              t - i,
                              e + s,
                              2,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + i,
                              e + s,
                              t + i - a,
                              e + s,
                              t + i,
                              e + s,
                              3,
                              !0
                            )));
                },
                getValue: function (t) {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    this._mdf && this.convertRectToPath());
                },
                reset: s,
              }),
              extendPrototype([DynamicPropertyContainer], f),
              f),
            d,
            c;
          function f(t, e) {
            (this.v = shape_pool.newElement()),
              (this.v.c = !0),
              (this.localShapeCollection =
                shapeCollection_pool.newShapeCollection()),
              this.localShapeCollection.addShape(this.v),
              (this.paths = this.localShapeCollection),
              (this.elem = t),
              (this.comp = t.comp),
              (this.frameId = -1),
              (this.d = e.d),
              this.initDynamicPropertyContainer(t),
              (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
              (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
              this.dynamicProperties.length
                ? (this.k = !0)
                : ((this.k = !1), this.convertRectToPath());
          }
          function u(t, e) {
            (this.v = shape_pool.newElement()),
              this.v.setPathData(!0, 0),
              (this.elem = t),
              (this.comp = t.comp),
              (this.data = e),
              (this.frameId = -1),
              (this.d = e.d),
              this.initDynamicPropertyContainer(t),
              1 === e.sy
                ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)),
                  (this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this)),
                  (this.convertToPath = this.convertStarToPath))
                : (this.convertToPath = this.convertPolygonToPath),
              (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
              (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
              (this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this)),
              (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
              (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
              (this.localShapeCollection =
                shapeCollection_pool.newShapeCollection()),
              this.localShapeCollection.addShape(this.v),
              (this.paths = this.localShapeCollection),
              this.dynamicProperties.length
                ? (this.k = !0)
                : ((this.k = !1), this.convertToPath());
          }
          function m(t, e) {
            (this.v = shape_pool.newElement()),
              this.v.setPathData(!0, 4),
              (this.localShapeCollection =
                shapeCollection_pool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.localShapeCollection.addShape(this.v),
              (this.d = e.d),
              (this.elem = t),
              (this.comp = t.comp),
              (this.frameId = -1),
              this.initDynamicPropertyContainer(t),
              (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
              this.dynamicProperties.length
                ? (this.k = !0)
                : ((this.k = !1), this.convertEllToPath());
          }
          return {
            getShapeProp: function (t, e, i) {
              var s;
              return (
                3 === i || 4 === i
                  ? (s = new ((3 === i ? e.pt : e.ks).k.length ? o : a)(
                      t,
                      e,
                      i
                    ))
                  : 5 === i
                  ? (s = new p(t, e))
                  : 6 === i
                  ? (s = new l(t, e))
                  : 7 === i && (s = new h(t, e)),
                s.k && t.addDynamicProperty(s),
                s
              );
            },
            getConstructorFunction: function () {
              return a;
            },
            getKeyframedConstructorFunction: function () {
              return o;
            },
          };
        })(),
        ShapeModifiers =
          ((Tr = {}),
          (Ur = {}),
          (Tr.registerModifier = function (t, e) {
            Ur[t] || (Ur[t] = e);
          }),
          (Tr.getModifier = function (t, e, i) {
            return new Ur[t](e, i);
          }),
          Tr),
        Tr,
        Ur;
      function ShapeModifier() {}
      function TrimModifier() {}
      function RoundCornersModifier() {}
      function RepeaterModifier() {}
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      function DashProperty(t, e, i, s) {
        (this.elem = t),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(e.length)),
          (this.renderer = i),
          (this.k = !1),
          (this.dashStr = ""),
          (this.dashArray = createTypedArray(
            "float32",
            e.length ? e.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray("float32", 1)),
          this.initDynamicPropertyContainer(s);
        for (var r, a, n = e.length || 0, r = 0; r < n; r += 1)
          (a = PropertyFactory.getProp(t, e[r].v, 0, 0, this)),
            (this.k = a.k || this.k),
            (this.dataProps[r] = { n: e[r].n, p: a });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      function GradientProperty(t, e, i) {
        (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
        var s = e.k.k[0].s
          ? e.k.k[0].s.length - 4 * e.p
          : e.k.k.length - 4 * e.p;
        (this.o = createTypedArray("float32", s)),
          (this._cmdf = !1),
          (this._omdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = s),
          this.initDynamicPropertyContainer(i),
          (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (t) {
          var e;
          this.closed ||
            ((e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollection_pool.newShapeCollection(),
            }),
            this.shapes.push(e),
            this.addShapeToModifier(e),
            this._isAnimated && t.setAsAnimated());
        }),
        (ShapeModifier.prototype.init = function (t, e) {
          (this.shapes = []),
            (this.elem = t),
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, e),
            (this.frameId = initialDefaultFrame),
            (this.closed = !1),
            (this.k = !1),
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier),
        extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (t, e) {
          (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = e.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (t) {
          t.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (t, e, i, s, r) {
          var a = [];
          e <= 1
            ? a.push({ s: t, e: e })
            : 1 <= t
            ? a.push({ s: t - 1, e: e - 1 })
            : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
          for (var n, o, l = [], h = a.length, n = 0, p, o; n < h; n += 1) {
            (o = a[n]).e * r < s ||
              o.s * r > s + i ||
              ((p = o.s * r <= s ? 0 : (o.s * r - s) / i),
              (o = o.e * r >= s + i ? 1 : (o.e * r - s) / i),
              l.push([p, o]));
          }
          return l.length || l.push([0, 0]), l;
        }),
        (TrimModifier.prototype.releasePathsData = function (t) {
          for (var e, i = t.length, e = 0; e < i; e += 1)
            segments_length_pool.release(t[e]);
          return (t.length = 0), t;
        }),
        (TrimModifier.prototype.processShapes = function (t) {
          var e, i, s, r, r, e, i;
          this._mdf || t
            ? ((r = (this.o.v % 360) / 360) < 0 && (r += 1),
              (e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + r),
              (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + r) < e &&
                ((r = e), (e = i), (i = r)),
              (e = 1e-4 * Math.round(1e4 * e)),
              (i = 1e-4 * Math.round(1e4 * i)),
              (this.sValue = e),
              (this.eValue = i))
            : ((e = this.sValue), (i = this.eValue));
          var a,
            n,
            o,
            l,
            h,
            p,
            d = this.shapes.length,
            c = 0;
          if (i === e)
            for (a = 0; a < d; a += 1)
              this.shapes[a].localShapeCollection.releaseShapes(),
                (this.shapes[a].shape._mdf = !0),
                (this.shapes[a].shape.paths =
                  this.shapes[a].localShapeCollection);
          else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
            if (this._mdf)
              for (a = 0; a < d; a += 1)
                (this.shapes[a].pathsData.length = 0),
                  (this.shapes[a].shape._mdf = !0);
          } else {
            for (var f, u, m = [], a = 0; a < d; a += 1)
              if (
                (f = this.shapes[a]).shape._mdf ||
                this._mdf ||
                t ||
                2 === this.m
              ) {
                if (
                  ((o = (s = f.shape.paths)._length),
                  (p = 0),
                  !f.shape._mdf && f.pathsData.length)
                )
                  p = f.totalShapeLength;
                else {
                  for (
                    l = this.releasePathsData(f.pathsData), n = 0;
                    n < o;
                    n += 1
                  )
                    (h = bez.getSegmentsLength(s.shapes[n])),
                      l.push(h),
                      (p += h.totalLength);
                  (f.totalShapeLength = p), (f.pathsData = l);
                }
                (c += p), (f.shape._mdf = !0);
              } else f.shape.paths = f.localShapeCollection;
            var g,
              y = e,
              v = i,
              b = 0;
            for (a = d - 1; 0 <= a; --a)
              if ((f = this.shapes[a]).shape._mdf) {
                for (
                  (u = f.localShapeCollection).releaseShapes(),
                    2 === this.m && 1 < d
                      ? ((g = this.calculateShapeEdges(
                          e,
                          i,
                          f.totalShapeLength,
                          b,
                          c
                        )),
                        (b += f.totalShapeLength))
                      : (g = [[y, v]]),
                    o = g.length,
                    n = 0;
                  n < o;
                  n += 1
                ) {
                  (y = g[n][0]),
                    (v = g[n][1]),
                    (m.length = 0),
                    v <= 1
                      ? m.push({
                          s: f.totalShapeLength * y,
                          e: f.totalShapeLength * v,
                        })
                      : 1 <= y
                      ? m.push({
                          s: f.totalShapeLength * (y - 1),
                          e: f.totalShapeLength * (v - 1),
                        })
                      : (m.push({
                          s: f.totalShapeLength * y,
                          e: f.totalShapeLength,
                        }),
                        m.push({ s: 0, e: f.totalShapeLength * (v - 1) }));
                  var w = this.addShapes(f, m[0]),
                    S;
                  m[0].s !== m[0].e &&
                    (1 < m.length &&
                      (w = f.shape.paths.shapes[f.shape.paths._length - 1].c
                        ? ((S = w.pop()),
                          this.addPaths(w, u),
                          this.addShapes(f, m[1], S))
                        : (this.addPaths(w, u), this.addShapes(f, m[1]))),
                    this.addPaths(w, u));
                }
                f.shape.paths = u;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (t, e) {
          for (var i, s = t.length, i = 0; i < s; i += 1) e.addShape(t[i]);
        }),
        (TrimModifier.prototype.addSegment = function (t, e, i, s, r, a, n) {
          r.setXYAt(e[0], e[1], "o", a),
            r.setXYAt(i[0], i[1], "i", a + 1),
            n && r.setXYAt(t[0], t[1], "v", a),
            r.setXYAt(s[0], s[1], "v", a + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (t, e, i, s) {
          e.setXYAt(t[1], t[5], "o", i),
            e.setXYAt(t[2], t[6], "i", i + 1),
            s && e.setXYAt(t[0], t[4], "v", i),
            e.setXYAt(t[3], t[7], "v", i + 1);
        }),
        (TrimModifier.prototype.addShapes = function (t, e, i) {
          var s,
            r,
            a,
            n,
            o,
            l,
            h,
            p,
            d = t.pathsData,
            c = t.shape.paths.shapes,
            f = t.shape.paths._length,
            u = 0,
            m = [],
            g = !0,
            p = i
              ? ((o = i._length), i._length)
              : ((i = shape_pool.newElement()), (o = 0)),
            y,
            n;
          for (m.push(i), s = 0; s < f; s += 1) {
            for (
              l = d[s].lengths,
                i.c = c[s].c,
                a = c[s].c ? l.length : l.length + 1,
                r = 1;
              r < a;
              r += 1
            )
              if (u + (n = l[r - 1]).addedLength < e.s)
                (u += n.addedLength), (i.c = !1);
              else {
                if (u > e.e) {
                  i.c = !1;
                  break;
                }
                e.s <= u && e.e >= u + n.addedLength
                  ? (this.addSegment(
                      c[s].v[r - 1],
                      c[s].o[r - 1],
                      c[s].i[r],
                      c[s].v[r],
                      i,
                      o,
                      g
                    ),
                    (g = !1))
                  : ((h = bez.getNewSegment(
                      c[s].v[r - 1],
                      c[s].v[r],
                      c[s].o[r - 1],
                      c[s].i[r],
                      (e.s - u) / n.addedLength,
                      (e.e - u) / n.addedLength,
                      l[r - 1]
                    )),
                    this.addSegmentFromArray(h, i, o, g),
                    (i.c = g = !1)),
                  (u += n.addedLength),
                  (o += 1);
              }
            if (
              (c[s].c &&
                l.length &&
                ((n = l[r - 1]),
                u <= e.e
                  ? ((y = l[r - 1].addedLength),
                    e.s <= u && e.e >= u + y
                      ? (this.addSegment(
                          c[s].v[r - 1],
                          c[s].o[r - 1],
                          c[s].i[0],
                          c[s].v[0],
                          i,
                          o,
                          g
                        ),
                        (g = !1))
                      : ((h = bez.getNewSegment(
                          c[s].v[r - 1],
                          c[s].v[0],
                          c[s].o[r - 1],
                          c[s].i[0],
                          (e.s - u) / y,
                          (e.e - u) / y,
                          l[r - 1]
                        )),
                        this.addSegmentFromArray(h, i, o, g),
                        (i.c = g = !1)))
                  : (i.c = !1),
                (u += n.addedLength),
                (o += 1)),
              i._length &&
                (i.setXYAt(i.v[p][0], i.v[p][1], "i", p),
                i.setXYAt(
                  i.v[i._length - 1][0],
                  i.v[i._length - 1][1],
                  "o",
                  i._length - 1
                )),
              u > e.e)
            )
              break;
            s < f - 1 &&
              ((i = shape_pool.newElement()), (g = !0), m.push(i), (o = 0));
          }
          return m;
        }),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          t,
          e
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (t, e) {
          var i = shape_pool.newElement();
          i.c = t.c;
          for (
            var s,
              r,
              a,
              n,
              o,
              l,
              h,
              p,
              d,
              c,
              f,
              u,
              m,
              g = t._length,
              y = 0,
              s = 0;
            s < g;
            s += 1
          )
            (r = t.v[s]),
              (n = t.o[s]),
              (a = t.i[s]),
              r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1]
                ? (0 !== s && s !== g - 1) || t.c
                  ? ((o = 0 === s ? t.v[g - 1] : t.v[s - 1]),
                    (h = (l = Math.sqrt(
                      Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                    ))
                      ? Math.min(l / 2, e) / l
                      : 0),
                    (p = u = r[0] + (o[0] - r[0]) * h),
                    (d = m = r[1] - (r[1] - o[1]) * h),
                    (c = u - (u - r[0]) * roundCorner),
                    (f = m - (m - r[1]) * roundCorner),
                    i.setTripleAt((p = u), (d = m), c, f, u, m, y),
                    (y += 1),
                    (o = s === g - 1 ? t.v[0] : t.v[s + 1]),
                    (h = (l = Math.sqrt(
                      Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)
                    ))
                      ? Math.min(l / 2, e) / l
                      : 0),
                    (p = c = r[0] + (o[0] - r[0]) * h),
                    (d = f = r[1] + (o[1] - r[1]) * h),
                    (u = c - (c - r[0]) * roundCorner),
                    (m = f - (f - r[1]) * roundCorner),
                    i.setTripleAt((p = c), (d = f), c, f, u, m, y))
                  : i.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], y)
                : i.setTripleAt(
                    t.v[s][0],
                    t.v[s][1],
                    t.o[s][0],
                    t.o[s][1],
                    t.i[s][0],
                    t.i[s][1],
                    y
                  ),
              (y += 1);
          return i;
        }),
        (RoundCornersModifier.prototype.processShapes = function (t) {
          var e,
            i,
            s,
            r,
            a,
            n,
            o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (i = 0; i < o; i += 1) {
              if (
                ((a = this.shapes[i]).shape.paths,
                (n = a.localShapeCollection),
                a.shape._mdf || this._mdf || t)
              )
                for (
                  n.releaseShapes(),
                    a.shape._mdf = !0,
                    e = a.shape.paths.shapes,
                    r = a.shape.paths._length,
                    s = 0;
                  s < r;
                  s += 1
                )
                  n.addShape(this.processPath(e[s], l));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = !1);
        }),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              t,
              e.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
            (this.data = e),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          t,
          e,
          i,
          s,
          r,
          a
        ) {
          var n = a ? -1 : 1,
            o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),
            l = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
          t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
            e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
            e.rotate(-s.r.v * n * r),
            e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
            i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
            i.scale(a ? 1 / o : o, a ? 1 / l : l),
            i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (t, e, i, s) {
          for (
            this.elem = t,
              this.arr = e,
              this.pos = i,
              this.elemsData = s,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e[i]);
            0 < i;

          )
            this._elements.unshift(e[--i]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (t) {
          for (var e, i = t.length, e = 0; e < i; e += 1)
            (t[e]._processed = !1),
              "gr" === t[e].ty && this.resetElements(t[e].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (t) {
          t.length;
          var t = JSON.parse(JSON.stringify(t));
          return this.resetElements(t), t;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
          for (var i, s = t.length, i = 0; i < s; i += 1)
            (t[i]._render = e),
              "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
        }),
        (RepeaterModifier.prototype.processShapes = function (t) {
          var e, i, s, r, a;
          if (this._mdf || t) {
            var n,
              o = Math.ceil(this.c.v);
            if (this._groups.length < o) {
              for (; this._groups.length < o; ) {
                var l = { it: this.cloneElements(this._elements), ty: "gr" };
                l.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: "Transform",
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [
                      { s: 0, e: 0, t: 0 },
                      { s: 0, e: 0, t: 1 },
                    ],
                  },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: "tr",
                }),
                  this.arr.splice(0, 0, l),
                  this._groups.splice(0, 0, l),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes();
            }
            for (s = a = 0; s <= this._groups.length - 1; s += 1)
              (this._groups[s]._render = n = a < o),
                this.changeGroupRender(this._groups[s].it, n),
                (a += 1);
            this._currentCopies = o;
            var h = this.o.v,
              t = h % 1,
              p = 0 < h ? Math.floor(h) : Math.ceil(h),
              d = (this.tr.v.props, this.pMatrix.props),
              c = this.rMatrix.props,
              f = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var u,
              m,
              g = 0;
            if (0 < h) {
              for (; g < p; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (g += 1);
              t &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  t,
                  !1
                ),
                (g += t));
            } else if (h < 0) {
              for (; p < g; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  --g;
              t &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -t,
                  !0
                ),
                (g -= t));
            }
            for (
              s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                r = 1 === this.data.m ? 1 : -1,
                a = this._currentCopies;
              a;

            ) {
              if (
                ((m = (i = (e = this.elemsData[s].it)[e.length - 1].transform
                  .mProps.v.props).length),
                (e[e.length - 1].transform.mProps._mdf = !0),
                (e[e.length - 1].transform.op._mdf = !0),
                (e[e.length - 1].transform.op.v =
                  this.so.v +
                  (this.eo.v - this.so.v) * (s / (this._currentCopies - 1))),
                0 !== g)
              ) {
                for (
                  ((0 !== s && 1 === r) ||
                    (s !== this._currentCopies - 1 && -1 === r)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      c[0],
                      c[1],
                      c[2],
                      c[3],
                      c[4],
                      c[5],
                      c[6],
                      c[7],
                      c[8],
                      c[9],
                      c[10],
                      c[11],
                      c[12],
                      c[13],
                      c[14],
                      c[15]
                    ),
                    this.matrix.transform(
                      f[0],
                      f[1],
                      f[2],
                      f[3],
                      f[4],
                      f[5],
                      f[6],
                      f[7],
                      f[8],
                      f[9],
                      f[10],
                      f[11],
                      f[12],
                      f[13],
                      f[14],
                      f[15]
                    ),
                    this.matrix.transform(
                      d[0],
                      d[1],
                      d[2],
                      d[3],
                      d[4],
                      d[5],
                      d[6],
                      d[7],
                      d[8],
                      d[9],
                      d[10],
                      d[11],
                      d[12],
                      d[13],
                      d[14],
                      d[15]
                    ),
                    u = 0;
                  u < m;
                  u += 1
                )
                  i[u] = this.matrix.props[u];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), u = 0; u < m; u += 1)
                  i[u] = this.matrix.props[u];
              (g += 1), --a, (s += r);
            }
          } else
            for (a = this._currentCopies, s = 0, r = 1; a; )
              (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v
                .props),
                (e[e.length - 1].transform.mProps._mdf = !1),
                (e[e.length - 1].transform.op._mdf = !1),
                --a,
                (s += r);
        }),
        (RepeaterModifier.prototype.addShape = function () {}),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        (ShapeCollection.prototype.addShape = function (t) {
          this._length === this._maxLength &&
            ((this.shapes = this.shapes.concat(
              createSizedArray(this._maxLength)
            )),
            (this._maxLength *= 2)),
            (this.shapes[this._length] = t),
            (this._length += 1);
        }),
        (ShapeCollection.prototype.releaseShapes = function () {
          for (var t, t = 0; t < this._length; t += 1)
            shape_pool.release(this.shapes[t]);
          this._length = 0;
        }),
        (DashProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId || t) &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties(),
            (this._mdf = this._mdf || t),
            this._mdf)
          ) {
            var e = 0,
              i = this.dataProps.length;
            for (
              "svg" === this.renderer && (this.dashStr = ""), e = 0;
              e < i;
              e += 1
            )
              "o" != this.dataProps[e].n
                ? "svg" === this.renderer
                  ? (this.dashStr += " " + this.dataProps[e].p.v)
                  : (this.dashArray[e] = this.dataProps[e].p.v)
                : (this.dashoffset[0] = this.dataProps[e].p.v);
          }
        }),
        extendPrototype([DynamicPropertyContainer], DashProperty),
        (GradientProperty.prototype.comparePoints = function (t, e) {
          for (var i = 0, s = this.o.length / 2; i < s; ) {
            if (0.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
            i += 1;
          }
          return !0;
        }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                return !1;
              t += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (t) {
          if (
            (this.prop.getValue(),
            (this._mdf = !1),
            (this._cmdf = !1),
            (this._omdf = !1),
            this.prop._mdf || t)
          ) {
            for (var e, i, s, r = 4 * this.data.p, e = 0; e < r; e += 1)
              (i = e % 4 == 0 ? 100 : 255),
                (s = Math.round(this.prop.v[e] * i)),
                this.c[e] !== s && ((this.c[e] = s), (this._cmdf = !t));
            if (this.o.length)
              for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1)
                (i = e % 2 == 0 ? 100 : 1),
                  (s =
                    e % 2 == 0
                      ? Math.round(100 * this.prop.v[e])
                      : this.prop.v[e]),
                  this.o[e - 4 * this.data.p] !== s &&
                    ((this.o[e - 4 * this.data.p] = s), (this._omdf = !t));
            this._mdf = !t;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty);
      var buildShapeString = function (t, e, i, s) {
          if (0 === e) return "";
          for (
            var r,
              a = t.o,
              n = t.i,
              o = t.v,
              l = " M" + s.applyToPointStringified(o[0][0], o[0][1]),
              r = 1;
            r < e;
            r += 1
          )
            l +=
              " C" +
              s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
              " " +
              s.applyToPointStringified(n[r][0], n[r][1]) +
              " " +
              s.applyToPointStringified(o[r][0], o[r][1]);
          return (
            i &&
              e &&
              ((l +=
                " C" +
                s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) +
                " " +
                s.applyToPointStringified(n[0][0], n[0][1]) +
                " " +
                s.applyToPointStringified(o[0][0], o[0][1])),
              (l += "z")),
            l
          );
        },
        ImagePreloader =
          ((Hz = (function () {
            var t = createTag("canvas");
            (t.width = 1), (t.height = 1);
            var e = t.getContext("2d");
            return (e.fillStyle = "#FF0000"), e.fillRect(0, 0, 1, 1), t;
          })()),
          function () {
            (this.loadAssets = Kz),
              (this.setAssetsPath = Mz),
              (this.setPath = Lz),
              (this.loaded = Pz),
              (this.destroy = Oz),
              (this.getImage = Nz),
              (this._createImageData = Jz),
              (this._imageLoaded = Iz),
              (this.assetsPath = ""),
              (this.path = ""),
              (this.totalImages = 0),
              (this.loadedAssets = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }),
        featureSupport =
          ((lw = { maskType: !0 }),
          (/MSIE 10/i.test(navigator.userAgent) ||
            /MSIE 9/i.test(navigator.userAgent) ||
            /rv:11.0/i.test(navigator.userAgent) ||
            /Edge\/\d./i.test(navigator.userAgent)) &&
            (lw.maskType = !1),
          lw),
        lw,
        filtersFactory =
          ((mw = {}),
          (mw.createFilter = function (t) {
            var e = createNS("filter");
            return (
              e.setAttribute("id", t),
              e.setAttribute("filterUnits", "objectBoundingBox"),
              e.setAttribute("x", "0%"),
              e.setAttribute("y", "0%"),
              e.setAttribute("width", "100%"),
              e.setAttribute("height", "100%"),
              e
            );
          }),
          (mw.createAlphaToLuminanceFilter = function () {
            var t = createNS("feColorMatrix");
            return (
              t.setAttribute("type", "matrix"),
              t.setAttribute("color-interpolation-filters", "sRGB"),
              t.setAttribute(
                "values",
                "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
              ),
              t
            );
          }),
          mw),
        mw,
        assetLoader = {
          load: function (t, e, i) {
            var s,
              r = new XMLHttpRequest();
            r.open("GET", t, !0);
            try {
              r.responseType = "json";
            } catch (t) {}
            r.send(),
              (r.onreadystatechange = function () {
                if (4 == r.readyState)
                  if (200 == r.status) (s = lA(r)), e(s);
                  else
                    try {
                      (s = lA(r)), e(s);
                    } catch (t) {
                      i && i(t);
                    }
              });
          },
        },
        Hz;
      function lA(t) {
        return t.response && "object" == typeof t.response
          ? t.response
          : t.response && "string" == typeof t.response
          ? JSON.parse(t.response)
          : t.responseText
          ? JSON.parse(t.responseText)
          : void 0;
      }
      function Iz() {
        (this.loadedAssets += 1),
          this.loadedAssets === this.totalImages &&
            this.imagesLoadedCb &&
            this.imagesLoadedCb(null);
      }
      function Jz(t) {
        var e =
            ((e = t),
            (s = this.assetsPath),
            (r = this.path),
            (i = ""),
            e.e
              ? (i = e.p)
              : s
              ? (i =
                  s +
                  (s =
                    -1 !== (s = e.p).indexOf("images/") ? s.split("/")[1] : s))
              : ((i = r), (i += e.u || ""), (i += e.p)),
            i),
          i = createTag("img"),
          e,
          s,
          r,
          i;
        (i.crossOrigin = "anonymous"),
          i.addEventListener("load", this._imageLoaded.bind(this), !1),
          i.addEventListener(
            "error",
            function () {
              (a.img = Hz), this._imageLoaded();
            }.bind(this),
            !1
          ),
          (i.src = e);
        var a = { img: i, assetData: t };
        return a;
      }
      function Kz(t, e) {
        this.imagesLoadedCb = e;
        for (var i, s = t.length, i = 0; i < s; i += 1)
          t[i].layers ||
            ((this.totalImages += 1),
            this.images.push(this._createImageData(t[i])));
      }
      function Lz(t) {
        this.path = t || "";
      }
      function Mz(t) {
        this.assetsPath = t || "";
      }
      function Nz(t) {
        for (var e = 0, i = this.images.length; e < i; ) {
          if (this.images[e].assetData === t) return this.images[e].img;
          e += 1;
        }
      }
      function Oz() {
        (this.imagesLoadedCb = null), (this.images.length = 0);
      }
      function Pz() {
        return this.totalImages === this.loadedAssets;
      }
      function TextAnimatorProperty(t, e, i) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = t),
          (this._renderType = e),
          (this._elem = i),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(i);
      }
      function TextAnimatorDataProperty(t, e, i) {
        var s = { propType: !1 },
          r = PropertyFactory.getProp,
          a = e.a;
        (this.a = {
          r: a.r ? r(t, a.r, 0, degToRads, i) : s,
          rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
          ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
          sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
          sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
          s: a.s ? r(t, a.s, 1, 0.01, i) : s,
          a: a.a ? r(t, a.a, 1, 0, i) : s,
          o: a.o ? r(t, a.o, 0, 0.01, i) : s,
          p: a.p ? r(t, a.p, 1, 0, i) : s,
          sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
          sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
          fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
          fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
          fs: a.fs ? r(t, a.fs, 0, 0.01, i) : s,
          fb: a.fb ? r(t, a.fb, 0, 0.01, i) : s,
          t: a.t ? r(t, a.t, 0, 0, i) : s,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
          (this.s.t = e.s.t);
      }
      function LetterProps(t, e, i, s, r, a) {
        (this.o = t),
          (this.sw = e),
          (this.sc = i),
          (this.fc = s),
          (this.m = r),
          (this.p = a),
          (this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!s, m: !0, p: !0 });
      }
      function TextProperty(t, e) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ""),
          (this.v = ""),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._mdf = !1),
          (this.data = e),
          (this.elem = t),
          (this.comp = this.elem.comp),
          (this.keysIndex = 0),
          (this.canResize = !1),
          (this.minimumFontSize = 1),
          (this.effectsSequence = []),
          (this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1,
          }),
          this.copyData(this.currentData, this.data.d.k[0].s),
          this.searchProperty() || this.completeTextData(this.currentData);
      }
      (TextAnimatorProperty.prototype.searchProperties = function () {
        for (
          var t,
            e,
            i = this._textData.a.length,
            s = PropertyFactory.getProp,
            t = 0;
          t < i;
          t += 1
        )
          (e = this._textData.a[t]),
            (this._animatorsData[t] = new TextAnimatorDataProperty(
              this._elem,
              e,
              this
            ));
        this._textData.p && "m" in this._textData.p
          ? ((this._pathData = {
              f: s(this._elem, this._textData.p.f, 0, 0, this),
              l: s(this._elem, this._textData.p.l, 0, 0, this),
              r: this._textData.p.r,
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
            (this._hasMaskedPath = !0))
          : (this._hasMaskedPath = !1),
          (this._moreOptions.alignment = s(
            this._elem,
            this._textData.m.a,
            1,
            0,
            this
          ));
      }),
        (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
          if (
            ((this.lettersChangedFlag = e),
            this._mdf ||
              this._isFirstFrame ||
              e ||
              (this._hasMaskedPath && this._pathData.m._mdf))
          ) {
            this._isFirstFrame = !1;
            var i,
              s,
              r,
              a,
              n,
              o,
              l,
              h,
              p,
              d,
              c,
              f,
              u,
              m,
              g,
              y,
              v,
              b,
              w,
              S = this._moreOptions.alignment.v,
              k = this._animatorsData,
              T = this._textData,
              x = this.mHelper,
              P = this._renderType,
              A = this.renderedLetters.length,
              C = (this.data, t.l);
            if (this._hasMaskedPath) {
              if (
                ((w = this._pathData.m),
                !this._pathData.n || this._pathData._mdf)
              ) {
                for (
                  var _,
                    E = w.v,
                    n = { tLength: 0, segments: [] },
                    a = (E = this._pathData.r ? E.reverse() : E)._length - 1,
                    r = (y = 0);
                  r < a;
                  r += 1
                )
                  (_ = bez.buildBezierData(
                    E.v[r],
                    E.v[r + 1],
                    [E.o[r][0] - E.v[r][0], E.o[r][1] - E.v[r][1]],
                    [
                      E.i[r + 1][0] - E.v[r + 1][0],
                      E.i[r + 1][1] - E.v[r + 1][1],
                    ]
                  )),
                    (n.tLength += _.segmentLength),
                    n.segments.push(_),
                    (y += _.segmentLength);
                (r = a),
                  w.v.c &&
                    ((_ = bez.buildBezierData(
                      E.v[r],
                      E.v[0],
                      [E.o[r][0] - E.v[r][0], E.o[r][1] - E.v[r][1]],
                      [E.i[0][0] - E.v[0][0], E.i[0][1] - E.v[0][1]]
                    )),
                    (n.tLength += _.segmentLength),
                    n.segments.push(_),
                    (y += _.segmentLength)),
                  (this._pathData.pi = n);
              }
              if (
                ((n = this._pathData.pi),
                (o = this._pathData.f.v),
                (d = 1),
                (p = !(h = c = 0)),
                (m = n.segments),
                o < 0 && w.v.c)
              )
                for (
                  n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                    d = (u = m[(c = m.length - 1)].points).length - 1;
                  o < 0;

                )
                  (o += u[d].partialLength),
                    --d < 0 && (d = (u = m[--c].points).length - 1);
              (f = (u = m[c].points)[d - 1]), (g = (l = u[d]).partialLength);
            }
            a = C.length;
            var s = (i = 0),
              M,
              $,
              D,
              I,
              F = 1.2 * t.finalSize * 0.714,
              O = !0,
              D = k.length,
              L,
              z,
              R,
              V,
              H,
              N,
              B,
              G,
              j,
              W,
              q,
              U,
              Y,
              X = -1,
              K = o,
              Z = c,
              J = d,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray,
              b,
              b;
            if (2 === t.j || 1 === t.j) {
              var it = 0,
                st = 0,
                rt = 2 === t.j ? -0.5 : -1,
                at = 0,
                nt = !0;
              for (r = 0; r < a; r += 1)
                if (C[r].n) {
                  for (it && (it += st); at < r; )
                    (C[at].animatorJustifyOffset = it), (at += 1);
                  nt = !(it = 0);
                } else {
                  for ($ = 0; $ < D; $ += 1)
                    (M = k[$].a).t.propType &&
                      (nt && 2 === t.j && (st += M.t.v * rt),
                      (L = k[$].s.getMult(
                        C[r].anIndexes[$],
                        T.a[$].s.totalChars
                      )).length
                        ? (it += M.t.v * L[0] * rt)
                        : (it += M.t.v * L * rt));
                  nt = !1;
                }
              for (it && (it += st); at < r; )
                (C[at].animatorJustifyOffset = it), (at += 1);
            }
            for (r = 0; r < a; r += 1) {
              if ((x.reset(), (H = 1), C[r].n))
                (i = 0),
                  (s += t.yOffset),
                  (s += O ? 1 : 0),
                  (o = K),
                  (O = !1),
                  this._hasMaskedPath &&
                    ((f = (u = m[(c = Z)].points)[(d = J) - 1]),
                    (g = (l = u[d]).partialLength),
                    (h = 0)),
                  (Y = W = U = tt = ""),
                  (et = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (Q !== C[r].line) {
                    switch (t.j) {
                      case 1:
                        o += y - t.lineWidths[C[r].line];
                        break;
                      case 2:
                        o += (y - t.lineWidths[C[r].line]) / 2;
                    }
                    Q = C[r].line;
                  }
                  X !== C[r].ind &&
                    (C[X] && (o += C[X].extra),
                    (o += C[r].an / 2),
                    (X = C[r].ind)),
                    (o += (S[0] * C[r].an) / 200);
                  for (var ot = 0, $ = 0; $ < D; $ += 1)
                    (M = k[$].a).p.propType &&
                      ((L = k[$].s.getMult(
                        C[r].anIndexes[$],
                        T.a[$].s.totalChars
                      )).length
                        ? (ot += M.p.v[0] * L[0])
                        : (ot += M.p.v[0] * L)),
                      M.a.propType &&
                        ((L = k[$].s.getMult(
                          C[r].anIndexes[$],
                          T.a[$].s.totalChars
                        )).length
                          ? (ot += M.a.v[0] * L[0])
                          : (ot += M.a.v[0] * L));
                  for (p = !0; p; )
                    o + ot <= h + g || !u
                      ? ((v = (o + ot - h) / l.partialLength),
                        (R = f.point[0] + (l.point[0] - f.point[0]) * v),
                        (V = f.point[1] + (l.point[1] - f.point[1]) * v),
                        x.translate((-S[0] * C[r].an) / 200, (-S[1] * F) / 100),
                        (p = !1))
                      : u &&
                        ((h += l.partialLength),
                        (d += 1) >= u.length &&
                          ((d = 0),
                          (u = m[(c += 1)]
                            ? m[c].points
                            : w.v.c
                            ? m[(c = d = 0)].points
                            : ((h -= l.partialLength), null))),
                        u && ((f = l), (g = (l = u[d]).partialLength)));
                  (z = C[r].an / 2 - C[r].add), x.translate(-z, 0, 0);
                } else
                  (z = C[r].an / 2 - C[r].add),
                    x.translate(-z, 0, 0),
                    x.translate((-S[0] * C[r].an) / 200, (-S[1] * F) / 100, 0);
                for (C[r].l, $ = 0; $ < D; $ += 1)
                  (M = k[$].a).t.propType &&
                    ((L = k[$].s.getMult(
                      C[r].anIndexes[$],
                      T.a[$].s.totalChars
                    )),
                    (0 === i && 0 === t.j) ||
                      (this._hasMaskedPath
                        ? L.length
                          ? (o += M.t.v * L[0])
                          : (o += M.t.v * L)
                        : L.length
                        ? (i += M.t.v * L[0])
                        : (i += M.t.v * L)));
                for (
                  C[r].l,
                    t.strokeWidthAnim && (B = t.sw || 0),
                    t.strokeColorAnim &&
                      (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                    t.fillColorAnim &&
                      t.fc &&
                      (G = [t.fc[0], t.fc[1], t.fc[2]]),
                    $ = 0;
                  $ < D;
                  $ += 1
                )
                  (M = k[$].a).a.propType &&
                    ((L = k[$].s.getMult(
                      C[r].anIndexes[$],
                      T.a[$].s.totalChars
                    )).length
                      ? x.translate(
                          -M.a.v[0] * L[0],
                          -M.a.v[1] * L[1],
                          M.a.v[2] * L[2]
                        )
                      : x.translate(
                          -M.a.v[0] * L,
                          -M.a.v[1] * L,
                          M.a.v[2] * L
                        ));
                for ($ = 0; $ < D; $ += 1)
                  (M = k[$].a).s.propType &&
                    ((L = k[$].s.getMult(
                      C[r].anIndexes[$],
                      T.a[$].s.totalChars
                    )).length
                      ? x.scale(
                          1 + (M.s.v[0] - 1) * L[0],
                          1 + (M.s.v[1] - 1) * L[1],
                          1
                        )
                      : x.scale(
                          1 + (M.s.v[0] - 1) * L,
                          1 + (M.s.v[1] - 1) * L,
                          1
                        ));
                for ($ = 0; $ < D; $ += 1) {
                  if (
                    ((M = k[$].a),
                    (L = k[$].s.getMult(
                      C[r].anIndexes[$],
                      T.a[$].s.totalChars
                    )),
                    M.sk.propType &&
                      (L.length
                        ? x.skewFromAxis(-M.sk.v * L[0], M.sa.v * L[1])
                        : x.skewFromAxis(-M.sk.v * L, M.sa.v * L)),
                    M.r.propType &&
                      (L.length
                        ? x.rotateZ(-M.r.v * L[2])
                        : x.rotateZ(-M.r.v * L)),
                    M.ry.propType &&
                      (L.length
                        ? x.rotateY(M.ry.v * L[1])
                        : x.rotateY(M.ry.v * L)),
                    M.rx.propType &&
                      (L.length
                        ? x.rotateX(M.rx.v * L[0])
                        : x.rotateX(M.rx.v * L)),
                    M.o.propType &&
                      (L.length
                        ? (H += (M.o.v * L[0] - H) * L[0])
                        : (H += (M.o.v * L - H) * L)),
                    t.strokeWidthAnim &&
                      M.sw.propType &&
                      (L.length ? (B += M.sw.v * L[0]) : (B += M.sw.v * L)),
                    t.strokeColorAnim && M.sc.propType)
                  )
                    for (j = 0; j < 3; j += 1)
                      L.length
                        ? (N[j] = N[j] + (M.sc.v[j] - N[j]) * L[0])
                        : (N[j] = N[j] + (M.sc.v[j] - N[j]) * L);
                  if (t.fillColorAnim && t.fc) {
                    if (M.fc.propType)
                      for (j = 0; j < 3; j += 1)
                        L.length
                          ? (G[j] = G[j] + (M.fc.v[j] - G[j]) * L[0])
                          : (G[j] = G[j] + (M.fc.v[j] - G[j]) * L);
                    M.fh.propType &&
                      (G = L.length
                        ? addHueToRGB(G, M.fh.v * L[0])
                        : addHueToRGB(G, M.fh.v * L)),
                      M.fs.propType &&
                        (G = L.length
                          ? addSaturationToRGB(G, M.fs.v * L[0])
                          : addSaturationToRGB(G, M.fs.v * L)),
                      M.fb.propType &&
                        (G = L.length
                          ? addBrightnessToRGB(G, M.fb.v * L[0])
                          : addBrightnessToRGB(G, M.fb.v * L));
                  }
                }
                for ($ = 0; $ < D; $ += 1)
                  (M = k[$].a).p.propType &&
                    ((L = k[$].s.getMult(
                      C[r].anIndexes[$],
                      T.a[$].s.totalChars
                    )),
                    this._hasMaskedPath
                      ? L.length
                        ? x.translate(0, M.p.v[1] * L[0], -M.p.v[2] * L[1])
                        : x.translate(0, M.p.v[1] * L, -M.p.v[2] * L)
                      : L.length
                      ? x.translate(
                          M.p.v[0] * L[0],
                          M.p.v[1] * L[1],
                          -M.p.v[2] * L[2]
                        )
                      : x.translate(M.p.v[0] * L, M.p.v[1] * L, -M.p.v[2] * L));
                if (
                  (t.strokeWidthAnim && (W = B < 0 ? 0 : B),
                  t.strokeColorAnim &&
                    (q =
                      "rgb(" +
                      Math.round(255 * N[0]) +
                      "," +
                      Math.round(255 * N[1]) +
                      "," +
                      Math.round(255 * N[2]) +
                      ")"),
                  t.fillColorAnim &&
                    t.fc &&
                    (U =
                      "rgb(" +
                      Math.round(255 * G[0]) +
                      "," +
                      Math.round(255 * G[1]) +
                      "," +
                      Math.round(255 * G[2]) +
                      ")"),
                  this._hasMaskedPath)
                ) {
                  x.translate(0, -t.ls),
                    x.translate(0, (S[1] * F) / 100 + s, 0),
                    T.p.p &&
                      ((b =
                        (l.point[1] - f.point[1]) / (l.point[0] - f.point[0])),
                      (b = (180 * Math.atan(b)) / Math.PI),
                      l.point[0] < f.point[0] && (b += 180),
                      x.rotate((-b * Math.PI) / 180)),
                    x.translate(R, V, 0),
                    (o -= (S[0] * C[r].an) / 200),
                    C[r + 1] &&
                      X !== C[r + 1].ind &&
                      ((o += C[r].an / 2), (o += (t.tr / 1e3) * t.finalSize));
                } else {
                  switch (
                    (x.translate(i, s, 0),
                    t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                    t.j)
                  ) {
                    case 1:
                      x.translate(
                        C[r].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[C[r].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      x.translate(
                        C[r].animatorJustifyOffset +
                          t.justifyOffset +
                          (t.boxWidth - t.lineWidths[C[r].line]) / 2,
                        0,
                        0
                      );
                  }
                  x.translate(0, -t.ls),
                    x.translate(z, 0, 0),
                    x.translate((S[0] * C[r].an) / 200, (S[1] * F) / 100, 0),
                    (i += C[r].l + (t.tr / 1e3) * t.finalSize);
                }
                "html" === P
                  ? (tt = x.toCSS())
                  : "svg" === P
                  ? (tt = x.to2dCSS())
                  : (et = [
                      x.props[0],
                      x.props[1],
                      x.props[2],
                      x.props[3],
                      x.props[4],
                      x.props[5],
                      x.props[6],
                      x.props[7],
                      x.props[8],
                      x.props[9],
                      x.props[10],
                      x.props[11],
                      x.props[12],
                      x.props[13],
                      x.props[14],
                      x.props[15],
                    ]),
                  (Y = H);
              }
              this.lettersChangedFlag =
                A <= r
                  ? ((I = new LetterProps(Y, W, q, U, tt, et)),
                    this.renderedLetters.push(I),
                    (A += 1),
                    !0)
                  : (I = this.renderedLetters[r]).update(Y, W, q, U, tt, et) ||
                    this.lettersChangedFlag;
            }
          }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId &&
            ((this._frameId = this._elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
        (LetterProps.prototype.update = function (t, e, i, s, r, a) {
          (this._mdf.o = !1),
            (this._mdf.sw = !1),
            (this._mdf.sc = !1),
            (this._mdf.fc = !1),
            (this._mdf.m = !1);
          var n = (this._mdf.p = !1);
          return (
            this.o !== t && ((this.o = t), (n = this._mdf.o = !0)),
            this.sw !== e && ((this.sw = e), (n = this._mdf.sw = !0)),
            this.sc !== i && ((this.sc = i), (n = this._mdf.sc = !0)),
            this.fc !== s && ((this.fc = s), (n = this._mdf.fc = !0)),
            this.m !== r && ((this.m = r), (n = this._mdf.m = !0)),
            !a.length ||
              (this.p[0] === a[0] &&
                this.p[1] === a[1] &&
                this.p[4] === a[4] &&
                this.p[5] === a[5] &&
                this.p[12] === a[12] &&
                this.p[13] === a[13]) ||
              ((this.p = a), (n = this._mdf.p = !0)),
            n
          );
        }),
        (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (t, e) {
          for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          return t;
        }),
        (TextProperty.prototype.setCurrentData = function (t) {
          t.__complete || this.completeTextData(t),
            (this.currentData = t),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this._mdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
          return (
            (this.kf = 1 < this.data.d.k.length),
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
          );
        }),
        (TextProperty.prototype.addEffect = function (t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (t) {
          if (
            (this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length) ||
            t
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              i = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              (this.lock = !0), (this._mdf = !1);
              for (
                var s,
                  r = this.effectsSequence.length,
                  a = t || this.data.d.k[this.keysIndex].s,
                  s = 0;
                s < r;
                s += 1
              )
                a =
                  i !== this.keysIndex
                    ? this.effectsSequence[s](a, a.t)
                    : this.effectsSequence[s](this.currentData, a.t);
              e !== a && this.setCurrentData(a),
                (this.pv = this.v = this.currentData),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var t = this.data.d.k,
              e = this.elem.comp.renderedFrame,
              i = 0,
              s = t.length;
            i <= s - 1 && (t[i].s, !(i === s - 1 || t[i + 1].t > e));

          )
            i += 1;
          return (
            this.keysIndex !== i && (this.keysIndex = i),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (t) {
          for (
            var e = FontManager.getCombinedCharacterCodes(),
              i = [],
              s = 0,
              r = t.length;
            s < r;

          )
            -1 !== e.indexOf(t.charCodeAt(s))
              ? (i[i.length - 1] += t.charAt(s))
              : i.push(t.charAt(s)),
              (s += 1);
          return i;
        }),
        (TextProperty.prototype.completeTextData = function (t) {
          t.__complete = !0;
          var e,
            i,
            s,
            r,
            a,
            n,
            o,
            l = this.elem.globalData.fontManager,
            h = this.data,
            p = [],
            d = 0,
            c = h.m.g,
            f = 0,
            u = 0,
            m = 0,
            g = [],
            y = 0,
            v = 0,
            b = l.getFontByName(t.f),
            w = 0,
            S = b.fStyle ? b.fStyle.split(" ") : [],
            k = "normal",
            T = "normal";
          for (i = S.length, e = 0; e < i; e += 1)
            switch (S[e].toLowerCase()) {
              case "italic":
                T = "italic";
                break;
              case "bold":
                k = "700";
                break;
              case "black":
                k = "900";
                break;
              case "medium":
                k = "500";
                break;
              case "regular":
              case "normal":
                k = "400";
                break;
              case "light":
              case "thin":
                k = "200";
            }
          (t.fWeight = b.fWeight || k),
            (t.fStyle = T),
            (t.finalSize = t.s),
            (t.finalText = this.buildFinalText(t.t)),
            (i = t.finalText.length),
            (t.finalLineHeight = t.lh);
          var x,
            P = (t.tr / 1e3) * t.finalSize;
          if (t.sz)
            for (var A, C, _ = !0, E = t.sz[0], M = t.sz[1]; _; ) {
              for (
                var y = (A = 0),
                  i = (C = this.buildFinalText(t.t)).length,
                  P = (t.tr / 1e3) * t.finalSize,
                  $ = -1,
                  e = 0;
                e < i;
                e += 1
              )
                (x = C[e].charCodeAt(0)),
                  (s = !1),
                  " " === C[e]
                    ? ($ = e)
                    : (13 !== x && 3 !== x) ||
                      ((s = !(y = 0)),
                      (A += t.finalLineHeight || 1.2 * t.finalSize)),
                  E <
                    y +
                      (w = l.chars
                        ? ((o = l.getCharData(C[e], b.fStyle, b.fFamily)),
                          s ? 0 : (o.w * t.finalSize) / 100)
                        : l.measureText(C[e], t.f, t.finalSize)) && " " !== C[e]
                    ? (-1 === $ ? (i += 1) : (e = $),
                      (A += t.finalLineHeight || 1.2 * t.finalSize),
                      C.splice(e, $ === e ? 1 : 0, "\r"),
                      ($ = -1),
                      (y = 0))
                    : ((y += w), (y += P));
              (A += (b.ascent * t.finalSize) / 100),
                this.canResize && t.finalSize > this.minimumFontSize && M < A
                  ? (--t.finalSize,
                    (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                  : ((t.finalText = C), (i = t.finalText.length), (_ = !1));
            }
          y = -P;
          var D,
            I = (w = 0);
          for (e = 0; e < i; e += 1)
            if (
              ((s = !1),
              (x = (D = t.finalText[e]).charCodeAt(0)),
              " " === D
                ? (r = " ")
                : 13 === x || 3 === x
                ? ((I = 0),
                  g.push(y),
                  (v = v < y ? y : v),
                  (y = -2 * P),
                  (s = !(r = "")),
                  (m += 1))
                : (r = t.finalText[e]),
              (w = l.chars
                ? ((o = l.getCharData(
                    D,
                    b.fStyle,
                    l.getFontByName(t.f).fFamily
                  )),
                  s ? 0 : (o.w * t.finalSize) / 100)
                : l.measureText(r, t.f, t.finalSize)),
              " " === D ? (I += w + P) : ((y += w + P + I), (I = 0)),
              p.push({
                l: w,
                an: w,
                add: f,
                n: s,
                anIndexes: [],
                val: r,
                line: m,
                animatorJustifyOffset: 0,
              }),
              2 == c)
            ) {
              if (((f += w), "" === r || " " === r || e === i - 1)) {
                for (("" !== r && " " !== r) || (f -= w); u <= e; )
                  (p[u].an = f), (p[u].ind = d), (p[u].extra = w), (u += 1);
                (d += 1), (f = 0);
              }
            } else if (3 == c) {
              if (((f += w), "" === r || e === i - 1)) {
                for ("" === r && (f -= w); u <= e; )
                  (p[u].an = f), (p[u].ind = d), (p[u].extra = w), (u += 1);
                (f = 0), (d += 1);
              }
            } else (p[d].ind = d), (p[d].extra = 0), (d += 1);
          if (((t.l = p), (v = v < y ? y : v), g.push(y), t.sz))
            (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
          else
            switch (((t.boxWidth = v), t.j)) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
          t.lineWidths = g;
          for (
            var F, O, L = h.a, n = L.length, z, R, V = [], a = 0;
            a < n;
            a += 1
          ) {
            for (
              (F = L[a]).a.sc && (t.strokeColorAnim = !0),
                F.a.sw && (t.strokeWidthAnim = !0),
                (F.a.fc || F.a.fh || F.a.fs || F.a.fb) &&
                  (t.fillColorAnim = !0),
                z = F.s.b,
                e = R = 0;
              e < i;
              e += 1
            )
              ((O = p[e]).anIndexes[a] = R),
                ((1 == z && "" !== O.val) ||
                  (2 == z && "" !== O.val && " " !== O.val) ||
                  (3 == z && (O.n || " " == O.val || e == i - 1)) ||
                  (4 == z && (O.n || e == i - 1))) &&
                  (1 === F.s.rn && V.push(R), (R += 1));
            h.a[a].s.totalChars = R;
            var H,
              N = -1;
            if (1 === F.s.rn)
              for (e = 0; e < i; e += 1)
                N != (O = p[e]).anIndexes[a] &&
                  ((N = O.anIndexes[a]),
                  (H = V.splice(Math.floor(Math.random() * V.length), 1)[0])),
                  (O.anIndexes[a] = H);
          }
          (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
            (t.ls = t.ls || 0),
            (t.ascent = (b.ascent * t.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var i = this.copyData({}, this.data.d.k[e].s),
            i = this.copyData(i, t);
          (this.data.d.k[e].s = i),
            this.recalculate(e),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (t) {
          var t = this.data.d.k[t].s;
          (t.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(t);
        }),
        (TextProperty.prototype.canResizeFont = function (t) {
          (this.canResize = t),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (t) {
          (this.minimumFontSize = Math.floor(t) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp =
          ((wD = Math.max),
          (xD = Math.min),
          (yD = Math.floor),
          (zD.prototype = {
            getMult: function (t) {
              this._currentTextLength !==
                this.elem.textProperty.currentData.l.length && this.getValue();
              var e = BezierFactory.getBezierEasing(
                  this.ne.v / 100,
                  0,
                  1 - this.xe.v / 100,
                  1
                ).get,
                i = 0,
                s = this.finalS,
                r = this.finalE,
                a = this.data.sh,
                n,
                o,
                n,
                i;
              return (
                (i =
                  2 == a
                    ? e(
                        (i =
                          r === s
                            ? r <= t
                              ? 1
                              : 0
                            : wD(0, xD(0.5 / (r - s) + (t - s) / (r - s), 1)))
                      )
                    : 3 == a
                    ? e(
                        (i =
                          r === s
                            ? r <= t
                              ? 0
                              : 1
                            : 1 -
                              wD(0, xD(0.5 / (r - s) + (t - s) / (r - s), 1)))
                      )
                    : 4 == a
                    ? (r === s
                        ? (i = 0)
                        : (i = wD(
                            0,
                            xD(0.5 / (r - s) + (t - s) / (r - s), 1)
                          )) < 0.5
                        ? (i *= 2)
                        : (i = 1 - 2 * (i - 0.5)),
                      e(i))
                    : 5 == a
                    ? e(
                        (i =
                          r === s
                            ? 0
                            : ((o =
                                -(n = r - s) / 2 +
                                (t = xD(wD(0, t + 0.5 - s), r - s))),
                              (n = n / 2),
                              Math.sqrt(1 - (o * o) / (n * n))))
                      )
                    : 6 == a
                    ? e(
                        (i =
                          r === s
                            ? 0
                            : ((t = xD(wD(0, t + 0.5 - s), r - s)),
                              (1 +
                                Math.cos(
                                  Math.PI + (2 * Math.PI * t) / (r - s)
                                )) /
                                2))
                      )
                    : e(
                        (i =
                          t >= yD(s)
                            ? t - s < 0
                              ? 1 - (s - t)
                              : wD(0, xD(r - t, 1))
                            : i)
                      )) * this.a.v
              );
            },
            getValue: function (t) {
              this.iterateDynamicProperties(),
                (this._mdf = t || this._mdf),
                (this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0),
                t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                i = this.o.v / e,
                t = this.s.v / e + i,
                e = this.e.v / e + i,
                i,
                t,
                e;
              e < t && ((i = t), (t = e), (e = i)),
                (this.finalS = t),
                (this.finalE = e);
            },
          }),
          extendPrototype([DynamicPropertyContainer], zD),
          {
            getTextSelectorProp: function (t, e, i) {
              return new zD(t, e, i);
            },
          }),
        pool_factory = function (t, e, i, s) {
          var r = 0,
            a = t,
            n = createSizedArray(a);
          return {
            newElement: function () {
              return r ? n[--r] : e();
            },
            release: function (t) {
              r === a && ((n = pooling.double(n)), (a *= 2)),
                i && i(t),
                (n[r] = t),
                (r += 1);
            },
          };
        },
        pooling = {
          double: function (t) {
            return t.concat(createSizedArray(t.length));
          },
        },
        point_pool = pool_factory(8, function () {
          return createTypedArray("float32", 2);
        }),
        shape_pool =
          ((yA = pool_factory(
            4,
            function () {
              return new ShapePath();
            },
            function (t) {
              for (var e, i = t._length, e = 0; e < i; e += 1)
                point_pool.release(t.v[e]),
                  point_pool.release(t.i[e]),
                  point_pool.release(t.o[e]),
                  (t.v[e] = null),
                  (t.i[e] = null),
                  (t.o[e] = null);
              (t._length = 0), (t.c = !1);
            }
          )),
          (yA.clone = function (t) {
            var e,
              i = yA.newElement(),
              s = void 0 === t._length ? t.v.length : t._length;
            for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1)
              i.setTripleAt(
                t.v[e][0],
                t.v[e][1],
                t.o[e][0],
                t.o[e][1],
                t.i[e][0],
                t.i[e][1],
                e
              );
            return i;
          }),
          yA),
        yA,
        shapeCollection_pool =
          ((HA = {
            newShapeCollection: function () {
              return IA ? KA[--IA] : new ShapeCollection();
            },
            release: function (t) {
              for (var e, i = t._length, e = 0; e < i; e += 1)
                shape_pool.release(t.shapes[e]);
              (t._length = 0),
                IA === JA && ((KA = pooling.double(KA)), (JA *= 2)),
                (KA[IA] = t),
                (IA += 1);
            },
          }),
          (IA = 0),
          (JA = 4),
          (KA = createSizedArray(JA)),
          HA),
        HA,
        IA,
        JA,
        KA,
        segments_length_pool = pool_factory(
          8,
          function () {
            return { lengths: [], totalLength: 0 };
          },
          function (t) {
            for (var e, i = t.lengths.length, e = 0; e < i; e += 1)
              bezier_length_pool.release(t.lengths[e]);
            t.lengths.length = 0;
          }
        ),
        bezier_length_pool = pool_factory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments),
          };
        }),
        wD,
        xD,
        yD;
      function zD(t, e) {
        (this._currentTextLength = -1),
          (this.k = !1),
          (this.data = e),
          (this.elem = t),
          (this.comp = t.comp),
          (this.finalS = 0),
          (this.finalE = 0),
          this.initDynamicPropertyContainer(t),
          (this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this)),
          (this.e =
            "e" in e
              ? PropertyFactory.getProp(t, e.e, 0, 0, this)
              : { v: 100 }),
          (this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this)),
          (this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
          (this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
          (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
          this.dynamicProperties.length || this.getValue();
      }
      function BaseRenderer() {}
      function SVGRenderer(t, e) {
        (this.animationItem = t),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS("svg"));
        var i = "",
          t,
          s,
          s,
          r;
        e &&
          e.title &&
          ((t = createNS("title")),
          (s = createElementID()),
          t.setAttribute("id", s),
          (t.textContent = e.title),
          this.svgElement.appendChild(t),
          (i += s)),
          e &&
            e.description &&
            ((s = createNS("desc")),
            (r = createElementID()),
            s.setAttribute("id", r),
            (s.textContent = e.description),
            this.svgElement.appendChild(s),
            (i += " " + r)),
          i && this.svgElement.setAttribute("aria-labelledby", i);
        var r = createNS("defs");
        this.svgElement.appendChild(r);
        var i = createNS("g");
        this.svgElement.appendChild(i),
          (this.layerElement = i),
          (this.renderConfig = {
            preserveAspectRatio:
              (e && e.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
            progressiveLoad: (e && e.progressiveLoad) || !1,
            hideOnTransparent: !e || !1 !== e.hideOnTransparent,
            viewBoxOnly: (e && e.viewBoxOnly) || !1,
            viewBoxSize: (e && e.viewBoxSize) || !1,
            className: (e && e.className) || "",
          }),
          (this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: r,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = "svg");
      }
      function MaskElement(t, e, i) {
        (this.data = t),
          (this.element = e),
          (this.globalData = i),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var s,
          r = this.globalData.defs,
          a = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(a)), (this.solidPath = "");
        for (
          var n,
            o,
            l,
            h,
            p,
            d,
            c,
            f = this.masksProperties,
            u = 0,
            m = [],
            g = createElementID(),
            y = "clipPath",
            v = "clip-path",
            s = 0,
            b;
          s < a;
          s++
        )
          if (
            ((("a" !== f[s].mode && "n" !== f[s].mode) ||
              f[s].inv ||
              100 !== f[s].o.k ||
              f[s].o.x) &&
              (v = y = "mask"),
            ("s" != f[s].mode && "i" != f[s].mode) || 0 !== u
              ? (h = null)
              : ((h = createNS("rect")).setAttribute("fill", "#ffffff"),
                h.setAttribute("width", this.element.comp.data.w || 0),
                h.setAttribute("height", this.element.comp.data.h || 0),
                m.push(h)),
            (n = createNS("path")),
            "n" != f[s].mode)
          ) {
            if (
              ((u += 1),
              n.setAttribute("fill", "s" === f[s].mode ? "#000000" : "#ffffff"),
              n.setAttribute("clip-rule", "nonzero"),
              0 !== f[s].x.k
                ? ((v = y = "mask"),
                  (c = PropertyFactory.getProp(
                    this.element,
                    f[s].x,
                    0,
                    null,
                    this.element
                  )),
                  (b = createElementID()),
                  (p = createNS("filter")).setAttribute("id", b),
                  (d = createNS("feMorphology")).setAttribute(
                    "operator",
                    "erode"
                  ),
                  d.setAttribute("in", "SourceGraphic"),
                  d.setAttribute("radius", "0"),
                  p.appendChild(d),
                  r.appendChild(p),
                  n.setAttribute(
                    "stroke",
                    "s" === f[s].mode ? "#000000" : "#ffffff"
                  ))
                : (c = d = null),
              (this.storedData[s] = {
                elem: n,
                x: c,
                expan: d,
                lastPath: "",
                lastOperator: "",
                filterId: b,
                lastRadius: 0,
              }),
              "i" == f[s].mode)
            ) {
              for (var l = m.length, w = createNS("g"), o = 0; o < l; o += 1)
                w.appendChild(m[o]);
              var p = createNS("mask");
              p.setAttribute("mask-type", "alpha"),
                p.setAttribute("id", g + "_" + u),
                p.appendChild(n),
                r.appendChild(p),
                w.setAttribute(
                  "mask",
                  "url(" + locationHref + "#" + g + "_" + u + ")"
                ),
                (m.length = 0),
                m.push(w);
            } else m.push(n);
            f[s].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[s] = {
                elem: n,
                lastPath: "",
                op: PropertyFactory.getProp(
                  this.element,
                  f[s].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
                invRect: h,
              }),
              this.viewData[s].prop.k ||
                this.drawPath(f[s], this.viewData[s].prop.v, this.viewData[s]);
          } else
            (this.viewData[s] = {
              op: PropertyFactory.getProp(
                this.element,
                f[s].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
              elem: n,
              lastPath: "",
            }),
              r.appendChild(n);
        for (this.maskElement = createNS(y), a = m.length, s = 0; s < a; s += 1)
          this.maskElement.appendChild(m[s]);
        0 < u &&
          (this.maskElement.setAttribute("id", g),
          this.element.maskedElement.setAttribute(
            v,
            "url(" + locationHref + "#" + g + ")"
          ),
          r.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      function HierarchyElement() {}
      function FrameElement() {}
      function TransformElement() {}
      function RenderableElement() {}
      function RenderableDOMElement() {}
      function ProcessedElement(t, e) {
        (this.elem = t), (this.pos = e);
      }
      function SVGStyleData(t, e) {
        (this.data = t),
          (this.type = t.ty),
          (this.d = ""),
          (this.lvl = e),
          (this._mdf = !1),
          (this.closed = !0 === t.hd),
          (this.pElem = createNS("path")),
          (this.msElem = null);
      }
      function SVGShapeData(t, e, i) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = t),
          (this.lStr = ""),
          (this.sh = i),
          (this.lvl = e),
          (this._isAnimated = !!i.k);
        for (var s = 0, r = t.length; s < r; ) {
          if (t[s].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          s += 1;
        }
      }
      function SVGTransformData(t, e, i) {
        (this.transform = { mProps: t, op: e, container: i }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      function SVGStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = i),
          (this._isAnimated = !!this._isAnimated);
      }
      function SVGFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
          (this.style = i);
      }
      function SVGGradientFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(t, e, i);
      }
      function SVGGradientStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
          (this.d = new DashProperty(t, e.d || {}, "svg", this)),
          this.initGradientData(t, e, i),
          (this._isAnimated = !!this._isAnimated);
      }
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
      }
      (BaseRenderer.prototype.checkLayers = function (t) {
        var e,
          i,
          s = this.layers.length;
        for (this.completeLayers = !0, e = s - 1; 0 <= e; e--)
          this.elements[e] ||
            ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
              i.op - i.st > t - this.layers[e].st &&
              this.buildItem(e)),
            (this.completeLayers = !!this.elements[e] && this.completeLayers);
        this.checkPendingElements();
      }),
        (BaseRenderer.prototype.createItem = function (t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 13:
              return this.createCamera(t);
          }
          return this.createNull(t);
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          for (var t, e = this.layers.length, t = 0; t < e; t += 1)
            this.buildItem(t);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (t) {
          this.completeLayers = !1;
          for (
            var e, i, s = t.length, r = this.layers.length, e = 0;
            e < s;
            e += 1
          )
            for (i = 0; i < r; ) {
              if (this.layers[i].id == t[e].id) {
                this.layers[i] = t[e];
                break;
              }
              i += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (t) {
          this.globalData.projectInterface = t;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
          for (
            var s = this.elements, r = this.layers, a = 0, n = r.length;
            a < n;

          )
            r[a].ind == e &&
              (s[a] && !0 !== s[a]
                ? (i.push(s[a]),
                  s[a].setAsParent(),
                  void 0 !== r[a].parent
                    ? this.buildElementParenting(t, r[a].parent, i)
                    : t.setHierarchy(i))
                : (this.buildItem(a), this.addPendingElement(t))),
              (a += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (t) {
          this.pendingElements.push(t);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (t) {
          for (var e, i = t.length, e = 0, s; e < i; e += 1) {
            t[e].xt &&
              ((s = this.createComp(t[e])).initExpressions(),
              this.globalData.projectInterface.registerComposition(s));
          }
        }),
        (BaseRenderer.prototype.setupGlobalData = function (t, e) {
          (this.globalData.fontManager = new FontManager()),
            this.globalData.fontManager.addChars(t.chars),
            this.globalData.fontManager.addFonts(t.fonts, e),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = t.fr),
            (this.globalData.nm = t.nm),
            (this.globalData.compSize = { w: t.w, h: t.h });
        }),
        extendPrototype([BaseRenderer], SVGRenderer),
        (SVGRenderer.prototype.createNull = function (t) {
          return new NullElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createShape = function (t) {
          return new SVGShapeElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createText = function (t) {
          return new SVGTextElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createImage = function (t) {
          return new IImageElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.createSolid = function (t) {
          return new ISolidElement(t, this.globalData, this);
        }),
        (SVGRenderer.prototype.configAnimation = function (t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  "viewBox",
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  "viewBox",
                  "0 0 " + t.w + " " + t.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute("width", t.w),
              this.svgElement.setAttribute("height", t.h),
              (this.svgElement.style.width = "100%"),
              (this.svgElement.style.height = "100%"),
              (this.svgElement.style.transform = "translate3d(0,0,0)")),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                "class",
                this.renderConfig.className
              ),
            this.svgElement.setAttribute(
              "preserveAspectRatio",
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = t);
          var i = createNS("clipPath"),
            s = createNS("rect");
          s.setAttribute("width", t.w),
            s.setAttribute("height", t.h),
            s.setAttribute("x", 0),
            s.setAttribute("y", 0);
          var r = createElementID();
          i.setAttribute("id", r),
            i.appendChild(s),
            this.layerElement.setAttribute(
              "clip-path",
              "url(" + locationHref + "#" + r + ")"
            ),
            e.appendChild(i),
            (this.layers = t.layers),
            (this.elements = createSizedArray(t.layers.length));
        }),
        (SVGRenderer.prototype.destroy = function () {
          (this.animationItem.wrapper.innerHTML = ""),
            (this.layerElement = null),
            (this.globalData.defs = null);
          for (
            var t, e = this.layers ? this.layers.length : 0, t = 0;
            t < e;
            t++
          )
            this.elements[t] && this.elements[t].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRenderer.prototype.updateContainerSize = function () {}),
        (SVGRenderer.prototype.buildItem = function (t) {
          var e = this.elements,
            i;
          e[t] ||
            99 == this.layers[t].ty ||
            ((e[t] = !0),
            (i = this.createItem(this.layers[t])),
            (e[t] = i),
            expressionsPlugin &&
              (0 === this.layers[t].ty &&
                this.globalData.projectInterface.registerComposition(i),
              i.initExpressions()),
            this.appendElementInPos(i, t),
            this.layers[t].tt &&
              (this.elements[t - 1] && !0 !== this.elements[t - 1]
                ? i.setMatte(e[t - 1].layerId)
                : (this.buildItem(t - 1), this.addPendingElement(i))));
        }),
        (SVGRenderer.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if ((t.checkParenting(), t.data.tt))
              for (var e = 0, i = this.elements.length; e < i; ) {
                if (this.elements[e] === t) {
                  t.setMatte(this.elements[e - 1].layerId);
                  break;
                }
                e += 1;
              }
          }
        }),
        (SVGRenderer.prototype.renderFrame = function (t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
              (this.globalData.frameNum = t),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = t),
              (this.globalData._mdf = !1);
            var e,
              i = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(t), e = i - 1;
              0 <= e;
              e--
            )
              (this.completeLayers || this.elements[e]) &&
                this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < i; e += 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].renderFrame();
          }
        }),
        (SVGRenderer.prototype.appendElementInPos = function (t, e) {
          var t = t.getBaseElement();
          if (t) {
            for (var i, s = 0; s < e; )
              this.elements[s] &&
                !0 !== this.elements[s] &&
                this.elements[s].getBaseElement() &&
                (i = this.elements[s].getBaseElement()),
                (s += 1);
            i
              ? this.layerElement.insertBefore(t, i)
              : this.layerElement.appendChild(t);
          }
        }),
        (SVGRenderer.prototype.hide = function () {
          this.layerElement.style.display = "none";
        }),
        (SVGRenderer.prototype.show = function () {
          this.layerElement.style.display = "block";
        }),
        (MaskElement.prototype.getMaskProperty = function (t) {
          return this.viewData[t].prop;
        }),
        (MaskElement.prototype.renderFrame = function (t) {
          for (
            var e,
              i = this.element.finalTransform.mat,
              s = this.masksProperties.length,
              e = 0,
              r;
            e < s;
            e++
          ) {
            (this.viewData[e].prop._mdf || t) &&
              this.drawPath(
                this.masksProperties[e],
                this.viewData[e].prop.v,
                this.viewData[e]
              ),
              (this.viewData[e].op._mdf || t) &&
                this.viewData[e].elem.setAttribute(
                  "fill-opacity",
                  this.viewData[e].op.v
                ),
              "n" !== this.masksProperties[e].mode &&
                (this.viewData[e].invRect &&
                  (this.element.finalTransform.mProp._mdf || t) &&
                  (this.viewData[e].invRect.setAttribute("x", -i.props[12]),
                  this.viewData[e].invRect.setAttribute("y", -i.props[13])),
                this.storedData[e].x && (this.storedData[e].x._mdf || t)) &&
                ((r = this.storedData[e].expan),
                this.storedData[e].x.v < 0
                  ? ("erode" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "erode"),
                      this.storedData[e].elem.setAttribute(
                        "filter",
                        "url(" +
                          locationHref +
                          "#" +
                          this.storedData[e].filterId +
                          ")"
                      )),
                    r.setAttribute("radius", -this.storedData[e].x.v))
                  : ("dilate" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "dilate"),
                      this.storedData[e].elem.setAttribute("filter", null)),
                    this.storedData[e].elem.setAttribute(
                      "stroke-width",
                      2 * this.storedData[e].x.v
                    )));
          }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var t = "M0,0 ";
          return (
            (t += " h" + this.globalData.compSize.w),
            (t += " v" + this.globalData.compSize.h),
            (t += " h-" + this.globalData.compSize.w) +
              " v-" +
              this.globalData.compSize.h +
              " "
          );
        }),
        (MaskElement.prototype.drawPath = function (t, e, i) {
          for (
            var s,
              r,
              a = " M" + e.v[0][0] + "," + e.v[0][1],
              r = e._length,
              s = 1,
              n;
            s < r;
            s += 1
          )
            a +=
              " C" +
              e.o[s - 1][0] +
              "," +
              e.o[s - 1][1] +
              " " +
              e.i[s][0] +
              "," +
              e.i[s][1] +
              " " +
              e.v[s][0] +
              "," +
              e.v[s][1];
          e.c &&
            1 < r &&
            (a +=
              " C" +
              e.o[s - 1][0] +
              "," +
              e.o[s - 1][1] +
              " " +
              e.i[0][0] +
              "," +
              e.i[0][1] +
              " " +
              e.v[0][0] +
              "," +
              e.v[0][1]),
            i.lastPath !== a &&
              ((n = ""),
              i.elem &&
                (e.c && (n = t.inv ? this.solidPath + a : a),
                i.elem.setAttribute("d", n)),
              (i.lastPath = a));
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        }),
        (HierarchyElement.prototype = {
          initHierarchy: function () {
            (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
          },
          setHierarchy: function (t) {
            this.hierarchy = t;
          },
          setAsParent: function () {
            this._isParent = !0;
          },
          checkParenting: function () {
            void 0 !== this.data.parent &&
              this.comp.buildElementParenting(this, this.data.parent, []);
          },
        }),
        (FrameElement.prototype = {
          initFrame: function () {
            (this._isFirstFrame = !1),
              (this.dynamicProperties = []),
              (this._mdf = !1);
          },
          prepareProperties: function (t, e) {
            for (var i, s = this.dynamicProperties.length, i = 0; i < s; i += 1)
              (e ||
                (this._isParent &&
                  "transform" === this.dynamicProperties[i].propType)) &&
                (this.dynamicProperties[i].getValue(),
                this.dynamicProperties[i]._mdf &&
                  ((this.globalData._mdf = !0), (this._mdf = !0)));
          },
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              this.dynamicProperties.push(t);
          },
        }),
        (TransformElement.prototype = {
          initTransform: function () {
            (this.finalTransform = {
              mProp: this.data.ks
                ? TransformPropertyFactory.getTransformProperty(
                    this,
                    this.data.ks,
                    this
                  )
                : { o: 0 },
              _matMdf: !1,
              _opMdf: !1,
              mat: new Matrix(),
            }),
              this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
              this.data.ty;
          },
          renderTransform: function () {
            if (
              ((this.finalTransform._opMdf =
                this.finalTransform.mProp.o._mdf || this._isFirstFrame),
              (this.finalTransform._matMdf =
                this.finalTransform.mProp._mdf || this._isFirstFrame),
              this.hierarchy)
            ) {
              var t,
                e = this.finalTransform.mat,
                i = 0,
                s = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; i < s; ) {
                  if (this.hierarchy[i].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break;
                  }
                  i += 1;
                }
              if (this.finalTransform._matMdf)
                for (
                  t = this.finalTransform.mProp.v.props,
                    e.cloneFromProps(t),
                    i = 0;
                  i < s;
                  i += 1
                )
                  (t = this.hierarchy[i].finalTransform.mProp.v.props),
                    e.transform(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5],
                      t[6],
                      t[7],
                      t[8],
                      t[9],
                      t[10],
                      t[11],
                      t[12],
                      t[13],
                      t[14],
                      t[15]
                    );
            }
          },
          globalToLocal: function (t) {
            var e = [];
            e.push(this.finalTransform);
            for (var i = !0, s = this.comp; i; )
              s.finalTransform
                ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                  (s = s.comp))
                : (i = !1);
            for (var r, a, n = e.length, r = 0; r < n; r += 1)
              (a = e[r].mat.applyToPointArray(0, 0, 0)),
                (t = [t[0] - a[0], t[1] - a[1], 0]);
            return t;
          },
          mHelper: new Matrix(),
        }),
        (RenderableElement.prototype = {
          initRenderable: function () {
            (this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []);
          },
          addRenderableComponent: function (t) {
            -1 === this.renderableComponents.indexOf(t) &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            -1 !== this.renderableComponents.indexOf(t) &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? !0 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : !1 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            for (
              var t, e = this.renderableComponents.length, t = 0;
              t < e;
              t += 1
            )
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return 5 === this.data.ty
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        }),
        extendPrototype(
          [
            RenderableElement,
            createProxyFunction({
              initElement: function (t, e, i) {
                this.initFrame(),
                  this.initBaseData(t, e, i),
                  this.initTransform(t, e, i),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide();
              },
              hide: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (((this.baseElement || this.layerElement).style.display =
                    "none"),
                  (this.hidden = !0));
              },
              show: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  (this.data.hd ||
                    ((this.baseElement || this.layerElement).style.display =
                      "block"),
                  (this.hidden = !1),
                  (this._isFirstFrame = !0));
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              renderInnerContent: function () {},
              prepareFrame: function (t) {
                (this._mdf = !1),
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.checkTransparency();
              },
              destroy: function () {
                (this.innerElem = null), this.destroyBaseElement();
              },
            }),
          ],
          RenderableDOMElement
        ),
        (SVGStyleData.prototype.reset = function () {
          (this.d = ""), (this._mdf = !1);
        }),
        (SVGShapeData.prototype.setAsAnimated = function () {
          this._isAnimated = !0;
        }),
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
        (SVGGradientFillStyleData.prototype.initGradientData = function (
          t,
          e,
          i
        ) {
          (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
            (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
            (this.h = PropertyFactory.getProp(
              t,
              e.h || { k: 0 },
              0,
              0.01,
              this
            )),
            (this.a = PropertyFactory.getProp(
              t,
              e.a || { k: 0 },
              0,
              degToRads,
              this
            )),
            (this.g = new GradientProperty(t, e.g, this)),
            (this.style = i),
            (this.stops = []),
            this.setGradientData(i.pElem, e),
            this.setGradientOpacity(e, i),
            (this._isAnimated = !!this._isAnimated);
        }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
          var i = createElementID(),
            s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          s.setAttribute("id", i),
            s.setAttribute("spreadMethod", "pad"),
            s.setAttribute("gradientUnits", "userSpaceOnUse");
          for (var r, a, n, o = [], n = 4 * e.g.p, a = 0; a < n; a += 4)
            (r = createNS("stop")), s.appendChild(r), o.push(r);
          t.setAttribute(
            "gf" === e.ty ? "fill" : "stroke",
            "url(" + locationHref + "#" + i + ")"
          ),
            (this.gf = s),
            (this.cst = o);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          t,
          e
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var i,
              s,
              r,
              a = createNS("mask"),
              n = createNS("path");
            a.appendChild(n);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o),
              h.setAttribute("spreadMethod", "pad"),
              h.setAttribute("gradientUnits", "userSpaceOnUse");
            for (
              var r = (t.g.k.k[0].s || t.g.k.k).length,
                p = this.stops,
                s = 4 * t.g.p;
              s < r;
              s += 2
            )
              (i = createNS("stop")).setAttribute(
                "stop-color",
                "rgb(255,255,255)"
              ),
                h.appendChild(i),
                p.push(i);
            n.setAttribute(
              "gf" === t.ty ? "fill" : "stroke",
              "url(" + locationHref + "#" + o + ")"
            ),
              (this.of = h),
              (this.ms = a),
              (this.ost = p),
              (this.maskId = l),
              (e.msElem = n);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
        extendPrototype(
          [SVGGradientFillStyleData, DynamicPropertyContainer],
          SVGGradientStrokeStyleData
        );
      var SVGElementsRenderer =
          ((yH = new Matrix()),
          (zH = new Matrix()),
          {
            createRenderFunction: function (t) {
              switch ((t.ty, t.ty)) {
                case "fl":
                  return CH;
                case "gf":
                  return EH;
                case "gs":
                  return DH;
                case "st":
                  return FH;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return BH;
                case "tr":
                  return AH;
              }
            },
          }),
        yH,
        zH;
      function AH(t, e, i) {
        (i || e.transform.op._mdf) &&
          e.transform.container.setAttribute("opacity", e.transform.op.v),
          (i || e.transform.mProps._mdf) &&
            e.transform.container.setAttribute(
              "transform",
              e.transform.mProps.v.to2dCSS()
            );
      }
      function BH(t, e, i) {
        for (
          var s,
            r,
            a,
            n,
            o,
            l,
            h,
            p,
            d,
            c,
            f,
            u = e.styles.length,
            m = e.lvl,
            l = 0;
          l < u;
          l += 1
        ) {
          if (((n = e.sh._mdf || i), e.styles[l].lvl < m)) {
            for (
              p = zH.reset(),
                c = m - e.styles[l].lvl,
                f = e.transformers.length - 1;
              !n && 0 < c;

            )
              (n = e.transformers[f].mProps._mdf || n), c--, f--;
            if (n)
              for (
                c = m - e.styles[l].lvl, f = e.transformers.length - 1;
                0 < c;

              )
                (d = e.transformers[f].mProps.v.props),
                  p.transform(
                    d[0],
                    d[1],
                    d[2],
                    d[3],
                    d[4],
                    d[5],
                    d[6],
                    d[7],
                    d[8],
                    d[9],
                    d[10],
                    d[11],
                    d[12],
                    d[13],
                    d[14],
                    d[15]
                  ),
                  c--,
                  f--;
          } else p = yH;
          if (((r = (h = e.sh.paths)._length), n)) {
            for (a = "", s = 0; s < r; s += 1)
              (o = h.shapes[s]) &&
                o._length &&
                (a += buildShapeString(o, o._length, o.c, p));
            e.caches[l] = a;
          } else a = e.caches[l];
          (e.styles[l].d += !0 === t.hd ? "" : a),
            (e.styles[l]._mdf = n || e.styles[l]._mdf);
        }
      }
      function CH(t, e, i) {
        var s = e.style;
        (e.c._mdf || i) &&
          s.pElem.setAttribute(
            "fill",
            "rgb(" +
              bm_floor(e.c.v[0]) +
              "," +
              bm_floor(e.c.v[1]) +
              "," +
              bm_floor(e.c.v[2]) +
              ")"
          ),
          (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v);
      }
      function DH(t, e, i) {
        EH(t, e, i), FH(t, e, i);
      }
      function EH(t, e, i) {
        var s,
          r,
          a,
          n,
          o,
          l = e.gf,
          h = e.g._hasOpacity,
          p = e.s.v,
          d = e.e.v,
          c,
          f,
          c,
          o,
          i,
          d,
          o,
          p;
        if (
          ((e.o._mdf || i) &&
            ((c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity"),
            e.style.pElem.setAttribute(c, e.o.v)),
          (e.s._mdf || i) &&
            ((c = "x1" == (f = 1 === t.t ? "x1" : "cx") ? "y1" : "cy"),
            l.setAttribute(f, p[0]),
            l.setAttribute(c, p[1]),
            h &&
              !e.g._collapsable &&
              (e.of.setAttribute(f, p[0]), e.of.setAttribute(c, p[1]))),
          e.g._cmdf || i)
        )
          for (var s = e.cst, u = e.g.c, a = s.length, r = 0; r < a; r += 1)
            (n = s[r]).setAttribute("offset", u[4 * r] + "%"),
              n.setAttribute(
                "stop-color",
                "rgb(" +
                  u[4 * r + 1] +
                  "," +
                  u[4 * r + 2] +
                  "," +
                  u[4 * r + 3] +
                  ")"
              );
        if (h && (e.g._omdf || i)) {
          var m = e.g.o;
          for (
            a = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0;
            r < a;
            r += 1
          )
            (n = s[r]),
              e.g._collapsable || n.setAttribute("offset", m[2 * r] + "%"),
              n.setAttribute("stop-opacity", m[2 * r + 1]);
        }
        1 === t.t
          ? (e.e._mdf || i) &&
            (l.setAttribute("x2", d[0]),
            l.setAttribute("y2", d[1]),
            h &&
              !e.g._collapsable &&
              (e.of.setAttribute("x2", d[0]), e.of.setAttribute("y2", d[1])))
          : ((e.s._mdf || e.e._mdf || i) &&
              ((o = Math.sqrt(
                Math.pow(p[0] - d[0], 2) + Math.pow(p[1] - d[1], 2)
              )),
              l.setAttribute("r", o),
              h && !e.g._collapsable && e.of.setAttribute("r", o)),
            (e.e._mdf || e.h._mdf || e.a._mdf || i) &&
              ((o =
                o ||
                Math.sqrt(Math.pow(p[0] - d[0], 2) + Math.pow(p[1] - d[1], 2))),
              (i = Math.atan2(d[1] - p[1], d[0] - p[0])),
              (d = o * (1 <= e.h.v ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v)),
              (o = Math.cos(i + e.a.v) * d + p[0]),
              (p = Math.sin(i + e.a.v) * d + p[1]),
              l.setAttribute("fx", o),
              l.setAttribute("fy", p),
              h &&
                !e.g._collapsable &&
                (e.of.setAttribute("fx", o), e.of.setAttribute("fy", p))));
      }
      function FH(t, e, i) {
        var s = e.style,
          r = e.d;
        r &&
          (r._mdf || i) &&
          r.dashStr &&
          (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
          s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
          e.c &&
            (e.c._mdf || i) &&
            s.pElem.setAttribute(
              "stroke",
              "rgb(" +
                bm_floor(e.c.v[0]) +
                "," +
                bm_floor(e.c.v[1]) +
                "," +
                bm_floor(e.c.v[2]) +
                ")"
            ),
          (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v),
          (e.w._mdf || i) &&
            (s.pElem.setAttribute("stroke-width", e.w.v),
            s.msElem && s.msElem.setAttribute("stroke-width", e.w.v));
      }
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      function BaseElement() {}
      function NullElement(t, e, i) {
        this.initFrame(),
          this.initBaseData(t, e, i),
          this.initFrame(),
          this.initTransform(t, e, i),
          this.initHierarchy();
      }
      function SVGBaseElement() {}
      function IShapeElement() {}
      function ITextElement() {}
      function ICompElement() {}
      function IImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)),
          this.initElement(t, e, i),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
      function ISolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function SVGCompElement(t, e, i) {
        (this.layers = t.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(t, e, i),
          (this.tm = t.tm
            ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
            : { _placeholder: !0 });
      }
      function SVGTextElement(t, e, i) {
        (this.textSpans = []),
          (this.renderType = "svg"),
          this.initElement(t, e, i);
      }
      function SVGShapeElement(t, e, i) {
        (this.shapes = []),
          (this.shapesData = t.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(t, e, i),
          (this.prevViewData = []);
      }
      function SVGTintFilter(t, e) {
        this.filterManager = e;
        var i = createNS("feColorMatrix"),
          t,
          e;
        i.setAttribute("type", "matrix"),
          i.setAttribute("color-interpolation-filters", "linearRGB"),
          i.setAttribute(
            "values",
            "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
          ),
          i.setAttribute("result", "f1"),
          t.appendChild(i),
          (i = createNS("feColorMatrix")).setAttribute("type", "matrix"),
          i.setAttribute("color-interpolation-filters", "sRGB"),
          i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          i.setAttribute("result", "f2"),
          t.appendChild(i),
          (this.matrixFilter = i),
          (100 === e.effectElements[2].p.v && !e.effectElements[2].p.k) ||
            ((e = createNS("feMerge")),
            t.appendChild(e),
            (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
            e.appendChild(t),
            (t = createNS("feMergeNode")).setAttribute("in", "f2"),
            e.appendChild(t));
      }
      function SVGFillFilter(t, e) {
        this.filterManager = e;
        var e = createNS("feColorMatrix");
        e.setAttribute("type", "matrix"),
          e.setAttribute("color-interpolation-filters", "sRGB"),
          e.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          t.appendChild(e),
          (this.matrixFilter = e);
      }
      function SVGGaussianBlurEffect(t, e) {
        t.setAttribute("x", "-100%"),
          t.setAttribute("y", "-100%"),
          t.setAttribute("width", "300%"),
          t.setAttribute("height", "300%"),
          (this.filterManager = e);
        var e = createNS("feGaussianBlur");
        t.appendChild(e), (this.feGaussianBlur = e);
      }
      function SVGStrokeEffect(t, e) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.elem = t),
          (this.paths = []);
      }
      function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var e = createNS("feColorMatrix");
        e.setAttribute("type", "matrix"),
          e.setAttribute("color-interpolation-filters", "linearRGB"),
          e.setAttribute(
            "values",
            "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
          ),
          e.setAttribute("result", "f1"),
          t.appendChild(e);
        var e = createNS("feComponentTransfer");
        e.setAttribute("color-interpolation-filters", "sRGB"),
          t.appendChild(e),
          (this.matrixFilter = e);
        var t = createNS("feFuncR");
        t.setAttribute("type", "table"), e.appendChild(t), (this.feFuncR = t);
        var t = createNS("feFuncG");
        t.setAttribute("type", "table"), e.appendChild(t), (this.feFuncG = t);
        var t = createNS("feFuncB");
        t.setAttribute("type", "table"), e.appendChild(t), (this.feFuncB = t);
      }
      function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var i = this.filterManager.effectElements,
          e = createNS("feComponentTransfer");
        (i[10].p.k ||
          0 !== i[10].p.v ||
          i[11].p.k ||
          1 !== i[11].p.v ||
          i[12].p.k ||
          1 !== i[12].p.v ||
          i[13].p.k ||
          0 !== i[13].p.v ||
          i[14].p.k ||
          1 !== i[14].p.v) &&
          (this.feFuncR = this.createFeFunc("feFuncR", e)),
          (i[17].p.k ||
            0 !== i[17].p.v ||
            i[18].p.k ||
            1 !== i[18].p.v ||
            i[19].p.k ||
            1 !== i[19].p.v ||
            i[20].p.k ||
            0 !== i[20].p.v ||
            i[21].p.k ||
            1 !== i[21].p.v) &&
            (this.feFuncG = this.createFeFunc("feFuncG", e)),
          (i[24].p.k ||
            0 !== i[24].p.v ||
            i[25].p.k ||
            1 !== i[25].p.v ||
            i[26].p.k ||
            1 !== i[26].p.v ||
            i[27].p.k ||
            0 !== i[27].p.v ||
            i[28].p.k ||
            1 !== i[28].p.v) &&
            (this.feFuncB = this.createFeFunc("feFuncB", e)),
          (i[31].p.k ||
            0 !== i[31].p.v ||
            i[32].p.k ||
            1 !== i[32].p.v ||
            i[33].p.k ||
            1 !== i[33].p.v ||
            i[34].p.k ||
            0 !== i[34].p.v ||
            i[35].p.k ||
            1 !== i[35].p.v) &&
            (this.feFuncA = this.createFeFunc("feFuncA", e)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (e.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(e),
            (e = createNS("feComponentTransfer"))),
          (i[3].p.k ||
            0 !== i[3].p.v ||
            i[4].p.k ||
            1 !== i[4].p.v ||
            i[5].p.k ||
            1 !== i[5].p.v ||
            i[6].p.k ||
            0 !== i[6].p.v ||
            i[7].p.k ||
            1 !== i[7].p.v) &&
            (e.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(e),
            (this.feFuncRComposed = this.createFeFunc("feFuncR", e)),
            (this.feFuncGComposed = this.createFeFunc("feFuncG", e)),
            (this.feFuncBComposed = this.createFeFunc("feFuncB", e)));
      }
      function SVGDropShadowEffect(t, e) {
        t.setAttribute("x", "-100%"),
          t.setAttribute("y", "-100%"),
          t.setAttribute("width", "400%"),
          t.setAttribute("height", "400%"),
          (this.filterManager = e);
        var e = createNS("feGaussianBlur");
        e.setAttribute("in", "SourceAlpha"),
          e.setAttribute("result", "drop_shadow_1"),
          e.setAttribute("stdDeviation", "0"),
          (this.feGaussianBlur = e),
          t.appendChild(e);
        var e = createNS("feOffset");
        e.setAttribute("dx", "25"),
          e.setAttribute("dy", "0"),
          e.setAttribute("in", "drop_shadow_1"),
          e.setAttribute("result", "drop_shadow_2"),
          (this.feOffset = e),
          t.appendChild(e);
        var e = createNS("feFlood");
        e.setAttribute("flood-color", "#00ff00"),
          e.setAttribute("flood-opacity", "1"),
          e.setAttribute("result", "drop_shadow_3"),
          (this.feFlood = e),
          t.appendChild(e);
        var e = createNS("feComposite");
        e.setAttribute("in", "drop_shadow_3"),
          e.setAttribute("in2", "drop_shadow_2"),
          e.setAttribute("operator", "in"),
          e.setAttribute("result", "drop_shadow_4"),
          t.appendChild(e);
        var t,
          e = createNS("feMerge");
        t.appendChild(e),
          (t = createNS("feMergeNode")),
          e.appendChild(t),
          (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
          (this.feMergeNode = t),
          (this.feMerge = e),
          (this.originalNodeAdded = !1),
          e.appendChild(t);
      }
      (ShapeTransformManager.prototype = {
        addTransformSequence: function (t) {
          for (var e, i = t.length, s = "_", e = 0; e < i; e += 1)
            s += t[e].transform.key + "_";
          var r = this.sequences[s];
          return (
            r ||
              ((r = {
                transforms: [].concat(t),
                finalTransform: new Matrix(),
                _mdf: !1,
              }),
              (this.sequences[s] = r),
              this.sequenceList.push(r)),
            r
          );
        },
        processSequence: function (t, e) {
          for (var i, s = 0, r = t.transforms.length, a = e; s < r && !e; ) {
            if (t.transforms[s].transform.mProps._mdf) {
              a = !0;
              break;
            }
            s += 1;
          }
          if (a)
            for (t.finalTransform.reset(), s = r - 1; 0 <= s; --s)
              (i = t.transforms[s].transform.mProps.v.props),
                t.finalTransform.transform(
                  i[0],
                  i[1],
                  i[2],
                  i[3],
                  i[4],
                  i[5],
                  i[6],
                  i[7],
                  i[8],
                  i[9],
                  i[10],
                  i[11],
                  i[12],
                  i[13],
                  i[14],
                  i[15]
                );
          t._mdf = a;
        },
        processSequences: function (t) {
          for (var e, i = this.sequenceList.length, e = 0; e < i; e += 1)
            this.processSequence(this.sequenceList[e], t);
        },
        getNewKey: function () {
          return "_" + this.transform_key_count++;
        },
      }),
        (BaseElement.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
              if (
                "n" !== this.data.masksProperties[t].mode &&
                !1 !== this.data.masksProperties[t].cl
              )
                return !0;
              t += 1;
            }
            return !1;
          },
          initExpressions: function () {
            (this.layerInterface = LayerExpressionInterface(this)),
              this.data.hasMask &&
                this.maskManager &&
                this.layerInterface.registerMaskInterface(this.maskManager);
            var t = EffectsExpressionInterface.createEffectsInterface(
              this,
              this.layerInterface
            );
            this.layerInterface.registerEffectsInterface(t),
              0 === this.data.ty || this.data.xt
                ? (this.compInterface = CompExpressionInterface(this))
                : 4 === this.data.ty
                ? ((this.layerInterface.shapeInterface =
                    ShapeExpressionInterface(
                      this.shapesData,
                      this.itemsData,
                      this.layerInterface
                    )),
                  (this.layerInterface.content =
                    this.layerInterface.shapeInterface))
                : 5 === this.data.ty &&
                  ((this.layerInterface.textInterface =
                    TextExpressionInterface(this)),
                  (this.layerInterface.text =
                    this.layerInterface.textInterface));
          },
          setBlendMode: function () {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
          },
          initBaseData: function (t, e, i) {
            (this.globalData = e),
              (this.comp = i),
              (this.data = t),
              (this.layerId = createElementID()),
              this.data.sr || (this.data.sr = 1),
              (this.effectsManager = new EffectsManager(
                this.data,
                this,
                this.dynamicProperties
              ));
          },
          getType: function () {
            return this.type;
          },
          sourceRectAtTime: function () {},
        }),
        (NullElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0);
        }),
        (NullElement.prototype.renderFrame = function () {}),
        (NullElement.prototype.getBaseElement = function () {
          return null;
        }),
        (NullElement.prototype.destroy = function () {}),
        (NullElement.prototype.sourceRectAtTime = function () {}),
        (NullElement.prototype.hide = function () {}),
        extendPrototype(
          [BaseElement, TransformElement, HierarchyElement, FrameElement],
          NullElement
        ),
        (SVGBaseElement.prototype = {
          initRendererElement: function () {
            this.layerElement = createNS("g");
          },
          createContainerElements: function () {
            (this.matteElement = createNS("g")),
              (this.transformedElement = this.layerElement),
              (this.maskedElement = this.layerElement),
              (this._sizeChanged = !1);
            var t,
              e,
              i,
              s = null,
              r,
              a,
              n,
              t,
              e,
              o,
              r,
              r,
              n,
              i,
              a,
              n;
            this.data.td
              ? 3 == this.data.td || 1 == this.data.td
                ? ((r = createNS("mask")).setAttribute("id", this.layerId),
                  r.setAttribute(
                    "mask-type",
                    3 == this.data.td ? "luminance" : "alpha"
                  ),
                  r.appendChild(this.layerElement),
                  this.globalData.defs.appendChild((s = r)),
                  featureSupport.maskType ||
                    1 != this.data.td ||
                    (r.setAttribute("mask-type", "luminance"),
                    (t = createElementID()),
                    (e = filtersFactory.createFilter(t)),
                    this.globalData.defs.appendChild(e),
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (i = createNS("g")).appendChild(this.layerElement),
                    r.appendChild((s = i)),
                    i.setAttribute(
                      "filter",
                      "url(" + locationHref + "#" + t + ")"
                    )))
                : 2 == this.data.td &&
                  ((a = createNS("mask")).setAttribute("id", this.layerId),
                  a.setAttribute("mask-type", "alpha"),
                  (n = createNS("g")),
                  a.appendChild(n),
                  (t = createElementID()),
                  (e = filtersFactory.createFilter(t)),
                  (o = createNS("feComponentTransfer")).setAttribute(
                    "in",
                    "SourceGraphic"
                  ),
                  e.appendChild(o),
                  (r = createNS("feFuncA")).setAttribute("type", "table"),
                  r.setAttribute("tableValues", "1.0 0.0"),
                  o.appendChild(r),
                  this.globalData.defs.appendChild(e),
                  (r = createNS("rect")).setAttribute(
                    "width",
                    this.comp.data.w
                  ),
                  r.setAttribute("height", this.comp.data.h),
                  r.setAttribute("x", "0"),
                  r.setAttribute("y", "0"),
                  r.setAttribute("fill", "#ffffff"),
                  r.setAttribute("opacity", "0"),
                  n.setAttribute(
                    "filter",
                    "url(" + locationHref + "#" + t + ")"
                  ),
                  n.appendChild(r),
                  n.appendChild(this.layerElement),
                  (s = n),
                  featureSupport.maskType ||
                    (a.setAttribute("mask-type", "luminance"),
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    ),
                    (i = createNS("g")),
                    n.appendChild(r),
                    i.appendChild(this.layerElement),
                    n.appendChild((s = i))),
                  this.globalData.defs.appendChild(a))
              : this.data.tt
              ? (this.matteElement.appendChild(this.layerElement),
                (s = this.matteElement),
                (this.baseElement = this.matteElement))
              : (this.baseElement = this.layerElement),
              this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln),
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl),
              0 !== this.data.ty ||
                this.data.hd ||
                ((n = createNS("clipPath")),
                (i = createNS("path")).setAttribute(
                  "d",
                  "M0,0 L" +
                    this.data.w +
                    ",0 L" +
                    this.data.w +
                    "," +
                    this.data.h +
                    " L0," +
                    this.data.h +
                    "z"
                ),
                (a = createElementID()),
                n.setAttribute("id", a),
                n.appendChild(i),
                this.globalData.defs.appendChild(n),
                this.checkMasks()
                  ? ((n = createNS("g")).setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + a + ")"
                    ),
                    n.appendChild(this.layerElement),
                    (this.transformedElement = n),
                    s
                      ? s.appendChild(this.transformedElement)
                      : (this.baseElement = this.transformedElement))
                  : this.layerElement.setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + a + ")"
                    )),
              0 !== this.data.bm && this.setBlendMode();
          },
          renderElement: function () {
            this.finalTransform._matMdf &&
              this.transformedElement.setAttribute(
                "transform",
                this.finalTransform.mat.to2dCSS()
              ),
              this.finalTransform._opMdf &&
                this.transformedElement.setAttribute(
                  "opacity",
                  this.finalTransform.mProp.o.v
                );
          },
          destroyBaseElement: function () {
            (this.layerElement = null),
              (this.matteElement = null),
              this.maskManager.destroy();
          },
          getBaseElement: function () {
            return this.data.hd ? null : this.baseElement;
          },
          createRenderableComponents: function () {
            (this.maskManager = new MaskElement(
              this.data,
              this,
              this.globalData
            )),
              (this.renderableEffectsManager = new SVGEffects(this));
          },
          setMatte: function (t) {
            this.matteElement &&
              this.matteElement.setAttribute(
                "mask",
                "url(" + locationHref + "#" + t + ")"
              );
          },
        }),
        (IShapeElement.prototype = {
          addShapeToModifiers: function (t) {
            for (var e, i = this.shapeModifiers.length, e = 0; e < i; e += 1)
              this.shapeModifiers[e].addShape(t);
          },
          isShapeInAnimatedModifiers: function (t) {
            for (var e = this.shapeModifiers.length; 0 < e; )
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1;
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              for (var t, e = this.shapes.length, t = 0; t < e; t += 1)
                this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; --t)
                this.shapeModifiers[t].processShapes(this._isFirstFrame);
            }
          },
          lcEnum: { 1: "butt", 2: "round", 3: "square" },
          ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
          searchProcessedElement: function (t) {
            for (var e = this.processedElements, i = 0, s = e.length; i < s; ) {
              if (e[i].elem === t) return e[i].pos;
              i += 1;
            }
            return 0;
          },
          addProcessedElement: function (t, e) {
            for (var i = this.processedElements, s = i.length; s; )
              if (i[--s].elem === t) return void (i[s].pos = e);
            i.push(new ProcessedElement(t, e));
          },
          prepareFrame: function (t) {
            this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange);
          },
        }),
        (ITextElement.prototype.initElement = function (t, e, i) {
          (this.lettersChangedFlag = !0),
            this.initFrame(),
            this.initBaseData(t, e, i),
            (this.textProperty = new TextProperty(
              this,
              t.t,
              this.dynamicProperties
            )),
            (this.textAnimator = new TextAnimatorProperty(
              t.t,
              this.renderType,
              this
            )),
            this.initTransform(t, e, i),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties);
        }),
        (ITextElement.prototype.prepareFrame = function (t) {
          (this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
              (this.buildNewText(),
              (this.textProperty._isFirstFrame = !1),
              (this.textProperty._mdf = !1));
        }),
        (ITextElement.prototype.createPathShape = function (t, e) {
          for (var i, s, r = e.length, a = "", i = 0; i < r; i += 1)
            (s = e[i].ks.k), (a += buildShapeString(s, s.i.length, !0, t));
          return a;
        }),
        (ITextElement.prototype.updateDocumentData = function (t, e) {
          this.textProperty.updateDocumentData(t, e);
        }),
        (ITextElement.prototype.canResizeFont = function (t) {
          this.textProperty.canResizeFont(t);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (t) {
          this.textProperty.setMinimumFontSize(t);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          t,
          e,
          i,
          s,
          r
        ) {
          switch (
            (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
            e.translate(0, -t.ls, 0),
            t.j)
          ) {
            case 1:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                0,
                0
              );
              break;
            case 2:
              e.translate(
                t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                0,
                0
              );
          }
          e.translate(s, r, 0);
        }),
        (ITextElement.prototype.buildColor = function (t) {
          return (
            "rgb(" +
            Math.round(255 * t[0]) +
            "," +
            Math.round(255 * t[1]) +
            "," +
            Math.round(255 * t[2]) +
            ")"
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {}),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          ICompElement
        ),
        (ICompElement.prototype.initElement = function (t, e, i) {
          this.initFrame(),
            this.initBaseData(t, e, i),
            this.initTransform(t, e, i),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (t) {
          if (
            ((this._mdf = !1),
            this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange),
            this.isInRange || this.data.xt)
          ) {
            var e;
            this.tm._placeholder
              ? (this.renderedFrame = t / this.data.sr)
              : ((e = this.tm.v) === this.data.op && (e = this.data.op - 1),
                (this.renderedFrame = e));
            var i,
              e = this.elements.length;
            for (
              this.completeLayers || this.checkLayers(this.renderedFrame),
                i = e - 1;
              0 <= i;
              --i
            )
              (this.completeLayers || this.elements[i]) &&
                (this.elements[i].prepareFrame(
                  this.renderedFrame - this.layers[i].st
                ),
                this.elements[i]._mdf && (this._mdf = !0));
          }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
          for (var t, e = this.layers.length, t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (t) {
          this.elements = t;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          for (var t, e = this.layers.length, t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          IImageElement
        ),
        (IImageElement.prototype.createContent = function () {
          var t = this.globalData.getAssetsPath(this.assetData);
          (this.innerElem = createNS("image")),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute(
              "preserveAspectRatio",
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            ),
            this.innerElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              t
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        }),
        extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw),
            t.setAttribute("height", this.data.sh),
            t.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(t);
        }),
        extendPrototype(
          [SVGRenderer, ICompElement, SVGBaseElement],
          SVGCompElement
        ),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          SVGTextElement
        ),
        (SVGTextElement.prototype.createContent = function () {
          this.data.singleShape &&
            !this.globalData.fontManager.chars &&
            (this.textContainer = createNS("text"));
        }),
        (SVGTextElement.prototype.buildTextContents = function (t) {
          for (var e = 0, i = t.length, s = [], r = ""; e < i; )
            t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3)
              ? (s.push(r), (r = ""))
              : (r += t[e]),
              (e += 1);
          return s.push(r), s;
        }),
        (SVGTextElement.prototype.buildNewText = function () {
          var t,
            e,
            i = this.textProperty.currentData;
          (this.renderedLetters = createSizedArray(i ? i.l.length : 0)),
            i.fc
              ? this.layerElement.setAttribute("fill", this.buildColor(i.fc))
              : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            i.sc &&
              (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)),
              this.layerElement.setAttribute("stroke-width", i.sw)),
            this.layerElement.setAttribute("font-size", i.finalSize);
          var s = this.globalData.fontManager.getFontByName(i.f),
            r,
            a;
          s.fClass
            ? this.layerElement.setAttribute("class", s.fClass)
            : (this.layerElement.setAttribute("font-family", s.fFamily),
              (r = i.fWeight),
              (a = i.fStyle),
              this.layerElement.setAttribute("font-style", a),
              this.layerElement.setAttribute("font-weight", r)),
            this.layerElement.setAttribute("arial-label", i.t);
          var n,
            o = i.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h,
            p = this.mHelper,
            d = "",
            c = this.data.singleShape,
            f = 0,
            u = 0,
            m = !0,
            g = (i.tr / 1e3) * i.finalSize;
          if (!c || l || i.sz) {
            for (var h, h, y = this.textSpans.length, t = 0; t < e; t += 1)
              (l && c && 0 !== t) ||
                ((n =
                  t < y ? this.textSpans[t] : createNS(l ? "path" : "text")),
                y <= t &&
                  (n.setAttribute("stroke-linecap", "butt"),
                  n.setAttribute("stroke-linejoin", "round"),
                  n.setAttribute("stroke-miterlimit", "4"),
                  (this.textSpans[t] = n),
                  this.layerElement.appendChild(n)),
                (n.style.display = "inherit")),
                p.reset(),
                p.scale(i.finalSize / 100, i.finalSize / 100),
                c &&
                  (o[t].n &&
                    ((f = -g), (u += i.yOffset), (u += m ? 1 : 0), (m = !1)),
                  this.applyTextPropertiesToMatrix(i, p, o[t].line, f, u),
                  (f += o[t].l || 0),
                  (f += g)),
                l
                  ? ((h = (h =
                      ((h = this.globalData.fontManager.getCharData(
                        i.finalText[t],
                        s.fStyle,
                        this.globalData.fontManager.getFontByName(i.f).fFamily
                      )) &&
                        h.data) ||
                      {}).shapes
                      ? h.shapes[0].it
                      : []),
                    c
                      ? (d += this.createPathShape(p, h))
                      : n.setAttribute("d", this.createPathShape(p, h)))
                  : (c &&
                      n.setAttribute(
                        "transform",
                        "translate(" + p.props[12] + "," + p.props[13] + ")"
                      ),
                    (n.textContent = o[t].val),
                    n.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve"
                    ));
            c && n && n.setAttribute("d", d);
          } else {
            var v = this.textContainer,
              b = "start";
            switch (i.j) {
              case 1:
                b = "end";
                break;
              case 2:
                b = "middle";
            }
            v.setAttribute("text-anchor", b),
              v.setAttribute("letter-spacing", g);
            var w = this.buildTextContents(i.finalText),
              e = w.length,
              u = i.ps ? i.ps[1] + i.ascent : 0;
            for (t = 0; t < e; t += 1)
              ((n = this.textSpans[t] || createNS("tspan")).textContent = w[t]),
                n.setAttribute("x", 0),
                n.setAttribute("y", u),
                (n.style.display = "inherit"),
                v.appendChild(n),
                (this.textSpans[t] = n),
                (u += i.finalLineHeight);
            this.layerElement.appendChild(v);
          }
          for (; t < this.textSpans.length; )
            (this.textSpans[t].style.display = "none"), (t += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextElement.prototype.sourceRectAtTime = function (t) {
          var e;
          return (
            this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged &&
              ((this._sizeChanged = !1),
              (e = this.layerElement.getBBox()),
              (this.bbox = {
                top: e.y,
                left: e.x,
                width: e.width,
                height: e.height,
              })),
            this.bbox
          );
        }),
        (SVGTextElement.prototype.renderInnerContent = function () {
          if (
            !this.data.singleShape &&
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
          ) {
            var t, e;
            this._sizeChanged = !0;
            for (
              var i,
                s,
                r = this.textAnimator.renderedLetters,
                a = this.textProperty.currentData.l,
                e = a.length,
                t = 0;
              t < e;
              t += 1
            )
              a[t].n ||
                ((i = r[t]),
                (s = this.textSpans[t]),
                i._mdf.m && s.setAttribute("transform", i.m),
                i._mdf.o && s.setAttribute("opacity", i.o),
                i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                i._mdf.sc && s.setAttribute("stroke", i.sc),
                i._mdf.fc && s.setAttribute("fill", i.fc));
          }
        }),
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          SVGShapeElement
        ),
        (SVGShapeElement.prototype.initSecondaryElement = function () {}),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
        (SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
          for (
            var t,
              e,
              i,
              s,
              r = this.shapes.length,
              a = this.stylesList.length,
              n = [],
              o = !1,
              i = 0;
            i < a;
            i += 1
          ) {
            for (
              s = this.stylesList[i], o = !1, t = n.length = 0;
              t < r;
              t += 1
            )
              -1 !== (e = this.shapes[t]).styles.indexOf(s) &&
                (n.push(e), (o = e._isAnimated || o));
            1 < n.length && o && this.setShapesAsAnimated(n);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
          for (var e, i = t.length, e = 0; e < i; e += 1) t[e].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (t, e) {
          var i,
            s = new SVGStyleData(t, e),
            e = s.pElem;
          return (
            "st" === t.ty
              ? (i = new SVGStrokeStyleData(this, t, s))
              : "fl" === t.ty
              ? (i = new SVGFillStyleData(this, t, s))
              : ("gf" !== t.ty && "gs" !== t.ty) ||
                ((i = new (
                  "gf" === t.ty
                    ? SVGGradientFillStyleData
                    : SVGGradientStrokeStyleData
                )(this, t, s)),
                this.globalData.defs.appendChild(i.gf),
                i.maskId &&
                  (this.globalData.defs.appendChild(i.ms),
                  this.globalData.defs.appendChild(i.of),
                  e.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + i.maskId + ")"
                  ))),
            ("st" !== t.ty && "gs" !== t.ty) ||
              (e.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"),
              e.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"),
              e.setAttribute("fill-opacity", "0"),
              1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)),
            2 === t.r && e.setAttribute("fill-rule", "evenodd"),
            t.ln && e.setAttribute("id", t.ln),
            t.cl && e.setAttribute("class", t.cl),
            t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)),
            this.stylesList.push(s),
            this.addToAnimatedContents(t, i),
            i
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (t) {
          var e = new ShapeGroupData();
          return (
            t.ln && e.gr.setAttribute("id", t.ln),
            t.cl && e.gr.setAttribute("class", t.cl),
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
            e
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (t, e) {
          var i = TransformPropertyFactory.getTransformProperty(this, t, this),
            e = new SVGTransformData(i, i.o, e);
          return this.addToAnimatedContents(t, e), e;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
          var s = 4;
          "rc" === t.ty
            ? (s = 5)
            : "el" === t.ty
            ? (s = 6)
            : "sr" === t.ty && (s = 7);
          var s = new SVGShapeData(
            e,
            i,
            ShapePropertyFactory.getShapeProp(this, t, s, this)
          );
          return (
            this.shapes.push(s),
            this.addShapeToModifiers(s),
            this.addToAnimatedContents(t, s),
            s
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
          for (var i = 0, s = this.animatedContents.length; i < s; ) {
            if (this.animatedContents[i].element === e) return;
            i += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (t) {
          for (
            var e, i = t.styles, s = this.stylesList.length, e = 0;
            e < s;
            e += 1
          )
            this.stylesList[e].closed || i.push(this.stylesList[e]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          for (var t, e = this.itemsData.length, t = 0; t < e; t += 1)
            this.prevViewData[t] = this.itemsData[t];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              e = this.dynamicProperties.length,
              t = 0;
            t < e;
            t += 1
          )
            this.dynamicProperties[t].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          t,
          e,
          i,
          s,
          r,
          a,
          n
        ) {
          for (
            var o,
              l,
              h,
              p,
              d,
              c,
              f = [].concat(a),
              u = t.length - 1,
              m = [],
              g = [],
              o = u;
            0 <= o;
            --o
          ) {
            if (
              ((c = this.searchProcessedElement(t[o]))
                ? (e[o] = i[c - 1])
                : (t[o]._render = n),
              "fl" == t[o].ty ||
                "st" == t[o].ty ||
                "gf" == t[o].ty ||
                "gs" == t[o].ty)
            )
              c
                ? (e[o].style.closed = !1)
                : (e[o] = this.createStyleElement(t[o], r)),
                t[o]._render && s.appendChild(e[o].style.pElem),
                m.push(e[o].style);
            else if ("gr" == t[o].ty) {
              if (c)
                for (h = e[o].it.length, l = 0; l < h; l += 1)
                  e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(
                t[o].it,
                e[o].it,
                e[o].prevViewData,
                e[o].gr,
                r + 1,
                f,
                n
              ),
                t[o]._render && s.appendChild(e[o].gr);
            } else
              "tr" == t[o].ty
                ? (c || (e[o] = this.createTransformElement(t[o], s)),
                  (p = e[o].transform),
                  f.push(p))
                : "sh" == t[o].ty ||
                  "rc" == t[o].ty ||
                  "el" == t[o].ty ||
                  "sr" == t[o].ty
                ? (c || (e[o] = this.createShapeElement(t[o], f, r)),
                  this.setElementStyles(e[o]))
                : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty
                ? (c
                    ? ((d = e[o]).closed = !1)
                    : ((d = ShapeModifiers.getModifier(t[o].ty)).init(
                        this,
                        t[o]
                      ),
                      (e[o] = d),
                      this.shapeModifiers.push(d)),
                  g.push(d))
                : "rp" == t[o].ty &&
                  (c
                    ? ((d = e[o]).closed = !0)
                    : ((d = ShapeModifiers.getModifier(t[o].ty)),
                      (e[o] = d).init(this, t, o, e),
                      this.shapeModifiers.push(d),
                      (n = !1)),
                  g.push(d));
            this.addProcessedElement(t[o], o + 1);
          }
          for (u = m.length, o = 0; o < u; o += 1) m[o].closed = !0;
          for (u = g.length, o = 0; o < u; o += 1) g[o].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          this.renderModifiers();
          for (var t, e = this.stylesList.length, t = 0; t < e; t += 1)
            this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) &&
              (this.stylesList[t].msElem &&
                (this.stylesList[t].msElem.setAttribute(
                  "d",
                  this.stylesList[t].d
                ),
                (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
              this.stylesList[t].pElem.setAttribute(
                "d",
                this.stylesList[t].d || "M0 0"
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          for (var t, e, i = this.animatedContents.length, t = 0; t < i; t += 1)
            (e = this.animatedContents[t]),
              (this._isFirstFrame || e.element._isAnimated) &&
                !0 !== e.data &&
                e.fn(e.data, e.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        }),
        (SVGTintFilter.prototype.renderFrame = function (t) {
          var e, i, t;
          (t || this.filterManager._mdf) &&
            ((e = this.filterManager.effectElements[0].p.v),
            (i = this.filterManager.effectElements[1].p.v),
            (t = this.filterManager.effectElements[2].p.v / 100),
            this.matrixFilter.setAttribute(
              "values",
              i[0] -
                e[0] +
                " 0 0 0 " +
                e[0] +
                " " +
                (i[1] - e[1]) +
                " 0 0 0 " +
                e[1] +
                " " +
                (i[2] - e[2]) +
                " 0 0 0 " +
                e[2] +
                " 0 0 0 " +
                t +
                " 0"
            ));
        }),
        (SVGFillFilter.prototype.renderFrame = function (t) {
          var e, t;
          (t || this.filterManager._mdf) &&
            ((e = this.filterManager.effectElements[2].p.v),
            (t = this.filterManager.effectElements[6].p.v),
            this.matrixFilter.setAttribute(
              "values",
              "0 0 0 0 " +
                e[0] +
                " 0 0 0 0 " +
                e[1] +
                " 0 0 0 0 " +
                e[2] +
                " 0 0 0 " +
                t +
                " 0"
            ));
        }),
        (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
          var e, t, i, s, e;
          (t || this.filterManager._mdf) &&
            ((e = 0.3 * this.filterManager.effectElements[0].p.v),
            (t = this.filterManager.effectElements[1].p.v),
            this.feGaussianBlur.setAttribute(
              "stdDeviation",
              (3 == t ? 0 : e) + " " + (2 == t ? 0 : e)
            ),
            (e =
              1 == this.filterManager.effectElements[2].p.v
                ? "wrap"
                : "duplicate"),
            this.feGaussianBlur.setAttribute("edgeMode", e));
        }),
        (SVGStrokeEffect.prototype.initialize = function () {
          var t,
            e,
            i,
            s,
            r =
              this.elem.layerElement.children ||
              this.elem.layerElement.childNodes;
          for (
            1 === this.filterManager.effectElements[1].p.v
              ? ((s = this.elem.maskManager.masksProperties.length), (i = 0))
              : (s = 1 + (i = this.filterManager.effectElements[0].p.v - 1)),
              (e = createNS("g")).setAttribute("fill", "none"),
              e.setAttribute("stroke-linecap", "round"),
              e.setAttribute("stroke-dashoffset", 1);
            i < s;
            i += 1
          )
            (t = createNS("path")),
              e.appendChild(t),
              this.paths.push({ p: t, m: i });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              n = createElementID();
            a.setAttribute("id", n),
              a.setAttribute("mask-type", "alpha"),
              a.appendChild(e),
              this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (
              o.setAttribute("mask", "url(" + locationHref + "#" + n + ")");
              r[0];

            )
              o.appendChild(r[0]);
            this.elem.layerElement.appendChild(o),
              (this.masker = a),
              e.setAttribute("stroke", "#fff");
          } else if (
            1 === this.filterManager.effectElements[10].p.v ||
            2 === this.filterManager.effectElements[10].p.v
          ) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (
                r =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
                r.length;

              )
                this.elem.layerElement.removeChild(r[0]);
            this.elem.layerElement.appendChild(e),
              this.elem.layerElement.removeAttribute("mask"),
              e.setAttribute("stroke", "#fff");
          }
          (this.initialized = !0), (this.pathMasker = e);
        }),
        (SVGStrokeEffect.prototype.renderFrame = function (t) {
          this.initialized || this.initialize();
          for (var e, i, s, r = this.paths.length, e = 0, a, n; e < r; e += 1)
            if (
              -1 !== this.paths[e].m &&
              ((i = this.elem.maskManager.viewData[this.paths[e].m]),
              (s = this.paths[e].p),
              (t || this.filterManager._mdf || i.prop._mdf) &&
                s.setAttribute("d", i.lastPath),
              t ||
                this.filterManager.effectElements[9].p._mdf ||
                this.filterManager.effectElements[4].p._mdf ||
                this.filterManager.effectElements[7].p._mdf ||
                this.filterManager.effectElements[8].p._mdf ||
                i.prop._mdf)
            ) {
              if (
                0 !== this.filterManager.effectElements[7].p.v ||
                100 !== this.filterManager.effectElements[8].p.v
              ) {
                for (
                  var o =
                      Math.min(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ) / 100,
                    l =
                      Math.max(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ) / 100,
                    h = s.getTotalLength(),
                    a = "0 0 0 " + h * o + " ",
                    p,
                    d,
                    i =
                      1 +
                      (2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v) /
                        100,
                    c = Math.floor((h * (l - o)) / i),
                    p = 0;
                  p < c;
                  p += 1
                )
                  a +=
                    "1 " +
                    (2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v) /
                      100 +
                    " ";
                a += "0 " + 10 * h + " 0 0";
              } else
                a =
                  "1 " +
                  (2 *
                    this.filterManager.effectElements[4].p.v *
                    this.filterManager.effectElements[9].p.v) /
                    100;
              s.setAttribute("stroke-dasharray", a);
            }
          (t || this.filterManager.effectElements[4].p._mdf) &&
            this.pathMasker.setAttribute(
              "stroke-width",
              2 * this.filterManager.effectElements[4].p.v
            ),
            (t || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                "opacity",
                this.filterManager.effectElements[6].p.v
              ),
            (1 !== this.filterManager.effectElements[10].p.v &&
              2 !== this.filterManager.effectElements[10].p.v) ||
              (!t && !this.filterManager.effectElements[3].p._mdf) ||
              ((n = this.filterManager.effectElements[3].p.v),
              this.pathMasker.setAttribute(
                "stroke",
                "rgb(" +
                  bm_floor(255 * n[0]) +
                  "," +
                  bm_floor(255 * n[1]) +
                  "," +
                  bm_floor(255 * n[2]) +
                  ")"
              ));
        }),
        (SVGTritoneFilter.prototype.renderFrame = function (t) {
          var e, i, s, r, t, e;
          (t || this.filterManager._mdf) &&
            ((e = this.filterManager.effectElements[0].p.v),
            (i = this.filterManager.effectElements[1].p.v),
            (r =
              (s = this.filterManager.effectElements[2].p.v)[0] +
              " " +
              i[0] +
              " " +
              e[0]),
            (t = s[1] + " " + i[1] + " " + e[1]),
            (e = s[2] + " " + i[2] + " " + e[2]),
            this.feFuncR.setAttribute("tableValues", r),
            this.feFuncG.setAttribute("tableValues", t),
            this.feFuncB.setAttribute("tableValues", e));
        }),
        (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
          var t = createNS(t);
          return t.setAttribute("type", "table"), e.appendChild(t), t;
        }),
        (SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, s, r) {
          for (
            var a,
              a,
              n = 0,
              o = Math.min(t, e),
              l = Math.max(t, e),
              h = Array.call(null, { length: 256 }),
              p = 0,
              d = r - s,
              c = e - t;
            n <= 256;

          )
            (a =
              (a = n / 256) <= o
                ? c < 0
                  ? r
                  : s
                : l <= a
                ? c < 0
                  ? s
                  : r
                : s + d * Math.pow((a - t) / c, 1 / i)),
              (h[p++] = a),
              (n += 256 / 255);
          return h.join(" ");
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (t) {
          var e, i;
          (t || this.filterManager._mdf) &&
            ((i = this.filterManager.effectElements),
            this.feFuncRComposed &&
              (t ||
                i[3].p._mdf ||
                i[4].p._mdf ||
                i[5].p._mdf ||
                i[6].p._mdf ||
                i[7].p._mdf) &&
              ((e = this.getTableValue(
                i[3].p.v,
                i[4].p.v,
                i[5].p.v,
                i[6].p.v,
                i[7].p.v
              )),
              this.feFuncRComposed.setAttribute("tableValues", e),
              this.feFuncGComposed.setAttribute("tableValues", e),
              this.feFuncBComposed.setAttribute("tableValues", e)),
            this.feFuncR &&
              (t ||
                i[10].p._mdf ||
                i[11].p._mdf ||
                i[12].p._mdf ||
                i[13].p._mdf ||
                i[14].p._mdf) &&
              ((e = this.getTableValue(
                i[10].p.v,
                i[11].p.v,
                i[12].p.v,
                i[13].p.v,
                i[14].p.v
              )),
              this.feFuncR.setAttribute("tableValues", e)),
            this.feFuncG &&
              (t ||
                i[17].p._mdf ||
                i[18].p._mdf ||
                i[19].p._mdf ||
                i[20].p._mdf ||
                i[21].p._mdf) &&
              ((e = this.getTableValue(
                i[17].p.v,
                i[18].p.v,
                i[19].p.v,
                i[20].p.v,
                i[21].p.v
              )),
              this.feFuncG.setAttribute("tableValues", e)),
            this.feFuncB &&
              (t ||
                i[24].p._mdf ||
                i[25].p._mdf ||
                i[26].p._mdf ||
                i[27].p._mdf ||
                i[28].p._mdf) &&
              ((e = this.getTableValue(
                i[24].p.v,
                i[25].p.v,
                i[26].p.v,
                i[27].p.v,
                i[28].p.v
              )),
              this.feFuncB.setAttribute("tableValues", e)),
            this.feFuncA &&
              (t ||
                i[31].p._mdf ||
                i[32].p._mdf ||
                i[33].p._mdf ||
                i[34].p._mdf ||
                i[35].p._mdf) &&
              ((e = this.getTableValue(
                i[31].p.v,
                i[32].p.v,
                i[33].p.v,
                i[34].p.v,
                i[35].p.v
              )),
              this.feFuncA.setAttribute("tableValues", e)));
        }),
        (SVGDropShadowEffect.prototype.renderFrame = function (t) {
          var e, i, e, t, e;
          (t || this.filterManager._mdf) &&
            ((t || this.filterManager.effectElements[4].p._mdf) &&
              this.feGaussianBlur.setAttribute(
                "stdDeviation",
                this.filterManager.effectElements[4].p.v / 4
              ),
            (t || this.filterManager.effectElements[0].p._mdf) &&
              ((e = this.filterManager.effectElements[0].p.v),
              this.feFlood.setAttribute(
                "flood-color",
                rgbToHex(
                  Math.round(255 * e[0]),
                  Math.round(255 * e[1]),
                  Math.round(255 * e[2])
                )
              )),
            (t || this.filterManager.effectElements[1].p._mdf) &&
              this.feFlood.setAttribute(
                "flood-opacity",
                this.filterManager.effectElements[1].p.v / 255
              ),
            (t ||
              this.filterManager.effectElements[2].p._mdf ||
              this.filterManager.effectElements[3].p._mdf) &&
              ((i = this.filterManager.effectElements[3].p.v),
              (e = (this.filterManager.effectElements[2].p.v - 90) * degToRads),
              (t = i * Math.cos(e)),
              (e = i * Math.sin(e)),
              this.feOffset.setAttribute("dx", t),
              this.feOffset.setAttribute("dy", e)));
        });
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, i) {
        (this.initialized = !1),
          (this.filterManager = e),
          (this.filterElem = t),
          ((this.elem = i).matteElement = createNS("g")),
          i.matteElement.appendChild(i.layerElement),
          i.matteElement.appendChild(i.transformedElement),
          (i.baseElement = i.matteElement);
      }
      function SVGEffects(t) {
        var e,
          i,
          s = t.data.ef ? t.data.ef.length : 0,
          r = createElementID(),
          a = filtersFactory.createFilter(r),
          n = 0;
        for (this.filters = [], e = 0; e < s; e += 1)
          (i = null),
            20 === t.data.ef[e].ty
              ? ((n += 1),
                (i = new SVGTintFilter(a, t.effectsManager.effectElements[e])))
              : 21 === t.data.ef[e].ty
              ? ((n += 1),
                (i = new SVGFillFilter(a, t.effectsManager.effectElements[e])))
              : 22 === t.data.ef[e].ty
              ? (i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]))
              : 23 === t.data.ef[e].ty
              ? ((n += 1),
                (i = new SVGTritoneFilter(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 24 === t.data.ef[e].ty
              ? ((n += 1),
                (i = new SVGProLevelsFilter(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 25 === t.data.ef[e].ty
              ? ((n += 1),
                (i = new SVGDropShadowEffect(
                  a,
                  t.effectsManager.effectElements[e]
                )))
              : 28 === t.data.ef[e].ty
              ? (i = new SVGMatte3Effect(
                  a,
                  t.effectsManager.effectElements[e],
                  t
                ))
              : 29 === t.data.ef[e].ty &&
                ((n += 1),
                (i = new SVGGaussianBlurEffect(
                  a,
                  t.effectsManager.effectElements[e]
                ))),
            i && this.filters.push(i);
        n &&
          (t.globalData.defs.appendChild(a),
          t.layerElement.setAttribute(
            "filter",
            "url(" + locationHref + "#" + r + ")"
          )),
          this.filters.length && t.addRenderableComponent(this);
      }
      (SVGMatte3Effect.prototype.findSymbol = function (t) {
        for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
          if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
          e += 1;
        }
        return null;
      }),
        (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
          var i = t.layerElement.parentNode;
          if (i) {
            for (
              var s, r = i.children, a = 0, n = r.length;
              a < n && r[a] !== t.layerElement;

            )
              a += 1;
            a <= n - 2 && (s = r[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e),
              s ? i.insertBefore(o, s) : i.appendChild(o);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
          var i, s, r, a, a;
          this.findSymbol(e) ||
            ((i = createElementID()),
            (s = createNS("mask")).setAttribute("id", e.layerId),
            s.setAttribute("mask-type", "alpha"),
            _svgMatteSymbols.push(e),
            (r = t.globalData.defs).appendChild(s),
            (a = createNS("symbol")).setAttribute("id", i),
            this.replaceInParent(e, i),
            a.appendChild(e.layerElement),
            r.appendChild(a),
            (a = createNS("use")).setAttribute("href", "#" + i),
            s.appendChild(a),
            (e.data.hd = !1),
            e.show()),
            t.setMatte(e.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var t = this.filterManager.effectElements[0].p.v,
              e = this.elem.comp.elements,
              i = 0,
              s = e.length;
            i < s;

          )
            e[i] &&
              e[i].data.ind === t &&
              this.setElementAsMask(this.elem, e[i]),
              (i += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        }),
        (SVGEffects.prototype.renderFrame = function (t) {
          for (var e, i = this.filters.length, e = 0; e < i; e += 1)
            this.filters[e].renderFrame(t);
        });
      var animationManager =
          ((RO = {}),
          (SO = []),
          (TO = 0),
          (UO = 0),
          (VO = 0),
          (WO = !0),
          (XO = !1),
          (RO.registerAnimation = ZO),
          (RO.loadAnimation = function (t) {
            var e = new AnimationItem();
            return aP(e, null), e.setParams(t), e;
          }),
          (RO.setSpeed = function (t, e) {
            for (var i, i = 0; i < UO; i += 1) SO[i].animation.setSpeed(t, e);
          }),
          (RO.setDirection = function (t, e) {
            for (var i, i = 0; i < UO; i += 1)
              SO[i].animation.setDirection(t, e);
          }),
          (RO.play = function (t) {
            for (var e, e = 0; e < UO; e += 1) SO[e].animation.play(t);
          }),
          (RO.pause = function (t) {
            for (var e, e = 0; e < UO; e += 1) SO[e].animation.pause(t);
          }),
          (RO.stop = function (t) {
            for (var e, e = 0; e < UO; e += 1) SO[e].animation.stop(t);
          }),
          (RO.togglePause = function (t) {
            for (var e, e = 0; e < UO; e += 1) SO[e].animation.togglePause(t);
          }),
          (RO.searchAnimations = function (t, e, i) {
            for (
              var s,
                r = [].concat(
                  [].slice.call(document.getElementsByClassName("lottie")),
                  [].slice.call(document.getElementsByClassName("bodymovin"))
                ),
                a = r.length,
                s = 0,
                n,
                e;
              s < a;
              s += 1
            )
              i && r[s].setAttribute("data-bm-type", i), ZO(r[s], t);
            e &&
              0 === a &&
              ((i = i || "svg"),
              ((n = document.getElementsByTagName("body")[0]).innerHTML = ""),
              ((e = createTag("div")).style.width = "100%"),
              (e.style.height = "100%"),
              e.setAttribute("data-bm-type", i),
              n.appendChild(e),
              ZO(e, t));
          }),
          (RO.resize = function () {
            for (var t, t = 0; t < UO; t += 1) SO[t].animation.resize();
          }),
          (RO.goToAndStop = function (t, e, i) {
            for (var s, s = 0; s < UO; s += 1)
              SO[s].animation.goToAndStop(t, e, i);
          }),
          (RO.destroy = function (t) {
            for (var e, e = UO - 1; 0 <= e; --e) SO[e].animation.destroy(t);
          }),
          (RO.freeze = function () {
            XO = !0;
          }),
          (RO.unfreeze = function () {
            (XO = !1), dP();
          }),
          (RO.getRegisteredAnimations = function () {
            for (var t, e = SO.length, i = [], t = 0; t < e; t += 1)
              i.push(SO[t].animation);
            return i;
          }),
          RO),
        AnimationItem = function () {
          (this._cbs = []),
            (this.name = ""),
            (this.path = ""),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = createElementID()),
            (this.assetsPath = ""),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.subframeEnabled = subframeEnabled),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = ProjectInterface()),
            (this.imagePreloader = new ImagePreloader());
        },
        RO,
        SO,
        TO,
        UO,
        VO,
        WO,
        XO;
      function YO(t) {
        for (var e = 0, i = t.target; e < UO; )
          SO[e].animation === i &&
            (SO.splice(e, 1), --e, --UO, i.isPaused || _O()),
            (e += 1);
      }
      function ZO(t, e) {
        if (!t) return null;
        for (var i = 0; i < UO; ) {
          if (SO[i].elem == t && null !== SO[i].elem) return SO[i].animation;
          i += 1;
        }
        var s = new AnimationItem();
        return aP(s, t), s.setData(t, e), s;
      }
      function $O() {
        (VO += 1), dP();
      }
      function _O() {
        --VO;
      }
      function aP(t, e) {
        t.addEventListener("destroy", YO),
          t.addEventListener("_active", $O),
          t.addEventListener("_idle", _O),
          SO.push({ elem: e, animation: t }),
          (UO += 1);
      }
      function bP(t) {
        for (var e, i = t - TO, e = 0; e < UO; e += 1)
          SO[e].animation.advanceTime(i);
        (TO = t), VO && !XO ? window.requestAnimationFrame(bP) : (WO = !0);
      }
      function cP(t) {
        (TO = t), window.requestAnimationFrame(bP);
      }
      function dP() {
        !XO && VO && WO && (window.requestAnimationFrame(cP), (WO = !1));
      }
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (t) {
          t.context && (this.context = t.context),
            (t.wrapper || t.container) &&
              (this.wrapper = t.wrapper || t.container);
          var e = t.animType || t.renderer || "svg";
          switch (e) {
            case "canvas":
              this.renderer = new CanvasRenderer(this, t.rendererSettings);
              break;
            case "svg":
              this.renderer = new SVGRenderer(this, t.rendererSettings);
              break;
            default:
              this.renderer = new HybridRenderer(this, t.rendererSettings);
          }
          this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = e),
            "" === t.loop ||
              null === t.loop ||
              (!1 === t.loop
                ? (this.loop = !1)
                : !0 === t.loop
                ? (this.loop = !0)
                : (this.loop = parseInt(t.loop))),
            (this.autoplay = !("autoplay" in t) || t.autoplay),
            (this.name = t.name || ""),
            (this.autoloadSegments =
              !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments),
            (this.assetsPath = t.assetsPath),
            t.animationData
              ? this.configAnimation(t.animationData)
              : t.path &&
                ("json" != t.path.substr(-4) &&
                  ("/" != t.path.substr(-1, 1) && (t.path += "/"),
                  (t.path += "data.json")),
                -1 != t.path.lastIndexOf("\\")
                  ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1))
                  : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1)),
                (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf(".json")
                )),
                assetLoader.load(
                  t.path,
                  this.configAnimation.bind(this),
                  function () {
                    this.trigger("data_failed");
                  }.bind(this)
                ));
        }),
        (AnimationItem.prototype.setData = function (t, e) {
          var i = {
              wrapper: t,
              animationData: e
                ? "object" == typeof e
                  ? e
                  : JSON.parse(e)
                : null,
            },
            e = t.attributes;
          (i.path = e.getNamedItem("data-animation-path")
            ? e.getNamedItem("data-animation-path").value
            : e.getNamedItem("data-bm-path")
            ? e.getNamedItem("data-bm-path").value
            : e.getNamedItem("bm-path")
            ? e.getNamedItem("bm-path").value
            : ""),
            (i.animType = e.getNamedItem("data-anim-type")
              ? e.getNamedItem("data-anim-type").value
              : e.getNamedItem("data-bm-type")
              ? e.getNamedItem("data-bm-type").value
              : e.getNamedItem("bm-type")
              ? e.getNamedItem("bm-type").value
              : e.getNamedItem("data-bm-renderer")
              ? e.getNamedItem("data-bm-renderer").value
              : e.getNamedItem("bm-renderer")
              ? e.getNamedItem("bm-renderer").value
              : "canvas");
          var t = e.getNamedItem("data-anim-loop")
            ? e.getNamedItem("data-anim-loop").value
            : e.getNamedItem("data-bm-loop")
            ? e.getNamedItem("data-bm-loop").value
            : e.getNamedItem("bm-loop")
            ? e.getNamedItem("bm-loop").value
            : "";
          "" === t || (i.loop = "false" !== t && ("true" === t || parseInt(t)));
          var t = e.getNamedItem("data-anim-autoplay")
            ? e.getNamedItem("data-anim-autoplay").value
            : e.getNamedItem("data-bm-autoplay")
            ? e.getNamedItem("data-bm-autoplay").value
            : !e.getNamedItem("bm-autoplay") ||
              e.getNamedItem("bm-autoplay").value;
          (i.autoplay = "false" !== t),
            (i.name = e.getNamedItem("data-name")
              ? e.getNamedItem("data-name").value
              : e.getNamedItem("data-bm-name")
              ? e.getNamedItem("data-bm-name").value
              : e.getNamedItem("bm-name")
              ? e.getNamedItem("bm-name").value
              : ""),
            "false" ===
              (e.getNamedItem("data-anim-prerender")
                ? e.getNamedItem("data-anim-prerender").value
                : e.getNamedItem("data-bm-prerender")
                ? e.getNamedItem("data-bm-prerender").value
                : e.getNamedItem("bm-prerender")
                ? e.getNamedItem("bm-prerender").value
                : "") && (i.prerender = !1),
            this.setParams(i);
        }),
        (AnimationItem.prototype.includeLayers = function (t) {
          t.op > this.animationData.op &&
            ((this.animationData.op = t.op),
            (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
          for (
            var e,
              i,
              s = this.animationData.layers,
              r = s.length,
              a = t.layers,
              n = a.length,
              i = 0;
            i < n;
            i += 1
          )
            for (e = 0; e < r; ) {
              if (s[e].id == a[i].id) {
                s[e] = a[i];
                break;
              }
              e += 1;
            }
          if (
            ((t.chars || t.fonts) &&
              (this.renderer.globalData.fontManager.addChars(t.chars),
              this.renderer.globalData.fontManager.addFonts(
                t.fonts,
                this.renderer.globalData.defs
              )),
            t.assets)
          )
            for (r = t.assets.length, e = 0; e < r; e += 1)
              this.animationData.assets.push(t.assets[e]);
          (this.animationData.__complete = !1),
            dataManager.completeData(
              this.animationData,
              this.renderer.globalData.fontManager
            ),
            this.renderer.includeLayers(t.layers),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments)
            return (
              this.trigger("data_ready"),
              void (this.timeCompleted = this.totalFrames)
            );
          var t = t.shift();
          this.timeCompleted = t.time * this.frameRate;
          var t = this.path + this.fileName + "_" + this.segmentPos + ".json";
          (this.segmentPos += 1),
            assetLoader.load(
              t,
              this.includeLayers.bind(this),
              function () {
                this.trigger("data_failed");
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          this.animationData.segments ||
            (this.timeCompleted = this.totalFrames),
            this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
          this.trigger("loaded_images"), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
        }),
        (AnimationItem.prototype.configAnimation = function (t) {
          this.renderer &&
            ((this.animationData = t),
            (this.totalFrames = Math.floor(
              this.animationData.op - this.animationData.ip
            )),
            this.renderer.configAnimation(t),
            t.assets || (t.assets = []),
            this.renderer.searchExtraCompositions(t.assets),
            (this.assets = this.animationData.assets),
            (this.frameRate = this.animationData.fr),
            (this.firstFrame = Math.round(this.animationData.ip)),
            (this.frameMult = this.animationData.fr / 1e3),
            this.trigger("config_ready"),
            this.preloadImages(),
            this.loadSegments(),
            this.updaFrameModifier(),
            this.waitForFontsLoaded());
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer &&
            (this.renderer.globalData.fontManager.loaded()
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          this.isLoaded ||
            !this.renderer.globalData.fontManager.loaded() ||
            (!this.imagePreloader.loaded() &&
              "canvas" === this.renderer.rendererType) ||
            ((this.isLoaded = !0),
            dataManager.completeData(
              this.animationData,
              this.renderer.globalData.fontManager
            ),
            expressionsPlugin && expressionsPlugin.initExpressions(this),
            this.renderer.initItems(),
            setTimeout(
              function () {
                this.trigger("DOMLoaded");
              }.bind(this),
              0
            ),
            this.gotoFrame(),
            this.autoplay && this.play());
        }),
        (AnimationItem.prototype.resize = function () {
          this.renderer.updateContainerSize();
        }),
        (AnimationItem.prototype.setSubframe = function (t) {
          this.subframeEnabled = !!t;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.subframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame();
        }),
        (AnimationItem.prototype.renderFrame = function () {
          !1 !== this.isLoaded &&
            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        }),
        (AnimationItem.prototype.play = function (t) {
          (t && this.name != t) ||
            (!0 === this.isPaused &&
              ((this.isPaused = !1),
              this._idle && ((this._idle = !1), this.trigger("_active"))));
        }),
        (AnimationItem.prototype.pause = function (t) {
          (t && this.name != t) ||
            (!1 === this.isPaused &&
              ((this.isPaused = !0), (this._idle = !0), this.trigger("_idle")));
        }),
        (AnimationItem.prototype.togglePause = function (t) {
          (t && this.name != t) ||
            (!0 === this.isPaused ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (t) {
          (t && this.name != t) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.goToAndStop = function (t, e, i) {
          (i && this.name != i) ||
            (e
              ? this.setCurrentRawFrameValue(t)
              : this.setCurrentRawFrameValue(t * this.frameModifier),
            this.pause());
        }),
        (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
          this.goToAndStop(t, e, i), this.play();
        }),
        (AnimationItem.prototype.advanceTime = function (t) {
          var t, e;
          !0 !== this.isPaused &&
            !1 !== this.isLoaded &&
            ((e = !1),
            (t = this.currentRawFrame + t * this.frameModifier) >=
              this.totalFrames - 1 && 0 < this.frameModifier
              ? this.loop && this.playCount !== this.loop
                ? t >= this.totalFrames
                  ? ((this.playCount += 1),
                    this.checkSegments(t % this.totalFrames) ||
                      (this.setCurrentRawFrameValue(t % this.totalFrames),
                      (this._completedLoop = !0),
                      this.trigger("loopComplete")))
                  : this.setCurrentRawFrameValue(t)
                : this.checkSegments(
                    t > this.totalFrames ? t % this.totalFrames : 0
                  ) || ((e = !0), (t = this.totalFrames - 1))
              : t < 0
              ? this.checkSegments(t % this.totalFrames) ||
                (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                  ? ((e = !0), (t = 0))
                  : (this.setCurrentRawFrameValue(
                      this.totalFrames + (t % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger("loopComplete")
                      : (this._completedLoop = !0)))
              : this.setCurrentRawFrameValue(t),
            e &&
              (this.setCurrentRawFrameValue(t),
              this.pause(),
              this.trigger("complete")));
        }),
        (AnimationItem.prototype.adjustSegment = function (t, e) {
          (this.playCount = 0),
            t[1] < t[0]
              ? (0 < this.frameModifier &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.timeCompleted = this.totalFrames = t[0] - t[1]),
                (this.firstFrame = t[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
              : t[1] > t[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.timeCompleted = this.totalFrames = t[1] - t[0]),
                (this.firstFrame = t[0]),
                this.setCurrentRawFrameValue(0.001 + e)),
            this.trigger("segmentStart");
        }),
        (AnimationItem.prototype.setSegment = function (t, e) {
          var i = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < t
              ? (i = t)
              : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
            (this.firstFrame = t),
            (this.timeCompleted = this.totalFrames = e - t),
            -1 !== i && this.goToAndStop(i, !0);
        }),
        (AnimationItem.prototype.playSegments = function (t, e) {
          if ((e && (this.segments.length = 0), "object" == typeof t[0]))
            for (var i, s = t.length, i = 0; i < s; i += 1)
              this.segments.push(t[i]);
          else this.segments.push(t);
          this.segments.length &&
            e &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (t) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            t && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (t) {
          return (
            !!this.segments.length &&
            (this.adjustSegment(this.segments.shift(), t), !0)
          );
        }),
        (AnimationItem.prototype.destroy = function (t) {
          (t && this.name != t) ||
            !this.renderer ||
            (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            (this._cbs = null),
            (this.onEnterFrame =
              this.onLoopComplete =
              this.onComplete =
              this.onSegmentStart =
              this.onDestroy =
                null),
            (this.renderer = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
          (this.currentRawFrame = t), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (t) {
          (this.playSpeed = t), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (t) {
          (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection;
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (t) {
          var e = "",
            i;
          return (
            t.e
              ? (e = t.p)
              : this.assetsPath
              ? (-1 !== (i = t.p).indexOf("images/") && (i = i.split("/")[1]),
                (e = this.assetsPath + i))
              : ((e = this.path), (e += t.u || ""), (e += t.p)),
            e
          );
        }),
        (AnimationItem.prototype.getAssetData = function (t) {
          for (var e = 0, i = this.assets.length; e < i; ) {
            if (t == this.assets[e].id) return this.assets[e];
            e += 1;
          }
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.trigger = function (t) {
          if (this._cbs && this._cbs[t])
            switch (t) {
              case "enterFrame":
                this.triggerEvent(
                  t,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case "loopComplete":
                this.triggerEvent(
                  t,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(
                  t,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                );
                break;
              case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
              default:
                this.triggerEvent(t);
            }
          "enterFrame" === t &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                t,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            "loopComplete" === t &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  t,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            "complete" === t &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(t, this.frameMult)
              ),
            "segmentStart" === t &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              ),
            "destroy" === t &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(t, this));
        });
      var Expressions =
          ((sO = {}),
          (sO.initExpressions = function (t) {
            var e = 0,
              i = [];
            (t.renderer.compInterface = CompExpressionInterface(t.renderer)),
              t.renderer.globalData.projectInterface.registerComposition(
                t.renderer
              ),
              (t.renderer.globalData.pushExpression = function () {
                e += 1;
              }),
              (t.renderer.globalData.popExpression = function () {
                0 == --e &&
                  (function () {
                    for (var t, e = i.length, t = 0; t < e; t += 1)
                      i[t].release();
                    i.length = 0;
                  })();
              }),
              (t.renderer.globalData.registerExpressionProperty = function (t) {
                -1 === i.indexOf(t) && i.push(t);
              });
          }),
          sO),
        sO,
        expressionsPlugin = Expressions,
        ExpressionManager = (function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null;
          function $bm_isInstanceOfArray(t) {
            return t.constructor === Array || t.constructor === Float32Array;
          }
          function isNumerable(t, e) {
            return (
              "number" === t ||
              "boolean" === t ||
              "string" === t ||
              e instanceof Number
            );
          }
          function $bm_neg(t) {
            var e = typeof t;
            if ("number" == e || "boolean" == e || t instanceof Number)
              return -t;
            if ($bm_isInstanceOfArray(t)) {
              for (var i, s = t.length, r = [], i = 0; i < s; i += 1)
                r[i] = -t[i];
              return r;
            }
            return t.propType && t.v;
          }
          var easeInBez = BezierFactory.getBezierEasing(
              0.333,
              0,
              0.833,
              0.833,
              "easeIn"
            ).get,
            easeOutBez = BezierFactory.getBezierEasing(
              0.167,
              0.167,
              0.667,
              1,
              "easeOut"
            ).get,
            easeInOutBez = BezierFactory.getBezierEasing(
              0.33,
              0,
              0.667,
              1,
              "easeInOut"
            ).get;
          function sum(t, e) {
            var i = typeof t,
              s = typeof e;
            if ("string" == i || "string" == s) return t + e;
            if (isNumerable(i, t) && isNumerable(s, e)) return t + e;
            if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
              return ((t = t.slice(0))[0] = t[0] + e), t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
              return ((e = e.slice(0))[0] = t + e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var r = 0, a = t.length, n = e.length, o = [];
                r < a || r < n;

              )
                ("number" == typeof t[r] || t[r] instanceof Number) &&
                ("number" == typeof e[r] || e[r] instanceof Number)
                  ? (o[r] = t[r] + e[r])
                  : (o[r] = void 0 === e[r] ? t[r] : t[r] || e[r]),
                  (r += 1);
              return o;
            }
            return 0;
          }
          var add = sum;
          function sub(t, e) {
            var i = typeof t,
              s = typeof e;
            if (isNumerable(i, t) && isNumerable(s, e))
              return (
                (t = "string" == i ? parseInt(t) : t) -
                (e = "string" == s ? parseInt(e) : e)
              );
            if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
              return ((t = t.slice(0))[0] = t[0] - e), t;
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
              return ((e = e.slice(0))[0] = t - e[0]), e;
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (
                var r = 0, a = t.length, n = e.length, o = [];
                r < a || r < n;

              )
                ("number" == typeof t[r] || t[r] instanceof Number) &&
                ("number" == typeof e[r] || e[r] instanceof Number)
                  ? (o[r] = t[r] - e[r])
                  : (o[r] = void 0 === e[r] ? t[r] : t[r] || e[r]),
                  (r += 1);
              return o;
            }
            return 0;
          }
          function mul(t, e) {
            var i,
              s,
              r,
              a = typeof t,
              n = typeof e;
            if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (
                r = t.length, i = createTypedArray("float32", r), s = 0;
                s < r;
                s += 1
              )
                i[s] = t[s] * e;
              return i;
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (
                r = e.length, i = createTypedArray("float32", r), s = 0;
                s < r;
                s += 1
              )
                i[s] = t * e[s];
              return i;
            }
            return 0;
          }
          function div(t, e) {
            var i,
              s,
              r,
              a = typeof t,
              n = typeof e;
            if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (
                r = t.length, i = createTypedArray("float32", r), s = 0;
                s < r;
                s += 1
              )
                i[s] = t[s] / e;
              return i;
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (
                r = e.length, i = createTypedArray("float32", r), s = 0;
                s < r;
                s += 1
              )
                i[s] = t / e[s];
              return i;
            }
            return 0;
          }
          function mod(t, e) {
            return (
              (t = "string" == typeof t ? parseInt(t) : t) %
              (e = "string" == typeof e ? parseInt(e) : e)
            );
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;
          function clamp(t, e, i) {
            var s;
            return (
              i < e && ((s = i), (i = e), (e = s)), Math.min(Math.max(t, e), i)
            );
          }
          function radiansToDegrees(t) {
            return t / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(t) {
            return t * degToRads;
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(t, e) {
            if ("number" == typeof t || t instanceof Number)
              return Math.abs(t - (e = e || 0));
            for (
              var i,
                s = Math.min(t.length, (e = e || helperLengthArray).length),
                r = 0,
                i = 0;
              i < s;
              i += 1
            )
              r += Math.pow(e[i] - t[i], 2);
            return Math.sqrt(r);
          }
          function normalize(t) {
            return div(t, length(t));
          }
          function rgbToHsl(t) {
            var e,
              i,
              s = t[0],
              r = t[1],
              a = t[2],
              n = Math.max(s, r, a),
              o = Math.min(s, r, a),
              l = (n + o) / 2;
            if (n == o) e = i = 0;
            else {
              var h = n - o,
                i = 0.5 < l ? h / (2 - n - o) : h / (n + o);
              switch (n) {
                case s:
                  e = (r - a) / h + (r < a ? 6 : 0);
                  break;
                case r:
                  e = (a - s) / h + 2;
                  break;
                case a:
                  e = (s - r) / h + 4;
              }
              e /= 6;
            }
            return t[3], 1;
          }
          function hue2rgb(t, e, i) {
            return (
              i < 0 && (i += 1),
              1 < i && --i,
              i < 1 / 6
                ? t + 6 * (e - t) * i
                : i < 0.5
                ? e
                : i < 2 / 3
                ? t + (e - t) * (2 / 3 - i) * 6
                : t
            );
          }
          function hslToRgb(t) {
            var e,
              i,
              s,
              r = t[0],
              a = t[1],
              n = t[2],
              n,
              a,
              e,
              i,
              s;
            return (
              0 === a
                ? (e = i = s = n)
                : ((e = hue2rgb(
                    (a = 2 * n - (n = n < 0.5 ? n * (1 + a) : n + a - n * a)),
                    n,
                    r + 1 / 3
                  )),
                  (i = hue2rgb(a, n, r)),
                  (s = hue2rgb(a, n, r - 1 / 3))),
              t[3],
              1
            );
          }
          function linear(t, e, i, s, r) {
            var a;
            if (
              ((void 0 !== s && void 0 !== r) ||
                ((s = e), (r = i), (e = 0), (i = 1)),
              i < e && ((a = i), (i = e), (e = a)),
              t <= e)
            )
              return s;
            if (i <= t) return r;
            var n = i === e ? 0 : (t - e) / (i - e);
            if (!s.length) return s + (r - s) * n;
            for (
              var o, l = s.length, h = createTypedArray("float32", l), o = 0;
              o < l;
              o += 1
            )
              h[o] = s[o] + (r[o] - s[o]) * n;
            return h;
          }
          function random(t, e) {
            if (
              (void 0 === e &&
                (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
              e.length)
            ) {
              var i,
                s = e.length;
              t = t || createTypedArray("float32", s);
              for (
                var r = createTypedArray("float32", s),
                  a = BMMath.random(),
                  i = 0;
                i < s;
                i += 1
              )
                r[i] = t[i] + a * (e[i] - t[i]);
              return r;
            }
            return (t = void 0 === t ? 0 : t) + BMMath.random() * (e - t);
          }
          function createPath(t, e, i, s) {
            var r,
              a = t.length,
              n = shape_pool.newElement();
            n.setPathData(!!s, a);
            for (var o, l, h = [0, 0], r = 0; r < a; r += 1)
              (o = e && e[r] ? e[r] : h),
                (l = i && i[r] ? i[r] : h),
                n.setTripleAt(
                  t[r][0],
                  t[r][1],
                  l[0] + t[r][0],
                  l[1] + t[r][1],
                  o[0] + t[r][0],
                  o[1] + t[r][1],
                  r,
                  !0
                );
            return n;
          }
          function initiateExpression(elem, data, property) {
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = -1 !== val.indexOf("random"),
              elemType = elem.data.ty,
              transform,
              $bm_transform,
              content,
              effect,
              thisProperty = property;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, "value", {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0);
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw || 0,
              height = elem.data.sh || 0,
              name = elem.data.nm,
              loopIn,
              loop_in,
              loopOut,
              loop_out,
              smooth,
              toWorld,
              fromWorld,
              fromComp,
              toComp,
              fromCompToSurface,
              position,
              rotation,
              anchorPoint,
              scale,
              thisLayer,
              thisComp,
              mask,
              valueAtTime,
              velocityAtTime,
              __expression_functions = [],
              scoped_bm_rt;
            if (data.xf)
              for (var i, len = data.xf.length, i = 0; i < len; i += 1)
                __expression_functions[i] = eval(
                  "(function(){ return " + data.xf[i] + "}())"
                );
            var expression_function = eval(
                "[function _expression_function(){" +
                  val +
                  ";scoped_bm_rt=$bm_rt}]"
              )[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || !0 !== this.data.hd,
              wiggle = function (t, e) {
                for (
                  var i,
                    s,
                    r = this.pv.length || 1,
                    a = createTypedArray("float32", r),
                    n = Math.floor(5 * time),
                    s = (i = 0);
                  i < n;

                ) {
                  for (s = 0; s < r; s += 1)
                    a[s] += -e + 2 * e * BMMath.random();
                  i += 1;
                }
                var o = 5 * time,
                  l = o - Math.floor(o),
                  h = createTypedArray("float32", r);
                if (1 < r) {
                  for (s = 0; s < r; s += 1)
                    h[s] =
                      this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * l;
                  return h;
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l;
              }.bind(this);
            function loopInDuration(t, e) {
              return loopIn(t, e, !0);
            }
            function loopOutDuration(t, e) {
              return loopOut(t, e, !0);
            }
            thisProperty.loopIn &&
              ((loopIn = thisProperty.loopIn.bind(thisProperty)),
              (loop_in = loopIn)),
              thisProperty.loopOut &&
                ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                (loop_out = loopOut)),
              thisProperty.smooth &&
                (smooth = thisProperty.smooth.bind(thisProperty)),
              this.getValueAtTime &&
                (valueAtTime = this.getValueAtTime.bind(this)),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(
                elem.comp.globalData.projectInterface
              ),
              time,
              velocity,
              value,
              text,
              textIndex,
              textTotal,
              selectorValue;
            function lookAt(t, e) {
              var t = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                i =
                  Math.atan2(t[0], Math.sqrt(t[1] * t[1] + t[2] * t[2])) /
                  degToRads;
              return Math.atan2(t[1], t[2]), 1;
            }
            function easeOut(t, e, i, s, r) {
              return applyEase(easeOutBez, t, e, i, s, r);
            }
            function easeIn(t, e, i, s, r) {
              return applyEase(easeInBez, t, e, i, s, r);
            }
            function ease(t, e, i, s, r) {
              return applyEase(easeInOutBez, t, e, i, s, r);
            }
            function applyEase(t, e, i, s, r, a) {
              void 0 === r ? ((r = i), (a = s)) : (e = (e - i) / (s - i));
              var n = t((e = 1 < e ? 1 : e < 0 ? 0 : e));
              if ($bm_isInstanceOfArray(r)) {
                for (
                  var o,
                    l = r.length,
                    h = createTypedArray("float32", l),
                    o = 0;
                  o < l;
                  o += 1
                )
                  h[o] = (a[o] - r[o]) * n + r[o];
                return h;
              }
              return (a - r) * n + r;
            }
            function nearestKey(t) {
              var e,
                i,
                s,
                r = data.k.length;
              if (data.k.length && "number" != typeof data.k[0])
                if (
                  ((i = -1),
                  (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                )
                  (i = 1), (s = data.k[0].t);
                else {
                  for (e = 0; e < r - 1; e += 1) {
                    if (t === data.k[e].t) {
                      (i = e + 1), (s = data.k[e].t);
                      break;
                    }
                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                      s =
                        t - data.k[e].t > data.k[e + 1].t - t
                          ? ((i = e + 2), data.k[e + 1].t)
                          : ((i = e + 1), data.k[e].t);
                      break;
                    }
                  }
                  -1 === i && ((i = e + 1), (s = data.k[e].t));
                }
              else s = i = 0;
              var a = {};
              return (
                (a.index = i), (a.time = s / elem.comp.globalData.frameRate), a
              );
            }
            function key(t) {
              var e, i, s, r;
              if (!data.k.length || "number" == typeof data.k[0])
                throw new Error("The property has no keyframe at index " + t);
              for (
                e = {
                  time: data.k[--t].t / elem.comp.globalData.frameRate,
                  value: [],
                },
                  s = (r =
                    t !== data.k.length - 1 || data.k[t].h
                      ? data.k[t].s
                      : data.k[t].s || 0 === data.k[t].s
                      ? data.k[t - 1].s
                      : data.k[t].e).length,
                  i = 0;
                i < s;
                i += 1
              )
                (e[i] = r[i]), (e.value[i] = r[i]);
              return e;
            }
            function framesToTime(t, e) {
              return t / (e = e || elem.comp.globalData.frameRate);
            }
            function timeToFrames(t, e) {
              return (
                (t = !t && 0 !== t ? time : t) *
                (e = e || elem.comp.globalData.frameRate)
              );
            }
            function seedRandom(t) {
              BMMath.seedrandom(randSeed + t);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(t, e) {
              return (
                "string" == typeof value &&
                (void 0 === e ? value.substring(t) : value.substring(t, e))
              );
            }
            function substr(t, e) {
              return (
                "string" == typeof value &&
                (void 0 === e ? value.substr(t) : value.substr(t, e))
              );
            }
            var index = elem.data.ind,
              hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent,
              randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;
            function executeExpression(t) {
              return (
                (value = t),
                _needsRandom && seedRandom(randSeed),
                this.frameExpressionId === elem.globalData.frameId &&
                "textSelector" !== this.propType
                  ? value
                  : ("textSelector" === this.propType &&
                      ((textIndex = this.textIndex),
                      (textTotal = this.textTotal),
                      (selectorValue = this.selectorValue)),
                    thisLayer ||
                      ((text = elem.layerInterface.text),
                      (thisLayer = elem.layerInterface),
                      (thisComp = elem.comp.compInterface),
                      (toWorld = thisLayer.toWorld.bind(thisLayer)),
                      (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                      (fromComp = thisLayer.fromComp.bind(thisLayer)),
                      (toComp = thisLayer.toComp.bind(thisLayer)),
                      (mask = thisLayer.mask
                        ? thisLayer.mask.bind(thisLayer)
                        : null),
                      (fromCompToSurface = fromComp)),
                    transform ||
                      ((transform = elem.layerInterface(
                        "ADBE Transform Group"
                      )),
                      ($bm_transform = transform) &&
                        (anchorPoint = transform.anchorPoint)),
                    4 !== elemType ||
                      content ||
                      (content = thisLayer("ADBE Root Vectors Group")),
                    (effect = effect || thisLayer(4)),
                    (hasParent = !(
                      !elem.hierarchy || !elem.hierarchy.length
                    )) &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    (scoped_bm_rt =
                      "shape" === scoped_bm_rt.propType
                        ? scoped_bm_rt.v
                        : scoped_bm_rt))
              );
            }
            return executeExpression;
          }
          return (ob.initiateExpression = initiateExpression), ob;
        })(),
        expressionHelpers = {
          searchExpressions: function (t, e, i) {
            e.x &&
              ((i.k = !0),
              (i.x = !0),
              (i.initiateExpression = ExpressionManager.initiateExpression),
              i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));
          },
          getSpeedAtTime: function (t) {
            var e = this.getValueAtTime(t),
              i = this.getValueAtTime(t + -0.01),
              s = 0;
            if (e.length) {
              for (var r, r = 0; r < e.length; r += 1)
                s += Math.pow(i[r] - e[r], 2);
              s = 100 * Math.sqrt(s);
            } else s = 0;
            return s;
          },
          getVelocityAtTime: function (t) {
            if (void 0 !== this.vel) return this.vel;
            var e,
              i,
              s = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -0.001);
            if (s.length)
              for (
                e = createTypedArray("float32", s.length), i = 0;
                i < s.length;
                i += 1
              )
                e[i] = (r[i] - s[i]) / -0.001;
            else e = (r - s) / -0.001;
            return e;
          },
          getValueAtTime: function (t) {
            return (
              (t *= this.elem.globalData.frameRate),
              (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastFrame < t
                    ? this._cachingAtTime.lastIndex
                    : 0),
                (this._cachingAtTime.value = this.interpolateValue(
                  t,
                  this._cachingAtTime
                )),
                (this._cachingAtTime.lastFrame = t)),
              this._cachingAtTime.value
            );
          },
          getStaticValueAtTime: function () {
            return this.pv;
          },
          setGroupProperty: function (t) {
            this.propertyGroup = t;
          },
        };
      !(function () {
        function n(t, e, i) {
          if (!this.k || !this.keyframes) return this.pv;
          t = t ? t.toLowerCase() : "";
          var s,
            r,
            a,
            n,
            o,
            l = this.comp.renderedFrame,
            h = this.keyframes,
            p = h[h.length - 1].t;
          if (l <= p) return this.pv;
          if (
            (i
              ? (r =
                  p -
                  (s = e
                    ? Math.abs(p - elem.comp.globalData.frameRate * e)
                    : Math.max(0, p - this.elem.data.ip)))
              : ((!e || e > h.length - 1) && (e = h.length - 1),
                (s = p - (r = h[h.length - 1 - e].t))),
            "pingpong" === t)
          ) {
            if (Math.floor((l - r) / s) % 2 != 0)
              return this.getValueAtTime(
                (s - ((l - r) % s) + r) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if ("offset" === t) {
              var d = this.getValueAtTime(
                  r / this.comp.globalData.frameRate,
                  0
                ),
                c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(
                  (((l - r) % s) + r) / this.comp.globalData.frameRate,
                  0
                ),
                u = Math.floor((l - r) / s);
              if (this.pv.length) {
                for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1)
                  o[a] = (c[a] - d[a]) * u + f[a];
                return o;
              }
              return (c - d) * u + f;
            }
            if ("continue" === t) {
              var m = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                g = this.getValueAtTime(
                  (p - 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)
                  o[a] =
                    m[a] +
                    ((m[a] - g[a]) *
                      ((l - p) / this.comp.globalData.frameRate)) /
                      5e-4;
                return o;
              }
              return m + ((l - p) / 0.001) * (m - g);
            }
          }
          return this.getValueAtTime(
            (((l - r) % s) + r) / this.comp.globalData.frameRate,
            0
          );
        }
        function o(t, e, i) {
          if (!this.k) return this.pv;
          t = t ? t.toLowerCase() : "";
          var s,
            r,
            a,
            n,
            o,
            l = this.comp.renderedFrame,
            h = this.keyframes,
            p = h[0].t;
          if (p <= l) return this.pv;
          if (
            (i
              ? (r =
                  p +
                  (s = e
                    ? Math.abs(elem.comp.globalData.frameRate * e)
                    : Math.max(0, this.elem.data.op - p)))
              : (s =
                  (r = h[(e = !e || e > h.length - 1 ? h.length - 1 : e)].t) -
                  p),
            "pingpong" === t)
          ) {
            if (Math.floor((p - l) / s) % 2 == 0)
              return this.getValueAtTime(
                (((p - l) % s) + p) / this.comp.globalData.frameRate,
                0
              );
          } else {
            if ("offset" === t) {
              var d = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(
                  (s - ((p - l) % s) + p) / this.comp.globalData.frameRate,
                  0
                ),
                u = Math.floor((p - l) / s) + 1;
              if (this.pv.length) {
                for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1)
                  o[a] = f[a] - (c[a] - d[a]) * u;
                return o;
              }
              return f - (c - d) * u;
            }
            if ("continue" === t) {
              var m = this.getValueAtTime(
                  p / this.comp.globalData.frameRate,
                  0
                ),
                g = this.getValueAtTime(
                  (p + 0.001) / this.comp.globalData.frameRate,
                  0
                );
              if (this.pv.length) {
                for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)
                  o[a] = m[a] + ((m[a] - g[a]) * (p - l)) / 0.001;
                return o;
              }
              return m + ((m - g) * (p - l)) / 0.001;
            }
          }
          return this.getValueAtTime(
            (s - ((p - l) % s) + p) / this.comp.globalData.frameRate,
            0
          );
        }
        function l(t, e) {
          if (!this.k) return this.pv;
          if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
            return this.pv;
          for (
            var i,
              s,
              r = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = r - t,
              n = 1 < e ? (r + t - a) / (e - 1) : 1,
              o = 0,
              l = 0,
              i = this.pv.length
                ? createTypedArray("float32", this.pv.length)
                : 0;
            o < e;

          ) {
            if (((s = this.getValueAtTime(a + o * n)), this.pv.length))
              for (l = 0; l < this.pv.length; l += 1) i[l] += s[l];
            else i += s;
            o += 1;
          }
          if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
          else i /= e;
          return i;
        }
        var s = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (t, e, i) {
          var i = s(t, e, i);
          return (
            i.dynamicProperties.length
              ? (i.getValueAtTime = function (t) {
                  console.warn("Transform at time not supported");
                }.bind(i))
              : (i.getValueAtTime = function (t) {}.bind(i)),
            (i.setGroupProperty = expressionHelpers.setGroupProperty),
            i
          );
        };
        var h = PropertyFactory.getProp;
        PropertyFactory.getProp = function (t, e, i, s, r) {
          var a = h(t, e, i, s, r);
          a.kf
            ? (a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a))
            : (a.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(a)),
            (a.setGroupProperty = expressionHelpers.setGroupProperty),
            (a.loopOut = n),
            (a.loopIn = o),
            (a.smooth = l),
            (a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a)),
            (a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a)),
            (a.numKeys = 1 === e.a ? e.k.length : 0),
            (a.propertyIndex = e.ix);
          var s = 0;
          return (
            0 !== i &&
              (s = createTypedArray(
                "float32",
                (1 === e.a ? e.k[0].s : e.k).length
              )),
            (a._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: s,
            }),
            expressionHelpers.searchExpressions(t, e, a),
            a.k && r.addDynamicProperty(a),
            a
          );
        };
        var t = ShapePropertyFactory.getConstructorFunction(),
          e = ShapePropertyFactory.getKeyframedConstructorFunction();
        function i() {}
        (i.prototype = {
          vertices: function (t, e) {
            this.k && this.getValue();
            for (
              var i = this.v,
                s,
                r = (i = void 0 !== e ? this.getValueAtTime(e, 0) : i)._length,
                a = i[t],
                n = i.v,
                o = createSizedArray(r),
                s = 0;
              s < r;
              s += 1
            )
              o[s] =
                "i" === t || "o" === t
                  ? [a[s][0] - n[s][0], a[s][1] - n[s][1]]
                  : [a[s][0], a[s][1]];
            return o;
          },
          points: function (t) {
            return this.vertices("v", t);
          },
          inTangents: function (t) {
            return this.vertices("i", t);
          },
          outTangents: function (t) {
            return this.vertices("o", t);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (t, e) {
            var i = this.v;
            void 0 !== e && (i = this.getValueAtTime(e, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(i));
            for (
              var s,
                e = this._segmentsLength,
                r = e.lengths,
                a = e.totalLength * t,
                n = 0,
                o = r.length,
                l = 0;
              n < o;

            ) {
              if (l + r[n].addedLength > a) {
                var h,
                  p = i.c && n === o - 1 ? 0 : n + 1,
                  d = (a - l) / r[n].addedLength,
                  s = bez.getPointInSegment(
                    i.v[n],
                    i.v[p],
                    i.o[n],
                    i.i[p],
                    d,
                    r[n]
                  );
                break;
              }
              (l += r[n].addedLength), (n += 1);
            }
            return (s =
              s ||
              (i.c
                ? [i.v[0][0], i.v[0][1]]
                : [i.v[i._length - 1][0], i.v[i._length - 1][1]]));
          },
          vectorOnPath: function (t, e, i) {
            t = 1 == t ? (this.v.c ? 0 : 0.999) : t;
            var s = this.pointOnPath(t, e),
              t = this.pointOnPath(t + 0.001, e),
              e = t[0] - s[0],
              t = t[1] - s[1],
              s = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
            return "tangent" === i ? [e / s, t / s] : [-t / s, e / s];
          },
          tangentOnPath: function (t, e) {
            return this.vectorOnPath(t, e, "tangent");
          },
          normalOnPath: function (t, e) {
            return this.vectorOnPath(t, e, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([i], t),
          extendPrototype([i], e),
          (e.prototype.getValueAtTime = function (t) {
            return (
              this._cachingAtTime ||
                (this._cachingAtTime = {
                  shapeValue: shape_pool.clone(this.pv),
                  lastIndex: 0,
                  lastTime: initialDefaultFrame,
                }),
              (t *= this.elem.globalData.frameRate),
              (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastTime < t
                    ? this._caching.lastIndex
                    : 0),
                (this._cachingAtTime.lastTime = t),
                this.interpolateShape(
                  t,
                  this._cachingAtTime.shapeValue,
                  this._cachingAtTime
                )),
              this._cachingAtTime.shapeValue
            );
          }),
          (e.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var a = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, i, s, r) {
          var r = a(t, e, i, s, r);
          return (
            (r.propertyIndex = e.ix),
            (r.lock = !1),
            3 === i
              ? expressionHelpers.searchExpressions(t, e.pt, r)
              : 4 === i && expressionHelpers.searchExpressions(t, e.ks, r),
            r.k && t.addDynamicProperty(r),
            r
          );
        };
      })(),
        (TextProperty.prototype.getExpressionValue = function (t, e) {
          var i = this.calculateExpression(e);
          if (t.t === i) return t;
          var e = {};
          return (
            this.copyData(e, t), (e.t = i.toString()), (e.__complete = !1), e
          );
        }),
        (TextProperty.prototype.searchProperty = function () {
          var t = this.searchKeyframes(),
            e = this.searchExpressions();
          return (this.kf = t || e), this.kf;
        }),
        (TextProperty.prototype.searchExpressions = function () {
          if (this.data.d.x)
            return (
              (this.calculateExpression =
                ExpressionManager.initiateExpression.bind(this)(
                  this.elem,
                  this.data.d,
                  this
                )),
              this.addEffect(this.getExpressionValue.bind(this)),
              !0
            );
        });
      var ShapeExpressionInterface = function (t, e, i) {
          var s;
          function r(t) {
            if ("number" == typeof t) return s[t - 1];
            for (var e = 0, i = s.length; e < i; ) {
              if (s[e]._name === t) return s[e];
              e += 1;
            }
          }
          return (
            (r.propertyGroup = i),
            (s = CW(t, e, r)),
            (r.numProperties = s.length),
            r
          );
        },
        TextExpressionInterface = function (e) {
          var i;
          function t() {}
          return (
            Object.defineProperty(t, "sourceText", {
              get: function () {
                e.textProperty.getValue();
                var t = e.textProperty.currentData.t;
                return (
                  void 0 !== t &&
                    ((e.textProperty.currentData.t = void 0),
                    ((i = new String(t)).value = t || new String(t))),
                  i
                );
              },
            }),
            t
          );
        },
        LayerExpressionInterface = function (e) {
          var i;
          function s(t) {
            switch (t) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return s.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return i;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return s.effect;
            }
          }
          (s.toWorld = SY),
            (s.fromWorld = TY),
            (s.toComp = SY),
            (s.fromComp = UY),
            (s.sampleImage = VY),
            (s.sourceRectAtTime = e.sourceRectAtTime.bind(e));
          var t = getDescriptor(
            (i = TransformExpressionInterface(
              (s._elem = e).finalTransform.mProp
            )),
            "anchorPoint"
          );
          return (
            Object.defineProperties(s, {
              hasParent: {
                get: function () {
                  return e.hierarchy.length;
                },
              },
              parent: {
                get: function () {
                  return e.hierarchy[0].layerInterface;
                },
              },
              rotation: getDescriptor(i, "rotation"),
              scale: getDescriptor(i, "scale"),
              position: getDescriptor(i, "position"),
              opacity: getDescriptor(i, "opacity"),
              anchorPoint: t,
              anchor_point: t,
              transform: {
                get: function () {
                  return i;
                },
              },
              active: {
                get: function () {
                  return e.isInRange;
                },
              },
            }),
            (s.startTime = e.data.st),
            (s.index = e.data.ind),
            (s.source = e.data.refId),
            (s.height = 0 === e.data.ty ? e.data.h : 100),
            (s.width = 0 === e.data.ty ? e.data.w : 100),
            (s.inPoint = e.data.ip / e.comp.globalData.frameRate),
            (s.outPoint = e.data.op / e.comp.globalData.frameRate),
            (s._name = e.data.nm),
            (s.registerMaskInterface = function (t) {
              s.mask = new MaskManagerInterface(t, e);
            }),
            (s.registerEffectsInterface = function (t) {
              s.effect = t;
            }),
            s
          );
        },
        CompExpressionInterface = function (s) {
          function t(t) {
            for (var e = 0, i = s.layers.length; e < i; ) {
              if (s.layers[e].nm === t || s.layers[e].ind === t)
                return s.elements[e].layerInterface;
              e += 1;
            }
            return null;
          }
          return (
            Object.defineProperty(t, "_name", { value: s.data.nm }),
            ((t.layer = t).pixelAspect = 1),
            (t.height = s.data.h || s.globalData.compSize.h),
            (t.width = s.data.w || s.globalData.compSize.w),
            (t.pixelAspect = 1),
            (t.frameDuration = 1 / s.globalData.frameRate),
            (t.displayStartTime = 0),
            (t.numLayers = s.layers.length),
            t
          );
        },
        TransformExpressionInterface = function (t) {
          function e(t) {
            switch (t) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return e.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return e.rotation;
              case "ADBE Rotate X":
                return e.xRotation;
              case "ADBE Rotate Y":
                return e.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return e.position;
              case "ADBE Position_0":
                return e.xPosition;
              case "ADBE Position_1":
                return e.yPosition;
              case "ADBE Position_2":
                return e.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return e.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return e.opacity;
            }
          }
          var i;
          return (
            Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz),
            }),
            Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r),
            }),
            Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx),
            }),
            Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry),
            }),
            Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s),
            }),
            t.p && (i = ExpressionPropertyInterface(t.p)),
            Object.defineProperty(e, "position", {
              get: function () {
                return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0];
              },
            }),
            Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px),
            }),
            Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py),
            }),
            Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz),
            }),
            Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a),
            }),
            Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o),
            }),
            Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk),
            }),
            Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa),
            }),
            Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or),
            }),
            e
          );
        },
        ProjectInterface = function () {
          function t(t) {
            for (var e = 0, i = this.compositions.length; e < i; ) {
              if (
                this.compositions[e].data &&
                this.compositions[e].data.nm === t
              )
                return (
                  this.compositions[e].prepareFrame &&
                    this.compositions[e].data.xt &&
                    this.compositions[e].prepareFrame(this.currentFrame),
                  this.compositions[e].compInterface
                );
              e += 1;
            }
          }
          return (
            (t.compositions = []),
            (t.currentFrame = 0),
            (t.registerComposition = AZ),
            t
          );
        },
        EffectsExpressionInterface = {
          createEffectsInterface: function (r, t) {
            if (r.effectsManager) {
              for (
                var e,
                  a = [],
                  i = r.data.ef,
                  s = r.effectsManager.effectElements.length,
                  e = 0;
                e < s;
                e += 1
              )
                a.push(GZ(i[e], r.effectsManager.effectElements[e], t, r));
              return function (t) {
                for (var e = r.data.ef || [], i = 0, s = e.length; i < s; ) {
                  if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
                    return a[i];
                  i += 1;
                }
              };
            }
          },
        },
        MaskManagerInterface =
          (Object.defineProperty(j$.prototype, "maskPath", {
            get: function () {
              return (
                this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              );
            },
          }),
          Object.defineProperty(j$.prototype, "maskOpacity", {
            get: function () {
              return (
                this._mask.op.k && this._mask.op.getValue(),
                100 * this._mask.op.v
              );
            },
          }),
          function (e, t) {
            for (
              var i,
                s = createSizedArray(e.viewData.length),
                r = e.viewData.length,
                i = 0;
              i < r;
              i += 1
            )
              s[i] = new j$(e.viewData[i], e.masksProperties[i]);
            return function (t) {
              for (i = 0; i < r; ) {
                if (e.masksProperties[i].nm === t) return s[i];
                i += 1;
              }
            };
          }),
        ExpressionPropertyInterface =
          ((s$ = { pv: 0, v: 0, mult: 1 }),
          (t$ = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }),
          function (t) {
            return t
              ? "unidimensional" === t.propType
                ? ((o = 1 / (n = !((n = t) && "pv" in n) ? s$ : n).mult),
                  (l = n.pv * o),
                  ((h = new Number(l)).value = l),
                  u$(h, n, "unidimensional"),
                  function () {
                    return (
                      n.k && n.getValue(),
                      (l = n.v * o),
                      h.value !== l &&
                        (((h = new Number(l)).value = l),
                        u$(h, n, "unidimensional")),
                      h
                    );
                  })
                : ((i = 1 / (e = !((e = t) && "pv" in e) ? t$ : e).mult),
                  (s = e.pv.length),
                  (r = createTypedArray("float32", s)),
                  (a = createTypedArray("float32", s)),
                  (r.value = a),
                  u$(r, e, "multidimensional"),
                  function () {
                    e.k && e.getValue();
                    for (var t = 0; t < s; t += 1) r[t] = a[t] = e.v[t] * i;
                    return r;
                  })
              : v$;
            var e, i, s, r, a, n, o, l, h;
          }),
        aZ,
        bZ,
        s$,
        t$;
      function u$(i, s, r) {
        Object.defineProperty(i, "velocity", {
          get: function () {
            return s.getVelocityAtTime(s.comp.currentFrame);
          },
        }),
          (i.numKeys = s.keyframes ? s.keyframes.length : 0),
          (i.key = function (t) {
            if (i.numKeys) {
              var e,
                e =
                  "s" in s.keyframes[t - 1]
                    ? s.keyframes[t - 1].s
                    : "e" in s.keyframes[t - 2]
                    ? s.keyframes[t - 2].e
                    : s.keyframes[t - 2].s,
                e =
                  "unidimensional" === r ? new Number(e) : Object.assign({}, e);
              return (
                (e.time =
                  s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate),
                e
              );
            }
            return 0;
          }),
          (i.valueAtTime = s.getValueAtTime),
          (i.speedAtTime = s.getSpeedAtTime),
          (i.velocityAtTime = s.getVelocityAtTime),
          (i.propertyGroup = s.propertyGroup);
      }
      function v$() {
        return s$;
      }
      function j$(t, e) {
        (this._mask = t), (this._data = e);
      }
      function GZ(r, t, e, i) {
        for (var s, a = [], n = r.ef.length, s = 0; s < n; s += 1)
          5 === r.ef[s].ty
            ? a.push(
                GZ(
                  r.ef[s],
                  t.effectElements[s],
                  t.effectElements[s].propertyGroup,
                  i
                )
              )
            : a.push(HZ(t.effectElements[s], r.ef[s].ty, i, o));
        function o(t) {
          return 1 === t ? l : e(t - 1);
        }
        var l = function (t) {
          for (var e = r.ef, i = 0, s = e.length; i < s; ) {
            if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
              return 5 === e[i].ty ? a[i] : a[i]();
            i += 1;
          }
          return a[0]();
        };
        return (
          (l.propertyGroup = o),
          "ADBE Color Control" === r.mn &&
            Object.defineProperty(l, "color", {
              get: function () {
                return a[0]();
              },
            }),
          Object.defineProperty(l, "numProperties", {
            get: function () {
              return r.np;
            },
          }),
          (l.active = l.enabled = 0 !== r.en),
          l
        );
      }
      function HZ(t, e, i, s) {
        var r = ExpressionPropertyInterface(t.p);
        return (
          t.p.setGroupProperty && t.p.setGroupProperty(s),
          function () {
            return 10 === e ? i.comp.compInterface(t.p.v) : r();
          }
        );
      }
      function AZ(t) {
        this.compositions.push(t);
      }
      function SY(t, e) {
        var i = new Matrix();
        if (
          (i.reset(),
          this._elem.finalTransform.mProp.applyToMatrix(i),
          this._elem.hierarchy && this._elem.hierarchy.length)
        ) {
          for (var s, r = this._elem.hierarchy.length, s = 0; s < r; s += 1)
            this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);
          return i.applyToPointArray(t[0], t[1], t[2] || 0);
        }
        return i.applyToPointArray(t[0], t[1], t[2] || 0);
      }
      function TY(t, e) {
        var i = new Matrix();
        if (
          (i.reset(),
          this._elem.finalTransform.mProp.applyToMatrix(i),
          this._elem.hierarchy && this._elem.hierarchy.length)
        ) {
          for (var s, r = this._elem.hierarchy.length, s = 0; s < r; s += 1)
            this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);
          return i.inversePoint(t);
        }
        return i.inversePoint(t);
      }
      function UY(t) {
        var e = new Matrix();
        if (
          (e.reset(),
          this._elem.finalTransform.mProp.applyToMatrix(e),
          this._elem.hierarchy && this._elem.hierarchy.length)
        ) {
          for (var i, s = this._elem.hierarchy.length, i = 0; i < s; i += 1)
            this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
          return e.inversePoint(t);
        }
        return e.inversePoint(t);
      }
      function VY() {
        return [1, 1, 1, 1];
      }
      function CW(t, e, i) {
        for (var s, r = [], a = t ? t.length : 0, s = 0; s < a; s += 1)
          "gr" == t[s].ty
            ? r.push(DW(t[s], e[s], i))
            : "fl" == t[s].ty
            ? r.push(EW(t[s], e[s], i))
            : "st" == t[s].ty
            ? r.push(FW(t[s], e[s], i))
            : "tm" == t[s].ty
            ? r.push(GW(t[s], e[s], i))
            : "tr" == t[s].ty ||
              ("el" == t[s].ty
                ? r.push(HW(t[s], e[s], i))
                : "sr" == t[s].ty
                ? r.push(IW(t[s], e[s], i))
                : "sh" == t[s].ty
                ? r.push(MW(t[s], e[s], i))
                : "rc" == t[s].ty
                ? r.push(JW(t[s], e[s], i))
                : "rd" == t[s].ty
                ? r.push(KW(t[s], e[s], i))
                : "rp" == t[s].ty && r.push(LW(t[s], e[s], i)));
        return r;
      }
      function DW(t, e, i) {
        var s = function (t) {
          switch (t) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return s.content;
            default:
              return s.transform;
          }
        };
        s.propertyGroup = function (t) {
          return 1 === t ? s : i(t - 1);
        };
        var r,
          a,
          n,
          o,
          l,
          r =
            ((r = t),
            (a = e),
            (n = s.propertyGroup),
            ((l = function (t) {
              for (var e = 0, i = o.length; e < i; ) {
                if (
                  o[e]._name === t ||
                  o[e].mn === t ||
                  o[e].propertyIndex === t ||
                  o[e].ix === t ||
                  o[e].ind === t
                )
                  return o[e];
                e += 1;
              }
              if ("number" == typeof t) return o[t - 1];
            }).propertyGroup = function (t) {
              return 1 === t ? l : n(t - 1);
            }),
            (o = CW(r.it, a.it, l.propertyGroup)),
            (l.numProperties = o.length),
            (l.propertyIndex = r.cix),
            (l._name = r.nm),
            l),
          e =
            ((h = t.it[t.it.length - 1]),
            (e = e.it[e.it.length - 1]),
            (p = s.propertyGroup),
            e.transform.mProps.o.setGroupProperty(d),
            e.transform.mProps.p.setGroupProperty(d),
            e.transform.mProps.a.setGroupProperty(d),
            e.transform.mProps.s.setGroupProperty(d),
            e.transform.mProps.r.setGroupProperty(d),
            e.transform.mProps.sk &&
              (e.transform.mProps.sk.setGroupProperty(d),
              e.transform.mProps.sa.setGroupProperty(d)),
            e.transform.op.setGroupProperty(d),
            Object.defineProperties(c, {
              opacity: {
                get: ExpressionPropertyInterface(e.transform.mProps.o),
              },
              position: {
                get: ExpressionPropertyInterface(e.transform.mProps.p),
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(e.transform.mProps.a),
              },
              scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) },
              rotation: {
                get: ExpressionPropertyInterface(e.transform.mProps.r),
              },
              skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) },
              skewAxis: {
                get: ExpressionPropertyInterface(e.transform.mProps.sa),
              },
              _name: { value: h.nm },
            }),
            (c.ty = "tr"),
            (c.mn = h.mn),
            (c.propertyGroup = p),
            c),
          h,
          e,
          p;
        function d(t) {
          return 1 == t ? c : p(--t);
        }
        function c(t) {
          return h.a.ix === t || "Anchor Point" === t
            ? c.anchorPoint
            : h.o.ix === t || "Opacity" === t
            ? c.opacity
            : h.p.ix === t || "Position" === t
            ? c.position
            : h.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t
            ? c.rotation
            : h.s.ix === t || "Scale" === t
            ? c.scale
            : (h.sk && h.sk.ix === t) || "Skew" === t
            ? c.skew
            : (h.sa && h.sa.ix === t) || "Skew Axis" === t
            ? c.skewAxis
            : void 0;
        }
        return (
          (s.content = r),
          (s.transform = e),
          Object.defineProperty(s, "_name", {
            get: function () {
              return t.nm;
            },
          }),
          (s.numProperties = t.np),
          (s.propertyIndex = t.ix),
          (s.nm = t.nm),
          (s.mn = t.mn),
          s
        );
      }
      function EW(t, e, i) {
        function s(t) {
          return "Color" === t || "color" === t
            ? s.color
            : "Opacity" === t || "opacity" === t
            ? s.opacity
            : void 0;
        }
        return (
          Object.defineProperties(s, {
            color: { get: ExpressionPropertyInterface(e.c) },
            opacity: { get: ExpressionPropertyInterface(e.o) },
            _name: { value: t.nm },
            mn: { value: t.mn },
          }),
          e.c.setGroupProperty(i),
          e.o.setGroupProperty(i),
          s
        );
      }
      function FW(t, e, i) {
        function s(t) {
          return 1 === t ? ob : i(t - 1);
        }
        function r(t) {
          return 1 === t ? l : s(t - 1);
        }
        for (var a, n, o = t.d ? t.d.length : 0, l = {}, a = 0; a < o; a += 1)
          Object.defineProperty(l, t.d[a].nm, {
            get: ExpressionPropertyInterface(e.d.dataProps[a].p),
          }),
            e.d.dataProps[a].p.setGroupProperty(r);
        function h(t) {
          return "Color" === t || "color" === t
            ? h.color
            : "Opacity" === t || "opacity" === t
            ? h.opacity
            : "Stroke Width" === t || "stroke width" === t
            ? h.strokeWidth
            : void 0;
        }
        return (
          Object.defineProperties(h, {
            color: { get: ExpressionPropertyInterface(e.c) },
            opacity: { get: ExpressionPropertyInterface(e.o) },
            strokeWidth: { get: ExpressionPropertyInterface(e.w) },
            dash: {
              get: function () {
                return l;
              },
            },
            _name: { value: t.nm },
            mn: { value: t.mn },
          }),
          e.c.setGroupProperty(s),
          e.o.setGroupProperty(s),
          e.w.setGroupProperty(s),
          h
        );
      }
      function GW(e, t, i) {
        function s(t) {
          return 1 == t ? r : i(--t);
        }
        function r(t) {
          return t === e.e.ix || "End" === t || "end" === t
            ? r.end
            : t === e.s.ix
            ? r.start
            : t === e.o.ix
            ? r.offset
            : void 0;
        }
        return (
          (r.propertyIndex = e.ix),
          t.s.setGroupProperty(s),
          t.e.setGroupProperty(s),
          t.o.setGroupProperty(s),
          (r.propertyIndex = e.ix),
          (r.propertyGroup = i),
          Object.defineProperties(r, {
            start: { get: ExpressionPropertyInterface(t.s) },
            end: { get: ExpressionPropertyInterface(t.e) },
            offset: { get: ExpressionPropertyInterface(t.o) },
            _name: { value: e.nm },
          }),
          (r.mn = e.mn),
          r
        );
      }
      function HW(e, t, i) {
        function s(t) {
          return 1 == t ? r : i(--t);
        }
        r.propertyIndex = e.ix;
        var t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
        function r(t) {
          return e.p.ix === t ? r.position : e.s.ix === t ? r.size : void 0;
        }
        return (
          t.s.setGroupProperty(s),
          t.p.setGroupProperty(s),
          Object.defineProperties(r, {
            size: { get: ExpressionPropertyInterface(t.s) },
            position: { get: ExpressionPropertyInterface(t.p) },
            _name: { value: e.nm },
          }),
          (r.mn = e.mn),
          r
        );
      }
      function IW(e, t, i) {
        function s(t) {
          return 1 == t ? r : i(--t);
        }
        var t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
        function r(t) {
          return e.p.ix === t
            ? r.position
            : e.r.ix === t
            ? r.rotation
            : e.pt.ix === t
            ? r.points
            : e.or.ix === t || "ADBE Vector Star Outer Radius" === t
            ? r.outerRadius
            : e.os.ix === t
            ? r.outerRoundness
            : !e.ir || (e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t)
            ? e.is && e.is.ix === t
              ? r.innerRoundness
              : void 0
            : r.innerRadius;
        }
        return (
          (r.propertyIndex = e.ix),
          t.or.setGroupProperty(s),
          t.os.setGroupProperty(s),
          t.pt.setGroupProperty(s),
          t.p.setGroupProperty(s),
          t.r.setGroupProperty(s),
          e.ir && (t.ir.setGroupProperty(s), t.is.setGroupProperty(s)),
          Object.defineProperties(r, {
            position: { get: ExpressionPropertyInterface(t.p) },
            rotation: { get: ExpressionPropertyInterface(t.r) },
            points: { get: ExpressionPropertyInterface(t.pt) },
            outerRadius: { get: ExpressionPropertyInterface(t.or) },
            outerRoundness: { get: ExpressionPropertyInterface(t.os) },
            innerRadius: { get: ExpressionPropertyInterface(t.ir) },
            innerRoundness: { get: ExpressionPropertyInterface(t.is) },
            _name: { value: e.nm },
          }),
          (r.mn = e.mn),
          r
        );
      }
      function JW(e, t, i) {
        function s(t) {
          return 1 == t ? r : i(--t);
        }
        var t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
        function r(t) {
          return e.p.ix === t
            ? r.position
            : e.r.ix === t
            ? r.roundness
            : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t
            ? r.size
            : void 0;
        }
        return (
          (r.propertyIndex = e.ix),
          t.p.setGroupProperty(s),
          t.s.setGroupProperty(s),
          t.r.setGroupProperty(s),
          Object.defineProperties(r, {
            position: { get: ExpressionPropertyInterface(t.p) },
            roundness: { get: ExpressionPropertyInterface(t.r) },
            size: { get: ExpressionPropertyInterface(t.s) },
            _name: { value: e.nm },
          }),
          (r.mn = e.mn),
          r
        );
      }
      function KW(e, t, i) {
        var t = t;
        function s(t) {
          if (e.r.ix === t || "Round Corners 1" === t) return s.radius;
        }
        return (
          (s.propertyIndex = e.ix),
          t.rd.setGroupProperty(function (t) {
            return 1 == t ? s : i(--t);
          }),
          Object.defineProperties(s, {
            radius: { get: ExpressionPropertyInterface(t.rd) },
            _name: { value: e.nm },
          }),
          (s.mn = e.mn),
          s
        );
      }
      function LW(e, t, i) {
        function s(t) {
          return 1 == t ? r : i(--t);
        }
        var t = t;
        function r(t) {
          return e.c.ix === t || "Copies" === t
            ? r.copies
            : e.o.ix === t || "Offset" === t
            ? r.offset
            : void 0;
        }
        return (
          (r.propertyIndex = e.ix),
          t.c.setGroupProperty(s),
          t.o.setGroupProperty(s),
          Object.defineProperties(r, {
            copies: { get: ExpressionPropertyInterface(t.c) },
            offset: { get: ExpressionPropertyInterface(t.o) },
            _name: { value: e.nm },
          }),
          (r.mn = e.mn),
          r
        );
      }
      function MW(t, e, i) {
        var s = e.sh;
        function r(t) {
          if (
            "Shape" === t ||
            "shape" === t ||
            "Path" === t ||
            "path" === t ||
            "ADBE Vector Shape" === t ||
            2 === t
          )
            return r.path;
        }
        return (
          s.setGroupProperty(function (t) {
            return 1 == t ? r : i(--t);
          }),
          Object.defineProperties(r, {
            path: {
              get: function () {
                return s.k && s.getValue(), s;
              },
            },
            shape: {
              get: function () {
                return s.k && s.getValue(), s;
              },
            },
            _name: { value: t.nm },
            ix: { value: t.ix },
            mn: { value: t.mn },
          }),
          r
        );
      }
      function SliderEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function AngleEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function ColorEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function PointEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function LayerIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function MaskIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function CheckboxEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager() {}
      function EffectsManager(t, e) {
        var i = t.ef || [];
        this.effectElements = [];
        for (var s, r, a = i.length, s = 0; s < a; s++)
          (r = new GroupEffect(i[s], e)), this.effectElements.push(r);
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      function o_(t, e) {
        return (
          (this.textIndex = t + 1),
          (this.textTotal = e),
          (this.v = this.getValue() * this.mult),
          this.v
        );
      }
      (aZ = function (t, e) {
        (this.pv = 1),
          (this.comp = t.comp),
          (this.elem = t),
          (this.mult = 0.01),
          (this.propType = "textSelector"),
          (this.textTotal = e.totalChars),
          (this.selectorValue = 100),
          (this.lastValue = [1, 1, 1]),
          (this.k = !0),
          (this.x = !0),
          (this.getValue = ExpressionManager.initiateExpression.bind(this)(
            t,
            e,
            this
          )),
          (this.getMult = o_),
          (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
          this.kf
            ? (this.getValueAtTime =
                expressionHelpers.getValueAtTime.bind(this))
            : (this.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(this)),
          (this.setGroupProperty = expressionHelpers.setGroupProperty);
      }),
        (bZ = TextSelectorProp.getTextSelectorProp),
        (TextSelectorProp.getTextSelectorProp = function (t, e, i) {
          return 1 === e.t ? new aZ(t, e, i) : bZ(t, e, i);
        }),
        extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (t, e) {
          (this.data = t),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(e);
          for (
            var i, s, r = this.data.ef.length, a = this.data.ef, i = 0;
            i < r;
            i += 1
          ) {
            switch (((s = null), a[i].ty)) {
              case 0:
                s = new SliderEffect(a[i], e, this);
                break;
              case 1:
                s = new AngleEffect(a[i], e, this);
                break;
              case 2:
                s = new ColorEffect(a[i], e, this);
                break;
              case 3:
                s = new PointEffect(a[i], e, this);
                break;
              case 4:
              case 7:
                s = new CheckboxEffect(a[i], e, this);
                break;
              case 10:
                s = new LayerIndexEffect(a[i], e, this);
                break;
              case 11:
                s = new MaskIndexEffect(a[i], e, this);
                break;
              case 5:
                s = new EffectsManager(a[i], e, this);
                break;
              default:
                s = new NoValueEffect(a[i], e, this);
            }
            s && this.effectElements.push(s);
          }
        });
      var lottiejs = {},
        _isFrozen = !1;
      function setLocationHref(t) {
        locationHref = t;
      }
      function searchAnimations() {
        !0 === standalone
          ? animationManager.searchAnimations(
              animationData,
              standalone,
              renderer
            )
          : animationManager.searchAnimations();
      }
      function setSubframeRendering(t) {
        subframeEnabled = t;
      }
      function loadAnimation(t) {
        return (
          !0 === standalone && (t.animationData = JSON.parse(animationData)),
          animationManager.loadAnimation(t)
        );
      }
      function setQuality(t) {
        if ("string" == typeof t)
          switch (t) {
            case "high":
              defaultCurveSegments = 200;
              break;
            case "medium":
              defaultCurveSegments = 50;
              break;
            case "low":
              defaultCurveSegments = 10;
          }
        else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
        roundValues(!(50 <= defaultCurveSegments));
      }
      function inBrowser() {
        return "undefined" != typeof navigator;
      }
      function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e);
      }
      function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
        }
      }
      function checkReady() {
        "complete" === document.readyState &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(t) {
        for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
          var s = e[i].split("=");
          if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1]);
        }
      }
      (lottiejs.play = animationManager.play),
        (lottiejs.pause = animationManager.pause),
        (lottiejs.setLocationHref = setLocationHref),
        (lottiejs.togglePause = animationManager.togglePause),
        (lottiejs.setSpeed = animationManager.setSpeed),
        (lottiejs.setDirection = animationManager.setDirection),
        (lottiejs.stop = animationManager.stop),
        (lottiejs.searchAnimations = searchAnimations),
        (lottiejs.registerAnimation = animationManager.registerAnimation),
        (lottiejs.loadAnimation = loadAnimation),
        (lottiejs.setSubframeRendering = setSubframeRendering),
        (lottiejs.resize = animationManager.resize),
        (lottiejs.goToAndStop = animationManager.goToAndStop),
        (lottiejs.destroy = animationManager.destroy),
        (lottiejs.setQuality = setQuality),
        (lottiejs.inBrowser = inBrowser),
        (lottiejs.installPlugin = installPlugin),
        (lottiejs.freeze = animationManager.freeze),
        (lottiejs.unfreeze = animationManager.unfreeze),
        (lottiejs.getRegisteredAnimations =
          animationManager.getRegisteredAnimations),
        (lottiejs.__getFactory = getFactory),
        (lottiejs.version = "5.5.3");
      var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "",
        scripts,
        index,
        myScript,
        queryString,
        renderer;
      standalone &&
        ((scripts = document.getElementsByTagName("script")),
        (index = scripts.length - 1),
        (myScript = scripts[index] || { src: "" }),
        (queryString = myScript.src.replace(/^[^\?]+\??/, "")),
        (renderer = getQueryVariable("renderer")));
      var readyStateCheckInterval = setInterval(checkReady, 100);
      return lottiejs;
    }),
    "function" == typeof define && define.amd
      ? define(function () {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(a))
      : ((a.lottie = b(a)), (a.bodymovin = a.lottie))),
  (function (t) {
    var e, i, s;
    "function" == typeof define && define.amd && (define(t), (e = !0)),
      "object" == typeof exports && ((module.exports = t()), (e = !0)),
      e ||
        ((i = window.Cookies),
        ((s = window.Cookies = t()).noConflict = function () {
          return (window.Cookies = i), s;
        }));
  })(function () {
    function o() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var i = arguments[t],
          s;
        for (s in i) e[s] = i[s];
      }
      return e;
    }
    function h(t) {
      return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function t(l) {
      function n() {}
      function i(t, e, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = o({ path: "/" }, n.defaults, i)).expires &&
            (i.expires = new Date(+new Date() + 864e5 * i.expires)),
            (i.expires = i.expires ? i.expires.toUTCString() : "");
          try {
            var s = JSON.stringify(e);
            /^[\{\[]/.test(s) && (e = s);
          } catch (t) {}
          (e = l.write
            ? l.write(e, t)
            : encodeURIComponent(String(e)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var r = "",
            a;
          for (a in i)
            i[a] &&
              ((r += "; " + a), !0 !== i[a] && (r += "=" + i[a].split(";")[0]));
          return (document.cookie = t + "=" + e + r);
        }
      }
      function e(t, e) {
        if ("undefined" != typeof document) {
          for (
            var i = {},
              s = document.cookie ? document.cookie.split("; ") : [],
              r = 0;
            r < s.length;
            r++
          ) {
            var a = s[r].split("="),
              n = a.slice(1).join("=");
            e || '"' !== n.charAt(0) || (n = n.slice(1, -1));
            try {
              var o = h(a[0]),
                n = (l.read || l)(n, o) || h(n);
              if (e)
                try {
                  n = JSON.parse(n);
                } catch (t) {}
              if (((i[o] = n), t === o)) break;
            } catch (t) {}
          }
          return t ? i[t] : i;
        }
      }
      return (
        (n.set = i),
        (n.get = function (t) {
          return e(t, !1);
        }),
        (n.getJSON = function (t) {
          return e(t, !0);
        }),
        (n.remove = function (t, e) {
          i(t, "", o(e, { expires: -1 }));
        }),
        (n.defaults = {}),
        (n.withConverter = t),
        n
      );
    })(function () {});
  }),
  (window.lazySizesConfig = window.lazySizesConfig || {}),
  (lazySizesConfig.loadHidden = !1),
  (lazySizesConfig.loadMode = 1),
  $(document).on("lazybeforeunveil", function (t) {
    $(t.target).parents(".slick-slide").length &&
      $(t.target).parents(".slick-slide").next().find(".slide-image.hidden")
        .length &&
      (clearTimeout(lazyInitThrottle),
      (lazyInitThrottle = setTimeout(function () {
        $(t.target)
          .parents(".slick-slide")
          .next()
          .find(".slide-image.hidden")
          .removeClass("hidden");
      }, 250))),
      $("#subnav-wrap").length && responsive(!1);
  });
var platform = window.navigator.oscpu,
  platform = platform || "",
  $window = $(window),
  iOSbrowser = $("html").is("[data-ios-browser]"),
  isTouchscreen = $("html").is("[data-touch-events]"),
  $document = $(document),
  $htmlBody = $("html,body"),
  $body = $("body"),
  $header = $("#site-header"),
  $ajaxWrap = $("#content-wrap"),
  $fullbleedHero = $("#content > .full-bleed:first-child"),
  homeURL = $('meta[name="home-url"]').attr("content"),
  templateDir = $('meta[name="template-dir"]').attr("content"),
  winWidth,
  winHeight,
  headerHeight,
  availableHeight,
  marginShift = 700,
  transTime = 500,
  modalInit = !1,
  modalCount = 1,
  setOpen,
  $panelWrap = $("#panel-modal"),
  $panel = $("#panel"),
  $panelButton,
  panelData,
  panelHeight,
  panelPos,
  arrowAdjust,
  iOSbrowser =
    !!(
      /iPad|iPhone|iPod/.test(navigator.platform) ||
      ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)
    ) || iOSbrowser,
  scrollPos = 0,
  lastScrollPos = 0,
  pageScrollPos = 0,
  subnavLinks,
  subnavID,
  subnavSection,
  contentOffset,
  contentBot,
  currentSection,
  lastSection,
  secTopPos,
  secHeight,
  secPercent,
  secBot,
  footerLogo = document.querySelector("#logo-animation"),
  logoAnim;
function responsive(t) {
  (t = t || !1),
    modalInit || (scrollPos = -1),
    (winWidth = $.windowWidth()),
    (winHeight = $.windowHeight()),
    (headerHeight = $header.outerHeight()),
    (availableHeight = winHeight - headerHeight),
    $("#subnav-wrap").length
      ? (contentOffset = Math.floor($("#subnav-wrap").offset().top))
      : $("#post-content").length &&
        (contentOffset = Math.floor($("#post-content").offset().top)),
    (contentBot = $("#related-posts").length
      ? Math.floor($("#related-posts").offset().top - headerHeight)
      : Math.floor($("#site-footer").offset().top - headerHeight)),
    lazySizes.loader.checkElems(),
    $(".match-height").matchHeight({ byRow: !0, property: "height" }),
    t &&
      (winWidth < 1024 && !$("#main-menu #search-link").length
        ? $("#search-link").appendTo("#main-menu ul")
        : 1024 <= winWidth &&
          !$("#submenu #search-link").length &&
          $("#search-link").appendTo("#submenu"),
      $panelWrap.is(".show") && closeModal("#panel-modal"),
      isTouchscreen ||
        $(".full-bleed").each(function () {
          var t = $(this).outerHeight();
          $(this)
            .find(".hero-image")
            .css("height", t + 2);
        }),
      isTouchscreen &&
        !modalInit &&
        ($("body").css("min-height", availableHeight),
        $(".fullscreen:not(.post-hero)").css("height", availableHeight),
        $("#home-hero").css("height", winHeight),
        $(".post-hero:not(.collection-hero)").css(
          "height",
          availableHeight - 1.333 * headerHeight
        ),
        winWidth < marginShift
          ? $(".collection-hero").css("height", availableHeight)
          : $(".collection-hero").css(
              "height",
              availableHeight - 1.333 * headerHeight
            )),
      $(".image-ratio").length &&
        $(".image-ratio").each(function () {
          var t = $(this).data("ratio"),
            e = $(this).parent(".image-wrap").width(),
            i = $(this).parent(".image-wrap").height();
          t < i / e
            ? $(this)
                .height(e * t)
                .width("100%")
            : $(this)
                .width(i / t)
                .height("100%"),
            $(this).find(".fixed-mask").width($(this).width());
        }),
      iOSbrowser || balanceText.updateWatched());
}
function positionPanel(t) {
  scrollPos < 0 ||
    $panelWrap.is(".loading") ||
    ((arrowAdjust =
      winWidth < 1280
        ? ((panelPos = headerHeight),
          Math.floor(
            t.offset().top - scrollPos - headerHeight + t.height() / 2
          ))
        : ((panelHeight = $panel.height()),
          (panelPos = Math.floor(
            t.offset().top - panelHeight / 2 + t.height() / 2
          )),
          scrollPos < contentOffset &&
          scrollPos + winHeight < contentOffset + headerHeight + panelHeight
            ? ((panelPos = contentOffset + headerHeight),
              Math.floor(
                t.offset().top - contentOffset - headerHeight + t.height() / 2
              ))
            : winHeight - headerHeight < panelHeight
            ? (console.log("panel taller than viewport"),
              (panelPos = scrollPos + headerHeight),
              Math.floor(
                t.offset().top - scrollPos - headerHeight + t.height() / 2
              ))
            : panelPos - headerHeight < scrollPos
            ? ((panelPos = scrollPos + headerHeight),
              Math.floor(
                t.offset().top - scrollPos - headerHeight + t.height() / 2
              ))
            : scrollPos + winHeight < panelPos + panelHeight
            ? ((panelPos = scrollPos + winHeight - panelHeight),
              Math.floor(
                panelHeight -
                  (scrollPos + winHeight - t.offset().top - t.height() / 2)
              ))
            : contentBot + headerHeight < panelPos + panelHeight
            ? ((panelPos = contentBot - panelHeight + headerHeight),
              Math.floor(
                panelHeight -
                  (contentBot - t.offset().top - t.height() / 2) -
                  headerHeight
              ))
            : Math.floor(panelHeight / 2))),
    $panelWrap
      .css("top", panelPos)
      .find(".panel-arrow")
      .css("top", arrowAdjust));
}
"undefined" != typeof embedly &&
  (embedly("on", "card.rendered", function (t) {
    $(t).parents(".source-meta").length
      ? $(t)
          .parents("div.embedly-card")
          .hide()
          .next("button")
          .removeClass("hidden")
      : $(t).parents("#panel").length &&
        ($panelWrap.removeClass("loading"),
        $panelButton.removeClass("loading"),
        openModal("#panel-modal"));
  }),
  embedly("on", "card.resize", function () {
    positionPanel($panelButton);
  }));
var scroll =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function (t) {
    window.setTimeout(t, 1e3 / 60);
  };
function constant() {
  if (scrollPos == window.pageYOffset) return scroll(constant), !1;
  modalInit || ((scrollPos = window.pageYOffset), (lastScrollPos = scrollPos)),
    !isTouchscreen &&
    $fullbleedHero.length &&
    scrollPos < headerHeight &&
    $body.is('[data-loading="false"]')
      ? $header.is(".opaque") && $header.removeClass("opaque")
      : !$header.is(".opaque") &&
        $body.is('[data-loading="false"]') &&
        $header.addClass("opaque"),
    $("[data-video]:not([data-loaded])").length &&
      $("[data-video]:not([data-loaded])").each(function () {
        ($(this).parents(".slideshow").length &&
          !$(this).parents(".slick-slide").is(".slick-active")) ||
          ((secTopPos = $(this).offset().top),
          (secHeight = $(this).innerHeight()),
          (secBot = secTopPos + secHeight),
          secTopPos - winHeight <= scrollPos &&
            scrollPos <= secBot &&
            loadVideo($(this)));
      }),
    $("#subnav").length &&
      1024 <= winWidth &&
      (scrollPos >= contentBot - $("#subnav").outerHeight() - headerHeight &&
      $("#subnav").is(".toc")
        ? $("#subnav-wrap").removeClass("fixed").addClass("bottom")
        : contentOffset - headerHeight <= scrollPos
        ? ($("#subnav-wrap").addClass("fixed"),
          $("#subnav").is(".toc") && $("#subnav-wrap").removeClass("bottom"))
        : $("#subnav-wrap").removeClass("fixed bottom"),
      $(".subnav-section").each(function () {
        (secTopPos = $(this).offset().top),
          (secHeight = $(this).height()),
          (secBot = secTopPos + secHeight),
          (subnavSection = $(this).find(".page-anchor").attr("id")),
          secTopPos - 3 * headerHeight <= scrollPos &&
            scrollPos <= secBot - 3 * headerHeight &&
            !modalInit &&
            (currentSection = subnavSection) !== lastSection &&
            (subnavLinks.removeClass("current"),
            $('#subnav a[href="#' + subnavSection + '"]').addClass("current"),
            (lastSection = currentSection)),
          (($(this).is(".subnav-section:first") &&
            scrollPos < secTopPos - 3 * headerHeight) ||
            ($(this).is(".subnav-section:last") &&
              scrollPos >=
                contentBot - $("#subnav").outerHeight() - headerHeight &&
              !modalInit)) &&
            "" !== currentSection &&
            ((currentSection = ""),
            subnavLinks.removeClass("current"),
            (lastSection = currentSection));
      })),
    $("#current-refined-values .ais-current-refined-values--item").length &&
      (contentOffset - headerHeight <= scrollPos
        ? $("#subnav-wrap").addClass("fixed")
        : $("#subnav-wrap").removeClass("fixed")),
    isTouchscreen ||
      ($("#home-hero").length &&
        (0 == scrollPos
          ? ($("#home-hero-image")
              .show()
              .css({
                "clip-path": "circle(100% at 50% 50%)",
                "-webkit-clip-path": "circle(100% at 50% 50%)",
              }),
            $("#home-hero-text").css({ transform: "translateY(0)" }))
          : scrollPos < 0.375 * winHeight
          ? ((secPercent =
              100 -
              (secPercent = (scrollPos / (0.375 * winHeight)) * 100).toFixed(
                2
              )),
            $("#home-hero-image")
              .show()
              .css({
                "clip-path": "circle(" + secPercent + "% at 50% 50%)",
                "-webkit-clip-path": "circle(" + secPercent + "% at 50% 50%)",
              }),
            $("#home-hero-text").css({
              transform: "translateY(-" + 1.25 * scrollPos + "px)",
            }))
          : $("#home-hero-image").hide()),
      $(".full-bleed:has(.hero-image:not(.home-hero-image))").each(function () {
        (secTopPos = $(this).offset().top),
          (secHeight = $(this).height()),
          (secBot = secTopPos + secHeight),
          $body.is('[data-loading="false"]') &&
            (secTopPos - winHeight - headerHeight <= scrollPos &&
            scrollPos < secBot + headerHeight
              ? $(this).find(".hero-image").is(".hidden") &&
                $(this).find(".hero-image").removeClass("hidden")
              : $(this).find(".hero-image").is(".hidden") ||
                $(this).find(".hero-image").addClass("hidden"));
      })),
    isTouchscreen
      ? $(".post-hero, .banner-image").each(function () {
          $(this).removeClass("fixed-top fixed-bottom");
        })
      : $(".post-hero, .banner-image").each(function () {
          var t;
          (secTopPos = $(this).offset().top),
            (secHeight = $(this).height()),
            (secBot = secTopPos + secHeight),
            secTopPos - winHeight <= scrollPos && scrollPos < secBot
              ? (secTopPos - 1.333 * headerHeight <= scrollPos
                  ? $(this).is(".fixed-top") || $(this).addClass("fixed-top")
                  : $(this).is(".fixed-top") &&
                    $(this).removeClass("fixed-top"),
                scrollPos < secBot - winHeight + headerHeight / 3
                  ? $(this).is(".fixed-bottom") ||
                    $(this).addClass("fixed-bottom")
                  : $(this).is(".fixed-bottom") &&
                    $(this).removeClass("fixed-bottom"),
                $(this).is(".banner-image")
                  ? (secPercent =
                      ((scrollPos - secTopPos + winHeight - secHeight / 2) /
                        winHeight) *
                      100)
                  : ((secPercent =
                      (scrollPos / (winHeight - 3 * headerHeight)) * 100),
                    $(this)
                      .find(".slide-text")
                      .css({
                        transform: "translateY(" + scrollPos / 2 + "px)",
                      }),
                    50 <= secPercent
                      ? ((t =
                          (100 -
                            (scrollPos / (winHeight - 5 * headerHeight)) *
                              100) /
                          50),
                        $(this).find(".fade").css({ opacity: t }))
                      : $(this).find(".fade").css({ opacity: 1 })),
                (secPercent = secPercent.toFixed(1) - 100),
                $(this)
                  .find("img")
                  .show()
                  .css("transform", "translateY(" + secPercent + "px)"),
                $(this).find(".image-wrap").show())
              : ($(this).removeClass("fixed-top fixed-bottom"),
                modalInit ||
                  $(this)
                    .find("img")
                    .hide()
                    .css("transform", "translateY(0px)"),
                modalInit || $(this).find(".image-wrap").hide());
        }),
    $body.is("[data-loaded]") &&
      !isTouchscreen &&
      $("#site-footer").each(function () {
        (secTopPos = $(this).offset().top),
          (secHeight = $(this).height()),
          (secBot = secTopPos + secHeight),
          secTopPos - winHeight <= scrollPos && scrollPos < secBot
            ? logoAnim.play()
            : logoAnim.goToAndStop(0);
      }),
    scroll(constant);
}
document.addEventListener("touchstart", constant, { passive: !0 }),
  document.addEventListener("scroll", constant, { passive: !0 });
var menuOpen = !1,
  targetAnchor,
  targetHash,
  targetOffset,
  targetPage;
function openMenu() {
  $panelWrap.is(".show") && closeModal("#panel-modal"),
    modalInit && closeModal(),
    $body.addClass("menu-open"),
    (menuOpen = !0),
    openModal("#main-menu");
}
function closeMenu() {
  $body.removeClass("menu-open"), (menuOpen = !1), closeModal("#main-menu");
}
function anchorHook(t) {
  $(t)
    .find("a")
    .each(function () {
      var e = $(this).attr("href"),
        i = new RegExp("/" + window.location.host + "/");
      e &&
        $(this)
          .off("click")
          .on("click", function (t) {
            if (
              t.ctrlKey ||
              t.metaKey ||
              $(this).is('[target="_blank"]') ||
              $(this).is("[download]") ||
              -1 < e.indexOf("?s=") ||
              -1 < e.indexOf("/function/") ||
              -1 < e.indexOf("/system/") ||
              -1 < e.indexOf("/sector/") ||
              -1 < e.indexOf("/audience/") ||
              -1 < e.indexOf("/resource-type/") ||
              -1 < e.indexOf("/academic-subject/") ||
              -1 < e.indexOf("/academic-standards/")
            )
              return !0;
            if (
              (t.preventDefault(),
              -1 < e.indexOf(".jpg") ||
                -1 < e.indexOf(".jpeg") ||
                -1 < e.indexOf(".png") ||
                -1 < e.indexOf(".gif"))
            ) {
              if (winWidth < 769 && isTouchscreen) return !1;
              t.preventDefault(),
                (openSlide = (
                  $(this).find("img").is("[data-id]")
                    ? $(
                        '#modal-slideshow [data-id="' +
                          $(this).find("img").attr("data-id") +
                          '"]'
                      ).parents(".slide")
                    : $(
                        '#modal-slideshow [src="' + $(this).attr("href") + '"]'
                      ).parents(".slick-slide")
                ).index()),
                $("#modal-slideshow").attr("data-open-slide", openSlide),
                openModal("#slideshow-modal");
            } else {
              if ("#" == e) return !1;
              if (-1 < e.indexOf("#go-back"))
                closeModal("#error-modal"),
                  $("#content, footer").fadeIn(transTime);
              else {
                if (-1 < e.indexOf("#"))
                  return (
                    (targetPage = e.split("#")[0]),
                    !(targetHash = e.split("#")[1]) ||
                      !i.test(this.href) ||
                      ((targetAnchor = $("#" + targetHash)),
                      -1 < targetPage.indexOf("?") &&
                        (targetPage = targetPage.split("?")[0]),
                      -1 <
                        (currentState =
                          -1 < currentState.indexOf("?")
                            ? currentState.split("?")[0]
                            : currentState).indexOf("#") &&
                        (currentState = currentState.split("#")[0]),
                      targetAnchor.is(".modal")
                        ? (t.preventDefault(), openModal(targetAnchor), !1)
                        : (targetAnchor.length && "" == targetPage) ||
                          (targetAnchor.length &&
                            null !== targetPage &&
                            targetPage == currentState)
                        ? (t.preventDefault(),
                          menuOpen && closeMenu(),
                          closeModal(),
                          $("#post-toggles").is(".active") &&
                            $(".toggle-block.open")
                              .slideUp(transTime / 2)
                              .removeClass("open"),
                          (targetOffset = Math.ceil(targetAnchor.offset().top)),
                          (stateData = {
                            path: currentState,
                            scrollTop: targetOffset,
                          }),
                          history.replaceState(stateData, pageName, e),
                          history.pushState(stateData, pageName, e),
                          $htmlBody
                            .stop()
                            .animate(
                              { scrollTop: targetOffset },
                              2 * transTime
                            ),
                          !1)
                        : void (
                            targetPage &&
                            targetPage !== currentState &&
                            (t.preventDefault(), loadWrap(e))
                          ))
                  );
                if (
                  e == currentState ||
                  (-1 < currentState.indexOf("#") &&
                    e == currentState.split("#")[0]) ||
                  (-1 < currentState.indexOf("?") &&
                    e == currentState.split("?")[0] &&
                    -1 == currentState.indexOf("?s"))
                )
                  return (
                    t.preventDefault(),
                    menuOpen && $("#menu-button").trigger("click"),
                    closeModal(),
                    $htmlBody.animate({ scrollTop: 0 }, 3 * transTime),
                    window.history.pushState("", "", e),
                    !1
                  );
                if (i.test(this.href) && !$(this).is(".post-edit-link"))
                  loadWrap(e);
                else {
                  if (-1 != e.indexOf("javascript")) return !0;
                  t.stopPropagation(), window.open(this.href, "_blank");
                }
              }
            }
          });
    });
}
function closeModal(t) {
  "#main-menu" !== t && (t ? $(t) : $(".modal")).removeClass("show"),
    "#panel-modal" == t && $body.removeClass("panel-open"),
    "#panel-modal" !== t &&
      ((modalInit = !1),
      clearTimeout(setOpen),
      $(".modal.show").length ||
        ($("#content, footer").css({
          "-webkit-transform": "none",
          "-moz-transform": "none",
          transform: "none",
        }),
        $body.removeClass("modal-open"),
        $document.scrollTop(scrollPos),
        responsive(!1)));
}
function openModal(t) {
  "#panel-modal" == t
    ? ($body.addClass("panel-open"),
      anchorHook("#panel"),
      positionPanel($panelButton),
      $panel.find(".modal-close").on("click", function () {
        closeModal("#panel-modal");
      }))
    : $panelWrap.is(".show") && closeModal("#panel-modal"),
    "#panel-modal" !== t &&
      ((modalInit = !0),
      "#slideshow-modal" == t
        ? (initSlideshow($("#modal-slideshow")),
          $("#modal-slideshow")
            .find(".slick-dots .slick-active button")
            .focus(),
          responsive(!0))
        : "#timer-modal" == t && $header.addClass("opaque"),
      $(".modal.show").length || (scrollPos = $document.scrollTop())),
    "#main-menu" !== t &&
      $(t).addClass("show").attr("data-modal-count", modalCount),
    "#panel-modal" !== t &&
      (setOpen = setTimeout(function () {
        $("#content, footer").css({
          "-webkit-transform": "translateY(-" + scrollPos + "px)",
          "-moz-transform": "translateY(-" + scrollPos + "px)",
          transform: "translateY(-" + scrollPos + "px)",
        }),
          $body.addClass("modal-open"),
          lazySizes.loader.checkElems(),
          responsive(!1);
      }, transTime)),
    modalCount++;
}
function accordion() {
  $("dl.accordion").each(function () {
    var t = $(this),
      e = t.find("dt button");
    e.length
      ? (t.find("dd").hide(),
        e.on("click keypress", function (t) {
          t.preventDefault();
          var t = $(this).parent("dt"),
            t;
          t.is(".open")
            ? t
                .removeClass("open")
                .next("dd")
                .slideUp(transTime / 2)
                .removeClass("open")
            : (t
                .addClass("open")
                .next("dd")
                .slideDown(transTime)
                .addClass("open"),
              (t = t.offset().top - 1.5 * headerHeight),
              $("#section-nav").length &&
                (t -= 2 * $("#section-nav").outerHeight()),
              $htmlBody.animate({ scrollTop: t }, 2 * transTime));
        }))
      : t.remove();
  });
}
function loadVideo(t) {
  var e;
  t.length &&
    ((e = t.data("video")),
    t.is("[data-hd]") &&
      (540 < winHeight || 960 < winWidth) &&
      (e = t.data("hd")),
    t.append('<source src="' + e + '" type="video/mp4" />'),
    t.is("[autoplay]") && t.addClass("playing").get(0).play(),
    t.attr("data-loaded", "true"));
}
function initAudio() {
  $("[data-listen]").on("click", function () {
    var t = $(this);
    t.addClass("playing").next("audio")[0].play(),
      t.next("audio").on("ended", function () {
        t.removeClass("playing").parent().focus();
      });
  });
}
function cleanUp() {
  $('iframe[src*="player.vimeo.com"]').each(function () {
    var t = $(this).attr("src");
    t && -1 < t.indexOf("?") && (t = t.split("?")[0]),
      (t += "?portrait=0&badge=0&byline=0&color=fc9947"),
      $(this).attr("src", t);
  }),
    $("p, strong, h3, .wrap").each(function () {
      var t = $(this);
      0 == t.html().replace(/\s|&nbsp;/g, "").length && t.remove();
    }),
    $("h2, h3, q, .intro-text p, .link.flexible a")
      .not(".widont")
      .each(function () {
        var t = $(this).html();
        3 < t.split(" ").length &&
          $(this)
            .addClass("widont")
            .html(
              t.replace(
                /\s([^\s<]{0,9})\s*$/,
                '<span class="nbsp">&nbsp;</span>$1'
              )
            );
      });
}
function buildModalSlideshow() {
  $("#modal-slideshow").replaceWith(
    '<div class="slideshow fullscreen-slideshow" id="modal-slideshow" data-title="modal slideshow"></div>'
  ),
    $('a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".gif"]').each(
      function () {
        $(this).is('[target="_blank"]') ||
          ($(this).is("[data-image-index]")
            ? $(this)
                .attr("data-modal-image", "")
                .parents("[data-slide-index]")
                .clone()
            : $(
                '<div class="slide"><div class="slide-wrap"><div class="image-wrap no-ratio"><img class="lazyload" data-src="' +
                  $(this).attr("href") +
                  '" /></div></div></div>'
              )
          ).appendTo("#modal-slideshow");
      }
    ),
    $("#modal-slideshow")
      .find(".slide")
      .addClass("wrap full-wrap flush-top flush-bottom")
      .find(".slide-image")
      .removeClass("slide-image object-cover object-height")
      .find("[data-ratio]")
      .addClass("image-ratio")
      .find("a[data-modal-image]")
      .removeAttr("href")
      .find("img")
      .addClass("lazyload")
      .removeClass("lazyloaded");
}
var slideSpeed,
  lazyMethod = "progressive",
  slideFade,
  centerStyle,
  openSlide,
  videoURL,
  streamURL,
  videoID,
  videoStartTime,
  player;
function initSlideshow(t) {
  (t.is("#modal-slideshow") && !0 !== modalInit) ||
    t.is(".single-image") ||
    (t.is(".slick-initialized") ||
      ((centerStyle = !0),
      (slideSpeed = 8 * transTime),
      (slideFade = !isTouchscreen),
      (openSlide = t.is("[data-open-slide]")
        ? parseInt(t.attr("data-open-slide"))
        : 0),
      t.is(".post-carousel")
        ? isTouchscreen ||
          ((centerStyle = !1),
          t.slick({
            dots: !1,
            autoplaySpeed: slideSpeed,
            pauseOnHover: !1,
            infinite: centerStyle,
            speed: transTime,
            autoplay: !1,
            fade: !1,
            cssEase: "linear",
            centerMode: centerStyle,
            arrows: !0,
            prevArrow: t.next(".slick-prev"),
            nextArrow: t.next(".slick-prev").next(".slick-next"),
            lazyLoad: lazyMethod,
            focusOnSelect: !1,
            rows: 0,
            slidesToShow: 4,
            initialSlide: openSlide,
            swipeToSlide: !1,
            draggable: !1,
            responsive: [
              { breakpoint: 1025, settings: { slidesToShow: 3 } },
              { breakpoint: 769, settings: { slidesToShow: 2 } },
              { breakpoint: 450, settings: { slidesToShow: 1 } },
            ],
          }),
          1025 <= winWidth
            ? t.slick("slickSetOption", "slidesToScroll", 4, !0)
            : 769 <= winWidth
            ? t.slick("slickSetOption", "slidesToScroll", 3, !0)
            : 450 <= winWidth
            ? t.slick("slickSetOption", "slidesToScroll", 2, !0)
            : t.slick("slickSetOption", "slidesToScroll", 1, !0),
          responsive(!1))
        : (t.is(".large-carousel")
            ? ((centerStyle = !1),
              t.slick({
                dots: !1,
                autoplaySpeed: slideSpeed,
                pauseOnHover: !1,
                infinite: centerStyle,
                speed: transTime,
                autoplay: !1,
                fade: !1,
                cssEase: "linear",
                centerMode: centerStyle,
                arrows: !0,
                prevArrow: t.next(".slick-prev"),
                nextArrow: t.next(".slick-prev").next(".slick-next"),
                lazyLoad: lazyMethod,
                focusOnSelect: !1,
                rows: 0,
                slidesToShow: 2,
                initialSlide: openSlide,
                swipeToSlide: !0,
                draggable: !0,
                responsive: [
                  { breakpoint: marginShift, settings: { slidesToShow: 1 } },
                ],
              }),
              marginShift <= winWidth
                ? t.slick("slickSetOption", "slidesToScroll", 2, !0)
                : t.slick("slickSetOption", "slidesToScroll", 1, !0))
            : (t.parent(".fullscreen:not(.modal)").length &&
                t.on("init", function () {
                  iOSbrowser || balanceText.updateWatched(),
                    t.on("click swipe", function () {
                      $htmlBody
                        .stop()
                        .animate(
                          { scrollTop: $(this).offset().top - headerHeight },
                          transTime
                        );
                    });
                }),
              t.is(".feature-slideshow") &&
                !iOSbrowser &&
                t.on("init", function () {
                  iOSbrowser || balanceText.updateWatched();
                }),
              t
                .slick({
                  dots: !0,
                  autoplaySpeed: slideSpeed,
                  pauseOnHover: !1,
                  infinite: !0,
                  speed: transTime,
                  autoplay: !1,
                  fade: slideFade,
                  cssEase: "linear",
                  arrows: !0,
                  prevArrow: t.next(".slick-prev"),
                  nextArrow: t.next(".slick-prev").next(".slick-next"),
                  lazyLoad: lazyMethod,
                  focusOnSelect: !0,
                  initialSlide: openSlide,
                  adaptiveHeight: !1,
                  rows: 0,
                })
                .on("beforeChange", function (t, e, i, s) {
                  $(this)
                    .find(
                      '.slick-slide:not([data-slick-index="' +
                        i +
                        '"]):not([data-slick-index="' +
                        s +
                        '"]) .slide-image'
                    )
                    .addClass("hidden"),
                    $(this)
                      .find(
                        '[data-slick-index="' + s + '"] .slide-image.hidden'
                      )
                      .removeClass("hidden");
                })),
          responsive(!1))),
    t.is("[data-open-slide]") &&
      t.slick("slickGoTo", parseInt(t.attr("data-open-slide")), !0),
    !isTouchscreen &&
      t.next(".slick-prev").length &&
      (t.next(".slick-prev").appendTo(t), t.next(".slick-next").appendTo(t)));
}
function processYouTube(t, e) {
  t
    ? ($("#" + e)
        .attr("data-player", "youtube")
        .attr("data-videoID", t),
      $("#" + e).next("[get-thumbnail]").length &&
        (console.log("processyoutube()", t),
        $("#" + e)
          .next()
          .html(
            '<img src="//i2.ytimg.com/vi/' +
              t +
              '/hqdefault.jpg" alt="video thumbnail" />'
          )))
    : $("#" + e).css("background-image", "none");
}
function setupThumb(t, e) {
  var i;
  return (
    -1 < t.indexOf("t=")
      ? ((videoStartTime = t.split("t=")[1].split("&")[0]),
        $("#" + e).attr("data-start-time", videoStartTime))
      : $("#" + e).attr("data-start-time", "0"),
    -1 < t.indexOf("youtube.com")
      ? processYouTube((i = t.split("v=")[1].split("&")[0].split("?")[0]), e)
      : -1 < t.indexOf("youtu.be")
      ? processYouTube((i = t.split("youtu.be/")[1].split("?")[0]), e)
      : void (-1 < t.indexOf("vimeo.com")
          ? (t.match(/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/)
              ? (i = t.split("/")[3])
              : t.match(/^vimeo.com\/channels\/[\d\w]+#[0-9]+/)
              ? (i = t.split("#")[1])
              : t.match(/vimeo.com\/groups\/[\d\w]+\/videos\/[0-9]+/)
              ? (i = t.split("/")[4])
              : $("#" + e).css("background-image", "none"),
            $("#" + e)
              .attr("data-player", "vimeo")
              .attr("data-videoID", i),
            $("#" + e).next("[get-thumbnail]").length &&
              (console.log("vimeo needs thumbnail", i),
              $.getJSON(
                "//www.vimeo.com/api/v2/video/" + i + ".json?callback=?",
                { format: "json" },
                function (t) {
                  console.log("getJSON vimeo", i),
                    $("#" + e)
                      .next()
                      .html(
                        '<img src="' +
                          t[0].thumbnail_large +
                          '" alt="video thumbnail" />'
                      );
                }
              ).fail(function () {
                console.log("getJSON vimeo fail", i),
                  $.getJSON(
                    "//vimeo.com/api/oembed.json?url=" + t,
                    function (t) {
                      console.log("getJSON vimeo fallback", i),
                        $("#" + e)
                          .next()
                          .html(
                            '<img src="' +
                              t.thumbnail_url +
                              '" alt="video thumbnail" />'
                          );
                    }
                  );
              })))
          : $("#" + e).css("background-image", "none"))
  );
}
function playVideo(t, e, i, s) {
  var r = "";
  if ("vimeo" == i)
    (r =
      "https://player.vimeo.com/video/" +
      e +
      "?autoplay=1&byline=0&color=c81a17&title=0&portrait=0"),
      t.addClass("playing");
  else {
    if ("youtube" != i) return !1;
    (r =
      "https://www.youtube.com/embed/" +
      e +
      "?rel=0&amp;showinfo=0&amp;autoplay=true&amp;start=" +
      s),
      t.addClass("playing");
  }
  t.find("iframe").length ||
    (t
      .css("background-image", "none")
      .append(
        '<iframe width="640" height="360" src="' +
          r +
          '" frameborder="0" allowfullscreen></iframe>'
      ),
    t.fitVids());
}
function an_search() {
  var a = instantsearch({
    appId: algolia.application_id,
    apiKey: algolia.search_api_key,
    indexName: algolia.indices.searchable_posts.name,
    stalledSearchDelay: 200,
    urlSync: {
      mapping: { q: "s", p: "page" },
      trackedParameters: ["query", "page", "attribute:*"],
      useHash: !(window.history && "pushState" in window.history),
      threshold: 400,
    },
    searchParameters: { facetingAfterDistinct: !0 },
    searchFunction: function (t) {
      t.search();
    },
  });
  let i;
  a.addWidget(
    instantsearch.widgets.searchBox({
      container: "#algolia-search-box",
      placeholder: "Enter keyword",
      wrapInput: !1,
      poweredBy: !1,
      queryHook(t, e) {
        clearTimeout(i), (i = setTimeout(() => e(t), 500));
      },
    })
  );
  var t = $("#post-template").html(),
    e = $("#no-results").html();
  function n(t, e) {
    $("#current-term-description").html("");
    for (var i = 0; i < t.length; i++)
      if (t[i].name == e) {
        var s = t[i].description;
        return (
          "" !== s &&
            ((s = (s = s.replace(/--/g, "—")).replace(/\n/g, "<br />")),
            $("#current-term-description").html("<p>" + s + "</p>")),
          0
        );
      }
  }
  function s() {
    setTimeout(function () {
      var t, e, i, s, r;
      (s = (t = a).helper.getHierarchicalFacetBreadcrumb(
        "taxonomies_hierarchical.function.lvl0"
      )),
        (r = t.helper.getHierarchicalFacetBreadcrumb(
          "taxonomies_hierarchical.system.lvl0"
        )),
        (t = t.helper.getHierarchicalFacetBreadcrumb("post_type_label")),
        ("object" == typeof s && 0 < s.length) ||
        ("object" == typeof r && 0 < r.length)
          ? ((i =
              0 < s.length
                ? ((e = "function"), s[s.length - 1])
                : ((e = "system"), r[r.length - 1])),
            $("#algolia-results").removeClass("full-width"),
            $("#search-terms, #current-term").show(),
            $("#current-term").children(".wrap").removeClass("text-wrap wide"),
            $("#current-term-title").html(
              "<small>" + e + '</small><h3 class="serif">' + i + "</h3>"
            ),
            "function" == e && "undefined" != typeof function_terms
              ? n(function_terms, i)
              : "system" == e &&
                "undefined" != typeof system_terms &&
                n(system_terms, i))
          : "object" == typeof t && 0 < t.length
          ? ("Collections" == t[0]
              ? ($("#algolia-results").addClass("full-width"),
                $("#current-term")
                  .show()
                  .children(".wrap")
                  .addClass("text-wrap wide"),
                $("#search-terms").hide())
              : ($("#algolia-results").removeClass("full-width"),
                $("#current-term")
                  .show()
                  .children(".wrap")
                  .removeClass("text-wrap wide"),
                $("#search-terms").show()),
            $("#current-term-description").html(""),
            $("#current-term-title").html(
              '<small>&nbsp;</small><h3 class="serif">' + t[0] + "</h3>"
            ),
            (i = $('[data-post-type-description="' + t[0] + '"]').html()),
            $("#current-term-description").html(i))
          : ($("#algolia-results").addClass("full-width"),
            $("#search-terms, #current-term").hide(),
            $("#current-term-title, #current-term-description").html("")),
        $("#current-term-description p").on("click", function () {
          $(this).toggleClass("expand");
        }),
        "object" == typeof t && 0 < t.length
          ? ($("[data-help-type]").hide(),
            winWidth < 768 && $("#filter-button").show(),
            "Collections" == t[0]
              ? ($("#help-preview-subtitle").text("Collection creator"),
                $("#filter-button").hide())
              : "Biological Strategies" == t[0]
              ? ($(
                  '[data-help-type="function"], [data-help-type="system"]'
                ).show(),
                $("#help-preview-subtitle").text("Name of organism"))
              : "Innovations" == t[0]
              ? ($(
                  '[data-help-type="function"], [data-help-type="sector"]'
                ).show(),
                $("#help-preview-subtitle").text("Innovator"))
              : "Resources" == t[0] &&
                ($(
                  '[data-help-type="audience"], [data-help-type="resource-type"], [data-help-type="subject"]'
                ).show(),
                $("#help-preview-subtitle").text("Content creator")))
          : ($("[data-help-type]").show(),
            $("#help-preview-subtitle").text("Contextual Subtitle")),
        $("div[data-help].show").length &&
          $(
            '.help-button[data-help="' +
              $("div[data-help].show").attr("data-help") +
              '"]'
          ).trigger("click"),
        anchorHook("#algolia-results"),
        (scrollPos = -1);
    }, 1);
  }
  a.addWidget(
    instantsearch.widgets.infiniteHits({
      container: "#algolia-results",
      hitsPerPage: 24,
      templates: { empty: e, item: t },
    })
  ),
    a.addWidget(
      instantsearch.widgets.menu({
        container: "#post-types",
        attributeName: "post_type_label",
        sortBy: ["count:desc", "name:asc"],
        templates: {
          item: '<a data-value="{{name}}" class="post-type-select" href="{{url}}">{{name}} <span class="ais-menu--count">{{count}}</span></a>',
        },
      })
    ),
    a.addWidget(
      instantsearch.widgets.currentRefinedValues({
        container: "#current-refined-values",
        clearAll: "after",
      })
    ),
    a.addWidget(
      instantsearch.widgets.hierarchicalMenu({
        container: "#terms-function",
        attributes: [
          "taxonomies_hierarchical.function.lvl0",
          "taxonomies_hierarchical.function.lvl1",
          "taxonomies_hierarchical.function.lvl2",
        ],
        sortBy: ["name:asc"],
        limit: 100,
        templates: { header: "<h4>Functions</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.hierarchicalMenu({
        container: "#terms-system",
        attributes: [
          "taxonomies_hierarchical.system.lvl0",
          "taxonomies_hierarchical.system.lvl1",
          "taxonomies_hierarchical.system.lvl2",
          "taxonomies_hierarchical.system.lvl3",
          "taxonomies_hierarchical.system.lvl4",
          "taxonomies_hierarchical.system.lvl5",
        ],
        sortBy: ["name:asc"],
        limit: 100,
        templates: {
          header: "<h4>Living Systems</h4>",
          item: '<a data-count="{{count}}" class="ais-hierarchical-menu--link" href="{{url}}">{{name}} <span title="filter {{count}} posts">{{count}}</span></a>',
        },
      })
    ),
    a.addWidget(
      instantsearch.widgets.refinementList({
        container: "#terms-sector",
        attributeName: "taxonomies.sector",
        sortBy: ["name:asc", "count:desc"],
        operator: "or",
        limit: 42,
        templates: { header: "<h4>Sectors</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.refinementList({
        container: "#terms-resource-type",
        attributeName: "taxonomies.resource-type",
        operator: "or",
        sortBy: ["name:asc", "count:desc"],
        templates: { header: "<h4>Resource Types</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.refinementList({
        container: "#terms-audience",
        attributeName: "taxonomies.audience",
        sortBy: ["count:desc", "name:asc"],
        operator: "or",
        templates: { header: "<h4>Grade Levels</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.refinementList({
        container: "#terms-subject",
        attributeName: "taxonomies.academic-subject",
        sortBy: ["name:asc"],
        operator: "or",
        templates: { header: "<h4>Subject Areas</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.refinementList({
        container: "#terms-standard",
        attributeName: "taxonomies.academic-standards",
        sortBy: ["name:asc"],
        operator: "or",
        templates: { header: "<h4>Academic Standards</h4>" },
      })
    ),
    a.addWidget(
      instantsearch.widgets.analytics({
        pushFunction: function (t, e, i) {
          dataLayer.push({
            event: "search",
            "Search Query": e.query,
            "Facet Parameters": t,
            "Number of Hits": i.nbHits,
          });
        },
      })
    ),
    (a.templatesConfig.helpers.relevantContent = function () {
      var t,
        e = [
          "content",
          "title6",
          "title5",
          "title4",
          "title3",
          "title2",
          "title1",
        ],
        i;
      for (i in e)
        if (((t = e[i]), 0 < this._highlightResult[t].matchedWords.length))
          return this._snippetResult[t].value;
      return this._snippetResult[e[0]].value;
    }),
    a.start(),
    $("#search-terms, #current-term").hide(),
    s(),
    a.helper.on("change", function () {
      s();
    }),
    $("#ais-wrapper form").on("submit", function () {
      return !1;
    });
}
function initialize(t) {
  var e, i, s, r;
  ($fullbleedHero = $("#content > .full-bleed:first-child")).length &&
    $header.removeClass("opaque"),
    responsive(!1),
    accordion(),
    initAudio(),
    cleanUp(),
    anchorHook("body"),
    $("[data-src]:not(.lazyload)")
      .addClass("lazyload")
      .each(function () {
        $(this).is("[data-srcset]") && $(this).attr("data-sizes", "auto");
      }),
    lazySizes.loader.checkElems(),
    $("#subnav").length
      ? ($body.addClass("has-subnav"),
        (subnavLinks = $("#subnav").find("a")).each(function () {
          (subnavID = $(this).attr("href")),
            $(subnavID)
              .parent()
              .data("id", subnavID)
              .addClass("subnav-section");
        }))
      : $body.removeClass("has-subnav"),
    $("#home-hero").length &&
      ($("#home-hero img").on("click", function () {
        $htmlBody.animate(
          {
            scrollTop:
              0.375 * winHeight +
              2 * headerHeight +
              $("#home-intro").outerHeight() / 2,
          },
          3 * transTime
        );
      }),
      $("#question-ends").length &&
        ends.length &&
        $("#question-ends").typed({
          strings: ends,
          typeSpeed: 50,
          startDelay: 3e3,
          backDelay: 1e3,
          backSpeed: 10,
          loop: !0,
        })),
    $(".details").hide(),
    $(".details-button").on("click", function () {
      $(this).is(".open")
        ? $(this)
            .removeClass("open")
            .parent(".title-wrap")
            .next(".details")
            .slideUp(transTime / 2)
            .removeClass("open")
        : $(this)
            .addClass("open")
            .parent(".title-wrap")
            .next(".details")
            .slideDown(transTime)
            .addClass("open");
    }),
    $(".video-wrap").length &&
      $(".video-wrap").each(function () {
        $(this)
          .find(".play-toggle")
          .on("click", function () {
            $(this).siblings("video").length
              ? ((r = $(this).siblings("video").get(0)),
                $(this).siblings(".poster").length &&
                  $(this).siblings(".poster").fadeOut(transTime),
                $(this).parents(".video-wrap").is(".playing.paused")
                  ? $(this).parents(".video-wrap").removeClass("paused")
                  : ($(".video-wrap.playing").length &&
                      $(".video-wrap.playing")
                        .removeClass("playing paused")
                        .children("video")
                        .get(0)
                        .pause(),
                    $(this)
                      .parents(".video-wrap")
                      .removeClass("paused")
                      .addClass("playing")),
                r.play(),
                $(this)
                  .siblings("video")
                  .on("click", function () {
                    $(this).parents(".video-wrap").addClass("paused"),
                      r.pause();
                  }),
                $(this)
                  .siblings(".view-full")
                  .on("click", function () {
                    screenfull.enabled && screenfull.toggle(r);
                  }),
                $(this)
                  .siblings("video")
                  .on("ended", function () {
                    $(this).parents(".video-wrap").addClass("paused"),
                      $(this).siblings(".poster").length &&
                        $(this).siblings(".poster").fadeIn(transTime),
                      setTimeout(function () {
                        $(this)
                          .parents(".video-wrap")
                          .removeClass("playing paused");
                      }, 2 * transTime);
                  }))
              : ((e = $(this).parents(".video-wrap")),
                (i = $(this).attr("data-videoID")),
                (s = $(this).attr("data-player")),
                (videoStartTime = $(this).attr("data-start-time")),
                playVideo(e, i, s, videoStartTime),
                e.addClass("playing"),
                $(this).siblings(".poster").length &&
                  $(this).siblings(".poster").fadeOut(transTime));
          });
      }),
    $("#post-toggles").length &&
      ($(".toggle-block").hide(),
      $("#post-toggles button:not(.help-button)").each(function () {
        var t = $(this).attr("id").split("-")[1],
          e = $("#post-" + t);
        e.length || $(this).hide(),
          $(this).on("click", function () {
            var t = $(this);
            $panelWrap.is(".show") && closeModal("#panel-modal"),
              t.hasClass("open")
                ? (t.removeClass("open"),
                  e.slideUp(transTime / 2).removeClass("open"),
                  $("#post-toggles").removeClass("active"))
                : $("#post-toggles").is(".active")
                ? ($(".toggle-block.open")
                    .slideUp(transTime / 2)
                    .removeClass("open"),
                  setTimeout(function () {
                    $("#post-toggles button").removeClass("open"),
                      t.addClass("open"),
                      e.slideDown(transTime).addClass("open"),
                      $htmlBody.animate(
                        { scrollTop: t.offset().top - headerHeight + 1 },
                        transTime
                      ),
                      responsive(!0);
                  }, transTime / 2))
                : (t.addClass("open"),
                  $("#post-toggles").addClass("active"),
                  $htmlBody.animate(
                    { scrollTop: t.offset().top - headerHeight + 1 },
                    transTime
                  ),
                  e.slideDown(transTime).addClass("open"),
                  responsive(!0));
          });
      }),
      $(".post-hero, .post-content, .search-panel, .search-results").on(
        "click",
        function () {
          $(".toggle-block")
            .slideUp(transTime / 2)
            .removeClass("open"),
            $("#post-toggles button").removeClass("open"),
            $("#post-toggles").removeClass("active");
        }
      )),
    $("[data-videoURL]").length &&
      $("[data-videoURL]").each(function () {
        (videoURL = $(this).attr("data-videoURL")),
          (i = $(this).attr("id")),
          setupThumb(videoURL, i),
          $(this).removeAttr("data-videoURL");
      }),
    $("[data-term]").each(function () {
      ($(this).parent("a").length ||
        $(this).parent("[data-exclusion]").length) &&
        $(this).replaceWith($(this).text());
    }),
    $("[data-show-panel]").on("click", function () {
      var e;
      ($panelButton = $(this)).is("[data-term]")
        ? ((panelData = $("#term-panel")),
          (e = $panelButton.attr("data-term")),
          panelData.attr("data-current") != e || $panelWrap.is(".show")
            ? ($panelButton.addClass("loading"),
              $panelWrap.is(".show") && closeModal("#panel-modal"),
              $.ajax(e)
                .done(function (t) {
                  panelData
                    .attr("data-current", e)
                    .find(".panel-content")
                    .html($(t).find("#term-definition")),
                    $panel.html(panelData.html()),
                    openModal("#panel-modal"),
                    $panelButton.removeClass("loading"),
                    $("#panel-modal [data-listen]").length && initAudio();
                })
                .fail(function (t, e) {
                  panelData
                    .attr("data-current", "error")
                    .find(".panel-content")
                    .html(
                      "<p>Unable to load term definition. Please try again.</p>"
                    ),
                    $panel.html(panelData.html()),
                    openModal("#panel-modal"),
                    $panelButton.removeClass("loading");
                }))
            : openModal("#panel-modal"))
        : $panelButton.is("[data-show-related]")
        ? ((panelData = $panelButton
            .parent(".button-wrap")
            .next("[data-panel-content]")),
          $panelWrap.is(".show")
            ? (closeModal("#panel-modal"),
              setTimeout(function () {
                $panel.html(panelData.html()), openModal("#panel-modal");
              }, transTime / 2))
            : ($panel.html(panelData.html()), openModal("#panel-modal")))
        : $panelButton.is("[data-show-reference]") &&
          ((panelData = $panelButton.next("[data-panel-content]")),
          $panelWrap.is(".show")
            ? (closeModal("#panel-modal"),
              setTimeout(function () {
                $panel.html(panelData.html()),
                  $("#panel .panel-content")
                    .attr("data-current", "embedly")
                    .html($("#panel textarea").val()),
                  $panelButton.addClass("loading"),
                  $panelWrap.addClass("loading");
              }, transTime / 2))
            : ($panel.html(panelData.html()),
              $("#panel .panel-content")
                .attr("data-current", "embedly")
                .html($("#panel textarea").val()),
              $panelButton.addClass("loading"),
              $panelWrap.addClass("loading")));
    }),
    $("#algolia-search-box").length &&
      (an_search(),
      "undefined" != typeof search_prompts &&
        $("#algolia-search-box").typed({
          strings: search_prompts,
          typeSpeed: 50,
          startDelay: 3e3,
          backDelay: 1e3,
          backSpeed: 10,
          shuffle: !1,
          loop: !1,
          attr: "placeholder",
        }),
      $("#filter-button").on("click", function () {
        $body.addClass("filters-open"),
          $("#search-terms")
            .addClass("show")
            .find(".modal-close:first")
            .on("click keypress", function () {
              $("#search-terms").removeClass("show"),
                $body.removeClass("filters-open");
            });
      }),
      $(".help-button").on("click", function () {
        var t = $(this).attr("data-help");
        $(this).is(".selected")
          ? ($(this).removeClass("selected"),
            $('div[data-help="' + t + '"]').removeClass("show"))
          : ($("div[data-help].show").length &&
              $(
                '.help-button[data-help="' +
                  $("div[data-help].show").attr("data-help") +
                  '"]'
              ).trigger("click"),
            $(this).addClass("selected"),
            $('div[data-help="' + t + '"]').addClass("show"));
      }),
      winWidth < 768 && $("footer").hide()),
    isTouchscreen &&
      $(".post-carousel")
        .prepend('<div class="scrim"></div>')
        .append('<div class="scrim"></div>'),
    $body.attr("data-loading", "false"),
    $("#content, footer").fadeIn(transTime / 2),
    iOSbrowser || balanceText($(".balance-text"), { watch: !0 }),
    iOSbrowser && $(".balance-text").not("[style]").attr("style", "opacity: 1"),
    $(".wrap").fitVids(),
    objectFitImages(),
    buildModalSlideshow(),
    $(".slideshow").each(function () {
      initSlideshow($(this));
    }),
    $(".image-credit-icon").on("click", function () {
      $(this).prev(".image-credit").toggleClass("show");
    }),
    $(".modal-close").on("click", function () {
      closeModal($(this).parents(".modal"));
    }),
    $("*:not(input):not(select):not(textarea)").on(
      "click touchend",
      function () {
        $(this).blur();
      }
    ),
    responsive(!0),
    isPopState
      ? ($htmlBody.scrollTop(pageScrollPos), (scrollPos = pageScrollPos - 1))
      : t &&
        -1 < t.indexOf("#") &&
        (-1 <
          (targetHash = !(targetHash = window.location.hash)
            ? "#" + t.split("#")[1]
            : targetHash).indexOf("?") &&
          (targetHash = targetHash.split("?")[0]),
        (targetAnchor = $(targetHash)),
        $(targetHash).length && $htmlBody.scrollTop(targetAnchor.offset().top));
}
var pageName = $("#content").attr("data-pagename"),
  stateData,
  attempts = 0,
  isPopState = !1,
  currentState = window.location.href,
  resizeTimer;
function loadWrap(i) {
  $ajaxWrap.focus(),
    "Win16" == platform ||
    "Windows 95" == platform ||
    "Win95" == platform ||
    "Windows_95" == platform ||
    "Windows 98" == platform ||
    "Win98" == platform ||
    "Windows NT 5.0" == platform ||
    "Windows 2000" == platform ||
    "Windows NT 5.1" == platform ||
    "Windows XP" == platform ||
    "Windows NT 5.2" == platform
      ? (window.location.href = i)
      : (isPopState || (pageScrollPos = $document.scrollTop()),
        $panelWrap.is(".show") && closeModal("#panel-modal"),
        $body.attr("data-loading", "true"),
        $("#content, footer").fadeOut(transTime / 2),
        $header.find("a").removeClass("current"),
        menuOpen && closeMenu(),
        modalInit && closeModal(),
        setTimeout(function () {
          $htmlBody.scrollTop(0),
            (scrollPos = -1),
            $.ajax(i)
              .done(function (t) {
                $ajaxWrap.html($(t).find("#content")),
                  (pageName = $("#content").attr("data-pagename")),
                  (document.title = pageName),
                  (currentState = i),
                  isPopState
                    ? (isPopState = !1)
                    : ((stateData = { path: i, scrollTop: scrollPos }),
                      history.pushState(stateData, pageName, i)),
                  initialize(i),
                  pageName &&
                    -1 < pageName.indexOf("—") &&
                    (pageName = pageName.split(" — ")[1]),
                  $('#main-menu a[href="' + currentState + '"]').length
                    ? $('#main-menu a[href="' + currentState + '"]').addClass(
                        "current"
                      )
                    : -1 < currentState.indexOf("?s=") &&
                      $("#search-link").addClass("current"),
                  (attempts = 0);
              })
              .fail(function (t, e) {
                ++attempts < 7
                  ? setTimeout(loadWrap(i), 1e3)
                  : openModal("#error-modal");
              });
        }, transTime / 2));
}
jQuery(document).ready(function (i) {
  iOSbrowser &&
    ((isTouchscreen = !0),
    i("html").attr("data-touch-events", "").attr("data-ios-browser", "")),
    (stateData = { path: currentState, scrollTop: targetOffset }),
    history.replaceState(stateData, pageName, currentState),
    responsive(!1),
    i("#menu-button").on("click", function () {
      (menuOpen ? closeMenu : openMenu)();
    }),
    i("#logo").on("click", function () {
      if (
        (menuOpen && closeMenu(),
        modalInit && closeModal(),
        i("#home-hero").length)
      )
        return $htmlBody.animate({ scrollTop: 0 }, 2 * transTime), !1;
    }),
    i("#content").on("click", function () {
      menuOpen && i("#menu-button").trigger("click");
    }),
    i("#logo-animation").hover(
      function () {
        $body.is("[data-loaded]") && logoAnim.play();
      },
      function () {
        $body.is("[data-loaded]") && logoAnim.goToAndStop(0);
      }
    );
  var t = i("html").attr("lang");
  -1 < t.indexOf("-") && (t = t.split("-")[0]),
    i("#language-select select").on("change", function () {
      var t =
        !!i(this).find("option:selected").attr("data-gt-href") &&
        i(this).find("option:selected").attr("data-gt-href");
      t && (window.location.href = t);
    }),
    i("#timer-modal").length &&
      !Cookies.get("timer-modal") &&
      (setTimeout(function () {
        openModal("#timer-modal"),
          i(".admin-edit").length ||
            Cookies.set("timer-modal", "seen", { expires: 30 });
      }, 1e3 * i("#timer-modal").data("timeout")),
      i("#timer-modal form").submit(function (t) {
        t.preventDefault(),
          i('#timer-modal [type="submit"]')
            .val("Sending...")
            .attr("disabled", "true");
        var t = i("#timer-modal form").serialize();
        i.ajax({
          type: "POST",
          url: i("#timer-modal form").attr("action"),
          data: t,
        })
          .done(function () {
            i('#timer-modal [type="submit"]').replaceWith(
              "<p>Submission sent. Thank you!</p>"
            ),
              setTimeout(function () {
                closeModal("#timer-modal");
              }, 1e3);
          })
          .fail(function (t) {
            i('#timer-modal [type="submit"]')
              .val("Please Try Again")
              .removeAttr("disabled");
          });
      })),
    (window.onkeydown = function (t) {
      var e, t;
      27 == t.keyCode &&
        (i(".modal.show").length
          ? ((e = 1),
            i(".modal.show").each(function () {
              i(this).attr("data-modal-count") > e &&
                (e = i(this).attr("data-modal-count"));
            }),
            (t = i('[data-modal-count="' + e + '"]').attr("id"))
              ? (closeModal("#" + t),
                "error-modal" == t &&
                  (i("#content, footer").fadeIn(transTime),
                  $body.attr("data-loading", "false")))
              : closeModal())
          : i(".toggle-block.open").length
          ? i("#post-content").trigger("click")
          : menuOpen
          ? closeMenu()
          : i("div[data-help].show").length &&
            i(
              '.help-button[data-help="' +
                i("div[data-help].show").attr("data-help") +
                '"]'
            ).trigger("click"));
    }),
    initialize(currentState);
}),
  window.addEventListener("popstate", function (t) {
    isPopState
      ? null !== t.state && (window.location = t.state.path)
      : (t.preventDefault(),
        (isPopState = !0),
        null !== t.state &&
          (loadWrap(t.state.path), console.log("popstate", t.state.path)));
  }),
  window.addEventListener("resize", function () {
    document.body.classList.add("pause-animations"),
      clearTimeout(resizeTimer),
      (resizeTimer = setTimeout(function () {
        document.body.classList.remove("pause-animations"),
          ((!isTouchscreen || $window.width() === winWidth) && isTouchscreen) ||
            responsive(!0);
      }, transTime / 2));
  }),
  window.addEventListener("orientationchange", function () {
    responsive(!0);
  }),
  window.addEventListener("touchstart", function () {
    $("html").attr("data-touch-events", ""),
      (isTouchscreen = !0),
      console.log("touch detected");
  }),
  $window.bind("load", function () {
    "undefined" != typeof lottie &&
      (logoAnim = lottie.loadAnimation({
        wrapper: footerLogo,
        animType: "svg",
        loop: !1,
        autoplay: !1,
        preserveAspectRatio: "xMidYMid meet",
        animationData: animation_data,
      })),
      $body.attr("data-loaded", "");
  });
