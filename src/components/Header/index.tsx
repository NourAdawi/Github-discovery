import { Badge, Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { useFavorites } from '../../hooks/useLocalStorage';
import { useState } from 'react';
import { FavouriteListPopover } from './FavouriteListPopover';

const DrawerWrapper = styled(Drawer)(
  () => `
    width: 60%;
    max-width: 800px;
    flex-shrink: 0;

    & > .MuiPaper-root {
      width: 60%;
      max-width: 800px;

  }
`
);

export const Header = () => {
  const { favorites } = useFavorites();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      height={70}
      py={1}
      px={4}
      bgcolor="#f2f2f2"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Typography variant="h3" fontFamily="fantasy">
        Github Discovery
      </Typography>
      <Box>
        <IconButton
          size="large"
          onClick={openDrawer}
          aria-label="favourite list"
        >
          <Badge badgeContent={favorites.length} color="error">
            <FavoriteIcon fontSize="large" color="action" />
          </Badge>
        </IconButton>
      </Box>
      <DrawerWrapper
        variant="temporary"
        anchor="right"
        onClose={closeDrawer}
        open={isDrawerOpen}
        elevation={9}
      >
        <FavouriteListPopover />
      </DrawerWrapper>
    </Box>
  );
};
