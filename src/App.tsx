import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import CatLayout from './components/CatLayout';
import Voting from './pages/Voting';
import Breeds from './pages/Breeds';
import BreedInfo from './pages/BreedInfo';
import Gallery from './pages/Gallery';
import Likes from './pages/Likes';
import Favourites from './pages/Favourites';
import Dislikes from './pages/Dislikes';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cat" element={<CatLayout />}>
                        <Route path="voting" element={<Voting />} />
                        <Route path="breeds" element={<Breeds />} />
                        <Route path="breeds/:breedId" element={<BreedInfo />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="likes" element={<Likes />} />
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="dislikes" element={<Dislikes />} />
                        <Route path="search/:breedId" element={<Search />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
