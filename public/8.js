(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@material-ui/icons/Close.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Close.js ***!
  \**************************************************/
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FilterList.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/FilterList.js ***!
  \*******************************************************/
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
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), 'FilterList');

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

/***/ "./resources/js/react/actions/brand.js":
/*!*********************************************!*\
  !*** ./resources/js/react/actions/brand.js ***!
  \*********************************************/
/*! exports provided: getBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./resources/js/react/actions/types.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getBrands = function getBrands() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res, brands;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get('/getBrands');

            case 3:
              res = _context.sent;
              brands = res.data.brands;
              dispatch({
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["SET_BRANDS"],
                payload: brands
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              dispatch(setAlert('Something went wrong try reloading the page', 'error'));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/react/actions/productTypes.js":
/*!****************************************************!*\
  !*** ./resources/js/react/actions/productTypes.js ***!
  \****************************************************/
/*! exports provided: getProductTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductTypes", function() { return getProductTypes; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./resources/js/react/actions/types.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./resources/js/react/actions/alert.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getProductTypes = function getProductTypes() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res, productTypes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get('/getProductTypes');

            case 3:
              res = _context.sent;
              productTypes = res.data.productTypes;
              dispatch({
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["SET_PRODUCT_TYPES"],
                payload: productTypes
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_2__["setAlert"])('Something went wrong try reloading the page', 'error'));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/react/actions/products.js":
/*!************************************************!*\
  !*** ./resources/js/react/actions/products.js ***!
  \************************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./resources/js/react/actions/types.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./resources/js/react/actions/alert.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getProducts = function getProducts() {
  var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var brands = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var types = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var price = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res, products;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch({
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["LOADING_PRODUCTS"]
              });
              _context.next = 4;
              return axios.get("/getProducts?searchTerm=".concat(searchTerm, "&brands=").concat(brands, "&types=").concat(types));

            case 4:
              res = _context.sent;
              products = res.data.filteredProducts;
              dispatch({
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["SET_PRODUCTS"],
                payload: products
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_2__["setAlert"])('Error displaying the products', 'error'));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/react/components/layouts/ProductFilters.js":
/*!*****************************************************************!*\
  !*** ./resources/js/react/components/layouts/ProductFilters.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/brand */ "./resources/js/react/actions/brand.js");
/* harmony import */ var _actions_productTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/productTypes */ "./resources/js/react/actions/productTypes.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    productFiltersContainer: _defineProperty({
      display: 'flex',
      flexDirection: 'column'
    }, '@media(max-width:700px)', {}),
    brandFilter: _defineProperty({}, '@media(max-width:700px)', {
      width: '100%',
      '& p': {
        textAlign: 'center'
      },
      '& div': {
        display: 'flex',
        flexDirection: 'row'
      }
    }),
    productTypeFilter: _defineProperty({}, '@media(max-width:700px)', {
      width: '100%',
      '& p': {
        textAlign: 'center'
      },
      '& div': {
        display: 'flex',
        flexDirection: 'row'
      }
    }),
    closeFiltersButton: _defineProperty({
      display: 'inline',
      width: '50px',
      height: '50px',
      position: 'absolute',
      right: '0px',
      top: '0.5%',
      border: '1px solid lightgray',
      background: '#ba68c8',
      color: '#fff',
      '&:hover': {
        background: 'rgb(130, 72, 140)'
      }
    }, '@media(min-width:700px)', {
      display: 'none'
    }),
    title: {
      fontSize: '1.5em',
      marginLeft: '1em',
      fontWeight: 'bold'
    }
  };
});

