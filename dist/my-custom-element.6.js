(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[6],{

/***/ "670e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".messageNotify{width:100%;position:absolute;left:0;top:0;transform:translateY(-100%)}.messageNotify .goEnd{display:flex;justify-content:center;align-items:center;font-size:18px;background-color:#ddd;border-radius:50%;width:35px;height:35px;margin:0 24px 20px auto;opacity:0;transition:opacity .25s ease;pointer-events:none}.messageNotify .goEnd.active{opacity:1;cursor:pointer;pointer-events:auto}.messageNotify .newMsg{height:0;font-size:14px;text-align:center;background-color:hsla(0,0%,86.7%,.231372549);cursor:pointer;transition:heigh .35s ease-out;text-indent:-999999px}.messageNotify .newMsg.active{text-indent:0;padding:6px 0;height:33px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9b6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/MessageNotify.vue?vue&type=template&id=035b5e0f&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "messageNotify"
  }, [_c('div', {
    staticClass: "goEnd",
    class: {
      'active': _vm.leaveEnd
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('b-icon-chevron-down')], 1), _c('div', {
    staticClass: "newMsg",
    class: {
      'active': _vm.isShow
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("您有新訊息")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Message/MessageNotify.vue?vue&type=template&id=035b5e0f&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/MessageNotify.vue?vue&type=script&lang=js&
/* harmony default export */ var MessageNotifyvue_type_script_lang_js_ = ({
  props: {
    leaveEnd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      timer: null
    };
  },
  methods: {
    active() {
      this.isShow = true;
      this.timer = setTimeout(() => {
        this.isShow = false;
      }, 10000);
    },
    handleClick() {
      window.clearTimeout(this.timer);
      this.isShow = false;
      this.$emit('handleClick');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Message/MessageNotify.vue?vue&type=script&lang=js&
 /* harmony default export */ var Message_MessageNotifyvue_type_script_lang_js_ = (MessageNotifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Message/MessageNotify.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("bc54")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Message_MessageNotifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var MessageNotify = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bc54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotify_vue_vue_type_style_index_0_id_035b5e0f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d264");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotify_vue_vue_type_style_index_0_id_035b5e0f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotify_vue_vue_type_style_index_0_id_035b5e0f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotify_vue_vue_type_style_index_0_id_035b5e0f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotify_vue_vue_type_style_index_0_id_035b5e0f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d264":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("670e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("545f243e", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=my-custom-element.6.js.map