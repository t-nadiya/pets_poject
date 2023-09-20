import { createTheme } from '@mui/material';

export const Colors = {
    primary: "#FF868E",
    secondary: "#FBE0DC",
    gray: "#F8F8F7",
    white: "#FFF",
    black: "#1D1D1D",
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1440,
            xl: 1536,
        }
    },
    palette: {
        primary: {
            main: '#FF868E',
            dark: '',
            light: '#FBE0DC',
            contrastText: ' #FFFFF'
        },
        background: {
            paper: '',
            default: '#FFFFF'
        },
        text: {
            primary: '#1D1D1D',
            secondary: '#8C8C8C',
            disabled: ''
        }
    },
    typography: {
        fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    shadows: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none',],
    components: {
        MuiImageListItem: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    cursor: 'pointer',
                    '& .MuiImageListItem-img': { borderRadius: '20px', objectFit: 'fill' },
                    '&:hover div': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& a, p': {
                            width: '100%',
                            alignSelf: 'flex-end',
                            textAlign: 'center',
                            background: '#fff',
                            color: '#FF868E',
                            borderRadius: '10px',
                            padding: '5px',
                        }
                    }
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: 1440,
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    paddingRight: "10px!important",
                    fieldset: {
                        borderColor: 'transparent',
                    },
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        }
                    },
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                endAdornment: {
                    top: 'calc(50% - 20px)',
                    '& button': {
                        transform: 'rotate(0deg)'
                    }
                },
                noOptions: {
                    background: Colors.white,
                    borderRadius: '20px',
                    marginTop: '10px'
                },
                listbox: {
                    background: Colors.white,
                    borderRadius: '20px',
                    marginTop: '10px'
                },
            }
        }
    },
});

export default theme;
