import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { selectCatsByBreed } from '../../store/breedsSlice';

function ImageCarousel() {
    const catsByBreed: any = useSelector(selectCatsByBreed);

    return (
        <Carousel
            sx={{ position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}
            indicatorContainerProps={{
                style: {
                    backgroundColor: '#FFF',
                    width: 'auto',
                    padding: '0 10px 0',
                    position: 'absolute',
                    zIndex: 9,
                    bottom: '-2px',
                    borderRadius: '10px 10px 0 0',
                },
            }}
            indicatorIconButtonProps={{ style: { color: '#FBE0DC' } }}
            activeIndicatorIconButtonProps={{
                style: { color: '#FF868E' },
            }}
        >
            {catsByBreed.map((cat: Cat) => (
                <Box
                    component="img"
                    key={cat.id}
                    src={cat.url}
                    width="100%"
                    height="470px"
                    sx={{ borderRadius: '20px' }}
                />
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
