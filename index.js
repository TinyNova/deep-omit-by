'use strict';

module.exports = deepOmitBy;

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _recursiveIterator = require('recursive-iterator');
var _recursiveIterator2 = _interopRequireDefault(_recursiveIterator);
var _delObjectPath = require('del-object-path');
var _delObjectPath2 = _interopRequireDefault(_delObjectPath);
var _objectMerge = require('object-merge');
var _objectMerge2 = _interopRequireDefault(_objectMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepOmitBy(object, callback) {
    var results = (0, _objectMerge2.default)({}, object);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for (var _iterator = new _recursiveIterator2.default(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var meta = _step.value;
            var shouldOmit = callback(meta);
            if (shouldOmit) {
                (0, _delObjectPath2.default)(results, meta.path.join('.'));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return results;
}

