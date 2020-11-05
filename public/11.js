(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@material-ui/icons/Add.js":
/*!************************************************!*\
  !*** ./node_modules/@material-ui/icons/Add.js ***!
  \************************************************/
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

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

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Info.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Info.js ***!
  \*************************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.default = _default;

/***/ }),

/***/ "./resources/js/react/components/user/ViewUser.js":
/*!********************************************************!*\
  !*** ./resources/js/react/components/user/ViewUser.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../actions/auth */ "./resources/js/react/actions/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _ref;

  return _ref = {
    viewUserContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    displayUser: {
      margin: '20px 0px',
      width: '85%',
      minHeight: '100%',
      minWidth: '300px',
      borderRadius: '10px'
    },
    userDescription: {
      display: 'flex',
      fontWeight: 'bold',
      padding: '10px 0px',
      borderBottom: '1px solid #dadce0'
    },
    userTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold'
    },
    userDetails: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    defaultAddressContainer: {
      border: '1px solid #dadce0',
      padding: '10px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column'
    },
    manageAddressContainer: {
      border: '1px solid #dadce0',
      padding: '0px 10px 10px 10px',
      margin: '10px',
      borderRadius: '8px',
      minWidth: '350px'
    }
  }, _defineProperty(_ref, "defaultAddressContainer", {
    border: '1px solid #dadce0',
    padding: '0px 10px 10px 10px',
    margin: '10px',
    borderRadius: '8px',
    '& span': {
      display: 'block'
    }
  }), _defineProperty(_ref, "contactInfoContainer", {
    border: '1px solid #dadce0',
    padding: '0px 10px 10px 10px',
    margin: '10px',
    borderRadius: '8px',
    '& span': {
      display: 'block'
    }
  }), _defineProperty(_ref, "addressOptionContainer", {
    display: 'flex',
    margin: '10px 0px',
    '& label': {
      marginRight: '0px',
      width: '70%'
    }
  }), _defineProperty(_ref, "addressOptions", {
    '& span': {
      display: '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  }), _defineProperty(_ref, "editAddressButton", {
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    },
    '& svg': {
      width: '0.8em',
      height: '0.9em'
    },
    borderRadius: '50%',
    margin: '5px',
    alignItems: 'center',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center'
  }), _defineProperty(_ref, "deleteAddressButton", {
    width: '12%',
    minWidth: '20px',
    minHeight: '20px',
    maxWidth: '40px',
    maxHeight: '40px',
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    },
    margin: '5px'
  }), _defineProperty(_ref, "addAddressLink", {
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
  }), _defineProperty(_ref, "addressSelectionHelperText", {
    marginBottom: '10px',
    '& svg': {
      top: '6px',
      position: 'relative'
    }
  }), _ref;
});

var ViewUser = function ViewUser(_ref2) {
  var _ref2$auth = _ref2.auth,
      user = _ref2$auth.user,
      loading = _ref2$auth.loading,
      editDefaultAddress = _ref2.editDefaultAddress,
      deleteAddress = _ref2.deleteAddress,
      loadUser = _ref2.loadUser;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadUser();
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(user && user.defaultAddress && user.defaultAddress.id),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var classes = useStyles();

  var onAddressChange = function onAddressChange(e) {
    var newValue = parseInt(e.target.value);
    setValue(newValue);
    editDefaultAddress(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.viewUserContainer
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.displayUser
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.userDescription
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.userTitle
  }, "User Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.userDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contactInfoContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Contact Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Name"), ":", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Email-Id"), ": ", user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultAddressContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Default Address"), user.defaultAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Residence Name"), ": ", user.defaultAddress.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Addresss"), ": ", "".concat(user.defaultAddress.name, " ").concat(user.defaultAddress.address_line_1, " ").concat(user.defaultAddress.address_line_2, " ").concat(user.defaultAddress.landmark && user.defaultAddress.landmark, " ").concat(user.defaultAddress.state, " ").concat(user.defaultAddress.zip_code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Phone"), ": ", user.defaultAddress.phone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.manageAddressContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Manage Addresses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.addressSelectionHelperText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Select an address to set it as default address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "addresses",
    name: "addressses",
    value: value,
    onChange: onAddressChange
  }, user.addresses.length > 0 && user.addresses.map(function (address, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.addressOptionContainer,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.addressOptions,
      value: address.id,
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__["default"], null),
      label: "".concat(address.name, " ").concat(address.address_line_1, " ").concat(address.address_line_2, " ").concat(address.landmark && address.landmark, " ").concat(address.state, " ").concat(address.zip_code, " ").concat(address.phone)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: classes.editAddressButton,
      title: "Edit",
      to: "".concat(user.name, "/address?a=").concat(address.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, null)), //if this is user's default address don't show the delete button 
    user.defaultAddress && user.defaultAddress.id != address.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "Delete",
      className: classes.deleteAddressButton,
      "aria-label": "delete",
      onClick: function onClick() {
        return deleteAddress(address.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12___default.a, null)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: classes.addAddressLink,
    to: "".concat(user.name, "/new_address"),
    title: "Add Address"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Add Address")))))));
};

ViewUser.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  editDefaultAddress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  editDefaultAddress: _actions_auth__WEBPACK_IMPORTED_MODULE_4__["editDefaultAddress"],
  loadUser: _actions_auth__WEBPACK_IMPORTED_MODULE_4__["loadUser"],
  deleteAddress: _actions_auth__WEBPACK_IMPORTED_MODULE_4__["deleteAddress"]
})(ViewUser));

/***/ })

}]);