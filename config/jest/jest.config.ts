export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  rootDir: "../..",
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  coveragePathIgnorePatterns: ["/node_modules/"],
};
