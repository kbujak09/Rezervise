import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/panel/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/panel/profile"!</div>
}
