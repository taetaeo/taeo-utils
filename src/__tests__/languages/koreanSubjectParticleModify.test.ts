import { koreanSubjectParticleModifyer } from "../../helpers";

describe("koreanSubjectParticleModifyer", () => {
  it(`입력 -> '사람'
      결과 -> '사람이'`, () => {
    const result = koreanSubjectParticleModifyer("사람");
    expect(result).toEqual("사람이");
  });

  it(`입력 -> '책'
      결과 -> '책이'`, () => {
    const result = koreanSubjectParticleModifyer("책");
    expect(result).toEqual("책이");
  });

  it(`입력 -> '하늘'
      결과 -> '하늘이'`, () => {
    const result = koreanSubjectParticleModifyer("하늘");
    expect(result).toEqual("하늘이");
  });

  it(`입력 -> '나무'
      결과 -> '나무가'`, () => {
    const result = koreanSubjectParticleModifyer("나무");
    expect(result).toEqual("나무가");
  });

  it(`입력 -> '강아지'
      결과 -> '강아지가'`, () => {
    const result = koreanSubjectParticleModifyer("강아지");
    expect(result).toEqual("강아지가");
  });

  it(`입력 -> 'abc'
      결과 -> 'null'`, () => {
    const result = koreanSubjectParticleModifyer("abc");
    expect(result).toEqual(null);
  });
});
