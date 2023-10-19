(window["myCustomElement_jsonp"] = window["myCustomElement_jsonp"] || []).push([[10],{

/***/ "0418":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15e303f5-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=48ef0a9e&lang=pug&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header"
  }, [_vm.targetPerson.conversationID ? _c('div', {
    staticClass: "headerLeft"
  }, [_c('div', {
    staticClass: "px-2 d-lg-none"
  }, [_c('b-icon-chevron-left', {
    staticClass: "mr-2 mt-2",
    on: {
      "click": function ($event) {
        return _vm.$emit('back');
      }
    }
  })], 1), _c('div', {
    staticClass: "avatar",
    style: _vm.targetPerson.stickerUrl
  }, [_c('OnlineStatus', {
    attrs: {
      "status": _vm.targetPerson.isOnline
    }
  })], 1), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.targetPerson.userName))]), _c('div', {
    staticClass: "infoIcon"
  })]) : _vm._e(), _c('b-icon-x', {
    staticClass: "ml-auto headerRight d-none",
    class: {
      'd-lg-block': !_vm.isFullScreen
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=48ef0a9e&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    OnlineStatus: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "9407"))
  },
  props: {
    targetPerson: {
      type: Object,
      default: () => {
        return {
          conversationID: '',
          userName: '',
          isOnline: false,
          stickerUrl: ''
        };
      }
    },
    isFullScreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=my-custom-element.10.js.map