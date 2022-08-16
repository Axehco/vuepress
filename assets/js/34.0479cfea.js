(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{546:function(t,s,a){t.exports=a.p+"assets/img/0237_001.5bbd0d0e.jpg"},547:function(t,s,a){t.exports=a.p+"assets/img/0237_002.1b188963.jpg"},548:function(t,s,a){t.exports=a.p+"assets/img/0237_003.0d6b7be7.jpg"},962:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_237-删除链表中的节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_237-删除链表中的节点"}},[t._v("#")]),t._v(" 237. 删除链表中的节点")]),t._v(" "),e("Valine"),t._v(" "),e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),e("p",[t._v("题目传送门："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/delete-node-in-a-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("237. 删除链表中的节点"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("请编写一个函数，用于 "),e("strong",[t._v("删除单链表中某个特定节点")]),t._v(" 。在设计函数时需要注意，你无法访问链表的头节点 "),e("code",[t._v("head")]),t._v(" ，只能直接访问 "),e("strong",[t._v("要被删除的节点")]),t._v(" 。")]),t._v(" "),e("p",[t._v("题目数据保证需要删除的节点 "),e("strong",[t._v("不是末尾节点")]),t._v(" 。")]),t._v(" "),e("p",[e("strong",[t._v("示例 1：")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(546),width:"300px"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [4,5,1,9], node = 5\n输出：[4,1,9]\n解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9\n")])])]),e("p",[e("strong",[t._v("示例 2：")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(547),width:"300px"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [4,5,1,9], node = 1\n输出：[4,5,9]\n解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9\n")])])]),e("p",[e("strong",[t._v("示例 3：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [1,2,3,4], node = 3\n输出：[1,2,4]\n")])])]),e("p",[e("strong",[t._v("示例 4：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [0,1], node = 0\n输出：[1]\n")])])]),e("p",[e("strong",[t._v("示例 5：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入：head = [-3,5,-99], node = -3\n输出：[5,-99]\n")])])]),e("p",[e("strong",[t._v("提示：")])]),t._v(" "),e("ul",[e("li",[t._v("链表中节点的数目范围是 "),e("code",[t._v("[2, 1000]")])]),t._v(" "),e("li",[e("code",[t._v("-1000 <= Node.val <= 1000")])]),t._v(" "),e("li",[t._v("链表中每个节点的值都是唯一的")]),t._v(" "),e("li",[t._v("需要删除的节点 "),e("code",[t._v("node")]),t._v(" 是 "),e("strong",[t._v("链表中的一个有效节点")]),t._v(" ，且 "),e("strong",[t._v("不是末尾节点")])])]),t._v(" "),e("h2",{attrs:{id:"题解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),e("h3",{attrs:{id:"交换下一个结点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交换下一个结点"}},[t._v("#")]),t._v(" 交换下一个结点")]),t._v(" "),e("p",[t._v("将此节点和下一个结点交换位置，删除下一个结点即可。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"zoom-custom-imgs",attrs:{src:a(548),width:"400px"}})]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteNode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ListNode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" temp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" temp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);