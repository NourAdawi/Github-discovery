import { Box, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { RespositoriesList } from '../components/RespositoriesList';
import { useGithub } from '../hooks/useGithub';
import { useState } from 'react';

export const Home = () => {
  const currentDate = new Date();

  const lastWeekISODate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { repositories, isLoading, lastPage } = useGithub({
    createdTo: lastWeekISODate,
    sortBy: 'stars',
    page: currentPage
  });

  // TODO: skeleton loading
  if (isLoading) return null;

  return (
    <Box mb={4}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Box
          sx={{
            width: 'fit-content',
            px: 55,
            py: 4
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing={1}
            sx={{ wordSpacing: 3 }}
          >
            Discover most loved github repositories
          </Typography>
        </Box>
      </Box>

      <Box>
        <RespositoriesList isLoading={isLoading} repositories={repositories} />
      </Box>
      {lastPage && (
        <Box display="flex" justifyContent="flex-end" mr={4}>
          <Stack spacing={2}>
            <Pagination
              count={lastPage}
              variant="outlined"
              onChange={(_, value) => setCurrentPage(value)}
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};
