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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/slider/index.ts":
/*!************************************!*\
  !*** ./components/slider/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar types_1 = __webpack_require__(/*! ./types */ \"./components/slider/types.ts\");\r\nexports.btnColor = types_1.btnColor;\r\nexports.btnEffect = types_1.btnEffect;\r\nvar slider_1 = __webpack_require__(/*! ./slider */ \"./components/slider/slider.tsx\");\r\nexports.Slider = slider_1.Slider;\r\n\n\n//# sourceURL=webpack:///./components/slider/index.ts?");

/***/ }),

/***/ "./components/slider/slider.tsx":
/*!**************************************!*\
  !*** ./components/slider/slider.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nfunction Slider(props) {\r\n    const sliderRef = React.useRef();\r\n    const sliderTrackRef = React.useRef(undefined);\r\n    const [mouseDown, setMouseDown] = React.useState(false);\r\n    const sliderTrackbreadth = props.trackBreadth || 10;\r\n    const sliderTracklength = props.trackLength || 200;\r\n    const buttonDiameter = (.9 * (props.sliderSize || 36));\r\n    const sliderOffset = sliderTrackbreadth / 20;\r\n    const [sliderPosition, setSliderPosition] = React.useState(undefined);\r\n    const mouseUpHandler = () => {\r\n        if (sliderRef) {\r\n            sliderRef.current.blur();\r\n        }\r\n        setMouseDown(false);\r\n    };\r\n    const updateValue = (newVal) => {\r\n        const adjustedVal = Math.floor((1 - (newVal / sliderTracklength)) * 255);\r\n        setSliderPosition(newVal);\r\n        props.updateValue(adjustedVal);\r\n    };\r\n    React.useEffect(() => {\r\n        if (props.initialPosition >= 0 && !sliderPosition) {\r\n            setSliderPosition(sliderTracklength * (1 - props.initialPosition / 255) + sliderOffset);\r\n            props.updateValue(props.initialPosition);\r\n        }\r\n    }, [props.initialPosition]);\r\n    React.useEffect(() => {\r\n        if (!mouseDown) {\r\n            document.removeEventListener(\"mouseup\", mouseUpHandler);\r\n        }\r\n        else if (sliderRef) {\r\n            sliderRef.current.focus();\r\n        }\r\n    }, [mouseDown]);\r\n    return (React.createElement(\"div\", { className: \"container\" },\r\n        React.createElement(\"div\", { onWheel: (e) => {\r\n                const trackStart = props.horizontal ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n                const trackEnd = props.horizontal ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n                const updateVal = e.deltaY > 0 ? 15 : -15;\r\n                updateValue(Math.min(trackEnd - trackStart, (Math.max(0, sliderPosition + updateVal))));\r\n            }, onTouchStart: (e) => {\r\n                setMouseDown(true);\r\n                document.addEventListener(\"touchend\", mouseUpHandler);\r\n                const newTouchPos = props.horizontal ? e.touches[0].clientX : e.touches[0].clientY;\r\n                const trackStart = props.horizontal ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n                const trackEnd = props.horizontal ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n                updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newTouchPos - trackStart))));\r\n            }, onTouchMove: (e) => {\r\n                const newTouchPos = props.horizontal ? e.touches[0].clientX : e.touches[0].clientY;\r\n                const trackStart = props.horizontal ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n                const trackEnd = props.horizontal ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n                updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newTouchPos - trackStart))));\r\n            }, onMouseDown: (e) => {\r\n                setMouseDown(true);\r\n                document.addEventListener(\"mouseup\", mouseUpHandler);\r\n                const newMousePos = props.horizontal ? e.clientX : e.clientY;\r\n                const trackStart = props.horizontal ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n                const trackEnd = props.horizontal ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n                updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newMousePos - trackStart))));\r\n            }, onMouseMove: (e) => {\r\n                if (mouseDown) {\r\n                    const newMousePos = props.horizontal ? e.clientX : e.clientY;\r\n                    const trackStart = props.horizontal ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n                    const trackEnd = props.horizontal ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n                    updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newMousePos - trackStart))));\r\n                }\r\n            }, onMouseOver: () => props.setScrollLock ? props.setScrollLock(true) : undefined, onMouseOut: () => props.setScrollLock ? props.setScrollLock(false) : undefined, className: \"row d-block p-3\" },\r\n            React.createElement(\"div\", { ref: sliderTrackRef, className: \"col p-0 d-block\", style: {\r\n                    borderRadius: props.horizontal ? sliderTrackbreadth : sliderTracklength,\r\n                    backgroundColor: \"#6c757d\",\r\n                    height: props.horizontal ? sliderTrackbreadth + \"px\" : sliderTracklength,\r\n                    width: props.horizontal ? sliderTracklength : sliderTrackbreadth,\r\n                    margin: \"auto\"\r\n                } },\r\n                React.createElement(\"button\", { ref: sliderRef, style: {\r\n                        height: buttonDiameter,\r\n                        width: buttonDiameter,\r\n                        top: props.horizontal ?\r\n                            sliderTrackbreadth ?\r\n                                (sliderTrackbreadth / 2) - (buttonDiameter / 2)\r\n                                :\r\n                                    sliderOffset + \"px\"\r\n                            :\r\n                                sliderPosition ?\r\n                                    Math.max(Math.min(sliderPosition - buttonDiameter, sliderTracklength - buttonDiameter - sliderOffset), sliderOffset) + \"px\"\r\n                                    :\r\n                                        sliderOffset + \"px\",\r\n                        left: props.horizontal ?\r\n                            sliderPosition ?\r\n                                Math.max(Math.min(sliderPosition - buttonDiameter, sliderTracklength - buttonDiameter - sliderOffset), sliderOffset) + \"px\"\r\n                                :\r\n                                    sliderOffset + \"px\"\r\n                            :\r\n                                sliderTrackbreadth ?\r\n                                    (sliderTrackbreadth / 2) - (buttonDiameter / 2)\r\n                                    :\r\n                                        sliderOffset + \"px\",\r\n                    }, className: \"btn \" + (props.buttonColor ? props.buttonColor + \" \" : \"btn-light \") + (props.effect ? props.effect + \" \" : \"\") + \"rounded-circle m-0 p-0 d-block position-absolute\" })))));\r\n}\r\nexports.Slider = Slider;\r\n\n\n//# sourceURL=webpack:///./components/slider/slider.tsx?");

/***/ }),

