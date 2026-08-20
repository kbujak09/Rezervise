import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/uslugi')({
  staticData: {
    title: 'Usługi',
    subtitle: 'Panel/Usługi'
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/services"!</div>
}
