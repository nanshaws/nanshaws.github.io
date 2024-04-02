(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{373:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java14新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java14新特性"}},[a._v("#")]),a._v(" java14新特性")]),a._v(" "),t("ul",[t("li",[a._v("Modified switch case syntax")]),a._v(" "),t("li",[a._v("Using yield in the switch case")])]),a._v(" "),t("ol",[t("li",[a._v("修改了switch case语法：在Java 14中，对switch case的语法进行了一些修改。这些修改使得switch case更加简洁和易读。")]),a._v(" "),t("li",[a._v("在switch case中使用yield：在Java 14中，可以在switch case中使用yield关键字。yield关键字用于返回一个值，并且可以中断当前方法的执行。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('public class SwitchCaseExample {\n    public static void main(String[] args) {\n        int day = 3;\n        String dayName = getDayName(day);\n        System.out.println("Day " + day + " is " + dayName);\n    }\n\n    private static String getDayName(int day) {\n        return switch (day) {\n            case 1 -> "Monday";\n            case 2 -> "Tuesday";\n            case 3 -> "Wednesday";\n            case 4 -> "Thursday";\n            case 5 -> "Friday";\n            case 6 -> "Saturday";\n            case 7 -> "Sunday";\n            default -> {\n                System.out.println("Invalid day");\n                yield null;\n            }\n        };\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);