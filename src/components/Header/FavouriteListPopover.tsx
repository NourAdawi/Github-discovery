import { Box, Grid, Typography } from '@mui/material';
import { RepositoryCard } from '../RespositoriesList/RepositoryCard';
import { useFavorites } from '../../hooks/useLocalStorage';

export const FavouriteListPopover = () => {
  const { favorites } = useFavorites();

  return (
    <Grid container spacing={2} px={4} py={4}>
      {!favorites.length && (
        <Box p={4}>
          <Typography variant="h5">
            You haven't saved any repository yet!
          </Typography>
        </Box>
      )}
      {favorites.map((item) => (
        <Grid item xs={12}>
          <RepositoryCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
