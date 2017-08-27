/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0

// ===== Scroll to Top ====
);$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $('.return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('.return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('.return-to-top').click(function () {
    // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'cyrillic_pixel-7regular';\n  src: url(" + __webpack_require__(5) + ") format(\"woff2\"), url(" + __webpack_require__(4) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nbody {\n  background-color: #363636;\n  color: #ffffff;\n  font-family: 'Share Tech', sans-serif;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  box-sizing: border-box; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\na {\n  text-decoration: none;\n  color: #ffffff; }\n\na:hover {\n  color: #d84d3a; }\n\nul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n\nli {\n  margin-left: 40px;\n  margin-top: 20px; }\n\nh1,\nh2,\nh3 {\n  letter-spacing: 5px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%; }\n  .flex-container header {\n    width: 100%;\n    height: 655px;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start; }\n    .flex-container header aside {\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      flex-direction: column;\n      width: 50%;\n      background-image: url(" + __webpack_require__(8) + ");\n      background-position: center;\n      background-color: #00385d;\n      overflow: hidden;\n      height: 655px;\n      padding-left: 150px; }\n      .flex-container header aside .logo {\n        font-size: 10em;\n        font-family: 'cyrillic_pixel-7regular', sans-serif; }\n      .flex-container header aside .under {\n        content: \"\";\n        width: 150px;\n        height: 6px;\n        background-color: #ffffff; }\n      .flex-container header aside .text {\n        margin-top: 10px;\n        font-size: 1.05em; }\n    .flex-container header .home {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      width: 50%;\n      height: 100%;\n      background-color: #3d485d;\n      color: #e5e5e5;\n      overflow: hidden;\n      padding-left: 10px;\n      padding-right: 10px;\n      background-image: url(" + __webpack_require__(9) + ");\n      background-position: left;\n      background-repeat: no-repeat; }\n      .flex-container header .home nav {\n        font-size: 1.2em;\n        font-weight: bold; }\n  .flex-container section {\n    height: 100%;\n    width: 100%; }\n    .flex-container section .about {\n      background-color: #f8f8f8;\n      background-image: url(" + __webpack_require__(10) + ");\n      background-position: left;\n      background-repeat: no-repeat;\n      height: 650px;\n      color: #363636;\n      display: flex;\n      flex-direction: row; }\n      .flex-container section .about .about-left {\n        width: 50%; }\n      .flex-container section .about .about-right {\n        padding-top: 50px;\n        padding-right: 50px;\n        margin-bottom: 10px;\n        width: 50%;\n        font-size: 1.2em;\n        text-align: justify;\n        display: flex;\n        flex-direction: column;\n        line-height: 50px; }\n        .flex-container section .about .about-right h3,\n        .flex-container section .about .about-right span {\n          margin-bottom: 10px; }\n        .flex-container section .about .about-right .under {\n          content: \"\";\n          width: 135px;\n          height: 6px;\n          background-color: #d84d3a; }\n    .flex-container section .services {\n      background-color: #ffffff;\n      height: 450px;\n      color: #363636;\n      display: flex;\n      flex-direction: row; }\n      .flex-container section .services .services-right {\n        padding-top: 50px;\n        padding-left: 50px;\n        padding-right: 40px;\n        margin-bottom: 10px;\n        width: 50%;\n        font-size: 1.2em;\n        text-align: justify;\n        display: flex;\n        flex-direction: column;\n        line-height: 50px; }\n        .flex-container section .services .services-right h3,\n        .flex-container section .services .services-right span {\n          margin-bottom: 10px; }\n        .flex-container section .services .services-right .under {\n          content: \"\";\n          width: 135px;\n          height: 6px;\n          background-color: #d84d3a; }\n      .flex-container section .services .services-left {\n        width: 50%;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        padding-left: 50px; }\n        .flex-container section .services .services-left div {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-around;\n          align-items: center;\n          flex-basis: 50%; }\n          .flex-container section .services .services-left div img {\n            width: 30%;\n            height: 30%;\n            margin-bottom: 20px; }\n    .flex-container section .works {\n      background-color: #28272f;\n      width: 100%;\n      height: 655px;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      padding-left: 50px;\n      padding-right: 50px;\n      font-size: 1.2em;\n      line-height: 50px;\n      text-align: justify; }\n      .flex-container section .works h2 {\n        margin-bottom: 10px;\n        margin-top: 30px; }\n      .flex-container section .works h3,\n      .flex-container section .works span {\n        margin-bottom: 20px; }\n      .flex-container section .works .under {\n        content: \"\";\n        width: 135px;\n        height: 6px;\n        background-color: #d84d3a; }\n      .flex-container section .works .works-gallery {\n        display: flex;\n        flex-wrap: wrap;\n        flex-direction: row;\n        justify-content: space-around;\n        align-items: center;\n        height: 400px; }\n        .flex-container section .works .works-gallery img {\n          width: 30%;\n          height: auto;\n          margin: 15px auto; }\n    .flex-container section .experience {\n      background-color: #ffffff;\n      height: 450px;\n      color: #363636;\n      display: flex;\n      flex-direction: row; }\n      .flex-container section .experience .experience-left {\n        padding-top: 50px;\n        padding-left: 50px;\n        padding-right: 40px;\n        margin-bottom: 10px;\n        width: 50%;\n        font-size: 1.2em;\n        text-align: justify;\n        display: flex;\n        flex-direction: column;\n        line-height: 50px; }\n        .flex-container section .experience .experience-left h3,\n        .flex-container section .experience .experience-left span {\n          margin-bottom: 10px; }\n        .flex-container section .experience .experience-left .under {\n          content: \"\";\n          width: 135px;\n          height: 6px;\n          background-color: #d84d3a; }\n      .flex-container section .experience .experience-right {\n        width: 50%;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        align-items: center;\n        padding-left: 50px;\n        padding-right: 50px; }\n        .flex-container section .experience .experience-right img {\n          width: 20%;\n          height: auto;\n          margin-bottom: 20px;\n          margin-right: 10px; }\n  .flex-container footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 200px;\n    background-color: #f8f8f8;\n    color: #28272f;\n    padding-left: 40px;\n    padding-right: 40px; }\n    .flex-container footer button {\n      width: 200px;\n      height: 50px;\n      background-color: #d84d3a;\n      color: #ffffff;\n      font-weight: bold;\n      font-size: 1em;\n      letter-spacing: 5px; }\n    .flex-container footer button:hover {\n      background-color: #00385d; }\n    .flex-container footer a {\n      color: #00385d;\n      font-family: 'Special Elite', sans-serif; }\n    .flex-container footer h2 {\n      font-family: 'cyrillic_pixel-7regular', sans-serif;\n      margin-bottom: 10px; }\n    .flex-container footer h3,\n    .flex-container footer p {\n      margin-bottom: 10px; }\n    .flex-container footer span {\n      font-weight: bold; }\n    .flex-container footer div {\n      flex-basis: 25%;\n      padding: 10px;\n      text-align: center; }\n  .flex-container .return-to-top {\n    position: fixed;\n    bottom: 2%;\n    right: 48.5%;\n    background: transparent;\n    width: 50px;\n    height: 50px;\n    display: block;\n    text-decoration: none;\n    display: none; }\n  .flex-container .return-to-top i {\n    color: #d84d3a;\n    margin: 0;\n    position: relative;\n    left: 16px;\n    top: 13px;\n    font-size: 2em; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6543ebf556eb579c722ec828f2006236.woff";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "159917044e5367699dd1910faa265a12.woff2";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d5c127e084f1908b25b695fb2905daec.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8dda618b2f0b720c7b5c2a643483bb39.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1aea4d969982eb201f3745125bebe0c9.png";

/***/ })
/******/ ]);