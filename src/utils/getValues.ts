export function getValues<T, R = Partial<Extract<keyof T, string>>>(
  obj: T,
  value: keyof T[keyof T],
): R {
  const resultObj = {} as R;

  for (const key in obj) {
    const element = obj[key];
    Object.defineProperty(resultObj, `${key}`, {
      value: element[value],
      enumerable: true,
      configurable: true,
    });
  }

  return resultObj;
}
