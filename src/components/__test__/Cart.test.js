import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import Mock_Data from "../mocksdata/mockRestauMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});
// it("should load menu component ", async () => {
//   await act(async () =>
//     render(
//         <BrowserRouter>

//       <Provider store={appStore}>
//       <Header/>
//         <RestaurantMenu />
//         <Cart/>
//       </Provider>
//         </BrowserRouter>
//     )
//   );

//   const accordionHeader = screen.getByText("New Launches (10)");
//   fireEvent.click(accordionHeader);
//   const list = screen.getAllByTestId("food-items");
//   const addButtons = screen.getAllByRole("button", {name: "ADD +"});
//   const cart = screen.getByText("Cart - 0");
//   fireEvent.click(addButtons[0]);
//   const cart1 = screen.getByText("Cart - 1");
//   expect(addButtons.length).toBe(10);
// });
it("should load menu component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("New Launches (10)");
  fireEvent.click(accordionHeader);
  const list = screen.getAllByTestId("food-items");
  const addButtons = screen.getAllByRole("button", { name: "ADD +" });
  const cart = screen.getByText("Cart - 0");
  console.log(list.length);
//   fireEvent.click(addButtons[1]);
//   fireEvent.click(addButtons[2]);
//   fireEvent.click(addButtons[3]);
//   fireEvent.click(addButtons[4]);
//   const cart1 = screen.getByText("Cart - 4");
});

it("should load menu component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("New Launches (10)");
  fireEvent.click(accordionHeader);
  const list = screen.getAllByTestId("food-items");
  const addButtons = screen.getAllByRole("button", { name: "ADD +" });
  const cart = screen.getByText("Cart - 0");
  console.log(list.length);
  fireEvent.click(addButtons[1]);
  fireEvent.click(addButtons[2]);
  fireEvent.click(addButtons[3]);
  fireEvent.click(addButtons[4]);
  const cart1 = screen.getByText("Cart - 4");
  //expect(list.length).toBe(10);
  
  fireEvent.click(screen.getByRole("button",{name: "Cler Cart"}));
  const cart4 = screen.getByText("Cart - 0");

});
