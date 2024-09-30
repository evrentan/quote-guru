module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "services/**/*.js",
        "!**/node_modules/**"
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "node"
};
