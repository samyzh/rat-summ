(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1469:function(t,s,a){t.exports=a.p+"assets/img/webkitflow.b2b7c07b.png"},2232:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"浏览器渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[t._v("#")]),t._v(" 浏览器渲染")]),t._v(" "),v("h3",{attrs:{id:"浏览器解析渲染页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析渲染页面"}},[t._v("#")]),t._v(" 浏览器解析渲染页面")]),t._v(" "),v("p",[t._v("浏览器拿到响应文本 HTML 后，接下来介绍下浏览器渲染机制")]),t._v(" "),v("p",[v("img",{attrs:{src:a(1469),alt:"Webkit main flow"}})]),t._v(" "),v("p",[t._v("浏览器解析渲染页面分为一下五个步骤："),v("strong",[t._v("【DCJ渲布绘】")])]),t._v(" "),v("ul",[v("li",[t._v("根据 HTML 解析出 "),v("strong",[t._v("DOM 树")])]),t._v(" "),v("li",[t._v("根据 CSS 解析生成 "),v("strong",[t._v("CSS 规则树")])]),t._v(" "),v("li",[v("strong",[t._v("结合 DOM 树和 CSS 规则树，生成渲染树")])]),t._v(" "),v("li",[t._v("根据渲染树计算每一个节点的信息")]),t._v(" "),v("li",[t._v("根据计算好的信息绘制页面")])]),t._v(" "),v("h2",{attrs:{id:"html基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html基础"}},[t._v("#")]),t._v(" HTML基础")]),t._v(" "),v("h3",{attrs:{id:"html5有哪些更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html5有哪些更新"}},[t._v("#")]),t._v(" HTML5有哪些更新")]),t._v(" "),v("h4",{attrs:{id:"总括"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总括"}},[t._v("#")]),t._v(" "),v("strong",[t._v("总括")])]),t._v(" "),v("p",[t._v("（1）新增语义化标签：nav、header、footer、aside、section、article")]),t._v(" "),v("p",[t._v("（2）音频、视频标签：audio、video")]),t._v(" "),v("p",[t._v("（3）数据存储：localStorage、sessionStorage")]),t._v(" "),v("p",[t._v("（4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议）")]),t._v(" "),v("p",[t._v("（5）input标签新增属性：placeholder、autocomplete、autofocus、required")]),t._v(" "),v("p",[t._v("（6）history API：go、forward、back、pushstate")]),t._v(" "),v("h3",{attrs:{id:"canvas-和-svg-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#canvas-和-svg-有什么区别"}},[t._v("#")]),t._v(" Canvas 和 SVG 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("Canvas 是一种"),v("strong",[t._v("通过 JavaScript 来绘制 2D 图形")]),t._v("的方法。"),v("strong",[t._v("Canvas 是逐像素来进行渲染的，因此当我们对 Canvas 进行缩放时，会出现锯齿或者失真的情况")]),t._v("。")]),t._v(" "),v("li",[t._v("SVG 是一种"),v("strong",[t._v("使用 XML 描述 2D 图形的语言")]),t._v("。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素附加 JavaScript 事件监听函数。"),v("strong",[t._v("并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并不会失真")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"cookies-sessionstorage和localstorage区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookies-sessionstorage和localstorage区别"}},[t._v("#")]),t._v(" "),v("strong",[t._v("cookies，sessionStorage和localStorage区别")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("生命期")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("大小限制")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("与服务器通信")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("一般由服务器生成，可设置失效时间")]),t._v("。如果在浏览器端生成Cookie，默认是关闭浏览器后失效")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4KB")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("每次都会携带在HTTP头中")]),t._v("，如果使用cookie保存过多数据会带来性能问题")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("sessionStorage")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("仅在当前会话下有效，关闭页面或浏览器后被清除")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5MB")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("仅在浏览器中保存，不与服务器通信")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("localStorage")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("除非被清除，否则永久保存")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5MB")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("仅在浏览器中保存，不与服务器通信")])])])]),t._v(" "),v("h2",{attrs:{id:"css基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css基础"}},[t._v("#")]),t._v(" CSS基础")]),t._v(" "),v("h3",{attrs:{id:"布局相关设置【pdfoz】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局相关设置【pdfoz】"}},[t._v("#")]),t._v(" 布局相关设置【PDFOZ】")]),t._v(" "),v("h4",{attrs:{id:"display的设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#display的设置"}},[t._v("#")]),t._v(" display的设置")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("单位")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("none")]),t._v(" "),v("td",[v("strong",[t._v("元素不显示，并从文档流中移除。")])])]),t._v(" "),v("tr",[v("td",[t._v("block")]),t._v(" "),v("td",[v("strong",[t._v("块类型")]),t._v("。默认宽度为父元素宽度，可设置宽高，换行显示。")])]),t._v(" "),v("tr",[v("td",[t._v("inline")]),t._v(" "),v("td",[v("strong",[t._v("行内元素类型")]),t._v("。默认宽度为内容宽度，不可设置宽高，同行显示。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("inline-block")])]),t._v(" "),v("td",[v("strong",[t._v("默认宽度为内容宽度，可以设置宽高，同行显示。")])])]),t._v(" "),v("tr",[v("td",[t._v("inherit")]),t._v(" "),v("td",[t._v("规定应该"),v("strong",[t._v("从父元素继承 display 属性")]),t._v("的值。")])]),t._v(" "),v("tr",[v("td",[t._v("table")]),t._v(" "),v("td",[t._v("此元素会作"),v("strong",[t._v("为块级表格来显示")]),t._v("。表格显示；")])]),t._v(" "),v("tr",[v("td",[t._v("list-item")]),t._v(" "),v("td",[t._v("象块类型元素一样显示，并添加样式列表标记。项目列表；")])])])]),t._v(" "),v("div",{staticClass:"language-css line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*==display 显示属性(div与span的区别); 反过来设置==*/")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div_span_1_cls,.div_span_2_cls,.div_span_3_cls")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<div class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div_span_1_cls"')]),t._v(">Samy张</div>\n<div class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div_span_2_cls"')]),t._v(">Samy张</div>\n<div class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div_span_3_cls"')]),t._v(">Samy张</div>\n<span class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span_div_3_cls"')]),t._v(">Samy张S</span>\n<span class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span_div_3_cls"')]),t._v(">Samy张S</span>\n<span class="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span_div_3_cls"')]),t._v(">Samy张S</span>\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br")])]),v("h4",{attrs:{id:"position-定位方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#position-定位方式"}},[t._v("#")]),t._v(" position 定位方式")]),t._v(" "),v("p",[v("strong",[t._v("设置")]),t._v("：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("static")]),t._v(" "),v("strong",[t._v("默认值")]),t._v("。没有定位，元素出现在正常的流中（"),v("strong",[t._v("忽略 top, bottom, left, right z-index 声明")]),t._v("）。")]),t._v(" "),v("li",[v("code",[t._v("relative")]),t._v(" 生成相对定位的元素，"),v("strong",[t._v("相对于其正常位置")]),t._v("进行定位。")]),t._v(" "),v("li",[v("code",[t._v("absolute")]),t._v(" 生成绝对定位的元素，"),v("strong",[t._v("相对于值不为 static的第一个父元素")]),t._v("进行定位。 fixed也可以；")]),t._v(" "),v("li",[v("code",[t._v("fixed")]),t._v(" 生成绝对定位的元素，相对于"),v("strong",[t._v("浏览器窗口")]),t._v("进行定位 ；悬浮设置后，宽高会自适应，记得设置 "),v("code",[t._v("width: 100%")]),t._v(",及定位设置；一个固定定位元素"),v("strong",[t._v("不会保留它原本在页面应有的空隙")]),t._v("。（老IE不支持）")]),t._v(" "),v("li",[v("code",[t._v("inherit")]),t._v(" 继承; 规定从父元素继承 position 属性的值。")])]),t._v(" "),v("p",[v("strong",[t._v("定位")]),t._v(": left（左），right（右），top（上），bottom（下）离页面顶点的距离")]),t._v(" "),v("p",[v("strong",[t._v("绝对定位和fixed定位的比较")])]),t._v(" "),v("p",[t._v("共同点："),v("strong",[t._v("改变行内元素的呈现方式，都脱离了文档流")]),t._v("；")]),t._v(" "),v("p",[t._v("不同点：absolute的**”根元素“是可以设置"),v("strong",[t._v("的，fixed的")]),t._v("“根元素”固定为浏览器窗口**")]),t._v(" "),v("p",[t._v("position: absolute;")]),t._v(" "),v("ul",[v("li",[t._v("相对于 非static的先辈元素定位；（正常情况）； 相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。"),v("strong",[t._v("如果无已定位祖先元素, 以body元素为偏移参照基准, 完全脱离了标准文档流。")])]),t._v(" "),v("li",[t._v("如果先辈元素全是"),v("code",[t._v("static")]),t._v("，那么相对于"),v("strong",[t._v("视口")]),t._v("定位；（特殊情况）")])]),t._v(" "),v("p",[t._v("position：fixed")]),t._v(" "),v("ul",[v("li",[t._v("相对于视口定位；（正常情况）")]),t._v(" "),v("li",[t._v("如果先辈元素有 "),v("code",[t._v("非none")]),t._v("的 "),v("code",[t._v("transform")]),t._v("属性，那么相对于该先辈元素定位（不注意容易产生BUG）")])]),t._v(" "),v("p",[t._v("失效的解决办法是：对父级元素设置transform: none; 或者display：inline")]),t._v(" "),v("blockquote",[v("h4",{attrs:{id:"position-fixed-在android下无效怎么处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed-在android下无效怎么处理"}},[t._v("#")]),t._v(" position:fixed;在android下无效怎么处理？")])]),t._v(" "),v("p",[t._v("手机上兼容设置：所以说并不是iOS不支持fixed，"),v("strong",[t._v("只是fixed的元素不是相对手机屏幕固定的")]),t._v("。")]),t._v(" "),v("p",[t._v("通过以下设置处理：")]),t._v(" "),v("div",{staticClass:"language-css line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[t._v("<meta name="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content="),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"')]),t._v("/>\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h4",{attrs:{id:"float-浮动属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#float-浮动属性"}},[t._v("#")]),t._v(" float 浮动属性")]),t._v(" "),v("p",[v("code",[t._v("left")]),t._v(" 左浮动\n"),v("code",[t._v("right")]),t._v(" 右浮动\n"),v("code",[t._v("clear")]),t._v(" 清除浮动;  clear：both")]),t._v(" "),v("p",[t._v("注：设置 Flex 布局后，子元素的 Float 布局将失效")]),t._v(" "),v("h4",{attrs:{id:"overflow-溢出处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overflow-溢出处理"}},[t._v("#")]),t._v(" overflow 溢出处理")]),t._v(" "),v("p",[t._v("​\t"),v("code",[t._v("hidden")]),t._v("  隐藏超出层大小的内容\n​\t"),v("code",[t._v("scroll")]),t._v(" 无论内容是否超出层大小都添加滚动条\n​\t"),v("code",[t._v("auto")]),t._v("  超出时自动添加滚动条")]),t._v(" "),v("h4",{attrs:{id:"margin-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#margin-属性"}},[t._v("#")]),t._v(" margin 属性")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("margin")]),t._v(" 属性为给定元素设置所有四个（上左下右）方向的外边距属性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("普通元素")]),t._v("的 百分比margin 都是"),v("strong",[t._v("相对于容器的"),v("code",[t._v("宽度")]),t._v("计算的")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("绝对定位元素")]),t._v("的 百分比margin "),v("strong",[t._v("相对于其定位祖先元素的宽度计算的")])])]),t._v(" "),v("li",[v("p",[t._v("上下margin会重叠："),v("strong",[t._v("只会发生在 "),v("code",[t._v("block")]),t._v("元素上，（取最大值）")])]),t._v(" "),v("p",[t._v("解决重叠方法：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("父元素")]),t._v("设置 "),v("code",[t._v("BFC")]),t._v("（如overflow：hidden；如position：absolute等）")]),t._v(" "),v("li",[v("strong",[t._v("父元素")]),t._v("设置 "),v("code",[t._v("border")]),t._v("/"),v("code",[t._v("padding")])])])]),t._v(" "),v("li",[v("p",[t._v("当 margin 的值为 "),v("code",[t._v("auto")]),t._v("时。浏览器会自动选择一个合适的margin来应用（自动分配剩余空间）")]),t._v(" "),v("ol",[v("li",[t._v("需要元素是 块状元素")]),t._v(" "),v("li",[t._v("需要元素 设置宽度")])])]),t._v(" "),v("li",[v("p",[t._v("margin 可以为 负值")])])]),t._v(" "),v("h4",{attrs:{id:"z-index网页的层叠等级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#z-index网页的层叠等级"}},[t._v("#")]),t._v(" z-index网页的层叠等级")]),t._v(" "),v("p",[v("strong",[t._v("z-index 层覆盖先后顺序")]),t._v("（优先级）; 大于0的数字；数字大的最上面")]),t._v(" "),v("p",[t._v("其实一个网页是分为好多层的，具体层次和层叠等级如下图：")]),t._v(" "),v("p",[t._v("z-index为正值 》 z-index: 0/auto 》 行内元素 》 浮动元素 》 块级元素 》z-index为负数 》 background/border")]),t._v(" "),v("h4",{attrs:{id:"设置dom元素不显示在浏览器可视范围内【要点】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置dom元素不显示在浏览器可视范围内【要点】"}},[t._v("#")]),t._v(" 设置DOM元素不显示在浏览器可视范围内【要点】")]),t._v(" "),v("blockquote",[v("h4",{attrs:{id:"visibility-hidden-visible、display-none、z-index-1、opacity-0-及比较-【ovdz】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden-visible、display-none、z-index-1、opacity-0-及比较-【ovdz】"}},[t._v("#")]),t._v(" visibility:hidden/visible、display:none、z-index=-1、opacity：0 及比较；【OVDZ】")])]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("opacity：0")]),t._v(",该元素隐藏起来了，"),v("strong",[t._v("但不会改变页面布局")]),t._v("，并且，"),v("strong",[t._v("如果该元素已经绑定了一些事")]),t._v("件，如click事件也能触发")]),t._v(" "),v("li",[v("strong",[t._v("visibility:hidden")]),t._v(",该元素隐藏起来了，"),v("strong",[t._v("但不会改变页面布局")]),t._v("，但是"),v("strong",[t._v("不会触发该元素已经绑定的事件")]),t._v("; （重绘）")]),t._v(" "),v("li",[t._v("display:none, 把元素隐藏起来，并且"),v("strong",[t._v("会改变页面布局")]),t._v("，可以理解成在页面中把该元素删掉; （回流+重绘）")]),t._v(" "),v("li",[t._v("z-index=-1置于其他元素下面; "),v("strong",[t._v("注意")]),t._v("：z-index的数值"),v("strong",[t._v("不跟单位")]),t._v("。z-index的数字越高越靠前，并且值必须为整数和正数（正数的整数）。")])]),t._v(" "),v("p",[v("strong",[t._v("总括")]),t._v("：")]),t._v(" "),v("p",[v("strong",[t._v("最基本的")]),t._v("：设置visibility属性为hidden，或者设置display属性为none")]),t._v(" "),v("p",[v("strong",[t._v("技巧性")]),t._v("：设置透明度为0，设置z-index位置在-1000,  设置宽高为0")]),t._v(" "),v("p",[v("strong",[t._v("1. display：none；")])]),t._v(" "),v("ul",[v("li",[t._v("DOM结构：浏览器不会渲染display属性为none的元素，不占据空间，意思就是页面上没有它的一席之地，你在开发者模式中选不中那个元素。")]),t._v(" "),v("li",[t._v("事件监听：无法进行DOM事件监听。")]),t._v(" "),v("li",[t._v("性能：动态改变此属性时会引起重排，性能较差。")]),t._v(" "),v("li",[t._v("继承：不会被子元素继承，因为子元素也不被渲染。")]),t._v(" "),v("li",[t._v("transtion过渡不支持display。")])]),t._v(" "),v("p",[v("strong",[t._v("2. visibility：hidden；")])]),t._v(" "),v("ul",[v("li",[t._v("DOM结构：元素被隐藏了，浏览器会渲染visibility属性为hidden的元素，占据空间，意思就是页面上有它的空间，在开发者模式中能选中那个元素。")]),t._v(" "),v("li",[t._v("事件监听：无法进行DOM事件监听。")]),t._v(" "),v("li",[t._v("性能：动态改变此属性时会引起重绘，性能较高。")]),t._v(" "),v("li",[t._v("继承：会被子元素继承，子元素通过设置visibility:visible;来显示自身，使子元素取消自身隐藏。")]),t._v(" "),v("li",[t._v("transtion：visibility会立即显示，隐藏时会延时。")])]),t._v(" "),v("p",[v("strong",[t._v("3. opacity：0；")])]),t._v(" "),v("ul",[v("li",[t._v("DOM结构：opacity属性值为0时透明度为100%，元素隐藏，占据空间，opacity值为0到1，为1时显示元素。")]),t._v(" "),v("li",[t._v("事件监听：可以进行DOM事件监听。")]),t._v(" "),v("li",[t._v("性能：提升为合成层，不会引发重绘，性能较高。")]),t._v(" "),v("li",[t._v("继承：会被子元素继承，子元素不能通过设置opacity:1;来取消隐藏。。")]),t._v(" "),v("li",[t._v("transtion：opacity可以延时显示与隐藏。")])]),t._v(" "),v("h3",{attrs:{id:"行内-inline-块级-block-空-void-元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行内-inline-块级-block-空-void-元素"}},[t._v("#")]),t._v(" 行内(inline)/块级(block)/空(void)元素")]),t._v(" "),v("blockquote",[v("p",[t._v("首先：CSS规范规定，"),v("strong",[t._v("每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值")]),t._v("，")]),t._v(" "),v("p",[t._v("如span默认display属性值为“inline”，是“行内”元素; div的display默认值为“block”，则为“块级”元素；")])]),t._v(" "),v("p",[v("strong",[t._v("行内(inline)元素")]),t._v("："),v("code",[t._v("宽度和高度由内容决定")]),t._v("，"),v("strong",[t._v("与其他元素共占一行的元素")]),t._v(";  内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变（"),v("strong",[t._v("也就是padding和margin的left和right是可以设置的")]),t._v("），就是里面文字或图片的大小。")]),t._v(" "),v("p",[t._v("​\t\t如："),v("strong",[t._v("i a b span select strong")])]),t._v(" "),v("p",[v("strong",[t._v("块级(block)元素")]),t._v("："),v("code",[t._v("默认宽度由父容器决定，默认高度由内容决定")]),t._v("，"),v("strong",[t._v("独占一行并且可以设置宽高的元素")]),t._v(";")]),t._v(" "),v("p",[t._v("​\t\t如："),v("strong",[t._v("div ul ol li dl dt dd h1 h2 h3 h4…p")])]),t._v(" "),v("p",[t._v("浏览器还有默认的"),v("strong",[t._v("天生inline-block【空】元素")]),t._v("（拥有"),v("strong",[t._v("内在尺寸，可设置高宽，但不会自动换行")]),t._v("）")]),t._v(" "),v("p",[t._v("​       如："),v("strong",[v("code",[t._v("<input> 、<img> 、<button> 、<texterea> 、<label>")])])]),t._v(" "),v("p",[t._v("在日常开发中，经常使用 CSS 的 "),v("code",[t._v("display")]),t._v(" 属性来打破两者的壁垒："),v("code",[t._v("display: inline-block")]),t._v("，使它们拥有更多的状态。"),v("strong",[t._v("常见的空元素")]),t._v("：  不同浏览器（版本）、HTML4（5）、CSS2等实际略有差异;")]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n//鲜为人知的是：\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("area")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("col")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("command")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("embed")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keygen")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("track")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wbr")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("p",[v("strong",[t._v("说明")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("块级标签可以设置width和height")]),t._v(" "),v("li",[t._v("行内标签"),v("strong",[t._v("不可以设置width和height")]),t._v("（"),v("strong",[t._v("它的width由内容决定，height由font-size决定")]),t._v("）")]),t._v(" "),v("li",[t._v("block水平的元素inline-block化后，IE6/7没有换行符间隙问题，其他浏览器均有；"),v("code",[t._v("｛ display: inline-block; *display: inline; *zoom: 1; ｝")]),t._v("\ninline水平的元素"),v("strong",[t._v("inline-block后，所有主流浏览器都有换行符/空格间隙问题")]),t._v("；")])]),t._v(" "),v("h3",{attrs:{id:"清除浮动的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的方法"}},[t._v("#")]),t._v(" 清除浮动的方法")]),t._v(" "),v("p",[t._v("浮动会脱离文档流，浮动可以内联排列，"),v("strong",[t._v("会导致父元素高度坍塌")])]),t._v(" "),v("blockquote",[v("p",[t._v("清除浮动的原理：基本上都是"),v("code",[t._v("clear:both")])])]),t._v(" "),v("p",[v("strong",[t._v("方式")]),t._v("：")]),t._v(" "),v("ol",[v("li",[t._v("给父元素添加 "),v("code",[t._v("overflow:auto")]),t._v(" 或者hidden  样式，触发BFC; （"),v("strong",[t._v("让父元素的高度包含子浮动元素")]),t._v("）")]),t._v(" "),v("li",[t._v("在同一级加一个div，style是clear:both;")]),t._v(" "),v("li",[t._v("父元素加伪元素 "),v("code",[t._v('.clearfix:after { display: block; content: " "; clear: both; }')])]),t._v(" "),v("li",[t._v("flex布局能够替代浮动布局;")])]),t._v(" "),v("h3",{attrs:{id:"常见触发bfc【pdfoz】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见触发bfc【pdfoz】"}},[t._v("#")]),t._v(" 常见触发BFC【PDFOZ】")]),t._v(" "),v("ul",[v("li",[t._v("根元素，即HTML元素;")]),t._v(" "),v("li",[v("code",[t._v("position")]),t._v("的值不为"),v("code",[t._v("relative")]),t._v("和"),v("code",[t._v("static")]),t._v(" ；为"),v("code",[t._v("absolute")]),t._v(", "),v("code",[t._v("fixed")]),t._v("。")]),t._v(" "),v("li",[v("code",[t._v("display")]),t._v("的值为"),v("code",[t._v("table-cell")]),t._v(", "),v("code",[t._v("table-caption")]),t._v(", "),v("code",[t._v("inline-block")]),t._v("中的任何一个。")]),t._v(" "),v("li",[v("code",[t._v("float")]),t._v("的值不为"),v("code",[t._v("none")]),t._v("； 为"),v("code",[t._v("left")]),t._v(", "),v("code",[t._v("right")]),t._v("。"),v("strong",[t._v("float:left")]),t._v(" 浮动元素本身BFC化，然而"),v("strong",[t._v("浮动元素有破坏性和包裹性，失去了元素本身的流体自适应性")]),t._v(";")]),t._v(" "),v("li",[v("code",[t._v("overflow")]),t._v("的值不为"),v("code",[t._v("visible")]),t._v("； 为"),v("code",[t._v("auto")]),t._v(","),v("code",[t._v("scroll")]),t._v("或"),v("code",[t._v("hidden")]),t._v(" 。清除浮动: "),v("code",[t._v(".clearfix { overflow: hidden; zoom: 1; }")]),t._v("   详见下面介绍；")]),t._v(" "),v("li",[t._v("定制了一个新的属性值："),v("code",[t._v("display:flow-root")]),t._v("。 可以使用display:flow-root安全的创建BFC，来解决上文中提到的各种问题："),v("strong",[t._v("包裹浮动元素")]),t._v("、"),v("strong",[t._v("阻止外边距叠加")]),t._v("和"),v("strong",[t._v("阻止围绕浮动元素")]),t._v("。 目前还有兼容性问题；"),v("strong",[t._v("flow-root 浏览器支持情况")]),t._v(" https://caniuse.com/")])]),t._v(" "),v("h3",{attrs:{id:"flex-布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[t._v("#")]),t._v(" Flex 布局")]),t._v(" "),v("p",[t._v("Flex 是 Flexible Box 的缩写，意为”弹性布局”，用来"),v("strong",[t._v("为盒状模型提供最大的灵活性")]),t._v("。")]),t._v(" "),v("p",[t._v("行内元素也可以使用 Flex 布局。"),v("code",[t._v("display: inline-flex;")]),t._v("Webkit 内核的浏览器，必须加上"),v("code",[t._v("-webkit")]),t._v("前缀。"),v("code",[t._v("display: -webkit-flex; /* Safari */")])]),t._v(" "),v("p",[t._v("注意，"),v("strong",[t._v("设为 Flex 布局以后，"),v("code",[t._v("子元素的float、clear和vertical-align属性将失效")]),t._v("。")])]),t._v(" "),v("h4",{attrs:{id:"父元素属性-6个"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#父元素属性-6个"}},[t._v("#")]),t._v(" "),v("strong",[t._v("父元素属性")]),t._v("（6个）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("display")]),t._v(" "),v("td",[t._v("flex")]),t._v(" "),v("td",[t._v("定义了一个flex容器，它的直接子元素会接受这个flex环境")])]),t._v(" "),v("tr",[v("td",[t._v("flex-direction")]),t._v(" "),v("td",[t._v("row,row-reverse,column,column-reverse")]),t._v(" "),v("td",[t._v("决定主轴的方向")])]),t._v(" "),v("tr",[v("td",[t._v("flex-wrap")]),t._v(" "),v("td",[t._v("nowrap,wrap,wrap-reverse")]),t._v(" "),v("td",[t._v("如果一条轴线排不下，如何换行")])]),t._v(" "),v("tr",[v("td",[t._v("flex-flow")]),t._v(" "),v("td",[t._v("[flex-direction] , [flex-wrap]")]),t._v(" "),v("td",[t._v("是"),v("code",[t._v("flex-direction")]),t._v("属性和"),v("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),v("code",[t._v("row nowrap")])])]),t._v(" "),v("tr",[v("td",[t._v("justify-content")]),t._v(" "),v("td",[t._v("flex-start,flex-end,center,space-between,space-around")]),t._v(" "),v("td",[t._v("设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式")])]),t._v(" "),v("tr",[v("td",[t._v("align-items")]),t._v(" "),v("td",[t._v("flex-start,flex-end,center,baseline,stretch")]),t._v(" "),v("td",[t._v("设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式")])])])]),t._v(" "),v("h4",{attrs:{id:"子元素属性-6个"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#子元素属性-6个"}},[t._v("#")]),t._v(" "),v("strong",[t._v("子元素属性")]),t._v("（6个）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("属性值")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("order")]),t._v(" "),v("td",[t._v("[int]")]),t._v(" "),v("td",[t._v("默认情况下flex order会按照书写顺训呈现，可以通过order属性改变，数值小的在前面，还可以是负数。")])]),t._v(" "),v("tr",[v("td",[t._v("flex-grow")]),t._v(" "),v("td",[t._v("[number]")]),t._v(" "),v("td",[t._v("设置或检索弹性盒的扩展比率,根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间")])]),t._v(" "),v("tr",[v("td",[t._v("flex-shrink")]),t._v(" "),v("td",[t._v("[number]")]),t._v(" "),v("td",[t._v("设置或检索弹性盒的收缩比率,根据弹性盒子元素所设置的收缩因子作为比率来收缩空间")])]),t._v(" "),v("tr",[v("td",[t._v("flex-basis")]),t._v(" "),v("td",[t._v("[length], auto")]),t._v(" "),v("td",[t._v("设置或检索弹性盒伸缩基准值")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("align-self")])]),t._v(" "),v("td",[t._v("auto,flex-start,flex-end,center,baseline,stretch")]),t._v(" "),v("td",[t._v("设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式，"),v("strong",[t._v("可以覆盖父容器align-items的设置")])])]),t._v(" "),v("tr",[v("td",[t._v("flex")]),t._v(" "),v("td",[t._v("[number]")]),t._v(" "),v("td",[t._v("占比")])])])]),t._v(" "),v("h3",{attrs:{id:"水平居中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),v("ul",[v("li",[t._v("元素为行内元素，设置父元素text-align:center")]),t._v(" "),v("li",[t._v("如果元素宽度固定，可以设置左右margin为auto")]),t._v(" "),v("li",[t._v("如果元素为绝对定位，设置父元素position为relative，元素设 left:0;right:0;margin:auto")]),t._v(" "),v("li",[t._v("使用flex-box布局，指定justify-content属性为center")])]),t._v(" "),v("h3",{attrs:{id:"水平垂直居中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中"}},[t._v("#")]),t._v(" 水平垂直居中")]),t._v(" "),v("ul",[v("li",[t._v("文本水平居中："),v("code",[t._v("text-algin: center")])]),t._v(" "),v("li",[t._v("文本垂直居中："),v("code",[t._v("line-height")]),t._v("等于容器"),v("code",[t._v("height")]),t._v("；"),v("code",[t._v("display: flex; algin-items: center;")])]),t._v(" "),v("li",[t._v("div水平居中：\n"),v("ol",[v("li",[t._v("margin: 0 auto;")]),t._v(" "),v("li",[t._v("已知父元素宽度：margin-left: width / 2; transform: tranlateX(-50%)")]),t._v(" "),v("li",[t._v("未知父元素宽度：position: absolute: top: 50%; transform: tranlateY(-50%)")]),t._v(" "),v("li",[t._v("display: flex; justify-content: center;")])])]),t._v(" "),v("li",[t._v("div垂直居中：\n"),v("ol",[v("li",[t._v("已知父元素高度：margin-top: height / 2; transform: tranlateY(-50%)")]),t._v(" "),v("li",[t._v("未知父元素高度：position: absolute: top: 50%; transform: tranlateY(-50%)")]),t._v(" "),v("li",[t._v("display: flex; algin-items: center;")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);