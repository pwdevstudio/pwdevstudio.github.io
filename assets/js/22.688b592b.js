(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{510:function(v,_,a){"use strict";a.r(_);var t=a(16),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"java-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-基础"}},[v._v("#")]),v._v(" Java 基础")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithms/Java.jpg",alt:"Java"}})]),v._v(" "),a("p",[v._v("Java 是一个完全面向对象的语言，提供了一系列数据抽象和封装的工具方法，这一点和算法设计与应用的理念不谋而合。")]),v._v(" "),a("p",[v._v("我们将算法拆分成实现层和应用层两个层面，实现层专注于算法逻辑和思想，提供一层通用的 API(Application Programing Interface, 应用程序编程接口)，而应用层关注将具体问题进行算法建模，从而可以应用一些设计优秀的算法去解决实际问题。")]),v._v(" "),a("p",[v._v("而Java语言正式利用面向对象的思想进行模块化编程的，可以完美符合算法设计需求。")]),v._v(" "),a("p",[a("strong",[v._v("简而言之，Java 面向对象增强了模块化编程，将实现和用例完全拆分，这样的特性可以帮助我们更加清晰地进行算法设计和应用。")])]),v._v(" "),a("p",[v._v("本节概览：")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#java-%E5%9F%BA%E7%A1%80"}},[v._v("Java 基础")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-java-%E5%9F%BA%E7%A1%80%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B"}},[v._v("1. Java 基础编程模型")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-java-%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%BB%8D"}},[v._v("1.1 Java 基本介绍")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#12-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B"}},[v._v("1.2 模块化编程")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#13-%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95"}},[v._v("1.3 单元测试")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#14-api"}},[v._v("1.4 API")])])])]),v._v(" "),a("li",[a("a",{attrs:{href:"#3-%E5%B8%B8%E7%94%A8%E5%A4%96%E9%83%A8%E5%BA%93%E7%9A%84-api"}},[v._v("3. 常用外部库的 API")])])])])]),v._v(" "),a("h2",{attrs:{id:"_1-java-基础编程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-基础编程模型"}},[v._v("#")]),v._v(" 1. Java 基础编程模型")]),v._v(" "),a("p",[v._v("为了避免算法依赖特定的编程语言，因此这里只用了Java语言的一个子集，优先使用大部分现代编程语言所共有的语法。")]),v._v(" "),a("h3",{attrs:{id:"_1-1-java-基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-java-基本介绍"}},[v._v("#")]),v._v(" 1.1 Java 基本介绍")]),v._v(" "),a("blockquote",[a("p",[v._v("建议读者在阅读前最好掌握一门基本语言，如： C/C++、Python 等语言。"),a("br"),v._v("\n因为本专栏着眼于算法而非语言，所以这里只会简单介绍Java，语言之间的通用语法本文不进行赘述，只进行知识逻辑的铺排。")])]),v._v(" "),a("p",[a("strong",[v._v("一段 Java 程序（类）一般是一个静态方法（函数）库或定义了一个数据类型。")]),v._v(" 有以下七种基本语法：")]),v._v(" "),a("ul",[a("li",[a("p",[a("strong",[v._v("原始数据类型与表达式")]),v._v("："),a("br"),v._v(" "),a("code",[v._v("int")]),v._v(", "),a("code",[v._v("double")]),v._v(", "),a("code",[v._v("boolean")]),v._v(", "),a("code",[v._v("char")]),v._v(", "),a("code",[v._v("long")]),v._v(", "),a("code",[v._v("short")]),v._v(", "),a("code",[v._v("byte")]),v._v(", "),a("code",[v._v("float")]),v._v(".")]),v._v(" "),a("p",[v._v("使用 "),a("strong",[v._v("中缀表达式")]),v._v(" ，基本运算符大致分为 "),a("strong",[v._v("算术运算符")]),v._v("，"),a("strong",[v._v("逻辑运算符")]),v._v(" 和 "),a("strong",[v._v("比较运算符")]),v._v("（布尔表达式），"),a("strong",[v._v("支持类型转换")]),v._v("（自动转换下自动提高数据类型）。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("语句")]),v._v("：创建变量并对其进行赋值、控制流程，或引发"),a("em",[v._v("副作用")]),v._v("来计算。")]),v._v(" "),a("p",[a("strong",[v._v("六种基本语句类型")]),v._v("：声明、赋值、条件、循环、调用和返回。")]),v._v(" "),a("blockquote",[a("p",[v._v("副作用：方法 "),a("strong",[v._v("除了计算和返回值外所做的任何事情都是副作用")]),v._v(" 。"),a("br"),v._v("\n例如：在屏幕上绘制某些内容，写入文件或者网络连接。")])])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("静态方法")]),v._v("：可以封装和重用代码，进行"),a("strong",[v._v("模块化编程")]),v._v("。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("标准输入输出")]),v._v("：程序与外界联系的桥梁。")]),v._v(" "),a("blockquote",[a("p",[v._v("Princeton University为我们提供了一系列的静态方法库方便我们进行代码的编写，其API已在后面小节给出。")])])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("数据抽象")]),v._v("：定义非原始数据类型，"),a("strong",[v._v("面向对象编程")]),v._v("。")]),v._v(" "),a("blockquote",[a("p",[v._v("对象 = 引用类型 + 一系列操作")])])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("数组")]),v._v("：同一类型多个值的集合，是一个对象。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("字符串")]),v._v("：一连串的字符，是一个对象。")])])]),v._v(" "),a("p",[v._v("关于数据抽象和面向对象编程我们将在下一节讨论。")]),v._v(" "),a("p",[v._v("由于数组和字符串也是对象（Java 内置的），因此和引用类型一同在下一节讨论。")]),v._v(" "),a("p",[v._v("下面阐述 "),a("strong",[v._v("基础编程模型——模块化编程")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"_1-2-模块化编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-模块化编程"}},[v._v("#")]),v._v(" 1.2 模块化编程")]),v._v(" "),a("ul",[a("li",[v._v("静态方法库是定义在一个 Java 类中的一组静态方法。")]),v._v(" "),a("li",[v._v("类的声明是 "),a("code",[v._v("public class")]),v._v(" 加上类名，以及用花括号包含的静态方法。")]),v._v(" "),a("li",[v._v("存放类的文件的文件名和类名相同，扩展名是 "),a("code",[v._v(".java")]),v._v("。")]),v._v(" "),a("li",[v._v("Java 开发的基本模式是编写一个静态方法库（包含一个 "),a("code",[v._v("main()")]),v._v(" 方法）来完成一个任务。")]),v._v(" "),a("li",[v._v("输入类名以及一系列字符串就能调用类中的 "),a("code",[v._v("main()")]),v._v(" 方法，其参数为由输入的字符串组成的一个数组。")]),v._v(" "),a("li",[a("code",[v._v("main()")]),v._v(" 的最后一条语句执行完毕之后程序终止。")])]),v._v(" "),a("p",[v._v("当我们提到用于执行一项任务的 Java 程序时，我们指的是用这种模式开发的代码（可能还包括对数据类型的定义）。")]),v._v(" "),a("p",[a("strong",[v._v("这个模型最重要的一点就是利用静态方法库实现了模块化编程。")])]),v._v(" "),a("p",[v._v("这样做有很多好处：")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("将一个复杂的问题拆分为各个模块（静态方法库）逐个击破")]),v._v("；")]),v._v(" "),a("li",[v._v("缩小测试范围——单元测试；")]),v._v(" "),a("li",[v._v("可以共享和重用代码来避免对一个算法的重复实现；")]),v._v(" "),a("li",[a("strong",[v._v("很容易用改进过的实现替换老的实现")]),v._v("。")])]),v._v(" "),a("h3",{attrs:{id:"_1-3-单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-单元测试"}},[v._v("#")]),v._v(" 1.3 单元测试")]),v._v(" "),a("p",[a("strong",[v._v("Java 支持在每个静态方法库中都包含一个 "),a("code",[v._v("main()")]),v._v(" 方法")]),v._v("。"),a("br"),v._v("\n我们可以将一个静态函数库中的 "),a("code",[v._v("main()")]),v._v(" 方法作为一个 "),a("strong",[v._v("开发用例")]),v._v("，以便于用其 "),a("strong",[v._v("测试每一个小模块")]),v._v(" 的正确性。")]),v._v(" "),a("p",[a("code",[v._v("main()")]),v._v(" 方法还可作为 "),a("strong",[v._v("测试用例")]),v._v("，对 "),a("strong",[v._v("全部代码进行测试")]),v._v("（应用），用例复杂时，我们会将其独立为一个模块（静态方法库）。")]),v._v(" "),a("h3",{attrs:{id:"_1-4-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-api"}},[v._v("#")]),v._v(" 1.4 API")]),v._v(" "),a("p",[v._v("模块化编程的一个重要组成部分就是 "),a("strong",[v._v("记录库方法的用法并供其他人参考的文档")]),v._v("。")]),v._v(" "),a("p",[v._v("我们会统一使用 "),a("strong",[v._v("应用程序编程接口")]),v._v("（Application Programing Interface）的方式列出使用的每个库方法名称、签名和简短的描述。")]),v._v(" "),a("p",[v._v("我们用 "),a("strong",[v._v("用例")]),v._v(" 来指代调用另一个库中的方法的程序，用 "),a("strong",[v._v("实现")]),v._v(" 描述实现了某个 API 方法的 Java 代码。")]),v._v(" "),a("blockquote",[a("p",[v._v("我们主要使用4种不同类型库中的静态方法："),a("br"),v._v("\n系统标准库、导入的系统库、"),a("em",[v._v("Princeton标准库")]),v._v(" 和自己编写的库（如 "),a("code",[v._v("BinarySearch.java")]),v._v("）。"),a("br"),v._v("\n这些常用库的 API 将在本章最后一节列出。")])]),v._v(" "),a("h2",{attrs:{id:"_3-常用外部库的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用外部库的-api"}},[v._v("#")]),v._v(" 3. 常用外部库的 API")])])}),[],!1,null,null,null);_.default=r.exports}}]);