/***/ "./components/slider/types.ts":
/*!************************************!*\
  !*** ./components/slider/types.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar btnColor;\r\n(function (btnColor) {\r\n    btnColor[\"blue\"] = \"btn-primary\";\r\n    btnColor[\"gray\"] = \"btn-secondary\";\r\n    btnColor[\"green\"] = \"btn-success\";\r\n    btnColor[\"red\"] = \"btn-danger\";\r\n    btnColor[\"yellow\"] = \"btn-warning\";\r\n    btnColor[\"teal\"] = \"btn-info\";\r\n    btnColor[\"lightgray\"] = \"btn-light\";\r\n    btnColor[\"dark\"] = \"btn-dark\";\r\n})(btnColor = exports.btnColor || (exports.btnColor = {}));\r\nvar btnEffect;\r\n(function (btnEffect) {\r\n    btnEffect[\"ring\"] = \"btn-slider\";\r\n})(btnEffect = exports.btnEffect || (exports.btnEffect = {}));\r\n\n\n//# sourceURL=webpack:///./components/slider/types.ts?");

/***/ }),

/***/ "./components/switch/index.ts":
/*!************************************!*\
  !*** ./components/switch/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar types_1 = __webpack_require__(/*! ./types */ \"./components/switch/types.ts\");\r\nexports.btnColor = types_1.btnColor;\r\nexports.btnEffect = types_1.btnEffect;\r\nvar switch_1 = __webpack_require__(/*! ./switch */ \"./components/switch/switch.tsx\");\r\nexports.Switch = switch_1.Switch;\r\n\n\n//# sourceURL=webpack:///./components/switch/index.ts?");

/***/ }),

