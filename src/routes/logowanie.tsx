import { createFileRoute, redirect } from '@tanstack/react-router';

import Auth from '../features/auth/Auth.tsx';

export const Route = createFileRoute('/logowanie')({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/panel'
      })
    }
  },
  component: Auth
});
