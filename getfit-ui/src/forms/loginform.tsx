
import { useState } from "react";
import type { SyntheticEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/services/auth";
import { useUser } from "@/context/usercontext";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function LoginForm(){
    const [uname, setUname] = useState<string>("");
    const [pword, setPword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    
    const { loadUser } = useUser();
    const navigate = useNavigate();


    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError(""); 
        try {
            const data = await loginUser(uname, pword);

            // store token (UI responsibility stays here)
            localStorage.setItem("getfitusertoken", data.access_token);
            await loadUser();

            navigate("/home");
            setSuccess("Login successfull!");
        } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("Login failed");
        }
      }
        };

return (
    <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">GetFit ~ StayFit</CardTitle>
          <CardDescription>Enter your credentials to access your fitness panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 text-sm text-green-500 bg-green-50 border border-green-200 rounded-md">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your username"
                value={uname}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUname(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={pword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t pt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Register here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
export default LoginForm;