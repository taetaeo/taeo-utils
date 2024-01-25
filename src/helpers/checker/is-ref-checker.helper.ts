/**
 * React에서 useRef를 사용할 때, ref의 current가 있는지 체크하는 기능의 함수
 * @param {React.RefObject<any>} ref
 * @returns {boolean} true / false : ref가 있을 경우 true 없을 경우 false
 */

export function isRefCheckerHelper(ref: unknown) {
  console.assert(ref, `isRefCheckerHelper에서 잘못된 매개변수가 입력되었습니다. 입력 :  ${ref}`);

  if (ref && typeof ref === "object" && "current" in ref) {
    const refObject = ref as { current: any };

    console.assert(refObject.current !== undefined && refObject.current !== null, "isRefCheckerHelper에서 에러 발생 : current property is undefined or null");

    if (!refObject.current) return false;
    return true;
  }
  return false;
}
