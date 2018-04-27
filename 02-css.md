###1.CSS的单位
html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。 CSS中的单位是必须要写的，因为它没有默认单位。
相对单位：
*  px：像素       为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。
 * em：印刷单位相当于12个点
 * %：百分比，相对周围的文字的大小

百分比%这个相对单位要怎么用呢？这里也举个例子：
![image.png](https://upload-images.jianshu.io/upload_images/9510190-ebbd648877ccfde7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###2.字体属性
####（1）行高
CSS中，所有的行，都有行高。盒子模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。
垂直方向来看，文字在自己的行里是居中的。比如，文字是14px，行高是24px，那么padding就是5px：
![image.png](https://upload-images.jianshu.io/upload_images/9510190-3cc1658dc126febd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
为了严格保证字在行里面居中，我们的工程师有一个约定： 行高、字号，一般都是偶数。这样可以保证，它们的差一定偶数，就能够被2整除。
####（2）如何让单行文本垂直居中
小技巧：如果一段文本只有一行，如果此时设置行高 = 盒子高，就可以保证单行文本垂直居中。这个很好理解。
上面这个小技巧，只适用于单行文本垂直居中，不适用于多行。如果想让多行文本垂直居中，还需要计算盒子的padding。
####（3）font字体属性
css样式中，字体属性有以下几种：
```
p{
	font-size:50px; 		/*字体大小*/
	line-height: 30px;      /*行高*/
	font-family:幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-style:italic ;		/*italic表示斜体，normal表示不倾斜*/
	font-weight:bold;	/*粗体：属性值写成bolder也可以*/
	font-variant:small-caps;  /*小写变大写*/
}
```
上面这几个属性可以连写，但是有一个要求，font属性连写至少要有字号和字体，否则连写是不生效的（相当于没有这一行代码）。
#####a.font-family字体属性的说明:
1.页面中，中文我们只使用：微软雅黑、宋体、黑体。英文使用：Arial、Times New Roman。页面中如果需要其他的字体，就需要切图。为了防止用户电脑里，没有微软雅黑这个字体。就要用英语的逗号，隔开备选字体。如下：（可以备选多个）

	font-family: "微软雅黑","宋体";
* 上方代码表示：如果用户电脑里没有安装微软雅黑字体，那么就是宋体。

2.我们必须将英语字体放在最前面，这样因为中文不能匹配英语字体，就自动的变为后面的中文字体：

	font-family: "Times New Roman","微软雅黑","宋体";
* 上方代码的意思是，英文会采用Times New Roman字体，而中文会采用微软雅黑字体（因为美国人设计的Times New Roman字体并不针对中文，所以中文会采用后面的微软雅黑）。比如说，对于smyhvae哈哈哈这段文字，smyhvae会采用Times New Roman字体，而哈哈哈会采用微软雅黑字体。

可是，如果我们把中文字体写在前面：(错误写法)

	font-family: "微软雅黑","Times New Roman","宋体";
上方代码会导致，中文和英文都会采用微软雅黑字体。
于是，当我们把字号、行高、字体这三个属性合二为一时，也可以写成：

	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";
宝宝发现，字体大小和行高之间用斜线隔开才好使，why?
3.行高可以用百分比，表示字号的百分之多少。
一般来说，百分比都是大于100%的，因为行高一定要大于字号。
比如说， font:12px/200% “宋体”等价于font:12px/24px “宋体”。200%可以理解成word里面的2倍行高。
反过来， font:16px/48px “宋体”;等价于font:16px/300% “宋体”。
###3.文本属性
CSS样式中，常见的文本属性有以下几种：
* letter-spacing: 0.5cm ; 单个字母之间的间距
* word-spacing: 1cm; 单词之间的间距
* text-decoration: none; 字体修饰：none去掉下划线、underline下划线、line-through中划线、overline上划线、
* color:red; 字体颜色
* text-align: center; 在当前容器中的对齐方式。属性值可以是：left、right、center（在当前容器的中间）、justify
* text-transform: lowercase; 单词的字体大小写。属性值可以是：uppercase（单词大写）、lowercase（单词小写）、capitalize（每个单词的首字母大写）
![image.png](https://upload-images.jianshu.io/upload_images/9510190-d5192ec84d5d0c8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###4.列表属性
```
ul li{
	list-style-image:url(images/2.gif) ;  /*列表项前设置为图片*/
	margin-left:80px;  /*公有属性*/
}
```
另外还有一个简写属性叫做list-style，它的作用是：将上面的多个属性写在一个声明中。
我们来看一下list-style-image属性的效果：
![image.png](https://upload-images.jianshu.io/upload_images/9510190-eef74206cef735da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
给列表前面的图片加个边距吧，不然显示不完整：
![image.png](https://upload-images.jianshu.io/upload_images/9510190-8e1bf90f01ea2fcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这里来一张表格的图片吧，一览无遗
![image.png](https://upload-images.jianshu.io/upload_images/9510190-a6802a04a3e52077.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/9510190-7d886dbb10d088eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###5.overflow属性：超出范围的内容要怎么处理
overflow属性的属性值可以是：
* auto：浏览器自己解决。在必需时裁切对象多余的内容或显示滚动条。一般采用这个属性值。
* visible：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
* hidden：不显示超过对象尺寸的内容。 对象将以包含对象的 window 或 frame 的尺寸进行裁切，并且 clip 属性设置将失效。
* scroll：总是显示滚动条。
针对上面的不同的属性值，我们来看一下效果： 举例：

```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		div{
			width: 100px;
			height: 100px;
			background-color: #00cc66;
			margin-right: 100px;
			float: left;
		}

		#div1{
			overflow:auto;/*超出的部分让浏览器自行解决*/
		}
		#div2{
			overflow:visible;/*超出的部分会显示出来*/
		}

		#div3{
			overflow:hidden;/*超出的部分将剪切掉*/
		}

	</style>

 </head>

 <body>

	<div id="div1">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div2">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div3">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
 </body>

</html>
```
![image.png](https://upload-images.jianshu.io/upload_images/9510190-90e49b98d2d59430.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###6.鼠标的属性cursor
鼠标的属性cursor有以下几个属性值：

* auto：默认值。浏览器根据当前情况自动确定鼠标光标类型。
* pointer：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。
* hand：和pointer的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。

比如说，我想让鼠标放在那个标签上时，光标显示手状，代码如下：
```
  p:hover{
	cursor: pointer;
}
```
为啥除了pointer，宝宝尝试的其他都没反应呢？
###7.滤镜
```
<img src="3.jpg" style="filter:gray()">
```
```
<body>
	<table>
		<tr>
			<td>原始图片</td>
			<td>图片加入黑白效果</td>
		</tr>
	<tr>
		<td><img src="3.jpg"></td>
		<td><img src="3.jpg" style="filter:gray()"></td> /*滤镜：设置图片为灰白效果*/
	</tr>
	</table>
 </body>
```
![image.png](https://upload-images.jianshu.io/upload_images/9510190-6688a16f06573a51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###8.导航栏的制作
现在，我们利用float浮动属性来把无序列表做成一个简单的导航栏吧，效果如下：

[![image](http://upload-images.jianshu.io/upload_images/9510190-d51fd4f59c36c5c9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)](https://camo.githubusercontent.com/d1129b3fac32f866efded67a46dbda5edc8bfe3c/687474703a2f2f3773627937722e636f6d312e7a302e676c622e636c6f7564646e2e636f6d2f323031352d31302d30332d6373732d33342e706e67)
```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus?">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">
		ul{
			list-style: none;/*去掉列表前面的圆点*/
			width: 420px;
			height: 60px;
			background-color: black;/*设置整个导航栏的背景为灰色*/
		}

		li{
			float: left;/*平铺*/
			margin-right: 30px;
			margin-top: 16px;
		}

		a{
			text-decoration: none;/*去掉超链的下划线*/
			font-size: 20px;
			color: #BBBBBB;/*设置超链的字体为黑色*/
			font-family:微软雅黑;
		}

	</style>

 </head>
 <body>
	<ul>
		<li><a href="">博客园</a></li>
		<li><a href="">新随笔</a></li>
		<li><a href="">联系</a></li>
		<li><a href="">订阅</a></li>
		<li><a href="">管理</a></li>

	</ul>
 </body>
</html>
```