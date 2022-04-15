(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1849:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("Bower依赖于Git、NodeJS和npm，如果前面已经完成了Grunt的安装，那么此处需要确保安装了Git并且添加到环境变量中，如果使用代理上网，需要设置Proxy，具体可参考此文。")]),s._v(" "),e("p",[s._v("执行以下命令，全局安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g bower\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("p",[s._v("Bower 本身的配置可以通过 "),e("code",[s._v(".bowerrc")]),s._v(" 文件来完成，该文件以 JSON 格式来进行配置。比如通过 directory 定义了 Bower 下载库的目录。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"directory"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app/bower_components"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可以在 "),e("code",[s._v("bower.json")]),s._v(" 文件中定义所依赖的库，然后运行 "),e("code",[s._v("bower install")]),s._v(" 命令来安装所有的这些库。"),e("code",[s._v("bower.json")]),s._v(" 文件的作用类似于 NodeJS 中 "),e("code",[s._v("package.json")]),s._v(" 。可以直接创建该文件，也可以通过 "),e("code",[s._v("bower init")]),s._v(" 命令以交互的方式创建。")]),s._v(" "),e("p",[s._v("下面以bootstrap库的安装为例来说明如何使用Bower。")]),s._v(" "),e("h4",{attrs:{id:"搜索库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索库"}},[s._v("#")]),s._v(" 搜索库")]),s._v(" "),e("p",[s._v("安装一个库，一般的做法是首先通过 "),e("code",[s._v("bower search")]),s._v(" 命令先搜索需要使用的库")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bower search bootstrap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"安装库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装库"}},[s._v("#")]),s._v(" 安装库")]),s._v(" "),e("p",[s._v("执行 "),e("code",[s._v("bower install")]),s._v(" 命令可以完成一个库的安装，并自动安装其依赖库")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bower "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bootstrap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("因为bootstrap库依赖于jQuery库，安装完成后可以看到下载库的目录中同时有bootstrap和jQuery。")]),s._v(" "),e("p",[s._v("在安装时也可以指定库的版本")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bower "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bootstrap"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.0.0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"升级库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级库"}},[s._v("#")]),s._v(" 升级库")]),s._v(" "),e("p",[s._v("需要升级一个库时，可以使用 "),e("code",[s._v("bower update")]),s._v(" 命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("bower update bootstrap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"删除库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除库"}},[s._v("#")]),s._v(" 删除库")]),s._v(" "),e("p",[s._v("不需要一个库时，可以使用 "),e("code",[s._v("bower uninstall")]),s._v(" 命令移除")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bower uninstall bootstrap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"查看库信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看库信息"}},[s._v("#")]),s._v(" 查看库信息")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("bower list")]),s._v(" 命令可以列出来当前应用中已经安装的所有库的信息，包括库之间依赖关系以及可用更新。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bower list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);