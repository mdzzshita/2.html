// 获取一组带超链接的图像

var imagesA=document.getElementById("images").children;
console.log(imagesA);

// 获取一组li文本
var txtList=document.querySelectorAll(".txtItem");
console.log(txtList);

// 行内样式更换显示样式
// imagesA[0].style.display="block";

// css类名换样式
// imagesA[0].className="hiddenImg";

// 当前显示图片编号
var currentNo=0;

// 用计时器，间隔1s，显示1张，其余隐藏
function changeImg()
{
    // 获取图片/文本总数量
    var nodeLength=txtList.length;
    // 排他原理，去掉同类,同类图片透明度0(.hiddenImg)
    for (var i=0;i<nodeLength;i++)
    {
        // 同类图片透明度0
       imagesA[i].className="hiddenImg";

       txtList[i].className="txtItem normalColor"
    }
    // 突出自己,当前透明度1(.displayImg)
    imagesA[currentNo].className="displayImg";

    txtList[currentNo].className="txtItem heighlightColor";

    // 换个元素为下次计时器调用做准备
    if(currentNo<7)
    {
        currentNo++;
    }
    else
    {
        currentNo=0;
    }
    console.log(currentNo);
}

// 网页加载后启动定时器
var timer=window.setInterval(changeImg,1000);

var imagesDiv=document.getElementById('images');
console.log(imagesDiv);

// var imagesB=document.getElementById('images')
// console.log(imagesB);


// 鼠标移入后重设定时器
function startChange()
{
    
    timer=window.setInterval(changeImg,1000);
   
}

// 鼠标移出后移除定时器
function stopChange()
{
    window.clearInterval(timer);
    
}

// 获取sliderDiv以注册移入移出事件
var sliderDiv=document.querySelector(".slider");


sliderDiv.addEventListener('mouseover', stopChange);
sliderDiv.addEventListener('mouseout', startChange);


// 为所有文本li注册鼠标移入事件，移入之后，当前li高亮，跳转到对应图片
for(var i=0;i<txtList.length;i++)
{

    txtList[i].addEventListener('mouseover',gotoImg); 
    // 添加自定义属性no 记录当前li的编号
    txtList[i].no=i;
    
}

function gotoImg()
{
    currentNo=this.no;
    // 调用更换图片/文本函数
    changeImg();

}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImg);
rightButton.addEventListener('click',rightImg);

function leftImg()
{
    for (var i=0;i<nodeLength;i++)
    {
        // 同类图片透明度0
       imagesA[i].className="hiddenImg";

       txtList[i].className="txtItem normalColor"
    }

    if(currentNo>0)
    {
        currentNo--
    }
    
    else
    {
        currentNo=7;
    }

    imagesA[currentNo].className="displayImg";

    txtList[currentNo].className="txtItem heighlightColor";
}

function rightImg()
{
    if(currentNo<7)
    {
        currentNo++;
    }
    else
    {
        currentNo=0;
    }

    console.log(currentNo);
    changeImg();
}
    
