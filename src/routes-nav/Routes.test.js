import React from "react";
import { render } from "@testing-library/react";
import Routers from "./Routers";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testUtils";
import NavBar from './NavBar';
import Company from '../companies/Company';
import Login from '../auth/LoginForm';
import CompanyList from '../companies/CompanyList';

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Routers />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Routers />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});


describe('Routers component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Routers />);
    expect(asFragment()).toMatchSnapshot();
  });
});


describe('Routers component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Routers />);
    expect(getByText('Jobly')).toBeInTheDocument();
  });
});

test('NavBar component renders correctly', () => {
  const { container } = render(<NavBar />);
  expect(container).toMatchSnapshot();
});

test('Company component renders correctly', () => {
  const { container } = render(<Company />);
  expect(container).toMatchSnapshot();
});


test('Routes to login page', () => {
  const { getByText } = render(
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  );
  const linkElement = getByText(/Login/i);
  fireEvent.click(linkElement);
  expect(getByText(/Login/i)).toBeInTheDocument();
});



test('Routes to companies page', () => {
  const { getByText } = render(
    <Router>
      <Route path="/companies" component={CompanyList} />
    </Router>
  );
  const linkElement = getByText(/Companies/i);
  fireEvent.click(linkElement);
  expect(getByText(/Companies/i)).toBeInTheDocument();
});