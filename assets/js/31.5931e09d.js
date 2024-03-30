(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{325:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker启动elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker启动elasticsearch"}},[a._v("#")]),a._v(" docker启动elasticsearch")]),a._v(" "),s("h2",{attrs:{id:"第一步拉镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步拉镜像"}},[a._v("#")]),a._v(" 第一步拉镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull elasticsearch:版本号\n")])])]),s("h2",{attrs:{id:"第二步完美的创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步完美的创建容器"}},[a._v("#")]),a._v(" 第二步完美的创建容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".创建挂载目录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" es-data\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" es-plugs\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(".将es-data设置为可以被写入的，因为es创建和启动的时候需要在里面写入一些东西\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" es-data\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(".从github上下载ik和pinyin的分词器插件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可以不选，注意一定要和版本匹配"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(".创建网络\n因为我还需要部署kibana容器，需要让es和kibana容器互联。这里先创建一个网络\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create es-net\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(".创建容器,这里我使用的是elasticsearch:7.12.1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" esTest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ES_JAVA_OPTS=-Xms512m -Xmx521m"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"discovery.type=single-node"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" es-data:/usr/share/elasticsearch/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" es-plugins:/usr/share/elasticsearch/plugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" es-net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v(":9200 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v(":9300 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nelasticsearch:7.12.1\n")])])]),s("h2",{attrs:{id:"第三步-检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步-检测"}},[a._v("#")]),a._v(" 第三步，检测")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("root:~"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker run -d \\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" esTest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ES_JAVA_OPTS=-Xms512m -Xmx521m"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"discovery.type=single-node"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" es-data:/usr/share/elasticsearch/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" es"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" es-plugins:/usr/share/elasticsearch/plugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --privi"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" es-net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v(":9200 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v(":9300 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" elasticsearch:7.12.1\n1d35d8d89fef1e343cbedd850dd176ef1f4e4150e81b7763d0f86c9e13c2a8ed\nroot:~"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps")]),a._v("\nCONTAINER ID   IMAGE                  COMMAND                  CREATED              STATUS              PORTS                                            NAMES\n1d35d8d89fef   elasticsearch:7.12.1   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/tini -- /usr/l…"')]),a._v("   About a minute ago   Up About a minute   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:9200-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:9300-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v("/tcp   esTest\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);