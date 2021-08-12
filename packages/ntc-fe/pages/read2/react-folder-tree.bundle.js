/*! For license information please see react-folder-tree.bundle.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], t)
    : 'object' == typeof exports
    ? (exports.FolderTree = t(require('react')))
    : (e.FolderTree = t(e.react));
})(this, function (e) {
  return (() => {
    var t = {
        265: (e, t, r) => {
          'use strict';
          r.r(t),
            r.d(t, {
              ReactFolderTreeCssModule: () => Fe,
              default: () => At,
              testData: () => St,
            });
          var n = r(297),
            o = r.n(n),
            a = r(697),
            i = r.n(a),
            c = r(864),
            s = r(774),
            l = r.n(s);
          const u = function (e) {
              function t(e, n, s, l, d) {
                for (
                  var p,
                    h,
                    m,
                    g,
                    S,
                    k = 0,
                    C = 0,
                    A = 0,
                    O = 0,
                    x = 0,
                    T = 0,
                    N = (m = p = 0),
                    M = 0,
                    D = 0,
                    z = 0,
                    F = 0,
                    L = s.length,
                    B = L - 1,
                    H = '',
                    q = '',
                    G = '',
                    U = '';
                  M < L;

                ) {
                  if (
                    ((h = s.charCodeAt(M)),
                    M === B &&
                      0 !== C + O + A + k &&
                      (0 !== C && (h = 47 === C ? 10 : 47),
                      (O = A = k = 0),
                      L++,
                      B++),
                    0 === C + O + A + k)
                  ) {
                    if (
                      M === B &&
                      (0 < D && (H = H.replace(f, '')), 0 < H.trim().length)
                    ) {
                      switch (h) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                          break;
                        default:
                          H += s.charAt(M);
                      }
                      h = 59;
                    }
                    switch (h) {
                      case 123:
                        for (
                          p = (H = H.trim()).charCodeAt(0), m = 1, F = ++M;
                          M < L;

                        ) {
                          switch ((h = s.charCodeAt(M))) {
                            case 123:
                              m++;
                              break;
                            case 125:
                              m--;
                              break;
                            case 47:
                              switch ((h = s.charCodeAt(M + 1))) {
                                case 42:
                                case 47:
                                  e: {
                                    for (N = M + 1; N < B; ++N)
                                      switch (s.charCodeAt(N)) {
                                        case 47:
                                          if (
                                            42 === h &&
                                            42 === s.charCodeAt(N - 1) &&
                                            M + 2 !== N
                                          ) {
                                            M = N + 1;
                                            break e;
                                          }
                                          break;
                                        case 10:
                                          if (47 === h) {
                                            M = N + 1;
                                            break e;
                                          }
                                      }
                                    M = N;
                                  }
                              }
                              break;
                            case 91:
                              h++;
                            case 40:
                              h++;
                            case 34:
                            case 39:
                              for (; M++ < B && s.charCodeAt(M) !== h; );
                          }
                          if (0 === m) break;
                          M++;
                        }
                        switch (
                          ((m = s.substring(F, M)),
                          0 === p &&
                            (p = (H = H.replace(u, '').trim()).charCodeAt(0)),
                          p)
                        ) {
                          case 64:
                            switch (
                              (0 < D && (H = H.replace(f, '')),
                              (h = H.charCodeAt(1)))
                            ) {
                              case 100:
                              case 109:
                              case 115:
                              case 45:
                                D = n;
                                break;
                              default:
                                D = R;
                            }
                            if (
                              ((F = (m = t(n, D, m, h, d + 1)).length),
                              0 < $ &&
                                ((S = c(
                                  3,
                                  m,
                                  (D = r(R, H, z)),
                                  n,
                                  E,
                                  I,
                                  F,
                                  h,
                                  d,
                                  l
                                )),
                                (H = D.join('')),
                                void 0 !== S &&
                                  0 === (F = (m = S.trim()).length) &&
                                  ((h = 0), (m = ''))),
                              0 < F)
                            )
                              switch (h) {
                                case 115:
                                  H = H.replace(w, i);
                                case 100:
                                case 109:
                                case 45:
                                  m = H + '{' + m + '}';
                                  break;
                                case 107:
                                  (m =
                                    (H = H.replace(y, '$1 $2')) +
                                    '{' +
                                    m +
                                    '}'),
                                    (m =
                                      1 === j || (2 === j && a('@' + m, 3))
                                        ? '@-webkit-' + m + '@' + m
                                        : '@' + m);
                                  break;
                                default:
                                  (m = H + m),
                                    112 === l && ((q += m), (m = ''));
                              }
                            else m = '';
                            break;
                          default:
                            m = t(n, r(n, H, z), m, l, d + 1);
                        }
                        (G += m),
                          (m = z = D = N = p = 0),
                          (H = ''),
                          (h = s.charCodeAt(++M));
                        break;
                      case 125:
                      case 59:
                        if (
                          1 <
                          (F = (H = (0 < D ? H.replace(f, '') : H).trim())
                            .length)
                        )
                          switch (
                            (0 === N &&
                              ((p = H.charCodeAt(0)),
                              45 === p || (96 < p && 123 > p)) &&
                              (F = (H = H.replace(' ', ':')).length),
                            0 < $ &&
                              void 0 !==
                                (S = c(1, H, n, e, E, I, q.length, l, d, l)) &&
                              0 === (F = (H = S.trim()).length) &&
                              (H = '\0\0'),
                            (p = H.charCodeAt(0)),
                            (h = H.charCodeAt(1)),
                            p)
                          ) {
                            case 0:
                              break;
                            case 64:
                              if (105 === h || 99 === h) {
                                U += H + s.charAt(M);
                                break;
                              }
                            default:
                              58 !== H.charCodeAt(F - 1) &&
                                (q += o(H, p, h, H.charCodeAt(2)));
                          }
                        (z = D = N = p = 0), (H = ''), (h = s.charCodeAt(++M));
                    }
                  }
                  switch (h) {
                    case 13:
                    case 10:
                      47 === C
                        ? (C = 0)
                        : 0 === 1 + p &&
                          107 !== l &&
                          0 < H.length &&
                          ((D = 1), (H += '\0')),
                        0 < $ * _ && c(0, H, n, e, E, I, q.length, l, d, l),
                        (I = 1),
                        E++;
                      break;
                    case 59:
                    case 125:
                      if (0 === C + O + A + k) {
                        I++;
                        break;
                      }
                    default:
                      switch ((I++, (g = s.charAt(M)), h)) {
                        case 9:
                        case 32:
                          if (0 === O + k + C)
                            switch (x) {
                              case 44:
                              case 58:
                              case 9:
                              case 32:
                                g = '';
                                break;
                              default:
                                32 !== h && (g = ' ');
                            }
                          break;
                        case 0:
                          g = '\\0';
                          break;
                        case 12:
                          g = '\\f';
                          break;
                        case 11:
                          g = '\\v';
                          break;
                        case 38:
                          0 === O + C + k && ((D = z = 1), (g = '\f' + g));
                          break;
                        case 108:
                          if (0 === O + C + k + P && 0 < N)
                            switch (M - N) {
                              case 2:
                                112 === x &&
                                  58 === s.charCodeAt(M - 3) &&
                                  (P = x);
                              case 8:
                                111 === T && (P = T);
                            }
                          break;
                        case 58:
                          0 === O + C + k && (N = M);
                          break;
                        case 44:
                          0 === C + A + O + k && ((D = 1), (g += '\r'));
                          break;
                        case 34:
                        case 39:
                          0 === C && (O = O === h ? 0 : 0 === O ? h : O);
                          break;
                        case 91:
                          0 === O + C + A && k++;
                          break;
                        case 93:
                          0 === O + C + A && k--;
                          break;
                        case 41:
                          0 === O + C + k && A--;
                          break;
                        case 40:
                          if (0 === O + C + k) {
                            if (0 === p)
                              switch (2 * x + 3 * T) {
                                case 533:
                                  break;
                                default:
                                  p = 1;
                              }
                            A++;
                          }
                          break;
                        case 64:
                          0 === C + A + O + k + N + m && (m = 1);
                          break;
                        case 42:
                        case 47:
                          if (!(0 < O + k + A))
                            switch (C) {
                              case 0:
                                switch (2 * h + 3 * s.charCodeAt(M + 1)) {
                                  case 235:
                                    C = 47;
                                    break;
                                  case 220:
                                    (F = M), (C = 42);
                                }
                                break;
                              case 42:
                                47 === h &&
                                  42 === x &&
                                  F + 2 !== M &&
                                  (33 === s.charCodeAt(F + 2) &&
                                    (q += s.substring(F, M + 1)),
                                  (g = ''),
                                  (C = 0));
                            }
                      }
                      0 === C && (H += g);
                  }
                  (T = x), (x = h), M++;
                }
                if (0 < (F = q.length)) {
                  if (
                    ((D = n),
                    0 < $ &&
                      void 0 !== (S = c(2, q, D, e, E, I, F, l, d, l)) &&
                      0 === (q = S).length)
                  )
                    return U + q + G;
                  if (((q = D.join(',') + '{' + q + '}'), 0 != j * P)) {
                    switch ((2 !== j || a(q, 2) || (P = 0), P)) {
                      case 111:
                        q = q.replace(b, ':-moz-$1') + q;
                        break;
                      case 112:
                        q =
                          q.replace(v, '::-webkit-input-$1') +
                          q.replace(v, '::-moz-$1') +
                          q.replace(v, ':-ms-input-$1') +
                          q;
                    }
                    P = 0;
                  }
                }
                return U + q + G;
              }
              function r(e, t, r) {
                var o = t.trim().split(m);
                t = o;
                var a = o.length,
                  i = e.length;
                switch (i) {
                  case 0:
                  case 1:
                    var c = 0;
                    for (e = 0 === i ? '' : e[0] + ' '; c < a; ++c)
                      t[c] = n(e, t[c], r).trim();
                    break;
                  default:
                    var s = (c = 0);
                    for (t = []; c < a; ++c)
                      for (var l = 0; l < i; ++l)
                        t[s++] = n(e[l] + ' ', o[c], r).trim();
                }
                return t;
              }
              function n(e, t, r) {
                var n = t.charCodeAt(0);
                switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
                  case 38:
                    return t.replace(g, '$1' + e.trim());
                  case 58:
                    return e.trim() + t.replace(g, '$1' + e.trim());
                  default:
                    if (0 < 1 * r && 0 < t.indexOf('\f'))
                      return t.replace(
                        g,
                        (58 === e.charCodeAt(0) ? '' : '$1') + e.trim()
                      );
                }
                return e + t;
              }
              function o(e, t, r, n) {
                var i = e + ';',
                  c = 2 * t + 3 * r + 4 * n;
                if (944 === c) {
                  e = i.indexOf(':', 9) + 1;
                  var s = i.substring(e, i.length - 1).trim();
                  return (
                    (s = i.substring(0, e).trim() + s + ';'),
                    1 === j || (2 === j && a(s, 1)) ? '-webkit-' + s + s : s
                  );
                }
                if (0 === j || (2 === j && !a(i, 1))) return i;
                switch (c) {
                  case 1015:
                    return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i;
                  case 951:
                    return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i;
                  case 963:
                    return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i;
                  case 1009:
                    if (100 !== i.charCodeAt(4)) break;
                  case 969:
                  case 942:
                    return '-webkit-' + i + i;
                  case 978:
                    return '-webkit-' + i + '-moz-' + i + i;
                  case 1019:
                  case 983:
                    return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i;
                  case 883:
                    if (45 === i.charCodeAt(8)) return '-webkit-' + i + i;
                    if (0 < i.indexOf('image-set(', 11))
                      return i.replace(x, '$1-webkit-$2') + i;
                    break;
                  case 932:
                    if (45 === i.charCodeAt(4))
                      switch (i.charCodeAt(5)) {
                        case 103:
                          return (
                            '-webkit-box-' +
                            i.replace('-grow', '') +
                            '-webkit-' +
                            i +
                            '-ms-' +
                            i.replace('grow', 'positive') +
                            i
                          );
                        case 115:
                          return (
                            '-webkit-' +
                            i +
                            '-ms-' +
                            i.replace('shrink', 'negative') +
                            i
                          );
                        case 98:
                          return (
                            '-webkit-' +
                            i +
                            '-ms-' +
                            i.replace('basis', 'preferred-size') +
                            i
                          );
                      }
                    return '-webkit-' + i + '-ms-' + i + i;
                  case 964:
                    return '-webkit-' + i + '-ms-flex-' + i + i;
                  case 1023:
                    if (99 !== i.charCodeAt(8)) break;
                    return (
                      '-webkit-box-pack' +
                      (s = i
                        .substring(i.indexOf(':', 15))
                        .replace('flex-', '')
                        .replace('space-between', 'justify')) +
                      '-webkit-' +
                      i +
                      '-ms-flex-pack' +
                      s +
                      i
                    );
                  case 1005:
                    return p.test(i)
                      ? i.replace(d, ':-webkit-') + i.replace(d, ':-moz-') + i
                      : i;
                  case 1e3:
                    switch (
                      ((t = (s = i.substring(13).trim()).indexOf('-') + 1),
                      s.charCodeAt(0) + s.charCodeAt(t))
                    ) {
                      case 226:
                        s = i.replace(S, 'tb');
                        break;
                      case 232:
                        s = i.replace(S, 'tb-rl');
                        break;
                      case 220:
                        s = i.replace(S, 'lr');
                        break;
                      default:
                        return i;
                    }
                    return '-webkit-' + i + '-ms-' + s + i;
                  case 1017:
                    if (-1 === i.indexOf('sticky', 9)) break;
                  case 975:
                    switch (
                      ((t = (i = e).length - 10),
                      (c =
                        (s = (33 === i.charCodeAt(t) ? i.substring(0, t) : i)
                          .substring(e.indexOf(':', 7) + 1)
                          .trim()).charCodeAt(0) +
                        (0 | s.charCodeAt(7))))
                    ) {
                      case 203:
                        if (111 > s.charCodeAt(8)) break;
                      case 115:
                        i = i.replace(s, '-webkit-' + s) + ';' + i;
                        break;
                      case 207:
                      case 102:
                        i =
                          i.replace(
                            s,
                            '-webkit-' + (102 < c ? 'inline-' : '') + 'box'
                          ) +
                          ';' +
                          i.replace(s, '-webkit-' + s) +
                          ';' +
                          i.replace(s, '-ms-' + s + 'box') +
                          ';' +
                          i;
                    }
                    return i + ';';
                  case 938:
                    if (45 === i.charCodeAt(5))
                      switch (i.charCodeAt(6)) {
                        case 105:
                          return (
                            (s = i.replace('-items', '')),
                            '-webkit-' +
                              i +
                              '-webkit-box-' +
                              s +
                              '-ms-flex-' +
                              s +
                              i
                          );
                        case 115:
                          return (
                            '-webkit-' +
                            i +
                            '-ms-flex-item-' +
                            i.replace(C, '') +
                            i
                          );
                        default:
                          return (
                            '-webkit-' +
                            i +
                            '-ms-flex-line-pack' +
                            i.replace('align-content', '').replace(C, '') +
                            i
                          );
                      }
                    break;
                  case 973:
                  case 989:
                    if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4))
                      break;
                  case 931:
                  case 953:
                    if (!0 === O.test(e))
                      return 115 ===
                        (s = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                        ? o(
                            e.replace('stretch', 'fill-available'),
                            t,
                            r,
                            n
                          ).replace(':fill-available', ':stretch')
                        : i.replace(s, '-webkit-' + s) +
                            i.replace(s, '-moz-' + s.replace('fill-', '')) +
                            i;
                    break;
                  case 962:
                    if (
                      ((i =
                        '-webkit-' +
                        i +
                        (102 === i.charCodeAt(5) ? '-ms-' + i : '') +
                        i),
                      211 === r + n &&
                        105 === i.charCodeAt(13) &&
                        0 < i.indexOf('transform', 10))
                    )
                      return (
                        i
                          .substring(0, i.indexOf(';', 27) + 1)
                          .replace(h, '$1-webkit-$2') + i
                      );
                }
                return i;
              }
              function a(e, t) {
                var r = e.indexOf(1 === t ? ':' : '{'),
                  n = e.substring(0, 3 !== t ? r : 10);
                return (
                  (r = e.substring(r + 1, e.length - 1)),
                  N(2 !== t ? n : n.replace(A, '$1'), r, t)
                );
              }
              function i(e, t) {
                var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                return r !== t + ';'
                  ? r.replace(k, ' or ($1)').substring(4)
                  : '(' + t + ')';
              }
              function c(e, t, r, n, o, a, i, c, s, u) {
                for (var f, d = 0, p = t; d < $; ++d)
                  switch ((f = T[d].call(l, e, p, r, n, o, a, i, c, s, u))) {
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                      break;
                    default:
                      p = f;
                  }
                if (p !== t) return p;
              }
              function s(e) {
                return (
                  void 0 !== (e = e.prefix) &&
                    ((N = null),
                    e
                      ? 'function' != typeof e
                        ? (j = 1)
                        : ((j = 2), (N = e))
                      : (j = 0)),
                  s
                );
              }
              function l(e, r) {
                var n = e;
                if (
                  (33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < $)
                ) {
                  var o = c(-1, r, n, n, E, I, 0, 0, 0, 0);
                  void 0 !== o && 'string' == typeof o && (r = o);
                }
                var a = t(R, n, r, 0, 0);
                return (
                  0 < $ &&
                    void 0 !== (o = c(-2, a, n, n, E, I, a.length, 0, 0, 0)) &&
                    (a = o),
                  (P = 0),
                  (I = E = 1),
                  a
                );
              }
              var u = /^\0+/g,
                f = /[\0\r\f]/g,
                d = /: */g,
                p = /zoo|gra/,
                h = /([,: ])(transform)/g,
                m = /,\r+?/g,
                g = /([\t\r\n ])*\f?&/g,
                y = /@(k\w+)\s*(\S*)\s*/,
                v = /::(place)/g,
                b = /:(read-only)/g,
                S = /[svh]\w+-[tblr]{2}/,
                w = /\(\s*(.*)\s*\)/g,
                k = /([\s\S]*?);/g,
                C = /-self|flex-/g,
                A = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                O = /stretch|:\s*\w+\-(?:conte|avail)/,
                x = /([^-])(image-set\()/,
                I = 1,
                E = 1,
                P = 0,
                j = 1,
                R = [],
                T = [],
                $ = 0,
                N = null,
                _ = 0;
              return (
                (l.use = function e(t) {
                  switch (t) {
                    case void 0:
                    case null:
                      $ = T.length = 0;
                      break;
                    default:
                      if ('function' == typeof t) T[$++] = t;
                      else if ('object' == typeof t)
                        for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                      else _ = 0 | !!t;
                  }
                  return e;
                }),
                (l.set = s),
                void 0 !== e && s(e),
                l
              );
            },
            f = {
              animationIterationCount: 1,
              borderImageOutset: 1,
              borderImageSlice: 1,
              borderImageWidth: 1,
              boxFlex: 1,
              boxFlexGroup: 1,
              boxOrdinalGroup: 1,
              columnCount: 1,
              columns: 1,
              flex: 1,
              flexGrow: 1,
              flexPositive: 1,
              flexShrink: 1,
              flexNegative: 1,
              flexOrder: 1,
              gridRow: 1,
              gridRowEnd: 1,
              gridRowSpan: 1,
              gridRowStart: 1,
              gridColumn: 1,
              gridColumnEnd: 1,
              gridColumnSpan: 1,
              gridColumnStart: 1,
              msGridRow: 1,
              msGridRowSpan: 1,
              msGridColumn: 1,
              msGridColumnSpan: 1,
              fontWeight: 1,
              lineHeight: 1,
              opacity: 1,
              order: 1,
              orphans: 1,
              tabSize: 1,
              widows: 1,
              zIndex: 1,
              zoom: 1,
              WebkitLineClamp: 1,
              fillOpacity: 1,
              floodOpacity: 1,
              stopOpacity: 1,
              strokeDasharray: 1,
              strokeDashoffset: 1,
              strokeMiterlimit: 1,
              strokeOpacity: 1,
              strokeWidth: 1,
            };
          var d =
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
          const p =
            ((h = {}),
            function (e) {
              return (
                void 0 === h[e] &&
                  (h[e] =
                    ((t = e),
                    d.test(t) ||
                      (111 === t.charCodeAt(0) &&
                        110 === t.charCodeAt(1) &&
                        t.charCodeAt(2) < 91))),
                h[e]
              );
              var t;
            });
          var h,
            m = r(679),
            g = r.n(m);
          function y() {
            return (y =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          var v = function (e, t) {
              for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
                r.push(t[n], e[n + 1]);
              return r;
            },
            b = function (e) {
              return (
                null !== e &&
                'object' == typeof e &&
                '[object Object]' ===
                  (e.toString
                    ? e.toString()
                    : Object.prototype.toString.call(e)) &&
                !(0, c.typeOf)(e)
              );
            },
            S = Object.freeze([]),
            w = Object.freeze({});
          function k(e) {
            return 'function' == typeof e;
          }
          function C(e) {
            return e.displayName || e.name || 'Component';
          }
          function A(e) {
            return e && 'string' == typeof e.styledComponentId;
          }
          var O =
              ('undefined' != typeof process &&
                (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
              'data-styled',
            x = 'undefined' != typeof window && 'HTMLElement' in window,
            I = Boolean(
              'boolean' == typeof SC_DISABLE_SPEEDY
                ? SC_DISABLE_SPEEDY
                : 'undefined' != typeof process &&
                  void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
                  '' !== process.env.REACT_APP_SC_DISABLE_SPEEDY
                ? 'false' !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
                  process.env.REACT_APP_SC_DISABLE_SPEEDY
                : 'undefined' != typeof process &&
                  void 0 !== process.env.SC_DISABLE_SPEEDY &&
                  '' !== process.env.SC_DISABLE_SPEEDY &&
                  'false' !== process.env.SC_DISABLE_SPEEDY &&
                  process.env.SC_DISABLE_SPEEDY
            ),
            E = {};
          function P(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            throw new Error(
              'An error occurred. See https://git.io/JUIaE#' +
                e +
                ' for more information.' +
                (r.length > 0 ? ' Args: ' + r.join(', ') : '')
            );
          }
          var j = (function () {
              function e(e) {
                (this.groupSizes = new Uint32Array(512)),
                  (this.length = 512),
                  (this.tag = e);
              }
              var t = e.prototype;
              return (
                (t.indexOfGroup = function (e) {
                  for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
                  return t;
                }),
                (t.insertRules = function (e, t) {
                  if (e >= this.groupSizes.length) {
                    for (var r = this.groupSizes, n = r.length, o = n; e >= o; )
                      (o <<= 1) < 0 && P(16, '' + e);
                    (this.groupSizes = new Uint32Array(o)),
                      this.groupSizes.set(r),
                      (this.length = o);
                    for (var a = n; a < o; a++) this.groupSizes[a] = 0;
                  }
                  for (
                    var i = this.indexOfGroup(e + 1), c = 0, s = t.length;
                    c < s;
                    c++
                  )
                    this.tag.insertRule(i, t[c]) && (this.groupSizes[e]++, i++);
                }),
                (t.clearGroup = function (e) {
                  if (e < this.length) {
                    var t = this.groupSizes[e],
                      r = this.indexOfGroup(e),
                      n = r + t;
                    this.groupSizes[e] = 0;
                    for (var o = r; o < n; o++) this.tag.deleteRule(r);
                  }
                }),
                (t.getGroup = function (e) {
                  var t = '';
                  if (e >= this.length || 0 === this.groupSizes[e]) return t;
                  for (
                    var r = this.groupSizes[e],
                      n = this.indexOfGroup(e),
                      o = n + r,
                      a = n;
                    a < o;
                    a++
                  )
                    t += this.tag.getRule(a) + '/*!sc*/\n';
                  return t;
                }),
                e
              );
            })(),
            R = new Map(),
            T = new Map(),
            $ = 1,
            N = function (e) {
              if (R.has(e)) return R.get(e);
              for (; T.has($); ) $++;
              var t = $++;
              return R.set(e, t), T.set(t, e), t;
            },
            _ = function (e) {
              return T.get(e);
            },
            M = function (e, t) {
              R.set(e, t), T.set(t, e);
            },
            D = 'style[' + O + '][data-styled-version="5.2.1"]',
            z = new RegExp(
              '^' + O + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
            ),
            F = function (e, t, r) {
              for (var n, o = r.split(','), a = 0, i = o.length; a < i; a++)
                (n = o[a]) && e.registerName(t, n);
            },
            L = function (e, t) {
              for (
                var r = t.innerHTML.split('/*!sc*/\n'),
                  n = [],
                  o = 0,
                  a = r.length;
                o < a;
                o++
              ) {
                var i = r[o].trim();
                if (i) {
                  var c = i.match(z);
                  if (c) {
                    var s = 0 | parseInt(c[1], 10),
                      l = c[2];
                    0 !== s &&
                      (M(l, s), F(e, l, c[3]), e.getTag().insertRules(s, n)),
                      (n.length = 0);
                  } else n.push(i);
                }
              }
            },
            B = function () {
              return r.nc;
            },
            H = function (e) {
              var t = document.head,
                r = e || t,
                n = document.createElement('style'),
                o = (function (e) {
                  for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                    var n = t[r];
                    if (n && 1 === n.nodeType && n.hasAttribute(O)) return n;
                  }
                })(r),
                a = void 0 !== o ? o.nextSibling : null;
              n.setAttribute(O, 'active'),
                n.setAttribute('data-styled-version', '5.2.1');
              var i = B();
              return i && n.setAttribute('nonce', i), r.insertBefore(n, a), n;
            },
            q = (function () {
              function e(e) {
                var t = (this.element = H(e));
                t.appendChild(document.createTextNode('')),
                  (this.sheet = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (
                      var t = document.styleSheets, r = 0, n = t.length;
                      r < n;
                      r++
                    ) {
                      var o = t[r];
                      if (o.ownerNode === e) return o;
                    }
                    P(17);
                  })(t)),
                  (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  try {
                    return this.sheet.insertRule(t, e), this.length++, !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (t.deleteRule = function (e) {
                  this.sheet.deleteRule(e), this.length--;
                }),
                (t.getRule = function (e) {
                  var t = this.sheet.cssRules[e];
                  return void 0 !== t && 'string' == typeof t.cssText
                    ? t.cssText
                    : '';
                }),
                e
              );
            })(),
            G = (function () {
              function e(e) {
                var t = (this.element = H(e));
                (this.nodes = t.childNodes), (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  if (e <= this.length && e >= 0) {
                    var r = document.createTextNode(t),
                      n = this.nodes[e];
                    return (
                      this.element.insertBefore(r, n || null), this.length++, !0
                    );
                  }
                  return !1;
                }),
                (t.deleteRule = function (e) {
                  this.element.removeChild(this.nodes[e]), this.length--;
                }),
                (t.getRule = function (e) {
                  return e < this.length ? this.nodes[e].textContent : '';
                }),
                e
              );
            })(),
            U = (function () {
              function e(e) {
                (this.rules = []), (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  return (
                    e <= this.length &&
                    (this.rules.splice(e, 0, t), this.length++, !0)
                  );
                }),
                (t.deleteRule = function (e) {
                  this.rules.splice(e, 1), this.length--;
                }),
                (t.getRule = function (e) {
                  return e < this.length ? this.rules[e] : '';
                }),
                e
              );
            })(),
            V = x,
            W = { isServer: !x, useCSSOMInjection: !I },
            Y = (function () {
              function e(e, t, r) {
                void 0 === e && (e = w),
                  void 0 === t && (t = {}),
                  (this.options = y({}, W, {}, e)),
                  (this.gs = t),
                  (this.names = new Map(r)),
                  !this.options.isServer &&
                    x &&
                    V &&
                    ((V = !1),
                    (function (e) {
                      for (
                        var t = document.querySelectorAll(D),
                          r = 0,
                          n = t.length;
                        r < n;
                        r++
                      ) {
                        var o = t[r];
                        o &&
                          'active' !== o.getAttribute(O) &&
                          (L(e, o),
                          o.parentNode && o.parentNode.removeChild(o));
                      }
                    })(this));
              }
              e.registerId = function (e) {
                return N(e);
              };
              var t = e.prototype;
              return (
                (t.reconstructWithOptions = function (t, r) {
                  return (
                    void 0 === r && (r = !0),
                    new e(
                      y({}, this.options, {}, t),
                      this.gs,
                      (r && this.names) || void 0
                    )
                  );
                }),
                (t.allocateGSInstance = function (e) {
                  return (this.gs[e] = (this.gs[e] || 0) + 1);
                }),
                (t.getTag = function () {
                  return (
                    this.tag ||
                    (this.tag =
                      ((r = (t = this.options).isServer),
                      (n = t.useCSSOMInjection),
                      (o = t.target),
                      (e = r ? new U(o) : n ? new q(o) : new G(o)),
                      new j(e)))
                  );
                  var e, t, r, n, o;
                }),
                (t.hasNameForId = function (e, t) {
                  return this.names.has(e) && this.names.get(e).has(t);
                }),
                (t.registerName = function (e, t) {
                  if ((N(e), this.names.has(e))) this.names.get(e).add(t);
                  else {
                    var r = new Set();
                    r.add(t), this.names.set(e, r);
                  }
                }),
                (t.insertRules = function (e, t, r) {
                  this.registerName(e, t), this.getTag().insertRules(N(e), r);
                }),
                (t.clearNames = function (e) {
                  this.names.has(e) && this.names.get(e).clear();
                }),
                (t.clearRules = function (e) {
                  this.getTag().clearGroup(N(e)), this.clearNames(e);
                }),
                (t.clearTag = function () {
                  this.tag = void 0;
                }),
                (t.toString = function () {
                  return (function (e) {
                    for (
                      var t = e.getTag(), r = t.length, n = '', o = 0;
                      o < r;
                      o++
                    ) {
                      var a = _(o);
                      if (void 0 !== a) {
                        var i = e.names.get(a),
                          c = t.getGroup(o);
                        if (void 0 !== i && 0 !== c.length) {
                          var s = O + '.g' + o + '[id="' + a + '"]',
                            l = '';
                          void 0 !== i &&
                            i.forEach(function (e) {
                              e.length > 0 && (l += e + ',');
                            }),
                            (n +=
                              '' + c + s + '{content:"' + l + '"}/*!sc*/\n');
                        }
                      }
                    }
                    return n;
                  })(this);
                }),
                e
              );
            })(),
            X = /(a)(d)/gi,
            K = function (e) {
              return String.fromCharCode(e + (e > 25 ? 39 : 97));
            };
          function J(e) {
            var t,
              r = '';
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = K(t % 52) + r;
            return (K(t % 52) + r).replace(X, '$1-$2');
          }
          var Z = function (e, t) {
              for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
              return e;
            },
            Q = function (e) {
              return Z(5381, e);
            };
          function ee(e) {
            for (var t = 0; t < e.length; t += 1) {
              var r = e[t];
              if (k(r) && !A(r)) return !1;
            }
            return !0;
          }
          var te = Q('5.2.1'),
            re = (function () {
              function e(e, t, r) {
                (this.rules = e),
                  (this.staticRulesId = ''),
                  (this.isStatic = (void 0 === r || r.isStatic) && ee(e)),
                  (this.componentId = t),
                  (this.baseHash = Z(te, t)),
                  (this.baseStyle = r),
                  Y.registerId(t);
              }
              return (
                (e.prototype.generateAndInjectStyles = function (e, t, r) {
                  var n = this.componentId,
                    o = [];
                  if (
                    (this.baseStyle &&
                      o.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                    this.isStatic && !r.hash)
                  )
                    if (
                      this.staticRulesId &&
                      t.hasNameForId(n, this.staticRulesId)
                    )
                      o.push(this.staticRulesId);
                    else {
                      var a = Se(this.rules, e, t, r).join(''),
                        i = J(Z(this.baseHash, a.length) >>> 0);
                      if (!t.hasNameForId(n, i)) {
                        var c = r(a, '.' + i, void 0, n);
                        t.insertRules(n, i, c);
                      }
                      o.push(i), (this.staticRulesId = i);
                    }
                  else {
                    for (
                      var s = this.rules.length,
                        l = Z(this.baseHash, r.hash),
                        u = '',
                        f = 0;
                      f < s;
                      f++
                    ) {
                      var d = this.rules[f];
                      if ('string' == typeof d) u += d;
                      else if (d) {
                        var p = Se(d, e, t, r),
                          h = Array.isArray(p) ? p.join('') : p;
                        (l = Z(l, h + f)), (u += h);
                      }
                    }
                    if (u) {
                      var m = J(l >>> 0);
                      if (!t.hasNameForId(n, m)) {
                        var g = r(u, '.' + m, void 0, n);
                        t.insertRules(n, m, g);
                      }
                      o.push(m);
                    }
                  }
                  return o.join(' ');
                }),
                e
              );
            })(),
            ne = /^\s*\/\/.*$/gm,
            oe = [':', '[', '.', '#'];
          function ae(e) {
            var t,
              r,
              n,
              o,
              a = void 0 === e ? w : e,
              i = a.options,
              c = void 0 === i ? w : i,
              s = a.plugins,
              l = void 0 === s ? S : s,
              f = new u(c),
              d = [],
              p = (function (e) {
                function t(t) {
                  if (t)
                    try {
                      e(t + '}');
                    } catch (e) {}
                }
                return function (r, n, o, a, i, c, s, l, u, f) {
                  switch (r) {
                    case 1:
                      if (0 === u && 64 === n.charCodeAt(0))
                        return e(n + ';'), '';
                      break;
                    case 2:
                      if (0 === l) return n + '/*|*/';
                      break;
                    case 3:
                      switch (l) {
                        case 102:
                        case 112:
                          return e(o[0] + n), '';
                        default:
                          return n + (0 === f ? '/*|*/' : '');
                      }
                    case -2:
                      n.split('/*|*/}').forEach(t);
                  }
                };
              })(function (e) {
                d.push(e);
              }),
              h = function (e, n, a) {
                return (0 === n && oe.includes(a[r.length])) || a.match(o)
                  ? e
                  : '.' + t;
              };
            function m(e, a, i, c) {
              void 0 === c && (c = '&');
              var s = e.replace(ne, ''),
                l = a && i ? i + ' ' + a + ' { ' + s + ' }' : s;
              return (
                (t = c),
                (r = a),
                (n = new RegExp('\\' + r + '\\b', 'g')),
                (o = new RegExp('(\\' + r + '\\b){2,}')),
                f(i || !a ? '' : a, l)
              );
            }
            return (
              f.use(
                [].concat(l, [
                  function (e, t, o) {
                    2 === e &&
                      o.length &&
                      o[0].lastIndexOf(r) > 0 &&
                      (o[0] = o[0].replace(n, h));
                  },
                  p,
                  function (e) {
                    if (-2 === e) {
                      var t = d;
                      return (d = []), t;
                    }
                  },
                ])
              ),
              (m.hash = l.length
                ? l
                    .reduce(function (e, t) {
                      return t.name || P(15), Z(e, t.name);
                    }, 5381)
                    .toString()
                : ''),
              m
            );
          }
          var ie = o().createContext(),
            ce = (ie.Consumer, o().createContext()),
            se = (ce.Consumer, new Y()),
            le = ae();
          function ue() {
            return (0, n.useContext)(ie) || se;
          }
          function fe() {
            return (0, n.useContext)(ce) || le;
          }
          function de(e) {
            var t = (0, n.useState)(e.stylisPlugins),
              r = t[0],
              a = t[1],
              i = ue(),
              c = (0, n.useMemo)(
                function () {
                  var t = i;
                  return (
                    e.sheet
                      ? (t = e.sheet)
                      : e.target &&
                        (t = t.reconstructWithOptions(
                          { target: e.target },
                          !1
                        )),
                    e.disableCSSOMInjection &&
                      (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                    t
                  );
                },
                [e.disableCSSOMInjection, e.sheet, e.target]
              ),
              s = (0, n.useMemo)(
                function () {
                  return ae({
                    options: { prefix: !e.disableVendorPrefixes },
                    plugins: r,
                  });
                },
                [e.disableVendorPrefixes, r]
              );
            return (
              (0, n.useEffect)(
                function () {
                  l()(r, e.stylisPlugins) || a(e.stylisPlugins);
                },
                [e.stylisPlugins]
              ),
              o().createElement(
                ie.Provider,
                { value: c },
                o().createElement(ce.Provider, { value: s }, e.children)
              )
            );
          }
          var pe = (function () {
              function e(e, t) {
                var r = this;
                (this.inject = function (e, t) {
                  void 0 === t && (t = le);
                  var n = r.name + t.hash;
                  e.hasNameForId(r.id, n) ||
                    e.insertRules(r.id, n, t(r.rules, n, '@keyframes'));
                }),
                  (this.toString = function () {
                    return P(12, String(r.name));
                  }),
                  (this.name = e),
                  (this.id = 'sc-keyframes-' + e),
                  (this.rules = t);
              }
              return (
                (e.prototype.getName = function (e) {
                  return void 0 === e && (e = le), this.name + e.hash;
                }),
                e
              );
            })(),
            he = /([A-Z])/,
            me = /([A-Z])/g,
            ge = /^ms-/,
            ye = function (e) {
              return '-' + e.toLowerCase();
            };
          function ve(e) {
            return he.test(e) ? e.replace(me, ye).replace(ge, '-ms-') : e;
          }
          var be = function (e) {
            return null == e || !1 === e || '' === e;
          };
          function Se(e, t, r, n) {
            if (Array.isArray(e)) {
              for (var o, a = [], i = 0, c = e.length; i < c; i += 1)
                '' !== (o = Se(e[i], t, r, n)) &&
                  (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
              return a;
            }
            return be(e)
              ? ''
              : A(e)
              ? '.' + e.styledComponentId
              : k(e)
              ? 'function' != typeof (s = e) ||
                (s.prototype && s.prototype.isReactComponent) ||
                !t
                ? e
                : Se(e(t), t, r, n)
              : e instanceof pe
              ? r
                ? (e.inject(r, n), e.getName(n))
                : e
              : b(e)
              ? (function e(t, r) {
                  var n,
                    o,
                    a = [];
                  for (var i in t)
                    t.hasOwnProperty(i) &&
                      !be(t[i]) &&
                      (b(t[i])
                        ? a.push.apply(a, e(t[i], i))
                        : k(t[i])
                        ? a.push(ve(i) + ':', t[i], ';')
                        : a.push(
                            ve(i) +
                              ': ' +
                              ((n = i),
                              (null == (o = t[i]) ||
                              'boolean' == typeof o ||
                              '' === o
                                ? ''
                                : 'number' != typeof o || 0 === o || n in f
                                ? String(o).trim()
                                : o + 'px') + ';')
                          ));
                  return r ? [r + ' {'].concat(a, ['}']) : a;
                })(e)
              : e.toString();
            var s;
          }
          function we(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return k(e) || b(e)
              ? Se(v(S, [e].concat(r)))
              : 0 === r.length && 1 === e.length && 'string' == typeof e[0]
              ? e
              : Se(v(e, r));
          }
          new Set();
          var ke = function (e, t, r) {
              return (
                void 0 === r && (r = w),
                (e.theme !== r.theme && e.theme) || t || r.theme
              );
            },
            Ce = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
            Ae = /(^-|-$)/g;
          function Oe(e) {
            return e.replace(Ce, '-').replace(Ae, '');
          }
          var xe = function (e) {
            return J(Q(e) >>> 0);
          };
          function Ie(e) {
            return 'string' == typeof e && !0;
          }
          var Ee = function (e) {
              return (
                'function' == typeof e ||
                ('object' == typeof e && null !== e && !Array.isArray(e))
              );
            },
            Pe = function (e) {
              return (
                '__proto__' !== e && 'constructor' !== e && 'prototype' !== e
              );
            };
          function je(e, t, r) {
            var n = e[r];
            Ee(t) && Ee(n) ? Re(n, t) : (e[r] = t);
          }
          function Re(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            for (var o = 0, a = r; o < a.length; o++) {
              var i = a[o];
              if (Ee(i)) for (var c in i) Pe(c) && je(e, i[c], c);
            }
            return e;
          }
          var Te = o().createContext();
          Te.Consumer;
          var $e = {};
          function Ne(e, t, r) {
            var a = A(e),
              i = !Ie(e),
              c = t.attrs,
              s = void 0 === c ? S : c,
              l = t.componentId,
              u =
                void 0 === l
                  ? (function (e, t) {
                      var r = 'string' != typeof e ? 'sc' : Oe(e);
                      $e[r] = ($e[r] || 0) + 1;
                      var n = r + '-' + xe('5.2.1' + r + $e[r]);
                      return t ? t + '-' + n : n;
                    })(t.displayName, t.parentComponentId)
                  : l,
              f = t.displayName,
              d =
                void 0 === f
                  ? (function (e) {
                      return Ie(e) ? 'styled.' + e : 'Styled(' + C(e) + ')';
                    })(e)
                  : f,
              h =
                t.displayName && t.componentId
                  ? Oe(t.displayName) + '-' + t.componentId
                  : t.componentId || u,
              m =
                a && e.attrs
                  ? Array.prototype.concat(e.attrs, s).filter(Boolean)
                  : s,
              v = t.shouldForwardProp;
            a &&
              e.shouldForwardProp &&
              (v = t.shouldForwardProp
                ? function (r, n) {
                    return (
                      e.shouldForwardProp(r, n) && t.shouldForwardProp(r, n)
                    );
                  }
                : e.shouldForwardProp);
            var b,
              O = new re(r, h, a ? e.componentStyle : void 0),
              x = O.isStatic && 0 === s.length,
              I = function (e, t) {
                return (function (e, t, r, o) {
                  var a = e.attrs,
                    i = e.componentStyle,
                    c = e.defaultProps,
                    s = e.foldedComponentIds,
                    l = e.shouldForwardProp,
                    u = e.styledComponentId,
                    f = e.target,
                    d = (function (e, t, r) {
                      void 0 === e && (e = w);
                      var n = y({}, t, { theme: e }),
                        o = {};
                      return (
                        r.forEach(function (e) {
                          var t,
                            r,
                            a,
                            i = e;
                          for (t in (k(i) && (i = i(n)), i))
                            n[t] = o[t] =
                              'className' === t
                                ? ((r = o[t]),
                                  (a = i[t]),
                                  r && a ? r + ' ' + a : r || a)
                                : i[t];
                        }),
                        [n, o]
                      );
                    })(ke(t, (0, n.useContext)(Te), c) || w, t, a),
                    h = d[0],
                    m = d[1],
                    g = (function (e, t, r, n) {
                      var o = ue(),
                        a = fe();
                      return t
                        ? e.generateAndInjectStyles(w, o, a)
                        : e.generateAndInjectStyles(r, o, a);
                    })(i, o, h),
                    v = r,
                    b = m.$as || t.$as || m.as || t.as || f,
                    S = Ie(b),
                    C = m !== t ? y({}, t, {}, m) : t,
                    A = {};
                  for (var O in C)
                    '$' !== O[0] &&
                      'as' !== O &&
                      ('forwardedAs' === O
                        ? (A.as = C[O])
                        : (l ? l(O, p) : !S || p(O)) && (A[O] = C[O]));
                  return (
                    t.style &&
                      m.style !== t.style &&
                      (A.style = y({}, t.style, {}, m.style)),
                    (A.className = Array.prototype
                      .concat(
                        s,
                        u,
                        g !== u ? g : null,
                        t.className,
                        m.className
                      )
                      .filter(Boolean)
                      .join(' ')),
                    (A.ref = v),
                    (0, n.createElement)(b, A)
                  );
                })(b, e, t, x);
              };
            return (
              (I.displayName = d),
              ((b = o().forwardRef(I)).attrs = m),
              (b.componentStyle = O),
              (b.displayName = d),
              (b.shouldForwardProp = v),
              (b.foldedComponentIds = a
                ? Array.prototype.concat(
                    e.foldedComponentIds,
                    e.styledComponentId
                  )
                : S),
              (b.styledComponentId = h),
              (b.target = a ? e.target : e),
              (b.withComponent = function (e) {
                var n = t.componentId,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                      (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                  })(t, ['componentId']),
                  a = n && n + '-' + (Ie(e) ? e : Oe(C(e)));
                return Ne(e, y({}, o, { attrs: m, componentId: a }), r);
              }),
              Object.defineProperty(b, 'defaultProps', {
                get: function () {
                  return this._foldedDefaultProps;
                },
                set: function (t) {
                  this._foldedDefaultProps = a ? Re({}, e.defaultProps, t) : t;
                },
              }),
              (b.toString = function () {
                return '.' + b.styledComponentId;
              }),
              i &&
                g()(b, e, {
                  attrs: !0,
                  componentStyle: !0,
                  displayName: !0,
                  foldedComponentIds: !0,
                  shouldForwardProp: !0,
                  styledComponentId: !0,
                  target: !0,
                  withComponent: !0,
                }),
              b
            );
          }
          var _e = function (e) {
            return (function e(t, r, n) {
              if ((void 0 === n && (n = w), !(0, c.isValidElementType)(r)))
                return P(1, String(r));
              var o = function () {
                return t(r, n, we.apply(void 0, arguments));
              };
              return (
                (o.withConfig = function (o) {
                  return e(t, r, y({}, n, {}, o));
                }),
                (o.attrs = function (o) {
                  return e(
                    t,
                    r,
                    y({}, n, {
                      attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
                    })
                  );
                }),
                o
              );
            })(Ne, e);
          };
          [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'marker',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
          ].forEach(function (e) {
            _e[e] = _e(e);
          });
          var Me,
            De = (function () {
              function e(e, t) {
                (this.rules = e),
                  (this.componentId = t),
                  (this.isStatic = ee(e)),
                  Y.registerId(this.componentId + 1);
              }
              var t = e.prototype;
              return (
                (t.createStyles = function (e, t, r, n) {
                  var o = n(Se(this.rules, t, r, n).join(''), ''),
                    a = this.componentId + e;
                  r.insertRules(a, a, o);
                }),
                (t.removeStyles = function (e, t) {
                  t.clearRules(this.componentId + e);
                }),
                (t.renderStyles = function (e, t, r, n) {
                  e > 2 && Y.registerId(this.componentId + e),
                    this.removeStyles(e, r),
                    this.createStyles(e, t, r, n);
                }),
                e
              );
            })();
          function ze() {
            var e,
              t,
              r =
                ((e = [
                  '\n    $toolbar-margin-left: 3px;\n    $toolbar-icon-padding: 0 2px;\n    $checkbox-margin-right: 3px;\n\n    $white: rgb(255, 255, 255);\n    $blue: rgb(77, 148, 255);\n    $purple: rgb(187, 51, 255);\n    $green: rgb(92, 214, 92);\n    $pink: rgb(255, 102, 179);\n    $orange: rgb(255, 133, 51);\n    $cyan: rgb(118, 215, 196);\n    $grey: rgb(115, 115, 115);\n    $red: rgb(255, 51, 51);\n    $yellow: rgb(255, 235, 95);\n    $bluegreen: rgb(0, 153, 115);\n\n    .FolderTree {\n    /* ---------- CheckBox ---------- */\n    .CheckBox {\n        display: inline-block;\n        margin-right: $checkbox-margin-right;\n    }\n    \n    /* ---------- TreeNode ---------- */\n    .TreeNode {\n        padding: 2px 0;\n        \n        // border: 1px solid red;\n\n        .TreeNodeToolBar {\n        margin-left: $toolbar-margin-left;\n\n        svg {\n            padding: $toolbar-icon-padding\n        }\n        }\n\n        .iconContainer {\n        padding: 0 2px;\n\n        svg {\n            padding-top: 1px;\n            vertical-align: text-top;\n        }\n\n        &:not(.typeIconContainer) svg:hover {\n            cursor: pointer;\n        }\n        }\n    }\n\n    /* ---------- EditableName ---------- */\n    .EditableName {\n        .displayName {\n        &:hover {\n            color: $blue;\n            cursor: pointer;\n        }\n        }\n\n        .editableNameToolbar {\n        margin-left: $toolbar-margin-left;\n\n        svg {\n            margin: $toolbar-icon-padding;\n        }\n        }\n    }\n\n    /* ---------- Icons ---------- */\n    .icon:hover {\n        &.OKIcon { color: $green; };\n        &.CancelIcon { color: $red; };\n        &.EditIcon { color: $purple; };\n        &.DeleteIcon { color: $pink; };\n        &.AddFileIcon { color: $bluegreen; };\n        &.AddFolderIcon { color: $bluegreen; };\n    }\n    }\n',
                ]),
                t || (t = e.slice(0)),
                Object.freeze(
                  Object.defineProperties(e, {
                    raw: { value: Object.freeze(t) },
                  })
                ));
            return (
              (ze = function () {
                return r;
              }),
              r
            );
          }
          ((Me = function () {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString(),
                r = B();
              return (
                '<style ' +
                [
                  r && 'nonce="' + r + '"',
                  O + '="true"',
                  'data-styled-version="5.2.1"',
                ]
                  .filter(Boolean)
                  .join(' ') +
                '>' +
                t +
                '</style>'
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? P(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return P(2);
                var r =
                    (((t = {})[O] = ''),
                    (t['data-styled-version'] = '5.2.1'),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  n = B();
                return (
                  n && (r.nonce = n),
                  [o().createElement('style', y({}, r, { key: 'sc-0-0' }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new Y({ isServer: !0 })),
              (this.sealed = !1);
          }.prototype).collectStyles = function (e) {
            return this.sealed
              ? P(2)
              : o().createElement(de, { sheet: this.instance }, e);
          }),
            (Me.interleaveWithNodeStream = function (e) {
              return P(3);
            });
          const Fe = (function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              r[a - 1] = arguments[a];
            var i = we.apply(void 0, [e].concat(r)),
              c = 'sc-global-' + xe(JSON.stringify(i)),
              s = new De(i, c);
            function l(e) {
              var t = ue(),
                r = fe(),
                o = (0, n.useContext)(Te),
                a = (0, n.useRef)(t.allocateGSInstance(c)).current;
              return (
                (0, n.useLayoutEffect)(
                  function () {
                    return (
                      u(a, e, t, o, r),
                      function () {
                        return s.removeStyles(a, t);
                      }
                    );
                  },
                  [a, e, t, o, r]
                ),
                null
              );
            }
            function u(e, t, r, n, o) {
              if (s.isStatic) s.renderStyles(e, E, r, o);
              else {
                var a = y({}, t, { theme: ke(t, n, l.defaultProps) });
                s.renderStyles(e, a, r, o);
              }
            }
            return o().memo(l);
          })(ze());
          function Le(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function Be(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function He(e, t) {
            var r;
            if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
              if (
                Array.isArray(e) ||
                (r = qe(e)) ||
                (t && e && 'number' == typeof e.length)
              ) {
                r && (e = r);
                var n = 0,
                  o = function () {};
                return {
                  s: o,
                  n: function () {
                    return n >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[n++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            }
            var a,
              i = !0,
              c = !1;
            return {
              s: function () {
                r = e[Symbol.iterator]();
              },
              n: function () {
                var e = r.next();
                return (i = e.done), e;
              },
              e: function (e) {
                (c = !0), (a = e);
              },
              f: function () {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (c) throw a;
                }
              },
            };
          }
          function qe(e, t) {
            if (e) {
              if ('string' == typeof e) return Ge(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Ge(e, t)
                  : void 0
              );
            }
          }
          function Ge(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          var Ue = function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            Ve = function e(t, r) {
              t.checked = r;
              var n = t.children;
              if (n) {
                var o,
                  a = He(n);
                try {
                  for (a.s(); !(o = a.n()).done; ) e(o.value, r);
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              }
              return t;
            },
            We = function e(t) {
              if (0 !== t.length) {
                var r = t.pop();
                (r.checked = (function (e) {
                  var t = e.children;
                  if (!(null != t && t.length) > 0) return e.checked;
                  var r,
                    n = 0,
                    o = He(t);
                  try {
                    for (o.s(); !(r = o.n()).done; ) n += r.value.checked;
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                  var a = 0.5;
                  return n === t.length ? (a = 1) : 0 === n && (a = 0), a;
                })(r)),
                  e(t);
              }
            },
            Ye = function (e, t) {
              return Ve(Ue(e), t);
            },
            Xe = function e(t) {
              var r,
                n = t.children,
                o = t._id;
              return n
                ? Math.max.apply(
                    Math,
                    [o].concat(
                      (function (e) {
                        if (Array.isArray(e)) return Ge(e);
                      })((r = n.map(e))) ||
                        (function (e) {
                          if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                          )
                            return Array.from(e);
                        })(r) ||
                        qe(r) ||
                        (function () {
                          throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                          );
                        })()
                    )
                  )
                : o;
            },
            Ke = function (e, t) {
              var r,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'file',
                o = Xe(e) + 1,
                a = 'file' === n,
                i = Ue(e),
                c = i,
                s = He(t);
              try {
                for (s.s(); !(r = s.n()).done; ) {
                  var l = r.value;
                  c = c.children[l];
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              var u = c,
                f = u.children;
              return (
                f &&
                  (a
                    ? f.unshift({
                        _id: o,
                        name: 'new file',
                        checked: Math.floor(c.checked),
                      })
                    : f.push({
                        _id: o,
                        name: 'new folder',
                        checked: Math.floor(c.checked),
                        children: [],
                      })),
                i
              );
            },
            Je = function e(t, r) {
              var n = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Le(Object(r), !0).forEach(function (t) {
                          Be(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : Le(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, t),
                o = n.children;
              return (
                o &&
                  ((n.isOpen = r),
                  (n.children = o.map(function (t) {
                    return e(t, r);
                  }))),
                n
              );
            },
            Ze = function e(t) {
              var r = t.children,
                n = t.isOpen;
              if (r && void 0 === n) return !1;
              if (!r && void 0 !== n) return !1;
              if (r) {
                var o,
                  a = He(r);
                try {
                  for (a.s(); !(o = a.n()).done; ) if (!e(o.value)) return !1;
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              }
              return !0;
            },
            Qe = {
              color: void 0,
              size: void 0,
              className: void 0,
              style: void 0,
              attr: void 0,
            },
            et = o().createContext && o().createContext(Qe),
            tt = function () {
              return (tt =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            };
          function rt(e) {
            return (
              e &&
              e.map(function (e, t) {
                return o().createElement(
                  e.tag,
                  tt({ key: t }, e.attr),
                  rt(e.child)
                );
              })
            );
          }
          function nt(e) {
            return function (t) {
              return o().createElement(
                ot,
                tt({ attr: tt({}, e.attr) }, t),
                rt(e.child)
              );
            };
          }
          function ot(e) {
            var t = function (t) {
              var r,
                n = e.attr,
                a = e.size,
                i = e.title,
                c = (function (e, t) {
                  var r = {};
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                      t.indexOf(n) < 0 &&
                      (r[n] = e[n]);
                  if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                      t.indexOf(n[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                        (r[n[o]] = e[n[o]]);
                  }
                  return r;
                })(e, ['attr', 'size', 'title']),
                s = a || t.size || '1em';
              return (
                t.className && (r = t.className),
                e.className && (r = (r ? r + ' ' : '') + e.className),
                o().createElement(
                  'svg',
                  tt(
                    {
                      stroke: 'currentColor',
                      fill: 'currentColor',
                      strokeWidth: '0',
                    },
                    t.attr,
                    n,
                    c,
                    {
                      className: r,
                      style: tt(
                        tt({ color: e.color || t.color }, t.style),
                        e.style
                      ),
                      height: s,
                      width: s,
                      xmlns: 'http://www.w3.org/2000/svg',
                    }
                  ),
                  i && o().createElement('title', null, i),
                  e.children
                )
              );
            };
            return void 0 !== et
              ? o().createElement(et.Consumer, null, function (e) {
                  return t(e);
                })
              : t(Qe);
          }
          function at(e) {
            return nt({
              tag: 'svg',
              attr: { viewBox: '0 0 1024 1024' },
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
                  },
                },
              ],
            })(e);
          }
          function it(e) {
            return nt({
              tag: 'svg',
              attr: { viewBox: '0 0 1024 1024' },
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z',
                  },
                },
              ],
            })(e);
          }
          function ct(e) {
            return nt({
              tag: 'svg',
              attr: { viewBox: '0 0 1024 1024' },
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z',
                  },
                },
              ],
            })(e);
          }
          function st(e) {
            return nt({
              tag: 'svg',
              attr: { viewBox: '0 0 1024 1024' },
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z',
                  },
                },
              ],
            })(e);
          }
          function lt(e) {
            return nt({
              tag: 'svg',
              attr: { viewBox: '0 0 1024 1024' },
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z',
                  },
                },
              ],
            })(e);
          }
          i().number.isRequired, i().func.isRequired;
          const ut = (0, n.createContext)(null);
          var ft = function (e) {
              return 'iconContainer '.concat(e);
            },
            dt = function (e) {
              return 'icon '.concat(e);
            };
          function pt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function ht() {
            return (ht =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function mt(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var r = [],
                    n = !0,
                    o = !1,
                    a = void 0;
                  try {
                    for (
                      var i, c = e[Symbol.iterator]();
                      !(n = (i = c.next()).done) &&
                      (r.push(i.value), !t || r.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (o = !0), (a = e);
                  } finally {
                    try {
                      n || null == c.return || c.return();
                    } finally {
                      if (o) throw a;
                    }
                  }
                  return r;
                }
              })(e, t) ||
              gt(e, t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function gt(e, t) {
            if (e) {
              if ('string' == typeof e) return yt(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? yt(e, t)
                  : void 0
              );
            }
          }
          function yt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          (function (e) {
            var t,
              r,
              a = e.name,
              i = e.isEditing,
              c = e.setIsEditing,
              s = e.onNameChange,
              l = e.OKIcon,
              u = e.CancelIcon,
              f =
                ((t = (0, n.useState)(a)),
                (r = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e, t) {
                    if (
                      'undefined' != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                      try {
                        for (
                          var i, c = e[Symbol.iterator]();
                          !(n = (i = c.next()).done) &&
                          (r.push(i.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (a = e);
                      } finally {
                        try {
                          n || null == c.return || c.return();
                        } finally {
                          if (o) throw a;
                        }
                      }
                      return r;
                    }
                  })(t, r) ||
                  (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return pt(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                          ? Array.from(e)
                          : 'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? pt(e, t)
                          : void 0
                      );
                    }
                  })(t, r) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()),
              d = f[0],
              p = f[1],
              h = o().createElement(
                'span',
                { className: 'editingName' },
                o().createElement('input', {
                  type: 'text',
                  value: d,
                  onChange: function (e) {
                    return p(e.target.value);
                  },
                }),
                o().createElement(
                  'span',
                  { className: ft('editableNameToolbar') },
                  o().createElement(l, {
                    className: dt('OKIcon'),
                    onClick: function () {
                      s(d), c(!1);
                    },
                  }),
                  o().createElement(u, {
                    className: dt('CancelIcon'),
                    onClick: function () {
                      p(a), c(!1);
                    },
                  })
                )
              ),
              m = o().createElement('span', { className: 'displayName' }, a);
            return o().createElement(
              'span',
              { className: 'EditableName' },
              i ? h : m
            );
          }.propTypes = {
            name: i().string.isRequired,
            isEditing: i().bool.isRequired,
            setIsEditing: i().func.isRequired,
            onNameChange: i().func.isRequired,
            OKIcon: i().func.isRequired,
            CancelIcon: i().func.isRequired,
          });
          var vt = function e(t) {
            var r = t.path,
              a = (t.name, t.renderItem),
              i = t.isOpen,
              c = t.childrenData,
              s = (t.nodeData, t.onClick, (0, n.useContext)(ut)),
              l =
                (s.handleCheck,
                s.handleRename,
                s.handleDelete,
                s.handleAddNode,
                s.handleToggleOpen),
              u = s.iconComponents,
              f = s.indentPixels,
              d = !!c,
              p = { marginLeft: r.length * f },
              h = mt((0, n.useState)(!1), 2),
              m = (h[0], h[1]),
              g = mt((0, n.useState)(!1), 2),
              y = g[0],
              v = (g[1], u.FileIcon),
              b = void 0 === v ? ct : v,
              S = u.FolderIcon,
              w = void 0 === S ? lt : S,
              k = u.FolderOpenIcon,
              C = void 0 === k ? st : k,
              A =
                (u.EditIcon,
                u.DeleteIcon,
                u.CancelIcon,
                u.AddFileIcon,
                u.AddFolderIcon,
                u.CaretRightIcon),
              O = void 0 === A ? it : A,
              x = u.CaretDownIcon,
              I = void 0 === x ? at : x,
              E = (u.OKIcon, b);
            d && (E = i ? C : w),
              ft('TreeNodeToolBar'),
              dt('EditIcon'),
              dt('DeleteIcon'),
              d && (o().Fragment, dt('AddFileIcon'), dt('AddFolderIcon')),
              dt('CancelIcon');
            var P = o().createElement(
              'span',
              { className: ft('caretContainer') },
              i
                ? o().createElement(I, {
                    className: dt('CaretDownIcon'),
                    onClick: function () {
                      return l(r, !1);
                    },
                  })
                : o().createElement(O, {
                    className: dt('CaretRightIcon'),
                    onClick: function () {
                      return l(r, !0);
                    },
                  })
            );
            return o().createElement(
              o().Fragment,
              null,
              o().createElement(
                'div',
                { className: 'TreeNode', style: p },
                d && P,
                o().createElement(
                  'span',
                  { className: ft('typeIconContainer') },
                  o().createElement(E, {
                    className: dt('TypeIcon'),
                    onClick: function () {
                      return !y && m(!0);
                    },
                  })
                ),
                a(t)
              ),
              d &&
                i &&
                c.map(function (t, n) {
                  return o().createElement(
                    e,
                    ht(
                      {
                        renderItem: a,
                        path: [].concat(
                          ((i = r),
                          (function (e) {
                            if (Array.isArray(e)) return yt(e);
                          })(i) ||
                            (function (e) {
                              if (
                                'undefined' != typeof Symbol &&
                                Symbol.iterator in Object(e)
                              )
                                return Array.from(e);
                            })(i) ||
                            gt(i) ||
                            (function () {
                              throw new TypeError(
                                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              );
                            })()),
                          [n]
                        ),
                        key: t._id,
                        name: t.name,
                        isOpen: t.isOpen,
                        checked: t.checked,
                        childrenData: t.children,
                      },
                      t
                    )
                  );
                  var i;
                })
            );
          };
          vt.propTypes = {
            path: i().array.isRequired,
            name: i().string.isRequired,
            checked: i().number.isRequired,
            isOpen: i().bool,
            childrenData: i().array,
          };
          const bt = vt;
          var St = {
            name: 'All Cryptos',
            children: [
              { name: 'Bitcoin' },
              { name: 'Etherium' },
              { name: 'Polkadot' },
              {
                name: 'POW',
                children: [
                  { name: 'Bitcoin' },
                  { name: 'Litecoin' },
                  { name: 'Bitcoin Cash' },
                ],
              },
              {
                name: 'Public Chains',
                children: [
                  { name: 'Ripple' },
                  { name: 'Chainlink' },
                  {
                    name: 'POW',
                    children: [
                      { name: 'Bitcoin' },
                      { name: 'Litecoin' },
                      { name: 'Bitcoin Cash' },
                    ],
                  },
                  {
                    name: 'POS',
                    children: [
                      { name: 'Etherium' },
                      { name: 'EOS' },
                      {
                        name: 'Crosschain',
                        children: [{ name: 'Polkadot' }, { name: 'Cosmos' }],
                      },
                    ],
                  },
                ],
              },
            ],
          };
          function wt() {
            return (wt =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function kt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          var Ct = function (e) {
            var t,
              r,
              a = e.data,
              i = e.renderItem,
              c = e.onChange,
              s = void 0 === c ? console.log : c,
              l = e.initCheckedStatus,
              u = void 0 === l ? 'unchecked' : l,
              f = e.initOpenStatus,
              d = void 0 === f ? 'open' : f,
              p = e.iconComponents,
              h = void 0 === p ? {} : p,
              m = e.indentPixels,
              g = void 0 === m ? 30 : m,
              y =
                ((t = (0, n.useState)(null)),
                (r = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e, t) {
                    if (
                      'undefined' != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                      try {
                        for (
                          var i, c = e[Symbol.iterator]();
                          !(n = (i = c.next()).done) &&
                          (r.push(i.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (a = e);
                      } finally {
                        try {
                          n || null == c.return || c.return();
                        } finally {
                          if (o) throw a;
                        }
                      }
                      return r;
                    }
                  })(t, r) ||
                  (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return kt(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                          ? Array.from(e)
                          : 'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? kt(e, t)
                          : void 0
                      );
                    }
                  })(t, r) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()),
              v = y[0],
              b = y[1],
              S = function (e) {
                b(e), s(e);
              };
            (0, n.useEffect)(
              function () {
                var e,
                  t =
                    ((e = 0),
                    (function t(r) {
                      (r._id = e), (e += 1);
                      var n = r.children;
                      if (n) {
                        var o,
                          a = He(n);
                        try {
                          for (a.s(); !(o = a.n()).done; ) t(o.value);
                        } catch (e) {
                          a.e(e);
                        } finally {
                          a.f();
                        }
                      }
                      return r;
                    })(Ue(a)));
                switch (u) {
                  case 'unchecked':
                    t = Ye(t, 0);
                    break;
                  case 'checked':
                    t = Ye(t, 1);
                }
                switch (d) {
                  case 'open':
                    t = Je(t, !0);
                    break;
                  case 'close':
                    t = Je(t, !1);
                    break;
                  default:
                    Ze(t) ||
                      (console.warn(
                        'open status is not provided! Fell back to all opened.'
                      ),
                      (t = Ye(t, 0)));
                }
                S(t);
              },
              [a, u]
            );
            var w = function (e, t) {
              var r = (function (e, t, r) {
                var n,
                  o = Ue(e),
                  a = o,
                  i = [a],
                  c = He(t);
                try {
                  for (c.s(); !(n = c.n()).done; ) {
                    var s = n.value;
                    (a = a.children[s]), i.push(a);
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
                return Ve(a, r), i.pop(), We(i), o;
              })(v, e, t);
              S(r);
            };
            if (!v) return null;
            var k = v.name,
              C = v.checked,
              A = v.children,
              O = v.isOpen;
            return o().createElement(
              'div',
              { className: 'FolderTree' },
              o().createElement(
                ut.Provider,
                {
                  value: {
                    handleCheck: w,
                    handleRename: function (e, t) {
                      var r = (function (e, t, r) {
                        var n,
                          o = Ue(e),
                          a = o,
                          i = He(t);
                        try {
                          for (i.s(); !(n = i.n()).done; ) {
                            var c = n.value;
                            a = a.children[c];
                          }
                        } catch (e) {
                          i.e(e);
                        } finally {
                          i.f();
                        }
                        return (a.name = r), o;
                      })(v, e, t);
                      S(r);
                    },
                    handleDelete: function (e) {
                      var t = (function (e, t) {
                        var r = Ue(e);
                        if (0 === t.length)
                          return (r.children = []), (r.checked = 0), r;
                        var n,
                          o = r,
                          a = [o],
                          i = t.pop(),
                          c = He(t);
                        try {
                          for (c.s(); !(n = c.n()).done; ) {
                            var s = n.value;
                            (o = o.children[s]), a.push(o);
                          }
                        } catch (e) {
                          c.e(e);
                        } finally {
                          c.f();
                        }
                        return o.children.splice(i, 1), We(a), r;
                      })(v, e);
                      S(t);
                    },
                    handleAddNode: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 'file',
                        r = Ke(v, e, t);
                      S(r);
                    },
                    handleToggleOpen: function (e, t) {
                      var r = (function (e, t, r) {
                        var n,
                          o = Ue(e),
                          a = o,
                          i = He(t);
                        try {
                          for (i.s(); !(n = i.n()).done; ) {
                            var c = n.value;
                            a = a.children[c];
                          }
                        } catch (e) {
                          i.e(e);
                        } finally {
                          i.f();
                        }
                        return a.children && (a.isOpen = r), o;
                      })(v, e, t);
                      S(r);
                    },
                    iconComponents: h,
                    indentPixels: g,
                  },
                },
                o().createElement(
                  bt,
                  wt(
                    {
                      path: [],
                      name: k,
                      renderItem: i,
                      checked: C,
                      isOpen: O,
                      childrenData: A,
                      handleCheck: w,
                    },
                    a
                  )
                )
              )
            );
          };
          Ct.propTypes = {
            data: i().object.isRequired,
            onChange: i().func,
            initCheckedStatus: i().string,
            initOpenStatus: i().string,
            iconComponents: i().shape({
              FileIcon: i().func,
              FolderIcon: i().func,
              FolderOpenIcon: i().func,
              EditIcon: i().func,
              DeleteIcon: i().func,
              CancelIcon: i().func,
              AddFileIcon: i().func,
              AddFolderIcon: i().func,
              CaretRightIcon: i().func,
              CaretDownIcon: i().func,
            }),
            indentPixels: i().number,
          };
          const At = Ct;
        },
        679: (e, t, r) => {
          'use strict';
          var n = r(864),
            o = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            a = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            i = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            c = {};
          function s(e) {
            return n.isMemo(e) ? i : c[e.$$typeof] || o;
          }
          (c[n.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
            (c[n.Memo] = i);
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            f = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            h = Object.prototype;
          e.exports = function e(t, r, n) {
            if ('string' != typeof r) {
              if (h) {
                var o = p(r);
                o && o !== h && e(t, o, n);
              }
              var i = u(r);
              f && (i = i.concat(f(r)));
              for (var c = s(t), m = s(r), g = 0; g < i.length; ++g) {
                var y = i[g];
                if (!(a[y] || (n && n[y]) || (m && m[y]) || (c && c[y]))) {
                  var v = d(r, y);
                  try {
                    l(t, y, v);
                  } catch (e) {}
                }
              }
            }
            return t;
          };
        },
        703: (e, t, r) => {
          'use strict';
          var n = r(414);
          function o() {}
          function a() {}
          (a.resetWarningCache = o),
            (e.exports = function () {
              function e(e, t, r, o, a, i) {
                if (i !== n) {
                  var c = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((c.name = 'Invariant Violation'), c);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: o,
              };
              return (r.PropTypes = r), r;
            });
        },
        697: (e, t, r) => {
          e.exports = r(703)();
        },
        414: (e) => {
          'use strict';
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        921: (e, t) => {
          'use strict';
          var r = 'function' == typeof Symbol && Symbol.for,
            n = r ? Symbol.for('react.element') : 60103,
            o = r ? Symbol.for('react.portal') : 60106,
            a = r ? Symbol.for('react.fragment') : 60107,
            i = r ? Symbol.for('react.strict_mode') : 60108,
            c = r ? Symbol.for('react.profiler') : 60114,
            s = r ? Symbol.for('react.provider') : 60109,
            l = r ? Symbol.for('react.context') : 60110,
            u = r ? Symbol.for('react.async_mode') : 60111,
            f = r ? Symbol.for('react.concurrent_mode') : 60111,
            d = r ? Symbol.for('react.forward_ref') : 60112,
            p = r ? Symbol.for('react.suspense') : 60113,
            h = r ? Symbol.for('react.suspense_list') : 60120,
            m = r ? Symbol.for('react.memo') : 60115,
            g = r ? Symbol.for('react.lazy') : 60116,
            y = r ? Symbol.for('react.block') : 60121,
            v = r ? Symbol.for('react.fundamental') : 60117,
            b = r ? Symbol.for('react.responder') : 60118,
            S = r ? Symbol.for('react.scope') : 60119;
          function w(e) {
            if ('object' == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch ((e = e.type)) {
                    case u:
                    case f:
                    case a:
                    case c:
                    case i:
                    case p:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case l:
                        case d:
                        case g:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case o:
                  return t;
              }
            }
          }
          function k(e) {
            return w(e) === f;
          }
          (t.AsyncMode = u),
            (t.ConcurrentMode = f),
            (t.ContextConsumer = l),
            (t.ContextProvider = s),
            (t.Element = n),
            (t.ForwardRef = d),
            (t.Fragment = a),
            (t.Lazy = g),
            (t.Memo = m),
            (t.Portal = o),
            (t.Profiler = c),
            (t.StrictMode = i),
            (t.Suspense = p),
            (t.isAsyncMode = function (e) {
              return k(e) || w(e) === u;
            }),
            (t.isConcurrentMode = k),
            (t.isContextConsumer = function (e) {
              return w(e) === l;
            }),
            (t.isContextProvider = function (e) {
              return w(e) === s;
            }),
            (t.isElement = function (e) {
              return 'object' == typeof e && null !== e && e.$$typeof === n;
            }),
            (t.isForwardRef = function (e) {
              return w(e) === d;
            }),
            (t.isFragment = function (e) {
              return w(e) === a;
            }),
            (t.isLazy = function (e) {
              return w(e) === g;
            }),
            (t.isMemo = function (e) {
              return w(e) === m;
            }),
            (t.isPortal = function (e) {
              return w(e) === o;
            }),
            (t.isProfiler = function (e) {
              return w(e) === c;
            }),
            (t.isStrictMode = function (e) {
              return w(e) === i;
            }),
            (t.isSuspense = function (e) {
              return w(e) === p;
            }),
            (t.isValidElementType = function (e) {
              return (
                'string' == typeof e ||
                'function' == typeof e ||
                e === a ||
                e === f ||
                e === c ||
                e === i ||
                e === p ||
                e === h ||
                ('object' == typeof e &&
                  null !== e &&
                  (e.$$typeof === g ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === l ||
                    e.$$typeof === d ||
                    e.$$typeof === v ||
                    e.$$typeof === b ||
                    e.$$typeof === S ||
                    e.$$typeof === y))
              );
            }),
            (t.typeOf = w);
        },
        864: (e, t, r) => {
          'use strict';
          e.exports = r(921);
        },
        774: (e) => {
          e.exports = function (e, t, r, n) {
            var o = r ? r.call(n, e, t) : void 0;
            if (void 0 !== o) return !!o;
            if (e === t) return !0;
            if ('object' != typeof e || !e || 'object' != typeof t || !t)
              return !1;
            var a = Object.keys(e),
              i = Object.keys(t);
            if (a.length !== i.length) return !1;
            for (
              var c = Object.prototype.hasOwnProperty.bind(t), s = 0;
              s < a.length;
              s++
            ) {
              var l = a[s];
              if (!c(l)) return !1;
              var u = e[l],
                f = t[l];
              if (
                !1 === (o = r ? r.call(n, u, f, l) : void 0) ||
                (void 0 === o && u !== f)
              )
                return !1;
            }
            return !0;
          };
        },
        297: (t) => {
          'use strict';
          t.exports = e;
        },
      },
      r = {};
    function n(e) {
      if (r[e]) return r[e].exports;
      var o = (r[e] = { exports: {} });
      return t[e](o, o.exports, n), o.exports;
    }
    return (
      (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
      }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      n(265)
    );
  })();
});
