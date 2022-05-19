/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\nfunction _regeneratorRuntime() {\n  \"use strict\";\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n      Op = Object.prototype,\n      hasOwn = Op.hasOwnProperty,\n      $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n      iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n      asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n      toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n        generator = Object.create(protoGenerator.prototype),\n        context = new Context(tryLocsList || []);\n    return generator._invoke = function (innerFn, self, context) {\n      var state = \"suspendedStart\";\n      return function (method, arg) {\n        if (\"executing\" === state) throw new Error(\"Generator is already running\");\n\n        if (\"completed\" === state) {\n          if (\"throw\" === method) throw arg;\n          return doneResult();\n        }\n\n        for (context.method = method, context.arg = arg;;) {\n          var delegate = context.delegate;\n\n          if (delegate) {\n            var delegateResult = maybeInvokeDelegate(delegate, context);\n\n            if (delegateResult) {\n              if (delegateResult === ContinueSentinel) continue;\n              return delegateResult;\n            }\n          }\n\n          if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n            if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n            context.dispatchException(context.arg);\n          } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n          state = \"executing\";\n          var record = tryCatch(innerFn, self, context);\n\n          if (\"normal\" === record.type) {\n            if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n            return {\n              value: record.arg,\n              done: context.done\n            };\n          }\n\n          \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n        }\n      };\n    }(innerFn, self, context), generator;\n  }\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {}\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n      NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n            value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n\n      reject(record.arg);\n    }\n\n    var previousPromise;\n\n    this._invoke = function (method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    };\n  }\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          for (; ++i < iterable.length;) {\n            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n          }\n\n          return next.value = undefined, next.done = !0, next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    return {\n      next: doneResult\n    };\n  }\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n            record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n              hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      }\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\n\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://eslint/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://eslint/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\n\n\n//# sourceURL=webpack://eslint/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./js/module/accordion.js":
/*!********************************!*\
  !*** ./js/module/accordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  var acordionList = document.querySelectorAll(\"[data-anime='accordion'] dt\");\n  acordionList[0].classList.add(\"active\");\n  acordionList[0].nextElementSibling.classList.add(\"active\");\n\n  if (acordionList.length) {\n    var handleAccordion = function handleAccordion(_ref) {\n      var target = _ref.target;\n      // acordionList.forEach((item) => {\n      //   item.classList.remove(\"active\");\n      //   item.nextElementSibling.classList.remove(\"active\");\n      // })\n      target.classList.toggle(\"active\");\n      target.nextElementSibling.classList.toggle(\"active\");\n    };\n\n    acordionList.forEach(function (item) {\n      item.addEventListener(\"click\", handleAccordion);\n    });\n  }\n}\n\n//# sourceURL=webpack://eslint/./js/module/accordion.js?");

/***/ }),

/***/ "./js/module/animationScroll.js":
/*!**************************************!*\
  !*** ./js/module/animationScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\n  var sections = document.querySelectorAll(\"[data-anime='scroll']\");\n\n  if (sections.length) {\n    var windowHalf = window.innerHeight * 0.6;\n    sections[0].classList.add(\"active\");\n\n    var animaScroll = function animaScroll() {\n      sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n        var isSectionVisible = sectionTop - windowHalf < 0;\n\n        if (isSectionVisible) {\n          section.classList.add(\"active\");\n        } else if (section.classList.contains(\"active\")) {\n          section.classList.remove(\"active\");\n        }\n      });\n    };\n\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n//# sourceURL=webpack://eslint/./js/module/animationScroll.js?");

/***/ }),

/***/ "./js/module/dropDown.js":
/*!*******************************!*\
  !*** ./js/module/dropDown.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _outSide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSide.js */ \"./js/module/outSide.js\");\n\nfunction initDropdown() {\n  var dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleDropdown(ev) {\n    var _this = this;\n\n    ev.preventDefault();\n    ev.currentTarget.classList.add(\"active\");\n    (0,_outSide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], function () {\n      _this.classList.remove(\"active\");\n    });\n  }\n\n  dropDownMenus.forEach(function (menu) {\n    [\"touchstart\", \"click\"].forEach(function (eventName) {\n      menu.addEventListener(eventName, handleDropdown);\n    });\n  });\n}\n\n//# sourceURL=webpack://eslint/./js/module/dropDown.js?");

