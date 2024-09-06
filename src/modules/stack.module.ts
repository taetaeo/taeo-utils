/**
 * 제네릭 타입을 적용한 배열을 다루는 기본 클래스입니다.
 * @template A - 배열 요소의 타입을 나타내는 제네릭 타입 매개변수입니다.
 */
class TaeoArray<A> {
  /**
   * 제네릭 타입을 받아와 배열 타입을 적용하는 생성자입니다.
   * @param {A[]} items - 초기 배열을 전달받습니다.
   */
  constructor(protected items: A[]) {}
}

/**
 * TaeoArray를 확장한 스택(Stack) 클래스입니다.
 * @template S - 스택 요소의 타입을 나타내는 제네릭 타입 매개변수입니다.
 */
class Stack<S> extends TaeoArray<S> {
  /**
   * 스택에 요소를 추가합니다.
   * @param {S} item - 스택에 추가할 요소입니다.
   */
  push(item: S) {
    this.items.push(item);
  }

  /**
   * 스택에서 요소를 제거하고 반환합니다.
   * @returns {S | undefined} - 제거된 요소 또는 스택이 비어있는 경우 undefined를 반환합니다.
   */
  pop(): S | undefined {
    return this.items.pop();
  }
}

export default Stack;
