(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[9],{

/***/ "88a6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".uploadFile[data-v-64d3c194]{display:flex;align-items:center;justify-content:center;color:#007bff;transition:.15s ease-in-out}.uploadFile svg[data-v-64d3c194]{padding:4px;width:36px;height:36px;cursor:pointer}.uploadFile[data-v-64d3c194]:hover{color:#0062cc}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8a99":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UploadFile.vue?vue&type=template&id=64d3c194&scoped=true&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "uploadFile"
  }, [_c('b-icon-link45deg', {
    on: {
      "click": _vm.uploadFile
    }
  }, [_vm._v("上傳檔案")]), _c('input', {
    ref: "uploader",
    staticClass: "d-none",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChanged
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/UploadFile.vue?vue&type=template&id=64d3c194&scoped=true&lang=pug&

// EXTERNAL MODULE: ./node_modules/heic2any/dist/heic2any.js
var heic2any = __webpack_require__("4c45");
var heic2any_default = /*#__PURE__*/__webpack_require__.n(heic2any);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UploadFile.vue?vue&type=script&lang=js&

/* harmony default export */ var UploadFilevue_type_script_lang_js_ = ({
  props: {
    maxSize: {
      type: Number,
      default: 10240000 // 10mb
    },

    limitType: {
      type: [Array, String],
      default: () => ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']
    }
  },
  data() {
    return {
      file: null // 更新圖片的formData
    };
  },

  methods: {
    uploadFile() {
      console.log('上傳檔案');
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      const vm = this;
      if (e.target.files[0]) {
        if (e.target.files[0].size > 10240000) {
          vm.$_errorHandler(402);
          return;
        }
        vm.file = e.target.files[0];
        if (vm.isHeic(vm.file)) {
          // ios圖檔類型
          console.log('isHeic');
          heic2any_default()({
            blob: vm.file,
            toType: "image/jpeg",
            quality: 0.1
          }).then(function (resultBlob) {
            resultBlob.name = vm.file.name.split(".")[0] + ".jpeg";
            vm.file = resultBlob;
            vm.$emit('finish', resultBlob);
            vm.clearFileInput();
          });
        } else {
          vm.$emit('finish', vm.file);
          vm.clearFileInput();
        }
      }
    },
    isHeic: function (file) {
      const name = file.name.toLowerCase() || file.src.toLowerCase();
      return name.includes('heic') || name.includes('heif');
    },
    clearFileInput() {
      this.$refs.uploader.value = null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/UploadFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UploadFilevue_type_script_lang_js_ = (UploadFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/UploadFile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("d049")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UploadFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64d3c194",
  null
  ,true
)

/* harmony default export */ var UploadFile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d049":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_64d3c194_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1e0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_64d3c194_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_64d3c194_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_64d3c194_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFile_vue_vue_type_style_index_0_id_64d3c194_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d1e0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("88a6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7a3d8c79", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=my-custom-element.9.js.map