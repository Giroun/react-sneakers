function Drawer(){
  return(
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
            <h2 className="mb-30">Корзина <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove"/></h2>
            <div className="items">
              
            <div className="cartItem mb-20">
              <div style={{backgroundImage:'url(/img/sneackers/1.jpg)'}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 990 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem mb-20">
              <div style={{backgroundImage:'url(/img/sneackers/1.jpg)'}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 990 руб.</b>
              </div>
              <img className="removeBtn " src="/img/btn_remove.svg" alt="Remove"/>
            </div>
            
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li >
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li >
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1 074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
            </div>
        </div>
      </div>
  );
}
export default Drawer;