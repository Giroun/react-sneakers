import styles from "./Header.module.scss"

function Header(props){
  return(
    <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center ">
      <img 
      width={40} 
      height={40} 
      src="/img/logo.svg" 
      alt="some value" />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className=" mr-30">
        <img
        className="cu-p"
        onClick={props.onClickCart} 
        width={18} 
        height={18} 
        src="/img/busketCard.svg" 
        alt="busket" />
        <span>1377 руб.</span>
      </li>
      <li>
        <img width={18} height={18} src="/img/userIcon.svg" alt="icon" />
      </li>
    </ul>
    </header>
  );
}

export default Header;