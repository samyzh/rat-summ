(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{2209:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("一个windows下的软件安装管理器（"),s("code",[t._v("The Package Manager for Windows")]),t._v("），用于自动管理软件（安装，更新，卸载）。"),s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.chocolatey.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chocolatey官网"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"安装要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装要求"}},[t._v("#")]),t._v(" 安装要求")]),t._v(" "),s("ul",[s("li",[t._v("Windows 7+ / Windows Server 2003+")]),t._v(" "),s("li",[t._v("PowerShell v2+")]),t._v(" "),s("li",[t._v(".NET Framework 4+ (安装过程会检测，如果未安装会自动下载安装)")])]),t._v(" "),s("h2",{attrs:{id:"开始安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[t._v("#")]),t._v(" 开始安装")]),t._v(" "),s("p",[t._v("使用管理员权限运行 "),s("code",[t._v("powershell")]),t._v("，检查并设置 "),s("code",[t._v("执行策略")])]),t._v(" "),s("ul",[s("li",[t._v("检查")])]),t._v(" "),s("div",{staticClass:"language-undefined line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PS C:\\> Get-ExecutionPolicy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果返回的是 "),s("code",[t._v("Restricted")]),t._v("，那么需要更改为"),s("code",[t._v("Bypass")]),t._v("或"),s("code",[t._v("AllSigned")])]),t._v(" "),s("ul",[s("li",[t._v("更改")])]),t._v(" "),s("p",[t._v("可以使用以下两种中的一种")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("PS C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy AllSigned\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("或")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("PS C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy Bypass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope Process\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("检查")])]),t._v(" "),s("p",[t._v("安装后重新检查是否更改完成")]),t._v(" "),s("div",{staticClass:"language-undefined line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PS C:\\> Get-ExecutionPolicy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("安装")])]),t._v(" "),s("p",[t._v("设置"),s("code",[t._v("执行策略")]),t._v("同时下载并执行安装脚本")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("PS C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy Bypass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope Process "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" iex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("New"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Object System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DownloadString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://chocolatey.org/install.ps1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果执行策略已经更改，直接下载并执行也可以")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("PS C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" iex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("New"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Object System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DownloadString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://chocolatey.org/install.ps1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("等待安装完成，之后可以使用 "),s("code",[t._v("choco version")]),t._v(" 查看安装结果。")]),t._v(" "),s("ul",[s("li",[t._v("查看帮助")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("choco -?")]),t._v(" 查看帮助文档。查看"),s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.chocolatey.org%2Fdocs%2Fcommands-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"使用安装软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用安装软件"}},[t._v("#")]),t._v(" 使用安装软件")]),t._v(" "),s("p",[t._v("查看支持的 "),s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fwww.chocolatey.org%2Fpackages",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装包"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("常用命令")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("list 查找本地和远程安装包")]),t._v(" "),s("li",[t._v("search 同list")]),t._v(" "),s("li",[t._v("install 安装")]),t._v(" "),s("li",[t._v("uninstall 卸载")]),t._v(" "),s("li",[t._v("upgrade 更新")]),t._v(" "),s("li",[t._v("download 下载")])])]),t._v(" "),s("h2",{attrs:{id:"卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),s("p",[t._v("卸载"),s("code",[t._v("Chocolatey")]),t._v("只需要删除它安装的文件夹，并删除对应的环境变量即可。对于使用"),s("code",[t._v("Chocolatey")]),t._v("安装的其它软件，如果也需要卸载的话，需要先手动卸载。")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("删除环境变量"),s("code",[t._v("ChocolateyInstall")]),t._v("对应的安装文件夹，默认是 "),s("code",[t._v("C:\\ProgramData\\chocolatey")])]),t._v(" "),s("li",[t._v("删除环境变量 ChocolateyInstall")]),t._v(" "),s("li",[t._v("删除环境变量 ChocolateyToolsLocation，部分工具软件安装的位置，删除需谨慎")]),t._v(" "),s("li",[t._v("删除环境变量 ChocolateyLastPathUpdate")]),t._v(" "),s("li",[t._v("更新环境变量  PATH ，去掉 "),s("code",[t._v("Chocolatey")]),t._v(" 相关的配置")])])]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[t._v("https://chocolatey.org/install")])])}),[],!1,null,null,null);a.default=n.exports}}]);