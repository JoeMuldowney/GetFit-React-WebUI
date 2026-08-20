import { useState } from "react";

interface NutritionRow {
  id: number;
  [key: string]: string | number;
}

export function useNutritionRows(
  name: string,
  amount: string
) {
  const [items, setItems] = useState<NutritionRow[]>([
    {
      id: 1,
      [name]: "",
      [amount]: "",
    },
  ]);

  const addRow = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        [name]: "",
        [amount]: "",
      },
    ]);
  };

  const removeRow = (id: number) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const updateItem = (
    id: number,
    field: string,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      )
    );
  };

  return {
    items,
    addRow,
    removeRow,
    updateItem,
  };
}