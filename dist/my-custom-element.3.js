(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[3],{

/***/ "a484":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_f46e1076_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d232");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_f46e1076_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_f46e1076_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_f46e1076_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_f46e1076_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "af40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ListItem.vue?vue&type=template&id=f46e1076&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.connect ? _c('div', {
    staticClass: "listItem",
    class: {
      'unRead': !_vm.item.isRead
    },
    on: {
      "click": _vm.connect
    }
  }, [_c('div', {
    staticClass: "avatar",
    style: _vm.getAvatar
  }, [_c('OnlineStatus', {
    attrs: {
      "status": _vm.item.isOnline
    }
  })], 1), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "itemUserName"
  }, [_vm._v(_vm._s(_vm.item.userName))]), _c('div', {
    staticClass: "itemUserMsg"
  }, [_vm._v(_vm._s(_vm.item.lastMessage))])]), _c('div', {
    staticClass: "itemInfo"
  }, [_c('div', {
    staticClass: "itemTimestamp"
  }, [_vm._v(_vm._s(_vm.$formatTime(_vm.item.senderTime, 'MM/DD')))])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/ListItem.vue?vue&type=template&id=f46e1076&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ListItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ListItemvue_type_script_lang_js_ = ({
  name: 'ListItem',
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
  components: {
    OnlineStatus: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "9407"))
  },
  computed: {
    getAvatar() {
      // API取列表會拿到，開啟對話後由此參數傳入聊天室，新增聯絡人則從外部處理
      const {
        stickerUrl
      } = this.item;
      return stickerUrl ? `background-image: url(${stickerUrl});` : 'background-color: #212529';
    }
  },
  methods: {
    connect() {
      const {
        conversationID,
        userID,
        userName,
        isOnline
      } = this.item;
      this.$emit('connect', {
        conversationID,
        userID,
        userName,
        isOnline,
        stickerUrl: this.getAvatar
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/ListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ListItemvue_type_script_lang_js_ = (ListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/ListItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("a484")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ListItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var ListItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d232":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fd34");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2af14113", content, shadowRoot)
};

/***/ }),

/***/ "fd34":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".listItem{padding:8px 12px;display:flex;align-items:start;border-radius:4px;cursor:pointer}.listItem.unRead{background-color:#fbfbfb;font-weight:600}.listItem.unRead:hover,.listItem:hover{background-color:#f7f7f7}.listItem .avatar{width:36px;height:36px;border-radius:50%;margin-right:8px;margin-top:6px;position:relative;background-size:cover;background-position:50%}.listItem .item{font-size:14px;width:calc(100% - 86px)}.listItem .item .itemUserName{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding-right:4px;margin-bottom:6px}.listItem .item .itemUserMsg{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:140px}.listItem .itemInfo{width:30px;padding-right:6px}.listItem .itemInfo .itemTimestamp{font-size:12px;margin-bottom:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:50px}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=my-custom-element.3.js.map