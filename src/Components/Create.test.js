import Create from "./Create";
import { render, screen,fireEvent ,getByLabelText} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../Redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userEvent from '@testing-library/user-event'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));
  
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
describe('Create component', () => {
    test('should render the Add a User heading', () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Create />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        );
        const headingElement = screen.getByText(/Add a User/i);
        expect(headingElement).toBeInTheDocument();
    });
    test('should submit the form correctly', () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Create />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        );
        fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Josna' } });
        fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'josna@gmail.com' } });
        fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '959107458911' } });
    });
});
