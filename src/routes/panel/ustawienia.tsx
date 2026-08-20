import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/ustawienia')({
  staticData: {
    title: 'Ustawienia',
    subtitle: 'Panel/Ustawienia'
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/settings"!</div>
}
