import { fireEvent, render, screen,waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../Redux/Store";
import{BrowserRouter,Routes,Route}from  "react-router-dom"
import Update from "./Update";
import axios from 'axios';
jest.mock('axios');
describe('Update component', () => {
  
  test('should render "Update User" heading', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Update />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
    const heading = screen.getByText('Update User');
    expect(heading).toBeInTheDocument();
})

})