import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { handleError } from '../../services/error';
import { useState } from 'react';
import { AuthStatus } from '../../types/auth';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { updateFavoriteAction } from '../../store/api-action';


type FavoriteProps = {
  offerId: number,
  isFavorite: boolean,
  className: string,
  imageSize: { height: number, width: number },
  onFavorite?: () => void,
};

function Favorite({ offerId, isFavorite: state, className, imageSize, onFavorite }: FavoriteProps): JSX.Element {
  const { authStatus } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(state);

  const handleChange = async (status: boolean) => {
    if (authStatus !== AuthStatus.auth) {
      navigate('/login');
      return;
    }

    try {
      await dispatch(updateFavoriteAction({ id: offerId, isFavorite: status }));
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
