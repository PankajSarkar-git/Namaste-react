import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appstore from "../../utills/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"


test("should render with a log in button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


   const loginButton = screen.getByRole("button", {name: "Log In"});
  //const loginButton = screen.getByText("Log In");
  
  expect(loginButton).toBeInTheDocument();


});
test("should render with cart items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


   const cart0 = screen.getByText(/Cart/);

  
  expect(cart0).toBeInTheDocument();


});
test("should change log in button to logout onlick render with header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


   const logIn = screen.getByRole("button", {name: "Log In"});
    fireEvent.click(logIn);
    const logOut = screen.getByRole("button", {name : "Log Out"})
  
  expect(logOut).toBeInTheDocument();


});
