import { test, expect } from "@jest/globals";
import { dot, normalize, add, cross } from "./graphics-math";

// Dot Product
test("벡터의 내적을 구하며 반환 값으로 스칼라 값이 나와야한다.", () => {
  const vec3 = [1, 2, 3];
  expect(dot(vec3, vec3)).toBe(14);
});

test("음수 값을 가진 벡터의 내적을 구하며 반환 값으로 동일한 스칼라 값이 나와야한다.", () => {
  const vec3 = [-1, -2, -3];
  expect(dot(vec3, vec3)).toBe(14);
});

test("다른 차원의 두 벡터 내적을 구한다.", () => {
  const vec2 = [1, 2];
  const vec3 = [1, 2, 3];
  expect(dot(vec2, vec3)).toBe(5);
});

// Normalize
test("벡터를 정규화한 결과를 이용하여 내적을 구한다.", () => {
  const vec3 = [1, 1, 1];
  const normalized_vec = [0.577, 0.577, 0.577];

  normalize(vec3).forEach((val, idx) => {
    expect(val).toBeCloseTo(normalized_vec[idx]);
  });

  expect(dot(normalized_vec, normalized_vec)).toBeCloseTo(1);
});

test("벡터의 크기가 0보다 작아서 정규화에 실패한다.", () => {
  const vector = [0, 0, 0];

  expect(() => normalize(vector)).toThrow();
});

// Add
test("두 벡터를 더한다.", () => {
  const vec3 = [1, 2, 3];
  const result = [2, 4, 6];
  expect(add(vec3, vec3)).toEqual(result);
});

test("다른 차원의 두 벡터를 더한다.", () => {
  const vec2 = [1, 2];
  const vec3 = [1, 2, 3];
  const result = [2, 4];
  expect(add(vec2, vec3)).toEqual(result);
});

// Cross Product
test("벡터의 외적을 구한다.", () => {
  const mockVector1 = [2, 3, 10];
  const mockVector2 = [4, 2, 7];
  const mockResultVector = [7, 26, -3];

  expect(cross(mockVector1, mockVector2)).toEqual(mockResultVector);
});

test("3차원이 아닌 벡터의 외적을 시도하여 실패한다.", () => {
  const mockVector1 = [2, 10];
  const mockVector2 = [4, 2, 7];

  expect(() => cross(mockVector1, mockVector2)).toThrow();
});
