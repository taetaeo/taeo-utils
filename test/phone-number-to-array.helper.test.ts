// 테스트 라이브러리 또는 프레임워크를 사용하지 않고 간단한 테스트 코드 예제

import { phoneNumberToArrayHelper } from "../src/helpers/form/phone-number-to-array.helper";

describe("phoneNumberToArrayHelper", () => {
  it("should convert 10-digit phone number to array", () => {
    const result = phoneNumberToArrayHelper("0101234567");
    expect(result).toEqual(["010", "123", "4567"]);
  });

  it("should convert 11-digit phone number to array", () => {
    const result = phoneNumberToArrayHelper("01012345678");
    expect(result).toEqual(["010", "1234", "5678"]);
  });

  it("should handle empty input", () => {
    const result = phoneNumberToArrayHelper("");
    expect(result).toEqual([]);
  });

  it("should handle invalid input", () => {
    // Add more test cases for invalid inputs
    // For example:
    // const result = phoneNumberToArrayHelper('invalidPhoneNumber');
    // expect(result).toEqual([]);
  });
});
