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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js_script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js_script.js":
/*!**************************!*\
  !*** ./src/js_script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar tasks = [];\nvar main = document.getElementById(\"main\");\n\nmain.onclick = function (e) {\n    var target = e.target;\n    console.log(target.id);\n\n    if (target.id === \"confirm\") {\n        var task = {};\n        var date = main.querySelector(\".input_date\").value;\n        var time = main.querySelector(\".input_time\").value;\n        var text = main.querySelector(\".input_text\").value;\n\n        // check data\n        console.log(date);\n        //\n\n        task.date = date;\n        task[time] = text;\n        //task.text = text;\n        tasks.push(task);\n\n        var listContainer = createTaskList(tasks);\n        main.appendChild(listContainer);\n    }\n\n    function createTaskList(tasks) {\n        updateListContainer();\n        console.log(tasks);\n        var listContainer = document.createElement(\"div\");\n        listContainer.className = \"list-container\";\n\n        tasks.map(function (elem) {\n            createTask(listContainer, elem);\n        });\n\n        return listContainer;\n    }\n\n    function createTask(listContainer, elem) {\n        var list = document.createElement(\"div\");\n        var h2 = document.createElement(\"h2\");\n        h2.innerText = elem.date;\n        listContainer.appendChild(list);\n        list.appendChild(h2);\n\n        Object.keys(elem).map(function (key) {\n            if (key != \"date\") {\n                var div = document.createElement(\"div\");\n                div.className = \"taskDiv\";\n                var input = document.createElement(\"input\");\n                input.className = \"taskTime\";\n                input.value = key;\n                var input2 = document.createElement(\"input\");\n                input2.className = \"taskText\";\n                input2.value = elem[key];\n                div.appendChild(input);\n                div.appendChild(input2);\n                list.appendChild(div);\n            }\n        });\n    }\n\n    function updateListContainer() {\n        var listContainer = document.querySelector(\".list-container\");\n        if (listContainer) {\n            listContainer.remove();\n        }\n    }\n};\n//console.log(createTaskList);\n\n//# sourceURL=webpack:///./src/js_script.js?");

/***/ })

/******/ });