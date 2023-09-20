import React, { PropsWithChildren, ReactElement } from 'react';
import { render, render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from '../../src/theme';
import imagesReducer from '../store/imagesSlice';
import votingReducer from '../store/votingSlice';
import votesReducer from '../store/votesSlice';
import favouritesReducer from '../store/favouritesSlice';
import breedsReducer from '../store/breedsSlice';

const renderWithProviders = (
    ui: ReactElement,
    {
        initialState = {},
        store = configureStore({
            reducer: {
                images: imagesReducer,
                voting: votingReducer,
                votes: votesReducer,
                favourites: favouritesReducer,
                breeds: breedsReducer,
            },
        }),
        ...renderOptions
    } = {},
) => {
    const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <MemoryRouter>{children}</MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    };

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from '@testing-library/react';
export { renderWithProviders as render };

// import React, { ReactElement } from 'react';
// import { render, RenderOptions } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';

// import theme from '../../src/theme';
// import imagesReducer from '../store/imagesSlice';
// import votingReducer from '../store/votingSlice';
// import votesReducer from '../store/votesSlice';
// import favouritesReducer from '../store/favouritesSlice';
// import breedsReducer from '../store/breedsSlice';

// const store = configureStore({
//     reducer: {
//         images: imagesReducer,
//         voting: votingReducer,
//         votes: votesReducer,
//         favourites: favouritesReducer,
//         breeds: breedsReducer,
//     },
// });

// const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <Provider store={store}>
//             <ThemeProvider theme={theme}>
//                 <MemoryRouter>{children}</MemoryRouter>
//             </ThemeProvider>
//         </Provider>
//     );
// };

// const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
//     render(ui, { wrapper: AllTheProviders, ...options });

// export * from '@testing-library/react';
// export { customRender as render };
