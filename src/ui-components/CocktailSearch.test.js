import React from "react";
import { render, screen, fireEvent, act, mount } from "@testing-library/react";
import CocktailSearch from "./CocktailSearch";
import "@testing-library/jest-dom";

describe("CocktailSearch", () => {
  test("renders the CocktailSearch component", () => {
    render(<CocktailSearch />);
    const cocktailSearchBox = screen.getByRole("textbox", {
      name: /Search for a Cocktail:/i,
    });
    const cocktailSearchButton = screen.getByRole("button", {
      name: /Search/i,
    });

    expect(cocktailSearchBox).toBeInTheDocument();
    expect(cocktailSearchButton).toBeInTheDocument();
  });

  test("handles form submission correctly", async () => {
    const promise = Promise.resolve();
    const mockFetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ drinks: [] }) })
    );
    global.fetch = mockFetch;
    render(<CocktailSearch />);
    const input = screen.getByLabelText("Search for a Cocktail:");
    const submitButton = screen.getByRole("button", { name: "Search" });
    fireEvent.change(input, { target: { value: "Mojito" } });
    fireEvent.click(submitButton);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito"
    );
    await act(async () => {
      await promise;
    });
  });
});
