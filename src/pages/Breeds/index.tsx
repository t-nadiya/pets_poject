import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import BreedsHeader from '../../components/BreedsHeader';
import {
	Background,
	GreyField,
	ImageHover,
	srcset,
} from '../../components/styled';
import {
	selectBreeds,
	selectBreedsStatus,
	selectBreedsError,
} from '../../store/breedsSlice';
import { getBreeds } from '../../store/thunks';
import noImage from '../../assets/icons/no_image.svg';
import ImagesSkeleton from '../../components/ImagesSkeleton';

const Breeds = () => {
	const dispatch = useDispatch();
	const breeds: any = useSelector(selectBreeds);
	const breedsStatus: string = useSelector(selectBreedsStatus);
	const error: string = useSelector(selectBreedsError);

	useEffect(() => {
		if (!breeds.length) {
			dispatch(getBreeds());
		}
	}, [breeds]);

	return (
		<Background>
			<BreedsHeader />
			{breedsStatus === 'rejected' && error && (
				<Box>
					<Typography>{error}</Typography>
				</Box>
			)}
			{breedsStatus === 'loading' ? (
				<ImagesSkeleton />
			) : breedsStatus === 'resolved' ? (
				<>
					{breeds.length ? (
						<ImageList
							variant='quilted'
							cols={3}
							rowHeight={140}
							gap={20}
						>
							{breeds.map((breed: Breed) => (
								<ImageListItem
									key={breed.id}
									cols={breed.cols}
									rows={breed.rows}
								>
									{breed.image ? (
										<img
											{...srcset(
												breed.image.url,
												140,
												breed.rows,
												breed.cols
											)}
											alt={breed.name}
											loading='lazy'
										/>
									) : (
										<img
											{...srcset(
												noImage,
												140,
												breed.rows,
												breed.cols
											)}
											alt={breed.name}
											loading='lazy'
										/>
									)}
									<ImageHover>
										<NavLink to={`/cat/breeds/${breed.id}`}>
											<Typography>
												{breed.name}
											</Typography>
										</NavLink>
									</ImageHover>
								</ImageListItem>
							))}
						</ImageList>
					) : (
						<GreyField>
							<Typography>No item found</Typography>
						</GreyField>
					)}
				</>
			) : null}
		</Background>
	);
};

export default Breeds;
