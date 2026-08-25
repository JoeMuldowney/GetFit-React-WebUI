import { apiFetch } from "@/utils/apifetch";

export const createMeal = async (payload) => {
  return apiFetch("https://forgevitahq.com/api/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};