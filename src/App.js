import Card from'./components/Card';
import Header from'./components/Header';
import Drawer from './components/Drawer';
import React from 'react';

function App() {

  const [items, setItems] = React.useState([]);
  const[cartItems, setCartItems] = React.useState([]);
  const[drawerOpen, setDrawerOpen] = React.useState(false);

  

React.useEffect(()=> {
  fetch('https://66f85a0e2a683ce9730f4cfa.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json)=>{
    setItems(json);
  })
}, []);

const onAddToCard = (obj) => {
  setCartItems(prev => [...prev, obj]);
};

  return (
    <div className="wrapper clear">
      {drawerOpen && <Drawer
      items = {cartItems} 
      onClose={() => setDrawerOpen(false)}  /> }
      <Header onClickCart={() => setDrawerOpen(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className=" flex-wrap d-flex">
          {
          items.map((item) => (
            <Card 
            title={item.title} 
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('добавили в закладки')}
            onPlus = {(obj) => onAddToCard(obj)}
             />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
