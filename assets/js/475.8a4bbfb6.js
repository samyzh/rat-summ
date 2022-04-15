(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{2202:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"开放端口相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开放端口相关命令"}},[s._v("#")]),s._v(" 开放端口相关命令")]),s._v(" "),e("h3",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),e("p",[s._v("查看已经开放的端口")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("firewall-cmd --list-ports\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("开启端口")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("firewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("命令含义：")]),s._v(" "),e("ul",[e("li",[s._v("–zone #作用域")]),s._v(" "),e("li",[s._v("–add-port=80/tcp #添加端口，格式为：端口/通讯协议")]),s._v(" "),e("li",[s._v("–permanent #永久生效，没有此参数重启后失效")])]),s._v(" "),e("h3",{attrs:{id:"重启防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启防火墙"}},[s._v("#")]),s._v(" 重启防火墙")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("firewall-cmd --reload           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新载入firewall配置，使配置生效")]),s._v("\nsystemctl stop firewalld.service   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止firewall")]),s._v("\nsystemctl disable firewalld.service "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止firewall开机启动")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);