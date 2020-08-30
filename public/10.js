(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./resources/js/react/components/layouts/FeaturedProductsBanner.js":
/*!*************************************************************************!*\
  !*** ./resources/js/react/components/layouts/FeaturedProductsBanner.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _actions_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../actions/alert */ "./resources/js/react/actions/alert.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


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
    bannerImage: {
      width: '100%',
      display: 'none',
      height: '100%',
      minHeight: '300px',
      maxHeight: '500px',
      objectFit: 'cover'
    },
    bannerContainer: {
      height: '50%',
      minHeight: '300px',
      maxHeight: '500px',
      width: '100%',
      position: 'relative'
    },
    prevImageButton: {
      position: 'absolute',
      top: '50%',
      left: ' 1%',
      borderRadius: '50%',
      color: '#fff',
      minHeight: '50px',
      width: '50px',
      minWidth: '50px',
      fontSize: '1.2rem',
      boxShadow: '0px 0px 10px 3px #7b7575'
    },
    nextImageButton: {
      position: 'absolute',
      top: '50%',
      right: ' 1%',
      color: '#fff',
      boxShadow: '0px 0px 10px 3px #7b7575',
      borderRadius: '50%',
      minHeight: '50px',
      width: '50px',
      minWidth: '50px',
      fontSize: '1.2rem'
    }
  };
});

var FeaturedProductsBanner = function FeaturedProductsBanner(prop) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getFeaturedProducts = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/getFeaturedProducts');

              case 3:
                res = _context.sent;
                setFeaturedProducts(res.data.featuredProducts);
                showDivs(1);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                Object(_actions_alert__WEBPACK_IMPORTED_MODULE_5__["setAlert"])('Error loading page try reloading the page', 'error');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function getFeaturedProducts() {
        return _ref.apply(this, arguments);
      };
    }();

    getFeaturedProducts();
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      featuredProducts = _useState2[0],
      setFeaturedProducts = _useState2[1];

  var slideIndex = 1;

  var plusDivs = function plusDivs(n) {
    showDivs(slideIndex += n);
  };

  var showDivs = function showDivs(n) {
    var i = 0;
    var x = document.getElementsByClassName(classes.bannerImage);

    if (x.length > 0) {
      if (n > x.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = x.length;
      }

      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

      x[slideIndex - 1].style.display = "inline-block";
    }
  };

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.bannerContainer
  }, featuredProducts.length > 0 && featuredProducts.map(function (featuredProduct, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      key: index,
      to: "/product/".concat(featuredProduct.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      title: featuredProduct.name,
      className: classes.bannerImage,
      src: featuredProduct.image,
      alt: featuredProduct.name
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.prevImageButton,
    onClick: function onClick() {
      return plusDivs(-1);
    }
  }, "\u276E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.nextImageButton,
    onClick: function onClick() {
      return plusDivs(1);
    }
  }, "\u276F"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedProductsBanner);

/***/ }),

