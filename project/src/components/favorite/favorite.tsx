import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { ApiRoute } from '../../const';
import { handleError } from '../../services/error';
import { api } from '../../services/api';
import { useState } from 'react';
import { AuthStatus } from '../../types/auth';


type FavoriteProps = {
  offerId: number,
  isFavorite: boolean,
  className: string,
  imageSize: { height: number, width: number },
  onFavorite?: () => void,
};

function Favorite({ offerId, isFavorite: state, className, imageSize, onFavorite }: FavoriteProps): JSX.Element {
  const { authStatus } = useAppSelector(({ user }) => user);
  const [isFavorite, setIsFavorite] = useState(state);

  const navigate = useNavigate();
  const apiInstance = api();

  const handleChange = async (status: boolean) => {
    if (authStatus !== AuthStatus.auth) {
      navigate('/login');
      return;
    }

    try {
      await apiInstance.post(`${ApiRoute.favorite}/${offerId}/${status ? 1 : 0}`);
      setIsFavorite(status);
      onFavorite && onFavorite();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <button
      className={`${className}__bookmark-button button ${isFavorite ? `${className}__bookmark-button--active` : ''}`}
      type="button"
      onClick={() => handleChange(!isFavorite)}
    >
      <svg className={`${className}__bookmark-icon`} {...imageSize}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Favorite;
