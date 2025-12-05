(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/fish/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "clicker": "page-module__OZBMxq__clicker",
  "iconAndName": "page-module__OZBMxq__iconAndName",
  "left": "page-module__OZBMxq__left",
  "main": "page-module__OZBMxq__main",
  "page": "page-module__OZBMxq__page",
  "reset": "page-module__OZBMxq__reset",
  "return": "page-module__OZBMxq__return",
  "title": "page-module__OZBMxq__title",
  "upgradable": "page-module__OZBMxq__upgradable",
  "upgradeTitle": "page-module__OZBMxq__upgradeTitle",
  "upgrades": "page-module__OZBMxq__upgrades",
});
}),
"[project]/src/component/Notif/Notif.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "notif": "Notif-module__PH7-fG__notif",
});
}),
"[project]/src/component/Notif/Notif.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notif
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Notif$2f$Notif$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/Notif/Notif.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Notif(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6fad3aea988a3595a45c432846c7f01a5a9569aa6353d3fe7e5833e8c964f80d") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6fad3aea988a3595a45c432846c7f01a5a9569aa6353d3fe7e5833e8c964f80d";
    }
    const { nbFish, resetNotif, coord } = t0;
    const notifRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== coord || $[2] !== nbFish || $[3] !== resetNotif) {
        t1 = ({
            "Notif[useEffect()]": ()=>{
                if (nbFish > 0) {
                    console.log(coord);
                    const newNotif = document.createElement("p");
                    notifRef.current.appendChild(newNotif);
                    newNotif.textContent = "+" + nbFish;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(newNotif, {
                        left: coord.x + 20,
                        top: coord.y
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(newNotif, {
                        top: coord.y - 20,
                        opacity: 0,
                        duration: 0.7
                    }).then({
                        "Notif[useEffect() > (anonymous)()]": ()=>{
                            newNotif.remove();
                        }
                    }["Notif[useEffect() > (anonymous)()]"]);
                    resetNotif(0);
                }
            }
        })["Notif[useEffect()]"];
        $[1] = coord;
        $[2] = nbFish;
        $[3] = resetNotif;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== nbFish) {
        t2 = [
            nbFish
        ];
        $[5] = nbFish;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: notifRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Notif$2f$Notif$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notif
        }, void 0, false, {
            fileName: "[project]/src/component/Notif/Notif.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(Notif, "WmRiJZQVACi1QkQ8yAcbdWXAC2M=");
_c = Notif;
var _c;
__turbopack_context__.k.register(_c, "Notif");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/fish/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/fish/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Notif$2f$Notif$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Notif/Notif.tsx [app-client] (ecmascript)");
// import fish from "@/public/image/realfish.png"
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
// import fishingRodIcon from "@/public/image/fishingRodIcon.svg";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "0c5b49c410855309a6677f4543ed66480146ceb9b93cc3c409befd053f7141fa") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c5b49c410855309a6677f4543ed66480146ceb9b93cc3c409befd053f7141fa";
    }
    const [nbFishClicked, setNbFishClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [coord, setCoord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const baitPourcent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(5);
    const [click, setClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const boatIntervalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const mm = t1;
    const [baitUpgrade, setBaitUpgrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [boatUpgrade, setBoatUpgrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fishingRodUpgrade, setFishingRodUpgrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const fishByClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const boatIntervalTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const specialFish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fishingRodUpgrades: [
                {
                    fishNeeded: 0,
                    fishByClick: 1
                },
                {
                    fishNeeded: 200,
                    fishByClick: 2
                },
                {
                    fishNeeded: 600,
                    fishByClick: 5
                },
                {
                    fishNeeded: 1200,
                    fishByClick: 10
                }
            ],
            boatUpgrades: [
                {
                    fishNeeded: 0,
                    boatInterval: 0
                },
                {
                    fishNeeded: 500,
                    boatInterval: 1000
                },
                {
                    fishNeeded: 1400,
                    boatInterval: 500
                },
                {
                    fishNeeded: 2500,
                    boatInterval: 250
                }
            ],
            baitUpgrades: [
                {
                    fishNeeded: 0,
                    specialFish: 1
                },
                {
                    fishNeeded: 50,
                    specialFish: 5
                },
                {
                    fishNeeded: 300,
                    specialFish: 10
                },
                {
                    fishNeeded: 800,
                    specialFish: 25
                },
                {
                    fishNeeded: 2000,
                    specialFish: 50
                }
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const gameData = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[clickHandler]": ()=>{
                let count;
                const randomNumber = Math.floor(Math.random() * 100);
                if (randomNumber <= baitPourcent.current && specialFish.current > 1) {
                    console.log("special fish !!");
                    count = specialFish.current;
                } else {
                    count = fishByClick.current;
                }
                setClick({
                    "Home[clickHandler > setClick()]": (prev)=>prev + count
                }["Home[clickHandler > setClick()]"]);
                setNbFishClicked(count);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(fishRef.current, {
                    scale: 1.2,
                    duration: 0.25
                }).to(fishRef.current, {
                    scale: 1,
                    duration: 0.25
                });
            }
        })["Home[clickHandler]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const clickHandler = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[loadData]": (fromUpgrade)=>{
                console.log("loading data");
                if (boatIntervalId.current > 0) {
                    clearInterval(boatIntervalId.current);
                }
                if (!fromUpgrade) {
                    const oldClick = window.localStorage.getItem("click");
                    if (oldClick) {
                        setClick(parseInt(oldClick));
                    } else {
                        window.localStorage.setItem("click", "0");
                        setClick(0);
                    }
                }
                const oldUpgradeFishingRod = window.localStorage.getItem("upgradeFishingRod");
                if (oldUpgradeFishingRod) {
                    fishByClick.current = gameData.fishingRodUpgrades[parseInt(oldUpgradeFishingRod)].fishByClick;
                    setFishingRodUpgrade(parseInt(oldUpgradeFishingRod));
                } else {
                    window.localStorage.setItem("upgradeFishingRod", "0");
                }
                const oldUpgradeBait = window.localStorage.getItem("upgradeBait");
                if (oldUpgradeBait) {
                    specialFish.current = gameData.baitUpgrades[parseInt(oldUpgradeBait)].specialFish;
                    setBaitUpgrade(parseInt(oldUpgradeBait));
                } else {
                    window.localStorage.setItem("upgradeBait", "0");
                }
                const oldUpgradeBoat = window.localStorage.getItem("upgradeBoat");
                if (oldUpgradeBoat) {
                    boatIntervalTime.current = gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval;
                    setBoatUpgrade(parseInt(oldUpgradeBoat));
                } else {
                    window.localStorage.setItem("upgradeBoat", "0");
                }
                if (oldUpgradeBoat && gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval > 0) {
                    const id = setInterval({
                        "Home[loadData > setInterval()]": ()=>clickHandler()
                    }["Home[loadData > setInterval()]"], gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval);
                    boatIntervalId.current = parseInt(id.toString());
                }
            }
        })["Home[loadData]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const loadData = t4;
    let t5;
    if ($[6] !== click) {
        t5 = ({
            "Home[upgrade]": (type)=>{
                const oldUpgradeFishingRod_0 = window.localStorage.getItem("upgradeFishingRod");
                const oldUpgradeBait_0 = window.localStorage.getItem("upgradeBait");
                const oldUpgradeBoat_0 = window.localStorage.getItem("upgradeBoat");
                if (type == "upgradeFishingRod" && oldUpgradeFishingRod_0 && gameData.fishingRodUpgrades.length > parseInt(oldUpgradeFishingRod_0) + 1 && gameData.fishingRodUpgrades[parseInt(oldUpgradeFishingRod_0) + 1].fishNeeded <= click) {
                    setClick({
                        "Home[upgrade > setClick()]": (prev_0)=>prev_0 - gameData.fishingRodUpgrades[parseInt(oldUpgradeFishingRod_0) + 1].fishNeeded
                    }["Home[upgrade > setClick()]"]);
                    window.localStorage.setItem("upgradeFishingRod", (parseInt(oldUpgradeFishingRod_0) + 1).toString());
                } else {
                    if (type == "upgradeBait" && oldUpgradeBait_0 && gameData.baitUpgrades.length > parseInt(oldUpgradeBait_0) + 1 && gameData.baitUpgrades[parseInt(oldUpgradeBait_0) + 1].fishNeeded <= click) {
                        setClick({
                            "Home[upgrade > setClick()]": (prev_1)=>prev_1 - gameData.baitUpgrades[parseInt(oldUpgradeBait_0) + 1].fishNeeded
                        }["Home[upgrade > setClick()]"]);
                        window.localStorage.setItem("upgradeBait", (parseInt(oldUpgradeBait_0) + 1).toString());
                    } else {
                        if (type == "upgradeBoat" && oldUpgradeBoat_0 && gameData.boatUpgrades.length > parseInt(oldUpgradeBoat_0) + 1 && gameData.boatUpgrades[parseInt(oldUpgradeBoat_0) + 1].fishNeeded <= click) {
                            setClick({
                                "Home[upgrade > setClick()]": (prev_2)=>prev_2 - gameData.boatUpgrades[parseInt(oldUpgradeBoat_0) + 1].fishNeeded
                            }["Home[upgrade > setClick()]"]);
                            window.localStorage.setItem("upgradeBoat", (parseInt(oldUpgradeBoat_0) + 1).toString());
                        }
                    }
                }
                loadData(true);
            }
        })["Home[upgrade]"];
        $[6] = click;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const upgrade = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Home[reset]": ()=>{
                window.localStorage.clear();
                loadData();
                fishByClick.current = gameData.fishingRodUpgrades[0].fishByClick;
                specialFish.current = gameData.baitUpgrades[0].specialFish;
                boatIntervalTime.current = gameData.boatUpgrades[0].boatInterval;
                setBaitUpgrade(0);
                setBoatUpgrade(0);
                setFishingRodUpgrade(0);
                console.log("reset !!");
            }
        })["Home[reset]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const reset = t6;
    const enterResetHandler = _HomeEnterResetHandler;
    const leaveResetHandler = _HomeLeaveResetHandler;
    let t7;
    let t8;
    if ($[9] !== click) {
        t7 = ({
            "Home[useEffect()]": ()=>{
                if (click) {
                    window.localStorage.setItem("click", click.toString());
                }
            }
        })["Home[useEffect()]"];
        t8 = [
            click
        ];
        $[9] = click;
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Home[useEffect()]": ()=>{
                loadData();
                const handlerMouse = {
                    "Home[useEffect() > handlerMouse]": (e)=>{
                        setCoord({
                            x: e.clientX,
                            y: e.clientY
                        });
                    }
                }["Home[useEffect() > handlerMouse]"];
                mm.add("(width > 780px)", {
                    "Home[useEffect() > mm.add()]": ()=>{
                        window.addEventListener("mousemove", handlerMouse);
                    }
                }["Home[useEffect() > mm.add()]"]);
                return ()=>{
                    mm.add("(width > 780px)", {
                        "Home[useEffect() > <anonymous> > mm.add()]": ()=>{
                            window.removeEventListener("mousemove", handlerMouse);
                        }
                    }["Home[useEffect() > <anonymous> > mm.add()]"]);
                    if (boatIntervalId.current > 0) {
                        clearInterval(boatIntervalId.current);
                    }
                };
            }
        })["Home[useEffect()]"];
        t10 = [];
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    const fishRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Home[useGSAP()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(fishRef.current, {
                    rotate: "+= 360",
                    duration: "5",
                    repeat: -1,
                    ease: "none"
                });
            }
        })["Home[useGSAP()]"];
        t12 = [];
        $[14] = t11;
        $[15] = t12;
    } else {
        t11 = $[14];
        t12 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t11, t12);
    let t13;
    if ($[16] !== coord || $[17] !== nbFishClicked) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Notif$2f$Notif$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nbFish: nbFishClicked,
            resetNotif: setNbFishClicked,
            coord: coord
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[16] = coord;
        $[17] = nbFishClicked;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].return,
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "icons/icon.svg",
                alt: "Back to portoflio",
                width: 30,
                height: 30
            }, void 0, false, {
                fileName: "[project]/src/app/fish/page.tsx",
                lineNumber: 335,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: "Fish Clicker"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t14 = $[19];
        t15 = $[20];
    }
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "Home[<div>.onClick]": ()=>clickHandler()
        })["Home[<div>.onClick]"];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clicker,
            onClick: t16,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: fishRef,
                src: "/image/realfish.png",
                alt: "Fish to click",
                width: 200,
                height: 200
            }, void 0, false, {
                fileName: "[project]/src/app/fish/page.tsx",
                lineNumber: 354,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const t18 = click + " fish";
    let t19;
    if ($[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    let t21;
    let t22;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "Home[<div>.onClick]": ()=>reset()
        })["Home[<div>.onClick]"];
        t21 = ({
            "Home[<div>.onMouseEnter]": ()=>enterResetHandler()
        })["Home[<div>.onMouseEnter]"];
        t22 = ({
            "Home[<div>.onMouseLeave]": ()=>leaveResetHandler()
        })["Home[<div>.onMouseLeave]"];
        $[25] = t20;
        $[26] = t21;
        $[27] = t22;
    } else {
        t20 = $[25];
        t21 = $[26];
        t22 = $[27];
    }
    let t23;
    let t24;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            id: "SVGRepo_bgCarrier",
            strokeWidth: "0"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[28] = t23;
        $[29] = t24;
    } else {
        t23 = $[28];
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset,
            onClick: t20,
            onMouseEnter: t21,
            onMouseLeave: t22,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 21 21",
                    width: 20,
                    height: 20,
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "white",
                    children: [
                        t23,
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "SVGRepo_iconCarrier",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    stroke: "white",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    transform: "translate(2 2)",
                                    children: [
                                        " ",
                                        t25,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m12.5 5.5v-4h4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/fish/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 355
                                        }, this),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/fish/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 227
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 409,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/fish/page.tsx",
                    lineNumber: 409,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Reset"
                }, void 0, false, {
                    fileName: "[project]/src/app/fish/page.tsx",
                    lineNumber: 409,
                    columnNumber: 398
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] !== t19) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
            children: [
                t14,
                t15,
                t17,
                t19,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    let t28;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Upgrades"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] !== upgrade) {
        t29 = ({
            "Home[<div>.onClick]": ()=>upgrade("upgradeBait")
        })["Home[<div>.onClick]"];
        $[35] = upgrade;
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    const t30 = !gameData.baitUpgrades[baitUpgrade + 1] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].maxed : click >= gameData.baitUpgrades[baitUpgrade + 1].fishNeeded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradable : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].none;
    let t31;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "icons/baitIcon.svg",
            alt: "Boat Icon for upgrade",
            width: 30,
            height: 30
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[37] = t31;
    } else {
        t31 = $[37];
    }
    let t32;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Upgrade bait"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[38] = t32;
    } else {
        t32 = $[38];
    }
    let t33;
    if ($[39] !== baitUpgrade || $[40] !== click) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconAndName,
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradeTitle,
                    children: [
                        t32,
                        !gameData.baitUpgrades[baitUpgrade + 1] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Max !"
                        }, void 0, false, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 456,
                            columnNumber: 135
                        }, this) : click >= gameData.baitUpgrades[baitUpgrade + 1].fishNeeded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "cost ",
                                gameData.baitUpgrades[baitUpgrade + 1].fishNeeded,
                                " fish"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 456,
                            columnNumber: 211
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                gameData.baitUpgrades[baitUpgrade + 1].fishNeeded,
                                " fish needed"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 456,
                            columnNumber: 282
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/fish/page.tsx",
                    lineNumber: 456,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[39] = baitUpgrade;
        $[40] = click;
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    let t34;
    if ($[42] !== baitUpgrade) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: baitUpgrade
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[42] = baitUpgrade;
        $[43] = t34;
    } else {
        t34 = $[43];
    }
    let t35;
    if ($[44] !== t29 || $[45] !== t30 || $[46] !== t33 || $[47] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t29,
            className: t30,
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[44] = t29;
        $[45] = t30;
        $[46] = t33;
        $[47] = t34;
        $[48] = t35;
    } else {
        t35 = $[48];
    }
    let t36;
    if ($[49] !== upgrade) {
        t36 = ({
            "Home[<div>.onClick]": ()=>upgrade("upgradeFishingRod")
        })["Home[<div>.onClick]"];
        $[49] = upgrade;
        $[50] = t36;
    } else {
        t36 = $[50];
    }
    const t37 = !gameData.fishingRodUpgrades[fishingRodUpgrade + 1] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].maxed : click >= gameData.fishingRodUpgrades[fishingRodUpgrade + 1].fishNeeded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradable : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].none;
    let t38;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "icons/fishingrodIcon.svg",
            alt: "Fishing rod Icon for upgrade",
            width: 30,
            height: 30
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[51] = t38;
    } else {
        t38 = $[51];
    }
    let t39;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Upgrade fishingrod"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[52] = t39;
    } else {
        t39 = $[52];
    }
    let t40;
    if ($[53] !== click || $[54] !== fishingRodUpgrade) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconAndName,
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradeTitle,
                    children: [
                        t39,
                        !gameData.fishingRodUpgrades[fishingRodUpgrade + 1] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Max !"
                        }, void 0, false, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 509,
                            columnNumber: 147
                        }, this) : click >= gameData.fishingRodUpgrades[fishingRodUpgrade + 1].fishNeeded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "cost ",
                                gameData.fishingRodUpgrades[fishingRodUpgrade + 1].fishNeeded,
                                " fish"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 509,
                            columnNumber: 235
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                gameData.fishingRodUpgrades[fishingRodUpgrade + 1].fishNeeded,
                                " fish needed"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 509,
                            columnNumber: 318
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/fish/page.tsx",
                    lineNumber: 509,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[53] = click;
        $[54] = fishingRodUpgrade;
        $[55] = t40;
    } else {
        t40 = $[55];
    }
    let t41;
    if ($[56] !== fishingRodUpgrade) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: fishingRodUpgrade
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[56] = fishingRodUpgrade;
        $[57] = t41;
    } else {
        t41 = $[57];
    }
    let t42;
    if ($[58] !== t36 || $[59] !== t37 || $[60] !== t40 || $[61] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t36,
            className: t37,
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[58] = t36;
        $[59] = t37;
        $[60] = t40;
        $[61] = t41;
        $[62] = t42;
    } else {
        t42 = $[62];
    }
    let t43;
    if ($[63] !== upgrade) {
        t43 = ({
            "Home[<div>.onClick]": ()=>upgrade("upgradeBoat")
        })["Home[<div>.onClick]"];
        $[63] = upgrade;
        $[64] = t43;
    } else {
        t43 = $[64];
    }
    const t44 = !gameData.boatUpgrades[boatUpgrade + 1] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].maxed : click >= gameData.boatUpgrades[boatUpgrade + 1].fishNeeded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradable : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].none;
    let t45;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "icons/boatIcon.svg",
            alt: "Boat Icon for upgrade",
            width: 30,
            height: 30
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[65] = t45;
    } else {
        t45 = $[65];
    }
    let t46;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Upgrade boat"
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[66] = t46;
    } else {
        t46 = $[66];
    }
    let t47;
    if ($[67] !== boatUpgrade || $[68] !== click) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconAndName,
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgradeTitle,
                    children: [
                        t46,
                        !gameData.boatUpgrades[boatUpgrade + 1] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Max !"
                        }, void 0, false, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 562,
                            columnNumber: 135
                        }, this) : click >= gameData.boatUpgrades[boatUpgrade + 1].fishNeeded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "cost ",
                                gameData.boatUpgrades[boatUpgrade + 1].fishNeeded,
                                " fish"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 562,
                            columnNumber: 211
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                gameData.boatUpgrades[boatUpgrade + 1].fishNeeded,
                                " fish needed"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/fish/page.tsx",
                            lineNumber: 562,
                            columnNumber: 282
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/fish/page.tsx",
                    lineNumber: 562,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[67] = boatUpgrade;
        $[68] = click;
        $[69] = t47;
    } else {
        t47 = $[69];
    }
    let t48;
    if ($[70] !== boatUpgrade) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: boatUpgrade
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[70] = boatUpgrade;
        $[71] = t48;
    } else {
        t48 = $[71];
    }
    let t49;
    if ($[72] !== t43 || $[73] !== t44 || $[74] !== t47 || $[75] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t43,
            className: t44,
            children: [
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[72] = t43;
        $[73] = t44;
        $[74] = t47;
        $[75] = t48;
        $[76] = t49;
    } else {
        t49 = $[76];
    }
    let t50;
    if ($[77] !== t35 || $[78] !== t42 || $[79] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upgrades,
            children: [
                t28,
                t35,
                t42,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[77] = t35;
        $[78] = t42;
        $[79] = t49;
        $[80] = t50;
    } else {
        t50 = $[80];
    }
    let t51;
    if ($[81] !== t13 || $[82] !== t27 || $[83] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    t13,
                    t27,
                    t50
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/fish/page.tsx",
                lineNumber: 600,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/fish/page.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[81] = t13;
        $[82] = t27;
        $[83] = t50;
        $[84] = t51;
    } else {
        t51 = $[84];
    }
    return t51;
}
_s(Home, "1TIM5qbbJJUI2E8VJyKAkPC9ZA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Home;
function _HomeLeaveResetHandler() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset, {
        scale: "1.0",
        duration: "0.5"
    });
}
function _HomeEnterResetHandler() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset + " svg", {
        rotate: "-= 360",
        duration: "0.5"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to("." + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$fish$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset, {
        scale: "1.2",
        duration: "0.5"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_129044c9._.js.map