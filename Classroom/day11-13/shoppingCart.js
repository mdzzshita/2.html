localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量



    // 商品类
    class Product
        {
          constructor(id,tite,price,print)
          {
            this.id=id;
            this.tite=tite;//名称
            this.price=price;//价格
            this.print=print;//照片地址
          }
        }


    class Order
    {
      constructor(product,qty,selectStatus)
      {
        // 订单类成员
        this.id=product.id;
        this.tite=product.tite;
        this.price=product.price;
        this.print=product.print;
        this.qty=qty;//数量
        this.selectStatus=selectStatus;//选择状态
      }
    }


     
    // 购物车数据类--确定格式用于记录购物车数据
    //包括订单列表、总计商品数量、总计商品样本数、总价格
    //订单列表包括：某类商品。商品数量小计
    //商品包括：商品id、图片、名称、单价
    class CartData
    {
      constructor()
      {
        this.orderList=new Array();
        this.units=0;
        this.totalQty=0;
        this.totalAmount=0;
      }
    }

    //购物车操作类
    class ShoppingCart
    {
      //将购物车数据写入本地存储中
      setDataToLocalSatorge(CartData)
      {
        // 清除原有存储写入新列表
        localStorage.removeItem('LzzyCart');
        // 写入本地储存
        localStorage.setItem('LzzyCart',JSON.stringify(CartData));

      }

      //从本地存储中获取购物车数据
      getDataFromLocalSatorge()
      {
        let lzzyCart =localStorage.getItem('LzzyCart');

      }

      //获取选中对象的列表的总数量
      getSelectedList()
      {

      }

      // 获取选中对象的列表的总数量
      getSelectedQty()
      {

      }

      // 获取选中对象的列表的总价格
      getSelectedAmount()
      {

      }




    }