(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{956:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_231-2-的幂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_231-2-的幂"}},[t._v("#")]),t._v(" 231. 2 的幂")]),t._v(" "),a("Valine"),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("题目传送门："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/power-of-two/",target:"_blank",rel:"noopener noreferrer"}},[t._v("231. 2 的幂"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("给你一个整数 "),a("code",[t._v("n")]),t._v("，请你判断该整数是否是 2 的幂次方。如果是，返回 "),a("code",[t._v("true")]),t._v(" ；否则，返回 "),a("code",[t._v("false")]),t._v(" 。")]),t._v(" "),a("p",[t._v("如果存在一个整数 "),a("code",[t._v("x")]),t._v(" 使得 "),a("code",[t._v("n == 2x")]),t._v(" ，则认为 "),a("code",[t._v("n")]),t._v(" 是 2 的幂次方。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：n = 1\n输出：true\n解释：20 = 1\n")])])]),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：n = 16\n输出：true\n解释：24 = 16\n")])])]),a("p",[a("strong",[t._v("示例 3：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：n = 3\n输出：false\n")])])]),a("p",[a("strong",[t._v("示例 4：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：n = 4\n输出：true\n")])])]),a("p",[a("strong",[t._v("示例 5：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：n = 5\n输出：false\n")])])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-2^31 <= n <= 2^31 - 1")])])]),t._v(" "),a("p",[a("strong",[t._v("进阶：")]),t._v(" 你能够不使用循环/递归解决此问题吗？")]),t._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("h3",{attrs:{id:"位运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),a("p",[a("code",[t._v("n")]),t._v(" 是 "),a("code",[t._v("int")]),t._v(" 类型，高最位是符号位，也就是说除去最高位，余下的"),a("code",[t._v("31")]),t._v("位中，只有1个"),a("code",[t._v("1")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2^0 == 0B0000000000000000000000000000001\n2^1 == 0B0000000000000000000000000000010\n2^2 == 0B0000000000000000000000000000100\n...\n2^31 == 0B1000000000000000000000000000000\n")])])]),a("p",[t._v("所以说一个数 "),a("code",[t._v("n")]),t._v(" 是 "),a("code",[t._v("2")]),t._v(" 的幂，当且仅当 "),a("code",[t._v("n")]),t._v(" 是正整数，并且 "),a("code",[t._v("n")]),t._v(" 的二进制表示中仅包含 "),a("code",[t._v("1")]),t._v(" 个 "),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("p",[t._v("那么求出每个数二进制表示中的"),a("code",[t._v("1")]),t._v("的个数，可以用位运算"),a("code",[t._v("n & (n-1)")])]),t._v(" "),a("p",[t._v("所以说如果 "),a("code",[t._v("n")]),t._v(" 是正整数并且 "),a("code",[t._v("n & (n-1) == 0")]),t._v(" ，那么"),a("code",[t._v("n")]),t._v("就是 "),a("code",[t._v("2")]),t._v("的幂。")]),t._v(" "),a("p",[a("strong",[t._v("C++代码如下：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPowerOfTwo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("n & (-n)")]),t._v(" ：可以直接获取"),a("code",[t._v("n")]),t._v("的二进制表示的最低位的"),a("code",[t._v("1")]),t._v(" 。")]),t._v(" "),a("p",[t._v("所以说如果 "),a("code",[t._v("n")]),t._v(" 是正整数并且 "),a("code",[t._v("n & (-n) == n")]),t._v(" ，那么"),a("code",[t._v("n")]),t._v("就是 "),a("code",[t._v("2")]),t._v("的幂。")]),t._v(" "),a("p",[a("strong",[t._v("C++代码如下：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPowerOfTwo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意 & 优先级 低于 ==")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"常用位运算操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用位运算操作"}},[t._v("#")]),t._v(" 常用位运算操作")]),t._v(" "),a("blockquote",[a("p",[t._v("判断奇偶")])]),t._v(" "),a("p",[t._v("奇数： "),a("code",[t._v("(x & 1) == 1")])]),t._v(" "),a("p",[t._v("偶数： "),a("code",[t._v("(x & 1) == 0")])]),t._v(" "),a("blockquote",[a("p",[t._v("除以2操作，右移一位")])]),t._v(" "),a("p",[a("code",[t._v("x >> 1")])]),t._v(" "),a("blockquote",[a("p",[t._v("去掉二进制最低位1")])]),t._v(" "),a("p",[a("code",[t._v("x &= (x - 1)")])]),t._v(" "),a("blockquote",[a("p",[t._v("得到二进制最低位的1")])]),t._v(" "),a("p",[a("code",[t._v("x & -x")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);