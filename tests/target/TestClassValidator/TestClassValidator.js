"use strict";

function _typeof3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof3 = function _typeof3(obj) { return typeof obj; }; } else { _typeof3 = function _typeof3(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof3(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var class_validator_1 = require("class-validator");

var class_transformer_1 = require("class-transformer");

var Post = function () {
  function Post() {}

  __decorate([class_validator_1.Length(10, 20), __metadata("design:type", String)], Post.prototype, "title", void 0);

  __decorate([class_validator_1.Contains("hello"), __metadata("design:type", String)], Post.prototype, "text", void 0);

  __decorate([class_validator_1.IsInt(), class_validator_1.Min(0), class_validator_1.Max(10), __metadata("design:type", Number)], Post.prototype, "rating", void 0);

  __decorate([class_validator_1.IsEmail(), __metadata("design:type", String)], Post.prototype, "email", void 0);

  __decorate([class_validator_1.IsFQDN(), __metadata("design:type", String)], Post.prototype, "site", void 0);

  __decorate([class_validator_1.IsDate(), __metadata("design:type", Date)], Post.prototype, "createDate", void 0);

  return Post;
}();

var userJson = JSON.parse('{"title":"Hello","rating":5}');

var utils = require("../TestcaseUtils.js");

function test(userJson) {
  var users = Object.assign(Post, userJson);
  class_validator_1.validate(users).then(function (errors) {
    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
    } else {
      console.log("validation succeed");
    }
  });
}

utils.entry(test, userJson);
