import { dateToKoreanString, UnitsType } from "../../helpers";

describe("dateToKoreanString", () => {
  it(`입력 -> '2023-11-09', 기본 유닛
      결과 -> '2023년 11월 9일'`, () => {
    const result = dateToKoreanString("2023-11-09");
    expect(result).toBe("2023년 11월 9일");
  });

  it(`입력 -> '2000-01-01', 기본 유닛
      결과 -> '2000년 1월 1일'`, () => {
    const result = dateToKoreanString("2000-01-01");
    expect(result).toBe("2000년 1월 1일");
  });

  it(`입력 -> '1995-05-15', 사용자 정의 유닛
      결과 -> '1995년 5일 15월'`, () => {
    const customUnits: UnitsType = { year: "년", month: "일", day: "월" };
    const result = dateToKoreanString("1995-05-15", customUnits);
    expect(result).toBe("1995년 5일 15월");
  });

  it(`입력 -> '2023/12/25', 기본 유닛
      결과 -> '2023년 12월 25일'`, () => {
    const result = dateToKoreanString("2023/12/25");
    expect(result).toBe("2023년 12월 25일");
  });

  it(`입력 -> 빈 문자열('')
      결과 -> 오류 발생`, () => {
    expect(() => dateToKoreanString("")).toThrowError("dateToStringHelper's Error 1 : 날짜가 제공되지 않았습니다.");
  });

  it(`입력 -> 잘못된 날짜 형식('invalid-date')
      결과 -> '오류 발생'`, () => {
    expect(() => dateToKoreanString("invalid-date")).toThrowError("유효하지 않은 날짜 형식입니다.");
  });

  it(`입력 -> '2023-02-29', 존재하지 않는 날짜 
      결과 -> '2023년 3일 1월'`, () => {
    const result = dateToKoreanString("2023-02-29");
    expect(result).toBe("2023년 3월 1일");
  });
});
