import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it("renders home with name", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Narley Almeida/i })).toBeDefined();
  });
});
