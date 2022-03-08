"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 54265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_query)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: external "/Users/seonae/hyegithub/hye-design.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(57423);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(18733);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(37533);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx + 8 modules
var layout = __webpack_require__(87356);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx
var title = __webpack_require__(35027);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/listing.tsx + 1 modules
var listing = __webpack_require__(21566);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/list.tsx
/** @jsx jsx */



const List = ({
  children
}) => (0,theme_ui_esm/* jsx */.tZ)("section", {
  sx: {
    mb: [5, 5, 6],
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: `none`,
      mb: 3,
      a: {
        variant: `links.listItem`
      }
    },
    variant: `section_bottom`
  }
}, children);

/* harmony default export */ const list = (List);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(31889);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx
var use_site_metadata = __webpack_require__(1567);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(41340);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts
var utils = __webpack_require__(15178);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
;// CONCATENATED MODULE: ./src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return (0,esm.mdx)("div", props);
};

const Text = makeShortcode("Text");
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return (0,esm.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,esm.mdx)(Text, {
    sx: {
      fontSize: [4, 5, 6],
      fontWeight: `bold`,
      color: `heading`
    },
    mdxType: "Text"
  }, "Hi."), (0,esm.mdx)("p", null, `I love design!`));
}
;
MDXContent.isMDXComponent = true;
;// CONCATENATED MODULE: ./src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx

const bottom_excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const bottom_frontmatter = {};

const bottom_makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return (0,esm.mdx)("div", props);
};

const Title = bottom_makeShortcode("Title");
const bottom_layoutProps = {
  _frontmatter: bottom_frontmatter
};
const bottom_MDXLayout = "wrapper";
function bottom_MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, bottom_excluded);

  return (0,esm.mdx)(bottom_MDXLayout, Object.assign({}, bottom_layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,esm.mdx)(Title, {
    text: "Projects",
    mdxType: "Title"
  }), (0,esm.mdx)("ul", null, (0,esm.mdx)("li", {
    parentName: "ul"
  }, (0,esm.mdx)("a", {
    parentName: "li",
    "href": "https://www.lekoarts.de/art/3d?utm_source=minimal-blog&utm_medium=Theme"
  }, `3D Art with Cinema4D`)), (0,esm.mdx)("li", {
    parentName: "ul"
  }, (0,esm.mdx)("a", {
    parentName: "li",
    "href": "https://www.lekoarts.de/art/photography?utm_source=minimal-blog&utm_medium=Theme"
  }, `Landscape Photography`))));
}
;
bottom_MDXContent.isMDXComponent = true;
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/homepage.tsx
/** @jsx jsx */









 // @ts-ignore

 // @ts-ignore



const Homepage = ({
  posts
}) => {
  const {
    basePath,
    blogPath
  } = (0,use_minimal_blog_config/* default */.Z)();
  const {
    siteTitle
  } = (0,use_site_metadata/* default */.Z)();
  return (0,theme_ui_esm/* jsx */.tZ)(layout/* default */.Z, null, (0,theme_ui_esm/* jsx */.tZ)("h1", {
    sx: utils/* visuallyHidden */.j
  }, siteTitle), (0,theme_ui_esm/* jsx */.tZ)("section", {
    sx: {
      mb: [5, 6, 7],
      p: {
        fontSize: [1, 2, 3],
        mt: 2
      },
      variant: `section_hero`
    }
  }, (0,theme_ui_esm/* jsx */.tZ)(MDXContent, null)), (0,theme_ui_esm/* jsx */.tZ)(title/* default */.Z, {
    text: "Latest Posts"
  }, (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link, {
    to: (0,replaceSlashes/* default */.Z)(`/${basePath}/${blogPath}`)
  }, "Read all posts")), (0,theme_ui_esm/* jsx */.tZ)(listing/* default */.Z, {
    posts: posts,
    showTags: false
  }), (0,theme_ui_esm/* jsx */.tZ)(list, null, (0,theme_ui_esm/* jsx */.tZ)(bottom_MDXContent, null)));
};

/* harmony default export */ const homepage = (Homepage);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/homepage.tsx



function MinimalBlogCoreHomepage(_ref) {
  let props = (0,esm_extends/* default */.Z)({}, _ref);

  const {
    data: {
      allPost
    }
  } = props;
  return /*#__PURE__*/index_js_.createElement(homepage, Object.assign({
    posts: allPost.nodes
  }, props));
}
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/homepage-query.tsx

