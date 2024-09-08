import { extractionOnlyAlphabet } from "../../helpers";

describe("extractionOnlyAlphabet", () => {
  it(`입력 -> 'abcd'
      결과 -> 'abcd`, () => {
    const result = extractionOnlyAlphabet("abcd");
    expect(result).toBe("abcd");
  });

  it(`입력 -> 1234
      결과 -> '오류 발생'`, () => {
    expect(() => extractionOnlyAlphabet(1234)).toThrowError("extractionOnlyString에서 에러 발생했습니다. 오직 문자열 타입만 허락됩니다.");
  });

  it(`입력 -> '1234a'
      결과 -> 'a'`, () => {
    const result = extractionOnlyAlphabet("1234a");
    expect(result).toBe("a");
  });
});
