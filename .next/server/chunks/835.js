"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9954);




const Button = ({ children , type , onClick , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (type === "primary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            type: "button",
            className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"}  ${classes}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: "button",
        className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"} ${classes} link`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_cursor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1263);
/* harmony import */ var custom_cursor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(custom_cursor_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);





const Cursor = ()=>{
    const theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { 0: mount , 1: setMount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const getCusomColor = ()=>{
        if (theme.theme === "dark") {
            return "#fff";
        } else if (theme.theme === "light") {
            return "#000";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMount(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((custom_cursor_react__WEBPACK_IMPORTED_MODULE_2___default()), {
            targets: [
                ".link"
            ],
            customClass: "custom-cursor",
            dimensions: 30,
            fill: getCusomColor(),
            smoothness: {
                movement: 0.2,
                scale: 0.1,
                opacity: 0.2
            },
            targetOpacity: 0.5,
            targetScale: 2
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 2665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5542);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// Local Data

const Header = ({ handleWorkScroll , handleAboutScroll , isBlog  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { name , showBlog , showResume  } = _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                className: "block tablet:hidden mt-5",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between p-2 laptop:p-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        onClick: ()=>router.push("/")
                                        ,
                                        className: "font-medium p-2 laptop:p-0 link",
                                        children: [
                                            name,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-6",
                                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-5",
                                                    src: `/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: `absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`,
                                children: !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleWorkScroll,
                                            children: "Work"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/resume")
                                            ,
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:supark@hfk-bremen.de")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Home"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: "Blog"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/resume")
                                            ,
                                            classes: "first:ml-1",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:supark@hfk-bremen.de")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} dark:text-white top-0 z-10 tablet:flex`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        onClick: ()=>router.push("/")
                        ,
                        className: "font-medium cursor-pointer mob:p-2 laptop:p-0",
                        children: [
                            name,
                            "."
                        ]
                    }),
                    !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleWorkScroll,
                                children: "Work"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "About"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:supark@hfk-bremen.de")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: "Blog"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "About"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:supark@hfk-bremen.de")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9954:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Supark","headerTaglineOne":"Hello 👋","headerTaglineTwo":"I\'m Sunmi Park","headerTaglineThree":"generative and 3d artist .","headerTaglineFour":" based in Germany ","showCursor":true,"showBlog":false,"darkMode":false,"showResume":true,"socials":[{"id":"4","title":"Instagram","link":"https://www.instagram.com/supark_e"},{"id":"5","title":"Email","link":"mailto:happinessps4@gmail.com"}],"projects":[{"id":"1","title":"Project One Test","description":"Web Design","imageSrc":"https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60","url":"./wet_data"},{"id":"2","title":"Project Two","description":"Web Development","imageSrc":"https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60","url":"http://chetanverma.com/"},{"id":"3","title":"Project Three","description":"Design","imageSrc":"https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60","url":"http://chetanverma.com/"}],"services":[{"id":"3","title":"Web Design","description":"I build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"3D Design","description":"I combine creative design and technical skills to build striking 3D visualisations that bring your project to life."}],"aboutpara":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","resume":{"tagline":"👋  I\'m a generative/3D artist and software developer.","description":"I’m building and using my own tools using open-sourced and custom code. Well-versed with React, Javascript, and most of the Web frameworks.\\nI enjoy manipulating still digital images and motion sequences in a transformative/generative way.","experiences":[{"id":"1","dates":"27-28.4.2022","type":"Nebenflut – Hochschule für Künste","position":"(UN)BLUR","bullets":"Due Exhibition"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"04.05.2022","type":"Dauerwelle","position":"Opening Dauerwelle","bullets":"Opening Call"},{"id":"a12205e4-c83d-4720-9c3b-732248332a5d","dates":"02.07.2022","type":"Nebenflut – Hochschule für Künste","position":"Hochschultage 2022","bullets":"Hochschulpreis 2022 (Honorary Mention)"}],"education":{"universityName":"University of the Arts Bremen","universityDate":"2019-2023","universityPara":"Digital Media (B.A)"},"languages":["Javascript","HTML/CSS","Python"],"frameworks":["React","NodeJs","P5Js"],"others":["Processing","Arduino","Touchdesigner","Cinema 4D"]}}');

/***/ })

};
;