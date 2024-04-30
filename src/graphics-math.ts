type Vec2 = [number, number];
type Vec3 = [number, number, number];
type Vec4 = [number, number, number];
type Vector = Vec2 | Vec3 | Vec4;

type Scalar = number;

function isSameDimensionVector(vec1: Vector, vec2: Vector): boolean {
  return vec1.length === vec2.length;
}

export function dot(vec1: Vector, vec2: Vector): Scalar {
  if (!isSameDimensionVector(vec1, vec2)) {
    throw new Error("Not the same dimension vector.");
  }

  return vec1.reduce((prev, cur, curIdx) => prev + cur * vec2[curIdx], 0);
}

export function normalize(vec: Vector) {
  const size = Math.sqrt(
    Math.abs(vec.reduce((prev, cur) => prev + cur * cur, 0))
  );

  if (size <= 0) {
    throw new Error("It is not an intact vector.");
  }

  return vec.map((val) => val / size);
}
