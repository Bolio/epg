import { convertHoursToMinutes, getHourBeginAndEnd } from "../utilities";

describe("convertHoursToMinutes function", () => {
  it("should convert hours to minutes correctly", () => {
    expect(convertHoursToMinutes("2:30:00")).toBe(150);
    expect(convertHoursToMinutes("1:45:30")).toBe(105.5);
    expect(convertHoursToMinutes("0:15:45")).toBe(15.75);
  });
});

describe("getHourBeginAndEnd function", () => {
  it("Should format the beginning and end times correctly", () => {
    const dateBegin = "2022-01-01T12:30:15Z";
    const dateEnd = "2022-01-01T14:45:30Z";
    expect(getHourBeginAndEnd(dateBegin, dateEnd)).toBe("06:30:15 - 08:45:30");
  });

  it("Should pad single-digit hours, minutes, and seconds with zeros", () => {
    const dateBegin = "2022-01-01T03:05:08Z";
    const dateEnd = "2022-01-01T09:20:05Z";
    expect(getHourBeginAndEnd(dateBegin, dateEnd)).toBe("21:05:08 - 03:20:05");
  });
});
