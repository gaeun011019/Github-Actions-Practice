const test = require("node:test");
const assert = require("node:assert/strict");
const { sum } = require("./sum");

test("2와 3을 더하면 5다", () => {
  assert.equal(sum(2, 3), 5);
});
