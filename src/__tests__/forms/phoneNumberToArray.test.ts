import { phoneNumberToArray } from "../../helpers";

describe("phoneNumberToArrayHelper", () => {
  it(`입력 -> 0101234567 (10자리 수)
      결과 -> ["010", "123", "4567"]`, () => {
    const result = phoneNumberToArray("0101234567");
    expect(result).toEqual(["010", "123", "4567"]);
  });

  it(`입력 -> 01012345678 (11자리 수)
      결과 -> ["010", "1234", "5678"]`, () => {
    const result = phoneNumberToArray("01012345678");
    expect(result).toEqual(["010", "1234", "5678"]);
  });

  it(`입력 -> 빈문자열('')
      결과 -> []`, () => {
    const result = phoneNumberToArray("");
    expect(result).toEqual([]);
  });

  it(`입력 -> 유효하지 않은 값('invalidPhoneNumber'), 
      결과 -> []`, () => {
    const result = phoneNumberToArray("invalidPhoneNumber");
    expect(result).toEqual([]);
  });
});
