;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    /***/ './node_modules/@material-ui/core/ClickAwayListener/ClickAwayListener.js':
      /*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ClickAwayListener/ClickAwayListener.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/classCallCheck */ './node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js'
          )
        )

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/createClass */ './node_modules/next/node_modules/@babel/runtime/helpers/createClass.js'
          )
        )

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/possibleConstructorReturn */ './node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
          )
        )

        var _getPrototypeOf3 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/getPrototypeOf */ './node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js'
          )
        )

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/inherits */ './node_modules/next/node_modules/@babel/runtime/helpers/inherits.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _reactDom = _interopRequireDefault(
          __webpack_require__(
            /*! react-dom */ './node_modules/react-dom/index.js'
          )
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _reactEventListener = _interopRequireDefault(
          __webpack_require__(
            /*! react-event-listener */ './node_modules/react-event-listener/dist/react-event-listener.cjs.js'
          )
        )

        var _ownerDocument = _interopRequireDefault(
          __webpack_require__(
            /*! ../utils/ownerDocument */ './node_modules/@material-ui/core/utils/ownerDocument.js'
          )
        )

        // @inheritedComponent EventListener

        /**
         * Listen for click events that occur somewhere in the document, outside of the element itself.
         * For instance, if you need to hide a menu when people click anywhere else on your page.
         */
        var ClickAwayListener =
          /*#__PURE__*/
          (function(_React$Component) {
            ;(0, _inherits2.default)(ClickAwayListener, _React$Component)

            function ClickAwayListener() {
              var _getPrototypeOf2

              var _this

              ;(0, _classCallCheck2.default)(this, ClickAwayListener)

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key]
              }

              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
                  ClickAwayListener
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              )
              _this.mounted = false
              _this.moved = false

              _this.handleClickAway = function(event) {
                // Ignore events that have been `event.preventDefault()` marked.
                if (event.defaultPrevented) {
                  return
                } // IE 11 support, which trigger the handleClickAway even after the unbind

                if (!_this.mounted) {
                  return
                } // Do not act if user performed touchmove

                if (_this.moved) {
                  _this.moved = false
                  return
                } // The child might render null.

                if (!_this.node) {
                  return
                }

                var doc = (0, _ownerDocument.default)(_this.node)

                if (
                  doc.documentElement &&
                  doc.documentElement.contains(event.target) &&
                  !_this.node.contains(event.target)
                ) {
                  _this.props.onClickAway(event)
                }
              }

              _this.handleTouchMove = function() {
                _this.moved = true
              }

              return _this
            }

            ;(0, _createClass2.default)(ClickAwayListener, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  // Finds the first child when a component returns a fragment.
                  // https://github.com/facebook/react/blob/036ae3c6e2f056adffc31dfb78d1b6f0c63272f0/packages/react-dom/src/__tests__/ReactDOMFiber-test.js#L105
                  this.node = _reactDom.default.findDOMNode(this)
                  this.mounted = true
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.mounted = false
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this$props = this.props,
                    children = _this$props.children,
                    mouseEvent = _this$props.mouseEvent,
                    touchEvent = _this$props.touchEvent,
                    onClickAway = _this$props.onClickAway,
                    other = (0, _objectWithoutProperties2.default)(
                      _this$props,
                      ['children', 'mouseEvent', 'touchEvent', 'onClickAway']
                    )
                  var listenerProps = {}

                  if (mouseEvent !== false) {
                    listenerProps[mouseEvent] = this.handleClickAway
                  }

                  if (touchEvent !== false) {
                    listenerProps[touchEvent] = this.handleClickAway
                    listenerProps.onTouchMove = this.handleTouchMove
                  }

                  return _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    children,
                    _react.default.createElement(
                      _reactEventListener.default,
                      (0, _extends2.default)(
                        {
                          target: 'document',
                        },
                        listenerProps,
                        other
                      )
                    )
                  )
                },
              },
            ])
            return ClickAwayListener
          })(_react.default.Component)

        ClickAwayListener.propTypes = true
          ? {
              /**
               * The wrapped element.
               */
              children: _propTypes.default.element.isRequired,

              /**
               * The mouse event to listen to. You can disable the listener by providing `false`.
               */
              mouseEvent: _propTypes.default.oneOf([
                'onClick',
                'onMouseDown',
                'onMouseUp',
                false,
              ]),

              /**
               * Callback fired when a "click away" event is detected.
               */
              onClickAway: _propTypes.default.func.isRequired,

              /**
               * The touch event to listen to. You can disable the listener by providing `false`.
               */
              touchEvent: _propTypes.default.oneOf([
                'onTouchStart',
                'onTouchEnd',
                false,
              ]),
            }
          : undefined
        ClickAwayListener.defaultProps = {
          mouseEvent: 'onMouseUp',
          touchEvent: 'onTouchEnd',
        }
        var _default = ClickAwayListener
        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/ClickAwayListener/index.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/ClickAwayListener/index.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _ClickAwayListener.default
          },
        })

        var _ClickAwayListener = _interopRequireDefault(
          __webpack_require__(
            /*! ./ClickAwayListener */ './node_modules/@material-ui/core/ClickAwayListener/ClickAwayListener.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/core/Divider/Divider.js':
      /*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/Divider.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = exports.styles = void 0

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _defineProperty2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */ './node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js'
          )
        )

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _classnames = _interopRequireDefault(
          __webpack_require__(
            /*! classnames */ './node_modules/classnames/index.js'
          )
        )

        var _withStyles = _interopRequireDefault(
          __webpack_require__(
            /*! ../styles/withStyles */ './node_modules/@material-ui/core/styles/withStyles.js'
          )
        )

        var _colorManipulator = __webpack_require__(
          /*! ../styles/colorManipulator */ './node_modules/@material-ui/core/styles/colorManipulator.js'
        )

        var _chainPropTypes = _interopRequireDefault(
          __webpack_require__(
            /*! ../utils/chainPropTypes */ './node_modules/@material-ui/core/utils/chainPropTypes.js'
          )
        )

        var styles = function styles(theme) {
          return {
            /* Styles applied to the root element. */
            root: {
              height: 1,
              margin: 0,
              // Reset browser default style.
              border: 'none',
              flexShrink: 0,
              backgroundColor: theme.palette.divider,
            },

            /* Styles applied to the root element if `absolute={true}`. */
            absolute: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            },

            /* Styles applied to the root element if `variant="inset"`. */
            inset: {
              marginLeft: 72,
            },

            /* Styles applied to the root element if `light={true}`. */
            light: {
              backgroundColor: (0, _colorManipulator.fade)(
                theme.palette.divider,
                0.08
              ),
            },

            /* Styles applied to the root element if `variant="middle"`. */
            middle: {
              marginLeft: theme.spacing.unit * 2,
              marginRight: theme.spacing.unit * 2,
            },
          }
        }

        exports.styles = styles

        function Divider(props) {
          var _classNames

          var absolute = props.absolute,
            classes = props.classes,
            className = props.className,
            Component = props.component,
            inset = props.inset,
            light = props.light,
            variant = props.variant,
            other = (0, _objectWithoutProperties2.default)(props, [
              'absolute',
              'classes',
              'className',
              'component',
              'inset',
              'light',
              'variant',
            ])
          return _react.default.createElement(
            Component,
            (0, _extends2.default)(
              {
                className: (0, _classnames.default)(
                  classes.root,
                  ((_classNames = {}),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.inset,
                    inset || variant === 'inset'
                  ),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.middle,
                    variant === 'middle'
                  ),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.absolute,
                    absolute
                  ),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.light,
                    light
                  ),
                  _classNames),
                  className
                ),
              },
              other
            )
          )
        }

        Divider.propTypes = true
          ? {
              /**
               * Absolutely position the element.
               */
              absolute: _propTypes.default.bool,

              /**
               * Override or extend the styles applied to the component.
               * See [CSS API](#css-api) below for more details.
               */
              classes: _propTypes.default.object.isRequired,

              /**
               * @ignore
               */
              className: _propTypes.default.string,

              /**
               * The component used for the root node.
               * Either a string to use a DOM element or a component.
               */
              component: _propTypes.default.oneOfType([
                _propTypes.default.string,
                _propTypes.default.func,
                _propTypes.default.object,
              ]),

              /**
               * If `true`, the divider will be indented.
               * __WARNING__: `inset` is deprecated.
               * Instead use `variant="inset"`.
               */
              inset: (0, _chainPropTypes.default)(
                _propTypes.default.bool,
                function(props) {
                  /* istanbul ignore if */
                  if (props.inset) {
                    return new Error(
                      'Material-UI: you are using the deprecated `inset` property ' +
                        'that will be removed in the next major release. The property `variant="inset"` ' +
                        'is equivalent and should be used instead.'
                    )
                  }

                  return null
                }
              ),

              /**
               * If `true`, the divider will have a lighter color.
               */
              light: _propTypes.default.bool,

              /**
               *  The variant to use.
               */
              variant: _propTypes.default.oneOf([
                'fullWidth',
                'inset',
                'middle',
              ]),
            }
          : undefined
        Divider.defaultProps = {
          absolute: false,
          component: 'hr',
          light: false,
          variant: 'fullWidth',
        }

        var _default = (0, _withStyles.default)(styles, {
          name: 'MuiDivider',
        })(Divider)

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/Divider/index.js':
      /*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/index.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _Divider.default
          },
        })

        var _Divider = _interopRequireDefault(
          __webpack_require__(
            /*! ./Divider */ './node_modules/@material-ui/core/Divider/Divider.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/core/Grow/Grow.js':
      /*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Grow/Grow.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/classCallCheck */ './node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js'
          )
        )

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/createClass */ './node_modules/next/node_modules/@babel/runtime/helpers/createClass.js'
          )
        )

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/possibleConstructorReturn */ './node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
          )
        )

        var _getPrototypeOf3 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/getPrototypeOf */ './node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js'
          )
        )

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/inherits */ './node_modules/next/node_modules/@babel/runtime/helpers/inherits.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _Transition = _interopRequireDefault(
          __webpack_require__(
            /*! react-transition-group/Transition */ './node_modules/react-transition-group/Transition.js'
          )
        )

        var _withTheme = _interopRequireDefault(
          __webpack_require__(
            /*! ../styles/withTheme */ './node_modules/@material-ui/core/styles/withTheme.js'
          )
        )

        var _utils = __webpack_require__(
          /*! ../transitions/utils */ './node_modules/@material-ui/core/transitions/utils.js'
        )

        // @inheritedComponent Transition
        function getScale(value) {
          return 'scale('.concat(value, ', ').concat(Math.pow(value, 2), ')')
        }

        var styles = {
          entering: {
            opacity: 1,
            transform: getScale(1),
          },
          entered: {
            opacity: 1,
            // Use translateZ to scrolling issue on Chrome.
            transform: ''.concat(getScale(1), ' translateZ(0)'),
          },
        }
        /**
         * The Grow transition is used by the [Tooltip](/demos/tooltips/) and
         * [Popover](/utils/popover/) components.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */

        var Grow =
          /*#__PURE__*/
          (function(_React$Component) {
            ;(0, _inherits2.default)(Grow, _React$Component)

            function Grow() {
              var _getPrototypeOf2

              var _this

              ;(0, _classCallCheck2.default)(this, Grow)

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key]
              }

              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
                  Grow
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              )

              _this.handleEnter = function(node) {
                var _this$props = _this.props,
                  theme = _this$props.theme,
                  timeout = _this$props.timeout
                ;(0, _utils.reflow)(node) // So the animation always start from the start.

                var _getTransitionProps = (0, _utils.getTransitionProps)(
                    _this.props,
                    {
                      mode: 'enter',
                    }
                  ),
                  transitionDuration = _getTransitionProps.duration,
                  delay = _getTransitionProps.delay

                var duration = 0

                if (timeout === 'auto') {
                  duration = theme.transitions.getAutoHeightDuration(
                    node.clientHeight
                  )
                  _this.autoTimeout = duration
                } else {
                  duration = transitionDuration
                }

                node.style.transition = [
                  theme.transitions.create('opacity', {
                    duration: duration,
                    delay: delay,
                  }),
                  theme.transitions.create('transform', {
                    duration: duration * 0.666,
                    delay: delay,
                  }),
                ].join(',')

                if (_this.props.onEnter) {
                  _this.props.onEnter(node)
                }
              }

              _this.handleExit = function(node) {
                var _this$props2 = _this.props,
                  theme = _this$props2.theme,
                  timeout = _this$props2.timeout
                var duration = 0

                var _getTransitionProps2 = (0, _utils.getTransitionProps)(
                    _this.props,
                    {
                      mode: 'exit',
                    }
                  ),
                  transitionDuration = _getTransitionProps2.duration,
                  delay = _getTransitionProps2.delay

                if (timeout === 'auto') {
                  duration = theme.transitions.getAutoHeightDuration(
                    node.clientHeight
                  )
                  _this.autoTimeout = duration
                } else {
                  duration = transitionDuration
                }

                node.style.transition = [
                  theme.transitions.create('opacity', {
                    duration: duration,
                    delay: delay,
                  }),
                  theme.transitions.create('transform', {
                    duration: duration * 0.666,
                    delay: delay || duration * 0.333,
                  }),
                ].join(',')
                node.style.opacity = '0'
                node.style.transform = getScale(0.75)

                if (_this.props.onExit) {
                  _this.props.onExit(node)
                }
              }

              _this.addEndListener = function(_, next) {
                if (_this.props.timeout === 'auto') {
                  _this.timer = setTimeout(next, _this.autoTimeout || 0)
                }
              }

              return _this
            }

            ;(0, _createClass2.default)(Grow, [
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  clearTimeout(this.timer)
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this$props3 = this.props,
                    children = _this$props3.children,
                    onEnter = _this$props3.onEnter,
                    onExit = _this$props3.onExit,
                    styleProp = _this$props3.style,
                    theme = _this$props3.theme,
                    timeout = _this$props3.timeout,
                    other = (0, _objectWithoutProperties2.default)(
                      _this$props3,
                      [
                        'children',
                        'onEnter',
                        'onExit',
                        'style',
                        'theme',
                        'timeout',
                      ]
                    )
                  var style = (0, _extends2.default)(
                    {},
                    styleProp,
                    _react.default.isValidElement(children)
                      ? children.props.style
                      : {}
                  )
                  return _react.default.createElement(
                    _Transition.default,
                    (0, _extends2.default)(
                      {
                        appear: true,
                        onEnter: this.handleEnter,
                        onExit: this.handleExit,
                        addEndListener: this.addEndListener,
                        timeout: timeout === 'auto' ? null : timeout,
                      },
                      other
                    ),
                    function(state, childProps) {
                      return _react.default.cloneElement(
                        children,
                        (0, _extends2.default)(
                          {
                            style: (0, _extends2.default)(
                              {
                                opacity: 0,
                                transform: getScale(0.75),
                              },
                              styles[state],
                              style
                            ),
                          },
                          childProps
                        )
                      )
                    }
                  )
                },
              },
            ])
            return Grow
          })(_react.default.Component)

        Grow.propTypes = true
          ? {
              /**
               * A single child content element.
               */
              children: _propTypes.default.oneOfType([
                _propTypes.default.element,
                _propTypes.default.func,
              ]),

              /**
               * If `true`, show the component; triggers the enter or exit animation.
               */
              in: _propTypes.default.bool,

              /**
               * @ignore
               */
              onEnter: _propTypes.default.func,

              /**
               * @ignore
               */
              onExit: _propTypes.default.func,

              /**
               * @ignore
               */
              style: _propTypes.default.object,

              /**
               * @ignore
               */
              theme: _propTypes.default.object.isRequired,

              /**
               * The duration for the transition, in milliseconds.
               * You may specify a single timeout for all transitions, or individually with an object.
               *
               * Set to 'auto' to automatically calculate transition time based on height.
               */
              timeout: _propTypes.default.oneOfType([
                _propTypes.default.number,
                _propTypes.default.shape({
                  enter: _propTypes.default.number,
                  exit: _propTypes.default.number,
                }),
                _propTypes.default.oneOf(['auto']),
              ]),
            }
          : undefined
        Grow.defaultProps = {
          timeout: 'auto',
        }
        Grow.muiSupportAuto = true

        var _default = (0, _withTheme.default)()(Grow)

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/Grow/index.js':
      /*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/Grow/index.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _Grow.default
          },
        })

        var _Grow = _interopRequireDefault(
          __webpack_require__(
            /*! ./Grow */ './node_modules/@material-ui/core/Grow/Grow.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/core/MenuItem/MenuItem.js':
      /*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/MenuItem/MenuItem.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = exports.styles = void 0

        var _defineProperty2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */ './node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js'
          )
        )

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _classnames = _interopRequireDefault(
          __webpack_require__(
            /*! classnames */ './node_modules/classnames/index.js'
          )
        )

        var _withStyles = _interopRequireDefault(
          __webpack_require__(
            /*! ../styles/withStyles */ './node_modules/@material-ui/core/styles/withStyles.js'
          )
        )

        var _ListItem = _interopRequireDefault(
          __webpack_require__(
            /*! ../ListItem */ './node_modules/@material-ui/core/ListItem/index.js'
          )
        )

        // @inheritedComponent ListItem
        var styles = function styles(theme) {
          return {
            /* Styles applied to the root element. */
            root: (0, _extends2.default)({}, theme.typography.subheading, {
              height: 24,
              boxSizing: 'content-box',
              width: 'auto',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              '&$selected': {},
            }),

            /* Styles applied to the root element if `disableGutters={false}`. */
            gutters: {
              paddingLeft: 16,
              paddingRight: 16,
            },

            /* Styles applied to the root element if `selected={true}`. */
            selected: {},
          }
        }

        exports.styles = styles

        function MenuItem(props) {
          var _classNames

          var classes = props.classes,
            className = props.className,
            component = props.component,
            disableGutters = props.disableGutters,
            role = props.role,
            selected = props.selected,
            other = (0, _objectWithoutProperties2.default)(props, [
              'classes',
              'className',
              'component',
              'disableGutters',
              'role',
              'selected',
            ])
          return _react.default.createElement(
            _ListItem.default,
            (0, _extends2.default)(
              {
                button: true,
                role: role,
                tabIndex: -1,
                component: component,
                selected: selected,
                disableGutters: disableGutters,
                className: (0, _classnames.default)(
                  classes.root,
                  ((_classNames = {}),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.selected,
                    selected
                  ),
                  (0, _defineProperty2.default)(
                    _classNames,
                    classes.gutters,
                    !disableGutters
                  ),
                  _classNames),
                  className
                ),
              },
              other
            )
          )
        }

        MenuItem.propTypes = true
          ? {
              /**
               * Menu item contents.
               */
              children: _propTypes.default.node,

              /**
               * Override or extend the styles applied to the component.
               * See [CSS API](#css-api) below for more details.
               */
              classes: _propTypes.default.object.isRequired,

              /**
               * @ignore
               */
              className: _propTypes.default.string,

              /**
               * The component used for the root node.
               * Either a string to use a DOM element or a component.
               */
              component: _propTypes.default.oneOfType([
                _propTypes.default.string,
                _propTypes.default.func,
                _propTypes.default.object,
              ]),

              /**
               * If `true`, the left and right padding is removed.
               */
              disableGutters: _propTypes.default.bool,

              /**
               * @ignore
               */
              role: _propTypes.default.string,

              /**
               * @ignore
               */
              selected: _propTypes.default.bool,
            }
          : undefined
        MenuItem.defaultProps = {
          component: 'li',
          disableGutters: false,
          role: 'menuitem',
        }

        var _default = (0, _withStyles.default)(styles, {
          name: 'MuiMenuItem',
        })(MenuItem)

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/MenuItem/index.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/MenuItem/index.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _MenuItem.default
          },
        })

        var _MenuItem = _interopRequireDefault(
          __webpack_require__(
            /*! ./MenuItem */ './node_modules/@material-ui/core/MenuItem/MenuItem.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/core/MenuList/MenuList.js':
      /*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/MenuList/MenuList.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/classCallCheck */ './node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js'
          )
        )

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/createClass */ './node_modules/next/node_modules/@babel/runtime/helpers/createClass.js'
          )
        )

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/possibleConstructorReturn */ './node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
          )
        )

        var _getPrototypeOf3 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/getPrototypeOf */ './node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js'
          )
        )

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/inherits */ './node_modules/next/node_modules/@babel/runtime/helpers/inherits.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _reactDom = _interopRequireDefault(
          __webpack_require__(
            /*! react-dom */ './node_modules/react-dom/index.js'
          )
        )

        var _keycode = _interopRequireDefault(
          __webpack_require__(/*! keycode */ './node_modules/keycode/index.js')
        )

        var _warning = _interopRequireDefault(
          __webpack_require__(
            /*! warning */ './node_modules/warning/warning.js'
          )
        )

        var _ownerDocument = _interopRequireDefault(
          __webpack_require__(
            /*! ../utils/ownerDocument */ './node_modules/@material-ui/core/utils/ownerDocument.js'
          )
        )

        var _List = _interopRequireDefault(
          __webpack_require__(
            /*! ../List */ './node_modules/@material-ui/core/List/index.js'
          )
        )

        // @inheritedComponent List
        var MenuList =
          /*#__PURE__*/
          (function(_React$Component) {
            ;(0, _inherits2.default)(MenuList, _React$Component)

            function MenuList() {
              var _getPrototypeOf2

              var _this

              ;(0, _classCallCheck2.default)(this, MenuList)

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key]
              }

              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
                  MenuList
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              )
              _this.state = {
                currentTabIndex: null,
              }

              _this.handleBlur = function(event) {
                _this.blurTimer = setTimeout(function() {
                  if (_this.listRef) {
                    var list = _this.listRef
                    var currentFocus = (0, _ownerDocument.default)(list)
                      .activeElement

                    if (!list.contains(currentFocus)) {
                      _this.resetTabIndex()
                    }
                  }
                }, 30)

                if (_this.props.onBlur) {
                  _this.props.onBlur(event)
                }
              }

              _this.handleKeyDown = function(event) {
                var list = _this.listRef
                var key = (0, _keycode.default)(event)
                var currentFocus = (0, _ownerDocument.default)(list)
                  .activeElement

                if (
                  (key === 'up' || key === 'down') &&
                  (!currentFocus ||
                    (currentFocus && !list.contains(currentFocus)))
                ) {
                  if (_this.selectedItemRef) {
                    _this.selectedItemRef.focus()
                  } else {
                    list.firstChild.focus()
                  }
                } else if (key === 'down') {
                  event.preventDefault()

                  if (currentFocus.nextElementSibling) {
                    currentFocus.nextElementSibling.focus()
                  }
                } else if (key === 'up') {
                  event.preventDefault()

                  if (currentFocus.previousElementSibling) {
                    currentFocus.previousElementSibling.focus()
                  }
                }

                if (_this.props.onKeyDown) {
                  _this.props.onKeyDown(event, key)
                }
              }

              _this.handleItemFocus = function(event) {
                var list = _this.listRef

                if (list) {
                  for (var i = 0; i < list.children.length; i += 1) {
                    if (list.children[i] === event.currentTarget) {
                      _this.setTabIndex(i)

                      break
                    }
                  }
                }
              }

              return _this
            }

            ;(0, _createClass2.default)(MenuList, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.resetTabIndex()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  clearTimeout(this.blurTimer)
                },
              },
              {
                key: 'setTabIndex',
                value: function setTabIndex(index) {
                  this.setState({
                    currentTabIndex: index,
                  })
                },
              },
              {
                key: 'focus',
                value: function focus() {
                  var currentTabIndex = this.state.currentTabIndex
                  var list = this.listRef

                  if (!list || !list.children || !list.firstChild) {
                    return
                  }

                  if (currentTabIndex && currentTabIndex >= 0) {
                    list.children[currentTabIndex].focus()
                  } else {
                    list.firstChild.focus()
                  }
                },
              },
              {
                key: 'resetTabIndex',
                value: function resetTabIndex() {
                  var list = this.listRef
                  var currentFocus = (0, _ownerDocument.default)(list)
                    .activeElement
                  var items = []

                  for (var i = 0; i < list.children.length; i += 1) {
                    items.push(list.children[i])
                  }

                  var currentFocusIndex = items.indexOf(currentFocus)

                  if (currentFocusIndex !== -1) {
                    return this.setTabIndex(currentFocusIndex)
                  }

                  if (this.selectedItemRef) {
                    return this.setTabIndex(items.indexOf(this.selectedItemRef))
                  }

                  return this.setTabIndex(0)
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this

                  var _this$props = this.props,
                    children = _this$props.children,
                    className = _this$props.className,
                    onBlur = _this$props.onBlur,
                    onKeyDown = _this$props.onKeyDown,
                    other = (0, _objectWithoutProperties2.default)(
                      _this$props,
                      ['children', 'className', 'onBlur', 'onKeyDown']
                    )
                  return _react.default.createElement(
                    _List.default,
                    (0, _extends2.default)(
                      {
                        role: 'menu',
                        ref: function ref(_ref) {
                          _this2.listRef = _reactDom.default.findDOMNode(_ref)
                        },
                        className: className,
                        onKeyDown: this.handleKeyDown,
                        onBlur: this.handleBlur,
                      },
                      other
                    ),
                    _react.default.Children.map(children, function(
                      child,
                      index
                    ) {
                      if (!_react.default.isValidElement(child)) {
                        return null
                      }

                      true
                        ? (0, _warning.default)(
                            child.type !== _react.default.Fragment,
                            [
                              "Material-UI: the MenuList component doesn't accept a Fragment as a child.",
                              'Consider providing an array instead.',
                            ].join('\n')
                          )
                        : undefined
                      return _react.default.cloneElement(child, {
                        tabIndex:
                          index === _this2.state.currentTabIndex ? 0 : -1,
                        ref: child.props.selected
                          ? function(ref) {
                              _this2.selectedItemRef = _reactDom.default.findDOMNode(
                                ref
                              )
                            }
                          : undefined,
                        onFocus: _this2.handleItemFocus,
                      })
                    })
                  )
                },
              },
            ])
            return MenuList
          })(_react.default.Component)

        MenuList.propTypes = true
          ? {
              /**
               * MenuList contents, normally `MenuItem`s.
               */
              children: _propTypes.default.node,

              /**
               * @ignore
               */
              className: _propTypes.default.string,

              /**
               * @ignore
               */
              onBlur: _propTypes.default.func,

              /**
               * @ignore
               */
              onKeyDown: _propTypes.default.func,
            }
          : undefined
        var _default = MenuList
        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/MenuList/index.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/MenuList/index.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _MenuList.default
          },
        })

        var _MenuList = _interopRequireDefault(
          __webpack_require__(
            /*! ./MenuList */ './node_modules/@material-ui/core/MenuList/MenuList.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/core/Popper/Popper.js':
      /*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Popper/Popper.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _objectWithoutProperties2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
          )
        )

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/next/node_modules/@babel/runtime/helpers/extends.js'
          )
        )

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/classCallCheck */ './node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js'
          )
        )

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/createClass */ './node_modules/next/node_modules/@babel/runtime/helpers/createClass.js'
          )
        )

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/possibleConstructorReturn */ './node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
          )
        )

        var _getPrototypeOf2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/getPrototypeOf */ './node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js'
          )
        )

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/inherits */ './node_modules/next/node_modules/@babel/runtime/helpers/inherits.js'
          )
        )

        var _assertThisInitialized2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/assertThisInitialized */ './node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js'
          )
        )

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _reactDom = _interopRequireDefault(
          __webpack_require__(
            /*! react-dom */ './node_modules/react-dom/index.js'
          )
        )

        var _propTypes = _interopRequireDefault(
          __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
        )

        var _popper = _interopRequireDefault(
          __webpack_require__(
            /*! popper.js */ './node_modules/popper.js/dist/esm/popper.js'
          )
        )

        var _withTheme = _interopRequireDefault(
          __webpack_require__(
            /*! ../styles/withTheme */ './node_modules/@material-ui/core/styles/withTheme.js'
          )
        )

        var _Portal = _interopRequireDefault(
          __webpack_require__(
            /*! ../Portal */ './node_modules/@material-ui/core/Portal/index.js'
          )
        )

        function flipPlacement(theme, placement) {
          if (theme.direction !== 'rtl') {
            return placement
          }

          switch (placement) {
            case 'bottom-end':
              return 'bottom-start'

            case 'bottom-start':
              return 'bottom-end'

            case 'top-end':
              return 'top-start'

            case 'top-start':
              return 'top-end'

            default:
              return placement
          }
        }

        function getAnchorEl(anchorEl) {
          return typeof anchorEl === 'function' ? anchorEl() : anchorEl
        }
        /**
         * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
         */

        var Popper =
          /*#__PURE__*/
          (function(_React$Component) {
            ;(0, _inherits2.default)(Popper, _React$Component)

            function Popper(props) {
              var _this

              ;(0, _classCallCheck2.default)(this, Popper)
              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (0, _getPrototypeOf2.default)(Popper).call(this)
              )

              _this.handleOpen = function() {
                var _this$props = _this.props,
                  anchorEl = _this$props.anchorEl,
                  modifiers = _this$props.modifiers,
                  open = _this$props.open,
                  placement = _this$props.placement,
                  _this$props$popperOpt = _this$props.popperOptions,
                  popperOptions =
                    _this$props$popperOpt === void 0
                      ? {}
                      : _this$props$popperOpt,
                  theme = _this$props.theme,
                  disablePortal = _this$props.disablePortal

                var popperNode = _reactDom.default.findDOMNode(
                  (0, _assertThisInitialized2.default)(
                    (0, _assertThisInitialized2.default)(_this)
                  )
                )

                if (!popperNode || !anchorEl || !open) {
                  return
                }

                if (_this.popper) {
                  _this.popper.destroy()

                  _this.popper = null
                }

                _this.popper = new _popper.default(
                  getAnchorEl(anchorEl),
                  popperNode,
                  (0, _extends2.default)(
                    {
                      placement: flipPlacement(theme, placement),
                    },
                    popperOptions,
                    {
                      modifiers: (0, _extends2.default)(
                        {},
                        disablePortal
                          ? {}
                          : {
                              // It's using scrollParent by default, we can use the viewport when using a portal.
                              preventOverflow: {
                                boundariesElement: 'window',
                              },
                            },
                        modifiers,
                        popperOptions.modifiers
                      ),
                      // We could have been using a custom modifier like react-popper is doing.
                      // But it seems this is the best public API for this use case.
                      onCreate: _this.handlePopperUpdate,
                      onUpdate: _this.handlePopperUpdate,
                    }
                  )
                )
              }

              _this.handlePopperUpdate = function(data) {
                if (data.placement !== _this.state.placement) {
                  _this.setState({
                    placement: data.placement,
                  })
                }
              }

              _this.handleExited = function() {
                _this.setState({
                  exited: true,
                })

                _this.handleClose()
              }

              _this.handleClose = function() {
                if (!_this.popper) {
                  return
                }

                _this.popper.destroy()

                _this.popper = null
              }

              _this.state = {
                exited: !props.open,
              }
              return _this
            }

            ;(0, _createClass2.default)(
              Popper,
              [
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate(prevProps) {
                    if (
                      prevProps.open !== this.props.open &&
                      !this.props.open &&
                      !this.props.transition
                    ) {
                      // Otherwise handleExited will call this.
                      this.handleClose()
                    } // Let's update the popper position.

                    if (
                      prevProps.open !== this.props.open ||
                      prevProps.anchorEl !== this.props.anchorEl ||
                      prevProps.popperOptions !== this.props.popperOptions ||
                      prevProps.modifiers !== this.props.modifiers ||
                      prevProps.disablePortal !== this.props.disablePortal ||
                      prevProps.placement !== this.props.placement
                    ) {
                      this.handleOpen()
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function componentWillUnmount() {
                    this.handleClose()
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var _this$props2 = this.props,
                      anchorEl = _this$props2.anchorEl,
                      children = _this$props2.children,
                      container = _this$props2.container,
                      disablePortal = _this$props2.disablePortal,
                      keepMounted = _this$props2.keepMounted,
                      modifiers = _this$props2.modifiers,
                      open = _this$props2.open,
                      placementProps = _this$props2.placement,
                      popperOptions = _this$props2.popperOptions,
                      theme = _this$props2.theme,
                      transition = _this$props2.transition,
                      other = (0, _objectWithoutProperties2.default)(
                        _this$props2,
                        [
                          'anchorEl',
                          'children',
                          'container',
                          'disablePortal',
                          'keepMounted',
                          'modifiers',
                          'open',
                          'placement',
                          'popperOptions',
                          'theme',
                          'transition',
                        ]
                      )
                    var _this$state = this.state,
                      exited = _this$state.exited,
                      placement = _this$state.placement

                    if (!keepMounted && !open && (!transition || exited)) {
                      return null
                    }

                    var childProps = {
                      placement:
                        placement || flipPlacement(theme, placementProps),
                    }

                    if (transition) {
                      childProps.TransitionProps = {
                        in: open,
                        onExited: this.handleExited,
                      }
                    }

                    return _react.default.createElement(
                      _Portal.default,
                      {
                        onRendered: this.handleOpen,
                        disablePortal: disablePortal,
                        container: container,
                      },
                      _react.default.createElement(
                        'div',
                        (0, _extends2.default)(
                          {
                            role: 'tooltip',
                            style: {
                              // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                              position: 'absolute',
                            },
                          },
                          other
                        ),
                        typeof children === 'function'
                          ? children(childProps)
                          : children
                      )
                    )
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function getDerivedStateFromProps(nextProps) {
                    if (nextProps.open) {
                      return {
                        exited: false,
                      }
                    }

                    if (!nextProps.transition) {
                      // Otherwise let handleExited take care of marking exited.
                      return {
                        exited: true,
                      }
                    }

                    return null
                  },
                },
              ]
            )
            return Popper
          })(_react.default.Component)

        Popper.propTypes = true
          ? {
              /**
               * This is the DOM element, or a function that returns the DOM element,
               * that may be used to set the position of the popover.
               * The return value will passed as the reference object of the Popper
               * instance.
               */
              anchorEl: _propTypes.default.oneOfType([
                _propTypes.default.object,
                _propTypes.default.func,
              ]),

              /**
               * Popper render function or node.
               */
              children: _propTypes.default.oneOfType([
                _propTypes.default.node,
                _propTypes.default.func,
              ]).isRequired,

              /**
               * A node, component instance, or function that returns either.
               * The `container` will passed to the Modal component.
               * By default, it uses the body of the anchorEl's top-level document object,
               * so it's simply `document.body` most of the time.
               */
              container: _propTypes.default.oneOfType([
                _propTypes.default.object,
                _propTypes.default.func,
              ]),

              /**
               * Disable the portal behavior.
               * The children stay within it's parent DOM hierarchy.
               */
              disablePortal: _propTypes.default.bool,

              /**
               * Always keep the children in the DOM.
               * This property can be useful in SEO situation or
               * when you want to maximize the responsiveness of the Popper.
               */
              keepMounted: _propTypes.default.bool,

              /**
               * Popper.js is based on a "plugin-like" architecture,
               * most of its features are fully encapsulated "modifiers".
               *
               * A modifier is a function that is called each time Popper.js needs to
               * compute the position of the popper.
               * For this reason, modifiers should be very performant to avoid bottlenecks.
               * To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
               */
              modifiers: _propTypes.default.object,

              /**
               * If `true`, the popper is visible.
               */
              open: _propTypes.default.bool.isRequired,

              /**
               * Popper placement.
               */
              placement: _propTypes.default.oneOf([
                'bottom-end',
                'bottom-start',
                'bottom',
                'left-end',
                'left-start',
                'left',
                'right-end',
                'right-start',
                'right',
                'top-end',
                'top-start',
                'top',
              ]),

              /**
               * Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance.
               */
              popperOptions: _propTypes.default.object,

              /**
               * @ignore
               */
              theme: _propTypes.default.object.isRequired,

              /**
               * Help supporting a react-transition-group/Transition component.
               */
              transition: _propTypes.default.bool,
            }
          : undefined
        Popper.defaultProps = {
          disablePortal: false,
          placement: 'bottom',
          transition: false,
        }

        var _default = (0, _withTheme.default)()(Popper)

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/core/Popper/index.js':
      /*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/Popper/index.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        Object.defineProperty(exports, 'default', {
          enumerable: true,
          get: function get() {
            return _Popper.default
          },
        })

        var _Popper = _interopRequireDefault(
          __webpack_require__(
            /*! ./Popper */ './node_modules/@material-ui/core/Popper/Popper.js'
          )
        )

        /***/
      },

    /***/ './node_modules/@material-ui/icons/AccountBalance.js':
      /*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/AccountBalance.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z',
            })
          ),
          'AccountBalance'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/AccountCircle.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/AccountCircle.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'AccountCircle'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/ArtTrack.js':
      /*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArtTrack.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z',
            })
          ),
          'ArtTrack'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Assignment.js':
      /*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Assignment.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
            })
          ),
          'Assignment'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Build.js':
      /*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Build.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
              clipRule: 'evenodd',
            }),
            _react.default.createElement('path', {
              d:
                'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
            })
          ),
          'Build'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Call.js':
      /*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Call.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z',
            })
          ),
          'Call'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Chat.js':
      /*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Chat.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'Chat'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Dns.js':
      /*!************************************************!*\
  !*** ./node_modules/@material-ui/icons/Dns.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            })
          ),
          'Dns'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Fingerprint.js':
      /*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/Fingerprint.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'Fingerprint'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Layers.js':
      /*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Layers.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
            })
          ),
          'Layers'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/LineStyle.js':
      /*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/LineStyle.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              'defs',
              null,
              _react.default.createElement('path', {
                id: 'a',
                d: 'M0 0h24v24H0z',
              })
            ),
            _react.default.createElement('path', {
              d:
                'M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z',
            })
          ),
          'LineStyle'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/List.js':
      /*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/List.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'List'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/LocationOn.js':
      /*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/LocationOn.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'LocationOn'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/MonetizationOn.js':
      /*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/MonetizationOn.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'MonetizationOn'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/People.js':
      /*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/People.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
            })
          ),
          'People'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/PersonAdd.js':
      /*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/PersonAdd.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
            })
          ),
          'PersonAdd'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/ShoppingBasket.js':
      /*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ShoppingBasket.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
            })
          ),
          'ShoppingBasket'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/ShoppingCart.js':
      /*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ShoppingCart.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'ShoppingCart'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/Store.js':
      /*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Store.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            }),
            _react.default.createElement('path', {
              d:
                'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z',
            })
          ),
          'Store'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/@material-ui/icons/ViewQuilt.js':
      /*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ViewQuilt.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.default = void 0

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ './node_modules/react/index.js')
        )

        var _createSvgIcon = _interopRequireDefault(
          __webpack_require__(
            /*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
          )
        )

        var _default = (0, _createSvgIcon.default)(
          _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement('path', {
              d:
                'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
            }),
            _react.default.createElement('path', {
              fill: 'none',
              d: 'M0 0h24v24H0z',
            })
          ),
          'ViewQuilt'
        )

        exports.default = _default

        /***/
      },

    /***/ './node_modules/popper.js/dist/esm/popper.js':
      /*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* WEBPACK VAR INJECTION */ ;(function(global) {
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.14.6
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var isBrowser =
            typeof window !== 'undefined' && typeof document !== 'undefined'

          var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox']
          var timeoutDuration = 0
          for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
            if (
              isBrowser &&
              navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0
            ) {
              timeoutDuration = 1
              break
            }
          }

          function microtaskDebounce(fn) {
            var called = false
            return function() {
              if (called) {
                return
              }
              called = true
              window.Promise.resolve().then(function() {
                called = false
                fn()
              })
            }
          }

          function taskDebounce(fn) {
            var scheduled = false
            return function() {
              if (!scheduled) {
                scheduled = true
                setTimeout(function() {
                  scheduled = false
                  fn()
                }, timeoutDuration)
              }
            }
          }

          var supportsMicroTasks = isBrowser && window.Promise

          /**
           * Create a debounced version of a method, that's asynchronously deferred
           * but called in the minimum time possible.
           *
           * @method
           * @memberof Popper.Utils
           * @argument {Function} fn
           * @returns {Function}
           */
          var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce

          /**
           * Check if the given variable is a function
           * @method
           * @memberof Popper.Utils
           * @argument {Any} functionToCheck - variable to check
           * @returns {Boolean} answer to: is a function?
           */
          function isFunction(functionToCheck) {
            var getType = {}
            return (
              functionToCheck &&
              getType.toString.call(functionToCheck) === '[object Function]'
            )
          }

          /**
           * Get CSS computed property of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Eement} element
           * @argument {String} property
           */
          function getStyleComputedProperty(element, property) {
            if (element.nodeType !== 1) {
              return []
            }
            // NOTE: 1 DOM access here
            var window = element.ownerDocument.defaultView
            var css = window.getComputedStyle(element, null)
            return property ? css[property] : css
          }

          /**
           * Returns the parentNode or the host of the element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} parent
           */
          function getParentNode(element) {
            if (element.nodeName === 'HTML') {
              return element
            }
            return element.parentNode || element.host
          }

          /**
           * Returns the scrolling parent of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} scroll parent
           */
          function getScrollParent(element) {
            // Return body, `getScroll` will take care to get the correct `scrollTop` from it
            if (!element) {
              return document.body
            }

            switch (element.nodeName) {
              case 'HTML':
              case 'BODY':
                return element.ownerDocument.body
              case '#document':
                return element.body
            }

            // Firefox want us to check `-x` and `-y` variations as well

            var _getStyleComputedProp = getStyleComputedProperty(element),
              overflow = _getStyleComputedProp.overflow,
              overflowX = _getStyleComputedProp.overflowX,
              overflowY = _getStyleComputedProp.overflowY

            if (
              /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)
            ) {
              return element
            }

            return getScrollParent(getParentNode(element))
          }

          var isIE11 =
            isBrowser &&
            !!(window.MSInputMethodContext && document.documentMode)
          var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent)

          /**
           * Determines if the browser is Internet Explorer
           * @method
           * @memberof Popper.Utils
           * @param {Number} version to check
           * @returns {Boolean} isIE
           */
          function isIE(version) {
            if (version === 11) {
              return isIE11
            }
            if (version === 10) {
              return isIE10
            }
            return isIE11 || isIE10
          }

          /**
           * Returns the offset parent of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} offset parent
           */
          function getOffsetParent(element) {
            if (!element) {
              return document.documentElement
            }

            var noOffsetParent = isIE(10) ? document.body : null

            // NOTE: 1 DOM access here
            var offsetParent = element.offsetParent || null
            // Skip hidden elements which don't have an offsetParent
            while (
              offsetParent === noOffsetParent &&
              element.nextElementSibling
            ) {
              offsetParent = (element = element.nextElementSibling).offsetParent
            }

            var nodeName = offsetParent && offsetParent.nodeName

            if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
              return element
                ? element.ownerDocument.documentElement
                : document.documentElement
            }

            // .offsetParent will return the closest TH, TD or TABLE in case
            // no offsetParent is present, I hate this job...
            if (
              ['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
              getStyleComputedProperty(offsetParent, 'position') === 'static'
            ) {
              return getOffsetParent(offsetParent)
            }

            return offsetParent
          }

          function isOffsetContainer(element) {
            var nodeName = element.nodeName

            if (nodeName === 'BODY') {
              return false
            }
            return (
              nodeName === 'HTML' ||
              getOffsetParent(element.firstElementChild) === element
            )
          }

          /**
           * Finds the root node (document, shadowDOM root) of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} node
           * @returns {Element} root node
           */
          function getRoot(node) {
            if (node.parentNode !== null) {
              return getRoot(node.parentNode)
            }

            return node
          }

          /**
           * Finds the offset parent common to the two provided nodes
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element1
           * @argument {Element} element2
           * @returns {Element} common offset parent
           */
          function findCommonOffsetParent(element1, element2) {
            // This check is needed to avoid errors in case one of the elements isn't defined for any reason
            if (
              !element1 ||
              !element1.nodeType ||
              !element2 ||
              !element2.nodeType
            ) {
              return document.documentElement
            }

            // Here we make sure to give as "start" the element that comes first in the DOM
            var order =
              element1.compareDocumentPosition(element2) &
              Node.DOCUMENT_POSITION_FOLLOWING
            var start = order ? element1 : element2
            var end = order ? element2 : element1

            // Get common ancestor container
            var range = document.createRange()
            range.setStart(start, 0)
            range.setEnd(end, 0)
            var commonAncestorContainer = range.commonAncestorContainer

            // Both nodes are inside #document

            if (
              (element1 !== commonAncestorContainer &&
                element2 !== commonAncestorContainer) ||
              start.contains(end)
            ) {
              if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer
              }

              return getOffsetParent(commonAncestorContainer)
            }

            // one of the nodes is inside shadowDOM, find which one
            var element1root = getRoot(element1)
            if (element1root.host) {
              return findCommonOffsetParent(element1root.host, element2)
            } else {
              return findCommonOffsetParent(element1, getRoot(element2).host)
            }
          }

          /**
           * Gets the scroll value of the given element in the given side (top and left)
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @argument {String} side `top` or `left`
           * @returns {number} amount of scrolled pixels
           */
          function getScroll(element) {
            var side =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : 'top'

            var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft'
            var nodeName = element.nodeName

            if (nodeName === 'BODY' || nodeName === 'HTML') {
              var html = element.ownerDocument.documentElement
              var scrollingElement =
                element.ownerDocument.scrollingElement || html
              return scrollingElement[upperSide]
            }

            return element[upperSide]
          }

          /*
           * Sum or subtract the element scroll values (left and top) from a given rect object
           * @method
           * @memberof Popper.Utils
           * @param {Object} rect - Rect object you want to change
           * @param {HTMLElement} element - The element from the function reads the scroll values
           * @param {Boolean} subtract - set to true if you want to subtract the scroll values
           * @return {Object} rect - The modifier rect object
           */
          function includeScroll(rect, element) {
            var subtract =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : false

            var scrollTop = getScroll(element, 'top')
            var scrollLeft = getScroll(element, 'left')
            var modifier = subtract ? -1 : 1
            rect.top += scrollTop * modifier
            rect.bottom += scrollTop * modifier
            rect.left += scrollLeft * modifier
            rect.right += scrollLeft * modifier
            return rect
          }

          /*
           * Helper to detect borders of a given element
           * @method
           * @memberof Popper.Utils
           * @param {CSSStyleDeclaration} styles
           * Result of `getStyleComputedProperty` on the given element
           * @param {String} axis - `x` or `y`
           * @return {number} borders - The borders size of the given axis
           */

          function getBordersSize(styles, axis) {
            var sideA = axis === 'x' ? 'Left' : 'Top'
            var sideB = sideA === 'Left' ? 'Right' : 'Bottom'

            return (
              parseFloat(styles['border' + sideA + 'Width'], 10) +
              parseFloat(styles['border' + sideB + 'Width'], 10)
            )
          }

          function getSize(axis, body, html, computedStyle) {
            return Math.max(
              body['offset' + axis],
              body['scroll' + axis],
              html['client' + axis],
              html['offset' + axis],
              html['scroll' + axis],
              isIE(10)
                ? parseInt(html['offset' + axis]) +
                    parseInt(
                      computedStyle[
                        'margin' + (axis === 'Height' ? 'Top' : 'Left')
                      ]
                    ) +
                    parseInt(
                      computedStyle[
                        'margin' + (axis === 'Height' ? 'Bottom' : 'Right')
                      ]
                    )
                : 0
            )
          }

          function getWindowSizes(document) {
            var body = document.body
            var html = document.documentElement
            var computedStyle = isIE(10) && getComputedStyle(html)

            return {
              height: getSize('Height', body, html, computedStyle),
              width: getSize('Width', body, html, computedStyle),
            }
          }

          var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          var createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }

            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          var defineProperty = function(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              })
            } else {
              obj[key] = value
            }

            return obj
          }

          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }

              return target
            }

          /**
           * Given element offsets, generate an output similar to getBoundingClientRect
           * @method
           * @memberof Popper.Utils
           * @argument {Object} offsets
           * @returns {Object} ClientRect like output
           */
          function getClientRect(offsets) {
            return _extends({}, offsets, {
              right: offsets.left + offsets.width,
              bottom: offsets.top + offsets.height,
            })
          }

          /**
           * Get bounding client rect of given element
           * @method
           * @memberof Popper.Utils
           * @param {HTMLElement} element
           * @return {Object} client rect
           */
          function getBoundingClientRect(element) {
            var rect = {}

            // IE10 10 FIX: Please, don't ask, the element isn't
            // considered in DOM in some circumstances...
            // This isn't reproducible in IE10 compatibility mode of IE11
            try {
              if (isIE(10)) {
                rect = element.getBoundingClientRect()
                var scrollTop = getScroll(element, 'top')
                var scrollLeft = getScroll(element, 'left')
                rect.top += scrollTop
                rect.left += scrollLeft
                rect.bottom += scrollTop
                rect.right += scrollLeft
              } else {
                rect = element.getBoundingClientRect()
              }
            } catch (e) {}

            var result = {
              left: rect.left,
              top: rect.top,
              width: rect.right - rect.left,
              height: rect.bottom - rect.top,
            }

            // subtract scrollbar size from sizes
            var sizes =
              element.nodeName === 'HTML'
                ? getWindowSizes(element.ownerDocument)
                : {}
            var width =
              sizes.width || element.clientWidth || result.right - result.left
            var height =
              sizes.height || element.clientHeight || result.bottom - result.top

            var horizScrollbar = element.offsetWidth - width
            var vertScrollbar = element.offsetHeight - height

            // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
            // we make this check conditional for performance reasons
            if (horizScrollbar || vertScrollbar) {
              var styles = getStyleComputedProperty(element)
              horizScrollbar -= getBordersSize(styles, 'x')
              vertScrollbar -= getBordersSize(styles, 'y')

              result.width -= horizScrollbar
              result.height -= vertScrollbar
            }

            return getClientRect(result)
          }

          function getOffsetRectRelativeToArbitraryNode(children, parent) {
            var fixedPosition =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : false

            var isIE10 = isIE(10)
            var isHTML = parent.nodeName === 'HTML'
            var childrenRect = getBoundingClientRect(children)
            var parentRect = getBoundingClientRect(parent)
            var scrollParent = getScrollParent(children)

            var styles = getStyleComputedProperty(parent)
            var borderTopWidth = parseFloat(styles.borderTopWidth, 10)
            var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10)

            // In cases where the parent is fixed, we must ignore negative scroll in offset calc
            if (fixedPosition && isHTML) {
              parentRect.top = Math.max(parentRect.top, 0)
              parentRect.left = Math.max(parentRect.left, 0)
            }
            var offsets = getClientRect({
              top: childrenRect.top - parentRect.top - borderTopWidth,
              left: childrenRect.left - parentRect.left - borderLeftWidth,
              width: childrenRect.width,
              height: childrenRect.height,
            })
            offsets.marginTop = 0
            offsets.marginLeft = 0

            // Subtract margins of documentElement in case it's being used as parent
            // we do this only on HTML because it's the only element that behaves
            // differently when margins are applied to it. The margins are included in
            // the box of the documentElement, in the other cases not.
            if (!isIE10 && isHTML) {
              var marginTop = parseFloat(styles.marginTop, 10)
              var marginLeft = parseFloat(styles.marginLeft, 10)

              offsets.top -= borderTopWidth - marginTop
              offsets.bottom -= borderTopWidth - marginTop
              offsets.left -= borderLeftWidth - marginLeft
              offsets.right -= borderLeftWidth - marginLeft

              // Attach marginTop and marginLeft because in some circumstances we may need them
              offsets.marginTop = marginTop
              offsets.marginLeft = marginLeft
            }

            if (
              isIE10 && !fixedPosition
                ? parent.contains(scrollParent)
                : parent === scrollParent && scrollParent.nodeName !== 'BODY'
            ) {
              offsets = includeScroll(offsets, parent)
            }

            return offsets
          }

          function getViewportOffsetRectRelativeToArtbitraryNode(element) {
            var excludeScroll =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : false

            var html = element.ownerDocument.documentElement
            var relativeOffset = getOffsetRectRelativeToArbitraryNode(
              element,
              html
            )
            var width = Math.max(html.clientWidth, window.innerWidth || 0)
            var height = Math.max(html.clientHeight, window.innerHeight || 0)

            var scrollTop = !excludeScroll ? getScroll(html) : 0
            var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0

            var offset = {
              top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
              left:
                scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
              width: width,
              height: height,
            }

            return getClientRect(offset)
          }

          /**
           * Check if the given element is fixed or is inside a fixed parent
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @argument {Element} customContainer
           * @returns {Boolean} answer to "isFixed?"
           */
          function isFixed(element) {
            var nodeName = element.nodeName
            if (nodeName === 'BODY' || nodeName === 'HTML') {
              return false
            }
            if (getStyleComputedProperty(element, 'position') === 'fixed') {
              return true
            }
            return isFixed(getParentNode(element))
          }

          /**
           * Finds the first parent of an element that has a transformed property defined
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} first transformed parent or documentElement
           */

          function getFixedPositionOffsetParent(element) {
            // This check is needed to avoid errors in case one of the elements isn't defined for any reason
            if (!element || !element.parentElement || isIE()) {
              return document.documentElement
            }
            var el = element.parentElement
            while (el && getStyleComputedProperty(el, 'transform') === 'none') {
              el = el.parentElement
            }
            return el || document.documentElement
          }

          /**
           * Computed the boundaries limits and return them
           * @method
           * @memberof Popper.Utils
           * @param {HTMLElement} popper
           * @param {HTMLElement} reference
           * @param {number} padding
           * @param {HTMLElement} boundariesElement - Element used to define the boundaries
           * @param {Boolean} fixedPosition - Is in fixed position mode
           * @returns {Object} Coordinates of the boundaries
           */
          function getBoundaries(
            popper,
            reference,
            padding,
            boundariesElement
          ) {
            var fixedPosition =
              arguments.length > 4 && arguments[4] !== undefined
                ? arguments[4]
                : false

            // NOTE: 1 DOM access here

            var boundaries = { top: 0, left: 0 }
            var offsetParent = fixedPosition
              ? getFixedPositionOffsetParent(popper)
              : findCommonOffsetParent(popper, reference)

            // Handle viewport case
            if (boundariesElement === 'viewport') {
              boundaries = getViewportOffsetRectRelativeToArtbitraryNode(
                offsetParent,
                fixedPosition
              )
            } else {
              // Handle other cases based on DOM element used as boundaries
              var boundariesNode = void 0
              if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(reference))
                if (boundariesNode.nodeName === 'BODY') {
                  boundariesNode = popper.ownerDocument.documentElement
                }
              } else if (boundariesElement === 'window') {
                boundariesNode = popper.ownerDocument.documentElement
              } else {
                boundariesNode = boundariesElement
              }

              var offsets = getOffsetRectRelativeToArbitraryNode(
                boundariesNode,
                offsetParent,
                fixedPosition
              )

              // In case of HTML, we need a different computation
              if (
                boundariesNode.nodeName === 'HTML' &&
                !isFixed(offsetParent)
              ) {
                var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                  height = _getWindowSizes.height,
                  width = _getWindowSizes.width

                boundaries.top += offsets.top - offsets.marginTop
                boundaries.bottom = height + offsets.top
                boundaries.left += offsets.left - offsets.marginLeft
                boundaries.right = width + offsets.left
              } else {
                // for all the other DOM elements, this one is good
                boundaries = offsets
              }
            }

            // Add paddings
            padding = padding || 0
            var isPaddingNumber = typeof padding === 'number'
            boundaries.left += isPaddingNumber ? padding : padding.left || 0
            boundaries.top += isPaddingNumber ? padding : padding.top || 0
            boundaries.right -= isPaddingNumber ? padding : padding.right || 0
            boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0

            return boundaries
          }

          function getArea(_ref) {
            var width = _ref.width,
              height = _ref.height

            return width * height
          }

          /**
           * Utility used to transform the `auto` placement to the placement with more
           * available space.
           * @method
           * @memberof Popper.Utils
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function computeAutoPlacement(
            placement,
            refRect,
            popper,
            reference,
            boundariesElement
          ) {
            var padding =
              arguments.length > 5 && arguments[5] !== undefined
                ? arguments[5]
                : 0

            if (placement.indexOf('auto') === -1) {
              return placement
            }

            var boundaries = getBoundaries(
              popper,
              reference,
              padding,
              boundariesElement
            )

            var rects = {
              top: {
                width: boundaries.width,
                height: refRect.top - boundaries.top,
              },
              right: {
                width: boundaries.right - refRect.right,
                height: boundaries.height,
              },
              bottom: {
                width: boundaries.width,
                height: boundaries.bottom - refRect.bottom,
              },
              left: {
                width: refRect.left - boundaries.left,
                height: boundaries.height,
              },
            }

            var sortedAreas = Object.keys(rects)
              .map(function(key) {
                return _extends(
                  {
                    key: key,
                  },
                  rects[key],
                  {
                    area: getArea(rects[key]),
                  }
                )
              })
              .sort(function(a, b) {
                return b.area - a.area
              })

            var filteredAreas = sortedAreas.filter(function(_ref2) {
              var width = _ref2.width,
                height = _ref2.height
              return (
                width >= popper.clientWidth && height >= popper.clientHeight
              )
            })

            var computedPlacement =
              filteredAreas.length > 0
                ? filteredAreas[0].key
                : sortedAreas[0].key

            var variation = placement.split('-')[1]

            return computedPlacement + (variation ? '-' + variation : '')
          }

          /**
           * Get offsets to the reference element
           * @method
           * @memberof Popper.Utils
           * @param {Object} state
           * @param {Element} popper - the popper element
           * @param {Element} reference - the reference element (the popper will be relative to this)
           * @param {Element} fixedPosition - is in fixed position mode
           * @returns {Object} An object containing the offsets which will be applied to the popper
           */
          function getReferenceOffsets(state, popper, reference) {
            var fixedPosition =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : null

            var commonOffsetParent = fixedPosition
              ? getFixedPositionOffsetParent(popper)
              : findCommonOffsetParent(popper, reference)
            return getOffsetRectRelativeToArbitraryNode(
              reference,
              commonOffsetParent,
              fixedPosition
            )
          }

          /**
           * Get the outer sizes of the given element (offset size + margins)
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Object} object containing width and height properties
           */
          function getOuterSizes(element) {
            var window = element.ownerDocument.defaultView
            var styles = window.getComputedStyle(element)
            var x =
              parseFloat(styles.marginTop || 0) +
              parseFloat(styles.marginBottom || 0)
            var y =
              parseFloat(styles.marginLeft || 0) +
              parseFloat(styles.marginRight || 0)
            var result = {
              width: element.offsetWidth + y,
              height: element.offsetHeight + x,
            }
            return result
          }

          /**
           * Get the opposite placement of the given one
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement
           * @returns {String} flipped placement
           */
          function getOppositePlacement(placement) {
            var hash = {
              left: 'right',
              right: 'left',
              bottom: 'top',
              top: 'bottom',
            }
            return placement.replace(/left|right|bottom|top/g, function(
              matched
            ) {
              return hash[matched]
            })
          }

          /**
           * Get offsets to the popper
           * @method
           * @memberof Popper.Utils
           * @param {Object} position - CSS position the Popper will get applied
           * @param {HTMLElement} popper - the popper element
           * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
           * @param {String} placement - one of the valid placement options
           * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
           */
          function getPopperOffsets(popper, referenceOffsets, placement) {
            placement = placement.split('-')[0]

            // Get popper node sizes
            var popperRect = getOuterSizes(popper)

            // Add position, width and height to our offsets object
            var popperOffsets = {
              width: popperRect.width,
              height: popperRect.height,
            }

            // depending by the popper placement we have to compute its offsets slightly differently
            var isHoriz = ['right', 'left'].indexOf(placement) !== -1
            var mainSide = isHoriz ? 'top' : 'left'
            var secondarySide = isHoriz ? 'left' : 'top'
            var measurement = isHoriz ? 'height' : 'width'
            var secondaryMeasurement = !isHoriz ? 'height' : 'width'

            popperOffsets[mainSide] =
              referenceOffsets[mainSide] +
              referenceOffsets[measurement] / 2 -
              popperRect[measurement] / 2
            if (placement === secondarySide) {
              popperOffsets[secondarySide] =
                referenceOffsets[secondarySide] -
                popperRect[secondaryMeasurement]
            } else {
              popperOffsets[secondarySide] =
                referenceOffsets[getOppositePlacement(secondarySide)]
            }

            return popperOffsets
          }

          /**
           * Mimics the `find` method of Array
           * @method
           * @memberof Popper.Utils
           * @argument {Array} arr
           * @argument prop
           * @argument value
           * @returns index or -1
           */
          function find(arr, check) {
            // use native find if supported
            if (Array.prototype.find) {
              return arr.find(check)
            }

            // use `filter` to obtain the same behavior of `find`
            return arr.filter(check)[0]
          }

          /**
           * Return the index of the matching object
           * @method
           * @memberof Popper.Utils
           * @argument {Array} arr
           * @argument prop
           * @argument value
           * @returns index or -1
           */
          function findIndex(arr, prop, value) {
            // use native findIndex if supported
            if (Array.prototype.findIndex) {
              return arr.findIndex(function(cur) {
                return cur[prop] === value
              })
            }

            // use `find` + `indexOf` if `findIndex` isn't supported
            var match = find(arr, function(obj) {
              return obj[prop] === value
            })
            return arr.indexOf(match)
          }

          /**
           * Loop trough the list of modifiers and run them in order,
           * each of them will then edit the data object.
           * @method
           * @memberof Popper.Utils
           * @param {dataObject} data
           * @param {Array} modifiers
           * @param {String} ends - Optional modifier name used as stopper
           * @returns {dataObject}
           */
          function runModifiers(modifiers, data, ends) {
            var modifiersToRun =
              ends === undefined
                ? modifiers
                : modifiers.slice(0, findIndex(modifiers, 'name', ends))

            modifiersToRun.forEach(function(modifier) {
              if (modifier['function']) {
                // eslint-disable-line dot-notation
                console.warn(
                  '`modifier.function` is deprecated, use `modifier.fn`!'
                )
              }
              var fn = modifier['function'] || modifier.fn // eslint-disable-line dot-notation
              if (modifier.enabled && isFunction(fn)) {
                // Add properties to offsets to make them a complete clientRect object
                // we do this before each modifier to make sure the previous one doesn't
                // mess with these values
                data.offsets.popper = getClientRect(data.offsets.popper)
                data.offsets.reference = getClientRect(data.offsets.reference)

                data = fn(data, modifier)
              }
            })

            return data
          }

          /**
           * Updates the position of the popper, computing the new offsets and applying
           * the new style.<br />
           * Prefer `scheduleUpdate` over `update` because of performance reasons.
           * @method
           * @memberof Popper
           */
          function update() {
            // if popper is destroyed, don't perform any further update
            if (this.state.isDestroyed) {
              return
            }

            var data = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: false,
              offsets: {},
            }

            // compute reference element offsets
            data.offsets.reference = getReferenceOffsets(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )

            // compute auto placement, store placement inside the data object,
            // modifiers will be able to edit `placement` if needed
            // and refer to originalPlacement to know the original value
            data.placement = computeAutoPlacement(
              this.options.placement,
              data.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )

            // store the computed placement inside `originalPlacement`
            data.originalPlacement = data.placement

            data.positionFixed = this.options.positionFixed

            // compute the popper offsets
            data.offsets.popper = getPopperOffsets(
              this.popper,
              data.offsets.reference,
              data.placement
            )

            data.offsets.popper.position = this.options.positionFixed
              ? 'fixed'
              : 'absolute'

            // run the modifiers
            data = runModifiers(this.modifiers, data)

            // the first `update` will call `onCreate` callback
            // the other ones will call `onUpdate` callback
            if (!this.state.isCreated) {
              this.state.isCreated = true
              this.options.onCreate(data)
            } else {
              this.options.onUpdate(data)
            }
          }

          /**
           * Helper used to know if the given modifier is enabled.
           * @method
           * @memberof Popper.Utils
           * @returns {Boolean}
           */
          function isModifierEnabled(modifiers, modifierName) {
            return modifiers.some(function(_ref) {
              var name = _ref.name,
                enabled = _ref.enabled
              return enabled && name === modifierName
            })
          }

          /**
           * Get the prefixed supported property name
           * @method
           * @memberof Popper.Utils
           * @argument {String} property (camelCase)
           * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
           */
          function getSupportedPropertyName(property) {
            var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O']
            var upperProp = property.charAt(0).toUpperCase() + property.slice(1)

            for (var i = 0; i < prefixes.length; i++) {
              var prefix = prefixes[i]
              var toCheck = prefix ? '' + prefix + upperProp : property
              if (typeof document.body.style[toCheck] !== 'undefined') {
                return toCheck
              }
            }
            return null
          }

          /**
           * Destroys the popper.
           * @method
           * @memberof Popper
           */
          function destroy() {
            this.state.isDestroyed = true

            // touch DOM only if `applyStyle` modifier is enabled
            if (isModifierEnabled(this.modifiers, 'applyStyle')) {
              this.popper.removeAttribute('x-placement')
              this.popper.style.position = ''
              this.popper.style.top = ''
              this.popper.style.left = ''
              this.popper.style.right = ''
              this.popper.style.bottom = ''
              this.popper.style.willChange = ''
              this.popper.style[getSupportedPropertyName('transform')] = ''
            }

            this.disableEventListeners()

            // remove the popper if user explicity asked for the deletion on destroy
            // do not use `remove` because IE11 doesn't support it
            if (this.options.removeOnDestroy) {
              this.popper.parentNode.removeChild(this.popper)
            }
            return this
          }

          /**
           * Get the window associated with the element
           * @argument {Element} element
           * @returns {Window}
           */
          function getWindow(element) {
            var ownerDocument = element.ownerDocument
            return ownerDocument ? ownerDocument.defaultView : window
          }

          function attachToScrollParents(
            scrollParent,
            event,
            callback,
            scrollParents
          ) {
            var isBody = scrollParent.nodeName === 'BODY'
            var target = isBody
              ? scrollParent.ownerDocument.defaultView
              : scrollParent
            target.addEventListener(event, callback, { passive: true })

            if (!isBody) {
              attachToScrollParents(
                getScrollParent(target.parentNode),
                event,
                callback,
                scrollParents
              )
            }
            scrollParents.push(target)
          }

          /**
           * Setup needed event listeners used to update the popper position
           * @method
           * @memberof Popper.Utils
           * @private
           */
          function setupEventListeners(reference, options, state, updateBound) {
            // Resize event listener on window
            state.updateBound = updateBound
            getWindow(reference).addEventListener('resize', state.updateBound, {
              passive: true,
            })

            // Scroll event listener on scroll parents
            var scrollElement = getScrollParent(reference)
            attachToScrollParents(
              scrollElement,
              'scroll',
              state.updateBound,
              state.scrollParents
            )
            state.scrollElement = scrollElement
            state.eventsEnabled = true

            return state
          }

          /**
           * It will add resize/scroll events and start recalculating
           * position of the popper element when they are triggered.
           * @method
           * @memberof Popper
           */
          function enableEventListeners() {
            if (!this.state.eventsEnabled) {
              this.state = setupEventListeners(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
              )
            }
          }

          /**
           * Remove event listeners used to update the popper position
           * @method
           * @memberof Popper.Utils
           * @private
           */
          function removeEventListeners(reference, state) {
            // Remove resize event listener on window
            getWindow(reference).removeEventListener(
              'resize',
              state.updateBound
            )

            // Remove scroll event listener on scroll parents
            state.scrollParents.forEach(function(target) {
              target.removeEventListener('scroll', state.updateBound)
            })

            // Reset state
            state.updateBound = null
            state.scrollParents = []
            state.scrollElement = null
            state.eventsEnabled = false
            return state
          }

          /**
           * It will remove resize/scroll events and won't recalculate popper position
           * when they are triggered. It also won't trigger `onUpdate` callback anymore,
           * unless you call `update` method manually.
           * @method
           * @memberof Popper
           */
          function disableEventListeners() {
            if (this.state.eventsEnabled) {
              cancelAnimationFrame(this.scheduleUpdate)
              this.state = removeEventListeners(this.reference, this.state)
            }
          }

          /**
           * Tells if a given input is a number
           * @method
           * @memberof Popper.Utils
           * @param {*} input to check
           * @return {Boolean}
           */
          function isNumeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n)
          }

          /**
           * Set the style to the given popper
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element - Element to apply the style to
           * @argument {Object} styles
           * Object with a list of properties and values which will be applied to the element
           */
          function setStyles(element, styles) {
            Object.keys(styles).forEach(function(prop) {
              var unit = ''
              // add unit if the value is numeric and is one of the following
              if (
                ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                  prop
                ) !== -1 &&
                isNumeric(styles[prop])
              ) {
                unit = 'px'
              }
              element.style[prop] = styles[prop] + unit
            })
          }

          /**
           * Set the attributes to the given popper
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element - Element to apply the attributes to
           * @argument {Object} styles
           * Object with a list of properties and values which will be applied to the element
           */
          function setAttributes(element, attributes) {
            Object.keys(attributes).forEach(function(prop) {
              var value = attributes[prop]
              if (value !== false) {
                element.setAttribute(prop, attributes[prop])
              } else {
                element.removeAttribute(prop)
              }
            })
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} data.styles - List of style properties - values to apply to popper element
           * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The same data object
           */
          function applyStyle(data) {
            // any property present in `data.styles` will be applied to the popper,
            // in this way we can make the 3rd party modifiers add custom styles to it
            // Be aware, modifiers could override the properties defined in the previous
            // lines of this modifier!
            setStyles(data.instance.popper, data.styles)

            // any property present in `data.attributes` will be applied to the popper,
            // they will be set as HTML attributes of the element
            setAttributes(data.instance.popper, data.attributes)

            // if arrowElement is defined and arrowStyles has some properties
            if (data.arrowElement && Object.keys(data.arrowStyles).length) {
              setStyles(data.arrowElement, data.arrowStyles)
            }

            return data
          }

          /**
           * Set the x-placement attribute before everything else because it could be used
           * to add margins to the popper margins needs to be calculated to get the
           * correct popper offsets.
           * @method
           * @memberof Popper.modifiers
           * @param {HTMLElement} reference - The reference element used to position the popper
           * @param {HTMLElement} popper - The HTML element used as popper
           * @param {Object} options - Popper.js options
           */
          function applyStyleOnLoad(
            reference,
            popper,
            options,
            modifierOptions,
            state
          ) {
            // compute reference element offsets
            var referenceOffsets = getReferenceOffsets(
              state,
              popper,
              reference,
              options.positionFixed
            )

            // compute auto placement, store placement inside the data object,
            // modifiers will be able to edit `placement` if needed
            // and refer to originalPlacement to know the original value
            var placement = computeAutoPlacement(
              options.placement,
              referenceOffsets,
              popper,
              reference,
              options.modifiers.flip.boundariesElement,
              options.modifiers.flip.padding
            )

            popper.setAttribute('x-placement', placement)

            // Apply `position` to popper before anything else because
            // without the position applied we can't guarantee correct computations
            setStyles(popper, {
              position: options.positionFixed ? 'fixed' : 'absolute',
            })

            return options
          }

          /**
           * @function
           * @memberof Popper.Utils
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Boolean} shouldRound - If the offsets should be rounded at all
           * @returns {Object} The popper's position offsets rounded
           *
           * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
           * good as it can be within reason.
           * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
           *
           * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
           * as well on High DPI screens).
           *
           * Firefox prefers no rounding for positioning and does not have blurriness on
           * high DPI screens.
           *
           * Only horizontal placement and left/right values need to be considered.
           */
          function getRoundedOffsets(data, shouldRound) {
            var _data$offsets = data.offsets,
              popper = _data$offsets.popper,
              reference = _data$offsets.reference

            var isVertical = ['left', 'right'].indexOf(data.placement) !== -1
            var isVariation = data.placement.indexOf('-') !== -1
            var sameWidthOddness = reference.width % 2 === popper.width % 2
            var bothOddWidth =
              reference.width % 2 === 1 && popper.width % 2 === 1
            var noRound = function noRound(v) {
              return v
            }

            var horizontalToInteger = !shouldRound
              ? noRound
              : isVertical || isVariation || sameWidthOddness
              ? Math.round
              : Math.floor
            var verticalToInteger = !shouldRound ? noRound : Math.round

            return {
              left: horizontalToInteger(
                bothOddWidth && !isVariation && shouldRound
                  ? popper.left - 1
                  : popper.left
              ),
              top: verticalToInteger(popper.top),
              bottom: verticalToInteger(popper.bottom),
              right: horizontalToInteger(popper.right),
            }
          }

          var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent)

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function computeStyle(data, options) {
            var x = options.x,
              y = options.y
            var popper = data.offsets.popper

            // Remove this legacy support in Popper.js v2

            var legacyGpuAccelerationOption = find(
              data.instance.modifiers,
              function(modifier) {
                return modifier.name === 'applyStyle'
              }
            ).gpuAcceleration
            if (legacyGpuAccelerationOption !== undefined) {
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              )
            }
            var gpuAcceleration =
              legacyGpuAccelerationOption !== undefined
                ? legacyGpuAccelerationOption
                : options.gpuAcceleration

            var offsetParent = getOffsetParent(data.instance.popper)
            var offsetParentRect = getBoundingClientRect(offsetParent)

            // Styles
            var styles = {
              position: popper.position,
            }

            var offsets = getRoundedOffsets(
              data,
              window.devicePixelRatio < 2 || !isFirefox
            )

            var sideA = x === 'bottom' ? 'top' : 'bottom'
            var sideB = y === 'right' ? 'left' : 'right'

            // if gpuAcceleration is set to `true` and transform is supported,
            //  we use `translate3d` to apply the position to the popper we
            // automatically use the supported prefixed version if needed
            var prefixedProperty = getSupportedPropertyName('transform')

            // now, let's make a step back and look at this code closely (wtf?)
            // If the content of the popper grows once it's been positioned, it
            // may happen that the popper gets misplaced because of the new content
            // overflowing its reference element
            // To avoid this problem, we provide two options (x and y), which allow
            // the consumer to define the offset origin.
            // If we position a popper on top of a reference element, we can set
            // `x` to `top` to make the popper grow towards its top instead of
            // its bottom.
            var left = void 0,
              top = void 0
            if (sideA === 'bottom') {
              // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
              // and not the bottom of the html element
              if (offsetParent.nodeName === 'HTML') {
                top = -offsetParent.clientHeight + offsets.bottom
              } else {
                top = -offsetParentRect.height + offsets.bottom
              }
            } else {
              top = offsets.top
            }
            if (sideB === 'right') {
              if (offsetParent.nodeName === 'HTML') {
                left = -offsetParent.clientWidth + offsets.right
              } else {
                left = -offsetParentRect.width + offsets.right
              }
            } else {
              left = offsets.left
            }
            if (gpuAcceleration && prefixedProperty) {
              styles[prefixedProperty] =
                'translate3d(' + left + 'px, ' + top + 'px, 0)'
              styles[sideA] = 0
              styles[sideB] = 0
              styles.willChange = 'transform'
            } else {
              // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
              var invertTop = sideA === 'bottom' ? -1 : 1
              var invertLeft = sideB === 'right' ? -1 : 1
              styles[sideA] = top * invertTop
              styles[sideB] = left * invertLeft
              styles.willChange = sideA + ', ' + sideB
            }

            // Attributes
            var attributes = {
              'x-placement': data.placement,
            }

            // Update `data` attributes, styles and arrowStyles
            data.attributes = _extends({}, attributes, data.attributes)
            data.styles = _extends({}, styles, data.styles)
            data.arrowStyles = _extends(
              {},
              data.offsets.arrow,
              data.arrowStyles
            )

            return data
          }

          /**
           * Helper used to know if the given modifier depends from another one.<br />
           * It checks if the needed modifier is listed and enabled.
           * @method
           * @memberof Popper.Utils
           * @param {Array} modifiers - list of modifiers
           * @param {String} requestingName - name of requesting modifier
           * @param {String} requestedName - name of requested modifier
           * @returns {Boolean}
           */
          function isModifierRequired(
            modifiers,
            requestingName,
            requestedName
          ) {
            var requesting = find(modifiers, function(_ref) {
              var name = _ref.name
              return name === requestingName
            })

            var isRequired =
              !!requesting &&
              modifiers.some(function(modifier) {
                return (
                  modifier.name === requestedName &&
                  modifier.enabled &&
                  modifier.order < requesting.order
                )
              })

            if (!isRequired) {
              var _requesting = '`' + requestingName + '`'
              var requested = '`' + requestedName + '`'
              console.warn(
                requested +
                  ' modifier is required by ' +
                  _requesting +
                  ' modifier in order to work, be sure to include it before ' +
                  _requesting +
                  '!'
              )
            }
            return isRequired
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function arrow(data, options) {
            var _data$offsets$arrow

            // arrow depends on keepTogether in order to work
            if (
              !isModifierRequired(
                data.instance.modifiers,
                'arrow',
                'keepTogether'
              )
            ) {
              return data
            }

            var arrowElement = options.element

            // if arrowElement is a string, suppose it's a CSS selector
            if (typeof arrowElement === 'string') {
              arrowElement = data.instance.popper.querySelector(arrowElement)

              // if arrowElement is not found, don't run the modifier
              if (!arrowElement) {
                return data
              }
            } else {
              // if the arrowElement isn't a query selector we must check that the
              // provided DOM node is child of its popper node
              if (!data.instance.popper.contains(arrowElement)) {
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                )
                return data
              }
            }

            var placement = data.placement.split('-')[0]
            var _data$offsets = data.offsets,
              popper = _data$offsets.popper,
              reference = _data$offsets.reference

            var isVertical = ['left', 'right'].indexOf(placement) !== -1

            var len = isVertical ? 'height' : 'width'
            var sideCapitalized = isVertical ? 'Top' : 'Left'
            var side = sideCapitalized.toLowerCase()
            var altSide = isVertical ? 'left' : 'top'
            var opSide = isVertical ? 'bottom' : 'right'
            var arrowElementSize = getOuterSizes(arrowElement)[len]

            //
            // extends keepTogether behavior making sure the popper and its
            // reference have enough pixels in conjunction
            //

            // top/left side
            if (reference[opSide] - arrowElementSize < popper[side]) {
              data.offsets.popper[side] -=
                popper[side] - (reference[opSide] - arrowElementSize)
            }
            // bottom/right side
            if (reference[side] + arrowElementSize > popper[opSide]) {
              data.offsets.popper[side] +=
                reference[side] + arrowElementSize - popper[opSide]
            }
            data.offsets.popper = getClientRect(data.offsets.popper)

            // compute center of the popper
            var center =
              reference[side] + reference[len] / 2 - arrowElementSize / 2

            // Compute the sideValue using the updated popper offsets
            // take popper margin in account because we don't have this info available
            var css = getStyleComputedProperty(data.instance.popper)
            var popperMarginSide = parseFloat(
              css['margin' + sideCapitalized],
              10
            )
            var popperBorderSide = parseFloat(
              css['border' + sideCapitalized + 'Width'],
              10
            )
            var sideValue =
              center -
              data.offsets.popper[side] -
              popperMarginSide -
              popperBorderSide

            // prevent arrowElement from being placed not contiguously to its popper
            sideValue = Math.max(
              Math.min(popper[len] - arrowElementSize, sideValue),
              0
            )

            data.arrowElement = arrowElement
            data.offsets.arrow = ((_data$offsets$arrow = {}),
            defineProperty(_data$offsets$arrow, side, Math.round(sideValue)),
            defineProperty(_data$offsets$arrow, altSide, ''),
            _data$offsets$arrow)

            return data
          }

          /**
           * Get the opposite placement variation of the given one
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement variation
           * @returns {String} flipped placement variation
           */
          function getOppositeVariation(variation) {
            if (variation === 'end') {
              return 'start'
            } else if (variation === 'start') {
              return 'end'
            }
            return variation
          }

          /**
           * List of accepted placements to use as values of the `placement` option.<br />
           * Valid placements are:
           * - `auto`
           * - `top`
           * - `right`
           * - `bottom`
           * - `left`
           *
           * Each placement can have a variation from this list:
           * - `-start`
           * - `-end`
           *
           * Variations are interpreted easily if you think of them as the left to right
           * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
           * is right.<br />
           * Vertically (`left` and `right`), `start` is top and `end` is bottom.
           *
           * Some valid examples are:
           * - `top-end` (on top of reference, right aligned)
           * - `right-start` (on right of reference, top aligned)
           * - `bottom` (on bottom, centered)
           * - `auto-end` (on the side with more space available, alignment depends by placement)
           *
           * @static
           * @type {Array}
           * @enum {String}
           * @readonly
           * @method placements
           * @memberof Popper
           */
          var placements = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
          ]

          // Get rid of `auto` `auto-start` and `auto-end`
          var validPlacements = placements.slice(3)

          /**
           * Given an initial placement, returns all the subsequent placements
           * clockwise (or counter-clockwise).
           *
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement - A valid placement (it accepts variations)
           * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
           * @returns {Array} placements including their variations
           */
          function clockwise(placement) {
            var counter =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : false

            var index = validPlacements.indexOf(placement)
            var arr = validPlacements
              .slice(index + 1)
              .concat(validPlacements.slice(0, index))
            return counter ? arr.reverse() : arr
          }

          var BEHAVIORS = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise',
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function flip(data, options) {
            // if `inner` modifier is enabled, we can't use the `flip` modifier
            if (isModifierEnabled(data.instance.modifiers, 'inner')) {
              return data
            }

            if (data.flipped && data.placement === data.originalPlacement) {
              // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
              return data
            }

            var boundaries = getBoundaries(
              data.instance.popper,
              data.instance.reference,
              options.padding,
              options.boundariesElement,
              data.positionFixed
            )

            var placement = data.placement.split('-')[0]
            var placementOpposite = getOppositePlacement(placement)
            var variation = data.placement.split('-')[1] || ''

            var flipOrder = []

            switch (options.behavior) {
              case BEHAVIORS.FLIP:
                flipOrder = [placement, placementOpposite]
                break
              case BEHAVIORS.CLOCKWISE:
                flipOrder = clockwise(placement)
                break
              case BEHAVIORS.COUNTERCLOCKWISE:
                flipOrder = clockwise(placement, true)
                break
              default:
                flipOrder = options.behavior
            }

            flipOrder.forEach(function(step, index) {
              if (placement !== step || flipOrder.length === index + 1) {
                return data
              }

              placement = data.placement.split('-')[0]
              placementOpposite = getOppositePlacement(placement)

              var popperOffsets = data.offsets.popper
              var refOffsets = data.offsets.reference

              // using floor because the reference offsets may contain decimals we are not going to consider here
              var floor = Math.floor
              var overlapsRef =
                (placement === 'left' &&
                  floor(popperOffsets.right) > floor(refOffsets.left)) ||
                (placement === 'right' &&
                  floor(popperOffsets.left) < floor(refOffsets.right)) ||
                (placement === 'top' &&
                  floor(popperOffsets.bottom) > floor(refOffsets.top)) ||
                (placement === 'bottom' &&
                  floor(popperOffsets.top) < floor(refOffsets.bottom))

              var overflowsLeft =
                floor(popperOffsets.left) < floor(boundaries.left)
              var overflowsRight =
                floor(popperOffsets.right) > floor(boundaries.right)
              var overflowsTop =
                floor(popperOffsets.top) < floor(boundaries.top)
              var overflowsBottom =
                floor(popperOffsets.bottom) > floor(boundaries.bottom)

              var overflowsBoundaries =
                (placement === 'left' && overflowsLeft) ||
                (placement === 'right' && overflowsRight) ||
                (placement === 'top' && overflowsTop) ||
                (placement === 'bottom' && overflowsBottom)

              // flip the variation if required
              var isVertical = ['top', 'bottom'].indexOf(placement) !== -1
              var flippedVariation =
                !!options.flipVariations &&
                ((isVertical && variation === 'start' && overflowsLeft) ||
                  (isVertical && variation === 'end' && overflowsRight) ||
                  (!isVertical && variation === 'start' && overflowsTop) ||
                  (!isVertical && variation === 'end' && overflowsBottom))

              if (overlapsRef || overflowsBoundaries || flippedVariation) {
                // this boolean to detect any flip loop
                data.flipped = true

                if (overlapsRef || overflowsBoundaries) {
                  placement = flipOrder[index + 1]
                }

                if (flippedVariation) {
                  variation = getOppositeVariation(variation)
                }

                data.placement = placement + (variation ? '-' + variation : '')

                // this object contains `position`, we want to preserve it along with
                // any additional property we may add in the future
                data.offsets.popper = _extends(
                  {},
                  data.offsets.popper,
                  getPopperOffsets(
                    data.instance.popper,
                    data.offsets.reference,
                    data.placement
                  )
                )

                data = runModifiers(data.instance.modifiers, data, 'flip')
              }
            })
            return data
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function keepTogether(data) {
            var _data$offsets = data.offsets,
              popper = _data$offsets.popper,
              reference = _data$offsets.reference

            var placement = data.placement.split('-')[0]
            var floor = Math.floor
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1
            var side = isVertical ? 'right' : 'bottom'
            var opSide = isVertical ? 'left' : 'top'
            var measurement = isVertical ? 'width' : 'height'

            if (popper[side] < floor(reference[opSide])) {
              data.offsets.popper[opSide] =
                floor(reference[opSide]) - popper[measurement]
            }
            if (popper[opSide] > floor(reference[side])) {
              data.offsets.popper[opSide] = floor(reference[side])
            }

            return data
          }

          /**
           * Converts a string containing value + unit into a px value number
           * @function
           * @memberof {modifiers~offset}
           * @private
           * @argument {String} str - Value + unit string
           * @argument {String} measurement - `height` or `width`
           * @argument {Object} popperOffsets
           * @argument {Object} referenceOffsets
           * @returns {Number|String}
           * Value in pixels, or original string if no values were extracted
           */
          function toValue(str, measurement, popperOffsets, referenceOffsets) {
            // separate value from unit
            var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
            var value = +split[1]
            var unit = split[2]

            // If it's not a number it's an operator, I guess
            if (!value) {
              return str
            }

            if (unit.indexOf('%') === 0) {
              var element = void 0
              switch (unit) {
                case '%p':
                  element = popperOffsets
                  break
                case '%':
                case '%r':
                default:
                  element = referenceOffsets
              }

              var rect = getClientRect(element)
              return (rect[measurement] / 100) * value
            } else if (unit === 'vh' || unit === 'vw') {
              // if is a vh or vw, we calculate the size based on the viewport
              var size = void 0
              if (unit === 'vh') {
                size = Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                )
              } else {
                size = Math.max(
                  document.documentElement.clientWidth,
                  window.innerWidth || 0
                )
              }
              return (size / 100) * value
            } else {
              // if is an explicit pixel unit, we get rid of the unit and keep the value
              // if is an implicit unit, it's px, and we return just the value
              return value
            }
          }

          /**
           * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
           * @function
           * @memberof {modifiers~offset}
           * @private
           * @argument {String} offset
           * @argument {Object} popperOffsets
           * @argument {Object} referenceOffsets
           * @argument {String} basePlacement
           * @returns {Array} a two cells array with x and y offsets in numbers
           */
          function parseOffset(
            offset,
            popperOffsets,
            referenceOffsets,
            basePlacement
          ) {
            var offsets = [0, 0]

            // Use height if placement is left or right and index is 0 otherwise use width
            // in this way the first offset will use an axis and the second one
            // will use the other one
            var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1

            // Split the offset string to obtain a list of values and operands
            // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
            var fragments = offset.split(/(\+|\-)/).map(function(frag) {
              return frag.trim()
            })

            // Detect if the offset string contains a pair of values or a single one
            // they could be separated by comma or space
            var divider = fragments.indexOf(
              find(fragments, function(frag) {
                return frag.search(/,|\s/) !== -1
              })
            )

            if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
              console.warn(
                'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
              )
            }

            // If divider is found, we divide the list of values and operands to divide
            // them by ofset X and Y.
            var splitRegex = /\s*,\s*|\s+/
            var ops =
              divider !== -1
                ? [
                    fragments
                      .slice(0, divider)
                      .concat([fragments[divider].split(splitRegex)[0]]),
                    [fragments[divider].split(splitRegex)[1]].concat(
                      fragments.slice(divider + 1)
                    ),
                  ]
                : [fragments]

            // Convert the values with units to absolute pixels to allow our computations
            ops = ops.map(function(op, index) {
              // Most of the units rely on the orientation of the popper
              var measurement = (index === 1
              ? !useHeight
              : useHeight)
                ? 'height'
                : 'width'
              var mergeWithPrevious = false
              return (
                op
                  // This aggregates any `+` or `-` sign that aren't considered operators
                  // e.g.: 10 + +5 => [10, +, +5]
                  .reduce(function(a, b) {
                    if (
                      a[a.length - 1] === '' &&
                      ['+', '-'].indexOf(b) !== -1
                    ) {
                      a[a.length - 1] = b
                      mergeWithPrevious = true
                      return a
                    } else if (mergeWithPrevious) {
                      a[a.length - 1] += b
                      mergeWithPrevious = false
                      return a
                    } else {
                      return a.concat(b)
                    }
                  }, [])
                  // Here we convert the string values into number values (in px)
                  .map(function(str) {
                    return toValue(
                      str,
                      measurement,
                      popperOffsets,
                      referenceOffsets
                    )
                  })
              )
            })

            // Loop trough the offsets arrays and execute the operations
            ops.forEach(function(op, index) {
              op.forEach(function(frag, index2) {
                if (isNumeric(frag)) {
                  offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1)
                }
              })
            })
            return offsets
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @argument {Number|String} options.offset=0
           * The offset value as described in the modifier description
           * @returns {Object} The data object, properly modified
           */
          function offset(data, _ref) {
            var offset = _ref.offset
            var placement = data.placement,
              _data$offsets = data.offsets,
              popper = _data$offsets.popper,
              reference = _data$offsets.reference

            var basePlacement = placement.split('-')[0]

            var offsets = void 0
            if (isNumeric(+offset)) {
              offsets = [+offset, 0]
            } else {
              offsets = parseOffset(offset, popper, reference, basePlacement)
            }

            if (basePlacement === 'left') {
              popper.top += offsets[0]
              popper.left -= offsets[1]
            } else if (basePlacement === 'right') {
              popper.top += offsets[0]
              popper.left += offsets[1]
            } else if (basePlacement === 'top') {
              popper.left += offsets[0]
              popper.top -= offsets[1]
            } else if (basePlacement === 'bottom') {
              popper.left += offsets[0]
              popper.top += offsets[1]
            }

            data.popper = popper
            return data
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function preventOverflow(data, options) {
            var boundariesElement =
              options.boundariesElement || getOffsetParent(data.instance.popper)

            // If offsetParent is the reference element, we really want to
            // go one step up and use the next offsetParent as reference to
            // avoid to make this modifier completely useless and look like broken
            if (data.instance.reference === boundariesElement) {
              boundariesElement = getOffsetParent(boundariesElement)
            }

            // NOTE: DOM access here
            // resets the popper's position so that the document size can be calculated excluding
            // the size of the popper element itself
            var transformProp = getSupportedPropertyName('transform')
            var popperStyles = data.instance.popper.style // assignment to help minification
            var top = popperStyles.top,
              left = popperStyles.left,
              transform = popperStyles[transformProp]

            popperStyles.top = ''
            popperStyles.left = ''
            popperStyles[transformProp] = ''

            var boundaries = getBoundaries(
              data.instance.popper,
              data.instance.reference,
              options.padding,
              boundariesElement,
              data.positionFixed
            )

            // NOTE: DOM access here
            // restores the original style properties after the offsets have been computed
            popperStyles.top = top
            popperStyles.left = left
            popperStyles[transformProp] = transform

            options.boundaries = boundaries

            var order = options.priority
            var popper = data.offsets.popper

            var check = {
              primary: function primary(placement) {
                var value = popper[placement]
                if (
                  popper[placement] < boundaries[placement] &&
                  !options.escapeWithReference
                ) {
                  value = Math.max(popper[placement], boundaries[placement])
                }
                return defineProperty({}, placement, value)
              },
              secondary: function secondary(placement) {
                var mainSide = placement === 'right' ? 'left' : 'top'
                var value = popper[mainSide]
                if (
                  popper[placement] > boundaries[placement] &&
                  !options.escapeWithReference
                ) {
                  value = Math.min(
                    popper[mainSide],
                    boundaries[placement] -
                      (placement === 'right' ? popper.width : popper.height)
                  )
                }
                return defineProperty({}, mainSide, value)
              },
            }

            order.forEach(function(placement) {
              var side =
                ['left', 'top'].indexOf(placement) !== -1
                  ? 'primary'
                  : 'secondary'
              popper = _extends({}, popper, check[side](placement))
            })

            data.offsets.popper = popper

            return data
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function shift(data) {
            var placement = data.placement
            var basePlacement = placement.split('-')[0]
            var shiftvariation = placement.split('-')[1]

            // if shift shiftvariation is specified, run the modifier
            if (shiftvariation) {
              var _data$offsets = data.offsets,
                reference = _data$offsets.reference,
                popper = _data$offsets.popper

              var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1
              var side = isVertical ? 'left' : 'top'
              var measurement = isVertical ? 'width' : 'height'

              var shiftOffsets = {
                start: defineProperty({}, side, reference[side]),
                end: defineProperty(
                  {},
                  side,
                  reference[side] + reference[measurement] - popper[measurement]
                ),
              }

              data.offsets.popper = _extends(
                {},
                popper,
                shiftOffsets[shiftvariation]
              )
            }

            return data
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function hide(data) {
            if (
              !isModifierRequired(
                data.instance.modifiers,
                'hide',
                'preventOverflow'
              )
            ) {
              return data
            }

            var refRect = data.offsets.reference
            var bound = find(data.instance.modifiers, function(modifier) {
              return modifier.name === 'preventOverflow'
            }).boundaries

            if (
              refRect.bottom < bound.top ||
              refRect.left > bound.right ||
              refRect.top > bound.bottom ||
              refRect.right < bound.left
            ) {
              // Avoid unnecessary DOM access if visibility hasn't changed
              if (data.hide === true) {
                return data
              }

              data.hide = true
              data.attributes['x-out-of-boundaries'] = ''
            } else {
              // Avoid unnecessary DOM access if visibility hasn't changed
              if (data.hide === false) {
                return data
              }

              data.hide = false
              data.attributes['x-out-of-boundaries'] = false
            }

            return data
          }

          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */
          function inner(data) {
            var placement = data.placement
            var basePlacement = placement.split('-')[0]
            var _data$offsets = data.offsets,
              popper = _data$offsets.popper,
              reference = _data$offsets.reference

            var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1

            var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1

            popper[isHoriz ? 'left' : 'top'] =
              reference[basePlacement] -
              (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0)

            data.placement = getOppositePlacement(placement)
            data.offsets.popper = getClientRect(popper)

            return data
          }

          /**
           * Modifier function, each modifier can have a function of this type assigned
           * to its `fn` property.<br />
           * These functions will be called on each update, this means that you must
           * make sure they are performant enough to avoid performance bottlenecks.
           *
           * @function ModifierFn
           * @argument {dataObject} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {dataObject} The data object, properly modified
           */

          /**
           * Modifiers are plugins used to alter the behavior of your poppers.<br />
           * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
           * needed by the library.
           *
           * Usually you don't want to override the `order`, `fn` and `onLoad` props.
           * All the other properties are configurations that could be tweaked.
           * @namespace modifiers
           */
          var modifiers = {
            /**
             * Modifier used to shift the popper on the start or end of its reference
             * element.<br />
             * It will read the variation of the `placement` property.<br />
             * It can be one either `-end` or `-start`.
             * @memberof modifiers
             * @inner
             */
            shift: {
              /** @prop {number} order=100 - Index used to define the order of execution */
              order: 100,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: shift,
            },

            /**
             * The `offset` modifier can shift your popper on both its axis.
             *
             * It accepts the following units:
             * - `px` or unit-less, interpreted as pixels
             * - `%` or `%r`, percentage relative to the length of the reference element
             * - `%p`, percentage relative to the length of the popper element
             * - `vw`, CSS viewport width unit
             * - `vh`, CSS viewport height unit
             *
             * For length is intended the main axis relative to the placement of the popper.<br />
             * This means that if the placement is `top` or `bottom`, the length will be the
             * `width`. In case of `left` or `right`, it will be the `height`.
             *
             * You can provide a single value (as `Number` or `String`), or a pair of values
             * as `String` divided by a comma or one (or more) white spaces.<br />
             * The latter is a deprecated method because it leads to confusion and will be
             * removed in v2.<br />
             * Additionally, it accepts additions and subtractions between different units.
             * Note that multiplications and divisions aren't supported.
             *
             * Valid examples are:
             * ```
             * 10
             * '10%'
             * '10, 10'
             * '10%, 10'
             * '10 + 10%'
             * '10 - 5vh + 3%'
             * '-10px + 5vh, 5px - 6%'
             * ```
             * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
             * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
             * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
             *
             * @memberof modifiers
             * @inner
             */
            offset: {
              /** @prop {number} order=200 - Index used to define the order of execution */
              order: 200,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: offset,
              /** @prop {Number|String} offset=0
               * The offset value as described in the modifier description
               */
              offset: 0,
            },

            /**
             * Modifier used to prevent the popper from being positioned outside the boundary.
             *
             * A scenario exists where the reference itself is not within the boundaries.<br />
             * We can say it has "escaped the boundaries" — or just "escaped".<br />
             * In this case we need to decide whether the popper should either:
             *
             * - detach from the reference and remain "trapped" in the boundaries, or
             * - if it should ignore the boundary and "escape with its reference"
             *
             * When `escapeWithReference` is set to`true` and reference is completely
             * outside its boundaries, the popper will overflow (or completely leave)
             * the boundaries in order to remain attached to the edge of the reference.
             *
             * @memberof modifiers
             * @inner
             */
            preventOverflow: {
              /** @prop {number} order=300 - Index used to define the order of execution */
              order: 300,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: preventOverflow,
              /**
               * @prop {Array} [priority=['left','right','top','bottom']]
               * Popper will try to prevent overflow following these priorities by default,
               * then, it could overflow on the left and on top of the `boundariesElement`
               */
              priority: ['left', 'right', 'top', 'bottom'],
              /**
               * @prop {number} padding=5
               * Amount of pixel used to define a minimum distance between the boundaries
               * and the popper. This makes sure the popper always has a little padding
               * between the edges of its container
               */
              padding: 5,
              /**
               * @prop {String|HTMLElement} boundariesElement='scrollParent'
               * Boundaries used by the modifier. Can be `scrollParent`, `window`,
               * `viewport` or any DOM element.
               */
              boundariesElement: 'scrollParent',
            },

            /**
             * Modifier used to make sure the reference and its popper stay near each other
             * without leaving any gap between the two. Especially useful when the arrow is
             * enabled and you want to ensure that it points to its reference element.
             * It cares only about the first axis. You can still have poppers with margin
             * between the popper and its reference element.
             * @memberof modifiers
             * @inner
             */
            keepTogether: {
              /** @prop {number} order=400 - Index used to define the order of execution */
              order: 400,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: keepTogether,
            },

            /**
             * This modifier is used to move the `arrowElement` of the popper to make
             * sure it is positioned between the reference element and its popper element.
             * It will read the outer size of the `arrowElement` node to detect how many
             * pixels of conjunction are needed.
             *
             * It has no effect if no `arrowElement` is provided.
             * @memberof modifiers
             * @inner
             */
            arrow: {
              /** @prop {number} order=500 - Index used to define the order of execution */
              order: 500,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: arrow,
              /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
              element: '[x-arrow]',
            },

            /**
             * Modifier used to flip the popper's placement when it starts to overlap its
             * reference element.
             *
             * Requires the `preventOverflow` modifier before it in order to work.
             *
             * **NOTE:** this modifier will interrupt the current update cycle and will
             * restart it if it detects the need to flip the placement.
             * @memberof modifiers
             * @inner
             */
            flip: {
              /** @prop {number} order=600 - Index used to define the order of execution */
              order: 600,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: flip,
              /**
               * @prop {String|Array} behavior='flip'
               * The behavior used to change the popper's placement. It can be one of
               * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
               * placements (with optional variations)
               */
              behavior: 'flip',
              /**
               * @prop {number} padding=5
               * The popper will flip if it hits the edges of the `boundariesElement`
               */
              padding: 5,
              /**
               * @prop {String|HTMLElement} boundariesElement='viewport'
               * The element which will define the boundaries of the popper position.
               * The popper will never be placed outside of the defined boundaries
               * (except if `keepTogether` is enabled)
               */
              boundariesElement: 'viewport',
            },

            /**
             * Modifier used to make the popper flow toward the inner of the reference element.
             * By default, when this modifier is disabled, the popper will be placed outside
             * the reference element.
             * @memberof modifiers
             * @inner
             */
            inner: {
              /** @prop {number} order=700 - Index used to define the order of execution */
              order: 700,
              /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
              enabled: false,
              /** @prop {ModifierFn} */
              fn: inner,
            },

            /**
             * Modifier used to hide the popper when its reference element is outside of the
             * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
             * be used to hide with a CSS selector the popper when its reference is
             * out of boundaries.
             *
             * Requires the `preventOverflow` modifier before it in order to work.
             * @memberof modifiers
             * @inner
             */
            hide: {
              /** @prop {number} order=800 - Index used to define the order of execution */
              order: 800,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: hide,
            },

            /**
             * Computes the style that will be applied to the popper element to gets
             * properly positioned.
             *
             * Note that this modifier will not touch the DOM, it just prepares the styles
             * so that `applyStyle` modifier can apply it. This separation is useful
             * in case you need to replace `applyStyle` with a custom implementation.
             *
             * This modifier has `850` as `order` value to maintain backward compatibility
             * with previous versions of Popper.js. Expect the modifiers ordering method
             * to change in future major versions of the library.
             *
             * @memberof modifiers
             * @inner
             */
            computeStyle: {
              /** @prop {number} order=850 - Index used to define the order of execution */
              order: 850,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: computeStyle,
              /**
               * @prop {Boolean} gpuAcceleration=true
               * If true, it uses the CSS 3D transformation to position the popper.
               * Otherwise, it will use the `top` and `left` properties
               */
              gpuAcceleration: true,
              /**
               * @prop {string} [x='bottom']
               * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
               * Change this if your popper should grow in a direction different from `bottom`
               */
              x: 'bottom',
              /**
               * @prop {string} [x='left']
               * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
               * Change this if your popper should grow in a direction different from `right`
               */
              y: 'right',
            },

            /**
             * Applies the computed styles to the popper element.
             *
             * All the DOM manipulations are limited to this modifier. This is useful in case
             * you want to integrate Popper.js inside a framework or view library and you
             * want to delegate all the DOM manipulations to it.
             *
             * Note that if you disable this modifier, you must make sure the popper element
             * has its position set to `absolute` before Popper.js can do its work!
             *
             * Just disable this modifier and define your own to achieve the desired effect.
             *
             * @memberof modifiers
             * @inner
             */
            applyStyle: {
              /** @prop {number} order=900 - Index used to define the order of execution */
              order: 900,
              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,
              /** @prop {ModifierFn} */
              fn: applyStyle,
              /** @prop {Function} */
              onLoad: applyStyleOnLoad,
              /**
               * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
               * @prop {Boolean} gpuAcceleration=true
               * If true, it uses the CSS 3D transformation to position the popper.
               * Otherwise, it will use the `top` and `left` properties
               */
              gpuAcceleration: undefined,
            },
          }

          /**
           * The `dataObject` is an object containing all the information used by Popper.js.
           * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
           * @name dataObject
           * @property {Object} data.instance The Popper.js instance
           * @property {String} data.placement Placement applied to popper
           * @property {String} data.originalPlacement Placement originally defined on init
           * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
           * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
           * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
           * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
           * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
           * @property {Object} data.boundaries Offsets of the popper boundaries
           * @property {Object} data.offsets The measurements of popper, reference and arrow elements
           * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
           * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
           * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
           */

          /**
           * Default options provided to Popper.js constructor.<br />
           * These can be overridden using the `options` argument of Popper.js.<br />
           * To override an option, simply pass an object with the same
           * structure of the `options` object, as the 3rd argument. For example:
           * ```
           * new Popper(ref, pop, {
           *   modifiers: {
           *     preventOverflow: { enabled: false }
           *   }
           * })
           * ```
           * @type {Object}
           * @static
           * @memberof Popper
           */
          var Defaults = {
            /**
             * Popper's placement.
             * @prop {Popper.placements} placement='bottom'
             */
            placement: 'bottom',

            /**
             * Set this to true if you want popper to position it self in 'fixed' mode
             * @prop {Boolean} positionFixed=false
             */
            positionFixed: false,

            /**
             * Whether events (resize, scroll) are initially enabled.
             * @prop {Boolean} eventsEnabled=true
             */
            eventsEnabled: true,

            /**
             * Set to true if you want to automatically remove the popper when
             * you call the `destroy` method.
             * @prop {Boolean} removeOnDestroy=false
             */
            removeOnDestroy: false,

            /**
             * Callback called when the popper is created.<br />
             * By default, it is set to no-op.<br />
             * Access Popper.js instance with `data.instance`.
             * @prop {onCreate}
             */
            onCreate: function onCreate() {},

            /**
             * Callback called when the popper is updated. This callback is not called
             * on the initialization/creation of the popper, but only on subsequent
             * updates.<br />
             * By default, it is set to no-op.<br />
             * Access Popper.js instance with `data.instance`.
             * @prop {onUpdate}
             */
            onUpdate: function onUpdate() {},

            /**
             * List of modifiers used to modify the offsets before they are applied to the popper.
             * They provide most of the functionalities of Popper.js.
             * @prop {modifiers}
             */
            modifiers: modifiers,
          }

          /**
           * @callback onCreate
           * @param {dataObject} data
           */

          /**
           * @callback onUpdate
           * @param {dataObject} data
           */

          // Utils
          // Methods
          var Popper = (function() {
            /**
             * Creates a new Popper.js instance.
             * @class Popper
             * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
             * @param {HTMLElement} popper - The HTML element used as the popper
             * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
             * @return {Object} instance - The generated Popper.js instance
             */
            function Popper(reference, popper) {
              var _this = this

              var options =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {}
              classCallCheck(this, Popper)

              this.scheduleUpdate = function() {
                return requestAnimationFrame(_this.update)
              }

              // make update() debounced, so that it only runs at most once-per-tick
              this.update = debounce(this.update.bind(this))

              // with {} we create a new object with the options inside it
              this.options = _extends({}, Popper.Defaults, options)

              // init state
              this.state = {
                isDestroyed: false,
                isCreated: false,
                scrollParents: [],
              }

              // get reference and popper elements (allow jQuery wrappers)
              this.reference =
                reference && reference.jquery ? reference[0] : reference
              this.popper = popper && popper.jquery ? popper[0] : popper

              // Deep merge modifiers options
              this.options.modifiers = {}
              Object.keys(
                _extends({}, Popper.Defaults.modifiers, options.modifiers)
              ).forEach(function(name) {
                _this.options.modifiers[name] = _extends(
                  {},
                  Popper.Defaults.modifiers[name] || {},
                  options.modifiers ? options.modifiers[name] : {}
                )
              })

              // Refactoring modifiers' list (Object => Array)
              this.modifiers = Object.keys(this.options.modifiers)
                .map(function(name) {
                  return _extends(
                    {
                      name: name,
                    },
                    _this.options.modifiers[name]
                  )
                })
                // sort the modifiers by order
                .sort(function(a, b) {
                  return a.order - b.order
                })

              // modifiers have the ability to execute arbitrary code when Popper.js get inited
              // such code is executed in the same order of its modifier
              // they could add new properties to their options configuration
              // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
              this.modifiers.forEach(function(modifierOptions) {
                if (
                  modifierOptions.enabled &&
                  isFunction(modifierOptions.onLoad)
                ) {
                  modifierOptions.onLoad(
                    _this.reference,
                    _this.popper,
                    _this.options,
                    modifierOptions,
                    _this.state
                  )
                }
              })

              // fire the first update to position the popper in the right place
              this.update()

              var eventsEnabled = this.options.eventsEnabled
              if (eventsEnabled) {
                // setup event listeners, they will take care of update the position in specific situations
                this.enableEventListeners()
              }

              this.state.eventsEnabled = eventsEnabled
            }

            // We can't use class properties because they don't get listed in the
            // class prototype and break stuff like Sinon stubs

            createClass(Popper, [
              {
                key: 'update',
                value: function update$$1() {
                  return update.call(this)
                },
              },
              {
                key: 'destroy',
                value: function destroy$$1() {
                  return destroy.call(this)
                },
              },
              {
                key: 'enableEventListeners',
                value: function enableEventListeners$$1() {
                  return enableEventListeners.call(this)
                },
              },
              {
                key: 'disableEventListeners',
                value: function disableEventListeners$$1() {
                  return disableEventListeners.call(this)
                },

                /**
                 * Schedules an update. It will run on the next UI update available.
                 * @method scheduleUpdate
                 * @memberof Popper
                 */

                /**
                 * Collection of utilities useful when writing custom modifiers.
                 * Starting from version 1.7, this method is available only if you
                 * include `popper-utils.js` before `popper.js`.
                 *
                 * **DEPRECATION**: This way to access PopperUtils is deprecated
                 * and will be removed in v2! Use the PopperUtils module directly instead.
                 * Due to the high instability of the methods contained in Utils, we can't
                 * guarantee them to follow semver. Use them at your own risk!
                 * @static
                 * @private
                 * @type {Object}
                 * @deprecated since version 1.8
                 * @member Utils
                 * @memberof Popper
                 */
              },
            ])
            return Popper
          })()

          /**
           * The `referenceObject` is an object that provides an interface compatible with Popper.js
           * and lets you use it as replacement of a real DOM node.<br />
           * You can use this method to position a popper relatively to a set of coordinates
           * in case you don't have a DOM node to use as reference.
           *
           * ```
           * new Popper(referenceObject, popperNode);
           * ```
           *
           * NB: This feature isn't supported in Internet Explorer 10.
           * @name referenceObject
           * @property {Function} data.getBoundingClientRect
           * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
           * @property {number} data.clientWidth
           * An ES6 getter that will return the width of the virtual reference element.
           * @property {number} data.clientHeight
           * An ES6 getter that will return the height of the virtual reference element.
           */

          Popper.Utils = (typeof window !== 'undefined'
            ? window
            : global
          ).PopperUtils
          Popper.placements = placements
          Popper.Defaults = Defaults

          /* harmony default export */ __webpack_exports__['default'] = Popper
          //# sourceMappingURL=popper.js.map

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
          )
        ))

        /***/
      },

    /***/ './static/assets/jss/material-kit-pro-react/components/customDropdownStyle.jsx':
      /*!*************************************************************************************!*\
  !*** ./static/assets/jss/material-kit-pro-react/components/customDropdownStyle.jsx ***!
  \*************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../material-kit-pro-react.jsx */ './static/assets/jss/material-kit-pro-react.jsx'
        )
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }
          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        var customDropdownStyle = function customDropdownStyle(theme) {
          return {
            popperClose: {
              pointerEvents: 'none',
              display: 'none !important',
            },
            pooperNav: _defineProperty({}, theme.breakpoints.down('sm'), {
              position: 'static !important',
              left: 'unset !important',
              top: 'unset !important',
              transform: 'none !important',
              willChange: 'none !important',
              '& > div': {
                boxShadow: 'none !important',
                marginLeft: '1.5rem',
                marginRight: '1.5rem',
                transition: 'none !important',
                marginTop: '0px !important',
                marginBottom: '5px !important',
                padding: '0px !important',
              },
            }),
            manager: {
              '& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child': {
                width: '100%',
              },
            },
            innerManager: {
              display: 'block',
              '& > div > button,& > div > a': {
                margin: '0px !important',
                color: 'inherit !important',
                padding: '10px 20px !important',
                '& > span:first-child': {
                  width: '100%',
                  justifyContent: 'flex-start',
                },
              },
            },
            target: {
              '& > button:first-child > span:first-child, & > a:first-child > span:first-child': {
                display: 'inline-block',
              },
              '& $caret': {
                marginLeft: '0px',
              },
            },
            dropdown: {
              borderRadius: '3px',
              border: '0',
              boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
              top: '100%',
              zIndex: '1000',
              minWidth: '160px',
              padding: '5px 0',
              margin: '2px 0 0',
              fontSize: '14px',
              textAlign: 'left',
              listStyle: 'none',
              backgroundColor: '#fff',
              backgroundClip: 'padding-box',
            },
            menuList: {
              padding: '0',
            },
            pooperResponsive: _defineProperty(
              {
                zIndex: '1200',
              },
              theme.breakpoints.down('sm'),
              {
                zIndex: '1640',
                position: 'static',
                float: 'none',
                width: 'auto',
                marginTop: '0',
                backgroundColor: 'transparent',
                border: '0',
                boxShadow: 'none',
                color: 'black',
              }
            ),
            dropdownItem: _objectSpread(
              {},
              _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                'defaultFont'
              ],
              {
                fontSize: '13px',
                padding: '10px 20px',
                margin: '0 5px',
                borderRadius: '2px',
                position: 'relative',
                transition: 'all 150ms linear',
                display: 'block',
                clear: 'both',
                fontWeight: '400',
                height: '100%',
                color: '#333',
                whiteSpace: 'nowrap',
              }
            ),
            darkHover: {
              '&:hover': {
                boxShadow:
                  '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)',
                backgroundColor: '#212121',
                color: '#fff',
              },
            },
            primaryHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'primaryColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'primaryBoxShadow'
                ]
              ),
            },
            infoHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'infoColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'infoBoxShadow'
                ]
              ),
            },
            successHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'successColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'successBoxShadow'
                ]
              ),
            },
            warningHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'warningColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'warningBoxShadow'
                ]
              ),
            },
            dangerHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'dangerColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'dangerBoxShadow'
                ]
              ),
            },
            roseHover: {
              '&:hover': _objectSpread(
                {
                  backgroundColor:
                    _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                      'roseColor'
                    ],
                  color: '#FFFFFF',
                },
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'roseBoxShadow'
                ]
              ),
            },
            dropdownItemRTL: {
              textAlign: 'right',
            },
            dropdownDividerItem: {
              margin: '5px 0',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              height: '1px',
              overflow: 'hidden',
            },
            buttonIcon: {
              width: '20px',
              height: '20px',
            },
            caret: {
              transition: 'all 150ms ease-in',
              display: 'inline-block',
              width: '0',
              height: '0',
              marginLeft: '4px',
              verticalAlign: 'middle',
              borderTop: '4px solid',
              borderRight: '4px solid transparent',
              borderLeft: '4px solid transparent',
            },
            caretActive: {
              transform: 'rotate(180deg)',
            },
            caretDropup: {
              transform: 'rotate(180deg)',
            },
            caretRTL: {
              marginRight: '4px',
            },
            dropdownHeader: {
              display: 'block',
              padding: '0.1875rem 1.25rem',
              fontSize: '0.75rem',
              lineHeight: '1.428571',
              color: '#777',
              whiteSpace: 'nowrap',
              fontWeight: 'inherit',
              marginTop: '10px',
              '&:hover,&:focus': {
                backgroundColor: 'transparent',
                cursor: 'auto',
              },
            },
            noLiPadding: {
              padding: '0',
            },
          }
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = customDropdownStyle

        /***/
      },

    /***/ './static/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx':
      /*!**********************************************************************************!*\
  !*** ./static/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx ***!
  \**********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../material-kit-pro-react.jsx */ './static/assets/jss/material-kit-pro-react.jsx'
        )
        /* harmony import */ var _tooltipsStyle_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../tooltipsStyle.jsx */ './static/assets/jss/material-kit-pro-react/tooltipsStyle.jsx'
        )
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }
          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        // ##############################
        // // // HeaderLinks styles
        // #############################

        var headerLinksStyle = function headerLinksStyle(theme) {
          var _list, _navLink, _navButton, _collapse

          return _objectSpread(
            {
              list: ((_list = {}),
              _defineProperty(_list, theme.breakpoints.up('md'), {
                WebkitBoxAlign: 'center',
                MsFlexAlign: 'center',
                alignItems: 'center',
                WebkitBoxOrient: 'horizontal',
                WebkitBoxDirection: 'normal',
                MsFlexDirection: 'row',
                flexDirection: 'row',
              }),
              _defineProperty(_list, theme.breakpoints.down('sm'), {
                display: 'block',
              }),
              _defineProperty(_list, 'marginTop', '0px'),
              _defineProperty(_list, 'display', 'flex'),
              _defineProperty(_list, 'paddingLeft', '0'),
              _defineProperty(_list, 'marginBottom', '0'),
              _defineProperty(_list, 'listStyle', 'none'),
              _defineProperty(_list, 'padding', '0'),
              _list),
              listItem: _defineProperty(
                {
                  float: 'left',
                  color: 'inherit',
                  position: 'relative',
                  display: 'block',
                  width: 'auto',
                  margin: '0',
                  padding: '0',
                },
                theme.breakpoints.down('sm'),
                {
                  '& ul': {
                    maxHeight: '400px',
                    overflow: 'scroll',
                  },
                  width: '100%',
                  '&:not(:last-child)': {
                    '&:after': {
                      width: 'calc(100% - 30px)',
                      content: '""',
                      display: 'block',
                      height: '1px',
                      marginLeft: '15px',
                      backgroundColor: '#e5e5e5',
                    },
                  },
                }
              ),
              listItemText: {
                padding: '0 !important',
              },
              navLink: ((_navLink = {
                color: 'inherit',
                position: 'relative',
                padding: '0.9375rem',
                fontWeight: '400',
                fontSize: '12px',
                textTransform: 'uppercase',
                lineHeight: '20px',
                textDecoration: 'none',
                margin: '0px',
                display: 'inline-flex',
                '&:hover,&:focus': {
                  color: 'inherit',
                },
                '& .fab,& .far,& .fal,& .fas,& .material-icons': {
                  position: 'relative',
                  top: '2px',
                  marginTop: '-4px',
                  marginRight: '4px',
                  marginBottom: '0px',
                  fontSize: '1.25rem',
                },
              }),
              _defineProperty(_navLink, theme.breakpoints.down('sm'), {
                width: 'calc(100% - 30px)',
                marginLeft: '15px',
                marginBottom: '8px',
                marginTop: '8px',
                textAlign: 'left',
                '& > span:first-child': {
                  justifyContent: 'flex-start',
                },
              }),
              _defineProperty(_navLink, '& svg', {
                marginRight: '3px',
                width: '20px',
                height: '20px',
              }),
              _navLink),
              navLinkJustIcon: {
                '& .fab,& .far,& .fal,& .fas,& .material-icons': {
                  marginRight: '0px',
                },
                '& svg': {
                  marginRight: '0px',
                },
              },
              navButton: ((_navButton = {
                position: 'relative',
                fontWeight: '400',
                fontSize: '12px',
                textTransform: 'uppercase',
                lineHeight: '20px',
                textDecoration: 'none',
                margin: '0px',
                display: 'inline-flex',
              }),
              _defineProperty(_navButton, theme.breakpoints.down('sm'), {
                width: 'calc(100% - 30px)',
                marginLeft: '15px',
                marginBottom: '5px',
                marginTop: '5px',
                textAlign: 'left',
                '& > span:first-child': {
                  justifyContent: 'flex-start',
                },
              }),
              _defineProperty(_navButton, '& $icons', {
                marginRight: '3px',
              }),
              _navButton),
              notificationNavLink: {
                color: 'inherit',
                padding: '0.9375rem',
                fontWeight: '400',
                fontSize: '12px',
                textTransform: 'uppercase',
                lineHeight: '20px',
                textDecoration: 'none',
                margin: '0px',
                display: 'inline-flex',
                top: '4px',
              },
              registerNavLink: {
                top: '3px',
                position: 'relative',
                fontWeight: '400',
                fontSize: '12px',
                textTransform: 'uppercase',
                lineHeight: '20px',
                textDecoration: 'none',
                margin: '0px',
                display: 'inline-flex',
              },
              navLinkActive: {
                '&, &:hover, &:focus,&:active ': {
                  color: 'inherit',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
              icons: {
                width: '20px',
                height: '20px',
                marginRight: '14px',
              },
              dropdownIcons: {
                width: '24px',
                height: '24px',
                marginRight: '14px',
                opacity: '0.5',
                marginTop: '-4px',
                top: '1px',
                verticalAlign: 'middle',
                fontSize: '24px',
                position: 'relative',
              },
              socialIcons: {
                position: 'relative',
                fontSize: '1.25rem',
                maxWidth: '24px',
              },
              socialIconsButton: _defineProperty(
                {
                  top: '4px',
                },
                theme.breakpoints.down('sm'),
                {
                  top: '0',
                }
              ),
              dropdownLink: {
                '&,&:hover,&:focus': {
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  padding: '0.75rem 1.25rem 0.75rem 0.75rem',
                },
              },
            },
            _tooltipsStyle_jsx__WEBPACK_IMPORTED_MODULE_1__['default'],
            {
              marginRight5: {
                marginRight: '5px',
              },
              collapse: ((_collapse = {}),
              _defineProperty(_collapse, theme.breakpoints.up('md'), {
                display: 'flex !important',
                MsFlexPreferredSize: 'auto',
                flexBasis: 'auto',
              }),
              _defineProperty(_collapse, 'WebkitBoxFlex', '1'),
              _defineProperty(_collapse, 'MsFlexPositive', '1'),
              _defineProperty(_collapse, 'flexGrow', '1'),
              _defineProperty(_collapse, 'WebkitBoxAlign', 'center'),
              _defineProperty(_collapse, 'MsFlexAlign', 'center'),
              _defineProperty(_collapse, 'alignItems', 'center'),
              _collapse),
              mlAuto:
                _material_kit_pro_react_jsx__WEBPACK_IMPORTED_MODULE_0__[
                  'mlAuto'
                ],
            }
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = headerLinksStyle

        /***/
      },

    /***/ './static/assets/jss/material-kit-pro-react/tooltipsStyle.jsx':
      /*!********************************************************************!*\
  !*** ./static/assets/jss/material-kit-pro-react/tooltipsStyle.jsx ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var tooltipsStyle = {
          tooltip: {
            padding: '10px 15px',
            minWidth: '130px',
            color: '#FFFFFF',
            lineHeight: '1.7em',
            background: 'rgba(85,85,85,0.9)',
            border: 'none',
            borderRadius: '3px',
            boxShadow:
              '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
            maxWidth: '200px',
            textAlign: 'center',
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: '0.875em',
            fontStyle: 'normal',
            fontWeight: '400',
            textShadow: 'none',
            textTransform: 'none',
            letterSpacing: 'normal',
            wordBreak: 'normal',
            wordSpacing: 'normal',
            wordWrap: 'normal',
            whiteSpace: 'normal',
            lineBreak: 'auto',
          },
        }
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = tooltipsStyle

        /***/
      },

    /***/ './vendor/components/CustomDropdown/CustomDropdown.jsx':
      /*!*************************************************************!*\
  !*** ./vendor/components/CustomDropdown/CustomDropdown.jsx ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js'
        )
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js'
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        )
        /* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @material-ui/core/styles/withStyles */ './node_modules/@material-ui/core/styles/withStyles.js'
        )
        /* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__
        )
        /* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material-ui/core/MenuItem */ './node_modules/@material-ui/core/MenuItem/index.js'
        )
        /* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__
        )
        /* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @material-ui/core/MenuList */ './node_modules/@material-ui/core/MenuList/index.js'
        )
        /* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__
        )
        /* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material-ui/core/ClickAwayListener */ './node_modules/@material-ui/core/ClickAwayListener/index.js'
        )
        /* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__
        )
        /* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
        )
        /* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__
        )
        /* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @material-ui/core/Grow */ './node_modules/@material-ui/core/Grow/index.js'
        )
        /* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__
        )
        /* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @material-ui/core/Divider */ './node_modules/@material-ui/core/Divider/index.js'
        )
        /* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__
        )
        /* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @material-ui/core/Popper */ './node_modules/@material-ui/core/Popper/index.js'
        )
        /* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__
        )
        /* harmony import */ var _CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../CustomButtons/Button.jsx */ './vendor/components/CustomButtons/Button.jsx'
        )
        /* harmony import */ var _static_assets_jss_material_kit_pro_react_components_customDropdownStyle_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../static/assets/jss/material-kit-pro-react/components/customDropdownStyle.jsx */ './static/assets/jss/material-kit-pro-react/components/customDropdownStyle.jsx'
        )
        var _jsxFileName =
          'C:\\Users\\limte\\Desktop\\FrontEnd\\vendor\\components\\CustomDropdown\\CustomDropdown.jsx'

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof(obj)
        }

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call
          }
          return _assertThisInitialized(self)
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          )
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }
          return _setPrototypeOf(o, p)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return self
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        // nodejs library that concatenates classes

        // nodejs library to set properties for components

        // @material-ui/core components

        // core components

        var CustomDropdown =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(CustomDropdown, _React$Component)

            function CustomDropdown(props) {
              var _this

              _classCallCheck(this, CustomDropdown)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(CustomDropdown).call(this, props)
              )

              _defineProperty(
                _assertThisInitialized(_assertThisInitialized(_this)),
                'handleClick',
                function() {
                  _this.setState(function(state) {
                    return {
                      open: !state.open,
                    }
                  })
                }
              )

              _defineProperty(
                _assertThisInitialized(_assertThisInitialized(_this)),
                'handleClose',
                function(event) {
                  if (_this.anchorEl.contains(event.target)) {
                    return
                  }

                  _this.setState({
                    open: false,
                  })
                }
              )

              _this.state = {
                open: false,
              }
              _this.handleClick = _this.handleClick.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.handleClose = _this.handleClose.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.handleCloseMenu = _this.handleCloseMenu.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              return _this
            }

            _createClass(CustomDropdown, [
              {
                key: 'handleCloseMenu',
                value: function handleCloseMenu(param) {
                  this.setState({
                    open: false,
                  })

                  if (this.props && this.props.onClick) {
                    this.props.onClick(param)
                  }
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _classNames,
                    _classNames2,
                    _this2 = this,
                    _classNames3

                  var open = this.state.open
                  var _this$props = this.props,
                    classes = _this$props.classes,
                    buttonText = _this$props.buttonText,
                    buttonIcon = _this$props.buttonIcon,
                    dropdownList = _this$props.dropdownList,
                    buttonProps = _this$props.buttonProps,
                    dropup = _this$props.dropup,
                    dropdownHeader = _this$props.dropdownHeader,
                    caret = _this$props.caret,
                    hoverColor = _this$props.hoverColor,
                    dropPlacement = _this$props.dropPlacement,
                    rtlActive = _this$props.rtlActive,
                    noLiPadding = _this$props.noLiPadding,
                    innerDropDown = _this$props.innerDropDown,
                    navDropdown = _this$props.navDropdown
                  var caretClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                    ((_classNames = {}),
                    _defineProperty(_classNames, classes.caret, true),
                    _defineProperty(
                      _classNames,
                      classes.caretDropup,
                      dropup && !open
                    ),
                    _defineProperty(
                      _classNames,
                      classes.caretActive,
                      open && !dropup
                    ),
                    _defineProperty(_classNames, classes.caretRTL, rtlActive),
                    _classNames)
                  )
                  var dropdownItem = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                    ((_classNames2 = {}),
                    _defineProperty(_classNames2, classes.dropdownItem, true),
                    _defineProperty(
                      _classNames2,
                      classes[hoverColor + 'Hover'],
                      true
                    ),
                    _defineProperty(
                      _classNames2,
                      classes.noLiPadding,
                      noLiPadding
                    ),
                    _defineProperty(
                      _classNames2,
                      classes.dropdownItemRTL,
                      rtlActive
                    ),
                    _classNames2)
                  )
                  var dropDownMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a,
                    {
                      role: 'menu',
                      className: classes.menuList,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                      },
                      __self: this,
                    },
                    dropdownHeader !== undefined
                      ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a,
                          {
                            onClick: function onClick() {
                              return _this2.handleCloseMenu(dropdownHeader)
                            },
                            className: classes.dropdownHeader,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 81,
                            },
                            __self: this,
                          },
                          dropdownHeader
                        )
                      : null,
                    dropdownList.map(function(prop, key) {
                      if (prop.divider) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a,
                          {
                            key: key,
                            onClick: function onClick() {
                              return _this2.handleCloseMenu('divider')
                            },
                            className: classes.dropdownDividerItem,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 91,
                            },
                            __self: this,
                          }
                        )
                      } else if (prop.ref === 'multi') {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a,
                          {
                            key: key,
                            className: dropdownItem,
                            style: {
                              overflow: 'visible',
                              padding: 0,
                            },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 99,
                            },
                            __self: this,
                          },
                          prop
                        )
                      }

                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a,
                        {
                          key: key,
                          onClick: function onClick() {
                            return _this2.handleCloseMenu(prop)
                          },
                          className: dropdownItem,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                          },
                          __self: this,
                        },
                        prop
                      )
                    })
                  )
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {
                      className: innerDropDown
                        ? classes.innerManager
                        : classes.manager,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        className:
                          buttonText !== undefined ? '' : classes.target,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_11__[
                          'default'
                        ],
                        _extends(
                          {
                            'aria-label': 'Notifications',
                            'aria-owns': open ? 'menu-list' : null,
                            'aria-haspopup': 'true',
                            buttonRef: function buttonRef(node) {
                              _this2.anchorEl = node
                            },
                          },
                          buttonProps,
                          {
                            onClick: this.handleClick,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 123,
                            },
                            __self: this,
                          }
                        ),
                        buttonIcon !== undefined
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              this.props.buttonIcon,
                              {
                                className: classes.buttonIcon,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 134,
                                },
                                __self: this,
                              }
                            )
                          : null,
                        buttonText !== undefined ? buttonText : null,
                        caret
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'b',
                              {
                                className: caretClasses,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 137,
                                },
                                __self: this,
                              }
                            )
                          : null
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default.a,
                      {
                        open: open,
                        anchorEl: this.anchorEl,
                        transition: true,
                        disablePortal: true,
                        placement: dropPlacement,
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                          ((_classNames3 = {}),
                          _defineProperty(
                            _classNames3,
                            classes.popperClose,
                            !open
                          ),
                          _defineProperty(
                            _classNames3,
                            classes.pooperResponsive,
                            true
                          ),
                          _defineProperty(
                            _classNames3,
                            classes.pooperNav,
                            open && navDropdown
                          ),
                          _classNames3)
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 140,
                        },
                        __self: this,
                      },
                      function(_ref) {
                        var TransitionProps = _ref.TransitionProps,
                          placement = _ref.placement
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a,
                          {
                            in: open,
                            id: 'menu-list',
                            style: dropup
                              ? {
                                  transformOrigin: '0 100% 0',
                                }
                              : {
                                  transformOrigin: '0 0 0',
                                },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 153,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a,
                            {
                              className: classes.dropdown,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 162,
                              },
                              __self: this,
                            },
                            innerDropDown
                              ? dropDownMenu
                              : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default.a,
                                  {
                                    onClickAway: _this2.handleClose,
                                    ref: 'cacat',
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 166,
                                    },
                                    __self: this,
                                  },
                                  dropDownMenu
                                )
                          )
                        )
                      }
                    )
                  )
                },
              },
            ])

            return CustomDropdown
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

        CustomDropdown.defaultProps = {
          caret: true,
          dropup: false,
          hoverColor: 'primary',
        }
        CustomDropdown.propTypes = {
          classes:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
          hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
            'dark',
            'primary',
            'info',
            'success',
            'warning',
            'danger',
            'rose',
          ]),
          buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          buttonIcon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
          dropdownList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
          buttonProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
          dropup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          dropdownHeader:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          caret: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          dropPlacement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(
            [
              'bottom',
              'top',
              'right',
              'left',
              'bottom-start',
              'bottom-end',
              'top-start',
              'top-end',
              'right-start',
              'right-end',
              'left-start',
              'left-end',
            ]
          ),
          noLiPadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          innerDropDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          navDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          // This is a function that returns the clicked menu item
          onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
        }
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(
          _static_assets_jss_material_kit_pro_react_components_customDropdownStyle_jsx__WEBPACK_IMPORTED_MODULE_12__[
            'default'
          ]
        )(CustomDropdown)

        /***/
      },

    /***/ './vendor/components/Header/HeaderLinks.jsx':
      /*!**************************************************!*\
  !*** ./vendor/components/Header/HeaderLinks.jsx ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js'
        )
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ './node_modules/next/link.js'
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        )
        /* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @material-ui/core/styles/withStyles */ './node_modules/@material-ui/core/styles/withStyles.js'
        )
        /* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__
        )
        /* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material-ui/core/List */ './node_modules/@material-ui/core/List/index.js'
        )
        /* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__
        )
        /* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @material-ui/core/ListItem */ './node_modules/@material-ui/core/ListItem/index.js'
        )
        /* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__
        )
        /* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material-ui/core/Icon */ './node_modules/@material-ui/core/Icon/index.js'
        )
        /* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__
        )
        /* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @material-ui/icons/Apps */ './node_modules/@material-ui/icons/Apps.js'
        )
        /* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__
        )
        /* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @material-ui/icons/ShoppingCart */ './node_modules/@material-ui/icons/ShoppingCart.js'
        )
        /* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__
        )
        /* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @material-ui/icons/ViewDay */ './node_modules/@material-ui/icons/ViewDay.js'
        )
        /* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9__
        )
        /* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @material-ui/icons/Dns */ './node_modules/@material-ui/icons/Dns.js'
        )
        /* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10__
        )
        /* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @material-ui/icons/Build */ './node_modules/@material-ui/icons/Build.js'
        )
        /* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11__
        )
        /* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @material-ui/icons/List */ './node_modules/@material-ui/icons/List.js'
        )
        /* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__
        )
        /* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @material-ui/icons/People */ './node_modules/@material-ui/icons/People.js'
        )
        /* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13__
        )
        /* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @material-ui/icons/Assignment */ './node_modules/@material-ui/icons/Assignment.js'
        )
        /* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14__
        )
        /* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @material-ui/icons/MonetizationOn */ './node_modules/@material-ui/icons/MonetizationOn.js'
        )
        /* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__
        )
        /* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @material-ui/icons/Chat */ './node_modules/@material-ui/icons/Chat.js'
        )
        /* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__
        )
        /* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @material-ui/icons/Call */ './node_modules/@material-ui/icons/Call.js'
        )
        /* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17__
        )
        /* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @material-ui/icons/ViewCarousel */ './node_modules/@material-ui/icons/ViewCarousel.js'
        )
        /* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18__
        )
        /* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! @material-ui/icons/AccountBalance */ './node_modules/@material-ui/icons/AccountBalance.js'
        )
        /* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19__
        )
        /* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! @material-ui/icons/ArtTrack */ './node_modules/@material-ui/icons/ArtTrack.js'
        )
        /* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20__
        )
        /* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! @material-ui/icons/ViewQuilt */ './node_modules/@material-ui/icons/ViewQuilt.js'
        )
        /* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21__
        )
        /* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! @material-ui/icons/LocationOn */ './node_modules/@material-ui/icons/LocationOn.js'
        )
        /* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22__
        )
        /* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! @material-ui/icons/Fingerprint */ './node_modules/@material-ui/icons/Fingerprint.js'
        )
        /* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23__
        )
        /* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! @material-ui/icons/AttachMoney */ './node_modules/@material-ui/icons/AttachMoney.js'
        )
        /* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24__
        )
        /* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! @material-ui/icons/Store */ './node_modules/@material-ui/icons/Store.js'
        )
        /* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25__
        )
        /* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! @material-ui/icons/AccountCircle */ './node_modules/@material-ui/icons/AccountCircle.js'
        )
        /* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26__
        )
        /* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! @material-ui/icons/PersonAdd */ './node_modules/@material-ui/icons/PersonAdd.js'
        )
        /* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27__
        )
        /* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! @material-ui/icons/Layers */ './node_modules/@material-ui/icons/Layers.js'
        )
        /* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28__
        )
        /* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! @material-ui/icons/ShoppingBasket */ './node_modules/@material-ui/icons/ShoppingBasket.js'
        )
        /* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29__
        )
        /* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! @material-ui/icons/LineStyle */ './node_modules/@material-ui/icons/LineStyle.js'
        )
        /* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30__
        )
        /* harmony import */ var _CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../CustomDropdown/CustomDropdown.jsx */ './vendor/components/CustomDropdown/CustomDropdown.jsx'
        )
        /* harmony import */ var _CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../CustomButtons/Button.jsx */ './vendor/components/CustomButtons/Button.jsx'
        )
        /* harmony import */ var _static_assets_jss_material_kit_pro_react_components_headerLinksStyle_jsx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../../../static/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx */ './static/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
        )
        var _jsxFileName =
          'C:\\Users\\limte\\Desktop\\FrontEnd\\vendor\\components\\Header\\HeaderLinks.jsx'

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        /* eslint-disable */
        // nodejs library to set properties for components

        // react components for routing our app without refresh

        // @material-ui/core components

        // @material-ui/icons

        // core components

        function HeaderLinks(_ref) {
          var props = _extends({}, _ref)

          var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
            t /= d / 2
            if (t < 1) return (c / 2) * t * t + b
            t--
            return (-c / 2) * (t * (t - 2) - 1) + b
          }

          var smoothScroll = function smoothScroll(e, target) {
            if (window.location.pathname === '/sections') {
              var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
              )

              if (isMobile) {
                // if we are on mobile device the scroll into view will be managed by the browser
              } else {
                e.preventDefault()
                var targetScroll = document.getElementById(target)
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
              }
            }
          }

          var scrollGo = function scrollGo(element, to, duration) {
            var start = element.scrollTop,
              change = to - start,
              currentTime = 0,
              increment = 20

            var animateScroll = function animateScroll() {
              currentTime += increment
              var val = easeInOutQuad(currentTime, start, change, duration)
              element.scrollTop = val

              if (currentTime < duration) {
                setTimeout(animateScroll, increment)
              }
            }

            animateScroll()
          }

          var onClickSections = {}
          var classes = props.classes,
            dropdownHoverColor = props.dropdownHoverColor
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a,
            {
              className: classes.list + ' ' + classes.mlAuto,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a,
              {
                className: classes.listItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_31__[
                  'default'
                ],
                {
                  noLiPadding: true,
                  navDropdown: true,
                  hoverColor: dropdownHoverColor,
                  buttonText: 'Components',
                  buttonProps: {
                    className: classes.navLink,
                    color: 'transparent',
                  },
                  buttonIcon:
                    _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a,
                  dropdownList: [
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_30___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103,
                            },
                            __self: this,
                          }
                        ),
                        ' Presentation Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/components',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_28___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 109,
                            },
                            __self: this,
                          }
                        ),
                        'All components'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'a',
                      {
                        href:
                          'https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial',
                        target: '_blank',
                        className: classes.dropdownLink,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a,
                        {
                          className: classes.dropdownIcons,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118,
                          },
                          __self: this,
                        },
                        'content_paste'
                      ),
                      'Documentation'
                    ),
                  ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                  },
                  __self: this,
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a,
              {
                className: classes.listItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_31__[
                  'default'
                ],
                {
                  noLiPadding: true,
                  navDropdown: true,
                  hoverColor: dropdownHoverColor,
                  buttonText: 'Sections',
                  buttonProps: {
                    className: classes.navLink,
                    color: 'transparent',
                  },
                  buttonIcon:
                    _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a,
                  dropdownList: [
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#headers',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'headers')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_10___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 141,
                            },
                            __self: this,
                          }
                        ),
                        ' Headers'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#features',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'features')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_11___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 149,
                            },
                            __self: this,
                          }
                        ),
                        ' Features'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#blogs',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'blogs')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 157,
                            },
                            __self: this,
                          }
                        ),
                        ' Blogs'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#teams',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'teams')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 161,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_13___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 165,
                            },
                            __self: this,
                          }
                        ),
                        ' Teams'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#projects',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'projects')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 169,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_14___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 173,
                            },
                            __self: this,
                          }
                        ),
                        ' Projects'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#pricing',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'pricing')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 181,
                            },
                            __self: this,
                          }
                        ),
                        ' Pricing'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#testimonials',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'testimonials')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 185,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 189,
                            },
                            __self: this,
                          }
                        ),
                        ' Testimonials'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/sections#contacts',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          onClick: function onClick(e) {
                            return smoothScroll(e, 'contacts')
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_17___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 197,
                            },
                            __self: this,
                          }
                        ),
                        ' Contacts'
                      )
                    ),
                  ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                  },
                  __self: this,
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a,
              {
                className: classes.listItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_31__[
                  'default'
                ],
                {
                  noLiPadding: true,
                  navDropdown: true,
                  hoverColor: dropdownHoverColor,
                  buttonText: 'Examples',
                  buttonProps: {
                    className: classes.navLink,
                    color: 'transparent',
                  },
                  buttonIcon:
                    _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_18___default.a,
                  dropdownList: [
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/about-us',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 215,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 216,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_19___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 217,
                            },
                            __self: this,
                          }
                        ),
                        ' About Us'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/blog-post',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 221,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_20___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 222,
                            },
                            __self: this,
                          }
                        ),
                        ' Blog Post'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/blog-posts',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 225,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 226,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_21___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 227,
                            },
                            __self: this,
                          }
                        ),
                        ' Blog Posts'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/contact-us',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 230,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 231,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_22___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 232,
                            },
                            __self: this,
                          }
                        ),
                        ' Contact Us'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/landing-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_9___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 237,
                            },
                            __self: this,
                          }
                        ),
                        ' Landing Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/login-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 240,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 241,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_23___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 242,
                            },
                            __self: this,
                          }
                        ),
                        ' Login Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/pricing',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 245,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 246,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_24___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 247,
                            },
                            __self: this,
                          }
                        ),
                        ' Pricing Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/shopping-cart-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 250,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_29___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 252,
                            },
                            __self: this,
                          }
                        ),
                        ' Shopping Cart'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/ecommerce-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 256,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_25___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 258,
                            },
                            __self: this,
                          }
                        ),
                        ' Ecommerce Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/product-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 262,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 263,
                            },
                            __self: this,
                          }
                        ),
                        ' Product Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/profile-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 266,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_26___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 268,
                            },
                            __self: this,
                          }
                        ),
                        ' Profile Page'
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                      {
                        href: '/signup-page',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        {
                          className: classes.dropdownLink,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_27___default.a,
                          {
                            className: classes.dropdownIcons,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 273,
                            },
                            __self: this,
                          }
                        ),
                        ' Signup Page'
                      )
                    ),
                  ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                  },
                  __self: this,
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a,
              {
                className: classes.listItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_32__[
                  'default'
                ],
                {
                  href:
                    'https://www.creative-tim.com/product/material-kit-pro-react',
                  color: window.innerWidth < 960 ? 'info' : 'white',
                  target: '_blank',
                  className: classes.navButton,
                  round: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_8___default.a,
                  {
                    className: classes.icons,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                    },
                    __self: this,
                  }
                ),
                ' buy now'
              )
            )
          )
        }

        HeaderLinks.defaultProps = {
          hoverColor: 'primary',
        }
        HeaderLinks.propTypes = {
          dropdownHoverColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
            ['dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose']
          ),
        }
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(
          _static_assets_jss_material_kit_pro_react_components_headerLinksStyle_jsx__WEBPACK_IMPORTED_MODULE_33__[
            'default'
          ]
        )(HeaderLinks)

        /***/
      },
  },
])
//# sourceMappingURL=1.js.map
