// src/helpers/checker/is-alpahbet-checker.helper.ts
function isAlpahbetCheckerHelper(alpahbet) {
  const isValid = /^[a-zA-Z\s]+$/.test(alpahbet);
  console.assert(typeof isValid === "boolean", `\uACB0\uACFC : ${alpahbet} \uD655\uC778\uC774 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.`);
  return isValid;
}

// src/helpers/checker/equal-value-checker.helper.ts
function equalValueCheckerHelper(value1, value2) {
  if (value1 !== value2)
    return false;
  return true;
}

// src/helpers/date/date-plus-year.helper.ts
function datePlusYearHelper(inputDate, plusYear = 2) {
  try {
    console.assert(!inputDate, `\uACB0\uACFC : datePlusYearHelper\uC5D0\uC11C ${inputDate} \uD655\uC778\uC774 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.`);
    if (!inputDate)
      return;
    let currentDate = new Date(inputDate);
    if (typeof currentDate === "number" && isNaN(currentDate))
      throw new Error("\uC62C\uBC14\uB978 \uB0A0\uC9DC \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    currentDate.setFullYear(currentDate.getFullYear() + plusYear);
    const needToKnowafterYears = currentDate.toLocaleString("ko-KR");
    return needToKnowafterYears;
  } catch (error) {
    if (error instanceof Error) {
      console.error("\uB0A0\uC9DC\uB97C \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4:", error.message);
    } else {
      console.error("\uB0A0\uC9DC\uB97C \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
    }
    return "0000-00-00";
  }
}
export {
  datePlusYearHelper,
  equalValueCheckerHelper,
  isAlpahbetCheckerHelper
};
//# sourceMappingURL=index.js.map
