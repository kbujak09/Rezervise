import { createFileRoute, redirect } from '@tanstack/react-router'

import Panel from '../components/Panel';

export const Route = createFileRoute('/panel')({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/logowanie'
      })
    }
  },
  component: Panel
})
