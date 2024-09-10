import { classNames } from "../../utils";

describe("classNames", () => {
  test(`입력 -> 'btn', "btn-primary"
        결과 -> 'btn btn-primary'`, () => {
    expect(classNames("btn", "btn-primary")).toBe("btn btn-primary");
  });

  test(`입력 -> 123, "btn"
        결과 -> '123 btn'`, () => {
    expect(classNames(123, "btn")).toBe("123 btn");
  });

  test(`입력 -> { btn: true, "btn-primary": false }
        결과 -> 'btn'`, () => {
    expect(classNames({ btn: true, "btn-primary": false })).toBe("btn");
  });

  test(`입력 -> ["btn", "btn-primary", false]
        결과 -> 'btn btn-primary'`, () => {
    expect(classNames(["btn", "btn-primary", false])).toBe("btn btn-primary");
  });

  test(`입력 -> "btn", { "btn-primary": true }, [null, "extra-class"]
        결과 -> "btn btn-primary extra-class"`, () => {
    expect(classNames("btn", { "btn-primary": true }, [null, "extra-class"])).toBe("btn btn-primary extra-class");
  });
});
