import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './index';
import { linksData } from '../consts';
import { render } from '../../utilities/test-utils';

describe('Navigation Component', () => {
    beforeEach(() => {
        render(<Navigation />);
    });

    it('should render logo', () => {
        const logo = screen.getByAltText('logo');

        expect(logo).toBeInTheDocument();
    });

    it('should render <h1> heading', () => {
        const header = screen.getByRole('heading', { level: 1 });
        expect(header).toBeInTheDocument();
    });

    it('should render 3 navigation butttons', () => {
        const links = screen.getAllByRole('link');

        expect(links).toHaveLength(3);
    });

    it('should render correct navigation button text', () => {
        linksData.forEach((link) => {
            const navButton = screen.getByText(link.title);

            expect(navButton).toBeInTheDocument();
        });
    });

    it('should navigate to correct path', () => {
        // await waitFor(() => {
        linksData.forEach(async (link) => {
            const navButton = screen.getByText(link.title);
            act(() => {
                userEvent.click(navButton);
            });

            await waitFor(() => {
                expect(window.location.pathname).toBe(link.path);
            });
        });
        // });
    });
});
