import { Box, Grid, SelectChangeEvent, Typography } from '@mui/material';
import { GithubData } from '../../hooks/useGithub';

import { Filter } from '../Filter';
import { useState } from 'react';
import { RepositoryCard } from './RepositoryCard';

export const RespositoriesList = ({
  repositories,
  isLoading
}: {
  repositories: GithubData;
  isLoading: boolean;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // TODO: skeleton loading
  if (isLoading) return null;

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
  };

  const totalNumber = repositories.total_count;

  const languagesList = repositories.items
    .filter((item) => !!item.language)
    .reduce((acc, item) => {
      if (!acc.includes(item.language)) {
        acc.push(item.language);
      }
      return acc;
    }, []);

  const repositoriesList =
    selectedLanguage === 'All'
      ? repositories.items
      : repositories.items.filter((item) => item.language === selectedLanguage);

  return (
    <Box px={20}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="baseline">
          <Typography variant="h3" fontWeight="bold" mr={1}>
            {totalNumber}
          </Typography>
          <Typography variant="h5" component="h4">
            Repositories were created in the last 7 days
          </Typography>
        </Box>
        <Box>
          <Filter
            languagesList={['All', ...languagesList]}
            onChange={handleChange}
            selectedLanguage={selectedLanguage}
          />
        </Box>
      </Box>

      <Grid container spacing={4} mb={6}>
        {repositoriesList.map((item) => (
          <Grid item xs={6} md={6} key={item.id}>
            <RepositoryCard item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
