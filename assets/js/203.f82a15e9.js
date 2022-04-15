(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1237:function(s,a,t){s.exports=t.p+"assets/img/1608824-20191029131548908-1386001384.d922a8b8.png"},2066:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[s._v("#")]),s._v(" 参数说明")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1237),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"常用实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用实践"}},[s._v("#")]),s._v(" 常用实践")]),s._v(" "),n("h3",{attrs:{id:"根据文件名查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据文件名查找"}},[s._v("#")]),s._v(" 根据文件名查找")]),s._v(" "),n("p",[s._v("列出当前目录以及子目录下的所有文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找到当前目录下名字为"),n("code",[s._v("11.png")]),s._v("的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11.png"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找到当前目录下所有的"),n("code",[s._v("jpg")]),s._v("文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.jpg"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找到当前目录下的"),n("code",[s._v("jpg")]),s._v("文件和"),n("code",[s._v("png")]),s._v("文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.jpg"')]),s._v(" -o -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.png"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找出当前目录下不是以"),n("code",[s._v("png")]),s._v("结尾的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.png"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据正则表达式查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据正则表达式查找"}},[s._v("#")]),s._v(" 根据正则表达式查找")]),s._v(" "),n("p",[s._v("备注：正则表示式比原先想的要复杂，支持好几种类型。可以参考"),n("a",{attrs:{href:"http://www.gnu.org/software/findutils/manual/html_mono/find.html#emacs-regular-expression-syntax",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("找到当前目录下，文件名都是数字的"),n("code",[s._v("png")]),s._v("文件。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -regex "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\./*[0-9]+\\.png"')]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据路径查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据路径查找"}},[s._v("#")]),s._v(" 根据路径查找")]),s._v(" "),n("p",[s._v("找出当前目录下，路径中包含"),n("code",[s._v("wysiwyg")]),s._v("的文件/路径。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -path "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*wysiwyg*"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"限制搜索深度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制搜索深度"}},[s._v("#")]),s._v(" 限制搜索深度")]),s._v(" "),n("p",[s._v("找出当前目录下所有的"),n("code",[s._v("png")]),s._v("，不包括子目录。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -maxdepth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.png"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("相对应的，也是"),n("code",[s._v("mindepth")]),s._v("选项。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -mindepth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -maxdepth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.png"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据文件类型查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据文件类型查找"}},[s._v("#")]),s._v(" 根据文件类型查找")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("-type")]),s._v("进行文件类型的过滤。")]),s._v(" "),n("ul",[n("li",[s._v("f 普通文件")]),s._v(" "),n("li",[s._v("l 符号连接")]),s._v(" "),n("li",[s._v("d 目录")]),s._v(" "),n("li",[s._v("c 字符设备")]),s._v(" "),n("li",[s._v("b 块设备")]),s._v(" "),n("li",[s._v("s 套接字")]),s._v(" "),n("li",[s._v("p Fifo")])]),s._v(" "),n("p",[s._v("举例，查找当前目录下，路径中包含"),n("code",[s._v("wysiwyg")]),s._v("的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -path "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*wysiwyg*"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据文件大小"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据文件大小"}},[s._v("#")]),s._v(" 根据文件大小")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("-size")]),s._v("来过滤文件尺寸。支持的文件大小单元如下")]),s._v(" "),n("ul",[n("li",[s._v("b —— 块（512字节）")]),s._v(" "),n("li",[s._v("c —— 字节")]),s._v(" "),n("li",[s._v("w —— 字（2字节）")]),s._v(" "),n("li",[s._v("k —— 千字节")]),s._v(" "),n("li",[s._v("M —— 兆字节")]),s._v(" "),n("li",[s._v("G —— 吉字节")])]),s._v(" "),n("p",[s._v("举例来说，找出当前目录下文件大小超过100M的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -size +100M \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据访问-修改-变化时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据访问-修改-变化时间"}},[s._v("#")]),s._v(" 根据访问/修改/变化时间")]),s._v(" "),n("p",[s._v("支持下面的时间类型。")]),s._v(" "),n("ul",[n("li",[s._v("访问时间（-atime/天，-amin/分钟）：用户最近一次访问时间。")]),s._v(" "),n("li",[s._v("修改时间（-mtime/天，-mmin/分钟）：文件最后一次修改时间。")]),s._v(" "),n("li",[s._v("变化时间（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。")])]),s._v(" "),n("p",[s._v("举例，找出1天内被修改过的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -mtime -1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找出最近1周内被访问过的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -atime -7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("将日志目录里超过一个礼拜的日志文件，移动到"),n("code",[s._v("/tmp/old_logs")]),s._v("里。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -mtime +7 -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.log"')]),s._v(" -exec "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" /tmp/old_logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意：{} 用于与-exec选项结合使用来匹配所有文件，然后会被替换为相应的文件名。")]),s._v(" "),n("p",[s._v("另外，"),n("code",[s._v("\\;")]),s._v("用来表示命令结束，如果没有加，则会有如下提示")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("find: -exec: no terminating "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('";"')]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据权限"}},[s._v("#")]),s._v(" 根据权限")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("-perm")]),s._v("来实现。举例，找出当前目录下权限为"),n("code",[s._v("777")]),s._v("的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -perm "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找出当前目录下权限不是644的php文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.php"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -perm "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"根据文件拥有者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据文件拥有者"}},[s._v("#")]),s._v(" 根据文件拥有者")]),s._v(" "),n("p",[s._v("找出文件拥有者为"),n("code",[s._v("root")]),s._v("的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -user root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("找出文件所在群组为"),n("code",[s._v("root")]),s._v("的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -group root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"找到文件后执行命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#找到文件后执行命令"}},[s._v("#")]),s._v(" 找到文件后执行命令")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("-ok")]),s._v("、和"),n("code",[s._v("-exec")]),s._v("来实现。区别在于，"),n("code",[s._v("-ok")]),s._v("在执行命令前，会进行二次确认，"),n("code",[s._v("-exec")]),s._v("不会。")]),s._v(" "),n("p",[s._v("看下实际例子。删除当前目录下所有的"),n("code",[s._v("js")]),s._v("文件。用"),n("code",[s._v("-ok")]),s._v("的效果如下，删除前有二次确认")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("➜  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),s._v(" -ok "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm ./1.js"')]),s._v("? \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("试下"),n("code",[s._v("-exec")]),s._v("。直接就删除了")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type f -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),s._v(" -exec "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"找出空文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#找出空文件"}},[s._v("#")]),s._v(" 找出空文件")]),s._v(" "),n("p",[s._v("例子如下")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".txt\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -empty\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);