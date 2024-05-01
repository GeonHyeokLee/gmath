export type Vector = Array<number>;
export type Scalar = number;

function isSameDimensionVector(vec1: Vector, vec2: Vector): boolean {
  return vec1.length === vec2.length;
}

// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 내적을 시도합니다.
export function dot(vec1: Vector, vec2: Vector): Scalar {
  if (vec1.length > vec2.length) {
    return dot(vec2, vec1);
  }

  return vec1.reduce((prev, cur, curIdx) => prev + cur * vec2[curIdx], 0);
}

export function normalize(vec: Vector): Vector {
  const size = Math.sqrt(vec.reduce((prev, cur) => prev + cur * cur, 0));

  if (size <= 0) {
    throw new Error("It is not an intact vector.");
  }

  return vec.map((val) => Number((val / size).toFixed(2)));
}

// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 더합니다.
export function add(vec1: Vector, vec2: Vector): Vector {
  if (vec1.length > vec2.length) {
    return add(vec2, vec1);
  }

  return vec1.map((val, idx) => val + vec2[idx]);
}
