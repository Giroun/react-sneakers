import Card from'./components/Card';
import Header from'./components/Header';
import Drawer from './components/Drawer';

const array = [
  {
    title: 'Мужские Кроссовки Under Armour Curry 8', 
    price: 12990, 
    imageUrl: './img/sneackers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 9990, 
    imageUrl: './img/sneackers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15990, 
    imageUrl: './img/sneackers/3.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {
          array.map((obj) => (
            <Card 
            title={obj.title} 
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj.price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
