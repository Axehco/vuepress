(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{953:function(t,s,n){"use strict";n.r(s);var a=n(25),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_225-用队列实现栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_225-用队列实现栈"}},[t._v("#")]),t._v(" 225. 用队列实现栈")]),t._v(" "),n("Valine"),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目传送门："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/implement-stack-using-queues/",target:"_blank",rel:"noopener noreferrer"}},[t._v("225. 用队列实现栈"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（"),n("code",[t._v("push")]),t._v("、"),n("code",[t._v("top")]),t._v("、"),n("code",[t._v("pop")]),t._v(" 和 "),n("code",[t._v("empty")]),t._v("）。")]),t._v(" "),n("p",[t._v("实现 "),n("code",[t._v("MyStack")]),t._v(" 类：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("void push(int x)")]),t._v(" 将元素 x 压入栈顶。")]),t._v(" "),n("li",[n("code",[t._v("int pop()")]),t._v(" 移除并返回栈顶元素。")]),t._v(" "),n("li",[n("code",[t._v("int top()")]),t._v(" 返回栈顶元素。")]),t._v(" "),n("li",[n("code",[t._v("boolean empty()")]),t._v(" 如果栈是空的，返回 "),n("code",[t._v("true")]),t._v(" ；否则，返回 "),n("code",[t._v("false")]),t._v(" 。")])]),t._v(" "),n("p",[n("strong",[t._v("注意：")])]),t._v(" "),n("ul",[n("li",[t._v("你只能使用队列的基本操作 —— 也就是 "),n("code",[t._v("push to back")]),t._v("、"),n("code",[t._v("peek/pop from front")]),t._v("、"),n("code",[t._v("size")]),t._v(" 和 "),n("code",[t._v("is empty")]),t._v(" 这些操作。")]),t._v(" "),n("li",[t._v("你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。")])]),t._v(" "),n("p",[n("strong",[t._v("示例：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：\n["MyStack", "push", "push", "top", "pop", "empty"]\n[[], [1], [2], [], [], []]\n输出：\n[null, null, null, 2, 2, false]\n\n解释：\nMyStack myStack = new MyStack();\nmyStack.push(1);\nmyStack.push(2);\nmyStack.top(); // 返回 2\nmyStack.pop(); // 返回 2\nmyStack.empty(); // 返回 False\n')])])]),n("p",[n("strong",[t._v("提示：")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= x <= 9")])]),t._v(" "),n("li",[t._v("最多调用"),n("code",[t._v("100")]),t._v(" 次 "),n("code",[t._v("push")]),t._v("、"),n("code",[t._v("pop")]),t._v("、"),n("code",[t._v("top")]),t._v(" 和 "),n("code",[t._v("empty")])]),t._v(" "),n("li",[t._v("每次调用 "),n("code",[t._v("pop")]),t._v(" 和 "),n("code",[t._v("top")]),t._v(" 都保证栈不为空")])]),t._v(" "),n("p",[n("strong",[t._v("进阶：")])]),t._v(" "),n("p",[t._v("你能否实现每种操作的均摊时间复杂度为 "),n("code",[t._v("O(1)")]),t._v(" 的栈？换句话说，执行 "),n("code",[t._v("n")]),t._v(" 个操作的总时间复杂度 "),n("code",[t._v("O(n)")]),t._v(" ，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。")]),t._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),n("h3",{attrs:{id:"辅助队列思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#辅助队列思路"}},[t._v("#")]),t._v(" 辅助队列思路")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("对于push()")]),t._v("定义的"),n("code",[t._v("q2")]),t._v("只是一个辅助队列，每次将元素压入"),n("code",[t._v("q2")]),t._v("，再将"),n("code",[t._v("q1")]),t._v("中的元素全部压入"),n("code",[t._v("q2")]),t._v("，然后让"),n("code",[t._v("q2")]),t._v("队列"),n("strong",[t._v("变成")]),n("code",[t._v("q1")]),t._v("队列即可实现栈的特性。")])]),t._v(" "),n("li",[n("p",[t._v("剩下的"),n("code",[t._v("pop()")]),t._v("、"),n("code",[t._v("top()")]),t._v("、"),n("code",[t._v("empty()")]),t._v("只需要针对"),n("code",[t._v("p1")]),t._v("操作即可。")])])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyStack")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    queue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    queue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyStack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("front")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("front")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            q2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("front")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("front")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack* obj = new MyStack();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->top();\n * bool param_4 = obj->empty();\n */")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=p.exports}}]);