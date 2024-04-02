(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{380:function(e,n,t){"use strict";t.r(n);var r=t(14),a=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"chapter2教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chapter2教程"}},[e._v("#")]),e._v(" chapter2教程")]),e._v(" "),n("h2",{attrs:{id:"_2-2-渲染循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-渲染循环"}},[e._v("#")]),e._v(" 2.2 渲染循环")]),e._v(" "),n("p",[e._v('在Android项目中创建一个类，例如"MyGdxGame"，并继承自ApplicationAdapter。重写create()和render()方法：')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import com.badlogic.gdx.ApplicationAdapter;\nimport com.badlogic.gdx.Gdx;\n\npublic class MyGdxGame extends ApplicationAdapter {\n    @Override\n    public void create() {\n        // 初始化代码\n    }\n\n    @Override\n    public void render() {\n        // 更新和绘制游戏逻辑\n    }\n}\n\n")])])]),n("h2",{attrs:{id:"_2-3-精灵与纹理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-精灵与纹理"}},[e._v("#")]),e._v(" 2.3 精灵与纹理")]),e._v(" "),n("p",[e._v("在create()方法中加载纹理，并创建一个Sprite对象：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('private Texture texture;\nprivate Sprite sprite;\n\n@Override\npublic void create() {\n    texture = new Texture("my_image.png");\n    sprite = new Sprite(texture);\n}\n\n')])])]),n("p",[e._v("在render()方法中绘制精灵：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Override\npublic void render() {\n    Gdx.gl.glClearColor(1, 1, 1, 1);\n    Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);\n\n    sprite.draw(batch);\n}\n\n")])])]),n("h2",{attrs:{id:"_2-4-输入处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-输入处理"}},[e._v("#")]),e._v(" 2.4 输入处理")]),e._v(" "),n("p",[e._v("在create()方法中设置输入处理器：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("private InputProcessor inputProcessor;\n\n@Override\npublic void create() {\n    // ...其他代码...\n    inputProcessor = new InputAdapter();\n    Gdx.input.setInputProcessor(inputProcessor);\n}\n\n")])])]),n("p",[e._v('创建一个实现InputProcessor接口的类，例如"InputAdapter"：')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package com.mygdx.game.tutorial01.input;\n\nimport com.badlogic.gdx.InputProcessor;\n\npublic class InputAdapter implements InputProcessor {\n    @Override\n    public boolean keyDown(int keycode) {\n        System.out.println("按下键:"+keycode);\n        return false;\n    }\n\n    @Override\n    public boolean keyUp(int keycode) {\n        System.out.println("上升键:"+keycode);\n        return false;\n    }\n\n    @Override\n    public boolean keyTyped(char character) {\n        System.out.println("字符输入:"+character);\n        return false;\n    }\n\n    @Override\n    public boolean touchDown(int screenX, int screenY, int pointer, int button) {\n        System.out.println("触摸屏幕:"+"x:"+screenX+"y:"+screenY+"p:"+pointer+"b:"+button);\n        return false;\n    }\n\n    @Override\n    public boolean touchUp(int screenX, int screenY, int pointer, int button) {\n        // 处理触摸屏幕抬起事件\n        return false;\n    }\n\n    @Override\n    public boolean touchCancelled(int i, int i1, int i2, int i3) {\n        return false;\n    }\n\n    @Override\n    public boolean touchDragged(int screenX, int screenY, int pointer) {\n        // 处理触摸屏幕拖动事件\n        return false;\n    }\n\n    @Override\n    public boolean mouseMoved(int screenX, int screenY) {\n        // 处理鼠标移动事件\n        return false;\n    }\n\n    @Override\n    public boolean scrolled(float v, float v1) {\n        return false;\n    }\n\n}\n\n')])])]),n("h2",{attrs:{id:"_2-5-碰撞检测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-碰撞检测"}},[e._v("#")]),e._v(" 2.5 碰撞检测")]),e._v(" "),n("p",[e._v("使用libgdx内置的Rectangle类进行简单的矩形碰撞检测：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("private Rectangle player;\nprivate Rectangle enemy;\n\n@Override\npublic void create() {\n    // ...其他代码...\n    player = new Rectangle();\n    enemy = new Rectangle();\n}\n\n@Override\npublic void render() {\n    // ...其他代码...\n    if (player.overlaps(enemy)) {\n        // 处理碰撞事件\n    }\n}\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);