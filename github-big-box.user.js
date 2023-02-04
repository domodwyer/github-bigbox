// ==UserScript==
// @name         GitHub Big Box
// @namespace    https://itsallbroken.org/
// @version      0.1
// @description  Increase default comment box size, increase box grow size limit.
// @author       domodwyer
// @match        https://github.com/*
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://itsallbroken.com&size=64
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        .previewable-comment-form textarea {
            min-height: 200px !important;
            max-height: 10000px !important;
        }`);
})();