/* harmony default export */ const homepage_query = (MinimalBlogCoreHomepage);
const query = "3458255521";

/***/ }),

/***/ 96094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37533);
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31889);
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41340);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */






const ItemTags = ({
  tags
}) => {
  const {
    tagsPath,
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, tags.map((tag, i) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    key: tag.slug
  }, !!i && `, `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    sx: t => {
      var _t$styles;

      return _objectSpread({}, (_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a);
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(`/${basePath}/${tagsPath}/${tag.slug}`)
  }, tag.name))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

/***/ }),

/***/ 87356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: external "/Users/seonae/hyegithub/hye-design.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(57423);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(16657);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(18733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js
var theme_ui_css_esm = __webpack_require__(33431);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js + 17 modules
var theme_ui_components_esm = __webpack_require__(17631);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx
var seo = __webpack_require__(40901);
// EXTERNAL MODULE: ./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js
var theme_ui_color_modes_esm = __webpack_require__(86197);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(31889);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx
/** @jsx jsx */


// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
const ColorModeToggle = ({
  isDark,
  toggle
}) => (0,theme_ui_esm/* jsx */.tZ)("button", {
  onClick: toggle,
  type: "button",
  "aria-label": isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  title: isDark ? `Activate Light Mode` : `Activate Dark Mode`,
  sx: {
    opacity: 0.65,
    position: `relative`,
    borderRadius: `5px`,
    width: `40px`,
    height: `25px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    transition: `opacity 0.3s ease`,
    border: `none`,
    outline: `none`,
    background: `none`,
    cursor: `pointer`,
    padding: 0,
    appearance: `none`,
    "&:hover, &:focus": {
      opacity: 1
    }
  }
}, (0,theme_ui_esm/* jsx */.tZ)("div", {
  sx: {
    position: `relative`,
    width: `24px`,
    height: `24px`,
    borderRadius: `50%`,
    border: t => isDark ? `4px solid ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}` : `none`,
    backgroundColor: isDark ? `toggleIcon` : `transparent`,
    transform: isDark ? `scale(0.55)` : `scale(1)`,
    transition: `all 0.45s ease`,
    overflow: isDark ? `visible` : `hidden`,
    boxShadow: t => isDark ? `none` : `inset 8px -8px 0px 0px ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}`,
    "&:before": {
      content: `""`,
      position: `absolute`,
      right: `-9px`,
      top: `-9px`,
      height: `24px`,
      width: `24px`,
      border: t => isDark ? `2px solid ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}` : `none`,
      borderRadius: `50%`,
      transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
      opacity: isDark ? 0 : 1,
      transition: `transform 0.45s ease`
    },
    "&:after": {
      content: `""`,
      width: `8px`,
      height: `8px`,
      borderRadius: `50%`,
      margin: `-4px 0 0 -4px`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      boxShadow: t => `0 -23px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t, `colors.toggleIcon`)}`,
      transform: isDark ? `scale(1)` : `scale(0)`,
      transition: `all 0.35s ease`
    }
  }
}));

/* harmony default export */ const colormode_toggle = (ColorModeToggle);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(37533);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(41340);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */






const Navigation = ({
  nav
}) => {
  const {
    basePath
  } = (0,use_minimal_blog_config/* default */.Z)();
  return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment, null, nav && nav.length > 0 && (0,theme_ui_esm/* jsx */.tZ)("nav", {
    sx: {
      "a:not(:last-of-type)": {
        mr: 3
      },
      fontSize: [1, `18px`],
      ".active": {
        color: `heading`
      }
    }
  }, nav.map(item => (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link, {
    activeClassName: "active",
    key: item.slug,
    sx: t => {
      var _t$styles;

      return _objectSpread({}, (_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a);
    },
    to: (0,replaceSlashes/* default */.Z)(`/${basePath}/${item.slug}`)
  }, item.title))));
};

/* harmony default export */ const navigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx
var use_site_metadata = __webpack_require__(1567);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx
/** @jsx jsx */






const HeaderTitle = () => {
  const {
    siteTitle
  } = (0,use_site_metadata/* default */.Z)();
  const {
    basePath
  } = (0,use_minimal_blog_config/* default */.Z)();
  return (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link, {
    to: (0,replaceSlashes/* default */.Z)(`/${basePath}`),
    "aria-label": `${siteTitle} - Back to home`,
    sx: {
      color: `heading`,
      textDecoration: `none`
    }
  }, (0,theme_ui_esm/* jsx */.tZ)("div", {
    sx: {
      my: 0,
      fontWeight: `medium`,
      fontSize: [3, 4]
    }
  }, siteTitle));
};

/* harmony default export */ const header_title = (HeaderTitle);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx
/** @jsx jsx */




const HeaderExternalLinks = () => {
  const {
    externalLinks
  } = (0,use_minimal_blog_config/* default */.Z)();
  return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment, null, externalLinks && externalLinks.length > 0 && (0,theme_ui_esm/* jsx */.tZ)("div", {
    sx: {
      "a:not(:first-of-type)": {
        ml: 3
      },
      fontSize: [1, `18px`]
    }
  }, externalLinks.map(link => (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU, {
    key: link.url,
    href: link.url
  }, link.name))));
};

/* harmony default export */ const header_external_links = (HeaderExternalLinks);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx
/** @jsx jsx */







const Header = () => {
  const {
    navigation: nav
  } = (0,use_minimal_blog_config/* default */.Z)();
  const [colorMode, setColorMode] = (0,theme_ui_color_modes_esm/* useColorMode */.If)();
  const isDark = colorMode === `dark`;

  const toggleColorMode = e => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (0,theme_ui_esm/* jsx */.tZ)("header", {
    sx: {
      mb: [5, 6]
    }
  }, (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Flex */.kC, {
    sx: {
      alignItems: `center`,
      justifyContent: `space-between`
    }
  }, (0,theme_ui_esm/* jsx */.tZ)(header_title, null), (0,theme_ui_esm/* jsx */.tZ)(colormode_toggle, {
    isDark: isDark,
    toggle: toggleColorMode
  })), (0,theme_ui_esm/* jsx */.tZ)("div", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      variant: `dividers.bottom`,
      alignItems: `center`,
      justifyContent: `space-between`,
      mt: 3,
      color: `secondary`,
      a: {
        color: `secondary`,
        ":hover": {
          color: `heading`
        }
      },
      flexFlow: `wrap`
    }
  }, (0,theme_ui_esm/* jsx */.tZ)(navigation, {
    nav: nav
  }), (0,theme_ui_esm/* jsx */.tZ)(header_external_links, null)));
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx
/** @jsx jsx */



const Footer = () => {
  const {
    siteTitle
  } = (0,use_site_metadata/* default */.Z)();
  return (0,theme_ui_esm/* jsx */.tZ)("footer", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`
    }
  }, (0,theme_ui_esm/* jsx */.tZ)("div", null, "\xA9 ", new Date().getFullYear(), " by ", siteTitle, ". All rights reserved."), (0,theme_ui_esm/* jsx */.tZ)("div", null, (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU, {
    "aria-label": "Link to the theme's GitHub repository",
    href: "https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
  }, "Theme"), ` `, "by", ` `, (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU, {
    "aria-label": "Link to the theme author's website",
    href: "https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
  }, "LekoArts")));
};

