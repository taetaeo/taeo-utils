export default {
  verbose: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest", "^.+\\.(js|jsx)?$": "babel-jest" },
  moduleNameMapper: { "^@src/(.*)$": "<rootDir>/src/$1" },
  testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  preset: "ts-jest",
  collectCoverage: true,
  // coveragePathIgnorePatterns: ["<rootDir>/src/helpers/", "<rootDir>/src/modules/"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}", // 커버리지를 수집할 파일들
  ],
};
