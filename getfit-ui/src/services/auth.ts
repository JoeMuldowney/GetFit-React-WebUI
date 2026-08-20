interface LoginPayload {
  username: string;
  password: string;
}
interface LoginResponse {
  access_token: string;
}

export async function loginUser(username: string, password: string): Promise<LoginResponse> {
    const payload: LoginPayload = { username, password };
    const response = await fetch("http://localhost:8000/findmember", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
    });

    if (!response.ok) {
    throw new Error("Invalid login");
    }

    const data: LoginResponse = await response.json();
    return data;
}