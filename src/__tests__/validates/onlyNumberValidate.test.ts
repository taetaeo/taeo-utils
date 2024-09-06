import { onlyNumberValidate } from "../../helpers";

describe("onlyNumberValidate", () => {
  it(`입력 -> '123abc456'
      결과 -> '123456'`, () => {
    const result = onlyNumberValidate("123abc456");
    expect(result).toEqual("123456");
  });

  it(`입력 -> '12 34-56'
      결과 -> '123456'`, () => {
    const result = onlyNumberValidate("12 34-56");
    expect(result).toEqual("123456");
  });

  it(`입력 -> '0987-6543'
      결과 -> '09876543'`, () => {
    const result = onlyNumberValidate("0987-6543");
    expect(result).toEqual("09876543");
  });

  it(`입력 -> 빈문자열('')
      결과 -> ''`, () => {
    const result = onlyNumberValidate("");
    expect(result).toEqual("");
  });

  it(`입력 -> 숫자만 포함된 문자열('1234567890')
      결과 -> '1234567890'`, () => {
    const result = onlyNumberValidate("1234567890");
    expect(result).toEqual("1234567890");
  });

  it(`입력 -> 특수 문자만 포함된 문자열('!@#$%^&*()')
      결과 -> ''`, () => {
    const result = onlyNumberValidate("!@#$%^&*()");
    expect(result).toEqual("");
  });
});