var ProductFilters = function ProductFilters(_ref) {
  var selectedFilters = _ref.selectedFilters,
      brands = _ref.brands,
      productTypes = _ref.productTypes,
      history = _ref.history,
      getBrands = _ref.getBrands,
      getProductTypes = _ref.getProductTypes;
  var initialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getBrands(); //initial load will trigger functions to fetch the brands and productTypes since they are the needed for filters 

    getProductTypes();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setBrandsNamesState(); //set brandNames state when the brands prop changes since the change is async
  }, [brands]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setProductTypesState(); //set productTypesNames state when the productTypes prop changes since the change is async
  }, [productTypes]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      brandNames = _useState2[0],
      setBrandNames = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      productTypesNames = _useState4[0],
      setProductTypesNames = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (initialMount.current) {
      initialMount.current = false; //don't filter products on initial mount
    } else {
      filterProducts(); //filter products as soon as the any filter is selected
    }
  }, [brandNames, productTypesNames]);

  var setBrandsNamesState = function setBrandsNamesState() {
    var brandNamesObject = Object.fromEntries(brands.map(function (brand) {
      //get the filters from the query that are already entered and set them to true in the state
      if (selectedFilters.brands.includes(brand.name)) {
        return [brand.name, true];
      } else {
        return [brand.name, false];
      }
    }));
    setBrandNames(_objectSpread({}, brandNamesObject));
  };

  var setProductTypesState = function setProductTypesState() {
    var productTypesObject = Object.fromEntries(productTypes.map(function (type) {
      //get the filters from the query that are already entered and set them to true in the state
      if (selectedFilters.types.includes(type.name)) {
        return [type.name, true];
      } else {
        return [type.name, false];
      }
    }));
    setProductTypesNames(_objectSpread({}, productTypesObject));
  };

  var hideFilters = function hideFilters() {
    document.getElementById('filters').style.display = "none";
    document.body.style.overflow = "auto";
  };

  var onBrandChange = function onBrandChange(e) {
    var removedFilter = selectedFilters.brands.indexOf(e.target.name);

    if (removedFilter > -1) {
      selectedFilters.brands.splice(removedFilter, 1);
    }

    setBrandNames(_objectSpread(_objectSpread({}, brandNames), {}, _defineProperty({}, e.target.name, !brandNames[e.target.name])));
  };

  var onProductTypeChange = function onProductTypeChange(e) {
    var removedFilter = selectedFilters.types.indexOf(e.target.name);

    if (removedFilter > -1) {
      selectedFilters.types.splice(removedFilter, 1);
    }

    setProductTypesNames(_objectSpread(_objectSpread({}, productTypesNames), {}, _defineProperty({}, e.target.name, !productTypesNames[e.target.name])));
  };

  var filterProducts = function filterProducts() {
    if (Object.entries(brandNames).length > 0 && Object.entries(productTypesNames).length > 0) {
      var query = query_string__WEBPACK_IMPORTED_MODULE_9___default.a.parse(location.search);
      var searchTerm = query.searchTerm ? query.searchTerm : '';
      var brandNamesArray = Object.keys(brandNames);
      var productTypesNamesArray = Object.keys(productTypesNames);
      var selectedBrands = brandNamesArray.filter(function (key) {
        //if user is redirected from home page by selecting a brand set the filter to true
        if (selectedFilters.brands.includes(key)) {
          return true;
        }

        return brandNames[key];
      });
      var selectedTypes = productTypesNamesArray.filter(function (key) {
        //if user is redirected from home page by selecting a brand set the filter to true
        if (selectedFilters.types.includes(key)) {
          return true;
        }

        return productTypesNames[key];
      });
      var searchTermQuery = '';
      var brandsQuery = '';
      var typesQuery = ''; //set the search term query

      if (searchTerm.length > 0) {
        searchTermQuery = '?searchTerm=' + searchTerm;
      } //if other filter is present


      if (searchTermQuery.length > 0 && selectedBrands.length > 0) {
        brandsQuery = "&brands=" + selectedBrands;
      } //if only brands filter is selected
      else if (searchTermQuery.length <= 0 && selectedBrands.length > 0) {
          brandsQuery = "?brands=".concat(selectedBrands);
        } //if any other filter is selected


      if ((searchTermQuery.length > 0 || selectedBrands.length > 0) && selectedTypes.length > 0) {
        typesQuery = "&types=" + selectedTypes;
      } //if only product types filter is selected
      else if (searchTermQuery.length <= 0 && selectedBrands.length <= 0 && selectedTypes.length > 0) {
          typesQuery = "?types=".concat(selectedTypes);
        }

      var filterQueryString = "/products".concat(searchTermQuery).concat(brandsQuery).concat(typesQuery);
      history.push(filterQueryString);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.productFiltersContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: hideFilters,
    "aria-label": "close",
    color: "secondary",
    className: classes.closeFiltersButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.brandFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Brands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__["default"], null, brands.map(function (brand, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        checked: brandNames[brand.name] || false,
        onChange: onBrandChange,
        name: brand.name
      }),
      label: brand.name
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.productTypeFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Shoes Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__["default"], null, productTypes.map(function (type, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        checked: productTypesNames[type.name] || false,
        onChange: onProductTypeChange,
        name: type.name
      }),
      label: type.name
    });
  }))));
};

