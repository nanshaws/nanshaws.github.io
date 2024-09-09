(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{361:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker启动tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker启动tomcat"}},[t._v("#")]),t._v(" docker启动tomcat")]),t._v(" "),a("h2",{attrs:{id:"第一步拉镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步拉镜像"}},[t._v("#")]),t._v(" 第一步拉镜像")]),t._v(" "),a("p",[t._v("这里用9.0版本作为演示")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull tomcat:9.0\n")])])]),a("h2",{attrs:{id:"第二步完美的创建容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步完美的创建容器"}},[t._v("#")]),t._v(" 第二步完美的创建容器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".先简单运行一下tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3355")]),t._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" tomcat01 tomcat\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".创建挂载目录\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /root/tomcat/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /root/tomcat/logs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /root/tomcat/webapps\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".拷贝\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" tomcat01:/usr/local/tomcat/conf /root/tomcat/   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker的复制是把整个conf文件夹复制过来")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" tomcat01:/usr/local/tomcat/webapps /root/tomcat/   \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" tomcat01:/usr/local/tomcat/logs /root/tomcat/ \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".关闭一开始创建的容器\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" stop tomcat01\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(".重新创建一个完美容器\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" tomcat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /root/tomcat/logs:/usr/local/tomcat/logs   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /root/tomcat/webapps:/usr/local/tomcat/webapps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /root/tomcat/conf:/usr/local/tomcat/conf "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" tomcat:9.0\n")])])]),a("h2",{attrs:{id:"第三步检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步检测"}},[t._v("#")]),t._v(" 第三步检测")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8080\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("doctype html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("HTTP Status "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" – Not Found"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/css"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("font-family:Tahoma,Arial,sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" h1, h2, h3, b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color:white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("background-color:"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#525D76;} h1 {font-size:22px;} h2 {font-size:16px;} h3 {font-size:14px;} p {font-size:12px;} a {color:black;} .line {height:1px;background-color:#525D76;border:none;}</style></head><body><h1>HTTP Status 404 – Not Found</h1><hr class="line" /><p><b>Type</b> Status Report</p><p><b>Description</b> The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.</p><hr class="line" /><h3>Apache Tomcat/9.0.76</h3></body></html>')]),t._v("\n")])])]),a("p",[t._v("出现这个是成功的标志，因为在docker里面的tomcat是没有基本的页面的，不信的话，各位可以去webapps里面查看一下")])])}),[],!1,null,null,null);a.default=e.exports}}]);