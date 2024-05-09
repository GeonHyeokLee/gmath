import type { Vector } from "./types.ts";

export function isSameDimensionsVector(vec1: Vector, vec2: Vector): boolean {
  return vec1.length === vec2.length;
}

export function compareVectorLength(vec1: Vector, vec2: Vector): boolean {
  return vec1.length > vec2.length;
}

const THREE_DIMENSIONS = 3;
export function isThreeDimensionsVector(vec1: Vector, vec2: Vector): boolean {
  return isSameDimensionsVector(vec1, vec2) && vec1.length === THREE_DIMENSIONS;
}

export function isValidVectorSize(size: number): boolean {
  return size > 0;
}

export function calculateVectorSize(vec: Vector): number {
  return Math.sqrt(vec.reduce((prev, cur) => prev + cur * cur, 0));
}

export function assert(
  checker: unknown,
  errorMessage: string
): asserts checker {
  if (checker === false) {
    throw new Error(errorMessage);
  }
}
