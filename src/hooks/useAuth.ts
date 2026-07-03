import { useState } from "react";
import { supabase } from "../lib/supabase.ts";

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      return { success: true, data };
    } catch (err: any) {
      setError(err.message === 'Invalid login credentials'
        ? 'Nieprawidłowy login lub hasło'
        : 'Wystąpił błąd podczas logowania.'
      );
      return { success: false, error: err };
    } finally {
       setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}