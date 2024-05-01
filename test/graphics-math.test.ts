import { Scalar, Vector, dot } from "../dist/graphics-math";

// Find the inner product of the three-dimensional vector, and a scalar value must be obtained as a return value.
test("3차원 벡터의 내적을 구하며 반환 값으로 스칼라 값이 나와야합니다.", () => {
  const vec3 = [1, 2, 3] as Vector;
  expect(dot(vec3, vec3)).toBe(14 as Scalar);
});
