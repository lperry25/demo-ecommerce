webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lauraperry/Documents/codeProjects/demo-ecommerce/components/Products.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({
  domain: 'demo-ecommerce-lpfreelance.myshopify.com',
  storefrontAccessToken: 'e60dee97bff742872f9c9b07b30e8cc2'
});

var Products =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _this;

    _classCallCheck(this, Products);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Products).call(this));
    _this.state = {
      myJson: ''
    };
    return _this;
  }

  _createClass(Products, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchProducts(); // this.fetchStore();
    }
  }, {
    key: "fetchProducts",
    value: function fetchProducts() {
      var _this2 = this;

      // Fetch all products in your shop
      client.product.fetchAll().then(function (products) {
        // Do something with the products
        console.log(products);

        _this2.setState({
          myJson: products
        });
      });
    }
  }, {
    key: "fetchStore",
    value: function fetchStore() {
      var _this3 = this;

      fetch('https://:demo-ecommerce-lpfreelance.myshopify.com/admin/shop.json', {
        method: 'GET',
        headers: {
          '6d9fe90195c14bd17e1c5070b16cb4a4': '17fa79a84c0b7ef4496a48c204c152cc'
        }
      }).then(function (results) {
        return results.json();
      }).then(function (data) {
        //set the json to the state
        _this3.setState({
          myJson: results.json()
        });

        console.log(_this3.state.myJson);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " ", this.state.myJson, " "));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.13af8ad7e44bc0d7babd.hot-update.js.map