'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Rob/Desktop/cryptoProject/components/dashboard/components/RoiChart.js';


var data = [{ name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] }, { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] }, { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 }, { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 }, { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 }, { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] }, { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] }, { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 }, { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 }, { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] }];

var RoiChart = function RoiChart() {
    return _react2.default.createElement(_recharts.LineChart, {
        width: 400,
        height: 400,
        data: data,
        margin: { top: 5, right: 20, left: 10, bottom: 5 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_recharts.XAxis, { dataKey: 'name', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement(_recharts.Tooltip, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#f5f5f5', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'uv', stroke: '#ff7300', yAxisId: 0, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'pv', stroke: '#387908', yAxisId: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }));
};

exports.default = RoiChart;