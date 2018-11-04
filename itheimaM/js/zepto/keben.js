window.onload=function()
{
    // 搜索区块的颜色变化
    search();
};
// 搜索区块的颜色变化
function search()
{
    // 1.颜色随着 页面的滚动 逐渐加深
    // 2.当我们超过 轮播图的 时候 颜色保持不变

    // 获取搜索盒子
    var searchBox=document.querySelector('.hm_header_box');
    // 获取banner盒子
    var bannerBox=document.querySelector('.hm_banner');
    // 获取高度
    var h=bannerBox.offsetHeight;

    // 监听window的滚动事件
    window.onscroll=function()
    {
        // 不断的获取离顶部的距离
        var top=document.body.scrollTop;
        var opacity=0;
        if(top < h)
        {
            // 1.颜色随着 页面的滚动 逐渐加深
            opacity= top/h * 0.85;
        }
        else
        {
            // 2.当我们超过 轮播图的 时候 颜色保持不变
            opacity=0.85;
        }
    }
    
    // 吧透明度设置上去
    searchBox.style.background="rgba(201,21,35,"+opacity+")";
}




    // 轮播图
    function banner()
    {
        
        var banner=document.querySelector('.hm_banner');
        var w=banner.offsetWidth;
        var imageBox=banner.querySelector('ul:first-child');
        var pointBox=banner.querySelector('ul:last-child');
        var points=pointBox.querySelector('li');

        var addTransition=function()
        {
            imageBox.style.webkitTransition="all .2s";
            imageBox.style.transition="all .2s";
        };


        var removeTransition=function()
        {
            imageBox.style.webkitTransition="none";
            imageBox.style.transition="none";
        };

        var setTranslateX=function(translateX)
        {
            imageBox.style.webkitTransform="translateX("+translateX+"px)";
            imageBox.style.transform="translateX("+translateX+"px)";
        };

        var index=1;
        var timer=serInterval(function()
        {
            index  ++;
            addTransition();
            setTranslateX(-index*w);
        },4000);


        itcast.transitionEnd(imageBox,function()
        {
            console.log('transitionEnd');
            if(index >=9)
            {
                index=1;
                removeTransition();
                setTranslateX(-index*w);
            }
            else if(index <0)
            {
                index=8;
                removeTransition();
                setTranslateX(-index*w);
            }

            setPoint();

        });

        var setPoint=function()
        {
            for(var i=0; i<points.length ; i++)
            {
                points[i].className=" ";
                // points[i].clssList.remofe('now');
            }
            points[index-1].className="now";
        };

        var startX=0;
        var moveX=0;
        var distanceX=0;
        var isMove=false;

        imageBox.addEventListener('touchstart' , function(e)
        {
            clearInterval(timer);
            startX=e.touches[0].clientX
        });

        imageBox.addEventListener('touchmove' , function(e)
        {
            isMove=true;
            moveX=e.touches[0].clientX;
            distanceX=moveX-startX;
            console.log(distanceX);
            var currX=-index*w + distanceX;
            removeTransition();
            setTranslateX(currX);

        });

        imageBox.addEventListener('touchend',function(e)
        {
            if(isMove && (Math.abs(distanceX) > w/3))
            {
                if(distanceX >0 )
                {
                    index --;
                }
                else
                {
                    index ++;
                }
                addTransition();
                setTranslateX(-index * w);
            }

            else
            {
                addTransition();
                setTranslateX(-index * w)
            }

            startX=0;
            moveX=0;
            distanceX=0;
            isMove=false;
            clearInterval(trmer);
            timer=setInterval(function()
            {
                index ++;
                addTransition();
                setTranslateX(-index * w);

            },4000);

        });


    }