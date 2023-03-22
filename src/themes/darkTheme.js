import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    background: {
      default: '#1b2127',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#14181c',
          borderBottom: 'solid 1px black',
        },
      },
    },
  },
});
