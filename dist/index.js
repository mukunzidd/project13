"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var status = 'active';
var app = (0, _express["default"])();
app.get('/status', function (req, res) {
  res.status(200).send({
    status: status
  });
});
app.listen(process.env.PORT);
var _default = app;
exports["default"] = _default;