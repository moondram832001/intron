(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("konva"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "konva"], factory);
	else if(typeof exports === 'object')
		exports["ReactKonva"] = factory(require("react"), require("konva"));
	else
		root["ReactKonva"] = factory(root["React"], root["Konva"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.Stage = __webpack_require__(1);
	exports.Layer = __webpack_require__(8);
	exports.FastLayer = __webpack_require__(10);
	exports.Group = __webpack_require__(11);

	exports.Arc = __webpack_require__(12);
	exports.Arrow = __webpack_require__(15);
	exports.Circle = __webpack_require__(16);
	exports.Ellipse = __webpack_require__(17);
	exports.Image = __webpack_require__(18);
	exports.Label = __webpack_require__(19);
	exports.Line = __webpack_require__(20);
	exports.Path = __webpack_require__(21);
	exports.Rect = __webpack_require__(22);
	exports.RegularPolygon = __webpack_require__(23);
	exports.Ring = __webpack_require__(24);
	exports.Shape = __webpack_require__(13);
	exports.Sprite = __webpack_require__(25);
	exports.Star = __webpack_require__(26);
	exports.Tag = __webpack_require__(27);
	exports.Text = __webpack_require__(28);
	exports.TextPath = __webpack_require__(29);
	exports.Wedge = __webpack_require__(30);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _konva = __webpack_require__(3);

	var _konva2 = _interopRequireDefault(_konva);

	var _abstractContainer = __webpack_require__(4);

	var _abstractContainer2 = _interopRequireDefault(_abstractContainer);

	var Stage = (function (_Container) {
	  _inherits(Stage, _Container);

	  function Stage() {
	    _classCallCheck(this, Stage);

	    _Container.apply(this, arguments);

	    this.displayName = 'Stage';
	  }

	  Stage.prototype.createKonvaNode = function createKonvaNode() {
	    return new _konva2['default'].Stage({
	      container: _react2['default'].findDOMNode(this.refs.canvas)
	    });
	  };

	  Stage.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement('div', { ref: 'canvas' }),
	      _react2['default'].Children.map(this.props.children, function (child) {
	        return child ? _react2['default'].addons.cloneWithProps(child) : null;
	      })
	    );
	  };

	  return Stage;
	})(_abstractContainer2['default']);

	Stage.propTypes = {
	  children: _react2['default'].PropTypes.any
	};

	exports['default'] = Stage;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Base2 = __webpack_require__(5);

	var _Base3 = _interopRequireDefault(_Base2);

	var Container = (function (_Base) {
	  _inherits(Container, _Base);

	  function Container() {
	    _classCallCheck(this, Container);

	    _Base.call(this);
	    this.node = new Set();
	  }

	  Container.prototype.getChildContext = function getChildContext() {
	    return {
	      container: this.node
	    };
	  };

	  Container.prototype.componentDidMount = function componentDidMount() {
	    var _this = this;

	    var mountedChildNodes = this.node;
	    _Base.prototype.componentDidMount.call(this);
	    mountedChildNodes.forEach(function (node) {
	      return _this.node.add(node);
	    });
	  };

	  Container.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'span',
	      null,
	      _react2['default'].Children.map(this.props.children, function (child) {
	        return child ? _react2['default'].cloneElement(child) : null;
	      })
	    );
	  };

	  return Container;
	})(_Base3['default']);

	Container.childContextTypes = {
	  container: _react2['default'].PropTypes.object.isRequired
	};

	Container.propTypes = {
	  children: _react2['default'].PropTypes.any
	};

	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _konva = __webpack_require__(3);

	var _konva2 = _interopRequireDefault(_konva);

	var _util = __webpack_require__(6);

	var _eventsJs = __webpack_require__(7);

	var _eventsJs2 = _interopRequireDefault(_eventsJs);

	var Base = (function (_Component) {
	  _inherits(Base, _Component);

	  function Base() {
	    _classCallCheck(this, Base);

	    _Component.apply(this, arguments);
	  }

	  Base.prototype.createKonvaNode = function createKonvaNode() {
	    return new _konva2['default'][this.displayName](this.getValidProps());
	  };

	  Base.prototype.componentDidMount = function componentDidMount() {
	    this.node = this.createKonvaNode();
	    this.updateNodeProps(this.props);
	  };

	  Base.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
	    this.updateNodeProps(newProps, this.props);
	  };

	  Base.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.node.destroy();
	  };

	  Base.prototype.isValidProp = function isValidProp(prop) {
	    return prop !== 'children';
	  };

	  Base.prototype.getValidProps = function getValidProps() {
	    var _this = this;

	    var props = {};

	    Object.keys(this.props).filter(function (prop) {
	      return !_eventsJs2['default'][prop] && _this.isValidProp(prop);
	    }).forEach(function (prop) {
	      return props[prop] = _this.props[prop];
	    });

	    return props;
	  };

	  Base.prototype.updateNodeProps = function updateNodeProps(newProps) {
	    var oldProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var differences = _util.diff(oldProps, newProps);

	    for (var _iterator = differences.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var prop = _ref[0];
	      var type = _ref[1];

	      var _event = _eventsJs2['default'][prop];
	      var value = newProps[prop];

	      if (_event) {
	        // if an event handler prop
	        if (type === 'delete') {
	          this.node.off(_event, value);
	        } else if (type === 'create') {
	          this.node.on(_event, value);
	        } else {
	          this.node.off(_event);
	          this.node.on(_event, value);
	        }
	      } else if (this.isValidProp(prop)) {
	        // if an attribute
	        if (type === 'delete') {
	          this.node.setAttr(prop, null);
	          delete this.node.attrs[prop];
	        } else {
	          this.node.setAttr(prop, value);
	        }
	      }
	    }
	  };

	  Base.prototype.render = function render() {
	    return _react2['default'].createElement('span', null);
	  };

	  return Base;
	})(_react.Component);

	exports['default'] = Base;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.diff = diff;

	function diff(lhs, rhs) {
	  var result = new Map();

	  var properies = new Set([].concat(Object.keys(lhs), Object.keys(rhs)));

	  for (var _iterator = properies, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var property = _ref;

	    if (lhs.hasOwnProperty(property) && !rhs.hasOwnProperty(property)) {
	      result.set(property, 'delete');
	    }

	    if (!lhs.hasOwnProperty(property) && rhs.hasOwnProperty(property)) {
	      result.set(property, 'create');
	    }

	    if (lhs.hasOwnProperty(property) && rhs.hasOwnProperty(property)) {
	      if (lhs[property] !== rhs[property]) {
	        result.set(property, 'update');
	      }
	    }
	  }

	  return result;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  onMouseOver: 'mouseover.react',
	  onMouseOut: 'mouseout.react',
	  onMouseEnter: 'mouseenter.react',
	  onMouseLeave: 'mouseleave.react',
	  onMouseMove: 'mousemove.react',
	  onMouseDown: 'mousedown.react',
	  onMouseUp: 'mouseup.react',
	  onMouseWheel: 'mousewheel.react',
	  onClick: 'click.react',
	  onDblClick: 'dblclick.react',
	  onDragStar: 'dragstart.react',
	  onDragEnd: 'dragend.react',
	  onTouchStart: 'touchstart.react',
	  onTouchMove: 'touchmove.react',
	  onTouchEnd: 'touchend.react',
	  onTap: 'tap.react',
	  onDblTap: 'dbltap.react',
	  onDragMove: 'dragmove.react',
	  onContentClick: 'contentClick.react',
	  onContentMouseOver: 'contentMouseover.react',
	  onContentMouseMove: 'contentMousemove.react',
	  onContentMouseOut: 'contentMouseout.react',
	  onContentMouseDown: 'contentMousedown.react',
	  onContentMouseUp: 'contentMouseup.react',
	  onContentDblClick: 'contentDblclick.react',
	  onContentTouchStart: 'contentTouchstart.react',
	  onContentTouchMove: 'contentTouchmove.react',
	  onContentTouchEnd: 'contentTouchend.react',
	  onContentTap: 'contentTap.react',
	  onContentDblTap: 'contentDblTap.react'
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _abstractContainerComponent = __webpack_require__(9);

	var _abstractContainerComponent2 = _interopRequireDefault(_abstractContainerComponent);

	var Layer = (function (_ContainerComponent) {
	  _inherits(Layer, _ContainerComponent);

	  function Layer() {
	    _classCallCheck(this, Layer);

	    _ContainerComponent.apply(this, arguments);

	    this.displayName = 'Layer';
	  }

	  Layer.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.props.useBatchDraw) {
	      this.node.batchDraw();
	    } else {
	      this.node.draw();
	    }
	  };

	  return Layer;
	})(_abstractContainerComponent2['default']);

	exports['default'] = Layer;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container2 = __webpack_require__(4);

	var _Container3 = _interopRequireDefault(_Container2);

	var ContainerComponent = (function (_Container) {
	  _inherits(ContainerComponent, _Container);

	  function ContainerComponent() {
	    _classCallCheck(this, ContainerComponent);

	    _Container.apply(this, arguments);
	  }

	  ContainerComponent.prototype.componentDidMount = function componentDidMount() {
	    var _Container$prototype$componentDidMount;

	    (_Container$prototype$componentDidMount = _Container.prototype.componentDidMount).call.apply(_Container$prototype$componentDidMount, [this].concat(_slice.call(arguments)));
	    this.context.container.add(this.node);
	  };

	  return ContainerComponent;
	})(_Container3['default']);

	ContainerComponent.contextTypes = {
	  container: _react2['default'].PropTypes.object.isRequired
	};

	exports['default'] = ContainerComponent;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Layer2 = __webpack_require__(8);

	var _Layer3 = _interopRequireDefault(_Layer2);

	var FastLayer = (function (_Layer) {
	  _inherits(FastLayer, _Layer);

	  function FastLayer() {
	    _classCallCheck(this, FastLayer);

	    _Layer.apply(this, arguments);

	    this.displayName = 'FastLayer';
	  }

	  return FastLayer;
	})(_Layer3['default']);

	exports['default'] = FastLayer;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _abstractContainerComponent = __webpack_require__(9);

	var _abstractContainerComponent2 = _interopRequireDefault(_abstractContainerComponent);

	var Group = (function (_ContainerComponent) {
	  _inherits(Group, _ContainerComponent);

	  function Group() {
	    _classCallCheck(this, Group);

	    _ContainerComponent.apply(this, arguments);

	    this.displayName = 'Group';
	  }

	  return Group;
	})(_abstractContainerComponent2['default']);

	exports['default'] = Group;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Arc = (function (_Shape) {
	  _inherits(Arc, _Shape);

	  function Arc() {
	    _classCallCheck(this, Arc);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Arc';
	  }

	  return Arc;
	})(_Shape3['default']);

	exports['default'] = Arc;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _abstractComponent = __webpack_require__(14);

	var _abstractComponent2 = _interopRequireDefault(_abstractComponent);

	var Shape = (function (_Component) {
	  _inherits(Shape, _Component);

	  function Shape() {
	    _classCallCheck(this, Shape);

	    _Component.apply(this, arguments);
	  }

	  return Shape;
	})(_abstractComponent2['default']);

	exports['default'] = Shape;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Base2 = __webpack_require__(5);

	var _Base3 = _interopRequireDefault(_Base2);

	var Component = (function (_Base) {
	  _inherits(Component, _Base);

	  function Component() {
	    _classCallCheck(this, Component);

	    _Base.apply(this, arguments);
	  }

	  Component.prototype.componentDidMount = function componentDidMount() {
	    _Base.prototype.componentDidMount.call(this);
	    this.context.container.add(this.node);
	  };

	  return Component;
	})(_Base3['default']);

	Component.contextTypes = {
	  container: _react2['default'].PropTypes.object.isRequired
	};

	exports['default'] = Component;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Arrow = (function (_Shape) {
	  _inherits(Arrow, _Shape);

	  function Arrow() {
	    _classCallCheck(this, Arrow);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Arrow';
	  }

	  return Arrow;
	})(_Shape3['default']);

	exports['default'] = Arrow;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Circle = (function (_Shape) {
	  _inherits(Circle, _Shape);

	  function Circle() {
	    _classCallCheck(this, Circle);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Circle';
	  }

	  return Circle;
	})(_Shape3['default']);

	exports['default'] = Circle;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Ellipse = (function (_Shape) {
	  _inherits(Ellipse, _Shape);

	  function Ellipse() {
	    _classCallCheck(this, Ellipse);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Ellipse';
	  }

	  return Ellipse;
	})(_Shape3['default']);

	exports['default'] = Ellipse;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Image = (function (_Shape) {
	  _inherits(Image, _Shape);

	  function Image() {
	    _classCallCheck(this, Image);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Image';
	  }

	  return Image;
	})(_Shape3['default']);

	exports['default'] = Image;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _abstractContainerComponent = __webpack_require__(9);

	var _abstractContainerComponent2 = _interopRequireDefault(_abstractContainerComponent);

	var Label = (function (_ContainerComponent) {
	  _inherits(Label, _ContainerComponent);

	  function Label() {
	    _classCallCheck(this, Label);

	    _ContainerComponent.apply(this, arguments);

	    this.displayName = 'Label';
	  }

	  return Label;
	})(_abstractContainerComponent2['default']);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Line = (function (_Shape) {
	  _inherits(Line, _Shape);

	  function Line() {
	    _classCallCheck(this, Line);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Line';
	  }

	  return Line;
	})(_Shape3['default']);

	exports['default'] = Line;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Path = (function (_Shape) {
	  _inherits(Path, _Shape);

	  function Path() {
	    _classCallCheck(this, Path);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Path';
	  }

	  return Path;
	})(_Shape3['default']);

	exports['default'] = Path;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Rect = (function (_Shape) {
	  _inherits(Rect, _Shape);

	  function Rect() {
	    _classCallCheck(this, Rect);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Rect';
	  }

	  return Rect;
	})(_Shape3['default']);

	exports['default'] = Rect;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var RegularPolygon = (function (_Shape) {
	  _inherits(RegularPolygon, _Shape);

	  function RegularPolygon() {
	    _classCallCheck(this, RegularPolygon);

	    _Shape.apply(this, arguments);

	    this.displayName = 'RegularPolygon';
	  }

	  return RegularPolygon;
	})(_Shape3['default']);

	exports['default'] = RegularPolygon;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Ring = (function (_Shape) {
	  _inherits(Ring, _Shape);

	  function Ring() {
	    _classCallCheck(this, Ring);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Ring';
	  }

	  return Ring;
	})(_Shape3['default']);

	exports['default'] = Ring;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Sprite = (function (_Shape) {
	  _inherits(Sprite, _Shape);

	  function Sprite() {
	    _classCallCheck(this, Sprite);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Sprite';
	  }

	  return Sprite;
	})(_Shape3['default']);

	exports['default'] = Sprite;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Star = (function (_Shape) {
	  _inherits(Star, _Shape);

	  function Star() {
	    _classCallCheck(this, Star);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Star';
	  }

	  return Star;
	})(_Shape3['default']);

	exports['default'] = Star;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Tag = (function (_Shape) {
	  _inherits(Tag, _Shape);

	  function Tag() {
	    _classCallCheck(this, Tag);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Tag';
	  }

	  return Tag;
	})(_Shape3['default']);

	exports['default'] = Tag;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Text = (function (_Shape) {
	  _inherits(Text, _Shape);

	  function Text() {
	    _classCallCheck(this, Text);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Text';
	  }

	  return Text;
	})(_Shape3['default']);

	exports['default'] = Text;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var TextPath = (function (_Shape) {
	  _inherits(TextPath, _Shape);

	  function TextPath() {
	    _classCallCheck(this, TextPath);

	    _Shape.apply(this, arguments);

	    this.displayName = 'TextPath';
	  }

	  return TextPath;
	})(_Shape3['default']);

	exports['default'] = TextPath;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Shape2 = __webpack_require__(13);

	var _Shape3 = _interopRequireDefault(_Shape2);

	var Wedge = (function (_Shape) {
	  _inherits(Wedge, _Shape);

	  function Wedge() {
	    _classCallCheck(this, Wedge);

	    _Shape.apply(this, arguments);

	    this.displayName = 'Wedge';
	  }

	  return Wedge;
	})(_Shape3['default']);

	exports['default'] = Wedge;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;