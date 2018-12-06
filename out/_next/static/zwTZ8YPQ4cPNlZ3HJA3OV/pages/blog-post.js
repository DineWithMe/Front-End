;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    106: function(e, t) {
      e.exports =
        '/_next/static/images/blog6-08933bcd91ddd2b62b781d1f166ed9df.jpg'
    },
    107: function(e, t) {
      e.exports =
        '/_next/static/images/blog8-f038c7dc18cd777c6da3c3d0a984f223.jpg'
    },
    108: function(e, t, a) {
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
              d:
                'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
            }),
            r.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'TrendingUp'
        )
      t.default = o
    },
    115: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o)
      function i(e, t, a) {
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
      var c = {
        media: {
          display: 'flex',
          WebkitBoxAlign: 'start',
          alignItems: 'flex-start',
          '& p': { color: '#999999', fontSize: '1rem', lineHeight: '1.6em' },
          '& $media $mediaBody': { paddingRight: '0px' },
        },
        mediaLink: { padding: '10px', float: 'left !important' },
        mediaAvatar: {
          margin: '0 auto',
          width: '64px',
          height: '64px',
          overflow: 'hidden',
          borderRadius: '50%',
          marginRight: '15px',
          boxShadow:
            '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)',
          '& img': { width: '100%' },
        },
        mediaBody: { paddingRight: '10px', WebkitBoxFlex: '1', flex: '1' },
        mediaHeading: (function(e) {
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
                i(e, t, a[t])
              })
          }
          return e
        })({}, a(1).I, {
          marginTop: '10px',
          marginBottom: '10px',
          '& small': {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          },
        }),
        mediaFooter: {
          '& button, & a': { marginBottom: '20px' },
          '&:after': { display: 'table', content: '" "', clear: 'both' },
        },
      }
      function s(e, t) {
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
      function u() {
        return (u =
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
      function m(e) {
        var t = u({}, e),
          a = t.classes,
          n = t.avatarLink,
          o = t.avatar,
          l = t.avatarAlt,
          i = t.title,
          c = t.body,
          m = t.footer,
          p = t.innerMedias,
          d = s(t, [
            'classes',
            'avatarLink',
            'avatar',
            'avatarAlt',
            'title',
            'body',
            'footer',
            'innerMedias',
          ])
        return r.a.createElement(
          'div',
          u({}, d, { className: a.media }),
          r.a.createElement(
            'a',
            { href: n, className: a.mediaLink },
            r.a.createElement(
              'div',
              { className: a.mediaAvatar },
              r.a.createElement('img', { src: o, alt: l })
            )
          ),
          r.a.createElement(
            'div',
            { className: a.mediaBody },
            void 0 !== i
              ? r.a.createElement('h4', { className: a.mediaHeading }, i)
              : null,
            c,
            r.a.createElement('div', { className: a.mediaFooter }, m),
            void 0 !== p
              ? p.map(function(e, t) {
                  return e
                })
              : null
          )
        )
      }
      m.defaultProps = { avatarLink: '#pablo', avatarAlt: '...' }
      t.a = l()(c)(m)
    },
    119: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(20)),
        i = n(a(21)),
        c = n(a(22)),
        s = n(a(23)),
        u = n(a(24)),
        m = n(a(18)),
        p = n(a(0)),
        d = (n(a(8)), n(a(31)), n(a(6))),
        f = n(a(221)),
        h = n(a(5)),
        g = a(34),
        b = n(a(133)),
        y = n(a(204)),
        v = function(e) {
          return {
            popper: { zIndex: e.zIndex.tooltip, opacity: 0.9 },
            tooltip: {
              backgroundColor: e.palette.grey[700],
              borderRadius: e.shape.borderRadius,
              color: e.palette.common.white,
              fontFamily: e.typography.fontFamily,
              padding: '4px 8px',
              fontSize: e.typography.pxToRem(10),
              lineHeight: ''.concat(e.typography.round(1.4), 'em'),
              maxWidth: 300,
            },
            touch: {
              padding: '8px 16px',
              fontSize: e.typography.pxToRem(14),
              lineHeight: ''.concat(e.typography.round(16 / 14), 'em'),
            },
            tooltipPlacementLeft: (0, m.default)(
              { transformOrigin: 'right center', margin: '0 24px ' },
              e.breakpoints.up('sm'),
              { margin: '0 14px' }
            ),
            tooltipPlacementRight: (0, m.default)(
              { transformOrigin: 'left center', margin: '0 24px' },
              e.breakpoints.up('sm'),
              { margin: '0 14px' }
            ),
            tooltipPlacementTop: (0, m.default)(
              { transformOrigin: 'center bottom', margin: '24px 0' },
              e.breakpoints.up('sm'),
              { margin: '14px 0' }
            ),
            tooltipPlacementBottom: (0, m.default)(
              { transformOrigin: 'center top', margin: '24px 0' },
              e.breakpoints.up('sm'),
              { margin: '14px 0' }
            ),
          }
        }
      t.styles = v
      var E = (function(e) {
        function t(e) {
          var a
          return (
            (0, l.default)(this, t),
            ((a = (0, c.default)(
              this,
              (0, s.default)(t).call(this)
            )).ignoreNonTouchEvents = !1),
            (a.onRootRef = function(e) {
              a.childrenRef = e
            }),
            (a.handleFocus = function(e) {
              e.persist(),
                (a.focusTimer = setTimeout(function() {
                  a.childrenRef === document.activeElement && a.handleEnter(e)
                }, 0))
              var t = a.props.children.props
              t.onFocus && t.onFocus(e)
            }),
            (a.handleEnter = function(e) {
              var t = a.props,
                n = t.children,
                r = t.enterDelay,
                o = n.props
              'mouseover' === e.type && o.onMouseOver && o.onMouseOver(e),
                (a.ignoreNonTouchEvents && 'touchstart' !== e.type) ||
                  (a.childrenRef.setAttribute('title', ''),
                  clearTimeout(a.enterTimer),
                  clearTimeout(a.leaveTimer),
                  r
                    ? (e.persist(),
                      (a.enterTimer = setTimeout(function() {
                        a.handleOpen(e)
                      }, r)))
                    : a.handleOpen(e))
            }),
            (a.handleOpen = function(e) {
              a.isControlled || a.state.open || a.setState({ open: !0 }),
                a.props.onOpen && a.props.onOpen(e)
            }),
            (a.handleLeave = function(e) {
              var t = a.props,
                n = t.children,
                r = t.leaveDelay,
                o = n.props
              'blur' === e.type && o.onBlur && o.onBlur(e),
                'mouseleave' === e.type && o.onMouseLeave && o.onMouseLeave(e),
                clearTimeout(a.enterTimer),
                clearTimeout(a.leaveTimer),
                r
                  ? (e.persist(),
                    (a.leaveTimer = setTimeout(function() {
                      a.handleClose(e)
                    }, r)))
                  : a.handleClose(e)
            }),
            (a.handleClose = function(e) {
              a.isControlled || a.setState({ open: !1 }),
                a.props.onClose && a.props.onClose(e),
                clearTimeout(a.closeTimer),
                (a.closeTimer = setTimeout(function() {
                  a.ignoreNonTouchEvents = !1
                }, a.props.theme.transitions.duration.shortest))
            }),
            (a.handleTouchStart = function(e) {
              a.ignoreNonTouchEvents = !0
              var t = a.props,
                n = t.children,
                r = t.enterTouchDelay
              n.props.onTouchStart && n.props.onTouchStart(e),
                clearTimeout(a.leaveTimer),
                clearTimeout(a.closeTimer),
                clearTimeout(a.touchTimer),
                e.persist(),
                (a.touchTimer = setTimeout(function() {
                  a.handleEnter(e)
                }, r))
            }),
            (a.handleTouchEnd = function(e) {
              var t = a.props,
                n = t.children,
                r = t.leaveTouchDelay
              n.props.onTouchEnd && n.props.onTouchEnd(e),
                clearTimeout(a.touchTimer),
                clearTimeout(a.leaveTimer),
                e.persist(),
                (a.leaveTimer = setTimeout(function() {
                  a.handleClose(e)
                }, r))
            }),
            (a.isControlled = null != e.open),
            (a.state = { open: null }),
            a.isControlled || (a.state.open = !1),
            a
          )
        }
        return (
          (0, u.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                ;(this.defaultId = 'mui-tooltip-'.concat(
                  Math.round(1e5 * Math.random())
                )),
                  this.props.open && this.forceUpdate()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                clearTimeout(this.closeTimer),
                  clearTimeout(this.enterTimer),
                  clearTimeout(this.focusTimer),
                  clearTimeout(this.leaveTimer),
                  clearTimeout(this.touchTimer)
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  a = t.children,
                  n = t.classes,
                  l = t.disableFocusListener,
                  i = t.disableHoverListener,
                  c = t.disableTouchListener,
                  s = (t.enterDelay, t.enterTouchDelay, t.id),
                  u = t.interactive,
                  h = (t.leaveDelay,
                  t.leaveTouchDelay,
                  t.onClose,
                  t.onOpen,
                  t.open),
                  b = t.placement,
                  v = t.PopperProps,
                  E = t.theme,
                  x = t.title,
                  T = t.TransitionComponent,
                  w = t.TransitionProps,
                  O = (0, o.default)(t, [
                    'children',
                    'classes',
                    'disableFocusListener',
                    'disableHoverListener',
                    'disableTouchListener',
                    'enterDelay',
                    'enterTouchDelay',
                    'id',
                    'interactive',
                    'leaveDelay',
                    'leaveTouchDelay',
                    'onClose',
                    'onOpen',
                    'open',
                    'placement',
                    'PopperProps',
                    'theme',
                    'title',
                    'TransitionComponent',
                    'TransitionProps',
                  ]),
                  k = this.isControlled ? h : this.state.open
                '' === x && (k = !1)
                var P = !k && !i,
                  N = (0, r.default)(
                    {
                      'aria-describedby': k ? s || this.defaultId : null,
                      title: P && 'string' == typeof x ? x : null,
                    },
                    O,
                    a.props,
                    {
                      className: (0, d.default)(O.className, a.props.className),
                    }
                  )
                c ||
                  ((N.onTouchStart = this.handleTouchStart),
                  (N.onTouchEnd = this.handleTouchEnd)),
                  i ||
                    ((N.onMouseOver = this.handleEnter),
                    (N.onMouseLeave = this.handleLeave)),
                  l ||
                    ((N.onFocus = this.handleFocus),
                    (N.onBlur = this.handleLeave))
                var j = u
                  ? {
                      onMouseOver: N.onMouseOver,
                      onMouseLeave: N.onMouseLeave,
                      onFocus: N.onFocus,
                      onBlur: N.onBlur,
                    }
                  : {}
                return p.default.createElement(
                  p.default.Fragment,
                  null,
                  p.default.createElement(
                    f.default,
                    { rootRef: this.onRootRef },
                    p.default.cloneElement(a, N)
                  ),
                  p.default.createElement(
                    y.default,
                    (0, r.default)(
                      {
                        className: n.popper,
                        placement: b,
                        anchorEl: this.childrenRef,
                        open: k,
                        id: N['aria-describedby'],
                        transition: !0,
                      },
                      j,
                      v
                    ),
                    function(t) {
                      var a = t.placement,
                        o = t.TransitionProps
                      return p.default.createElement(
                        T,
                        (0, r.default)(
                          { timeout: E.transitions.duration.shorter },
                          o,
                          w
                        ),
                        p.default.createElement(
                          'div',
                          {
                            className: (0, d.default)(
                              n.tooltip,
                              (0, m.default)(
                                {},
                                n.touch,
                                e.ignoreNonTouchEvents
                              ),
                              n[
                                'tooltipPlacement'.concat(
                                  (0, g.capitalize)(a.split('-')[0])
                                )
                              ]
                            ),
                          },
                          x
                        )
                      )
                    }
                  )
                )
              },
            },
          ]),
          t
        )
      })(p.default.Component)
      ;(E.propTypes = {}),
        (E.defaultProps = {
          disableFocusListener: !1,
          disableHoverListener: !1,
          disableTouchListener: !1,
          enterDelay: 0,
          enterTouchDelay: 1e3,
          interactive: !1,
          leaveDelay: 0,
          leaveTouchDelay: 1500,
          placement: 'bottom',
          TransitionComponent: b.default,
        })
      var x = (0, h.default)(v, { name: 'MuiTooltip', withTheme: !0 })(E)
      t.default = x
    },
    1297: function(e, t, a) {
      __NEXT_REGISTER_PAGE('/blog-post', function() {
        return (e.exports = a(1387)), { page: e.exports.default }
      })
    },
    137: function(e, t, a) {
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
              d: 'M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z',
            }),
            r.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'Reply'
        )
      t.default = o
    },
    1387: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(37),
        l = a.n(o),
        i = a(5),
        c = a.n(i),
        s = a(32),
        u = a.n(s),
        m = a(13),
        p = a.n(m),
        d = a(288),
        f = a.n(d),
        h = a(29),
        g = a.n(h),
        b = a(36),
        y = a(45),
        v = a(7),
        E = a(2),
        x = a(3),
        T = a(6),
        w = a.n(T),
        O = a(405),
        k = a(952),
        P = a.n(k),
        N = a(953),
        j = a.n(N),
        S = a(306),
        R = a.n(S),
        A = a(1),
        C = a(51)
      function F(e, t, a) {
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
      var I = (function(e) {
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
              F(e, t, a[t])
            })
        }
        return e
      })(
        {
          container: A.f,
          title: A.I,
          section: {
            paddingBottom: '0',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            padding: '70px 0',
            '& p': {
              fontSize: '1.188rem',
              lineHeight: '1.5em',
              color: '#555',
              marginBottom: '30px',
            },
          },
          quoteText: { fontSize: '1.5rem !important' },
        },
        C.a
      )
      function H() {
        return (H =
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
      var L = c()(I)(function(e) {
          var t = H({}, e).classes,
            a = w()(t.imgRaised, t.imgRounded, t.imgFluid)
          return r.a.createElement(
            'div',
            { className: t.section },
            r.a.createElement(
              v.a,
              { justify: 'center' },
              r.a.createElement(
                E.a,
                { xs: 12, sm: 8, md: 8 },
                r.a.createElement(
                  'h3',
                  { className: t.title },
                  'The Castle Looks Different at Night...'
                ),
                r.a.createElement(
                  'p',
                  null,
                  "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.",
                  r.a.createElement('br', null),
                  r.a.createElement('br', null),
                  "And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece."
                ),
                r.a.createElement(O.a, {
                  textClassName: t.quoteText,
                  text:
                    '“And thank you for turning my personal jean jacket into a couture piece.”',
                  author: 'Kanye West, Producer.',
                })
              ),
              r.a.createElement(
                E.a,
                { xs: 12, sm: 10, md: 10, className: t.section },
                r.a.createElement(
                  v.a,
                  null,
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement('img', {
                      src: P.a,
                      alt: '...',
                      className: a,
                    })
                  ),
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement('img', {
                      src: j.a,
                      alt: '...',
                      className: a,
                    })
                  ),
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement('img', {
                      src: R.a,
                      alt: '...',
                      className: a,
                    })
                  )
                )
              ),
              r.a.createElement(
                E.a,
                { xs: 12, sm: 8, md: 8 },
                r.a.createElement(
                  'h3',
                  { className: t.title },
                  'Rest of the Story:'
                ),
                r.a.createElement(
                  'p',
                  null,
                  "We are here to make life better. And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.",
                  r.a.createElement('br', null),
                  'I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration.'
                ),
                r.a.createElement(
                  'p',
                  null,
                  "Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!"
                ),
                r.a.createElement(
                  'p',
                  null,
                  "I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!"
                )
              )
            )
          )
        }),
        B = a(64),
        M = a(9),
        z = a(54),
        D = a(60),
        _ = a.n(D),
        W = {
          section: {
            paddingTop: '30px',
            paddingBottom: '0',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            padding: '70px 0',
          },
          blogTags: { marginTop: '8px' },
          buttons: {
            marginTop: '0',
            marginBottom: '0',
            float: 'right !important',
          },
          card: { marginTop: '0', textAlign: 'left' },
          cardTitle: A.d,
          description: { fontSize: '1rem', color: '#999' },
          pullRight: { marginTop: '25px', float: 'right' },
        }
      function q() {
        return (q =
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
      var G = c()(W)(function(e) {
          var t = q({}, e).classes
          return r.a.createElement(
            'div',
            { className: t.section },
            r.a.createElement(
              v.a,
              { justify: 'center' },
              r.a.createElement(
                E.a,
                { xs: 12, sm: 10, md: 8 },
                r.a.createElement(
                  v.a,
                  null,
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 6, md: 6 },
                    r.a.createElement(
                      'div',
                      { className: t.blogTags },
                      'Tags:',
                      r.a.createElement(
                        B.a,
                        { color: 'primary' },
                        'Photography'
                      ),
                      r.a.createElement(B.a, { color: 'primary' }, 'Stories'),
                      r.a.createElement(B.a, { color: 'primary' }, 'Castle')
                    )
                  ),
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 6, md: 6 },
                    r.a.createElement(
                      x.a,
                      { color: 'google', round: !0, className: t.buttons },
                      r.a.createElement('i', { className: 'fab fa-google' }),
                      ' 232'
                    ),
                    r.a.createElement(
                      x.a,
                      { color: 'twitter', round: !0, className: t.buttons },
                      r.a.createElement('i', { className: 'fab fa-twitter' }),
                      ' 910'
                    ),
                    r.a.createElement(
                      x.a,
                      { color: 'facebook', round: !0, className: t.buttons },
                      r.a.createElement('i', {
                        className: 'fab fa-facebook-square',
                      }),
                      ' 872'
                    )
                  )
                ),
                r.a.createElement('hr', null),
                r.a.createElement(
                  M.a,
                  { plain: !0, profile: !0, className: t.card },
                  r.a.createElement(
                    v.a,
                    null,
                    r.a.createElement(
                      E.a,
                      { xs: 12, sm: 2, md: 2 },
                      r.a.createElement(
                        z.a,
                        { plain: !0, profile: !0 },
                        r.a.createElement('img', { src: _.a, alt: '...' })
                      )
                    ),
                    r.a.createElement(
                      E.a,
                      { xs: 12, sm: 8, md: 8 },
                      r.a.createElement(
                        'h4',
                        { className: t.cardTitle },
                        'Alec Thompson'
                      ),
                      r.a.createElement(
                        'p',
                        { className: t.description },
                        "I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube."
                      )
                    ),
                    r.a.createElement(
                      E.a,
                      { xs: 12, sm: 2, md: 2 },
                      r.a.createElement(
                        x.a,
                        { round: !0, className: t.pullRight },
                        'Follow'
                      )
                    )
                  )
                )
              )
            )
          )
        }),
        K = a(33),
        $ = a.n(K),
        V = a(137),
        Y = a.n(V),
        U = a(115),
        J = a(25),
        X = a(63),
        Q = a.n(X),
        Z = a(81),
        ee = a.n(Z)
      function te(e) {
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
              ae(e, t, a[t])
            })
        }
        return e
      }
      function ae(e, t, a) {
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
      var ne = te({}, a(75).a, {
        section: {
          backgroundposition: '50%',
          backgroundSize: 'cover',
          padding: '70px 0',
        },
        title: te({}, A.I, { marginBottom: '30px', textAlign: 'center' }),
        footerButtons: { float: 'right' },
        footerIcons: {
          width: '1.1rem',
          height: '1.1rem',
          position: 'relative',
          display: 'inline-block',
          top: '0',
          marginTop: '-1em',
          marginBottom: '-1em',
          marginRight: '3px',
          verticalAlign: 'middle',
        },
        color555: { '&,& *': { color: '#555 !important' } },
      })
      function re() {
        return (re =
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
      var oe = c()(ne)(function(e) {
          var t = re({}, e).classes
          return r.a.createElement(
            'div',
            { className: t.section },
            r.a.createElement(
              v.a,
              { justify: 'center' },
              r.a.createElement(
                E.a,
                { xs: 12, sm: 10, md: 8 },
                r.a.createElement(
                  'div',
                  null,
                  r.a.createElement('h3', { className: t.title }, '3 Comments'),
                  r.a.createElement(U.a, {
                    avatar: Q.a,
                    title: r.a.createElement(
                      'span',
                      null,
                      'Tina Andrew ',
                      r.a.createElement('small', null, '· 7 minutes ago')
                    ),
                    body: r.a.createElement(
                      'p',
                      { className: t.color555 },
                      "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"
                    ),
                    footer: r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        $.a,
                        {
                          id: 'tooltip-tina',
                          title: 'Reply to comment',
                          placement: 'top',
                          classes: { tooltip: t.tooltip },
                        },
                        r.a.createElement(
                          x.a,
                          {
                            color: 'primary',
                            simple: !0,
                            className: t.footerButtons,
                          },
                          r.a.createElement(Y.a, { className: t.footerIcons }),
                          ' Reply'
                        )
                      ),
                      r.a.createElement(
                        x.a,
                        {
                          color: 'danger',
                          simple: !0,
                          className: t.footerButtons,
                        },
                        r.a.createElement(g.a, { className: t.footerIcons }),
                        ' 243'
                      )
                    ),
                  }),
                  r.a.createElement(U.a, {
                    avatar: _.a,
                    title: r.a.createElement(
                      'span',
                      null,
                      'John Camber ',
                      r.a.createElement('small', null, '· Yesterday')
                    ),
                    body: r.a.createElement(
                      'span',
                      { className: t.color555 },
                      r.a.createElement(
                        'p',
                        null,
                        'Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.'
                      ),
                      r.a.createElement(
                        'p',
                        null,
                        "Don't forget, You're Awesome!"
                      )
                    ),
                    footer: r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        $.a,
                        {
                          id: 'tooltip-john',
                          title: 'Reply to comment',
                          placement: 'top',
                          classes: { tooltip: t.tooltip },
                        },
                        r.a.createElement(
                          x.a,
                          {
                            color: 'primary',
                            simple: !0,
                            className: t.footerButtons,
                          },
                          r.a.createElement(Y.a, { className: t.footerIcons }),
                          ' Reply'
                        )
                      ),
                      r.a.createElement(
                        x.a,
                        { link: !0, className: t.footerButtons },
                        r.a.createElement(g.a, { className: t.footerIcons }),
                        ' 25'
                      )
                    ),
                    innerMedias: [
                      r.a.createElement(U.a, {
                        key: Date.now(),
                        avatar: Q.a,
                        title: r.a.createElement(
                          'span',
                          null,
                          'Tina Andrew ',
                          r.a.createElement('small', null, '· 12 Hours Ago')
                        ),
                        body: r.a.createElement(
                          'span',
                          { className: t.color555 },
                          r.a.createElement(
                            'p',
                            null,
                            'Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.'
                          ),
                          r.a.createElement(
                            'p',
                            null,
                            "Don't forget, You're Awesome!"
                          )
                        ),
                        footer: r.a.createElement(
                          $.a,
                          {
                            id: 'tooltip-tina2',
                            title: 'Reply to comment',
                            placement: 'top',
                            classes: { tooltip: t.tooltip },
                          },
                          r.a.createElement(
                            x.a,
                            {
                              color: 'primary',
                              simple: !0,
                              className: t.footerButtons,
                            },
                            r.a.createElement(Y.a, {
                              className: t.footerIcons,
                            }),
                            ' Reply'
                          )
                        ),
                      }),
                    ],
                  })
                ),
                r.a.createElement(
                  'h3',
                  { className: t.title },
                  'Post your comment'
                ),
                r.a.createElement(U.a, {
                  avatar: ee.a,
                  body: r.a.createElement(J.a, {
                    labelText: ' Write some nice stuff or nothing...',
                    id: 'nice',
                    formControlProps: { fullWidth: !0 },
                    inputProps: { multiline: !0, rows: 5 },
                  }),
                  footer: r.a.createElement(
                    x.a,
                    { color: 'primary', round: !0, className: t.footerButtons },
                    'Post comment'
                  ),
                })
              )
            )
          )
        }),
        le = a(108),
        ie = a.n(le),
        ce = a(17),
        se = a(10),
        ue = a(76),
        me = a(53),
        pe = a(67),
        de = a(106),
        fe = a.n(de),
        he = a(107),
        ge = a.n(he),
        be = a(287),
        ye = a.n(be),
        ve = {
          container: A.f,
          title: A.I,
          cardTitle: A.d,
          coloredShadow: A.e,
          textCenter: { textAlign: 'center' },
          section: {
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            padding: '70px 0',
          },
          description: { color: '#999' },
        }
      function Ee() {
        return (Ee =
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
      var xe = c()(ve)(function(e) {
        var t = Ee({}, e).classes
        return r.a.createElement(
          'div',
          { className: t.section },
          r.a.createElement(
            'div',
            { className: t.container },
            r.a.createElement(
              v.a,
              null,
              r.a.createElement(
                E.a,
                { md: 12 },
                r.a.createElement(
                  'h2',
                  { className: t.title + ' ' + t.textCenter },
                  'Similar Stories'
                ),
                r.a.createElement('br', null),
                r.a.createElement(
                  v.a,
                  null,
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement(
                      M.a,
                      { blog: !0 },
                      r.a.createElement(
                        ce.a,
                        { image: !0 },
                        r.a.createElement(
                          'a',
                          { href: '#pablo' },
                          r.a.createElement('img', { src: fe.a, alt: '...' })
                        ),
                        r.a.createElement('div', {
                          className: t.coloredShadow,
                          style: {
                            backgroundImage: 'url(' + fe.a + ')',
                            opacity: '1',
                          },
                        })
                      ),
                      r.a.createElement(
                        se.a,
                        null,
                        r.a.createElement(
                          ue.a,
                          null,
                          r.a.createElement('h6', null, 'ENTERPRISE')
                        ),
                        r.a.createElement(
                          'h4',
                          { className: t.cardTitle },
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            'Autodesk looks to future of 3D printing with Project Escher'
                          )
                        ),
                        r.a.createElement(
                          'p',
                          { className: t.description },
                          'Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.',
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            ' Read More '
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement(
                      M.a,
                      { blog: !0 },
                      r.a.createElement(
                        ce.a,
                        { image: !0 },
                        r.a.createElement(
                          'a',
                          { href: '#pablo' },
                          r.a.createElement('img', { src: ge.a, alt: '...' })
                        ),
                        r.a.createElement('div', {
                          className: t.coloredShadow,
                          style: {
                            backgroundImage: 'url(' + ge.a + ')',
                            opacity: '1',
                          },
                        })
                      ),
                      r.a.createElement(
                        se.a,
                        null,
                        r.a.createElement(
                          me.a,
                          null,
                          r.a.createElement('h6', null, 'STARTUPS')
                        ),
                        r.a.createElement(
                          'h4',
                          { className: t.cardTitle },
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            'Lyft launching cross-platform service this week'
                          )
                        ),
                        r.a.createElement(
                          'p',
                          { className: t.description },
                          'Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.',
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            ' Read More '
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    E.a,
                    { xs: 12, sm: 4, md: 4 },
                    r.a.createElement(
                      M.a,
                      { blog: !0 },
                      r.a.createElement(
                        ce.a,
                        { image: !0 },
                        r.a.createElement(
                          'a',
                          { href: '#pablo' },
                          r.a.createElement('img', { src: ye.a, alt: '...' })
                        ),
                        r.a.createElement('div', {
                          className: t.coloredShadow,
                          style: {
                            backgroundImage: 'url(' + ye.a + ')',
                            opacity: '1',
                          },
                        })
                      ),
                      r.a.createElement(
                        se.a,
                        null,
                        r.a.createElement(
                          pe.a,
                          null,
                          r.a.createElement(
                            'h6',
                            null,
                            r.a.createElement(ie.a, null),
                            ' ENTERPRISE'
                          )
                        ),
                        r.a.createElement(
                          'h4',
                          { className: t.cardTitle },
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            '6 insights into the French Fashion landscape'
                          )
                        ),
                        r.a.createElement(
                          'p',
                          { className: t.description },
                          'Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.',
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            ' Read More '
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      })
      function Te(e) {
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
              we(e, t, a[t])
            })
        }
        return e
      }
      function we(e, t, a) {
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
      var Oe = {
        container: Te({}, A.f, { zIndex: '2' }),
        textCenter: { textAlign: 'center' },
        title: Te({}, A.I, { color: '#FFFFFF' }),
        subtitle: { color: '#FFFFFF' },
        main: Te({}, A.r, A.s),
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
        inlineBlock: { display: 'inline-block', padding: '0px', width: 'auto' },
        list: { marginBottom: '0', padding: '0', marginTop: '0' },
        left: { float: 'left!important', display: 'block' },
        right: { padding: '15px 0', margin: '0', float: 'right' },
        icon: {
          width: '18px',
          height: '18px',
          top: '3px',
          position: 'relative',
        },
      }
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
      function Pe(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function Ne(e, t) {
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
      function je(e) {
        return (je = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function Se(e, t) {
        return (Se =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Re = l()(
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
        Ae = l()(
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
        Ce = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              Ne(this, je(t).apply(this, arguments))
            )
          }
          var n, o, l
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Se(e, t)
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
                  var e = this.props.classes
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(b.a, {
                      brand: 'Material Kit PRO React',
                      links: r.a.createElement(Re, {
                        dropdownHoverColor: 'info',
                      }),
                      fixed: !0,
                      color: 'transparent',
                      changeColorOnScroll: { height: 300, color: 'info' },
                    }),
                    r.a.createElement(
                      Ae,
                      { image: a(205), filter: 'dark' },
                      r.a.createElement(
                        'div',
                        { className: e.container },
                        r.a.createElement(
                          v.a,
                          { justify: 'center' },
                          r.a.createElement(
                            E.a,
                            { md: 8, className: e.textCenter },
                            r.a.createElement(
                              'h1',
                              { className: e.title },
                              'How We Built the Most Successful Castle Ever'
                            ),
                            r.a.createElement(
                              'h4',
                              { className: e.subtitle },
                              'The last 48 hours of my life were total madness. This is what I did.'
                            ),
                            r.a.createElement('br', null),
                            r.a.createElement(
                              x.a,
                              { color: 'rose', size: 'lg', round: !0 },
                              r.a.createElement(f.a, null),
                              ' Read Article'
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: e.main },
                      r.a.createElement(
                        'div',
                        { className: e.container },
                        r.a.createElement(L, null),
                        r.a.createElement(G, null),
                        r.a.createElement(oe, null)
                      )
                    ),
                    r.a.createElement(xe, null),
                    r.a.createElement(y.a, {
                      content: r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'div',
                          { className: e.left },
                          r.a.createElement(
                            u.a,
                            { className: e.list },
                            r.a.createElement(
                              p.a,
                              { className: e.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: 'https://www.creative-tim.com/',
                                  className: e.block,
                                },
                                'Creative Tim'
                              )
                            ),
                            r.a.createElement(
                              p.a,
                              { className: e.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href:
                                    'https://www.creative-tim.com/presentation',
                                  className: e.block,
                                },
                                'About us'
                              )
                            ),
                            r.a.createElement(
                              p.a,
                              { className: e.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: '//blog.creative-tim.com/',
                                  className: e.block,
                                },
                                'Blog'
                              )
                            ),
                            r.a.createElement(
                              p.a,
                              { className: e.inlineBlock },
                              r.a.createElement(
                                'a',
                                {
                                  href: 'https://www.creative-tim.com/license',
                                  className: e.block,
                                },
                                'Licenses'
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: e.right },
                          '© ',
                          1900 + new Date().getYear(),
                          ' , made with',
                          ' ',
                          r.a.createElement(g.a, { className: e.icon }),
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
            ]) && Pe(n.prototype, o),
            l && Pe(n, l),
            t
          )
        })(),
        Fe = c()(Oe)(Ce),
        Ie = a(47),
        He = a.n(Ie)
      t.default = function() {
        return r.a.createElement(
          n.Fragment,
          null,
          r.a.createElement(He.a, null),
          r.a.createElement(Fe, null)
        )
      }
    },
    205: function(e, t) {
      e.exports =
        '/_next/static/images/bg5-0b37f7db5bf7d7c1b023360ed53db140.jpg'
    },
    287: function(e, t) {
      e.exports =
        '/_next/static/images/blog7-68d5c430da9b07976b4421717dbac1f7.jpg'
    },
    288: function(e, t, a) {
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
              d:
                'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
            }),
            r.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'FormatAlignLeft'
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
    306: function(e, t) {
      e.exports =
        '/_next/static/images/blog1-9313c5c1333ff21cb68f6a11a8a18239.jpg'
    },
    33: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        })
      var r = n(a(119))
    },
    405: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        l = a.n(o),
        i = (a(8), a(5)),
        c = a.n(i),
        s = a(30)
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
      function m() {
        return (m =
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
      t.a = c()(s.a)(function(e) {
        var t,
          a,
          n = m({}, e),
          o = n.classes,
          i = n.text,
          c = n.author,
          s = n.authorClassName,
          p = n.textClassName,
          d = l()(o.defaultFontStyle, o.quote),
          f = l()((u((t = {}), o.quoteText, !0), u(t, p, void 0 !== p), t)),
          h = l()((u((a = {}), o.quoteAuthor, !0), u(a, s, void 0 !== s), a))
        return r.a.createElement(
          'blockquote',
          { className: d },
          r.a.createElement('p', { className: f }, i),
          r.a.createElement('small', { className: h }, c)
        )
      })
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
    53: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
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
      t.a = l()(i.a)(function(e) {
        var t = c({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.successText },
          n
        )
      })
    },
    54: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        l = a.n(o),
        i = (a(8), a(5)),
        c = a.n(i),
        s = {
          cardAvatar: {
            '&$cardAvatarProfile img,&$cardAvatarTestimonial img': {
              width: '100%',
              height: 'auto',
            },
          },
          cardAvatarProfile: {
            maxWidth: '130px',
            maxHeight: '130px',
            margin: '-50px auto 0',
            borderRadius: '50%',
            overflow: 'hidden',
            padding: '0',
            boxShadow:
              '0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            '&$cardAvatarPlain': { marginTop: '0' },
          },
          cardAvatarPlain: {},
          cardAvatarTestimonial: {
            margin: '-50px auto 0',
            maxWidth: '100px',
            maxHeight: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            padding: '0',
            boxShadow:
              '0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            '&$cardAvatarPlain': { marginTop: '0' },
          },
          cardAvatarTestimonialFooter: {
            marginBottom: '-50px',
            marginTop: '10px',
          },
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
      function p() {
        return (p =
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
          a = p({}, e),
          n = a.classes,
          o = a.children,
          i = a.className,
          c = a.plain,
          s = a.profile,
          d = a.testimonial,
          f = a.testimonialFooter,
          h = m(a, [
            'classes',
            'children',
            'className',
            'plain',
            'profile',
            'testimonial',
            'testimonialFooter',
          ]),
          g = l()(
            (u((t = {}), n.cardAvatar, !0),
            u(t, n.cardAvatarProfile, s),
            u(t, n.cardAvatarPlain, c),
            u(t, n.cardAvatarTestimonial, d),
            u(t, n.cardAvatarTestimonialFooter, f),
            u(t, i, void 0 !== i),
            t)
          )
        return r.a.createElement('div', p({ className: g }, h), o)
      })
    },
    60: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile1-square-3122abf4a3e1067926c08dee7684522d.jpg'
    },
    63: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile4-square-1a1649171cdecd24e7a16ea1340077df.jpg'
    },
    64: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        l = a.n(o),
        i = (a(8), a(5)),
        c = a.n(i),
        s = a(1),
        u = {
          badge: {
            marginRight: '3px',
            borderRadius: '12px',
            padding: '5px 12px',
            textTransform: 'uppercase',
            fontSize: '10px',
            fontWeight: '500',
            lineHeight: '1',
            color: '#fff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            display: 'inline-block',
          },
          primary: { backgroundColor: s.x },
          warning: { backgroundColor: s.M },
          danger: { backgroundColor: s.j },
          success: { backgroundColor: s.H },
          info: { backgroundColor: s.q },
          rose: { backgroundColor: s.A },
          gray: { backgroundColor: '#6c757d' },
        }
      function m(e, t, a) {
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
      function p() {
        return (p =
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
      function d(e) {
        var t,
          a = p({}, e),
          n = a.classes,
          o = a.color,
          i = a.children,
          c = a.className,
          s = l()(
            (m((t = {}), n.badge, !0), m(t, n[o], !0), m(t, c, void 0 !== c), t)
          )
        return r.a.createElement('span', { className: s }, i)
      }
      d.defaultProps = { color: 'gray' }
      t.a = c()(u)(d)
    },
    67: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
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
      t.a = l()(i.a)(function(e) {
        var t = c({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.dangerText },
          n
        )
      })
    },
    76: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
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
      t.a = l()(i.a)(function(e) {
        var t = c({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.infoText },
          n
        )
      })
    },
    81: function(e, t) {
      e.exports =
        '/_next/static/images/card-profile6-square-1f1f4900f3bc166b75f8235c2b89864f.jpg'
    },
    952: function(e, t) {
      e.exports =
        '/_next/static/images/blog4-5de2130fafda51c38a113a56a2140dff.jpg'
    },
    953: function(e, t) {
      e.exports =
        '/_next/static/images/blog3-a4ee46b8a333dfa7323c21b0cb2ed36b.jpg'
    },
  },
  [[1297, 1, 0]],
])
