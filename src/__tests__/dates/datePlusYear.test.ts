import { datePlusYear } from "../../helpers";

describe("datePlusYear는 특정 년도에서 두 번째 파라미터 값을 추가한 년도를 반환하는 함수입니다. ", () => {
  it(`입력 -> '2023-11-09 14:33:51', 2년 추가
      결과 -> '2025' `, () => {
    const result = datePlusYear("2023-11-09 14:33:51", 2);
    expect(result).toContain("2025");
  });

  it(`입력 -> '2020-01-01 00:00:00', 5년 추가
      결과 -> '2025'`, () => {
    const result = datePlusYear("2020-01-01 00:00:00", 5);
    expect(result).toContain("2025");
  });

  it(`입력 -> '2010-05-15 10:20:30', 10년 추가
      결과 -> '2020'`, () => {
    const result = datePlusYear("2010-05-15 10:20:30", 10);
    expect(result).toContain("2020");
  });

  it(`입력 -> '2023-11-09 14:33:51', 0년 추가
      결과 -> '2023'`, () => {
    const result = datePlusYear("2023-11-09 14:33:51", 0);
    expect(result).toContain("2023");
  });

  it(`입력 -> 빈 문자열('')
      결과 -> 'null'`, () => {
    const result = datePlusYear("", 2);
    expect(result).toBeNull();
  });

  it(`입력 -> 잘못된 날짜 형식('invalid-date')
      결과 -> 'invalid-date'`, () => {
    const result = datePlusYear("invalid-date", 2);
    expect(result).toEqual("Invalid Date");
  });

  it(`입력 -> '2023-11-09 14:33:51', plusYear 파라미터 생략 
      결과 -> '2025'`, () => {
    const result = datePlusYear("2023-11-09 14:33:51");
    expect(result).toContain("2025");
  });
});
