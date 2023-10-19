(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[4],{

/***/ "0dcc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".listItem[data-v-1f30ee99]{padding:4px 12px;display:flex;align-items:start;border-radius:4px;cursor:pointer}.listItem.unRead[data-v-1f30ee99]{background-color:#fbfbfb;font-weight:600}.listItem.unRead[data-v-1f30ee99]:hover,.listItem[data-v-1f30ee99]:hover{background-color:#f7f7f7}.listItem .avatar[data-v-1f30ee99]{width:36px;height:36px;border-radius:50%;background-color:#212529;margin-right:8px;margin-top:6px;position:relative}.listItem .item[data-v-1f30ee99]{font-size:14px;width:calc(100% - 86px)}.listItem .item .itemUserName[data-v-1f30ee99]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding-right:4px;margin-bottom:6px}.listItem .item .itemUserMsg[data-v-1f30ee99]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:140px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1367":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/List/HoCS.vue?vue&type=template&id=1f30ee99&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "listItem",
    on: {
      "click": _vm.connect
    }
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('OnlineStatus', {
    attrs: {
      "status": ""
    }
  })], 1), _vm._m(0)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "itemUserName"
  }, [_vm._v("HoHo客服中心")]), _c('div', {
    staticClass: "itemUserMsg"
  }, [_vm._v("聯繫我")])]);
}];

// CONCATENATED MODULE: ./src/components/List/HoCS.vue?vue&type=template&id=1f30ee99&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/List/HoCS.vue?vue&type=script&lang=js&
/* harmony default export */ var HoCSvue_type_script_lang_js_ = ({
  name: 'ListItem',
  components: {
    OnlineStatus: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "9407"))
  },
  props: {
    userID: {
      type: String,
      default: () => null
    },
    item: {
      type: Object,
      default: () => null
    }
  },
  computed: {},
  methods: {
    connect() {
      alert('連線客服！');
      // const { conversationID, userID, userName, isOnline } = this.item;
      // this.$emit('connect', { conversationID, userID, userName, isOnline });
    }
  }
});
// CONCATENATED MODULE: ./src/components/List/HoCS.vue?vue&type=script&lang=js&
 /* harmony default export */ var List_HoCSvue_type_script_lang_js_ = (HoCSvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/List/HoCS.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("4bc4")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  List_HoCSvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f30ee99",
  null
  ,true
)

/* harmony default export */ var HoCS = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4642":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0dcc");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("47bfdcbb", content, shadowRoot)
};

/***/ }),

/***/ "4bc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoCS_vue_vue_type_style_index_0_id_1f30ee99_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4642");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoCS_vue_vue_type_style_index_0_id_1f30ee99_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoCS_vue_vue_type_style_index_0_id_1f30ee99_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoCS_vue_vue_type_style_index_0_id_1f30ee99_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoCS_vue_vue_type_style_index_0_id_1f30ee99_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);
//# sourceMappingURL=my-custom-element.4.js.map