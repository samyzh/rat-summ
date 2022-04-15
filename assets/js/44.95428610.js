(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1872:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"基础概念-dll-其实就是缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-dll-其实就是缓存"}},[s._v("#")]),s._v(" 基础概念：dll 其实就是缓存")]),s._v(" "),n("p",[s._v("说实话我刚看见这个 "),n("strong",[s._v("dll 动态链接库")]),s._v("的时候，我真被镇住了：这是什么玩意？怎么根本没听说过？")]),s._v(" "),n("p",[s._v("好学的我赶紧 Google 一下，在"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E9%93%BE%E6%8E%A5%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科"),n("OutboundLink")],1),s._v("里找到了标准定义：")]),s._v(" "),n("blockquote",[n("p",[s._v("所谓动态链接，就是把一些经常会共享的代码制作成 DLL 档，当可执行文件调用到 DLL 档内的函数时，Windows 操作系统才会把 DLL 档加载存储器内，DLL 档本身的结构就是可执行档，当程序有需求时函数才进行链接。透过动态链接方式，存储器浪费的情形将可大幅降低。")])]),s._v(" "),n("p",[s._v("唉，你们官方就是不说人话。")]),s._v(" "),n("p",[s._v("我结合 webpack，从前端的角度翻译一下：")]),s._v(" "),n("p",[s._v("具体到 webpack 这块儿，就是事先把常用但又构建时间长的代码提前打包好（例如 react、react-dom），取个名字叫 dll。后面再打包的时候就跳过原来的未打包代码，直接用 dll。这样一来，构建时间就会缩短，提高 webpack 打包速度。")]),s._v(" "),n("p",[s._v("我盯着上面那句话看了三分钟，什么 DLL，什么动态链接库，在前端世界里，不就是个"),n("strong",[s._v("缓存")]),s._v("吗！都是拿空间换时间。")]),s._v(" "),n("blockquote",[n("p",[s._v("注：在这里狭义上可以理解为拿空间换时间，如果真的要探讨 dll 背后的知识："),n("strong",[s._v("动态链接库")]),s._v("和"),n("strong",[s._v("静态链接库")]),s._v("，就又涉及到编译器的知识了，具体讲下去又是一篇新的文章了，所以暂时按下不表。")])]),s._v(" "),n("p",[s._v("我们对比一下 DLL 和前端常接触的网络缓存，一张表就看明白了：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(627),alt:"img"}})]),s._v(" "),n("p",[s._v("所以在前端世界里， DLL 就是个另类缓存。")]),s._v(" "),n("h2",{attrs:{id:"dll-手动配置-这么多步根本记不住"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dll-手动配置-这么多步根本记不住"}},[s._v("#")]),s._v(" DLL 手动配置：这么多步根本记不住")]),s._v(" "),n("p",[s._v("刚开始我们先不搞配置，我们设想一下，如果让你"),n("strong",[s._v("手动创建并管理缓存")]),s._v("，你会怎么做？")]),s._v(" "),n("p",[s._v("我想，大家的思路一般都是这样的：")]),s._v(" "),n("ol",[n("li",[s._v("第一次请求的时候，把请求后的内容"),n("strong",[s._v("存储")]),s._v("起来")]),s._v(" "),n("li",[s._v("建立一个"),n("strong",[s._v("映射表")]),s._v("，当后续有请求时，先根据这个映射表到看看要请求的内容有没有被缓存，有的话就加载缓存，没有就走正常请求流程（也就是所谓的"),n("strong",[s._v("缓存命中")]),s._v("问题）")]),s._v(" "),n("li",[s._v("命中缓存后，直接从缓存中拿取内容，交给程序处理")])]),s._v(" "),n("p",[s._v("主要流程无非这 3 步，想把事情搞大，可以再加些权重啊，过期时间啊，多级缓存什么的，但主要流程就是上面的 3 步。")]),s._v(" "),n("p",[s._v("一般我们在开发的时候，浏览器，http 协议都帮我们把这些操作封装好了，我们就记几个参数调参就行了；但是 webpack dll 不一样，它需要我们手动实现上面 3 个步骤，所以就非常的无聊 + 繁琐。")]),s._v(" "),n("p",[s._v("下面的代码比较乱，因为我也没打算好好讲这些绕来绕去的配置，具体结构最好看我 github 上放出的示例"),n("a",{attrs:{href:"https://github.com/skychx/webpack_learn/tree/master/optimization",target:"_blank",rel:"noopener noreferrer"}},[s._v("源代码"),n("OutboundLink")],1),s._v("，"),n("strong",[s._v("看不懂也没事，后面有更好的解决方案")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("第 1 步")]),s._v("，我们先要创建 dll 文件，这个相当于我们对第一次的请求内容进行存储，然后我们还要创建一个映射表，告诉程序我们把啥文件做成 dll 了（这个相当于"),n("strong",[s._v("第 2 步")]),s._v("）：")]),s._v(" "),n("p",[s._v("首先我们写一个创建 dll 文件的打包脚本，目的是把 "),n("code",[s._v("react")]),s._v("，"),n("code",[s._v("react-dom")]),s._v("打包成 dll 文件：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件目录：configs/webpack.dll.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码太长可以不看")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" webpack "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        react"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-dom'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个是输出 dll 文件")]),s._v("\n    output"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dll'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_dll_[name].js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        library"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_dll_[name]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个是输出映射表")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DllPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_dll_[name]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name === output.library")]),s._v("\n            path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dll/[name].manifest.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("打包脚本写好了，我们总得运行吧？所以我们写个运行脚本放在 "),n("code",[s._v("package.json")]),s._v(" 的 "),n("code",[s._v("scripts")]),s._v(" 标签里，这样我们运行 "),n("code",[s._v("npm run build:dll")]),s._v(" 就可以打包 dll 文件了：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:dll"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --config configs/webpack.dll.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("第 3 步")]),s._v("，链接 dll 文件，也就是告诉 webpack 可以命中的 dll 文件，配置也是一大坨：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件目录：configs/webpack.common.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码太长可以不看")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" AddAssetHtmlPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add-asset-html-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顾名思义，把资源加到 html 里，那这个插件把 dll 加入到 index.html 里")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" webpack "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DllReferencePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意: DllReferencePlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败")]),s._v("\n      context"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      manifest"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dll/react.manifest.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AddAssetHtmlPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      filepath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dll/_dll_react.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("为了减少一些大型库的二次打包时间，我们在 3 个文件里写了一堆配置代码，小心翼翼，如履薄冰，中间说不定还会因为作用域的问题链接失败（对，说的就是我）。配置 dll 会给人带来巨大的心理阴影，有没有其他方法降低我们的心智负担呢？")]),s._v(" "),n("h2",{attrs:{id:"autodllplugin-解放你的配置负担"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#autodllplugin-解放你的配置负担"}},[s._v("#")]),s._v(" AutoDllPlugin：解放你的配置负担")]),s._v(" "),n("p",[s._v("在第 2 小节里我"),n("strong",[s._v("疯狂劝退")]),s._v("，就是想介绍这个插件："),n("a",{attrs:{href:"https://github.com/asfktz/autodll-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("autodll-webpack-plugin"),n("OutboundLink")],1),s._v("，这个插件把上面那 3 坨代码整合到一块儿，让我们摆脱繁琐的配置，让我们看看这么用吧：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件目录：configs/webpack.common.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" AutoDllPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autodll-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第 1 步：引入 DLL 自动链接库插件")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第 2 步：配置要打包为 dll 的文件")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AutoDllPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            inject"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设为 true 就把 DLL bundles 插到 index.html 里")]),s._v("\n            filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].dll.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            context"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AutoDllPlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败")]),s._v("\n            entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                react"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-dom'")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[n("code",[s._v("autodll-webpack-plugin")]),s._v(" 的使用方法和 webpack 的其他 "),n("code",[s._v("plugin")]),s._v(" 使用方式非常相似，和手动引入 dll 的方法比起来，简单许多，而且这个插件之前是被 vue-cli 使用的，质量也是比较稳定的，大家可以放心使用。")]),s._v(" "),n("h2",{attrs:{id:"抛弃-dll-vue-react-官方的共同选择"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抛弃-dll-vue-react-官方的共同选择"}},[s._v("#")]),s._v(" 抛弃 DLL：Vue & React 官方的共同选择")]),s._v(" "),n("p",[s._v("第 3 节我说 "),n("code",[s._v("autodll-webpack-plugin")]),s._v(" 之前被 vue-cli 使用，那意思是现在不用了？是不是有 bug 啊？这个还真不是。")]),s._v(" "),n("p",[s._v("学习 webpack 的时候，为了借鉴一下业内优秀的框架的 webpack 配置，我专门看了 vue-cli 和 create-react-app 的源码，但是却没有找到任何 dll 的配置痕迹。")]),s._v(" "),n("p",[s._v("这就很奇怪了，我之前翻过一些 nuxt.js 1.0 的源码，里面是有 dll 的配置代码的，按道理来说 vue-cli 也应该有的，我就猜测是在某次升级中，把 dll 去掉了。所以我开始查找 commit 记录，果然被我找到了：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(628),alt:"img"}})]),s._v(" "),n("blockquote",[n("p",[s._v("白纸黑字，remove DLL option 3 个大字写的清清楚楚")])]),s._v(" "),n("p",[s._v("原因是什么呢？在这个 "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/1205",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),n("OutboundLink")],1),s._v(" 里尤雨溪解释了去除的原因：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(629),alt:"img"}})]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("dll")]),s._v(" option will be removed. Webpack 4 should provide good enough perf and the cost of maintaining DLL mode inside Vue CLI is no longer justified.")]),s._v(" "),n("p",[s._v("dll 配置将会被移除，因为 Webpack 4 的打包性能足够好的，dll 没有在 Vue ClI 里继续维护的必要了。")])]),s._v(" "),n("p",[s._v("同样的，在这个 "),n("a",{attrs:{href:"https://github.com/facebook/create-react-app/pull/2710",target:"_blank",rel:"noopener noreferrer"}},[s._v("PR"),n("OutboundLink")],1),s._v(" 里 create-react-app 里也给出了类似的解释："),n("strong",[s._v("webpack 4 有着比 dll 更好的打包性能")]),s._v("。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(630),alt:"img"}})]),s._v(" "),n("p",[s._v("所以说，如果项目上了 webpack 4，再使用 dll 收益并不大。我拿实际项目的代码试了一下，加入 dll 可能会有 1-2 s 的速度提升，对于整体打包时间可以说可以忽略不计。")]),s._v(" "),n("p",[s._v("Vue 和 React 官方 2018 都不再使用 dll 了，现在 2019 年都快过去了，所以说"),n("strong",[s._v("我上面说的都没用了，都不用学了")]),s._v("，是不是感觉松了一口气（疯狂暗示点赞）？")]),s._v(" "),n("h2",{attrs:{id:"比-dll-更优秀的插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#比-dll-更优秀的插件"}},[s._v("#")]),s._v(" 比 DLL 更优秀的插件")]),s._v(" "),n("p",[s._v("dll 加速不明显了，有没有更好的替代品？在 "),n("a",{attrs:{href:"https://github.com/asfktz/autodll-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("AutoDllPlugin"),n("OutboundLink")],1),s._v(" 的 README.md 里，给我们推荐了 "),n("a",{attrs:{href:"https://github.com/mzgoddard/hard-source-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("HardSourceWebpackPlugin"),n("OutboundLink")],1),s._v("，初始配置更简单，只需要一行代码：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HardSourceWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hard-source-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HardSourceWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <- 直接加入这行代码就行")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这个插件加速有多明显呢？我拿本文的试例代码测试了一下，下图是常规的打包时间，大概 900 ms：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(631),alt:"img"}})]),s._v(" "),n("p",[s._v("加入 dll 优化后，打包时间为 507 ms，缩短了 400 ms 左右：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(632),alt:"img"}})]),s._v(" "),n("p",[s._v("只使用 HardSourceWebpackPlugin，再次打包时间缩短到 253 ms：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(633),alt:"img"}})]),s._v(" "),n("p",[s._v("看相关的"),n("a",{attrs:{href:"https://github.com/webpack/webpack/issues/6527",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),n("OutboundLink")],1),s._v("，貌似这个技术直接放到了 webpack 5 里，开箱即用。所以，虽然 dll 的配置你不用学了，但是 "),n("strong",[s._v("webpack 5 is coming")]),s._v("......")]),s._v(" "),n("p",[n("img",{attrs:{src:a(634),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("p",[s._v("这篇文章很难说它是一篇教程，更多的是记录了我学习 webpack 中的一个探索过程。说实话我把 dll 手动配完觉得我挺 nb 的，这么复杂的配置我都能配好。")]),s._v(" "),n("p",[s._v("当我后续找到 "),n("code",[s._v("autodll-webpack-plugin")]),s._v("，并发现 dll 已经被抛弃时，其实还是有些失望，觉得自己的之前的努力都白费了，不由自主产生 "),n("code",[s._v("学不动")]),s._v(" 的想法。但是当我仔细想了一下 dll 的原理，发现也就是那么一会事儿，拿空间换时间，只不过配置复杂了一些。")]),s._v(" "),n("p",[s._v("所以这也提醒我们，学习新知识的时候，不要专注于流程的配置和调参。因为"),n("strong",[s._v("流程终会简化，参数（API）终会升级")]),s._v("。要抓大放小，把精力放在最核心的内容上，因为核心的思想是最不容易过时的。")]),s._v(" "),n("h2",{attrs:{id:"相关链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),n("p",[s._v("https://zhuanlan.zhihu.com/p/84014459")])])}),[],!1,null,null,null);t.default=e.exports},627:function(s,t,a){s.exports=a.p+"assets/img/v2-8b7b1c03ca50ee51f3b1588510941156_720w.fba90cd9.jpg"},628:function(s,t,a){s.exports=a.p+"assets/img/v2-dabf8f1c277482f51e1526aa713aa9f6_720w.3c5d92f2.jpg"},629:function(s,t,a){s.exports=a.p+"assets/img/v2-a5b47d8f5914728dcc237dfe0701689e_720w.a5b47d8f.png"},630:function(s,t,a){s.exports=a.p+"assets/img/v2-f19e8a845a64b7da1e097f927d9bd1d3_720w.66958b99.jpg"},631:function(s,t,a){s.exports=a.p+"assets/img/v2-811cd5ce8ca63036df6ccb5e48cb8a56_720w.3fbd12e7.jpg"},632:function(s,t,a){s.exports=a.p+"assets/img/v2-0efb41b7445a81d961bed80d2fb066ee_720w.5e46dea9.jpg"},633:function(s,t,a){s.exports=a.p+"assets/img/v2-05d5e3f7503fe2f24fef66bd1d70db58_720w.69bc61b2.jpg"},634:function(s,t,a){s.exports=a.p+"assets/img/v2-2010ab129496e466af8a74ecc07cb81d_720w.4018ab38.jpg"}}]);