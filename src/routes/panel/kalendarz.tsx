import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/kalendarz')({
  staticData: {
    title: 'Kalendarz',
    subtitle: 'Panel/Kalendarz'
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/kalendarz"!</div>
}
