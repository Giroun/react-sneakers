import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favourites() {
  
  const { favourites } = React.useContext(AppContext);
  
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className=" flex-wrap d-flex">
        {favourites.map((item, index) => (
          <Card
            key={index}
            favorited={true} 
            
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
