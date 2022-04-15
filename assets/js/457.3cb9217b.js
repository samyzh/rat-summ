(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{2165:function(v,_,t){"use strict";t.r(_);var r=t(14),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),t("blockquote",[t("p",[v._v("简单来说："),t("strong",[v._v("一个Session中所进行所有的操作，要么同时成功，要么同时失败；")])])]),v._v(" "),t("h2",{attrs:{id:"四个基本要素-acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四个基本要素-acid"}},[v._v("#")]),v._v(" 四个基本要素 ACID")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。")])])]),v._v(" "),t("p",[v._v("数据库事务正确执行的"),t("strong",[v._v("四个基本要素")]),v._v(":")]),v._v(" "),t("ul",[t("li",[v._v("包含："),t("strong",[v._v("原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）")]),v._v("。")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("原子性")]),v._v("： 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；")]),v._v(" "),t("li",[t("strong",[v._v("一致性")]),v._v("： 执行事务前后，数据保持一致，多个事务对同一个数据读取的结果是相同的；")]),v._v(" "),t("li",[t("strong",[v._v("隔离性")]),v._v("： 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；")]),v._v(" "),t("li",[t("strong",[v._v("持久性")]),v._v("： 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。")])]),v._v(" "),t("h2",{attrs:{id:"事务隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离"}},[v._v("#")]),v._v(" 事务隔离")]),v._v(" "),t("blockquote",[t("p",[v._v("并发事务带来的问题: 在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对统一数据进行操作）。并发虽然是必须的，但可能会导致以下的4种问题。")]),v._v(" "),t("p",[t("strong",[v._v("脏读(Dirty read); 丢失修改(Lost to modify); 不可重复读(Unrepeatableread); 幻读(Phantom read);")])])]),v._v(" "),t("h3",{attrs:{id:"隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[v._v("#")]),v._v(" 隔离级别")]),v._v(" "),t("p",[v._v("数据库定义了4个隔离级别：分别对应Connection类中的4个常量")]),v._v(" "),t("ol",[t("li",[v._v("Serializable【可避免脏读，不可重复读，虚读】 "),t("strong",[v._v("TRANSACTION_READ_UNCOMMITTED")])]),v._v(" "),t("li",[v._v("Repeatable read【可避免脏读，不可重复读】 "),t("strong",[v._v("TRANSACTION_READ_COMMITTED")])]),v._v(" "),t("li",[v._v("Read committed【可避免脏读】 "),t("strong",[v._v("TRANSACTION_REPEATABLE_READ")])]),v._v(" "),t("li",[v._v("Read uncommitted【级别最低，什么都避免不了】 "),t("strong",[v._v("TRANSACTION_SERIALIZABLE")])])]),v._v(" "),t("p",[t("strong",[v._v("SQL 标准定义了四个隔离级别：")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("READ-UNCOMMITTED(读取未提交)：")]),v._v(" 最低的隔离级别，允许读取尚未提交的数据变更，"),t("strong",[v._v("可能会导致脏读、幻读或不可重复读")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("READ-COMMITTED(读取已提交)：")]),v._v(" 允许读取并发事务已经提交的数据，"),t("strong",[v._v("可以阻止脏读，但是幻读或不可重复读仍有可能发生")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("REPEATABLE-READ(可重复读)：")]),v._v(" 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，"),t("strong",[v._v("可以阻止脏读和不可重复读，但幻读仍有可能发生")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("SERIALIZABLE(可串行化)：")]),v._v(" 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，"),t("strong",[v._v("该级别可以防止脏读、不可重复读以及幻读")]),v._v("。")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("隔离级别")]),v._v(" "),t("th",[v._v("脏读")]),v._v(" "),t("th",[v._v("不可重复读")]),v._v(" "),t("th",[v._v("幻影读")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("READ-UNCOMMITTED")]),v._v(" "),t("td",[v._v("√")]),v._v(" "),t("td",[v._v("√")]),v._v(" "),t("td",[v._v("√")])]),v._v(" "),t("tr",[t("td",[v._v("READ-COMMITTED")]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("√")]),v._v(" "),t("td",[v._v("√")])]),v._v(" "),t("tr",[t("td",[t("em",[v._v("REPEATABLE-READ")])]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("√")])]),v._v(" "),t("tr",[t("td",[v._v("SERIALIZABLE")]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("×")])])])]),v._v(" "),t("p",[t("strong",[v._v("简单总结："),t("em",[v._v("脏读是不可容忍的，不可重复读和幻(虚)读在一定的情况下是可以的【做统计的肯定就不行】")])])]),v._v(" "),t("h3",{attrs:{id:"与存储引擎的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与存储引擎的关系"}},[v._v("#")]),v._v(" 与存储引擎的关系")]),v._v(" "),t("p",[v._v("MySQL InnoDB 存储引擎的"),t("strong",[v._v("默认支持")]),v._v("的隔离级别是 "),t("strong",[v._v("REPEATABLE-READ（可重读）")]),v._v("。我们可以通过"),t("code",[v._v("SELECT @@tx_isolation;")]),v._v("命令来查看；MySQL提供事务处理的表引擎，也就是InnoDB。")]),v._v(" "),t("p",[t("strong",[v._v("这里需要注意的是")]),v._v("：与 SQL 标准不同的地方在于InnoDB 存储引擎在 "),t("strong",[v._v("REPEATABLE-READ（可重读）"),t("strong",[v._v("事务隔离级别下使用的是")]),v._v("Next-Key Lock 锁算法")]),v._v("，因此可以避免幻读的产生，这与其他数据库系统(如 SQL Server)是不同的。")]),v._v(" "),t("p",[v._v("所以说InnoDB 存储引擎的默认支持的隔离级别是 "),t("em",[v._v("REPEATABLE-READ（可重读）")]),v._v(" 已经可以完全保证事务的隔离性要求，即达到了 SQL标准的**SERIALIZABLE(可串行化)**隔离级别。")]),v._v(" "),t("p",[t("strong",[v._v("因为隔离级别越低，事务请求的锁越少")]),v._v("，所以大部分数据库系统的隔离级别都是"),t("strong",[v._v("READ-COMMITTED(读取提交内容):")]),v._v("，但是你要知道的是InnoDB 存储引擎默认使用 **REPEATABLE-READ（可重读）**并不会有任何性能损失。")]),v._v(" "),t("p",[v._v("InnoDB 存储引擎在 "),t("strong",[v._v("分布式事务")]),v._v(" 的情况下一般会用到**SERIALIZABLE(可串行化)**隔离级别。")]),v._v(" "),t("h2",{attrs:{id:"锁机制与存储引擎关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁机制与存储引擎关系"}},[v._v("#")]),v._v(" 锁机制与存储引擎关系")]),v._v(" "),t("h3",{attrs:{id:"图示比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图示比较"}},[v._v("#")]),v._v(" 图示比较")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("attr")]),v._v(" "),t("th",[v._v("MyISAM")]),v._v(" "),t("th",[v._v("InnoDB")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Locking")]),v._v(" "),t("td",[v._v("Table-level")]),v._v(" "),t("td",[v._v("Row-level")])]),v._v(" "),t("tr",[t("td",[v._v("designed for")]),v._v(" "),t("td",[v._v("need of speed")]),v._v(" "),t("td",[v._v("high volume of data")])]),v._v(" "),t("tr",[t("td",[v._v("foreign keys")]),v._v(" "),t("td",[v._v("× (DBMS)")]),v._v(" "),t("td",[v._v("✓ (RDBMS)")])]),v._v(" "),t("tr",[t("td",[v._v("transaction")]),v._v(" "),t("td",[v._v("×")]),v._v(" "),t("td",[v._v("✓")])]),v._v(" "),t("tr",[t("td",[v._v("fulltext search")]),v._v(" "),t("td",[v._v("✓")]),v._v(" "),t("td",[v._v("×")])]),v._v(" "),t("tr",[t("td",[v._v("scene")]),v._v(" "),t("td",[v._v("lots of select")]),v._v(" "),t("td",[v._v("lots of insert/update")])]),v._v(" "),t("tr",[t("td",[v._v("count rows")]),v._v(" "),t("td",[v._v("fast")]),v._v(" "),t("td",[v._v("slow")])]),v._v(" "),t("tr",[t("td",[v._v("auto_increment")]),v._v(" "),t("td",[v._v("fast")]),v._v(" "),t("td",[v._v("slow")])])])]),v._v(" "),t("h3",{attrs:{id:"详细分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详细分析"}},[v._v("#")]),v._v(" 详细分析")]),v._v(" "),t("p",[t("strong",[v._v("MyISAM和InnoDB存储引擎使用的锁：")])]),v._v(" "),t("ul",[t("li",[v._v("MyISAM 采用"),t("code",[v._v("表级锁(table-level locking)")]),v._v("。")]),v._v(" "),t("li",[v._v("InnoDB 支持"),t("code",[v._v("行级锁(row-level locking)")]),v._v("和"),t("code",[v._v("表级锁")]),v._v(","),t("strong",[v._v("默认为行级锁")])])]),v._v(" "),t("p",[t("strong",[v._v("InnoDB存储引擎的锁的算法有三种：")])]),v._v(" "),t("ul",[t("li",[v._v("Record lock：单个行记录上的锁")]),v._v(" "),t("li",[v._v("Gap lock：间隙锁，锁定一个范围，不包括记录本身")]),v._v(" "),t("li",[v._v("Next-key lock：record+gap 锁定一个范围，包含记录本身")])]),v._v(" "),t("h3",{attrs:{id:"表级锁和行级锁对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表级锁和行级锁对比"}},[v._v("#")]),v._v(" 表级锁和行级锁对比")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("表级锁：")]),v._v(" Mysql中锁定 "),t("strong",[v._v("粒度最大")]),v._v(" 的一种锁，对当前操作的整张表加锁，实现简单，资源消耗也比较少，加锁快，不会出现死锁。其锁定粒度最大，触发锁冲突的概率最高，并发度最低，"),t("strong",[v._v("MyISAM和 InnoDB引擎都支持表级锁")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("行级锁：")]),v._v(" Mysql中锁定 "),t("strong",[v._v("粒度最小")]),v._v(" 的一种锁，"),t("strong",[v._v("只针对当前操作的行进行加锁")]),v._v("。 行级锁能大大减少数据库操作的冲突。其加锁粒度最小，并发度高，"),t("strong",[v._v("但加锁的开销也最大，加锁慢，会出现死锁")]),v._v("。")])]),v._v(" "),t("h3",{attrs:{id:"myisam与innodb的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam与innodb的使用场景"}},[v._v("#")]),v._v(" MyISAM与InnoDB的使用场景")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("是否支持行级锁")]),v._v(" : MyISAM 只有表级锁(table-level locking)，而InnoDB 支持行级锁(row-level locking)和表级锁,默认为行级锁。")]),v._v(" "),t("li",[t("strong",[v._v("是否支持事务和崩溃后的安全恢复：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("MyISAM")]),v._v("强调的是性能，每次查询具有原子性,其执行数度比InnoDB类型更快，"),t("strong",[v._v("但是不提供事务支持")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("InnoDB")]),v._v(" 提供事务支持事务，外部键等高级数据库功能。 具有事务(commit)、回滚(rollback)和崩溃修复能力(crash recovery capabilities)的事务安全(transaction-safe (ACID compliant))型表。")])])]),v._v(" "),t("li",[t("strong",[v._v("是否支持外键：")]),v._v(" MyISAM不支持，而InnoDB支持。")])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[v._v("#")]),v._v(" 锁")]),v._v(" "),t("h3",{attrs:{id:"简介-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("锁")]),v._v("是网络数据库中的一个非常重要的概念，当多个用户同时对数据库并发操作时，会带来数据不一致的问题，所以，锁主要用于多用户环境下保证数据库完整性和一致性。")])]),v._v(" "),t("p",[t("strong",[v._v("数据库锁出现的目的")]),v._v("：处理并发问题")]),v._v(" "),t("p",[t("strong",[v._v("并发控制的主要采用的技术手段")]),v._v("：乐观锁、悲观锁和时间戳。")]),v._v(" "),t("h3",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[v._v("#")]),v._v(" 分类")]),v._v(" "),t("p",[v._v("从"),t("strong",[v._v("数据库系统角度")]),v._v("分为三种：排他锁、共享锁、更新锁。\n从"),t("strong",[v._v("程序员角度")]),v._v("分为两种：一种是悲观锁，一种乐观锁。")]),v._v(" "),t("p",[v._v("锁包括行级锁和表级锁")]),v._v(" "),t("p",[t("strong",[v._v("行级锁")]),v._v("是一种排他锁，防止其他事务修改此行；在使用以下语句时，Oracle会自动应用行级锁：")]),v._v(" "),t("ul",[t("li",[v._v("INSERT、UPDATE、DELETE、SELECT … FOR UPDATE [OF columns] [WAIT n | NOWAIT];")]),v._v(" "),t("li",[v._v("SELECT … FOR UPDATE语句允许用户一次锁定多条记录进行更新")]),v._v(" "),t("li",[v._v("使用COMMIT或ROLLBACK语句释放锁")])]),v._v(" "),t("p",[t("strong",[v._v("表级锁")]),v._v("又分为5类：")]),v._v(" "),t("ul",[t("li",[v._v("行共享 (ROW SHARE) – 禁止排他锁定表")]),v._v(" "),t("li",[v._v("行排他(ROW EXCLUSIVE) – 禁止使用排他锁和共享锁")]),v._v(" "),t("li",[v._v("共享锁(SHARE) - 锁定表，对记录只读不写，多个用户可以同时在同一个表上应用此锁")]),v._v(" "),t("li",[v._v("共享行排他(SHARE ROW EXCLUSIVE) – 比共享锁更多的限制，禁止使用共享锁及更高的锁")]),v._v(" "),t("li",[v._v("排他(EXCLUSIVE) – 限制最强的表锁，仅允许其他用户查询该表的行。禁止修改和锁定表。")])]),v._v(" "),t("h3",{attrs:{id:"悲观锁与乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁与乐观锁"}},[v._v("#")]),v._v(" 悲观锁与乐观锁")]),v._v(" "),t("blockquote",[t("p",[v._v("悲观锁对应于生活中悲观的人总是想着事情往坏的方向发展, 乐观锁对应于生活中乐观的人总是想着事情往好的方向发展。"),t("strong",[v._v("这两种人各有优缺点，不能不以场景而定说一种人好于另外一种人")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("悲观锁：假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作"),t("strong",[v._v("在查询完数据的时候就把事务锁起来，直到提交事务")]),v._v("实现方式："),t("strong",[v._v("使用数据库中的锁机制")])]),v._v(" "),t("li",[v._v("乐观锁：假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。"),t("strong",[v._v("在修改数据的时候把事务锁起来，通过version的方式来进行锁定")]),v._v("实现方式："),t("strong",[v._v("使用version版本、时间戳或CAS(Compare-and-Swap，即比较并替换)")])])])]),v._v(" "),t("h4",{attrs:{id:"悲观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[v._v("#")]),v._v(" 悲观锁")]),v._v(" "),t("p",[v._v("总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁（"),t("strong",[v._v("共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程")]),v._v("）。传统的关系型数据库里边就用到了很多这种锁机制，"),t("strong",[v._v("比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁")]),v._v("。Java中"),t("code",[v._v("synchronized")]),v._v("和"),t("code",[v._v("ReentrantLock")]),v._v("等独占锁就是悲观锁思想的实现。")]),v._v(" "),t("h4",{attrs:{id:"乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[v._v("#")]),v._v(" 乐观锁")]),v._v(" "),t("p",[v._v("总是假设最好的情况，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用"),t("strong",[v._v("版本号机制")]),v._v("和"),t("strong",[v._v("CAS算法")]),v._v("实现。"),t("strong",[v._v("乐观锁适用于多读的应用类型，这样可以提高吞吐量")]),v._v("，像数据库提供的类似于"),t("strong",[v._v("write_condition机制")]),v._v("，其实都是提供的乐观锁。在Java中"),t("code",[v._v("java.util.concurrent.atomic")]),v._v("包下面的原子变量类就是使用了乐观锁的一种实现方式"),t("strong",[v._v("CAS")]),v._v("实现的。")]),v._v(" "),t("h4",{attrs:{id:"两种锁的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种锁的使用场景"}},[v._v("#")]),v._v(" 两种锁的使用场景")]),v._v(" "),t("p",[v._v("从上面对两种锁的介绍，我们知道两种锁各有优缺点，不可认为一种好于另一种，像"),t("strong",[v._v("乐观锁适用于写比较少的情况下（多读场景）")]),v._v("，即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。但如果是多写的情况，一般会经常产生冲突，这就会导致上层应用会不断的进行retry，这样反倒是降低了性能，所以**一般多写的场景下用悲观锁就比较合适。")]),v._v(" "),t("h3",{attrs:{id:"悲观锁按使用性质划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁按使用性质划分"}},[v._v("#")]),v._v(" 悲观锁按使用性质划分")]),v._v(" "),t("h4",{attrs:{id:"共享锁-share-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享锁-share-lock"}},[v._v("#")]),v._v(" 共享锁（Share Lock）")]),v._v(" "),t("p",[v._v("S锁，也叫读锁，用于所有的只读数据操作。共享锁是非独占的，允许多个并发事务读取其锁定的资源。\n"),t("strong",[v._v("性质")])]),v._v(" "),t("ol",[t("li",[v._v("多个事务可封锁同一个共享页；")]),v._v(" "),t("li",[v._v("任何事务都不能修改该页；")]),v._v(" "),t("li",[v._v("通常是该页被读取完毕，S锁立即被释放。")])]),v._v(" "),t("h4",{attrs:{id:"排他锁-exclusive-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排他锁-exclusive-lock"}},[v._v("#")]),v._v(" 排他锁（Exclusive Lock）")]),v._v(" "),t("p",[v._v("X锁，也叫写锁，表示对数据进行写操作。如果一个事务对对象加了排他锁，其他事务就不能再给它加任何锁了。（某个顾客把试衣间从里面反锁了，其他顾客想要使用这个试衣间，就只有等待锁从里面打开了。）\n"),t("strong",[v._v("性质")])]),v._v(" "),t("ol",[t("li",[v._v("仅允许一个事务封锁此页；")]),v._v(" "),t("li",[v._v("其他任何事务必须等到X锁被释放才能对该页进行访问；")]),v._v(" "),t("li",[v._v("X锁一直到事务结束才能被释放。")])]),v._v(" "),t("blockquote",[t("p",[v._v("产生排他锁的SQL语句如下：select * from ad_plan for update;")])]),v._v(" "),t("h4",{attrs:{id:"更新锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新锁"}},[v._v("#")]),v._v(" 更新锁")]),v._v(" "),t("p",[v._v("U锁，在修改操作的初始化阶段用来锁定可能要被修改的资源，这样可以避免使用共享锁造成的死锁现象。\n因为当使用共享锁时，修改数据的操作分为两步：")]),v._v(" "),t("ol",[t("li",[v._v("首先获得一个共享锁，读取数据，")]),v._v(" "),t("li",[v._v("然后将共享锁升级为排他锁，再执行修改操作。\n这样如果有两个或多个事务同时对一个事务申请了共享锁，在修改数据时，这些事务都要将共享锁升级为排他锁。这时，这些事务都不会释放共享锁，而是一直等待对方释放，这样就造成了死锁。\n如果一个数据在修改前直接申请更新锁，在数据修改时再升级为排他锁，就可以避免死锁。")])]),v._v(" "),t("p",[t("strong",[v._v("性质")])]),v._v(" "),t("ol",[t("li",[v._v("用来预定要对此页施加X锁，它允许其他事务读，但不允许再施加U锁或X锁；")]),v._v(" "),t("li",[v._v("当被读取的页要被更新时，则升级为X锁；")]),v._v(" "),t("li",[v._v("U锁一直到事务结束时才能被释放。")])]),v._v(" "),t("h3",{attrs:{id:"乐观锁实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁实现方式"}},[v._v("#")]),v._v(" 乐观锁实现方式")]),v._v(" "),t("p",[v._v("乐观锁一般常见的两种, 会使用版本号机制或CAS（Compare-and-Swap，即比较并替换）算法实现。")]),v._v(" "),t("h4",{attrs:{id:"版本号机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本号机制"}},[v._v("#")]),v._v(" 版本号机制")]),v._v(" "),t("p",[v._v("一般是在数据表中加上一个数据版本号version字段，表示数据被修改的次数，当数据被修改时，version值会加一。当线程A要更新数据值时，在读取数据的同时也会读取version值，在提交更新时，若刚才读取到的version值为当前数据库中的version值相等时才更新，否则重试更新操作，直到更新成功。")]),v._v(" "),t("p",[v._v("举一个简单的例子： 假设数据库中帐户信息表中有一个 version 字段，当前值为 1 ；而当前帐户余额字段（ balance ）为 $100 。")]),v._v(" "),t("ol",[t("li",[v._v("操作员 A 此时将其读出（ version=1 ），并从其帐户余额中扣除 $50（ $100-$50 ）。")]),v._v(" "),t("li",[v._v("在操作员 A 操作的过程中，操作员B 也读入此用户信息（ version=1 ），并从其帐户余额中扣除 $20 （ $100-$20 ）。")]),v._v(" "),t("li",[v._v("操作员 A 完成了修改工作，将数据版本号加一（ version=2 ），连同帐户扣除后余额（ balance=$50 ），提交至数据库更新，此时由于提交数据版本大于数据库记录当前版本，数据被更新，数据库记录 version 更新为 2 。")]),v._v(" "),t("li",[v._v("操作员 B 完成了操作，也将版本号加一（ version=2 ）试图向数据库提交数据（ balance=$80 ），但此时比对数据库记录版本时发现，操作员 B 提交的数据版本号为 2 ，数据库记录当前版本也为 2 ，不满足 “ 提交版本必须大于记录当前版本才能执行更新 “ 的乐观锁策略，因此，操作员 B 的提交被驳回。")])]),v._v(" "),t("p",[v._v("这样，就避免了操作员 B 用基于 version=1 的旧数据修改的结果覆盖操作员A 的操作结果的可能。")]),v._v(" "),t("h4",{attrs:{id:"cas算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cas算法"}},[v._v("#")]),v._v(" CAS算法")]),v._v(" "),t("p",[v._v("即 compare and swap（比较与交换），是一种有名的无锁算法。无锁编程，即不使用锁的情况下实现多线程之间的变量同步，也就是在没有线程被阻塞的情况下实现变量的同步，所以也叫非阻塞同步（Non-blocking Synchronization）。CAS算法涉及到三个操作数")]),v._v(" "),t("ul",[t("li",[v._v("需要读写的内存值 V")]),v._v(" "),t("li",[v._v("进行比较的值 A")]),v._v(" "),t("li",[v._v("拟写入的新值 B")])]),v._v(" "),t("p",[v._v("当且仅当 V 的值等于 A时，CAS通过原子方式用新值B来更新V的值，否则不会执行任何操作（比较和替换是一个原子操作）。一般情况下是一个自旋操作，即不断的重试。")]),v._v(" "),t("h4",{attrs:{id:"时间戳-timestamp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间戳-timestamp"}},[v._v("#")]),v._v(" 时间戳（timestamp）")]),v._v(" "),t("p",[v._v("时间戳（使用数据库服务器的时间戳) ：和版本号基本一样，只是通过时间戳来判断而已，"),t("strong",[v._v("注意时间戳要使用数据库服务器的时间戳")]),v._v("不能是业务系统的时间。")]),v._v(" "),t("h4",{attrs:{id:"待更新字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#待更新字段"}},[v._v("#")]),v._v(" 待更新字段")]),v._v(" "),t("p",[v._v("和版本号方式相似，只是不增加额外字段，直接使用有效数据字段做版本控制信息，因为有时候我们可能无法改变旧系统的数据库表结构。假设有个待更新字段叫count,先去读取这个count,更新的时候去比较数据库中count的值是不是我期望的值（即开始读的值），如果是就把我修改的count的值更新到该字段，否则更新失败。java的基本类型的原子类型对象如AtomicInteger就是这种思想。")]),v._v(" "),t("h4",{attrs:{id:"所有字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所有字段"}},[v._v("#")]),v._v(" 所有字段")]),v._v(" "),t("p",[v._v("和待更新字段类似，只是使用所有字段做版本控制信息，只有所有字段都没变化才会执行更新。")]),v._v(" "),t("h4",{attrs:{id:"乐观锁几种方式的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁几种方式的区别"}},[v._v("#")]),v._v(" 乐观锁几种方式的区别")]),v._v(" "),t("p",[v._v("新系统设计可以使用version方式和timestamp方式，需要增加字段，应用范围是整条数据，不论那个字段修改都会更新version,也就是说两个事务更新同一条记录的两个不相关字段也是互斥的，不能同步进行。旧系统不能修改数据库表结构的时候使用数据字段作为版本控制信息，不需要新增字段，待更新字段方式只要其他事务修改的字段和当前事务修改的字段没有重叠就可以同步进行，并发性更高。")]),v._v(" "),t("h3",{attrs:{id:"并发控制会造成两种锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发控制会造成两种锁"}},[v._v("#")]),v._v(" 并发控制会造成两种锁")]),v._v(" "),t("blockquote",[t("p",[v._v("并发控制会造成活锁和死锁，就像操作系统那样，会因为互相等待而导致。")])]),v._v(" "),t("h4",{attrs:{id:"活锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#活锁"}},[v._v("#")]),v._v(" 活锁")]),v._v(" "),t("blockquote",[t("p",[v._v("指的是T1封锁了数据R，T2同时也请求封锁数据R，T3也请求封锁数据R，当T1释放了锁之后，T3会锁住R，T4也请求封锁R，则T2就会一直等待下去。")])]),v._v(" "),t("p",[t("strong",[v._v("解决方法")]),v._v("：采用“先来先服务”策略可以避免。")]),v._v(" "),t("h4",{attrs:{id:"死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[v._v("#")]),v._v(" 死锁")]),v._v(" "),t("blockquote",[t("p",[v._v("就是我等你，你又等我，双方就会一直等待下去。")]),v._v(" "),t("p",[v._v("比如：T1封锁了数据R1，正请求对R2封锁，而T2封住了R2,正请求封锁R1，这样就会导致死锁，死锁这种没有完全解决的方法，只能尽量预防。")])]),v._v(" "),t("p",[t("strong",[v._v("预防方法")]),v._v("：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("一次封锁法")]),v._v("，指的是一次性把所需要的数据全部封锁住，但是这样会扩大了封锁的范围，降低系统的并发度；")]),v._v(" "),t("li",[t("strong",[v._v("顺序封锁法")]),v._v("，指的是事先对数据对象指定一个封锁顺序，要对数据进行封锁，只能按照规定的顺序来封锁，但是这个一般不大可能的。")])]),v._v(" "),t("p",[t("strong",[v._v("系统判定死锁的方法")]),v._v("：")]),v._v(" "),t("p",[t("strong",[v._v("超时法")]),v._v("：如果某个事物的等待时间超过指定时限，则判定为出现死锁；\n"),t("strong",[v._v("等待图法")]),v._v("：如果事务等待图中出现了回路，则判断出现了死锁。")]),v._v(" "),t("p",[t("strong",[v._v("解决死锁的方法")])]),v._v(" "),t("p",[v._v("只能是撤销一个处理死锁代价最小的事务，释放此事务持有的所有锁，同时对撤销的事务所执行的数据修改操作必须加以恢复。")]),v._v(" "),t("h3",{attrs:{id:"sequelize中与锁的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sequelize中与锁的关系"}},[v._v("#")]),v._v(" Sequelize中与锁的关系")]),v._v(" "),t("p",[t("strong",[v._v("乐观锁：version")])]),v._v(" "),t("p",[v._v("Sequelize通过模型实例的"),t("code",[v._v("version")]),v._v("计数内置了对乐观锁的支持。“乐观锁”默认情况下处于禁用状态，可以通过在特定模型定义或全局模型配置中将"),t("code",[v._v("version")]),v._v("属性设置为"),t("code",[v._v("true")]),v._v("来启用。")]),v._v(" "),t("p",[v._v("乐观锁定允许并发访问模型记录以进行编辑，并防止冲突覆盖数据。它通过检查自从读取以来另一个进程是否对记录进行了更改，并在检测到冲突时抛出"),t("code",[v._v("OptimisticLockError")]),v._v("来执行此操作。")]),v._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[v._v("#")]),v._v(" 参考链接")])])}),[],!1,null,null,null);_.default=a.exports}}]);