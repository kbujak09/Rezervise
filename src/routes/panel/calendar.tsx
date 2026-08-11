import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/calendar"!</div>
}
