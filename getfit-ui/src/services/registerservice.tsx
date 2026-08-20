export async function RegUser(uname, pword, pwordverify, fname, lname, email) {

        const response = await fetch("http://localhost:8000/addmember", {
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
    