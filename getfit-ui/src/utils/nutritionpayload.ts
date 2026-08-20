type StringKey<T> = keyof T;

type AmountKey<T> = keyof T;

export function BuildPayload<T extends Record<string, string | number>>(
  items: T[],
  nameField: StringKey<T>,
  amountField: AmountKey<T>
): Record<string, number> {
  return Object.fromEntries(
    items
      .filter(
        (item) =>
          String(item[nameField]).trim() !== "" &&
          Number(item[amountField]) > 0
      )
      .map((item) => [
        String(item[nameField]).trim(),
        Number(item[amountField]),
      ])
  );
}