/***/ "./resources/js/react/components/layouts/ItemSlider.js":
/*!*************************************************************!*\
  !*** ./resources/js/react/components/layouts/ItemSlider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _itemImage;

  return {
    itemImage: (_itemImage = {
      display: 'block',
      borderRadius: '50%',
      flexShrink: '0'
    }, _defineProperty(_itemImage, "display", 'block'), _defineProperty(_itemImage, "border", '1px solid #9d8f8f'), _defineProperty(_itemImage, "borderRadius", '50%'), _defineProperty(_itemImage, "maxWidth", '70%'), _defineProperty(_itemImage, "maxHeight", '75%'), _defineProperty(_itemImage, "minHeight", '70%'), _defineProperty(_itemImage, "objectFit", 'cover'), _itemImage),
    itemContainer: {
      maxWidth: '20%',
      maxHeight: '20%',
      minWidth: '200px',
      minHeight: '200px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden !important',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#000000',
      position: 'relative'
    },
    carousel: {
      height: '90%',
      width: '100%',
      display: 'flex',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    prevButton: {
      right: '0.5%',
      position: 'absolute',
      top: '30%',
      borderRadius: '50%',
      border: '1px solid lightgray',
      minWidth: '50px',
      height: '50px'
    },
    nextButton: {
      left: '0.5%',
      position: 'absolute',
      top: '30%',
      borderRadius: '50%',
      border: '1px solid lightgray',
      minWidth: '50px',
      height: '50px'
    },
    itemSliderContainer: {
      position: 'relative',
      overflow: 'hidden'
    }
  };
});

var ItemSlider = function ItemSlider(_ref) {
  var itemType = _ref.itemType,
      items = _ref.items;
  var classes = useStyles();

  var prev = function prev() {
    var firstItem = document.getElementById("".concat(itemType, "carousel"));
    var left = window.innerHeight / 11;
    firstItem.scrollLeft += left * 2;
  };

  var next = function next() {
    var firstItem = document.getElementById("".concat(itemType, "carousel"));
    var left = window.innerHeight / 11;
    firstItem.scrollLeft -= left * 2;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.itemSliderContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.carousel,
    id: "".concat(itemType, "carousel")
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/products?".concat(itemType, "=").concat(item.name, ","),
      key: index,
      style: {
        left: '0'
      },
      className: classes.itemContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.image,
      alt: item.name + "logo",
      className: classes.itemImage
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classes.itemName
    }, item.name, " "));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.prevButton,
    onClick: function onClick() {
      return prev();
    }
  }, "\u276F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.nextButton,
    onClick: function onClick() {
      return next();
    }
  }, "\u276E"));
};

ItemSlider.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemSlider);

/***/ }),

/***/ "./resources/js/react/components/layouts/Landing.js":
/*!**********************************************************!*\
  !*** ./resources/js/react/components/layouts/Landing.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeaturedProductsBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedProductsBanner */ "./resources/js/react/components/layouts/FeaturedProductsBanner.js");
/* harmony import */ var _products_AllBrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/AllBrands */ "./resources/js/react/components/products/AllBrands.js");
/* harmony import */ var _products_ProductTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/ProductTypes */ "./resources/js/react/components/products/ProductTypes.js");





var Landing = function Landing(prop) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeaturedProductsBanner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_products_AllBrands__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_products_ProductTypes__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./resources/js/react/components/products/AllBrands.js":
/*!*************************************************************!*\
  !*** ./resources/js/react/components/products/AllBrands.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../actions/brand */ "./resources/js/react/actions/brand.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _layouts_ItemSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../layouts/ItemSlider */ "./resources/js/react/components/layouts/ItemSlider.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    allBrandsContainer: {
      height: '50%',
      maxHeight: '300px'
    },
    title: {
      fontSize: '1.5em',
      marginLeft: '1em',
      fontWeight: 'bold'
    }
  };
});

var AllBrands = function AllBrands(_ref) {
  var brands = _ref.brands,
      getBrands = _ref.getBrands;
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getBrands();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.allBrandsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.title
  }, "Shop By Brands"), brands.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_ItemSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    itemType: "brands",
    items: brands
  }));
};

AllBrands.propTypes = {
  brands: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    brands: state.brand
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getBrands: _actions_brand__WEBPACK_IMPORTED_MODULE_3__["getBrands"]
})(AllBrands));

/***/ }),

/***/ "./resources/js/react/components/products/ProductTypes.js":
/*!****************************************************************!*\
  !*** ./resources/js/react/components/products/ProductTypes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_productTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../actions/productTypes */ "./resources/js/react/actions/productTypes.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _layouts_ItemSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../layouts/ItemSlider */ "./resources/js/react/components/layouts/ItemSlider.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    allProductTypesContainer: {
      minHeight: '50%',
      maxHeight: '300px'
    },
    title: {
      fontSize: '1.5em',
      marginLeft: '1em',
      fontWeight: 'bold'
    }
  };
});

var ProductTypes = function ProductTypes(_ref) {
  var productTypes = _ref.productTypes,
      getProductTypes = _ref.getProductTypes;
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getProductTypes();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.allProductTypesContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.title
  }, "Shop By Shoe Type"), productTypes.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_ItemSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    itemType: "types",
    items: productTypes
  }));
};

ProductTypes.propTypes = {
  productTypes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    productTypes: state.productType
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProductTypes: _actions_productTypes__WEBPACK_IMPORTED_MODULE_3__["getProductTypes"]
})(ProductTypes));

/***/ })

}]);