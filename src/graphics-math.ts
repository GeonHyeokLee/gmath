export type Vector = Array<number>;
export type Scalar = number;

function isSameDimensionVector(vec1: Vector, vec2: Vector): boolean {
  return vec1.length === vec2.length;
}

function compareVectorLength(vec1: Vector, vec2: Vector): boolean {
  return vec1.length > vec2.length;
}

function isThreeDimensionVector(vec1: Vector, vec2: Vector): boolean {
  return vec1.length === 3 && vec2.length === 3;
}

// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 내적을 시도합니다.
export function dot(vec1: Vector, vec2: Vector): Scalar {
  if (compareVectorLength(vec1, vec2)) {
    return dot(vec2, vec1);
  }

  return vec1.reduce((prev, cur, curIdx) => prev + cur * vec2[curIdx], 0);
}

// 3차원 벡터의 외적
export function cross(vec1: Vector, vec2: Vector): Vector {
  if (!isThreeDimensionVector(vec1, vec2)) {
    throw new Error("It is not an three dimension vector.");
  }

  return [
    vec1[1] * vec2[2] - vec2[1] * vec2[2],
    vec1[2] * vec2[0] - vec2[2] * vec1[0],
    vec1[0] * vec2[1] - vec2[0] - vec1[1],
  ];
}

// 두 벡터의 정규화
export function normalize(vec: Vector): Vector {
  const size = Math.sqrt(vec.reduce((prev, cur) => prev + cur * cur, 0));

  if (size <= 0) {
    throw new Error("It is not an intact vector.");
  }

  return vec.map((val) => Number((val / size).toFixed(2)));
}

// 두 벡터의 차원이 다를 경우 낮은 차원의 벡터를 기준으로 더합니다.
export function add(vec1: Vector, vec2: Vector): Vector {
  if (compareVectorLength(vec1, vec2)) {
    return add(vec2, vec1);
  }

  return vec1.map((val, idx) => val + vec2[idx]);
}
