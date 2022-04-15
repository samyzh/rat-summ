(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1989:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"session-cookie流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie流程"}},[t._v("#")]),t._v(" session/cookie流程")]),t._v(" "),e("p",[t._v("首次发起请求后，服务端返回sessionId后，之后每次请求中的cookie都会带上sessionId。")]),t._v(" "),e("h2",{attrs:{id:"csrf-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[t._v("#")]),t._v(" CSRF 攻击")]),t._v(" "),e("p",[t._v("Cookie 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 Cookie 的 HTTP 请求，这就是 CSRF 攻击。")]),t._v(" "),e("p",[t._v("举例来说，用户登陆了银行网站"),e("code",[t._v("your-bank.com")]),t._v("，银行服务器发来了一个 Cookie。")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("Set-Cookie:id=a3fWa;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("用户后来又访问了恶意网站"),e("code",[t._v("malicious.com")]),t._v("，上面有一个表单。")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("your-bank.com/transfer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("用户一旦被诱骗发送这个表单，银行网站就会收到带有正确 Cookie 的请求。"),e("strong",[t._v("为了防止这种攻击，表单一般都带有一个随机 token，告诉服务器这是真实请求。")])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("your-bank.com/transfer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dad3weg34"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("这种第三方网站引导发出的 Cookie，就称为第三方 Cookie。"),e("strong",[t._v("它除了用于 CSRF 攻击，还可以用于用户追踪。")])]),t._v(" "),e("p",[t._v("比如，Facebook 在第三方网站插入一张看不见的图片。")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("facebook.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token style-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token style language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("浏览器加载上面代码时，就会向 Facebook 发出带有 Cookie 的请求，从而 Facebook 就会知道你是谁，访问了什么网站。")]),t._v(" "),e("h2",{attrs:{id:"x-frame-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),e("p",[t._v("X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 , 或者 中展现的标记。网站可以使用此功能，来确保自己网站的内容没有被嵌到别人的网站中去，也从而避免了点击劫持 (clickjacking) 的攻击。")]),t._v(" "),e("h3",{attrs:{id:"三个值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三个值"}},[t._v("#")]),t._v(" 三个值")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("DENY")]),t._v("：表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。")]),t._v(" "),e("li",[e("strong",[t._v("SAMEORIGIN")]),t._v("：表示该页面可以在相同域名页面的 frame 中展示。")]),t._v(" "),e("li",[e("strong",[t._v("ALLOW-FROM uri")]),t._v("：表示该页面可以在指定来源的 frame 中展示。")])]),t._v(" "),e("p",[t._v("总括：如果设置为 DENY，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 SAMEORIGIN，那么页面就可以在同域名页面的 frame 中嵌套。")]),t._v(" "),e("h2",{attrs:{id:"服务器端配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置"}},[t._v("#")]),t._v(" 服务器端配置")]),t._v(" "),e("h3",{attrs:{id:"配置-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[t._v("#")]),t._v(" 配置 nginx")]),t._v(" "),e("p",[t._v("配置 nginx 发送 X-Frame-Options 响应头，把下面这行添加到 ‘http’, ‘server’ 或者 ‘location’ 的配置中:")]),t._v(" "),e("div",{staticClass:"language-nginx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 表示该页面可以在相同域名页面的 frame 中展示")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Frame"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options SAMEORIGIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 表示该页面可以在指定来源的 frame 中展示")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#add_header X-Frame-Options "ALLOW-FROM  http://domain.com";')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"配置-apache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-apache"}},[t._v("#")]),t._v(" 配置 Apache")]),t._v(" "),e("p",[t._v("配置 Apache 在所有页面上发送 X-Frame-Options 响应头，需要把下面这行添加到 ‘site’ 的配置中:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Header always append X-Frame-Options SAMEORIGIN1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"配置-tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-tomcat"}},[t._v("#")]),t._v(" 配置 TOMCAT")]),t._v(" "),e("p",[t._v("“点击劫持：X-Frame-Options未配置”;")]),t._v(" "),e("p",[t._v("因为项目使用的是tomcat服务器，我们不可能在每个页面去添加：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-frame-options"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMEORIGIN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("因此我们使用过滤器，代码如下：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sResponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nresponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-frame-options"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMEORIGIN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"samesite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" SameSite")]),t._v(" "),e("h3",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),e("p",[e("code",[t._v("SameSite")]),t._v("的作用是防止跨站请求伪造（CSRF）攻击和保护用户隐私；")]),t._v(" "),e("p",[t._v("Chrome 计划将"),e("code",[t._v("Lax")]),t._v("变为默认设置；SameSite的作用就是防止跨域传送cookie，从而防止 CSRF 攻击和用户追踪，此举是为了从源头屏蔽 CSRF 漏洞。")]),t._v(" "),e("h3",{attrs:{id:"三个值-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三个值-2"}},[t._v("#")]),t._v(" 三个值")]),t._v(" "),e("p",[t._v("设置了"),e("code",[t._v("Strict")]),t._v("或"),e("code",[t._v("Lax")]),t._v("以后，基本就杜绝了 CSRF 攻击。当然，前提是用户浏览器支持 SameSite 属性。")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Strict")]),t._v("："),e("code",[t._v("Strict")]),t._v("最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。")]),t._v(" "),e("p",[e("code",[t._v("Set-Cookie: CookieName=CookieValue; SameSite=Strict;")])]),t._v(" "),e("p",[t._v("说明：这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Lax")]),t._v("："),e("code",[t._v("Lax")]),t._v("规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。")]),t._v(" "),e("p",[e("code",[t._v("Set-Cookie: CookieName=CookieValue; SameSite=Lax;")])]),t._v(" "),e("p",[t._v("导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。详见下表。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(961),alt:"image-20211028164245317"}})])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("None")]),t._v("：这时，网站可以选择显式关闭"),e("code",[t._v("SameSite")]),t._v("属性，将其设为"),e("code",[t._v("None")]),t._v("。不过，前提是必须同时设置"),e("code",[t._v("Secure")]),t._v("属性（"),e("strong",[t._v("Cookie 只能通过 HTTPS 协议发送")]),t._v("），否则无效。")]),t._v(" "),e("p",[e("code",[t._v("Set-Cookie: widget_session=abc123; SameSite=None")]),t._v(" //设置无效")]),t._v(" "),e("p",[e("code",[t._v("Set-Cookie: widget_session=abc123; SameSite=None; Secure")]),t._v(" //设置有效")])])]),t._v(" "),e("h2",{attrs:{id:"方案设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案设置"}},[t._v("#")]),t._v(" 方案设置")]),t._v(" "),e("h3",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("Google 在2020年2月4号发布的 Chrome 80 版本中默认屏蔽所有第三方 Cookie，即默认为所有 Cookie 加上 SameSite=Lax 属性，并且拒绝非Secure的Cookie设为 SameSite=None；")]),t._v(" "),e("p",[e("strong",[t._v("上述问题中，在当前系统访问第三方系统时，带了一些cookie过去，然后被这个SameSite机制拦截掉了。")])]),t._v(" "),e("p",[t._v("可能在 Chrome 80 中受到影响的场景如下;")]),t._v(" "),e("p",[t._v("1、组件数据基于第三方网站的登录态返回相关用户数据的API请求;")]),t._v(" "),e("p",[t._v("2、HTTP 本地部署")]),t._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" "),e("strong",[t._v("解决方案")])]),t._v(" "),e("h4",{attrs:{id:"_1-chrome设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-chrome设置"}},[t._v("#")]),t._v(" 1.chrome设置")]),t._v(" "),e("p",[t._v("这种方式比较简单，手动禁用浏览器的限制功能，可参考文末链接；Chrome浏览器打开新标签页，地址栏中分别输入"),e("code",[t._v("chrome://flags/#same-site-by-default-cookies")]),t._v(", "),e("code",[t._v("chrome://flags/#cookies-without-same-site-must-be-secure")]),t._v("将这两个配置均设置为Disabled**（此策略不推荐，可用于应急系统访问）**")]),t._v(" "),e("h4",{attrs:{id:"_2-使用低版本浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用低版本浏览器"}},[t._v("#")]),t._v(" 2.使用低版本浏览器")]),t._v(" "),e("p",[t._v("这也是一种解决方式，但是不推荐；从"),e("code",[t._v("Chrome 51")]),t._v("开始，浏览器的"),e("code",[t._v("Cookie")]),t._v("新增加了一个"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SameSite"),e("OutboundLink")],1),t._v("属性，用来防止"),e("code",[t._v("CSRF")]),t._v("攻击和用户追踪。该设置当前默认是关闭的，但在"),e("code",[t._v("Chrome 80")]),t._v("之后，该功能默认已开启。使用低版本浏览器，可选择70版。")]),t._v(" "),e("h4",{attrs:{id:"_3-https协议-samesite-none【推荐】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-https协议-samesite-none【推荐】"}},[t._v("#")]),t._v(" 3.https协议+SameSite=None【推荐】")]),t._v(" "),e("p",[t._v("这主要依赖运维和后端处理了，但是这种方式在以后新版浏览器中可能会失效，因为过两年浏览器将全面禁止三方cookie，到时候怎么设置都不起作用了；")]),t._v(" "),e("p",[t._v("设置response.setHeader(“Set-Cookie”, “HttpOnly;Secure;SameSite=None”)，需设置https证书;")]),t._v(" "),e("p",[e("strong",[t._v("由于设置"),e("code",[t._v("SameSite = None")]),t._v("，有"),e("code",[t._v("SCRF")]),t._v("风险，所以，最佳方案是用"),e("code",[t._v("token")]),t._v("代替"),e("code",[t._v("Cookie")]),t._v("方式作验证。")])]),t._v(" "),e("h4",{attrs:{id:"_4-token实现【推荐】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-token实现【推荐】"}},[t._v("#")]),t._v(" 4.token实现【推荐】")]),t._v(" "),e("p",[t._v("不使用cookie共享会话，使用token实现;")]),t._v(" "),e("h2",{attrs:{id:"查看设置结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看设置结果"}},[t._v("#")]),t._v(" 查看设置结果")]),t._v(" "),e("p",[t._v("在 Firefox 尝试加载 frame 的内容时，如果 X-Frame-Options 响应头设置为禁止访问了，那么 Firefox 会用 about:blank 展现到 frame 中。也许从某种方面来讲的话，展示为错误消息会更好一点。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(962),alt:"image-20211028143850848"}})]),t._v(" "),e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),e("p",[t._v("http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html")])])}),[],!1,null,null,null);a.default=n.exports},961:function(t,a,s){t.exports=s.p+"assets/img/image-20211028164245317.ef814860.png"},962:function(t,a,s){t.exports=s.p+"assets/img/image-20211028143850848.7b480a87.png"}}]);