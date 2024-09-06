/**
 *
 * 한국어의 조사에 대하여 어순에 맞게 변형을 도와주는 함수
 * 받침이 있을 경우 '이' 받침이 없을 경우 '가' 가 출력 되도록 한다.
 *
 * @param {string} korean - 조사가 필요한 한국어의 주어
 * @returns {string} 결과값으로 한국어의 조사에 '가/이'가 붙어서 출력이 된다.
 */
export function koreanSubjectParticleModifyer(korean: string): string | null {
  const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (!pattern.test(korean)) return null;

  // name의 마지막 음절의 유니코드(UTF-16)
  const charCode = korean.charCodeAt(korean.length - 1);

  // 유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  let particle: string;

  if (consonantCode === 0) {
    // 0이면 받침 없음 -> 가
    particle = "가";
  } else {
    // 1이상이면 받침 있음 -> 이
    particle = "이";
  }

  // 결과값으로 한국어의 조사에 '가/이'가 붙어서 출력
  const result = `${korean}${particle}`;

  // 예상과 다를 경우 에러를 출력
  // console.assert(result === koreanSubjectParticleModifyer(korean), `결과 실패: 한국어(${korean}) 가 입력되어 예상치 못한 결과가 발생했습니다.`);

  return result;
}
