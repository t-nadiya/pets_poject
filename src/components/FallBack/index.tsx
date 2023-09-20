import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { BackButton, PageName } from '../styled';
import { ReactComponent as Back } from '../../assets/icons/arrow_left.svg';
import { formatPath } from '../../utilities/formatPath';

const FallBack = ({ bg, color }: FallBackProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pathName, setPathName] = useState('');

    useEffect(() => {
        const path = formatPath(location.pathname);
        setPathName(path);
    }, []);

    const goBack = () => navigate(-1);

    return (
        <Stack direction="row" useFlexGap spacing="10px" mr="10px">
            <BackButton onClick={goBack}>
                <Back />
            </BackButton>
            {pathName && (
                <PageName sx={{ background: bg, color: color }}>
                    <Typography>{pathName}</Typography>
                </PageName>
            )}
        </Stack>
    );
};

export default FallBack;
