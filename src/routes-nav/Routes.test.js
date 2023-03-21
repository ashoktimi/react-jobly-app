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
          <Routers />
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
          <Routers />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});



test('NavBar component renders correctly', () => {
  const { container } = render(
  <MemoryRouter>
    <UserProvider>
      <NavBar />
    </UserProvider>   
  </MemoryRouter>  
  );
  expect(container).toMatchSnapshot();
});

test('Company component renders correctly', () => {
  const { container } = render(
   <MemoryRouter>
    <UserProvider>
     <Company />
    </UserProvider>   
  </MemoryRouter> 
  );
  expect(container).toMatchSnapshot();
});


test('Routes to login page', () => {
  const { getByText } = render(
    <MemoryRouter>
     <UserProvider>
      <Login />
    </UserProvider>  
    </MemoryRouter>
  );
  expect(getByText("Log In")).toBeInTheDocument();
});