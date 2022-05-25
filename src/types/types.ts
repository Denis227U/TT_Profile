export type GetNames<FromType, KeepType = any, Include = true> = {
  [K in keyof FromType]: FromType[K] extends KeepType
    ? Include extends true
      ? K
      : never
    : Include extends true
    ? never
    : K;
}[keyof FromType];
