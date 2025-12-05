(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/component/Content/Content.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Content": "Content-module__uaul5W__Content",
  "scroll": "Content-module__uaul5W__scroll",
  "section": "Content-module__uaul5W__section",
});
}),
"[project]/src/component/sections/ProjectSection/ProjectSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "title": "ProjectSection-module__F5CHjW__title",
});
}),
"[project]/src/component/sections/ProjectSection/ProjectSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/sections/ProjectSection/ProjectSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ProjectSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "ce4cdddc98e814b2f26f358e9cbff2d436c0156a617216df4e33be5f457af80f") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ce4cdddc98e814b2f26f358e9cbff2d436c0156a617216df4e33be5f457af80f";
    }
    const { scrollref, triggerRef } = t0;
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== scrollref.current || $[2] !== triggerRef) {
        t1 = ({
            "ProjectSection[useGSAP()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        scroller: scrollref.current,
                        start: "top top",
                        end: "bottom top",
                        markers: true,
                        scrub: 1
                    }
                }).set("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    display: "flex"
                }).to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    opacity: "1",
                    duration: 1
                }).to({}, {
                    duration: 2
                }).to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    opacity: "0",
                    duration: 1
                }).to({}, {
                    duration: 1
                }).set("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    display: "none"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            }
        })["ProjectSection[useGSAP()]"];
        $[1] = scrollref.current;
        $[2] = triggerRef;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            scope: sectionRef
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t1, t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsSection,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$ProjectSection$2f$ProjectSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/src/component/sections/ProjectSection/ProjectSection.tsx",
                lineNumber: 71,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/sections/ProjectSection/ProjectSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(ProjectSection, "mpOs1qQcCKpcFvuTT9MC8POvKRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProjectSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/sections/AboutSection/AboutSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "title": "AboutSection-module__54t7_a__title",
});
}),
"[project]/src/component/sections/AboutSection/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/sections/AboutSection/AboutSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AboutSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "77bee24f6e9c2dbc7c05b730e45c14f1a03a50dfb544fe70ec60e89d2ec7c721") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77bee24f6e9c2dbc7c05b730e45c14f1a03a50dfb544fe70ec60e89d2ec7c721";
    }
    const { scrollref, triggerRef } = t0;
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== scrollref.current || $[2] !== triggerRef) {
        t1 = ({
            "AboutSection[useGSAP()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        scroller: scrollref.current,
                        start: "top top",
                        end: "bottom top",
                        markers: true,
                        scrub: 1
                    }
                }).set("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    display: "flex"
                }).to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    opacity: "1",
                    duration: 1
                }).to({}, {
                    duration: 2
                }).to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    opacity: "0",
                    duration: 1
                }).to({}, {
                    duration: 1
                }).set("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title, {
                    display: "none"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            }
        })["AboutSection[useGSAP()]"];
        $[1] = scrollref.current;
        $[2] = triggerRef;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            scope: sectionRef
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t1, t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutSection,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$sections$2f$AboutSection$2f$AboutSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "About"
            }, void 0, false, {
                fileName: "[project]/src/component/sections/AboutSection/AboutSection.tsx",
                lineNumber: 71,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/sections/AboutSection/AboutSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(AboutSection, "mpOs1qQcCKpcFvuTT9MC8POvKRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/Content/Content.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/component/Content/Content.tsx'\n\nExpected '</', got '{'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "page-module___8aEwW__button",
  "main": "page-module___8aEwW__main",
  "test": "page-module___8aEwW__test",
});
}),
"[project]/src/component/Coordinates/coordinates.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "coordinates": "coordinates-module__FUo2Qq__coordinates",
});
}),
"[project]/src/component/Coordinates/Coordinates.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Coordinates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$coordinates$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/Coordinates/coordinates.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Coordinates() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "483be8721fd575533d9ee466192236cbc4141efc0d55aa44941ab79324a1ff95") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "483be8721fd575533d9ee466192236cbc4141efc0d55aa44941ab79324a1ff95";
    }
    const [posX, setPosX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [posY, setPosY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Coordinates[useEffect()]": ()=>{
                const mouseMoveHandler = {
                    "Coordinates[useEffect() > mouseMoveHandler]": (e)=>{
                        setPosX((e.clientX - window.outerWidth / 2) / 10);
                        setPosY(-((e.clientY - window.outerHeight / 2) / 10));
                    }
                }["Coordinates[useEffect() > mouseMoveHandler]"];
                window.addEventListener("mousemove", mouseMoveHandler);
                return ()=>{
                    window.removeEventListener("mousemove", mouseMoveHandler);
                };
            }
        })["Coordinates[useEffect()]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "x :"
        }, void 0, false, {
            fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== posX) {
        t2 = posX.toFixed(2);
        $[3] = posX;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
                    lineNumber: 54,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "y :"
        }, void 0, false, {
            fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== posY) {
        t5 = posY.toFixed(2);
        $[8] = posY;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
                    lineNumber: 77,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t3 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$coordinates$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coordinates,
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Coordinates/Coordinates.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s(Coordinates, "BJ8W0umqmlLu05dBa97B2scd2Ns=");
_c = Coordinates;
var _c;
__turbopack_context__.k.register(_c, "Coordinates");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/Corner/corner.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "corners": "corner-module__9LC2pG__corners",
  "fixed": "corner-module__9LC2pG__fixed",
});
}),
"[project]/src/component/Corner/Corner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Corner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$corner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/Corner/corner.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function Corner(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7d68870857d999b7ea088f91404484260e39ea7bce93e253d5ff1ee5b28309c5") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d68870857d999b7ea088f91404484260e39ea7bce93e253d5ff1ee5b28309c5";
    }
    const { isFixed } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [position] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const corners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t2;
    if ($[2] !== isFixed) {
        t2 = ({
            "Corner[useGSAP()]": ()=>{
                if (corners.current && !animationRef.current && isFixed && !isFixed.current) {
                    animationRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                        id: "rotation",
                        rotate: "+=360",
                        duration: 3,
                        ease: "none",
                        force3D: false
                    }).repeat(-1);
                }
            }
        })["Corner[useGSAP()]"];
        $[2] = isFixed;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t2, t3);
    let t4;
    if ($[5] !== isFixed) {
        t4 = ({
            "Corner[useEffect()]": ()=>{
                console.log("top");
                if (isFixed && isFixed.current) {
                    if (animationRef.current) {
                        animationRef.current.kill();
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                        width: "100vw",
                        height: "100vh",
                        rotate: 0,
                        transform: "none",
                        duration: 0
                    });
                }
            }
        })["Corner[useEffect()]"];
        $[5] = isFixed;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== isFixed?.current) {
        t5 = isFixed?.current.valueOf();
        $[7] = isFixed?.current;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = [
            t5
        ];
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t6);
    let t7;
    if ($[11] !== isFixed) {
        t7 = ({
            "Corner[useEffect()]": ()=>{
                const mouseMoveHandler = {
                    "Corner[useEffect() > mouseMoveHandler]": (e)=>{
                        if (isFixed && !isFixed.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                                x: e.clientX,
                                y: e.clientY,
                                duration: 0.1
                            });
                        }
                    }
                }["Corner[useEffect() > mouseMoveHandler]"];
                window.addEventListener("mousemove", mouseMoveHandler);
                const mouseEnterHandler = {
                    "Corner[useEffect() > mouseEnterHandler]": (e_0)=>{
                        const elementUnderMouse = document.elementFromPoint(e_0.clientX, e_0.clientY);
                        if (elementUnderMouse?.classList.contains("targetCursor") && !isOver.current && isFixed && !isFixed.current) {
                            console.log("x : " + e_0.clientX + ", y : " + e_0.clientY);
                            console.log("enter fixed : " + isFixed + " over :" + isOver.current);
                            const eltPosition = elementUnderMouse.getBoundingClientRect();
                            console.log(eltPosition);
                            console.log("elt : " + elementUnderMouse.id);
                            isOver.current = true;
                            animationRef.current.pause();
                            const ratio = 360 * animationRef.current.ratio;
                            let rotation;
                            if (ratio < 45) {
                                rotation = 0;
                            } else {
                                if (ratio < 90) {
                                    rotation = 90;
                                } else {
                                    if (ratio < 135) {
                                        rotation = 90;
                                    } else {
                                        if (ratio < 180) {
                                            rotation = 180;
                                        } else {
                                            if (ratio < 225) {
                                                rotation = 180;
                                            } else {
                                                if (ratio < 270) {
                                                    rotation = 270;
                                                } else {
                                                    if (ratio < 315) {
                                                        rotation = 270;
                                                    } else {
                                                        rotation = 360;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            console.log("ratio " + ratio + ", rotation " + rotation);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                                width: eltPosition.width,
                                height: eltPosition.height,
                                x: eltPosition.x,
                                y: eltPosition.y,
                                transform: "rotate(" + (rotation - ratio) + ")",
                                duration: 0.5
                            });
                            window.removeEventListener("mousemove", mouseMoveHandler);
                        }
                    }
                }["Corner[useEffect() > mouseEnterHandler]"];
                const mouseLeaveHandler = {
                    "Corner[useEffect() > mouseLeaveHandler]": (e_1)=>{
                        const elementUnderMouse_0 = document.elementFromPoint(e_1.clientX, e_1.clientY);
                        if (!elementUnderMouse_0?.classList.contains("targetCursor") && isOver.current && isFixed && !isFixed.current) {
                            console.log("leaving");
                            isOver.current = false;
                            animationRef.current.play();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                                x: e_1.clientX,
                                y: e_1.clientY,
                                transform: "translate(-50%, -50%)",
                                duration: 0.1
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(corners.current, {
                                width: "3em",
                                height: "3em",
                                duration: 0.5
                            });
                            window.addEventListener("mousemove", mouseMoveHandler);
                        }
                    }
                }["Corner[useEffect() > mouseLeaveHandler]"];
                window.addEventListener("mousemove", mouseEnterHandler);
                window.addEventListener("mousemove", mouseLeaveHandler);
                return ()=>{
                    window.removeEventListener("mousemove", mouseMoveHandler);
                    window.removeEventListener("mousemove", mouseEnterHandler);
                    window.removeEventListener("mousemove", mouseLeaveHandler);
                };
            }
        })["Corner[useEffect()]"];
        $[11] = isFixed;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [];
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const t9 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$corner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corners + (isFixed?.current ? " " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$corner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fixed : "");
    let t10;
    if ($[14] !== isFixed?.current || $[15] !== position) {
        t10 = isFixed?.current ? {} : {
            left: position.x,
            top: position.y
        };
        $[14] = isFixed?.current;
        $[15] = position;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5",
                stroke: "white",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/component/Corner/Corner.tsx",
                lineNumber: 233,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5",
                stroke: "white",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/component/Corner/Corner.tsx",
                lineNumber: 240,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5",
                stroke: "white",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/component/Corner/Corner.tsx",
                lineNumber: 247,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5",
                stroke: "white",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/component/Corner/Corner.tsx",
                lineNumber: 254,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t10 || $[22] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: corners,
            className: t9,
            style: t10,
            children: [
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t9;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    return t15;
}
_s(Corner, "OKECaMveYAy6FphhjgfYKo52SuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Corner;
var _c;
__turbopack_context__.k.register(_c, "Corner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/Grid/Grid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Grid": "Grid-module__YbSnrW__Grid",
});
}),
"[project]/src/component/Grid/Grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Grid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Grid$2f$Grid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/Grid/Grid.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Grid() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0426ac1f1eda3839817f70d0cfb97bee8c5c9d826afabded12b35eb2ad7766f0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0426ac1f1eda3839817f70d0cfb97bee8c5c9d826afabded12b35eb2ad7766f0";
    }
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Grid[useEffect()]": ()=>{
                const loadGrid = function loadGrid() {
                    gridRef.current.childNodes.forEach({
                        "Grid[useEffect() > loadGrid > gridRef.current.childNodes.forEach()]": (element)=>{
                            gridRef.current.removeChild(element);
                        }
                    }["Grid[useEffect() > loadGrid > gridRef.current.childNodes.forEach()]"]);
                    const nbRow = Math.floor(window.innerHeight / 165);
                    const nbColumn = Math.floor(window.innerWidth / 165);
                    const nbCells = nbRow * nbColumn;
                    for(let i = 0; i < nbCells; i++){
                        gridRef.current.appendChild(document.createElement("div"));
                    }
                };
                loadGrid();
                const reload = {
                    "Grid[useEffect() > reload]": ()=>{
                        loadGrid();
                    }
                }["Grid[useEffect() > reload]"];
                window.addEventListener("resize", reload);
                return ()=>{
                    window.removeEventListener("resize", reload);
                };
            }
        })["Grid[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            "--taille-cell": 165 + "px"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: gridRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Grid$2f$Grid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Grid,
            style: t2
        }, void 0, false, {
            fileName: "[project]/src/component/Grid/Grid.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(Grid, "6IkscvtsCtgQtCC3YQqzNlV0IN8=");
_c = Grid;
var _c;
__turbopack_context__.k.register(_c, "Grid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Content$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Content/Content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$Coordinates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Coordinates/Coordinates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$Corner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Corner/Corner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Grid$2f$Grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Grid/Grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6711dab46a9000f94086c4084f37dfb4ed63b5dee6a4dbdf34a60fd52dd37f6b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6711dab46a9000f94086c4084f37dfb4ed63b5dee6a4dbdf34a60fd52dd37f6b";
    }
    const isFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Content$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$Coordinates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$Corner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isFixed: isFixed
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Grid$2f$Grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_s(Home, "EwPF+i6oO/Qj3rqUopUZArtT+qA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ada6214._.js.map