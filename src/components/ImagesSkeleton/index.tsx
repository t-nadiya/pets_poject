import React from 'react';
import { ImageList, ImageListItem, Skeleton } from '@mui/material';

const ImagesSkeleton = () => {
    return (
        <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
            <ImageListItem cols={1} rows={2}>
                <Skeleton variant="rounded" height="300px" animation="wave" />
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <Skeleton variant="rounded" height="140px" animation="wave" />
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <Skeleton variant="rounded" height="140px" animation="wave" />
            </ImageListItem>
            <ImageListItem cols={2} rows={2}>
                <Skeleton variant="rounded" height="300px" animation="wave" />
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
                <Skeleton variant="rounded" height="140px" animation="wave" />
            </ImageListItem>
        </ImageList>
    );
};

export default ImagesSkeleton;
