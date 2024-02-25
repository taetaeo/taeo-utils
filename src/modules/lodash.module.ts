/// <reference types="node" />

/**
 * @description 이 모듈(module)은 무거운 lodash를 경량화 하고자 직접 구현하였습니다.
 */

/**
 * 이 기능은 debounce를 도와주는 기능입니다.
 *
 * ex) 사용 예시
 * import _ from '@modules/lodash.module'
 * const debouncedFunction = _.debounce(testFunction, 1000); // 1000 밀리초(1초) 동안 호출이 지연되도록 도와줍니다.
 * @param {T} func 지연시킨뒤 실행할 함수
 * @param delay  지연시킬 시간 (초)
 * @returns
 */

/**
 * @description
 * 매개변수 함수에 대한 디바운스된(지연된) 버전을 나타내는 타입입니다.
 * 해당 함수는 모든 인수를 받아들이고 반환값이 없습니다.
 */
type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

/**
 * @description
 * 디바운스 로직을 담고 있습니다.
 */
class Debounce {
  // Node.js의 타이머 식별자를 나타내며, 함수 호출 간의 디바운스를 관리합니다.
  private timeoutId: NodeJS.Timeout | undefined;

  /**
   * @description 디바운스된 함수를 생성하는 역할을 합니다.
   * @param {T} func - 디바운스될 함수
   * @param {number} delay - 매개변수는 함수 호출 간의 디바운스 지연 시간
   * @returns {DebouncedFunction} - 인자로 전달된 func를 디바운스하여 실행합니다. 기존에 예약된 타이머가 있다면 취소하고, 새로운 타이머를 예약하여 디바운스 효과를 만듭니다.
   */
  debounce<T extends (...args: any[]) => any>(func: T, delay: number): DebouncedFunction<T> {
    const debouncedFunc: DebouncedFunction<T> = function (this: Debounce, ...args: Parameters<T>) {
      const context = this;

      // 이전에 예약된 타이머를 취소합니다.
      clearTimeout(context.timeoutId);

      // 새로운 타이머를 예약합니다.
      context.timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };

    return debouncedFunc;
  }
}

/** Lodash 모듈 */
export const lodash = {
  debounce: new Debounce().debounce,
};
