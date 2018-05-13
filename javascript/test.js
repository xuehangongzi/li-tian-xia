for(var i = 0; i<10; i++){
    console.log(i);
}
var i = 0;
while(i<3){
    console.log(i);
    i++;
}
//函数声明/定义
function xue(){
    console.log("Hello World");
}
xue();//函数调用
计算三角形面积
function  angleArea(){
    var wide = prompt("请输入三角形的底边长度","");
    var high = prompt("请输入三角形的高","");
    var area = wide * high / 2;
    if(isNaN(area)){
        alert("您输入数据有误");
    }else{
        alert("三角形面积为"+area);
    }


}
angleArea();

var fun1 = function (){
    console.log("这是函数直接量的方式");
}
fun1();
function add(a,b){
    return a+b;//如果这个函数执行完就OK了，下面不会用到它的结果，那就不用return返回值，如果在下面需要
                  //用到函数结果，那就用return了
}
var result =add(3,9);
console.log(result+2);
数组
var arr = [1,2,3,5,6];
for( var i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}
var arr = new Array();//括号里不用写数组长度，因为他会根据你下面的赋值而改变
arr[0] = 1;
arr[1] = 3;
arr[100] =9;
console.log(arr[7]);//undefined
console.log(arr.length);//101
定义对象
var obj1 = new Object();//new了一个对象，所以说，程序员最不缺对象，new一个就行了嘛
obj1.name = "肖战";//给你的对象设置属性
obj1.high = 180;
obj1.love = function(){//给你对象设置方法
    alert("爱李雪");
};
console.log(obj1.name);
console.log(obj1.love());//调用方法后面得有小括号
//定义对象的第二种方式
var father = {
    name: "lili",//注意这里不是;而是逗号
    age : 20,
} ;
var son = {
    name : "lii",
    dad : father,//属性值是个对象
}
console.log(son.dad.age);
var  arr = ["jjj","jjjjjjj","kkkkkkk"];
for( var p in arr){
    console.log(p + ":" +arr[p]);
}
var obj1 = {
    name : "lili",
    age : 12,
    height:130,
    p: "这个p是属性不是代表下标的变量"
};
for (  var p in obj1){
    console.log(p+ ":" + obj1.[p]);
}
if(null===undefined){//如果是==的话，就会输出true
console.log("true");
}else{
    console.log("false");
}
console.log(typeof null);//object  起初是个语法错误，后来被沿用
console.log(typeof undefined);//undefined

var oH1 = document.getElementById("hh");
console.log(oH1.className);
console.log(oH1.id);
console.log(oH1.align);
console.log(oH1.getAttribute("xx"));
