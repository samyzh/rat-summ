(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1980:function(t,s,v){"use strict";v.r(s);var _=v(14),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"计算机体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机体系结构"}},[t._v("#")]),t._v(" 计算机体系结构")]),t._v(" "),_("p",[_("img",{attrs:{src:v(858),alt:""}})]),t._v(" "),_("h2",{attrs:{id:"各协议比较及细分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各协议比较及细分"}},[t._v("#")]),t._v(" 各协议比较及细分")]),t._v(" "),_("h3",{attrs:{id:"协议群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议群"}},[t._v("#")]),t._v(" 协议群")]),t._v(" "),_("p",[_("img",{attrs:{src:v(859),alt:""}})]),t._v(" "),_("p",[t._v("数据链路层、物理层 ：物理设备 (在五层模型中能称之为协议的都在三层以上)")]),t._v(" "),_("ul",[_("li",[t._v("网络层：")]),t._v(" "),_("li",[_("ul",[_("li",[t._v("IP 协议：寻址通过路由器查找，将消息发送给对方路由器，通过 ARP 协议,发送自己的mac地址")]),t._v(" "),_("li",[t._v("ARP 协议：Address Resolution Protocol 从 ip 地址获取 mac地址 （局域网）； 根据目的 IP 地址，解析目的 mac 地址；")])])]),t._v(" "),_("li",[t._v("传输层：TCP 、 UDP")]),t._v(" "),_("li",[t._v("应用层: HTTP 、 DNS 、 FTP 、 TFTP 、 SMTP 、 DHCP")])]),t._v(" "),_("h4",{attrs:{id:"arp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arp协议"}},[t._v("#")]),t._v(" ARP协议")]),t._v(" "),_("p",[t._v("根据目的 IP 地址，解析目的 mac 地址；")]),t._v(" "),_("p",[_("img",{attrs:{src:v(860),alt:"image-20211104193135316"}})]),t._v(" "),_("p",[t._v("有了源mac地址和目标mac地址，就可以传输数据包了；")]),t._v(" "),_("h4",{attrs:{id:"dhcp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dhcp协议"}},[t._v("#")]),t._v(" DHCP协议")]),t._v(" "),_("p",[t._v("通过 DHCP 自动获取网络配置信息 （动态主机配置协议Dynamic Host Confifiguration Protocol）我们无需自己手动配置 IP；")]),t._v(" "),_("h4",{attrs:{id:"dns协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns协议"}},[t._v("#")]),t._v(" DNS协议")]),t._v(" "),_("p",[t._v("DNS 是Domain Name System的缩写， DNS 服务器进行域名和与之对应的 IP 地址转换的服务器")]),t._v(" "),_("ul",[_("li",[t._v("顶级域名 .com 、")]),t._v(" "),_("li",[t._v("二级域名 .com.cn 、 三级域名 www.zf.com.cn , 有多少个点就是几级域名")])]),t._v(" "),_("p",[t._v("访问过程：我们访问 zf.com.cn")]),t._v(" "),_("ul",[_("li",[t._v("操作系统里会对 DNS 解析结果做缓存，如果缓存中有直接返回 IP 地址")]),t._v(" "),_("li",[t._v("查找 C:\\WINDOWS\\system32\\drivers\\etc\\hosts 如果有直接返回 IP 地址")]),t._v(" "),_("li",[t._v("通过 DNS "),_("strong",[t._v("服务器")]),t._v("查找离自己最近的根服务器，通过根服务器找到 .cn 服务器，将 ip")]),t._v(" "),_("li",[t._v("返回给 DNS 服务器")]),t._v(" "),_("li",[t._v("DNS 服务器会继续像此 ip 发送请求，去查找对应 .cn 下 .com 对应的 ip ...获取最终的 ip 地址。缓存到 DNS 服务器上；")]),t._v(" "),_("li",[t._v("获取最终的 ip 地址。缓存到 DNS 服务器上；【DNS 服务器会对 ip 及 域名 进行缓存】")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(861),alt:"image-20211104193633341"}})]),t._v(" "),_("h3",{attrs:{id:"体系结构与协议群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#体系结构与协议群"}},[t._v("#")]),t._v(" 体系结构与协议群")]),t._v(" "),_("p",[_("img",{attrs:{src:v(862),alt:""}})]),t._v(" "),_("p",[t._v("OSI的体系结构详细介绍 ==>"),_("strong",[t._v("应传网接")]),t._v(" "),_("img",{attrs:{src:v(863),alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("网络"),_("strong",[t._v("七层模型")]),t._v("是"),_("strong",[t._v("一个标准，而非实现")]),t._v("。")]),t._v(" "),_("li",[t._v("网络四层模型是一个"),_("strong",[t._v("实现的应用模型")]),t._v("。网络四层模型由七层模型简化合并而来。")])]),t._v(" "),_("h3",{attrs:{id:"分层管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层管理"}},[t._v("#")]),t._v(" 分层管理")]),t._v(" "),_("p",[_("img",{attrs:{src:v(864),alt:""}}),t._v(" "),_("img",{attrs:{src:v(865),alt:""}})]),t._v(" "),_("p",[t._v("各层比较\n"),_("img",{attrs:{src:v(866),alt:""}})]),t._v(" "),_("p",[t._v("路由器与交换机的区别\n"),_("img",{attrs:{src:v(867),alt:""}})]),t._v(" "),_("h3",{attrs:{id:"通信过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通信过程"}},[t._v("#")]),t._v(" 通信过程")]),t._v(" "),_("p",[_("img",{attrs:{src:v(868),alt:""}}),t._v(" "),_("img",{attrs:{src:v(869),alt:""}}),t._v(" "),_("img",{attrs:{src:v(870),alt:""}}),_("img",{attrs:{src:v(871),alt:"image-20211104200553675"}})]),t._v(" "),_("h3",{attrs:{id:"地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址"}},[t._v("#")]),t._v(" 地址")]),t._v(" "),_("p",[t._v("通信是通过 ip 地址查找对应的 mac 来进行通信的。 IP地址 是可变的（类似我们收")]),t._v(" "),_("p",[t._v("件地址）MAC地址是不可变的。")]),t._v(" "),_("h4",{attrs:{id:"ip地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[t._v("#")]),t._v(" IP地址")]),t._v(" "),_("p",[t._v("IPV4 网际协议版本4 ，地址由 32 位二进制数值组成 例如：192.168.1.1 ，大概42亿个")]),t._v(" "),_("p",[t._v("IPV6 网际协议版本6 ，地址由 8个16位块的128位组成。 例如：")]),t._v(" "),_("p",[t._v("2408:8207:788b:2370:9530:b5e7:9c53:ff87 大约 3.4*10^38")]),t._v(" "),_("h4",{attrs:{id:"mac地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mac地址"}},[t._v("#")]),t._v(" MAC地址")]),t._v(" "),_("p",[t._v("设备通信都是由内部的网卡设备来进行的，每个网卡都有自己的mac地址（原则上唯一）")]),t._v(" "),_("h2",{attrs:{id:"物理设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理设备"}},[t._v("#")]),t._v(" 物理设备")]),t._v(" "),_("h3",{attrs:{id:"物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),_("p",[t._v("中继器：双绞线最大传输距离 100M ，中继器可以延长网络传输的距离，对衰减的信")]),t._v(" "),_("p",[t._v("号有放大在生的功能。")]),t._v(" "),_("p",[t._v("集线器：多口的中继器，目的是将网络上的所有设备连接在一起 , 不会过滤数据，也")]),t._v(" "),_("p",[t._v("不知道将收到的数据发给谁。（采用的方式就是广播给每个人）")]),t._v(" "),_("p",[t._v("可以实现局域网的通信，但是会有安全问题，还会造成不必要的流量浪费。 傻，你")]),t._v(" "),_("p",[t._v("就不能记住来过的人嘛？每次都发送？")]),t._v(" "),_("h3",{attrs:{id:"数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),_("p",[t._v("交换机：交换机可以识别已经连接设备的物理地址（MAC地址）。可以将数据传递到")]),t._v(" "),_("p",[t._v("相应的端口上")]),t._v(" "),_("h3",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),_("p",[_("strong",[t._v("路由器：")])]),t._v(" "),_("p",[t._v("检测数据的 ip 地址是否属于自己网络，如果不是会发送到另一个网络。"),_("strong",[t._v("没有 wan 口的路由器可以看成交换机。 路由器一般充当网关，路由器会将本地 IP 地址进行NAT")])]),t._v(" "),_("p",[_("strong",[t._v("网关：")])]),t._v(" "),_("p",[t._v("两个子网之间不可以直接通信，需要通过网关进行转发")]),t._v(" "),_("p",[_("img",{attrs:{src:v(872),alt:"image-20211104192022627"}})]),t._v(" "),_("h2",{attrs:{id:"tcp-udp-http协议比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-http协议比较"}},[t._v("#")]),t._v(" TCP/UDP/HTTP协议比较")]),t._v(" "),_("h3",{attrs:{id:"tcp-udp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp协议"}},[t._v("#")]),t._v(" TCP/UDP协议")]),t._v(" "),_("p",[_("code",[t._v("Transmission Control Protocol")]),t._v("，"),_("strong",[t._v("TCP")]),t._v("即 传输控制协议")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("属于 传输层通信协议")]),t._v(" "),_("li",[t._v("基于"),_("code",[t._v("TCP")]),t._v("的应用层协议有"),_("code",[t._v("HTTP")]),t._v("、"),_("code",[t._v("SMTP")]),t._v("、"),_("code",[t._v("FTP")]),t._v("、"),_("code",[t._v("Telnet")]),t._v(" 和 "),_("code",[t._v("POP3")])])])]),t._v(" "),_("p",[t._v("关于"),_("code",[t._v("TCP")]),t._v("的其他知识：如三次握手、四次挥手、无差错控制原理等")]),t._v(" "),_("p",[_("code",[t._v("User Datagram Protocol")]),t._v("，"),_("strong",[t._v("UDP")]),t._v("即 用户数据报协议")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("属于 传输层通信协议")]),t._v(" "),_("li",[t._v("基于"),_("code",[t._v("UDP")]),t._v("的应用层协议有 "),_("code",[t._v("TFTP")]),t._v("、"),_("code",[t._v("SNMP")]),t._v(" 与 "),_("code",[t._v("DNS")])])])]),t._v(" "),_("h4",{attrs:{id:"tcp报文段格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段格式"}},[t._v("#")]),t._v(" TCP报文段格式")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("TCP虽面向字节流，但传送的数据单元 = 报文段")])]),t._v(" "),_("li",[t._v("报文段 = 首部 + 数据 2部分")]),t._v(" "),_("li",[t._v("TCP的全部功能体现在它首部中各字段的作用，故下面主要讲解TCP报文段的首部")])]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("首部前20个字符固定、后面有4n个字节是根据需而增加的选项")]),t._v(" "),_("li",[t._v("故 TCP首部最小长度 = 20字节")])])]),t._v(" "),_("p",[_("img",{attrs:{src:v(873),alt:""}}),t._v(" "),_("img",{attrs:{src:v(874),alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(875),alt:"image-20211104194043106"}})]),t._v(" "),_("ul",[_("li",[t._v("源端口号、目标端口号，指代的是发送方随机端口，目标端对应的端口")]),t._v(" "),_("li",[t._v("序列号：32位序列号是用于对数据包进行标记，方便重组")]),t._v(" "),_("li",[t._v("确认序列号：期望发送方下一个发送的数据的编号")]),t._v(" "),_("li",[t._v("4位首部长度：单位是字节，4位最大能表示15，所以头部长度最大为60")]),t._v(" "),_("li",[t._v("URG :紧急新号、 ACK :确认信号、 PSH :应该从TCP缓冲区读走数据、 RST ：断开重新")]),t._v(" "),_("li",[t._v("连接、 SYN :建立连接、 FIN :表示要断开")]),t._v(" "),_("li",[t._v("窗口大小： 当网络通畅时将这个窗口值变大加快传输速度，当网络不稳定时减少这个")]),t._v(" "),_("li",[t._v("值。在TCP中起到流量控制作用。")]),t._v(" "),_("li",[t._v("校验和：用来做差错控制，看传输的报文段是否损坏")]),t._v(" "),_("li",[t._v("紧急指针：用来发送紧急数据使用")])]),t._v(" "),_("p",[t._v("TCP 对数据进行分段打包传输，对每个数据包编号控制顺序。")]),t._v(" "),_("h4",{attrs:{id:"udp报文段格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp报文段格式"}},[t._v("#")]),t._v(" UDP报文段格式")]),t._v(" "),_("ul",[_("li",[t._v("UDP的报文段共有2个字段：数据字段 & 首部字段")]),t._v(" "),_("li",[t._v("下面主要介绍首部（8字节、4个字段）")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(876),alt:""}}),t._v(" "),_("img",{attrs:{src:v(877),alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(878),alt:"image-20211104195216236"}})]),t._v(" "),_("p",[t._v("使用场景： DHCP 协议、 DNS 协议、 QUIC 协议等 (处理速度快，可以丢包的情况)")]),t._v(" "),_("h4",{attrs:{id:"tcp-udp协议的区别【要点】"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp协议的区别【要点】"}},[t._v("#")]),t._v(" TCP/UDP协议的区别【要点】")]),t._v(" "),_("p",[_("img",{attrs:{src:v(879),alt:""}})]),t._v(" "),_("p",[t._v("TCP有粘包的情况；")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("协议")]),t._v(" "),_("th",[t._v("连接性")]),t._v(" "),_("th",[t._v("双工性")]),t._v(" "),_("th",[t._v("可靠性")]),t._v(" "),_("th",[t._v("有序性")]),t._v(" "),_("th",[t._v("有界性")]),t._v(" "),_("th",[t._v("拥塞控制")]),t._v(" "),_("th",[t._v("传输速度")]),t._v(" "),_("th",[t._v("量级")]),t._v(" "),_("th",[t._v("头部大小")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("TCP")]),t._v(" "),_("td",[t._v("面向连接(Connection oriented)")]),t._v(" "),_("td",[t._v("全双(1:1)")]),t._v(" "),_("td",[_("strong",[t._v("可靠(重传机制)")])]),t._v(" "),_("td",[t._v("有序(通过SYN排序)")]),t._v(" "),_("td",[t._v("无, 有粘包情况")]),t._v(" "),_("td",[t._v("有")]),t._v(" "),_("td",[t._v("慢")]),t._v(" "),_("td",[t._v("低")]),t._v(" "),_("td",[_("strong",[t._v("20~60字节")])])]),t._v(" "),_("tr",[_("td",[t._v("UDP")]),t._v(" "),_("td",[t._v("无连接(Connection less)")]),t._v(" "),_("td",[t._v("n:m")]),t._v(" "),_("td",[t._v("不可靠(丢包后数据丢失)")]),t._v(" "),_("td",[t._v("无序")]),t._v(" "),_("td",[t._v("有消息边界, "),_("strong",[t._v("无粘包")])]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("快")]),t._v(" "),_("td",[t._v("高")]),t._v(" "),_("td",[_("strong",[t._v("8字节")])])])])]),t._v(" "),_("h4",{attrs:{id:"tcp粘包-拆包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包-拆包"}},[t._v("#")]),t._v(" TCP粘包/拆包")]),t._v(" "),_("p",[t._v("详细可见【Websocket的使用】中的详细介绍；")]),t._v(" "),_("ul",[_("li",[t._v("Nagle 算法的基本定义是"),_("strong",[t._v("任意时刻，最多只能有一个未被确认的小段")]),t._v(" (TCP内部控制)")]),t._v(" "),_("li",[t._v("Cork算法 当达到 MSS (Maximum Segment Size )值时统一进行发送（此值就是帧的大小 -ip 头 - tcp 头 = 1460个字节）理论值")])]),t._v(" "),_("h5",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),_("p",[t._v("当一次发送"),_("strong",[t._v("数据过长时，tcp 会把数据封成多个包发送")]),t._v("；同样当"),_("strong",[t._v("数据过短时， 会把数据合并成一个包发送")]),t._v("，这种现象就是粘包。")]),t._v(" "),_("p",[_("strong",[t._v("默认情况下, TCP 连接会启用"),_("code",[t._v("延迟传送算法")]),t._v(" (Nagle 算法),")]),t._v(" 在数据发送之前缓存他们. 如果短时间有多个数据发送, 会缓冲到一起作一次发送 (缓冲大小见 "),_("code",[t._v("socket.bufferSize")]),t._v("), "),_("strong",[t._v("这样可以减少 IO 消耗提高性能")]),t._v(".如果是传输文件的话, 那么根本不用处理粘包的问题, 来一个包拼一个包就好了.  "),_("strong",[t._v("但是如果是多条消息, 或者是别的用途的数据那么久需要处理粘包.")])]),t._v(" "),_("p",[t._v("可以参见网上流传比较广的一个例子:")]),t._v(" "),_("p",[t._v("连续调用两次 send 分别发送两段数据 data1 和 data2, 在接收端有以下几种常见的情况:")]),t._v(" "),_("ul",[_("li",[t._v("A. 先接收到 data1, 然后接收到 data2 .")]),t._v(" "),_("li",[t._v("B. 先接收到 data1 的部分数据, 然后接收到 data1 余下的部分以及 data2 的全部.")]),t._v(" "),_("li",[t._v("C. 先接收到了 data1 的全部数据和 data2 的部分数据, 然后接收到了 data2 的余下的数据.")]),t._v(" "),_("li",[t._v("D. 一次性接收到了 data1 和 data2 的全部数据.")])]),t._v(" "),_("p",[_("strong",[t._v("其中的 BCD 就是我们常见的粘包的情况")]),t._v(". 而对于处理粘包的问题, "),_("strong",[t._v("常见的解决方案有")]),t._v(":")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("多次发送之前间隔一个等待时间")]),t._v("；")]),t._v(" "),_("li",[t._v("关闭 Nagle 算法；")]),t._v(" "),_("li",[t._v("进行封包/拆包；"),_("strong",[t._v("封包/拆包是目前业内常见的解决方案了")]),t._v(". 即"),_("code",[t._v("给每个数据包在发送之前, 于其前/后放一些有特征的数据, 然后收到数据的时候根据特征数据分割出来各个数据包")]),t._v(".")])]),t._v(" "),_("h5",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" "),_("strong",[t._v("解决方案")])]),t._v(" "),_("ul",[_("li",[_("p",[_("em",[t._v("方案1")])]),t._v(" "),_("p",[t._v("只需要等上一段时间再进行下一次 send 就好, 适用于交互频率特别低的场景. 缺点也很明显, 对于比较频繁的场景而言传输效率实在太低. 不过几乎用做什么处理.")])]),t._v(" "),_("li",[_("p",[_("em",[t._v("方案2")])]),t._v(" "),_("p",[t._v("关闭 Nagle 算法, 在 Node.js 中你可以通过 "),_("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/net.html#net_socket_setnodelay_nodelay",target:"_blank",rel:"noopener noreferrer"}},[t._v("`socket.setNoDelay()"),_("OutboundLink")],1),t._v(" 方法来关闭 Nagle 算法, 让每一次 send 都不缓冲直接发送.")]),t._v(" "),_("p",[t._v("该方法比较适用于"),_("strong",[t._v("每次发送的数据都比较大")]),t._v(" (但不是文件那么大), 并且频率不是特别高的场景. 如果是每次发送的数据量比较小, 并且频率特别高的, 关闭 Nagle 纯属自废武功.")]),t._v(" "),_("p",[_("strong",[t._v("另外, 该方法不适用于网络较差的情况")]),t._v(", 因为 Nagle 算法是在服务端进行的包合并情况, 但是如果短时间内客户端的网络情况不好, 或者应用层由于某些原因不能及时将 TCP 的数据 recv, "),_("strong",[t._v("就会造成多个包在客户端缓冲从而粘包的情况")]),t._v(". (如果是在稳定的机房内部通信那么这个概率是比较小可以选择忽略的)")])]),t._v(" "),_("li",[_("p",[_("em",[t._v("方案3")])]),t._v(" "),_("p",[_("strong",[t._v("封包/拆包是目前业内常见的解决方案了")]),t._v(". 即给每个数据包在发送之前, 于其前/后放一些有特征的数据, 然后收到数据的时候根据特征数据分割出来各个数据包.")]),t._v(" "),_("ul",[_("li",[t._v("1、"),_("strong",[t._v("发送端给每个数据包添加包首部，首部中应该至少包含数据包的长度;")])]),t._v(" "),_("li",[t._v("2、"),_("strong",[t._v("发送端将每个数据包封装为固定长度（不够的可以通过补0填充）")]),t._v("【推荐】")]),t._v(" "),_("li",[t._v("3、"),_("strong",[t._v("可以在数据包之间设置边界，如添加特殊符号")])])]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("//当前发送方发送了两个包，两个包的内容如下：\n123456789\nABCDEFGH\n\n//粘包情况\n123456789ABCDEFGH\n//分包情况\n12345\n6789\nABCDE\nFGH\n\n//处理办法：\n//给数据包的头尾加上标记\nSTART123456789END\nSTARTABCDEFGHEND\n//在数据包头部加上内容的长度\nPACKAGELENGTH:0009123456789\nPACKAGELENGTH:0008ABCDEFGH\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br")])])])]),t._v(" "),_("h4",{attrs:{id:"滑动窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),_("ul",[_("li",[t._v("滑动窗口：TCP是全双工的，所以发送端有发送缓存区；接收端有接收缓存区，要发送的数据都放 到发送者的缓存区，发送窗口（要被发送的数据）就是要发送缓存中的哪一部分")]),t._v(" "),_("li",[t._v("核心是流量控制：在建立连接时，接收端会告诉发送端自己的窗口大小（ rwnd ）,每次接收端收到数据后都会再次确认（ rwnd ）大小，如果值为0，停止发送数据。（并发送窗口探测包，持续监测窗口大小）")])]),t._v(" "),_("h4",{attrs:{id:"tcp拥塞处理-队头阻塞-慢启动-短连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp拥塞处理-队头阻塞-慢启动-短连接"}},[t._v("#")]),t._v(" TCP"),_("strong",[t._v("拥塞处理 （队头阻塞，慢启动， 短连接）")])]),t._v(" "),_("blockquote",[_("p",[t._v("举例：假设接收方窗口大小是无限的，接收到数据后就能发送 ACK 包，那么传输数据主要是依赖于网络带宽，带宽的大小是有限的。")])]),t._v(" "),_("ul",[_("li",[t._v("TCP 维护一个拥塞窗口 cwnd （congestion window）变量 ，在传输过程正没有拥塞就将此值增大。如果出现拥塞（超时重传 RTO(Retransmission TimeOut) ）就将窗口值减少。")]),t._v(" "),_("li",[t._v("cwnd < ssthresh 使用慢开始算法")]),t._v(" "),_("li",[t._v("cwnd > ssthresh 使用拥塞避免算法")]),t._v(" "),_("li",[t._v("ROT时更新 ssthresh 值为当前窗口的一半，更新 cwnd = 1")]),t._v(" "),_("li",[t._v("传输轮次： RTT (Round-trip time) ,从发送到确认信号的时间")]),t._v(" "),_("li",[t._v("cwnd 控制发送窗口的大小。")])]),t._v(" "),_("p",[t._v("快重传，可能在发送的过程中出现丢包情况。此时不要立即回退到慢开始阶段，而是对已经收到的报文重复确认，如果确认次数达到3此，则立即进行重传 "),_("strong",[t._v("快恢复算法")]),t._v("(减少超时重传机制的出现)，降低重置 cwnd 的频率。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(880),alt:"image-20211104195731593"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(881),alt:"image-20211104195749413"}})]),t._v(" "),_("h3",{attrs:{id:"http协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),_("p",[_("img",{attrs:{src:v(882),alt:""}})]),t._v(" "),_("h4",{attrs:{id:"http报文结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http报文结构"}},[t._v("#")]),t._v(" HTTP报文结构")]),t._v(" "),_("p",[_("code",[t._v("HTTP")]),t._v("的请求报文由 "),_("strong",[t._v("请求行、请求头 & 请求体")]),t._v(" 组成，如下图\n"),_("img",{attrs:{src:v(883),alt:""}})]),t._v(" "),_("p",[t._v("以 "),_("code",[t._v("nc")]),t._v(" 模拟 http 报文如下")]),t._v(" "),_("div",{staticClass:"language-http line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-http"}},[_("code",[t._v("$ nc www.baidu.com 80\nGET / HTTP/1.1\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" www.baidu.com\n\n"),_("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Ranges:")]),t._v(" bytes\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" no-cache\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" Keep-Alive\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Length:")]),t._v(" 14615\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Date:")]),t._v(" Tue, 10 Dec 2019 02:48:44 GMT\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("P3p:")]),t._v(' CP=" OTI DSP COR IVA OUR IND COM "\n'),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("P3p:")]),t._v(' CP=" OTI DSP COR IVA OUR IND COM "\n'),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Pragma:")]),t._v(" no-cache\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Server:")]),t._v(" BWS/1.1\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" BAIDUID=F0FC6B3A056DEA285F51A1F2F8A170BB:FG=1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" BIDUPSID=F0FC6B3A056DEA285F51A1F2F8A170BB; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" PSTM=1575946124; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" BAIDUID=F0FC6B3A056DEA287CB2B9422E09E30E:FG=1; max-age=31536000; expires=Wed, 09-Dec-20 02:48:44 GMT; domain=.baidu.com; path=/; version=1; comment=bd\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Traceid:")]),t._v(" 1575946124058431156210725656341129791126\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Vary:")]),t._v(" Accept-Encoding\n"),_("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-Ua-Compatible:")]),t._v(" IE=Edge,chrome=1\n\n<!DOCTYPE html>\x3c!--STATUS OK--\x3e\n........内容省略\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br"),_("span",{staticClass:"line-number"},[t._v("21")]),_("br"),_("span",{staticClass:"line-number"},[t._v("22")]),_("br"),_("span",{staticClass:"line-number"},[t._v("23")]),_("br"),_("span",{staticClass:"line-number"},[t._v("24")]),_("br"),_("span",{staticClass:"line-number"},[t._v("25")]),_("br")])]),_("h2",{attrs:{id:"tcp-udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp"}},[t._v("#")]),t._v(" TCP/UDP")]),t._v(" "),_("h3",{attrs:{id:"建立连接过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立连接过程"}},[t._v("#")]),t._v(" 建立连接过程")]),t._v(" "),_("ul",[_("li",[t._v("TCP建立连接需 "),_("strong",[t._v("三次握手")])]),t._v(" "),_("li",[t._v("具体介绍如下\n"),_("img",{attrs:{src:v(884),alt:""}})])]),t._v(" "),_("p",[_("strong",[t._v("成功进行TCP的三次握手后，就建立起一条TCP连接，即可传送应用层数据")])]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("因 "),_("code",[t._v("TCP")]),t._v("提供的是全双工通信，故通信双方的应用进程在任何时候都能发送数据")]),t._v(" "),_("li",[t._v("三次握手期间，任何1次未收到对面的回复，则都会重发")])])]),t._v(" "),_("blockquote",[_("p",[t._v("特别说明：为什么TCP建立连接需三次握手, 两次不可以么？")]),t._v(" "),_("p",[t._v("“三次握手” 的目的是为了防止"),_("strong",[t._v("已失效的链接请求报文突然又传送到了服务端")]),t._v("，因而产生错误。")])]),t._v(" "),_("p",[t._v("防止服务器端因接收了"),_("strong",[t._v("早已失效的连接请求报文")]),t._v("，从而一直等待客户端请求，最终导致"),_("strong",[t._v("形成死锁、浪费资源")]),t._v("；")]),t._v(" "),_("p",[_("strong",[t._v("详细分析")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("正常的情况")]),t._v("：A 发出连接请求，但因连接请求报文丢失而未收到确认，于是 A 再重传一次连接请求。后来收到了确认，建立了连接。数据传输完毕后，就释放了连接。A 共发送了两个连接请求报文段，其中第一个丢失，第二个到达了 B。没有 “已失效的连接请求报文段”。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("现假定出现了一种异常情况")]),t._v("：即 A 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 B。本来这是一个早已失效的报文段。但 B 收到此失效的连接请求报文段后，就误认为是 A 再次发出的一个新的连接请求。于是就向 A 发出确认报文段，同意建立连接。")]),t._v(" "),_("p",[t._v("假设不采用“三次握手”，那么只要 B 发出确认，新的连接就建立了。由于现在 A 并没有发出建立连接的请求，因此不会理睬 B 的确认，也不会向 B 发送数据。但 B 却以为新的运输连接已经建立，并一直等待 A 发来数据。这样，B 的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。")])])]),t._v(" "),_("h3",{attrs:{id:"释放连接过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#释放连接过程"}},[t._v("#")]),t._v(" 释放连接过程")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("在通信结束后，双方都可以释放连接，共需 "),_("strong",[t._v("四次挥手")])])]),t._v(" "),_("li",[_("p",[t._v("具体如下\n"),_("img",{attrs:{src:v(885),alt:""}})])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("延伸疑问：为什么客户端关闭连接前要等待2MSL时间？")])])]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("即 "),_("code",[t._v("TIME - WAIT")]),t._v(" 状态的作用是什么；")])]),t._v(" "),_("li",[_("strong",[_("code",[t._v("MSL")]),t._v(" = 最长报文段寿命（"),_("code",[t._v("Maximum Segment Lifetime")]),t._v("）")])])]),t._v(" "),_("p",[_("strong",[t._v("原因1：为了保证客户端发送的最后1个连接释放确认报文 能到达服务器，从而使得服务器能正常释放连接")]),t._v(";")]),t._v(" "),_("p",[t._v("为了防止最终的 ACK 丢失，发送 ACK 后需要等待一段时间，因为如果丢包服务端需要重新发送 FIN 包，如果客户端已经 closed ，那么服务端会将结果解析成错误。从而在高并发非长连接的场景下会有大量端口被占用。")]),t._v(" "),_("blockquote",[_("h5",{attrs:{id:"为什么tcp释放连接需四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么tcp释放连接需四次挥手"}},[t._v("#")]),t._v(" 为什么TCP释放连接需四次挥手？")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("结论: 为了保证通信"),_("strong",[t._v("双方都能通知对方")]),t._v(" 需释放 & 断开连接")]),t._v(" "),_("p",[t._v("**TCP 协议是一种面向连接的、可靠的、基于字节流的运输层通信协议。**TCP 是全双工模式，这就意味着，当 A 向 B 发出 FIN 报文段时，只是表示 A 已经没有数据要发送了，而此时 A 还是能够接受到来自 B 发出的数据；B 向 A 发出 ACK 报文段也只是告诉 A ，它自己知道 A 没有数据要发了，但 B 还是能够向 A 发送数据。")]),t._v(" "),_("p",[t._v("所以想要愉快的结束这次对话就需要四次挥手。"),_("strong",[t._v("即释放连接后，都无法接收 / 发送消息给对方")])])])]),t._v(" "),_("blockquote",[_("h4",{attrs:{id:"为什么建立连接协议是三次握手-而关闭连接却是四次挥手呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立连接协议是三次握手-而关闭连接却是四次挥手呢"}},[t._v("#")]),t._v(" 为什么建立连接协议是三次握手，而关闭连接却是四次挥手呢？")])]),t._v(" "),_("p",[_("strong",[t._v("普通原理")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("防止服务器端因接收了"),_("strong",[t._v("早已失效的连接请求报文")]),t._v("，从而一直等待客户端请求，最终导致"),_("strong",[t._v("形成死锁、浪费资源")]),t._v("；【三次握手】")])]),t._v(" "),_("li",[_("p",[t._v("为了保证通信"),_("strong",[t._v("双方都能通知对方")]),t._v(" 需释放 & 断开连接【四次挥手】")])])]),t._v(" "),_("p",[_("strong",[t._v("内部原理")]),t._v("：")]),t._v(" "),_("p",[t._v("三次握手：这是因为服务端的LISTEN状态下的SOCKET当收到SYN报文的建连请求后，"),_("strong",[t._v("它可以把ACK和SYN（ACK起应答作用，而SYN起同步作用）放在一个报文里来发送")]),t._v("。")]),t._v(" "),_("p",[t._v("四次挥手：当关闭连接时，当收到对方的FIN报文通知时，它仅仅表示对方没有数据发送给你了；但未必你所有的数据都全部发送给对方了，所以你可能未必会马上会关闭SOCKET, 也即你可能还需要发送一些数据给对方之后，再发送FIN报文给对方来表示你同意现在可以关闭连接了，所以它这里的ACK报文和FIN报文多数情况下都是分开发送的。")]),t._v(" "),_("h3",{attrs:{id:"过程总括【要点】"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过程总括【要点】"}},[t._v("#")]),t._v(" 过程总括【要点】")]),t._v(" "),_("h4",{attrs:{id:"tcp-三次握手的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手的过程"}},[t._v("#")]),t._v(" TCP 三次握手的过程：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("客户端发送一个带 SYN=1，Seq=X 的数据包到服务器端口")]),t._v("（第一次握手，由浏览器发起，告诉服务器我要发送请求了）")]),t._v(" "),_("li",[_("strong",[t._v("服务器发回一个带 SYN=1， ACK=X+1， Seq=Y 的响应包以示传达确认信息")]),t._v("（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）")]),t._v(" "),_("li",[_("strong",[t._v("客户端再回传一个带 ACK=Y+1， Seq=Z 的数据包，代表“握手结束”")]),t._v("（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）")])]),t._v(" "),_("h4",{attrs:{id:"tcp-四次挥手的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手的过程"}},[t._v("#")]),t._v(" TCP 四次挥手的过程：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("发起方向被动方发送报文，Fin、Ack、Seq，表示已经没有数据传输了。并进入 FIN_WAIT_1 状态")]),t._v("。(第一次挥手：由浏览器发起的，发送给服务器，"),_("strong",[t._v("我请求报文发送完了")]),t._v("，你准备关闭吧)")]),t._v(" "),_("li",[_("strong",[t._v("被动方发送报文，Ack、Seq，表示同意关闭请求。此时主机发起方进入 FIN_WAIT_2 状态")]),t._v("。(第二次挥手：由服务器发起的，告诉浏览器，"),_("strong",[t._v("我请求报文接受完了")]),t._v("，我准备关闭了，你也准备吧)")]),t._v(" "),_("li",[_("strong",[t._v("被动方向发起方发送报文段，Fin、Ack、Seq，请求关闭连接。并进入 LAST_ACK 状态")]),t._v("。(第三次挥手：由服务器发起，告诉浏览器，"),_("strong",[t._v("我响应报文发送完了")]),t._v("，你准备关闭吧)")]),t._v(" "),_("li",[_("strong",[t._v("发起方向被动方发送报文段，Ack、Seq。然后进入等待 TIME_WAIT 状态。被动方收到发起方的报文段以后关闭连接。发起方等待一定时间未收到回复，则正常关闭")]),t._v("。(第四次挥手：由浏览器发起，告诉服务器，"),_("strong",[t._v("我响应报文接受完了")]),t._v("，我准备关闭了，你也准备吧)")])]),t._v(" "),_("h4",{attrs:{id:"图示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图示"}},[t._v("#")]),t._v(" 图示")]),t._v(" "),_("p",[_("img",{attrs:{src:v(886),alt:""}})]),t._v(" "),_("p",[_("img",{staticStyle:{zoom:"67%"},attrs:{src:"_image/01.常用网络协议关系/image-20211104194424019.png",alt:"image-20211104194424019"}}),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"_image/01.常用网络协议关系/image-20211104194439817.png",alt:"image-20211104194439817"}}),_("img",{staticStyle:{zoom:"67%"},attrs:{src:"_image/01.常用网络协议关系/image-20211104194451911.png",alt:"image-20211104194451911"}})]),t._v(" "),_("p",[t._v("tcp三次连接：")]),t._v(" "),_("ul",[_("li",[t._v("1）我能主动给你打电话吗？")]),t._v(" "),_("li",[t._v("2）当然可以啊！那我也能给你打电话吗？")]),t._v(" "),_("li",[t._v("3）可以的呢，建立连接成功！")])]),t._v(" "),_("p",[t._v("Tcp四次挥手")]),t._v(" "),_("ul",[_("li",[t._v("1）我们分手吧")]),t._v(" "),_("li",[t._v("2）收到分手的信息")]),t._v(" "),_("li",[t._v("3）好吧，分就分吧")]),t._v(" "),_("li",[t._v("4）行，那就到这里了")])]),t._v(" "),_("h4",{attrs:{id:"通俗图示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通俗图示"}},[t._v("#")]),t._v(" 通俗图示")]),t._v(" "),_("p",[_("img",{attrs:{src:v(887),alt:""}})]),t._v(" "),_("h3",{attrs:{id:"tcp-协议保证传输的可靠性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议保证传输的可靠性"}},[t._v("#")]),t._v(" TCP 协议保证传输的可靠性")]),t._v(" "),_("p",[t._v("TCP 提供一种面向连接的、可靠的字节流服务。其中，面向连接意味着两个使用 TCP 的应用（通常是一个客户和一个服务器）在彼此交换数据之前必须先建立一个 TCP 连接。在一个 TCP 连接中，仅有两方进行彼此通信；而字节流服务意味着两个应用程序通过 TCP 链接交换 8 bit 字节构成的字节流，TCP 不在字节流中插入记录标识符。")]),t._v(" "),_("p",[_("strong",[t._v("对于可靠性，TCP通过以下方式进行保证：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("数据包校验")]),t._v("：目的是检测数据在传输过程中的任何变化，若校验出包有错，则丢弃报文段并且不给出响应，这时TCP发送数据端超时后会重发数据；")]),t._v(" "),_("li",[_("strong",[t._v("对失序数据包重排序")]),t._v("：既然TCP报文段作为IP数据报来传输，而IP数据报的到达可能会失序，因此TCP报文段的到达也可能会失序。TCP将对失序数据进行重新排序，然后才交给应用层；")]),t._v(" "),_("li",[_("strong",[t._v("丢弃重复数据")]),t._v("：对于重复数据，能够丢弃重复数据；")]),t._v(" "),_("li",[_("strong",[t._v("应答机制")]),t._v("：当TCP收到发自TCP连接另一端的数据，它将发送一个确认。这个确认不是立即发送，通常将推迟几分之一秒；")]),t._v(" "),_("li",[_("strong",[t._v("超时重发")]),t._v("：当TCP发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段；")]),t._v(" "),_("li",[_("strong",[t._v("流量控制")]),t._v("：TCP连接的每一方都有固定大小的缓冲空间。TCP的接收端只允许另一端发送接收端缓冲区所能接纳的数据，这可以防止较快主机致使较慢主机的缓冲区溢出，这就是流量控制。TCP使用的流量控制协议是可变大小的滑动窗口协议。")])]),t._v(" "),_("h3",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("h4",{attrs:{id:"ddos防御"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ddos防御"}},[t._v("#")]),t._v(" DDos防御")]),t._v(" "),_("blockquote",[_("h4",{attrs:{id:"客户端不断进行请求链接会怎样-ddos-distributed-denial-of-service-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端不断进行请求链接会怎样-ddos-distributed-denial-of-service-攻击"}},[t._v("#")]),t._v(" 客户端不断进行请求链接会怎样？DDos(Distributed Denial of Service)攻击？")])]),t._v(" "),_("p",[t._v("答：服务器端会为每个请求创建一个链接，并向其发送确认报文，然后等待客户端进行确认")]),t._v(" "),_("p",[_("strong",[t._v("(1). DDos 攻击：")])]),t._v(" "),_("ul",[_("li",[t._v("客户端向服务端发送请求链接数据包")]),t._v(" "),_("li",[t._v("服务端向客户端发送确认数据包")]),t._v(" "),_("li",[t._v("客户端不向服务端发送确认数据包，服务器一直等待来自客户端的确认")])]),t._v(" "),_("p",[_("strong",[t._v("(2). DDos 预防：（没有彻底根治的办法，除非不使用TCP）")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("限制同时打开SYN半链接的数目")])]),t._v(" "),_("li",[_("strong",[t._v("缩短SYN半链接的Time out 时间")])]),t._v(" "),_("li",[t._v("关闭不必要的服务")])]),t._v(" "),_("h4",{attrs:{id:"接口-ddos-防御"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口-ddos-防御"}},[t._v("#")]),t._v(" 接口(DDOS)防御")]),t._v(" "),_("ol",[_("li",[t._v("网关控制流量洪峰，对在一个时间段内出现流量异常，可以拒绝请求;")]),t._v(" "),_("li",[t._v("源"),_("code",[t._v("ip")]),t._v("请求个数限制。对请求来源的"),_("code",[t._v("ip")]),t._v("请求个数做限制;")]),t._v(" "),_("li",[t._v("频率限制（1s内接口调用次数限制）IP限制； 防刷一般分两种：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("总调用次数受限制")]),t._v("。这个一般是在"),_("strong",[t._v("后端做限制")]),t._v("，单位时间内最多可调用次数。")]),t._v(" "),_("li",[_("strong",[t._v("同一客户端次数限制")]),t._v("。这个"),_("strong",[t._v("前端的一般使用")]),t._v("是给接口调用加锁，在返回结果或者一定时间之后解锁。")])]),t._v(" "),_("p",[_("strong",[t._v("刷接口")]),t._v("直接走脚本，前端限制有一定作用，但不大。")]),t._v(" "),_("ul",[_("li",[t._v("根据"),_("code",[t._v("IP")]),t._v("限制调用次数【请求在代理服务器被拦截"),_("code",[t._v("nginx")]),t._v("，减少后端服务被调用】；")]),t._v(" "),_("li",[t._v("拦截器特定信息校验，例如："),_("code",[t._v("token")]),t._v("【后端服务器拦截器，减少业务判断和处理】； 1、校验请求头referer 2、校验请求token； 3、请求频率")])]),t._v(" "),_("h2",{attrs:{id:"socket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" Socket")]),t._v(" "),_("ul",[_("li",[t._v("即套接字，"),_("strong",[t._v("是应用层 与 "),_("code",[t._v("TCP/IP")]),t._v(" 协议族通信的中间软件抽象层，表现为一个封装了 TCP / IP协议族 的编程接口（API）")])])]),t._v(" "),_("blockquote",[_("ol",[_("li",[_("code",[t._v("Socket")]),t._v("不是一种协议，而是一个编程调用接口（"),_("code",[t._v("API")]),t._v("），"),_("strong",[t._v("属于传输层")]),t._v("（主要"),_("strong",[t._v("解决数据如何在网络中传输")]),t._v("）")]),t._v(" "),_("li",[t._v("即：通过"),_("code",[t._v("Socket")]),t._v("，我们才能在Andorid平台上通过 "),_("code",[t._v("TCP/IP")]),t._v("协议进行开发")]),t._v(" "),_("li",[t._v("对用户来说，只需调用Socket去组织数据，以符合指定的协议，即可通信")])])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("成对出现，一对套接字：Socket ={(IP地址1:PORT端口号)，(IP地址2:PORT端口号)}")])]),t._v(" "),_("li",[_("p",[t._v("一个 "),_("code",[t._v("Socket")]),t._v(" 实例 唯一代表一个主机上的一个应用程序的通信链路\n"),_("img",{attrs:{src:v(888),alt:""}})])])]),t._v(" "),_("h3",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("p",[_("code",[t._v("Socket")]),t._v("的使用类型主要有两种：")]),t._v(" "),_("ul",[_("li",[t._v("流套接字（"),_("code",[t._v("streamsocket")]),t._v("） ：基于 "),_("code",[t._v("TCP")]),t._v("协议，采用 "),_("strong",[t._v("流的方式")]),t._v(" 提供"),_("code",[t._v("可靠的字节流服务")])]),t._v(" "),_("li",[t._v("数据报套接字("),_("code",[t._v("datagramsocket")]),t._v(")：基于 "),_("code",[t._v("UDP")]),t._v("协议，采用 "),_("strong",[t._v("数据报文")]),t._v(" 提供"),_("code",[t._v("数据打包发送的服务")])])]),t._v(" "),_("p",[_("strong",[t._v("具体原理图如下")]),t._v("：\n"),_("img",{attrs:{src:v(889),alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("两类型比较")]),t._v(" "),_("img",{attrs:{src:v(890),alt:""}})]),t._v(" "),_("h3",{attrs:{id:"实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),_("h4",{attrs:{id:"tcp抓包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp抓包"}},[t._v("#")]),t._v(" TCP抓包")]),t._v(" "),_("p",[_("img",{attrs:{src:v(891),alt:"image-20211104194231564"}})]),t._v(" "),_("h4",{attrs:{id:"udp抓包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp抓包"}},[t._v("#")]),t._v(" UDP抓包")]),t._v(" "),_("p",[_("img",{attrs:{src:v(892),alt:"image-20211104195421249"}})]),t._v(" "),_("h4",{attrs:{id:"etag项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#etag项目"}},[t._v("#")]),t._v(" etag项目")]),t._v(" "),_("p",[_("strong",[t._v("socket模式下tcp/udp通讯：应用于iot中的etag项目")]),t._v(" "),_("img",{attrs:{src:v(893),alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("etag电子标签的协议流程步骤")]),t._v("：\n"),_("img",{attrs:{src:v(894),alt:""}}),t._v(" "),_("img",{attrs:{src:v(895),alt:""}})]),t._v(" "),_("h4",{attrs:{id:"写一个简易的-webserver"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#写一个简易的-webserver"}},[t._v("#")]),t._v(" 写一个简易的 WebServer")]),t._v(" "),_("p",[t._v("一个简易的 Server 的流程如下：")]),t._v(" "),_("ul",[_("li",[t._v("1.建立连接，接受一个客户端连接。")]),t._v(" "),_("li",[t._v("2.接受请求，从网络中读取一条 HTTP 请求报文。")]),t._v(" "),_("li",[t._v("3.处理请求，访问资源。")]),t._v(" "),_("li",[t._v("4.构建响应，创建带有 header 的 HTTP 响应报文。")]),t._v(" "),_("li",[t._v("5.发送响应，传给客户端。")])]),t._v(" "),_("p",[t._v("省略流程 3，大体的程序与调用的函数逻辑如下：")]),t._v(" "),_("ul",[_("li",[t._v("socket() 创建套接字")]),t._v(" "),_("li",[t._v("bind() 分配套接字地址")]),t._v(" "),_("li",[t._v("listen() 等待连接请求")]),t._v(" "),_("li",[t._v("accept() 允许连接请求")]),t._v(" "),_("li",[t._v("read()/write() 数据交换")]),t._v(" "),_("li",[t._v("close() 关闭连接")])]),t._v(" "),_("h3",{attrs:{id:"socket-与-http-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#socket-与-http-对比"}},[t._v("#")]),t._v(" Socket 与 Http 对比")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Socket")]),t._v("属于传输层，因为 "),_("code",[t._v("TCP / IP")]),t._v("协议属于传输层，"),_("strong",[t._v("解决的是数据如何在网络中传输的问题")])]),t._v(" "),_("li",[_("code",[t._v("HTTP")]),t._v("协议 属于 应用层，"),_("strong",[t._v("解决的是如何包装数据")])])]),t._v(" "),_("p",[t._v("由于二者不属于同一层面，所以本来是没有可比性的。但随着发展，默认的Http里封装了下面几层的使用，所以才会出现"),_("code",[t._v("Socket")]),t._v(" & "),_("code",[t._v("HTTP")]),t._v("协议的对比：（主要是工作方式的不同）：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Socket")]),t._v("：采用 "),_("strong",[t._v("服务器主动发送数据")]),t._v(" 的方式")])]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("即建立网络连接后，服务器可主动发送消息给客户端，而不需要由客户端向服务器发送请求")]),t._v(" "),_("li",[t._v("可理解为："),_("strong",[t._v("是服务器端有需要才进行通信")])])])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Http")]),t._v("：采用 "),_("strong",[t._v("请求—响应")]),t._v(" 方式。")])]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("即建立网络连接后，当 客户端 向 服务器 发送请求后，服务器端才能向客户端返回数据。")]),t._v(" "),_("li",[t._v("可理解为："),_("strong",[t._v("是客户端有需要才进行通信")])])])]),t._v(" "),_("h2",{attrs:{id:"tcp-ip和dns与http的密切关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip和dns与http的密切关系"}},[t._v("#")]),t._v(" TCP/IP和DNS与HTTP的密切关系")]),t._v(" "),_("p",[_("img",{attrs:{src:v(896),alt:""}}),t._v(" "),_("img",{attrs:{src:v(897),alt:""}})])])}),[],!1,null,null,null);s.default=a.exports},858:function(t,s,v){t.exports=v.p+"assets/img/17-51-36.b1299a0e.jpg"},859:function(t,s,v){t.exports=v.p+"assets/img/18-00-04.7bdb2c82.jpg"},860:function(t,s,v){t.exports=v.p+"assets/img/image-20211104193135316.ab3463ac.png"},861:function(t,s,v){t.exports=v.p+"assets/img/image-20211104193633341.06bbbfda.png"},862:function(t,s,v){t.exports=v.p+"assets/img/18-03-50.08a51186.jpg"},863:function(t,s,v){t.exports=v.p+"assets/img/18-08-55.bbad8332.jpg"},864:function(t,s,v){t.exports=v.p+"assets/img/18-01-05.a330be41.jpg"},865:function(t,s,v){t.exports=v.p+"assets/img/net_model_1.f259aa97.png"},866:function(t,s,v){t.exports=v.p+"assets/img/18-05-16.c7c4ce00.jpg"},867:function(t,s,v){t.exports=v.p+"assets/img/10-30-02.dcfa22c5.jpg"},868:function(t,s,v){t.exports=v.p+"assets/img/18-06-02.aedb8604.jpg"},869:function(t,s,v){t.exports=v.p+"assets/img/18-06-22.4c37d2d0.jpg"},870:function(t,s,v){t.exports=v.p+"assets/img/net_tell.e86d6772.png"},871:function(t,s,v){t.exports=v.p+"assets/img/image-20211104200553675.6ad3b2be.png"},872:function(t,s,v){t.exports=v.p+"assets/img/image-20211104192022627.e0d2751e.png"},873:function(t,s,v){t.exports=v.p+"assets/img/18-24-43.2479c930.jpg"},874:function(t,s,v){t.exports=v.p+"assets/img/18-25-08.9e509905.jpg"},875:function(t,s,v){t.exports=v.p+"assets/img/image-20211104194043106.e984e81d.png"},876:function(t,s,v){t.exports=v.p+"assets/img/18-25-46.3ce8cbac.jpg"},877:function(t,s,v){t.exports=v.p+"assets/img/18-26-19.d286be97.jpg"},878:function(t,s,v){t.exports=v.p+"assets/img/image-20211104195216236.7e5d5a44.png"},879:function(t,s,v){t.exports=v.p+"assets/img/18-26-51.efc97835.jpg"},880:function(t,s,v){t.exports=v.p+"assets/img/image-20211104195731593.7bb83b2b.png"},881:function(t,s,v){t.exports=v.p+"assets/img/image-20211104195749413.3bdd3ca4.png"},882:function(t,s,v){t.exports=v.p+"assets/img/18-34-35.751f81f6.jpg"},883:function(t,s,v){t.exports=v.p+"assets/img/18-35-16.f89fe5e6.jpg"},884:function(t,s,v){t.exports=v.p+"assets/img/18-35-54.5d940590.jpg"},885:function(t,s,v){t.exports=v.p+"assets/img/19-11-14.dfdb4c58.jpg"},886:function(t,s,v){t.exports=v.p+"assets/img/19-50-36.b9c28e80.jpg"},887:function(t,s,v){t.exports=v.p+"assets/img/11-39-44.e2496df0.jpg"},888:function(t,s,v){t.exports=v.p+"assets/img/19-25-40.b8e75f5b.jpg"},889:function(t,s,v){t.exports=v.p+"assets/img/19-27-33.8f11b6ee.jpg"},890:function(t,s,v){t.exports=v.p+"assets/img/19-26-49.4470a987.jpg"},891:function(t,s,v){t.exports=v.p+"assets/img/image-20211104194231564.e704683c.png"},892:function(t,s,v){t.exports=v.p+"assets/img/image-20211104195421249.997d72fa.png"},893:function(t,s,v){t.exports=v.p+"assets/img/19-36-45.ea124437.jpg"},894:function(t,s,v){t.exports=v.p+"assets/img/19-37-56.76e9d279.jpg"},895:function(t,s,v){t.exports=v.p+"assets/img/19-38-34.5412fa2d.jpg"},896:function(t,s,v){t.exports=v.p+"assets/img/21-31-01.29f20707.jpg"},897:function(t,s,v){t.exports=v.p+"assets/img/21-26-05.d6ba463b.jpg"}}]);