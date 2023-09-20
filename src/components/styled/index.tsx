import styled from '@emotion/styled';
import { Box, Button, ButtonGroup, OutlinedInput, ToggleButton, Typography } from '@mui/material';
import { Colors } from '../../theme';

export function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const Background = styled(Box)({
    background: Colors.white,
    borderRadius: '20px',
    padding: '20px',
    minHeight: '780px',
});

export const GreyField = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    background: Colors.gray,
    padding: '15px',
    marginBottom: '10px',
});

export const ImageHover = styled(Box)({
    position: 'absolute',
    zIindex: 9,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: '#ff868e99',
    borderRadius: '20px',
    padding: '10px',
    display: 'none',
});

export const TitleMain = styled(Typography)({
    fontSize: '44px',
    fontWeight: 500,
    lineHeight: '58px',
    marginBottom: '10px',
});

export const TitlePage = styled(Typography)({
    fontSize: '36px',
    fontWeight: 500,
});

export const SubTitle = styled(Typography)({
    color: Colors.black,
    fontWeight: 500,
});

export const NavButton = styled(Box)({
    height: 36,
    '& a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: '10px',
        background: Colors.white,
        color: Colors.primary,
        fontFamily: ['Jost', 'sans-serif'].join(','),
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '2px',
        '&:hover': {
            background: Colors.secondary,
        },
        '&.active': {
            background: Colors.primary,
            color: Colors.white,
        },
    },
});

export const PageName = styled(Box)({
    borderRadius: '10px',
    padding: '5px 30px',
    '& p': {
        fontSize: '20px',
        fontWeight: 500,
    },
});

export const SearchIcon = styled(Box)({
    width: 40,
    height: 40,
    '& a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: '10px',
        background: Colors.secondary,
        color: Colors.primary,
        '&:hover': {
            background: Colors.primary,
            color: Colors.white,
        },
    },
});

export const NavIcon = styled(Box)({
    width: 60,
    height: 60,
    '& a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: '20px',
        background: Colors.white,
        color: Colors.primary,
        '&:hover': {
            background: Colors.secondary,
        },
        '&.active': {
            background: Colors.primary,
            color: Colors.white,
        },
    },
});

export const BackButton = styled(Button)({
    minWidth: 40,
    height: 40,
    background: Colors.secondary,
    borderRadius: '10px',
    '&:hover': {
        background: Colors.primary,
        color: Colors.white,
    },
});

export const OrderButton = styled(Button)({
    background: '#F8F8F7',
    minWidth: '40px',
    height: '40px',
    color: '#8C8C8C',
    borderRadius: '10px',
});

export const UnFavButton = styled(Button)({
    minWidth: '40px',
    height: '40px',
    background: '#FFF',
    border: 'none',
    borderRadius: '10px',
    '&:hover': {
        background: '#FFF',
    },
});

export const FavButton = styled(ToggleButton)({
    minWidth: '40px',
    height: '40px',
    background: Colors.primary,
    color: Colors.white,
    border: 'none',
    borderRadius: '10px',
    '&:hover': {
        background: Colors.primary,
        color: Colors.white,
    },
    '&.Mui-selected': {
        background: Colors.white,
        color: Colors.primary,
        '&:hover': {
            background: Colors.white,
            color: Colors.primary,
        },
    },
});

export const VoteButtons = styled(ButtonGroup)({
    width: '256px',
    display: 'flex',
    gap: '4px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: Colors.white,
    borderRadius: '20px',
    padding: '4px',
});

export const LikeButton = styled(Button)({
    width: 80,
    height: 80,
    border: 'none',
    background: '#97EAB9',
    color: Colors.white,
    borderRadius: '20px 0 0 20px',
    '&:hover': {
        background: '#97EAB930',
        color: '#97EAB9',
    },
});

export const FavButtonBig = styled(ToggleButton)({
    width: 80,
    height: 80,
    border: 'none',
    background: Colors.primary,
    color: Colors.white,
    '&:hover': {
        background: '#FF868E30',
        color: Colors.primary,
    },
    '&.Mui-selected': {
        background: Colors.white,
        color: Colors.primary,
        '&:hover': {
            background: Colors.white,
            color: Colors.primary,
        },
    },
});

export const DislikeButton = styled(Button)({
    width: 80,
    height: 80,
    border: 'none',
    background: '#FFD280',
    color: Colors.white,
    borderRadius: '0 20px 20px 0',
    '&:hover': {
        background: '#FFD28030',
        color: '#FFD280',
    },
});

export const DescriptionBox = styled(Box)({
    color: '#8C8C8C',
    flexBasis: '50%',
    textAlign: 'start',
});

export const SelectInput = styled(OutlinedInput)({
    background: Colors.gray,
    borderRadius: '10px',
    height: '40px',

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
});