/***/ "./components/switch/switch.tsx":
/*!**************************************!*\
  !*** ./components/switch/switch.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nfunction Switch(props) {\r\n    const sliderRef = React.useRef();\r\n    const sliderTrackRef = React.useRef(undefined);\r\n    const [mouseDown, setMouseDown] = React.useState(false);\r\n    const sliderTrackbreadth = props.sliderSize || 24;\r\n    const sliderTracklength = props.trackLength || props.sliderSize * 2 || 50;\r\n    const buttonDiameter = (.9 * (props.sliderSize || 24));\r\n    const sliderOffset = sliderTrackbreadth / 20;\r\n    const [switchState, setSwitchState] = React.useState(false);\r\n    const mouseUpHandler = () => {\r\n        if (sliderRef) {\r\n            sliderRef.current.blur();\r\n        }\r\n        setMouseDown(false);\r\n        setSwitchState(!switchState);\r\n    };\r\n    React.useEffect(() => {\r\n        if (!mouseDown) {\r\n            document.removeEventListener(\"mouseup\", mouseUpHandler);\r\n        }\r\n        else if (sliderRef) {\r\n            sliderRef.current.focus();\r\n        }\r\n    }, [mouseDown]);\r\n    return (React.createElement(\"div\", { className: \"container\" },\r\n        React.createElement(\"div\", { \r\n            //     onTouchStart={(e): void => {\r\n            //     setMouseDown(true);\r\n            //     document.addEventListener(\"touchend\", mouseUpHandler);\r\n            //     const newTouchPos = props.vertical ? e.touches[0].clientX : e.touches[0].clientY;\r\n            //     const trackStart = props.vertical ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n            //     const trackEnd = props.vertical ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n            //     updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newTouchPos - trackStart))));\r\n            // }}\r\n            // onTouchMove={(e): void => {\r\n            //     const newTouchPos = props.vertical ? e.touches[0].clientX : e.touches[0].clientY;\r\n            //     const trackStart = props.vertical ? e.currentTarget.getBoundingClientRect().left : e.currentTarget.getBoundingClientRect().top;\r\n            //     const trackEnd = props.vertical ? e.currentTarget.getBoundingClientRect().right : e.currentTarget.getBoundingClientRect().bottom;\r\n            //     updateValue(Math.min(trackEnd - trackStart, (Math.max(0, newTouchPos - trackStart))));\r\n            // }}\r\n            onMouseDown: (e) => {\r\n                setMouseDown(true);\r\n                document.addEventListener(\"mouseup\", mouseUpHandler);\r\n            }, className: \"row d-block p-3\" },\r\n            React.createElement(\"div\", { ref: sliderTrackRef, className: \"col p-0 d-block\", style: {\r\n                    borderRadius: props.vertical ? sliderTracklength : sliderTrackbreadth,\r\n                    backgroundColor: \"#c4c9ce\",\r\n                    height: props.vertical ? sliderTracklength : sliderTrackbreadth,\r\n                    width: props.vertical ? sliderTrackbreadth : sliderTracklength,\r\n                    margin: \"auto\"\r\n                } },\r\n                React.createElement(\"button\", { ref: sliderRef, style: {\r\n                        height: buttonDiameter,\r\n                        width: buttonDiameter,\r\n                        top: props.vertical ?\r\n                            switchState ? sliderTracklength - buttonDiameter - sliderOffset : sliderOffset + \"px\"\r\n                            :\r\n                                sliderTrackbreadth ?\r\n                                    (sliderTrackbreadth / 2) - (buttonDiameter / 2)\r\n                                    :\r\n                                        sliderOffset + \"px\",\r\n                        left: props.vertical ?\r\n                            sliderOffset + \"px\"\r\n                            :\r\n                                switchState ? sliderTracklength - buttonDiameter - sliderOffset : sliderOffset + \"px\",\r\n                    }, className: \"btn \" + (props.buttonColor ? props.buttonColor + \" \" : \"btn-light \") + (props.effect ? props.effect + \" \" : \"\") + \"rounded-circle m-0 p-0 d-block position-absolute\" })))));\r\n}\r\nexports.Switch = Switch;\r\n\n\n//# sourceURL=webpack:///./components/switch/switch.tsx?");

/***/ }),

/***/ "./components/switch/types.ts":
/*!************************************!*\
  !*** ./components/switch/types.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar btnColor;\r\n(function (btnColor) {\r\n    btnColor[\"blue\"] = \"btn-primary\";\r\n    btnColor[\"gray\"] = \"btn-secondary\";\r\n    btnColor[\"green\"] = \"btn-success\";\r\n    btnColor[\"red\"] = \"btn-danger\";\r\n    btnColor[\"yellow\"] = \"btn-warning\";\r\n    btnColor[\"teal\"] = \"btn-info\";\r\n    btnColor[\"lightgray\"] = \"btn-light\";\r\n    btnColor[\"dark\"] = \"btn-dark\";\r\n})(btnColor = exports.btnColor || (exports.btnColor = {}));\r\nvar btnEffect;\r\n(function (btnEffect) {\r\n    btnEffect[\"ring\"] = \"btn-slider\";\r\n})(btnEffect = exports.btnEffect || (exports.btnEffect = {}));\r\n\n\n//# sourceURL=webpack:///./components/switch/types.ts?");

/***/ }),

