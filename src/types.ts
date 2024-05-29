export type Vector<T extends number[] = number[]> = T;
export type Scalar<T extends number = number> = T;

type Three = 3;
export type Vec3<
  T extends [number, number, number] = [number, number, number]
> = T["length"] extends Three ? T : Vector;
