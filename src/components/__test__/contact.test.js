import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";





describe("shoud test contact component", ()=>{


  // beforeAll(()=> {
  //   console.log("beforeAll");
  // })
  // afterAll(()=> {
  //   console.log("afterAll");
  // })
  // afterEach(()=> {
  //   console.log("afterEach");
  // })
  // beforeEach(()=> {
  //   console.log("beforeEach");
  // })
  test('should load contact us page ', () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test('should load button inside contact us page ', () => {
    render(<Contact/>);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test('should load inpute inside contact us page ', () => {
    render(<Contact/>);
    const input = screen.getByPlaceholderText("Full Name");
    expect(input).toBeInTheDocument();
  });
  it('should load all inpute boxes inside contact us page ', () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(4)
  });

})
