import './ArticleFilter.css';
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Item } from '../../classes';

export function ArticleFilter({
  articles,
  handleChange,
  value,
}: {
  articles: Item[];
  handleChange: (event: SelectChangeEvent) => void;
  value: string;
}) {
  const [sites, setSites] = React.useState<string[]>();

  React.useEffect(() => {
    let tempArr: string[] = [];
    articles.forEach((article) => {
      if (article.site && !tempArr.includes(article.site))
        tempArr.push(article.site);
    });
    setSites(tempArr);
  }, [articles]);

  return (
    <div className="ArticleFilter">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="All">All Sites</MenuItem>
          {sites &&
            sites.map((site) => {
              return (
                <MenuItem key={site} value={site}>
                  {site}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
