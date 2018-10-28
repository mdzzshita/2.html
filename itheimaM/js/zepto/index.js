// 页面加载完成之后执行
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
        if(top<h)
        {
            // 1.颜色随着 页面的滚动 逐渐加深
            opacity=top/h*0.85;
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