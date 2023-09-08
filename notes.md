**Test Driven Development**

1. npm init
2. npm i jest
3. change the value of "test" to "jest" or "jest --watch" (for active testing with changes) in package.json
4. create test file
5. use describe() method and it() methods to create tests according to specific functionality to test for
6. run the test with $npm test

7. now write functional code in actual file that corresponds to test file to make the tests pass
(TFD up until this point)

(TDD = TFD + refactoring) F = first
8. refactor funcitonal code to be cleaner and still meet the goals and make tests pass


test suites: are a grouping of tests
tests: tests inside the test suite

**Another way to write test.js**
var utils = require('course-utilities);
var app = utils.load('./app.js', 'app');

describe('removeRNames', () => {
    test('should remove all R names', () => {
        const names = ['Rithvik', 'John', 'Ryan', 'Tim', 'Zach'];
        expect(removeRNames()).toBe(['John', 'Tim', 'Zach']);
    });
})

**Expect() method extentions**
.not.
.toBe()
.toHaveProperty()
.toBeLessThanOrEqual()
.toBeGreaterThanOrEqual()
.toMatch()
.toBeCalled()