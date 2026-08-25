import { apiFetch } from "@/utils/apifetch";

interface MealPayload {
  meal_items: Record<string, number>;
}

export const createMeal = async (payload: MealPayload) => {
  return apiFetch("https://forgevitahq.com/api/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};