import { defaultThemes } from 'react-data-table-component';
import { createTheme } from 'react-data-table-component';

export const individuality = {
  text: {
    primary: 'var(--bs-dark)',
    secondary: 'var(--bs-secondary)',
  },
  context: {
    background: '#268bd2',
    text: 'var(--bs-light)',
  },
  divider: {
    default: defaultThemes.default.divider.default,
  },
  action: {
    button: 'var(--bs-light)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
};

export const themeIndividuality = createTheme(
  'individuality',
  individuality,
  'dark'
);

export const customStyles = {
  header: {
    style: {
      minHeight: '60px',
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
      fontWeight: 'bold',
      fontSize: '30px',
      justifyContent: 'center',
    },
  },
  subHeader: {
    style: {
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
        background: 'var(--solusersa-head)',
      },
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        minHeight: '80px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  rows: {
    stripedStyle: {
      backgroundColor: 'white',
      color: 'black',
    },
    style: {
      background: 'var(--solusersa)',
    },
  },
  pagination: {
    style: {
      border: 'none',
      background: 'var(--solusersa)',
      color: 'black',
    },
  },
  expanderButton: {
    style: {
      color: 'black',
      fill: defaultThemes.default.divider,
      backgroundColor: 'transparent',
      borderRadius: '2px',
      transition: '0.25s',
      height: '100%',
      width: '100%',
      '&:hover:enabled': {
        cursor: 'pointer',
      },
      '&:disabled': {
        color: 'gray',
      },
      '&:hover:not(:disabled)': {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      svg: {
        margin: 'auto',
      },
    },
  },
  noData: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--solusersa)',
    },
  },
  progress: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--solusersa)',
    },
  },
};

export const compactGrid = {
  header: {
    style: {
      minHeight: '60px',
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
      fontWeight: 'bold',
      fontSize: '30px',
      justifyContent: 'center',
    },
  },
  subHeader: {
    style: {
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      background: 'var(--solusersa-head)',
      color: 'var(--bs-light)',
      borderTopWidth: '1px',
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  rows: {
    stripedStyle: {
      backgroundColor: 'white',
      color: 'black',
    },
    style: {
      background: 'var(--solusersa)',
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  expanderButton: {
    style: {
      color: 'black',
      fill: defaultThemes.default.divider,
      backgroundColor: 'transparent',
      borderRadius: '2px',
      transition: '0.25s',
      height: '100%',
      width: '100%',
      '&:hover:enabled': {
        cursor: 'pointer',
      },
      '&:disabled': {
        color: 'gray',
      },
      '&:hover:not(:disabled)': {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      svg: {
        margin: 'auto',
      },
    },
  },
  pagination: {
    style: {
      border: 'none',
      background: 'var(--bs-container)',
      color: 'white',
    },
  },
  noData: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--solusersa)',
    },
  },
  progress: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--solusersa)',
    },
  },
};
