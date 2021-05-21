import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<App/>);

    const loginUser = screen.getByLabelText(/username/i);
    const loginPass = screen.getByLabelText(/password/i);
    const submit = screen.getByRole(/button/i);
    
    userEvent.type(loginUser, 'Lambda School');
    userEvent.type(loginPass, 'i<3Lambd4');
    
    expect(loginUser).toBeInTheDocument();
    expect(loginPass).toBeInTheDocument();
    
    userEvent.click(submit);

    const colors = screen.queryAllByTestId(/color/i);
    const circle = screen.queryAllByRole(/Circle/i);

    expect(colors).toBeTruthy();
    expect(circle).toBeTruthy();
    
    
  });
//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading