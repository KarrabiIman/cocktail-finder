import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  test("renders the App and CocktailSearch component", () => {
    render(<App />);
    const cocktailSearchElement = screen.getByRole("heading", {
      name: /find a cocktail by name/i,
    });
    const cocktailSearchBox = screen.getByRole("textbox", {
      name: /Search for a Cocktail:/i,
    });
    const cocktailSearchButton = screen.getByRole("button", {
      name: /Search/i,
    });

    expect(cocktailSearchElement).toBeInTheDocument();
    expect(cocktailSearchBox).toBeInTheDocument();
    expect(cocktailSearchButton).toBeInTheDocument();
  });
});
