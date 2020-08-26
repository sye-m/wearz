(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/react/components/order/ConfirmOrder.js":
/*!*************************************************************!*\
  !*** ./resources/js/react/components/order/ConfirmOrder.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/order */ "./resources/js/react/actions/order.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    ordersShippingContainer: {
      width: '100%',
      minHeight: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    orderShippingTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      width: '100%',
      borderBottom: '1px solid lightgray'
    },
    displayShippingDetails: {
      margin: '20px 0px',
      width: '85%',
      minHeight: '100%',
      padding: '20px',
      minWidth: '300px',
      border: '1px solid lightgray',
      borderRadius: '10px'
    },
    formInput: {
      border: '0',
      margin: '0',
      padding: '0',
      position: 'relative',
      minWidth: '0',
      verticalAlign: 'top',
      display: 'block',
      flex: 'none',
      color: 'black',
      marginBottom: '30px'
    },
    shippingAddress: {
      width: '45%',
      padding: '0px 2%',
      borderRight: '1px solid lightgray',
      '@media(max-width:800px)': {
        order: '1',
        width: '100%',
        padding: '2% 0px',
        borderRight: '0px'
      }
    },
    customerAddress: {
      width: '45%',
      padding: '0px 2%',
      '@media(max-width:800px)': {
        order: '2',
        width: '100%',
        padding: '2% 0px',
        borderBottom: '1px solid lightgray'
      }
    },
    customerAddressTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold'
    },
    shippingAddressTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold'
    },
    addressInformation: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  };
});

var ConfirmOrder = function ConfirmOrder(_ref) {
  var user = _ref.auth.user,
      history = _ref.history,
      orderProducts = _ref.orderProducts,
      getOrderedProducts = _ref.getOrderedProducts;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fromCookieGetProducts = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var orderedProducts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!user) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return getOrderedProducts();

              case 3:
                orderedProducts = _context.sent;

                //check if the user has already selected products to buy if not then redirect them to cart page
                if (orderedProducts.length === 0) {
                  history.push('/cart');
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fromCookieGetProducts() {
        return _ref2.apply(this, arguments);
      };
    }();

    fromCookieGetProducts();
  }, [user]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sameAsDefaultAddress = _useState2[0],
      setSameAsDefaultAddress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    addrLine1: '',
    addrLine2: '',
    landmark: '',
    state: '',
    zipCode: '',
    phone: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      shippingAddressForm = _useState4[0],
      setShippingAddressForm = _useState4[1]; //set the address form state


  var onShippingInputChange = function onShippingInputChange(e) {
    setShippingAddressForm(_objectSpread(_objectSpread({}, shippingAddressForm), {}, _defineProperty({}, e.target.name, e.target.value)));
  }; //set the shipping address as the user's default address


  var setShippingAsDefaultAddress = function setShippingAsDefaultAddress() {
    var ifDefaultAddress = !sameAsDefaultAddress;
    setShippingAddress(ifDefaultAddress);
    setSameAsDefaultAddress(ifDefaultAddress);
  }; //set the shipping address form state


  var setShippingAddress = function setShippingAddress(ifDefaultAddress) {
    setShippingAddressForm({
      name: ifDefaultAddress ? user.defaultAddress.name : '',
      addrLine1: ifDefaultAddress ? user.defaultAddress.address_line_1 : '',
      addrLine2: ifDefaultAddress ? user.defaultAddress.address_line_2 : '',
      landmark: ifDefaultAddress ? user.defaultAddress.landmark : '',
      state: ifDefaultAddress ? user.defaultAddress.state : '',
      zipCode: ifDefaultAddress ? user.defaultAddress.zip_code : '',
      phone: ifDefaultAddress ? user.defaultAddress.phone : ''
    });
  };

  var orderConfirmed = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var orderedProducts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return getOrderedProducts();

            case 3:
              orderedProducts = _context2.sent;
              orderProducts(orderedProducts, shippingAddressForm, sameAsDefaultAddress);
              history.push('/orders');

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function orderConfirmed(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var name = shippingAddressForm.name,
      addrLine1 = shippingAddressForm.addrLine1,
      addrLine2 = shippingAddressForm.addrLine2,
      landmark = shippingAddressForm.landmark,
      state = shippingAddressForm.state,
      zipCode = shippingAddressForm.zipCode,
      phone = shippingAddressForm.phone;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.ordersShippingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.displayShippingDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.orderShippingTitle
  }, "Shipping Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.addressInformation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.shippingAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.shippingAddressTitle
  }, "Shipping Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    autoComplete: "off",
    onSubmit: orderConfirmed
  }, user && user.defaultAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onChange: setShippingAsDefaultAddress,
      name: "defaultAddressCheckbox"
    }),
    label: "Same as Current Address"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "name",
    label: "Building Name",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "addrLine1",
    label: "Address Line 1",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: addrLine1,
    autoComplete: "shipping address-line1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "addrLine2",
    label: "Address Line 2",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: addrLine2,
    autoComplete: "shipping address-line2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    name: "landmark",
    label: "Landmark",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: landmark
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "state",
    label: "State",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: state,
    autoComplete: "shipping address-level1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "zipCode",
    label: "Zip Code",
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: zipCode,
    autoComplete: "shipping postal-code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: sameAsDefaultAddress,
    type: "tel",
    fullWidth: true,
    className: classes.formInput,
    name: "phone",
    label: "Phone No.",
    placeholder: "888 888 8888",
    pattern: "[0-9]{3} [0-9]{3} [0-9]{4}",
    maxLength: "12",
    title: "Ten digits code",
    required: true,
    variant: "outlined",
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    value: phone,
    autoComplete: "tel"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Confirm Order"), " \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "default",
    type: "reset",
    disabled: sameAsDefaultAddress
  }, "Clear Form"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.customerAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.customerAddressTitle
  }, "Current Address"), user && user.defaultAddress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Name:", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Phone: ", user.defaultAddress.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Addresss: ", "".concat(user.defaultAddress.name, " ").concat(user.defaultAddress.address_line_1, " ").concat(user.defaultAddress.address_line_2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "".concat(user.defaultAddress.state, " ").concat(user.defaultAddress.zip_code))) : 'No address'))));
};

ConfirmOrder.propTypes = {
  orderProducts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  orderProducts: _actions_order__WEBPACK_IMPORTED_MODULE_5__["orderProducts"],
  getOrderedProducts: _actions_order__WEBPACK_IMPORTED_MODULE_5__["getOrderedProducts"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ConfirmOrder)));

/***/ })

}]);