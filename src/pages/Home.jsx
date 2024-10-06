import Card from '../components/Card';
import  React  from 'react';


function Home({
  items,
  setSearchValue,
  searchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCard,
  isLoading,
  
}) {
  const renderItems = () => {
    
    const filterItem = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(9)] : filterItem).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCard(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btn_remove.svg"
              alt="clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className=" flex-wrap d-flex">{renderItems()}</div>
    </div>
  );
}

export default Home;
