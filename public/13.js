(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@material-ui/icons/AddShoppingCart.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddShoppingCart.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
}), 'AddShoppingCart');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/currency-symbol-map/currency-symbol-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/currency-symbol-map/currency-symbol-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var currencySymbolMap = __webpack_require__(/*! ./map */ "./node_modules/currency-symbol-map/map.js")

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined
  var code = currencyCode.toUpperCase()
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined
  return currencySymbolMap[code]
}

module.exports.currencySymbolMap = currencySymbolMap


/***/ }),

/***/ "./node_modules/currency-symbol-map/map.js":
/*!*************************************************!*\
  !*** ./node_modules/currency-symbol-map/map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': '֏',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': '$b',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'Br',
  'BYN': 'Br',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'CHF',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': 'лв',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MRO': 'UM',
  'MRU': 'UM',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'STN': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
}


/***/ }),

/***/ "./resources/js/react/components/order/Orders.js":
/*!*******************************************************!*\
  !*** ./resources/js/react/components/order/Orders.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/orders */ "./resources/js/react/actions/orders.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! currency-symbol-map */ "./node_modules/currency-symbol-map/currency-symbol-map.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loaders_CircularLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../loaders/CircularLoader */ "./resources/js/react/components/loaders/CircularLoader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _productDetails;

  return {
    ordersContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    displayOrders: {
      width: '85%',
      minHeight: '100%',
      padding: '20px',
      minWidth: '300px',
      borderRadius: '10px'
    },
    ordersDescription: {
      display: 'flex',
      fontWeight: 'bold',
      borderBottom: '1px solid #dadce0'
    },
    orders: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '10px'
    },
    orderedProduct: {
      border: '1px solid #dadce0',
      padding: '10px',
      margin: '10px 0px',
      borderRadius: '8px',
      maxHeight: '270px',
      height: '30%',
      minHeight: '200px',
      display: 'grid',
      gap: '1em',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
      borderBottom: '1px solid lightgray'
    },
    productImage: _defineProperty({
      width: '100%',
      minWidth: '200px',
      maxWidth: '300px',
      maxHeight: '200px',
      height: '100%',
      gridColumnStart: '1',
      gridColumnEnd: '1',
      gridRowStart: '1',
      gridRowEnd: '4',
      '& img': {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px'
      }
    }, '@media(max-width:650px)', {
      minWidth: '100px',
      gridRowEnd: '3',
      gridRowStart: '1',
      gridColumnStart: '1',
      gridColumnEnd: '3'
    }),
    productName: {
      fontSize: '1.2em',
      textDecoration: 'none',
      color: 'black'
    },
    productDetails: (_productDetails = {
      gridRowStart: '2',
      gridColumnStart: '2'
    }, _defineProperty(_productDetails, '@media(max-width:650px)', {
      gridRowStart: '3',
      gridColumnStart: '1',
      gridColumnEnd: '3'
    }), _defineProperty(_productDetails, '& p', {
      display: 'inline',
      marginRight: '5px'
    }), _productDetails),
    productPrice: _defineProperty({
      fontWeight: 'bold',
      fontSize: '1.2em',
      textAlign: 'end',
      gridColumnStart: '4'
    }, '@media(max-width:650px)', {
      gridRowStart: '2',
      gridColumnStart: '3',
      textAlign: 'start'
    }),
    orderActions: _defineProperty({
      gridRowStart: '3',
      gridColumnStart: '2',
      gridColumnEnd: '4',
      display: 'flex'
    }, '@media(max-width:650px)', {
      gridRowStart: '3',
      gridColumnStart: '3',
      display: 'block'
    }),
    cancelOrderButton: {
      backgroundColor: theme.palette.error.main,
      width: '100px',
      height: '40px',
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      }
    },
    viewOrderDetails: {
      padding: '10px',
      display: 'flex',
      width: '80px',
      height: '20px',
      whiteSpace: 'nowrap',
      borderRadius: '4px',
      textDecoration: 'none',
      border: '1px solid #6a1b9a',
      color: '#000000',
      margin: '0px 10px 10px 0px'
    },
    productsLink: {
      padding: '10px',
      display: 'flex',
      width: 'fit-content',
      borderRadius: '4px',
      textDecoration: 'none',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      margin: '10px 0px',
      '& svg': {
        fontSize: '1.2rem'
      }
    }
  };
});

var Orders = function Orders(_ref) {
  var user = _ref.auth.user,
      _ref$orders = _ref.orders,
      products = _ref$orders.products,
      loading = _ref$orders.loading,
      getOrders = _ref.getOrders,
      cancelOrder = _ref.cancelOrder;
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getOrders();
  }, [user]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.ordersContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.displayOrders
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.ordersDescription
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.orders
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loaders_CircularLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    loading: loading
  }), products.length > 0 ? products.map(function (order, orderIndex) {
    return order.map(function (product, productIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.orderedProduct,
        key: productIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.productImage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: product.image,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/product/".concat(product.id),
        className: classes.productName
      }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.productDetails
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Size:", product.pivot.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Quantity:", product.pivot.quantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.orderActions
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: classes.viewOrderDetails,
        to: "/orders/view_order?order_id=".concat(product.pivot.order_id, "&ordered_product_id=").concat(product.pivot.id)
      }, "View Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        className: classes.cancelOrderButton,
        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null),
        onClick: function onClick() {
          return cancelOrder(orderIndex, productIndex, product.pivot);
        }
      }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.productPrice
      }, "".concat(currency_symbol_map__WEBPACK_IMPORTED_MODULE_5___default()('INR'), " ").concat(Math.round(product.pivot.price * product.pivot.quantity))));
    });
  }) : !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No Products here.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/products",
    className: classes.productsLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Shop Now"))))));
};

Orders.propTypes = {
  orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    orders: state.orders,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getOrders: _actions_orders__WEBPACK_IMPORTED_MODULE_2__["getOrders"],
  cancelOrder: _actions_orders__WEBPACK_IMPORTED_MODULE_2__["cancelOrder"]
})(Orders));

/***/ })

}]);