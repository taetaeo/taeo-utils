export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

export interface ClassDictionary {
  [key: string]: boolean | undefined | null;
}

export interface ClassArray extends Array<ClassValue> {}

// 이 함수는 다양한 형태의 클래스 값을 받아서 문자열로 반환함
export function classNames(...args: ClassValue[]): string {
  const classes: string[] = []; // 클래스명을 담을 배열

  // 각 인자를 처리하는 루프
  args.forEach((arg) => {
    if (!arg) return; // 인자가 null, undefined, false일 경우 무시

    const argType = typeof arg; // 인자의 타입을 확인

    // 인자가 문자열이거나 숫자일 경우
    if (argType === "string" || argType === "number") {
      classes.push(arg.toString()); // 문자열로 변환 후 배열에 추가
    }
    // 인자가 배열일 경우
    else if (Array.isArray(arg)) {
      classes.push(classNames(...arg)); // 배열 내부를 재귀적으로 처리
    }
    // 인자가 객체일 경우
    else if (argType === "object") {
      Object.keys(arg).forEach((key) => {
        // 타입 단언으로 arg가 ClassDictionary라고 명시하고,
        // 값이 true인 키만 배열에 추가
        if ((arg as ClassDictionary)[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" "); // 모든 유효한 클래스명을 공백으로 구분하여 문자열로 반환
}
