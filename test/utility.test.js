
const {test} = require('./test');
const {expect} = require('./expect');
const util = require('../function/utility');

console.log("Utility.js 테스트를 시작합니다");
console.log("--------------------------------------------");

test("String Data를 한 문자씩 쪼갠다", () => {
    const testData = "[123, [22], 33]";
    const testResult = util.divideString(testData);
    const answer = ["[","1","2","3",","," ","[","2","2","]",","," ","3","3","]"];
    expect(answer).toBe(testResult);
});

test("String 데이터 맨 앞에 '[' 문자가 있으면 제거한다", () => {
    const testData = "[1,2,3,4,";
    const testResult = util.removeFirstParenthesis(testData);
    const answer = "1,2,3,4,";
    expect(answer).toBe(testResult);
});

test("String 데이터를 판별해 앞, 뒤 공백을 제거한다", () => {
    const testData = "       TEST       ";
    const testResult = util.removeSpace(testData);
    const answer = "TEST";
    expect(answer).toBe(testResult);
});

test("데이터가 공백인지 확인한다", () => {
    const testData = ' ';
    const testResult = util.checkSpace(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 '{' 인지 확인한다", () => {
    const testData = ' ';
    const testResult = util.checkSpace(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 '{' 인지 확인한다", () => {
    const testData = '{';
    const testResult = util.checkStartCurlyBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 '}' 인지 확인한다", () => {
    const testData = '}';
    const testResult = util.checkEndCurlyBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 ',' 인지 확인한다", () => {
    const testData = ',';
    const testResult = util.checkComma(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 '[' 인지 확인한다", () => {
    const testData = '[';
    const testResult = util.checkStartSquareBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 ']' 인지 확인한다", () => {
    const testData = ']';
    const testResult = util.checkEndSquareBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 '{' 인지 확인한다", () => {
    const testData = '{';
    const testResult = util.checkFirstLetterBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 \"\" 인지 확인한다", () => {
    const testData = '';
    const testResult = util.checkNoDataExists(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("데이터가 종료조건(a===b)인지 확인한다", () => {
    const testData1 = 1;
    const testData2 = 1;
    const testResult = util.checkEndCondition(testData1, testData2);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("'[' 문자가 1개 이상 나왔는지 확인한다", () => {
    const testData = 1;
    const testResult = util.checkOneMoreSquareBracket(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("',' 또는 '}' 문자가 있는지 확인한다", () => {
    const testData = ',';
    const testResult = util.checkEndCurlyBracketOrComma(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

test("':' 문자가 있는지 확인한다", () => {
    const testData = ':';
    const testResult = util.checkColon(testData);
    const answer = true;
    expect(answer).toBe(testResult);
});

console.log("--------------------------------------------");
console.log("Utility.js 테스트가 완료되었습니다");