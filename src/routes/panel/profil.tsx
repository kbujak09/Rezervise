import { createFileRoute } from '@tanstack/react-router'

import Profile from '../../features/profile/Profile.tsx';

export const Route = createFileRoute('/panel/profil')({
  staticData: {
    title: 'Profil',
    subtitle: 'Panel/Profil'
  },
  component: Profile,
})
