import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

function Card({
  imageUrl,
  price,
  title,
  id,
  onFavorite,
  onPlus,
  alreadyFavourite = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(alreadyFavourite);
  const obj = { id, parentId : id, title, price, imageUrl }

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus(obj);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={0.3}
          width={155}
          height={250}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="163" rx="5" ry="5" width="80" height="24" />
          <rect x="118" y="155" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite}>
              <img
                onClick={onClickFavorite}
                src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
                alt="unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Sneackers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/btn_added.svg' : '/img/plus.svg'}
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