/***/ "./examples/slider/horizontal-slider/app.tsx":
/*!***************************************************!*\
  !*** ./examples/slider/horizontal-slider/app.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst slider_1 = __webpack_require__(/*! ../../../components/slider */ \"./components/slider/index.ts\");\r\nfunction App(props) {\r\n    const [red, setRed] = React.useState(255);\r\n    const [green, setGreen] = React.useState(255);\r\n    const [blue, setBlue] = React.useState(255);\r\n    const [yellow, setYellow] = React.useState(255);\r\n    const [teal, setTeal] = React.useState(255);\r\n    const [lightgray, setLightgray] = React.useState(255);\r\n    const [gray, setGray] = React.useState(255);\r\n    const [hred, sethRed] = React.useState(255);\r\n    const [hgreen, sethGreen] = React.useState(255);\r\n    const [hblue, sethBlue] = React.useState(255);\r\n    const [hyellow, sethYellow] = React.useState(255);\r\n    const [hteal, sethTeal] = React.useState(255);\r\n    const [hlightgray, sethLightgray] = React.useState(255);\r\n    const [hgray, sethGray] = React.useState(255);\r\n    const sliderObj = [\r\n        {\r\n            updateValue: setRed,\r\n            buttonColor: slider_1.btnColor.red,\r\n            initialPosition: red,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setGreen,\r\n            buttonColor: slider_1.btnColor.green,\r\n            initialPosition: green,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setBlue,\r\n            buttonColor: slider_1.btnColor.blue,\r\n            initialPosition: blue,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setYellow,\r\n            buttonColor: slider_1.btnColor.yellow,\r\n            initialPosition: yellow,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setTeal,\r\n            buttonColor: slider_1.btnColor.teal,\r\n            initialPosition: teal,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setLightgray,\r\n            buttonColor: slider_1.btnColor.lightgray,\r\n            initialPosition: lightgray,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: setGray,\r\n            buttonColor: slider_1.btnColor.gray,\r\n            initialPosition: gray,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethRed,\r\n            buttonColor: slider_1.btnColor.red,\r\n            initialPosition: hred,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethGreen,\r\n            buttonColor: slider_1.btnColor.green,\r\n            initialPosition: hgreen,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethBlue,\r\n            buttonColor: slider_1.btnColor.blue,\r\n            initialPosition: hblue,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethYellow,\r\n            buttonColor: slider_1.btnColor.yellow,\r\n            initialPosition: hyellow,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethTeal,\r\n            buttonColor: slider_1.btnColor.teal,\r\n            initialPosition: hteal,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethLightgray,\r\n            buttonColor: slider_1.btnColor.lightgray,\r\n            initialPosition: hlightgray,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        },\r\n        {\r\n            updateValue: sethGray,\r\n            buttonColor: slider_1.btnColor.gray,\r\n            initialPosition: hgray,\r\n            effect: slider_1.btnEffect.ring,\r\n            horizontal: true\r\n        }\r\n    ];\r\n    return (React.createElement(\"div\", { className: \"container mt-3\" },\r\n        React.createElement(\"h1\", null, \"Horizontal Slider\"),\r\n        React.createElement(\"div\", { className: \"row my-3\" }, sliderObj.map((item, index) => {\r\n            return (React.createElement(\"div\", { key: index, className: \"col m-2 p-0\", style: { maxWidth: \"fit-content\" } },\r\n                React.createElement(slider_1.Slider, { horizontal: item.horizontal, updateValue: item.updateValue, setScrollLock: props.setScrollLock, buttonColor: item.buttonColor, trackBreadth: item.trackBreadth, initialPosition: item.initialPosition, effect: item.effect })));\r\n        }))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./examples/slider/horizontal-slider/app.tsx?");

/***/ }),

