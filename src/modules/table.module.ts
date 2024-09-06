import type { keyAble } from "../types";

class TableManager {
  private columns: keyAble[] = [];

  constructor(initialHeaders: string[] = []) {
    if (initialHeaders.length > 0) {
      this.createTableColumns(initialHeaders);
    }
  }

  // 열 생성 메서드
  createTableColumns(headers: string[]): keyAble[] {
    if (!headers || headers.length === 0) {
      throw new Error("⚠️ 테이블을 생성할 수 없습니다. - header 설정을 다시 확인해주세요.");
    }

    headers.forEach((header, index) => {
      const column: keyAble = {
        header,
        accessorKey: `col${index}`,
      };

      this.columns.push(column);
    });

    return this.columns;
  }

  // 열의 일반 형식 업데이트 메서드
  updateTableColumn(key: string, options: Partial<keyAble> = {}): void {
    const foundIndex = this.columns.findIndex((column) => column.accessorKey === key);

    if (foundIndex < 0) {
      throw new Error("⚠️ 테이블을 업데이트할 수 없습니다. - Key값을 다시 확인해주세요.");
    }

    const snapshot = this.columns[foundIndex];
    this.columns[foundIndex] = { ...snapshot, ...options };
  }

  updateTableColumnComponent<T>(key: string, Component: T): void {
    const foundIndex = this.columns.findIndex((column) => column.accessorKey === key);

    if (foundIndex < 0) {
      throw new Error("⚠️ 테이블을 업데이트할 수 없습니다. - Key값을 다시 확인해주세요.");
    }

    const snapshot = this.columns[foundIndex];
    this.columns[foundIndex] = { ...snapshot, ...{ cell: Component } };
  }

  // 열 반환 메서드
  getColumns(): keyAble[] {
    return this.columns;
  }

  // 테스트 데이터
  getTestData(length: number = 5, options = { col: "", data: "" }) {
    const dataColumns = this.columns.map((column) => column.accessorKey);

    const column = dataColumns
      .map((data, index) => {
        if (data === "col0") {
          return {
            col0: "",
          };
        } else {
          return {
            [data as string]: "test",
            [options.col]: options.data,
          };
        }
      })
      .reduce((accumulator, current) => {
        return { ...accumulator, ...current };
      }, {});

    return Array.from({ length }, (_, index) => ({ ...column, col0: index + 1 }));
  }

  // column의 clean-up
  cleanup(): void {
    this.columns = [];
  }
}
export default TableManager;
