import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";


export interface UserProfile {
  id: string;
  fname: string;
  username: string;
  email?: string; 
}


interface UserContextType {
  user: UserProfile | null;
  setUser: Dispatch<SetStateAction<UserProfile | null>>;
  loadUser: () => Promise<void>;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadUser = async (): Promise<void> => {
    const token = localStorage.getItem("getfitusertoken");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://forgevitahq.com/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Invalid token");
      }

      const data: UserProfile = await res.json();
      setUser(data);
    } catch {
      localStorage.removeItem("getfitusertoken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error("useUser must be wrapped inside a <UserProvider>");
  }
  
  return context;
}
export default UserProvider;