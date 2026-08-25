import {Button} from "@/components/ui/button";
import type { SyntheticEvent, ChangeEvent} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegUser } from "@/services/registerservice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function RegisterForm(){
    const [uname, setUname] = useState<string>("");
    const [pword, setPword] = useState<string>("");
    const [pwordverify, setPwordVerify] = useState<string>("");  
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [email, setEmail] = useState<string>("");   
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
          setError("");
            setSuccess("");
        try {
            await RegUser(
            uname,
            pword,
            pwordverify,
            fname,
            lname,
            email
            );

            setSuccess("Account created successfully!");
        }catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Failed to register");
          }
        }
        };
    return(

        <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>Gain unlimited access by creating an account</CardDescription>
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
                placeholder="create a username"
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
                <div className="space-y-2">
                <Label htmlFor="confirmpassword">Confirm Password</Label>
                <Input
                id="confirmpassword"
                type="password" 
                placeholder="••••••••"
                value={pwordverify} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPwordVerify(e.target.value)}
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="firstname">First Name </Label>
                <Input 
                id="firstname"
                type="text"
                value={fname}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFname(e.target.value)}
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="lastname">Last Name </Label>
                <Input 
                id="lastname"
                type="text"
                value={lname} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLname(e.target.value)}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                id="email"
                type="text"
                placeholder=""
                value={email} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                </div>
  
         
             <Button type="submit" className="w-full mt-2">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t pt-4">
          <p className="text-sm text-muted-foreground">
            Have an account?{" "}
            <Link to="/" className="text-primary font-medium hover:underline">
              Login here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    )





}
export default RegisterForm;