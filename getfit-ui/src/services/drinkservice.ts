import { apiFetch } from "@/utils/apifetch";

export const createDrink = async (payload) => {
  return apiFetch("https://forgevitahq.com/api/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};