import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';
import { FavouriteItem } from '../FavouriteItem';
import { Repository } from '../../hooks/useGithub';

export const RepositoryCard = ({
  item,
  displayOnly = false
}: {
  item: Repository;
  displayOnly?: boolean;
}) => {
  const { name, description, language, html_url, owner, stargazers_count } =
    item;
  return (
    <Box
      sx={{
        py: 3,
        px: 6,
        borderRadius: 6,
        backgroundColor: 'rgba(222, 177, 238, 0.32)'
      }}
      minHeight="50px"
      height="auto"
      //   overflow="auto"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography variant="h6" fontWeight="bold" mr={2}>
            {name}
          </Typography>

          {language && (
            <Box
              bgcolor="rgba(175, 237, 202, 0.51)"
              border={1}
              borderColor="rgba(154, 186, 168, 1)"
              borderRadius={4}
              mr={0.5}
              px={1.5}
            >
              <Typography variant="overline" fontWeight="bold">
                {language}
              </Typography>
            </Box>
          )}
          <Box
            bgcolor="rgba(255, 236, 162, 0.44)"
            border={1}
            borderColor="rgba(246, 201, 22, 1)"
            borderRadius={4}
            px={1.5}
          >
            <Typography
              variant="overline"
              fontWeight="bold"
            >{`Star ${stargazers_count}`}</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" width="100px" height="50px">
          <Box>
            <Button
              component={RouterLink}
              to={html_url}
              target="_blank"
              sx={{ color: 'black', p: 0 }}
            >
              <GitHubIcon fontSize="large" />
            </Button>
          </Box>
          {!displayOnly && (
            <Box>
              <FavouriteItem item={item} />
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <Typography
          ml={1}
          mb={1}
          color="grey"
          fontWeight="bold"
        >{`By: ${owner.login}`}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};
