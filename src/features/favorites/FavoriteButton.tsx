import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addFavorite, removeFavorite } from './favoritesSlice';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface Props {
  id: string;
}

const FavoriteButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    if (toggle) dispatch(removeFavorite(id));
    else dispatch(addFavorite(id));

    setToggle((prev) => !prev);
  };

  return (
    <IconButton onClick={handleClick} aria-label='favorite'>
      {toggle ? (
        <FavoriteIcon color='secondary' />
      ) : (
        <FavoriteBorderIcon style={{ fill: 'white' }} />
      )}
    </IconButton>
  );
};

export default FavoriteButton;