ProductFilters.propTypes = {
  getBrands: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  getProductTypes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  brands: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  productTypes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  selectedFilters: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    brands: state.brand,
    productTypes: state.productType
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getBrands: _actions_brand__WEBPACK_IMPORTED_MODULE_2__["getBrands"],
  getProductTypes: _actions_productTypes__WEBPACK_IMPORTED_MODULE_3__["getProductTypes"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ProductFilters)));

/***/ }),

/***/ "./resources/js/react/components/products/DisplayProducts.js":
/*!*******************************************************************!*\
  !*** ./resources/js/react/components/products/DisplayProducts.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! currency-symbol-map */ "./node_modules/currency-symbol-map/currency-symbol-map.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _loaders_CircularLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../loaders/CircularLoader */ "./resources/js/react/components/loaders/CircularLoader.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    productsDisplayContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: '100%',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      position: 'relative'
    },
    productCard: _defineProperty({
      height: '40%',
      width: '43%',
      margin: '1em',
      minWidth: '200px',
      maxWidth: '450px',
      minHeight: '350px',
      maxHeight: '400px'
    }, '@media(max-width:700px)', {
      width: '100%',
      height: '40%',
      minHeight: '300px',
      maxHeight: '400px'
    }),
    productImage: {
      height: '60%'
    },
    productContent: {
      display: 'flex'
    },
    productPrice: {
      width: '40%',
      padding: '16px',
      fontWeight: 'bold',
      textAlign: 'end'
    },
    productDescription: {
      width: '60%'
    }
  };
});

var DisplayProducts = function DisplayProducts(_ref) {
  var history = _ref.history,
      _ref$products = _ref.products,
      loading = _ref$products.loading,
      products = _ref$products.products;
  var classes = useStyles();

  var viewProduct = function viewProduct(product) {
    history.push("/product/".concat(product.id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.productsDisplayContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loaders_CircularLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading
  }), products.length > 0 ? products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: function onClick() {
        viewProduct(product);
      },
      className: classes.productCard,
      variant: "outlined",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.productImage,
      image: product.image,
      title: product.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.productContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.productDescription
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, product.brand.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, product.type.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.productPrice
    }, "".concat(currency_symbol_map__WEBPACK_IMPORTED_MODULE_5___default()('INR'), " ").concat(product.price))));
  }) : !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "0 matching products"));
};

DisplayProducts.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(DisplayProducts)));

/***/ }),

/***/ "./resources/js/react/components/products/Products.js":
/*!************************************************************!*\
  !*** ./resources/js/react/components/products/Products.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/products */ "./resources/js/react/actions/products.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DisplayProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DisplayProducts */ "./resources/js/react/components/products/DisplayProducts.js");
/* harmony import */ var _layouts_ProductFilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/ProductFilters */ "./resources/js/react/components/layouts/ProductFilters.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    productsContainer: {
      display: 'flex',
      minHeight: '100%'
    },
    options: _defineProperty({
      width: '24%',
      height: 'fit-content',
      borderRight: '1px solid lightgray',
      padding: '2%',
      maxWidth: '250px',
      minWidth: '120px'
    }, '@media(max-width:700px)', {
      display: 'none',
      width: '94%',
      maxWidth: '100%',
      position: 'absolute',
      background: '#fff',
      zIndex: '111',
      border: 'none'
    }),
    products: {
      minHeight: '100%',
      width: '100%'
    },
    filtersButton: _defineProperty({
      display: 'none',
      margin: '10px'
    }, '@media(max-width:700px)', {
      display: 'inline'
    })
  };
});

var Products = function Products(_ref) {
  var location = _ref.location,
      getProducts = _ref.getProducts;
  var checkedFilters = {
    brands: [],
    types: []
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var query = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.parse(location.search);
    var searchTerm = query.searchTerm ? query.searchTerm : '';
    var brands = query.brands ? query.brands : '';
    var types = query.types ? query.types : '';
    selectedFilters(brands, types);
    getProducts(searchTerm, brands, types);
  }, [location]);

  var selectedFilters = function selectedFilters(brands, types) {
    checkedFilters.brands = brands.split(',');
    checkedFilters.types = types.split(',');
  };

  var showFilters = function showFilters() {
    document.getElementById('filters').style.display = "inline";
    document.body.style.overflow = "hidden";
  };

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.productsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.options,
    id: "filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_ProductFilters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedFilters: checkedFilters
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.products
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: showFilters,
    variant: "contained",
    color: "secondary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default.a, null),
    className: classes.filtersButton
  }, "Filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayProducts__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  getProducts: _actions_products__WEBPACK_IMPORTED_MODULE_5__["getProducts"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Products)));

/***/ })

}]);