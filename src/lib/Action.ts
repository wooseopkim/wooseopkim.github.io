export type Action = Partial<{
  opens: `${string}:${string}`;
  contains: string;
}>;

export function composite(protocol: `${string}:`, value: string): Action {
  return {
    opens: `${protocol}${value}`,
    contains: value,
  };
}