/***/ "./examples/slider/vertical-slider/app.tsx":
/*!*************************************************!*\
  !*** ./examples/slider/vertical-slider/app.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst slider_1 = __webpack_require__(/*! ../../../components/slider */ \"./components/slider/index.ts\");\r\nfunction App(props) {\r\n    const [red, setRed] = React.useState(255);\r\n    const [green, setGreen] = React.useState(255);\r\n    const [blue, setBlue] = React.useState(255);\r\n    const [yellow, setYellow] = React.useState(255);\r\n    const [teal, setTeal] = React.useState(255);\r\n    const [lightgray, setLightgray] = React.useState(255);\r\n    const [gray, setGray] = React.useState(255);\r\n    const [hred, sethRed] = React.useState(255);\r\n    const [hgreen, sethGreen] = React.useState(255);\r\n    const [hblue, sethBlue] = React.useState(255);\r\n    const [hyellow, sethYellow] = React.useState(255);\r\n    const [hteal, sethTeal] = React.useState(255);\r\n    const [hlightgray, sethLightgray] = React.useState(255);\r\n    const [hgray, sethGray] = React.useState(255);\r\n    const sliderObj = [\r\n        {\r\n            updateValue: setRed,\r\n            buttonColor: slider_1.btnColor.red,\r\n            initialPosition: red\r\n        },\r\n        {\r\n            updateValue: setGreen,\r\n            buttonColor: slider_1.btnColor.green,\r\n            initialPosition: green\r\n        },\r\n        {\r\n            updateValue: setBlue,\r\n            buttonColor: slider_1.btnColor.blue,\r\n            initialPosition: blue\r\n        },\r\n        {\r\n            updateValue: setYellow,\r\n            buttonColor: slider_1.btnColor.yellow,\r\n            initialPosition: yellow\r\n        },\r\n        {\r\n            updateValue: setTeal,\r\n            buttonColor: slider_1.btnColor.teal,\r\n            initialPosition: teal\r\n        },\r\n        {\r\n            updateValue: setLightgray,\r\n            buttonColor: slider_1.btnColor.lightgray,\r\n            initialPosition: lightgray\r\n        },\r\n        {\r\n            updateValue: setGray,\r\n            buttonColor: slider_1.btnColor.gray,\r\n            initialPosition: gray\r\n        },\r\n        {\r\n            updateValue: sethRed,\r\n            buttonColor: slider_1.btnColor.red,\r\n            initialPosition: hred,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethGreen,\r\n            buttonColor: slider_1.btnColor.green,\r\n            initialPosition: hgreen,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethBlue,\r\n            buttonColor: slider_1.btnColor.blue,\r\n            initialPosition: hblue,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethYellow,\r\n            buttonColor: slider_1.btnColor.yellow,\r\n            initialPosition: hyellow,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethTeal,\r\n            buttonColor: slider_1.btnColor.teal,\r\n            initialPosition: hteal,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethLightgray,\r\n            buttonColor: slider_1.btnColor.lightgray,\r\n            initialPosition: hlightgray,\r\n            effect: slider_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: sethGray,\r\n            buttonColor: slider_1.btnColor.gray,\r\n            initialPosition: hgray,\r\n            effect: slider_1.btnEffect.ring\r\n        }\r\n    ];\r\n    return (React.createElement(\"div\", { className: \"container mt-3\" },\r\n        React.createElement(\"h1\", null, \"Vertical Slider\"),\r\n        React.createElement(\"div\", { className: \"row my-3\" }, sliderObj.map((item, index) => {\r\n            return (React.createElement(\"div\", { key: index, className: \"col m-2 p-0\", style: { maxWidth: \"fit-content\" } },\r\n                React.createElement(slider_1.Slider, { updateValue: item.updateValue, setScrollLock: props.setScrollLock, buttonColor: item.buttonColor, trackBreadth: item.trackBreadth, initialPosition: item.initialPosition, effect: item.effect })));\r\n        }))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./examples/slider/vertical-slider/app.tsx?");

/***/ }),

