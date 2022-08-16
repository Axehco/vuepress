(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1081:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"面试题-02-02-返回倒数第k个节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试题-02-02-返回倒数第k个节点"}},[t._v("#")]),t._v(" 面试题 02.02.返回倒数第k个节点")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试题 02.02. 返回倒数第 k 个节点"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。")]),t._v(" "),n("p",[n("strong",[t._v("示例：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入： 1->2->3->4->5 和 k = 2\n输出： 4\n")])])]),n("p",[n("strong",[t._v("说明：")])]),t._v(" "),n("p",[t._v("给定的 "),n("em",[t._v("k")]),t._v(" 保证是有效的。")]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("h3",{attrs:{id:"常规解法思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常规解法思路"}},[t._v("#")]),t._v(" 常规解法思路")]),t._v(" "),n("blockquote",[n("p",[t._v("给出一个长度未知的链表，如何找到链表中倒数第n个结点?")])]),t._v(" "),n("p",[n("strong",[t._v("最容易想到的当然是")]),t._v("先从头到尾遍历链表，统计出链表的总长度，从而计算出倒数第n个结点相当于正数第几个结点。")]),t._v(" "),n("p",[t._v("比如链表总长度是"),n("code",[t._v("10")]),t._v("，倒数第"),n("code",[t._v("3")]),t._v("个结点就相当于正数第"),n("code",[t._v("8")]),t._v("个结点。然后从头遍历链表，遍历到第"),n("code",[t._v("8")]),t._v("个结点，就可得到结果。")]),t._v(" "),n("p",[n("strong",[t._v("C++版")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Definition "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" singly"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linked "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" struct ListNode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     ListNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" kthToLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" cnt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cnt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" cnt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" leetcode提交机制，永远不会执行的\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("python版")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Definition for singly-linked list.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# class ListNode:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.next = None")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("kthToLast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])])]),n("p",[t._v("但是这种方法需要经过两次遍历才能得到结果，如果只用一次遍历，是否可以得到结果？接下来看下面的方法。")]),t._v(" "),n("h3",{attrs:{id:"双指针思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双指针思路"}},[t._v("#")]),t._v(" 双指针思路")]),t._v(" "),n("p",[t._v("首先，我们创建两个指针"),n("code",[t._v("p1")]),t._v("和"),n("code",[t._v("p2")]),t._v("，"),n("code",[t._v("p1")]),t._v("指向链表的头结点，"),n("code",[t._v("p2")]),t._v("指向链表的正数第"),n("code",[t._v("n")]),t._v("个结点 。")]),t._v(" "),n("p",[t._v("接下来,我们让指针"),n("code",[t._v("p1")]),t._v("和"),n("code",[t._v("p2")]),t._v("同时循环右移，每次右移一步，直到指针"),n("code",[t._v("p2")]),t._v("移动到链表的末尾。")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(623),width:"600px"}})]),t._v(" "),n("p",[t._v("此时，由于"),n("code",[t._v("p2")]),t._v("指向链表的尾结点，且"),n("code",[t._v("p1")]),t._v("和"),n("code",[t._v("p2")]),t._v("的距离是"),n("code",[t._v("n-1")]),t._v("，因此"),n("code",[t._v("p1")]),t._v("所指的结点就是我们要寻找的链表倒数第"),n("code",[t._v("n")]),t._v("个结点。")]),t._v(" "),n("p",[t._v("显然，这个方法从头到尾只需要对链表做一次遍历，而且仅仅使用了两个指针，算法的空间复杂度是"),n("code",[t._v("O(1)")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("C++版")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Definition "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" singly"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linked "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" struct ListNode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     ListNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("     ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" kthToLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ListNode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Python版")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Definition for singly-linked list.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# class ListNode:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         self.next = None")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("kthToLast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把p2指针移动到正数第n个结点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# p1和p2一起右移，直到p2指向链表尾结点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports},623:function(t,s,a){t.exports=a.p+"assets/img/interview02.02_001.c1a37d22.jpg"}}]);