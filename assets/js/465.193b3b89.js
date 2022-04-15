(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{2184:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"终端提示符设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终端提示符设置"}},[s._v("#")]),s._v(" 终端提示符设置")]),s._v(" "),t("p",[s._v("当前用户账号@主机名 当前所在位置 # / $。\n如 ："),t("strong",[s._v("root@www ~ #")]),s._v(" 代表的是：root用户，主机名为www，以及当作在根目录下，超级用户后面显示的就是#，一般用户后面显示的是$。\n在用户的 ~/.bashrc 文件中修改 PS1 环境变量设置即可。\n要去除前面的路径、用户名及主机名显示，只保留命令提示符，可以这样设置：")]),s._v(" "),t("p",[t("code",[s._v("export PS1='samy$ '")]),s._v("\nsource .bashrc")]),s._v(" "),t("h2",{attrs:{id:"命令及立即生效命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令及立即生效命令"}},[s._v("#")]),s._v(" 命令及立即生效命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .zshrc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .zshrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"配置备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置备份"}},[s._v("#")]),s._v(" 配置备份")]),s._v(" "),t("p",[t("code",[s._v(".zshrc")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you come from bash you might have to change your $PATH.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PATH=$HOME/bin:/usr/local/bin:$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to your oh-my-zsh installation.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/samy/.oh-my-zsh"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set name of the theme to load --- if set to "random", it will')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load a random theme each time oh-my-zsh is loaded, in which case,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# to know which specific one was loaded, run: echo $RANDOM_THEME")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#ZSH_THEME="robbyrussell"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'agnoster'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set list of themes to pick from when loading at random")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Setting this variable when ZSH_THEME=random will cause zsh to load")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If set to an empty array, this variable will have no effect.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to use case-sensitive completion.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# CASE_SENSITIVE="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to use hyphen-insensitive completion.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Case-sensitive completion must be off. _ and - will be interchangeable.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# HYPHEN_INSENSITIVE="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to disable bi-weekly auto-update checks.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# DISABLE_AUTO_UPDATE="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to change how often to auto-update (in days).")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export UPDATE_ZSH_DAYS=13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to disable colors in ls.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# DISABLE_LS_COLORS="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to disable auto-setting terminal title.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# DISABLE_AUTO_TITLE="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to enable command auto-correction.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ENABLE_CORRECTION="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line to display red dots whilst waiting for completion.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# COMPLETION_WAITING_DOTS="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line if you want to disable marking untracked files")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# under VCS as dirty. This makes repository status check for large repositories")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# much, much faster.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# DISABLE_UNTRACKED_FILES_DIRTY="true"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line if you want to change the command execution time")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stamp shown in the history command output.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You can set one of the optional three formats:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or set a custom format using the strftime function format specifications,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# see 'man strftime' for details.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# HIST_STAMPS="mm/dd/yyyy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Would you like to use another custom folder than $ZSH/custom?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ZSH_CUSTOM=/path/to/new-custom-folder")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Which plugins would you like to load?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Standard plugins can be found in ~/.oh-my-zsh/plugins/*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example format: plugins=(rails git textmate ruby lighthouse)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add wisely, as too many plugins slow down shell startup.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" autojump\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH")]),s._v("/oh-my-zsh.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export MANPATH="/usr/local/man:$MANPATH"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You may need to manually set your language environment")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export LANG=en_US.UTF-8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Preferred editor for local and remote sessions")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if [[ -n $SSH_CONNECTION ]]; then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   export EDITOR='vim'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# else")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   export EDITOR='mvim'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Compilation flags")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export ARCHFLAGS="-arch x86_64"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export SSH_KEY_PATH="~/.ssh/rsa_id"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set personal aliases, overriding those provided by oh-my-zsh libs,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# plugins, and themes. Aliases can be placed here, though oh-my-zsh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# users are encouraged to define aliases within the ZSH_CUSTOM folder.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For a full list of active aliases, run `alias`.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example aliases")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zshconfig")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mate ~/.zshrc"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ohmyzsh")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mate ~/.oh-my-zsh"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.nvm"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm bash_completion")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LC_CTYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("C\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("C\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Liboffice config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Applications/LibreOffice.app/Contents/MacOS/:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# calibre config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Applications/calibre.app/Contents/MacOS/:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# golang cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/goproxy/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://athens.azurefd.net\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export JAVA_HOME="/usr/bin/java"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export JRE_HOME=$JAVA_HOME/jre")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/samy/Documents/samy/java/apache-maven-3.6.3\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# andorid cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ANDROID_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/samy/Documents/and/sdk"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NDK_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/samy/Documents/and/sdk/ndk-bundle"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRADLE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/samy/Documents/and/gradle-6.1.1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v("/platform-tools:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v("/tools:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v("/platform-tools:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v("/tools:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NDK_HOME")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GRADLE_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# db or mysql config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#export MONGODB_HOME="/usr/local/Cellar/mongodb@3.2/3.2.11"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#export PATH="/usr/local/opt/mongodb@3.4/bin:$PATH"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mysqlstart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo /usr/local/mysql/support-files/mysql.server start'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mysqlrestart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo /usr/local/mysql/support-files/mysql.server restart'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mysqlstop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sudo /usr/local/mysql/support-files/mysql.server stop'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/mysql/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# go config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" GOROOT\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#export GOPATH=/Users/samy/Documents/study/projects/go/go_pro")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/samy/Documents/temp/go_pro_tmp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOBIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOBIN")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);