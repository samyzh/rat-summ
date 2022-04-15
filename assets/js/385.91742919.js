(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1954:function(e,t,o){"use strict";o.r(t);var s=o(14),p=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"简介"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),o("p",[e._v("componentWillReceiveProps 是为了解决props是异步获取的时候使自组件正确获得最新props的方法，一般我们只需要用第一个参数，nextProps(即是最新props)就可以满足需求。")]),e._v(" "),o("p",[e._v("在业务中，由两种场景：")]),e._v(" "),o("p",[e._v("1，props是通过父组件的ajax异步获取，这个时候只需要在componentWillReceiveProps里面拿到最新的props，不过这个时候需要一些判断条件来避免一些不必要的渲染。")]),e._v(" "),o("p",[e._v("2，props是通过父组件的ajax异步获取，这个时候只需要在componentWillReceiveProps里面拿到最新的props，并且根据这个最新的props 来发送ajax 获取数据，来渲染视图。")]),e._v(" "),o("p",[e._v("官方代替方案是用 getDerivedStateFromProps 来代替 componentWillReceiveProps，第一种情况代替如下：")]),e._v(" "),o("p",[e._v("代替方案是：")]),e._v(" "),o("p",[e._v("是一个静态方法， 需要把props 用 state 存起来，然后 用 preState来获取上一个props，")]),e._v(" "),o("p",[e._v("第二，componentWillReceiveProps 直接 setState而 getDerivedStateFromProps 则是return 一个对象就好，它相当于setState，还有一个细节，后面的 return null；")]),e._v(" "),o("p",[e._v("getDerivedStateFromProps 不能直接this.xxx。无解了吗？，当然是由解决办法的")]),e._v(" "),o("p",[e._v("componentWillReceiveProps里面直接 this.test(); 而 getDerivedStateFromProps是一个静态方法，调用是先实例化，在调用里面的方法")]),e._v(" "),o("p",[e._v("new TeamScope(nextProps).test();")]),e._v(" "),o("p",[e._v("test 方法里就是平时的写法，ajax ，this.setState, this.props.disptch等等")]),e._v(" "),o("h2",{attrs:{id:"为什么deprecated"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#为什么deprecated"}},[e._v("#")]),e._v(" 为什么deprecated")]),e._v(" "),o("p",[e._v("官方文档（https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops）有一句是这样说的：\nUsing this lifecycle method often leads to bugs and inconsistencies, and for that reason it is going to be deprecated in the future.")]),e._v(" "),o("p",[e._v("到底有哪些bugs和inconsistencies呢？文档里面有这样一句话：\nNote that if a parent component causes your component to re-render, this method will be called even if props have not changed. Make sure to compare the current and next values if you only want to handle changes.")]),e._v(" "),o("p",[e._v("即：只要父组件引起了你的组件的 重新render，你的组件就会触发componentWillReceiveProps方法，即使你组件接收的props没有发生任何变化。")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1106982/201708/1106982-20170811224737742-1564011484.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=p.exports}}]);