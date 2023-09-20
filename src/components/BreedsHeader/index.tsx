import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, MenuItem, Select, Stack } from '@mui/material';
import { filterImages, selectAllBreeds, setAscOrder, setDscOrder, setLimits } from '../../store/breedsSlice';
import FallBack from '../FallBack';
import { OrderButton, SelectInput } from '../styled';
import { ReactComponent as Asc } from '../../assets/icons/ascending.svg';
import { ReactComponent as Dsc } from '../../assets/icons/descending.svg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            background: '#FFF',
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            borderRadius: '20px',
        },
    },
};

const limits = ['5', '10', '15', '20'];

function BreedsHeader() {
    const dispatch = useDispatch();
    const [selectedBreedId, setSelectedBreedId] = useState('');
    const [limit, setLimit] = useState('');
    const allBreeds: any = useSelector(selectAllBreeds);

    const handleChangeBreed = (event: any) => {
        const currentBreed: string = event.target.value;
        setSelectedBreedId(currentBreed);
        dispatch(filterImages(currentBreed));
    };
    const handleChangeLimit = (event: any) => {
        const currentLimit: string = event.target.value;
        setLimit(currentLimit);
        dispatch(setLimits(currentLimit));
    };

    const handleSetDscOrder = () => {
        dispatch(setDscOrder());
    };

    const handleSetAscOrder = () => {
        dispatch(setAscOrder());
    };

    return (
        <Stack direction="row" spacing={{ justifyContent: 'space-between' }} mb="20px">
            <FallBack bg="#FF868E" color="#FFF" />
            <Stack direction="row" useFlexGap spacing="10px">
                <FormControl sx={{ width: 200 }}>
                    <Select
                        fullWidth
                        displayEmpty
                        value={selectedBreedId}
                        onChange={handleChangeBreed}
                        input={<SelectInput />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem value="">
                            <span>All breeds</span>
                        </MenuItem>
                        {allBreeds.map((breed: Breed) => (
                            <MenuItem key={breed.id} value={breed.id}>
                                {breed.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: 150 }}>
                    <Select
                        fullWidth
                        displayEmpty
                        value={limit}
                        onChange={handleChangeLimit}
                        input={<SelectInput />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem value="">
                            <span>Limit: all</span>
                        </MenuItem>
                        {limits.map((limit: string) => (
                            <MenuItem key={limit} value={limit}>
                                Limit: {limit}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <OrderButton onClick={handleSetDscOrder}>
                    <Dsc />
                </OrderButton>
                <OrderButton onClick={handleSetAscOrder}>
                    <Asc />
                </OrderButton>
            </Stack>
        </Stack>
    );
}

export default BreedsHeader;