/***/ }),

/***/ "./js/module/fetchAnimais.js":
/*!***********************************!*\
  !*** ./js/module/fetchAnimais.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numbers.js */ \"./js/module/numbers.js\");\n\n\n\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animaisResp, animais, gridNumbers;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(url);\n\n            case 3:\n              animaisResp = _context.sent;\n              _context.next = 6;\n              return animaisResp.json();\n\n            case 6:\n              animais = _context.sent;\n              gridNumbers = document.querySelector(\".gridNumbers\");\n              animais.forEach(function (animal) {\n                var animalSpecies = createElement(animal.specie, animal.total);\n                gridNumbers.appendChild(animalSpecies);\n              });\n              (0,_numbers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n\n  var createElement = function createElement(name, numbers) {\n    var div = document.createElement(\"div\");\n    var h3 = document.createElement(\"h3\");\n    var span = document.createElement(\"span\");\n    div.classList.add(\"animalNumber\");\n    h3.innerText = name;\n    span.innerText = numbers;\n    span.setAttribute(\"data-number\", \"\");\n    div.appendChild(h3);\n    div.appendChild(span);\n    return div;\n  };\n\n  fetchAnimais(\"./dataAnimais.json\");\n}\n\n//# sourceURL=webpack://eslint/./js/module/fetchAnimais.js?");

/***/ }),

/***/ "./js/module/fetchBtc.js":
/*!*******************************!*\
  !*** ./js/module/fetchBtc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction initFetchBtc() {\n  function fetchBtc(_x) {\n    return _fetchBtc.apply(this, arguments);\n  }\n\n  function _fetchBtc() {\n    _fetchBtc = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var btcResp, bitcoinJson, _btcPreco;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(url);\n\n            case 3:\n              btcResp = _context.sent;\n              _context.next = 6;\n              return btcResp.json();\n\n            case 6:\n              bitcoinJson = _context.sent;\n              _btcPreco = document.querySelector(\".btcPreco\");\n              _btcPreco.innerText = \"R$ \".concat((1000 / bitcoinJson.BRL.sell).toFixed(4));\n              _context.next = 15;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              btcPreco.innerText = \"Erro ao buscar o valor do BitCoin\";\n              console.log(_context.t0);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n    return _fetchBtc.apply(this, arguments);\n  }\n\n  fetchBtc(\"https://blockchain.info/ticker\");\n}\n\n//# sourceURL=webpack://eslint/./js/module/fetchBtc.js?");

/***/ }),

/***/ "./js/module/funcionamento.js":
/*!************************************!*\
  !*** ./js/module/funcionamento.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamentoDia = document.querySelector('[data-semana]');\n  var diasDaSemana = funcionamentoDia.dataset.semana.split(',').map(Number);\n  var funcionamentoHora = funcionamentoDia.dataset.horario.split(',').map(Number);\n  var diaAgora = new Date().getDay();\n  var horaAgora = new Date().getHours();\n  var diaUtil = diasDaSemana.indexOf(diaAgora) !== -1;\n  var horaUtil = horaAgora >= funcionamentoHora[0] && horaAgora < funcionamentoHora[1];\n  diaUtil && horaUtil ? funcionamentoDia.classList.add('opening') : funcionamentoDia.classList.add('closed'); // console.log(diaUtil)\n  // console.log(horaUtil)\n  // console.table(diasDaSemana)\n  // console.table(funcionamentoHora)\n  // console.log(diaAgora)\n  // console.log(horaAgora)\n} // const agora = new Date();\n// agora;\n// // Semana Mês Dia Ano HH:MM:SS GMT\n// agora.getDate() // Dia\n// agora.getDay() // Dia da Semana ex: 5 = Fri\n// agora.getMonth() // Número dia mês\n// agora.getFullYear() // Ano\n// agora.getHours() // Hora\n// agora.getMinutes() // Minutos\n// agora.getTime() // ms desde 1970\n// agora.getUTCHours() - 3 // Brasília\n// const agora = new Date();\n// agora.getTime(); //\n// // total de dias desde 1 de janeiro de 1970\n// const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);\n// const agora = new Date();\n// const promocao = new Date('December 24 2018 23:59');\n// function converterEmDias(time) {\n//   return time / (24 * 60 * 60 * 1000);\n// }\n// const diasAgora = converterEmDias(agora);\n// const diasPromocao = converterEmDias(promocao);\n// const faltam = diasPromocao - diasAgora;\n\n//# sourceURL=webpack://eslint/./js/module/funcionamento.js?");

/***/ }),

