(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1999:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"监控汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控汇总"}},[s._v("#")]),s._v(" 监控汇总")]),s._v(" "),t("h3",{attrs:{id:"国内服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国内服务"}},[s._v("#")]),s._v(" 国内服务")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:""}},[s._v("https://www.fundebug.com/")])]),s._v(" "),t("li",[t("a",{attrs:{href:""}},[s._v("https://www.frontjs.com/")]),s._v("  功能比fundebug多")]),s._v(" "),t("li",[t("a",{attrs:{href:""}},[s._v("https://www.aliyun.com/product/arms")]),s._v("阿里的ARMS")]),s._v(" "),t("li",[t("a",{attrs:{href:""}},[s._v("http://www.mmtrix.com/")]),s._v("  云测评 云监测")]),s._v(" "),t("li",[t("a",{attrs:{href:""}},[s._v("https://yueying.effirst.com/")]),s._v("UC研发效能开发的岳鹰")]),s._v(" "),t("li",[t("a",{attrs:{href:""}},[s._v("https://github.com/BetterJS/badjs-report")]),s._v("腾讯imweb的badjs")])]),s._v(" "),t("h3",{attrs:{id:"国外服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国外服务"}},[s._v("#")]),s._v(" 国外服务")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://links.jianshu.com/go?to=https://sentry.io/welcome/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sentry.io/welcome/"),t("OutboundLink")],1),s._v(" 【推荐】")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://links.jianshu.com/go?to=https://trackjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://trackjs.com"),t("OutboundLink")],1),s._v("  stackoverflow、谷歌、微软在用")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://links.jianshu.com/go?to=https://instabug.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://instabug.com"),t("OutboundLink")],1),s._v(" PayPal、雅虎在用")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://links.jianshu.com/go?to=https://rollbar.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://rollbar.com/"),t("OutboundLink")],1),s._v(" Uber、wework")]),s._v(" "),t("li",[s._v("https://www.bugsnag.com/")])]),s._v(" "),t("h2",{attrs:{id:"sentry的部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentry的部署"}},[s._v("#")]),s._v(" Sentry的部署")]),s._v(" "),t("blockquote",[t("h3",{attrs:{id:"搭建方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建方式"}},[s._v("#")]),s._v(" 搭建方式")])]),s._v(" "),t("p",[s._v("Sentry的搭建主要有两种")]),s._v(" "),t("ul",[t("li",[s._v("通过Python安装 "),t("a",{attrs:{href:"https://docs.sentry.io/server/installation/python/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方教程链接"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("通过Docker容器安装."),t("a",{attrs:{href:"https://docs.sentry.io/server/installation/docker/",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程地址"),t("OutboundLink")],1),s._v(" 【推荐】")])]),s._v(" "),t("h3",{attrs:{id:"_1、拉取sentry读取安装说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、拉取sentry读取安装说明"}},[s._v("#")]),s._v(" 1、拉取sentry读取安装说明")]),s._v(" "),t("p",[s._v("更新：sentry 有更新，参考readme文件内容如下，具体以官方为准")]),s._v(" "),t("p",[t("img",{attrs:{src:e(989),alt:"image-20211116192435683"}})]),s._v(" "),t("p",[s._v("------------------以下为更新前操作步骤-----------------")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/getsentry/onpremise.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" onpremise\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#根据onpremise目录中的README.md 内容来操作：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md \n---------\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p data/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("sentry,postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" - Make our "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" database and sentry config directories.\n    This directory is bind-mounted with postgres so you don't lose state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker-compose build"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" - Build and tag the Docker services\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker-compose run --rm web config generate-secret-key"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" - Generate a secret key.\n    Add it to "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker-compose.yml"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("base"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("SENTRY_SECRET_KEY"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker-compose run --rm web upgrade"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" - Build the database.\n    Use the interactive prompts to create a user account.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker-compose up -d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" - Lift all services "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detached/background mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(". Access your instance at "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("localhost:9000"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n----------\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_2、在onpremise下创建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、在onpremise下创建目录"}},[s._v("#")]),s._v(" 2、在onpremise下创建目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p data/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("sentry,postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一定执行，不然报错，然后再生成key")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3、取项目的key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、取项目的key"}},[s._v("#")]),s._v(" 3、取项目的key")]),s._v(" "),t("p",[s._v("这个过程很漫长，可能中间会卡，或者出现一些错误，多执行几次就好了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose run --rm web config generate-secret-key\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生成的密匙类似这样：41dvtnqzc#g(*s8ichpp8r@gqzu(p4h(+l6qi(d9+f9ue2u+j9")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4、key-到-sentry-secret-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、key-到-sentry-secret-key"}},[s._v("#")]),s._v(" 4、key 到 SENTRY_SECRET_KEY")]),s._v(" "),t("blockquote",[t("p",[s._v("编辑docker-compose.yml，复制获取的key 到 SENTRY_SECRET_KEY")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" docker-compose.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_5、创建项目的superuser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、创建项目的superuser"}},[s._v("#")]),s._v(" 5、创建项目的superuser")]),s._v(" "),t("p",[s._v("过程中会让我们填写邮箱和密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose run --rm web upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_6、开启sentry服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、开启sentry服务"}},[s._v("#")]),s._v(" 6、开启sentry服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose up -d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7、登录sentry验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、登录sentry验证"}},[s._v("#")]),s._v(" 7、登录sentry验证")]),s._v(" "),t("blockquote",[t("p",[s._v("这时候输入你的 http:😕/ip:9000 即可进入你的 sentry")])]),s._v(" "),t("p",[s._v("使用第 5） 步的用户名密码进行登录即可")]),s._v(" "),t("p",[t("img",{attrs:{src:e(990),alt:"image-20211116192506846"}})]),s._v(" "),t("p",[s._v("进入后进行简单配置，然后右上角可以点击 "),t("code",[s._v("New Project")]),s._v(" 创建，选择需要项目类型，根据提示进行配置")]),s._v(" "),t("p",[t("img",{attrs:{src:e(991),alt:"image-20211116192515385"}})]),s._v(" "),t("p",[t("img",{attrs:{src:e(992),alt:"image-20211116192525065"}})]),s._v(" "),t("p",[t("img",{attrs:{src:e(993),alt:"image-20211116192534483"}})]),s._v(" "),t("p",[t("strong",[s._v("搭建注意事项：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1） 在执行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose run --rm web upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("时报错。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(994),alt:"image-20211116192559342"}})])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忘记执行 docker-compose build")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("2）执行 "),t("code",[s._v("docker-compose up -d")]),s._v(" 报错，关闭 "),t("code",[s._v("docker")]),s._v("再重新打开。")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(995),alt:"image-20211116192620656"}})]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl stop docker "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭docker：")]),s._v("\nsystemctl start docker "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动docker： ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("3）执行 "),t("code",[s._v("docker-compose run --rm web upgrade")]),s._v(" 如果忘记设置用户名或者设置错误，部署完后不能登录则重新安装数据库。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 /var/lib/docker/volumes 下的 onpremise_sentry-postgres 文件夹。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新执行命令 docker-compose run --rm web upgrade")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:e(996),alt:"image-20211116192634633"}})]),s._v(" "),t("ul",[t("li",[s._v("4）用"),t("code",[s._v("docker composer")]),s._v("启动"),t("code",[s._v("docker")]),s._v("集群时报错：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ERROR: Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#应该是docker后台服务没有开启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行：systemctl start docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("5）"),t("code",[s._v("docker")]),s._v("常用的一些操作")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有容器： ")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看运行容器：")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停用所有容器：")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有容器：")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aq"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停用和删除所有容器：")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aq"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"sentry使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentry使用"}},[s._v("#")]),s._v(" Sentry使用")]),s._v(" "),t("h3",{attrs:{id:"_1、管理工具sentry-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、管理工具sentry-cli"}},[s._v("#")]),s._v(" 1、管理工具sentry-cli")]),s._v(" "),t("blockquote",[t("p",[s._v("安装Sentry对应的命令行管理工具sentry-cli")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g @sentry/cli\nsentry-cli -V // 检查版本\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2、生成token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、生成token"}},[s._v("#")]),s._v(" 2、生成token")]),s._v(" "),t("p",[s._v("点击头像左下角，选择API，生成token，勾选project:write权限")]),s._v(" "),t("h3",{attrs:{id:"_3、登陆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、登陆"}},[s._v("#")]),s._v(" 3、登陆")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ sentry-cli --url https://myserver/ login\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回车后输入上一步获得的 token 即可")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4、release控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、release控制"}},[s._v("#")]),s._v(" 4、release控制")]),s._v(" "),t("h4",{attrs:{id:"创建release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建release"}},[s._v("#")]),s._v(" 创建release")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sentry-cli releases -o 组织 -p 项目 new staging@1.0.1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 staging@1.0.1 就是我们指定的版本号. ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# -o -p可以通过页面左上角可以看到。现在我们可以通过创建多个版本号来进行异常分类。 同时，也可以通过页面中"Releases"查看是否创建成功')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"本地应用release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地应用release"}},[s._v("#")]),s._v(" 本地应用release")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装raven-js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" raven-js --save\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到前端项目中，在config添加对应的release，指定版本后，每次上报的异常就会分类到该版本下。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#import Raven from 'raven-js';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Raven.config(DSN, {release: 'staging@1.0.1'}).install()")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"删除release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除release"}},[s._v("#")]),s._v(" 删除release")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sentry-cli releases -o 组织 -p 项目 delete staging@1.0.1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 删除某个release时需要将其下的异常处理掉,并将该版本的sourcemap文件清空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 完成上面两步可能还要等待2小时才能删除，不然会报错：该版本还有其它依赖。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_5、sourcemap管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、sourcemap管理"}},[s._v("#")]),s._v(" 5、SourceMap管理")]),s._v(" "),t("p",[s._v("目前来说，前端项目基本都会压缩混淆代码，这样导致Sentry捕捉到的异常堆栈无法理解。")]),s._v(" "),t("p",[s._v("我们希望在Sentry直接看到异常代码的源码时就需要上传对应的source和map。")]),s._v(" "),t("h4",{attrs:{id:"上传-sourcemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传-sourcemap"}},[s._v("#")]),s._v(" 上传 SourceMap")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sentry-cli releases -o 组织 -p 项目 files staging@1.0.1 upload-sourcemaps js文件所在目录 --url-prefix 线上资源URI\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("PS: 记得别把map文件传到生产环节了，又大又不安全…")]),s._v(" "),t("li",[s._v("PS: 免费服务的文件上限为40MB。")])]),s._v(" "),t("h4",{attrs:{id:"清空-sourcemap-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清空-sourcemap-文件"}},[s._v("#")]),s._v(" 清空 SourceMap 文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sentry-cli releases files staging@1.0.1 delete --all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("也可以选择在 版本>工件 里点击一个个删除。。。。")])]),s._v(" "),t("h4",{attrs:{id:"结合webpack配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结合webpack配置"}},[s._v("#")]),s._v(" 结合webpack配置")]),s._v(" "),t("blockquote",[t("p",[s._v("结合webpack在项目中配置进行sourcemap上传")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装webpack-sentry-plugin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D webpack-sentry-plugin\nvar SentryPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-sentry-plugin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nplugins: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    //"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n    new SentryPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        // Sentry options are required\n        baseSentryURL: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://sentry.mycorp.com/api/0'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是内网使用需要加")]),s._v("\n        organization: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sentry'")]),s._v(",\n        project: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v(",\n        apiKey: process.env.SENTRY_API_KEY,\n    \n        // Release version name/hash is required\n        release: process.env.GIT_SHA,\n        deleteAfterCompile: true,\n        suppressErrors: true,\n        filenameTransform: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://xxx.com/'")]),s._v(" + filename\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("https://docs.sentry.io/platforms/javascript/")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/6844903657381593096",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端异常监控之 Sentry的部署和使用"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.javascriptcn.com/read-31777.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sentry前端部署拓展篇（sourcemap关联、issue关联、release控制）"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://blog.51cto.com/linuxg/2052927",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Docker 方式在Centos 7.0 安装配置Sentry"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/40thieves/webpack-sentry-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack-sentry-plugin"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://blog.fritx.me/?2017/07/sentry-sourcemap-guide",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sentry支持SourceMap指引"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports},989:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192435683.8891408e.png"},990:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192506846.4aeae346.png"},991:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192515385.234424ea.png"},992:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192525065.9933fe54.png"},993:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192534483.d49d7bf1.png"},994:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192559342.4954bc92.png"},995:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192620656.e99c8fd6.png"},996:function(s,a,e){s.exports=e.p+"assets/img/image-20211116192634633.d06b135d.png"}}]);