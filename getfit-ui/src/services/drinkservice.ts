import { apiFetch } from "@/utils/apifetch";

interface DrinkPayload {
  drink_items: Record<string, number>;
}

export const createDrink = async (payload: DrinkPayload) => {
  return apiFetch("https://forgevitahq.com/api/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};