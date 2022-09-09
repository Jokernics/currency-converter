export function format(arg: number): string {
  let result = arg.toFixed(4);
  if (arg <= 0) result = '0';

  return result;
}
