(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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
/* harmony import */ var _actions_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/order */ "./resources/js/react/actions/order.js");
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
    orderTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      width: '40%'
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
      flexDirection: 'column'
    },
    orderedProduct: {
      border: '1px solid #dadce0',
      padding: '10px',
      margin: '10px 0px',
      borderRadius: '8px',
      maxHeight: '200px',
      height: '40%',
      minHeight: '100px',
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
    }, '@media(max-width:600px)', {
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
    }, _defineProperty(_productDetails, '@media(max-width:600px)', {
      gridRowStart: '3',
      gridColumnStart: '1',
      gridColumnEnd: '3'
    }), _defineProperty(_productDetails, '& p', {
      display: 'inline-block',
      marginRight: '5px'
    }), _productDetails),
    productPrice: _defineProperty({
      fontWeight: 'bold',
      fontSize: '1.2em',
      textAlign: 'end',
      gridColumnStart: '4'
    }, '@media(max-width:600px)', {
      gridRowStart: '2',
      gridColumnStart: '3',
      textAlign: 'start'
    }),
    orderActions: _defineProperty({
      gridRowStart: '3',
      gridColumnStart: '2'
    }, '@media(max-width:600px)', {
      gridRowStart: '3',
      gridColumnStart: '3'
    }),
    cancelOrderButton: {
      backgroundColor: theme.palette.error.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.error.dark
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.orderTitle
  }, "Orders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        className: classes.cancelOrderButton,
        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null),
        onClick: function onClick() {
          return cancelOrder(orderIndex, productIndex, product.pivot);
        }
      }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.productPrice
      }, "".concat(currency_symbol_map__WEBPACK_IMPORTED_MODULE_5___default()('INR'), " ").concat(Math.round(product.price * product.pivot.quantity))));
    });
  }) : !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No Products here.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, null)
  }, "Shop Now"))))));
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
  getOrders: _actions_order__WEBPACK_IMPORTED_MODULE_2__["getOrders"],
  cancelOrder: _actions_order__WEBPACK_IMPORTED_MODULE_2__["cancelOrder"]
})(Orders));

/***/ })

}]);