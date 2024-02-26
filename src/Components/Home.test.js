import Home from "./Home";
import { render, screen,waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../Redux/Store";
import{BrowserRouter,Routes,Route}from  "react-router-dom"

describe('Home component', () => {
  
  test('should render "List of Users" heading', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );

    const heading = screen.getByText('List of Users');
    expect(heading).toBeInTheDocument();

});
test('should render Add+ link correctly', () => {
  render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
</Provider>
  );
  const addLink = screen.getByText('Add+');
  expect(addLink).toBeInTheDocument();
  expect(addLink).toHaveClass('btn btn-success');
});
test('should fetch data correctly from the API', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  await waitFor(() => screen.getByRole('table'));
  const table = screen.getByRole('table');
  const columnHeaders = screen.getAllByRole('columnheader');
  expect(columnHeaders[0]).toHaveTextContent('ID');
  expect(columnHeaders[1]).toHaveTextContent('Name');
  expect(columnHeaders[2]).toHaveTextContent('Email');
  expect(columnHeaders[3]).toHaveTextContent('Phone');
  expect(columnHeaders[4]).toHaveTextContent('Actions');
});
test('should render data when data is present', async () => {
 
  jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: jest.fn().mockReturnValue([{
        id: "1",
        name: "Josna",
        username: "josna_reddy",
        email: "josna@gmail.com",
        phone: "959107458911",
        website: "josna.org"
      }])
  }));

  render(
      <Provider store={store}>
          <BrowserRouter>
              <Home />
          </BrowserRouter>
      </Provider>
  );

  await waitFor(() => screen.getByText('Josna'));
  expect(screen.getByText('Josna')).toBeInTheDocument();
  expect(screen.getByText('josna@gmail.com')).toBeInTheDocument();
  expect(screen.getByText('959107458911')).toBeInTheDocument();
});
});