import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Header(props) {
  const { sumPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center ">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="cu-p mr-10">
          <img width={18} height={18} src="/img/busketCard.svg" alt="Busket" />
          <span>{sumPrice >0 ? `${sumPrice} руб.` : 'Пусто :('} </span>
        </li>
        <Link to="/favourites">
          <li className=" mr-10 cu-p">
            <img width={18} height={18} src="/img/favouriteIcon.svg" alt=" Favourites" />
            <span>Закладки</span>
          </li>
        </Link>
        <Link to="/profile">
          <li className="mr-10 cu-p">
            <img width={18} height={18} src="/img/userIcon.svg" alt="Profile" />
            <span>Мой профиль</span>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
