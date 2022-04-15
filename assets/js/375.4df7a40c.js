(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1938:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"比较说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较说明"}},[s._v("#")]),s._v(" 比较说明")]),s._v(" "),a("blockquote",[a("p",[s._v("自己实现的；")])]),s._v(" "),a("p",[s._v("跟v3版本主要的不同点：")]),s._v(" "),a("ul",[a("li",[s._v("vue2 js中操作的语法；")]),s._v(" "),a("li",[s._v("组件样式直接写在vue代码中；")]),s._v(" "),a("li",[s._v("测试用例的方式引入vue方式；")]),s._v(" "),a("li",[s._v("文档库该用vuepress;")]),s._v(" "),a("li",[s._v("使用了demo-block组件；")]),s._v(" "),a("li",[s._v("文档中的引入组件示范格式不同；")])]),s._v(" "),a("h2",{attrs:{id:"组件的划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的划分"}},[s._v("#")]),s._v(" 组件的划分")]),s._v(" "),a("p",[s._v("以"),a("code",[s._v("elementUi")]),s._v("为基准划分为")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Basic")]),s._v(":"),a("code",[s._v("Icon图标")]),s._v("、"),a("code",[s._v("Button")]),s._v("、"),a("code",[s._v("Layout布局")]),s._v("、"),a("code",[s._v("container布局容器")]),s._v("...")]),s._v(" "),a("li",[a("code",[s._v("Form")]),s._v(": "),a("code",[s._v("Input")]),s._v("、"),a("code",[s._v("Radio")]),s._v("、"),a("code",[s._v("checkbox")]),s._v("、"),a("code",[s._v("DatePicker")]),s._v("、"),a("code",[s._v("Upload")]),s._v("...")]),s._v(" "),a("li",[a("code",[s._v("Data")]),s._v(":"),a("code",[s._v("Table")]),s._v("、"),a("code",[s._v("Tree")]),s._v("、"),a("code",[s._v("Pagination")]),s._v("...")]),s._v(" "),a("li",[a("code",[s._v("Notice")]),s._v(":"),a("code",[s._v("Alert")]),s._v("、"),a("code",[s._v("Loading")]),s._v("、"),a("code",[s._v("Message")]),s._v("...")]),s._v(" "),a("li",[a("code",[s._v("Navigation")]),s._v(": "),a("code",[s._v("Tabs")]),s._v("、"),a("code",[s._v("Dropdown")]),s._v("、"),a("code",[s._v("NavMenu")]),s._v("...")]),s._v(" "),a("li",[a("code",[s._v("Others")]),s._v(":"),a("code",[s._v("Popover")]),s._v(","),a("code",[s._v("Dialog")]),s._v("、"),a("code",[s._v("inifiniteScroll")]),s._v("、"),a("code",[s._v("Carousel")]),s._v("...")])]),s._v(" "),a("h2",{attrs:{id:"搭建库文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建库文档"}},[s._v("#")]),s._v(" 搭建库文档")]),s._v(" "),a("h3",{attrs:{id:"可能碰到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能碰到的问题"}},[s._v("#")]),s._v(" 可能碰到的问题")]),s._v(" "),a("p",[a("strong",[s._v("全局引入组件库相关")])]),s._v(" "),a("p",[s._v("搭建vuepress文档，想要在文档中展示我基于element ui写的组件demo，故创建文件enhanceApp.js")]),s._v(" "),a("p",[s._v("enhanceApp.js的配置如下")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui/lib/theme-chalk/index.css'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" demos "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../src/examples'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Components "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../src/packages'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个方法特别处理，不错的，推荐；")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseComponentsName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rat'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[A-Z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("demos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" demos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseComponentsName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("strong",[s._v("vuepress加载element-ui时报错Cannot find module ‘core-js/library/fn/object/assign")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/2275",target:"_blank",rel:"noopener noreferrer"}},[s._v("在中"),a("OutboundLink")],1),s._v("发现，"),a("code",[s._v("原来是element ui依赖core-js的2.x版本，而web项目依赖core-js的3.x版本导致的；")])]),s._v(" "),a("p",[s._v("改core-js的版本是不可能的，安装依赖yarn add async-validator@1.11.5 / npm install async-validator@1.11.5就可以解决问题;")]),s._v(" "),a("p",[s._v("npx vuepress info，如果出现vue包版本不一致的问题，记得将版本安装一致;")])])}),[],!1,null,null,null);t.default=e.exports}}]);