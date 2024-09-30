import styles from './Drawer.module.scss';

function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="mb-30">
          Корзина
          <img onClick={onClose} className={styles.img} src="/img/btn_remove.svg" alt="close" />
        </h2>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className="cartItem mb-20">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} 
              className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p>{obj.title}</p>
                <b>{obj.price}</b> 
              </div>
              <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
