// var timer=window.setInterval(changeNum,1000);

var timer;

function startTimer(speed)
{
    timer=window.setInterval(changeNum,speed);
}

startTimer(100);

// 获取div#images元素
var images1=document.querySelector('#images');
// var imgObj=document.querySelector('h2>img');
var images2=document.getElementById('images');
console.log(imgObj);
console.log(images1.children[3]);


// var flag=true;

var currentNo=1;

function changeNum()
{ 
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt="">'
    // h2Obj.textContent=currentNo;
    if(currentNo<8) currentNo++;
    else currentNo=1;
    // console.log(currentNo);
}
   
// console.log(timer);

// var btnObj=document.getElementById('btnOjb');
// console.log(btnObj);
// btnObj.addEventListener('click',ChangeNum);

// function stopChangeNum()
// {
//     if(flag)
//     {
//         // window.clearInterval(timer);
//         // btnObj.textContent="启动"
//         flag=false;
//     }
//     else
//     {
//         // timer=window.setInterval(changeNum,1000);
        
//         // btnObj.textContent="停止"
//         flag=true;
//     }
// }

var btnObj=document.getElementById('btnOjb')


function startChange()
{
    startTimer(500);
    btnObj.textContent="停止";
}

function stopChange()
{
    window.clearInterval(timer);
    btnObj.textContent="启动";
}


btnObj.addEventListener('mouseover', stopChange);
btnObj.addEventListener('mouseout', startChange);