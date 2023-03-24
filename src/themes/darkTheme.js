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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          background: '#1b2127',
          '&.Mui-focused': {
            color: `white`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: `white`,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {},
        icon: {
          color: '#FFFFFF',
        },
        select: {
          border: 'solid #FFFFFF',
          color: '#FFFFFF',
        },
      },
    },
  },
});
