// 获取一组带超链接的图像

var imagesA=document.getElementById("images").children;
console.log(imagesA);

// 行内样式更换显示样式
// imagesA[0].style.display="block";

// css类名换样式
// imagesA[0].className="hiddenImg";

// 用计时器，间隔1s，显示1张，其余隐藏
var currentNo=0;
function changeImg()
{
    for (const item of imagesA)
    {
        item.className="hiddenImg";
        console.log(item);
    }
    // 排他原理，去掉同类，突出自己
    imagesA[currentNo].className="displayImg";

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

var timer=window.setInterval(changeImg,1000);

var imagesDiv=document.getElementById('images');
console.log(imagesDiv);

// var imagesB=document.getElementById('images')
// console.log(imagesB);

function startChange()
{
    
    timer=window.setInterval(changeImg,1000);
   
}

function stopChange()
{
    window.clearInterval(timer);
    
}


imagesDiv.addEventListener('mouseover', stopChange);
imagesDiv.addEventListener('mouseout', startChange);