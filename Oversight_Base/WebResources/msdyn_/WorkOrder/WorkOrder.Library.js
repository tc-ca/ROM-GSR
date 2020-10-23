function GeoCodeUtilsLoadScriptCallback() {
  Microsoft.Maps.Directions || Microsoft.Maps.loadModule('Microsoft.Maps.Directions');
  var n = GeoCodeUtils._options.callback;
  n && ((GeoCodeUtils._options.callback = null), n());
}
var __awaiter =
    (this && this.__awaiter) ||
    function (n, t, i, r) {
      return new (i || (i = Promise))(function (u, f) {
        function o(n) {
          try {
            e(r.next(n));
          } catch (t) {
            f(t);
          }
        }
        function s(n) {
          try {
            e(r['throw'](n));
          } catch (t) {
            f(t);
          }
        }
        function e(n) {
          n.done
            ? u(n.value)
            : new i(function (t) {
                t(n.value);
              }).then(o, s);
        }
        e((r = r.apply(n, t || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (n, t) {
      function o(n) {
        return function (t) {
          return s([n, t]);
        };
      }
      function s(e) {
        if (f) throw new TypeError('Generator is already executing.');
        while (r)
          try {
            if (
              ((f = 1),
              u &&
                (i = e[0] & 2 ? u['return'] : e[0] ? u['throw'] || ((i = u['return']) && i.call(u), 0) : u.next) &&
                !(i = i.call(u, e[1])).done)
            )
              return i;
            ((u = 0), i) && (e = [e[0] & 2, i.value]);
            switch (e[0]) {
              case 0:
              case 1:
                i = e;
                break;
              case 4:
                return r.label++, { value: e[1], done: !1 };
              case 5:
                r.label++;
                u = e[1];
                e = [0];
                continue;
              case 7:
                e = r.ops.pop();
                r.trys.pop();
                continue;
              default:
                if (!((i = r.trys), (i = i.length > 0 && i[i.length - 1])) && (e[0] === 6 || e[0] === 2)) {
                  r = 0;
                  continue;
                }
                if (e[0] === 3 && (!i || (e[1] > i[0] && e[1] < i[3]))) {
                  r.label = e[1];
                  break;
                }
                if (e[0] === 6 && r.label < i[1]) {
                  r.label = i[1];
                  i = e;
                  break;
                }
                if (i && r.label < i[2]) {
                  r.label = i[2];
                  r.ops.push(e);
                  break;
                }
                i[2] && r.ops.pop();
                r.trys.pop();
                continue;
            }
            e = t.call(n, r);
          } catch (o) {
            e = [6, o];
            u = 0;
          } finally {
            f = i = 0;
          }
        if (e[0] & 5) throw e[1];
        return { value: e[0] ? e[1] : void 0, done: !0 };
      }
      var r = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        f,
        u,
        i,
        e;
      return (
        (e = { next: o(0), throw: o(1), return: o(2) }),
        typeof Symbol == 'function' &&
          (e[Symbol.iterator] = function () {
            return this;
          }),
        e
      );
    },
  __assign =
    (this && this.__assign) ||
    function () {
      return (
        (__assign =
          Object.assign ||
          function (n) {
            for (var t, r, i = 1, u = arguments.length; i < u; i++) {
              t = arguments[i];
              for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }),
        __assign.apply(this, arguments)
      );
    },
  Localization,
  FieldService,
  GeoCodePopUp,
  GeoCodeUtils,
  GeoCodeForm,
  EntityMetadata,
  FieldOneSkyUtils,
  WorkOrders;
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */
(window.navigator.userAgent.indexOf('Trident') > -1 || window.IS_UNIT_TESTING) &&
  (function (n, t) {
    n.ES6Promise = t();
  })(this, function () {
    'use strict';
    function vt(n) {
      var t = typeof n;
      return n !== null && (t === 'object' || t === 'function');
    }
    function y(n) {
      return typeof n == 'function';
    }
    function yt(n) {
      w = n;
    }
    function pt(n) {
      u = n;
    }
    function kt() {
      return function () {
        return process.nextTick(o);
      };
    }
    function dt() {
      return typeof p != 'undefined'
        ? function () {
            p(o);
          }
        : b();
    }
    function gt() {
      var n = 0,
        i = new ot(o),
        t = document.createTextNode('');
      return (
        i.observe(t, { characterData: !0 }),
        function () {
          t.data = n = ++n % 2;
        }
      );
    }
    function ni() {
      var n = new MessageChannel();
      return (
        (n.port1.onmessage = o),
        function () {
          return n.port2.postMessage(0);
        }
      );
    }
    function b() {
      var n = setTimeout;
      return function () {
        return n(o, 1);
      };
    }
    function o() {
      for (var t, i, n = 0; n < e; n += 2) (t = f[n]), (i = f[n + 1]), t(i), (f[n] = undefined), (f[n + 1] = undefined);
      e = 0;
    }
    function ti() {
      try {
        var n = Function('return this')().require('vertx');
        return (p = n.runOnLoop || n.runOnContext), dt();
      } catch (t) {
        return b();
      }
    }
    function d(n, t) {
      var f = this,
        i = new this.constructor(s),
        r,
        e;
      return (
        i[l] === undefined && lt(i),
        (r = f._state),
        r
          ? ((e = arguments[r - 1]),
            u(function () {
              return ct(r, i, e, f._result);
            }))
          : nt(f, i, n, t),
        i
      );
    }
    function g(n) {
      var i = this,
        t;
      return n && typeof n == 'object' && n.constructor === i ? n : ((t = new i(s)), v(t, n), t);
    }
    function s() {}
    function ii() {
      return new TypeError('You cannot resolve a promise with itself');
    }
    function ri() {
      return new TypeError('A promises callback cannot return that same promise.');
    }
    function st(n) {
      try {
        return n.then;
      } catch (t) {
        return (r.error = t), r;
      }
    }
    function ui(n, t, i, r) {
      try {
        n.call(t, i, r);
      } catch (u) {
        return u;
      }
    }
    function fi(n, r, f) {
      u(function (n) {
        var u = !1,
          e = ui(
            f,
            r,
            function (t) {
              u || ((u = !0), r !== t ? v(n, t) : i(n, t));
            },
            function (i) {
              u || ((u = !0), t(n, i));
            },
            'Settle: ' + (n._label || ' unknown promise')
          );
        !u && e && ((u = !0), t(n, e));
      }, n);
    }
    function ei(n, r) {
      r._state === a
        ? i(n, r._result)
        : r._state === c
        ? t(n, r._result)
        : nt(
            r,
            undefined,
            function (t) {
              return v(n, t);
            },
            function (i) {
              return t(n, i);
            }
          );
    }
    function ht(n, u, f) {
      u.constructor === n.constructor && f === d && u.constructor.resolve === g
        ? ei(n, u)
        : f === r
        ? (t(n, r.error), (r.error = null))
        : f === undefined
        ? i(n, u)
        : y(f)
        ? fi(n, u, f)
        : i(n, u);
    }
    function v(n, r) {
      n === r ? t(n, ii()) : vt(r) ? ht(n, r, st(r)) : i(n, r);
    }
    function oi(n) {
      n._onerror && n._onerror(n._result);
      tt(n);
    }
    function i(n, t) {
      n._state === h && ((n._result = t), (n._state = a), n._subscribers.length !== 0 && u(tt, n));
    }
    function t(n, t) {
      n._state === h && ((n._state = c), (n._result = t), u(oi, n));
    }
    function nt(n, t, i, r) {
      var f = n._subscribers,
        e = f.length;
      n._onerror = null;
      f[e] = t;
      f[e + a] = i;
      f[e + c] = r;
      e === 0 && n._state && u(tt, n);
    }
    function tt(n) {
      var i = n._subscribers,
        f = n._state,
        t;
      if (i.length !== 0) {
        var r = void 0,
          u = void 0,
          e = n._result;
        for (t = 0; t < i.length; t += 3) (r = i[t]), (u = i[t + f]), r ? ct(f, r, u, e) : u(e);
        n._subscribers.length = 0;
      }
    }
    function si(n, t) {
      try {
        return n(t);
      } catch (i) {
        return (r.error = i), r;
      }
    }
    function ct(n, u, f, e) {
      var l = y(f),
        o = void 0,
        p = void 0,
        s = void 0,
        w = void 0;
      if (l) {
        if (((o = si(f, e)), o === r ? ((w = !0), (p = o.error), (o.error = null)) : (s = !0), u === o)) {
          t(u, ri());
          return;
        }
      } else (o = e), (s = !0);
      u._state !== h || (l && s ? v(u, o) : w ? t(u, p) : n === a ? i(u, o) : n === c && t(u, o));
    }
    function hi(n, i) {
      try {
        i(
          function (t) {
            v(n, t);
          },
          function (i) {
            t(n, i);
          }
        );
      } catch (r) {
        t(n, r);
      }
    }
    function ci() {
      return it++;
    }
    function lt(n) {
      n[l] = it++;
      n._state = undefined;
      n._result = undefined;
      n._subscribers = [];
    }
    function li() {
      return new Error('Array Methods must be provided an Array');
    }
    function ai(n) {
      return new at(this, n).promise;
    }
    function vi(n) {
      var t = this;
      return ut(n)
        ? new t(function (i, r) {
            for (var f = n.length, u = 0; u < f; u++) t.resolve(n[u]).then(i, r);
          })
        : new t(function (n, t) {
            return t(new TypeError('You must pass an array to race.'));
          });
    }
    function yi(n) {
      var r = this,
        i = new r(s);
      return t(i, n), i;
    }
    function pi() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }
    function wi() {
      throw new TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    }
    function bi() {
      var t = void 0,
        i,
        r;
      if (typeof global != 'undefined') t = global;
      else if (typeof self != 'undefined') t = self;
      else
        try {
          t = Function('return this')();
        } catch (u) {
          throw new Error('polyfill failed because global object is unavailable in this environment');
        }
      if (((i = t.Promise), i)) {
        r = null;
        try {
          r = Object.prototype.toString.call(i.resolve());
        } catch (u) {}
        if (r === '[object Promise]' && !i.cast) return;
      }
      t.Promise = n;
    }
    var rt = void 0,
      f,
      k,
      l,
      it,
      at,
      n;
    rt = Array.isArray
      ? Array.isArray
      : function (n) {
          return Object.prototype.toString.call(n) === '[object Array]';
        };
    var ut = rt,
      e = 0,
      p = void 0,
      w = void 0,
      u = function (n, t) {
        f[e] = n;
        f[e + 1] = t;
        e += 2;
        e === 2 && (w ? w(o) : k());
      };
    var ft = typeof window != 'undefined' ? window : undefined,
      et = ft || {},
      ot = et.MutationObserver || et.WebKitMutationObserver,
      wt =
        typeof self == 'undefined' && typeof process != 'undefined' && {}.toString.call(process) === '[object process]',
      bt =
        typeof Uint8ClampedArray != 'undefined' &&
        typeof importScripts != 'undefined' &&
        typeof MessageChannel != 'undefined';
    f = new Array(1e3);
    k = void 0;
    k = wt ? kt() : ot ? gt() : bt ? ni() : ft === undefined && typeof require == 'function' ? ti() : b();
    l = Math.random().toString(36).substring(2);
    var h = void 0,
      a = 1,
      c = 2,
      r = { error: null };
    return (
      (it = 0),
      (at = (function () {
        function r(n, r) {
          this._instanceConstructor = n;
          this.promise = new n(s);
          this.promise[l] || lt(this.promise);
          ut(r)
            ? ((this.length = r.length),
              (this._remaining = r.length),
              (this._result = new Array(this.length)),
              this.length === 0
                ? i(this.promise, this._result)
                : ((this.length = this.length || 0),
                  this._enumerate(r),
                  this._remaining === 0 && i(this.promise, this._result)))
            : t(this.promise, li());
        }
        return (
          (r.prototype._enumerate = function (n) {
            for (var t = 0; this._state === h && t < n.length; t++) this._eachEntry(n[t], t);
          }),
          (r.prototype._eachEntry = function (t, i) {
            var r = this._instanceConstructor,
              e = r.resolve,
              u,
              f;
            e === g
              ? ((u = st(t)),
                u === d && t._state !== h
                  ? this._settledAt(t._state, i, t._result)
                  : typeof u != 'function'
                  ? (this._remaining--, (this._result[i] = t))
                  : r === n
                  ? ((f = new r(s)), ht(f, t, u), this._willSettleAt(f, i))
                  : this._willSettleAt(
                      new r(function (n) {
                        return n(t);
                      }),
                      i
                    ))
              : this._willSettleAt(e(t), i);
          }),
          (r.prototype._settledAt = function (n, r, u) {
            var f = this.promise;
            f._state === h && (this._remaining--, n === c ? t(f, u) : (this._result[r] = u));
            this._remaining === 0 && i(f, this._result);
          }),
          (r.prototype._willSettleAt = function (n, t) {
            var i = this;
            nt(
              n,
              undefined,
              function (n) {
                return i._settledAt(a, t, n);
              },
              function (n) {
                return i._settledAt(c, t, n);
              }
            );
          }),
          r
        );
      })()),
      (n = (function () {
        function n(t) {
          this[l] = ci();
          this._result = this._state = undefined;
          this._subscribers = [];
          s !== t && (typeof t != 'function' && pi(), this instanceof n ? hi(this, t) : wi());
        }
        return (
          (n.prototype.catch = function (n) {
            return this.then(null, n);
          }),
          (n.prototype.finally = function (n) {
            var t = this,
              i = t.constructor;
            return y(n)
              ? t.then(
                  function (t) {
                    return i.resolve(n()).then(function () {
                      return t;
                    });
                  },
                  function (t) {
                    return i.resolve(n()).then(function () {
                      throw t;
                    });
                  }
                )
              : t.then(n, n);
          }),
          n
        );
      })()),
      (n.prototype.then = d),
      (n.all = ai),
      (n.race = vi),
      (n.resolve = g),
      (n.reject = yi),
      (n._setScheduler = yt),
      (n._setAsap = pt),
      (n._asap = u),
      (n.polyfill = bi),
      (n.Promise = n),
      n.polyfill(),
      n
    );
  });
Array.prototype.find ||
  Object.defineProperty(Array.prototype, 'find', {
    value: function (n) {
      var i, u, f, t, r;
      if (this == null) throw new TypeError('"this" is null or not defined');
      if (((i = Object(this)), (u = i.length >>> 0), typeof n != 'function'))
        throw new TypeError('predicate must be a function');
      for (f = arguments[1], t = 0; t < u; ) {
        if (((r = i[t]), n.call(f, r, t, i))) return r;
        t++;
      }
      return undefined;
    },
    configurable: !0,
    writable: !0,
  }),
  (function (n) {
    var t = (function () {
      function n() {
        var n = this;
        this.userLCID = null;
        this.serviceUrl = null;
        this.localizationPath = 'msdyn_/LocalizationLibrary';
        this.serverCache = null;
        this.webResourceFolder = 'WebResources';
        this.WebResourceName = 'msdyn_/LocalizationLibrary/LocalizationXml/localizedString';
        this.localizedStrings = null;
        this.defaultLocalizedStrings = null;
        this._construct = function () {
          var t = Xrm.Utility.getGlobalContext(),
            n;
          if (typeof t == 'undefined') {
            Xrm.Navigation.openAlertDialog({ text: 'Error loading localization module. Context is undefined!' });
            return;
          }
          return (n = t.getUserLcid()), n || (n = t.getOrgLcid()), n.toString();
        };
        this.parseXML = function (n) {
          var t = null;
          try {
            t = new DOMParser().parseFromString(n, 'text/xml');
          } catch (i) {
            Xrm.Navigation.openAlertDialog({ text: 'cannot convert string to xml' });
            t = null;
          }
          return t;
        };
        this.loadXml = function (t) {
          var i = null;
          return (
            (i = new XMLHttpRequest()),
            i.open('GET', t, !1),
            i.send(),
            i.responseXML && i.responseXML.firstChild ? i.responseXML : n.parseXML(i.responseText)
          );
        };
        this.loadXmlAsync = function (n, t, i) {
          var r = new XMLHttpRequest();
          r.open('GET', n, !0);
          r.onreadystatechange = function () {
            if (r.readyState == XMLHttpRequest.DONE)
              if (r.status === 200)
                if (r.responseXML && r.responseXML.firstChild) t(r.responseXML);
                else
                  try {
                    t(new DOMParser().parseFromString(r.responseText, 'text/xml'));
                  } catch (n) {
                    i && i('Cannot convert string to xml. ' + n.message);
                  }
              else i && i(r.status + ': ' + r.statusText);
          };
          r.onerror = function () {
            i && i(r.status + ': ' + r.statusText);
          };
          r.send();
        };
        this.getLocalizationStringWithNewLine = function (t) {
          var i = n.getLocalizationString(t);
          return i && (i += '\n'), i;
        };
        this.getLocalizationString = function (t) {
          for (var f, i, e, u = [], r = 1; r < arguments.length; r++) u[r - 1] = arguments[r];
          try {
            return (
              (f = void 0),
              (f = typeof Xrm == 'undefined' ? parent.getCurrentXrm() : Xrm),
              (i = f.Utility.getResourceString(n.WebResourceName, t)),
              (i === undefined || i === null) && (i = t),
              i
            );
          } catch (o) {
            return (n.localizedStrings == null && n.InitializeFallBack(), n.localizedStrings == null)
              ? t
              : ((e = n.FindLocalizedValue(n.localizedStrings, n.defaultLocalizedStrings, t)), e)
              ? e
              : (u.length > 1
                  ? Xrm.Navigation.openAlertDialog({ text: 'No localization string found (' + t + ', ' + u[1] + ').' })
                  : Xrm.Navigation.openAlertDialog({ text: 'No localization string found (' + t + ').' }),
                t);
          }
        };
        this.getLocalizationStringAsync = function (t) {
          return __awaiter(n, void 0, void 0, function () {
            var n = this;
            return __generator(this, function () {
              return [
                2,
                new Promise(function (i) {
                  try {
                    var r = Xrm.Utility.getResourceString(n.WebResourceName, t);
                    (r === undefined || r === null) && (r = t);
                    i(r);
                  } catch (u) {
                    n.localizedStrings == null
                      ? n.InitializeFallBackAsync(
                          function (r, u) {
                            n.localizedStrings = r;
                            n.defaultLocalizedStrings = u;
                            n.TryFindLocalizedValue(n.localizedStrings, n.defaultLocalizedStrings, t, function (n) {
                              return i(n);
                            });
                          },
                          function (n) {
                            Xrm.Navigation.openAlertDialog({
                              text: 'Localization is not initialized (' + t + '). ' + n,
                            });
                            i(t);
                          }
                        )
                      : n.TryFindLocalizedValue(n.localizedStrings, n.defaultLocalizedStrings, t, function (n) {
                          return i(n);
                        });
                  }
                }),
              ];
            });
          });
        };
        this.GetResourcesListFilesPath = function () {
          n.serviceUrl == null && (n.serviceUrl = Xrm.Utility.getGlobalContext().getClientUrl());
          var t =
            n.serviceUrl +
            n.serverCache +
            '/' +
            n.webResourceFolder +
            '/' +
            n.localizationPath +
            '/LocalizationResoursesList.xml';
          return n.loadXml(t);
        };
        this.GetResourcesListFilesPathAsync = function (t, i) {
          n.serviceUrl == null && (n.serviceUrl = Xrm.Utility.getGlobalContext().getClientUrl());
          var r =
            n.serviceUrl +
            n.serverCache +
            '/' +
            n.webResourceFolder +
            '/' +
            n.localizationPath +
            '/LocalizationResoursesList.xml';
          n.loadXmlAsync(r, t, i);
        };
        this.GetResourseName = function (t, i) {
          var r, u, f;
          if (i)
            if (((r = null), i.evaluate && XPathResult)) {
              if (
                ((u = "//data[@id='" + t + "']"),
                (f = i.evaluate(u, i, null, XPathResult.ANY_TYPE, null)),
                (r = f.iterateNext()),
                r)
              )
                return r.textContent.replace(/[\n\s]+/g, '');
            } else return n.FindValueFromXml(i, 'data', 'id', t, 'value');
          return null;
        };
        this.FindValueFromXml = function (n, t, i, r, u) {
          var h = n.childNodes[0].childNodes,
            e,
            f,
            o,
            c,
            s,
            l;
          if (!h) return null;
          for (e = 0; e < h.length; e++)
            if (((f = h.item(e)), f.localName == t))
              for (o = 0; o < f.attributes.length; o++)
                if (((c = f.attributes.item(o)), c.localName == i && c.value == r))
                  for (s = 0; s < f.childNodes.length; s++)
                    if (((l = f.childNodes.item(s)), l.localName == u)) return l.textContent;
          return null;
        };
        this.GetLocalizationStringsLibrary = function (t) {
          n.serviceUrl == null && (n.serviceUrl = Xrm.Utility.getGlobalContext().getClientUrl());
          var i =
            n.serviceUrl +
            n.serverCache +
            '/' +
            n.webResourceFolder +
            '/' +
            n.localizationPath +
            '/LocalizationXml/' +
            t +
            '.resx';
          return n.loadXml(i);
        };
        this.GetLocalizationStringsLibraryAsync = function (t, i, r) {
          n.serviceUrl == null && (n.serviceUrl = Xrm.Utility.getGlobalContext().getClientUrl());
          var u =
            n.serviceUrl +
            n.serverCache +
            '/' +
            n.webResourceFolder +
            '/' +
            n.localizationPath +
            '/LocalizationXml/' +
            t +
            '.resx';
          n.loadXmlAsync(u, i, r);
        };
        this.InitializeFallBack = function () {
          var r = window.location.href.match(/%7B[A-Z0-9]+%7D/i),
            t,
            i,
            u;
          n.serverCache = r != null && r.length > 0 ? '/' + r[0] : '';
          t = null;
          i = null;
          try {
            u = n.GetResourcesListFilesPath();
            n.userLCID == null && (n.userLCID = n._construct());
            i = n.GetResourseName(n.userLCID, u);
            t = n.GetResourseName('default', u);
          } catch (f) {}
          if (t == null) {
            Xrm.Navigation.openAlertDialog({ text: 'No default localization filename found' });
            return;
          }
          n.defaultLocalizedStrings = n.GetLocalizationStringsLibrary(t);
          n.localizedStrings = i == null || i == t ? n.defaultLocalizedStrings : n.GetLocalizationStringsLibrary(i);
        };
        this.InitializeFallBackAsync = function (t, i) {
          var r = window.location.href.match(/%7B[A-Z0-9]+%7D/i);
          n.serverCache = r != null && r.length > 0 ? '/' + r[0] : '';
          n.getResourcesListAsync(function (r, u) {
            n.GetLocalizationStringsLibraryAsync(
              u,
              function (f) {
                r == null || r == u
                  ? t(f, f)
                  : n.GetLocalizationStringsLibraryAsync(
                      r,
                      function (n) {
                        t(n, f);
                      },
                      i
                    );
              },
              i
            );
          }, i);
        };
        this.getResourcesListAsync = function (t, i) {
          var r = null,
            u = null;
          try {
            n.GetResourcesListFilesPathAsync(function (f) {
              n.userLCID == null && (n.userLCID = n._construct());
              u = n.GetResourseName(n.userLCID, f);
              r = n.GetResourseName('default', f);
              r == null ? i && i('No default localization filename found') : t(u, r);
            }, i);
          } catch (f) {
            i && f && i(f.message);
          }
        };
      }
      return (
        (n.prototype.TryFindLocalizedValue = function (n, t, i, r) {
          if (n == null) {
            r(i);
            return;
          }
          var u = this.FindLocalizedValue(n, t, i);
          u ? r(u) : (Xrm.Navigation.openAlertDialog({ text: 'No localization string found (' + i + ').' }), r(i));
        }),
        (n.prototype.FindLocalizedValue = function (n, t, i) {
          var r = null,
            f = "//data[@name='" + i + "']/value",
            u;
          return (
            n.evaluate && XPathResult
              ? ((u = n.evaluate(f, n, null, XPathResult.ANY_TYPE, null)),
                (r = u.iterateNext()),
                r && (r = r.textContent.replace(/\n\s+/g, '')))
              : (r = this.FindValueFromXml(n, 'data', 'name', i, 'value')),
            r ||
              (n.evaluate && XPathResult
                ? ((u = t.evaluate(f, t, null, XPathResult.ANY_TYPE, null)),
                  (r = u.iterateNext()),
                  r && (r = r.textContent.replace(/\n\s+/g, '')))
                : (r = this.FindValueFromXml(this.defaultLocalizedStrings, 'data', 'name', i, 'value'))),
            r
          );
        }),
        n
      );
    })();
    n.Localization = t;
  })(FieldService || (FieldService = {}));
(Localization = new FieldService.Localization()),
  (function (n) {
    function t(n) {
      return '_' + n + '_value';
    }
    function i(n, t) {
      return FieldOneSkyUtils.GetODataAttribute(n.EntityLogicalName, t.LogicalName);
    }
    n.RelatedField = t;
    n.GetRelatedName = i;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'Account'),
        (n.EntityLogicalName = 'account'),
        (n.attributes = {
          accountid: { SchemaName: 'AccountId', LogicalName: 'accountid' },
          address1_latitude: { SchemaName: 'Address1_Latitude', LogicalName: 'address1_latitude' },
          address1_longitude: { SchemaName: 'Address1_Longitude', LogicalName: 'address1_longitude' },
          msdyn_billingaccount: { SchemaName: 'msdyn_BillingAccount', LogicalName: 'msdyn_billingaccount' },
          msdyn_billingaccount_account: {
            SchemaName: 'msdyn_BillingAccount_Account',
            LogicalName: 'msdyn_billingaccount_account',
          },
          defaultpricelevelid: { SchemaName: 'DefaultPriceLevelId', LogicalName: 'defaultpricelevelid' },
          msdyn_functionallocationid: {
            SchemaName: 'msdyn_FunctionalLocationId',
            LogicalName: 'msdyn_functionallocationid',
          },
          name: { SchemaName: 'Name', LogicalName: 'name' },
          msdyn_preferredresource: { SchemaName: 'msdyn_PreferredResource', LogicalName: 'msdyn_preferredresource' },
          msdyn_salestaxcode: { SchemaName: 'msdyn_SalesTaxCode', LogicalName: 'msdyn_salestaxcode' },
          msdyn_serviceterritory: { SchemaName: 'msdyn_ServiceTerritory', LogicalName: 'msdyn_serviceterritory' },
          msdyn_taxexempt: { SchemaName: 'msdyn_TaxExempt', LogicalName: 'msdyn_taxexempt' },
          msdyn_taxexemptnumber: { SchemaName: 'msdyn_TaxExemptNumber', LogicalName: 'msdyn_taxexemptnumber' },
          msdyn_travelcharge: { SchemaName: 'msdyn_TravelCharge', LogicalName: 'msdyn_travelcharge' },
          msdyn_travelcharge_base: { SchemaName: 'msdyn_travelcharge_Base', LogicalName: 'msdyn_travelcharge_base' },
          msdyn_travelchargetype: { SchemaName: 'msdyn_TravelChargeType', LogicalName: 'msdyn_travelchargetype' },
          msdyn_workorderinstructions: {
            SchemaName: 'msdyn_WorkOrderInstructions',
            LogicalName: 'msdyn_workorderinstructions',
          },
          msdyn_workhourtemplate: { SchemaName: 'msdyn_workhourtemplate', LogicalName: 'msdyn_workhourtemplate' },
        }),
        (n.getServiceTerritory = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_serviceterritory.LogicalName);
        }),
        n
      );
    })();
    n.Account = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'Territory'),
        (n.EntityLogicalName = 'territory'),
        (n.attributes = {
          territoryid: { SchemaName: 'TerritoryId', LogicalName: 'territoryid' },
          name: { SchemaName: 'Name', LogicalName: 'name' },
        }),
        n
      );
    })();
    n.Territory = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'TransactionCurrency'),
        (n.EntityLogicalName = 'transactioncurrency'),
        (n.attributes = {
          currencyname: { LogicalName: 'currencyname', SchemaName: 'CurrencyName' },
          transactioncurrencyid: { LogicalName: 'transactioncurrencyid', SchemaName: 'TransactionCurrencyId' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
        }),
        n
      );
    })();
    n.TransactionCurrency = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'PriceLevel'),
        (n.EntityLogicalName = 'pricelevel'),
        (n.attributes = {
          msdyn_breakhoursbillable: { SchemaName: 'msdyn_BreakHoursBillable', LogicalName: 'msdyn_breakhoursbillable' },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          amount: { SchemaName: 'Amount', LogicalName: 'amount' },
          percentage: { SchemaName: 'Percentage', LogicalName: 'percentage' },
          roundingpolicycode: { SchemaName: 'RoundingPolicyCode', LogicalName: 'roundingpolicycode' },
          roundingoptioncode: { SchemaName: 'RoundingOptionCode', LogicalName: 'roundingoptioncode' },
          roundingoptionamount: { SchemaName: 'RoundingOptionAmount', LogicalName: 'roundingoptionamount' },
          msdyn_minimumchargeamount: {
            SchemaName: 'msdyn_MinimumChargeAmount',
            LogicalName: 'msdyn_minimumchargeamount',
          },
          msdyn_minimumchargeduration: {
            SchemaName: 'msdyn_MinimumChargeDuration',
            LogicalName: 'msdyn_minimumchargeduration',
          },
          msdyn_flatfee: { SchemaName: 'msdyn_FlatFee', LogicalName: 'msdyn_flatfee' },
          pricelevelid: { SchemaName: 'PricelevelId', LogicalName: 'pricelevelid' },
          pricingmethodcode: { SchemaName: 'PricingMethodCode', LogicalName: 'pricingmethodcode' },
          name: { SchemaName: 'Name', LogicalName: 'name' },
          _transactioncurrencyid_value: {
            SchemaName: '_TransactionCurrencyId_value',
            LogicalName: '_transactioncurrencyid_value',
          },
        }),
        n
      );
    })();
    n.PriceLevel = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_agreementsubstatus'),
        (n.EntityLogicalName = 'msdyn_agreementsubstatus'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_agreementsubstatusid: {
            SchemaName: 'msdyn_agreementsubstatusId',
            LogicalName: 'msdyn_agreementsubstatusid',
          },
          msdyn_defaultsubstatus: { SchemaName: 'msdyn_DefaultSubStatus', LogicalName: 'msdyn_defaultsubstatus' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_systemstatus: { SchemaName: 'msdyn_SystemStatus', LogicalName: 'msdyn_systemstatus' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_agreementsubstatus = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_taxcode'),
        (n.EntityLogicalName = 'msdyn_taxcode'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_actastaxgroup: { SchemaName: 'msdyn_ActasTaxGroup', LogicalName: 'msdyn_actastaxgroup' },
          msdyn_agreementtaxable: { SchemaName: 'msdyn_AgreementTaxable', LogicalName: 'msdyn_agreementtaxable' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_productstaxable: { SchemaName: 'msdyn_ProductsTaxable', LogicalName: 'msdyn_productstaxable' },
          msdyn_servicestaxable: { SchemaName: 'msdyn_ServicesTaxable', LogicalName: 'msdyn_servicestaxable' },
          msdyn_taxcodeid: { SchemaName: 'msdyn_taxcodeId', LogicalName: 'msdyn_taxcodeid' },
          msdyn_taxrate: { SchemaName: 'msdyn_TaxRate', LogicalName: 'msdyn_taxrate' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_taxcode = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t, i, r, u, f, e, o;
    (function (n) {
      n[(n.Null = 0)] = 'Null';
    })((t = n.ErrorTypes || (n.ErrorTypes = {}))),
      (function (n) {
        n[(n.Product = 0)] = 'Product';
        n[(n.Service = 1)] = 'Service';
      })((i = n.EntitlementFilter || (n.EntitlementFilter = {})));
    n.ClientMode = { Outlook: 'Outlook', Web: 'Web', Mobile: 'Mobile' };
    (n.ClientState = { Online: 'Online', Offline: 'Offline' }),
      (function (n) {
        n[(n.Estimate = 69097e4)] = 'Estimate';
        n[(n.Active = 690970001)] = 'Active';
        n[(n.Expired = 690970002)] = 'Expired';
        n[(n.Canceled = 690970003)] = 'Canceled';
      })((r = n.AgreementSystemStatus || (n.AgreementSystemStatus = {}))),
      (function (n) {
        n[(n.CRM2011 = 5)] = 'CRM2011';
        n[(n.CRM2013 = 6)] = 'CRM2013';
        n[(n.CRM2015 = 7)] = 'CRM2015';
      })((u = n.CrmVersion || (n.CrmVersion = {}))),
      (function (n) {
        n[(n.Create = 1)] = 'Create';
        n[(n.Update = 2)] = 'Update';
        n[(n.ReadOnly = 3)] = 'ReadOnly';
        n[(n.Disabled = 4)] = 'Disabled';
        n[(n.BulkEdit = 6)] = 'BulkEdit';
      })((f = n.FormType || (n.FormType = {})));
    (n.ProductServiceStatus = { Estimated: '690970000', Used: '690970001' }),
      (function (n) {
        n[(n.Cash = 69097e4)] = 'Cash';
        n[(n.Check = 690970001)] = 'Check';
        n[(n.Credit_Card = 690970002)] = 'Credit_Card';
        n[(n.Other = 690970003)] = 'Other';
      })((e = n.PaymentType || (n.PaymentType = {})));
    (n.SaveMode = {
      Save: 1,
      SaveAndClose: 2,
      Deactivate: 5,
      Reactivate: 6,
      Send: 7,
      Disqualify: 15,
      Qualify: 16,
      Assign: 47,
      SaveAsCompleted: 58,
      SaveAndNew: 59,
      AutoSave: 70,
    }),
      (function (n) {
        n[(n.NotStarted = 0)] = 'NotStarted';
        n[(n.InProgress = 1)] = 'InProgress';
        n[(n.Completed = 2)] = 'Completed';
        n[(n.Error = 3)] = 'Error';
      })((o = n.RecordProcessingStatus || (n.RecordProcessingStatus = {})));
    n.PurchaseOrderProductItemStatus = { Pending: 69097e4, Received: 690970001, Cancelled: 690970002 };
    n.WorkLocation = { OnSite: 69097e4, Facility: 690970001, LocationAgnostic: 690970002 };
    n.WorkOrderSystemStatus = {
      Unscheduled: 69097e4,
      Scheduled: 690970001,
      InProgress: 690970002,
      Completed: 690970003,
      Posted: 690970004,
      Canceled: 690970005,
    };
    n.WorkOrderResourceStateCode = { Active: 0, Inactive: 1 };
    n.WorkOrderResourceSystemStatus = {
      Scheduled: 69097e4,
      Traveling: 690970001,
      OnBreak: 690970002,
      InProgress: 690970003,
      Completed: 690970004,
      Canceled: 690970005,
    };
    n.FieldOneProductType = { Inventory: 69097e4, NonInventory: 690970001, Service: 690970002 };
    n.ResourceType = { Generic: 1, User: 3, Account: 5, Contact: 2, Equipment: 4, Group: 6 };
    n.POShipToType = { SIte: 69097e4, BusinessUnit: 690970001, ServiceAccount: 690970002, Other: 690970003 };
    n.WOProductServiceLineStatus = { Estimated: 69097e4, Used: 690970001 };
    n.CustomActions = {
      FieldServiceSystemAction: 'msdyn_FieldServiceSystemAction',
      RetrieveResourceAvailability: 'msdyn_RetrieveResourceAvailability',
      GeocodeAddress: 'msdyn_GeocodeAddress',
    };
    n.AgreementBookingStatus = { Active: 69097e4, Processed: 690970001, Canceled: 690970002 };
    n.RTVSystemStatus = {
      Draft: 69097e4,
      Approved: 690970001,
      Shipped: 690970002,
      Received: 690970003,
      Canceled: 690970004,
    };
    n.POApprovalStatus = { Approved: 69097e4, Rejected: 690970001 };
    n.POSystemStatus = {
      Draft: 69097e4,
      Submitted: 690970001,
      Canceled: 690970002,
      ProductsReceived: 690970003,
      Billed: 690970004,
    };
    n.TimeEntryGenerationStrategy = { Manual: 192355200, Auto: 192355201 };
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function f(n, t) {
        return t ? n.getAttribute(t) : null;
      }
      function e(n, t) {
        return t ? n.getAttribute(t) : null;
      }
      function o(n) {
        var t = null;
        return n && n.data && n.data.entity && (t = n.data.entity.attributes), t;
      }
      function s(t, i) {
        return n.IsNotNullAndUndefined(t) && n.IsNotNullAndUndefined(n.Fields.GetControl(t, i));
      }
      function h(n, t) {
        var i = n.ui.controls;
        return i.get(t) || i.get('header_' + t) || i.get('header_process_' + t);
      }
      function c(n, t) {
        this.SetValue(n, t, null);
      }
      function l(t, i) {
        this.SetValue(t, i, null);
        n.Fields.FireOnChange(t, i);
      }
      function a(t, i) {
        var r = n.Fields.GetControl(t, i),
          u,
          f;
        if (r) {
          u = r.getAttribute();
          f = u.getRequiredLevel();
          switch (f) {
            case 'required':
              return !0;
            case 'none':
              return !1;
            case 'recommended':
              return 'recommended';
          }
        }
        return !1;
      }
      function v(t, i, r) {
        var u = n.Fields.GetField(t, i);
        if (u && u.setRequiredLevel) {
          switch (r.toString()) {
            case 'true':
              u.setRequiredLevel('required');
              break;
            case 'false':
              u.setRequiredLevel('none');
              break;
            default:
              u.setRequiredLevel('recommended');
          }
          r == !1 && n.verifyCrmMinimumVersion(n.CrmVersion.CRM2013) && n.Fields.ClearNotifications(t, i);
        } else n.OutputError(i, n.ErrorTypes.Null);
      }
      function y(t, i, r) {
        var f = n.Fields,
          u = f.GetField(t, i);
        if (!u || !u.setRequiredLevel) {
          n.OutputError(i, n.ErrorTypes.Null);
          return;
        }
        r
          ? u.setRequiredLevel('required')
          : (u.setRequiredLevel('recommended'), f.IsEmpty(t, i) && u.setValue(null), f.ClearNotifications(t, i));
      }
      function p(t, i, r) {
        var u = n.Fields.GetControl(t, i),
          f;
        u
          ? ((f = new FieldService.Localization()), u.setNotification(f.getLocalizationString(r), r))
          : n.OutputError(i, n.ErrorTypes.Null);
      }
      function w(t, i, r, u) {
        var e = t.getAttribute(i),
          f,
          o;
        e &&
          ((f = i),
          r ||
            (n.IsNotNullAndUndefined(u)
              ? ((o = new FieldService.Localization()), (f = o.getLocalizationString(u)))
              : n.LogMessageInConsole(
                  "localizedStringId must not be null when setting setIsValid to false for '" + i + "'"
                )),
          e.setIsValid(r, f));
      }
      function b(t, i) {
        var r = n.Fields.GetControl(t, i);
        r
          ? (r.clearNotification && r.clearNotification(), r.clearValidation && r.clearValidation())
          : n.OutputError(i, n.ErrorTypes.Null);
      }
      function k(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getAttributeType) return r.getAttributeType();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function d(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getText) return r.getText();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function g(t, i) {
        var f = n.Fields.GetField(t, i),
          o = !0,
          e,
          r,
          u;
        if (
          (n.verifyCrmMinimumVersion(n.CrmVersion.CRM2013) &&
            ((e = n.Fields.GetControl(t, i)), (o = e && e.get_isValid ? e.get_isValid() : !0)),
          f && f.getValue)
        )
          return (
            (r = o ? f.getValue() : null),
            r != null && r.length == 0 && (r = null),
            r != null &&
              f.getAttributeType() == 'lookup' &&
              ((u = r[0]),
              (typeof u.typename == 'undefined' || u.typename == null) &&
                typeof u.entityType != 'undefined' &&
                u.entityType != null &&
                (r[0].typename = r[0].entityType)),
            r
          );
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function nt(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getInitialValue) return r.getInitialValue();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function tt(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getMax) return r.getMax();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function it(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getSelectedOption) return r.getSelectedOption();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function i(n, t, i) {
        r(n, t, i, 'always');
      }
      function r(t, i, r, u) {
        var e = n.Fields.GetField(t, i),
          o = n.Fields.GetValue(t, i),
          f = !1;
        o == null && r == null ? (f = !1) : o == null ? (f = !0) : r == null ? (f = !0) : o !== r && (f = !0);
        f == !0 &&
          (e && e.setValue
            ? (e.setValue(r), n.Fields.GetDisabled(t, i) && n.Fields.SetSubmitMode(t, i, u))
            : n.OutputError(i, n.ErrorTypes.Null));
      }
      function rt(n, t, r) {
        i(n, t, r);
        u(n, t);
      }
      function ut(t, i, r, u, f) {
        var e = f === null || typeof f == 'undefined';
        u !== null && !e && u.length > 0
          ? n.Fields.SetLookUpValue(t, i, u, f, r)
          : u !== null && e && typeof u.Id != 'undefined' && u.Id !== null
          ? n.Fields.SetLookUpValue(t, i, u.Id, u.Name, u.LogicalName)
          : u !== null && e && u.length > 0 && u[0] !== null && u[0].id !== null
          ? n.Fields.SetLookUpValue(t, i, u[0].id, u[0].name, u[0].typename)
          : n.Fields.SetValue(t, i, null);
      }
      function ft(t, i, r, u, f, e, o) {
        var l = n.Fields.GetField(t, i),
          h = n.Fields.GetValue(t, i),
          c = !1,
          s;
        h == null && r == null
          ? (c = !1)
          : h == null
          ? (c = !0)
          : h != null &&
            r != null &&
            h[0].id.replace(/\{|\}/gi, '').toLowerCase() != r.replace(/\{|\}/gi, '').toLowerCase() &&
            (c = !0);
        c == !0 &&
          (l && l.setValue
            ? (r.indexOf('{') == -1 && r.indexOf('}') == -1 && (r = '{' + r + '}'),
              (r = r.toUpperCase()),
              (s = []),
              (s[0] = {}),
              (s[0].id = r),
              (s[0].name = u),
              (s[0].entityType = f),
              (s[0].keyValues = e),
              (s[0].values = o),
              l.setValue(s))
            : n.OutputError(i, n.ErrorTypes.Null));
      }
      function et(t, i, r, u, f, e, o) {
        n.Fields.SetLookUpValue(t, i, r, u, f, e, o);
        n.Fields.FireOnChange(t, i);
      }
      function ot(t, i) {
        var r = n.Fields.GetValue(t, i);
        return !r || (typeof r == 'string' && r.trim().length == 0);
      }
      function st(t, i) {
        var r = n.Fields.GetEntityAttribute(t, i);
        if (r && r.getIsDirty) return r.getIsDirty();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function ht(t, i) {
        n.Fields.SetDisabled(t, i, !0);
      }
      function ct(t, i, r) {
        var f = t.getControl(i),
          u;
        f && f.setDisabled
          ? (f.setDisabled(r),
            (u = null),
            r ? n.Fields.IsDirty(t, i) && (u = 'always') : (u = 'dirty'),
            n.Fields.SetSubmitMode(t, i, u))
          : n.OutputError(i, n.ErrorTypes.Null);
      }
      function lt(t, i) {
        var r = t.getControl(i);
        if (r && r.getDisabled) return r.getDisabled();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function at(t, i, r) {
        var u = n.Fields.GetEntityAttribute(t, i);
        if (u && u.addOnChange) return u.removeOnChange && u.removeOnChange(r), u.addOnChange(r);
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function vt(t, i, r) {
        var u = n.Fields.GetEntityAttribute(t, i);
        if (u && u.removeOnChange) return u.removeOnChange(r);
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function u(t, i) {
        var r = n.Fields.GetEntityAttribute(t, i);
        if (r && r.fireOnChange) return r.fireOnChange();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function yt(t, i) {
        try {
          t.data.entity.removeOnSave(i);
        } catch (r) {
          n.WarnMessageInConsole('OnSave event not properly removed: ' + r);
        }
        return t.data.entity.addOnSave(i);
      }
      function pt(t, i, r) {
        var u = n.Fields.GetField(t, i);
        u && u.setSubmitMode && r && r.length > 0 ? u.setSubmitMode(r) : n.OutputError(i, n.ErrorTypes.Null);
      }
      function wt(t) {
        var i = t;
        return (
          n.GetFieldOneSettingsAsync(
            function (n) {
              if (n) for (var t = n.msdyn_entitynumberlength, t = t ? t : 5; i.length < t; ) i = '0' + i;
            },
            function () {}
          ),
          i
        );
      }
      function bt(t, i, r) {
        var u = n.Fields.GetField(t, i);
        if (u && u.getOption) return u.getOption(r);
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function kt(t, i) {
        var r = n.Fields.GetField(t, i);
        if (r && r.getOptions) return r.getOptions();
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function dt(t, i) {
        var r = n.Fields.GetValue(t, i);
        return r && r.length > 0 ? r[0] : r;
      }
      t.GetField = f;
      t.GetEntityAttribute = e;
      t.GetEntityAttributes = o;
      t.IsFormControlPresentForField = s;
      t.GetControl = h;
      t.ClearLookup = c;
      t.PublishEmptyLookUp = l;
      t.GetRequiredLevelOfField = a;
      t.SetRequired = v;
      t.SetRequiredOrRecommended = y;
      t.SetNotification = p;
      t.SetIsValid = w;
      t.ClearNotifications = b;
      t.GetType = k;
      t.GetText = d;
      t.GetValue = g;
      t.GetInitialValue = nt;
      t.GetMaxValue = tt;
      t.GetSelectedOption = it;
      t.SetValue = i;
      t.SetValueWithSubmitMode = r;
      t.PublishValue = rt;
      t.SetLookUp = ut;
      t.SetLookUpValue = ft;
      t.PublishLookUpValue = et;
      t.IsEmpty = ot;
      t.IsDirty = st;
      t.DisableField = ht;
      t.SetDisabled = ct;
      t.GetDisabled = lt;
      t.AddOnChange = at;
      t.RemoveOnChange = vt;
      t.FireOnChange = u;
      t.AddOnSave = yt;
      t.SetSubmitMode = pt;
      t.FormatEntityNumber = wt;
      t.GetOption = bt;
      t.GetOptions = kt;
      t.GetLookupFieldValue = dt;
    })((t = n.Fields || (n.Fields = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t = (function () {
      function t() {}
      return (
        (t.EntitySchemaName = 'msdyn_agreement'),
        (t.EntityLogicalName = 'msdyn_agreement'),
        (t.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_agreementdetails: { SchemaName: 'msdyn_AgreementDetails', LogicalName: 'msdyn_agreementdetails' },
          msdyn_agreementid: { SchemaName: 'msdyn_agreementId', LogicalName: 'msdyn_agreementid' },
          msdyn_billingaccount: { SchemaName: 'msdyn_BillingAccount', LogicalName: 'msdyn_billingaccount' },
          msdyn_childindex: { SchemaName: 'msdyn_ChildIndex', LogicalName: 'msdyn_childindex' },
          msdyn_datecanceled: { SchemaName: 'msdyn_DateCanceled', LogicalName: 'msdyn_datecanceled' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_duration: { SchemaName: 'msdyn_Duration', LogicalName: 'msdyn_duration' },
          msdyn_enddate: { SchemaName: 'msdyn_EndDate', LogicalName: 'msdyn_enddate' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_originatingagreement: {
            SchemaName: 'msdyn_OriginatingAgreement',
            LogicalName: 'msdyn_originatingagreement',
          },
          msdyn_pricelist: { SchemaName: 'msdyn_PriceList', LogicalName: 'msdyn_pricelist' },
          msdyn_salestaxcode: { SchemaName: 'msdyn_SalesTaxCode', LogicalName: 'msdyn_salestaxcode' },
          msdyn_serviceaccount: { SchemaName: 'msdyn_ServiceAccount', LogicalName: 'msdyn_serviceaccount' },
          msdyn_serviceterritory: { SchemaName: 'msdyn_ServiceTerritory', LogicalName: 'msdyn_serviceterritory' },
          msdyn_startdate: { SchemaName: 'msdyn_StartDate', LogicalName: 'msdyn_startdate' },
          msdyn_substatus: { SchemaName: 'msdyn_SubStatus', LogicalName: 'msdyn_substatus' },
          msdyn_systemstatus: { SchemaName: 'msdyn_SystemStatus', LogicalName: 'msdyn_systemstatus' },
          msdyn_taxable: { SchemaName: 'msdyn_Taxable', LogicalName: 'msdyn_taxable' },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          processid: { SchemaName: 'processid', LogicalName: 'processid' },
          stageid: { SchemaName: 'stageid', LogicalName: 'stageid' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          traversedpath: { SchemaName: 'traversedpath', LogicalName: 'traversedpath' },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        (t.GetSystemStatusField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_systemstatus.LogicalName);
        }),
        (t.GetSubStatusField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_substatus.LogicalName);
        }),
        (t.SetSubStatusField = function (i, r, u) {
          return FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_substatus.LogicalName,
            n.msdyn_agreementsubstatus.EntityLogicalName,
            r,
            u
          );
        }),
        (t.GetServiceAccount = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_serviceaccount.LogicalName);
        }),
        (t.GetBillingAccount = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_billingaccount.LogicalName);
        }),
        (t.GetSalesTaxCode = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_salestaxcode.LogicalName);
        }),
        (t.SetSalesTaxCodeField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_salestaxcode.LogicalName,
            n.msdyn_taxcode.EntityLogicalName,
            r,
            u
          );
        }),
        (t.SetBillingAccountField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_billingaccount.LogicalName,
            n.Account.EntityLogicalName,
            r,
            u
          );
        }),
        (t.SetServiceTerritoryField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_serviceterritory.LogicalName,
            n.Territory.EntityLogicalName,
            r,
            u
          );
        }),
        (t.SetCurrencyField = function (i, r) {
          FieldOneSkyUtils.Fields.SetLookUp(
            t.attributes.transactioncurrencyid.LogicalName,
            n.TransactionCurrency.EntityLogicalName,
            i,
            r
          );
        }),
        (t.GetTaxableField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_taxable.LogicalName);
        }),
        (t.GetStartDateField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_startdate.LogicalName);
        }),
        (t.GetDateCanceledField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_datecanceled.LogicalName);
        }),
        (t.GetEndDateField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_enddate.LogicalName);
        }),
        (t.SetPriceListField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_pricelist.LogicalName,
            n.PriceLevel.EntityLogicalName,
            r,
            u
          );
        }),
        (t.GetCurrency = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.transactioncurrencyid.LogicalName);
        }),
        t
      );
    })();
    n.msdyn_agreement = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_FunctionalLocation'),
        (n.EntityLogicalName = 'msdyn_functionallocation'),
        (n.attributes = {
          functionallocationid: { SchemaName: 'msdyn_FunctionalLocationId', LogicalName: 'msdyn_functionallocationid' },
          msdyn_latitude: { SchemaName: 'msdyn_Latitude', LogicalName: 'msdyn_latitude' },
          msdyn_longitude: { SchemaName: 'msdyn_Longitude', LogicalName: 'msdyn_longitude' },
          msdyn_addressname: { SchemaName: 'msdyn_AddressName', LogicalName: 'msdyn_addressname' },
          msdyn_address1: { SchemaName: 'msdyn_Address1', LogicalName: 'msdyn_address1' },
          msdyn_address2: { SchemaName: 'msdyn_Address2', LogicalName: 'msdyn_address2' },
          msdyn_address3: { SchemaName: 'msdyn_Address3', LogicalName: 'msdyn_address3' },
          msdyn_city: { SchemaName: 'msdyn_City', LogicalName: 'msdyn_city' },
          msdyn_stateorprovince: { SchemaName: 'msdyn_StateOrProvince', LogicalName: 'msdyn_stateorprovince' },
          msdyn_country: { SchemaName: 'msdyn_Country', LogicalName: 'msdyn_country' },
          msdyn_postalcode: { SchemaName: 'msdyn_PostalCode', LogicalName: 'msdyn_postalcode' },
          msdyn_parentfunctionallocation: {
            SchemaName: '_msdyn_ParentFunctionalLocation_value',
            LogicalName: '_msdyn_parentfunctionallocation_value',
          },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
        }),
        n
      );
    })();
    n.msdyn_functionallocation = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t;
    (function (n) {
      n.DisableCopyItemsWorkflow = 'DisableCopyItems';
      n.DisableChangePrimaryIncident = 'DisableChangePrimaryIncident';
      n.ClientNames_Mobile = 'Mobile';
      n.ClientStates_Offline = 'Offline';
      n.SchedulingParameterReadPrivilegeErrorCode = '0x80040220';
      n.LearnMoreUrl = 'https://docs.microsoft.com/en-in/dynamics365/field-service/overview';
      n.RemoteAssistMobileDeeplinkUriBase = 'ramobile:';
      n.RemoteAssistAndroidRedirectLink = 'https://go.microsoft.com/fwlink/?linkid=2080224';
      n.RemoteAssistIosRedirectLink = 'https://go.microsoft.com/fwlink/?linkid=2100645';
      n.RemoteAssistNeitherRedirectLink = 'https://go.microsoft.com/fwlink/?linkid=2132074';
      n.IncidentTypeRecommendationTermsHtml =
        'WebResources/msdyn_/IncidentTypeRecommendationTerms/IncidentTypeRecommendationTerms.html';
      n.IncidentTypeRecommendationTermsHtmlIFrame = 'IFRAME_IncidentTypeRecommendationTerms';
      n.ParamIsProvisionCompleted = 'param_isProvisionCompleted';
      n.ProvisionRequestCompletedLabelKey = 'provisionRequestCompleted';
      n.IncidentTypeRecommendation_DisableDialog_Cancel = 'provisionRequestCancel';
      n.IncidentTypeRecommendation_DisableDialog_Confirm = 'provisionRequestConfirm';
      n.disableCustomerAssetValidation_Dialog_Title = 'disableCustomerAssetValidationDialogTitle';
      n.disableCustomerAssetValidation_Dialog_Text = 'disableCustomerAssetValidationDialogText';
      n.IncidentTypeRecommendation_DisableDialog_Title = 'provisionRequestDisableDialogTitle';
      n.IncidentTypeRecommendation_DisableDialog_Text = 'provisionRequestDisableDialogText';
      n.ProvisionRequestDisabledLabelKey = 'provisionRequestDisabledFail';
      n.ProvisionRequestProgressBarText = 'provisionRequestProgressBarText';
      n.InspectionAnalytics_DisableDialog_Title = 'inspectionAnalyticsDisableDialogTitle';
      n.InspectionAnalytics_DisableDialog_Text = 'inspectionAnalyticsDisableDialogText';
      n.InspectionAnalytics_DisableDialog_Cancel = 'inspectionAnalyticsDisableDialogCancel';
      n.InspectionAnalytics_DisableDialog_Confirm = 'inspectionAnalyticsDisableDialogConfirm';
      n.AdvancedSettings_UsePriceListFromBillingAccount = 'workorder.pricelist.usefrombillingaccount';
      n.WorkOrderFormComponentFormIds = {
        Customer: 'c0ebdf20-f27f-4acc-8c9f-a9a202a5e917',
        Service: '613513a1-322d-4ecc-81bd-bd65640d834c',
        Notes: '7fac7159-31a5-4869-8f2f-ee88dd6c0f3a',
      };
    })((t = n.Constants || (n.Constants = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  var u = (function () {
      function n() {}
      return (
        (n.retrieveRecord = function (i, r, u, f, e, o, s, h) {
          var v;
          h === void 0 && (h = !0);
          var c = n.startTrackingAndWrapCallbacks(e, o, s, h),
            l = c[0],
            a = c[1];
          return n.isOffline(r)
            ? ((v = t.getRetrieveOptionsString(u, f)), Xrm.WebApi.offline.retrieveRecord(r, i, v).then(l, a))
            : t.retrieveRecord(i, r, u, f, l, a);
        }),
        (n.retrieveRecordAsync = function (i, r, u, f) {
          return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function () {
              return n.isOffline(r)
                ? ((e = t.getRetrieveOptionsString(u, f)), [2, Xrm.WebApi.offline.retrieveRecord(r, i, e)])
                : [2, t.retrieveRecord(i, r, u, f)];
            });
          });
        }),
        (n.retrieveMultipleRecords = function (i, r, u, f, e, o) {
          var l;
          o === void 0 && (o = !0);
          var s = n.startTrackingAndWrapCallbacks(u, f, e, o),
            h = s[0],
            c = s[1];
          return n.isOffline(i)
            ? ((l = t.getRetrieveMultipleOptionsString(r)), Xrm.WebApi.offline.retrieveMultipleRecords(i, l).then(h, c))
            : t.retrieveMultipleRecords(i, r, h, c);
        }),
        (n.retrieveMultipleRecordsAsync = function (i, r) {
          return __awaiter(this, void 0, void 0, function () {
            var u;
            return __generator(this, function () {
              return n.isOffline(i)
                ? ((u = t.getRetrieveMultipleOptionsString(r)), [2, Xrm.WebApi.offline.retrieveMultipleRecords(i, u)])
                : [2, t.retrieveMultipleRecords(i, r)];
            });
          });
        }),
        (n.updateRecord = function (i, r, u, f, e, o, s) {
          s === void 0 && (s = !0);
          n.startTrackingAsyncJob(o, s);
          var h = n.createCallBackWithEndTrackingAsyncJob(o, s, f),
            c = n.createCallBackWithEndTrackingAsyncJob(o, s, e);
          return n.isOffline(u) ? Xrm.WebApi.offline.updateRecord(u, i, r).then(h, c) : t.updateRecord(i, r, u, h, c);
        }),
        (n.createRecord = function (i, r, u, f, e, o) {
          o === void 0 && (o = !0);
          n.startTrackingAsyncJob(e, o);
          var s = n.createCallBackWithEndTrackingAsyncJob(e, o, u),
            h = n.createCallBackWithEndTrackingAsyncJob(e, o, f);
          return n.isOffline(r) ? Xrm.WebApi.offline.createRecord(r, i).then(s, h) : t.createRecord(r, i, s, h);
        }),
        (n.isOffline = function (n) {
          return (
            FieldOneSkyUtils.GetClientState() === FieldOneSkyUtils.ClientState.Offline &&
            Xrm.WebApi.offline.isAvailableOffline(n)
          );
        }),
        (n.adjustLookupAttributeValue = function (n, t) {
          if (n) {
            var i = n[t];
            i && Array.isArray(i) && (n[t] = i.length == 0 ? undefined : i[0]);
          }
        }),
        (n.adjustNumberAttributeValue = function (n, t) {
          if (n) {
            var i = n[t];
            i && typeof i == 'string' && (n[t] = JSON.parse(i));
          }
        }),
        (n.adjustBooleanAttributeValue = function (n, t) {
          if (n) {
            var i = n[t];
            i && typeof i == 'string' && (n[t] = JSON.parse(i));
          }
        }),
        (n.adjustAttributeFromValueFieldToObject = function (n, t) {
          var i, r;
          n && ((r = '_' + t + '_value'), (n[t] = ((i = {}), (i[t] = n[r]), i)));
        }),
        (n.adjustAttributeFromValueFieldToString = function (n, t) {
          if (n) {
            var i = '_' + t + '_value';
            n[t] = n[i];
          }
        }),
        (n.getFieldNameWithoutValueSuffix = function (n) {
          return n && n.startsWith('_') && n.endsWith('_value') ? n.substring(1).slice(0, -6) : n;
        }),
        (n.canUseAsyncJobTracker = function (t) {
          return (
            (!n.UseAsyncJobTrackerOfflineOnly ||
              FieldOneSkyUtils.GetClientState() === FieldOneSkyUtils.ClientState.Offline) &&
            FieldOneSkyUtils.IsNotNullAndUndefined(n.AsyncJobTracker) &&
            (FieldOneSkyUtils.IsNotNullAndUndefined(t) || n.AsyncJobTracker.HasDefaultFormContext())
          );
        }),
        (n.startTrackingAsyncJob = function (t, i) {
          i && n.canUseAsyncJobTracker(t) && n.AsyncJobTracker.AddJob(t);
        }),
        (n.endTrackingAsyncJob = function (t, i) {
          i && n.canUseAsyncJobTracker(t) && n.AsyncJobTracker.RemoveJob(t);
        }),
        (n.createCallBackWithEndTrackingAsyncJob = function (t, i, r) {
          return function (u) {
            n.endTrackingAsyncJob(t, i);
            r && r(u);
          };
        }),
        (n.startTrackingAndWrapCallbacks = function (t, i, r, u) {
          var f = t,
            e = i;
          return (
            (t || i) &&
              (n.startTrackingAsyncJob(r, u),
              (f = n.createCallBackWithEndTrackingAsyncJob(r, u, t)),
              (e = n.createCallBackWithEndTrackingAsyncJob(r, u, i))),
            [f, e]
          );
        }),
        (n.UseAsyncJobTrackerOfflineOnly = !0),
        n
      );
    })(),
    t,
    i,
    r;
  n.CrudApiSDK = u;
  t = (function () {
    function n() {}
    return (
      (n.retrieveRecord = function (t, i, r, u, f, e) {
        n.stringParameterCheck(t, 'WebApiSDK.retrieveRecord requires the id parameter is a string.');
        n.stringParameterCheck(i, 'WebApiSDK.retrieveRecord requires the type parameter is a string.');
        r != null && n.stringParameterCheck(r, 'WebApiSDK.retrieveRecord requires the select parameter is a string.');
        u != null && n.stringParameterCheck(u, 'WebApiSDK.retrieveRecord requires the expand parameter is a string.');
        var s = n.getRetrieveOptionsString(r, u),
          o = Xrm.WebApi.retrieveRecord(i, t, s);
        return f || e ? o.then(f, e) : o;
      }),
      (n.retrieveMultipleRecords = function (t, i, r, u) {
        n.stringParameterCheck(t, 'WebApiSDK.retrieveMultipleRecords requires the type parameter is a string.');
        i != null &&
          n.stringParameterCheck(i, 'WebApiSDK.retrieveMultipleRecords requires the options parameter is a string.');
        var e = n.getRetrieveMultipleOptionsString(i),
          f = Xrm.WebApi.retrieveMultipleRecords(t, e);
        return r || u ? f.then(r, u) : f;
      }),
      (n.updateRecord = function (t, i, r, u, f) {
        n.stringParameterCheck(t, 'WebApiSDK.updateRecord requires the id parameter is a string.');
        n.parameterCheck(i, 'WebApiSDK.updateRecord requires the object parameter.');
        n.stringParameterCheck(r, 'WebApiSDK.updateRecord requires the type parameter is a string.');
        var e = Xrm.WebApi.updateRecord(r, t, i);
        return u || f ? e.then(u, f) : e;
      }),
      (n.createRecord = function (t, i, r, u) {
        n.stringParameterCheck(t, 'WebApiSDK.createRecord requires the entityLogicalName parameter is a string.');
        n.parameterCheck(i, 'WebApiSDK.createRecord requires the object parameter.');
        var f = Xrm.WebApi.createRecord(t, i);
        return r || u ? f.then(r, u) : f;
      }),
      (n.getAboveOrEqualFilter = function (n, t) {
        return (
          "Microsoft.Dynamics.CRM.AboveOrEqual(PropertyName=@p1,PropertyValue=@p2)&@p1='" + n + "'&@p2='" + t + "'"
        );
      }),
      (n.getUnderOrEqualFilter = function (n, t) {
        return (
          "Microsoft.Dynamics.CRM.UnderOrEqual(PropertyName=@p1,PropertyValue=@p2)&@p1='" + n + "'&@p2='" + t + "'"
        );
      }),
      (n.getRetrieveOptionsString = function (n, t, i, r, u) {
        var e = '',
          f;
        return (
          (n != null || t != null) &&
            ((f = []),
            n != null && f.push('$select=' + n),
            t != null && f.push('$expand=' + t),
            i && f.push('$filter=' + i),
            r && f.push('$top=' + r),
            u && f.push('$orderby=' + u),
            (e = '?' + f.join('&'))),
          e
        );
      }),
      (n.getRetrieveMultipleOptionsString = function (n) {
        var t = '';
        return n != null && (t = n.charAt(0) != '?' ? '?' + n : n), t;
      }),
      (n.parameterCheck = function (n, t) {
        if (typeof n == 'undefined' || n === null) throw new Error(t);
      }),
      (n.stringParameterCheck = function (n, t) {
        if (typeof n != 'string') throw new Error(t);
      }),
      (n.callbackParameterCheck = function (n, t) {
        if (typeof n != 'function') throw new Error(t);
      }),
      (n.getGuidWithBrackets = function (n) {
        return n && n.indexOf('}') < 0 ? '{' + n + '}' : n;
      }),
      (n.getGuidWithoutBrackets = function (n) {
        return n && n.indexOf('}') >= 0 ? n.substr(1, n.length - 2) : n;
      }),
      n
    );
  })();
  n.WebApiSDK = t;
  i = (function () {
    function n() {}
    return n;
  })();
  n.WebApiError = i;
  r = (function () {
    function n() {}
    return n;
  })();
  n.WebApiInnerError = r;
})(FieldService || (FieldService = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  var t = (function () {
    function t(n, t) {
      t === void 0 && (t = !0);
      this.recordId = 'recordid';
      this.formEntityName = n;
      this.cachedRecords = {};
      this.cacheOnlyInFSOfflineMode = t;
    }
    return (
      (t.prototype.cacheLookupField = function (t, i, r, u) {
        var f = this;
        return new Promise(function (e, o) {
          var s;
          if (f.cacheOnlyInFSOfflineMode && !n.isMobileClientOffline()) return e(null);
          if (((s = n.Fields.GetValue(t, i)), !s)) return (f.cachedRecords[i] = null), e(null);
          var h = s[0].id,
            l = s[0].typename,
            c = f;
          FieldService.CrudApiSDK.retrieveRecord(
            h,
            l,
            r,
            u,
            function (n) {
              n[c.recordId] = h;
              c.cachedRecords[i] = n;
              e(n);
            },
            function (n) {
              o(n.message);
            },
            t
          );
        });
      }),
      (t.prototype.doesRecordContainsGuid = function (t, i) {
        for (var r in i) if (i[r] && typeof i[r] == 'string' && n.IsEqualGUID(i[r], t)) return !0;
        return !1;
      }),
      (t.prototype.getLookupRecord = function (n, t) {
        return this.isCachedRecordValid(n, t) ? this.cachedRecords[t] : null;
      }),
      (t.prototype.setLookupCache = function (n, t) {
        this.cachedRecords[n] = t;
      }),
      (t.prototype.isCachedRecordValid = function (t, i) {
        var r = n.Fields.GetValue(t, i),
          u,
          f;
        return !r && !this.cachedRecords[i]
          ? !0
          : (r && !this.cachedRecords[i]) || (!r && this.cachedRecords[i])
          ? !1
          : ((u = r[0].id), (f = r[0].typename), n.IsEqualGUID(this.cachedRecords[i][this.recordId], u));
      }),
      t
    );
  })();
  n.FieldCache = t;
})(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(n, t) {
        for (var r = n.split('.'), u = t.split('.'), f = Math.min(r.length, u.length), i = 0; i < f; i++) {
          if (parseInt(r[i], 10) > parseInt(u[i], 10)) return !0;
          if (parseInt(r[i], 10) < parseInt(u[i], 10)) return !1;
        }
        return !0;
      }
      function r() {
        return Xrm ? Xrm.Utility : null;
      }
      function u(t, i, r, u) {
        var f = n.Utility.GetXrmUtility();
        f && f.openWebResource(t, i, r, u);
      }
      function f(t, i, r) {
        var u = n.Utility.GetXrmUtility();
        u && u.openEntityForm(t, i, r);
      }
      function e() {
        var i,
          t = n.Utility.GetXrmUtility();
        return (
          t && t.getGlobalContext && t.getGlobalContext().isCrmOnline
            ? (i = t.getGlobalContext().isCrmOnline())
            : n.LogMessageInConsole('FieldOneSkyUtils.Utility.IsCrmOnline: Not able to check.'),
          i
        );
      }
      function o(t, i, r) {
        if (n.IsMobile()) {
          var u = n.Fields.GetField(t, i),
            f = n.Fields.GetField(t, r);
          if (u && f)
            try {
              Xrm.Device.getCurrentPosition().then(function (n) {
                u.setValue(n.coords.latitude);
                f.setValue(n.coords.longitude);
              }, n.ShowErrorMessage);
            } catch (e) {
              n.LogMessageInConsole(e.message);
            }
        }
      }
      t.CRMVersionCompare = i;
      t.GetXrmUtility = r;
      t.OpenWebResource = u;
      t.OpenEntityForm = f;
      t.IsCrmOnline = e;
      t.UpdateGeoLocationOnMobile = o;
    })((t = n.Utility || (n.Utility = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function r(n) {
        return n.data.entity.getIsDirty();
      }
      function u(t, i) {
        var r = n.GetServerUrl();
        return (
          r.match(/\/$/) && (r = r.substring(0, r.length - 1)),
          r + '/main.aspx?etn=' + t + '&pagetype=entityrecord&id=' + i
        );
      }
      function f(t) {
        return n.GetServerUrl() + '/_root/homepage.aspx?pagemode=iframe&amp;etc=' + t;
      }
      function e(n, t, i, r, u) {
        var f = '';
        i && (f += 'width=' + i + ', ');
        r && (f += 'height=' + r + ', ');
        u && (f += u);
        window.open(this.CreateOuterFormUrl(n, t), '_blank', f);
      }
      function o(n) {
        var t = !0;
        if (n.ui)
          return (
            n.ui.controls.forEach(function (i) {
              if (i.getName() !== 'ok_id' && i.getName() !== 'cancel_id') {
                var u = i.getAttribute(),
                  r = i.getParent();
                u.getRequiredLevel() === 'required' &&
                  i.getVisible() &&
                  ((r && r.getVisible()) || !r) &&
                  u.getValue() == null &&
                  (t && n.data.attributes.get(i.getName()).setValue(), (t = !1));
              }
            }),
            t
          );
      }
      function s(t, i) {
        for (var r in i) n.Form.SetNotification(t, r, i[r]);
      }
      function h(n, t, r) {
        i(n, t, !0, 'ERROR', r);
      }
      function c(n, t, r) {
        i(n, t, !0, 'WARNING', r);
      }
      function l(n, t, r) {
        i(n, t, !0, 'INFO', r);
      }
      function a(t, i) {
        n.Form.SetNotification(t, i, !1);
      }
      function i(t, i, r, u, f) {
        return __awaiter(this, void 0, void 0, function () {
          var o, e;
          return __generator(this, function (s) {
            switch (s.label) {
              case 0:
                return t && t.ui
                  ? ((o = t.ui), (r = r != !1), !r)
                    ? [3, 2]
                    : (n.Telemetry.instance.notification(i),
                      (u = u || 'ERROR'),
                      [4, Localization.getLocalizationStringAsync(i)])
                  : [3, 4];
              case 1:
                return (e = s.sent()), f && (e = f(e)), [2, o.setFormNotification(e, u, i)];
              case 2:
                return [2, o.clearFormNotification(i)];
              case 3:
                return [3, 5];
              case 4:
                return (
                  n.LogMessageInConsole(
                    "FieldOneSkyUtils.Form.SetNotification: no notification was shown/cleared for localizedStringId '" +
                      i +
                      "'"
                  ),
                  [2, !1]
                );
              case 5:
                return [2];
            }
          });
        });
      }
      function v(t, r, u, f) {
        for (var o = [], e = 4; e < arguments.length; e++) o[e - 4] = arguments[e];
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function () {
            return [
              2,
              i(t, r, u, f, function (t) {
                var i;
                return (i = n.StringUtils).format.apply(i, [t].concat(o));
              }),
            ];
          });
        });
      }
      function y(n, t, r, u) {
        return __awaiter(this, void 0, void 0, function () {
          var f;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return (u = u || 'INFO'), [4, i(n, t, !0, u)];
              case 1:
                return (
                  (f = e.sent()),
                  f &&
                    setTimeout(function () {
                      return i(n, t, !1);
                    }, r),
                  [2, f]
                );
            }
          });
        });
      }
      function p(t, i) {
        if (t && t.data && t.data.addOnLoad) t.data.addOnLoad(i);
        else
          n.LogMessageInConsole(
            'FieldOneSkyUtils.Form.AddOnLoadDataListener: Failed to register  listener on form data'
          );
      }
      function w(t, i) {
        try {
          t.data.removeOnLoad(i);
        } catch (r) {
          var u = 'FieldOneSkyUtils.Form.RemoveOnLoadDataListener: Failed to remove listener on form data ' + r.message;
          n.LogMessageInConsole(u);
        }
      }
      function b(n, t) {
        n &&
          n.ui &&
          n.ui.formSelector &&
          n.ui.formSelector.items &&
          n.ui.formSelector.items.get &&
          t.forEach(function (t) {
            var i = n.ui.formSelector.items.get(t);
            i && i.setVisible && i.setVisible(!1);
          });
      }
      function k(t) {
        var i = '',
          r;
        try {
          i = t.ui.formSelector.getCurrentItem().getId();
        } catch (u) {
          r = 'FieldOneSkyUtils.Form.GetCurrentId: ' + u.message;
          n.LogMessageInConsole(r);
        }
        return i;
      }
      t.IsDirty = r;
      t.CreateOuterFormUrl = u;
      t.CreateInnerFormUrl = f;
      t.OpenDialog = e;
      t.IsFormValidForSaving = o;
      t.OpenWindows = {};
      t.SetErrorNotifications = s;
      t.SetErrorNotification = h;
      t.SetWarningNotification = c;
      t.SetInfoNotification = l;
      t.ClearNotification = a;
      t.SetNotification = i;
      t.SetNotificationWithArgs = v;
      t.ShowNotificationAutoHide = y;
      t.AddOnLoadDataListener = p;
      t.RemoveOnLoadDataListener = w;
      t.HideFormsOnFormSelector = b;
      t.GetCurrentId = k;
    })((t = n.Form || (n.Form = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t = (function () {
      function t(t, i) {
        if (
          ((this._jobCount = 0),
          (this._lastJobRemoved = null),
          (this._lastJobAdded = null),
          (this._maxExecutionInSecond = 10),
          (this._asyncPendingJobsLocalizedId = 'FormNotification_AsyncPendingJobsExist'),
          (this._asyncLongPendingJobsLocalizedId = 'FormNotification_AsyncLongPendingJobsExist'),
          (this._blockSaveAttributeName = null),
          n.IsNotNullAndUndefined(t))
        ) {
          if (((this._defaultFormContext = t), i)) {
            var r = n.Fields.GetEntityAttribute(t, i);
            r && (this._blockSaveAttributeName = i);
          }
          this._blockSaveAttributeName || (this._blockSaveAttributeName = this.GetDefaultBlockSaveAttributeName(t));
        } else n.OutputError('AsyncJobTracker.formContext', n.ErrorTypes.Null);
      }
      return (
        (t.prototype.AddJob = function (n) {
          var t = this.GetFormContextOrDefault(n);
          this._jobCount++;
          this._lastJobAdded = new Date();
          this.SetBlockSave(t);
        }),
        (t.prototype.RemoveJob = function (n) {
          if ((this._jobCount--, (this._lastJobRemoved = new Date()), !this.HasPendingJobs())) {
            var t = this.GetFormContextOrDefault(n);
            this.ClearPendingAsyncFormNotification(t);
            this.SetBlockSave(t, !1);
          }
        }),
        (t.prototype.HasPendingJobs = function () {
          return this._jobCount != 0;
        }),
        (t.prototype.HasDefaultFormContext = function () {
          return n.IsNotNullAndUndefined(this._defaultFormContext);
        }),
        (t.prototype.HasJobsRunningLongerThanExpected = function () {
          var i = new Date(),
            t = this._lastJobAdded != null ? (i.valueOf() - this._lastJobAdded.valueOf()) / 1e3 : -1,
            n = this._lastJobRemoved != null ? (i.valueOf() - this._lastJobRemoved.valueOf()) / 1e3 : -1;
          return ((t < n || n == -1) && t > this._maxExecutionInSecond) || (t > n && n > this._maxExecutionInSecond);
        }),
        (t.prototype.CheckPendingJobs = function (t, i) {
          var u = this.HasPendingJobs(),
            r = this.GetFormContextOrDefault(t),
            f;
          return (
            u
              ? ((i = i != !1),
                i &&
                  ((f = this.HasJobsRunningLongerThanExpected()
                    ? this._asyncLongPendingJobsLocalizedId
                    : this._asyncPendingJobsLocalizedId),
                  this.ClearPendingAsyncFormNotification(r),
                  n.Form.SetNotification(r, f)))
              : this.ClearPendingAsyncFormNotification(r),
            u
          );
        }),
        (t.prototype.GetFormContextOrDefault = function (t) {
          return n.IsNotNullAndUndefined(t) ? t : this._defaultFormContext;
        }),
        (t.prototype.ClearPendingAsyncFormNotification = function (t) {
          n.Form.SetNotification(t, this._asyncPendingJobsLocalizedId, !1);
          n.Form.SetNotification(t, this._asyncLongPendingJobsLocalizedId, !1);
        }),
        (t.prototype.GetDefaultBlockSaveAttributeName = function (t) {
          var i = 'ownerid',
            r = n.Fields.GetEntityAttributes(t);
          return r && (i = r.get(0).getName()), i;
        }),
        (t.prototype.SetBlockSave = function (t, i) {
          i === void 0 && (i = !0);
          t && n.Fields.SetIsValid(t, this._blockSaveAttributeName, !i, this._asyncPendingJobsLocalizedId);
        }),
        t
      );
    })();
    n.AsyncJobTracker = t;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      function t() {
        function f(n) {
          for (var r, u, t = 0; t < n.length; t++)
            if (((r = n[t].string), (u = n[t].prop), (i = n[t].versionSearch || n[t].identity), r)) {
              if (r.indexOf(n[t].subString) != -1) return n[t].identity;
            } else if (u) return n[t].identity;
        }
        function e(n) {
          var t = n.indexOf(i);
          if (t != -1) return parseFloat(n.substring(t + i.length + 1));
        }
        var i = '',
          n = '',
          r = -1,
          u = '',
          t = [
            { string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome' },
            { string: navigator.userAgent, subString: 'OmniWeb', versionSearch: 'OmniWeb/', identity: 'OmniWeb' },
            { string: navigator.vendor, subString: 'Apple', identity: 'Safari', versionSearch: 'Version' },
            { string: navigator.vendor, identity: 'Opera', versionSearch: 'Version' },
            { string: navigator.vendor, subString: 'iCab', identity: 'iCab' },
            { string: navigator.vendor, subString: 'KDE', identity: 'Konqueror' },
            { string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox' },
            { string: navigator.vendor, subString: 'Camino', identity: 'Camino' },
            { string: navigator.userAgent, subString: 'Netscape', identity: 'Netscape' },
            { string: navigator.userAgent, subString: 'MSIE', identity: 'Explorer', versionSearch: 'MSIE' },
            { string: navigator.userAgent, subString: 'Gecko', identity: 'Mozilla', versionSearch: 'rv' },
            { string: navigator.userAgent, subString: 'Mozilla', identity: 'Netscape', versionSearch: 'Mozilla' },
          ],
          o = [
            { string: navigator.platform, subString: 'Win', identity: 'Windows' },
            { string: navigator.platform, subString: 'Mac', identity: 'Mac' },
            { string: navigator.userAgent, subString: 'iPhone', identity: 'iPhone/iPod' },
            { string: navigator.platform, subString: 'Linux', identity: 'Linux' },
          ];
        return (
          (n = f(t) || 'An unknown browser'),
          (r = n == t[9].identity ? 0 : e(navigator.userAgent) || e(navigator.appVersion) || 'an unknown version'),
          (u = f(o) || 'an unknown OS'),
          n == t[10].identity && 'ActiveXObject' in window && (n = t[9].identity),
          { Browser: n, Version: r, OS: u }
        );
      }
      n.BrowserInfo = t;
    })((t = n.Browser || (n.Browser = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.isSaveMode = function (t) {
          return t == n.Save || t == n.SaveAndClose || t == n.SaveAndNew;
        }),
        (n.toString = function (t) {
          var i = null;
          switch (t) {
            case n.Save:
              i = 'save';
              break;
            case n.SaveAndClose:
              i = 'saveandclose';
              break;
            case n.SaveAndNew:
              i = 'saveandnew';
          }
          return i;
        }),
        (n.Save = 1),
        (n.SaveAndClose = 2),
        (n.SaveAndNew = 59),
        n
      );
    })();
    n.EventMode = t;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(n) {
        return n.data.entity.getId();
      }
      function r(t) {
        if (t == null) return n.EmptyGuid;
        var i = n.CurrentEntity.GetId(t);
        return (i == null || i == '') && (i = n.EmptyGuid), i;
      }
      function u(t, i) {
        t != null &&
          (i && typeof i == 'number' && n.EventMode.isSaveMode(i)
            ? t.data.entity.save(n.EventMode.toString(i))
            : t.data.entity.save());
      }
      function f(t) {
        t.data.entity.save(n.EventMode.toString(n.EventMode.SaveAndClose));
      }
      function e(t) {
        var i = n.CurrentEntity.GetId(t);
        return i == null ? i : i.substr(1, i.length - 2);
      }
      function o(n) {
        var t = this.GetIdOrDefault(n);
        return t.substr(1, t.length - 2);
      }
      t.GetId = i;
      t.GetIdOrDefault = r;
      t.Save = u;
      t.SaveAndClose = f;
      t.GetIdWithoutBrackets = e;
      t.GetIdWithoutBracketsOrDefault = o;
    })((t = n.CurrentEntity || (n.CurrentEntity = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g;
    (function (n) {
      n[(n.UserSettings_GetUserSettings = 1700)] = 'UserSettings_GetUserSettings';
    })((t = n.UserSettingsJobType || (n.UserSettingsJobType = {}))),
      (function (n) {
        n[(n.ProjectService = 5)] = 'ProjectService';
      })((i = n.ProductTypeCode || (n.ProductTypeCode = {}))),
      (function (n) {
        n[(n.Draft = 69097e4)] = 'Draft';
        n[(n.Submitted = 690970001)] = 'Submitted';
        n[(n.Canceled = 690970002)] = 'Canceled';
        n[(n.ProductsReceived = 690970003)] = 'ProductsReceived';
        n[(n.Billed = 690970004)] = 'Billed';
      })((r = n.PurchaseOrderSystemType || (n.PurchaseOrderSystemType = {})));
    (n.OrderType = { ServiceBased: 690970002, ProjectBased: 192350001, ItemBased: 19235e4 }),
      (function (n) {
        n[(n.FieldServiceLine = 690970001)] = 'FieldServiceLine';
      })((u = n.LineType || (n.LineType = {}))),
      (function (n) {
        n[(n.OutOfTheBoxForm = 1)] = 'OutOfTheBoxForm';
        n[(n.FieldServiceForm = 2)] = 'FieldServiceForm';
        n[(n.ProjectServiceForm = 3)] = 'ProjectServiceForm';
      })((f = n.SolutionFormType || (n.SolutionFormType = {}))),
      (function (n) {
        n[(n.Draft = 0)] = 'Draft';
        n[(n.Active = 1)] = 'Active';
        n[(n.Won = 2)] = 'Won';
        n[(n.Closed = 3)] = 'Closed';
      })((e = n.QuoteStateCode || (n.QuoteStateCode = {}))),
      (function (n) {
        n[(n.Inventory = 69097e4)] = 'Inventory';
        n[(n.NonInventory = 690970001)] = 'NonInventory';
        n[(n.Service = 690970002)] = 'Service';
      })((o = n.FieldServiceProductType || (n.FieldServiceProductType = {}))),
      (function (n) {
        n[(n.Active = 1)] = 'Active';
      })((s = n.ProductStatusCode || (n.ProductStatusCode = {}))),
      (function (n) {
        n[(n.WorkingHours = 69097e4)] = 'WorkingHours';
        n[(n.Break = 690970001)] = 'Break';
        n[(n.Travel = 690970002)] = 'Travel';
        n[(n.Overtime = 690970003)] = 'Overtime';
        n[(n.BusinessClosure = 690970004)] = 'BusinessClosure';
      })((h = n.BookingJournalType || (n.BookingJournalType = {}))),
      (function (n) {
        n[(n.Scheduled = 69097e4)] = 'Scheduled';
        n[(n.Traveling = 690970001)] = 'Traveling';
        n[(n.InProgress = 690970003)] = 'InProgress';
        n[(n.OnBreak = 690970002)] = 'OnBreak';
        n[(n.Completed = 690970004)] = 'Completed';
        n[(n.Cancelled = 690970005)] = 'Cancelled';
      })((c = n.BookingStatusFieldServiceStatus || (n.BookingStatusFieldServiceStatus = {}))),
      (function (n) {
        n[(n.Active = 0)] = 'Active';
      })((l = n.BookableResourceGroupStateCode || (n.BookableResourceGroupStateCode = {}))),
      (function (n) {
        n[(n.StandardCostFirst = 69097e4)] = 'StandardCostFirst';
        n[(n.CurrentStandard = 690970001)] = 'CurrentStandard';
      })((a = n.ProductCostOrder || (n.ProductCostOrder = {}))),
      (function (n) {
        n[(n.PurchaseOrderProduct = 69097e4)] = 'PurchaseOrderProduct';
        n[(n.PurchaseOrderReceipt = 690970001)] = 'PurchaseOrderReceipt';
        n[(n.WOProduct = 690970002)] = 'WOProduct';
        n[(n.InventoryAdjustment = 690970003)] = 'InventoryAdjustment';
        n[(n.InventoryTransfer = 690970004)] = 'InventoryTransfer';
        n[(n.RMAProduct = 690970005)] = 'RMAProduct';
        n[(n.Manual = 690970006)] = 'Manual';
      })((v = n.InventoryTransactionType || (n.InventoryTransactionType = {}))),
      (function (n) {
        n[(n.Case = 0)] = 'Case';
        n[(n.WorkOrder = 19235e4)] = 'WorkOrder';
      })((y = n.EntitlementEntityType || (n.EntitlementEntityType = {}))),
      (function (n) {
        n[(n.Products = 69097e4)] = 'Products';
        n[(n.Services = 690970001)] = 'Services';
        n[(n.ProductsAndServices = 690970002)] = 'ProductsAndServices';
      })((p = n.EntitlementAppliesTo || (n.EntitlementAppliesTo = {}))),
      (function (n) {
        n[(n.Cases = 0)] = 'Cases';
        n[(n.Hours = 1)] = 'Hours';
        n[(n.DiscountPercentAndPriceList = 19235e4)] = 'DiscountPercentAndPriceList';
      })((w = n.EntitlementAllocationType || (n.EntitlementAllocationType = {}))),
      (function (n) {
        n[(n.Pending = 69097e4)] = 'Pending';
        n[(n.Received = 690970001)] = 'Received';
        n[(n.Canceled = 690970002)] = 'Canceled';
      })((b = n.RMAProductStatus || (n.RMAProductStatus = {}))),
      (function (n) {
        n[(n.Pending = 69097e4)] = 'Pending';
        n[(n.Canceled = 690970001)] = 'Canceled';
        n[(n.ProductsReceived = 690970002)] = 'ProductsReceived';
      })((k = n.RMASystemStatus || (n.RMASystemStatus = {}))),
      (function (n) {
        n[(n.CreateRTV = 69097e4)] = 'CreateRTV';
        n[(n.ReturnToWarehouse = 690970001)] = 'ReturnToWarehouse';
        n[(n.ChangeToAssetOwnership = 690970002)] = 'ChangeToAssetOwnership';
      })((d = n.RMAProcessingAction || (n.RMAProcessingAction = {}))),
      (function (n) {
        n[(n.FSTimeEntryGrid = 1)] = 'FSTimeEntryGrid';
        n[(n.PSTimeEntryGrid = 2)] = 'PSTimeEntryGrid';
      })((g = n.TimeEntryGridType || (n.TimeEntryGridType = {})));
    n.UnncommonStatusField = { SystemUser: 'isdisabled' };
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      function t() {
        var n = function () {
          return Math.floor((1 + Math.random()) * 65536)
            .toString(16)
            .substring(1);
        };
        return '{' + n() + n() + '-' + n() + '-' + n() + '-' + n() + '-' + n() + n() + n() + '}';
      }
      function i(n, t) {
        var o = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
          u = o,
          r = [],
          e = Math.random,
          f,
          i;
        if (((t = t || u.length), n)) for (i = 0; i < n; i++) r[i] = u[0 | (e() * t)];
        else
          for (r[8] = r[13] = r[18] = r[23] = '-', r[14] = '4', i = 0; i < 36; i++)
            r[i] || ((f = 0 | (e() * 16)), (r[i] = u[i == 19 ? (f & 3) | 8 : f & 15]));
        return r.join('');
      }
      n.NewGuid = t;
      n.GUID = i;
    })((t = n.Guid || (n.Guid = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(n) {
        for (var r, t, u, f = [], i = 1; i < arguments.length; i++) f[i - 1] = arguments[i];
        for (r = n, t = 1; t < arguments.length; t++)
          (u = typeof arguments[t] == 'undefined' || arguments[t] == null ? '' : arguments[t].toString()),
            (r = r.replace(new RegExp('\\{' + (t - 1) + '\\}', 'g'), u));
        return r;
      }
      function r(t) {
        var i = '',
          o,
          s,
          h,
          c,
          f,
          r,
          e,
          u = 0;
        /[^A-Za-z0-9\+\/\=]/g.exec(t) && n.openAlertDialogLocalized('Utils_InvalidBaseCharecters');
        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        do
          (c = n.StringUtils.keyStr.indexOf(t.charAt(u++))),
            (f = n.StringUtils.keyStr.indexOf(t.charAt(u++))),
            (r = n.StringUtils.keyStr.indexOf(t.charAt(u++))),
            (e = n.StringUtils.keyStr.indexOf(t.charAt(u++))),
            (o = (c << 2) | (f >> 4)),
            (s = ((f & 15) << 4) | (r >> 2)),
            (h = ((r & 3) << 6) | e),
            (i = i + String.fromCharCode(o)),
            r != 64 && (i = i + String.fromCharCode(s)),
            e != 64 && (i = i + String.fromCharCode(h)),
            (o = s = h = ''),
            (c = f = r = e = '');
        while (u < t.length);
        return unescape(i);
      }
      function u(n) {
        var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          e,
          o,
          s,
          h,
          c,
          l,
          a,
          t,
          r = 0,
          y = 0,
          f = '',
          v = [],
          u;
        if (!n) return n;
        do
          (e = n.charCodeAt(r++)),
            (o = n.charCodeAt(r++)),
            (s = n.charCodeAt(r++)),
            (t = (e << 16) | (o << 8) | s),
            (h = (t >> 18) & 63),
            (c = (t >> 12) & 63),
            (l = (t >> 6) & 63),
            (a = t & 63),
            (v[y++] = i.charAt(h) + i.charAt(c) + i.charAt(l) + i.charAt(a));
        while (r < n.length);
        return (f = v.join('')), (u = n.length % 3), (u ? f.slice(0, u - 3) : f) + '==='.slice(u || 3);
      }
      t.keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      t.format = i;
      t.FromBase64String = r;
      t.ToBase64String = u;
    })((t = n.StringUtils || (n.StringUtils = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(t, i, r, u, f, e, o) {
        var s = { msdyn_jobtype: t, msdyn_inputparameter: i };
        if ((e && (s.msdyn_jobname = e), o && (s.msdyn_ConditionCode = o), u)) {
          r({
            InputParameter: i,
            OutputParameter: u,
            ExceptionMessage: null,
            ExceptionTrace: null,
            JobId: null,
            ConditionCode: null,
          });
          return;
        }
        FieldService.CrudApiSDK.createRecord(
          s,
          'msdyn_fieldservicesystemjob',
          function (n) {
            n &&
              FieldService.CrudApiSDK.retrieveRecord(
                n.id,
                'msdyn_fieldservicesystemjob',
                'msdyn_inputparameter,msdyn_outputparameter,msdyn_exceptionmessage,msdyn_exceptiontrace,msdyn_conditioncode',
                null,
                function (n) {
                  n != null &&
                    r({
                      InputParameter: n.msdyn_inputparameter,
                      OutputParameter: n.msdyn_outputparameter,
                      ExceptionMessage: n.msdyn_exceptionmessage,
                      ExceptionTrace: n.msdyn_exceptiontrace,
                      JobId: n.msdyn_fieldservicesystemjobid,
                      ConditionCode: n.msdyn_conditioncode,
                    });
                }
              );
          },
          function () {
            f ? f(arguments) : n.openAlertDialogLocalized('Create_JobTypeWithJobNO_Failed', t);
          }
        );
      }
      function r(n, t, i, r) {
        return __awaiter(this, void 0, void 0, function () {
          var f, u;
          return __generator(this, function (e) {
            switch (e.label) {
              case 0:
                return ((f = { msdyn_JobType: n, msdyn_InputParameter: t }), r && (f.msdyn_jobname = r), i)
                  ? [2, { InputParameter: t, OutputParameter: i, ExceptionMessage: null, ExceptionTrace: null }]
                  : [4, FieldService.CrudApiSDK.createRecord(f, 'msdyn_fieldservicesystemjob')];
              case 1:
                return (
                  (u = e.sent()),
                  [
                    2,
                    {
                      InputParameter: u ? u.msdyn_InputParameter : '{}',
                      OutputParameter: u ? u.msdyn_OutputParameter : '{}',
                      ExceptionMessage: u ? u.msdyn_ExceptionMessage : 'Unknown error!',
                      ExceptionTrace: u ? u.msdyn_ExceptionTrace : '',
                      JobId: u ? u.msdyn_fieldonesystemjobId : n,
                    },
                  ]
                );
            }
          });
        });
      }
      function u(t, i, r, u, f) {
        n.SystemJobs.PostJob(
          t,
          i,
          function (t) {
            t.OutputParameter && (t.OutputParameter = JSON.parse(t.OutputParameter, n.JsonUtils.DateParser));
            r(t);
          },
          u,
          null,
          f
        );
      }
      t.PostJob = i;
      t.PostJobSync = r;
      t.PostJobJson = u;
    })((t = n.SystemJobs || (n.SystemJobs = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      function t(n, t) {
        return typeof t == 'string' && /Date\(([-+]?\d+)\)/.exec(t)
          ? new Date(parseInt(t.replace('/Date(', '').replace(')/', ''), 10))
          : t;
      }
      n.DateParser = t;
    })((t = n.JsonUtils || (n.JsonUtils = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n() {
          this.getMetadata = function () {
            return {
              boundParameter: null,
              operationName: 'msdyn_FieldServiceSystemAction',
              operationType: 0,
              parameterTypes: {
                Type: { typeName: 'Edm.Int32', structuralProperty: 1 },
                InputParameter: { typeName: 'Edm.String', structuralProperty: 1 },
              },
            };
          };
        }
        return n;
      })();
      n.msdyn_FieldServiceSystemActionRequest = t;
    })((t = n.Actions || (n.Actions = {})));
  })(FieldService || (FieldService = {})),
  (function (n) {
    var t;
    (function (n) {
      var t = (function () {
        function n(n, t, i, r, u, f) {
          this.getMetadata = function () {
            return {
              boundParameter: null,
              operationName: 'msdyn_GeocodeAddress',
              operationType: 0,
              parameterTypes: {
                Target: { typeName: 'Edm.EntityReference', structuralProperty: 5 },
                Line1: { typeName: 'Edm.String', structuralProperty: 1 },
                City: { typeName: 'Edm.String', structuralProperty: 1 },
                StateOrProvince: { typeName: 'Edm.String', structuralProperty: 1 },
                PostalCode: { typeName: 'Edm.String', structuralProperty: 1 },
                Country: { typeName: 'Edm.String', structuralProperty: 1 },
              },
            };
          };
          this.Target = n;
          this.Line1 = t;
          this.City = i;
          this.StateOrProvince = r;
          this.PostalCode = u;
          this.Country = f;
        }
        return n;
      })();
      n.msdyn_GeocodeAddress = t;
    })((t = n.Actions || (n.Actions = {})));
  })(FieldService || (FieldService = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(t, i) {
        return (
          n.logMessageInConsoleLocalized('Execute_SystemAction_Failed', t),
          {
            InputParameter: null,
            OutputParameter: null,
            ExceptionMessage: i.message,
            ExceptionTrace: null,
            JobId: null,
            ConditionCode: null,
          }
        );
      }
      function r(n, t) {
        return {
          InputParameter: n,
          OutputParameter: t,
          ExceptionMessage: null,
          ExceptionTrace: null,
          JobId: null,
          ConditionCode: null,
        };
      }
      function u(t, i, r, u, f, e, o) {
        if (!this.enabled) {
          n.SystemJobs.PostJob(t, i, r, u, f, e, o);
          return;
        }
        if (u) {
          r(n.SystemActions.HandleResponse(i, u));
          return;
        }
        var s = new FieldService.Actions.msdyn_FieldServiceSystemActionRequest();
        return (
          (s.Type = t),
          (s.InputParameter = i),
          Xrm.WebApi.online.execute(s).then(
            function (u) {
              u.text()
                .then(function (t) {
                  var u;
                  if (typeof t == 'string')
                    try {
                      u = JSON.parse(t);
                    } catch (f) {
                      n.WarnMessageInConsole(f);
                    }
                  else u = t;
                  u && u.OutputParameter !== null
                    ? r(n.SystemActions.HandleResponse(i, u.OutputParameter))
                    : r(n.SystemActions.HandleResponse(i, null));
                })
                .catch(function (i) {
                  f
                    ? f(n.SystemActions.HandleException(t, i))
                    : Xrm.Navigation.openAlertDialog({ text: n.SystemActions.HandleException(t, i).ExceptionMessage });
                });
            },
            function (i) {
              f
                ? f(n.SystemActions.HandleException(t, i))
                : Xrm.Navigation.openAlertDialog({ text: n.SystemActions.HandleException(t, i).ExceptionMessage });
            }
          )
        );
      }
      function f(t, i) {
        var r = new FieldService.Actions.msdyn_GeocodeAddress(
          t.Target,
          t.Line1,
          t.City,
          t.StateOrProvince,
          t.PostalCode,
          t.Country
        );
        Xrm.WebApi.online.execute(r).then(
          function (t) {
            t.text().then(function (t) {
              var r;
              if (typeof t == 'string')
                try {
                  r = JSON.parse(t);
                } catch (u) {
                  n.WarnMessageInConsole(u);
                }
              else r = t;
              r ? i(r) : i(null);
            });
          },
          function () {}
        );
      }
      function e(t, i, r, u, f) {
        if (!this.enabled) {
          n.SystemJobs.PostJobJson(t, i, r, u, f);
          return;
        }
        n.SystemActions.ExecuteAsync(
          t,
          i,
          function (t) {
            t.OutputParameter && (t.OutputParameter = JSON.parse(t.OutputParameter, n.JsonUtils.DateParser));
            r(t);
          },
          u,
          null,
          f
        );
      }
      t.enabled = !0;
      t.HandleException = i;
      t.HandleResponse = r;
      t.ExecuteAsync = u;
      t.ExecuteAsyncGeoCodeAddress = f;
      t.ExecuteAsyncJson = e;
    })((t = n.SystemActions || (n.SystemActions = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      var t;
      (function (n) {
        n.Initialize = 'InitializeJob{0}';
        n.Complete = 'Job{0}Complete';
      })((t = n.Parameter || (n.Parameter = {})));
      n.System_Initialize = 2;
      n.ScheduleAssistant_Load = 151;
      n.ScheduleAssistant_GetResources = 152;
      n.SchedulerJob_MoveToOtherDay = 201;
      n.SchedulerJob_ExtractView = 202;
      n.SchedulerJob_SelectResourcesByServiceTerritory = 203;
      n.SchedulerJob_WOSLocations = 204;
      n.SchedulerJob_EmailDirection = 205;
      n.SchedulerJob_GetData = 206;
      n.SchedulerJob_LoadTemplates = 207;
      n.SchedulerJob_SplitWOR = 208;
      n.SchedulerJob_GetLocation = 209;
      n.SchedulerJob_SelectResources = 210;
      n.SchedulerJob_UnschReqMapPins = 211;
      n.SchedulerJob_OrganizationalUnitLocations = 212;
      n.SchedulerJob_GetResourcesGPSLocation = 213;
      n.SchedulerJob_GetSchWOLocation = 214;
      n.SchedulerJob_GetDataByView = 215;
      n.SchedulerJob_SelectCalendar = 220;
      n.SchedulerJob_GetAllServiceTerritories = 221;
      n.SchedulerJob_GetTotalForServiceCenter = 222;
      n.SchedulerJob_GetBookingFieldDataById = 223;
      n.SchedulerJob_GetRightsForSchedule = 224;
      n.SchedulerJob_LoadAlertsByViewAndTemplate = 225;
      n.SchedulerJob_Snooze_Dismiss = 226;
      n.SchedulerJob_GetBookingTemplateData = 227;
      n.QuoteDetailImportFromAgreement = 271;
      n.Agreements_GenerateOrdersAndBookingsForConcreteAgreementBookingDates = 408;
      n.Agreement_CopyAgreements = 411;
      n.WorkOrder_FollowUp = 412;
      n.Agreement_CopyRelatedEntityToAgreement = 416;
      n.Agreement_GetAgreementDates = 417;
      n.InventoryJobs_GenerateTransfers = 501;
      n.InventoryJobs_GenerateInventoryAdjstProducts = 502;
      n.InventoryJobs_GetData = 503;
      n.InventoryJobs_GetJson = 504;
      n.InventoryJobs_SearchWarehouse = 506;
      n.InventoryJobs_TransferAllProductsFromWarehouse = 507;
      n.WorkOrderProduct_GetProductFromAgreement = 704;
      n.WorkOrderProduct_GetPriceListFromAgreementProduct = 705;
      n.UniqueNumber_GetNumber = 1100;
      n.AutoNumber_OptIn = 1105;
      n.AutoNumber_Get = 1106;
      n.AutoNumber_Update = 1107;
      n.RMAReceipt_CreditToCustomer = 1200;
      n.RMA_RMACreateRTVGetInitialProducts = 1300;
      n.RMA_RMACreateRTVGenerateRTV = 1301;
      n.RMA_RMAAddWOProductsGenerateWOP = 1302;
      n.RMA_RMAAddWOProductsGetInitialProducts = 1303;
      n.RMA_CreateRTV = 1304;
      n.RTV_AddRMAProduct = 1305;
      n.RTV_GetAllRMAProducts = 1306;
      n.RMA_GetRMAProductVendorsForCreateRTV = 1307;
      n.RTV_AddAllRMAProducts = 1308;
      n.RMA_RMAGetProductDetails = 1309;
      n.TimeOffRequest_ApproveTimeOffRequests = 1400;
      n.TimeOffRequest_GetUserPrivilegeOfApprovedBy = 1401;
      n.LineField_ValidateAgreementsForNewQuoteLine = 1800;
      n.LineField_ValidateAgreementsForNewOrderLine = 1801;
      n.GetPriceListItemFromQuoteLinesPriceListGivenProductAndUnit = 1900;
      n.PurchaseOrderReceiptProduct_GetPOProducts = 2e3;
      n.Entitlement_EntitlementFilterJob = 2551;
      n.IncidentType_ApplySuggestedDuration = 800;
      n.IncidentType_IsContainsServiceTasks = 801;
      n.IncidentType_IsEstimatedDurationCalculated = 802;
      n.IncidentType_CalculateSuggestedDuration = 475;
      n.Solution_RetrieveVersions = 2601;
      n.IncidentTypeRecommendation_ProvisionMLModel = 2700;
      n.IncidentTypeRecommendation_ApplySuggestion = 2701;
      n.IncidentTypeRecommendation_DislikeSuggestion = 2702;
      n.WorkOrderMetrics_SetFieldsReadonly = 3e3;
    })((t = n.SystemJobType || (n.SystemJobType = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function r(n, t) {
        return function (i, r) {
          return f(n + '.' + i, __assign({}, r, t));
        };
      }
      function o(n, t) {
        var u = r(n, t)(i.Marker);
        return function (n, t) {
          var r;
          u(__assign({}, t, ((r = {}), (r[i.Marker] = n), r)));
        };
      }
      function s(n, t) {
        var u = r(n, t)(i.Error);
        return function (n, t, r) {
          var f,
            e = undefined,
            o,
            s;
          t instanceof Error
            ? ((o = t.message), (s = t.stack), (e = { message: o, stack: s }))
            : (e = typeof t == 'string' ? { message: t } : __assign({}, t));
          u(((f = {}), (f[i.Source] = n), (f[i.Error] = e), (f.parameters = r), f));
        };
      }
      function h(n, t) {
        var u = r(n, t)(i.Validation);
        return function (n) {
          var t;
          return u(((t = {}), (t[i.LabelId] = n), t));
        };
      }
      function c(n, t) {
        var u = r(n, t)(i.Notification);
        return function (n) {
          var t;
          return u(((t = {}), (t[i.LabelId] = n), t));
        };
      }
      function l(i, r) {
        return (t.instance = n.isUci() ? a(i, __assign({}, r, { SessionId: n.Guid.GUID() })) : u());
      }
      function a(n, t) {
        var i = r(n, t),
          u = o(n, t),
          f = s(n, t),
          e = h(n, t),
          l = c(n, t);
        return { stopwatch: i, marker: u, notification: l, error: f, validation: e };
      }
      function u() {
        return {
          stopwatch: function () {
            return function () {};
          },
          marker: function () {},
          error: function () {},
          notification: function () {},
          validation: function () {},
        };
      }
      function f(n, t) {
        var i = '' + e + n,
          r = Xrm.Internal.createPerformanceStopwatch(i, t);
        return function (n) {
          r(n);
        };
      }
      var i = (function () {
          function n() {}
          return (
            (n.Error = 'Error'),
            (n.LabelId = 'LabelId'),
            (n.Marker = 'Marker'),
            (n.Notification = 'Notification'),
            (n.SessionId = 'SessionId'),
            (n.Source = 'Source'),
            (n.Validation = 'Validation'),
            n
          );
        })(),
        e = 'msdyn.FieldService.';
      t.instance = u();
      t.createSession = l;
      t.startStopwatch = f;
    })((t = n.Telemetry || (n.Telemetry = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.getSettings = function () {
          return __awaiter(this, void 0, void 0, function () {
            var i, t;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return n.CachedValues !== undefined
                    ? [2, n.CachedValues]
                    : ((i = Xrm.Utility.getGlobalContext().getUserId()),
                      [4, FieldService.CrudApiSDK.retrieveRecord(i, 'usersettings', null, null)]);
                case 1:
                  return (t = r.sent()), (n.CachedValues = t), [2, t];
              }
            });
          });
        }),
        (n.CachedValues = undefined),
        n
      );
    })();
    n.UserSettings = t;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (n) {
      function t(n, t) {
        if (n) return n.getControl(t);
      }
      function u(n, t) {
        if (n) return n.getControl(t);
      }
      function i(n, i) {
        var u = t(n, i),
          r;
        if (u && ((r = u.getAttribute()), r)) return r.getValue();
      }
      function r(n, i, r) {
        var f = t(n, i),
          u;
        f && ((u = f.getAttribute()), u && u.setValue(r));
      }
      function f(n, t, u) {
        i(n, t) == null && r(n, t, u);
      }
      function e(n, t) {
        if (n) {
          var i = n.getAttribute(t);
          if (i) return i.controls;
        }
      }
      n.GetControl = t;
      n.GetLookup = u;
      n.getControlValue = i;
      n.setValueToControl = r;
      n.setDefaultValueIfNull = f;
      n.GetControls = e;
    })((t = n.Control || (n.Control = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t;
    (function (t) {
      function i(n, t) {
        return n.ui.navigation.items.get(t);
      }
      function r(n, t) {
        return n.ui.tabs.get(t);
      }
      function u(t, i, r) {
        var u = n.Visibility.GetTab(t, i);
        if (u && u.sections && u.sections.get) return u.sections.get(r);
        n.OutputError(i, n.ErrorTypes.Null);
      }
      function f(t, i, r) {
        var u = n.Visibility.GetNavigationItem(t, i);
        u && u.setVisible ? u.setVisible(r) : n.OutputError(i, n.ErrorTypes.Null);
      }
      function e(t, i, r) {
        var u = n.Visibility.GetTab(t, i);
        u && u.setVisible ? u.setVisible(r) : n.OutputError(i, n.ErrorTypes.Null);
      }
      function o(t, i, r, u) {
        var f = n.Visibility.GetTabSection(t, i, r);
        f && f.setVisible ? f.setVisible(u) : n.OutputError(r, n.ErrorTypes.Null);
      }
      function s(t, i, r) {
        var u = n.Control.GetControl(t, i);
        u && u.setVisible ? u.setVisible(r) : n.OutputError(i, n.ErrorTypes.Null);
      }
      t.GetNavigationItem = i;
      t.GetTab = r;
      t.GetTabSection = u;
      t.SetNavigationVisibility = f;
      t.SetTabVisibility = e;
      t.SetSectionVisibility = o;
      t.SetControlVisibility = s;
    })((t = n.Visibility || (n.Visibility = {})));
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    function h() {
      return n.ScriptWindow != n.HtmlWindow;
    }
    function u(t, i, r) {
      return FieldService.CrudApiSDK.isOffline(t) || (r == !0 && n.isMobileClientOffline()) ? i : '_' + i + '_value';
    }
    function c(t, i, r) {
      return FieldService.CrudApiSDK.isOffline(t) || (r == !0 && n.isMobileClientOffline())
        ? i
        : '_' + i + '_value@Microsoft.Dynamics.CRM.lookuplogicalname';
    }
    function l(t, i, r) {
      return FieldService.CrudApiSDK.isOffline(t) || (r == !0 && n.isMobileClientOffline())
        ? i
        : '_' + i + '_value@OData.Community.Display.V1.FormattedValue';
    }
    function a(t, i, r) {
      return FieldService.CrudApiSDK.isOffline(t) || (r == !0 && n.isMobileClientOffline())
        ? i
        : i + '@OData.Community.Display.V1.FormattedValue';
    }
    function v(t, i, r) {
      return {
        Id: n.GetODataAttribute(t, i, r),
        LogicalName: n.GetODataLogicalName(t, i, r),
        Name: n.GetODataFormattedValue(t, i, r),
      };
    }
    function y(t) {
      f() || n.Form.SetNotification(t, 'FieldServiceNotSupportedInWebClientWarning', !0, 'WARNING');
    }
    function f() {
      return Xrm.Internal && Xrm.Internal.isUci && Xrm.Internal.isUci();
    }
    function p(n, t, i) {
      return { Id: t, LogicalName: n, Name: i };
    }
    function w(i) {
      if (i && i.ui) return i.ui.getFormType();
      t('formContext.ui', n.ErrorTypes.Null);
    }
    function b(i) {
      var r = i,
        u = null;
      return r && r.ui ? (u = r.ui) : t('formContext.ui', n.ErrorTypes.Null), u;
    }
    function k() {
      return n.GetGlobalContext().getClientUrl();
    }
    function d() {
      return n.GetGlobalContext().getClientUrl();
    }
    function g() {
      return n.GetGlobalContext().getUserId();
    }
    function nt(n) {
      return n.data.entity.getEntityName();
    }
    function tt(n, t, i) {
      return Xrm.Utility.getEntityMetadata(n, []).then(function (n) {
        return t ? n.DisplayCollectionName : n.DisplayName;
      }, i);
    }
    function it(t, i, r) {
      n.RetrieveFieldOneSettingsRecord(
        function (t) {
          t && t.length > 0
            ? i && i(t[0])
            : n.SystemActions.ExecuteAsync(
                n.SystemJobType.System_Initialize,
                '',
                function () {
                  n.RetrieveFieldOneSettingsRecord(function (n) {
                    n && n.length > 0 && i && i(n[0]);
                  }, r);
                },
                !1,
                r,
                'Initialize'
              );
        },
        r,
        t
      );
    }
    function rt(t, i, r) {
      if (this.FieldOneSettingAsync) t(this.FieldOneSettingAsync);
      else {
        var u = this;
        n.RetrieveFieldOneSettingsRecord(
          function (r) {
            r && r.length > 0
              ? ((u.FieldOneSettingAsync = r[0]), t && t(u.FieldOneSettingAsync))
              : n.SystemActions.ExecuteAsync(
                  n.SystemJobType.System_Initialize,
                  '',
                  function () {
                    n.RetrieveFieldOneSettingsRecord(function (n) {
                      n && n.length > 0 && ((u.FieldOneSettingAsync = n[0]), t && t(u.FieldOneSettingAsync));
                    }, i);
                  },
                  !1,
                  i,
                  'Initialize'
                );
          },
          i,
          r
        );
      }
    }
    function ut(n, t) {
      var i = this;
      this.SchedulingParameterAsync
        ? n(this.SchedulingParameterAsync)
        : FieldService.CrudApiSDK.retrieveMultipleRecords(
            'msdyn_schedulingparameter',
            '$top=1',
            function (t) {
              var r = t && t.entities;
              r && r.length > 0 && ((i.SchedulingParameterAsync = r[0]), n(i.SchedulingParameterAsync));
            },
            t
          );
    }
    function ft() {
      return new Promise(function (t, i) {
        n.SystemActions.ExecuteAsync(
          n.UserSettingsJobType.UserSettings_GetUserSettings,
          null,
          function (n) {
            if (n && n.OutputParameter) {
              var i = JSON.parse(n.OutputParameter);
              t(i.IsRightToLeft);
            } else t(!1);
          },
          null,
          function () {
            i(null);
          },
          'Get Current User Settings'
        );
      });
    }
    function et(n) {
      if (n && n.length > 0) return n.replace(new RegExp('{', 'g'), '').replace(new RegExp('}', 'g'), '');
    }
    function ot(n) {
      return typeof n != 'undefined' && n !== null;
    }
    function st() {
      return Xrm.Utility.getGlobalContext();
    }
    function ht() {
      var t = n.GetGlobalContext();
      return t.client.getClient();
    }
    function ct() {
      var t = n.GetGlobalContext();
      return t.client.getClientState();
    }
    function lt() {
      return n.isOutlook() && n.GetClientState() == n.ClientState.Offline;
    }
    function at() {
      return n.GetClientState() == n.ClientState.Offline;
    }
    function vt() {
      return n.GetClient() == n.ClientMode.Outlook;
    }
    function t(t, i) {
      var r = '';
      switch (i) {
        case n.ErrorTypes.Null:
          r = t + ' is null';
      }
      typeof console != 'undefined' && typeof console.log != 'undefined' && console.log(r);
      n.Telemetry.instance.error('OutputError', r, { ObjectName: t });
    }
    function yt(t, i, r) {
      return __awaiter(this, void 0, void 0, function () {
        var u, f;
        return __generator(this, function (e) {
          switch (e.label) {
            case 0:
              return t ? (r == !0 ? [4, n.getCRMTimezoneOffset()] : [3, 2]) : [3, 3];
            case 1:
              i = e.sent();
              e.label = 2;
            case 2:
              i &&
                ((u = t.getTimezoneOffset()), (f = Number(i)), t.setMilliseconds(t.getMilliseconds() + (f - u) * -6e4));
              e.label = 3;
            case 3:
              return [2, t];
          }
        });
      });
    }
    function pt() {
      return __awaiter(this, void 0, void 0, function () {
        var t, i, r;
        return __generator(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, n.UserSettings.getSettings()];
            case 1:
              return ((t = u.sent()), t && t.timezonebias)
                ? ((i = t.timezonedaylightbias), (r = i ? parseInt(i, 10) : 0), [2, parseInt(t.timezonebias, 10) + r])
                : [2, null];
          }
        });
      });
    }
    function wt() {
      return __awaiter(this, void 0, void 0, function () {
        var t;
        return __generator(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, n.UserSettings.getSettings()];
            case 1:
              return (t = i.sent()), [2, t && t.timezonebias ? parseInt(t.timezonebias, 10) : null];
          }
        });
      });
    }
    function bt() {
      return __awaiter(this, void 0, void 0, function () {
        var t;
        return __generator(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, n.UserSettings.getSettings()];
            case 1:
              return (t = i.sent()), [2, t && t.dateformatstring ? t.dateformatstring : null];
          }
        });
      });
    }
    function kt() {
      var t = '',
        i = Xrm.Utility.getGlobalContext(),
        n;
      return i && ((n = i.getVersion()), n && (t = n.substr(0, 1))), t;
    }
    function dt() {
      var i = '',
        r = Xrm.Utility.getGlobalContext(),
        t,
        n;
      return r && ((t = r.getVersion()), t && ((n = t.split('.')), n.length >= 2 && (i = n[0] + '.' + n[1]))), i;
    }
    function gt(t) {
      return n.GetCrmMajorVersion() >= t;
    }
    function ni() {
      return n.GetGlobalContext().getUserLcid();
    }
    function i() {
      return __awaiter(this, void 0, void 0, function () {
        var t;
        return __generator(this, function () {
          return (
            (t = n.GetGlobalContext()),
            [
              2,
              t.getCurrentAppProperties().then(
                function (n) {
                  var t;
                  return n && (t = n.uniqueName), t;
                },
                function (t) {
                  n.LogMessageInConsole(t);
                }
              ),
            ]
          );
        });
      });
    }
    function ti() {
      return n.GetBingMapUserMarketParameterString() + n.GetBingMapUserSensitiveRegionParameterString();
    }
    function ii() {
      var t = '',
        i = n.GetUserLocaleIdString();
      return i != '' && (t = '&mkt=' + i), t;
    }
    function ri() {
      var t = '',
        i = n.GetUserSensitiveRegionCode();
      return i != '' && (t = '&ur=' + i), t;
    }
    function ui() {
      var t = '',
        i = n.GetUserLocaleIdString();
      return i != '' && (t = '&c=' + i), t;
    }
    function fi() {
      var t = '',
        r = n.GetUserLcid(),
        i = {
          1042: { Code: 'KR' },
          1056: { Code: 'PK' },
          1103: { Code: 'IN' },
          2052: { Code: 'CN' },
          6145: { Code: 'MA' },
          11274: { Code: 'AR' },
        }[r];
      return i != null && (t = i.Code), t;
    }
    function ei() {
      var t = '',
        r = n.GetUserLcid(),
        u = n.GetLocaleData(),
        i = u[r];
      return i != null && (t = i.Code), t;
    }
    function oi() {
      return {
        1025: { Code: 'ar-SA' },
        1069: { Code: 'eu' },
        1026: { Code: 'bg-BG' },
        1027: { Code: 'ca' },
        3076: { Code: 'zh-HK' },
        2052: { Code: 'zh-CN' },
        1028: { Code: 'zh-TW' },
        1050: { Code: 'hr-HR' },
        1029: { Code: 'cs-CZ' },
        1030: { Code: 'da-DK' },
        1043: { Code: 'nl-NL' },
        1033: { Code: 'en-US' },
        1061: { Code: 'et-EE' },
        1035: { Code: 'fi-FI' },
        1036: { Code: 'fr-FR' },
        1110: { Code: 'gl' },
        1031: { Code: 'de-DE' },
        1032: { Code: 'el-GR' },
        1037: { Code: 'he-IL' },
        1081: { Code: 'hi-IN' },
        1038: { Code: 'hu-HU' },
        1057: { Code: 'id-ID' },
        1040: { Code: 'it-IT' },
        1041: { Code: 'ja-JP' },
        1087: { Code: 'kk-KZ' },
        1042: { Code: 'ko-KR' },
        1062: { Code: 'lv-LV' },
        1063: { Code: 'lt-LT' },
        1086: { Code: 'ms-MY' },
        1044: { Code: 'nb-NO' },
        1045: { Code: 'pl-PL' },
        1046: { Code: 'pt-BR' },
        2070: { Code: 'pt-PT' },
        1048: { Code: 'ro-RO' },
        1049: { Code: 'ru-RU' },
        3098: { Code: 'sr-SP' },
        2074: { Code: 'sr-SP' },
        1051: { Code: 'sk-SK' },
        1060: { Code: 'sl-SI' },
        3082: { Code: 'es-ES' },
        1053: { Code: 'sv-SE' },
        1054: { Code: 'th-TH' },
        1055: { Code: 'tr-TR' },
        1058: { Code: 'uk-UK' },
        1066: { Code: 'vi-VN' },
      };
    }
    function si(t, i) {
      n.GetSchedulingParameterAsync(
        function (i) {
          if (i) {
            var r = i.msdyn_mapapikey;
            typeof r != 'undefined' && r != null && r.replace(/\s/g, '') != '' ? t(r) : t(n.SdkApiMapKey);
          }
        },
        function (n) {
          i && i(n);
        }
      );
    }
    function e(n) {
      typeof console != 'undefined' && typeof console.log != 'undefined' && console.log(n);
    }
    function hi(n) {
      typeof console != 'undefined' && typeof console.warn != 'undefined' && console.warn(n);
    }
    function ci(t, i, r) {
      var u = null,
        f;
      n.IsNullOrUndefined(r)
        ? ((u = 'msdyn_autoallocateestimatedproducts,msdyn_productcostorder,msdyn_useofproductsoutofstock,'),
          (u +=
            'msdyn_autogeocodeaddresses,msdyn_enableaddresssuggestions,msdyn_defaultscheduledbookingstatus,msdyn_defaultcanceledbookingstatus,'),
          (u +=
            'msdyn_autogeneratewoforagreementbooking,msdyn_generateagreementwoxdaysinadvance,msdyn_defaultcrewstrategy,'),
          (u += 'msdyn_purchaseorderapprovalrequired,msdyn_entitynumberlength,msdyn_advancedsettings,'),
          (u +=
            'msdyn_workpaytype,msdyn_breakpaytype,msdyn_travelpaytype,msdyn_overtimepaytype,msdyn_businessclosurepaytype,'),
          (u += 'msdyn_timeentrygenerationstrategy,'),
          (u += 'msdyn_disablecustomerassetvalidation,msdyn_suggestreparentingcustomerassets'))
        : (u = r.join());
      f = FieldService.WebApiSDK.getRetrieveOptionsString(u, null, null, '1');
      FieldService.CrudApiSDK.retrieveMultipleRecords(
        'msdyn_fieldservicesetting',
        f,
        function (n) {
          t && n && n.entities && t(n.entities);
        },
        i
      );
    }
    function li(n, t) {
      var u = null,
        i;
      t || (t = {});
      var f = 'Microsoft.Dynamics.CRM.',
        e = t.entityId,
        r = t.entityName,
        o = n.data;
      return (
        (e && r) || o == null || o.entity == null || ((r = f + o.entity.getEntityName()), (e = o.entity.getId())),
        e &&
          r &&
          ((i = t.odataType),
          i && i.indexOf(f) == -1 && (i = f + i),
          (u = {}),
          (u['@odata.type'] = i ? i : f + r),
          (u[r + 'id@odata.type'] = 'Guid'),
          (u[r + 'id'] = e)),
        u
      );
    }
    function ai() {
      return n.GetClient() == n.ClientMode.Mobile;
    }
    function vi(t, i, r) {
      var f = t.getFormContext(),
        u;
      t &&
        i &&
        ((u = t.getEventArgs()),
        u.isDefaultPrevented() ||
          ((r === undefined || r === null) && (r = u.getSaveMode() != n.SaveMode.AutoSave),
          i.CheckPendingJobs(f, r) && u.preventDefault()));
    }
    function yi(t, i, r, u) {
      if ((u === void 0 && (u = !0), u && n.isMobileClientOffline())) o(t, i, r);
      else {
        var f = t.getFormContext();
        n.Form.SetNotification(f, 'FormNotification_InvalidCacheRestartedValidations', !1);
      }
    }
    function o(t, i, r) {
      var e = t.getEventArgs(),
        u;
      if (!e.isDefaultPrevented()) {
        var o = 'FormNotification_InvalidCacheRestartedValidations',
          f = t.getFormContext(),
          s = !1;
        for (u = 0; u < r.length; u++) i.isCachedRecordValid(f, r[u]) || (n.Fields.FireOnChange(f, r[u]), (s = !0));
        s ? (n.Form.SetNotification(f, o), e.preventDefault()) : n.Form.SetNotification(f, o, !1);
      }
    }
    function pi(n, t, i) {
      for (var u, f = n != null && t != null && i != null, r = 0; f && r < i.length; r++)
        if (((u = i[r]), n[u] != t[u])) return !1;
      return f;
    }
    function wi(t, i, r) {
      if (i && i.Id) {
        var u = n.Fields.GetValue(t, 'transactioncurrencyid');
        (u && u[0].id.toLowerCase().replace(/{/g, '').replace(/}/g, '') == i.Id) ||
          (r
            ? n.InitializeCurrencySymbol(t, i, r)
            : FieldService.CrudApiSDK.retrieveRecord(
                i.Id,
                'transactioncurrency',
                'currencysymbol,currencyname,isocurrencycode,exchangerate,currencyprecision',
                null,
                function (r) {
                  r && n.InitializeCurrencySymbol(t, i, r);
                },
                function () {}
              ));
      }
    }
    function bi(t, i, r) {
      r.currencyprecision = r.currencyprecision.toString();
      var u = {
          currencyname: { name: 'currencyname', value: r.currencyname },
          isocurrencycode: { name: 'isocurrencycode', value: r.isocurrencycode },
          currencysymbol: { name: 'currencysymbol', value: r.currencysymbol },
          exchangerate: { name: 'exchangerate', value: r.exchangerate },
          currencyprecision: { name: 'currencyprecision', value: r.currencyprecision },
        },
        f = [
          { name: 'currencyname', value: r.currencyname },
          { name: 'isocurrencycode', value: r.isocurrencycode },
          { name: 'currencysymbol', value: r.currencysymbol },
          { name: 'exchangerate', value: r.exchangerate },
          { name: 'currencyprecision', value: r.currencyprecision },
        ];
      n.Fields.SetLookUpValue(t, 'transactioncurrencyid', '{' + i.Id.toUpperCase() + '}', i.Name, i.LogicalName, u, f);
      n.Fields.AddOnChange(t, i.LogicalName, function () {});
      n.Fields.FireOnChange(t, i.LogicalName);
    }
    function ki(t) {
      var i = n.Fields.GetValue(t, 'transactioncurrencyid')[0].id;
      FieldService.CrudApiSDK.retrieveRecord(
        i,
        EntityMetadata.TransactionCurrency.EntityLogicalName,
        n.transactionCurrencyAttrs.exchangerate.LogicalName,
        null,
        function (i) {
          i != null && n.Fields.SetValue(t, n.transactionCurrencyAttrs.exchangerate.LogicalName, i.ExchangeRate);
        },
        function () {}
      );
    }
    function di(n) {
      var t = n.match(/(M)/g),
        i,
        r;
      return (
        t.length == 1
          ? (n = n.replace(/M/, 'm'))
          : t.length == 2
          ? (n = n.replace(/MM/, 'mm'))
          : t.length == 3 && (n = n.replace(/MMM/, 'M')),
        (i = /(y)/g),
        (r = n.match(i)),
        r.length == 4 ? n.replace(/yyyy/i, 'yy') : n.replace(/yy/i, 'y')
      );
    }
    function gi() {
      var t = n.GetUserLcid();
      return t == 1041 || t == 2052 || t == 1028;
    }
    function nr(n, t) {
      n.ui &&
        n.ui.controls.forEach(function (n) {
          if (n) {
            var i = n.getControlType();
            i &&
              i !== 'iframe' &&
              i !== 'webresource' &&
              i !== 'subgrid' &&
              n.setDisabled &&
              typeof n.setDisabled == 'function' &&
              n.setDisabled(t);
          }
        });
    }
    function tr(n) {
      n.ui.refreshRibbon();
    }
    function ir(t, i) {
      var r = u(
        EntityMetadata.msdyn_agreement.EntityLogicalName,
        EntityMetadata.msdyn_agreement.attributes.msdyn_pricelist.LogicalName
      );
      FieldService.CrudApiSDK.retrieveRecord(t, EntityMetadata.msdyn_agreement.EntityLogicalName, r, null, function (
        t
      ) {
        if (t && t[r] != null) {
          var u = n.priceListAttributes.transactioncurrencyid.LogicalName,
            f =
              u +
              '($select=' +
              n.transactionCurrencyAttrs.transactioncurrencyid.LogicalName +
              ',' +
              n.transactionCurrencyAttrs.currencyname.LogicalName +
              ')';
          FieldService.CrudApiSDK.retrieveRecord(t[r], EntityMetadata.PriceLevel.EntityLogicalName, u, f, function (t) {
            if (t && t[u]) {
              var r = [];
              r[0] = {};
              r[0].id = t[u][n.transactionCurrencyAttrs.transactioncurrencyid.LogicalName];
              r[0].name = t[u][n.transactionCurrencyAttrs.currencyname.LogicalName];
              r[0].typename = EntityMetadata.TransactionCurrency.EntityLogicalName;
              typeof i == 'function' && i(r);
            }
          });
        }
      });
    }
    function rr(t, i) {
      if (!n.IsMobile() && !n.IsNullOrUndefined(i)) {
        var r = '';
        FieldService.CrudApiSDK.retrieveMultipleRecords(
          'msdyn_msdyn_functionallocation_account',
          '$select=' +
            n.functionalLocationAttributes.functionallocationid.LogicalName +
            '&$filter=' +
            n.accountAttributes.accountid.LogicalName +
            " eq '" +
            i +
            "'",
          function (i) {
            i && i.entities && i.entities.length > 0
              ? i.entities.forEach(function (n) {
                  r +=
                    '<condition attribute="msdyn_functionallocationid" operator="eq-or-under" value="' +
                    n.msdyn_functionallocationid +
                    '" />';
                })
              : (r += '<condition attribute="msdyn_functionallocationid" operator="eq-or-under" value="" />');
            n.SetFunctionalLocationLookup(t, r);
          },
          n.ShowErrorMessage
        );
      }
    }
    function ur(t, i) {
      var r = '{80AC8362-F801-4196-A7B2-5ABE9170DEF8}',
        u = !0,
        f =
          '<fetch><entity name="msdyn_functionallocation"><attribute name="msdyn_functionallocationid" /><attribute name="msdyn_name" /><filter type="or">' +
          i +
          '</filter></entity></fetch>',
        e =
          '<grid name="" jump="msdyn_name" icon="1" select="0" preview="0"><row name="msdyn_functionallocation" id="msdyn_functionallocationid"><cell name="msdyn_name" width="200" /><cell name="createdon" width="125" /></row></grid>',
        o = n.Fields.GetControl(t, EntityMetadata.msdyn_functionallocation.EntityLogicalName);
      Localization.getLocalizationStringAsync('LookupViewName_FunctionalLocationsByAccount').then(function (n) {
        o.addCustomView(r, EntityMetadata.msdyn_functionallocation.EntityLogicalName, n, f, e, u);
      });
    }
    function fr(t, i, u) {
      return __awaiter(this, void 0, void 0, function () {
        var o, h, f, e;
        return __generator(this, function (c) {
          switch (c.label) {
            case 0:
              return !n.IsEqualGUID(i, u) ? ((o = r(i)), (h = r(u)), [4, o]) : [3, 3];
            case 1:
              return (f = c.sent()), [4, h];
            case 2:
              if (((e = c.sent()), (f == 0 || e == 0) && s('InvalidExchangeRate'), e != f)) return [2, (t * e) / f];
              c.label = 3;
            case 3:
              return [2, t];
          }
        });
      });
    }
    function r(t) {
      return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                FieldService.CrudApiSDK.retrieveRecordAsync(
                  t,
                  EntityMetadata.TransactionCurrency.EntityLogicalName,
                  n.transactionCurrencyAttrs.exchangerate.LogicalName,
                  null
                ),
              ];
            case 1:
              return (i = r.sent()), i ? [2, i[n.transactionCurrencyAttrs.exchangerate.LogicalName]] : [2, 0];
          }
        });
      });
    }
    function er(t) {
      return t.ui.getFormType() == n.FormType.Create;
    }
    function or(n) {
      return n && n.indexOf('}') < 0 ? '{' + n + '}' : n;
    }
    function sr(n) {
      return n && n.indexOf('}') >= 0 ? n.substr(1, n.length - 2) : n;
    }
    function hr(t) {
      return t && typeof t == 'string' ? n.getGuidWithoutBrackets(t).toUpperCase() : t;
    }
    function cr(t, i) {
      return n.normalizeGuid(t) == n.normalizeGuid(i);
    }
    function lr(t) {
      var i = '',
        r;
      if (t && t.length > 0) {
        for (r = 0; r < t.length; r++) {
          var u = t[r],
            f = '<K>' + n.Flags_Prefix + '.' + u.key + '</K>',
            e = '<V i:type="a:' + u.type + '" xmlns:a="http://www.w3.org/2001/XMLSchema">' + u.value + '</V>';
          i += '<KeyValue>' + f + e + '</KeyValue>';
        }
        i =
          '<ArrayOfKeyValue xmlns="http://schemas.datacontract.org/2004/07/Microsoft.Dynamics.FieldService.PluginCommon" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">' +
          i +
          '</ArrayOfKeyValue>';
      }
      return i;
    }
    function ar(n, t, i) {
      var u, r;
      return i && n && t && ((r = i['_' + n + '_value']), r && (u = { logicalname: t, id: r })), u;
    }
    function vr(t) {
      var i, r;
      return (
        t &&
          t.logicalName &&
          t.id &&
          ((r = n.getGuidWithoutBrackets(t.id)), (i = '/' + t.logicalname + 's(' + r + ')')),
        i
      );
    }
    function yr(t, i, r) {
      n.Visibility.SetControlVisibility(t, i.msdyn_latitude.LogicalName, r);
      n.Visibility.SetControlVisibility(t, i.msdyn_longitude.LogicalName, r);
      n.Fields.SetRequired(t, i.msdyn_latitude.LogicalName, r);
      n.Fields.SetRequired(t, i.msdyn_longitude.LogicalName, r);
    }
    function pr(t) {
      n.Form.SetNotification(t, 'BookingSetup_LatitudeLongitudeFromAccount', !1);
      n.Form.SetNotification(t, 'BookingSetup_LatitudeLongitudeShouldBeRealtedToAccount', !1);
    }
    function wr(t, i, r) {
      var f = r.Id ? r.Id : r.accountid ? r.accountid : r.id,
        u = EntityMetadata.Account.attributes,
        e = u.address1_latitude.LogicalName,
        o = u.address1_longitude.LogicalName;
      r != null &&
        f != null &&
        FieldService.CrudApiSDK.retrieveRecord(
          f,
          EntityMetadata.Account.EntityLogicalName,
          u.address1_latitude.LogicalName + ',' + u.address1_longitude.LogicalName,
          null,
          function (r) {
            r != null && r[e] != null && r[o] != null
              ? (n.Form.SetNotification(t, 'BookingSetup_LatitudeLongitudeFromAccount', !0, 'INFO'),
                n.Fields.SetValue(t, i.msdyn_latitude.LogicalName, r[e]),
                n.Fields.SetValue(t, i.msdyn_longitude.LogicalName, r[o]))
              : n.Form.SetNotification(t, 'BookingSetup_LatitudeLongitudeShouldBeRealtedToAccount', !0, 'WARNING');
          },
          function () {}
        );
    }
    function br(t, i) {
      var r = n.Fields.GetValue(t, i.msdyn_latitude.LogicalName),
        u = n.Fields.GetValue(t, i.msdyn_longitude.LogicalName);
      (r > 90 || r < -90 || u > 180 || u < -180) && n.SetLatitudeLongitudeToNull(t, i);
    }
    function kr(t, i) {
      n.Fields.GetValue(t, i.msdyn_worklocation.LogicalName) !== n.WorkLocation.Facility &&
        (n.Fields.SetValue(t, i.msdyn_latitude.LogicalName, null),
        n.Fields.SetValue(t, i.msdyn_longitude.LogicalName, null));
    }
    function dr(t, i) {
      if (n.GetFormType(t) == n.FormType.Create || n.GetFormType(t) == n.FormType.Update) {
        var r = n.Fields.GetValue(t, i.msdyn_worklocation.LogicalName),
          u = n.Fields.GetValue(t, i.msdyn_latitude.LogicalName),
          f = n.Fields.GetValue(t, i.msdyn_longitude.LogicalName);
        r != null && r === n.WorkLocation.Facility
          ? (u == null || f == null) &&
            n.Form.SetNotification(t, 'BookingSetup_FacilityLatitudeLongitudeCannotBeNull', !0)
          : (u != null || f != null) &&
            n.Form.SetNotification(t, 'BookingSetup_FacilityLatitudeLongitudeShouldBeNull', !0);
      }
    }
    function gr(t, i) {
      n.ClearNotificationsForLatitudeAndLongitudeFields(t, i);
      n.SetLatitudeLongitudeToNull(t, i);
      n.ValidateLatitudeLongitudeValues(t, i);
    }
    function nu(t, i, r) {
      if (t) {
        var u = t.ui.tabs.get(i),
          f = n.Fields.GetControl(t, r);
        u && f && (u.setFocus(), f.setFocus());
      }
    }
    function tu(n) {
      return typeof n == 'undefined' || n === null;
    }
    function iu(n, t, i) {
      var r = [];
      return (r[0] = {}), (r[0].id = t), (r[0].name = i), (r[0].entityType = n), r;
    }
    function ru(n) {
      n.ui.close();
    }
    function s(t, i, r) {
      return __awaiter(this, void 0, void 0, function () {
        var u, f;
        return __generator(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Localization.getLocalizationStringAsync(t)];
            case 1:
              return (
                (u = e.sent()),
                i &&
                  (u = Array.isArray(i)
                    ? n.StringUtils.format.apply(n.StringUtils, [u].concat(i))
                    : n.StringUtils.format(u, i)),
                (f = { text: u }),
                [2, Xrm.Navigation.openAlertDialog(f, r)]
              );
          }
        });
      });
    }
    function uu() {
      return __awaiter(this, void 0, void 0, function () {
        var t, r;
        return __generator(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, i()];
            case 1:
              return (
                (t = u.sent()), t == n.FSMobileAppModuleUniqueName && ((r = Xrm.Page.ui), r.process.setVisible(!1)), [2]
              );
          }
        });
      });
    }
    function fu() {
      return __awaiter(this, void 0, void 0, function () {
        var t;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, i()];
            case 1:
              return (
                (t = r.sent()),
                [
                  2,
                  new Promise(function (i) {
                    i(t == n.FSMobileAppModuleUniqueName);
                  }),
                ]
              );
          }
        });
      });
    }
    function eu(n) {
      n &&
        (n.message || n.ExceptionMessage) &&
        Xrm.Navigation.openAlertDialog({ text: n.message || n.ExceptionMessage });
    }
    function ou(n) {
      for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
      Localization.getLocalizationStringAsync(n).then(function (n) {
        i &&
          i.forEach(function (t, i) {
            n = n.replace('{' + i + '}', t);
          });
        e(n);
      });
    }
    function su() {
      return navigator && navigator.userAgent && navigator.userAgent.search(/android/i) !== -1;
    }
    function hu() {
      return navigator &&
        navigator.platform &&
        ['iPhone', 'iPad', 'iPod', 'iPhone Simulator', 'iPad Simulator', 'iPod Simulator'].indexOf(
          navigator.platform
        ) !== -1
        ? !0
        : (navigator && navigator.userAgent && navigator.userAgent.search(/iphone/i) !== -1) ||
          navigator.userAgent.search(/ipad/i) !== -1 ||
          navigator.userAgent.search(/ipod/i) !== -1
        ? !0
        : !1;
    }
    function cu(t, i) {
      Xrm.Navigation.openUrl(t)
        .then(
          function () {},
          function () {
            Xrm.Navigation.openConfirmDialog({ text: i.failureCaseDialogText }).then(function (t) {
              if (t.confirmed) {
                var r = i.failureCaseNotAndroidOrIosRedirectLink;
                n.isOsAndroid()
                  ? (r = i.failureCaseAndroidRedirectLink)
                  : n.isOsIos() && (r = i.failureCaseIosRedirectLink);
                Xrm.Navigation.openUrl(r).then(
                  function () {},
                  function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.text });
                  }
                );
              }
            });
          }
        )
        .catch(function (n) {
          Xrm.Navigation.openAlertDialog({ text: n.text });
        });
    }
    n.ScriptWindow = window;
    n.HtmlWindow = window;
    n.AutoNumberTempValue = 'Undefined(until synchronization with server)';
    n.AutoNumberMobileOfflineTempValue = '---';
    n.SdkApiMapKey = 'AqYzGoLfTyr9d51Bbl5tCexU6UHg4J88320qccuYCFSSLVvuIvs_sr1MuN1OX4Ys';
    n.BingMapURL = 'https://www.bing.com/api/maps/mapcontrol?branch=release';
    n.EmptyGuid = '{00000000-0000-0000-0000-000000000000}';
    n.Flags_Prefix = 'FieldServiceContext';
    n.transactionCurrencyAttrs = EntityMetadata.TransactionCurrency.attributes;
    n.priceListAttributes = EntityMetadata.PriceLevel.attributes;
    n.agreementAttributes = EntityMetadata.msdyn_agreement.attributes;
    n.accountAttributes = EntityMetadata.Account.attributes;
    n.functionalLocationAttributes = EntityMetadata.msdyn_functionallocation.attributes;
    n.getIsTurboFormMode = h;
    n.FSMobileAppModuleUniqueName = 'msdyn_FSMobile';
    n.GetODataAttribute = u;
    n.GetODataLogicalName = c;
    n.GetODataFormattedValue = l;
    n.GetODataSimpleFormattedValue = a;
    n.GetODataLookupObject = v;
    n.SetFormUnsupportedNotificationInWebClient = y;
    n.isUci = f;
    n.GetLookupObjectFromValues = p;
    n.GetFormType = w;
    n.GetXrmPageUI = b;
    n.GetServerUrl = k;
    n.GetServerUrlForDialog = d;
    n.GetCurrentUserId = g;
    n.GetEntityLogicalName = nt;
    n.GetEntityDisplayName = tt;
    n.GetFieldOneSettingsAsyncWithoutCaching = it;
    n.GetFieldOneSettingsAsync = rt;
    n.GetSchedulingParameterAsync = ut;
    n.GetUserRTLstatus = ft;
    n.GetIdWithoutBrackets = et;
    n.IsNotNullAndUndefined = ot;
    n.GetGlobalContext = st;
    n.GetClient = ht;
    n.GetClientState = ct;
    n.isOutlookOffline = lt;
    n.isMobileClientOffline = at;
    n.isOutlook = vt;
    n.OutputError = t;
    n.setTimezoneOffset = yt;
    n.getCRMTimezoneOffset = pt;
    n.getCRMTimeBaisOffset = wt;
    n.getCRMDateFormat = bt;
    n.GetCrmMajorVersion = kt;
    n.GetCrmMajorMinorVersion = dt;
    n.verifyCrmMinimumVersion = gt;
    n.GetUserLcid = ni;
    n.GetAppModuleUniqueName = i;
    n.GetBingMapUserLocaleParameterString = ti;
    n.GetBingMapUserMarketParameterString = ii;
    n.GetBingMapUserSensitiveRegionParameterString = ri;
    n.GetBingMapUserCultureParameterString = ui;
    n.GetUserSensitiveRegionCode = fi;
    n.GetUserLocaleIdString = ei;
    n.GetLocaleData = oi;
    n.GetSdkApiMapKeyAsync = si;
    n.LogMessageInConsole = e;
    n.WarnMessageInConsole = hi;
    n.RetrieveFieldOneSettingsRecord = ci;
    n.CreateOdataEntityType = li;
    n.IsMobile = ai;
    n.VerifyAndStopSaveIfThereArePendingAsyncJobs = vi;
    n.CheckCacheAndRecacheInvalidFieldCaches = yi;
    n.CheckCacheAndRecacheInvalidFields = o;
    n.AreObjectEqualForKeys = pi;
    n.SetCurrencySymbol = wi;
    n.InitializeCurrencySymbol = bi;
    n.DefaultExchangeRateFromServerAsync = ki;
    n.getDateFormatReplaceForJquery = di;
    n.UseJapaneseAddressOrder = gi;
    n.EnableDisableFormFields = nr;
    n.RefreshFormRibbon = tr;
    n.GetAgreementPriceListCurrencyId = ir;
    n.SetFunctionalLocationLookupFromAccountId = rr;
    n.SetFunctionalLocationLookup = ur;
    n.FromTransactionCurrencyToTransactionCurrency = fr;
    n.GetExchangeRate = r;
    n.IsCreateForm = er;
    n.getGuidWithBrackets = or;
    n.getGuidWithoutBrackets = sr;
    n.normalizeGuid = hr;
    n.IsEqualGUID = cr;
    n.CreateFsInternalFlags = lr;
    n.ConvertToEntityReference = ar;
    n.ConvertToOdataBindingField = vr;
    n.SetRequiredAndVisibilityOfLatitudeAndLongitude = yr;
    n.ClearNotificationsForLatitudeAndLongitudeFields = pr;
    n.SetLatitudeLongitudeFromAccount = wr;
    n.ValidateAndSetOutOfRangeValuesToNull = br;
    n.SetLatitudeLongitudeToNull = kr;
    n.ValidateLatitudeLongitudeValues = dr;
    n.OnSaveOfWorkLocation = gr;
    n.SetFocusOnTabAndControl = nu;
    n.IsNullOrUndefined = tu;
    n.createLookUpObject = iu;
    n.CloseDialog = ru;
    n.__namespace = !0;
    n.openAlertDialogLocalized = s;
    n.HideBpfIfFieldServiceMobile = uu;
    n.IfFieldServiceMobile = fu;
    n.ShowErrorMessage = eu;
    n.logMessageInConsoleLocalized = ou;
    n.isOsAndroid = su;
    n.isOsIos = hu;
    n.openMobileDeepLink = cu;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  'use strict';
  var t = (function () {
    function t() {}
    t._getFormValue = function (n) {
      return n == null ? '' : n;
    };
    t.CheckRecordStatus = function (n, t, i) {
      var r = 'statecode';
      FieldOneSkyUtils.UnncommonStatusField[n] && (r = FieldOneSkyUtils.UnncommonStatusField[n]);
      FieldService.CrudApiSDK.retrieveRecord(
        t,
        n.toLowerCase(),
        r,
        null,
        function (n) {
          var t = n && (n[r] === 0 || n[r] === !1);
          i(t);
        },
        FieldOneSkyUtils.ShowErrorMessage
      );
    };
    t.OpenGeoCodeDialog = function (i, r) {
      var u, f, e;
      n.Library.Telemetry || (n.Library.Telemetry = FieldOneSkyUtils.Telemetry.createSession('GeoCodePopUp.Library'));
      n.Library.SetDialogParameters(i, r);
      u = r && r.length > 1;
      f =
        !r &&
        n.Library.ParentFormContext.data &&
        n.Library.ParentFormContext.data.entity &&
        n.Library.ParentFormContext.data.entity.getId
          ? n.Library.ParentFormContext.data.entity.getId()
          : null;
      t.ParentPage.formRecordId = f;
      t.ParentPage.isFromForm =
        FieldOneSkyUtils.GetFormType(n.Library.ParentFormContext) !== null &&
        typeof FieldOneSkyUtils.GetFormType(n.Library.ParentFormContext) != 'undefined';
      n.Library.Telemetry.marker('Library.OpenGeoCodeDialog', {
        IsMultiple: !!u,
        FormRecordId: FieldOneSkyUtils.GetIdWithoutBrackets(t.ParentPage.formRecordId),
        IsFromForm: t.ParentPage.isFromForm,
      });
      e = FieldOneSkyUtils.GetFormType(n.Library.ParentFormContext);
      e !== null && e !== 1
        ? n.Library.CheckRecordStatus(n.Library.EntityName, f ? f : r[0], function (n) {
            t.ShowCodeDialog(n, u, r);
          })
        : t.ShowCodeDialog(!0, u, r);
    };
    t.ShowCodeDialog = function (n, i, r) {
      if (n) {
        var e = i ? 600 : 1200,
          o = i ? 500 : 900,
          f = { height: o, width: e, position: 1 },
          u = {};
        u.param_workOrderIds = t.PrimaryId;
        u.param_parentPage = t.ParentPage;
        u.param_ParentFormContext = t.ParentFormContext;
        i
          ? Localization.getLocalizationStringAsync('GeoCodePopUp_ChangeGeoCode').then(function (n) {
              n = n.replace('{0}', r.length.toString());
              Xrm.Navigation.openConfirmDialog({ text: n }).then(function (n) {
                n.confirmed && Xrm.Navigation.openDialog('MultiGeoCodeDialog', f, u);
              });
            })
          : Xrm.Navigation.openDialog('GeoCodeDialog', f, u);
      }
    };
    t.OpenDialog = function (t, i, r) {
      n.Library.ParentFormContext = t;
      try {
        n.Library.OpenGeoCodeDialog(i, r);
      } catch (u) {
        Xrm.Navigation.openAlertDialog({ text: u && u.message });
      }
    };
    t.SetDialogParameters = function (i, r) {
      n.Library.PrimaryId = r;
      n.Library.ParentPage = {};
      n.Library.ParentPage.SelectedControlSelectedItemIds = r;
      n.Library.ParentPage.EntityName = n.Library.EntityName = i;
      typeof GeoCodeForm != 'undefined' && (t.ParentPage.GeoCodeForm = GeoCodeForm.Library);
      var f,
        u = window;
      u.FS && u.FS.Account && u.FS.Account.Library && u.FS.Account.Library.FormContext
        ? (f = u.FS.Account.Library.PostalCodeChangeEvent)
        : u.WorkOrders && u.WorkOrders.Library && u.WorkOrders.Library.FormContext
        ? (f = u.WorkOrders.Library.PostalCodeChangeEvent)
        : u.FieldService &&
          u.FieldService.SystemUserLibrary &&
          u.FieldService.SystemUserLibrary.FormContext &&
          (f = u.FieldService.SystemUserLibrary.PostalCodeChangeEvent);
      n.Library.ParentPage.GetValue = FieldOneSkyUtils.Fields.GetValue;
      n.Library.ParentPage.SetValue = FieldOneSkyUtils.Fields.SetValue;
      n.Library.ParentPage.PostalCodeChangeEvent = r ? null : f;
      n.Library.ParentPage.DoNotUpdateFormAddress = i === 'SystemUser' && FieldOneSkyUtils.Utility.IsCrmOnline();
      t.ParentPage.DoNotUpdateFormAddress &&
        FieldOneSkyUtils.openAlertDialogLocalized('GeoCodePopUp_FormAddressCannotBeUpdatedMessage');
      i.toLowerCase() == 'msdyn_workorder' || i.toLowerCase() == 'msdyn_functionallocation'
        ? ((t.ParentPage.Address1 = 'msdyn_Address1'),
          (t.ParentPage.Address2 = 'msdyn_Address2'),
          (t.ParentPage.Address3 = 'msdyn_Address3'),
          (t.ParentPage.City = 'msdyn_City'),
          (t.ParentPage.StateOrProvince = 'msdyn_StateOrProvince'),
          (t.ParentPage.Country = 'msdyn_Country'),
          (t.ParentPage.PostalCode = 'msdyn_PostalCode'),
          (t.ParentPage.Latitude = 'msdyn_Latitude'),
          (t.ParentPage.Longitude = 'msdyn_Longitude'),
          (t.ParentPage.StateCode = 'statecode'))
        : ((t.ParentPage.Address1 = 'Address1_Line1'),
          (t.ParentPage.Address2 = 'Address1_Line2'),
          (t.ParentPage.Address3 = 'Address1_Line3'),
          (t.ParentPage.City = 'Address1_City'),
          (t.ParentPage.StateOrProvince = 'Address1_StateOrProvince'),
          (t.ParentPage.Country = 'Address1_Country'),
          (t.ParentPage.PostalCode = 'Address1_PostalCode'),
          (t.ParentPage.Latitude = 'Address1_Latitude'),
          (t.ParentPage.Longitude = 'Address1_Longitude'),
          (t.ParentPage.StateCode = 'StateCode'));
    };
    t.InitForm = function (i) {
      GeoCodeUtils.isGeoCodeDialogOpen = !0;
      n.Library.FormContext = i.getFormContext();
      n.Library.PrimaryId = i.getFormContext().data.attributes.get('param_workOrderIds').getValue();
      n.Library.ParentPage = i.getFormContext().data.attributes.get('param_parentPage').getValue();
      n.Library.ParentFormContext = i.getFormContext().data.attributes.get('param_ParentFormContext').getValue();
      FieldOneSkyUtils.GetSchedulingParameterAsync(function (i) {
        if (i) {
          var r = i.msdyn_connecttomaps;
          r !== undefined &&
            (r
              ? (t.ParentPage.isFromForm
                  ? n.Library.Init()
                  : n.Library.MultiGeoCoding(
                      n.Library.ParentPage.SelectedControlSelectedItemIds,
                      n.Library.ParentPage.EntityName
                    ),
                n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButton, !0))
              : FieldOneSkyUtils.openAlertDialogLocalized('GeoCodePopUp_ConnectToMapsIsDisabled', null, {
                  height: 250,
                  width: 200,
                }).then(t.CloseDialog));
        }
      }, FieldOneSkyUtils.ShowErrorMessage);
    };
    t.MultiGeoCoding = function (i, r) {
      n.Library.EntityName = r;
      n.Library.IsMultiGeoCoding = !0;
      n.Library.Ids = i;
      i.length === 1
        ? FieldService.CrudApiSDK.retrieveRecord(
            i[0],
            n.Library.EntityName.toLowerCase(),
            n.Library.ParentPage.Country.toLowerCase() +
              ',' +
              n.Library.ParentPage.StateOrProvince.toLowerCase() +
              ',' +
              n.Library.ParentPage.City.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address1.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address2.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address3.toLowerCase() +
              ',' +
              n.Library.ParentPage.PostalCode.toLowerCase() +
              ',' +
              n.Library.ParentPage.Latitude.toLowerCase() +
              ',' +
              n.Library.ParentPage.Longitude.toLowerCase(),
            null,
            function (r) {
              r != null &&
                (n.Library.Entity = {
                  Id: i[0],
                  Country: r[t.ParentPage.Country.toLowerCase()],
                  StateOrProvince: r[t.ParentPage.StateOrProvince.toLowerCase()],
                  City: r[t.ParentPage.City.toLowerCase()],
                  Address: r[t.ParentPage.Address1.toLowerCase()],
                  Address2: r[t.ParentPage.Address2.toLowerCase()],
                  Address3: r[t.ParentPage.Address3.toLowerCase()],
                  PostalCode: r[t.ParentPage.PostalCode.toLowerCase()],
                  Lat: r[t.ParentPage.Latitude.toLowerCase()],
                  Lng: r[t.ParentPage.Longitude.toLowerCase()],
                });
              n.Library.Init();
            },
            FieldOneSkyUtils.ShowErrorMessage
          )
        : ((n.Library.CurrentIndex = 0), n.Library.Init());
    };
    t.SaveNext = function () {
      var i = n.Library.Ids,
        r;
      n.Library.CurrentIndex < i.length
        ? ((r = FieldOneSkyUtils.UnncommonStatusField[n.Library.EntityName]
            ? FieldOneSkyUtils.UnncommonStatusField[n.Library.EntityName]
            : t.ParentPage.StateCode),
          FieldService.CrudApiSDK.retrieveRecord(
            i[n.Library.CurrentIndex],
            n.Library.EntityName.toLowerCase(),
            n.Library.ParentPage.Country.toLowerCase() +
              ',' +
              n.Library.ParentPage.StateOrProvince.toLowerCase() +
              ',' +
              n.Library.ParentPage.City.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address1.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address2.toLowerCase() +
              ',' +
              n.Library.ParentPage.Address3.toLowerCase() +
              ',' +
              n.Library.ParentPage.PostalCode.toLowerCase() +
              ',' +
              n.Library.ParentPage.Latitude.toLowerCase() +
              ',' +
              n.Library.ParentPage.Longitude.toLowerCase() +
              ',' +
              r.toLowerCase(),
            null,
            function (u) {
              var f, e;
              n.Library.UpdateMultiGeoCodeFormValues(
                n.Library.CurrentIndex,
                i.length,
                n.Library.SuccessfullyGeoCodedCount,
                n.Library.UnsuccessfullyGeoCodedCount
              );
              u != null && (u[r.toLowerCase()].Value == 0 || u[r.toLowerCase()] == !1)
                ? ((f = {
                    street1: n.Library._getFormValue(u[t.ParentPage.Address1.toLowerCase()]),
                    city: n.Library._getFormValue(u[t.ParentPage.City.toLowerCase()]),
                    stateorprovince: n.Library._getFormValue(u[t.ParentPage.StateOrProvince.toLowerCase()]),
                    postalcode: n.Library._getFormValue(u[t.ParentPage.PostalCode.toLowerCase()]),
                    country: n.Library._getFormValue(u[t.ParentPage.Country.toLowerCase()]),
                  }),
                  (GeoCodeUtils.autoFill = !0),
                  (GeoCodeForm.Library.UserChangeFields = !0),
                  (e = n.Library.GetAddressBreakupObject()),
                  GeoCodeUtils.GenerateGeoCode(
                    n.Library.ParentFormContext,
                    n.Library.FormContext,
                    null,
                    f,
                    function (r, u) {
                      r || (r = null);
                      u || (u = null);
                      var f =
                          '{"' +
                          t.ParentPage.Latitude.toLowerCase() +
                          '":' +
                          (r !== null ? '"' + r + '"' : 'null') +
                          ',"' +
                          n.Library.ParentPage.Longitude.toLowerCase() +
                          '":' +
                          (u !== null ? '"' + u + '"' : 'null') +
                          '}',
                        e = JSON.parse(f);
                      FieldService.CrudApiSDK.updateRecord(
                        i[n.Library.CurrentIndex],
                        e,
                        n.Library.EntityName.toLowerCase(),
                        function () {
                          r != null && u != null
                            ? (n.Library.SuccessfullyGeoCodedCount++, n.Library.CurrentIndex++, n.Library.SaveNext())
                            : (n.Library.UnsuccessfullyGeoCodedCount++, n.Library.CurrentIndex++, n.Library.SaveNext());
                        },
                        FieldOneSkyUtils.ShowErrorMessage
                      );
                    },
                    null,
                    n.Library.EntityName.toLowerCase(),
                    i[n.Library.CurrentIndex],
                    e
                  ))
                : (n.Library.CurrentIndex++, n.Library.SaveNext());
            },
            FieldOneSkyUtils.ShowErrorMessage
          ))
        : (n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButtonOnMultiGeoCodeDialog, !1),
          n.Library.UpdateMultiGeoCodeFormValues(
            n.Library.CurrentIndex,
            i.length,
            n.Library.SuccessfullyGeoCodedCount,
            n.Library.UnsuccessfullyGeoCodedCount
          ),
          setTimeout(function () {
            n.Library.ShowSuccessMessage();
          }, 10));
    };
    t.Init = function () {
      var t, i;
      if (((n.Library.InitStart = !0), n.Library.IsMultiGeoCoding))
        if (n.Library.Ids.length === 1) n.Library.GetGridAddress(), (t = n.Library.GetAddressSearchString());
        else {
          n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButtonOnMultiGeoCodeDialog, !0);
          Localization.getLocalizationStringAsync('GeoCodePopUp_GeoCodingCalculation').then(function (t) {
            n.Library.ShowProcessingMessage(t);
            n.Library.SaveNext();
          });
          return;
        }
      else n.Library.GetFormAddress(), (t = n.Library.GetAddressSearchString());
      i = n.Library.GetAddressBreakupObject();
      GeoCodeUtils.GeoCodeAddressForMapControl(
        n.Library.ParentFormContext,
        n.Library.FormContext,
        n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.latitude),
        n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.longitude),
        t,
        n.Library.PushPinMoved,
        undefined,
        i
      );
      n.Library.InitStart = !1;
    };
    t.GetAddressBreakupObject = function () {
      return {
        street1: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street),
        street2: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street2),
        street3: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street3),
        city: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city),
        stateorprovince: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince),
        country: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country),
        postalcode: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode),
      };
    };
    t.GetFormAddress = function () {
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street,
        n.Library._getFormValue(t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Address1.toLowerCase()))
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street2,
        n.Library._getFormValue(t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Address2.toLowerCase()))
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street3,
        n.Library._getFormValue(t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Address3.toLowerCase()))
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.city,
        n.Library._getFormValue(t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.City.toLowerCase()))
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.stateOrProvince,
        n.Library._getFormValue(
          t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.StateOrProvince.toLowerCase())
        )
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.country,
        n.Library._getFormValue(t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Country.toLowerCase()))
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.postalCode,
        n.Library._getFormValue(
          t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.PostalCode.toLowerCase())
        )
      );
      n.Library.Latitude != '' && n.Library.Longitude != ''
        ? (n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.latitude, n.Library.Latitude),
          n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.longitude, n.Library.Longitude))
        : n.Library._getFormValue(
            t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Longitude.toLowerCase())
          ) != null &&
          n.Library._getFormValue(
            t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Latitude.toLowerCase())
          ) != null &&
          (n.Library.SetValueToControl(
            n.Library.GeoCodeDialogMetaData.latitude,
            n.Library._getFormValue(
              t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Latitude.toLowerCase())
            ) == ''
              ? null
              : n.Library._getFormValue(
                  t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Latitude.toLowerCase())
                )
          ),
          n.Library.SetValueToControl(
            n.Library.GeoCodeDialogMetaData.longitude,
            n.Library._getFormValue(
              t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Longitude.toLowerCase())
            ) == ''
              ? null
              : n.Library._getFormValue(
                  t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.Longitude.toLowerCase())
                )
          ));
    };
    t.GetControlValue = function (t) {
      var r = n.Library.FormContext.getControl(t),
        i;
      if (r && ((i = r.getAttribute()), i)) return i.getValue();
    };
    t.SetValueToControl = function (t, i) {
      var u = n.Library.FormContext.getControl(t),
        r;
      u && ((r = u.getAttribute()), r && r.setValue(i));
    };
    t.ResetAddress = function () {
      n.Library.IsMultiGeoCoding ? n.Library.GetGridAddress() : n.Library.GetFormAddress();
      n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButton, !0);
    };
    t.GetGridAddress = function () {
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street,
        n.Library._getFormValue(n.Library.Entity.Address)
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street2,
        n.Library._getFormValue(n.Library.Entity.Address2)
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.street3,
        n.Library._getFormValue(n.Library.Entity.Address3)
      );
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.city, n.Library._getFormValue(n.Library.Entity.City));
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.stateOrProvince,
        n.Library._getFormValue(n.Library.Entity.StateOrProvince)
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.country,
        n.Library._getFormValue(n.Library.Entity.Country)
      );
      n.Library.SetValueToControl(
        n.Library.GeoCodeDialogMetaData.postalCode,
        n.Library._getFormValue(n.Library.Entity.PostalCode)
      );
      n.Library.Latitude !== '' && n.Library.Longitude !== ''
        ? n.Library.PushPinMoved(n.Library.Latitude, n.Library.Longitude)
        : n.Library.PushPinMoved(
            n.Library._getFormValue(n.Library.Entity.Lat),
            n.Library._getFormValue(n.Library.Entity.Lng)
          );
    };
    t.SetFormAddress = function () {
      var i = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.latitude),
        r = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.longitude);
      t.ParentPage.DoNotUpdateFormAddress ||
        (t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Address1.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street)
        ),
        t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Address2.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street2)
        ),
        t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Address3.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street3)
        ),
        t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.City.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city)
        ),
        t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.StateOrProvince.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince)
        ),
        t.ParentPage.SetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Country.toLowerCase(),
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country)
        ),
        n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode) !=
          t.ParentPage.GetValue(n.Library.ParentFormContext, t.ParentPage.PostalCode.toLowerCase()) &&
          (t.ParentPage.SetValue(
            n.Library.ParentFormContext,
            t.ParentPage.PostalCode.toLowerCase(),
            n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode)
          ),
          t.ParentPage.PostalCodeChangeEvent && t.ParentPage.PostalCodeChangeEvent()));
      t.ParentPage.GeoCodeForm &&
        ((t.ParentPage.GeoCodeForm.Address1_line1 = t.ParentPage.GetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Address1.toLowerCase()
        )),
        (t.ParentPage.GeoCodeForm.Address1_city = t.ParentPage.GetValue(
          n.Library.ParentFormContext,
          t.ParentPage.City.toLowerCase()
        )),
        (t.ParentPage.GeoCodeForm.Address1_stateorprovince = t.ParentPage.GetValue(
          n.Library.ParentFormContext,
          t.ParentPage.StateOrProvince.toLowerCase()
        )),
        (t.ParentPage.GeoCodeForm.Address1_country = t.ParentPage.GetValue(
          n.Library.ParentFormContext,
          t.ParentPage.Country.toLowerCase()
        )),
        (t.ParentPage.GeoCodeForm.Address1_postalcode = t.ParentPage.GetValue(
          n.Library.ParentFormContext,
          t.ParentPage.PostalCode.toLowerCase()
        )));
      t.ParentPage.SetValue(n.Library.ParentFormContext, t.ParentPage.Latitude.toLowerCase(), i);
      t.ParentPage.SetValue(n.Library.ParentFormContext, t.ParentPage.Longitude.toLowerCase(), r);
      t.ParentPage.parentMoveMarkerFunction && t.ParentPage.parentMoveMarkerFunction('form_map', i, r);
    };
    t.SetDialogFieldsValue = function (t) {
      n.Library.InitStart = !0;
      GeoCodeUtils.CompareAddressFields(n.Library.FormContext, t) ||
        n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButton, !1);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.street, t.addressLine || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.street2, t.addressLine2 || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.street3, t.addressLine3 || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.city, t.locality || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.stateOrProvince, t.adminDistrict || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.country, t.countryRegion || null);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.postalCode, t.postalCode || null);
      !t.landmark ||
        t.addressLine ||
        t.locality ||
        t.adminDistrict ||
        t.postalCode ||
        n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.street, t.landmark);
      n.Library.InitStart = !1;
    };
    t.SetGridAddress = function () {
      var i =
          '{"' +
          t.ParentPage.Latitude.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.latitude) +
          '","' +
          t.ParentPage.Longitude.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.longitude) +
          '","' +
          t.ParentPage.PostalCode.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode) +
          '","' +
          t.ParentPage.Country.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country) +
          '","' +
          t.ParentPage.StateOrProvince.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince) +
          '","' +
          t.ParentPage.City.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city) +
          '","' +
          t.ParentPage.Address1.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street) +
          '","' +
          t.ParentPage.Address2.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street2) +
          '","' +
          t.ParentPage.Address3.toLowerCase() +
          '":"' +
          n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street3) +
          '"}',
        r = JSON.parse(i.replace(/"null"/g, 'null'));
      FieldService.CrudApiSDK.updateRecord(
        t.Entity.Id,
        r,
        t.EntityName.toLowerCase(),
        t.CloseDialog(),
        FieldOneSkyUtils.ShowErrorMessage
      );
    };
    t.PushPinMoved = function (t, i) {
      n.Library.InitStart ||
        (t !== n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.latitude) &&
          i !== n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.longitude) &&
          n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButton, !1));
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.latitude, t === '' ? null : t);
      n.Library.SetValueToControl(n.Library.GeoCodeDialogMetaData.longitude, i === '' ? null : i);
      n.Library.InitLatLngFlag ||
        (t !== '' &&
          i !== '' &&
          ((n.Library.Latitude = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.latitude)),
          (n.Library.Longitude = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.longitude)),
          (n.Library.InitLatLngFlag = !0)));
    };
    t.AddressChanged = function (i, r) {
      var f, o;
      if (
        ((GeoCodeForm.Library.UserChangeFields = !n.Library.InitStart),
        GeoCodeForm.Library.UserChangeFields &&
          n.Library.SetButtonDisableStatus(n.Library.GeoCodeDialogMetaData.okButton, !1),
        r)
      ) {
        if (r === n.Library.GeoCodeDialogMetaData.latitude || r === n.Library.GeoCodeDialogMetaData.longitude) return;
        if (
          ((f = n.Library.GetControlValue(r) ? n.Library.GetControlValue(r).trim() : n.Library.GetControlValue(r)),
          f && n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street))
        ) {
          if (
            r === n.Library.GeoCodeDialogMetaData.street &&
            n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city) === '' &&
            n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince) === '' &&
            n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode) === '' &&
            n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country) === ''
          )
            return;
        } else return;
      }
      var e = n.Library.GetAddressSearchString(),
        s = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street),
        h = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city),
        c = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince),
        l = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode),
        a = n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country),
        u = 0;
      s !== null && u++;
      h !== null && u++;
      c !== null && u++;
      l !== null && u++;
      a !== null && u++;
      o = n.Library.GetAddressBreakupObject();
      u >= 2 &&
        e &&
        GeoCodeUtils.GenerateGeoCode(
          n.Library.ParentFormContext,
          n.Library.FormContext,
          'map_canvas',
          e,
          function (t, i) {
            var r = !1;
            t === 0 && i === 0 && ((t = null), (i = null));
            typeof t != 'undefined' && typeof i != 'undefined' && t !== null && i !== null
              ? n.Library.PushPinMoved(t, i)
              : (n.Library.PushPinMoved('', ''), (r = !0));
            FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'Account_InvalidAddress', r, 'ERROR');
          },
          null,
          t.ParentPage.EntityName.toLowerCase(),
          t.ParentPage.formRecordId,
          o
        );
    };
    t.GetAddressSearchString = function () {
      return {
        street1: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.street),
        city: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.city),
        stateorprovince: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.stateOrProvince),
        postalcode: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.postalCode),
        country: n.Library.GetControlValue(n.Library.GeoCodeDialogMetaData.country),
      };
    };
    t.ChangeData = function () {
      n.Library.IsMultiGeoCoding ? n.Library.SetGridAddress() : (n.Library.SetFormAddress(), n.Library.CloseDialog());
    };
    t.CloseDialog = function () {
      GeoCodeUtils.isGeoCodeDialogOpen = !1;
      n.Library.FormContext.ui.close();
    };
    t.SetButtonDisableStatus = function (t, i) {
      var r = n.Library.FormContext.getControl(t);
      r && r.setDisabled(i);
    };
    t.ShowSuccessMessage = function () {
      Localization.getLocalizationStringAsync('GeoCodePopUp_GeoCodingCalculationCompleted').then(function (n) {
        var i = t.FormContext.getControl(t.MultiGeoCodeDialogMetaData.processCompleted);
        i.setLabel(n);
      });
    };
    t.ShowConfirmationMessage = function (n, t, i, r) {
      var u = { title: r, text: n };
      Xrm.Navigation.openConfirmDialog(u, { width: 260, height: 260, position: 1 }).then(function (n) {
        n.confirmed ? t(null) : i(null);
      });
    };
    t.ShowProcessingMessage = function (t) {
      var i = n.Library.FormContext;
      i.getControl(n.Library.MultiGeoCodeDialogMetaData.processCompleted).setLabel(t);
    };
    t.HideProcessingMessage = function () {
      Xrm && Xrm.Utility && Xrm.Utility.closeProgressIndicator && Xrm.Utility.closeProgressIndicator();
    };
    t.UpdateMultiGeoCodeFormValues = function (t, i, r, u) {
      n.Library.SetValueToControl(n.Library.MultiGeoCodeDialogMetaData.totalRecords, i);
      n.Library.SetValueToControl(n.Library.MultiGeoCodeDialogMetaData.processedRecords, t);
      n.Library.SetValueToControl(n.Library.MultiGeoCodeDialogMetaData.totalRecordsProcessedSuccessfully, r);
      n.Library.SetValueToControl(n.Library.MultiGeoCodeDialogMetaData.totalRecordsProcessedUnSuccessfully, u);
      Localization.getLocalizationStringAsync('MultiGeoCodeDialog_ProgressLabel').then(function (r) {
        n.Library.SetValueToControl(
          n.Library.MultiGeoCodeDialogMetaData.subHeader,
          r.replace('{0}', t.toString()).replace('{1}', i.toString())
        );
      });
    };
    var i, r;
    return (
      (t.FormContext = null),
      (t.ParentFormContext = null),
      (t.Telemetry = null),
      (t.IsOnLoadExecuted = !1),
      (t.Entity = null),
      (t.EntityName = null),
      (t.Ids = null),
      (t.CurrentIndex = null),
      (t.IsMultiGeoCoding = !1),
      (t.InitStart = !1),
      (t.SuccessfullyGeoCodedCount = 0),
      (t.UnsuccessfullyGeoCodedCount = 0),
      (t.InitLatLngFlag = !1),
      (t.Latitude = ''),
      (t.Longitude = ''),
      (t.InLocationQuery = !1),
      (t.PrimaryId = null),
      (t.ParentPage = null),
      (t.GeoCodeDialogMetaData =
        ((i = (function () {
          function n() {}
          return n;
        })()),
        (i.header = 'lbl_header'),
        (i.subHeader = 'lbl_subHeader'),
        (i.cancelButton = 'btnReturn'),
        (i.okButtonOnMultiGeoCodeDialog = 'btnOk'),
        (i.okButton = 'btnChangeAddress'),
        (i.resetButton = 'btn_resetMarker'),
        (i.postalCode = 'address1_postalCode'),
        (i.country = 'address1_country'),
        (i.stateOrProvince = 'address1_stateOrProvince'),
        (i.city = 'address1_city'),
        (i.street = 'address1_street'),
        (i.street2 = 'address1_street2'),
        (i.street3 = 'address1_street3'),
        (i.latitude = 'address1_latitude'),
        (i.longitude = 'address1_longitude'),
        i)),
      (t.MultiGeoCodeDialogMetaData =
        ((r = (function () {
          function n() {}
          return n;
        })()),
        (r.totalRecords = 'total_records'),
        (r.processedRecords = 'processed_records'),
        (r.totalRecordsProcessedSuccessfully = 'success_records'),
        (r.totalRecordsProcessedUnSuccessfully = 'unsuccess_records'),
        (r.header = 'lbl_header'),
        (r.subHeader = 'lbl_subHeader'),
        (r.processCompleted = 'lbl_processCompleted'),
        r)),
      t
    );
  })();
  n.Library = t;
})(GeoCodePopUp || (GeoCodePopUp = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.getTerritoryId = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.territoryid.LogicalName);
        }),
        (n.EntitySchemaName = 'SystemUser'),
        (n.EntityLogicalName = 'systemuser'),
        (n.attributes = {
          fullname: { SchemaName: 'FullName', LogicalName: 'fullname' },
          systemuserid: { SchemaName: 'SystemUserId', LogicalName: 'systemuserid' },
          territoryid: { SchemaName: 'TerritoryId', LogicalName: 'territoryid' },
          siteid: { SchemaName: 'SiteId', LogicalName: 'siteid' },
          businessUnit: { SchemaName: 'BusinessUnitId', LogicalName: 'businessunitid' },
        }),
        n
      );
    })();
    n.SystemUser = t;
  })(EntityMetadata || (EntityMetadata = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  'use strict';
  function t(t, i) {
    n.API_KEY
      ? t(n.API_KEY)
      : FieldOneSkyUtils.GetSdkApiMapKeyAsync(function (i) {
          n.API_KEY = i;
          t(n.API_KEY);
        }, i);
  }
  function i(t, i, r, u, f, e, o, s) {
    FieldOneSkyUtils.GetSchedulingParameterAsync(function (h) {
      var a, c, l;
      h &&
        ((a = h.msdyn_connecttomaps), typeof a == 'undefined' || a) &&
        ((c = typeof n.parentPage != 'undefined' && !n.parentPage.EntityName ? n.parentPage.EntityName : null),
        (l = typeof n.parentPage != 'undefined' && !n.parentPage.EntityId ? n.parentPage.EntityId : null),
        i.data || i.data.entity
          ? typeof GeoCodePopUp != 'undefined' &&
            GeoCodePopUp &&
            GeoCodePopUp.Library.EntityName != null &&
            ((c = GeoCodePopUp.Library.EntityName.toLowerCase()), (l = GeoCodePopUp.Library.Ids[0]))
          : ((c = FieldOneSkyUtils.GetEntityLogicalName(i)), (l = FieldOneSkyUtils.CurrentEntity.GetId(i))),
        (r != null && r !== '' && u != null && u !== '') ||
          n.GenerateGeoCode(
            t,
            i,
            'form_map',
            f,
            function (t, r) {
              t == 0 && r == 0 && ((t = null), (r = null));
              typeof t != 'undefined' && typeof r != 'undefined' && t != null && r != null
                ? (typeof o == 'undefined' || o == !0) && e(t, r)
                : f &&
                  n.IsGeoCodeDialogOpen() &&
                  FieldOneSkyUtils.Form.SetNotification(i, 'Account_InvalidAddress', !0, 'ERROR');
            },
            null,
            c,
            l,
            s
          ));
    }, FieldOneSkyUtils.ShowErrorMessage);
  }
  function r(t, i, r, u, f, e, o, s, h) {
    var c = [u.street1, u.city, u.stateorprovince, u.postalcode, u.country].join(' ');
    FieldOneSkyUtils.GetFieldOneSettingsAsync(function (l) {
      var a = l == null ? !1 : l.msdyn_autogeocodeaddresses;
      (r && a !== !0) ||
        FieldOneSkyUtils.GetSchedulingParameterAsync(function (l) {
          var v, a;
          if (l && ((v = l.msdyn_connecttomaps), typeof v == 'undefined' || v)) {
            if (!c || c.replace(/,/g, '').trim().length == 0) {
              f && f();
              return;
            }
            while (c.search(/,\s*,/g) >= 0) c = c.replace(/,\s*,/g, ',');
            c.search(/^\s*,/g) >= 0 && (c = c.replace(/^\s*,/g, ''));
            c.search(/,\s*$/g) >= 0 && (c = c.replace(/,\s*$/g, ''));
            c = c.trim();
            a = FieldOneSkyUtils.Guid.NewGuid();
            n._options.callbacks[a] = { id: r, callback: f, address: c, eventMode: e, addressBreakup: h };
            n._options.target[a] = { id: s, type: o };
            n.GetApiKeyAsync(function (r) {
              var f =
                'https://dev.virtualearth.net/REST/v1/Locations?query=' +
                encodeURIComponent(c) +
                '&output=json&key=' +
                r +
                FieldOneSkyUtils.GetBingMapUserCultureParameterString();
              if (
                typeof GeoCodePopUp != 'undefined' &&
                ((GeoCodePopUp.Library.InLocationQuery = !0),
                GeoCodePopUp.Library.IsMultiGeoCoding &&
                  GeoCodePopUp.Library.Ids &&
                  GeoCodePopUp.Library.Ids.length > 1)
              ) {
                n.GeoCodeFullAddress(t, i, u, a, o, s);
                return;
              }
              n.FindByAddressRestServiceCORS(t, i, f, n.GeocodeCallback, a);
            }, FieldOneSkyUtils.ShowErrorMessage);
          }
        }, FieldOneSkyUtils.ShowErrorMessage);
    }, FieldOneSkyUtils.ShowErrorMessage);
  }
  function u(n, t, i, r, u) {
    if (r) {
      var f = new XMLHttpRequest();
      f.open('GET', i, !0);
      f.onreadystatechange = function () {
        if (f.readyState == 4 && f.status == 200 && f.responseText) {
          var i = JSON.parse(f.responseText);
          r(n, t, i, u);
        }
      };
      f.send();
    }
  }
  function f(t, i, r, u, f, e) {
    return n.GeoCodeAddress(t, i, r, u, f, e);
  }
  function e(n) {
    return typeof n != 'undefined' ? n.substring(n.lastIndexOf('.') + 1) : n;
  }
  function o(t, i, r, u, f, e) {
    var s = null,
      h = null,
      o;
    return (
      typeof f != 'undefined' &&
        e != null &&
        ((o = {}),
        (o.entityName = n.GetEntityNameFromTargetType(f)),
        (o.entityId = e),
        (o.odataType = f),
        (s = FieldOneSkyUtils.CreateOdataEntityType(i, o))),
      (h = {
        Line1: r.street1,
        City: r.city,
        StateOrProvince: r.stateorprovince,
        PostalCode: r.postalcode,
        Country: r.country,
        Target: null,
      }),
      s != null && (h.Target = s),
      FieldOneSkyUtils.SystemActions.ExecuteAsyncGeoCodeAddress(
        h,
        function (r) {
          n.GeocodeCallback(t, i, r, u);
        },
        function () {}
      )
    );
  }
  function s(n) {
    return (typeof n == 'undefined' || n === null) && (n = ''), n;
  }
  function h(t, i, r, u) {
    var a = FieldOneSkyUtils.HtmlWindow,
      h,
      e,
      c;
    a.ScriptWindow = FieldOneSkyUtils.ScriptWindow;
    var s = n._options.callbacks[u].id,
      f = n._options.callbacks[u].callback,
      o = n._options.callbacks[u].address,
      v = n._options.callbacks[u].results,
      w = n._options.callbacks[u].eventMode,
      l = n._options.callbacks[u].addressBreakup;
    if (typeof r.Latitude != 'undefined') {
      r.Latitude == 0 && r.Longitude == 0 && ((r.Latitude = null), (r.Longitude = null));
      f && f(r.Latitude, r.Longitude);
      n.IsGeoCodeDialogOpen() && (GeoCodePopUp.Library.InLocationQuery = !1);
      return;
    }
    if (
      ((h = n._options.target[u].id),
      (e = n._options.target[u].type),
      e !== null &&
        typeof e != 'undefined' &&
        ((c = 'Microsoft.Dynamics.CRM.'), e.indexOf(c) != 0 && (e = c + e.toLowerCase())),
      typeof r == 'number' && (r = v[r]),
      r && r.resourceSets && r.resourceSets.length > 0 && r.resourceSets[0].resources)
    ) {
      if (r.resourceSets[0].resources.length == 0) {
        n.GeoCodeFullAddress(t, i, o, u, e, h);
        return;
      }
      if (r.resourceSets[0].resources.length > 0) {
        if (
          r.resourceSets[0].resources.length == 1 &&
          r.resourceSets[0].resources[0].matchCodes.find(function (n) {
            n.indexOf('Good') > -1;
          }) !== 'undefined'
        ) {
          var y = r.resourceSets[0].resources[0].point.coordinates[0],
            p = r.resourceSets[0].resources[0].point.coordinates[1],
            b = r.resourceSets[0].resources[0].address;
          n.autoFill &&
            (f && f(y, p),
            n.IsGeoCodeDialogOpen()
              ? GeoCodePopUp.Library.SetDialogFieldsValue(r.resourceSets[0].resources[0].address)
              : n.SetXrmAddressFields(t, i, r.resourceSets[0].resources[0].address));
        }
        if (
          (r.resourceSets[0].resources.length > 1 &&
            !GeoCodeForm.Library.UserChangeFields &&
            i.data != null &&
            i.data.entity &&
            GeoCodeForm.Library.showInvalidAddressMessage('GeoCode_MultipleResults'),
          n.autoFill)
        ) {
          n.autoFill = !1;
          return;
        }
        if (
          (n.IsGeoCodeDialogOpen() ||
            FieldOneSkyUtils.GetFieldOneSettingsAsync(function (t) {
              var u = t == null ? !1 : t.msdyn_autogeocodeaddresses;
              if (
                (r.resourceSets[0].resources.length == 1 &&
                  n.CompareAddressFields(i, r.resourceSets[0].resources[0].address) &&
                  u != !0) ||
                !GeoCodeForm.Library.UserChangeFields
              ) {
                f && f();
                return;
              }
            }, FieldOneSkyUtils.ShowErrorMessage),
          (GeoCodeForm.Library.UserChangeFields = !1),
          s)
        ) {
          FieldOneSkyUtils.GetFieldOneSettingsAsync(function (c) {
            var v = c.msdyn_enableaddresssuggestions,
              a;
            if (v != !1 && !GeoCodeForm.Library.IsAddressSuggestionDialogShowed && FieldOneSkyUtils.isUci()) {
              a = {};
              a.Result = r;
              a.id = s;
              a.callback = f;
              a.address = o;
              a.guid = u;
              a.ScriptWindow = window;
              a.ParentFormContext = t;
              a.addressBreakup = l;
              n._options.callbacks[u] = { id: s, callback: f, address: o, results: {}, addressBreakup: l };
              n.dialogParams.param_parentPage = a;
              n.IsGeoCodeDialogOpen() && FieldOneSkyUtils.Form.SetNotification(i, 'Account_InvalidAddress', !1);
              n._options.DialogParams = a;
              GeoCodeForm.Library.IsAddressSuggestionDialogShowed = !0;
              Xrm.Navigation.openDialog(
                'AddresSuggestionsDialog',
                { height: 1200, width: 800, position: 1 },
                n.dialogParams
              ).then(GeoCodeForm.Library.AddressSuggestionCloseCallback);
            } else n.GeoCodeFullAddress(t, i, o, u, e, h);
          }, FieldOneSkyUtils.ShowErrorMessage);
          return;
        }
      }
    }
    f && f();
    n.IsGeoCodeDialogOpen() && (GeoCodePopUp.Library.InLocationQuery = !1);
  }
  function c(t, i) {
    var u = null,
      f = n._options.callbacks[i].results,
      r = f[t];
    return (
      r &&
        r.resourceSets &&
        r.resourceSets.length > 0 &&
        r.resourceSets[0].resources &&
        r.resourceSets[0].resources.length == 1 &&
        r.resourceSets[0].resources[0].matchCodes.find(function (n) {
          n.indexOf('Good') > -1;
        }) !== 'undefined' &&
        (u = r.resourceSets[0].resources[0].address),
      u
    );
  }
  function l(n) {
    var t = '';
    return (
      FieldOneSkyUtils.UseJapaneseAddressOrder()
        ? ((t = n.postalCode ? t + n.postalCode + ' ' : t),
          (t = n.countryRegion ? t + n.countryRegion + ' ' : t),
          (t = n.adminDistrict ? t + n.adminDistrict + ' ' : t),
          (t = n.locality ? t + n.locality + ' ' : t),
          (t = n.addressLine ? t + n.addressLine + ' ' : t))
        : ((t = n.addressLine ? t + n.addressLine + ' ' : t),
          (t = n.locality ? t + n.locality + ' ' : t),
          (t = n.adminDistrict ? t + n.adminDistrict + ' ' : t),
          (t = n.countryRegion ? t + n.countryRegion + ' ' : t),
          (t = n.postalCode ? t + n.postalCode + ' ' : t)),
      t != '' ? (t = t.substring(0, t.length - 1)) : n.landmark && (t = 'Landmark: ' + n.landmark),
      t
    );
  }
  function a(t, i, r) {
    var f, u;
    n.parentPage = {};
    t.data.entity.getEntityName() == 'msdyn_workorder'
      ? ((n.parentPage.Address1 = 'msdyn_Address1'),
        (n.parentPage.Address2 = 'msdyn_Address2'),
        (n.parentPage.Address3 = 'msdyn_Address3'),
        (n.parentPage.City = 'msdyn_City'),
        (n.parentPage.StateOrProvince = 'msdyn_StateOrProvince'),
        (n.parentPage.Country = 'msdyn_Country'),
        (n.parentPage.PostalCode = 'msdyn_PostalCode'),
        (n.parentPage.Latitude = 'msdyn_Latitude'),
        (n.parentPage.Longitude = 'msdyn_Longitude'),
        (n.parentPage.StateCode = 'statecode'))
      : ((n.parentPage.Address1 = 'Address1_Line1'),
        (n.parentPage.Address2 = 'Address1_Line2'),
        (n.parentPage.Address3 = 'Address1_Line3'),
        (n.parentPage.City = 'Address1_City'),
        (n.parentPage.StateOrProvince = 'Address1_StateOrProvince'),
        (n.parentPage.Country = 'Address1_Country'),
        (n.parentPage.PostalCode = 'Address1_PostalCode'),
        (n.parentPage.Latitude = 'Address1_Latitude'),
        (n.parentPage.Longitude = 'Address1_Longitude'),
        (n.parentPage.StateCode = 'StateCode'));
    f = window;
    GeoCodeForm.Library.Address1_line1 = r.addressLine || null;
    f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.Address1.toLowerCase(), GeoCodeForm.Library.Address1_line1);
    GeoCodeForm.Library.Address1_line2 = r.addressLine2 || null;
    f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.Address2.toLowerCase(), GeoCodeForm.Library.Address1_line2);
    GeoCodeForm.Library.Address1_line3 = r.addressLine3 || null;
    f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.Address3.toLowerCase(), GeoCodeForm.Library.Address1_line3);
    GeoCodeForm.Library.Address1_city = r.locality || null;
    f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.City.toLowerCase(), GeoCodeForm.Library.Address1_city);
    GeoCodeForm.Library.Address1_stateorprovince = r.adminDistrict || null;
    f.FieldOneSkyUtils.Fields.SetValue(
      t,
      n.parentPage.StateOrProvince.toLowerCase(),
      GeoCodeForm.Library.Address1_stateorprovince
    );
    GeoCodeForm.Library.Address1_country = r.countryRegion || null;
    f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.Country.toLowerCase(), GeoCodeForm.Library.Address1_country);
    GeoCodeForm.Library.Address1_postalcode = r.postalCode || null;
    GeoCodeForm.Library.Address1_postalcode !=
      FieldOneSkyUtils.Fields.GetValue(t, n.parentPage.PostalCode.toLowerCase()) &&
      (f.FieldOneSkyUtils.Fields.SetValue(
        t,
        n.parentPage.PostalCode.toLowerCase(),
        GeoCodeForm.Library.Address1_postalcode
      ),
      (u = window),
      u.FS && u.FS.Account && u.FS.Account.Library && u.FS.Account.Library.FormContext
        ? u.FS.Account.Library.PostalCodeChangeEvent()
        : u.WorkOrders && u.WorkOrders.Library && u.WorkOrders.Library.FormContext
        ? u.WorkOrders.Library.PostalCodeChangeEvent()
        : u.FieldService &&
          u.FieldService.SystemUserLibrary &&
          u.FieldService.SystemUserLibrary.FormContext &&
          u.FieldService.SystemUserLibrary.PostalCodeChangeEvent());
    !r.landmark ||
      r.addressLine ||
      r.locality ||
      r.adminDistrict ||
      r.postalCode ||
      (f.FieldOneSkyUtils.Fields.SetValue(t, n.parentPage.Address1.toLowerCase(), r.landmark),
      (GeoCodeForm.Library.Address1_line1 = r.landmark));
  }
  function v(t, i) {
    var r = !0;
    return (
      i &&
        (i.addressLine &&
          (r = n.CompareCurrentFieldAndFromService(
            t,
            typeof n.parentPage != 'undefined'
              ? n.parentPage.Address1.toLowerCase()
              : GeoCodeForm.Library.AddressFieldNames.Address1.toLowerCase(),
            i.addressLine
          )),
        r &&
          i.locality &&
          (r = n.CompareCurrentFieldAndFromService(
            t,
            typeof n.parentPage != 'undefined'
              ? n.parentPage.City.toLowerCase()
              : GeoCodeForm.Library.AddressFieldNames.City.toLowerCase(),
            i.locality
          )),
        r &&
          i.adminDistrict &&
          (r = n.CompareCurrentFieldAndFromService(
            t,
            typeof n.parentPage != 'undefined'
              ? n.parentPage.StateOrProvince.toLowerCase()
              : GeoCodeForm.Library.AddressFieldNames.StateOrProvince.toLowerCase(),
            i.adminDistrict
          )),
        r &&
          i.countryRegion &&
          (r = n.CompareCurrentFieldAndFromService(
            t,
            typeof n.parentPage != 'undefined'
              ? n.parentPage.Country.toLowerCase()
              : GeoCodeForm.Library.AddressFieldNames.Country.toLowerCase(),
            i.countryRegion
          )),
        r &&
          i.postalCode &&
          (r = n.CompareCurrentFieldAndFromService(
            t,
            typeof n.parentPage != 'undefined'
              ? n.parentPage.PostalCode.toLowerCase()
              : GeoCodeForm.Library.AddressFieldNames.PostalCode.toLowerCase(),
            i.postalCode
          ))),
      r
    );
  }
  function y(n, t, i) {
    var r = FieldOneSkyUtils.Fields.GetValue(n, t);
    return r == i;
  }
  function p() {
    return n.isGeoCodeDialogOpen;
  }
  n.autoFill = !1;
  n.isGeoCodeDialogOpen = !1;
  n.separator = ', ';
  n.parentPage = undefined;
  n._options = { callbacks: {}, callback: null, target: {}, DialogParams: {} };
  n.dialogParams = {};
  n.API_KEY = null;
  n.GeoCodeDialogId = 'b0ebe1ba-727d-4a2a-a9be-db7be211a344';
  n.GetApiKeyAsync = t;
  n.GeoCodeAddressForMapControl = i;
  n.GenerateGeoCode = r;
  n.FindByAddressRestServiceCORS = u;
  n.GeoCodeFullAddress = f;
  n.GetEntityNameFromTargetType = e;
  n.GeoCodeAddress = o;
  n.CleanRequestParams = s;
  n.GeocodeCallback = h;
  n.GetAddressDetailsForSelectedAddress = c;
  n.GenerateAddressLineByFullAddress = l;
  n.SetXrmAddressFields = a;
  n.CompareAddressFields = v;
  n.CompareCurrentFieldAndFromService = y;
  n.IsGeoCodeDialogOpen = p;
})(GeoCodeUtils || (GeoCodeUtils = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  var t = (function () {
    function t() {}
    return (
      (t._getFormValue = function (n) {
        return n == null ? '' : n;
      }),
      (t.CloseDialog = function () {
        n.Library.FormContext.ui.close();
      }),
      (t.LoadSuggestions = function (t) {
        n.Library.FormContext = t.getFormContext();
        var i = (n.Library.DialogParameter = t.getFormContext().data.attributes.get('param_parentPage'));
        i &&
          ((n.Library.DialogParameter = i.getValue()),
          n.Library.GetParameterValues(),
          n.Library.SetLabels(),
          n.Library.FillOptionSetData(),
          n.Library.SetDialogFieldsOnLoad(),
          (n.Library.ParentFormContext = n.Library.DialogParameter.ParentFormContext));
      }),
      (t.OnOK = function () {
        var r, i, u;
        n.Library.FormContext &&
          (t.Telemetry || (t.Telemetry = FieldOneSkyUtils.Telemetry.createSession('GeoCodeForm')),
          (r = n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.suggestions)),
          r &&
            ((i = r.getAttribute()),
            i.getValue() !== null
              ? ((n.Library.ScriptWindow.GeoCodeUtils.autoFill = !0),
                (n.Library.selectionMade = !0),
                n.Library.ModifySelectedAddressWithUserEnteredAddress(i.getValue(), n.Library.Guid),
                n.Library.ScriptWindow.GeoCodeUtils.GeocodeCallback(
                  n.Library.ParentFormContext,
                  n.Library.FormContext,
                  i.getValue(),
                  n.Library.Guid
                ),
                t.Telemetry.marker('OnOK', { ControlOptionSelected: i.getValue() }),
                n.Library.CloseDialog())
              : ((u = 'AddressSuggestionsDialog_SelectSuggestion'),
                t.Telemetry.validation(u),
                FieldOneSkyUtils.openAlertDialogLocalized(u))));
      }),
      (t.OnCancel = function () {
        n.Library.GeoCodeRawAddress();
        n.Library.CloseDialog();
      }),
      (t.SetLabels = function () {
        Localization.getLocalizationStringAsync('AddressSuggestionsDialog_SelectAddress').then(function (t) {
          return n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.suggestions).setLabel(t);
        });
        Localization.getLocalizationStringAsync('AddressSuggestionsDialog_CancelButton').then(function (t) {
          return n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.cancelButton).setLabel(t);
        });
        Localization.getLocalizationStringAsync('AddressSuggestionsDialog_OkButton').then(function (t) {
          return n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.okButton).setLabel(t);
        });
      }),
      (t.GetParameterValues = function () {
        n.Library.Guid = n.Library.DialogParameter.guid;
        var t = n.Library.DialogParameter.id,
          i = n.Library.DialogParameter.callback,
          r = n.Library.DialogParameter.address,
          u = n.Library.DialogParameter.addressBreakup;
        n.Library.ScriptWindow = n.Library.DialogParameter.ScriptWindow;
        n.Library.ObjPage = n.Library.DialogParameter.Result;
        n.Library.ObjPage &&
          n.Library.ObjPage.resourceSets.length > 0 &&
          n.Library.ObjPage.resourceSets[0].resources &&
          n.Library.ObjPage.resourceSets[0].resources.length > 0 &&
          ((n.Library.ScriptWindow.GeoCodeUtils._options.callbacks[n.Library.Guid] = {
            id: t,
            callback: i,
            address: r,
            results: {},
            addressBreakup: u,
          }),
          n.Library.ObjPage.resourceSets[0].resources.forEach(function (t, i) {
            var u = n.Library.CloneObject({}, n.Library.ObjPage),
              r;
            t.matchCodes = ['Good'];
            u.resourceSets[0].resources = [t];
            n.Library.ScriptWindow.GeoCodeUtils._options.callbacks[n.Library.Guid].results[i] = u;
            r = n.Library.ScriptWindow.GeoCodeUtils.GenerateAddressLineByFullAddress(t.address);
            r != '' && n.Library.Data.address.push({ addr: r, guid: n.Library.Guid });
          }));
      }),
      (t.CloneObject = function (n, t) {
        if (t) return JSON.parse(JSON.stringify(t));
      }),
      (t.FillOptionSetData = function () {
        var i, r;
        t.Telemetry || (t.Telemetry = FieldOneSkyUtils.Telemetry.createSession('GeoCodeForm'));
        i = n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.suggestions);
        i.clearOptions();
        t.Telemetry.marker('FillOptionSetData', { NumberOfAddresses: n.Library.Data.address.length });
        n.Library.Data.address.forEach(function (n, t) {
          i.addOption({ text: n.addr, value: t });
        });
        n.Library.IsProperAddressRecommended() || ((r = i.getAttribute()), r.setValue(null));
      }),
      (t.AddressSuggestionCloseCallback = function (t) {
        n.Library.IsAddressSuggestionDialogShowed = !1;
        var i = t.parameters;
        n.Library.IsGeoCodeCalled = !1;
        (typeof i == 'undefined' || typeof i.param_parentPage == 'undefined') && n.Library.GeoCodeRawAddress();
      }),
      (t.GeoCodeRawAddress = function () {
        var r, u;
        n.Library.Guid = n.Library.Guid || FieldOneSkyUtils.ScriptWindow.GeoCodeUtils._options.DialogParams.guid;
        var i = n.Library.ScriptWindow || FieldOneSkyUtils.ScriptWindow,
          f = i.GeoCodeUtils._options.target[n.Library.Guid].id,
          t = i.GeoCodeUtils._options.target[n.Library.Guid].type;
        t !== null &&
          typeof t != 'undefined' &&
          ((r = 'Microsoft.Dynamics.CRM.'), t.indexOf(r) != 0 && (t = r + t.toLowerCase()));
        u =
          (n.Library.DialogParameter && n.Library.DialogParameter.address) ||
          FieldOneSkyUtils.ScriptWindow.GeoCodeUtils._options.DialogParams.address;
        i.GeoCodeUtils.GeoCodeFullAddress(n.Library.ParentFormContext, n.Library.FormContext, u, n.Library.Guid, t, f);
      }),
      (t.OnLoad = function (t, i, r) {
        n.Library.FormContext = t;
        i == null
          ? ((n.Library.AddressFieldNames.Address1 = 'Address1_Line1'),
            (n.Library.AddressFieldNames.City = 'Address1_City'),
            (n.Library.AddressFieldNames.StateOrProvince = 'Address1_StateOrProvince'),
            (n.Library.AddressFieldNames.Country = 'Address1_Country'),
            (n.Library.AddressFieldNames.PostalCode = 'Address1_PostalCode'),
            (n.Library.AddressFieldNames.Latitude = 'Address1_Latitude'),
            (n.Library.AddressFieldNames.Longitude = 'Address1_Longitude'),
            (n.Library.AddressFieldNames.StateCode = 'StateCode'))
          : (n.Library.AddressFieldNames = i);
        FieldOneSkyUtils.IsNullOrUndefined(r)
          ? FieldOneSkyUtils.GetSchedulingParameterAsync(
              function (t) {
                n.Library.GeoCodeOnAddressChange(t);
              },
              function () {}
            )
          : n.Library.GeoCodeOnAddressChange(r);
      }),
      (t.GeoCodeOnAddressChange = function (t) {
        var r, i;
        t &&
          ((r = t.msdyn_connecttomaps),
          r &&
            ((i = n.Library.AddressFieldNames),
            FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, i.Address1.toLowerCase(), function (t) {
              n.Library.SetContext(t, i);
              FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Address1.toLowerCase()) != null &&
                (FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Country.toLowerCase()) != null ||
                  FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.City.toLowerCase()) != null ||
                  FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.PostalCode.toLowerCase()) != null ||
                  FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.StateOrProvince.toLowerCase()) != null) &&
                n.Library.InitAdressChanged();
            }),
            FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, i.Country.toLowerCase(), function (t) {
              n.Library.SetContext(t, i);
              FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Country.toLowerCase()) != null &&
                FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Address1.toLowerCase()) != null &&
                n.Library.InitAdressChanged();
            }),
            FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, i.City.toLowerCase(), function (t) {
              n.Library.SetContext(t, i);
              FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.City.toLowerCase()) != null &&
                FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Address1.toLowerCase()) != null &&
                n.Library.InitAdressChanged();
            }),
            FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, i.PostalCode.toLowerCase(), function (t) {
              n.Library.SetContext(t, i);
              FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.PostalCode.toLowerCase()) != null &&
                FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Address1.toLowerCase()) != null &&
                n.Library.InitAdressChanged();
            }),
            FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, i.StateOrProvince.toLowerCase(), function (t) {
              n.Library.SetContext(t, i);
              FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.StateOrProvince.toLowerCase()) != null &&
                FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, i.Address1.toLowerCase()) != null &&
                n.Library.InitAdressChanged();
            })));
      }),
      (t.SetContext = function (t, i) {
        var r = t.getFormContext();
        n.Library.FormContext = r;
        n.Library.ParentFormContext = r;
        n.Library.AddressFieldNames = i;
      }),
      (t.InitAdressChanged = function (t) {
        n.Library.UserChangeFields = !0;
        n.Library.AddressChanged(n.Library.FormContext, t);
      }),
      (t.MarkerMoved = function (t, i) {
        FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, n.Library.AddressFieldNames.Latitude.toLowerCase(), t);
        FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, n.Library.AddressFieldNames.Longitude.toLowerCase(), i);
      }),
      (t.AddressChanged = function (t, i) {
        if (!FieldOneSkyUtils.IsMobile())
          if (
            ((n.Library.lastRequestTime = new Date()),
            (n.Library.Address1_line1 = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.Address1.toLowerCase()
            )),
            (n.Library.Address1_line2 = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.Address2.toLowerCase()
            )),
            (n.Library.Address1_line3 = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.Address3.toLowerCase()
            )),
            (n.Library.Address1_city = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.City.toLowerCase()
            )),
            (n.Library.Address1_stateorprovince = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.StateOrProvince.toLowerCase()
            )),
            (n.Library.Address1_country = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.Country.toLowerCase()
            )),
            (n.Library.Address1_postalcode = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.PostalCode.toLowerCase()
            )),
            (n.Library.Address1_line1 == null &&
              n.Library.Address1_city == null &&
              n.Library.Address1_stateorprovince == null) ||
              n.Library.IsGeoCodeCalled)
          )
            n.Library.IsCoordinatesEmpty() &&
              i &&
              setTimeout(function () {
                FieldOneSkyUtils.CurrentEntity.Save(t, i);
              }, 10);
          else {
            var r = n.Library.GetAddressSearchString(),
              u = {
                street1: n.Library.Address1_line1,
                street2: n.Library.Address1_line2,
                street3: n.Library.Address1_line3,
                city: n.Library.Address1_city,
                stateorprovince: n.Library.Address1_stateorprovince,
                country: n.Library.Address1_country,
                postalcode: n.Library.Address1_postalcode,
              };
            n.Library.IsGeoCodeCalled = !0;
            GeoCodeUtils.GenerateGeoCode(
              n.Library.ParentFormContext,
              n.Library.FormContext,
              'form_map',
              r,
              function (r, u) {
                r == '0' && u == '0' && ((r = null), (u = null));
                var f = typeof r != 'undefined' && typeof u != 'undefined' && r != null && u != null;
                n.Library.MarkerMoved(r, u);
                f
                  ? FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'Account_InvalidAddress', !1)
                  : i
                  ? FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'Account_InvalidAddress', !0, 'ERROR')
                  : n.Library.showInvalidAddressMessage();
                i && FieldOneSkyUtils.CurrentEntity.Save(t, i);
              },
              i,
              FieldOneSkyUtils.GetEntityLogicalName(t),
              FieldOneSkyUtils.CurrentEntity.GetId(t),
              u
            );
          }
      }),
      (t.IsCoordinatesEmpty = function () {
        return (
          FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, n.Library.AddressFieldNames.Latitude) == null &&
          FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, n.Library.AddressFieldNames.Longitude) == null
        );
      }),
      (t.GetAddressSearchString = function () {
        return {
          street1: n.Library._getFormValue(
            FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, n.Library.AddressFieldNames.Address1.toLowerCase())
          ),
          city: n.Library._getFormValue(
            FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, n.Library.AddressFieldNames.City.toLowerCase())
          ),
          stateorprovince: n.Library._getFormValue(
            FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.StateOrProvince.toLowerCase()
            )
          ),
          postalcode: n.Library._getFormValue(
            FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.AddressFieldNames.PostalCode.toLowerCase()
            )
          ),
          country: n.Library._getFormValue(
            FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, n.Library.AddressFieldNames.Country.toLowerCase())
          ),
        };
      }),
      (t.showInvalidAddressMessage = function (t) {
        t || (t = 'Account_InvalidAddress');
        GeoCodeUtils.IsGeoCodeDialogOpen() &&
          FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, t, !0, 'ERROR');
      }),
      (t.SetDisabledForNewAddressFields = function (t) {
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street1).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street2).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street3).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.city).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.stateOrProvince).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.postalCode).setDisabled(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.country).setDisabled(t);
      }),
      (t.PopulateCurrentAddress = function (t) {
        var i = n.Library.GenerateDisplayAddressForCurrentAddress(t);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.currentAddress)
          .getAttribute()
          .setValue(i);
      }),
      (t.GenerateDisplayAddressForCurrentAddress = function (n) {
        var t = '';
        return n == null || typeof n == 'undefined'
          ? null
          : (FieldOneSkyUtils.UseJapaneseAddressOrder()
              ? ((t = n.postalcode ? t + n.postalcode : t),
                (t = n.country ? t + GeoCodeUtils.separator + n.country : t),
                (t = n.stateorprovince ? t + GeoCodeUtils.separator + n.stateorprovince : t),
                (t = n.city ? t + GeoCodeUtils.separator + n.city : t),
                (t = n.street1 ? t + GeoCodeUtils.separator + n.street1 : t),
                (t = n.street2 ? t + GeoCodeUtils.separator + n.street2 : t),
                (t = n.street3 ? t + GeoCodeUtils.separator + n.street3 : t))
              : ((t = n.street1 ? t + n.street1 : t),
                (t = n.street2 ? t + GeoCodeUtils.separator + n.street2 : t),
                (t = n.street3 ? t + GeoCodeUtils.separator + n.street3 : t),
                (t = n.city ? t + GeoCodeUtils.separator + n.city : t),
                (t = n.stateorprovince ? t + GeoCodeUtils.separator + n.stateorprovince : t),
                (t = n.country ? t + GeoCodeUtils.separator + n.country : t),
                (t = n.postalcode ? t + GeoCodeUtils.separator + n.postalcode : t)),
            t);
      }),
      (t.IsProperAddressRecommended = function () {
        return n.Library.Data.address.length > 1 ? !1 : !0;
      }),
      (t.SetDialogFieldsOnLoad = function () {
        if (
          (n.Library.PopulateCurrentAddress(n.Library.DialogParameter.addressBreakup),
          n.Library.IsProperAddressRecommended())
        ) {
          var t = n.Library.GetSelectedAddressIndex();
          t !== null && (n.Library.SetDisabledForNewAddressFields(!1), n.Library.PopulateNewAddressFields(t));
        } else
          n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.okButton).setDisabled(!0),
            n.Library.SetDisabledForNewAddressFields(!0);
      }),
      (t.OnChangeOfSelectedAddress = function () {
        var t = n.Library.GetSelectedAddressIndex();
        t !== null
          ? (n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.okButton).setDisabled(!1),
            n.Library.SetDisabledForNewAddressFields(!1),
            n.Library.PopulateNewAddressFields(t))
          : (n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.okButton).setDisabled(!0),
            n.Library.clearValuesFromNewAddressFields(),
            n.Library.SetDisabledForNewAddressFields(!0));
      }),
      (t.clearValuesFromNewAddressFields = function () {
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street1)
          .getAttribute()
          .setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street2)
          .getAttribute()
          .setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street3)
          .getAttribute()
          .setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.city).getAttribute().setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.stateOrProvince)
          .getAttribute()
          .setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.country)
          .getAttribute()
          .setValue(null);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.postalCode)
          .getAttribute()
          .setValue(null);
      }),
      (t.GetSelectedAddressIndex = function () {
        var t = n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.suggestions);
        return t ? t.getAttribute().getValue() : null;
      }),
      (t.PopulateNewAddressFields = function (t) {
        var i = n.Library.ScriptWindow.GeoCodeUtils.GetAddressDetailsForSelectedAddress(t, n.Library.Guid);
        n.Library.Address1_line1 = i.addressLine || null;
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street1)
          .getAttribute()
          .setValue(n.Library.Address1_line1);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street2)
          .getAttribute()
          .setValue(n.Library.ScriptWindow.GeoCodeUtils._options.callbacks[n.Library.Guid].addressBreakup.street2);
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.street3)
          .getAttribute()
          .setValue(n.Library.ScriptWindow.GeoCodeUtils._options.callbacks[n.Library.Guid].addressBreakup.street3);
        n.Library.Address1_city = i.locality || null;
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.city)
          .getAttribute()
          .setValue(n.Library.Address1_city);
        n.Library.Address1_stateorprovince = i.adminDistrict || null;
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.stateOrProvince)
          .getAttribute()
          .setValue(n.Library.Address1_stateorprovince);
        n.Library.Address1_country = i.countryRegion || null;
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.country)
          .getAttribute()
          .setValue(n.Library.Address1_country);
        n.Library.Address1_postalcode = i.postalCode || null;
        n.Library.FormContext.getControl(n.Library.AddressSuggestionsDialogMetaData.postalCode)
          .getAttribute()
          .setValue(n.Library.Address1_postalcode);
      }),
      (t.ModifySelectedAddressWithUserEnteredAddress = function (t, i) {
        var u = n.Library.ScriptWindow.GeoCodeUtils._options.callbacks[i].results,
          r = u[t];
        r &&
          r.resourceSets &&
          r.resourceSets.length > 0 &&
          r.resourceSets[0].resources &&
          r.resourceSets[0].resources.length == 1 &&
          r.resourceSets[0].resources[0].matchCodes.find(function (n) {
            n.indexOf('Good') > -1;
          }) !== 'undefined' &&
          ((r.resourceSets[0].resources[0].address.addressLine = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.street1
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.addressLine2 = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.street2
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.addressLine3 = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.street3
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.locality = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.city
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.adminDistrict = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.stateOrProvince
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.countryRegion = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.country
          )
            .getAttribute()
            .getValue()),
          (r.resourceSets[0].resources[0].address.postalCode = n.Library.FormContext.getControl(
            n.Library.AddressSuggestionsDialogMetaData.postalCode
          )
            .getAttribute()
            .getValue()));
      }),
      (t.AutoGeoCode = !1),
      (t.Address1_line1 = null),
      (t.Address1_line2 = null),
      (t.Address1_line3 = null),
      (t.Address1_city = null),
      (t.Address1_stateorprovince = null),
      (t.Address1_country = null),
      (t.Address1_postalcode = null),
      (t.lastRequestTime = null),
      (t.UserChangeFields = !1),
      (t.DialogParameter = null),
      (t.Guid = null),
      (t.ScriptWindow = null),
      (t.ObjPage = null),
      (t.FormContext = null),
      (t.ParentFormContext = null),
      (t.Telemetry = null),
      (t.Data = { address: [] }),
      (t.IsGeoCodeCalled = !1),
      (t.IsAddressSuggestionDialogShowed = !1),
      (t.AddressFieldNames = {
        Address1: 'Address1_Line1',
        Address2: 'Address1_Line2',
        Address3: 'Address1_Line3',
        City: 'Address1_City',
        StateOrProvince: 'Address1_StateOrProvince',
        Country: 'Address1_Country',
        PostalCode: 'Address1_PostalCode',
        Latitude: 'Address1_Latitude',
        Longitude: 'Address1_Longitude',
        StateCode: 'StateCode',
      }),
      (t.AddressSuggestionsDialogMetaData = {
        suggestions: 'address_suggestions',
        description: 'lbl_subheader',
        cancelButton: 'btnCancel',
        okButton: 'btnOk',
        currentAddress: 'current_address',
        street1: 'new_address1_street1',
        street2: 'new_address1_street2',
        street3: 'new_address1_street3',
        city: 'new_address1_city',
        stateOrProvince: 'new_address1_stateOrProvince',
        country: 'new_address1_country',
        postalCode: 'new_address1_postalCode',
      }),
      t
    );
  })();
  n.Library = t;
})(GeoCodeForm || (GeoCodeForm = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_workorderservicetask'),
        (n.EntityLogicalName = 'msdyn_workorderservicetask'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_actualduration: { SchemaName: 'msdyn_ActualDuration', LogicalName: 'msdyn_actualduration' },
          msdyn_agreementbookingservicetask: {
            SchemaName: 'msdyn_AgreementBookingServiceTask',
            LogicalName: 'msdyn_agreementbookingservicetask',
          },
          msdyn_booking: { SchemaName: 'msdyn_Booking', LogicalName: 'msdyn_booking' },
          msdyn_customerasset: { SchemaName: 'msdyn_CustomerAsset', LogicalName: 'msdyn_customerasset' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_estimatedduration: { SchemaName: 'msdyn_EstimatedDuration', LogicalName: 'msdyn_estimatedduration' },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_lineorder: { SchemaName: 'msdyn_LineOrder', LogicalName: 'msdyn_lineorder' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_percentcomplete: { SchemaName: 'msdyn_PercentComplete', LogicalName: 'msdyn_percentcomplete' },
          msdyn_tasktype: { SchemaName: 'msdyn_TaskType', LogicalName: 'msdyn_tasktype' },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
          msdyn_workorderincident: { SchemaName: 'msdyn_WorkOrderIncident', LogicalName: 'msdyn_workorderincident' },
          msdyn_workorderservicetaskid: {
            SchemaName: 'msdyn_workorderservicetaskId',
            LogicalName: 'msdyn_workorderservicetaskid',
          },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_workorderservicetask = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_workorderservice'),
        (n.EntityLogicalName = 'msdyn_workorderservice'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_additionalcost: { SchemaName: 'msdyn_AdditionalCost', LogicalName: 'msdyn_additionalcost' },
          msdyn_additionalcost_base: {
            SchemaName: 'msdyn_additionalcost_Base',
            LogicalName: 'msdyn_additionalcost_base',
          },
          msdyn_agreementbookingservice: {
            SchemaName: 'msdyn_AgreementBookingService',
            LogicalName: 'msdyn_agreementbookingservice',
          },
          msdyn_booking: { SchemaName: 'msdyn_Booking', LogicalName: 'msdyn_booking' },
          msdyn_calculatedunitamount: {
            SchemaName: 'msdyn_CalculatedUnitAmount',
            LogicalName: 'msdyn_calculatedunitamount',
          },
          msdyn_calculatedunitamount_base: {
            SchemaName: 'msdyn_calculatedunitamount_Base',
            LogicalName: 'msdyn_calculatedunitamount_base',
          },
          msdyn_commissioncosts: { SchemaName: 'msdyn_CommissionCosts', LogicalName: 'msdyn_commissioncosts' },
          msdyn_commissioncosts_base: {
            SchemaName: 'msdyn_commissioncosts_Base',
            LogicalName: 'msdyn_commissioncosts_base',
          },
          msdyn_customerasset: { SchemaName: 'msdyn_CustomerAsset', LogicalName: 'msdyn_customerasset' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_discountamount: { SchemaName: 'msdyn_DiscountAmount', LogicalName: 'msdyn_discountamount' },
          msdyn_discountamount_base: {
            SchemaName: 'msdyn_discountamount_Base',
            LogicalName: 'msdyn_discountamount_base',
          },
          msdyn_discountpercent: { SchemaName: 'msdyn_DiscountPercent', LogicalName: 'msdyn_discountpercent' },
          msdyn_duration: { SchemaName: 'msdyn_Duration', LogicalName: 'msdyn_duration' },
          msdyn_durationtobill: { SchemaName: 'msdyn_DurationToBill', LogicalName: 'msdyn_durationtobill' },
          msdyn_estimatecalculatedunitamount: {
            SchemaName: 'msdyn_EstimateCalculatedUnitAmount',
            LogicalName: 'msdyn_estimatecalculatedunitamount',
          },
          msdyn_estimatecalculatedunitamount_base: {
            SchemaName: 'msdyn_estimatecalculatedunitamount_Base',
            LogicalName: 'msdyn_estimatecalculatedunitamount_base',
          },
          msdyn_estimatediscountamount: {
            SchemaName: 'msdyn_EstimateDiscountAmount',
            LogicalName: 'msdyn_estimatediscountamount',
          },
          msdyn_estimatediscountamount_base: {
            SchemaName: 'msdyn_estimatediscountamount_Base',
            LogicalName: 'msdyn_estimatediscountamount_base',
          },
          msdyn_estimatediscountpercent: {
            SchemaName: 'msdyn_EstimateDiscountPercent',
            LogicalName: 'msdyn_estimatediscountpercent',
          },
          msdyn_estimateduration: { SchemaName: 'msdyn_EstimateDuration', LogicalName: 'msdyn_estimateduration' },
          msdyn_estimatesubtotal: { SchemaName: 'msdyn_EstimateSubtotal', LogicalName: 'msdyn_estimatesubtotal' },
          msdyn_estimatesubtotal_base: {
            SchemaName: 'msdyn_estimatesubtotal_Base',
            LogicalName: 'msdyn_estimatesubtotal_base',
          },
          msdyn_estimatetotalamount: {
            SchemaName: 'msdyn_EstimateTotalAmount',
            LogicalName: 'msdyn_estimatetotalamount',
          },
          msdyn_estimatetotalamount_base: {
            SchemaName: 'msdyn_estimatetotalamount_Base',
            LogicalName: 'msdyn_estimatetotalamount_base',
          },
          msdyn_estimatetotalcost: { SchemaName: 'msdyn_EstimateTotalCost', LogicalName: 'msdyn_estimatetotalcost' },
          msdyn_estimatetotalcost_base: {
            SchemaName: 'msdyn_estimatetotalcost_Base',
            LogicalName: 'msdyn_estimatetotalcost_base',
          },
          msdyn_estimateunitamount: { SchemaName: 'msdyn_EstimateUnitAmount', LogicalName: 'msdyn_estimateunitamount' },
          msdyn_estimateunitamount_base: {
            SchemaName: 'msdyn_estimateunitamount_Base',
            LogicalName: 'msdyn_estimateunitamount_base',
          },
          msdyn_estimateunitcost: { SchemaName: 'msdyn_EstimateUnitCost', LogicalName: 'msdyn_estimateunitcost' },
          msdyn_estimateunitcost_base: {
            SchemaName: 'msdyn_estimateunitcost_Base',
            LogicalName: 'msdyn_estimateunitcost_base',
          },
          msdyn_internaldescription: {
            SchemaName: 'msdyn_InternalDescription',
            LogicalName: 'msdyn_internaldescription',
          },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_lineorder: { SchemaName: 'msdyn_LineOrder', LogicalName: 'msdyn_lineorder' },
          msdyn_linestatus: { SchemaName: 'msdyn_LineStatus', LogicalName: 'msdyn_linestatus' },
          msdyn_minimumchargeamount: {
            SchemaName: 'msdyn_MinimumChargeAmount',
            LogicalName: 'msdyn_minimumchargeamount',
          },
          msdyn_minimumchargeamount_base: {
            SchemaName: 'msdyn_minimumchargeamount_Base',
            LogicalName: 'msdyn_minimumchargeamount_base',
          },
          msdyn_minimumchargeduration: {
            SchemaName: 'msdyn_MinimumChargeDuration',
            LogicalName: 'msdyn_minimumchargeduration',
          },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_pricelist: { SchemaName: 'msdyn_PriceList', LogicalName: 'msdyn_pricelist' },
          msdyn_service: { SchemaName: 'msdyn_Service', LogicalName: 'msdyn_service' },
          msdyn_subtotal: { SchemaName: 'msdyn_Subtotal', LogicalName: 'msdyn_subtotal' },
          msdyn_subtotal_base: { SchemaName: 'msdyn_subtotal_Base', LogicalName: 'msdyn_subtotal_base' },
          msdyn_taxable: { SchemaName: 'msdyn_Taxable', LogicalName: 'msdyn_taxable' },
          msdyn_totalamount: { SchemaName: 'msdyn_TotalAmount', LogicalName: 'msdyn_totalamount' },
          msdyn_totalamount_base: { SchemaName: 'msdyn_totalamount_Base', LogicalName: 'msdyn_totalamount_base' },
          msdyn_totalcost: { SchemaName: 'msdyn_TotalCost', LogicalName: 'msdyn_totalcost' },
          msdyn_totalcost_base: { SchemaName: 'msdyn_totalcost_Base', LogicalName: 'msdyn_totalcost_base' },
          msdyn_unit: { SchemaName: 'msdyn_Unit', LogicalName: 'msdyn_unit' },
          msdyn_unitamount: { SchemaName: 'msdyn_UnitAmount', LogicalName: 'msdyn_unitamount' },
          msdyn_unitamount_base: { SchemaName: 'msdyn_unitamount_Base', LogicalName: 'msdyn_unitamount_base' },
          msdyn_unitcost: { SchemaName: 'msdyn_UnitCost', LogicalName: 'msdyn_unitcost' },
          msdyn_unitcost_base: { SchemaName: 'msdyn_unitcost_Base', LogicalName: 'msdyn_unitcost_base' },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
          msdyn_workorderincident: { SchemaName: 'msdyn_WorkOrderIncident', LogicalName: 'msdyn_workorderincident' },
          msdyn_workorderserviceid: { SchemaName: 'msdyn_workorderserviceId', LogicalName: 'msdyn_workorderserviceid' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        (n.getTransactionCurrencyId = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.transactioncurrencyid.LogicalName);
        }),
        (n.SetLookUp = function (n, t, i, r, u) {
          var f = u === null || typeof u == 'undefined';
          r !== null && !f && r.length > 0
            ? FieldOneSkyUtils.Fields.SetLookUpValue(n, t, r, u, i)
            : r !== null && f && r.Id !== null
            ? FieldOneSkyUtils.Fields.SetLookUpValue(n, t, r.Id, r.Name, r.LogicalName)
            : r !== null && f && r.length > 0 && r[0] !== null && r[0].id !== null
            ? FieldOneSkyUtils.Fields.SetLookUpValue(n, t, r[0].id, r[0].name, r[0].typename)
            : FieldOneSkyUtils.Fields.SetValue(n, t, null);
        }),
        n
      );
    })();
    n.msdyn_workorderservice = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_warehouse'),
        (n.EntityLogicalName = 'msdyn_warehouse'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_warehouseid: { SchemaName: 'msdyn_warehouseId', LogicalName: 'msdyn_warehouseid' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_warehouse = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_purchaseorderreceiptproduct'),
        (n.EntityLogicalName = 'msdyn_purchaseorderreceiptproduct'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_associatetobooking: { SchemaName: 'msdyn_AssociateToBooking', LogicalName: 'msdyn_associatetobooking' },
          msdyn_associatetowarehouse: {
            SchemaName: 'msdyn_AssociateToWarehouse',
            LogicalName: 'msdyn_associatetowarehouse',
          },
          msdyn_associatetoworkorder: {
            SchemaName: 'msdyn_AssociateToWorkOrder',
            LogicalName: 'msdyn_associatetoworkorder',
          },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_purchaseorder: { SchemaName: 'msdyn_PurchaseOrder', LogicalName: 'msdyn_purchaseorder' },
          msdyn_purchaseorderbill: { SchemaName: 'msdyn_PurchaseOrderBill', LogicalName: 'msdyn_purchaseorderbill' },
          msdyn_purchaseorderproduct: {
            SchemaName: 'msdyn_PurchaseOrderProduct',
            LogicalName: 'msdyn_purchaseorderproduct',
          },
          msdyn_purchaseorderreceipt: {
            SchemaName: 'msdyn_PurchaseOrderReceipt',
            LogicalName: 'msdyn_purchaseorderreceipt',
          },
          msdyn_purchaseorderreceiptproductid: {
            SchemaName: 'msdyn_purchaseorderreceiptproductId',
            LogicalName: 'msdyn_purchaseorderreceiptproductid',
          },
          msdyn_quantity: { SchemaName: 'msdyn_Quantity', LogicalName: 'msdyn_quantity' },
          msdyn_totalcost: { SchemaName: 'msdyn_TotalCost', LogicalName: 'msdyn_totalcost' },
          msdyn_totalcost_base: { SchemaName: 'msdyn_totalcost_Base', LogicalName: 'msdyn_totalcost_base' },
          msdyn_unitcost: { SchemaName: 'msdyn_UnitCost', LogicalName: 'msdyn_unitcost' },
          msdyn_unitcost_base: { SchemaName: 'msdyn_unitcost_Base', LogicalName: 'msdyn_unitcost_base' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_purchaseorderreceiptproduct = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function t() {}
      return (
        (t.EntitySchemaName = 'msdyn_workorderproduct'),
        (t.EntityLogicalName = 'msdyn_workorderproduct'),
        (t.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_additionalcost: { SchemaName: 'msdyn_AdditionalCost', LogicalName: 'msdyn_additionalcost' },
          msdyn_additionalcost_base: {
            SchemaName: 'msdyn_additionalcost_Base',
            LogicalName: 'msdyn_additionalcost_base',
          },
          msdyn_agreementbookingproduct: {
            SchemaName: 'msdyn_AgreementBookingProduct',
            LogicalName: 'msdyn_agreementbookingproduct',
          },
          msdyn_allocated: { SchemaName: 'msdyn_Allocated', LogicalName: 'msdyn_allocated' },
          msdyn_booking: { SchemaName: 'msdyn_Booking', LogicalName: 'msdyn_booking' },
          msdyn_commissioncosts: { SchemaName: 'msdyn_CommissionCosts', LogicalName: 'msdyn_commissioncosts' },
          msdyn_commissioncosts_base: {
            SchemaName: 'msdyn_commissioncosts_Base',
            LogicalName: 'msdyn_commissioncosts_base',
          },
          msdyn_customerasset: { SchemaName: 'msdyn_CustomerAsset', LogicalName: 'msdyn_customerasset' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_discountamount: { SchemaName: 'msdyn_DiscountAmount', LogicalName: 'msdyn_discountamount' },
          msdyn_discountamount_base: {
            SchemaName: 'msdyn_discountamount_Base',
            LogicalName: 'msdyn_discountamount_base',
          },
          msdyn_discountpercent: { SchemaName: 'msdyn_DiscountPercent', LogicalName: 'msdyn_discountpercent' },
          msdyn_estimatediscountamount: {
            SchemaName: 'msdyn_EstimateDiscountAmount',
            LogicalName: 'msdyn_estimatediscountamount',
          },
          msdyn_estimatediscountamount_base: {
            SchemaName: 'msdyn_estimatediscountamount_Base',
            LogicalName: 'msdyn_estimatediscountamount_base',
          },
          msdyn_estimatediscountpercent: {
            SchemaName: 'msdyn_EstimateDiscountPercent',
            LogicalName: 'msdyn_estimatediscountpercent',
          },
          msdyn_estimatequantity: { SchemaName: 'msdyn_EstimateQuantity', LogicalName: 'msdyn_estimatequantity' },
          msdyn_estimatesubtotal: { SchemaName: 'msdyn_EstimateSubtotal', LogicalName: 'msdyn_estimatesubtotal' },
          msdyn_estimatesubtotal_base: {
            SchemaName: 'msdyn_estimatesubtotal_Base',
            LogicalName: 'msdyn_estimatesubtotal_base',
          },
          msdyn_estimatetotalamount: {
            SchemaName: 'msdyn_EstimateTotalAmount',
            LogicalName: 'msdyn_estimatetotalamount',
          },
          msdyn_estimatetotalamount_base: {
            SchemaName: 'msdyn_estimatetotalamount_Base',
            LogicalName: 'msdyn_estimatetotalamount_base',
          },
          msdyn_estimatetotalcost: { SchemaName: 'msdyn_EstimateTotalCost', LogicalName: 'msdyn_estimatetotalcost' },
          msdyn_estimatetotalcost_base: {
            SchemaName: 'msdyn_estimatetotalcost_Base',
            LogicalName: 'msdyn_estimatetotalcost_base',
          },
          msdyn_estimateunitamount: { SchemaName: 'msdyn_EstimateUnitAmount', LogicalName: 'msdyn_estimateunitamount' },
          msdyn_estimateunitamount_base: {
            SchemaName: 'msdyn_estimateunitamount_Base',
            LogicalName: 'msdyn_estimateunitamount_base',
          },
          msdyn_estimateunitcost: { SchemaName: 'msdyn_EstimateUnitCost', LogicalName: 'msdyn_estimateunitcost' },
          msdyn_estimateunitcost_base: {
            SchemaName: 'msdyn_estimateunitcost_Base',
            LogicalName: 'msdyn_estimateunitcost_base',
          },
          msdyn_internaldescription: {
            SchemaName: 'msdyn_InternalDescription',
            LogicalName: 'msdyn_internaldescription',
          },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_lineorder: { SchemaName: 'msdyn_LineOrder', LogicalName: 'msdyn_lineorder' },
          msdyn_linestatus: { SchemaName: 'msdyn_LineStatus', LogicalName: 'msdyn_linestatus' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_pricelist: { SchemaName: 'msdyn_PriceList', LogicalName: 'msdyn_pricelist' },
          msdyn_product: { SchemaName: 'msdyn_Product', LogicalName: 'msdyn_product' },
          msdyn_purchaseorderreceiptproduct: {
            SchemaName: 'msdyn_PurchaseOrderReceiptProduct',
            LogicalName: 'msdyn_purchaseorderreceiptproduct',
          },
          msdyn_qtytobill: { SchemaName: 'msdyn_QtyToBill', LogicalName: 'msdyn_qtytobill' },
          msdyn_quantity: { SchemaName: 'msdyn_Quantity', LogicalName: 'msdyn_quantity' },
          msdyn_subtotal: { SchemaName: 'msdyn_Subtotal', LogicalName: 'msdyn_subtotal' },
          msdyn_subtotal_base: { SchemaName: 'msdyn_subtotal_Base', LogicalName: 'msdyn_subtotal_base' },
          msdyn_taxable: { SchemaName: 'msdyn_Taxable', LogicalName: 'msdyn_taxable' },
          msdyn_totalamount: { SchemaName: 'msdyn_TotalAmount', LogicalName: 'msdyn_totalamount' },
          msdyn_totalamount_base: { SchemaName: 'msdyn_totalamount_Base', LogicalName: 'msdyn_totalamount_base' },
          msdyn_totalcost: { SchemaName: 'msdyn_TotalCost', LogicalName: 'msdyn_totalcost' },
          msdyn_totalcost_base: { SchemaName: 'msdyn_totalcost_Base', LogicalName: 'msdyn_totalcost_base' },
          msdyn_unit: { SchemaName: 'msdyn_Unit', LogicalName: 'msdyn_unit' },
          msdyn_unitamount: { SchemaName: 'msdyn_UnitAmount', LogicalName: 'msdyn_unitamount' },
          msdyn_unitamount_base: { SchemaName: 'msdyn_unitamount_Base', LogicalName: 'msdyn_unitamount_base' },
          msdyn_unitcost: { SchemaName: 'msdyn_UnitCost', LogicalName: 'msdyn_unitcost' },
          msdyn_unitcost_base: { SchemaName: 'msdyn_unitcost_Base', LogicalName: 'msdyn_unitcost_base' },
          msdyn_warehouse: { SchemaName: 'msdyn_Warehouse', LogicalName: 'msdyn_warehouse' },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
          msdyn_workorderincident: { SchemaName: 'msdyn_WorkOrderIncident', LogicalName: 'msdyn_workorderincident' },
          msdyn_workorderproductid: { SchemaName: 'msdyn_workorderproductId', LogicalName: 'msdyn_workorderproductid' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        (t.getTransactionCurrencyId = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.transactioncurrencyid.LogicalName);
        }),
        (t.setTransactionCurrencyId = function (n, i) {
          FieldOneSkyUtils.Fields.SetValue(n, t.attributes.transactioncurrencyid.LogicalName, i);
        }),
        (t.setWarehouse = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_warehouse.LogicalName,
            n.msdyn_warehouse.EntityLogicalName,
            r,
            u
          );
        }),
        (t.GetProduct = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_product.LogicalName);
        }),
        (t.GetLineStatus = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_linestatus.LogicalName);
        }),
        (t.GetWarehouse = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_warehouse.LogicalName);
        }),
        (t.SetWarehouseAsRequired = function (n) {
          FieldOneSkyUtils.Fields.SetRequired(n, t.attributes.msdyn_warehouse.LogicalName, !0);
        }),
        (t.SetWarehouseAsUnRequired = function (n) {
          FieldOneSkyUtils.Fields.SetRequired(n, t.attributes.msdyn_warehouse.LogicalName, !1);
        }),
        (t.GetUnit = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_unit.LogicalName);
        }),
        (t.GetQuantity = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_quantity.LogicalName);
        }),
        (t.SetQuantity = function (n, i) {
          FieldOneSkyUtils.Fields.SetValue(n, t.attributes.msdyn_quantity.LogicalName, i);
        }),
        (t.getAllocated = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_allocated.LogicalName);
        }),
        (t.setAllocated = function (n, i) {
          FieldOneSkyUtils.Fields.SetValue(n, t.attributes.msdyn_allocated.LogicalName, i);
        }),
        (t.getPOReceiptProduct = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_purchaseorderreceiptproduct.LogicalName);
        }),
        (t.setPOReceiptProduct = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_purchaseorderreceiptproduct.LogicalName,
            n.msdyn_purchaseorderreceiptproduct.EntityLogicalName,
            r,
            u
          );
        }),
        t
      );
    })();
    n.msdyn_workorderproduct = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_incidenttype'),
        (n.EntityLogicalName = 'msdyn_incidenttype'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_copyincidentitemstoagreement: {
            SchemaName: 'msdyn_CopyIncidentItemstoAgreement',
            LogicalName: 'msdyn_copyincidentitemstoagreement',
          },
          msdyn_defaultworkordertype: {
            SchemaName: 'msdyn_DefaultWorkOrderType',
            LogicalName: 'msdyn_defaultworkordertype',
          },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_estimatedduration: { SchemaName: 'msdyn_EstimatedDuration', LogicalName: 'msdyn_estimatedduration' },
          msdyn_suggestedduration: { SchemaName: 'msdyn_SuggestedDuration', LogicalName: 'msdyn_suggestedduration' },
          msdyn_lastcalculatedtime: { SchemaName: 'msdyn_LastCalculatedTime', LogicalName: 'msdyn_lastcalculatedtime' },
          msdyn_incidenttypeid: { SchemaName: 'msdyn_incidenttypeId', LogicalName: 'msdyn_incidenttypeid' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_incidenttype = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function t() {
        this.SetCurrencyField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.transactioncurrencyid.LogicalName,
            n.TransactionCurrency.EntityLogicalName,
            r,
            u
          );
        };
        this.GetServiceAccount = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_serviceaccount.LogicalName);
        };
        this.SetServiceAccountField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_serviceaccount.LogicalName,
            n.Account.EntityLogicalName,
            r,
            u
          );
        };
        this.GetFunctionalLocation = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_functionallocation.LogicalName);
        };
        this.SetFunctionalLocationField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_functionallocation.LogicalName,
            n.msdyn_functionallocation.EntityLogicalName,
            r,
            u
          );
        };
        this.GetSystemStatusField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_systemstatus.LogicalName);
        };
        this.GetSubStatusField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_substatus.LogicalName);
        };
        this.GetSalesTaxCodeField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_taxcode.LogicalName);
        };
        this.SetSalesTaxCodeField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_taxcode.LogicalName,
            n.msdyn_taxcode.EntityLogicalName,
            r,
            u
          );
        };
        this.GetWorkOrderTypeField = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_workordertype.LogicalName);
        };
        this.SetWorkOrderTypeField = function (i, r, u) {
          FieldOneSkyUtils.Fields.SetLookUp(
            i,
            t.attributes.msdyn_workordertype.LogicalName,
            n.msdyn_incidenttype.EntityLogicalName,
            r,
            u
          );
        };
        this.getServiceTerritory = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_serviceterritory.LogicalName);
        };
        this.getPostalCode = function (n) {
          return FieldOneSkyUtils.Fields.GetValue(n, t.attributes.msdyn_postalcode.LogicalName);
        };
        this.setPostalCode = function (n, i) {
          return FieldOneSkyUtils.Fields.SetValue(n, t.attributes.msdyn_postalcode.LogicalName, i);
        };
      }
      return (
        (t.prototype.setServiceTerritory = function (n, i, r) {
          FieldOneSkyUtils.Fields.SetLookUp(n, t.attributes.msdyn_serviceterritory.LogicalName, null, i, r);
        }),
        (t.EntitySchemaName = 'msdyn_workorder'),
        (t.EntityLogicalName = 'msdyn_workorder'),
        (t.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_address1: { SchemaName: 'msdyn_Address1', LogicalName: 'msdyn_address1' },
          msdyn_address2: { SchemaName: 'msdyn_Address2', LogicalName: 'msdyn_address2' },
          msdyn_address3: { SchemaName: 'msdyn_Address3', LogicalName: 'msdyn_address3' },
          msdyn_addressname: { SchemaName: 'msdyn_AddressName', LogicalName: 'msdyn_addressname' },
          msdyn_agreement: { SchemaName: 'msdyn_Agreement', LogicalName: 'msdyn_agreement' },
          msdyn_billingaccount: { SchemaName: 'msdyn_BillingAccount', LogicalName: 'msdyn_billingaccount' },
          msdyn_bookingsummary: { SchemaName: 'msdyn_BookingSummary', LogicalName: 'msdyn_bookingsummary' },
          msdyn_childindex: { SchemaName: 'msdyn_ChildIndex', LogicalName: 'msdyn_childindex' },
          msdyn_city: { SchemaName: 'msdyn_City', LogicalName: 'msdyn_city' },
          msdyn_closedby: { SchemaName: 'msdyn_ClosedBy', LogicalName: 'msdyn_closedby' },
          msdyn_country: { SchemaName: 'msdyn_Country', LogicalName: 'msdyn_country' },
          msdyn_customerasset: { SchemaName: 'msdyn_CustomerAsset', LogicalName: 'msdyn_customerasset' },
          msdyn_datewindowend: { SchemaName: 'msdyn_DateWindowEnd', LogicalName: 'msdyn_datewindowend' },
          msdyn_datewindowstart: { SchemaName: 'msdyn_DateWindowStart', LogicalName: 'msdyn_datewindowstart' },
          msdyn_estimatesubtotalamount: {
            SchemaName: 'msdyn_EstimateSubtotalAmount',
            LogicalName: 'msdyn_estimatesubtotalamount',
          },
          msdyn_estimatesubtotalamount_base: {
            SchemaName: 'msdyn_estimatesubtotalamount_Base',
            LogicalName: 'msdyn_estimatesubtotalamount_base',
          },
          msdyn_firstarrivedon: { SchemaName: 'msdyn_firstarrivedon', LogicalName: 'msdyn_firstarrivedon' },
          msdyn_completedon: { SchemaName: 'msdyn_completedon', LogicalName: 'msdyn_completedon' },
          msdyn_followupnote: { SchemaName: 'msdyn_FollowUpNote', LogicalName: 'msdyn_followupnote' },
          msdyn_followuprequired: { SchemaName: 'msdyn_FollowUpRequired', LogicalName: 'msdyn_followuprequired' },
          msdyn_instructions: { SchemaName: 'msdyn_Instructions', LogicalName: 'msdyn_instructions' },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_isfollowup: { SchemaName: 'msdyn_IsFollowUp', LogicalName: 'msdyn_isfollowup' },
          msdyn_ismobile: { SchemaName: 'msdyn_IsMobile', LogicalName: 'msdyn_ismobile' },
          msdyn_latitude: { SchemaName: 'msdyn_Latitude', LogicalName: 'msdyn_latitude' },
          msdyn_longitude: { SchemaName: 'msdyn_Longitude', LogicalName: 'msdyn_longitude' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_opportunityid: { SchemaName: 'msdyn_OpportunityId', LogicalName: 'msdyn_opportunityid' },
          msdyn_parentworkorder: { SchemaName: 'msdyn_ParentWorkOrder', LogicalName: 'msdyn_parentworkorder' },
          msdyn_postalcode: { SchemaName: 'msdyn_PostalCode', LogicalName: 'msdyn_postalcode' },
          msdyn_preferredresource: { SchemaName: 'msdyn_PreferredResource', LogicalName: 'msdyn_preferredresource' },
          msdyn_pricelist: { SchemaName: 'msdyn_PriceList', LogicalName: 'msdyn_pricelist' },
          msdyn_primaryincidentdescription: {
            SchemaName: 'msdyn_PrimaryIncidentDescription',
            LogicalName: 'msdyn_primaryincidentdescription',
          },
          msdyn_primaryincidentestimatedduration: {
            SchemaName: 'msdyn_PrimaryIncidentEstimatedDuration',
            LogicalName: 'msdyn_primaryincidentestimatedduration',
          },
          msdyn_primaryincidenttype: {
            SchemaName: 'msdyn_PrimaryIncidentType',
            LogicalName: 'msdyn_primaryincidenttype',
          },
          msdyn_priority: { SchemaName: 'msdyn_Priority', LogicalName: 'msdyn_priority' },
          msdyn_purchaseorderreceiptproduct: {
            SchemaName: 'msdyn_PurchaseOrderReceiptProduct',
            LogicalName: 'msdyn_purchaseorderreceiptproduct',
          },
          msdyn_reportedbycontact: { SchemaName: 'msdyn_ReportedByContact', LogicalName: 'msdyn_reportedbycontact' },
          msdyn_serviceaccount: { SchemaName: 'msdyn_ServiceAccount', LogicalName: 'msdyn_serviceaccount' },
          msdyn_servicerequest: { SchemaName: 'msdyn_ServiceRequest', LogicalName: 'msdyn_servicerequest' },
          msdyn_serviceterritory: { SchemaName: 'msdyn_ServiceTerritory', LogicalName: 'msdyn_serviceterritory' },
          msdyn_stateorprovince: { SchemaName: 'msdyn_StateOrProvince', LogicalName: 'msdyn_stateorprovince' },
          msdyn_substatus: { SchemaName: 'msdyn_SubStatus', LogicalName: 'msdyn_substatus' },
          msdyn_subtotalamount: { SchemaName: 'msdyn_SubtotalAmount', LogicalName: 'msdyn_subtotalamount' },
          msdyn_subtotalamount_base: {
            SchemaName: 'msdyn_subtotalamount_Base',
            LogicalName: 'msdyn_subtotalamount_base',
          },
          msdyn_supportcontact: { SchemaName: 'msdyn_SupportContact', LogicalName: 'msdyn_supportcontact' },
          msdyn_systemstatus: { SchemaName: 'msdyn_SystemStatus', LogicalName: 'msdyn_systemstatus' },
          msdyn_taxable: { SchemaName: 'msdyn_Taxable', LogicalName: 'msdyn_taxable' },
          msdyn_taxcode: { SchemaName: 'msdyn_TaxCode', LogicalName: 'msdyn_taxcode' },
          msdyn_timeclosed: { SchemaName: 'msdyn_TimeClosed', LogicalName: 'msdyn_timeclosed' },
          msdyn_timefrompromised: { SchemaName: 'msdyn_TimeFromPromised', LogicalName: 'msdyn_timefrompromised' },
          msdyn_timegroup: { SchemaName: 'msdyn_TimeGroup', LogicalName: 'msdyn_timegroup' },
          msdyn_timegroupdetailselected: {
            SchemaName: 'msdyn_TimeGroupDetailSelected',
            LogicalName: 'msdyn_timegroupdetailselected',
          },
          msdyn_timetopromised: { SchemaName: 'msdyn_TimeToPromised', LogicalName: 'msdyn_timetopromised' },
          msdyn_timewindowend: { SchemaName: 'msdyn_TimeWindowEnd', LogicalName: 'msdyn_timewindowend' },
          msdyn_timewindowstart: { SchemaName: 'msdyn_TimeWindowStart', LogicalName: 'msdyn_timewindowstart' },
          msdyn_totalamount: { SchemaName: 'msdyn_TotalAmount', LogicalName: 'msdyn_totalamount' },
          msdyn_totalamount_base: { SchemaName: 'msdyn_totalamount_Base', LogicalName: 'msdyn_totalamount_base' },
          msdyn_totalsalestax: { SchemaName: 'msdyn_TotalSalesTax', LogicalName: 'msdyn_totalsalestax' },
          msdyn_totalsalestax_base: { SchemaName: 'msdyn_totalsalestax_Base', LogicalName: 'msdyn_totalsalestax_base' },
          msdyn_worklocation: { SchemaName: 'msdyn_WorkLocation', LogicalName: 'msdyn_worklocation' },
          msdyn_workorderid: { SchemaName: 'msdyn_workorderId', LogicalName: 'msdyn_workorderid' },
          msdyn_workordersummary: { SchemaName: 'msdyn_WorkOrderSummary', LogicalName: 'msdyn_workordersummary' },
          msdyn_workordertype: { SchemaName: 'msdyn_WorkOrderType', LogicalName: 'msdyn_workordertype' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          processid: { SchemaName: 'processid', LogicalName: 'processid' },
          stageid: { SchemaName: 'stageid', LogicalName: 'stageid' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          traversedpath: { SchemaName: 'traversedpath', LogicalName: 'traversedpath' },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
          accountid: { SchemaName: 'accountid', LogicalName: 'accountid' },
          name: { SchemaName: 'name', LogicalName: 'name' },
          msdyn_workhourtemplate: { SchemaName: 'msdyn_workhourtemplate', LogicalName: 'msdyn_workhourtemplate' },
          msdyn_functionallocation: { SchemaName: 'msdyn_functionallocation', LogicalName: 'msdyn_functionallocation' },
        }),
        t
      );
    })();
    n.msdyn_workorder = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'BookableResourceBooking'),
        (n.EntityLogicalName = 'bookableresourcebooking'),
        (n.attributes = {
          bookableresourcebookingid: {
            SchemaName: 'BookableResourceBookingId',
            LogicalName: 'bookableresourcebookingid',
          },
          bookingstatus: { SchemaName: 'BookingStatus', LogicalName: 'bookingstatus' },
          duration: { SchemaName: 'Duration', LogicalName: 'duration' },
          endtime: { SchemaName: 'EndTime', LogicalName: 'endtime' },
          msdyn_actualarrivaltime: { SchemaName: 'msdyn_ActualArrivalTime', LogicalName: 'msdyn_actualarrivaltime' },
          msdyn_actualtravelduration: {
            SchemaName: 'msdyn_ActualTravelDuration',
            LogicalName: 'msdyn_actualtravelduration',
          },
          msdyn_bookableresource: { SchemaName: 'msdyn_bookableresource', LogicalName: 'msdyn_bookableresource' },
          msdyn_cascadecrewchanges: { SchemaName: 'msdyn_CascadeCrewChanges', LogicalName: 'msdyn_cascadecrewchanges' },
          msdyn_estimatedarrivaltime: {
            SchemaName: 'msdyn_EstimatedArrivalTime',
            LogicalName: 'msdyn_estimatedarrivaltime',
          },
          msdyn_estimatedtravelduration: {
            SchemaName: 'msdyn_EstimatedTravelDuration',
            LogicalName: 'msdyn_estimatedtravelduration',
          },
          msdyn_agreementbookingdate: {
            SchemaName: 'msdyn_AgreementBookingDate',
            LogicalName: 'msdyn_agreementbookingdate',
          },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_offlinetimestamp: { SchemaName: 'msdyn_OfflineTimestamp', LogicalName: 'msdyn_offlinetimestamp' },
          msdyn_preventtimestampcreation: {
            SchemaName: 'msdyn_PreventTimestampCreation',
            LogicalName: 'msdyn_preventtimestampcreation',
          },
          msdyn_resourcegroup: { SchemaName: 'msdyn_ResourceGroup', LogicalName: 'msdyn_resourcegroup' },
          msdyn_signature: { SchemaName: 'msdyn_Signature', LogicalName: 'msdyn_signature' },
          msdyn_slottext: { SchemaName: 'msdyn_SlotText', LogicalName: 'msdyn_slottext' },
          msdyn_totalbillableduration: {
            SchemaName: 'msdyn_TotalBillableDuration',
            LogicalName: 'msdyn_totalbillableduration',
          },
          msdyn_totalbreakduration: { SchemaName: 'msdyn_TotalBreakDuration', LogicalName: 'msdyn_totalbreakduration' },
          msdyn_totalcost: { SchemaName: 'msdyn_TotalCost', LogicalName: 'msdyn_totalcost' },
          msdyn_totalcost_base: { SchemaName: 'msdyn_totalcost_Base', LogicalName: 'msdyn_totalcost_base' },
          msdyn_totaldurationinprogress: {
            SchemaName: 'msdyn_TotalDurationInProgress',
            LogicalName: 'msdyn_totaldurationinprogress',
          },
          msdyn_traveltimerescheduling: {
            SchemaName: 'msdyn_TravelTimeRescheduling',
            LogicalName: 'msdyn_traveltimerescheduling',
          },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
          name: { SchemaName: 'Name', LogicalName: 'name' },
          resource: { SchemaName: 'Resource', LogicalName: 'resource' },
          starttime: { SchemaName: 'StartTime', LogicalName: 'starttime' },
          msdyn_crew: { SchemaName: 'msdyn_Crew', LogicalName: 'msdyn_crew' },
          msdyn_crewmembertype: { SchemaName: 'msdyn_CrewMemberType', LogicalName: 'msdyn_crewmembertype' },
          msdyn_acceptcascadecrewchanges: {
            SchemaName: 'msdyn_AcceptCascadeCrewChanges',
            LogicalName: 'msdyn_acceptcascadecrewchanges',
          },
        }),
        (n.getBookingStatus = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.bookingstatus.LogicalName);
        }),
        (n.getDuration = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.duration.LogicalName);
        }),
        (n.getCascadeCrewChanges = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_cascadecrewchanges.LogicalName);
        }),
        (n.setCascadeCrewChanges = function (t, i) {
          return FieldOneSkyUtils.Fields.SetValue(t, n.attributes.msdyn_cascadecrewchanges.LogicalName, i);
        }),
        (n.getWorkOrder = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_workorder.LogicalName);
        }),
        (n.setWorkOrder = function (t, i) {
          return FieldOneSkyUtils.Fields.SetValue(t, n.attributes.msdyn_workorder.LogicalName, i);
        }),
        (n.getAgreementBookingDate = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_agreementbookingdate.LogicalName);
        }),
        (n.setAgreementBookingDate = function (t, i) {
          return FieldOneSkyUtils.Fields.SetValue(t, n.attributes.msdyn_agreementbookingdate.LogicalName, i);
        }),
        (n.getStartTime = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.starttime.LogicalName);
        }),
        (n.setStartTime = function (t, i) {
          return FieldOneSkyUtils.Fields.SetValue(t, n.attributes.starttime.LogicalName, i);
        }),
        (n.getEndTime = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.endtime.LogicalName);
        }),
        (n.setEndTime = function (t, i) {
          return FieldOneSkyUtils.Fields.SetValue(t, n.attributes.endtime.LogicalName, i);
        }),
        (n.getResource = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.resource.LogicalName);
        }),
        (n.getAAT = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_actualarrivaltime.LogicalName);
        }),
        (n.getEAT = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_estimatedarrivaltime.LogicalName);
        }),
        (n.getETD = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_estimatedtravelduration.LogicalName);
        }),
        (n.getATD = function (t) {
          return FieldOneSkyUtils.Fields.GetValue(t, n.attributes.msdyn_actualtravelduration.LogicalName);
        }),
        n
      );
    })();
    n.BookableResourceBooking = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_customerasset'),
        (n.EntityLogicalName = 'msdyn_customerasset'),
        (n.attributes = {
          msdyn_customerassetid: { SchemaName: 'msdyn_CustomerAssetId', LogicalName: 'msdyn_customerassetid' },
          msdyn_name: { SchemaName: 'msdyn_Name', LogicalName: 'msdyn_name' },
          msdyn_parentasset: { SchemaName: 'msdyn_ParentAsset', LogicalName: 'msdyn_parentasset' },
          msdyn_masterasset: { SchemaName: 'msdyn_MasterAsset', LogicalName: 'msdyn_masterasset' },
          msdyn_account: { SchemaName: 'msdyn_Account', LogicalName: 'msdyn_account' },
        }),
        n
      );
    })();
    n.CustomerAsset = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_PostalCode'),
        (n.EntityLogicalName = 'msdyn_postalcode'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_postalcodeid: { SchemaName: 'msdyn_postalcodeId', LogicalName: 'msdyn_postalcodeid' },
          msdyn_serviceterritory: { SchemaName: 'msdyn_ServiceTerritory', LogicalName: 'msdyn_serviceterritory' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
          _msdyn_serviceterritory_value: {
            SchemaName: '_msdyn_ServiceTerritory_value',
            LogicalName: '_msdyn_serviceterritory_value',
          },
        }),
        n
      );
    })();
    n.msdyn_postalcode = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_workorderincident'),
        (n.EntityLogicalName = 'msdyn_workorderincident'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_agreementbookingincident: {
            SchemaName: 'msdyn_AgreementBookingIncident',
            LogicalName: 'msdyn_agreementbookingincident',
          },
          msdyn_customerasset: { SchemaName: 'msdyn_CustomerAsset', LogicalName: 'msdyn_customerasset' },
          msdyn_description: { SchemaName: 'msdyn_Description', LogicalName: 'msdyn_description' },
          msdyn_estimatedduration: { SchemaName: 'msdyn_EstimatedDuration', LogicalName: 'msdyn_estimatedduration' },
          msdyn_functionallocation: { SchemaName: 'msdyn_FunctionalLocation', LogicalName: 'msdyn_functionallocation' },
          msdyn_incidentresolved: { SchemaName: 'msdyn_IncidentResolved', LogicalName: 'msdyn_incidentresolved' },
          msdyn_incidenttype: { SchemaName: 'msdyn_IncidentType', LogicalName: 'msdyn_incidenttype' },
          msdyn_internalflags: { SchemaName: 'msdyn_InternalFlags', LogicalName: 'msdyn_internalflags' },
          msdyn_ismobile: { SchemaName: 'msdyn_IsMobile', LogicalName: 'msdyn_ismobile' },
          msdyn_isprimary: { SchemaName: 'msdyn_IsPrimary', LogicalName: 'msdyn_isprimary' },
          msdyn_itemspopulated: { SchemaName: 'msdyn_ItemsPopulated', LogicalName: 'msdyn_itemspopulated' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_resourcerequirement: {
            SchemaName: 'msdyn_ResourceRequirement',
            LogicalName: 'msdyn_resourcerequirement',
          },
          msdyn_taskspercentcompleted: {
            SchemaName: 'msdyn_TasksPercentCompleted',
            LogicalName: 'msdyn_taskspercentcompleted',
          },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
          msdyn_workorderincidentid: {
            SchemaName: 'msdyn_workorderincidentId',
            LogicalName: 'msdyn_workorderincidentid',
          },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_workorderincident = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_workordersubstatus'),
        (n.EntityLogicalName = 'msdyn_workordersubstatus'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_defaultsubstatus: { SchemaName: 'msdyn_DefaultSubStatus', LogicalName: 'msdyn_defaultsubstatus' },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_systemstatus: { SchemaName: 'msdyn_SystemStatus', LogicalName: 'msdyn_systemstatus' },
          msdyn_workordersubstatusid: {
            SchemaName: 'msdyn_workordersubstatusId',
            LogicalName: 'msdyn_workordersubstatusid',
          },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
        }),
        n
      );
    })();
    n.msdyn_workordersubstatus = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'Opportunity'),
        (n.EntityLogicalName = 'opportunity'),
        (n.attributes = {
          opportunityid: { SchemaName: 'OpportunityId', LogicalName: 'opportunityid' },
          msdyn_ordertype: { SchemaName: 'msdyn_OrderType', LogicalName: 'msdyn_ordertype' },
          msdyn_workordertype: { SchemaName: 'msdyn_WorkOrderType', LogicalName: 'msdyn_workordertype' },
          pricelevelid: { SchemaName: 'PriceLevelId', LogicalName: 'pricelevelid' },
          name: { SchemaName: 'Name', LogicalName: 'name' },
          parentaccountid: { SchemaName: 'ParentAccountId', LogicalName: 'parentaccountid' },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          opportunityidtype: { SchemaName: 'OpportunityIdType', LogicalName: 'opportunityidtype' },
          transactioncurrencyidname: {
            SchemaName: 'TransactionCurrencyIdName',
            LogicalName: 'transactioncurrencyidname',
          },
          transactioncurrencyidtype: {
            SchemaName: 'TransactionCurrencyIdType',
            LogicalName: 'transactioncurrencyidtype',
          },
          workorderid: { SchemaName: 'WorkOrderId', LogicalName: 'workorderid' },
          workorderidtype: { SchemaName: 'WorkOrderIdType', LogicalName: 'workorderidtype' },
          salesorderid: { SchemaName: 'SalesOrderId', LogicalName: 'salesorderid' },
        }),
        n
      );
    })();
    n.Opportunity = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (n.EntitySchemaName = 'UoMSchedule'), (n.EntityLogicalName = 'uomschedule'), (n.attributes = {}), n;
    })();
    n.UoMSchedule = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'UoM'),
        (n.EntityLogicalName = 'uom'),
        (n.attributes = {
          uomid: { LogicalName: 'uomid', SchemaName: 'UoMId' },
          name: { LogicalName: 'name', SchemaName: 'Name' },
          uomscheduleid: { LogicalName: 'uomscheduleid', SchemaName: 'UoMScheduleId' },
        }),
        n
      );
    })();
    n.UoM = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'Product'),
        (n.EntityLogicalName = 'product'),
        (n.attributes = {
          msdyn_converttocustomerasset: {
            SchemaName: 'msdyn_ConvertToCustomerAsset',
            LogicalName: 'msdyn_converttocustomerasset',
          },
          msdyn_defaultvendor: { SchemaName: 'msdyn_DefaultVendor', LogicalName: 'msdyn_defaultvendor' },
          msdyn_fieldserviceproducttype: {
            SchemaName: 'msdyn_FieldServiceProductType',
            LogicalName: 'msdyn_fieldserviceproducttype',
          },
          msdyn_purchasename: { SchemaName: 'msdyn_PurchaseName', LogicalName: 'msdyn_purchasename' },
          msdyn_taxable: { SchemaName: 'msdyn_Taxable', LogicalName: 'msdyn_taxable' },
          msdyn_upccode: { SchemaName: 'msdyn_UPCCode', LogicalName: 'msdyn_upccode' },
          msdyn_name: { SchemaName: 'Name', LogicalName: 'name' },
          defaultuomid: { SchemaName: 'DefaultUoMId', LogicalName: 'defaultuomid' },
          description: { SchemaName: 'Description', LogicalName: 'description' },
          price: { SchemaName: 'Price', LogicalName: 'price' },
          productid: { SchemaName: 'ProductId', LogicalName: 'productid' },
          currentcost: { SchemaName: 'CurrentCost', LogicalName: 'currentcost' },
          standardcost: { SchemaName: 'StandardCost', LogicalName: 'standardcost' },
          transactioncurrencyid: { SchemaName: 'TransactionCurrencyId', LogicalName: 'transactioncurrencyid' },
          exchangerate: { SchemaName: 'ExchangeRate', LogicalName: 'exchangerate' },
          statuscode: { SchemaName: 'StatusCode', LogicalName: 'statuscode' },
        }),
        n
      );
    })();
    n.Product = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    'use strict';
    var t = (function () {
      function n() {
        this.functionallocationAttr = EntityMetadata.msdyn_functionallocation.attributes;
      }
      return (
        (n.prototype.getFunctionalLocationAddress = function (n, t) {
          return (
            t === void 0 && (t = !0),
            __awaiter(this, void 0, void 0, function () {
              var i, r, u, f, e, o;
              return __generator(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (i = [
                        this.functionallocationAttr.msdyn_addressname.LogicalName,
                        this.functionallocationAttr.msdyn_address1.LogicalName,
                        this.functionallocationAttr.msdyn_address2.LogicalName,
                        this.functionallocationAttr.msdyn_address3.LogicalName,
                        this.functionallocationAttr.msdyn_city.LogicalName,
                        this.functionallocationAttr.msdyn_stateorprovince.LogicalName,
                        this.functionallocationAttr.msdyn_country.LogicalName,
                        this.functionallocationAttr.msdyn_postalcode.LogicalName,
                      ]),
                      (r = []),
                      i.forEach(function (n) {
                        return r.push(n + ' ne null');
                      }),
                      (u =
                        r.join(' or ') +
                        (' and ' + FieldService.WebApiSDK.getAboveOrEqualFilter('msdyn_functionallocationid', n))),
                      t &&
                        i.push(
                          this.functionallocationAttr.msdyn_latitude.LogicalName,
                          this.functionallocationAttr.msdyn_longitude.LogicalName
                        ),
                      (f = i.join(',')),
                      (e = FieldService.WebApiSDK.getRetrieveOptionsString(f, null, u, '1', null)),
                      [
                        4,
                        FieldService.WebApiSDK.retrieveMultipleRecords(
                          EntityMetadata.msdyn_functionallocation.EntityLogicalName,
                          e
                        ),
                      ]
                    );
                  case 1:
                    return (o = s.sent()), [2, o.entities[0]];
                }
              });
            })
          );
        }),
        n
      );
    })();
    n.FunctionalLocationUtils = t;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    'use strict';
    var t = (function () {
      function n() {}
      return (
        (n.prototype.getFunctionalLocation = function (n) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, r;
            return __generator(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (t = 'msdyn_FunctionalLocation'),
                    (i = 'msdyn_FunctionalLocation($select=msdyn_name,msdyn_functionallocationid)'),
                    [4, FieldService.WebApiSDK.retrieveRecord(n, EntityMetadata.CustomerAsset.EntityLogicalName, t, i)]
                  );
                case 1:
                  return (r = u.sent()), [2, r.msdyn_FunctionalLocation];
              }
            });
          });
        }),
        (n.prototype.getAssetFunctionalLocationUpTree = function (n) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, r, u, f;
            return __generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = 'msdyn_FunctionalLocation'),
                    (i = 'msdyn_FunctionalLocation($select=msdyn_name,msdyn_functionallocationid)'),
                    (r =
                      t + (' ne null and ' + FieldService.WebApiSDK.getAboveOrEqualFilter('msdyn_customerassetid', n))),
                    (u = FieldService.WebApiSDK.getRetrieveOptionsString(
                      t,
                      i,
                      r,
                      '1',
                      '_msdyn_parentasset_value desc'
                    )),
                    [
                      4,
                      FieldService.WebApiSDK.retrieveMultipleRecords(EntityMetadata.CustomerAsset.EntityLogicalName, u),
                    ]
                  );
                case 1:
                  return (f = e.sent()), [2, f.entities[0]];
              }
            });
          });
        }),
        n
      );
    })();
    n.AssetUtils = t;
  })(FieldOneSkyUtils || (FieldOneSkyUtils = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_resourcerequirement'),
        (n.EntityLogicalName = 'msdyn_resourcerequirement'),
        (n.attributes = {
          msdyn_isprimary: { SchemaName: 'msdyn_IsPrimary', LogicalName: 'msdyn_isprimary' },
          msdyn_latitude: { SchemaName: 'msdyn_Latitude', LogicalName: 'msdyn_latitude' },
          msdyn_longitude: { SchemaName: 'msdyn_Longitude', LogicalName: 'msdyn_longitude' },
          msdyn_priority: { SchemaName: 'msdyn_Priority', LogicalName: 'msdyn_priority' },
          msdyn_territory: { SchemaName: 'msdyn_Territory', LogicalName: 'msdyn_territory' },
          msdyn_timefrompromised: { SchemaName: 'msdyn_TimeFromPromised', LogicalName: 'msdyn_timefrompromised' },
          msdyn_timegroup: { SchemaName: 'msdyn_TimeGroup', LogicalName: 'msdyn_timegroup' },
          msdyn_timetopromised: { SchemaName: 'msdyn_TimeToPromised', LogicalName: 'msdyn_timetopromised' },
          msdyn_timewindowend: { SchemaName: 'msdyn_TimeWindowEnd', LogicalName: 'msdyn_timewindowend' },
          msdyn_timewindowstart: { SchemaName: 'msdyn_TimeWindowStart', LogicalName: 'msdyn_timewindowstart' },
          msdyn_worklocation: { SchemaName: 'msdyn_WorkLocation', LogicalName: 'msdyn_worklocation' },
          msdyn_workorder: { SchemaName: 'msdyn_WorkOrder', LogicalName: 'msdyn_workorder' },
        }),
        n
      );
    })();
    n.msdyn_resourcerequirement = t;
  })(EntityMetadata || (EntityMetadata = {})),
  (function (n) {
    var t = (function () {
      function n() {}
      return (
        (n.EntitySchemaName = 'msdyn_fieldservicesetting'),
        (n.EntityLogicalName = 'msdyn_fieldservicesetting'),
        (n.attributes = {
          createdby: { SchemaName: 'CreatedBy', LogicalName: 'createdby' },
          createdon: { SchemaName: 'CreatedOn', LogicalName: 'createdon' },
          createdonbehalfby: { SchemaName: 'CreatedOnBehalfBy', LogicalName: 'createdonbehalfby' },
          importsequencenumber: { SchemaName: 'ImportSequenceNumber', LogicalName: 'importsequencenumber' },
          modifiedby: { SchemaName: 'ModifiedBy', LogicalName: 'modifiedby' },
          modifiedon: { SchemaName: 'ModifiedOn', LogicalName: 'modifiedon' },
          modifiedonbehalfby: { SchemaName: 'ModifiedOnBehalfBy', LogicalName: 'modifiedonbehalfby' },
          msdyn_advancedsettings: { SchemaName: 'msdyn_AdvancedSettings', LogicalName: 'msdyn_advancedsettings' },
          msdyn_agreementprefix: { SchemaName: 'msdyn_AgreementPrefix', LogicalName: 'msdyn_agreementprefix' },
          msdyn_agreementstartingnumber: {
            SchemaName: 'msdyn_AgreementStartingNumber',
            LogicalName: 'msdyn_agreementstartingnumber',
          },
          msdyn_autoallocateestimatedproducts: {
            SchemaName: 'msdyn_AutoAllocateEstimatedProducts',
            LogicalName: 'msdyn_autoallocateestimatedproducts',
          },
          msdyn_autogeneratewoforagreementbooking: {
            SchemaName: 'msdyn_AutoGenerateWOforAgreementBookings',
            LogicalName: 'msdyn_autogeneratewoforagreementbooking',
          },
          msdyn_autogeocodeaddresses: {
            SchemaName: 'msdyn_AutoGeoCodeAddresses',
            LogicalName: 'msdyn_autogeocodeaddresses',
          },
          msdyn_autonumberingoptin: { SchemaName: 'msdyn_AutoNumberingOptIn', LogicalName: 'msdyn_autonumberingoptin' },
          msdyn_bookingalerttemplate: {
            SchemaName: 'msdyn_BookingAlertTemplate',
            LogicalName: 'msdyn_bookingalerttemplate',
          },
          msdyn_breakpaytype: { SchemaName: 'msdyn_BreakPayType', LogicalName: 'msdyn_breakpaytype' },
          msdyn_businessclosurepaytype: {
            SchemaName: 'msdyn_BusinessClosurePayType',
            LogicalName: 'msdyn_businessclosurepaytype',
          },
          msdyn_cancelcurrentslotswhenmoving: {
            SchemaName: 'msdyn_CancelCurrentSlotsWhenMoving',
            LogicalName: 'msdyn_cancelcurrentslotswhenmoving',
          },
          msdyn_customgpsdata: { SchemaName: 'msdyn_CustomGPSData', LogicalName: 'msdyn_customgpsdata' },
          msdyn_customgpslatitudefield: {
            SchemaName: 'msdyn_CustomGPSLatitudefield',
            LogicalName: 'msdyn_customgpslatitudefield',
          },
          msdyn_customgpslocationentity: {
            SchemaName: 'msdyn_CustomGPSLocationentity',
            LogicalName: 'msdyn_customgpslocationentity',
          },
          msdyn_customgpslongitudefield: {
            SchemaName: 'msdyn_CustomGPSLongitudefield',
            LogicalName: 'msdyn_customgpslongitudefield',
          },
          msdyn_customgpsresourcefield: {
            SchemaName: 'msdyn_CustomGPSResourcefield',
            LogicalName: 'msdyn_customgpsresourcefield',
          },
          msdyn_customgpstimestampfield: {
            SchemaName: 'msdyn_CustomGPSTimestampfield',
            LogicalName: 'msdyn_customgpstimestampfield',
          },
          msdyn_databaseversion: { SchemaName: 'msdyn_DatabaseVersion', LogicalName: 'msdyn_databaseversion' },
          msdyn_deactivatebookingwhencanceled: {
            SchemaName: 'msdyn_DeactivateBookingWhenCanceled',
            LogicalName: 'msdyn_deactivatebookingwhencanceled',
          },
          msdyn_deactivatebookingwhencompleted: {
            SchemaName: 'msdyn_DeactivateBookingWhenCompleted',
            LogicalName: 'msdyn_deactivatebookingwhencompleted',
          },
          msdyn_deactivateworkorderwhencanceled: {
            SchemaName: 'msdyn_DeactivateWorkOrderWhenCanceled',
            LogicalName: 'msdyn_deactivateworkorderwhencanceled',
          },
          msdyn_deactivateworkorderwhenposted: {
            SchemaName: 'msdyn_DeactivateWorkOrderWhenPosted',
            LogicalName: 'msdyn_deactivateworkorderwhenposted',
          },
          msdyn_defaultbookingduration: {
            SchemaName: 'msdyn_DefaultBookingDuration',
            LogicalName: 'msdyn_defaultbookingduration',
          },
          msdyn_defaultcanceledbookingstatus: {
            SchemaName: 'msdyn_DefaultCanceledBookingStatus',
            LogicalName: 'msdyn_defaultcanceledbookingstatus',
          },
          msdyn_defaultradiusunit: { SchemaName: 'msdyn_DefaultRadiusUnit', LogicalName: 'msdyn_defaultradiusunit' },
          msdyn_defaultradiusvalue: { SchemaName: 'msdyn_DefaultRadiusValue', LogicalName: 'msdyn_defaultradiusvalue' },
          msdyn_defaultscheduledbookingstatus: {
            SchemaName: 'msdyn_DefaultScheduledBookingStatus',
            LogicalName: 'msdyn_defaultscheduledbookingstatus',
          },
          msdyn_defaultwarehouse: { SchemaName: 'msdyn_DefaultWarehouse', LogicalName: 'msdyn_defaultwarehouse' },
          msdyn_defaultworkordercompletedstatus: {
            SchemaName: 'msdyn_DefaultWorkOrderCompletedStatus',
            LogicalName: 'msdyn_defaultworkordercompletedstatus',
          },
          msdyn_enableaddresssuggestions: {
            SchemaName: 'msdyn_EnableAddressSuggestions',
            LogicalName: 'msdyn_enableaddresssuggestions',
          },
          msdyn_disablecustomerassetvalidation: {
            SchemaName: 'msdyn_DisableCustomerAssetValidation',
            LogicalName: 'msdyn_disablecustomerassetvalidation',
          },
          msdyn_suggestreparentingcustomerassets: {
            SchemaName: 'msdyn_SuggestReparentingCustomerAssets',
            LogicalName: 'msdyn_suggestreparentingcustomerassets',
          },
          msdyn_enablelegacyscheduleassistant: {
            SchemaName: 'msdyn_EnableLegacyScheduleAssistant',
            LogicalName: 'msdyn_enablelegacyscheduleassistant',
          },
          msdyn_enablemainformdialogforsubgrids: {
            SchemaName: 'msdyn_EnableMainFormDialogForSubgrids',
            LogicalName: 'msdyn_enablemainformdialogforsubgrids',
          },
          msdyn_entitynumberlength: { SchemaName: 'msdyn_EntityNumberLength', LogicalName: 'msdyn_entitynumberlength' },
          msdyn_fieldservicesettingid: {
            SchemaName: 'msdyn_fieldservicesettingId',
            LogicalName: 'msdyn_fieldservicesettingid',
          },
          msdyn_generateagreementinvoicesxdaysinadvance: {
            SchemaName: 'msdyn_GenerateAgreementInvoicesXDaysInAdvance',
            LogicalName: 'msdyn_generateagreementinvoicesxdaysinadvance',
          },
          msdyn_generateagreementwoxdaysinadvance: {
            SchemaName: 'msdyn_GenerateAgreementWOXDaysInAdvance',
            LogicalName: 'msdyn_generateagreementwoxdaysinadvance',
          },
          msdyn_generatebookingdatesxmonthsinadvance: {
            SchemaName: 'msdyn_GenerateBookingDatesXMonthsInAdvance',
            LogicalName: 'msdyn_generatebookingdatesxmonthsinadvance',
          },
          msdyn_generateinvoicedatesxmonthsinadvance: {
            SchemaName: 'msdyn_GenerateInvoiceDatesXMonthsInAdvance',
            LogicalName: 'msdyn_generateinvoicedatesxmonthsinadvance',
          },
          msdyn_timeentrygenerationstrategy: {
            SchemaName: 'msdyn_TimeEntryGenerationStrategy',
            LogicalName: 'msdyn_timeentrygenerationstrategy',
          },
          msdyn_gpslocationexpiresafterxminutes: {
            SchemaName: 'msdyn_GPSLocationExpiresAfterXMinutes',
            LogicalName: 'msdyn_gpslocationexpiresafterxminutes',
          },
          msdyn_inventoryadjustmentprefix: {
            SchemaName: 'msdyn_InventoryAdjustmentPrefix',
            LogicalName: 'msdyn_inventoryadjustmentprefix',
          },
          msdyn_inventoryadjustmentstartingnumber: {
            SchemaName: 'msdyn_InventoryAdjustmentStartingNumber',
            LogicalName: 'msdyn_inventoryadjustmentstartingnumber',
          },
          msdyn_inventorytransferprefix: {
            SchemaName: 'msdyn_InventoryTransferPrefix',
            LogicalName: 'msdyn_inventorytransferprefix',
          },
          msdyn_inventorytransferstartingnumber: {
            SchemaName: 'msdyn_InventoryTransferStartingNumber',
            LogicalName: 'msdyn_inventorytransferstartingnumber',
          },
          msdyn_name: { SchemaName: 'msdyn_name', LogicalName: 'msdyn_name' },
          msdyn_notificationtimeout: {
            SchemaName: 'msdyn_NotificationTimeout',
            LogicalName: 'msdyn_notificationtimeout',
          },
          msdyn_overtimepaytype: { SchemaName: 'msdyn_OvertimePayType', LogicalName: 'msdyn_overtimepaytype' },
          msdyn_postponenumbercleanupuntil: {
            SchemaName: 'msdyn_PostponeNumberCleanupUntil',
            LogicalName: 'msdyn_postponenumbercleanupuntil',
          },
          msdyn_productcostorder: { SchemaName: 'msdyn_ProductCostOrder', LogicalName: 'msdyn_productcostorder' },
          msdyn_purchaseorderapprovalrequired: {
            SchemaName: 'msdyn_PurchaseOrderApprovalRequired',
            LogicalName: 'msdyn_purchaseorderapprovalrequired',
          },
          msdyn_purchaseorderprefix: {
            SchemaName: 'msdyn_PurchaseOrderPrefix',
            LogicalName: 'msdyn_purchaseorderprefix',
          },
          msdyn_purchaseorderstartingnumber: {
            SchemaName: 'msdyn_PurchaseOrderStartingNumber',
            LogicalName: 'msdyn_purchaseorderstartingnumber',
          },
          msdyn_resourcessynchronizationtimeout: {
            SchemaName: 'msdyn_ResourcesSynchronizationTimeout',
            LogicalName: 'msdyn_resourcessynchronizationtimeout',
          },
          msdyn_rmaprefix: { SchemaName: 'msdyn_RMAPrefix', LogicalName: 'msdyn_rmaprefix' },
          msdyn_rmastartingnumber: { SchemaName: 'msdyn_RMAStartingNumber', LogicalName: 'msdyn_rmastartingnumber' },
          msdyn_rtvprefix: { SchemaName: 'msdyn_RTVPrefix', LogicalName: 'msdyn_rtvprefix' },
          msdyn_rtvstartingnumber: { SchemaName: 'msdyn_RTVStartingNumber', LogicalName: 'msdyn_rtvstartingnumber' },
          msdyn_saautofilterserviceterritory: {
            SchemaName: 'msdyn_SAAutoFilterServiceTerritory',
            LogicalName: 'msdyn_saautofilterserviceterritory',
          },
          msdyn_schedulerbusinessunitdetailsview: {
            SchemaName: 'msdyn_SchedulerBusinessUnitDetailsView',
            LogicalName: 'msdyn_schedulerbusinessunitdetailsview',
          },
          msdyn_schedulerbusinessunittooltipview: {
            SchemaName: 'msdyn_SchedulerBusinessUnitTooltipView',
            LogicalName: 'msdyn_schedulerbusinessunittooltipview',
          },
          msdyn_schedulercoredetailsview: {
            SchemaName: 'msdyn_SchedulerCoreDetailsView',
            LogicalName: 'msdyn_schedulercoredetailsview',
          },
          msdyn_schedulercoreslottexttemplate: {
            SchemaName: 'msdyn_SchedulerCoreSlotTextTemplate',
            LogicalName: 'msdyn_schedulercoreslottexttemplate',
          },
          msdyn_schedulercoretooltipview: {
            SchemaName: 'msdyn_SchedulerCoreTooltipView',
            LogicalName: 'msdyn_schedulercoretooltipview',
          },
          msdyn_schedulerfieldservicedetailsview: {
            SchemaName: 'msdyn_SchedulerFieldServiceDetailsView',
            LogicalName: 'msdyn_schedulerfieldservicedetailsview',
          },
          msdyn_schedulerfieldserviceslottexttemplate: {
            SchemaName: 'msdyn_SchedulerFieldServiceSlotTextTemplate',
            LogicalName: 'msdyn_schedulerfieldserviceslottexttemplate',
          },
          msdyn_schedulerfieldservicetooltipview: {
            SchemaName: 'msdyn_SchedulerFieldServiceTooltipView',
            LogicalName: 'msdyn_schedulerfieldservicetooltipview',
          },
          msdyn_schedulerresourcedetailsview: {
            SchemaName: 'msdyn_SchedulerResourceDetailsView',
            LogicalName: 'msdyn_schedulerresourcedetailsview',
          },
          msdyn_schedulerresourcetooltipview: {
            SchemaName: 'msdyn_SchedulerResourceTooltipView',
            LogicalName: 'msdyn_schedulerresourcetooltipview',
          },
          msdyn_schedulerunscheduledview: {
            SchemaName: 'msdyn_SchedulerUnscheduledView',
            LogicalName: 'msdyn_schedulerunscheduledview',
          },
          msdyn_sdkapimapkey: { SchemaName: 'msdyn_sdkapimapkey', LogicalName: 'msdyn_sdkapimapkey' },
          msdyn_travelchargeitemid: { SchemaName: 'msdyn_TravelChargeItemId', LogicalName: 'msdyn_travelchargeitemid' },
          msdyn_travelpaytype: { SchemaName: 'msdyn_TravelPayType', LogicalName: 'msdyn_travelpaytype' },
          msdyn_traveltimerescheduling: {
            SchemaName: 'msdyn_TravelTimeRescheduling',
            LogicalName: 'msdyn_traveltimerescheduling',
          },
          msdyn_undefinedbookinglocation: {
            SchemaName: 'msdyn_UndefinedBookingLocation',
            LogicalName: 'msdyn_undefinedbookinglocation',
          },
          msdyn_unscheduledwotooltipsviewid: {
            SchemaName: 'msdyn_UnscheduledWOTooltipsViewId',
            LogicalName: 'msdyn_unscheduledwotooltipsviewid',
          },
          msdyn_useofproductsoutofstock: {
            SchemaName: 'msdyn_UseofProductsOutofStock',
            LogicalName: 'msdyn_useofproductsoutofstock',
          },
          msdyn_workorderinvoicecreation: {
            SchemaName: 'msdyn_WorkOrderInvoiceCreation',
            LogicalName: 'msdyn_workorderinvoicecreation',
          },
          msdyn_workorderprefix: { SchemaName: 'msdyn_WorkOrderPrefix', LogicalName: 'msdyn_workorderprefix' },
          msdyn_workorderstartingnumber: {
            SchemaName: 'msdyn_WorkOrderStartingNumber',
            LogicalName: 'msdyn_workorderstartingnumber',
          },
          msdyn_workpaytype: { SchemaName: 'msdyn_WorkPayType', LogicalName: 'msdyn_workpaytype' },
          overriddencreatedon: { SchemaName: 'OverriddenCreatedOn', LogicalName: 'overriddencreatedon' },
          ownerid: { SchemaName: 'OwnerId', LogicalName: 'ownerid' },
          owningbusinessunit: { SchemaName: 'OwningBusinessUnit', LogicalName: 'owningbusinessunit' },
          owningteam: { SchemaName: 'OwningTeam', LogicalName: 'owningteam' },
          owninguser: { SchemaName: 'OwningUser', LogicalName: 'owninguser' },
          statecode: { SchemaName: 'statecode', LogicalName: 'statecode' },
          statuscode: { SchemaName: 'statuscode', LogicalName: 'statuscode' },
          timezoneruleversionnumber: {
            SchemaName: 'TimeZoneRuleVersionNumber',
            LogicalName: 'timezoneruleversionnumber',
          },
          utcconversiontimezonecode: {
            SchemaName: 'UTCConversionTimeZoneCode',
            LogicalName: 'utcconversiontimezonecode',
          },
          msdyn_EnableSuggestedDuration: {
            SchemaName: 'msdyn_EnableSuggestedDuration',
            LogicalName: 'msdyn_enablesuggestedduration',
          },
          msdyn_EnableIncidentTypeRecommendation: {
            SchemaName: 'msdyn_EnableIncidentTypeRecommendation',
            LogicalName: 'msdyn_enableincidenttyperecommendation',
          },
          msdyn_RunFrequencyOfIncidentTypeRecommendation: {
            SchemaName: 'msdyn_RunFrequencyOfIncidentTypeRecommendation',
            LogicalName: 'msdyn_runfrequencyofincidenttyperecommendation',
          },
          msdyn_LastRunOfIncidentTypeRecommendation: {
            SchemaName: 'msdyn_LastRunOfIncidentTypeRecommendation',
            LogicalName: 'msdyn_lastrunofincidenttyperecommendation',
          },
          msdyn_InspectionAnalyticsEnabled: {
            SchemaName: 'msdyn_InspectionAnalyticsEnabled',
            LogicalName: 'msdyn_inspectionanalyticsenabled',
          },
          msdyn_InspectionAnalyticsFrequency: {
            SchemaName: 'msdyn_InspectionAnalyticsFrequency',
            LogicalName: 'msdyn_inspectionanalyticsfrequency',
          },
          msdyn_InspectionAnalyticsRecommendedTime: {
            SchemaName: 'msdyn_InspectionAnalyticsRecommendedTime',
            LogicalName: 'msdyn_inspectionanalyticsrecommendedtime',
          },
          msdyn_AnalyticsIngestDataInXDays: {
            SchemaName: 'msdyn_AnalyticsIngestDataInXDays',
            LogicalName: 'msdyn_analyticsingestdatainxdays',
          },
        }),
        n
      );
    })();
    n.msdyn_fieldservicesetting = t;
  })(EntityMetadata || (EntityMetadata = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  'use strict';
  var t = (function () {
    function t(n) {
      this.workOrderAttributes = EntityMetadata.msdyn_workorder.attributes;
      this.bookableResourceBookingAttributes = EntityMetadata.BookableResourceBooking.attributes;
      this.workOrderMetaData = new EntityMetadata.msdyn_workorder();
      this.workorderFieldName = n;
      t.isCustomerAssetServiceAccountValidationDisabled();
    }
    return (
      (t.OnChangeCustomerAssetorServiceAccount = function (t) {
        n.WorkOrderUtils.isSuggestReparentingEnabled().then(function (i) {
          var r, u;
          i &&
            ((r = null),
            t.data.entity.getEntityName() === EntityMetadata.msdyn_workorder.EntityLogicalName
              ? (r = n.CurrentEntity.GetIdWithoutBracketsOrDefault(t))
              : ((u = n.Fields.GetValue(t, EntityMetadata.msdyn_workorder.EntityLogicalName)),
                (r = u && u.length > 0 && u[0].id)),
            r &&
              n.WorkOrderUtils.validateServiceAccountCustomerAssetFromAccountId(r, t, [t.data.entity.getEntityName()]));
        });
      }),
      (t.validateServiceAccountWithAssetAccount = function (t, i, r, u, f, e, o) {
        var s = '$select=msdyn_customerassetid,msdyn_name, _msdyn_account_value&$filter=msdyn_customerassetid eq ' + t;
        FieldService.CrudApiSDK.retrieveMultipleRecords(
          EntityMetadata.CustomerAsset.EntityLogicalName,
          s,
          function (t) {
            var f = t && t.entities,
              r = [];
            f.forEach(function (t) {
              (n.IsNullOrUndefined(t._msdyn_account_value) ||
                t._msdyn_account_value.toUpperCase() != u.toUpperCase()) &&
                r.push(t);
            });
            r.length > 0
              ? Promise.all([
                  Localization.getLocalizationStringAsync('SuggestReparentingCustomerAsset_confirmMessage'),
                  Localization.getLocalizationStringAsync('AgreementCopy_No'),
                  Localization.getLocalizationStringAsync('AgreementCopy_Yes'),
                ])
                  .then(function (t) {
                    var f = t[0],
                      s = t[1],
                      h = t[2];
                    f = n.StringUtils.format(f, i);
                    Xrm.Navigation.openConfirmDialog({ text: f, confirmButtonLabel: s, cancelButtonLabel: h })
                      .then(function (n) {
                        if (n.confirmed === !1) {
                          var t = r.map(function (n) {
                            return new Promise(function (t, i) {
                              var r = null;
                              r = FieldService.CrudApiSDK.isOffline(EntityMetadata.CustomerAsset.EntityLogicalName)
                                ? { msdyn_account: { logicalname: 'account', id: u } }
                                : { 'msdyn_account@odata.bind': '/accounts(' + u + ')' };
                              Xrm.WebApi.updateRecord(
                                EntityMetadata.CustomerAsset.EntityLogicalName,
                                n.msdyn_customerassetid,
                                r
                              ).then(
                                function () {
                                  t();
                                },
                                function (n) {
                                  Xrm.Navigation.openAlertDialog({ text: n.message });
                                  i();
                                }
                              );
                            });
                          });
                          Localization.getLocalizationStringAsync(
                            'SuggestReparentingCustomerAsset_SuccessfulupdateCustomerAssetAcount'
                          )
                            .then(function (n) {
                              Promise.all(t)
                                .then(function () {
                                  Xrm.UI.addGlobalNotification(1, 1, n, null, null);
                                  o();
                                })
                                .catch(function () {
                                  e();
                                });
                            })
                            .catch(function () {
                              e();
                            });
                        } else o();
                      })
                      .catch(function () {
                        e();
                      });
                  })
                  .catch(function () {
                    e();
                  })
              : o();
          },
          function (n) {
            Xrm.Navigation.openAlertDialog({ text: n.message });
            e();
          },
          f
        );
      }),
      (t.getCustomerAssetId = function (t) {
        var i = null,
          r = n.Fields.GetValue(t, EntityMetadata.msdyn_workorder.attributes.msdyn_customerasset.LogicalName);
        return r && r.length > 0 && ((i = r[0].id), (i = i.substr(1, i.length - 2))), i;
      }),
      (t.validateServiceAccountCustomerAssetFromAccountId = function (t, i, r) {
        var u = this;
        return new Promise(function (f, e) {
          var h, o, s;
          if (i.data.entity.getEntityName() === EntityMetadata.msdyn_workorder.EntityLogicalName) {
            if (((h = u.getCustomerAssetId(i)), !h)) return f();
            if (
              ((o = n.Fields.GetValue(i, EntityMetadata.msdyn_workorder.attributes.msdyn_serviceaccount.LogicalName)),
              o && o.length > 0)
            )
              if (o[0].name)
                (s = o[0].id),
                  (s = s.substr(1, s.length - 2)),
                  u.validateServiceAccountWithAssetAccount(h, o[0].name, r, s, i, e, f);
              else return f();
            else return f();
          } else
            u.getServiceAccountForWorkOrder(
              t,
              function (n, t) {
                var o = u.getCustomerAssetId(i);
                if (!o) return f();
                u.validateServiceAccountWithAssetAccount(o, t, r, n, i, e, f);
              },
              function (n) {
                Xrm.Navigation.openAlertDialog({ text: n.message });
                e();
              }
            );
        });
      }),
      (t.isCustomerAssetServiceAccountValidationDisabled = function () {
        return new Promise(function (i, r) {
          if (!n.IsNullOrUndefined(t.DisableCustomerAssetValidation)) return i(t.DisableCustomerAssetValidation);
          n.GetFieldOneSettingsAsyncWithoutCaching(
            [EntityMetadata.msdyn_fieldservicesetting.attributes.msdyn_disablecustomerassetvalidation.LogicalName],
            function (r) {
              if (r) {
                var u =
                  r[
                    EntityMetadata.msdyn_fieldservicesetting.attributes.msdyn_disablecustomerassetvalidation.LogicalName
                  ];
                t.DisableCustomerAssetValidation = n.IsNullOrUndefined(u) ? !1 : u;
              }
              return i(t.DisableCustomerAssetValidation);
            },
            function (t) {
              return n.ShowErrorMessage(t), r(t);
            }
          );
        });
      }),
      (t.isSuggestReparentingEnabled = function () {
        return new Promise(function (i, r) {
          if (!n.IsNullOrUndefined(t.suggestReparentingCustomerAsset)) return i(t.suggestReparentingCustomerAsset);
          n.GetFieldOneSettingsAsyncWithoutCaching(
            [EntityMetadata.msdyn_fieldservicesetting.attributes.msdyn_suggestreparentingcustomerassets.LogicalName],
            function (r) {
              if (r) {
                var u =
                  r[
                    EntityMetadata.msdyn_fieldservicesetting.attributes.msdyn_suggestreparentingcustomerassets
                      .LogicalName
                  ];
                t.suggestReparentingCustomerAsset = n.IsNullOrUndefined(u) ? !1 : u;
              }
              return i(t.suggestReparentingCustomerAsset);
            },
            function (t) {
              return n.ShowErrorMessage(t), r(t);
            }
          );
        });
      }),
      (t.prototype.hasAttribute = function (n, t) {
        return n && n[t];
      }),
      (t.prototype.getId = function (n, t, i) {
        return this.hasAttribute(n, t) ? n[t][i] : null;
      }),
      (t.prototype.doesWorkOrderAccountMatchCustomerAssetAccount = function (t, i) {
        if (n.WorkOrderUtils.DisableCustomerAssetValidation) return !0;
        var r = this.getId(
            t,
            this.workOrderAttributes.msdyn_serviceaccount.LogicalName,
            EntityMetadata.Account.attributes.accountid.LogicalName
          ),
          u = this.getId(
            i,
            EntityMetadata.CustomerAsset.attributes.msdyn_account.LogicalName,
            EntityMetadata.Account.attributes.accountid.LogicalName
          );
        return r && u && r == u;
      }),
      (t.prototype.doesBookingMatchWorkOrder = function (n, t) {
        var i = this.getId(
          t,
          EntityMetadata.BookableResourceBooking.attributes.msdyn_workorder.LogicalName,
          this.workOrderAttributes.msdyn_workorderid.LogicalName
        );
        return (
          n &&
          n[this.workOrderAttributes.msdyn_workorderid.LogicalName] &&
          i &&
          i == n[this.workOrderAttributes.msdyn_workorderid.LogicalName]
        );
      }),
      (t.prototype.doesRequirementWorkOrderMatchIncidentWorkOrder = function (n, t) {
        var i = this.getId(
            n,
            EntityMetadata.msdyn_resourcerequirement.attributes.msdyn_workorder.LogicalName,
            this.workOrderAttributes.msdyn_workorderid.LogicalName
          ),
          r = t[this.workOrderAttributes.msdyn_workorderid.LogicalName];
        return i && r && i == r;
      }),
      (t.prototype.getDefaultBookingFromWorkOrder = function (t, i) {
        var r = this;
        return new Promise(function (u, f) {
          var e = [n.BookingStatusFieldServiceStatus.Completed, n.BookingStatusFieldServiceStatus.Cancelled];
          r.getBookingStatusOptionSetToGUIDMap(e, i).then(
            function (e) {
              var o = n.GetODataAttribute(
                  EntityMetadata.BookableResourceBooking.EntityLogicalName,
                  EntityMetadata.msdyn_workorder.EntityLogicalName
                ),
                s = n.GetODataAttribute(
                  EntityMetadata.BookableResourceBooking.EntityLogicalName,
                  r.bookableResourceBookingAttributes.bookingstatus.LogicalName
                ),
                h = e[n.BookingStatusFieldServiceStatus.Completed].concat(
                  e[n.BookingStatusFieldServiceStatus.Cancelled]
                ),
                c = h
                  .map(function (n) {
                    return s + ' ne ' + n;
                  })
                  .join(' and '),
                l = o + ' eq ' + n.getGuidWithoutBrackets(t) + ' and statecode eq 0 and ' + c,
                a = FieldService.WebApiSDK.getRetrieveOptionsString('bookableresourcebookingid,name', null, l, '2');
              FieldService.CrudApiSDK.retrieveMultipleRecords(
                EntityMetadata.BookableResourceBooking.EntityLogicalName,
                a,
                function (n) {
                  u(n.entities);
                },
                function (n) {
                  f(n.message);
                },
                i
              );
            },
            function (n) {
              var t = n.message ? n.message : n;
              f(t);
            }
          );
        });
      }),
      (t.prototype.getBookingStatusOptionSetToGUIDMap = function (n, t) {
        var i = this;
        return new Promise(function (r, u) {
          var f = '',
            e;
          n &&
            (f = n
              .map(function (n) {
                return 'msdyn_fieldservicestatus eq ' + n;
              })
              .join(' or '));
          e = FieldService.WebApiSDK.getRetrieveOptionsString('bookingstatusid,msdyn_fieldservicestatus', null, f);
          FieldService.CrudApiSDK.retrieveMultipleRecords(
            i.bookableResourceBookingAttributes.bookingstatus.LogicalName,
            e,
            function (n) {
              for (var t, i = {}, u = 0, f = n.entities; u < f.length; u++)
                (t = f[u]),
                  i[t.msdyn_fieldservicestatus]
                    ? i[t.msdyn_fieldservicestatus].push(t.bookingstatusid)
                    : (i[t.msdyn_fieldservicestatus] = [t.bookingstatusid]);
              r(i);
            },
            function (n) {
              u(n.message);
            },
            t
          );
        });
      }),
      (t.prototype.getPrimaryIncidentForWorkOrder = function (t, i, r) {
        return new Promise(function (u, f) {
          var h = n,
            o = FieldService.CrudApiSDK,
            e = EntityMetadata.msdyn_workorderincident.attributes,
            s = h.GetODataAttribute,
            c = [
              s(EntityMetadata.msdyn_workorderincident.EntityLogicalName, e.msdyn_customerasset.LogicalName),
              s(EntityMetadata.msdyn_workorderincident.EntityLogicalName, e.msdyn_incidenttype.LogicalName),
              e.msdyn_name.LogicalName,
              e.msdyn_description.LogicalName,
              e.msdyn_workorderincidentid.LogicalName,
              e.msdyn_estimatedduration.LogicalName,
            ];
          if (((r = r || c), i && r && r.length > 0)) {
            var l = r.join(','),
              a = s(EntityMetadata.msdyn_workorderincident.EntityLogicalName, e.msdyn_workorder.LogicalName),
              v = o.isOffline(EntityMetadata.msdyn_workorderincident.EntityLogicalName) ? '1' : 'true',
              y = [a + ' eq ' + i, e.msdyn_isprimary.LogicalName + ' eq ' + v],
              p = y.join(' and '),
              w = FieldService.WebApiSDK.getRetrieveOptionsString(l, null, p, '1');
            o.retrieveMultipleRecords(
              EntityMetadata.msdyn_workorderincident.EntityLogicalName,
              w,
              function (n) {
                var t = null,
                  i,
                  f,
                  e;
                if (n && n.entities.length)
                  for (t = n.entities[0], i = 0, f = r; i < f.length; i++)
                    (e = f[i]), (t[o.getFieldNameWithoutValueSuffix(e)] = t[e]);
                u(t);
              },
              function (n) {
                f(n);
              },
              t
            );
          } else f();
        });
      }),
      (t.getServiceAccountForWorkOrder = function (n, t) {
        t &&
          FieldService.CrudApiSDK.retrieveRecord(
            n,
            EntityMetadata.msdyn_workorder.EntityLogicalName,
            EntityMetadata.msdyn_workorder.attributes.msdyn_serviceaccount.LogicalName,
            EntityMetadata.msdyn_workorder.attributes.msdyn_serviceaccount.LogicalName +
              '($select=' +
              EntityMetadata.msdyn_workorder.attributes.accountid.LogicalName +
              ',' +
              EntityMetadata.msdyn_workorder.attributes.name.LogicalName +
              ')',
            function (n) {
              t(n.msdyn_serviceaccount.accountid, n.msdyn_serviceaccount.name);
            },
            function () {}
          );
      }),
      (t.SetFilterToCustomerAssetLookup = function (t) {
        var i = n.Fields.GetValue(t, EntityMetadata.msdyn_workorder.EntityLogicalName),
          r = EntityMetadata.msdyn_workorder.attributes.msdyn_workorderid.LogicalName,
          u =
            EntityMetadata.msdyn_workorder.attributes.msdyn_serviceaccount.LogicalName +
            '($select=' +
            EntityMetadata.Account.attributes.accountid.LogicalName +
            ')';
        if (i != null)
          return FieldService.CrudApiSDK.retrieveRecord(
            i[0].id,
            EntityMetadata.msdyn_workorder.EntityLogicalName,
            r,
            u,
            function (i) {
              return n.WorkOrderUtils.SetFilterToCustomerAssetLookupFromWOData(t, i);
            },
            n.ShowErrorMessage
          );
      }),
      (t.SetFilterToCustomerAssetLookupFromWOData = function (t, i) {
        i != null &&
          (FieldService.CrudApiSDK.adjustLookupAttributeValue(
            i,
            EntityMetadata.msdyn_workorder.attributes.msdyn_serviceaccount.LogicalName
          ),
          n.WorkOrderUtils.SetFilterToCustomerAssetLookupByAccountId(t, i.msdyn_serviceaccount.accountid));
      }),
      (t.SetFilterToCustomerAssetLookupByAccountId = function (t, i) {
        var r = n.Fields.GetField(t, EntityMetadata.CustomerAsset.EntityLogicalName);
        if (r && r.controls) {
          var u = '{418817D4-D3B7-414B-9CB2-4DD3444BC2AC}',
            f = EntityMetadata.CustomerAsset.EntityLogicalName,
            e = !0,
            o =
              '<fetch version="1.0" mapping="logical"><entity name="msdyn_customerasset"><attribute name="msdyn_customerassetid" /><attribute name="msdyn_name" /><attribute name="createdon" /><order attribute="msdyn_name" descending="false" /><attribute name="msdyn_account" /><filter type="and"><condition attribute="statecode" operator="eq" value="0" /><condition attribute="msdyn_account" operator="eq" value="' +
              i +
              '" /></filter></entity></fetch>',
            s =
              '<grid name="" jump="msdyn_name" select="0" icon="1" preview="0"><row name="msdyn_customerasset" id="msdyn_customerassetid"><cell name="msdyn_name" width="200" /><cell name="msdyn_account" width="150" /><cell name="createdon" width="125" /></row></grid>';
          Localization.getLocalizationStringAsync('LookupViewName_CustomerAssetRelatedToAccount').then(function (n) {
            r.controls.forEach(function (t) {
              t && t.addCustomView(u, f, n, o, s, e);
            });
          });
        }
      }),
      (t.DisableCustomerAssetValidation = null),
      (t.suggestReparentingCustomerAsset = null),
      t
    );
  })();
  n.WorkOrderUtils = t;
})(FieldOneSkyUtils || (FieldOneSkyUtils = {}));
/*! WARNING! Do not update this file manually! Manual update of this file is not supported and will likely lead to issues. In addition, future solution upgrades wont apply to manually edited files. */
(function (n) {
  'use strict';
  var i = (function () {
      function i() {}
      return (
        (i.ResetErrorNotifications = function () {
          n.Library.ErrorNotifications.WorkOrder_IncidentTypeIsRequired = !1;
          n.Library.ErrorNotifications.WorkOrder_CustomerAsset = !1;
          n.Library.ErrorNotifications.WorkOrder_ErrorRetrievingPrimaryIncident = !1;
          n.Library.ErrorNotifications.WorkOrder_PrimaryIncidentTypeCannotBeCleared = !1;
          n.Library.ErrorNotifications.WorkOrder_TimeToPromisedLaterThanTimeFromPromised = !1;
        }),
        (i.InitializeQueryParameters = function () {
          n.Library.QuerySelectAttributes[n.Library.workOrderAttributes.msdyn_customerasset.LogicalName] =
            'msdyn_customerassetid,msdyn_account';
          n.Library.QueryExpandAttributes[n.Library.workOrderAttributes.msdyn_customerasset.LogicalName] =
            'msdyn_account($select=accountid)';
        }),
        (i.Load = function (n) {
          i.IsOnLoadExecuted ||
            ((i.FormContext = n.getFormContext()),
            (i.telemetry = FieldOneSkyUtils.Telemetry.createSession('WorkOrder.Library')),
            i.OnLoad(),
            (i.IsOnLoadExecuted = !0));
        }),
        (i.OnLoad = function () {
          var f = this,
            e,
            r,
            u,
            o,
            s;
          GeoCodeForm.Library.ParentFormContext = n.Library.FormContext;
          FieldService.CrudApiSDK.AsyncJobTracker = new FieldOneSkyUtils.AsyncJobTracker(
            i.FormContext,
            i.workOrderAttributes.msdyn_workorderid.LogicalName
          );
          n.Library.FieldCacheObject = new FieldOneSkyUtils.FieldCache(
            EntityMetadata.msdyn_workorder.EntityLogicalName
          );
          n.Library.InitializeQueryParameters();
          n.Library.WorkorderUtilsObj = new FieldOneSkyUtils.WorkOrderUtils();
          n.Library.FunctionalLocationUtilsObj = new FieldOneSkyUtils.FunctionalLocationUtils();
          n.Library.AssetUtilsObj = new FieldOneSkyUtils.AssetUtils();
          FieldOneSkyUtils.Form.HideFormsOnFormSelector(n.Library.FormContext, [
            FieldOneSkyUtils.Constants.WorkOrderFormComponentFormIds.Customer,
            FieldOneSkyUtils.Constants.WorkOrderFormComponentFormIds.Service,
            FieldOneSkyUtils.Constants.WorkOrderFormComponentFormIds.Notes,
          ]);
          e = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_agreement');
          e != null && FieldOneSkyUtils.Fields.SetDisabled(n.Library.FormContext, 'msdyn_agreement', !0);
          n.Library.AddressInfo = {};
          r = n.Library.AddressInfo;
          r.Address1 = 'msdyn_Address1';
          r.Address2 = 'msdyn_Address2';
          r.Address3 = 'msdyn_Address3';
          r.City = 'msdyn_City';
          r.StateOrProvince = 'msdyn_StateOrProvince';
          r.Country = 'msdyn_Country';
          r.PostalCode = 'msdyn_PostalCode';
          r.Latitude = 'msdyn_Latitude';
          r.Longitude = 'msdyn_Longitude';
          r.StateCode = 'statecode';
          FieldOneSkyUtils.GetSchedulingParameterAsync(
            function (u) {
              FieldService.CrudApiSDK.adjustBooleanAttributeValue(u, 'msdyn_connecttomaps');
              var f = u.msdyn_connecttomaps;
              typeof f != 'undefined' &&
                (i.telemetry.marker('ConnectToMaps', { Result: f == !0 }),
                f || FieldOneSkyUtils.Visibility.SetTabVisibility(n.Library.FormContext, 'tab_8', !1));
              !FieldOneSkyUtils.isMobileClientOffline() &&
                i.allowExecutingLogic(t.DoGeocoding) &&
                n.Library.DoGeoCoding(r, u);
            },
            function (n) {
              (n == null || n.code != FieldOneSkyUtils.Constants.SchedulingParameterReadPrivilegeErrorCode) &&
                Xrm.Navigation.openAlertDialog({ text: n.message });
            }
          );
          FieldOneSkyUtils.HideBpfIfFieldServiceMobile();
          n.Library.IsWorkOrderMetricsFieldsReadonly();
          n.Library.MakeWorkOrderMetricsFieldsReadOnly();
          FieldOneSkyUtils.GetFormType(n.Library.FormContext) != FieldOneSkyUtils.FormType.Create &&
            ((n.Library.ServiceAccount = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
            )),
            (n.Library.InitialPrimaryIncidentType = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_primaryincidenttype.LogicalName
            )),
            n.Library.SetEstimatedDurationField(),
            n.Library.SetCustomerAssetLookupFilter());
          u = n.Library.workOrderMetadata.GetSystemStatusField(n.Library.FormContext);
          u != null && ((n.Library.CurrentSystemStatusValue = u), (i.LastNonNullSystemStatusValue = u));
          o = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_substatus.LogicalName
          );
          n.Library.CurrentSubStatus = o;
          n.Library.ConfigureSubStatusLookupFilter();
          s = n.Library.GetDefaultValuesFromServiceAccount();
          FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_taxable') == !0
            ? (FieldOneSkyUtils.Fields.SetRequired(n.Library.FormContext, 'msdyn_taxcode', !0),
              FieldOneSkyUtils.Visibility.SetControlVisibility(n.Library.FormContext, 'msdyn_taxcode', !0))
            : FieldOneSkyUtils.Visibility.SetControlVisibility(n.Library.FormContext, 'msdyn_taxcode', !1);
          n.Library.DateWindowStart = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_datewindowstart.LogicalName
          );
          n.Library.DateWindowEnd = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName
          );
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_serviceaccount', function () {
            n.Library.ServiceAccountOnChange();
            FieldOneSkyUtils.WorkOrderUtils.OnChangeCustomerAssetorServiceAccount(f.FormContext);
          });
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_functionallocation', function () {
            n.Library.FunctionalLocationOnChange();
          });
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_customerasset', function () {
            FieldOneSkyUtils.WorkOrderUtils.OnChangeCustomerAssetorServiceAccount(f.FormContext);
            n.Library.CustomerAssetOnChange();
          });
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_billingaccount', function () {
            n.Library.SetTaxable();
            n.Library.SetPriceList();
          });
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_pricelist.LogicalName,
            function () {
              n.Library.CurrencyValidation();
            }
          );
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_systemstatus', function () {
            n.Library.SetSystemStatus(null).then(function (t) {
              t != null
                ? n.Library.SetSubStatus(t).then(function () {
                    i.LastNonNullSystemStatusValue = t;
                    n.Library.SystemStatusOnChange();
                  })
                : n.Library.SystemStatusOnChange();
            });
          });
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_substatus', function () {
            n.Library.SetSubStatus(null).then(function (t) {
              t != null
                ? n.Library.SetSystemStatus(t.msdyn_systemstatus).then(function () {
                    n.Library.SystemStatusOnChange();
                  })
                : n.Library.SystemStatusOnChange();
            });
          });
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            'msdyn_primaryincidenttype',
            n.Library.SetIncidentFields
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            'msdyn_primaryincidentdescription',
            n.Library.SetRequiredIncidentType
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            'msdyn_primaryincidentestimatedduration',
            n.Library.SetRequiredIncidentType
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            'msdyn_customerasset',
            n.Library.SetRequiredIncidentType
          );
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_workordertype', function () {
            n.Library.SetTaxable();
            n.Library.IsPriceListFromBillingAccount ? n.Library.SetPriceList() : n.Library.SetOverhead();
            n.Library.SetRequiredIncidentType();
          });
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            'transactioncurrencyid',
            n.Library.CurrencyValidation
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_taxable.LogicalName,
            function () {
              FieldOneSkyUtils.Fields.GetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxable.LogicalName
              ) == !0
                ? n.Library.SetTaxable()
                : n.Library.SetTaxCode(
                    FieldOneSkyUtils.Fields.GetValue(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_taxable.LogicalName
                    )
                  );
            }
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_datewindowstart.LogicalName,
            n.Library.DatesChanged
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName,
            n.Library.DatesChanged
          );
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_worklocation.LogicalName,
            n.Library.SetRequiredLatitudeLongitude
          );
          FieldOneSkyUtils.Fields.AddOnSave(n.Library.FormContext, n.Library.OnSave);
          FieldOneSkyUtils.GetFormType(n.Library.FormContext) == FieldOneSkyUtils.FormType.Create &&
            (n.Library.SetName(),
            (n.Library.CurrentSystemStatusValue = FieldOneSkyUtils.WorkOrderSystemStatus.Unscheduled),
            n.Library.SetSubStatus(FieldOneSkyUtils.WorkOrderSystemStatus.Unscheduled)
              .then(function () {
                return n.Library.SetSystemStatus(FieldOneSkyUtils.WorkOrderSystemStatus.Unscheduled);
              })
              .then(function () {
                return (i.LastNonNullSystemStatusValue = 69097e4);
              }),
            n.Library.SetDefaultAccountValue(),
            n.Library.SetPriceListFromBA(),
            n.Library.SetPriceListFromWOType(),
            n.Library.SetDefaultAddressValues());
          n.Library.SetFunctionalLocationLookupFromAccount();
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_postalcode.LogicalName,
            n.Library.PostalCodeChangeEvent
          );
          n.Library.SetRequiredIncidentType();
          FieldOneSkyUtils.Fields.AddOnChange(n.Library.FormContext, 'msdyn_serviceterritory', function () {
            n.Library.ServiceTerritoryChangeEvent();
          });
          FieldOneSkyUtils.Fields.AddOnChange(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_customerasset.LogicalName,
            function () {
              n.Library.cacheCustomerAsset();
            }
          );
          n.Library.workOrderMetadata.getServiceTerritory(n.Library.FormContext) == null &&
            s.then(n.Library.PostalCodeChangeEvent);
          n.Library.cacheCustomerAsset();
          n.Library.LoadPrimaryIncident();
          n.Library.SetRequiredLatitudeLongitude();
          n.Library.SetResourceTypeFilterForSupportContact();
          FieldOneSkyUtils.GetFieldOneSettingsAsync(
            function (t) {
              if (t) {
                var i = t[EntityMetadata.msdyn_fieldservicesetting.attributes.msdyn_advancedsettings.LogicalName];
                n.Library.IsPriceListFromBillingAccount = FieldOneSkyUtils.IsNullOrUndefined(i)
                  ? !1
                  : i.indexOf(FieldOneSkyUtils.Constants.AdvancedSettings_UsePriceListFromBillingAccount + '=true') >=
                    0;
              }
            },
            function (t) {
              n.Library.IsPriceListFromBillingAccount = !1;
              FieldOneSkyUtils.ShowErrorMessage(t);
            }
          );
        }),
        (i.GetDefaultValuesFromServiceAccount = function () {
          return new Promise(function (t, i) {
            var r = n.Library.workOrderMetadata.GetServiceAccount(n.Library.FormContext),
              u,
              f;
            if (r != null)
              (u =
                'address1_name,address1_line1,address1_line2,address1_line3,address1_city,address1_stateorprovince,address1_postalcode,address1_country,msdyn_workorderinstructions,address1_latitude,address1_longitude'),
                (f =
                  'msdyn_salestaxcode($select=msdyn_taxcodeid,msdyn_name),msdyn_serviceterritory($select=territoryid,name),msdyn_billingaccount_account($select=accountid,name)'),
                FieldService.CrudApiSDK.retrieveRecord(
                  r[0].id,
                  EntityMetadata.Account.EntityLogicalName,
                  u,
                  f,
                  function (i) {
                    i !== null && n.Library.SetSalesTaxCodeAndTerritoryInAccount(i);
                    t(null);
                  },
                  function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.message });
                    i(n.message);
                  }
                );
            else return t(null);
          });
        }),
        (i.SetFunctionalLocationLookupFromAccount = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(
            i.FormContext,
            n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
          );
          FieldOneSkyUtils.IsNotNullAndUndefined(t) && t.length > 0
            ? FieldOneSkyUtils.SetFunctionalLocationLookupFromAccountId(i.FormContext, t[0].id)
            : FieldOneSkyUtils.SetFunctionalLocationLookup(i.FormContext, '');
        }),
        (i.SetSalesTaxCodeAndTerritoryInAccount = function (t) {
          var i, r;
          FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_serviceterritory');
          t.msdyn_serviceterritory != null &&
            t.msdyn_serviceterritory.territoryid != null &&
            (n.Library.ServiceTerritorySetFromAccount = !0);
          i = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_taxcode.LogicalName
          );
          i != null && i[0].id != null
            ? (n.Library.SalesTaxCode = n.Library.ToLookupObject(i))
            : (FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_salestaxcode'),
              t != null &&
                t.msdyn_salestaxcode != null &&
                ((r = {
                  Id: t.msdyn_salestaxcode.msdyn_taxcodeid,
                  Name: t.msdyn_salestaxcode.msdyn_name,
                  LogicalName: 'msdyn_taxcode',
                }),
                r != null && r.Id != null && (n.Library.SalesTaxCode = r)));
        }),
        (i.SetResourceTypeFilterForSupportContact = function () {
          var t = FieldOneSkyUtils.Control.GetControl(n.Library.FormContext, 'msdyn_supportcontact');
          t != null &&
            t.addPreSearch(function () {
              t.addCustomFilter(
                '<filter type="and"><condition attribute="resourcetype" operator="in"><value>2</value><value>3</value></condition></filter>'
              );
            });
        }),
        (i.SetRequiredLatitudeLongitude = function () {
          var i = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_worklocation.LogicalName
            ),
            t = i === FieldOneSkyUtils.WorkLocation.Facility;
          FieldOneSkyUtils.Fields.SetRequired(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_latitude.LogicalName,
            t
          );
          FieldOneSkyUtils.Fields.SetRequired(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_longitude.LogicalName,
            t
          );
        }),
        (i.SetEstimatedDurationField = function () {
          var t, i, r;
          FieldOneSkyUtils.isMobileClientOffline() ||
            ((t = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_primaryincidenttype.LogicalName
            )),
            (i = FieldOneSkyUtils.Control.GetControl(n.Library.FormContext, 'msdyn_primaryincidentestimatedduration')),
            FieldOneSkyUtils.IsNotNullAndUndefined(i) &&
              FieldOneSkyUtils.IsNotNullAndUndefined(t) &&
              t.length > 0 &&
              t[0].id &&
              ((r = { incidenTypeId: t[0].id }),
              FieldOneSkyUtils.SystemActions.ExecuteAsync(
                FieldOneSkyUtils.SystemJobType.IncidentType_IsEstimatedDurationCalculated,
                JSON.stringify(r),
                function (n) {
                  if (n !== null && n.OutputParameter !== null) {
                    var t = parseInt(n.OutputParameter);
                    t > 0 ? i.setDisabled(!0) : i.setDisabled(!1);
                  } else i.setDisabled(!1);
                },
                null,
                FieldOneSkyUtils.ShowErrorMessage,
                'IncidentType_ApplySuggestedDuration',
                undefined
              )));
        }),
        (i.DoGeoCoding = function (t, i) {
          GeoCodeForm.Library.OnLoad(n.Library.FormContext, t, i);
          GeoCodeForm.Library.Address1_line1 = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_address1'
          );
          GeoCodeForm.Library.Address1_line2 = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_address2'
          );
          GeoCodeForm.Library.Address1_line3 = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_address3'
          );
          GeoCodeForm.Library.Address1_city = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_city');
          GeoCodeForm.Library.Address1_stateorprovince = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_stateorprovince'
          );
          GeoCodeForm.Library.Address1_country = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_country'
          );
          GeoCodeForm.Library.Address1_postalcode = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            'msdyn_postalcode'
          );
        }),
        (i.CheckTerritoryInAccount = function () {
          return new Promise(function (t, r) {
            var u = n.Library.workOrderMetadata.GetServiceAccount(n.Library.FormContext),
              f,
              e;
            if (u != null)
              (f = 'accountid'),
                (e = 'msdyn_serviceterritory($select=territoryid)'),
                FieldService.CrudApiSDK.retrieveRecord(
                  u[0].id,
                  EntityMetadata.Account.EntityLogicalName,
                  f,
                  e,
                  function (i) {
                    FieldService.CrudApiSDK.adjustLookupAttributeValue(i, 'msdyn_serviceterritory');
                    i.msdyn_serviceterritory != null &&
                      i.msdyn_serviceterritory.territoryid != null &&
                      (n.Library.ServiceTerritorySetFromAccount = !0);
                    t(null);
                  },
                  function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.message });
                    r(n.message);
                  },
                  i.FormContext
                );
            else return t(null);
          });
        }),
        (i.PostalCodeChangeEvent = function () {
          if (
            (!FieldOneSkyUtils.isMobileClientOffline() ||
              FieldService.CrudApiSDK.isOffline(EntityMetadata.msdyn_postalcode.EntityLogicalName)) &&
            (n.Library.ServiceTerritorySetFromAccount == !1 ||
              !n.Library.workOrderMetadata.getServiceTerritory(n.Library.FormContext))
          ) {
            var t = n.Library.workOrderMetadata.getPostalCode(n.Library.FormContext),
              i =
                "$select=msdyn_postalcodeid,msdyn_name&$expand=msdyn_serviceterritory($select=territoryid,name)&$filter=msdyn_name eq '" +
                t +
                "' and statecode eq 0";
            FieldService.CrudApiSDK.retrieveMultipleRecords(
              EntityMetadata.msdyn_postalcode.EntityLogicalName,
              i,
              function (t) {
                var r = t && t.entities,
                  i,
                  u;
                r &&
                  r.length > 0 &&
                  ((i = r[0]),
                  i != null &&
                    i.msdyn_serviceterritory != null &&
                    (i.msdyn_serviceterritory.territoryid != null
                      ? ((u = {
                          Id: i.msdyn_serviceterritory.territoryid,
                          Name: i.msdyn_serviceterritory.name,
                          LogicalName: 'territory',
                        }),
                        n.Library.workOrderMetadata.setServiceTerritory(n.Library.FormContext, u, u.Name))
                      : FieldService.CrudApiSDK.retrieveRecord(
                          i.msdyn_postalcodeid,
                          'msdyn_postalcode',
                          'msdyn_postalcodeid',
                          'msdyn_serviceterritory($select=territoryid,name)',
                          function (t) {
                            if (
                              (FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_serviceterritory'),
                              t.msdyn_serviceterritory != null && t.msdyn_serviceterritory.territoryid != null)
                            ) {
                              var i = {
                                Id: t.msdyn_serviceterritory.territoryid,
                                Name: t.msdyn_serviceterritory.name,
                                LogicalName: 'territory',
                              };
                              n.Library.workOrderMetadata.setServiceTerritory(n.Library.FormContext, i, i.Name);
                            }
                          },
                          FieldOneSkyUtils.ShowErrorMessage
                        )));
              },
              FieldOneSkyUtils.ShowErrorMessage
            );
          }
        }),
        (i.ServiceTerritoryChangeEvent = function () {
          n.Library.PostalCodeChanged
            ? ((n.Library.PostalCodeChanged = !1), (n.Library.TerritoryDirtyValue = null))
            : (n.Library.TerritoryDirtyValue = FieldOneSkyUtils.Fields.GetValue(
                n.Library.FormContext,
                'msdyn_serviceterritory'
              ));
        }),
        (i.ServiceAccountValidate = function (t) {
          FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'WorkOrder_ServiceAccountClient', !1);
          return new Promise(function (r, u) {
            var o = FieldOneSkyUtils.CurrentEntity.GetIdWithoutBracketsOrDefault(n.Library.FormContext),
              f =
                '&$top=1&$filter=_msdyn_workorder_value eq ' +
                o +
                ' and msdyn_customerasset ne null and statecode eq 0',
              e = ',msdyn_customerasset&$filter=msdyn_workorder eq ' + o + ' and statecode eq 0',
              s = FieldService.CrudApiSDK.isOffline(EntityMetadata.msdyn_workorderincident.EntityLogicalName),
              h = s ? '$select=msdyn_workorderincidentid' + e : '$select=msdyn_workorderincidentid' + f;
            FieldService.CrudApiSDK.retrieveMultipleRecords(
              EntityMetadata.msdyn_workorderincident.EntityLogicalName,
              h,
              function (o) {
                var h = o && o.entities,
                  c,
                  l;
                s &&
                  (h = h.filter(function (n) {
                    return n._msdyn_customerasset_value != null;
                  }));
                h.length > 0
                  ? t
                    ? (FieldOneSkyUtils.Form.SetNotification(
                        n.Library.FormContext,
                        'WorkOrder_ServiceAccountClient',
                        !0
                      ),
                      r(!0))
                    : r(!1)
                  : ((c = FieldService.CrudApiSDK.isOffline(
                      EntityMetadata.msdyn_workorderservicetask.EntityLogicalName
                    )),
                    (l = c ? '$select=msdyn_workorderservicetaskid' + e : '$select=msdyn_workorderservicetaskid' + f),
                    FieldService.CrudApiSDK.retrieveMultipleRecords(
                      EntityMetadata.msdyn_workorderservicetask.EntityLogicalName,
                      l,
                      function (o) {
                        var s = o.entities.map(function (n) {
                            return n;
                          }),
                          h,
                          l;
                        c &&
                          (s = s.filter(function (n) {
                            return n._msdyn_customerasset_value != null;
                          }));
                        s.length > 0
                          ? t
                            ? (FieldOneSkyUtils.Form.SetNotification(
                                n.Library.FormContext,
                                'WorkOrder_ServiceAccountClient',
                                !0
                              ),
                              r(!0))
                            : r(!1)
                          : ((h = FieldService.CrudApiSDK.isOffline(
                              EntityMetadata.msdyn_workorderproduct.EntityLogicalName
                            )),
                            (l = h ? '$select=msdyn_workorderproductid' + e : '$select=msdyn_workorderproductid' + f),
                            FieldService.CrudApiSDK.retrieveMultipleRecords(
                              EntityMetadata.msdyn_workorderproduct.EntityLogicalName,
                              l,
                              function (o) {
                                var s =
                                    o &&
                                    o.entities &&
                                    o.entities.map(function (n) {
                                      return n;
                                    }),
                                  c,
                                  l;
                                h &&
                                  (s =
                                    s &&
                                    s.filter(function (n) {
                                      return n._msdyn_customerasset_value != null;
                                    }));
                                s && s.length > 0
                                  ? t
                                    ? (FieldOneSkyUtils.Form.SetNotification(
                                        n.Library.FormContext,
                                        'WorkOrder_ServiceAccountClient',
                                        !0
                                      ),
                                      r(!0))
                                    : r(!1)
                                  : ((c = FieldService.CrudApiSDK.isOffline(
                                      EntityMetadata.msdyn_workorderservice.EntityLogicalName
                                    )),
                                    (l = c
                                      ? '$select=msdyn_workorderserviceid' + e
                                      : '$select=msdyn_workorderserviceid' + f),
                                    FieldService.CrudApiSDK.retrieveMultipleRecords(
                                      EntityMetadata.msdyn_workorderservice.EntityLogicalName,
                                      l,
                                      function (i) {
                                        var u = i && i.entities;
                                        c &&
                                          (u = u.filter(function (n) {
                                            return n._msdyn_customerasset_value != null;
                                          }));
                                        u && u.length > 0
                                          ? t
                                            ? (FieldOneSkyUtils.Form.SetNotification(
                                                n.Library.FormContext,
                                                'WorkOrder_ServiceAccountClient',
                                                !0
                                              ),
                                              r(!0))
                                            : r(!1)
                                          : r(!1);
                                      },
                                      function (n) {
                                        Xrm.Navigation.openAlertDialog({ text: n.message });
                                        u(n.message);
                                      },
                                      i.FormContext
                                    ));
                              },
                              function (n) {
                                Xrm.Navigation.openAlertDialog({ text: n.message });
                                u(n.message);
                              },
                              i.FormContext
                            ));
                      },
                      function (n) {
                        Xrm.Navigation.openAlertDialog({ text: n.message });
                        u(n.message);
                      },
                      i.FormContext
                    ));
              },
              function (n) {
                Xrm.Navigation.openAlertDialog({ text: n.message });
                u(n.message);
              },
              i.FormContext
            );
          });
        }),
        (i.SystemStatusOnChange = function () {
          var n;
          if (
            (FieldOneSkyUtils.Form.SetNotification(i.FormContext, 'WorkOrder_HasUsedWorkOrderProduct', !1),
            FieldOneSkyUtils.Form.SetNotification(
              i.FormContext,
              'WorkOrder_CancelingWorkOrderDoesNotRevertUsageOfProducts',
              !1
            ),
            (n = FieldOneSkyUtils.Fields.GetValue(i.FormContext, i.workOrderAttributes.msdyn_systemstatus.LogicalName)),
            FieldOneSkyUtils.GetFormType(i.FormContext) != FieldOneSkyUtils.FormType.Create && n && n == 690970005)
          ) {
            var t = FieldOneSkyUtils.CurrentEntity.GetIdOrDefault(i.FormContext),
              r = FieldOneSkyUtils.GetODataAttribute(
                EntityMetadata.msdyn_workorderproduct.EntityLogicalName,
                i.workOrderProductAttributes.msdyn_workorder.LogicalName
              ),
              u =
                r +
                ' eq ' +
                FieldOneSkyUtils.GetIdWithoutBrackets(t) +
                ' and ' +
                i.workOrderProductAttributes.statecode.LogicalName +
                ' eq 0  and ' +
                i.workOrderProductAttributes.msdyn_linestatus.LogicalName +
                ' eq ' +
                FieldOneSkyUtils.WOProductServiceLineStatus.Used,
              f =
                i.workOrderProductAttributes.msdyn_product.LogicalName +
                '($filter=' +
                i.productAttributes.msdyn_fieldserviceproducttype.LogicalName +
                ' eq ' +
                FieldOneSkyUtils.FieldOneProductType.Inventory +
                ')';
            FieldService.CrudApiSDK.retrieveMultipleRecords(
              EntityMetadata.msdyn_workorderproduct.EntityLogicalName,
              '$select=' +
                i.workOrderProductAttributes.msdyn_workorderproductid.LogicalName +
                '&$expand=' +
                f +
                '&$filter=' +
                u,
              function (n) {
                if (n && n.entities && n.entities.length > 0) {
                  var t = n.entities.some(function (n) {
                    return n[i.workOrderProductAttributes.msdyn_product.LogicalName] != null;
                  });
                  t && FieldOneSkyUtils.Form.SetNotification(i.FormContext, 'WorkOrder_HasUsedWorkOrderProduct', !0);
                }
              },
              function () {
                FieldOneSkyUtils.Form.SetNotification(
                  i.FormContext,
                  'WorkOrder_CancelingWorkOrderDoesNotRevertUsageOfProducts',
                  !0
                );
              },
              i.FormContext
            );
          }
        }),
        (i.SetSystemStatus = function (t) {
          var i = null;
          return new Promise(function (r, u) {
            if (t != null) FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_systemstatus', t), r(i);
            else {
              var f = FieldOneSkyUtils.Fields.GetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_systemstatus.LogicalName
              );
              n.Library.ValidateStatuses(n.Library.CurrentSystemStatusValue, f).then(
                function (t) {
                  t
                    ? (Xrm.Navigation.openAlertDialog({ text: t }),
                      setTimeout(function () {
                        FieldOneSkyUtils.Fields.SetValue(
                          n.Library.FormContext,
                          n.Library.workOrderAttributes.msdyn_systemstatus.LogicalName,
                          n.Library.CurrentSystemStatusValue
                        );
                        FieldOneSkyUtils.Fields.SetValue(
                          n.Library.FormContext,
                          n.Library.workOrderAttributes.msdyn_substatus.LogicalName,
                          n.Library.CurrentSubStatus
                        );
                      }, 100))
                    : (FieldOneSkyUtils.Fields.SetValue(
                        n.Library.FormContext,
                        n.Library.workOrderAttributes.msdyn_systemstatus.LogicalName,
                        f
                      ),
                      (i = f));
                  r(i);
                },
                function (n) {
                  u(n);
                }
              );
            }
          });
        }),
        (i.SetSystemStatusField = function (t) {
          t == 69097e4 || t == 690970001
            ? FieldOneSkyUtils.Fields.SetDisabled(n.Library.FormContext, 'msdyn_systemstatus', !0)
            : FieldOneSkyUtils.Fields.SetDisabled(n.Library.FormContext, 'msdyn_systemstatus', !1);
        }),
        (i.SetSubStatus = function (t) {
          return new Promise(function (i, r) {
            var u = null,
              f = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_substatus');
            f != null
              ? FieldService.CrudApiSDK.retrieveRecord(
                  f[0].id,
                  f[0].typename,
                  'msdyn_systemstatus',
                  null,
                  function (f) {
                    if (
                      (FieldService.CrudApiSDK.adjustNumberAttributeValue(f, 'msdyn_systemstatus'),
                      n.Library.ValidateStatuses(n.Library.CurrentSystemStatusValue, f && f.msdyn_systemstatus).then(
                        function (t) {
                          t
                            ? (Xrm.Navigation.openAlertDialog({ text: t }),
                              FieldOneSkyUtils.Fields.SetLookUpValue(
                                n.Library.FormContext,
                                'msdyn_substatus',
                                n.Library.CurrentSubStatus[0].Id,
                                n.Library.CurrentSubStatus[0].name,
                                n.Library.CurrentSubStatus[0].typename
                              ))
                            : (u = f);
                          i(u);
                        }
                      ),
                      t != null && t != f.msdyn_systemstatus)
                    )
                      var e = n.Library.UpdateSubStatusBasedOnSytemStatus(t).then(function (n) {
                        typeof n == 'string' ? r(n) : i(n);
                      });
                  },
                  function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.message });
                    r(n.message);
                  }
                )
              : (t != null &&
                  n.Library.UpdateSubStatusBasedOnSytemStatus(t).then(function (n) {
                    typeof n == 'string' ? r(n) : i(n);
                  }),
                (u = undefined),
                i(u));
          });
        }),
        (i.UpdateSubStatusBasedOnSytemStatus = function (t) {
          return new Promise(function (i, r) {
            var f = null,
              u =
                '$select=msdyn_workordersubstatusid,msdyn_name&$top=1&$filter=msdyn_systemstatus eq ' +
                t +
                ' and msdyn_defaultsubstatus eq true';
            FieldService.CrudApiSDK.isOffline('msdyn_workordersubstatus') &&
              (u =
                '$select=msdyn_workordersubstatusid,msdyn_name&$top=1&$filter=msdyn_systemstatus eq ' +
                t +
                ' and msdyn_defaultsubstatus eq 1');
            FieldService.CrudApiSDK.retrieveMultipleRecords(
              'msdyn_workordersubstatus',
              u,
              function (t) {
                var r = t && t.entities;
                r && r.length > 0
                  ? (FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      'msdyn_substatus',
                      r[0].msdyn_workordersubstatusid,
                      r[0].msdyn_name,
                      'msdyn_workordersubstatus'
                    ),
                    i(r[0]))
                  : (FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_substatus', null), i(f));
              },
              function (n) {
                Xrm.Navigation.openAlertDialog({ text: n.message });
                r(n.message);
              }
            );
          });
        }),
        (i.IdToString = function (n) {
          return (n = n.toString().replace(/{/g, '')), n.toString().replace(/}/g, '');
        }),
        (i.ValidateStatuses = function (t, r) {
          return new Promise(function (u, f) {
            var e = FieldService.CrudApiSDK.isOffline(EntityMetadata.BookableResourceBooking.EntityLogicalName)
                ? 'msdyn_workorder'
                : '_msdyn_workorder_value',
              o = FieldService.CrudApiSDK.isOffline(EntityMetadata.BookableResourceBooking.EntityLogicalName)
                ? 'bookableresourcebookingid,bookingstatus'
                : 'bookableresourcebookingid';
            FieldService.CrudApiSDK.retrieveMultipleRecords(
              EntityMetadata.BookableResourceBooking.EntityLogicalName,
              '?$select=' +
                o +
                '&$expand=BookingStatus($select=msdyn_fieldservicestatus)&$filter=' +
                (e +
                  ' eq ' +
                  FieldOneSkyUtils.CurrentEntity.GetIdWithoutBracketsOrDefault(n.Library.FormContext) +
                  ' and statecode eq ' +
                  FieldOneSkyUtils.WorkOrderResourceStateCode.Active),
              function (e) {
                var o =
                  e &&
                  e.entities &&
                  e.entities.map(function (n) {
                    return n;
                  });
                n.Library.FieldServiceStatus = [];
                o && o.length > 0
                  ? FieldService.CrudApiSDK.isOffline(EntityMetadata.BookableResourceBooking.EntityLogicalName)
                    ? FieldService.CrudApiSDK.retrieveMultipleRecords(
                        'bookingstatus',
                        '$select=bookingstatusid,msdyn_fieldservicestatus',
                        function (f) {
                          var c =
                              f &&
                              f.entities &&
                              f.entities
                                .map(function (n) {
                                  return n;
                                })
                                .filter(function (n) {
                                  return n.msdyn_fieldservicestatus != null;
                                }),
                            s,
                            h,
                            l,
                            a,
                            e,
                            v;
                          if (c && c.length > 0)
                            for (e = 0; e < o.length; e++) {
                              for (s = null, h = 0, l = c; h < l.length; h++)
                                if (((a = l[h]), a.bookingstatusid == o[e]._bookingstatus_value)) {
                                  s = a;
                                  break;
                                }
                              s != null &&
                                s.msdyn_fieldservicestatus != null &&
                                (FieldService.CrudApiSDK.adjustNumberAttributeValue(s, 'msdyn_fieldservicestatus'),
                                (o[e].BookingStatus = {
                                  bookingstatusid: s.bookingstatusid,
                                  msdyn_fieldservicestatus: s.msdyn_fieldservicestatus,
                                }));
                            }
                          for (e = 0; e < o.length; e++)
                            o[e].BookingStatus != null &&
                              o[e].BookingStatus.msdyn_fieldservicestatus != null &&
                              n.Library.FieldServiceStatus.push(o[e].BookingStatus.msdyn_fieldservicestatus);
                          v = i.ValidateStatusTransition(t, r);
                          v && u(Localization.getLocalizationStringAsync(v));
                          u(null);
                        },
                        function (n) {
                          Xrm.Navigation.openAlertDialog({ text: n.message });
                          f();
                        },
                        i.FormContext
                      )
                    : u(null)
                  : u(null);
              },
              function (n) {
                Xrm.Navigation.openAlertDialog({ text: n.message });
                f(n.message);
              },
              i.FormContext
            );
          });
        }),
        (i.ValidateStatusTransition = function (n, t) {
          var u = null,
            r = FieldOneSkyUtils.WorkOrderSystemStatus;
          return (
            n == r.Unscheduled
              ? t == r.Scheduled
                ? (u = i.ToScheduled())
                : t == r.InProgress
                ? (u = i.ToInProgress())
                : t == r.Completed
                ? (u = i.ToCompleted())
                : (t == r.Posted || t == r.Canceled) && (u = i.ToCanceledPosted())
              : n == r.Scheduled
              ? t == r.Unscheduled
                ? (u = i.ToUnscheduled())
                : t == r.InProgress
                ? (u = i.ToInProgress())
                : t == r.Completed
                ? (u = i.ToCompleted())
                : (t == r.Posted || t == r.Canceled) && (u = i.ToCanceledPosted())
              : n == r.InProgress
              ? t == r.Unscheduled
                ? (u = i.ToUnscheduled())
                : t == r.Scheduled
                ? (u = i.ToScheduled())
                : t == r.Completed
                ? (u = i.ToCompleted())
                : (t == r.Posted || t == r.Canceled) && (u = i.ToCanceledPosted())
              : n == r.Completed
              ? t == r.Unscheduled
                ? (u = i.ToUnscheduled())
                : t == r.Scheduled
                ? (u = i.ToScheduled())
                : t == r.InProgress
                ? (u = i.ToInProgress())
                : (t == r.Posted || t == r.Canceled) && (u = i.ToCanceledPosted())
              : n == r.Posted
              ? t == r.Unscheduled
                ? (u = i.ToUnscheduled())
                : t == r.Scheduled
                ? (u = i.ToScheduled())
                : t == r.InProgress
                ? (u = i.ToInProgress())
                : t == r.Completed && (u = i.ToCompleted())
              : n == r.Canceled &&
                (t == r.Unscheduled
                  ? (u = i.ToUnscheduled())
                  : t == r.Scheduled
                  ? (u = i.ToScheduled())
                  : t == r.InProgress
                  ? (u = i.ToInProgress())
                  : t == r.Completed && (u = i.ToCompleted())),
            u
          );
        }),
        (i.ToUnscheduled = function () {
          if (
            i.FieldServiceStatus.length > 0 &&
            i.FieldServiceStatus.some(function (n) {
              return n != FieldOneSkyUtils.WorkOrderResourceSystemStatus.Canceled;
            })
          )
            return 'WorkOrder_ToUnscheduled';
        }),
        (i.ToScheduled = function () {
          if (
            i.FieldServiceStatus.length == 0 ||
            (i.FieldServiceStatus.length > 0 &&
              (i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.OnBreak) > -1 ||
                i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.InProgress) > -1 ||
                i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.Traveling) > -1 ||
                i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.Scheduled) == -1))
          )
            return 'WorkOrder_ToScheduled';
        }),
        (i.ToInProgress = function () {
          if (
            !(
              i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.OnBreak) > -1 ||
              i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.InProgress) > -1 ||
              i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.Traveling) > -1
            )
          )
            return 'WorkOrder_ToInProgress';
        }),
        (i.ToCompleted = function () {
          if (
            i.FieldServiceStatus.length > 0 &&
            i.FieldServiceStatus.some(function (n) {
              return (
                n != FieldOneSkyUtils.WorkOrderResourceSystemStatus.Canceled &&
                n != FieldOneSkyUtils.WorkOrderResourceSystemStatus.Completed
              );
            })
          )
            return 'WorkOrder_ToCompleted';
        }),
        (i.ToCanceledPosted = function () {
          if (
            i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.InProgress) > -1 ||
            i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.Traveling) > -1 ||
            i.FieldServiceStatus.indexOf(FieldOneSkyUtils.WorkOrderResourceSystemStatus.OnBreak) > -1
          )
            return 'WorkOrder_ToCanceledPosted';
        }),
        (i.ConfigureSubStatusLookupFilter = function () {
          if (!i.FormContext) {
            FieldOneSkyUtils.LogMessageInConsole('Form context is null. Substatus Lookup filter will not be applied.');
            return;
          }
          var t = i.workOrderAttributes.msdyn_substatus.LogicalName,
            n = FieldOneSkyUtils.Fields.GetField(i.FormContext, t);
          if (!n || !n.controls) {
            FieldOneSkyUtils.LogMessageInConsole(
              'Substatus field is null. Substatus Lookup filter will not be applied.'
            );
            return;
          }
          n.controls.forEach(function (n) {
            var t, r;
            n &&
              (((t = EntityMetadata.msdyn_workordersubstatus.EntityLogicalName),
              FieldService.CrudApiSDK.isOffline(t)) ||
                ((r = n.getDefaultView()),
                (r && r !== '') || i.AddDefaultViewToSubStatusLookup(n),
                n.addPreSearch(function (r) {
                  var e = r.getFormContext(),
                    u,
                    f,
                    o;
                  if (!e) {
                    FieldOneSkyUtils.LogMessageInConsole(
                      'Form context is null. Substatus Lookup filter will not be applied.'
                    );
                    return;
                  }
                  if (((u = i.workOrderMetadata.GetSystemStatusField(e)), u === null || typeof u == 'undefined')) {
                    if (((f = i.LastNonNullSystemStatusValue), f === null || typeof f == 'undefined')) {
                      FieldOneSkyUtils.LogMessageInConsole(
                        'System status and its last known value are null. Substatus Lookup filter will not be applied.'
                      );
                      return;
                    }
                    u = f;
                  }
                  o = i.GetSubstatusFilter(u);
                  n.addCustomFilter(o, t);
                })));
          });
        }),
        (i.SetName = function () {
          if (FieldOneSkyUtils.isOutlookOffline()) {
            var t = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_name');
            n.Library.FormContext.getAttribute('msdyn_name') &&
              t == null &&
              FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                'msdyn_name',
                FieldOneSkyUtils.AutoNumberTempValue
              );
          } else
            FieldOneSkyUtils.GetFormType(n.Library.FormContext) == FieldOneSkyUtils.FormType.Create &&
              FieldOneSkyUtils.Fields.GetField(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_name.LogicalName
              ) != null &&
              (FieldOneSkyUtils.isMobileClientOffline()
                ? (FieldOneSkyUtils.Fields.SetValue(
                    n.Library.FormContext,
                    n.Library.workOrderAttributes.msdyn_name.LogicalName,
                    FieldOneSkyUtils.AutoNumberMobileOfflineTempValue
                  ),
                  FieldOneSkyUtils.Form.ShowNotificationAutoHide(
                    n.Library.FormContext,
                    'WorkOrder_NumberOfflineSync',
                    3e4
                  ))
                : FieldOneSkyUtils.SystemActions.ExecuteAsync(
                    FieldOneSkyUtils.SystemJobType.UniqueNumber_GetNumber,
                    EntityMetadata.msdyn_workorder.EntityLogicalName,
                    function (t) {
                      if (t != null && t.OutputParameter != null) {
                        var r = JSON.parse(t.OutputParameter);
                        i.telemetry.marker('GetUniqueNumber', { Result: r.name });
                        FieldOneSkyUtils.Fields.SetValue(
                          n.Library.FormContext,
                          n.Library.workOrderAttributes.msdyn_name.LogicalName,
                          r.name
                        );
                      }
                    },
                    null,
                    null,
                    'UniqueNumberJob'
                  ));
        }),
        (i.SetPriceListFromBA = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_billingaccount.LogicalName
          );
          t != null &&
            FieldService.CrudApiSDK.retrieveRecord(
              t[0].id,
              EntityMetadata.Account.EntityLogicalName,
              'accountid',
              'defaultpricelevelid($select=pricelevelid,name)',
              function (t) {
                if (
                  (FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'defaultpricelevelid'),
                  t && t.defaultpricelevelid && t.defaultpricelevelid.pricelevelid)
                ) {
                  var i = {
                    Id: t.defaultpricelevelid.pricelevelid,
                    Name: t.defaultpricelevelid.name,
                    LogicalName: 'pricelevel',
                  };
                  n.Library.PriceListBillingAccount = i;
                }
              },
              FieldOneSkyUtils.ShowErrorMessage
            );
        }),
        (i.SetPriceListFromWOType = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_workordertype');
          t &&
            FieldService.CrudApiSDK.retrieveRecord(
              t[0].id,
              'msdyn_workordertype',
              'msdyn_pricelist',
              'msdyn_pricelist($select=pricelevelid,name)',
              function (t) {
                FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_pricelist');
                t && (n.Library.PriceListWorkOrderType = t.msdyn_pricelist);
              },
              FieldOneSkyUtils.ShowErrorMessage
            );
        }),
        (i.HasAPrimaryIncidentFieldWithANonEmptyValue = function () {
          for (
            var u,
              i,
              t = 0,
              r = ['msdyn_primaryincidentdescription', 'msdyn_primaryincidentestimatedduration', 'msdyn_customerasset'];
            t < r.length;
            t++
          )
            if (
              ((u = r[t]),
              (i = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, u)),
              i && String(i).trim().length > 0)
            )
              return !0;
          return !1;
        }),
        (i.SetRequiredIncidentType = function () {
          var r = FieldOneSkyUtils.Fields.GetField(n.Library.FormContext, 'msdyn_primaryincidenttype'),
            t;
          r &&
            (n.Library.PrimaryIncidentTypeFieldRequiredLevel === '' &&
              (n.Library.PrimaryIncidentTypeFieldRequiredLevel = r.getRequiredLevel()),
            n.Library.PrimaryIncidentTypeFieldRequiredLevel !== 'required' &&
              ((t = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_workordertype')),
              i.HasAPrimaryIncidentFieldWithANonEmptyValue()
                ? FieldOneSkyUtils.Fields.SetRequired(n.Library.FormContext, 'msdyn_primaryincidenttype', !0)
                : t != null
                ? FieldService.CrudApiSDK.retrieveRecord(
                    t[0].id,
                    'msdyn_workordertype',
                    'msdyn_incidentrequired',
                    null,
                    function (t) {
                      FieldService.CrudApiSDK.adjustBooleanAttributeValue(t, 'msdyn_incidentrequired');
                      t != null && t.msdyn_incidentrequired == !0
                        ? FieldOneSkyUtils.Fields.SetRequired(n.Library.FormContext, 'msdyn_primaryincidenttype', !0)
                        : n.Library.SetPrimaryIncidentTypeFieldFromWO(n.Library.PrimaryIncidentTypeFieldRequiredLevel);
                    },
                    function (t) {
                      n.Library.SetPrimaryIncidentTypeFieldFromWO(n.Library.PrimaryIncidentTypeFieldRequiredLevel);
                      Xrm.Navigation.openAlertDialog({ text: t.message });
                    }
                  )
                : n.Library.SetPrimaryIncidentTypeFieldFromWO(n.Library.PrimaryIncidentTypeFieldRequiredLevel)));
        }),
        (i.SetPrimaryIncidentTypeFieldFromWO = function (t) {
          var i = FieldOneSkyUtils.Fields.GetField(n.Library.FormContext, 'msdyn_primaryincidenttype');
          i &&
            (t === 'recommended'
              ? i.setRequiredLevel('recommended')
              : FieldOneSkyUtils.Fields.SetRequired(n.Library.FormContext, 'msdyn_primaryincidenttype', !1));
        }),
        (i.GetSalesTaxCodeFromServiceaccount = function () {
          return new Promise(function (t, r) {
            var u = n.Library.workOrderMetadata.GetServiceAccount(n.Library.FormContext);
            if (u != null)
              FieldService.CrudApiSDK.retrieveRecord(
                u[0].id,
                EntityMetadata.Account.EntityLogicalName,
                n.Library.accountAttributes.msdyn_salestaxcode.LogicalName,
                'msdyn_salestaxcode($select=msdyn_taxcodeid,msdyn_name)',
                function (n) {
                  if (
                    (FieldService.CrudApiSDK.adjustLookupAttributeValue(n, 'msdyn_salestaxcode'),
                    n != null && n.msdyn_salestaxcode != null)
                  ) {
                    var i = {
                      Id: n.msdyn_salestaxcode.msdyn_taxcodeid,
                      Name: n.msdyn_salestaxcode.msdyn_name,
                      LogicalName: 'msdyn_taxcode',
                    };
                    t(i);
                  } else t(null);
                },
                function (n) {
                  Xrm.Navigation.openAlertDialog({ text: n.message });
                  r(n.message);
                },
                i.FormContext
              );
            else return t;
          });
        }),
        (i.ServiceAccountOnChange = function () {
          FieldOneSkyUtils.Fields.IsDirty(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
          ) &&
            (FieldOneSkyUtils.GetFormType(n.Library.FormContext) != FieldOneSkyUtils.FormType.Create
              ? FieldOneSkyUtils.WorkOrderUtils.isCustomerAssetServiceAccountValidationDisabled()
                  .then(function (t) {
                    t
                      ? n.Library.SetDefaultValuesFromServiceAccount()
                      : n.Library.ServiceAccountValidate(!0).then(function (t) {
                          t
                            ? n.Library.workOrderMetadata.SetServiceAccountField(
                                n.Library.FormContext,
                                n.Library.ServiceAccount
                              )
                            : n.Library.SetDefaultValuesFromServiceAccount();
                        });
                  })
                  .catch(function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.message });
                  })
              : n.Library.SetDefaultValuesFromServiceAccount());
          n.Library.SetCustomerAssetLookupFilter();
          n.Library.SetFunctionalLocationLookupFromAccount();
        }),
        (i.CanAddressBePopulatedByFunctionalLocation = function () {
          return n.Library.workOrderMetadata.GetFunctionalLocation(n.Library.FormContext)
            ? !this.IsWorkOrderAddressEmpty()
            : !1;
        }),
        (i.FunctionalLocationOnChange = function () {
          n.Library.SetDefaultAddressValues();
        }),
        (i.SetDefaultAddressValues = function () {
          var t = n.Library.workOrderMetadata.GetFunctionalLocation(n.Library.FormContext);
          t
            ? n.Library.SetDefaultAddressFromFunctionalLocationOrServiceAccount(t)
            : n.Library.SetDefaultAddressFromServiceAccount();
        }),
        (i.SetDefaultAddressFromFunctionalLocationOrServiceAccount = function (t) {
          t &&
            t.length > 0 &&
            n.Library.SetAddressValuesFromFunctionalLocation(t[0].id).then(function (t) {
              t || n.Library.SetDefaultAddressFromServiceAccount();
            });
        }),
        (i.CustomerAssetOnChange = function () {
          n.Library.workOrderMetadata.GetFunctionalLocation(n.Library.FormContext) ||
            n.Library.SetFunctionalLocationFromCustomerAsset().then(function () {
              n.Library.FunctionalLocationOnChange();
            });
        }),
        (i.SetCustomerAssetLookupFilter = function () {
          var t = this;
          FieldOneSkyUtils.WorkOrderUtils.isCustomerAssetServiceAccountValidationDisabled()
            .then(function (i) {
              var u, r;
              n.Library.ServiceAccount = FieldOneSkyUtils.Fields.GetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
              );
              u = FieldOneSkyUtils.Fields.GetField(n.Library.FormContext, 'msdyn_customerasset');
              i
                ? n.Library.ServiceAccount &&
                  ((r = n.Library.ServiceAccount[0].id),
                  (r = r.substr(1, r.length - 2)),
                  FieldOneSkyUtils.WorkOrderUtils.SetFilterToCustomerAssetLookupByAccountId(t.FormContext, r))
                : u &&
                  u.controls.forEach(function (t) {
                    t &&
                      ((n.Library.CustomerAssetLookupControl = t),
                      t.removePreSearch(n.Library.CustomerFilterHandler),
                      !i &&
                        n.Library.ServiceAccount !== null &&
                        n.Library.ServiceAccount.length > 0 &&
                        n.Library.ServiceAccount[0] !== null &&
                        t &&
                        t.addPreSearch(n.Library.CustomerFilterHandler));
                  });
            })
            .catch(function (n) {
              Xrm.Navigation.openAlertDialog({ text: n.message });
            });
        }),
        (i.SetDefaultAccountValue = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_opportunityid.LogicalName
          );
          FieldOneSkyUtils.GetFormType(n.Library.FormContext) == FieldOneSkyUtils.FormType.Create && t != null
            ? FieldService.CrudApiSDK.retrieveRecord(
                t[0].id,
                EntityMetadata.Opportunity.EntityLogicalName,
                'parentaccountid',
                'parentaccountid($select=name,accountid)',
                function (t) {
                  t &&
                    t.parentaccountid &&
                    (FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName,
                      t.parentaccountid.accountid,
                      t.parentaccountid.name,
                      EntityMetadata.Account.EntityLogicalName
                    ),
                    (n.Library.ServiceAccount = t.parentaccountid.accountid),
                    FieldOneSkyUtils.Fields.FireOnChange(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
                    ));
                },
                function () {},
                i.FormContext
              )
            : n.Library.SetDefaultValuesFromServiceAccount();
        }),
        (i.SetDefaultValuesFromServiceAccount = function () {
          var t = n.Library.workOrderMetadata.GetServiceAccount(n.Library.FormContext),
            i,
            r;
          t != null &&
            ((i =
              'address1_name,address1_line1,address1_line2,address1_line3,address1_city,address1_stateorprovince,address1_postalcode,address1_country,msdyn_workorderinstructions,address1_latitude,address1_longitude'),
            (r =
              'msdyn_salestaxcode($select=msdyn_taxcodeid,msdyn_name),msdyn_serviceterritory($select=territoryid,name),msdyn_billingaccount_account($select=accountid,name)'),
            FieldService.CrudApiSDK.retrieveRecord(
              t[0].id,
              EntityMetadata.Account.EntityLogicalName,
              i,
              r,
              function (i) {
                if (i !== null) {
                  if (
                    (n.Library.CanAddressBePopulatedByFunctionalLocation() ||
                      n.Library.SetAddressValuesFromServiceAccount(i),
                    FieldOneSkyUtils.Fields.SetValue(
                      n.Library.FormContext,
                      'msdyn_instructions',
                      i.msdyn_workorderinstructions
                    ),
                    FieldService.CrudApiSDK.adjustLookupAttributeValue(i, 'msdyn_salestaxcode'),
                    i.msdyn_salestaxcode && i.msdyn_salestaxcode.msdyn_taxcodeid != null)
                  ) {
                    var r = {
                      Id: i.msdyn_salestaxcode.msdyn_taxcodeid,
                      Name: i.msdyn_salestaxcode.msdyn_name,
                      LogicalName: 'msdyn_taxcode',
                    };
                    FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      'msdyn_taxcode',
                      r.Id,
                      r.Name,
                      r.LogicalName
                    );
                    n.Library.SalesTaxCode = r;
                  } else
                    FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_taxcode', null),
                      (n.Library.SalesTaxCode = null);
                  FieldService.CrudApiSDK.adjustLookupAttributeValue(i, 'msdyn_billingaccount_account');
                  i.msdyn_billingaccount_account && i.msdyn_billingaccount_account.accountid != null
                    ? FieldOneSkyUtils.Fields.SetLookUpValue(
                        n.Library.FormContext,
                        'msdyn_billingaccount',
                        i.msdyn_billingaccount_account.accountid,
                        i.msdyn_billingaccount_account.name,
                        'account'
                      )
                    : FieldOneSkyUtils.Fields.SetLookUpValue(
                        n.Library.FormContext,
                        'msdyn_billingaccount',
                        t[0].id,
                        t[0].name,
                        t[0].typename
                      );
                  FieldOneSkyUtils.Fields.FireOnChange(n.Library.FormContext, 'msdyn_billingaccount');
                  n.Library.ServiceAccount = FieldOneSkyUtils.Fields.GetValue(
                    n.Library.FormContext,
                    n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
                  );
                  FieldService.CrudApiSDK.adjustLookupAttributeValue(i, 'msdyn_serviceterritory');
                  i.msdyn_serviceterritory && i.msdyn_serviceterritory.territoryid != null
                    ? ((n.Library.ServiceTerritorySetFromAccount = !0),
                      FieldOneSkyUtils.Fields.SetLookUpValue(
                        n.Library.FormContext,
                        'msdyn_serviceterritory',
                        i.msdyn_serviceterritory.territoryid,
                        i.msdyn_serviceterritory.name,
                        'territory'
                      ))
                    : FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_serviceterritory', null);
                  FieldOneSkyUtils.IsNotNullAndUndefined(i.msdyn_workhourtemplate) &&
                    FieldOneSkyUtils.IsNotNullAndUndefined(i.msdyn_workhourtemplate.msdyn_workhourtemplateid) &&
                    FieldOneSkyUtils.Fields.IsFormControlPresentForField(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_workhourtemplate.LogicalName
                    ) &&
                    !FieldOneSkyUtils.IsNotNullAndUndefined(
                      FieldOneSkyUtils.Fields.GetValue(
                        n.Library.FormContext,
                        n.Library.workOrderAttributes.msdyn_workhourtemplate.LogicalName
                      )
                    ) &&
                    (FieldService.CrudApiSDK.adjustLookupAttributeValue(
                      i,
                      n.Library.accountAttributes.msdyn_workhourtemplate.LogicalName
                    ),
                    FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_workhourtemplate.LogicalName,
                      i.msdyn_workhourtemplate.msdyn_workhourtemplateid,
                      i.msdyn_workhourtemplate.msdyn_name,
                      n.Library.workOrderAttributes.msdyn_workhourtemplate.LogicalName
                    ));
                }
              },
              FieldOneSkyUtils.ShowErrorMessage
            ));
        }),
        (i.SetFunctionalLocationFromCustomerAsset = function () {
          return __awaiter(this, void 0, void 0, function () {
            var i, t;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return ((i = FieldOneSkyUtils.Fields.GetValue(
                    n.Library.FormContext,
                    n.Library.workOrderAttributes.msdyn_customerasset.LogicalName
                  )),
                  !(i != null))
                    ? [3, 2]
                    : [4, this.AssetUtilsObj.getAssetFunctionalLocationUpTree(i[0].id)];
                case 1:
                  t = r.sent();
                  t &&
                    FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      n.Library.workOrderAttributes.msdyn_functionallocation.LogicalName,
                      t.msdyn_FunctionalLocation.msdyn_functionallocationid,
                      t.msdyn_FunctionalLocation.msdyn_name,
                      'msdyn_functionallocation'
                    );
                  r.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        }),
        (i.SetDefaultAddressFromServiceAccount = function () {
          var t = n.Library.workOrderMetadata.GetServiceAccount(n.Library.FormContext),
            i;
          t != null &&
            ((i =
              'address1_name, address1_line1, address1_line2, address1_line3, address1_city, address1_stateorprovince, address1_country, address1_postalcode, address1_latitude, address1_longitude'),
            FieldService.CrudApiSDK.retrieveRecord(
              t[0].id,
              EntityMetadata.Account.EntityLogicalName,
              i,
              null,
              function (t) {
                t !== null && n.Library.SetAddressValuesFromServiceAccount(t);
              },
              FieldOneSkyUtils.ShowErrorMessage
            ));
        }),
        (i.SetAddressValuesFromServiceAccount = function (t) {
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_addressname.LogicalName,
            t.address1_name
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address1.LogicalName,
            t.address1_line1
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address2.LogicalName,
            t.address1_line2
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address3.LogicalName,
            t.address1_line3
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_city.LogicalName,
            t.address1_city
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_stateorprovince.LogicalName,
            t.address1_stateorprovince
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_country.LogicalName,
            t.address1_country
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_postalcode.LogicalName,
            t.address1_postalcode
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_latitude.LogicalName,
            t.address1_latitude
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_longitude.LogicalName,
            t.address1_longitude
          );
        }),
        (i.IsNoAddressInFunctionalLocation = function (n) {
          return (
            !n.msdyn_addressname &&
            !n.msdyn_address1 &&
            !n.msdyn_address2 &&
            !n.msdyn_address3 &&
            !n.msdyn_city &&
            !n.msdyn_stateorprovince &&
            !n.msdyn_country &&
            !n.msdyn_postalcode &&
            !n.msdyn_latitude &&
            !n.msdyn_longitude
          );
        }),
        (i.SetAddress = function (n) {
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_addressname.LogicalName,
            n.msdyn_addressname
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_address1.LogicalName,
            n.msdyn_address1
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_address2.LogicalName,
            n.msdyn_address2
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_address3.LogicalName,
            n.msdyn_address3
          );
          FieldOneSkyUtils.Fields.SetValue(i.FormContext, i.workOrderAttributes.msdyn_city.LogicalName, n.msdyn_city);
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_stateorprovince.LogicalName,
            n.msdyn_stateorprovince
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_country.LogicalName,
            n.msdyn_country
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_postalcode.LogicalName,
            n.msdyn_postalcode
          );
        }),
        (i.SetAddressGeocodes = function (n) {
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_latitude.LogicalName,
            n.msdyn_latitude
          );
          FieldOneSkyUtils.Fields.SetValue(
            i.FormContext,
            i.workOrderAttributes.msdyn_longitude.LogicalName,
            n.msdyn_longitude
          );
        }),
        (i.SetAddressValuesFromFunctionalLocation = function (n) {
          return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return n ? [4, this.FunctionalLocationUtilsObj.getFunctionalLocationAddress(n)] : [3, 2];
                case 1:
                  if (((t = r.sent()), t)) return i.SetAddress(t), i.SetAddressGeocodes(t), [2, !0];
                  r.label = 2;
                case 2:
                  return [2, !1];
              }
            });
          });
        }),
        (i.IsWorkOrderAddressEmpty = function () {
          return (
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_addressname.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_address1.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_address2.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_address3.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_city.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_stateorprovince.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_country.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_postalcode.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_latitude.LogicalName
            ) &&
            !FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_longitude.LogicalName
            )
          );
        }),
        (i.ClearAddress = function () {
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_addressname.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address1.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address2.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_address3.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_city.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_stateorprovince.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_country.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_postalcode.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_latitude.LogicalName,
            null
          );
          FieldOneSkyUtils.Fields.SetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_longitude.LogicalName,
            null
          );
        }),
        (i.SetTaxable = function () {
          return new Promise(function (t, r) {
            var o = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_billingaccount');
            if (o) {
              var f = '',
                e = '',
                u = '';
              FieldOneSkyUtils.isMobileClientOffline()
                ? ((f = 'msdyn_taxexempt, transactioncurrencyid'), (e = null), (u = '_transactioncurrencyid_value'))
                : ((f = 'msdyn_taxexempt'),
                  (e = 'transactioncurrencyid($select=transactioncurrencyid,currencyname)'),
                  (u = 'transactioncurrencyid'));
              FieldService.CrudApiSDK.retrieveRecord(
                o[0].id,
                'account',
                f,
                e,
                function (f) {
                  var e, o, s;
                  FieldService.CrudApiSDK.adjustLookupAttributeValue(f, u);
                  FieldService.CrudApiSDK.adjustBooleanAttributeValue(f, 'msdyn_taxexempt');
                  f.msdyn_taxexempt == null && (f.msdyn_taxexempt = !1);
                  e = null;
                  o = '';
                  FieldOneSkyUtils.isMobileClientOffline()
                    ? ((e = f[u]), (o = i.OfflineCurrenyLookupText))
                    : ((e = f.transactioncurrencyid && f.transactioncurrencyid.transactioncurrencyid),
                      (o = f.transactioncurrencyid.currencyname));
                  e &&
                    FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      'transactioncurrencyid',
                      e,
                      o,
                      'transactioncurrency'
                    );
                  s = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_workordertype');
                  s && f.msdyn_taxexempt == !1
                    ? FieldService.CrudApiSDK.retrieveRecord(
                        s[0].id,
                        'msdyn_workordertype',
                        'msdyn_taxable',
                        null,
                        function (i) {
                          FieldService.CrudApiSDK.adjustBooleanAttributeValue(i, 'msdyn_taxable');
                          n.Library.SetTaxCode(i.msdyn_taxable);
                          t(null);
                        },
                        function (n) {
                          Xrm.Navigation.openAlertDialog({ text: n.message });
                          r(n.message);
                        },
                        i.FormContext
                      )
                    : (n.Library.SetTaxCode(!1), t(null));
                },
                function (n) {
                  Xrm.Navigation.openAlertDialog({ text: n.message });
                  r(n.message);
                },
                i.FormContext
              );
            } else n.Library.SetTaxCode(!1), t(null);
          });
        }),
        (i.SetTaxCode = function (t) {
          t == !0
            ? (FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxable.LogicalName,
                !0
              ),
              FieldOneSkyUtils.Fields.SetRequired(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxcode.LogicalName,
                !0
              ),
              FieldOneSkyUtils.Visibility.SetControlVisibility(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxcode.LogicalName,
                !0
              ),
              n.Library.workOrderMetadata.SetSalesTaxCodeField(n.Library.FormContext, n.Library.SalesTaxCode))
            : (FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxable.LogicalName,
                !1
              ),
              FieldOneSkyUtils.Fields.SetRequired(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxcode.LogicalName,
                !1
              ),
              FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxcode.LogicalName,
                null
              ),
              FieldOneSkyUtils.Visibility.SetControlVisibility(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_taxcode.LogicalName,
                !1
              ));
        }),
        (i.LoadPrimaryIncident = function () {
          var t = n.Library,
            r = FieldOneSkyUtils.CurrentEntity.GetIdWithoutBracketsOrDefault(n.Library.FormContext);
          FieldOneSkyUtils.isMobileClientOffline() &&
            r &&
            ((t.PrimaryIncidentOld[t.PrimaryIncidentKey] = null),
            (t.PrimaryIncidentOld[t.IsError] = !0),
            t.WorkorderUtilsObj.getPrimaryIncidentForWorkOrder(i.FormContext, r).then(
              function (i) {
                i && (i[n.Library.workOrderIncidentAttributes.msdyn_workorder.LogicalName] = r.toLowerCase());
                t.PrimaryIncidentOld[t.IsError] = !1;
                t.PrimaryIncidentOld[t.PrimaryIncidentKey] = i;
              },
              function () {
                t.PrimaryIncidentOld[t.IsError] = !0;
                FieldOneSkyUtils.Form.ShowNotificationAutoHide(
                  n.Library.FormContext,
                  'WorkOrder_ErrorRetrievingPrimaryIncident',
                  3e4
                );
              }
            ));
        }),
        (i.SetIncidentFields = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_primaryincidenttype');
          t &&
            FieldService.CrudApiSDK.retrieveRecord(
              t[0].id,
              n.Library.workOrderIncidentAttributes.msdyn_incidenttype.LogicalName,
              'msdyn_estimatedduration,msdyn_description,msdyn_defaultworkordertype',
              'msdyn_defaultworkordertype($select=msdyn_workordertypeid,msdyn_name)',
              function (t) {
                if (
                  (FieldOneSkyUtils.Fields.SetValue(
                    n.Library.FormContext,
                    'msdyn_primaryincidentestimatedduration',
                    t.msdyn_estimatedduration
                  ),
                  FieldOneSkyUtils.Fields.SetValue(
                    n.Library.FormContext,
                    'msdyn_primaryincidentdescription',
                    t.msdyn_description
                  ),
                  n.Library.SetEstimatedDurationField(),
                  n.Library.SetRequiredIncidentType(),
                  n.Library.workOrderMetadata.GetWorkOrderTypeField(n.Library.FormContext) == null &&
                    (FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_defaultworkordertype'),
                    t.msdyn_defaultworkordertype != null && t.msdyn_defaultworkordertype.msdyn_workordertypeid != null))
                ) {
                  var i = {
                    Id: t.msdyn_defaultworkordertype.msdyn_workordertypeid,
                    Name: t.msdyn_defaultworkordertype.msdyn_name,
                    LogicalName: n.Library.workOrderAttributes.msdyn_workordertype.LogicalName,
                  };
                  n.Library.workOrderMetadata.SetWorkOrderTypeField(n.Library.FormContext, i);
                  FieldOneSkyUtils.Fields.FireOnChange(
                    n.Library.FormContext,
                    n.Library.workOrderAttributes.msdyn_workordertype.LogicalName
                  );
                }
              },
              function (n) {
                Xrm.Navigation.openAlertDialog({ text: n.message });
              },
              i.FormContext
            );
        }),
        (i.SetOverhead = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_workordertype');
          t
            ? FieldService.CrudApiSDK.retrieveRecord(
                t[0].id,
                'msdyn_workordertype',
                'msdyn_pricelist',
                'msdyn_pricelist($select=pricelevelid,name)',
                function (t) {
                  var i = null;
                  FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'msdyn_pricelist');
                  t.msdyn_pricelist != null &&
                    t.msdyn_pricelist.pricelevelid != null &&
                    (i = {
                      Id: t.msdyn_pricelist.pricelevelid,
                      Name: t.msdyn_pricelist.name,
                      LogicalName: 'pricelevel',
                    });
                  n.Library.PriceListWorkOrderType = i;
                  n.Library.PriceListBillingAccount == null
                    ? i && i.Id != null
                      ? (FieldOneSkyUtils.Fields.SetLookUpValue(
                          n.Library.FormContext,
                          'msdyn_pricelist',
                          i.Id,
                          i.Name,
                          'pricelevel'
                        ),
                        n.Library.CurrencyValidation())
                      : FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_pricelist') != null &&
                        FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_pricelist', null)
                    : n.Library.PriceListBillingAccount != null
                    ? (FieldOneSkyUtils.Fields.SetLookUpValue(
                        n.Library.FormContext,
                        'msdyn_pricelist',
                        n.Library.PriceListBillingAccount.Id,
                        n.Library.PriceListBillingAccount.Name,
                        'pricelevel'
                      ),
                      n.Library.CurrencyValidation())
                    : FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_pricelist') != null &&
                      FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_pricelist', null);
                },
                FieldOneSkyUtils.ShowErrorMessage
              )
            : n.Library.IsPriceListFromBillingAccount && (n.Library.PriceListWorkOrderType = null);
        }),
        (i.CurrencyValidation = function () {
          var r = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'transactioncurrencyid'),
            e = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_billingaccount'),
            o = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_pricelist');
          if (e != null) {
            var u = '',
              f = '',
              t = '';
            FieldOneSkyUtils.isMobileClientOffline()
              ? ((u = 'accountid, transactioncurrencyid'), (f = null), (t = '_transactioncurrencyid_value'))
              : ((u = 'accountid'),
                (f = 'transactioncurrencyid($select=transactioncurrencyid,currencyname)'),
                (t = 'transactioncurrencyid'));
            FieldService.CrudApiSDK.retrieveRecord(
              e[0].id,
              'account',
              u,
              f,
              function (u) {
                var f, e, s, h, c;
                if (
                  (FieldOneSkyUtils.Form.SetNotification(
                    n.Library.FormContext,
                    'WorkOrder_DifferentCurrencyPriceList',
                    !1
                  ),
                  FieldOneSkyUtils.Form.SetNotification(
                    n.Library.FormContext,
                    'WorkOrder_DifferentCurrencyPriceListBillingAccount',
                    !1
                  ),
                  u)
                ) {
                  if (
                    (FieldService.CrudApiSDK.adjustLookupAttributeValue(u, t),
                    (f = null),
                    (e = ''),
                    FieldOneSkyUtils.isMobileClientOffline()
                      ? ((f = u[t]), (e = i.OfflineCurrenyLookupText))
                      : ((f = u.transactioncurrencyid && u.transactioncurrencyid.transactioncurrencyid),
                        (e = u.transactioncurrencyid && u.transactioncurrencyid.currencyname)),
                    (s = void 0),
                    f && (s = { Id: f, Name: e, LogicalName: 'transactioncurrency' }),
                    r != null && f && f.toLowerCase() != r[0].id.toLowerCase().replace(/{/g, '').replace(/}/g, ''))
                  ) {
                    n.Library.workOrderMetadata.SetCurrencyField(n.Library.FormContext, s);
                    return;
                  }
                  !r && f && n.Library.workOrderMetadata.SetCurrencyField(n.Library.FormContext, s);
                  o != null &&
                    ((h = FieldOneSkyUtils.GetODataAttribute(
                      EntityMetadata.PriceLevel.EntityLogicalName,
                      EntityMetadata.PriceLevel.attributes.transactioncurrencyid.LogicalName,
                      !0
                    )),
                    (c = 'pricelevelid, ' + h),
                    FieldService.CrudApiSDK.retrieveRecord(
                      o[0].id,
                      'pricelevel',
                      c,
                      null,
                      function (i) {
                        if (i) {
                          var u = null;
                          if (
                            ((u = FieldOneSkyUtils.isMobileClientOffline() ? i[t] : i[h]),
                            FieldService.CrudApiSDK.adjustLookupAttributeValue(i, t),
                            r != null &&
                              u &&
                              u.toLowerCase() != r[0].id.toLowerCase().replace('{', '').replace('}', ''))
                          ) {
                            FieldOneSkyUtils.Form.SetNotification(
                              n.Library.FormContext,
                              'WorkOrder_DifferentCurrencyPriceList',
                              !0
                            );
                            return;
                          }
                          if (u != f) {
                            FieldOneSkyUtils.Form.SetNotification(
                              n.Library.FormContext,
                              'WorkOrder_DifferentCurrencyPriceListBillingAccount',
                              !0
                            );
                            return;
                          }
                        }
                      },
                      FieldOneSkyUtils.ShowErrorMessage
                    ));
                }
              },
              FieldOneSkyUtils.ShowErrorMessage
            );
          }
        }),
        (i.SetBillingAccount = function () {
          return new Promise(function (t, r) {
            var u = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
            );
            u != null
              ? FieldService.CrudApiSDK.retrieveRecord(
                  u[0].id,
                  EntityMetadata.Account.EntityLogicalName,
                  EntityMetadata.Account.EntityLogicalName,
                  'msdyn_billingaccount_account($select=accountid,name)',
                  function (i) {
                    FieldService.CrudApiSDK.adjustLookupAttributeValue(i, 'msdyn_billingaccount_account');
                    i.msdyn_billingaccount_account != null && i.msdyn_billingaccount_account.accountid != null
                      ? FieldOneSkyUtils.Fields.SetLookUpValue(
                          n.Library.FormContext,
                          n.Library.workOrderAttributes.msdyn_billingaccount.LogicalName,
                          i.msdyn_billingaccount_account.accountid,
                          i.msdyn_billingaccount_account.name,
                          'account'
                        )
                      : FieldOneSkyUtils.Fields.SetLookUpValue(
                          n.Library.FormContext,
                          n.Library.workOrderAttributes.msdyn_billingaccount.LogicalName,
                          u[0].id,
                          u[0].name,
                          u[0].typename
                        );
                    n.Library.SetTaxable().then(
                      function () {
                        t(null);
                      },
                      function (n) {
                        r(n);
                      }
                    );
                  },
                  function (n) {
                    Xrm.Navigation.openAlertDialog({ text: n.message });
                    r(n.message);
                  },
                  i.FormContext
                )
              : t(null);
          });
        }),
        (i.ToLookupObject = function (n) {
          var t = {};
          return (t.Id = n[0].id), (t.Name = n[0].name), (t.LogicalName = n[0].typename), t;
        }),
        (i.OnSave = function (t) {
          var s = FieldOneSkyUtils.Fields.GetValue(n.Library.FormContext, 'msdyn_primaryincidenttype'),
            u,
            f,
            i,
            e,
            r,
            o;
          if (
            (s && FieldOneSkyUtils.GetFormType(n.Library.FormContext) == FieldOneSkyUtils.FormType.Create
              ? FieldOneSkyUtils.Form.SetInfoNotification(
                  n.Library.FormContext,
                  'WorkOrder_ExecutingPrimaryIncidentWorkflow'
                )
              : FieldOneSkyUtils.Form.ClearNotification(
                  n.Library.FormContext,
                  'WorkOrder_ExecutingPrimaryIncidentWorkflow'
                ),
            (u = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_datewindowstart.LogicalName
            )),
            (f = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName
            )),
            u > f &&
              (FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_datewindowstart.LogicalName,
                n.Library.DateWindowStart
              ),
              FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName,
                n.Library.DateWindowEnd
              ),
              FieldOneSkyUtils.Form.ClearNotification(n.Library.FormContext, 'WorkOrder_EndDateLaterThanStartDate')),
            (i = !0),
            (e = [n.Library.workOrderAttributes.msdyn_customerasset.LogicalName]),
            FieldOneSkyUtils.CheckCacheAndRecacheInvalidFieldCaches(t, n.Library.FieldCacheObject, e),
            n.Library.ResetErrorNotifications(),
            n.Library.ResetPostSaveListeners(),
            n.Library.ResetPreSaveStatus(),
            n.Library.StorePreSaveStatus(),
            (r = n.Library.ErrorNotifications),
            (o = t.getEventArgs()),
            FieldOneSkyUtils.isMobileClientOffline() &&
              !o.isDefaultPrevented() &&
              ((i = n.Library.ValidateCustomerAssetAccount(r) && i),
              (i = n.Library.ValidatePrimaryIncidentRequired(r) && i),
              (i = n.Library.ValidateIfPrimaryIncidentLoaded(r) && i),
              (i = n.Library.ValidatePrimaryIncidentTypeCannotBeCleared(r) && i)),
            (i = n.Library.ValidateTimePromised(r) && i),
            FieldOneSkyUtils.Form.SetErrorNotifications(n.Library.FormContext, r),
            !i)
          ) {
            t.getEventArgs().preventDefault();
            return;
          }
          FieldOneSkyUtils.isMobileClientOffline() &&
            FieldOneSkyUtils.Form.AddOnLoadDataListener(n.Library.FormContext, n.Library.GetPostSaveListener());
        }),
        (i.ResetPreSaveStatus = function () {
          n.Library.PreSaveStatus = {};
        }),
        (i.StorePreSaveStatus = function () {
          var t = n.Library.workOrderAttributes,
            i = n.Library;
          i.PreSaveStatus[n.Library.IsPrimaryIncidentDirty] = i.FieldsDirty([
            t.msdyn_primaryincidenttype.LogicalName,
            t.msdyn_primaryincidentdescription.LogicalName,
            t.msdyn_primaryincidentestimatedduration.LogicalName,
            t.msdyn_customerasset.LogicalName,
          ]);
        }),
        (i.GetPostSaveListener = function () {
          return (
            n.Library.ResetPostSaveListeners(),
            FieldOneSkyUtils.GetFormType(n.Library.FormContext) == FieldOneSkyUtils.FormType.Create
              ? n.Library.OnPostSaveCreate
              : n.Library.OnPostSaveUpdate
          );
        }),
        (i.ResetPostSaveListeners = function () {
          FieldOneSkyUtils.Form.RemoveOnLoadDataListener(n.Library.FormContext, n.Library.OnPostSaveCreate);
          FieldOneSkyUtils.Form.RemoveOnLoadDataListener(n.Library.FormContext, n.Library.OnPostSaveUpdate);
        }),
        (i.OnPostSaveCreate = function () {
          n.Library.ChangePrimaryIncidentPostSave();
        }),
        (i.OnPostSaveUpdate = function () {
          n.Library.ChangePrimaryIncidentPostSave();
        }),
        (i.GetCurrentPrimaryIncident = function () {
          var s = n.Library,
            i = n.Library.workOrderIncidentAttributes,
            r = n.Library.workOrderAttributes,
            f = FieldOneSkyUtils,
            u = f.Fields,
            t = {},
            e = u.GetValue(n.Library.FormContext, r.msdyn_primaryincidenttype.LogicalName)
              ? u.GetValue(n.Library.FormContext, r.msdyn_primaryincidenttype.LogicalName)[0]
              : null,
            o = u.GetValue(n.Library.FormContext, r.msdyn_customerasset.LogicalName)
              ? f
                  .getGuidWithoutBrackets(u.GetValue(n.Library.FormContext, r.msdyn_customerasset.LogicalName)[0].id)
                  .toLowerCase()
              : null;
          return (
            (t[i.msdyn_incidenttype.LogicalName] = e ? f.getGuidWithoutBrackets(e.id).toLowerCase() : null),
            (t[i.msdyn_name.LogicalName] = e ? e.name : null),
            (t[i.msdyn_estimatedduration.LogicalName] = u.GetValue(
              n.Library.FormContext,
              r.msdyn_primaryincidentestimatedduration.LogicalName
            )),
            (t[i.msdyn_description.LogicalName] = u.GetValue(
              n.Library.FormContext,
              r.msdyn_primaryincidentdescription.LogicalName
            )),
            (t[i.msdyn_customerasset.LogicalName] = o),
            (t[i.msdyn_workorder.LogicalName] = f
              .getGuidWithoutBrackets(f.CurrentEntity.GetId(n.Library.FormContext))
              .toLowerCase()),
            t
          );
        }),
        (i.SetStringFieldToNullIfEmpty = function (n, t) {
          n && t && typeof n[t] == 'string' && n[t] == '' && (n[t] = null);
        }),
        (i.FilterObject = function (n, t) {
          var f = {},
            r,
            u,
            i;
          if (t && n)
            for (r = 0, u = Object.keys(t); r < u.length; r++)
              (i = u[r]), n.hasOwnProperty(i) && n[i] != t[i] && (f[i] = n[i]);
          return f;
        }),
        (i.ChangePrimaryIncidentOnUpdate = function (t, i, r, u) {
          var e = n.Library,
            f = n.Library.workOrderIncidentAttributes,
            c = FieldService.CrudApiSDK,
            o = FieldOneSkyUtils,
            s = null,
            h = [
              f.msdyn_incidenttype.LogicalName,
              f.msdyn_customerasset.LogicalName,
              f.msdyn_estimatedduration.LogicalName,
              f.msdyn_description.LogicalName,
            ];
          if (
            (e.SetStringFieldToNullIfEmpty(t, f.msdyn_description.LogicalName),
            e.SetStringFieldToNullIfEmpty(i, f.msdyn_description.LogicalName),
            o.AreObjectEqualForKeys(t, i, h))
          ) {
            r && r();
            return;
          }
          if (o.AreObjectEqualForKeys(t, {}, h)) {
            r && r();
            return;
          }
          s = e.FilterObject(t, i);
          c.updateRecord(
            i[f.msdyn_workorderincidentid.LogicalName],
            e.ToOdataIncident(s),
            EntityMetadata.msdyn_workorderincident.EntityLogicalName,
            r,
            u
          );
        }),
        (i.ChangePrimaryIncidentOnCreate = function (t, i, r) {
          var f = n.Library,
            u = n.Library.workOrderIncidentAttributes,
            e = FieldService.CrudApiSDK;
          t && t[u.msdyn_incidenttype.LogicalName]
            ? ((t[u.msdyn_isprimary.LogicalName] = !0),
              e.createRecord(f.ToOdataIncident(t), EntityMetadata.msdyn_workorderincident.EntityLogicalName, i, r))
            : r && r(new ReferenceError());
        }),
        (i.FieldsDirty = function (t, i) {
          var r, u, f, o, e;
          if (!t || t.length == 0) return !1;
          for (r = !0, u = 0, f = t; u < f.length; u++) {
            if (((o = f[u]), (e = FieldOneSkyUtils.Fields.IsDirty(n.Library.FormContext, o)), e && !i)) return !0;
            r = r && e;
          }
          return r;
        }),
        (i.ChangePrimaryIncidentPostSave = function () {
          if (!1 && FieldOneSkyUtils.isMobileClientOffline()) {
            var t = n.Library,
              e = n.Library.workOrderAttributes,
              f = n.Library.workOrderIncidentAttributes;
            if (t.PreSaveStatus[n.Library.IsPrimaryIncidentDirty]) {
              var i = t.GetCurrentPrimaryIncident(),
                r = function (n) {
                  t.PrimaryIncidentOld[t.IsError] = !1;
                  t.PrimaryIncidentOld[t.PrimaryIncidentKey] = i;
                  n &&
                    n.id &&
                    (i[f.msdyn_workorderincidentid.LogicalName] = FieldOneSkyUtils.getGuidWithoutBrackets(
                      n.id
                    ).toLowerCase());
                },
                u = function (n) {
                  FieldOneSkyUtils.LogMessageInConsole(n);
                };
              t.PrimaryIncidentOld[t.PrimaryIncidentKey]
                ? t.ChangePrimaryIncidentOnUpdate(i, t.PrimaryIncidentOld[t.PrimaryIncidentKey], r, u)
                : t.ChangePrimaryIncidentOnCreate(i, r, u);
            }
          }
        }),
        (i.ToOdataIncident = function (t) {
          var f = n.Library,
            i = n.Library.workOrderIncidentAttributes,
            u = f.GetOdataValue,
            r = {};
          return t
            ? (t.hasOwnProperty(i.msdyn_incidenttype.LogicalName) &&
                (r[i.msdyn_incidenttype.LogicalName] = t[i.msdyn_incidenttype.LogicalName]
                  ? u(t[i.msdyn_incidenttype.LogicalName], EntityMetadata.msdyn_incidenttype.EntityLogicalName)
                  : null),
              t[i.msdyn_workorder.LogicalName] &&
                (r[i.msdyn_workorder.LogicalName] = u(t[i.msdyn_workorder.LogicalName], i.msdyn_workorder.LogicalName)),
              t[i.msdyn_customerasset.LogicalName] &&
                (r[i.msdyn_customerasset.LogicalName] = u(
                  t[i.msdyn_customerasset.LogicalName],
                  i.msdyn_customerasset.LogicalName
                )),
              f.CopyKeys(t, r, [
                i.msdyn_name.LogicalName,
                i.msdyn_description.LogicalName,
                i.msdyn_estimatedduration.LogicalName,
                i.msdyn_isprimary.LogicalName,
              ]),
              r)
            : r;
        }),
        (i.CopyKeys = function (n, t, i) {
          var r, f, u;
          if (i && n && t) for (r = 0, f = i; r < f.length; r++) (u = f[r]), n[u] && (t[u] = n[u]);
        }),
        (i.GetOdataValue = function (n, t) {
          return { id: n, logicalname: t };
        }),
        (i.SetPriceList = function () {
          var t = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_billingaccount.LogicalName
          );
          t != null
            ? FieldService.CrudApiSDK.retrieveRecord(
                t[0].id,
                EntityMetadata.Account.EntityLogicalName,
                'accountid',
                'defaultpricelevelid($select=pricelevelid,name)',
                function (t) {
                  if (
                    (FieldService.CrudApiSDK.adjustLookupAttributeValue(t, 'defaultpricelevelid'),
                    t && t.defaultpricelevelid != null && t.defaultpricelevelid.pricelevelid != null)
                  ) {
                    var i = {
                      Id: t.defaultpricelevelid.pricelevelid,
                      Name: t.defaultpricelevelid.name,
                      LogicalName: 'pricelevel',
                    };
                    n.Library.PriceListBillingAccount = i;
                    FieldOneSkyUtils.Fields.SetLookUpValue(
                      n.Library.FormContext,
                      'msdyn_pricelist',
                      i.Id,
                      i.Name,
                      i.LogicalName
                    );
                  } else
                    n.Library.IsPriceListFromBillingAccount
                      ? n.Library.UpdatePriceListBasedOnWOTIfNull()
                      : FieldOneSkyUtils.IsNullOrUndefined(n.Library.PriceListWorkOrderType) ||
                        FieldOneSkyUtils.IsNullOrUndefined(n.Library.PriceListWorkOrderType.Id) ||
                        ((n.Library.PriceListBillingAccount = null),
                        FieldOneSkyUtils.Fields.SetLookUpValue(
                          n.Library.FormContext,
                          'msdyn_pricelist',
                          n.Library.PriceListWorkOrderType.Id,
                          n.Library.PriceListWorkOrderType.Name,
                          n.Library.PriceListWorkOrderType.LogicalName
                        ));
                },
                FieldOneSkyUtils.ShowErrorMessage
              )
            : n.Library.IsPriceListFromBillingAccount && n.Library.UpdatePriceListBasedOnWOTIfNull();
        }),
        (i.UpdatePriceListBasedOnWOTIfNull = function () {
          n.Library.PriceListBillingAccount = null;
          FieldOneSkyUtils.Fields.SetValue(n.Library.FormContext, 'msdyn_pricelist', null);
          var t = FieldOneSkyUtils.Fields.GetValue(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_pricelist.LogicalName
          );
          t == null && n.Library.SetOverhead();
        }),
        (i.DatesChanged = function () {
          FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'WorkOrder_EndDateLaterThanStartDate', !1);
          var t = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_datewindowstart.LogicalName
            ),
            i = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName
            );
          t && i && t > i
            ? (FieldOneSkyUtils.Form.SetNotification(n.Library.FormContext, 'WorkOrder_EndDateLaterThanStartDate', !0),
              FieldOneSkyUtils.Fields.SetValue(
                n.Library.FormContext,
                n.Library.workOrderAttributes.msdyn_datewindowend.LogicalName,
                n.Library.DateWindowEnd
              ))
            : ((n.Library.DateWindowStart = t), (n.Library.DateWindowEnd = i));
        }),
        (i.ValidateTimePromised = function (t) {
          var r = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_timefrompromised.LogicalName
            ),
            u = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_timetopromised.LogicalName
            ),
            i = !1;
          return r && u && r >= u && ((i = !0), (t.WorkOrder_TimeToPromisedLaterThanTimeFromPromised = i)), !i;
        }),
        (i.ValidateCustomerAssetAccount = function (t) {
          if (FieldOneSkyUtils.WorkOrderUtils.DisableCustomerAssetValidation) return !0;
          var i = n.Library.FieldCacheObject.getLookupRecord(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_customerasset.LogicalName
            ),
            u = FieldOneSkyUtils.Fields.GetValue(
              n.Library.FormContext,
              n.Library.workOrderAttributes.msdyn_serviceaccount.LogicalName
            ),
            r = !1;
          return (
            FieldService.CrudApiSDK.adjustLookupAttributeValue(
              i,
              EntityMetadata.CustomerAsset.attributes.msdyn_account.LogicalName
            ),
            !i ||
              (i.msdyn_account && FieldOneSkyUtils.IsEqualGUID(i.msdyn_account.accountid, u[0].id)) ||
              ((r = !0), (t.WorkOrder_CustomerAsset = r)),
            !r
          );
        }),
        (i.ValidatePrimaryIncidentRequired = function () {
          var r = !1,
            t = FieldOneSkyUtils.Fields.GetValue,
            u = n.Library,
            i = n.Library.workOrderAttributes;
          return (
            !t(n.Library.FormContext, i.msdyn_primaryincidenttype.LogicalName) &&
              (t(n.Library.FormContext, i.msdyn_primaryincidentestimatedduration.LogicalName) ||
                t(n.Library.FormContext, i.msdyn_primaryincidentdescription.LogicalName) ||
                t(n.Library.FormContext, i.msdyn_customerasset.LogicalName)) &&
              ((r = !0), (u.ErrorNotifications.WorkOrder_IncidentTypeIsRequired = !0)),
            !r
          );
        }),
        (i.ValidateIfPrimaryIncidentLoaded = function () {
          var i = !1,
            r = FieldOneSkyUtils.Fields,
            t = n.Library;
          return (
            t.PreSaveStatus[t.IsPrimaryIncidentDirty] &&
              t.PrimaryIncidentOld[t.IsError] &&
              ((i = !0), (t.ErrorNotifications.WorkOrder_ErrorRetrievingPrimaryIncident = !0)),
            !i
          );
        }),
        (i.ValidatePrimaryIncidentTypeCannotBeCleared = function () {
          var t = !1,
            r = FieldOneSkyUtils.Fields,
            i = n.Library;
          return (
            FieldOneSkyUtils.GetFormType(n.Library.FormContext) != FieldOneSkyUtils.FormType.Create &&
              i.InitialPrimaryIncidentType != null &&
              r.GetValue(n.Library.FormContext, n.Library.workOrderAttributes.msdyn_primaryincidenttype.LogicalName) ==
                null &&
              ((t = !0), (i.ErrorNotifications.WorkOrder_PrimaryIncidentTypeCannotBeCleared = !0)),
            !t
          );
        }),
        (i.cacheCustomerAsset = function () {
          n.Library.FieldCacheObject.cacheLookupField(
            n.Library.FormContext,
            n.Library.workOrderAttributes.msdyn_customerasset.LogicalName,
            n.Library.QuerySelectAttributes[n.Library.workOrderAttributes.msdyn_customerasset.LogicalName],
            n.Library.QueryExpandAttributes[n.Library.workOrderAttributes.msdyn_customerasset.LogicalName]
          );
        }),
        (i.allowExecutingLogic = function (n) {
          var r = !0,
            u,
            f;
          if (i.FormContext) {
            u = i.isWorkOrderNotesFormComponent();
            f = i.isWorkOrderServiceFormComponent();
            switch (n) {
              case t.DoGeocoding:
                r = !(u || f);
            }
          }
          return r;
        }),
        (i.isWorkOrderNotesFormComponent = function () {
          return (
            i.FormContext &&
            FieldOneSkyUtils.Form.GetCurrentId(i.FormContext) ==
              FieldOneSkyUtils.Constants.WorkOrderFormComponentFormIds.Notes
          );
        }),
        (i.isWorkOrderServiceFormComponent = function () {
          return (
            i.FormContext &&
            FieldOneSkyUtils.Form.GetCurrentId(i.FormContext) ==
              FieldOneSkyUtils.Constants.WorkOrderFormComponentFormIds.Service
          );
        }),
        (i.AddDefaultViewToSubStatusLookup = function (n) {
          var t = FieldOneSkyUtils.Guid.NewGuid(),
            i = 'msdyn_workordersubstatus',
            r = !0,
            u =
              '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="msdyn_workordersubstatus"><attribute name="msdyn_workordersubstatusid"/><attribute name="msdyn_name"/><attribute name="statuscode"/><attribute name="msdyn_systemstatus" width="150" /><attribute name="createdon"/><order attribute="msdyn_name" descending="false"/></entity></fetch>',
            f =
              '<grid name="" jump="msdyn_name" icon="1" select="0" preview="0"><row name="msdyn_workordersubstatus" id="msdyn_workordersubstatusid"><cell name="msdyn_name" width="200" /><cell name="statuscode" width="150" /><cell name="msdyn_systemstatus" width="150" /><cell name="createdon" width="125" /></row></grid>';
          Localization.getLocalizationStringAsync('LookupViewName_WorkOrderSubStatus').then(function (e) {
            n.addCustomView(t, i, e, u, f, r);
          });
        }),
        (i.GetSubstatusFilter = function (t) {
          var i = new Set(),
            r;
          switch (t) {
            case 69097e4:
              i.add(69097e4);
              i.add(690970003);
              i.add(690970004);
              i.add(690970005);
              break;
            case 690970002:
              i.add(690970002);
              i.add(690970005);
              break;
            case 690970005:
              i.add(690970005);
              n.Library.ToUnscheduled() || i.add(69097e4);
              n.Library.ToScheduled() || i.add(690970001);
              n.Library.ToInProgress() || i.add(690970002);
              n.Library.ToCompleted() || i.add(690970003);
              n.Library.ToCanceledPosted() || i.add(690970004);
              break;
            case 690970003:
            case 690970004:
              i.add(690970003);
              i.add(690970004);
              i.add(690970005);
              break;
            default:
              i.add(t);
              i.add(690970003);
              i.add(690970004);
              i.add(690970005);
          }
          return (
            (r = '<filter type="and"><condition attribute="msdyn_systemstatus" operator="in">'),
            i.forEach(function (n) {
              return (r += '<value>' + n + '</value>');
            }),
            (r += '</condition></filter>')
          );
        }),
        (i.IsWorkOrderMetricsFieldsReadonly = function () {
          n.Library.IsFirstArrivedOnFieldReadOnly = FieldOneSkyUtils.Fields.GetDisabled(
            this.FormContext,
            EntityMetadata.msdyn_workorder.attributes.msdyn_firstarrivedon.LogicalName
          );
          n.Library.IsCompletedOnFieldReadOnly = FieldOneSkyUtils.Fields.GetDisabled(
            this.FormContext,
            EntityMetadata.msdyn_workorder.attributes.msdyn_completedon.LogicalName
          );
        }),
        (i.MakeWorkOrderMetricsFieldsReadOnly = function () {
          if (
            !FieldOneSkyUtils.isMobileClientOffline() &&
            (!n.Library.IsFirstArrivedOnFieldReadOnly || !n.Library.IsCompletedOnFieldReadOnly)
          ) {
            var t = FieldOneSkyUtils.CurrentEntity.GetIdWithoutBracketsOrDefault(n.Library.FormContext),
              i = { workOrderId: t };
            FieldOneSkyUtils.SystemActions.ExecuteAsync(
              FieldOneSkyUtils.SystemJobType.WorkOrderMetrics_SetFieldsReadonly,
              JSON.stringify(i),
              function (t) {
                if (t) {
                  var i = JSON.parse(t.OutputParameter);
                  n.Library.MakeFirstArrivedOnFieldReadOnly(i[0]);
                  n.Library.MakeCompletedOnFieldReadOnly(i[1]);
                }
              },
              null,
              function (t) {
                return n.Library.LogErrorMessage(t.ExceptionMessage);
              },
              'Set Work Order Metrics Fields Read Only'
            );
          }
        }),
        (i.MakeFirstArrivedOnFieldReadOnly = function (t) {
          n.Library.IsFirstArrivedOnFieldReadOnly ||
            FieldOneSkyUtils.Fields.SetDisabled(
              this.FormContext,
              i.workOrderAttributes.msdyn_firstarrivedon.LogicalName,
              t
            );
        }),
        (i.MakeCompletedOnFieldReadOnly = function (t) {
          n.Library.IsCompletedOnFieldReadOnly ||
            FieldOneSkyUtils.Fields.SetDisabled(
              this.FormContext,
              i.workOrderAttributes.msdyn_completedon.LogicalName,
              t
            );
        }),
        (i.LogErrorMessage = function (n) {
          FieldOneSkyUtils.LogMessageInConsole(
            "An error occurred while setting 'First Arrived On' and 'Completed On' fields as read only.\n" + n
          );
        }),
        (i.PriceListBillingAccount = null),
        (i.PriceListWorkOrderType = null),
        (i.CurrentSubStatus = null),
        (i.CurrentSystemStatusValue = null),
        (i.LastNonNullSystemStatusValue = null),
        (i.SalesTaxCode = null),
        (i.Counter = 0),
        (i.DateWindowStart = null),
        (i.DateWindowEnd = null),
        (i.ServiceAccount = null),
        (i.ServiceTerritorySetFromAccount = !1),
        (i.PostalCodeChanged = !1),
        (i.TerritoryDirtyValue = null),
        (i.FieldServiceStatus = []),
        (i.AddressInfo = {}),
        (i.OfflineCurrenyLookupText = 'Currency(Offline)'),
        (i.CachedRecords = {}),
        (i.QuerySelectAttributes = {}),
        (i.QueryExpandAttributes = {}),
        (i.PrimaryIncidentOld = {}),
        (i.ErrorNotifications = {}),
        (i.WorkorderUtilsObj = null),
        (i.FunctionalLocationUtilsObj = null),
        (i.AssetUtilsObj = null),
        (i._locationAddrSet = !1),
        (i.PreSaveStatus = {}),
        (i.IsPrimaryIncidentDirty = 'IsPrimaryIncidentDirty'),
        (i.IsError = 'isError'),
        (i.PrimaryIncidentKey = 'primaryincident'),
        (i.InitialPrimaryIncidentType = null),
        (i.productAttributes = EntityMetadata.Product.attributes),
        (i.accountAttributes = EntityMetadata.Account.attributes),
        (i.workOrderIncidentAttributes = EntityMetadata.msdyn_workorderincident.attributes),
        (i.workOrderAttributes = EntityMetadata.msdyn_workorder.attributes),
        (i.functionalLocationAttributes = EntityMetadata.msdyn_functionallocation.attributes),
        (i.workOrderMetadata = new EntityMetadata.msdyn_workorder()),
        (i.workOrderProductAttributes = EntityMetadata.msdyn_workorderproduct.attributes),
        (i.CustomerAssetLookupControl = null),
        (i.PrimaryIncidentTypeFieldRequiredLevel = ''),
        (i.IsOnLoadExecuted = !1),
        (i.IsPriceListFromBillingAccount = !1),
        (i.IsFirstArrivedOnFieldReadOnly = !1),
        (i.IsCompletedOnFieldReadOnly = !1),
        (i.telemetry = null),
        (i.CustomerFilterHandler = function () {
          var t = FieldOneSkyUtils.getGuidWithoutBrackets(n.Library.ServiceAccount[0].id),
            i = "<filter type='and'><condition attribute='msdyn_account' operator='eq' value='" + t + "' /></filter>";
          n.Library.CustomerAssetLookupControl.addCustomFilter(i, EntityMetadata.CustomerAsset.EntityLogicalName);
        }),
        i
      );
    })(),
    t;
  (n.Library = i),
    (function (n) {
      n[(n.DoGeocoding = 0)] = 'DoGeocoding';
    })(t || (t = {}));
})(WorkOrders || (WorkOrders = {}));
