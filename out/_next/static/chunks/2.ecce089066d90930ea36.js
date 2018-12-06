;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    165: function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(0),
        n = r.n(o),
        a = r(6),
        i = r.n(a),
        l = (r(8), r(5)),
        f = r.n(l),
        s = {
          parallax: {
            height: '100vh',
            maxHeight: '1600px',
            overflow: 'hidden',
            position: 'relative',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            margin: '0',
            padding: '0',
            border: '0',
            display: 'flex',
            alignItems: 'center',
          },
          filter: {},
          primaryColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,rgba(225,190,231,.56),rgba(186,104,200,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          roseColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,rgba(248,187,208,.56),rgba(240,98,146,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          darkColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          infoColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,rgba(178,235,242,.56),rgba(77,208,225,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          successColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,rgba(165,214,167,.56),rgba(102,187,106,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          warningColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,rgba(255,224,178,.56),rgba(255,183,77,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          dangerColor: {
            '&:before': { background: 'rgba(0, 0, 0, 0.5)' },
            '&:after': {
              background:
                'linear-gradient(60deg,hsla(0,73%,77%,.56),rgba(239,83,80,.95))',
            },
            '&:after,&:before': {
              position: 'absolute',
              zIndex: '1',
              width: '100%',
              height: '100%',
              display: 'block',
              left: '0',
              top: '0',
              content: "''",
            },
          },
          small: { height: '65vh', minHeight: '65vh', maxHeight: '650px' },
        }
      function c(e) {
        return (c =
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            o.forEach(function(t) {
              u(e, t, r[t])
            })
        }
        return e
      }
      function u(e, t, r) {
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
        )
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      var y = (function(e) {
        function t(e) {
          var r, o, n, a
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (o = this),
            (r =
              !(n = p(t).call(this, e)) ||
              ('object' !== c(n) && 'function' != typeof n)
                ? h(o)
                : n),
            (a = window.innerWidth >= 768 ? window.pageYOffset / 3 : 0),
            (r.state = { transform: 'translate3d(0,' + a + 'px,0)' }),
            (r.resetTransform = r.resetTransform.bind(h(h(r)))),
            r
          )
        }
        var r, o, a
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && g(e, t)
          })(t, n.a.Component),
          (r = t),
          (o = [
            {
              key: 'componentDidMount',
              value: function() {
                if (window.innerWidth >= 768) {
                  var e = window.pageYOffset / 3
                  this.setState({ transform: 'translate3d(0,' + e + 'px,0)' }),
                    window.addEventListener('scroll', this.resetTransform)
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                window.innerWidth >= 768 &&
                  window.removeEventListener('scroll', this.resetTransform)
              },
            },
            {
              key: 'resetTransform',
              value: function() {
                var e = window.pageYOffset / 3
                this.setState({ transform: 'translate3d(0,' + e + 'px,0)' })
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this.props,
                  r = t.classes,
                  o = t.filter,
                  a = t.className,
                  l = t.children,
                  f = t.style,
                  s = t.image,
                  c = t.small,
                  d = i()(
                    (u((e = {}), r.parallax, !0),
                    u(e, r[o + 'Color'], void 0 !== o),
                    u(e, r.small, c),
                    u(e, a, void 0 !== a),
                    e)
                  )
                return n.a.createElement(
                  'div',
                  {
                    className: d,
                    style: b(
                      {},
                      f,
                      { backgroundImage: 'url(' + s + ')' },
                      this.state
                    ),
                    ref: 'parallax',
                  },
                  l
                )
              },
            },
          ]) && d(r.prototype, o),
          a && d(r, a),
          t
        )
      })()
      t.default = f()(s)(y)
    },
  },
])
