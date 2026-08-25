import { apiFetch } from "@/utils/apifetch";

export const createMeal = async (payload) => {
  return apiFetch("http://forgevitahq/api/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};