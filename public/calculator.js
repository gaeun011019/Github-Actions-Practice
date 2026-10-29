// 브라우저와 Node.js 테스트에서 함께 사용하는 계산 로직입니다.
(function (root) {
  function calculate(first, second) {
    if (String(first).trim() === "" || String(second).trim() === "") {
      throw new Error("숫자를 입력해주세요.");
    }
    const a = Number(first);
    const b = Number(second);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("올바른 숫자를 입력해주세요.");
    }
    const result = a + b;
    if (!Number.isFinite(result)) {
      throw new Error("계산 가능한 범위를 초과했습니다.");
    }
    return result;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculate };
  } else {
    root.calculator = { calculate };
  }
})(globalThis);
