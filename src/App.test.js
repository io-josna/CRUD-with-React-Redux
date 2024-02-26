import { render, screen } from '@testing-library/react';
import App from './App';
import{BrowserRouter,Routes,Route}from  "react-router-dom"
// import axios from "axios"
describe('App component', () => {
  
  test('should render the Home component for the "/" route', () => {
    render(<App />);
    const homeElement = screen.getByText(/List of Users/i);
    expect(homeElement).toBeInTheDocument();
  });

});