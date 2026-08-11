import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/services"!</div>
}
