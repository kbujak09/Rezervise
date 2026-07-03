import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/panel')({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login'
      })
    }
  },
  component: PanelComponent
})

function PanelComponent() {
  return <div>Hello "/panel"!</div>
}
