(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[8],{

/***/ "5d71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Textarea.vue?vue&type=template&id=5c2c14a6&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-form-textarea', {
    ref: "autoResizeTextarea",
    attrs: {
      "id": "cus-textarea",
      "placeholder": "請輸入..."
    },
    on: {
      "compositionstart": function ($event) {
        _vm.isTyping = true;
      },
      "compositionend": function ($event) {
        _vm.isTyping = false;
      },
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) return null;
        $event.preventDefault();
        return _vm.handleKeyEnter.apply(null, arguments);
      },
      "update": _vm.autoResize
    },
    model: {
      value: _vm.valueInner,
      callback: function ($$v) {
        _vm.valueInner = typeof $$v === 'string' ? $$v.trim() : $$v;
      },
      expression: "valueInner"
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Textarea.vue?vue&type=template&id=5c2c14a6&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Textarea.vue?vue&type=script&lang=js&
/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: () => null
    }
  },
  data() {
    return {
      isTyping: false
    };
  },
  computed: {
    valueInner: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    setEmptyHeight() {
      this.$refs.autoResizeTextarea.$el.style.maxHeight = '38px';
    },
    autoResize() {
      const DOM = this.$refs.autoResizeTextarea.$el;
      let DOMScrHeight = DOM.scrollHeight;
      DOM.style.height = 0;
      DOM.style.height = DOM.scrollHeight < 40 ? '38px' : `${DOMScrHeight}px`;
      if (DOMScrHeight > 156) {
        DOM.style.maxHeight = '156px';
      } else if (DOMScrHeight > 80) {
        DOM.style.maxHeight = `${DOMScrHeight - 24}px`;
      } else if (DOMScrHeight < 40) {
        DOM.style.maxHeight = '38px';
      } else {
        DOM.style.maxHeight = `${DOMScrHeight}px`;
      }
    },
    handleKeyEnter() {
      if (!this.isTyping && this.valueInner) {
        this.$emit('handleEnter', this.valueInner);
        this.setEmptyHeight();
        this.valueInner = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Textarea.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("68e5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Textarea = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "68e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_style_index_0_id_5c2c14a6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("836c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_style_index_0_id_5c2c14a6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_style_index_0_id_5c2c14a6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_style_index_0_id_5c2c14a6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_style_index_0_id_5c2c14a6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "836c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a9e9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2c4ae28f", content, shadowRoot)
};

/***/ }),

/***/ "a9e9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#cus-textarea{height:38px;max-height:156px;resize:none;overflow-y:auto;white-space:pre-line}#cus-textarea::-webkit-scrollbar{background:#eee;width:8px}#cus-textarea::-webkit-scrollbar-thumb{background-color:#bbb;border-radius:8px}#cus-textarea::-webkit-scrollbar-thumb:hover{background-color:#999}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=my-custom-element.8.js.map