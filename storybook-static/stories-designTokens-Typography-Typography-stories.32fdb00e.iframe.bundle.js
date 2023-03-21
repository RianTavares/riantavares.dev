"use strict";(self.webpackChunkriantavares_dev=self.webpackChunkriantavares_dev||[]).push([[291],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/stories/designTokens/Typography/Typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--color-brand-primary:#7EC6B3;--color-brand-secondary:#F2F2F2;--color-green-90:#1A473C;--color-green-80:#056152;--color-green-70:#089b83;--color-green-60:#57c7b4;--color-green-50:#A1D6C9;--color-green-40:#c9ede7;--color-green-30:#e0f5f1;--color-green-20:#f0faf8;--color-green-10:#f7fcfb;--color-background-light:#F2F2F2;--color-background-dark:#1F1F23;--color-black-0:#000000;--color-black-80:#0c0c0e;--color-black-70:#0c0d0d;--color-black-60:#121214;--color-black-50:#1F1F23;--color-black-40:#2D2D31;--color-black-30:#1f1f1f;--color-black-20:#333333;--color-black-10:#797979;--color-white-80:#8f8f8f;--color-white-70:#b8b8b8;--color-white-60:#dddddd;--color-white-50:#ebebeb;--color-white-40:#f5f5f5;--color-white-30:#f2f2f2;--color-white-20:#f1f1f1;--color-white-10:#fafafa;--color-white-0: #ffffff;--space-0-5x: 4px;--space-1x: 8px;--space-1-5x: 12px;--space-2x: 16px;--space-2-5x: 20px;---space-3x: 24px;--space-4x: 32px;--space-5x: 40px;--space-6x: 48px;--space-7x: 56px;--space-8x: 64px;--space-9x: 72px;--space-10x: 80px;--space-11x: 88px;--space-12x: 96px;--theme-font-primary: "Open Sans",-apple-system-font,Arial,Helvetica,sans-serif;--theme-font-secondary: "Segoe UI",-apple-system-font,Arial,Helvetica,sans-serif, }',"",{version:3,sources:["webpack://./src/scss/_vars.scss"],names:[],mappings:"AAsIA,MACQ,6BAAA,CACA,+BAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,gCAAA,CACA,+BAAA,CACA,uBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CAEA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,kBAAA,CACA,iBAAA,CACA,gBAAA,CACA,gBAAA,CACA,gBAAA,CACA,gBAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAEA,+EAAA,CACA,kFAAA",sourcesContent:["   $breakpoints: (\n    3xs: 0,\n    2xs: 374px,\n    xs: 576px,\n    sm: 768px,\n    md: 992px,\n    lg: 1200px,\n    xl: 1680px,\n);\n\n$spaces: (\n    '0-5x': 4px,\n    1x: 8px,\n    '1-5x': 12px,\n    2x: 16px,\n    '2-5x': 20px,\n    3x: 24px,\n    4x: 32px,\n    5x: 40px,\n    6x: 48px,\n    7x: 56px,\n    8x: 64px,\n    9x: 72px,\n    10x: 80px,\n    11x: 88px,\n    12x: 96px,\n);\n\n$border-radius: (\n    s: 8px,\n    m: 12px,\n    circle: 50%,\n    pill: 24px,\n);\n\n$aspect-ratios: (\n    '3-2': '3/2',\n    '16-9': '16/9',\n    '21-9': '21/9',\n    '32-9': '32/9',\n    '1-1': '1/1',\n);\n\n$font-sizes: (\n    xs: 11px,\n    s: 13px,\n    m: 15px,\n    l: 17px,\n    xl: 19px,\n    2xl: 21px,\n    3xl: 24px,\n    4xl: 27px,\n    5xl: 30px,\n    6xl: 34px,\n    7xl: 38px,\n    8xl: 43px,\n);\n\n$font-weights: (\n    light: 350,\n    regular: 450,\n    medium: 600,\n    semibold: 700,\n    bold: 800,\n);\n\n$js-colors: (\n    90: #002d3d,\n    80: #00597a,\n    70: #007aa5,\n    60: #0096cc,\n    50: #8fcae0,\n    40: #c9e4ed,\n    30: #e0eff5,\n    20: #f0f7fa,\n    10: #f7fbfc,\n);\n\n$js-complementary-colors: (\n    90: #522700,\n    80: #a34e00,\n    70: #ed7100,\n    60: #f99539,\n    50: #fcb473,\n    40: #ffdab8,\n    30: #ffead6,\n    20: #fff4eb,\n    10: #fffaf5,\n);\n\n$md-colors: (\n    90: #5c001c,\n    80: #8f002a,\n    70: #d0033f,\n    60: #d44972,\n    50: #e48ba5,\n    40: #efc7d3,\n    30: #f5e0e6,\n    20: #faf0f3,\n    10: #fcf7f9,\n);\n\n$md-complementary-colors: (\n    90: #f2ece8,\n    // TODO replace it as soon UI provides values\n    80: #f2ece8,\n    // TODO replace it as soon UI provides values\n    70: #f2ece8,\n    // TODO replace it as soon UI provides values\n    60: #f2ece8,\n    // TODO replace it as soon UI provides values\n    50: #f2ece8,\n    // TODO replace it as soon UI provides values\n    40: #f2ece8,\n    // TODO replace it as soon UI provides values\n    30: #f2ece8,\n    20: #f6f1ef,\n    10: #f9f7f5,\n);\n\n$line-heights: (\n    '1-5': 1.5,\n    '1-25': 1.25,\n    '1-125': 1.125,\n);\n\n$shadows: (\n    xs: 0px 1px 2px rgba(0, 0, 0, 0.12),\n    s: 0px 2px 4px rgba(0, 0, 0, 0.12),\n    m: 0px 4px 8px rgba(0, 0, 0, 0.12),\n    l: 0px 8px 16px rgba(0, 0, 0, 0.12),\n    xl: 0px 12px 32px rgba(0, 0, 0, 0.12),\n);\n\n:root {\n        --color-brand-primary:#7EC6B3;\n        --color-brand-secondary:#F2F2F2;\n        --color-green-90:#1A473C; \n        --color-green-80:#056152;\n        --color-green-70:#089b83;\n        --color-green-60:#57c7b4;\n        --color-green-50:#A1D6C9;\n        --color-green-40:#c9ede7;\n        --color-green-30:#e0f5f1;\n        --color-green-20:#f0faf8;\n        --color-green-10:#f7fcfb;\n        --color-background-light:#F2F2F2;\n        --color-background-dark:#1F1F23;\n        --color-black-0:#000000; \n        --color-black-80:#0c0c0e;\n        --color-black-70:#0c0d0d;\n        --color-black-60:#121214;\n        --color-black-50:#1F1F23; \n        --color-black-40:#2D2D31;\n        --color-black-30:#1f1f1f;\n        --color-black-20:#333333;\n        --color-black-10:#797979;\n        --color-white-80:#8f8f8f;\n        --color-white-70:#b8b8b8;\n        --color-white-60:#dddddd;\n        --color-white-50:#ebebeb; \n        --color-white-40:#f5f5f5;\n        --color-white-30:#f2f2f2;\n        --color-white-20:#f1f1f1;\n        --color-white-10:#fafafa;\n        --color-white-0: #ffffff;\n\n        --space-0-5x: 4px;\n        --space-1x: 8px;\n        --space-1-5x: 12px;\n        --space-2x: 16px;\n        --space-2-5x: 20px;\n        ---space-3x: 24px;\n        --space-4x: 32px;\n        --space-5x: 40px;\n        --space-6x: 48px;\n        --space-7x: 56px;\n        --space-8x: 64px;\n        --space-9x: 72px;\n        --space-10x: 80px;\n        --space-11x: 88px;\n        --space-12x: 96px;\n\n        --theme-font-primary: \"Open Sans\",-apple-system-font,Arial,Helvetica,sans-serif;\n        --theme-font-secondary: \"Segoe UI\",-apple-system-font,Arial,Helvetica,sans-serif, \n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"--line-height-1-5":"1.5","--line-height-1-25":"1.25","--line-height-1-125":"1.125","--font-size-xs":"11px","--font-size-s":"13px","--font-size-m":"15px","--font-size-l":"17px","--font-size-xl":"19px","--font-size-2xl":"21px","--font-size-3xl":"24px","--font-size-4xl":"27px","--font-size-5xl":"30px","--font-size-6xl":"34px","--font-size-7xl":"38px","--font-size-8xl":"43px","--font-weight-light":"350","--font-weight-regular":"450","--font-weight-medium":"600","--font-weight-semibold":"700","--font-weight-bold":"800"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/designTokens/Typography/Typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,default:()=>Typography_stories});var react=__webpack_require__("./node_modules/react/index.js"),TokenListBasic=__webpack_require__("./src/stories/designTokens/TokenListBasic/index.tsx"),cssVariables=__webpack_require__("./src/stories/designTokens/cssVariables.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/stories/designTokens/Typography/Typography.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Typography_module.Z,options);const Typography_Typography_module=Typography_module.Z&&Typography_module.Z.locals?Typography_module.Z.locals:void 0;var __jsx=react.createElement,FontFamily=function FontFamily(){return __jsx(TokenListBasic.Ls,{tokenName:"Font family",variableList:cssVariables.bh},__jsx((function FontFamilyValue(_ref){var _ref$variable=_ref.variable;return __jsx("div",{style:{fontFamily:"var(".concat(void 0===_ref$variable?"":_ref$variable,")")}},"Lorem ipsum dolor sit.")}),null))};FontFamily.displayName="FontFamily";var FontWeight=function FontWeight(){var variableList=(0,cssVariables.X7)(Typography_Typography_module,"--font-weight");return __jsx(TokenListBasic.zE,{tokenName:"Font Weight",variableList},__jsx((function FontFamilyValue(_ref2){var _ref2$variable=_ref2.variable;return __jsx("div",{style:{fontWeight:"".concat(void 0===_ref2$variable?"":_ref2$variable)}},"Lorem ipsum dolor sit.")}),null))};FontWeight.displayName="FontWeight";var LineHeightNew=function LineHeightNew(){var variableList=(0,cssVariables.X7)(Typography_Typography_module,"--line-height");return __jsx(TokenListBasic.zE,{tokenName:"Line height",variableList},__jsx((function LineHeightValue(_ref3){var _ref3$variable=_ref3.variable;return __jsx("div",null,__jsx("p",{style:{lineHeight:"".concat(void 0===_ref3$variable?"":_ref3$variable),background:"var(--color-brand-primary)"}},"Lorem ipsum dolor sit."))}),null))};LineHeightNew.displayName="LineHeightNew";var FontSizeNew=function FontSizeNew(){var variableList=(0,cssVariables.X7)(Typography_Typography_module,"--font-size");return __jsx(TokenListBasic.zE,{tokenName:"Font size",variableList},__jsx((function FontSizeValue(_ref4){var _ref4$variable=_ref4.variable;return __jsx("div",{style:{fontSize:"".concat(void 0===_ref4$variable?"":_ref4$variable)}},"Lorem ipsum dolor sit.")}),null))};FontSizeNew.displayName="FontSizeNew";var BaseStory=function BaseStory(){return __jsx(react.Fragment,null,__jsx(FontFamily,null),__jsx(FontWeight,null),__jsx(FontSizeNew,null),__jsx(LineHeightNew,null))};FontFamily.__docgenInfo={description:"",methods:[],displayName:"FontFamily"},FontWeight.__docgenInfo={description:"",methods:[],displayName:"FontWeight"},LineHeightNew.__docgenInfo={description:"",methods:[],displayName:"LineHeightNew"},FontSizeNew.__docgenInfo={description:"",methods:[],displayName:"FontSizeNew"},BaseStory.__docgenInfo={description:"",methods:[],displayName:"BaseStory"};const Typography_stories={title:"Design Tokens/Typography",component:BaseStory,tags:["autodocs"],parameters:{layout:"fullscreen"}};var Story={};Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"{}",...Story.parameters?.docs?.source}}}}}]);