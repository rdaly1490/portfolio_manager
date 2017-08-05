'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _DashboardMainDisplay = require('../components/DashboardMainDisplay');

var _DashboardMainDisplay2 = _interopRequireDefault(_DashboardMainDisplay);

var _Tabs = require('../components/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _dashboard = require('../../../styles/dashboard.scss');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Rob/Desktop/cryptoProject/components/dashboard/containers/DashboardContainer.js';

//components


//styles


var DashboardContainer = function (_Component) {
    (0, _inherits3.default)(DashboardContainer, _Component);

    function DashboardContainer() {
        (0, _classCallCheck3.default)(this, DashboardContainer);

        return (0, _possibleConstructorReturn3.default)(this, (DashboardContainer.__proto__ || (0, _getPrototypeOf2.default)(DashboardContainer)).apply(this, arguments));
    }

    (0, _createClass3.default)(DashboardContainer, [{
        key: '_getData',
        value: function _getData() {
            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR&ts=1452680400').then(function (_ref) {
                var data = _ref.data;
                return console.log(data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _dashboard2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('button', { onClick: this._getData, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'Get Data'), _react2.default.createElement(_link2.default, { href: '/coin?symbol=btc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Check out BTC')), _react2.default.createElement(_DashboardMainDisplay2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_Tabs2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }));
        }
    }]);

    return DashboardContainer;
}(_react.Component);

exports.default = DashboardContainer;