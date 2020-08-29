(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/react/components/address/EditAddress.js":
/*!**************************************************************!*\
  !*** ./resources/js/react/components/address/EditAddress.js ***!
  \**************************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _forms_AddressForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../forms/AddressForm */ "./resources/js/react/components/forms/AddressForm.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/auth */ "./resources/js/react/actions/auth.js");


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









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    editAddressContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    displayAddress: {
      width: '85%',
      minHeight: '100%',
      minWidth: '300px',
      borderRadius: '10px'
    },
    addressDescription: {
      display: 'flex',
      fontWeight: 'bold',
      borderBottom: '1px solid lightgray'
    },
    addressForm: {
      marginTop: '15px'
    }
  };
});

var EditAddress = function EditAddress(_ref) {
  var location = _ref.location,
      updateAddress = _ref.updateAddress;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getAddress = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(addressId) {
        var res, address;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/getAddress/".concat(addressId));

              case 2:
                res = _context.sent;
                address = res.data.address;
                setAddress({
                  id: address.id,
                  name: address ? address.name : '',
                  addrLine1: address ? address.address_line_1 : '',
                  addrLine2: address ? address.address_line_2 : '',
                  landmark: address ? address.landmark : '',
                  state: address ? address.state : '',
                  zipCode: address ? address.zip_code : '',
                  phone: address ? address.phone : ''
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getAddress(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var query = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.parse(location.search);
    console.log(query);
    getAddress(query.a);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    id: '',
    name: '',
    addrLine1: '',
    addrLine2: '',
    landmark: '',
    state: '',
    zipCode: '',
    phone: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      address = _useState2[0],
      setAddress = _useState2[1];

  var onAddressInputChange = function onAddressInputChange(e) {
    setAddress(_objectSpread(_objectSpread({}, address), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var editAddress = function editAddress(e) {
    e.preventDefault();
    updateAddress(address);
  };

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.editAddressContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.displayAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.addressDescription
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Edit Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.addressForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: editAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_AddressForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    formButtonText: "Save changes",
    address: address,
    sameAsDefaultAddress: null,
    onChange: function onChange(e) {
      return onAddressInputChange(e);
    }
  })))));
};

EditAddress.propTypes = {
  updateAddress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  updateAddress: _actions_auth__WEBPACK_IMPORTED_MODULE_8__["updateAddress"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(EditAddress)));

/***/ }),

/***/ "./resources/js/react/components/forms/AddressForm.js":
/*!************************************************************!*\
  !*** ./resources/js/react/components/forms/AddressForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
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
      marginBottom: '15px'
    }
  };
});

var AddressForm = function AddressForm(_ref) {
  var formButtonText = _ref.formButtonText,
      address = _ref.address,
      onChange = _ref.onChange,
      sameAsDefaultAddress = _ref.sameAsDefaultAddress;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 60
    },
    disabled: sameAsDefaultAddress,
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "name",
    label: "Building Name",
    variant: "outlined",
    onChange: onChange,
    value: address.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 60
    },
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "addrLine1",
    label: "Address Line 1",
    variant: "outlined",
    onChange: onChange,
    value: address.addrLine1,
    autoComplete: "shipping address-line1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 60
    },
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "addrLine2",
    label: "Address Line 2",
    variant: "outlined",
    onChange: onChange,
    value: address.addrLine2,
    autoComplete: "shipping address-line2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 60
    },
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    name: "landmark",
    label: "Landmark",
    variant: "outlined",
    onChange: onChange,
    value: address.landmark
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 60
    },
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "state",
    label: "State",
    variant: "outlined",
    onChange: onChange,
    value: address.state,
    autoComplete: "shipping address-level1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 6
    },
    disabled: sameAsDefaultAddress,
    type: "text",
    fullWidth: true,
    className: classes.formInput,
    required: true,
    name: "zipCode",
    label: "Zip Code",
    variant: "outlined",
    onChange: onChange,
    value: address.zipCode,
    placeholder: "6 digits [0-9] PIN code",
    autoComplete: "shipping postal-code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputProps: {
      maxLength: 10
    },
    disabled: sameAsDefaultAddress,
    type: "tel",
    fullWidth: true,
    className: classes.formInput,
    name: "phone",
    required: true,
    variant: "outlined",
    label: "Phone No.",
    onChange: onChange,
    value: address.phone,
    placeholder: "10 digits number without prefixes",
    autoComplete: "tel"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, formButtonText), " \xA0");
};

AddressForm.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AddressForm);

/***/ })

}]);