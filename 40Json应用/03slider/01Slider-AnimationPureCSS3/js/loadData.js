

var sliderData = {
    "imageList": [
        { "itemId": "first", "itemClassName": "firstanimation", "aHref": "#", "imgSrc": "images/img_1.jpg", "imgAlt": "美洲狮", "h1Content": "美洲狮" },
        { "itemId": "second", "itemClassName": "secondanimation", "aHref": "#", "imgSrc": "images/img_2.jpg", "imgAlt": "雄狮", "h1Content": "雄狮" },
        { "itemId": "third", "itemClassName": "thirdanimation", "aHref": "#", "imgSrc": "images/img_3.jpg", "imgAlt": "天行者", "h1Content": "天行者" },
        { "itemId": "fourth", "itemClassName": "fourthanimation", "aHref": "#", "imgSrc": "images/img_4.jpg", "imgAlt": "怒吼", "h1Content": "怒吼" },
        { "itemId": "fifth", "itemClassName": "fifthanimation", "aHref": "#", "imgSrc": "images/img_5.jpg", "imgAlt": "晒太阳", "h1Content": "晒太阳暖洋洋" }
    ]
}

console.log(sliderData.imageList[1].imgSrc);

for(x in sliderData.imageList)
{
    console.log(sliderData.imageList[x].imgSrc);
}

for(var i=0;i<sliderData.imageList.length;i++)
{
    console.log(sliderData.imageList[i].imgSrc);
}

// var jsonDemo=
// {
//     "name":"四哥",
//     age:20,
//     "leader":
//     {
//         "grade":"哈喽",
//         "deptment":"哈哈"
//     },
//     "friend":["a","b","c"]
// }

// console.log(jsonDemo);
// console.log(jsonDemo.name);
// console.log(jsonDemo.age);
// console.log(jsonDemo.leader.grade);
// console.log(jsonDemo.friend[2]);

// var book=new Array("手刹1","手刹2","手刹3");
// // var p=new Array();
// var p=[];
// p[0]="手刹4";
// p.push("手刹5");
// p.push("手刹6");
// var pr=[22,33,44];
// console.log(book);
// console.log(p);
// console.log(pr);

// for(var i=0;i<pr.length;i++)
// {
//     console.log(pr[i]);
// }

// for(x in book)
// {
//     console.log(book[x]);
// }

var ulObject=document.querySelector('#mask>ul')
console.log(ulObject);
var str='';
for(x in sliderData.imageList)
{ 
    str+='<li id="'+sliderData.imageList[x].itemId+'" class="'+sliderData.imageList[x].itemClassName+'">'+
    '<a href="'+sliderData.imageList[x].aHref+'">'+
        '<img src="'+sliderData.imageList[x].imgSrc+'" alt="'+sliderData.imageList[x].imgAlt+'">'+
    '</a>'+
    '<div class="tooltip">'+
        '<h1>'+sliderData.imageList[x].h1Content+'</h1>'+
    '</div>'+
    '</li>';
}
ulObject.innerHTML=str;






//    //动态添加轮播图列表区的列表元素
//    function addImageList(imageList) {    
//     var imageListNode = document.querySelector('#slider ul');    
//     console.log(imageListNode);
//     var str = '';
//     //一条li的格式
//     // <li id="first" class="firstanimation">
//     // <a href="#">
//     //     <img src="images/img_1.jpg" alt="Cougar">
//     // </a>
//     // <div class="tooltip">
//     //     <h1>Cougar</h1>
//     // </div>
//     // </li>
//     for (var i in imageList) {
//         str += '<li id="' + imageList[i].itemId + '" class="' +imageList[i].itemClassName+'">'+
//                 '<a href="' + imageList[i].aHref + '#">' +
//                      '<img src="' + imageList[i].imgSrc + '" alt="' +imageList[i].imgAlt+'">'+
//                  '</a>'+
//                  ' <div class="tooltip">'+
//                  '<h1>'+imageList[i].h1Content+'</h1>'+
//                  '</div>'+
//                  '</li>';
//     }
//     //追加行内元素
//     imageListNode.innerHTML += str;
// }
// //函数调用
// addImageList(sliderData.imageList);;
