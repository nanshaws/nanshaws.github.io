(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{366:function(a,e,t){"use strict";t.r(e);var s=t(14),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"java10新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java10新特性"}},[a._v("#")]),a._v(" java10新特性")]),a._v(" "),e("ul",[e("li",[a._v("Local Variable Type Inference（局部变量类型推断）")]),a._v(" "),e("li",[a._v("Collection API enhancements（集合API增强）")]),a._v(" "),e("li",[a._v("Stream API enhancements（流API增强）")]),a._v(" "),e("li",[a._v("Optional Interface enhancements（可选接口增强）")]),a._v(" "),e("li",[a._v("Application Class data sharing（应用程序类数据共享）")])]),a._v(" "),e("h2",{attrs:{id:"local-variable-type-inference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-variable-type-inference"}},[a._v("#")]),a._v(" Local Variable Type Inference")]),a._v(" "),e("p",[a._v("​       局部变量类型推断是Java 10中引入的一项新特性，它允许在声明局部变量时省略类型。编译器会根据右侧的表达式自动推断出变量的类型。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var list = new ArrayList<String>();\nlist.add("Hello");\nlist.add("World");\n')])])]),e("h2",{attrs:{id:"collection-api-enhancements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collection-api-enhancements"}},[a._v("#")]),a._v(" Collection API enhancements")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("toArray()")]),a._v("方法现在支持将集合转换为数组，同时可以指定数组的运行时类型。例如：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('List<String> list = Arrays.asList("A", "B", "C");\nString[] array = list.toArray(new String[0]);\n')])])]),e("ul",[e("li",[e("code",[a._v("spliterator()")]),a._v("方法现在支持并行处理。例如：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('List<String> list = Arrays.asList("A", "B", "C");\nlist.parallelStream().forEach(System.out::println);\n')])])]),e("h2",{attrs:{id:"stream-api-enhancements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-api-enhancements"}},[a._v("#")]),a._v(" Stream API enhancements")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("takeWhile()")]),a._v("和"),e("code",[a._v("dropWhile()")]),a._v("方法现在支持并行处理。例如：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\nlist.stream().takeWhile(x -> x < 5).forEach(System.out::println); // 输出1, 2, 3, 4\nlist.stream().dropWhile(x -> x < 5).forEach(System.out::println); // 输出5, 6, 7, 8, 9, 10\n")])])]),e("h2",{attrs:{id:"optional-interface-enhancements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-interface-enhancements"}},[a._v("#")]),a._v(" Optional Interface enhancements")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("Optional")]),a._v("类现在支持"),e("code",[a._v("orElseThrow()")]),a._v("方法，用于在"),e("code",[a._v("Optional")]),a._v("为空时抛出异常。例如：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Optional<String> optional = Optional.empty();\nString value = optional.orElseThrow(() -> new IllegalArgumentException("Value is missing"));\n')])])]),e("h2",{attrs:{id:"application-class-data-sharing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-class-data-sharing"}},[a._v("#")]),a._v(" Application Class data sharing")]),a._v(" "),e("p",[a._v("​        Java 10引入了一个新的模块系统，允许在不同的模块之间共享数据。这可以通过在模块描述符中使用"),e("code",[a._v("exports")]),a._v("指令来实现。例如，如果我们有一个名为"),e("code",[a._v("com.example.myapp")]),a._v("的模块，我们可以将其导出以供其他模块使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module com.example.myapp {\n    exports com.example.myapp;\n}\n")])])]),e("p",[a._v("​      然后，其他模块可以通过"),e("code",[a._v("requires")]),a._v("指令来使用这个模块：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("module com.example.otherapp {\n    requires com.example.myapp;\n}\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);