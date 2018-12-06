;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    1364: function(e, t, a) {
      __NEXT_REGISTER_PAGE('/landing-page', function() {
        return (e.exports = a(1390)), { page: e.exports.default }
      })
    },
    1365: function(e, t) {
      e.exports =
        '/_next/static/images/bg8-8cfdd67a8ad34bc88343e1889d7b7255.jpg'
    },
    1390: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(37),
        i = a.n(o),
        l = a(6),
        c = a.n(l),
        s = a(5),
        u = a.n(s),
        m = a(32),
        f = a.n(m),
        p = a(13),
        d = a.n(p),
        b = a(29),
        y = a.n(b),
        g = a(36),
        h = a(45),
        E = a(7),
        v = a(2),
        w = a(3),
        x = a(1)
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              })
            )),
            n.forEach(function(t) {
              j(e, t, a[t])
            })
        }
        return e
      }
      function j(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var k = {
          container: O({ color: '#FFFFFF' }, x.f, { zIndex: '2' }),
          title: O({}, x.I, {
            display: 'inline-block',
            position: 'relative',
            marginTop: '30px',
            minHeight: '32px',
            color: '#FFFFFF',
            textDecoration: 'none',
          }),
          subtitle: {
            fontSize: '1.313rem',
            maxWidth: '500px',
            margin: '10px auto 0',
          },
          main: O({}, x.r),
          mainRaised: O({}, x.s),
          block: {
            color: 'inherit',
            padding: '0.9375rem',
            fontWeight: '500',
            fontSize: '12px',
            textTransform: 'uppercase',
            borderRadius: '3px',
            textDecoration: 'none',
            position: 'relative',
            display: 'block',
          },
          inlineBlock: {
            display: 'inline-block',
            padding: '0px',
            width: 'auto',
          },
          list: { marginBottom: '0', padding: '0', marginTop: '0' },
          left: { float: 'left!important', display: 'block' },
          right: { padding: '15px 0', margin: '0', float: 'right' },
          icon: {
            width: '18px',
            height: '18px',
            top: '3px',
            position: 'relative',
          },
        },
        N = a(240),
        P = a.n(N),
        S = a(234),
        C = a.n(S),
        T = a(315),
        F = a.n(T),
        _ = a(26)
      function I(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var A = {
        section: { padding: '70px 0', textAlign: 'center' },
        title: (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(a)
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                })
              )),
              n.forEach(function(t) {
                I(e, t, a[t])
              })
          }
          return e
        })({}, x.I, {
          marginBottom: '1rem',
          marginTop: '30px',
          minHeight: '32px',
          textDecoration: 'none',
        }),
        description: { color: '#999' },
      }
      function R(e) {
        return (R =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function D(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function W(e, t) {
        return !t || ('object' !== R(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function B(e) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function H(e, t) {
        return (H =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var z = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              W(this, B(t).apply(this, arguments))
            )
          }
          var a, n, o
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && H(e, t)
            })(t, r.a.Component),
            (a = t),
            (n = [
              {
                key: 'render',
                value: function() {
                  var e = this.props.classes
                  return r.a.createElement(
                    'div',
                    { className: e.section },
                    r.a.createElement(
                      E.a,
                      { justify: 'center' },
                      r.a.createElement(
                        v.a,
                        { xs: 12, sm: 8, md: 8 },
                        r.a.createElement(
                          'h2',
                          { className: e.title },
                          "Let's talk product"
                        ),
                        r.a.createElement(
                          'h5',
                          { className: e.description },
                          "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        E.a,
                        null,
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 4, md: 4 },
                          r.a.createElement(_.a, {
                            title: 'Free Chat',
                            description:
                              'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
                            icon: P.a,
                            iconColor: 'info',
                            vertical: !0,
                          })
                        ),
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 4, md: 4 },
                          r.a.createElement(_.a, {
                            title: 'Verified Users',
                            description:
                              'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
                            icon: C.a,
                            iconColor: 'success',
                            vertical: !0,
                          })
                        ),
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 4, md: 4 },
                          r.a.createElement(_.a, {
                            title: 'Fingerprint',
                            description:
                              'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
                            icon: F.a,
                            iconColor: 'danger',
                            vertical: !0,
                          })
                        )
                      )
                    )
                  )
                },
              },
            ]) && D(a.prototype, n),
            o && D(a, o),
            t
          )
        })(),
        L = u()(A)(z),
        q = a(9),
        G = a(17),
        M = a(10),
        K = a(19),
        $ = a(35),
        Y = a(60),
        U = a.n(Y),
        V = a(73),
        J = a.n(V),
        Q = a(63),
        X = a.n(Q),
        Z = a(81),
        ee = a.n(Z),
        te = a(421),
        ae = a(51)
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              })
            )),
            n.forEach(function(t) {
              re(e, t, a[t])
            })
        }
        return e
      }
      function re(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var oe = ne(
        {
          section: { padding: '70px 0', textAlign: 'center' },
          title: ne({}, x.I, {
            marginBottom: '1rem',
            marginTop: '30px',
            minHeight: '32px',
            textDecoration: 'none',
          }),
        },
        ae.a,
        {
          itemGrid: { marginLeft: 'auto', marginRight: 'auto' },
          cardTitle: x.d,
          smallTitle: { color: '#6c757d' },
          description: { color: '#999' },
          justifyCenter: { justifyContent: 'center !important' },
          socials: {
            marginTop: '0',
            width: '100%',
            transform: 'none',
            left: '0',
            top: '0',
            height: '100%',
            lineHeight: '41px',
            fontSize: '20px',
            color: '#999',
          },
          margin5: { margin: '5px' },
          card3: { textAlign: 'center' },
        }
      )
      function ie(e) {
        return (ie =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function le(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function ce(e, t) {
        return !t || ('object' !== ie(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function se(e) {
        return (se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function ue(e, t) {
        return (ue =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function me(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var fe = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(a)
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                })
              )),
              n.forEach(function(t) {
                me(e, t, a[t])
              })
          }
          return e
        })({}, te.a, oe, {
          justifyContentCenter: { justifyContent: 'center' },
        }),
        pe = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              ce(this, se(t).apply(this, arguments))
            )
          }
          var a, n, o
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && ue(e, t)
            })(t, r.a.Component),
            (a = t),
            (n = [
              {
                key: 'render',
                value: function() {
                  var e = this.props.classes
                  return r.a.createElement(
                    'div',
                    { className: e.section },
                    r.a.createElement(
                      'h2',
                      { className: e.title },
                      'Here is our team'
                    ),
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        E.a,
                        null,
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 6, md: 6 },
                          r.a.createElement(
                            q.a,
                            { profile: !0, plain: !0, className: e.card3 },
                            r.a.createElement(
                              E.a,
                              null,
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 5, md: 5 },
                                r.a.createElement(
                                  G.a,
                                  { image: !0, plain: !0 },
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#pablo',
                                      onClick: function(e) {
                                        return e.preventDefault()
                                      },
                                    },
                                    r.a.createElement('img', {
                                      src: U.a,
                                      alt: '...',
                                    })
                                  ),
                                  r.a.createElement('div', {
                                    className: e.coloredShadow,
                                    style: {
                                      backgroundImage: 'url('.concat(U.a, ')'),
                                      opacity: '1',
                                    },
                                  })
                                )
                              ),
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 7, md: 7 },
                                r.a.createElement(
                                  M.a,
                                  { plain: !0 },
                                  r.a.createElement(
                                    'h4',
                                    { className: e.cardTitle },
                                    'Alec Thompson'
                                  ),
                                  r.a.createElement(
                                    $.a,
                                    null,
                                    r.a.createElement(
                                      'h6',
                                      { className: e.cardCategory },
                                      'FOUNDER'
                                    )
                                  ),
                                  r.a.createElement(
                                    'p',
                                    { className: e.description },
                                    "Don't be scared of the truth because we need to restart the human foundation in truth..."
                                  )
                                ),
                                r.a.createElement(
                                  K.a,
                                  {
                                    plain: !0,
                                    className: e.justifyContentCenter,
                                  },
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'twitter',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-twitter',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'facebook',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-facebook-square',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'google',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-google',
                                    })
                                  )
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 6, md: 6 },
                          r.a.createElement(
                            q.a,
                            { profile: !0, plain: !0, className: e.card3 },
                            r.a.createElement(
                              E.a,
                              null,
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 5, md: 5 },
                                r.a.createElement(
                                  G.a,
                                  { image: !0, plain: !0 },
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#pablo',
                                      onClick: function(e) {
                                        return e.preventDefault()
                                      },
                                    },
                                    r.a.createElement('img', {
                                      src: ee.a,
                                      alt: '...',
                                    })
                                  ),
                                  r.a.createElement('div', {
                                    className: e.coloredShadow,
                                    style: {
                                      backgroundImage: 'url('.concat(ee.a, ')'),
                                      opacity: '1',
                                    },
                                  })
                                )
                              ),
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 7, md: 7 },
                                r.a.createElement(
                                  M.a,
                                  { plain: !0 },
                                  r.a.createElement(
                                    'h4',
                                    { className: e.cardTitle },
                                    'Kendall Andrew'
                                  ),
                                  r.a.createElement(
                                    $.a,
                                    null,
                                    r.a.createElement(
                                      'h6',
                                      { className: e.cardCategory },
                                      'GRAPHIC DESIGNER'
                                    )
                                  ),
                                  r.a.createElement(
                                    'p',
                                    { className: e.description },
                                    "Don't be scared of the truth because we need to restart the human foundation in truth..."
                                  )
                                ),
                                r.a.createElement(
                                  K.a,
                                  {
                                    plain: !0,
                                    className: e.justifyContentCenter,
                                  },
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'linkedin',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-linkedin-in',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'facebook',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-facebook-square',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'dribbble',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-dribbble',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'google',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-google',
                                    })
                                  )
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 6, md: 6 },
                          r.a.createElement(
                            q.a,
                            { profile: !0, plain: !0, className: e.card3 },
                            r.a.createElement(
                              E.a,
                              null,
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 5, md: 5 },
                                r.a.createElement(
                                  G.a,
                                  { image: !0, plain: !0 },
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#pablo',
                                      onClick: function(e) {
                                        return e.preventDefault()
                                      },
                                    },
                                    r.a.createElement('img', {
                                      src: X.a,
                                      alt: '...',
                                    })
                                  ),
                                  r.a.createElement('div', {
                                    className: e.coloredShadow,
                                    style: {
                                      backgroundImage: 'url('.concat(X.a, ')'),
                                      opacity: '1',
                                    },
                                  })
                                )
                              ),
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 7, md: 7 },
                                r.a.createElement(
                                  M.a,
                                  { plain: !0 },
                                  r.a.createElement(
                                    'h4',
                                    { className: e.cardTitle },
                                    'Gina Andrew'
                                  ),
                                  r.a.createElement(
                                    $.a,
                                    null,
                                    r.a.createElement(
                                      'h6',
                                      { className: e.cardCategory },
                                      'WEB DESIGNER'
                                    )
                                  ),
                                  r.a.createElement(
                                    'p',
                                    { className: e.description },
                                    "I love you like Kanye loves Kanye. Don't be scared of the truth."
                                  )
                                ),
                                r.a.createElement(
                                  K.a,
                                  {
                                    plain: !0,
                                    className: e.justifyContentCenter,
                                  },
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'youtube',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-youtube',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'twitter',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-twitter',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'instagram',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-instagram',
                                    })
                                  )
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          { xs: 12, sm: 6, md: 6 },
                          r.a.createElement(
                            q.a,
                            { profile: !0, plain: !0, className: e.card3 },
                            r.a.createElement(
                              E.a,
                              null,
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 5, md: 5 },
                                r.a.createElement(
                                  G.a,
                                  { image: !0, plain: !0 },
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#pablo',
                                      onClick: function(e) {
                                        return e.preventDefault()
                                      },
                                    },
                                    r.a.createElement('img', {
                                      src: J.a,
                                      alt: '...',
                                    })
                                  ),
                                  r.a.createElement('div', {
                                    className: e.coloredShadow,
                                    style: {
                                      backgroundImage: 'url('.concat(J.a, ')'),
                                      opacity: '1',
                                    },
                                  })
                                )
                              ),
                              r.a.createElement(
                                v.a,
                                { xs: 12, sm: 7, md: 7 },
                                r.a.createElement(
                                  M.a,
                                  { plain: !0 },
                                  r.a.createElement(
                                    'h4',
                                    { className: e.cardTitle },
                                    'George West'
                                  ),
                                  r.a.createElement(
                                    $.a,
                                    null,
                                    r.a.createElement(
                                      'h6',
                                      { className: e.cardCategory },
                                      'BACKEND HACKER'
                                    )
                                  ),
                                  r.a.createElement(
                                    'p',
                                    { className: e.description },
                                    "I love you like Kanye loves Kanye. Don't be scared of the truth."
                                  )
                                ),
                                r.a.createElement(
                                  K.a,
                                  {
                                    plain: !0,
                                    className: e.justifyContentCenter,
                                  },
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'linkedin',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-linkedin-in',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'facebook',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-facebook-square',
                                    })
                                  ),
                                  r.a.createElement(
                                    w.a,
                                    {
                                      justIcon: !0,
                                      simple: !0,
                                      color: 'google',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-google',
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]) && le(a.prototype, n),
            o && le(a, o),
            t
          )
        })(),
        de = u()(fe)(pe),
        be = a(25)
      function ye(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var ge = {
        mrAuto: x.u,
        mlAuto: x.t,
        section: { padding: '70px 0' },
        title: (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(a)
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                })
              )),
              n.forEach(function(t) {
                ye(e, t, a[t])
              })
          }
          return e
        })({}, x.I, {
          marginBottom: '1rem',
          marginTop: '30px',
          minHeight: '32px',
          textDecoration: 'none',
          textAlign: 'center',
        }),
        description: { color: '#999', textAlign: 'center' },
        textCenter: { textAlign: 'center' },
        textArea: { marginRight: '15px', marginLeft: '15px' },
      }
      function he(e) {
        return (he =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function Ee(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function ve(e, t) {
        return !t || ('object' !== he(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function we(e) {
        return (we = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function xe(e, t) {
        return (xe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Oe = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              ve(this, we(t).apply(this, arguments))
            )
          }
          var a, n, o
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && xe(e, t)
            })(t, r.a.Component),
            (a = t),
            (n = [
              {
                key: 'render',
                value: function() {
                  var e = this.props.classes
                  return r.a.createElement(
                    'div',
                    { className: e.section },
                    r.a.createElement(
                      E.a,
                      { justify: 'center' },
                      r.a.createElement(
                        v.a,
                        { cs: 12, sm: 8, md: 8 },
                        r.a.createElement(
                          'h2',
                          { className: e.title },
                          'Work with us'
                        ),
                        r.a.createElement(
                          'h4',
                          { className: e.description },
                          'Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.'
                        ),
                        r.a.createElement(
                          'form',
                          null,
                          r.a.createElement(
                            E.a,
                            null,
                            r.a.createElement(
                              v.a,
                              { xs: 12, sm: 6, md: 6 },
                              r.a.createElement(be.a, {
                                labelText: 'Your Name',
                                id: 'name',
                                formControlProps: { fullWidth: !0 },
                              })
                            ),
                            r.a.createElement(
                              v.a,
                              { xs: 12, sm: 6, md: 6 },
                              r.a.createElement(be.a, {
                                labelText: 'Your Email',
                                id: 'email',
                                formControlProps: { fullWidth: !0 },
                              })
                            ),
                            r.a.createElement(be.a, {
                              labelText: 'Your Message',
                              id: 'message',
                              formControlProps: {
                                fullWidth: !0,
                                className: e.textArea,
                              },
                              inputProps: { multiline: !0, rows: 5 },
                            }),
                            r.a.createElement(
                              v.a,
                              {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                className: ''
                                  .concat(e.mrAuto, ' ')
                                  .concat(e.mlAuto),
                              },
                              r.a.createElement(
                                w.a,
                                { color: 'primary' },
                                'Send Message'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]) && Ee(a.prototype, n),
            o && Ee(a, o),
            t
          )
        })(),
        je = u()(ge)(Oe)
      function ke(e) {
        return (ke =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function Ne() {
        return (Ne =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      function Pe(e, t) {
        if (null == e) return {}
        var a,
          n,
          r = (function(e, t) {
            if (null == e) return {}
            var a,
              n,
              r = {},
              o = Object.keys(e)
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]))
        }
        return r
      }
      function Se(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function Ce(e, t) {
        return !t || ('object' !== ke(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function Te(e) {
        return (Te = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function Fe(e, t) {
        return (Fe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var _e = [],
        Ie = i()(
          function() {
            return a.e(0).then(a.bind(null, 102))
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function() {
                return [102]
              },
              modules: ['../../components/Header/HeaderLinks.jsx'],
            },
          }
        ),
        Ae = i()(
          function() {
            return a.e(2).then(a.bind(null, 165))
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function() {
                return [165]
              },
              modules: ['../../components/Parallax/Parallax.jsx'],
            },
          }
        ),
        Re = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              Ce(this, Te(t).apply(this, arguments))
            )
          }
          var n, o, i
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Fe(e, t)
            })(t, r.a.Component),
            (n = t),
            (o = [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0), (document.body.scrollTop = 0)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = Pe(e, ['classes'])
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      g.a,
                      Ne(
                        {
                          color: 'transparent',
                          routes: _e,
                          brand: 'Material Kit PRO React',
                          links: r.a.createElement(Ie, {
                            dropdownHoverColor: 'info',
                          }),
                          fixed: !0,
                          changeColorOnScroll: { height: 300, color: 'info' },
                        },
                        n
                      )
                    ),
                    r.a.createElement(
                      Ae,
                      { image: a(1365), filter: 'dark' },
                      r.a.createElement(
                        'div',
                        { className: t.container },
                        r.a.createElement(
                          E.a,
                          null,
                          r.a.createElement(
                            v.a,
                            { xs: 12, sm: 6, md: 6 },
                            r.a.createElement(
                              'h1',
                              { className: t.title },
                              'Your Story Starts With Us.'
                            ),
                            r.a.createElement(
                              'h4',
                              null,
                              "Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression."
                            ),
                            r.a.createElement('br', null),
                            r.a.createElement(
                              w.a,
                              {
                                color: 'danger',
                                size: 'lg',
                                href:
                                  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                              r.a.createElement('i', {
                                className: 'fas fa-play',
                              }),
                              'Watch video'
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: c()(t.main, t.mainRaised) },
                      r.a.createElement(
                        'div',
                        { className: t.container },
                        r.a.createElement(L, null),
                        r.a.createElement(de, null),
                        r.a.createElement(je, null)
                      )
                    ),
                    r.a.createElement(h.a, {
                      content: r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'div',
                          { className: t.left },
                          r.a.createElement(
                            f.a,
                            { className: t.list },
                            r.a.createElement(
                              d.a,
                              { className: t.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: 'https://www.creative-tim.com/',
                                  className: t.block,
                                },
                                'Creative Tim'
                              )
                            ),
                            r.a.createElement(
                              d.a,
                              { className: t.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href:
                                    'https://www.creative-tim.com/presentation',
                                  className: t.block,
                                },
                                'About us'
                              )
                            ),
                            r.a.createElement(
                              d.a,
                              { className: t.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: '//blog.creative-tim.com/',
                                  className: t.block,
                                },
                                'Blog'
                              )
                            ),
                            r.a.createElement(
                              d.a,
                              { className: t.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: 'https://www.creative-tim.com/license',
                                  className: t.block,
                                },
                                'Licenses'
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: t.right },
                          '© ',
                          1900 + new Date().getYear(),
                          ' , made with',
                          ' ',
                          r.a.createElement(y.a, { className: t.icon }),
                          ' by',
                          ' ',
                          r.a.createElement(
                            'a',
                            { href: 'https://www.creative-tim.com' },
                            'Creative Tim'
                          ),
                          ' for a better web.'
                        )
                      ),
                    })
                  )
                },
              },
            ]) && Se(n.prototype, o),
            i && Se(n, i),
            t
          )
        })(),
        De = u()(k)(Re),
        We = a(47),
        Be = a.n(We)
      t.default = function() {
        return r.a.createElement(
          n.Fragment,
          null,
          r.a.createElement(Be.a, null),
          r.a.createElement(De, null)
        )
      }
    },
    19: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        i = a.n(o),
        l = (a(8), a(5)),
        c = a.n(l),
        s = {
          cardFooter: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            padding: '0.9375rem 1.875rem',
            paddingTop: '0',
          },
          cardFooterProfile: { marginTop: '-15px' },
          cardFooterPlain: {
            paddingLeft: '5px',
            paddingRight: '5px',
            backgroundColor: 'transparent',
          },
          cardFooterPricing: { zIndex: '2' },
          cardFooterTestimonial: { display: 'block' },
        }
      function u(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      function m(e, t) {
        if (null == e) return {}
        var a,
          n,
          r = (function(e, t) {
            if (null == e) return {}
            var a,
              n,
              r = {},
              o = Object.keys(e)
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]))
        }
        return r
      }
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      t.a = c()(s)(function(e) {
        var t,
          a = f({}, e),
          n = a.classes,
          o = a.className,
          l = a.children,
          c = a.plain,
          s = a.profile,
          p = a.pricing,
          d = a.testimonial,
          b = m(a, [
            'classes',
            'className',
            'children',
            'plain',
            'profile',
            'pricing',
            'testimonial',
          ]),
          y = i()(
            (u((t = {}), n.cardFooter, !0),
            u(t, n.cardFooterPlain, c),
            u(t, n.cardFooterProfile, s || d),
            u(t, n.cardFooterPricing, p),
            u(t, n.cardFooterTestimonial, d),
            u(t, o, void 0 !== o),
            t)
          )
        return r.a.createElement('div', f({ className: y }, b), l)
      })
    },
    234: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(0)),
        o = (0, n(a(16)).default)(
          r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            r.default.createElement('path', {
              d:
                'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
            })
          ),
          'VerifiedUser'
        )
      t.default = o
    },
    30: function(e, t, a) {
      'use strict'
      var n = a(1)
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var o = {
        defaultFontStyle: (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(a)
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                })
              )),
              n.forEach(function(t) {
                r(e, t, a[t])
              })
          }
          return e
        })({}, n.k, { fontSize: '14px' }),
        defaultHeaderMargins: { marginTop: '20px', marginBottom: '10px' },
        quote: {
          padding: '10px 20px',
          margin: '0 0 20px',
          fontSize: '1.25rem',
          borderLeft: '5px solid #eee',
        },
        quoteText: { margin: '0 0 10px', fontStyle: 'italic' },
        quoteAuthor: {
          display: 'block',
          fontSize: '80%',
          lineHeight: '1.42857143',
          color: '#777',
        },
        mutedText: { '&, & *': { color: '#6c757d', display: 'inline-block' } },
        primaryText: { '&, & *': { color: n.x, display: 'inline-block' } },
        infoText: { '&, & *': { color: n.q, display: 'inline-block' } },
        successText: { '&, & *': { color: n.H, display: 'inline-block' } },
        warningText: { '&, & *': { color: n.M, display: 'inline-block' } },
        dangerText: { '&, & *': { color: n.j, display: 'inline-block' } },
        roseText: { '&, & *': { color: n.A, display: 'inline-block' } },
        smallText: {
          fontSize: '65%',
          fontWeight: '400',
          lineHeight: '1',
          color: '#777',
        },
      }
      t.a = o
    },
    35: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        i = a.n(o),
        l = a(30)
      function c() {
        return (c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      t.a = i()(l.a)(function(e) {
        var t = c({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.mutedText },
          n
        )
      })
    },
    421: function(e, t, a) {
      'use strict'
      var n = a(1)
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a)
          'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              })
            )),
            n.forEach(function(t) {
              o(e, t, a[t])
            })
        }
        return e
      }
      function o(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var i = {
        container: n.f,
        title: n.I,
        mlAuto: n.t,
        mrAuto: n.u,
        cardTitle: n.d,
        coloredShadow: n.e,
        description: n.l,
        descriptionWhite: r({}, n.l),
        textCenter: { textAlign: 'center' },
        team: {
          padding: '80px 0',
          '& h5$description,& h5$descriptionWhite': { marginBottom: '80px' },
        },
        section: r({}, n.D, n.C, {
          position: 'relative',
          '& $title': { color: '#FFFFFF' },
          '& $descriptionWhite': { color: 'rgba(255, 255, 255, 0.76)' },
          '& $container': { zIndex: '2', position: 'relative' },
          '&:after': {
            position: 'absolute',
            zIndex: '1',
            width: '100%',
            height: '100%',
            display: 'block',
            left: '0',
            top: '0',
            content: "''",
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }),
        justifyContent: {
          WebkitBoxPack: 'center !important',
          MsFlexPack: 'center !important',
          justifyContent: 'center !important',
        },
        cardCategory: { marginTop: '10px' },
        btn: { marginTop: '0 !important' },
        card3: { textAlign: 'left' },
        card5: {
          textAlign: 'left',
          '& $cardTitle': { color: '#FFFFFF' },
          '& $description': { color: '#FFFFFF' },
        },
      }
      t.a = i
    },
    51: function(e, t, a) {
      'use strict'
      t.a = {
        imgFluid: { maxWidth: '100%', height: 'auto' },
        imgRounded: { borderRadius: '6px !important' },
        imgRoundedCircle: { borderRadius: '50% !important' },
        imgRaised: {
          boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        },
        imgGallery: { width: '100%', marginBottom: '2.142rem' },
        imgCardTop: {
          width: '100%',
          borderTopLeftRadius: 'calc(.25rem - 1px)',
          borderTopRightRadius: 'calc(.25rem - 1px)',
        },
        imgCardBottom: {
          width: '100%',
          borderBottomLeftRadius: 'calc(.25rem - 1px)',
          borderBottomRightRadius: 'calc(.25rem - 1px)',
        },
        imgCard: { width: '100%', borderRadius: 'calc(.25rem - 1px)' },
        imgCardOverlay: {
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          padding: '1.25rem',
        },
      }
    },
    60: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile1-square-3122abf4a3e1067926c08dee7684522d.jpg'
    },
    63: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile4-square-1a1649171cdecd24e7a16ea1340077df.jpg'
    },
    73: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile2-square-788e3d36e8c4d4120daeee6e57e7e85f.jpg'
    },
    81: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile6-square-1f1f4900f3bc166b75f8235c2b89864f.jpg'
    },
  },
  [[1364, 1, 0]],
])
