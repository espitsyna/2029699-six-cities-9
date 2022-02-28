type FavoriteProps = {
  isFavorite: boolean,
  className: string,
  imageSize: { height: number, width: number },
};

function Favorite({ isFavorite, className, imageSize }: FavoriteProps): JSX.Element {
  return (
    <button className={`${className}__bookmark-button button ${isFavorite ? `${className}__bookmark-button--active` : ''}`} type="button">
      <svg className={`${className}__bookmark-icon`} {...imageSize}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Favorite;
