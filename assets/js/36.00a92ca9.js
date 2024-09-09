(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{357:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker启动kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker启动kibana"}},[a._v("#")]),a._v(" docker启动kibana")]),a._v(" "),s("h2",{attrs:{id:"第一步拉镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步拉镜像"}},[a._v("#")]),a._v(" 第一步拉镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull kibana:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("版本号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"第二步创建网络-如果在es那边创建完了网络的话-可以忽略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步创建网络-如果在es那边创建完了网络的话-可以忽略"}},[a._v("#")]),a._v(" 第二步创建网络(如果在es那边创建完了网络的话，可以忽略)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create es-net\n")])])]),s("h2",{attrs:{id:"第三步完美创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步完美创建容器"}},[a._v("#")]),a._v(" 第三步完美创建容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" kibana "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ELASTICSEARCH_HOSTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://esTest:9200 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("es-net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v(":5601 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nkibana:7.12.1\n")])])]),s("p",[a._v("这个--network=es-net : 加入一个名为es-net的网络中，与elasticsearch在同一个网络中")]),a._v(" "),s("p",[a._v("-e ELASTICSEARCH_HOSTS=http://es:9200 : 设置elasticsearch的地址，因为kibana已经与elasticsearch在同一个网络，因此可以用容器名直接访问elasticsearch")]),a._v(" "),s("h2",{attrs:{id:"第四步检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步检测"}},[a._v("#")]),a._v(" 第四步检测")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("root:~"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps")]),a._v("\nCONTAINER ID   IMAGE           COMMAND                  CREATED      STATUS          PORTS                    NAMES\nac2935194efc   kibana:7.12.1   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/tini -- /usr/l…"')]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" days ago   Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" seconds   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:5601-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("/tcp   kibana\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);