"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("../utils/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderMeal = _database.default.define("order_meals", {
  id: {
    type: _sequelize.default.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  mealId: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  orderId: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    unique: true
  },
  customerId: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  createdAt: _sequelize.default.DATEONLY,
  updatedAt: _sequelize.default.DATEONLY
});

var _default = OrderMeal;
exports.default = _default;