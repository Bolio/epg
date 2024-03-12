import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChannelCard from "../ChannelCard";

describe("ChannelCard component", () => {
  it("Should render the channel number", () => {
    const number = 123;
    const image = "test-image.jpg";
    const { getByText } = render(<ChannelCard number={number} image={image} />);
    expect(getByText(number.toString())).toBeInTheDocument();
  });

  it("Should render the image", () => {
    const number = 123;
    const image = "test-image.jpg";
    const { getByRole } = render(<ChannelCard number={number} image={image} />);
    const imgElement = getByRole("img");
    expect(imgElement).toHaveAttribute("src", image);
  });
});
