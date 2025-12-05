(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    if ($[0] !== "7ee5b51d8df6a9c34019b980e86cbecc41a7a57b0b364c6e0ccc6c8481b0ae6e") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ee5b51d8df6a9c34019b980e86cbecc41a7a57b0b364c6e0ccc6c8481b0ae6e";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "2aa1baf5930ca8e8d47f2a63772c32cb912e82b1b316185f0f8c566bbe840e35") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2aa1baf5930ca8e8d47f2a63772c32cb912e82b1b316185f0f8c566bbe840e35";
    }
    const { isFixed: t1 } = t0;
    const isFixed = t1 === undefined ? false : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            x: 0,
            y: 0
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const [position] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const corners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t3;
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Corner[useGSAP()]": ()=>{
                if (corners.current && !animationRef.current) {
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
        t4 = [];
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t3, t4);
    let t5;
    let t6;
    if ($[4] !== isFixed) {
        t5 = ({
            "Corner[useEffect()]": ()=>{
                if (!animationRef.current) {
                    return;
                }
                if (isFixed) {
                    animationRef.current.pause();
                } else {
                    animationRef.current.play();
                }
            }
        })["Corner[useEffect()]"];
        t6 = [
            isFixed
        ];
        $[4] = isFixed;
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[7] !== isFixed) {
        t7 = ({
            "Corner[useEffect()]": ()=>{
                const mouseMoveHandler = {
                    "Corner[useEffect() > mouseMoveHandler]": (e)=>{
                        if (!isFixed) {
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
                        if (elementUnderMouse?.classList.contains("targetCursor") && !isOver.current) {
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
                                width: elementUnderMouse.clientWidth + 10,
                                height: elementUnderMouse.clientHeight + 10,
                                x: eltPosition.x - 2.5,
                                y: eltPosition.y - 2.5,
                                transform: "none",
                                duration: 0.5
                            });
                            window.removeEventListener("mousemove", mouseMoveHandler);
                        }
                    }
                }["Corner[useEffect() > mouseEnterHandler]"];
                const mouseLeaveHandler = {
                    "Corner[useEffect() > mouseLeaveHandler]": (e_1)=>{
                        const elementUnderMouse_0 = document.elementFromPoint(e_1.clientX, e_1.clientY);
                        if (!elementUnderMouse_0?.classList.contains("targetCursor") && isOver.current) {
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
        $[7] = isFixed;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [];
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const t9 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$corner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corners + (isFixed ? " test " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$corner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fixed : "");
    let t10;
    if ($[10] !== isFixed || $[11] !== position) {
        t10 = isFixed ? {} : {
            left: position.x,
            top: position.y
        };
        $[10] = isFixed;
        $[11] = position;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
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
                lineNumber: 213,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
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
                lineNumber: 220,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
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
                lineNumber: 227,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
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
                lineNumber: 234,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/Corner/Corner.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t10 || $[18] !== t9) {
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
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t9;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    return t15;
}
_s(Corner, "0ZY5j+BDZaPFSXBNamJTQvE9/os=", false, function() {
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
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$Coordinates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Coordinates/Coordinates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$Corner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Corner/Corner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "37cf248634ce3da1b308f97a9a406bda77fc98192d6984c753dec9a5b67a4820") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37cf248634ce3da1b308f97a9a406bda77fc98192d6984c753dec9a5b67a4820";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Coordinates$2f$Coordinates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Corner$2f$Corner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isFixed: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 84
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_s(Home, "Hdw5EO+DplCNBEJcNuH8tsP7WZ4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1c7e3d55._.js.map