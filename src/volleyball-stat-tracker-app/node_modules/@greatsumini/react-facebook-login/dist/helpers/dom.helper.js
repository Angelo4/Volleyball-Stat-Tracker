"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScriptEle = void 0;
const createScriptEle = (id, src) => {
    return new Promise((resolve) => {
        const element = document.getElementsByTagName('script')[0];
        const fjs = element;
        // return if script already exists
        if (document.getElementById(id)) {
            return;
        }
        const js = document.createElement('script');
        js.id = id;
        js.src = src;
        js.onload = resolve;
        fjs.parentNode.insertBefore(js, fjs);
    });
};
exports.createScriptEle = createScriptEle;
