import './ArticleFilter.css';
import React from 'react';
import { FormControl, Select, MenuItem, Checkbox } from '@mui/material';
import { Item } from '../../classes';

export function ArticleFilter({
  articles,
  handleChange,
}: {
  articles: Item[];
  handleChange: (display?: string) => void;
}) {
  const [sites, setSites] = React.useState<string[]>();
  const [checked, setChecked] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    let tempArr: string[] = [];
    let tempCheckedArr: boolean[] = [true];
    articles.forEach((article) => {
      if (article.site && !tempArr.includes(article.site)) {
        tempArr.push(article.site);
        tempCheckedArr.push(true);
      }
    });
    setSites(tempArr);
    setChecked(tempCheckedArr);
  }, [articles]);

  const checkAllChecked = () => {
    let falseFlag = false;
    checked?.forEach((check) => {
      if (check === false) falseFlag = true;
    });
    return !falseFlag;
  };

  const checkCurrentAllChecked = (arr: boolean[]) => {
    let falseFlag = false;
    arr?.forEach((check) => {
      if (check === false) falseFlag = true;
    });
    return !falseFlag;
  };

  const handleAllCheck = () => {
    let tempArr = [...checked];
    if (checkAllChecked()) {
      tempArr.forEach((check, index) => {
        tempArr[index] = false;
      });
    } else {
      tempArr.forEach((check, index) => {
        tempArr[index] = true;
      });
    }
    setChecked(tempArr);
  };

  const handleCheck = (index: number) => {
    let tempArr = [...checked];
    tempArr[index] = !tempArr[index];
    setChecked(tempArr);
    handleChange(getCurrentDisplayValue(tempArr));
  };

  const getDisplayValue = () => {
    let displayValue = '';
    if (checkAllChecked()) return 'All Sites';
    else if (sites) {
      checked.forEach((check, index) => {
        if (check && sites[index - 1]) displayValue += `${sites[index - 1]}, `;
      });
      return displayValue.slice(0, -2);
    }
  };

  const getCurrentDisplayValue = (arr: boolean[]) => {
    let displayValue = '';
    if (checkCurrentAllChecked(arr)) return 'All Sites';
    else if (sites) {
      arr.forEach((check, index) => {
        if (check && sites[index - 1]) displayValue += `${sites[index - 1]}, `;
      });
      return displayValue.slice(0, -2);
    }
  };

  return (
    <div className="ArticleFilter">
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="All Sites"
          renderValue={getDisplayValue}
          value="All"
          // onChange={() => handleChange(getDisplayValue())}
        >
          <MenuItem value="All" onChange={handleAllCheck}>
            <Checkbox checked={checkAllChecked()} /> All Sites
          </MenuItem>
          {sites &&
            sites.map((site, index) => {
              return (
                <MenuItem key={site} value={site}>
                  <Checkbox
                    checked={checked[index + 1]}
                    onClick={() => handleCheck(index + 1)}
                  />{' '}
                  {site}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