/* harmony default export */ const footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@theme-ui/color/dist/theme-ui-color.esm.js + 6 modules
var theme_ui_color_esm = __webpack_require__(29464);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts

const code = {
  "[data-name='live-editor']": {
    fontSize: 1,
    "textarea, pre": {
      padding: t => `${t.space[3]} !important`
    }
  },
  "[data-name='live-preview']": {
    padding: t => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: (0,theme_ui_color_esm/* tint */.nV)(`primary`, 0.7)
  },
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: `2rem 1rem 1rem 1rem`,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3
      }
    }
  },
  ".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']": {
    ".prism-code": {
      pt: `1rem`
    }
  },
  ".token": {
    display: `inline-block`
  },
  "p > code, li > code": {
    bg: `gray.2`,
    color: `gray.8`,
    px: 2,
    py: 1,
    borderRadius: `2px`
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    borderRadius: `2px`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`
    }
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `rgb(1, 22, 39)`
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`
  },
  ".code-title": {
    backgroundColor: (0,theme_ui_color_esm/* tint */.nV)(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3]
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
    fontSize: [1, 1, 2]
  },
  ".token-line": {
    pr: 3
  },
  ".highlight-line": {
    backgroundColor: `rgb(2, 55, 81)`,
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`
    }
  },
  ".react-live-wrapper": {
    position: `relative`
  },
  ".react-live-wrapper .code-copy-button": {
    right: [0, 0, 0, -3]
  }
};
/* harmony default export */ const styles_code = (code);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx

const _excluded = ["children"];

/** @jsx jsx */


const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`
  }
};

