import { render, screen } from "@testing-library/react";
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