/***/ "./examples/switch/app.tsx":
/*!*********************************!*\
  !*** ./examples/switch/app.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst switch_1 = __webpack_require__(/*! ../../components/switch */ \"./components/switch/index.ts\");\r\nfunction App(props) {\r\n    const [redVal, setRedVal] = React.useState(true);\r\n    const switchObj = [\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.red,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.green,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.blue,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.teal,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.yellow,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.lightgray,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.gray,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.dark,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.green,\r\n            initialPosition: redVal\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.red,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.green,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.blue,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.teal,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.yellow,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.lightgray,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.gray,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.dark,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        },\r\n        {\r\n            updateValue: (val) => setRedVal(val),\r\n            buttonColor: switch_1.btnColor.green,\r\n            initialPosition: redVal,\r\n            effect: switch_1.btnEffect.ring\r\n        }\r\n    ];\r\n    return (React.createElement(\"div\", { className: \"container mt-3\" },\r\n        React.createElement(\"h1\", null, \"Toggle Switch\"),\r\n        React.createElement(\"div\", { className: \"row my-3\" }, switchObj.map((item, index) => {\r\n            return (React.createElement(\"div\", { key: index, className: \"col m-2 p-0\", style: { maxWidth: \"fit-content\" } },\r\n                React.createElement(switch_1.Switch, { updateValue: item.updateValue, setScrollLock: props.setScrollLock, buttonColor: item.buttonColor, trackBreadth: item.trackBreadth, initialPosition: item.initialPosition, effect: item.effect }),\r\n                React.createElement(switch_1.Switch, { vertical: true, updateValue: item.updateValue, setScrollLock: props.setScrollLock, buttonColor: item.buttonColor, trackBreadth: item.trackBreadth, initialPosition: item.initialPosition, effect: item.effect })));\r\n        })),\r\n        React.createElement(\"div\", { className: \"col m-2 p-0\", style: { maxWidth: \"fit-content\" } },\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 16 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 16, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 24 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 24, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 32 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 32, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 40 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 40, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 48 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 48, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 56 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 56, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 62 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 62, vertical: true }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 70 }),\r\n            React.createElement(switch_1.Switch, { buttonColor: switch_1.btnColor.red, sliderSize: 70, vertical: true }))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./examples/switch/app.tsx?");

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst app_1 = __webpack_require__(/*! ../examples/slider/horizontal-slider/app */ \"./examples/slider/horizontal-slider/app.tsx\");\r\nconst app_2 = __webpack_require__(/*! ../examples/slider/vertical-slider/app */ \"./examples/slider/vertical-slider/app.tsx\");\r\nconst switchExampleApp_1 = __webpack_require__(/*! ./switchExampleApp */ \"./src/switchExampleApp.tsx\");\r\n/**\r\n * This component needs testing on mobile devices.\r\n * Note that for the mouse wheel interaction, this example implements a basic form of scroll locking on devices with viewport widths of 500 or greater.\r\n * However, the mobile-friendliness of this vertical slider component needs to developed so that we can determine the idea way of preventing scroll on mobile tap interactions or mouse scroll interactions.\r\n * It should also be checked for cross-browser functionality.\r\n */\r\nfunction App() {\r\n    const [scrollLock, setScrollLock] = React.useState(false);\r\n    const exampleRef = React.useRef();\r\n    React.useLayoutEffect(() => {\r\n        if (scrollLock) {\r\n            // Get original body overflow\r\n            const originalOverflowStyle = window.getComputedStyle(document.body).overflowY;\r\n            document.body.style.overflowY = 'hidden'; // simple method of disabling scroll\r\n            // Re-enable scrolling when callback is invoked by returning a callback.\r\n            return () => {\r\n                document.body.style.overflowY = originalOverflowStyle; // if the original style on body was \"overlay\" then there shouldn't be any layout thrashing.\r\n            };\r\n        }\r\n    }, [scrollLock]);\r\n    return (React.createElement(\"div\", { ref: exampleRef },\r\n        React.createElement(app_2.App, { setScrollLock: setScrollLock }),\r\n        React.createElement(app_1.App, { setScrollLock: setScrollLock }),\r\n        React.createElement(switchExampleApp_1.App, null)));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/app.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.tsx\");\r\nReactDOM.render(React.createElement(app_1.App, null), document.getElementById(\"app\"));\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/switchExampleApp.tsx":
/*!**********************************!*\
  !*** ./src/switchExampleApp.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst app_1 = __webpack_require__(/*! ../examples/switch/app */ \"./examples/switch/app.tsx\");\r\n/**\r\n * This component needs testing on mobile devices.\r\n * Note that for the mouse wheel interaction, this example implements a basic form of scroll locking on devices with viewport widths of 500 or greater.\r\n * However, the mobile-friendliness of this vertical slider component needs to developed so that we can determine the idea way of preventing scroll on mobile tap interactions or mouse scroll interactions.\r\n * It should also be checked for cross-browser functionality.\r\n */\r\nfunction App() {\r\n    return (React.createElement(app_1.App, null));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/switchExampleApp.tsx?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\git\\react-demos\\src\\index.tsx */\"./src/index.tsx\");\n\n\n//# sourceURL=webpack:///multi_./src/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });