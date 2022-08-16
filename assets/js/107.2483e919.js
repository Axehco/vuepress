(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1036:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_509-斐波那契数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_509-斐波那契数"}},[t._v("#")]),t._v(" 509. 斐波那契数")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/fibonacci-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("509. 斐波那契数"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("斐波那契数")]),t._v(" ，通常用 "),n("code",[t._v("F(n)")]),t._v(" 表示，形成的序列称为 "),n("strong",[t._v("斐波那契数列")]),t._v("  。该数列由 "),n("code",[t._v("0")]),t._v(" 和 "),n("code",[t._v("1")]),t._v(" 开始，后面的每一项数字都是前面两项数字的和。也就是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("F(0) = 0，F(1) = 1\nF(n) = F(n - 1) + F(n - 2)，其中 n > 1\n")])])]),n("p",[t._v("给你 "),n("code",[t._v("n")]),t._v(" ，请计算 "),n("code",[t._v("F(n)")]),t._v(" 。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：2\n输出：1\n解释：F(2) = F(1) + F(0) = 1 + 0 = 1\n")])])]),n("p",[n("strong",[t._v("示例 2：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：3\n输出：2\n解释：F(3) = F(2) + F(1) = 1 + 1 = 2\n")])])]),n("p",[n("strong",[t._v("示例 3：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：4\n输出：3\n解释：F(4) = F(3) + F(2) = 2 + 1 = 3\n")])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("0 <= n <= 30")])])]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("p",[t._v("本题直接给出了边界条件和递推公式，可用动态规划求解。")]),t._v(" "),n("blockquote",[n("p",[t._v("1、定义"),n("code",[t._v("dp数组")])])]),t._v(" "),n("p",[t._v("第"),n("code",[t._v("i")]),t._v("个斐波拉契数的值为"),n("code",[t._v("dp[i]")])]),t._v(" "),n("blockquote",[n("p",[t._v("2、确定状态转移方程")])]),t._v(" "),n("p",[t._v("本题题目直接给出了斐波拉契数的公式：")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(590)}})]),t._v(" "),n("blockquote",[n("p",[t._v("3、边界条件")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("4、确定dp数组的计算顺序")])]),t._v(" "),n("p",[t._v("已知前两个状态，可推出第三个状态，因此从前往后计算。")]),t._v(" "),n("p",[n("strong",[t._v("Java代码如下：")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("C++代码如下：")])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        vector"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("优化： 针对本题不需要记录整个"),n("code",[t._v("dp数组")]),t._v(" ，只需要记住前两个状态即可，因此可优化空间复杂度。")]),t._v(" "),n("p",[n("strong",[t._v("优化后的Java代码如下：")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("优化后的C++代码如下：")])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            pre "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=r.exports},590:function(t,s){t.exports="data:image/png;base64,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"}}]);