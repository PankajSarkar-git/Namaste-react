import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import mockreslist from "../mocksdata/mockreslist.json";
import "@testing-library/jest-dom"

test("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resList={mockreslist} />);
  const heading = screen.getByText("Kurry Patta");
  expect(heading).toBeInTheDocument()
});
