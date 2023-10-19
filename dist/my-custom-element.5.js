(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[5],{

/***/ "3139":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f4e1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("27b2cbb0", content, shadowRoot)
};

/***/ }),

/***/ "ba45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageItem.vue?vue&type=template&id=51c92bce&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "messageItem",
    class: [{
      'isMyMsg': _vm.isMyMsg
    }, {
      'videoStyle': _vm.isVideo
    }]
  }, [_c('div', {
    staticClass: "itemContent"
  }, [_vm.isText ? _c('span', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.item.message.text))]) : _vm.isImg ? _c('div', {
    staticClass: "position-relative",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('b-spinner', {
    attrs: {
      "variant": "primary",
      "label": "Spinning"
    }
  })], 1) : _vm._e(), _c('img', {
    directives: [{
      name: "viewer",
      rawName: "v-viewer",
      value: {
        title: false,
        navbar: false
      },
      expression: "{ title: false, navbar: false }"
    }],
    staticClass: "contentImg",
    class: {
      'd-none': _vm.isNoExists
    },
    attrs: {
      "src": _vm.item.message.url
    },
    on: {
      "load": _vm.imgLoaded,
      "error": _vm.imgError
    }
  }), _vm.isNoExists ? _c('div', {
    staticClass: "notExists"
  }, [_vm._v("圖片已失效")]) : _vm._e()]) : _vm.isVideo ? _c('b-embed', {
    attrs: {
      "type": "video",
      "aspect": "16by9",
      "controls": "",
      "poster": "poster.png",
      "src": _vm.item.message.url
    }
  }, [_c('source', {
    attrs: {
      "src": "dev-stories.webm",
      "type": "video/webm"
    }
  }), _c('source', {
    attrs: {
      "src": "dev-stories.mp4",
      "type": "video/mp4"
    }
  })]) : _c('a', {
    attrs: {
      "href": _vm.item.message.url,
      "target": "_blank",
      "download": ""
    }
  }, [_vm._v(_vm._s(_vm.item.message.fileName))])], 1), _c('div', {
    staticClass: "itemInfo"
  }, [_c('div', {
    staticClass: "itemStatus"
  }, [_vm._v(_vm._s(_vm.isMyMsg && _vm.item.isRead ? '已讀' : ''))]), _c('div', {
    staticClass: "itemTimestamp"
  }, [_vm._v(_vm._s(_vm.$formatTime(_vm.item.senderTime, 'h:mm')))])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageItem.vue?vue&type=template&id=51c92bce&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageItem.vue?vue&type=script&lang=js&
/* harmony default export */ var MessageItemvue_type_script_lang_js_ = ({
  name: 'MessageItem',
  props: {
    item: {
      type: Object,
      default: () => null
    },
    userID: {
      type: String,
      default: () => null
    }
  },
  data() {
    return {
      isNoExists: false,
      isLoading: true
    };
  },
  computed: {
    isText() {
      return this.item.messageType === 1;
    },
    isImg() {
      return this.item.messageType === 2;
    },
    isVideo() {
      return this.item.messageType === 3;
    },
    isMyMsg() {
      return this.item.senderID === this.userID;
    }
  },
  methods: {
    imgError() {
      this.isLoading = false;
      this.isNoExists = true;
    },
    imgLoaded() {
      this.isLoading = false;
    }
  },
  beforeMount() {
    if (!this.isImg) this.isLoading = false;
  }
});
// CONCATENATED MODULE: ./src/components/MessageItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MessageItemvue_type_script_lang_js_ = (MessageItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/MessageItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("e3b9")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MessageItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var MessageItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e3b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_51c92bce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3139");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_51c92bce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_51c92bce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_51c92bce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_style_index_0_id_51c92bce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "f4e1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".messageItem{display:flex;width:50%;align-items:flex-end}.messageItem.isMyMsg{flex-direction:row-reverse;margin-left:auto}.messageItem.isMyMsg .itemContent{margin-right:0;margin-left:6px;background-color:rgba(255,206,0,.1411764706)}.messageItem.videoStyle{width:300px}.messageItem.videoStyle .itemContent{width:100%}.messageItem .itemContent{max-width:100%;word-wrap:break-word;line-height:1;padding:8px;border:1px solid #ddd;border-radius:4px;margin-right:6px}.messageItem .itemContent .contentImg{width:100%;height:70px;min-height:70px;cursor:pointer}.messageItem .itemContent .content{white-space:pre-line}.messageItem .itemContent .notExists{color:#a7a7a7}.messageItem .itemInfo{font-size:12px;color:#a7a7a7;display:flex;flex-direction:column;line-height:1;margin-bottom:2px;white-space:nowrap}.messageItem .itemInfo .itemStatus{height:12px;margin-bottom:4px}.messageItem .itemInfo .itemTimestamp{height:12px}.messageItem .loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.messageItem .loading .spinner-border{width:20px;height:20px}.viewer-footer{bottom:30px}.viewer-footer .viewer-next,.viewer-footer .viewer-one-to-one,.viewer-footer .viewer-play,.viewer-footer .viewer-prev{display:none}.viewer-footer .viewer-toolbar li+li{margin-left:8px}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=my-custom-element.5.js.map