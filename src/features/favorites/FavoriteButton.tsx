import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFavorite, removeFavorite, selectFavorites } from './favoritesSlice';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface Props {
  id: string;
}

const FavoriteButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const currentFavorites = useAppSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(currentFavorites.includes(id));

  const handleClick = () => {
    if (isFavorite) dispatch(removeFavorite(id));
    else dispatch(addFavorite(id));

    setIsFavorite((prev) => !prev);
  };

  return (
    <IconButton onClick={handleClick} aria-label='favorite'>
      {isFavorite ? (
        <FavoriteIcon color='secondary' />
      ) : (
        <FavoriteBorderIcon style={{ fill: 'white' }} />
      )}
    </IconButton>
  );
};

export default FavoriteButton;
