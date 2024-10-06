import React from 'react'
import axios from 'axios';

import Info from '../Info';
import {useCart} from '../../hooks/useCart';

import styles from './Drawer.module.scss';

function Drawer({ onRemove, onClose, items = [], opened}) {
  const {cartItems, setCartItems, sumPrice} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplite, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://66fc1189c3a184a84d15f21f.mockapi.io/orders/', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      let i = 0;
      while (i < cartItems.length) {
        const item = cartItems[i];
        await axios.delete(`https://66f85a0e2a683ce9730f4cfa.mockapi.io/cart/${item.id}`);
        i++;
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };

  return (
    
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className={styles.img} src="/img/btn_remove.svg" alt="close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className="cartItem mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn_remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{sumPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{sumPrice * 0.05} руб.</b>
                </li>
                <li>
                  <span>Итого к оформлению:</span>
                  <div></div>
                  <b>{sumPrice+ sumPrice * 0.05} руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplite ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplite
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотябы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplite ? '/img/order-complite.png' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
