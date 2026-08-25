export async function RegUser(uname: string, pword: string, pwordverify: string, fname: string, lname: string, email: string) {

        const response = await fetch("https://forgevitahq.com/api/addmember", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: uname,
                password: pword,
                passwordverify: pwordverify,
                fname: fname,
                lname: lname,
                email: email
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.detail || "Registration failed");
        }

        return data;
}
    