const SkipNavLink = _ref => {
  let {
    children
  } = _ref,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return (0,theme_ui_esm/* jsx */.tZ)("a", Object.assign({}, props, {
    sx: skipNavStyles,
    href: "#skip-nav",
    "data-skip-link": "true"
  }), children);
};

/* harmony default export */ const skip_nav = (SkipNavLink);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx


function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? layout_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */









const Layout = ({
  children,
  className = ``
}) => (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment, null, (0,theme_ui_esm/* jsx */.tZ)(emotion_react_esm/* Global */.xB, {
  styles: t => ({
    "*": {
      boxSizing: `inherit`
    },
    html: {
      WebkitTextSizeAdjust: `100%`
    },
    img: {
      borderStyle: `none`
    },
    pre: {
      fontFamily: `monospace`,
      fontSize: `1em`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: (0,theme_ui_css_esm/* get */.U2)(t, `colors.text`),
      color: (0,theme_ui_css_esm/* get */.U2)(t, `colors.background`)
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: `text`
    }
  })
}), (0,theme_ui_esm/* jsx */.tZ)(seo/* default */.Z, null), (0,theme_ui_esm/* jsx */.tZ)(skip_nav, null, "Skip to content"), (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Container */.W2, null, (0,theme_ui_esm/* jsx */.tZ)(header, null), (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu, {
  id: "skip-nav",
  as: "main",
  variant: "layout.main",
  sx: layout_objectSpread({}, styles_code),
  className: className
}, children), (0,theme_ui_esm/* jsx */.tZ)(footer, null)));

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 21566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ listing)
});

// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(18733);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: external "/Users/seonae/hyegithub/hye-design.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(57423);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js + 17 modules
var theme_ui_components_esm = __webpack_require__(17631);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(37533);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx
var item_tags = __webpack_require__(96094);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */





const BlogListItem = ({
  post,
  showTags = true
}) => (0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu, {
  mb: 4
}, (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link, {
  to: post.slug,
  sx: t => {
    var _t$styles;

    return _objectSpread(_objectSpread({}, (_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a), {}, {
      fontSize: [1, 2, 3],
      color: `text`
    });
  }
}, post.title), (0,theme_ui_esm/* jsx */.tZ)("p", {
  sx: {
    color: `secondary`,
    mt: 1,
    a: {
      color: `secondary`
    },
    fontSize: [1, 1, 2]
  }
}, (0,theme_ui_esm/* jsx */.tZ)("time", null, post.date), post.tags && showTags && (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment, null, ` — `, (0,theme_ui_esm/* jsx */.tZ)(item_tags/* default */.Z, {
  tags: post.tags
}))));

/* harmony default export */ const blog_list_item = (BlogListItem);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/listing.tsx
/** @jsx jsx */



const Listing = ({
  posts,
  className = ``,
  showTags = true
}) => (0,theme_ui_esm/* jsx */.tZ)("section", {
  sx: {
    mb: [5, 6, 7]
  },
  className: className
}, posts.map(post => (0,theme_ui_esm/* jsx */.tZ)(blog_list_item, {
  key: post.slug,
  post: post,
  showTags: showTags
})));

/* harmony default export */ const listing = (Listing);

/***/ }),

/***/ 40901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37533);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1567);





const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author
  } = site;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    title: title,
    defaultTitle: defaultTitle,
    titleTemplate: `%s | ${siteTitle}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", {
    lang: siteLanguage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-minimal-blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/apple-touch-icon.png`)
  }), canonicalUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }) : null, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37533);


const useSiteMetadata = () => {
  const data = (0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("318001574");
  return data.site.siteMetadata;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ 41340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */
function replaceSlashes(input) {
  return input.replace(/\/\/+/g, `/`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx.js.map