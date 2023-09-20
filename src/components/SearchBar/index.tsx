import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import { selectAllBreeds } from '../../store/breedsSlice';
import { SearchIcon } from '../styled';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const allBreeds = useSelector(selectAllBreeds);
    const [breedInfo, setBreedInfo] = useState<null | Breed>(null);

    const handleChange = (event: any, newValue: Breed | null) => {
        setBreedInfo(newValue);
    };

    return (
        <Autocomplete
            options={allBreeds}
            getOptionLabel={(option) => option.name}
            renderInput={(breed) => (
                <TextField
                    {...breed}
                    placeholder="Search for breeds by name"
                    InputProps={{
                        ...breed.InputProps,
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon>
                                    <NavLink to={`/cat/search/${breedInfo?.id}`}>
                                        <Search />
                                    </NavLink>
                                </SearchIcon>
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            popupIcon={null}
            fullWidth
            sx={{ background: '#FFF', borderRadius: '20px' }}
            value={breedInfo}
            onChange={handleChange}
        />
    );
};

export default SearchBar;
