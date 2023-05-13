"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsToObject = exports.objectToParams = exports.isObject = void 0;
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
exports.isObject = isObject;
/** Encode object to url parameters */
const objectToParams = (obj) => {
    if (!(0, exports.isObject)(obj) || Object.keys(obj).length === 0) {
        return '';
    }
    return ('?' +
        Object.keys(obj)
            .map((key) => `${key}=${encodeURIComponent(obj[key])}`)
            .join('&'));
};
exports.objectToParams = objectToParams;
/** Decode params to object */
const paramsToObject = (params) => (params === null || params === void 0 ? void 0 : params.replace(/^\?/, '').split('&').reduce((acc, chunk) => {
    if (!chunk) {
        return acc;
    }
    const [key, value] = chunk.split('=');
    return Object.assign(Object.assign({}, acc), { [key]: decodeURIComponent(value) });
}, {})) || {};
exports.paramsToObject = paramsToObject;
