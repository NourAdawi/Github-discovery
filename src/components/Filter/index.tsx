import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Card } from '@mui/material';

export const Filter = ({ languagesList, selectedLanguage, onChange }) => {
  return (
    <Box width="200px">
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          fullWidth
          value={selectedLanguage}
          label="Language"
          onChange={onChange}
        >
          {languagesList.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
