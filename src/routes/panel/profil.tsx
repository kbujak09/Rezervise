import { createFileRoute } from '@tanstack/react-router'

import Profile from '../../features/panel/components/Profile.tsx';

export const Route = createFileRoute('/panel/profil')({
  staticData: {
    title: 'Profil',
    subtitle: 'Panel/Profil'
  },
  component: Profile,
})
