const { dot, normalize } = require("../dist/graphics-math.cjs");

// Find the inner product of the three-dimensional vector.
// A scalar value must be obtained as a return value.
test("3차원 벡터의 내적을 구하며 반환 값으로 스칼라 값이 나와야한다.", () => {
  const vec3 = [1, 2, 3];
  expect(dot(vec3, vec3)).toBe(14);
});

test("음수 값을 가진 3차원 벡터의 내적을 구하며 반환 값으로 동일한 스칼라 값이 나와야한다.", () => {
  const vec3 = [-1, -2, -3];
  expect(dot(vec3, vec3)).toBe(14);
});

test("3차원 벡터를 정규화한 결과를 이용하여 내적을 구한다.", () => {
  const vec3 = [1, 1, 1];
  const normalized_vec = [0.577, 0.577, 0.577];

  normalize(vec3).forEach((val, idx) => {
    expect(val).toBeCloseTo(normalized_vec[idx]);
  });

  expect(dot(normalized_vec, normalized_vec)).toBeCloseTo(1);
});
