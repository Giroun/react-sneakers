import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [favourites, setFavourites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const [itemsResponse, favouritesResponse, cartResponse] = await Promise.all([
          axios.get('https://66f85a0e2a683ce9730f4cfa.mockapi.io/items'),
          axios.get('https://66fc1189c3a184a84d15f21f.mockapi.io/favorites'),
          axios.get('https://66f85a0e2a683ce9730f4cfa.mockapi.io/cart'),
        ]);

        setIsLoading(false);

        setItems(itemsResponse.data);
        setFavourites(favouritesResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных... :(');
      }
    }
    fetchData();
  }, []);

  const onAddToCard = async (obj) => {
    try {
      const findItem = (cartItems.find((item) => Number(item.parentId) === Number(obj.id)));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://66f85a0e2a683ce9730f4cfa.mockapi.io/cart/${findItem.id}`);
      } else {
        const {data} = await axios.post('https://66f85a0e2a683ce9730f4cfa.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Ошибка при добалении в корзину');
    }
  };

  const onAddFavorite = async (obj) => {
    try {
      const findFavourite = favourites.find((favObj) => Number(favObj.id) === Number(obj.id))
      if (findFavourite) {
        setCartItems((prev) => prev.filter((item) => Number(item.Id) !== Number(obj.id)));
        axios.delete(`https://66fc1189c3a184a84d15f21f.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://66fc1189c3a184a84d15f21f.mockapi.io/favorites/',
          obj,
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://66f85a0e2a683ce9730f4cfa.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      console.log('добавил');
    } catch (error) {
      alert('При удалении произошла ошибка');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ items, cartItems, favourites, isItemAdded, setDrawerOpen, setCartItems }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setDrawerOpen(false)}
          onRemove={onRemoveItem}
          opened={drawerOpen}
        />
        <Header
          onClickCart={() => setDrawerOpen(true)}
          onClickFavourite={() => setFavourites(true)}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                // favourites={favourites}
                onChangeSearchInput={onChangeSearchInput}
                onAddFavorite={onAddFavorite}
                onAddToCard={onAddToCard}
                isLoading={isLoading}
              />
            }></Route>
          <Route
            path="/favourites"
            exact
            element={
              <Favourites
                items={favourites}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddFavorite={onAddFavorite}
                onAddToCard={onAddToCard}
                setSearchValue={setSearchValue}
              />
            }></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
