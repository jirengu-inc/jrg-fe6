site: http://csy347.coding.io

## lesson7-CSS布局

- 单列布局
- 双列布局
- 三列布局 (eg:双飞翼布局,圣杯布局)
- flex布局

## lesson8-navigate/resume
##### 苹果导航栏
- 苹果导航-map ： 通过&lt;area&gt; shape="rect" 来确定链接的位置

- 苹果导航-background ： 通过设置背景图片来实现效果 （渐变背景为一像素宽度图片横向平铺实现）

- 苹果导航-sprite ： 通过css的雪碧技术，将背景图片整合到一张图片中，用position-position来确定位置

##### 简历
- viewport
- @font-face
- @media 媒体查询

## multi-level-nav
- 优雅降级: IE7+
- css3: transition transform 标准浏览器 IE10 chrome firefox safari
- prefixer: -webkit- -moz- -ms- -o-

## Dom

## Events

## jQuery.fn.js
- 插件的推荐命名为 jquery.xx.js
- 对象方法有应当附加到jQuery.fn对象上
- 插件内部, this指向的是当前通过选择器获取的jQuery对象
- 插件应该返回一个jQuery对象, 以保证插件的可链式操作
- 插件内部如果使用$符号, 可以利用闭包来操作

