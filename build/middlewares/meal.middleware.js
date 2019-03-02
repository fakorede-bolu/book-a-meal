"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CatererValidate =
/*#__PURE__*/
function () {
  function CatererValidate() {
    _classCallCheck(this, CatererValidate);
  }

  _createClass(CatererValidate, null, [{
    key: "validateMeal",
    value: function () {
      var _validateMeal = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var schema;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                schema = {
                  name: _joi.default.string().required(),
                  price: _joi.default.number().min(1).required(),
                  quantity: _joi.default.string().required(),
                  imageObj: _joi.default.obj().required(),
                  categoryId: _joi.default.number().required()
                };
                _context.next = 4;
                return _joi.default.validate(req.body, schema);

              case 4:
                next();
                return _context.abrupt("return", true);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(400).json({
                  status: "error",
                  message: String(_context.t0.details[0].message),
                  type: "validation"
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function validateMeal(_x, _x2, _x3) {
        return _validateMeal.apply(this, arguments);
      }

      return validateMeal;
    }()
  }, {
    key: "validateMealUpdate",
    value: function () {
      var _validateMealUpdate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var schema;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                schema = {
                  name: _joi.default.string(),
                  price: _joi.default.number().min(1),
                  quantity: _joi.default.string(),
                  imageUrl: _joi.default.string(),
                  categoryId: _joi.default.number()
                };
                _context2.next = 4;
                return _joi.default.validate(req.body, schema);

              case 4:
                next();
                return _context2.abrupt("return", true);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  status: "error",
                  message: String(_context2.t0.details[0].message),
                  type: "validation"
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function validateMealUpdate(_x4, _x5, _x6) {
        return _validateMealUpdate.apply(this, arguments);
      }

      return validateMealUpdate;
    }()
  }]);

  return CatererValidate;
}();

var _default = CatererValidate;
exports.default = _default;