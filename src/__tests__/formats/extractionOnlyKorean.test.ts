import { extractionOnlyKorean } from "../../helpers";

describe("extractionOnlyAlphabet", () => {
  it(`입력 -> 'abcd'
      결과 -> ''`, () => {
    const result = extractionOnlyKorean("abcd");
    expect(result).toBe("");
  });

  it(`입력 -> 1234
      결과 -> '오류 발생'`, () => {
    expect(() => extractionOnlyKorean(1234)).toThrowError("extractionOnlyString에서 에러 발생했습니다. 오직 문자열 타입만 허락됩니다.");
  });

  it(`입력 -> '하하234a'
      결과 -> '하하'`, () => {
    const result = extractionOnlyKorean("하하234a");
    expect(result).toBe("하하");
  });
});
