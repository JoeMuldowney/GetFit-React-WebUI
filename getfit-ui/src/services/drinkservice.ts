import { apiFetch } from "@/utils/apifetch";

export const createDrink = async (payload) => {
  return apiFetch("http://localhost:8000/meal", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};