(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1435:function(s,t,a){s.exports=a.p+"assets/img/image-20200828234019908.601a6223.png"},1436:function(s,t,a){s.exports=a.p+"assets/img/image-20200829000511239.664b0f4f.png"},1437:function(s,t,a){s.exports=a.p+"assets/img/image-20200828234643738.ecea7f26.png"},1438:function(s,t,a){s.exports=a.p+"assets/img/image-20200828234902216.1516b541.png"},1439:function(s,t,a){s.exports=a.p+"assets/img/13479263-cd9f51de6a6464e6.ef69e241.png"},1440:function(s,t,a){s.exports=a.p+"assets/img/13479263-5d90f5c67e4be767.dd7c8a92.png"},1441:function(s,t,a){s.exports=a.p+"assets/img/image-20200829001059153.7df9bd8d.png"},1442:function(s,t,a){s.exports=a.p+"assets/img/image-20200829001246289.821d3cd0.png"},1443:function(s,t,a){s.exports=a.p+"assets/img/13479263-7b1f5ba987021346.99535139.png"},1444:function(s,t,a){s.exports=a.p+"assets/img/13479263-5ef33c025ac01d61.7a5265b8.png"},1445:function(s,t,a){s.exports=a.p+"assets/img/13479263-be5705ebc73910bf.c84895dc.png"},1446:function(s,t,a){s.exports=a.p+"assets/img/image-20200829001508392.bb7190da.png"},1447:function(s,t,a){s.exports=a.p+"assets/img/image-20200829001529568.1134ac54.png"},2220:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("Cmder 是一直使用的终端软件，是 Windows 平台上目前最好用的终端之一了，它具有如下特点：")]),s._v(" "),e("ul",[e("li",[s._v("便携，解压即可用")]),s._v(" "),e("li",[s._v("自带git、ls、curl等命令")]),s._v(" "),e("li",[s._v("可设置命令别名")]),s._v(" "),e("li",[s._v("丰富的颜色主题（Solarized、Twilight、Ubuntu、xterm、Monokai，甚至接受自定）、可定制字体")]),s._v(" "),e("li",[s._v("支持tab分页、同屏多端口（支持水平分割、垂直分割）")]),s._v(" "),e("li",[s._v("支持自定terminal，无论是CMD、PowerShell、bash都可以，还可以注入环境变量")])]),s._v(" "),e("h2",{attrs:{id:"常用设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用设置"}},[s._v("#")]),s._v(" 常用设置")]),s._v(" "),e("h3",{attrs:{id:"添加path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加path"}},[s._v("#")]),s._v(" 添加path")]),s._v(" "),e("p",[e("strong",[s._v("变量名")]),s._v("为 "),e("code",[s._v("CMDER_ROOT")]),s._v("，"),e("strong",[s._v("变量值")]),s._v("为 Cmder 刚才解压到的路径")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1435),alt:"image-20200828234019908"}})]),s._v(" "),e("h3",{attrs:{id:"添加-cmder-到右键菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-cmder-到右键菜单"}},[s._v("#")]),s._v(" "),e("strong",[s._v("添加 cmder 到右键菜单")])]),s._v(" "),e("p",[s._v("以管理员身份打开 windows 自带的命令提示符（或者打开 PowerShell 再输入 cmd）")]),s._v(" "),e("p",[s._v("定位到 Cmder.exe 所在文件夹")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" %CMDER_ROOT%\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后输入命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Cmder.exe /REGISTER ALL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"设置默认打开目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置默认打开目录"}},[s._v("#")]),s._v(" 设置默认打开目录")]),s._v(" "),e("p",[e("code",[s._v("win + alt + p")]),s._v(" //打开设置 选择"),e("strong",[s._v("Startup-Task")]),s._v("，修改**{cmd::Cmder}**项，把:")]),s._v(" "),e("p",[e("code",[s._v('cmd /k "%ConEmuDir%\\..\\init.bat" -new_console:d:%USERPROFILE%')])]),s._v(" "),e("p",[s._v("修改成 "),e("code",[s._v('cmd /k "%ConEmuDir%\\..\\init.bat" -new_console:d:D:\\')])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1436),alt:"image-20200829000511239"}})]),s._v(" "),e("h3",{attrs:{id:"解决中文乱码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决中文乱码"}},[s._v("#")]),s._v(" 解决中文乱码")]),s._v(" "),e("p",[s._v("按 "),e("code",[s._v("win + alt + p")]),s._v(" 键或点击默认右下角 settings 选项打开设置界面")]),s._v(" "),e("p",[s._v("找到 "),e("code",[s._v("Startup")]),s._v(" 选项下的 "),e("code",[s._v("Environment")]),s._v("，追加这些命令")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" PATH="),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("ConEmuBaseDir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\\Scripts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("PATH"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" LANG=zh_CN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UTF"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("8\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" LC_ALL=zh_CN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("utf8\nchcp utf"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1437),alt:"image-20200828234643738"}})]),s._v(" "),e("h3",{attrs:{id:"添加自定义命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义命令"}},[s._v("#")]),s._v(" 添加自定义命令")]),s._v(" "),e("p",[s._v("默认情况下 cmder 终端是不带 ll 和 la 命令的，我们可以手动添加上去")]),s._v(" "),e("p",[s._v("找到 config 下的 "),e("code",[s._v("user-aliases.cmd")])]),s._v(" "),e("p",[s._v("加入以下命令")]),s._v(" "),e("div",{staticClass:"language-tex line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-tex"}},[e("code",[s._v("l=ls --show-control-chars  --color "),e("span",{pre:!0,attrs:{class:"token equation string"}},[s._v("$*\nll=ls -alF --show-control-chars --color $")]),s._v("*\nla=ls -aF --show-control-chars --color $*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1438),alt:"image-20200828234902216"}})]),s._v(" "),e("h3",{attrs:{id:"修改提示符符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改提示符符号"}},[s._v("#")]),s._v(" "),e("strong",[s._v("修改提示符符号")])]),s._v(" "),e("p",[s._v("Cmder 中的提示符符号默认为 λ，可能会导致某些bug（不确定），现在修改为自定义的符号：")]),s._v(" "),e("p",[s._v("一共有三个文件需要修改")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("%CMDER_ROOT%\\vendor\\clink.lua")]),s._v(" 文件，line 51，λ 修改为 $：")])]),s._v(" "),e("div",{staticClass:"language-lua line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('-- local lambda = "λ"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" lambda "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("%CMDER_ROOT%\\vendor\\git-for-windows\\etc\\profile.d\\git-prompt.sh")]),s._v(" 文件，line 36，λ 修改为 $：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PS1=\"$PS1\"'λ '                 # prompt: always λ ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PS1")]),s._v('"')]),s._v("'$ '\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("%CMDER_ROOT%\\config\\powerline_core.lua")]),s._v("，line 113，λ 修改为 $：")])]),s._v(" "),e("div",{staticClass:"language-lua line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" plc_prompt_lambSymbol "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n plc_prompt_lambSymbol "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("经过测试，安装高亮插件之后只需要修改第三项就好")]),s._v(" "),e("h3",{attrs:{id:"界面效果的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#界面效果的设置"}},[s._v("#")]),s._v(" 界面效果的设置")]),s._v(" "),e("p",[s._v("首先使用"),e("code",[s._v("windows+alt+p")]),s._v("进入界面设置\n"),e("strong",[s._v("背景色设置")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1439),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("字体设置")])]),s._v(" "),e("blockquote",[e("p",[s._v("设置字体的风格，大小等，图中红色位置不要勾选，否则会出现cmder终端字体重叠错位的问题")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1440),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(1441),alt:"image-20200829001059153"}})]),s._v(" "),e("p",[e("strong",[s._v("窗口位置大小记忆")])]),s._v(" "),e("p",[s._v("勾选这两个设置，只需要设置一次，下次会自动记住上次终端在桌面出现的位置和窗口大小")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1442),alt:"image-20200829001246289"}})]),s._v(" "),e("p",[e("strong",[s._v("背景透明度")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1443),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("隐藏标签栏")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1444),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("显示底部状态栏")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1445),alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"强制作为默认终端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制作为默认终端"}},[s._v("#")]),s._v(" 强制作为默认终端")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("图中绿色设置可以强制将"),e("code",[s._v("cmder")]),s._v("注册成Windows的默认终端")]),s._v(" "),e("blockquote",[e("p",[s._v("设置此选项后，系统启动后就会生效，且，即使你打开的是cmd，也会被放到cmder的窗口中执行")])])]),s._v(" "),e("li",[e("p",[s._v("红色选项可以解决每次关闭控制台时，弹出确认关闭的弹窗")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1446),alt:"image-20200829001508392"}})])])]),s._v(" "),e("h3",{attrs:{id:"解决粘贴多行文本时的弹窗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决粘贴多行文本时的弹窗"}},[s._v("#")]),s._v(" 解决粘贴多行文本时的弹窗")]),s._v(" "),e("p",[s._v("例如在终端中执行多行"),e("code",[s._v("SQL")]),s._v("语句，总会弹出提示，勾选选项可以解决")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1447),alt:"image-20200829001529568"}})]),s._v(" "),e("h2",{attrs:{id:"常用快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用快捷键"}},[s._v("#")]),s._v(" 常用快捷键")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("Tab       自动路径补全\nCtrl+T    建立新页签\nCtrl+W    关闭页签\nCtrl+Tab  切换页签\nAlt+F4    关闭所有页签\nAlt+Shift+1 开启cmd.exe\nAlt+Shift+2 开启powershell.exe\nAlt+Shift+3 开启powershell.exe "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("系统管理员权限"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nCtrl+1      快速切换到第1个页签\nCtrl+n      快速切换到第n个页签"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" n值无上限"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAlt + enter 切换到全屏状态\nCtr+r       历史命令搜索\nTab         自动路径补全\nCtrl+T      建立新页签\nCtrl+W      关闭页签\nCtrl+Tab    切换页签\nAlt+F4      关闭所有页签\nAlt+Shift+1 开启cmd.exe\nAlt+Shift+2 开启powershell.exe\nAlt+Shift+3 开启powershell.exe "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("系统管理员权限"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nCtrl+1      快速切换到第1个页签\nCtrl+n      快速切换到第n个页签"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" n值无上限"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAlt + enter 切换到全屏状态\nCtr+r       历史命令搜索\nWin+Alt+P   开启工具选项视窗\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h2",{attrs:{id:"使用其他终端模拟器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用其他终端模拟器"}},[s._v("#")]),s._v(" "),e("strong",[s._v("使用其他终端模拟器")])]),s._v(" "),e("p",[s._v("Cmder 自带了 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//conemu.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ConEmu"),e("OutboundLink")],1),s._v(" 作为终端模拟器，但是总感觉界面不够简洁，也不够美观。")]),s._v(" "),e("p",[s._v("在 windows 平台上有很多其他的终端模拟器，比如 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/cmderdev/cmder/wiki/Seamless-Hyper-integration",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hyper"),e("OutboundLink")],1),s._v("，"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/cmderdev/cmder/wiki/Seamless-Terminus-integration",target:"_blank",rel:"noopener noreferrer"}},[s._v("Terminus"),e("OutboundLink")],1),s._v(" 和 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/cmderdev/cmder/wiki/Seamless-FluentTerminal-Integration",target:"_blank",rel:"noopener noreferrer"}},[s._v("FluentTerminal"),e("OutboundLink")],1),s._v("，它们都能够兼容 Cmder 哦，可以用它们来代替 ConEmu。")])])}),[],!1,null,null,null);t.default=n.exports}}]);