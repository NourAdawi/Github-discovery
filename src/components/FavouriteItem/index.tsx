import { IconButton } from '@mui/material';
import { Repository } from '../../hooks/useGithub';
import { useFavorites } from '../../hooks/useLocalStorage';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const FavouriteItem = ({ item }: { item: Repository }) => {
  const { favorites, setFavorites } = useFavorites();
  const isFavourite = (favorites as Repository[]).find((e) => e.id === item.id);

  const handleToggleFavourite = () => {
    // it's better to store ids only
    if (!isFavourite) {
      setFavorites([...favorites, item]);
    } else {
      const newStoredItems = favorites.filter((e) => e.id !== item.id);
      setFavorites(newStoredItems);
    }
  };

  return (
    <IconButton
      onClick={() => handleToggleFavourite()}
      sx={{ color: 'black' }}
      aria-label="save repo"
    >
      {isFavourite ? (
        <FavoriteIcon fontSize="large" />
      ) : (
        <FavoriteBorderIcon fontSize="medium" />
      )}
    </IconButton>
  );
};
