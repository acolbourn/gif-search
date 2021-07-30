import { Masonry } from 'masonic';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectFavorites } from './favoritesSlice';
import { selectGifEntities, fetchGifById } from '../search/searchSlice';
import GifLoader from '../gifDisplay/GifLoader';
import { Gif } from '../../types/GifApiResponse';

const Favorites: React.FC = () => {
  const favIds = useAppSelector(selectFavorites);
  const allGifs = useAppSelector(selectGifEntities);
  const dispatch = useAppDispatch();

  let favGifs: Gif[] = [];
  favIds.forEach((favId) => {
    const favGif = allGifs[favId];
    if (favGif) {
      favGifs.push(favGif);
    } else {
      dispatch(fetchGifById(favId));
    }
  });

  console.log(favGifs);

  return (
    <div>
      <Masonry items={favGifs} render={GifLoader} />
    </div>
  );
};

export default Favorites;
