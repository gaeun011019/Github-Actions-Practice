const test = require("node:test");
const assert = require("node:assert/strict");
const { calculate } = require("./public/calculator.js");

test("양수를 더한다", () => assert.equal(calculate("2", "3"), 5));
test("음수를 더한다", () => assert.equal(calculate("-2", "3"), 1));
test("소수를 더한다", () => assert.equal(calculate("1.5", "2"), 3.5));
test("0도 유효한 입력이다", () => assert.equal(calculate("0", "0"), 0));
test("어느 입력이든 비어 있으면 거부한다", () => {
  for (const args of [["", "3"], ["2", ""], [" ", "3"]]) {
    assert.throws(() => calculate(...args), /숫자를 입력해주세요/);
  }
});
test("숫자가 아닌 값과 무한대를 거부한다", () => {
  for (const value of ["abc", "Infinity", "NaN"]) {
    assert.throws(() => calculate(value, "2"), /올바른 숫자/);
  }
});
test("계산 결과가 범위를 초과하면 거부한다", () => {
  assert.throws(() => calculate("1e308", "1e308"), /범위를 초과/);
});
