"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Rob/Desktop/cryptoProject/components/dashboard/components/Tabs.js";


var TabsComponent = function TabsComponent() {
    return _react2.default.createElement(_reactBootstrap.Tabs, { defaultActiveKey: 1, animation: false, id: "noanim-tab-example", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_reactBootstrap.Tab, { eventKey: 1, title: "Tab 1", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Tab 1 content"), _react2.default.createElement(_reactBootstrap.Tab, { eventKey: 2, title: "Tab 2", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, "Tab 2 content"));
};

exports.default = TabsComponent;