import { createFileRoute, redirect } from '@tanstack/react-router'

import Header from '../components/Header';
import Nav from '../components/Nav';

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
  return (
    <div className='flex bg-[#e9e9e9] justify-between w-full'>
      <Nav/>
      <Header/>
    </div>
  )
}
