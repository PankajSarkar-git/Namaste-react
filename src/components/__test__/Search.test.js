import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import mockResListData from "../mocksdata/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockResListData);
    },
  });
});

test("should search resturent list for American text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const allCard = screen.getAllByTestId("testCardDiv");
  expect(allCard.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const sesrchInput = screen.getByTestId("searchInput");
  fireEvent.change(sesrchInput, { target: { value: "American" } });
  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("testCardDiv");
  expect(card.length).toBe(3);
});
test("should search resturent list for American text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const allCard = screen.getAllByTestId("testCardDiv");
  expect(allCard.length).toBe(20);
  const TopRestaurantBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });
  fireEvent.click(TopRestaurantBtn);
  const card = screen.getAllByTestId("testCardDiv");
//   console.log(card);
  expect(card.length).toBe(6);
});
