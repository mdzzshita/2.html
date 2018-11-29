var cart=new ShoppingCart();
console.log(cart);

function displayOrderList()
{
    // 获取购物车数据
    var cartData=cart.getDataFromLocalSatorge();
    console.log(cartData);
     // 获取购物车订单列表
    var orderList=cartData.orderList;
    console.log(orderList);
    // for(const i in orderList)
    // {
    //     console.log(orderList[i]);
    // }
    // 找订单列表父元素
    let cartContent=document.querySelector('#cartContent');
    let orderExample=document.querySelector('#orderExample');

     // 遍历订单列表
    for(let i=0; i < orderList.length; i++)
    {
        // 当前订单数据
        let order=orderList[i];
        console.log(order);
        // 克隆样本节点形成当前订单节点
        node=orderExample.cloneNode(true);
        // 连接到父元素
        cartContent.appendChild(node);
        // 节点id
        node.id=order.id;
        // 找图像节点
        let imgNode=node.querySelector('[data-name="imgSrc"]');
        imgNode.src='images/'+order.print;
        console.log(imgNode);
        console.log(node);
       

        let selectNode=node.querySelector('[data-operator="checkItem"]');
        selectNode.checked=order.selectStatus;
        console.log(selectNode);

        let priceNode=node.querySelector('[data-name="price"]');
        priceNode.textContent=order.price;
        console.log(priceNode);

        let titeNode=node.querySelector('[data-name="tite"]');
        titeNode.textContent=order.tite;
        console.log(titeNode);

        let qtyNode=node.querySelector('[data-name="qty"]');
        qtyNode.textContent=order.qty;
        console.log(qtyNode);

        // 小计
        let subTotalNode=node.querySelector('[data-name="subTotal"]');
        subTotalNode.textContent=order.price*order.qty.toFixed(2);
        console.log(subTotalNode);

        // 移除当前订单节点到隐藏属性
        node.classList.remove('d-none');

        
    } 

    
    function displaySelectedTotal()
    { 

        // let totalNode = cartRoot.querySelector(dataNameJson.units);
        // totalNode.textContent = cart.getTotalUnits();


        let totalProduct=document.querySelector('[data-name="totalProduct"]');
        totalProduct.textContent=cart.getSelectedQty();
        console.log(totalProduct);

        let totalPrice=document.querySelector('[data-name="totalPrice"]');
        totalPrice.textContent=cart.getSelectedAmount().toFixed(2);
        console.log(totalPrice);

    }
   

    
   
    // 克隆一个样本节点
    // 设置一个新id
    // 挂接到父元素
    // 获取所有到数据节点data-name 依次将对应到数据送入节点对应属性
    // 移除新节点到隐藏属性 d-none
    // ｝
    
    
}

displayOrderList();
displaySelectedTotal();