/***/ "./js/module/menuMobile.js":
/*!*********************************!*\
  !*** ./js/module/menuMobile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outSide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSide.js */ \"./js/module/outSide.js\");\n\nfunction initMenuMobile() {\n  var menuBtn = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var events = [\"click\", \"touchstart\"];\n\n  if (menuBtn) {\n    var openMenu = function openMenu() {\n      menuList.classList.add(\"active\");\n      menuBtn.classList.add(\"active\");\n      (0,_outSide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, function () {\n        menuList.classList.remove(\"active\");\n        menuBtn.classList.remove(\"active\");\n      });\n    };\n\n    events.forEach(function (ev) {\n      return menuBtn.addEventListener(ev, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://eslint/./js/module/menuMobile.js?");

/***/ }),

/***/ "./js/module/modal.js":
/*!****************************!*\
  !*** ./js/module/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var btnOpen = document.querySelector('[data-modal=\"open\"]');\n  var btnClose = document.querySelector('[data-modal=\"close\"]');\n  var modalContainer = document.querySelector(\".modalContainer\");\n\n  if (btnClose && btnClose && modalContainer) {\n    var handleModalToggle = function handleModalToggle(ev) {\n      ev.preventDefault();\n      modalContainer.classList.toggle(\"active\");\n    };\n\n    var outSideClick = function outSideClick(_ref) {\n      var target = _ref.target;\n      target.closest(\".modal\") ? null : modalContainer.classList.remove(\"active\");\n    };\n\n    btnOpen.onclick = handleModalToggle;\n    btnClose.onclick = handleModalToggle;\n    modalContainer.onclick = outSideClick;\n  }\n}\n\n//# sourceURL=webpack://eslint/./js/module/modal.js?");

/***/ }),

/***/ "./js/module/numbers.js":
/*!******************************!*\
  !*** ./js/module/numbers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumbers)\n/* harmony export */ });\nfunction initNumbers() {\n  var dataNumbers = document.querySelectorAll(\"[data-number]\");\n  var sectionNumbers = document.querySelector(\".numbers\");\n\n  var animaNumbers = function animaNumbers() {\n    dataNumbers.forEach(function (number) {\n      var tot = +number.innerText;\n      var increment = Math.floor(tot / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += increment;\n        number.innerText = start;\n        start > tot ? (number.innerText = tot, clearInterval(timer)) : null;\n      }, 25 * Math.random());\n    });\n  };\n\n  function handleMutation(ev) {\n    ev[0].target.classList.contains(\"active\") ? (observer.disconnect(), animaNumbers()) : null;\n  }\n\n  var observer = new MutationObserver(handleMutation);\n  observer.observe(sectionNumbers, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://eslint/./js/module/numbers.js?");

/***/ }),

/***/ "./js/module/outSide.js":
/*!******************************!*\
  !*** ./js/module/outSide.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OutSideClick)\n/* harmony export */ });\nfunction OutSideClick(el, evts, cb) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n\n  if (!el.hasAttribute(outside)) {\n    el.setAttribute(outside, \"\");\n  }\n\n  var handleOutSideClick = function handleOutSideClick(ev) {\n    if (!el.contains(ev.target)) {\n      el.removeAttribute(outside);\n      evts.forEach(function (evt) {\n        html.removeEventListener(evt, handleOutSideClick);\n      });\n      cb();\n    }\n  };\n\n  evts.forEach(function (evt) {\n    setTimeout(function () {\n      html.addEventListener(evt, handleOutSideClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://eslint/./js/module/outSide.js?");

/***/ }),

/***/ "./js/module/scrollSuave.js":
/*!**********************************!*\
  !*** ./js/module/scrollSuave.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nfunction initScroll() {\n  var linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function scrollToSection(ev) {\n    ev.preventDefault();\n    var href = ev.currentTarget.getAttribute(\"href\");\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    }); // * Scroll alternativo\n    // const top = section.offsetTop;\n    // window.scrollTo({\n    //   top: top,\n    //   behavior: \"smooth\",\n    // });\n    // console.log(href, section);\n  }\n\n  linksInternos.forEach(function (link) {\n    return link.addEventListener(\"click\", scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://eslint/./js/module/scrollSuave.js?");

/***/ }),

