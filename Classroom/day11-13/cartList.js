var cart=new ShoppingCart();
console.log(cart);

function displayOrderList()
{
    var cartData=cart.getDataFromLocalSatorge();
    console.log(cartData);
    var orderList=cartData.orderList;
    console.log(orderList);
    // for(const i in orderList)
    // {
    //     console.log(orderList[i]);
    // }
    let cartContent=document.querySelector('#cartContent');
    let orderExample=document.querySelector('#orderExample');
    
    for(let i=0; i < orderList.length; i++)
    {
        let order=orderList[i];
        console.log(order);
        node=orderExample.cloneNode(true);
        node.id=order.id;
        let imgNode=node.querySelector('[data-name="imgSrc"]');
        imgNode.src='images/'+order.print;
        console.log(imgNode);
        console.log(node);
        node.classList.temove('d-none');

        let selectNode=node.querySelector('');
        selectNode.checked=order.selectStatus;
        console.log(selectNode);
        
        

    }


    
    // 获取购物车数据
    // 获取购物车订单列表
    // 遍历订单列表｛
    // 克隆一个样本节点
    // 设置一个新id
    // 挂接到父元素
    // 获取所有到数据节点data-name 依次将对应到数据送入节点对应属性
    // 移除新节点到隐藏属性 d-none
    // ｝
}

displayOrderList();













