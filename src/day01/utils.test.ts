import { getNumber } from "./utils";

describe("getNumber", () => {
  it("should return 98 for input '9528'", () => {
    expect(getNumber("9528")).toBe(98);
  });

  it("should return 42 for input '47nineljpdzqrgp82'", () => {
    expect(getNumber("47nineljpdzqrgp82")).toBe(42);
  });

  it("should return 97 for input '9ppcbgxxdztseven'", () => {
    expect(getNumber("9ppcbgxxdztseven")).toBe(97);
  });

  it("should return 96 for input '4zskckqtmcjhdtwopjstbcnhlrrgvnhlrftwo6'", () => {
    expect(getNumber("4zskckqtmcjhdtwopjstbcnhlrrgvnhlrftwo6")).toBe(96);
  });

  it("should return 41 for input '43four1'", () => {
    expect(getNumber("43four1")).toBe(41);
  });

  it("should return 73 for input '7qgd23'", () => {
    expect(getNumber("7qgd23")).toBe(73);
  });

  it("should return 47 for input 'smfrpdvjjgfour2threesevenbprnjvdmpqqq'", () => {
    expect(getNumber("smfrpdvjjgfour2threesevenbprnjvdmpqqq")).toBe(47);
  });

  it("should return 56 for input 'fivelrnt6fhrnxqmtnprzp'", () => {
    expect(getNumber("fivelrnt6fhrnxqmtnprzp")).toBe(56);
  });

  it("should return 55 for input 'fivenjskjsnf'", () => {
    expect(getNumber("fivenjskjsnf")).toBe(55);
  });
});
