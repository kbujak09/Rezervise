import { useState, useEffect } from 'react';

import { supabase } from "../lib/supabase.ts";

export default function useUser() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const  { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      }
      else {
        return;
      }
    }

    fetchUser()
      .catch(console.error)
      .finally(setLoading(false));
  }, []);

  return { loading, user };
}