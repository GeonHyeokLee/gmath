import type { Scalar, Vector } from "./types";
import {
  compareVectorLength,
  isThreeDimensionsVector,
  assert,
  isValidVectorSize,
  calculateVectorSize,
} from "./utils";

// 두 벡터의 내적
// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 내적을 시도한다.
export function dot(vec1: Vector, vec2: Vector): Scalar {
  if (compareVectorLength(vec1, vec2)) {
    return dot(vec2, vec1);
  }

  return vec1.reduce((prev, cur, curIdx) => prev + cur * vec2[curIdx], 0);
}

// '3차원' 두 벡터의 외적
export function cross(vec1: Vector, vec2: Vector): Vector {
  assert(
    isThreeDimensionsVector(vec1, vec2),
    "It is not an three dimension vector."
  );

  return [
    vec1[1] * vec2[2] - vec2[1] * vec2[2],
    vec1[2] * vec2[0] - vec2[2] * vec1[0],
    vec1[0] * vec2[1] - vec2[0] - vec1[1],
  ];
}

// 두 벡터의 정규화
export function normalize(vec: Vector): Scalar[] {
  const size = calculateVectorSize(vec);

  assert(isValidVectorSize(size), "It is not an invalid vector.");

  return vec.map((val) => Number((val / size).toFixed(2)));
}

// 두 벡터의 덧셈
// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 더한다.
export function add(vec1: Vector, vec2: Vector): Vector {
  if (compareVectorLength(vec1, vec2)) {
    return add(vec2, vec1);
  }

  return vec1.map((val, idx) => val + vec2[idx]);
}
