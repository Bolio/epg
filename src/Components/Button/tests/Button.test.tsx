import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button component", () => {
  it("should render the children text", () => {
    const text = "Click Me";
    const { getByText } = render(
      <Button handleClick={() => {}}>{text}</Button>
    );
    expect(getByText(text)).toBeInTheDocument();
  });

  it("Should call the handleClick function when clicked", () => {
    const handleClick = jest.fn();
    const text = "Click Me";
    const { getByText } = render(
      <Button handleClick={handleClick}>{text}</Button>
    );

    const buttonElement = getByText(text);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Should apply the background color", () => {
    const text = "Click Me";
    const backgroundcolor = "blue";
    const { getByText } = render(
      <Button handleClick={() => {}} backgroundcolor={backgroundcolor}>
        {text}
      </Button>
    );

    const buttonElement = getByText(text);
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundcolor}`);
  });
});
