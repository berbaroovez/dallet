import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./InitSupabase";

import router from "next/router";
import { User } from "@supabase/gotrue-js/dist/main/lib/types";

// import { definitions } from "../../types/supabase";
interface AuthInterface {
  // loggedIn: boolean;
  signIn: (
    username: string

    // signingUp: boolean
  ) => {};
  signUp: (username: string) => {};
  signOut: () => {};
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthInterface>(null!);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Here", event, session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const signUp = async (email: string) => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
    });

    if (error) {
      console.log(error);
      return;
    }

    const insertInfo = await supabase.from("profile").insert([
      {
        id: user?.id,
        email: email,
      },
    ]);

    if (insertInfo.error) {
      console.log(insertInfo.error);
      return;
    }
  };
  const signIn = async (email: string) => {
    const { user, session, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log(error);
      return;
    }

    router.push("/dashboard");
  };

  const value = {
    signIn,
    signUp,
    signOut: () => supabase.auth.signOut(),
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
