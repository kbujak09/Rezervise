import { RouterProvider, createRouter } from '@tanstack/react-router';
import { useState, useEffect } from "react";

import { routeTree } from './routeTree.gen';
import { supabase } from "./lib/supabase.ts";

const router = createRouter({ routeTree, context: { isAuthenticated: false } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Błąd pobierania sesji: ', error.message);
        setIsAuthenticated(false);
      }
      else {
        setIsAuthenticated(!!data.session);
      }

      setIsLoading(false);
    }

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session)
    })

    checkSession().catch(console.error);

    return () => {
      data.subscription.unsubscribe();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <RouterProvider router={router} context={{isAuthenticated}} />
  )
}

export default App