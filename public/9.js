(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js");
/* harmony import */ var _internal_svg_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _internal_svg_icons_CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/CheckBox */ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _internal_svg_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/IndeterminateCheckBox */ "./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_CheckBox__WEBPACK_IMPORTED_MODULE_8__["default"], null);
var defaultIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__["default"], null);
var defaultIndeterminateIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_10__["default"], null);
var Checkbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Checkbox(props, ref) {
  var _props$checkedIcon = props.checkedIcon,
      checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$icon = props.icon,
      iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
      inputProps = props.inputProps,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);

  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__["default"])(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](icon, {
      fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref: ref
  }, other));
});
 true ? Checkbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'secondary']),

  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the checkbox.
   * `small` is equivalent to the dense checkbox styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles, {
  name: 'MuiCheckbox'
})(Checkbox));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Checkbox/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Checkbox/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));

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

/***/ }),

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
/* harmony import */ var _actions_orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/orders */ "./resources/js/react/actions/orders.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _forms_AddressForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../forms/AddressForm */ "./resources/js/react/components/forms/AddressForm.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











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
      borderBottom: '1px solid #dadce0',
      padding: '10px 0px'
    },
    displayShippingDetails: {
      margin: '20px 0px',
      width: '85%',
      minHeight: '100%',
      padding: '20px',
      minWidth: '300px',
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
      '@media(max-width:800px)': {
        order: '2',
        width: '100%',
        padding: '2% 0px',
        borderRight: '0px'
      }
    },
    customerAddress: {
      width: '45%',
      padding: '0px 2%',
      '@media(max-width:800px)': {
        order: '1',
        width: '100%',
        padding: '2% 0px',
        borderBottom: '1px solid #dadce0'
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
    var fromCookieGetProducts = function fromCookieGetProducts() {
      if (user) {
        var orderedProducts = getOrderedProducts(); //check if the user has already selected products to buy if not then redirect them to cart page

        if (orderedProducts.length === 0) {
          history.push('/cart');
        }
      }
    };

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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var orderedProducts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return getOrderedProducts();

            case 3:
              orderedProducts = _context.sent;
              orderProducts(orderedProducts, shippingAddressForm, sameAsDefaultAddress);
              history.push('/orders');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function orderConfirmed(_x) {
      return _ref2.apply(this, arguments);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.orderShippingTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Shipping Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.addressInformation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.shippingAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.shippingAddressTitle
  }, "Shipping Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    autoComplete: "off",
    onSubmit: orderConfirmed
  }, user && user.defaultAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onChange: setShippingAsDefaultAddress,
      name: "defaultAddressCheckbox"
    }),
    label: "Same as Current Address"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_forms_AddressForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    formButtonText: "Confirm Order",
    sameAsDefaultAddress: sameAsDefaultAddress,
    onChange: function onChange(e) {
      return onShippingInputChange(e);
    },
    address: shippingAddressForm
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.customerAddress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.customerAddressTitle
  }, "Current Address"), user && user.defaultAddress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Name:", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Phone: ", user.defaultAddress.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Addresss: ", "".concat(user.defaultAddress.name, " ").concat(user.defaultAddress.address_line_1, " ").concat(user.defaultAddress.address_line_2, " ").concat(user.defaultAddress.landmark && user.defaultAddress.landmark)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "".concat(user.defaultAddress.state, " ").concat(user.defaultAddress.zip_code))) : 'No address'))));
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
  orderProducts: _actions_orders__WEBPACK_IMPORTED_MODULE_5__["orderProducts"],
  getOrderedProducts: _actions_orders__WEBPACK_IMPORTED_MODULE_5__["getOrderedProducts"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ConfirmOrder)));

/***/ })

}]);