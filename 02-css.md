###1.CSS�ĵ�λ
html�еĵ�λֻ��һ�֣��Ǿ�������px�����Ե�λ�ǿ���ʡ�Եģ�������CSS�в�һ���� CSS�еĵ�λ�Ǳ���Ҫд�ģ���Ϊ��û��Ĭ�ϵ�λ��
��Ե�λ��
*  px������       Ϊʲô˵����px��һ����Ե�λ�أ���Ҳ�ܺ���⡣����˵��������Ļ�ĵĳߴ��ǲ���ģ��������ǿ���������ʾ��ͬ�ķֱ��ʣ��ڲ�ͬ�ķֱ����£��������صĳ��ȿ϶��ǲ�һ��������
 * em��ӡˢ��λ�൱��12����
 * %���ٷֱȣ������Χ�����ֵĴ�С

�ٷֱ�%�����Ե�λҪ��ô���أ�����Ҳ�ٸ����ӣ�
![image.png](https://upload-images.jianshu.io/upload_images/9510190-ebbd648877ccfde7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###2.��������
####��1���и�
CSS�У����е��У������иߡ�����ģ�͵�padding�����Բ���ֱ�������������ϵģ����������ڡ��С��ϵġ�
��ֱ�����������������Լ��������Ǿ��еġ����磬������14px���и���24px����ôpadding����5px��
![image.png](https://upload-images.jianshu.io/upload_images/9510190-3cc1658dc126febd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Ϊ���ϸ�֤������������У����ǵĹ���ʦ��һ��Լ���� �иߡ��ֺţ�һ�㶼��ż�����������Ա�֤�����ǵĲ�һ��ż�������ܹ���2������
####��2������õ����ı���ֱ����
С���ɣ����һ���ı�ֻ��һ�У������ʱ�����и� = ���Ӹߣ��Ϳ��Ա�֤�����ı���ֱ���С�����ܺ���⡣
�������С���ɣ�ֻ�����ڵ����ı���ֱ���У��������ڶ��С�������ö����ı���ֱ���У�����Ҫ������ӵ�padding��
####��3��font��������
css��ʽ�У��������������¼��֣�
```
p{
	font-size:50px; 		/*�����С*/
	line-height: 30px;      /*�и�*/
	font-family:��Բ,����; 	/*�������ͣ����û����Բ����ʾ���壬û�к������ʾĬ��*/
	font-style:italic ;		/*italic��ʾб�壬normal��ʾ����б*/
	font-weight:bold;	/*���壺����ֵд��bolderҲ����*/
	font-variant:small-caps;  /*Сд���д*/
}
```
�����⼸�����Կ�����д��������һ��Ҫ��font������д����Ҫ���ֺź����壬������д�ǲ���Ч�ģ��൱��û����һ�д��룩��
#####a.font-family�������Ե�˵��:
1.ҳ���У���������ֻʹ�ã�΢���źڡ����塢���塣Ӣ��ʹ�ã�Arial��Times New Roman��ҳ���������Ҫ���������壬����Ҫ��ͼ��Ϊ�˷�ֹ�û������û��΢���ź�������塣��Ҫ��Ӣ��Ķ��ţ�������ѡ���塣���£������Ա�ѡ�����

	font-family: "΢���ź�","����";
* �Ϸ������ʾ������û�������û�а�װ΢���ź����壬��ô�������塣

2.���Ǳ��뽫Ӣ�����������ǰ�棬������Ϊ���Ĳ���ƥ��Ӣ�����壬���Զ��ı�Ϊ������������壺

	font-family: "Times New Roman","΢���ź�","����";
* �Ϸ��������˼�ǣ�Ӣ�Ļ����Times New Roman���壬�����Ļ����΢���ź����壨��Ϊ��������Ƶ�Times New Roman���岢��������ģ��������Ļ���ú����΢���źڣ�������˵������smyhvae������������֣�smyhvae�����Times New Roman���壬�������������΢���ź����塣

���ǣ�������ǰ���������д��ǰ�棺(����д��)

	font-family: "΢���ź�","Times New Roman","����";
�Ϸ�����ᵼ�£����ĺ�Ӣ�Ķ������΢���ź����塣
���ǣ������ǰ��ֺš��иߡ��������������Ժ϶�Ϊһʱ��Ҳ����д�ɣ�

	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";
�������֣������С���и�֮����б�߸����ź�ʹ��why?
3.�и߿����ðٷֱȣ���ʾ�ֺŵİٷ�֮���١�
һ����˵���ٷֱȶ��Ǵ���100%�ģ���Ϊ�и�һ��Ҫ�����ֺš�
����˵�� font:12px/200% �����塱�ȼ���font:12px/24px �����塱��200%��������word�����2���иߡ�
�������� font:16px/48px �����塱;�ȼ���font:16px/300% �����塱��
###3.�ı�����
CSS��ʽ�У��������ı����������¼��֣�
* letter-spacing: 0.5cm ; ������ĸ֮��ļ��
* word-spacing: 1cm; ����֮��ļ��
* text-decoration: none; �������Σ�noneȥ���»��ߡ�underline�»��ߡ�line-through�л��ߡ�overline�ϻ��ߡ�
* color:red; ������ɫ
* text-align: center; �ڵ�ǰ�����еĶ��뷽ʽ������ֵ�����ǣ�left��right��center���ڵ�ǰ�������м䣩��justify
* text-transform: lowercase; ���ʵ������Сд������ֵ�����ǣ�uppercase�����ʴ�д����lowercase������Сд����capitalize��ÿ�����ʵ�����ĸ��д��
![image.png](https://upload-images.jianshu.io/upload_images/9510190-d5192ec84d5d0c8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###4.�б�����
```
ul li{
	list-style-image:url(images/2.gif) ;  /*�б���ǰ����ΪͼƬ*/
	margin-left:80px;  /*��������*/
}
```
���⻹��һ����д���Խ���list-style�����������ǣ�������Ķ������д��һ�������С�
��������һ��list-style-image���Ե�Ч����
![image.png](https://upload-images.jianshu.io/upload_images/9510190-eef74206cef735da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
���б�ǰ���ͼƬ�Ӹ��߾�ɣ���Ȼ��ʾ��������
![image.png](https://upload-images.jianshu.io/upload_images/9510190-8e1bf90f01ea2fcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
������һ�ű���ͼƬ�ɣ�һ������
![image.png](https://upload-images.jianshu.io/upload_images/9510190-a6802a04a3e52077.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/9510190-7d886dbb10d088eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###5.overflow���ԣ�������Χ������Ҫ��ô����
overflow���Ե�����ֵ�����ǣ�
* auto��������Լ�������ڱ���ʱ���ж����������ݻ���ʾ��������һ������������ֵ��
* visible��Ĭ��ֵ����������ݲ�����Ҳ����ӹ���������ȫ����ʾ������
* hidden������ʾ��������ߴ�����ݡ� �����԰�������� window �� frame �ĳߴ���в��У����� clip �������ý�ʧЧ��
* scroll��������ʾ��������
�������Ĳ�ͬ������ֵ����������һ��Ч���� ������

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
			overflow:auto;/*�����Ĳ�������������н��*/
		}
		#div2{
			overflow:visible;/*�����Ĳ��ֻ���ʾ����*/
		}

		#div3{
			overflow:hidden;/*�����Ĳ��ֽ����е�*/
		}

	</style>

 </head>

 <body>

	<div id="div1">��ʵ�ܼ� ��ʵ����Ȼ �����˵İ������˷ֵ� ��ʵ������ ����̫���� ����һ��ǽ����˭���� ��������Ϊ�� �㲻����Ҫ���Ҹ���</div>
	<div id="div2">��ʵ�ܼ� ��ʵ����Ȼ �����˵İ������˷ֵ� ��ʵ������ ����̫���� ����һ��ǽ����˭���� ��������Ϊ�� �㲻����Ҫ���Ҹ���</div>
	<div id="div3">��ʵ�ܼ� ��ʵ����Ȼ �����˵İ������˷ֵ� ��ʵ������ ����̫���� ����һ��ǽ����˭���� ��������Ϊ�� �㲻����Ҫ���Ҹ���</div>
 </body>

</html>
```
![image.png](https://upload-images.jianshu.io/upload_images/9510190-90e49b98d2d59430.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###6.��������cursor
��������cursor�����¼�������ֵ��

* auto��Ĭ��ֵ����������ݵ�ǰ����Զ�ȷ����������͡�
* pointer��IE6.0������һֻ��ָ�����ι�ꡣ����ͨ���û�������Ƶ���������ʱ������
* hand����pointer������һ��������һֻ��ָ�����ι�ꡣ����ͨ���û�������Ƶ���������ʱ������

����˵���������������Ǹ���ǩ��ʱ�������ʾ��״���������£�
```
  p:hover{
	cursor: pointer;
}
```
Ϊɶ����pointer���������Ե�������û��Ӧ�أ�
###7.�˾�
```
<img src="3.jpg" style="filter:gray()">
```
```
<body>
	<table>
		<tr>
			<td>ԭʼͼƬ</td>
			<td>ͼƬ����ڰ�Ч��</td>
		</tr>
	<tr>
		<td><img src="3.jpg"></td>
		<td><img src="3.jpg" style="filter:gray()"></td> /*�˾�������ͼƬΪ�Ұ�Ч��*/
	</tr>
	</table>
 </body>
```
![image.png](https://upload-images.jianshu.io/upload_images/9510190-6688a16f06573a51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###8.������������
���ڣ���������float�����������������б�����һ���򵥵ĵ������ɣ�Ч�����£�

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
			list-style: none;/*ȥ���б�ǰ���Բ��*/
			width: 420px;
			height: 60px;
			background-color: black;/*���������������ı���Ϊ��ɫ*/
		}

		li{
			float: left;/*ƽ��*/
			margin-right: 30px;
			margin-top: 16px;
		}

		a{
			text-decoration: none;/*ȥ���������»���*/
			font-size: 20px;
			color: #BBBBBB;/*���ó���������Ϊ��ɫ*/
			font-family:΢���ź�;
		}

	</style>

 </head>
 <body>
	<ul>
		<li><a href="">����԰</a></li>
		<li><a href="">�����</a></li>
		<li><a href="">��ϵ</a></li>
		<li><a href="">����</a></li>
		<li><a href="">����</a></li>

	</ul>
 </body>
</html>
```