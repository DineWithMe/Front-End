;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    103: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(142)).default
      t.default = r
    },
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
    119: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(20)),
        i = n(a(21)),
        s = n(a(22)),
        c = n(a(23)),
        d = n(a(24)),
        u = n(a(18)),
        p = n(a(0)),
        f = (n(a(8)), n(a(31)), n(a(6))),
        h = n(a(221)),
        m = n(a(5)),
        v = a(34),
        g = n(a(133)),
        b = n(a(204)),
        y = function(e) {
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
            tooltipPlacementLeft: (0, u.default)(
              { transformOrigin: 'right center', margin: '0 24px ' },
              e.breakpoints.up('sm'),
              { margin: '0 14px' }
            ),
            tooltipPlacementRight: (0, u.default)(
              { transformOrigin: 'left center', margin: '0 24px' },
              e.breakpoints.up('sm'),
              { margin: '0 14px' }
            ),
            tooltipPlacementTop: (0, u.default)(
              { transformOrigin: 'center bottom', margin: '24px 0' },
              e.breakpoints.up('sm'),
              { margin: '14px 0' }
            ),
            tooltipPlacementBottom: (0, u.default)(
              { transformOrigin: 'center top', margin: '24px 0' },
              e.breakpoints.up('sm'),
              { margin: '14px 0' }
            ),
          }
        }
      t.styles = y
      var x = (function(e) {
        function t(e) {
          var a
          return (
            (0, l.default)(this, t),
            ((a = (0, s.default)(
              this,
              (0, c.default)(t).call(this)
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
          (0, d.default)(t, e),
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
                  s = t.disableTouchListener,
                  c = (t.enterDelay, t.enterTouchDelay, t.id),
                  d = t.interactive,
                  m = (t.leaveDelay,
                  t.leaveTouchDelay,
                  t.onClose,
                  t.onOpen,
                  t.open),
                  g = t.placement,
                  y = t.PopperProps,
                  x = t.theme,
                  E = t.title,
                  w = t.TransitionComponent,
                  S = t.TransitionProps,
                  T = (0, o.default)(t, [
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
                  C = this.isControlled ? m : this.state.open
                '' === E && (C = !1)
                var N = !C && !i,
                  O = (0, r.default)(
                    {
                      'aria-describedby': C ? c || this.defaultId : null,
                      title: N && 'string' == typeof E ? E : null,
                    },
                    T,
                    a.props,
                    {
                      className: (0, f.default)(T.className, a.props.className),
                    }
                  )
                s ||
                  ((O.onTouchStart = this.handleTouchStart),
                  (O.onTouchEnd = this.handleTouchEnd)),
                  i ||
                    ((O.onMouseOver = this.handleEnter),
                    (O.onMouseLeave = this.handleLeave)),
                  l ||
                    ((O.onFocus = this.handleFocus),
                    (O.onBlur = this.handleLeave))
                var k = d
                  ? {
                      onMouseOver: O.onMouseOver,
                      onMouseLeave: O.onMouseLeave,
                      onFocus: O.onFocus,
                      onBlur: O.onBlur,
                    }
                  : {}
                return p.default.createElement(
                  p.default.Fragment,
                  null,
                  p.default.createElement(
                    h.default,
                    { rootRef: this.onRootRef },
                    p.default.cloneElement(a, O)
                  ),
                  p.default.createElement(
                    b.default,
                    (0, r.default)(
                      {
                        className: n.popper,
                        placement: g,
                        anchorEl: this.childrenRef,
                        open: C,
                        id: O['aria-describedby'],
                        transition: !0,
                      },
                      k,
                      y
                    ),
                    function(t) {
                      var a = t.placement,
                        o = t.TransitionProps
                      return p.default.createElement(
                        w,
                        (0, r.default)(
                          { timeout: x.transitions.duration.shorter },
                          o,
                          S
                        ),
                        p.default.createElement(
                          'div',
                          {
                            className: (0, f.default)(
                              n.tooltip,
                              (0, u.default)(
                                {},
                                n.touch,
                                e.ignoreNonTouchEvents
                              ),
                              n[
                                'tooltipPlacement'.concat(
                                  (0, v.capitalize)(a.split('-')[0])
                                )
                              ]
                            ),
                          },
                          E
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
      ;(x.propTypes = {}),
        (x.defaultProps = {
          disableFocusListener: !1,
          disableHoverListener: !1,
          disableTouchListener: !1,
          enterDelay: 0,
          enterTouchDelay: 1e3,
          interactive: !1,
          leaveDelay: 0,
          leaveTouchDelay: 1500,
          placement: 'bottom',
          TransitionComponent: g.default,
        })
      var E = (0, m.default)(y, { name: 'MuiTooltip', withTheme: !0 })(x)
      t.default = E
    },
    127: function(e, t, a) {
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
                'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            }),
            r.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'Mail'
        )
      t.default = o
    },
    1300: function(e, t, a) {
      __NEXT_REGISTER_PAGE('/blog-posts', function() {
        return (e.exports = a(1388)), { page: e.exports.default }
      })
    },
    1388: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(37),
        l = a.n(o),
        i = a(5),
        s = a.n(i),
        c = a(32),
        d = a.n(c),
        u = a(13),
        p = a.n(u),
        f = a(29),
        h = a.n(f),
        m = a(36),
        v = a(45),
        g = a(7),
        b = a(2),
        y = a(33),
        x = a.n(y),
        E = a(288),
        w = a.n(E),
        S = a(70),
        T = a(9),
        C = a(10),
        N = a(3),
        O = a(173),
        k = a.n(O),
        M = a(107),
        P = a.n(M),
        j = a(406),
        L = a.n(j),
        I = a(1)
      function R(e) {
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
      }
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
      var _ = R({}, a(75).a, {
        section: {
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          padding: '70px 0',
        },
        textCenter: { textAlign: 'center' },
        category: {
          color: 'rgba(255, 255, 255, 0.7) !important',
          marginTop: '10px',
        },
        cardTitle: R({}, I.d, { color: '#FFFFFF !important' }),
        icons: {
          width: '1.1rem',
          height: '1.1rem',
          position: 'relative',
          display: 'inline-block',
          top: '0',
          marginTop: '-1em',
          marginBottom: '-1em',
          marginRight: '4px',
          verticalAlign: 'middle',
        },
        tabSpace: { padding: '20px 0 50px' },
      })
      function W() {
        return (W =
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
      var H = s()(_)(function(e) {
          var t = W({}, e).classes
          return r.a.createElement(
            'div',
            { className: t.section },
            r.a.createElement(
              g.a,
              { justify: 'center' },
              r.a.createElement(
                b.a,
                { xs: 12, sm: 12, md: 8, className: t.textCenter },
                r.a.createElement(S.a, {
                  alignCenter: !0,
                  tabs: [
                    { tabButton: 'All', tabContent: '' },
                    { tabButton: 'World', tabContent: '' },
                    { tabButton: 'Arts', tabContent: '' },
                    { tabButton: 'Tech', tabContent: '' },
                    { tabButton: 'Business', tabContent: '' },
                  ],
                }),
                r.a.createElement('div', { className: t.tabSpace })
              )
            ),
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                b.a,
                { xs: 12, sm: 6, md: 6 },
                r.a.createElement(
                  T.a,
                  {
                    raised: !0,
                    background: !0,
                    style: { backgroundImage: 'url(' + k.a + ')' },
                  },
                  r.a.createElement(
                    C.a,
                    { background: !0 },
                    r.a.createElement(
                      'h6',
                      { className: t.category },
                      'WORLDS'
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement(
                        'h3',
                        { className: t.cardTitle },
                        'The Best Productivity Apps on Market'
                      )
                    ),
                    r.a.createElement(
                      'p',
                      { className: t.category },
                      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                    ),
                    r.a.createElement(
                      N.a,
                      { round: !0, href: '#pablo', color: 'danger' },
                      r.a.createElement(w.a, { className: t.icons }),
                      ' Read article'
                    )
                  )
                )
              ),
              r.a.createElement(
                b.a,
                { xs: 12, sm: 6, md: 6 },
                r.a.createElement(
                  T.a,
                  {
                    raised: !0,
                    background: !0,
                    style: { backgroundImage: 'url(' + P.a + ')' },
                  },
                  r.a.createElement(
                    C.a,
                    { background: !0 },
                    r.a.createElement(
                      'h6',
                      { className: t.category },
                      'BUSINESS'
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement(
                        'h3',
                        { className: t.cardTitle },
                        'Working on Wallstreet is Not So Easy'
                      )
                    ),
                    r.a.createElement(
                      'p',
                      { className: t.category },
                      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                    ),
                    r.a.createElement(
                      N.a,
                      { round: !0, href: '#pablo', color: 'primary' },
                      r.a.createElement(w.a, { className: t.icons }),
                      ' Read article'
                    )
                  )
                )
              ),
              r.a.createElement(
                b.a,
                { xs: 12, sm: 12, md: 12 },
                r.a.createElement(
                  T.a,
                  {
                    raised: !0,
                    background: !0,
                    style: { backgroundImage: 'url(' + L.a + ')' },
                  },
                  r.a.createElement(
                    C.a,
                    { background: !0 },
                    r.a.createElement(
                      'h6',
                      { className: t.category },
                      'MARKETING'
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement(
                        'h3',
                        { className: t.cardTitle },
                        '0 to 100.000 Customers in 6 months'
                      )
                    ),
                    r.a.createElement(
                      'p',
                      { className: t.category },
                      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                    ),
                    r.a.createElement(
                      N.a,
                      { round: !0, href: '#pablo', color: 'warning' },
                      r.a.createElement(w.a, { className: t.icons }),
                      ' Read case study'
                    ),
                    r.a.createElement(
                      x.a,
                      {
                        id: 'tooltip-pocket',
                        title: 'Save to Pocket',
                        placement: 'top',
                        classes: { tooltip: t.tooltip },
                      },
                      r.a.createElement(
                        N.a,
                        { color: 'white', simple: !0, justIcon: !0 },
                        r.a.createElement('i', {
                          className: 'fab fa-get-pocket',
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        }),
        z = a(108),
        D = a.n(z),
        B = a(17),
        A = a(76),
        X = a(53),
        U = a(67),
        Y = a(205),
        V = a.n(Y),
        q = a(168),
        K = a.n(q),
        G = a(106),
        $ = a.n(G),
        J = {
          title: I.I,
          cardTitle: I.d,
          coloredShadow: I.e,
          textCenter: { textAlign: 'center' },
          section: {
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            padding: '70px 0',
          },
          description: { color: '#999' },
        }
      function Q() {
        return (Q =
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
      var Z = s()(J)(function(e) {
          var t = Q({}, e).classes
          return r.a.createElement(
            'div',
            { className: t.section },
            r.a.createElement(
              'h3',
              { className: t.title + ' ' + t.textCenter },
              'You may also be interested in'
            ),
            r.a.createElement('br', null),
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                b.a,
                { xs: 12, sm: 4, md: 4, lg: 4, xl: 4 },
                r.a.createElement(
                  T.a,
                  { plain: !0, blog: !0 },
                  r.a.createElement(
                    B.a,
                    { image: !0, plain: !0 },
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement('img', { src: V.a, alt: '...' })
                    ),
                    r.a.createElement('div', {
                      className: t.coloredShadow,
                      style: {
                        backgroundImage: 'url(' + V.a + ')',
                        opacity: '1',
                      },
                    })
                  ),
                  r.a.createElement(
                    C.a,
                    { plain: !0 },
                    r.a.createElement(
                      A.a,
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
                      r.a.createElement('a', { href: '#pablo' }, ' Read More ')
                    )
                  )
                )
              ),
              r.a.createElement(
                b.a,
                { xs: 12, sm: 4, md: 4, lg: 4, xl: 4 },
                r.a.createElement(
                  T.a,
                  { plain: !0, blog: !0 },
                  r.a.createElement(
                    B.a,
                    { plain: !0, image: !0 },
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement('img', { src: K.a, alt: '...' })
                    ),
                    r.a.createElement('div', {
                      className: t.coloredShadow,
                      style: {
                        backgroundImage: 'url(' + K.a + ')',
                        opacity: '1',
                      },
                    })
                  ),
                  r.a.createElement(
                    C.a,
                    { plain: !0 },
                    r.a.createElement(
                      X.a,
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
                      r.a.createElement('a', { href: '#pablo' }, ' Read More ')
                    )
                  )
                )
              ),
              r.a.createElement(
                b.a,
                { xs: 12, sm: 4, md: 4, lg: 4, xl: 4 },
                r.a.createElement(
                  T.a,
                  { plain: !0, blog: !0 },
                  r.a.createElement(
                    B.a,
                    { plain: !0, image: !0 },
                    r.a.createElement(
                      'a',
                      { href: '#pablo' },
                      r.a.createElement('img', { src: $.a, alt: '...' })
                    ),
                    r.a.createElement('div', {
                      className: t.coloredShadow,
                      style: {
                        backgroundImage: 'url(' + $.a + ')',
                        opacity: '1',
                      },
                    })
                  ),
                  r.a.createElement(
                    C.a,
                    { plain: !0 },
                    r.a.createElement(
                      U.a,
                      null,
                      r.a.createElement(
                        'h6',
                        null,
                        r.a.createElement(D.a, null),
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
                      r.a.createElement('a', { href: '#pablo' }, ' Read More ')
                    )
                  )
                )
              )
            )
          )
        }),
        ee = a(19),
        te = a(35),
        ae = a(720),
        ne = a.n(ae),
        re = a(60),
        oe = a.n(re),
        le = a(63),
        ie = a.n(le)
      function se(e) {
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
              ce(e, t, a[t])
            })
        }
        return e
      }
      function ce(e, t, a) {
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
      var de = {
        container: se({}, I.f, { position: 'relative', zIndex: '2' }),
        section: se({}, I.C, I.D, {
          padding: '80px 0',
          position: 'relative',
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
        cardTitle: se({}, I.d, { color: '#FFFFFF !important' }),
        description: { color: 'rgba(255, 255, 255, 0.76)' },
        textLeft: { textAlign: 'left' },
      }
      function ue() {
        return (ue =
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
      var pe = s()(de)(function(e) {
          var t = ue({}, e).classes
          return r.a.createElement(
            'div',
            {
              className: t.section,
              style: { backgroundImage: 'url(' + ne.a + ')' },
            },
            r.a.createElement(
              'div',
              { className: t.container },
              r.a.createElement(
                g.a,
                null,
                r.a.createElement(
                  b.a,
                  { xs: 12, sm: 6, md: 6 },
                  r.a.createElement(
                    T.a,
                    { profile: !0, plain: !0, className: t.textLeft },
                    r.a.createElement(
                      g.a,
                      null,
                      r.a.createElement(
                        b.a,
                        { xs: 12, sm: 5, md: 5 },
                        r.a.createElement(
                          B.a,
                          { image: !0, plain: !0 },
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            r.a.createElement('img', { src: oe.a, alt: '...' })
                          )
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { xs: 12, sm: 7, md: 7 },
                        r.a.createElement(
                          C.a,
                          { plain: !0 },
                          r.a.createElement(
                            'h4',
                            { className: t.cardTitle },
                            'Alec Thompson'
                          ),
                          r.a.createElement(
                            te.a,
                            null,
                            r.a.createElement('h6', null, 'AUTHOR OF THE MONTH')
                          ),
                          r.a.createElement(
                            'p',
                            { className: t.description },
                            "Don't be scared of the truth because we need to restart the human foundation in truth..."
                          )
                        ),
                        r.a.createElement(
                          ee.a,
                          { profile: !0, plain: !0 },
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
                            },
                            r.a.createElement('i', {
                              className: 'fab fa-twitter',
                            })
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
                            },
                            r.a.createElement('i', {
                              className: 'fab fa-facebook-square',
                            })
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
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
                  b.a,
                  { xs: 12, sm: 6, md: 6 },
                  r.a.createElement(
                    T.a,
                    { profile: !0, plain: !0, className: t.textLeft },
                    r.a.createElement(
                      g.a,
                      null,
                      r.a.createElement(
                        b.a,
                        { xs: 12, sm: 5, md: 5 },
                        r.a.createElement(
                          B.a,
                          { image: !0, plain: !0 },
                          r.a.createElement(
                            'a',
                            { href: '#pablo' },
                            r.a.createElement('img', { src: ie.a, alt: '...' })
                          )
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { xs: 12, sm: 7, md: 7 },
                        r.a.createElement(
                          C.a,
                          { plain: !0 },
                          r.a.createElement(
                            'h4',
                            { className: t.cardTitle },
                            'Kendall Andrew'
                          ),
                          r.a.createElement(
                            te.a,
                            null,
                            r.a.createElement('h6', null, 'AUTHOR OF THE WEEK')
                          ),
                          r.a.createElement(
                            'p',
                            { className: t.description },
                            "Don't be scared of the truth because we need to restart the human foundation in truth..."
                          )
                        ),
                        r.a.createElement(
                          ee.a,
                          { profile: !0, plain: !0 },
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
                            },
                            r.a.createElement('i', {
                              className: 'fab fa-linkedin-in',
                            })
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
                            },
                            r.a.createElement('i', {
                              className: 'fab fa-facebook-square',
                            })
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
                            },
                            r.a.createElement('i', {
                              className: 'fab fa-dribbble',
                            })
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              justIcon: !0,
                              simple: !0,
                              color: 'white',
                              href: '#pablo',
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
        }),
        fe = a(46),
        he = a.n(fe),
        me = a(127),
        ve = a.n(me),
        ge = a(25),
        be = {
          container: I.f,
          title: I.I,
          description: I.l,
          section: { padding: '1.875rem 0' },
          cardClasses: { marginTop: '30px' },
          icon: { color: '#495057' },
          formControl: {
            paddingTop: '0px !important',
            paddingBottom: '0px !important',
            margin: '0px !important',
          },
          alignItemsCenter: { display: 'flex', alignItems: 'center' },
        }
      function ye() {
        return (ye =
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
      var xe = s()(be)(function(e) {
        var t = ye({}, e).classes
        return r.a.createElement(
          'div',
          { className: t.section },
          r.a.createElement(
            'div',
            { className: t.container },
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                b.a,
                { xs: 12, sm: 6, md: 6 },
                r.a.createElement(
                  'h3',
                  { className: t.title },
                  'Get Tips & Tricks every Week!'
                ),
                r.a.createElement(
                  'p',
                  { className: t.description },
                  'Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.'
                )
              ),
              r.a.createElement(
                b.a,
                { xs: 12, sm: 6, md: 6 },
                r.a.createElement(
                  T.a,
                  { plain: !0, className: t.cardClasses },
                  r.a.createElement(
                    C.a,
                    { formHorizontal: !0, plain: !0 },
                    r.a.createElement(
                      'form',
                      null,
                      r.a.createElement(
                        g.a,
                        null,
                        r.a.createElement(
                          b.a,
                          {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: t.alignItemsCenter,
                          },
                          r.a.createElement(ge.a, {
                            id: 'subscribe',
                            formControlProps: {
                              fullWidth: !0,
                              className: t.formControl,
                            },
                            inputProps: {
                              startAdornment: r.a.createElement(
                                he.a,
                                { position: 'start' },
                                r.a.createElement(ve.a, { className: t.icon })
                              ),
                              placeholder: 'Your Email...',
                            },
                          })
                        ),
                        r.a.createElement(
                          b.a,
                          { xs: 12, sm: 4, md: 4 },
                          r.a.createElement(
                            N.a,
                            { round: !0, block: !0, color: 'primary' },
                            'Subscribe'
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
      function Ee(e) {
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
      var Se = {
        container: Ee({}, I.f, { zIndex: '2', position: 'relative' }),
        textCenter: { textAlign: 'center' },
        title: Ee({}, I.I, { color: '#FFFFFF' }),
        main: Ee({}, I.r, I.s),
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
      function Te(e) {
        return (Te =
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
      function Ce(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function Ne(e, t) {
        return !t || ('object' !== Te(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function Oe(e) {
        return (Oe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function ke(e, t) {
        return (ke =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Me = l()(
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
        Pe = l()(
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
        je = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
              Ne(this, Oe(t).apply(this, arguments))
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
                t && ke(e, t)
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
                    r.a.createElement(m.a, {
                      brand: 'Material Kit PRO React',
                      links: r.a.createElement(Me, {
                        dropdownHoverColor: 'info',
                      }),
                      fixed: !0,
                      color: 'transparent',
                      changeColorOnScroll: { height: 400, color: 'info' },
                    }),
                    r.a.createElement(
                      Pe,
                      { image: a(720), filter: 'dark', small: !0 },
                      r.a.createElement(
                        'div',
                        { className: e.container },
                        r.a.createElement(
                          g.a,
                          { justify: 'center' },
                          r.a.createElement(
                            b.a,
                            { xs: 12, sm: 12, md: 8, className: e.textCenter },
                            r.a.createElement(
                              'h2',
                              { className: e.title },
                              'A Place for Entrepreneurs to Share and Discover New Stories'
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
                        r.a.createElement(H, null),
                        r.a.createElement(Z, null)
                      ),
                      r.a.createElement(pe, null),
                      r.a.createElement(xe, null)
                    ),
                    r.a.createElement(v.a, {
                      content: r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'div',
                          { className: e.left },
                          r.a.createElement(
                            d.a,
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
                          r.a.createElement(h.a, { className: e.icon }),
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
            ]) && Ce(n.prototype, o),
            l && Ce(n, l),
            t
          )
        })(),
        Le = s()(Se)(je),
        Ie = a(47),
        Re = a.n(Ie)
      t.default = function() {
        return r.a.createElement(
          n.Fragment,
          null,
          r.a.createElement(Re.a, null),
          r.a.createElement(Le, null)
        )
      }
    },
    142: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDomTreeShapes = T),
        (t.findNativeHandler = N),
        (t.default = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(20)),
        i = n(a(21)),
        s = n(a(22)),
        c = n(a(23)),
        d = n(a(24)),
        u = n(a(0)),
        p = n(a(8)),
        f = (n(a(31)), n(a(256))),
        h = n(a(143)),
        m = n(a(144)),
        v = a(145)
      function g(e, t, a, n) {
        return (
          (0, h.default)(e, t, a, n),
          {
            remove: function() {
              ;(0, m.default)(e, t, a, n)
            },
          }
        )
      }
      var b = { direction: 'ltr', display: 'flex', willChange: 'transform' },
        y = {
          width: '100%',
          WebkitFlexShrink: 0,
          flexShrink: 0,
          overflow: 'auto',
        },
        x = {
          root: {
            x: { overflowX: 'hidden' },
            'x-reverse': { overflowX: 'hidden' },
            y: { overflowY: 'hidden' },
            'y-reverse': { overflowY: 'hidden' },
          },
          flexDirection: {
            x: 'row',
            'x-reverse': 'row-reverse',
            y: 'column',
            'y-reverse': 'column-reverse',
          },
          transform: {
            x: function(e) {
              return 'translate('.concat(-e, '%, 0)')
            },
            'x-reverse': function(e) {
              return 'translate('.concat(e, '%, 0)')
            },
            y: function(e) {
              return 'translate(0, '.concat(-e, '%)')
            },
            'y-reverse': function(e) {
              return 'translate(0, '.concat(e, '%)')
            },
          },
          length: {
            x: 'width',
            'x-reverse': 'width',
            y: 'height',
            'y-reverse': 'height',
          },
          rotationMatrix: {
            x: { x: [1, 0], y: [0, 1] },
            'x-reverse': { x: [-1, 0], y: [0, 1] },
            y: { x: [0, 1], y: [1, 0] },
            'y-reverse': { x: [0, -1], y: [1, 0] },
          },
          scrollPosition: {
            x: 'scrollLeft',
            'x-reverse': 'scrollLeft',
            y: 'scrollTop',
            'y-reverse': 'scrollTop',
          },
          scrollLength: {
            x: 'scrollWidth',
            'x-reverse': 'scrollWidth',
            y: 'scrollHeight',
            'y-reverse': 'scrollHeight',
          },
          clientLength: {
            x: 'clientWidth',
            'x-reverse': 'clientWidth',
            y: 'clientHeight',
            'y-reverse': 'clientHeight',
          },
        }
      function E(e, t) {
        var a = t.duration,
          n = t.easeFunction,
          r = t.delay
        return ''
          .concat(e, ' ')
          .concat(a, ' ')
          .concat(n, ' ')
          .concat(r)
      }
      function w(e, t) {
        var a = x.rotationMatrix[t]
        return {
          pageX: a.x[0] * e.pageX + a.x[1] * e.pageY,
          pageY: a.y[0] * e.pageX + a.y[1] * e.pageY,
        }
      }
      function S(e) {
        return (e.touches = [{ pageX: e.pageX, pageY: e.pageY }]), e
      }
      function T(e, t) {
        for (var a = []; e && e !== t && !e.hasAttribute('data-swipeable'); ) {
          var n = window.getComputedStyle(e)
          'absolute' === n.getPropertyValue('position') ||
          'hidden' === n.getPropertyValue('overflow-x')
            ? (a = [])
            : ((e.clientWidth > 0 && e.scrollWidth > e.clientWidth) ||
                (e.clientHeight > 0 && e.scrollHeight > e.clientHeight)) &&
              a.push({
                element: e,
                scrollWidth: e.scrollWidth,
                scrollHeight: e.scrollHeight,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop,
              }),
            (e = e.parentNode)
        }
        return a
      }
      var C = null
      function N(e) {
        var t = e.domTreeShapes,
          a = e.pageX,
          n = e.startX,
          r = e.axis
        return t.some(function(e) {
          var t = a >= n
          ;('x' !== r && 'y' !== r) || (t = !t)
          var o = e[x.scrollPosition[r]],
            l = o > 0,
            i = o + e[x.clientLength[r]] < e[x.scrollLength[r]]
          return !!((t && i) || (!t && l)) && ((C = e.element), !0)
        })
      }
      var O = (function(e) {
        function t(e) {
          var a
          return (
            (0, l.default)(this, t),
            ((a = (0, s.default)(
              this,
              (0, c.default)(t).call(this, e)
            )).rootNode = null),
            (a.containerNode = null),
            (a.ignoreNextScrollEvents = !1),
            (a.viewLength = 0),
            (a.startX = 0),
            (a.lastX = 0),
            (a.vx = 0),
            (a.startY = 0),
            (a.isSwiping = void 0),
            (a.started = !1),
            (a.startIndex = 0),
            (a.transitionListener = null),
            (a.touchMoveListener = null),
            (a.activeSlide = null),
            (a.indexCurrent = null),
            (a.firstRenderTimeout = null),
            (a.setRootNode = function(e) {
              a.rootNode = e
            }),
            (a.setContainerNode = function(e) {
              a.containerNode = e
            }),
            (a.setActiveSlide = function(e) {
              ;(a.activeSlide = e), a.updateHeight()
            }),
            (a.handleSwipeStart = function(e) {
              var t = a.props.axis,
                n = w(e.touches[0], t)
              ;(a.viewLength = a.rootNode.getBoundingClientRect()[x.length[t]]),
                (a.startX = n.pageX),
                (a.lastX = n.pageX),
                (a.vx = 0),
                (a.startY = n.pageY),
                (a.isSwiping = void 0),
                (a.started = !0)
              var r = window.getComputedStyle(a.containerNode),
                o =
                  r.getPropertyValue('-webkit-transform') ||
                  r.getPropertyValue('transform')
              if (o && 'none' !== o) {
                var l = o
                    .split('(')[1]
                    .split(')')[0]
                    .split(','),
                  i = window.getComputedStyle(a.rootNode),
                  s = w(
                    { pageX: parseInt(l[4], 10), pageY: parseInt(l[5], 10) },
                    t
                  )
                a.startIndex =
                  -s.pageX /
                    (a.viewLength -
                      parseInt(i.paddingLeft, 10) -
                      parseInt(i.paddingRight, 10)) || 0
              }
            }),
            (a.handleSwipeMove = function(e) {
              if (a.started) {
                if (null === C || C === a.rootNode) {
                  var t = a.props,
                    n = t.axis,
                    r = t.children,
                    o = t.ignoreNativeScroll,
                    l = t.onSwitching,
                    i = t.resistance,
                    s = w(e.touches[0], n)
                  if (void 0 === a.isSwiping) {
                    var c = Math.abs(s.pageX - a.startX),
                      d = Math.abs(s.pageY - a.startY),
                      p = c > d && c > v.constant.UNCERTAINTY_THRESHOLD
                    if (
                      !i &&
                      ('y' === n || 'y-reverse' === n) &&
                      ((0 === a.indexCurrent && a.startX < s.pageX) ||
                        (a.indexCurrent ===
                          u.default.Children.count(a.props.children) - 1 &&
                          a.startX > s.pageX))
                    )
                      return void (a.isSwiping = !1)
                    if (
                      (c > d && e.preventDefault(),
                      !0 === p || d > v.constant.UNCERTAINTY_THRESHOLD)
                    )
                      return (a.isSwiping = p), void (a.startX = s.pageX)
                  }
                  if (!0 === a.isSwiping) {
                    e.preventDefault(),
                      (a.vx = 0.5 * a.vx + 0.5 * (s.pageX - a.lastX)),
                      (a.lastX = s.pageX)
                    var f = (0, v.computeIndex)({
                        children: r,
                        resistance: i,
                        pageX: s.pageX,
                        startIndex: a.startIndex,
                        startX: a.startX,
                        viewLength: a.viewLength,
                      }),
                      h = f.index,
                      m = f.startX
                    if (null === C && !o)
                      if (
                        N({
                          domTreeShapes: T(e.target, a.rootNode),
                          startX: a.startX,
                          pageX: s.pageX,
                          axis: n,
                        })
                      )
                        return
                    m ? (a.startX = m) : null === C && (C = a.rootNode),
                      a.setIndexCurrent(h)
                    var g = function() {
                      l && l(h, 'move')
                    }
                    ;(!a.state.displaySameSlide && a.state.isDragging) ||
                      a.setState({ displaySameSlide: !1, isDragging: !0 }, g),
                      g()
                  }
                }
              } else a.handleTouchStart(e)
            }),
            (a.handleSwipeEnd = function() {
              if (
                ((C = null),
                a.started && ((a.started = !1), !0 === a.isSwiping))
              ) {
                var e,
                  t = a.state.indexLatest,
                  n = a.indexCurrent,
                  r = t - n
                e =
                  Math.abs(a.vx) > a.props.threshold
                    ? a.vx > 0
                      ? Math.floor(n)
                      : Math.ceil(n)
                    : Math.abs(r) > a.props.hysteresis
                    ? r > 0
                      ? Math.floor(n)
                      : Math.ceil(n)
                    : t
                var o = u.default.Children.count(a.props.children) - 1
                e < 0 ? (e = 0) : e > o && (e = o),
                  a.setIndexCurrent(e),
                  a.setState({ indexLatest: e, isDragging: !1 }, function() {
                    a.props.onSwitching && a.props.onSwitching(e, 'end'),
                      a.props.onChangeIndex &&
                        e !== t &&
                        a.props.onChangeIndex(e, t, { reason: 'swipe' }),
                      n === t && a.handleTransitionEnd()
                  })
              }
            }),
            (a.handleTouchStart = function(e) {
              a.props.onTouchStart && a.props.onTouchStart(e),
                a.handleSwipeStart(e)
            }),
            (a.handleTouchEnd = function(e) {
              a.props.onTouchEnd && a.props.onTouchEnd(e), a.handleSwipeEnd(e)
            }),
            (a.handleMouseDown = function(e) {
              a.props.onMouseDown && a.props.onMouseDown(e),
                e.persist(),
                a.handleSwipeStart(S(e))
            }),
            (a.handleMouseUp = function(e) {
              a.props.onMouseUp && a.props.onMouseUp(e), a.handleSwipeEnd(S(e))
            }),
            (a.handleMouseLeave = function(e) {
              a.props.onMouseLeave && a.props.onMouseLeave(e),
                a.started && a.handleSwipeEnd(S(e))
            }),
            (a.handleMouseMove = function(e) {
              a.props.onMouseMove && a.props.onMouseMove(e),
                a.started && a.handleSwipeMove(S(e))
            }),
            (a.handleScroll = function(e) {
              if (
                (a.props.onScroll && a.props.onScroll(e),
                e.target === a.rootNode)
              )
                if (a.ignoreNextScrollEvents) a.ignoreNextScrollEvents = !1
                else {
                  var t = a.state.indexLatest,
                    n =
                      Math.ceil(e.target.scrollLeft / e.target.clientWidth) + t
                  ;(a.ignoreNextScrollEvents = !0),
                    (e.target.scrollLeft = 0),
                    a.props.onChangeIndex &&
                      n !== t &&
                      a.props.onChangeIndex(n, t, { reason: 'focus' })
                }
            }),
            (a.updateHeight = function() {
              if (null !== a.activeSlide) {
                var e = a.activeSlide.children[0]
                void 0 !== e &&
                  void 0 !== e.offsetHeight &&
                  a.state.heightLatest !== e.offsetHeight &&
                  a.setState({ heightLatest: e.offsetHeight })
              }
            }),
            (a.state = {
              indexLatest: e.index,
              isDragging: !1,
              renderOnlyActive: !e.disableLazyLoading,
              heightLatest: 0,
              displaySameSlide: !0,
            }),
            a.setIndexCurrent(e.index),
            a
          )
        }
        return (
          (0, d.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'getChildContext',
              value: function() {
                var e = this
                return {
                  swipeableViews: {
                    slideUpdateHeight: function() {
                      e.updateHeight()
                    },
                  },
                }
              },
            },
            {
              key: 'componentDidMount',
              value: function() {
                var e = this
                ;(this.transitionListener = g(
                  this.containerNode,
                  f.default.end,
                  function(t) {
                    t.target === e.containerNode && e.handleTransitionEnd()
                  }
                )),
                  (this.touchMoveListener = g(
                    this.rootNode,
                    'touchmove',
                    function(t) {
                      e.props.disabled || e.handleSwipeMove(t)
                    },
                    { passive: !1 }
                  )),
                  this.props.disableLazyLoading ||
                    (this.firstRenderTimeout = setTimeout(function() {
                      e.setState({ renderOnlyActive: !1 })
                    }, 0)),
                  this.props.action &&
                    this.props.action({ updateHeight: this.updateHeight })
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function(e) {
                var t = e.index
                'number' == typeof t &&
                  t !== this.props.index &&
                  (this.setIndexCurrent(t),
                  this.setState({
                    displaySameSlide: (0, v.getDisplaySameSlide)(this.props, e),
                    indexLatest: t,
                  }))
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.transitionListener.remove(),
                  this.touchMoveListener.remove(),
                  clearTimeout(this.firstRenderTimeout)
              },
            },
            {
              key: 'setIndexCurrent',
              value: function(e) {
                if (
                  (this.props.animateTransitions ||
                    this.indexCurrent === e ||
                    this.handleTransitionEnd(),
                  (this.indexCurrent = e),
                  this.containerNode)
                ) {
                  var t = this.props.axis,
                    a = x.transform[t](100 * e)
                  ;(this.containerNode.style.WebkitTransform = a),
                    (this.containerNode.style.transform = a)
                }
              },
            },
            {
              key: 'handleTransitionEnd',
              value: function() {
                this.props.onTransitionEnd &&
                  (this.state.displaySameSlide ||
                    this.state.isDragging ||
                    this.props.onTransitionEnd())
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t,
                  a = this,
                  n = this.props,
                  l = (n.action, n.animateHeight),
                  i = n.animateTransitions,
                  s = n.axis,
                  c = n.children,
                  d = n.containerStyle,
                  p = n.disabled,
                  f = (n.disableLazyLoading, n.enableMouseEvents),
                  h = (n.hysteresis,
                  n.ignoreNativeScroll,
                  n.index,
                  n.onChangeIndex,
                  n.onSwitching,
                  n.onTransitionEnd,
                  n.resistance,
                  n.slideStyle),
                  m = n.slideClassName,
                  v = n.springConfig,
                  g = n.style,
                  w = (n.threshold,
                  (0, o.default)(n, [
                    'action',
                    'animateHeight',
                    'animateTransitions',
                    'axis',
                    'children',
                    'containerStyle',
                    'disabled',
                    'disableLazyLoading',
                    'enableMouseEvents',
                    'hysteresis',
                    'ignoreNativeScroll',
                    'index',
                    'onChangeIndex',
                    'onSwitching',
                    'onTransitionEnd',
                    'resistance',
                    'slideStyle',
                    'slideClassName',
                    'springConfig',
                    'style',
                    'threshold',
                  ])),
                  S = this.state,
                  T = S.displaySameSlide,
                  C = S.heightLatest,
                  N = S.indexLatest,
                  O = S.isDragging,
                  k = S.renderOnlyActive,
                  M = p
                    ? {}
                    : {
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                      },
                  P =
                    !p && f
                      ? {
                          onMouseDown: this.handleMouseDown,
                          onMouseUp: this.handleMouseUp,
                          onMouseLeave: this.handleMouseLeave,
                          onMouseMove: this.handleMouseMove,
                        }
                      : {},
                  j = (0, r.default)({}, y, h)
                if (O || !i || T) (e = 'all 0s ease 0s'), (t = 'all 0s ease 0s')
                else if (
                  ((e = E('transform', v)),
                  (t = E('-webkit-transform', v)),
                  0 !== C)
                ) {
                  var L = ', '.concat(E('height', v))
                  ;(e += L), (t += L)
                }
                var I = {
                  height: null,
                  WebkitFlexDirection: x.flexDirection[s],
                  flexDirection: x.flexDirection[s],
                  WebkitTransition: t,
                  transition: e,
                }
                if (!k) {
                  var R = x.transform[s](100 * this.indexCurrent)
                  ;(I.WebkitTransform = R), (I.transform = R)
                }
                return (
                  l && (I.height = C),
                  u.default.createElement(
                    'div',
                    (0, r.default)(
                      {
                        ref: this.setRootNode,
                        style: (0, r.default)({}, x.root[s], g),
                      },
                      w,
                      M,
                      P,
                      { onScroll: this.handleScroll }
                    ),
                    u.default.createElement(
                      'div',
                      {
                        ref: this.setContainerNode,
                        style: (0, r.default)({}, I, b, d),
                        className: 'react-swipeable-view-container',
                      },
                      u.default.Children.map(c, function(e, t) {
                        if (k && t !== N) return null
                        var n,
                          r = !0
                        return (
                          t === N &&
                            ((r = !1),
                            l &&
                              ((n = a.setActiveSlide),
                              (j.overflowY = 'hidden'))),
                          u.default.createElement(
                            'div',
                            {
                              ref: n,
                              style: j,
                              className: m,
                              'aria-hidden': r,
                              'data-swipeable': 'true',
                            },
                            e
                          )
                        )
                      })
                    )
                  )
                )
              },
            },
          ]),
          t
        )
      })(u.default.Component)
      ;(O.displayName = 'ReactSwipableView'),
        (O.propTypes = {}),
        (O.defaultProps = {
          animateHeight: !1,
          animateTransitions: !0,
          axis: 'x',
          disabled: !1,
          disableLazyLoading: !1,
          enableMouseEvents: !1,
          hysteresis: 0.6,
          ignoreNativeScroll: !1,
          index: 0,
          threshold: 5,
          springConfig: {
            duration: '0.35s',
            easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
            delay: '0s',
          },
          resistance: !1,
        }),
        (O.childContextTypes = {
          swipeableViews: p.default.shape({
            slideUpdateHeight: p.default.func,
          }),
        })
      var k = O
      t.default = k
    },
    143: function(e, t, a) {
      'use strict'
      var n = a(4)
      ;(t.__esModule = !0), (t.default = void 0)
      var r = function() {}
      n(a(111)).default &&
        (r = document.addEventListener
          ? function(e, t, a, n) {
              return e.addEventListener(t, a, n || !1)
            }
          : document.attachEvent
          ? function(e, t, a) {
              return e.attachEvent('on' + t, function(t) {
                ;((t = t || window.event).target = t.target || t.srcElement),
                  (t.currentTarget = e),
                  a.call(e, t)
              })
            }
          : void 0)
      var o = r
      ;(t.default = o), (e.exports = t.default)
    },
    144: function(e, t, a) {
      'use strict'
      var n = a(4)
      ;(t.__esModule = !0), (t.default = void 0)
      var r = function() {}
      n(a(111)).default &&
        (r = document.addEventListener
          ? function(e, t, a, n) {
              return e.removeEventListener(t, a, n || !1)
            }
          : document.attachEvent
          ? function(e, t, a) {
              return e.detachEvent('on' + t, a)
            }
          : void 0)
      var o = r
      ;(t.default = o), (e.exports = t.default)
    },
    145: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'checkIndexBounds', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        }),
        Object.defineProperty(t, 'computeIndex', {
          enumerable: !0,
          get: function() {
            return o.default
          },
        }),
        Object.defineProperty(t, 'constant', {
          enumerable: !0,
          get: function() {
            return l.default
          },
        }),
        Object.defineProperty(t, 'getDisplaySameSlide', {
          enumerable: !0,
          get: function() {
            return i.default
          },
        }),
        Object.defineProperty(t, 'mod', {
          enumerable: !0,
          get: function() {
            return s.default
          },
        })
      var r = n(a(146)),
        o = n(a(147)),
        l = n(a(91)),
        i = n(a(148)),
        s = n(a(149))
    },
    146: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(0)),
        o = (n(a(31)),
        function(e) {
          e.index
          var t = e.children
          r.default.Children.count(t)
        })
      t.default = o
    },
    147: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t,
            a = e.children,
            n = e.startIndex,
            l = e.startX,
            i = e.pageX,
            s = e.viewLength,
            c = e.resistance,
            d = r.default.Children.count(a) - 1,
            u = n + (l - i) / s
          c
            ? u < 0
              ? (u = Math.exp(u * o.default.RESISTANCE_COEF) - 1)
              : u > d &&
                (u = d + 1 - Math.exp((d - u) * o.default.RESISTANCE_COEF))
            : u < 0
            ? (t = ((u = 0) - n) * s + i)
            : u > d && (t = ((u = d) - n) * s + i)
          return { index: u, startX: t }
        })
      var r = n(a(0)),
        o = n(a(91))
    },
    148: function(e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function(e, t) {
        var a = !1
        if (e.children.length && t.children.length) {
          var n = e.children[e.index],
            r = n ? n.key : 'empty'
          if (null !== r) {
            var o = t.children[t.index]
            r === (o ? o.key : 'empty') && (a = !0)
          }
        }
        return a
      }
      t.default = n
    },
    149: function(e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function(e, t) {
        var a = e % t
        return a < 0 ? a + t : a
      }
      t.default = n
    },
    150: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(20)),
        i = n(a(21)),
        s = n(a(22)),
        c = n(a(23)),
        d = n(a(24)),
        u = n(a(18)),
        p = n(a(0)),
        f = (n(a(8)), n(a(31)), n(a(6))),
        h = n(a(77)),
        m = n(a(87)),
        v = a(151),
        g = n(a(152)),
        b = n(a(153)),
        y = n(a(5)),
        x = n(a(154)),
        E = n(a(155)),
        w = function(e) {
          return {
            root: {
              overflow: 'hidden',
              minHeight: 48,
              WebkitOverflowScrolling: 'touch',
            },
            flexContainer: { display: 'flex' },
            centered: { justifyContent: 'center' },
            scroller: {
              position: 'relative',
              display: 'inline-block',
              flex: '1 1 auto',
              whiteSpace: 'nowrap',
            },
            fixed: { overflowX: 'hidden', width: '100%' },
            scrollable: { overflowX: 'scroll' },
            scrollButtons: {},
            scrollButtonsAuto: (0, u.default)({}, e.breakpoints.down('xs'), {
              display: 'none',
            }),
            indicator: {},
          }
        }
      t.styles = w
      var S = (function(e) {
        function t() {
          var e
          return (
            (0, l.default)(this, t),
            ((e = (0, s.default)(this, (0, c.default)(t).call(this))).state = {
              indicatorStyle: {},
              scrollerStyle: { marginBottom: 0 },
              showLeftScroll: !1,
              showRightScroll: !1,
              mounted: !1,
            }),
            (e.getConditionalElements = function() {
              var t = e.props,
                a = t.classes,
                n = t.scrollable,
                r = t.ScrollButtonComponent,
                o = t.scrollButtons,
                l = t.theme,
                i = {}
              i.scrollbarSizeListener = n
                ? p.default.createElement(b.default, {
                    onLoad: e.handleScrollbarSizeChange,
                    onChange: e.handleScrollbarSizeChange,
                  })
                : null
              var s = n && ('auto' === o || 'on' === o)
              return (
                (i.scrollButtonLeft = s
                  ? p.default.createElement(r, {
                      direction: l && 'rtl' === l.direction ? 'right' : 'left',
                      onClick: e.handleLeftScrollClick,
                      visible: e.state.showLeftScroll,
                      className: (0, f.default)(
                        a.scrollButtons,
                        (0, u.default)({}, a.scrollButtonsAuto, 'auto' === o)
                      ),
                    })
                  : null),
                (i.scrollButtonRight = s
                  ? p.default.createElement(r, {
                      direction: l && 'rtl' === l.direction ? 'left' : 'right',
                      onClick: e.handleRightScrollClick,
                      visible: e.state.showRightScroll,
                      className: (0, f.default)(
                        a.scrollButtons,
                        (0, u.default)({}, a.scrollButtonsAuto, 'auto' === o)
                      ),
                    })
                  : null),
                i
              )
            }),
            (e.getTabsMeta = function(t, a) {
              var n, r
              if (e.tabsRef) {
                var o = e.tabsRef.getBoundingClientRect()
                n = {
                  clientWidth: e.tabsRef.clientWidth,
                  scrollLeft: e.tabsRef.scrollLeft,
                  scrollLeftNormalized: (0, v.getNormalizedScrollLeft)(
                    e.tabsRef,
                    a
                  ),
                  scrollWidth: e.tabsRef.scrollWidth,
                  left: o.left,
                  right: o.right,
                }
              }
              if (e.tabsRef && !1 !== t) {
                var l = e.tabsRef.children[0].children
                if (l.length > 0) {
                  var i = l[e.valueToIndex.get(t)]
                  r = i ? i.getBoundingClientRect() : null
                }
              }
              return { tabsMeta: n, tabMeta: r }
            }),
            (e.handleLeftScrollClick = function() {
              e.moveTabsScroll(-e.tabsRef.clientWidth)
            }),
            (e.handleRightScrollClick = function() {
              e.moveTabsScroll(e.tabsRef.clientWidth)
            }),
            (e.handleScrollbarSizeChange = function(t) {
              var a = t.scrollbarHeight
              e.setState({ scrollerStyle: { marginBottom: -a } })
            }),
            (e.moveTabsScroll = function(t) {
              var a = e.props.theme,
                n = 'rtl' === a.direction ? -1 : 1,
                r = e.tabsRef.scrollLeft + t * n,
                o =
                  'rtl' === a.direction &&
                  'reverse' === (0, v.detectScrollType)()
                    ? -1
                    : 1
              e.scroll(o * r)
            }),
            (e.scrollSelectedIntoView = function() {
              var t = e.props,
                a = t.theme,
                n = t.value,
                r = e.getTabsMeta(n, a.direction),
                o = r.tabsMeta,
                l = r.tabMeta
              if (l && o)
                if (l.left < o.left) {
                  var i = o.scrollLeft + (l.left - o.left)
                  e.scroll(i)
                } else if (l.right > o.right) {
                  var s = o.scrollLeft + (l.right - o.right)
                  e.scroll(s)
                }
            }),
            (e.scroll = function(t) {
              ;(0, g.default)('scrollLeft', e.tabsRef, t)
            }),
            (e.updateScrollButtonState = function() {
              var t = e.props,
                a = t.scrollable,
                n = t.scrollButtons,
                r = t.theme
              if (a && 'off' !== n) {
                var o = e.tabsRef,
                  l = o.scrollWidth,
                  i = o.clientWidth,
                  s = (0, v.getNormalizedScrollLeft)(e.tabsRef, r.direction),
                  c = 'rtl' === r.direction ? l > i + s : s > 0,
                  d = 'rtl' === r.direction ? s > 0 : l > i + s
                ;(c === e.state.showLeftScroll &&
                  d === e.state.showRightScroll) ||
                  e.setState({ showLeftScroll: c, showRightScroll: d })
              }
            }),
            'undefined' != typeof window &&
              ((e.handleResize = (0, m.default)(function() {
                e.updateIndicatorState(e.props), e.updateScrollButtonState()
              }, 166)),
              (e.handleTabsScroll = (0, m.default)(function() {
                e.updateScrollButtonState()
              }, 166))),
            e
          )
        }
        return (
          (0, d.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.setState({ mounted: !0 }),
                  this.updateIndicatorState(this.props),
                  this.updateScrollButtonState(),
                  this.props.action &&
                    this.props.action({ updateIndicator: this.handleResize })
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                this.updateIndicatorState(this.props),
                  this.updateScrollButtonState(),
                  this.state.indicatorStyle !== t.indicatorStyle &&
                    this.scrollSelectedIntoView()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.handleResize.clear(), this.handleTabsScroll.clear()
              },
            },
            {
              key: 'updateIndicatorState',
              value: function(e) {
                var t = e.theme,
                  a = e.value,
                  n = this.getTabsMeta(a, t.direction),
                  r = n.tabsMeta,
                  o = n.tabMeta,
                  l = 0
                if (o && r) {
                  var i =
                    'rtl' === t.direction
                      ? r.scrollLeftNormalized + r.clientWidth - r.scrollWidth
                      : r.scrollLeft
                  l = Math.round(o.left - r.left + i)
                }
                var s = { left: l, width: o ? Math.round(o.width) : 0 }
                ;(s.left === this.state.indicatorStyle.left &&
                  s.width === this.state.indicatorStyle.width) ||
                  isNaN(s.left) ||
                  isNaN(s.width) ||
                  this.setState({ indicatorStyle: s })
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this,
                  a = this.props,
                  n = (a.action, a.centered),
                  l = a.children,
                  i = a.classes,
                  s = a.className,
                  c = a.component,
                  d = a.fullWidth,
                  m = a.indicatorColor,
                  v = a.onChange,
                  g = a.scrollable,
                  b = (a.ScrollButtonComponent,
                  a.scrollButtons,
                  a.TabIndicatorProps),
                  y = void 0 === b ? {} : b,
                  E = a.textColor,
                  w = (a.theme, a.value),
                  S = (0, o.default)(a, [
                    'action',
                    'centered',
                    'children',
                    'classes',
                    'className',
                    'component',
                    'fullWidth',
                    'indicatorColor',
                    'onChange',
                    'scrollable',
                    'ScrollButtonComponent',
                    'scrollButtons',
                    'TabIndicatorProps',
                    'textColor',
                    'theme',
                    'value',
                  ]),
                  T = (0, f.default)(i.root, s),
                  C = (0, f.default)(
                    i.flexContainer,
                    (0, u.default)({}, i.centered, n && !g)
                  ),
                  N = (0, f.default)(
                    i.scroller,
                    ((e = {}),
                    (0, u.default)(e, i.fixed, !g),
                    (0, u.default)(e, i.scrollable, g),
                    e)
                  ),
                  O = p.default.createElement(
                    x.default,
                    (0, r.default)({ className: i.indicator, color: m }, y, {
                      style: (0, r.default)(
                        {},
                        this.state.indicatorStyle,
                        y.style
                      ),
                    })
                  )
                this.valueToIndex = new Map()
                var k = 0,
                  M = p.default.Children.map(l, function(e) {
                    if (!p.default.isValidElement(e)) return null
                    var a = void 0 === e.props.value ? k : e.props.value
                    t.valueToIndex.set(a, k)
                    var n = a === w
                    return (
                      (k += 1),
                      p.default.cloneElement(e, {
                        fullWidth: d,
                        indicator: n && !t.state.mounted && O,
                        selected: n,
                        onChange: v,
                        textColor: E,
                        value: a,
                      })
                    )
                  }),
                  P = this.getConditionalElements()
                return p.default.createElement(
                  c,
                  (0, r.default)({ className: T }, S),
                  p.default.createElement(h.default, {
                    target: 'window',
                    onResize: this.handleResize,
                  }),
                  P.scrollbarSizeListener,
                  p.default.createElement(
                    'div',
                    { className: i.flexContainer },
                    P.scrollButtonLeft,
                    p.default.createElement(
                      'div',
                      {
                        className: N,
                        style: this.state.scrollerStyle,
                        ref: function(e) {
                          t.tabsRef = e
                        },
                        role: 'tablist',
                        onScroll: this.handleTabsScroll,
                      },
                      p.default.createElement('div', { className: C }, M),
                      this.state.mounted && O
                    ),
                    P.scrollButtonRight
                  )
                )
              },
            },
          ]),
          t
        )
      })(p.default.Component)
      ;(S.propTypes = {}),
        (S.defaultProps = {
          centered: !1,
          component: 'div',
          fullWidth: !1,
          indicatorColor: 'secondary',
          scrollable: !1,
          ScrollButtonComponent: E.default,
          scrollButtons: 'auto',
          textColor: 'inherit',
        })
      var T = (0, y.default)(w, { name: 'MuiTabs', withTheme: !0 })(S)
      t.default = T
    },
    151: function(e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        r = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        )
      function o() {
        if (n) return n
        if (!r || !window.document.body) return 'indeterminate'
        var e = window.document.createElement('div')
        return (
          e.appendChild(document.createTextNode('ABCD')),
          (e.dir = 'rtl'),
          (e.style.fontSize = '14px'),
          (e.style.width = '4px'),
          (e.style.height = '1px'),
          (e.style.position = 'absolute'),
          (e.style.top = '-1000px'),
          (e.style.overflow = 'scroll'),
          document.body.appendChild(e),
          (n = 'reverse'),
          e.scrollLeft > 0
            ? (n = 'default')
            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (n = 'negative')),
          document.body.removeChild(e),
          n
        )
      }
      ;(t._setScrollType = function(e) {
        n = e
      }),
        (t.detectScrollType = o),
        (t.getNormalizedScrollLeft = function(e, t) {
          var a = e.scrollLeft
          if ('rtl' !== t) return a
          var n = o()
          if ('indeterminate' === n) return Number.NaN
          switch (n) {
            case 'negative':
              return e.scrollWidth - e.clientWidth + a
            case 'reverse':
              return e.scrollWidth - e.clientWidth - a
          }
          return a
        }),
        (t.setNormalizedScrollLeft = function(e, t, a) {
          if ('rtl' === a) {
            var n = o()
            if ('indeterminate' !== n)
              switch (n) {
                case 'negative':
                  e.scrollLeft = e.clientWidth - e.scrollWidth + t
                  break
                case 'reverse':
                  e.scrollLeft = e.scrollWidth - e.clientWidth - t
                  break
                default:
                  e.scrollLeft = t
              }
          } else e.scrollLeft = t
        })
    },
    152: function(e, t, a) {
      'use strict'
      function n(e) {
        return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = function(e, t, a) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : function() {},
          l = r.ease,
          i = void 0 === l ? n : l,
          s = r.duration,
          c = void 0 === s ? 300 : s,
          d = null,
          u = t[e],
          p = !1,
          f = function() {
            p = !0
          }
        return u === a
          ? (o(new Error('Element already at target position')), f)
          : (requestAnimationFrame(function n(r) {
              if (p) o(new Error('Animation cancelled'))
              else {
                null === d && (d = r)
                var l = Math.min(1, (r - d) / c)
                ;(t[e] = i(l) * (a - u) + u),
                  l >= 1
                    ? requestAnimationFrame(function() {
                        o(null)
                      })
                    : requestAnimationFrame(n)
              }
            }),
            f)
      }
      t.default = r
    },
    153: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(20)),
        o = n(a(21)),
        l = n(a(22)),
        i = n(a(23)),
        s = n(a(24)),
        c = n(a(0)),
        d = (n(a(8)), n(a(77))),
        u = n(a(87)),
        p = {
          width: 100,
          height: 100,
          position: 'absolute',
          top: -1e4,
          overflow: 'scroll',
          msOverflowStyle: 'scrollbar',
        },
        f = (function(e) {
          function t() {
            var e
            return (
              (0, r.default)(this, t),
              ((e = (0, l.default)(
                this,
                (0, i.default)(t).call(this)
              )).setMeasurements = function() {
                var t = e.nodeRef
                t &&
                  ((e.scrollbarHeight = t.offsetHeight - t.clientHeight),
                  (e.scrollbarWidth = t.offsetWidth - t.clientWidth))
              }),
              'undefined' != typeof window &&
                (e.handleResize = (0, u.default)(function() {
                  var t = e.props.onChange,
                    a = e.scrollbarHeight,
                    n = e.scrollbarWidth
                  e.setMeasurements(),
                    (a === e.scrollbarHeight && n === e.scrollbarWidth) ||
                      t({
                        scrollbarHeight: e.scrollbarHeight,
                        scrollbarWidth: e.scrollbarWidth,
                      })
                }, 166)),
              e
            )
          }
          return (
            (0, s.default)(t, e),
            (0, o.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setMeasurements(),
                    this.props.onLoad({
                      scrollbarHeight: this.scrollbarHeight,
                      scrollbarWidth: this.scrollbarWidth,
                    })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.handleResize.clear()
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.onChange
                  return c.default.createElement(
                    'div',
                    null,
                    t
                      ? c.default.createElement(d.default, {
                          target: 'window',
                          onResize: this.handleResize,
                        })
                      : null,
                    c.default.createElement('div', {
                      style: p,
                      ref: function(t) {
                        e.nodeRef = t
                      },
                    })
                  )
                },
              },
            ]),
            t
          )
        })(c.default.Component)
      f.propTypes = {}
      var h = f
      t.default = h
    },
    154: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(0)),
        i = (n(a(8)), n(a(6))),
        s = n(a(5)),
        c = a(34),
        d = function(e) {
          return {
            root: {
              position: 'absolute',
              height: 2,
              bottom: 0,
              width: '100%',
              transition: e.transitions.create(),
              willChange: 'left, width',
            },
            colorPrimary: { backgroundColor: e.palette.primary.main },
            colorSecondary: { backgroundColor: e.palette.secondary.main },
          }
        }
      function u(e) {
        var t = e.classes,
          a = e.className,
          n = e.color,
          s = (0, o.default)(e, ['classes', 'className', 'color'])
        return l.default.createElement(
          'span',
          (0, r.default)(
            {
              className: (0, i.default)(
                t.root,
                t['color'.concat((0, c.capitalize)(n))],
                a
              ),
            },
            s
          )
        )
      }
      ;(t.styles = d), (u.propTypes = {})
      var p = (0, s.default)(d, { name: 'MuiPrivateTabIndicator' })(u)
      t.default = p
    },
    155: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(12)),
        l = n(a(0)),
        i = (n(a(8)), n(a(6))),
        s = n(a(156)),
        c = n(a(157)),
        d = n(a(5)),
        u = n(a(86)),
        p = { root: { color: 'inherit', flex: '0 0 56px' } }
      t.styles = p
      var f = l.default.createElement(s.default, null),
        h = l.default.createElement(c.default, null)
      function m(e) {
        var t = e.classes,
          a = e.className,
          n = e.direction,
          s = e.onClick,
          c = e.visible,
          d = (0, o.default)(e, [
            'classes',
            'className',
            'direction',
            'onClick',
            'visible',
          ]),
          p = (0, i.default)(t.root, a)
        return c
          ? l.default.createElement(
              u.default,
              (0, r.default)({ className: p, onClick: s, tabIndex: -1 }, d),
              'left' === n ? f : h
            )
          : l.default.createElement('div', { className: p })
      }
      ;(m.propTypes = {}), (m.defaultProps = { visible: !0 })
      var v = (0, d.default)(p, { name: 'MuiPrivateTabScrollButton' })(m)
      t.default = v
    },
    156: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(0)),
        o = n(a(55)),
        l = n(a(52)),
        i = r.default.createElement('path', {
          d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z',
        }),
        s = function(e) {
          return r.default.createElement(l.default, e, i)
        }
      ;(s = (0, o.default)(s)).muiName = 'SvgIcon'
      var c = s
      t.default = c
    },
    157: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = n(a(0)),
        o = n(a(55)),
        l = n(a(52)),
        i = r.default.createElement('path', {
          d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z',
        }),
        s = function(e) {
          return r.default.createElement(l.default, e, i)
        }
      ;(s = (0, o.default)(s)).muiName = 'SvgIcon'
      var c = s
      t.default = c
    },
    158: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(12)),
        o = n(a(20)),
        l = n(a(21)),
        i = n(a(22)),
        s = n(a(23)),
        c = n(a(24)),
        d = n(a(18)),
        u = n(a(11)),
        p = n(a(0)),
        f = (n(a(8)), n(a(6))),
        h = n(a(5)),
        m = n(a(86)),
        v = a(34),
        g = (n(a(159)),
        function(e) {
          return {
            root: (0, u.default)(
              {},
              e.typography.button,
              (0, d.default)(
                {
                  maxWidth: 264,
                  minWidth: 72,
                  position: 'relative',
                  boxSizing: 'border-box',
                  padding: 0,
                  minHeight: 48,
                  flexShrink: 0,
                  overflow: 'hidden',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                },
                e.breakpoints.up('md'),
                { fontSize: e.typography.pxToRem(13), minWidth: 160 }
              )
            ),
            labelIcon: { minHeight: 72, paddingTop: 9 },
            textColorInherit: {
              color: 'inherit',
              opacity: 0.7,
              '&$selected': { opacity: 1 },
              '&$disabled': { opacity: 0.4 },
            },
            textColorPrimary: {
              color: e.palette.text.secondary,
              '&$selected': { color: e.palette.primary.main },
              '&$disabled': { color: e.palette.text.disabled },
            },
            textColorSecondary: {
              color: e.palette.text.secondary,
              '&$selected': { color: e.palette.secondary.main },
              '&$disabled': { color: e.palette.text.disabled },
            },
            selected: {},
            disabled: {},
            fullWidth: { flexShrink: 1, flexGrow: 1, maxWidth: 'none' },
            wrapper: {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'column',
            },
            labelContainer: (0, d.default)(
              { width: '100%', boxSizing: 'border-box', padding: '6px 12px' },
              e.breakpoints.up('md'),
              { padding: '6px 24px' }
            ),
            label: {},
            labelWrapped: (0, d.default)({}, e.breakpoints.down('sm'), {
              fontSize: e.typography.pxToRem(12),
            }),
          }
        })
      t.styles = g
      var b = (function(e) {
        function t() {
          var e, a
          ;(0, o.default)(this, t)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
            r[l] = arguments[l]
          return (
            ((a = (0, i.default)(
              this,
              (e = (0, s.default)(t)).call.apply(e, [this].concat(r))
            )).state = { labelWrapped: !1 }),
            (a.handleChange = function(e) {
              var t = a.props,
                n = t.onChange,
                r = t.value,
                o = t.onClick
              n && n(e, r), o && o(e)
            }),
            (a.checkTextWrap = function() {
              if (a.labelRef) {
                var e = a.labelRef.getClientRects().length > 1
                a.state.labelWrapped !== e && a.setState({ labelWrapped: e })
              }
            }),
            a
          )
        }
        return (
          (0, c.default)(t, e),
          (0, l.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.checkTextWrap()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                this.state.labelWrapped === t.labelWrapped &&
                  this.checkTextWrap()
              },
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t,
                  a = this,
                  n = this.props,
                  o = n.classes,
                  l = n.className,
                  i = n.disabled,
                  s = n.fullWidth,
                  c = n.icon,
                  h = n.indicator,
                  g = n.label,
                  b = (n.onChange, n.selected),
                  y = n.textColor,
                  x = (n.value,
                  (0, r.default)(n, [
                    'classes',
                    'className',
                    'disabled',
                    'fullWidth',
                    'icon',
                    'indicator',
                    'label',
                    'onChange',
                    'selected',
                    'textColor',
                    'value',
                  ]))
                return (
                  void 0 !== g &&
                    (t = p.default.createElement(
                      'span',
                      { className: o.labelContainer },
                      p.default.createElement(
                        'span',
                        {
                          className: (0, f.default)(
                            o.label,
                            (0, d.default)(
                              {},
                              o.labelWrapped,
                              this.state.labelWrapped
                            )
                          ),
                          ref: function(e) {
                            a.labelRef = e
                          },
                        },
                        g
                      )
                    )),
                  p.default.createElement(
                    m.default,
                    (0, u.default)(
                      {
                        focusRipple: !0,
                        className: (0, f.default)(
                          o.root,
                          o['textColor'.concat((0, v.capitalize)(y))],
                          ((e = {}),
                          (0, d.default)(e, o.disabled, i),
                          (0, d.default)(e, o.selected, b),
                          (0, d.default)(e, o.labelIcon, c && t),
                          (0, d.default)(e, o.fullWidth, s),
                          e),
                          l
                        ),
                        role: 'tab',
                        'aria-selected': b,
                        disabled: i,
                      },
                      x,
                      { onClick: this.handleChange }
                    ),
                    p.default.createElement(
                      'span',
                      { className: o.wrapper },
                      c,
                      t
                    ),
                    h
                  )
                )
              },
            },
          ]),
          t
        )
      })(p.default.Component)
      ;(b.propTypes = {}),
        (b.defaultProps = { disabled: !1, textColor: 'inherit' })
      var y = (0, h.default)(g, { name: 'MuiTab' })(b)
      t.default = y
    },
    159: function(e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function(e, t, a, n, r) {
        return null
      }
      t.default = n
    },
    160: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(18)),
        l = n(a(12)),
        i = n(a(0)),
        s = (n(a(8)), n(a(6))),
        c = n(a(5)),
        d = a(34),
        u = (n(a(220)),
        function(e) {
          return {
            root: { display: 'block', margin: 0 },
            display4: e.typography.display4,
            display3: e.typography.display3,
            display2: e.typography.display2,
            display1: e.typography.display1,
            headline: e.typography.headline,
            title: e.typography.title,
            subheading: e.typography.subheading,
            body2: e.typography.body2,
            body1: e.typography.body1,
            caption: e.typography.caption,
            button: e.typography.button,
            h1: e.typography.h1,
            h2: e.typography.h2,
            h3: e.typography.h3,
            h4: e.typography.h4,
            h5: e.typography.h5,
            h6: e.typography.h6,
            subtitle1: e.typography.subtitle1,
            subtitle2: e.typography.subtitle2,
            overline: e.typography.overline,
            srOnly: {
              position: 'absolute',
              height: 1,
              width: 1,
              overflow: 'hidden',
            },
            alignLeft: { textAlign: 'left' },
            alignCenter: { textAlign: 'center' },
            alignRight: { textAlign: 'right' },
            alignJustify: { textAlign: 'justify' },
            noWrap: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
            gutterBottom: { marginBottom: '0.35em' },
            paragraph: { marginBottom: 16 },
            colorInherit: { color: 'inherit' },
            colorPrimary: { color: e.palette.primary.main },
            colorSecondary: { color: e.palette.secondary.main },
            colorTextPrimary: { color: e.palette.text.primary },
            colorTextSecondary: { color: e.palette.text.secondary },
            colorError: { color: e.palette.error.main },
          }
        })
      t.styles = u
      var p = {
        display4: 'h1',
        display3: 'h2',
        display2: 'h3',
        display1: 'h4',
        headline: 'h5',
        title: 'h6',
        subheading: 'subtitle1',
      }
      var f = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'p',
        display4: 'h1',
        display3: 'h1',
        display2: 'h1',
        display1: 'h1',
        headline: 'h1',
        title: 'h2',
        subheading: 'h3',
      }
      function h(e) {
        var t,
          a = e.align,
          n = e.classes,
          c = e.className,
          u = e.color,
          h = e.component,
          m = e.gutterBottom,
          v = e.headlineMapping,
          g = (e.internalDeprecatedVariant, e.noWrap),
          b = e.paragraph,
          y = e.theme,
          x = e.variant,
          E = (0, l.default)(e, [
            'align',
            'classes',
            'className',
            'color',
            'component',
            'gutterBottom',
            'headlineMapping',
            'internalDeprecatedVariant',
            'noWrap',
            'paragraph',
            'theme',
            'variant',
          ]),
          w = (function(e, t) {
            var a = e.typography,
              n = t
            return (
              n || (n = a.useNextVariants ? 'body2' : 'body1'),
              a.useNextVariants && (n = p[n] || n),
              n
            )
          })(y, x),
          S = (0, s.default)(
            n.root,
            ((t = {}),
            (0, o.default)(t, n[w], 'inherit' !== w),
            (0, o.default)(
              t,
              n['color'.concat((0, d.capitalize)(u))],
              'default' !== u
            ),
            (0, o.default)(t, n.noWrap, g),
            (0, o.default)(t, n.gutterBottom, m),
            (0, o.default)(t, n.paragraph, b),
            (0, o.default)(
              t,
              n['align'.concat((0, d.capitalize)(a))],
              'inherit' !== a
            ),
            t),
            c
          ),
          T = h || (b ? 'p' : v[w] || f[w]) || 'span'
        return i.default.createElement(T, (0, r.default)({ className: S }, E))
      }
      ;(h.propTypes = {}),
        (h.defaultProps = {
          align: 'inherit',
          color: 'default',
          gutterBottom: !1,
          headlineMapping: f,
          noWrap: !1,
          paragraph: !1,
        })
      var m = (0, c.default)(u, { name: 'MuiTypography', withTheme: !0 })(h)
      t.default = m
    },
    168: function(e, t) {
      e.exports =
        '/_next/static/images/blog5-ea652077a9a9c70277df70ce1c8b4146.jpg'
    },
    173: function(e, t) {
      e.exports =
        '/_next/static/images/office2-d57fa885fa5c7002dc43e9dd61172af7.jpg'
    },
    180: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.styles = void 0)
      var r = n(a(11)),
        o = n(a(18)),
        l = n(a(12)),
        i = n(a(0)),
        s = (n(a(8)), n(a(6))),
        c = n(a(96)),
        d = n(a(5)),
        u = {
          root: {
            display: 'flex',
            height: '0.01em',
            maxHeight: '2em',
            alignItems: 'center',
          },
          filled: { '&$positionStart': { marginTop: 16 } },
          positionStart: { marginRight: 8 },
          positionEnd: { marginLeft: 8 },
        }
      function p(e) {
        var t,
          a = e.children,
          n = e.component,
          d = e.classes,
          u = e.className,
          p = e.disableTypography,
          f = e.position,
          h = e.variant,
          m = (0, l.default)(e, [
            'children',
            'component',
            'classes',
            'className',
            'disableTypography',
            'position',
            'variant',
          ])
        return i.default.createElement(
          n,
          (0, r.default)(
            {
              className: (0, s.default)(
                d.root,
                ((t = {}),
                (0, o.default)(t, d.filled, 'filled' === h),
                (0, o.default)(t, d.positionStart, 'start' === f),
                (0, o.default)(t, d.positionEnd, 'end' === f),
                t),
                u
              ),
            },
            m
          ),
          'string' != typeof a || p
            ? a
            : i.default.createElement(c.default, { color: 'textSecondary' }, a)
        )
      }
      ;(t.styles = u),
        (p.propTypes = {}),
        (p.defaultProps = { component: 'div', disableTypography: !1 })
      var f = (0, d.default)(u, { name: 'MuiInputAdornment' })(p)
      t.default = f
    },
    19: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        l = a.n(o),
        i = (a(8), a(5)),
        s = a.n(i),
        c = {
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
      function d(e, t, a) {
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
      function u(e, t) {
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
      t.a = s()(c)(function(e) {
        var t,
          a = p({}, e),
          n = a.classes,
          o = a.className,
          i = a.children,
          s = a.plain,
          c = a.profile,
          f = a.pricing,
          h = a.testimonial,
          m = u(a, [
            'classes',
            'className',
            'children',
            'plain',
            'profile',
            'pricing',
            'testimonial',
          ]),
          v = l()(
            (d((t = {}), n.cardFooter, !0),
            d(t, n.cardFooterPlain, s),
            d(t, n.cardFooterProfile, c || h),
            d(t, n.cardFooterPricing, f),
            d(t, n.cardFooterTestimonial, h),
            d(t, o, void 0 !== o),
            t)
          )
        return r.a.createElement('div', p({ className: v }, m), i)
      })
    },
    205: function(e, t) {
      e.exports =
        '/_next/static/images/bg5-0b37f7db5bf7d7c1b023360ed53db140.jpg'
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
    35: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
      function s() {
        return (s =
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
        var t = s({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.mutedText },
          n
        )
      })
    },
    406: function(e, t) {
      e.exports =
        '/_next/static/images/card-project6-cdb05aa3618347759b9440758ee101f9.jpg'
    },
    46: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        })
      var r = n(a(180))
    },
    53: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
      function s() {
        return (s =
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
        var t = s({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.successText },
          n
        )
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
    67: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
      function s() {
        return (s =
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
        var t = s({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.dangerText },
          n
        )
      })
    },
    70: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = a(6),
        l = a.n(o),
        i = (a(8), a(103)),
        s = a.n(i),
        c = a(5),
        d = a.n(c),
        u = a(79),
        p = a.n(u),
        f = a(78),
        h = a.n(f),
        m = a(7),
        v = a(2),
        g = a(1)
      var b = function(e) {
        return {
          root: {
            marginTop: '20px',
            paddingLeft: '0',
            marginBottom: '0',
            overflow: 'visible !important',
          },
          flexContainer: ((t = {}),
          (a = e.breakpoints.down('xs')),
          (n = { display: 'flex', flexWrap: 'wrap' }),
          a in t
            ? Object.defineProperty(t, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[a] = n),
          t),
          displayNone: { display: 'none !important' },
          fixed: { overflowX: 'visible' },
          horizontalDisplay: { display: 'block' },
          pills: {
            float: 'left',
            position: 'relative',
            display: 'block',
            borderRadius: '30px',
            minWidth: '100px',
            textAlign: 'center',
            transition: 'all .3s',
            padding: '10px 15px',
            color: '#555555',
            height: 'auto',
            opacity: '1',
            maxWidth: '100%',
            margin: '0 5px',
            minHeight: 'unset',
          },
          pillsWithIcons: { borderRadius: '4px' },
          tabIcon: {
            width: '30px',
            height: '30px',
            display: 'block',
            margin: '15px 0',
          },
          horizontalPills: {
            width: '100%',
            float: 'none !important',
            '& + button': { margin: '10px 0' },
          },
          labelContainer: { padding: '0!important', color: 'inherit' },
          label: {
            lineHeight: '24px',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: '500',
            position: 'relative',
            display: 'block',
            color: 'inherit',
          },
          contentWrapper: {
            marginTop: '20px',
            '& .react-swipeable-view-container > div > div': {
              paddingLeft: '15px',
              paddingRight: '15px',
            },
          },
          primary: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.x,
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)',
            },
          },
          info: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.q,
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)',
            },
          },
          success: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.H,
              boxShadow:
                '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
            },
          },
          warning: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.M,
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)',
            },
          },
          danger: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.j,
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)',
            },
          },
          rose: {
            '&,&:hover': {
              color: '#FFFFFF',
              backgroundColor: g.A,
              boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
            },
          },
          alignCenter: { alignItems: 'center', justifyContent: 'center' },
        }
        var t, a, n
      }
      function y(e) {
        return (y =
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
      function x() {
        return (x =
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
      function E(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function T(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function C(e, t, a) {
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
      var N = (function(e) {
        function t(e) {
          var a, n, r
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (n = this),
            (r = w(t).call(this, e)),
            (a =
              !r || ('object' !== y(r) && 'function' != typeof r) ? T(n) : r),
            C(T(T(a)), 'handleChange', function(e, t) {
              a.setState({ active: t })
            }),
            C(T(T(a)), 'handleChangeIndex', function(e) {
              a.setState({ active: e })
            }),
            (a.state = { active: e.active }),
            a
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
              t && S(e, t)
          })(t, r.a.Component),
          (a = t),
          (n = [
            {
              key: 'render',
              value: function() {
                var e,
                  t = this.props,
                  a = t.classes,
                  n = t.tabs,
                  o = t.direction,
                  i = t.color,
                  c = t.horizontal,
                  d = t.alignCenter,
                  u = l()(
                    (C((e = {}), a.flexContainer, !0),
                    C(e, a.horizontalDisplay, void 0 !== c),
                    e)
                  ),
                  f = r.a.createElement(
                    h.a,
                    {
                      classes: {
                        root: a.root,
                        fixed: a.fixed,
                        flexContainer: u,
                        indicator: a.displayNone,
                      },
                      value: this.state.active,
                      onChange: this.handleChange,
                      centered: d,
                    },
                    n.map(function(e, t) {
                      var n,
                        o = {}
                      void 0 !== e.tabIcon &&
                        (o.icon = r.a.createElement(e.tabIcon, {
                          className: a.tabIcon,
                        }))
                      var s = l()(
                        (C((n = {}), a.pills, !0),
                        C(n, a.horizontalPills, void 0 !== c),
                        C(n, a.pillsWithIcons, void 0 !== e.tabIcon),
                        n)
                      )
                      return r.a.createElement(
                        p.a,
                        x({ label: e.tabButton, key: t }, o, {
                          classes: {
                            root: s,
                            labelContainer: a.labelContainer,
                            label: a.label,
                            selected: a[i],
                          },
                        })
                      )
                    })
                  ),
                  g = r.a.createElement(
                    'div',
                    { className: a.contentWrapper },
                    r.a.createElement(
                      s.a,
                      {
                        axis: 'rtl' === o ? 'x-reverse' : 'x',
                        index: this.state.active,
                        onChangeIndex: this.handleChangeIndex,
                      },
                      n.map(function(e, t) {
                        return r.a.createElement(
                          'div',
                          { className: a.tabContent, key: t },
                          e.tabContent
                        )
                      })
                    )
                  )
                return void 0 !== c
                  ? r.a.createElement(
                      m.a,
                      null,
                      r.a.createElement(v.a, c.tabsGrid, f),
                      r.a.createElement(v.a, c.contentGrid, g)
                    )
                  : r.a.createElement('div', null, f, g)
              },
            },
          ]) && E(a.prototype, n),
          o && E(a, o),
          t
        )
      })()
      N.defaultProps = { active: 0, color: 'primary' }
      t.a = d()(b)(N)
    },
    720: function(e, t) {
      e.exports =
        '/_next/static/images/bg10-463b2448faf24247c42276cfeabd2669.jpg'
    },
    76: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        o = (a(8), a(5)),
        l = a.n(o),
        i = a(30)
      function s() {
        return (s =
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
        var t = s({}, e),
          a = t.classes,
          n = t.children
        return r.a.createElement(
          'div',
          { className: a.defaultFontStyle + ' ' + a.infoText },
          n
        )
      })
    },
    78: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        })
      var r = n(a(150))
    },
    79: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        })
      var r = n(a(158))
    },
    91: function(e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      t.default = { RESISTANCE_COEF: 0.6, UNCERTAINTY_THRESHOLD: 3 }
    },
    96: function(e, t, a) {
      'use strict'
      var n = a(4)
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function() {
            return r.default
          },
        })
      var r = n(a(160))
    },
  },
  [[1300, 1, 0]],
])
