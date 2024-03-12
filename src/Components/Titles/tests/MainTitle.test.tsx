import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MainTitle from "../MainTitle";

describe("MainTitle component", () => {
  it("Should render the children text", () => {
    const text = "Hello World";
    const { getByText } = render(<MainTitle>{text}</MainTitle>);
    const titleElement = getByText(text);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });
});
