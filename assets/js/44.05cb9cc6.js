(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{370:function(t,e,a){"use strict";a.r(e);var n=a(14),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"java12新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java12新特性"}},[t._v("#")]),t._v(" java12新特性")]),t._v(" "),e("ul",[e("li",[t._v("Teeting Collectors in the Stream API")]),t._v(" "),e("li",[t._v("Updates in String API:")]),t._v(" "),e("li",[t._v("Updates in NIO")]),t._v(" "),e("li",[t._v("Updates in CompletableFuture")]),t._v(" "),e("li",[t._v("Compact Number Formatting")])]),t._v(" "),e("h2",{attrs:{id:"teeting-collectors-in-the-stream-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teeting-collectors-in-the-stream-api"}},[t._v("#")]),t._v(" Teeting Collectors in the Stream API")]),t._v(" "),e("p",[t._v("​        在Stream API中引入了新的收集器，如"),e("code",[t._v("teeing()")]),t._v("，它可以将两个流的元素组合在一起进行操作。例如，可以将一个流的元素与另一个流的元素相加，然后将结果收集到一个新的列表中。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import java.util.stream.Collectors;\nimport java.util.stream.Stream;\n\npublic class TeetingCollectorExample {\n    public static void main(String[] args) {\n        Stream<Integer> stream1 = Stream.of(1, 2, 3, 4, 5);\n        Stream<Integer> stream2 = Stream.of(6, 7, 8, 9, 10);\n\n        List<Integer> result = Stream.concat(stream1, stream2)\n                .collect(Collectors.teeing(\n                        Collectors.summingInt(Integer::intValue),\n                        Collectors.counting(),\n                        (sum, count) -> sum / count\n                ));\n\n        System.out.println("平均值： " + result);\n    }\n}\n')])])]),e("h2",{attrs:{id:"updates-in-string-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updates-in-string-api"}},[t._v("#")]),t._v(" Updates in String API")]),t._v(" "),e("p",[t._v("String API进行了一些更新，包括"),e("code",[t._v("strip()")]),t._v("、"),e("code",[t._v("isBlank()")]),t._v("等方法的改进。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('public class StringAPIExample {\n    public static void main(String[] args) {\n        String str1 = "  你好，世界！  ";\n        String str2 = "";\n\n        System.out.println("去除首尾空格： " + str1.strip());\n        System.out.println("判断是否为空： " + str2.isBlank());\n    }\n}\n')])])]),e("h2",{attrs:{id:"updates-in-nio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updates-in-nio"}},[t._v("#")]),t._v(" Updates in NIO")]),t._v(" "),e("p",[t._v("NIO（New I/O）进行了一些更新，包括对文件锁定和文件属性的支持。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import java.nio.channels.FileLock;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardOpenOption;\n\npublic class NIOExample {\n    public static void main(String[] args) throws IOException {\n        Path path = Paths.get("test.txt");\n\n        try (FileChannel fileChannel = FileChannel.open(path, StandardOpenOption.WRITE)) {\n            FileLock lock = fileChannel.lock();\n            if (lock != null) {\n                System.out.println("文件锁定成功");\n            } else {\n                System.out.println("文件锁定失败");\n            }\n        }\n    }\n}\n')])])]),e("h2",{attrs:{id:"updates-in-completablefuture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updates-in-completablefuture"}},[t._v("#")]),t._v(" Updates in CompletableFuture")]),t._v(" "),e("p",[t._v("CompletableFuture进行了一些更新，包括对异常处理的改进。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class CompletableFutureExample {\n    public static void main(String[] args) {\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            if (true) {\n                throw new RuntimeException("发生异常");\n            }\n            return "Hello, World!";\n        });\n\n        future.exceptionally(ex -> {\n            System.out.println("处理异常： " + ex.getMessage());\n            return "Error";\n        }).thenAccept(System.out::println);\n    }\n}\n')])])]),e("h2",{attrs:{id:"compact-number-formatting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compact-number-formatting"}},[t._v("#")]),t._v(" Compact Number Formatting")]),t._v(" "),e("p",[t._v("引入了紧凑数字格式化，可以更简洁地表示数字。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import java.text.NumberFormat;\nimport java.util.Locale;\n\npublic class CompactNumberFormattingExample {\n    public static void main(String[] args) {\n        NumberFormat format = NumberFormat.getCompactNumberInstance(Locale.CHINA, NumberFormat.Style.SHORT);\n        System.out.println("紧凑数字格式化： " + format.format(123456789));\n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);