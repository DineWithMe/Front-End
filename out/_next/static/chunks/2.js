;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    /***/ './static/assets/jss/material-kit-pro-react/components/parallaxStyle.jsx':
      /*!*******************************************************************************!*\
  !*** ./static/assets/jss/material-kit-pro-react/components/parallaxStyle.jsx ***!
  \*******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var parallaxStyle = {
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
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
          infoColor: {
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
            '&:before': {
              background: 'rgba(0, 0, 0, 0.5)',
            },
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
          small: {
            height: '65vh',
            minHeight: '65vh',
            maxHeight: '650px',
          },
        }
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = parallaxStyle

        /***/
      },

    /***/ './vendor/components/Parallax/Parallax.jsx':
      /*!*************************************************!*\
  !*** ./vendor/components/Parallax/Parallax.jsx ***!
  \*************************************************/
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
        /* harmony import */ var _static_assets_jss_material_kit_pro_react_components_parallaxStyle_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../static/assets/jss/material-kit-pro-react/components/parallaxStyle.jsx */ './static/assets/jss/material-kit-pro-react/components/parallaxStyle.jsx'
        )
        var _jsxFileName =
          'C:\\Users\\limte\\Desktop\\FrontEnd\\vendor\\components\\Parallax\\Parallax.jsx'

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

        // nodejs library that concatenates classes

        // nodejs library to set properties for components

        // @material-ui/core components

        // core components

        var Parallax =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(Parallax, _React$Component)

            function Parallax(props) {
              var _this

              _classCallCheck(this, Parallax)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Parallax).call(this, props)
              )
              var windowScrollTop

              if (window.innerWidth >= 768) {
                windowScrollTop = window.pageYOffset / 3
              } else {
                windowScrollTop = 0
              }

              _this.state = {
                transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
              }
              _this.resetTransform = _this.resetTransform.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              return _this
            }

            _createClass(Parallax, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  if (window.innerWidth >= 768) {
                    var windowScrollTop = window.pageYOffset / 3
                    this.setState({
                      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
                    })
                    window.addEventListener('scroll', this.resetTransform)
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  if (window.innerWidth >= 768) {
                    window.removeEventListener('scroll', this.resetTransform)
                  }
                },
              },
              {
                key: 'resetTransform',
                value: function resetTransform() {
                  var windowScrollTop = window.pageYOffset / 3
                  this.setState({
                    transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
                  })
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _classNames

                  var _this$props = this.props,
                    classes = _this$props.classes,
                    filter = _this$props.filter,
                    className = _this$props.className,
                    children = _this$props.children,
                    style = _this$props.style,
                    image = _this$props.image,
                    small = _this$props.small
                  var parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                    ((_classNames = {}),
                    _defineProperty(_classNames, classes.parallax, true),
                    _defineProperty(
                      _classNames,
                      classes[filter + 'Color'],
                      filter !== undefined
                    ),
                    _defineProperty(_classNames, classes.small, small),
                    _defineProperty(
                      _classNames,
                      className,
                      className !== undefined
                    ),
                    _classNames)
                  )
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {
                      className: parallaxClasses,
                      style: _objectSpread(
                        {},
                        style,
                        {
                          backgroundImage: 'url(' + image + ')',
                        },
                        this.state
                      ),
                      ref: 'parallax',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                      },
                      __self: this,
                    },
                    children
                  )
                },
              },
            ])

            return Parallax
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

        Parallax.propTypes = {
          classes:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
            'primary',
            'rose',
            'dark',
            'info',
            'success',
            'warning',
            'danger',
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
        }
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(
          _static_assets_jss_material_kit_pro_react_components_parallaxStyle_jsx__WEBPACK_IMPORTED_MODULE_4__[
            'default'
          ]
        )(Parallax)

        /***/
      },
  },
])
//# sourceMappingURL=2.js.map