/***/ "./js/module/tabNavegation.js":
/*!************************************!*\
  !*** ./js/module/tabNavegation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNavegation)\n/* harmony export */ });\nfunction initTabNavegation() {\n  var tab = document.querySelectorAll(\"[data-tab='menu'] li\");\n  var tabText = document.querySelectorAll(\"[data-tab='content'] section\");\n  tabText[0].classList.add(\"active\");\n\n  if (tab.length && tabText.length) {\n    var activeTab = function activeTab(idx) {\n      var direction = tabText[idx].dataset.anime;\n      tabText.forEach(function (item) {\n        item.classList.remove(\"active\", direction);\n      });\n      tabText[idx].classList.add(\"active\", direction);\n    };\n\n    tab.forEach(function (item, idx) {\n      item.addEventListener(\"click\", function () {\n        activeTab(idx);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://eslint/./js/module/tabNavegation.js?");

/***/ }),

/***/ "./js/module/tooltip.js":
/*!******************************!*\
  !*** ./js/module/tooltip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip]\");\n  var onMouseLeaveTooltip = {\n    tooltipBox: \"\",\n    element: \"\",\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeaveTooltip);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    }\n  };\n  var onMouseMove = {\n    tooltipBox: \"\",\n    element: \"\",\n    handleEvent: function handleEvent(_ref) {\n      var pageY = _ref.pageY,\n          pageX = _ref.pageX;\n      this.tooltipBox.style.top = \"\".concat(pageY + 10, \"px\");\n      this.tooltipBox.style.left = \"\".concat(pageX + 10, \"px\");\n    }\n  };\n\n  var createTooltipBox = function createTooltipBox(el) {\n    var tooltipBox = document.createElement(\"div\");\n    var textTooltip = el.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = textTooltip;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  };\n\n  tooltips.forEach(function (item) {\n    function mouseOverTooltip(_ref2) {\n      var target = _ref2.target;\n      var tooltipBox = createTooltipBox(target);\n      onMouseMove.tooltipBox = tooltipBox;\n      target.addEventListener(\"mousemove\", onMouseMove);\n      onMouseLeaveTooltip.tooltipBox = tooltipBox;\n      onMouseLeaveTooltip.element = target;\n      target.addEventListener(\"mouseleave\", onMouseLeaveTooltip);\n    }\n\n    item.onmouseover = mouseOverTooltip;\n  });\n}\n\n//# sourceURL=webpack://eslint/./js/module/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scrollSuave.js */ \"./js/module/scrollSuave.js\");\n/* harmony import */ var _module_animationScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/animationScroll.js */ \"./js/module/animationScroll.js\");\n/* harmony import */ var _module_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/accordion.js */ \"./js/module/accordion.js\");\n/* harmony import */ var _module_tabNavegation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/tabNavegation.js */ \"./js/module/tabNavegation.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modal.js */ \"./js/module/modal.js\");\n/* harmony import */ var _module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/tooltip.js */ \"./js/module/tooltip.js\");\n/* harmony import */ var _module_dropDown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/dropDown.js */ \"./js/module/dropDown.js\");\n/* harmony import */ var _module_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/menuMobile.js */ \"./js/module/menuMobile.js\");\n/* harmony import */ var _module_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/funcionamento.js */ \"./js/module/funcionamento.js\");\n/* harmony import */ var _module_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetchAnimais.js */ \"./js/module/fetchAnimais.js\");\n/* harmony import */ var _module_fetchBtc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module/fetchBtc.js */ \"./js/module/fetchBtc.js\");\n\n\n\n\n\n\n\n\n\n\n // import { testando, testando2 } from \"./module/test.js\";\n// import * as teste from \"./module/test.js\";\n// testando();\n// testando2();\n// console.log(teste)\n// teste.testando();\n// teste.testando2();\n\n(0,_module_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_animationScroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_tabNavegation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_module_dropDown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_module_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_module_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_module_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_module_fetchBtc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(); // import $ from \"jquery\";\n// import _ from \"lodash\";\n// $('nav').hide()\n\n//# sourceURL=webpack://eslint/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://eslint/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;