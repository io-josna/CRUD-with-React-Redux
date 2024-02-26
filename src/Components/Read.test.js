import React from 'react';
import { render, screen } from '@testing-library/react';
import Read from './Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { UseDispatch } from 'react-redux';

describe('Read component', () => {
    test('should render "List of Users" heading', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Read />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        );
    
        const heading = screen.getByText('Detail of User');
        expect(heading).toBeInTheDocument();
    })
});
