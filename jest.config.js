module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFiles: [
        './jest/setup.js',
    ],
    globalSetup: './jest/globalJestSetup.ts',
    globalTeardown: './jest/globalJestTeardown.ts'
}
