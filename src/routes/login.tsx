import { createFileRoute, redirect } from '@tanstack/react-router';
import AuthForm from '../components/AuthForm.tsx';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/panel'
      })
    }
  },
  component: LoginPage
});

function LoginPage() {
  return (
    <div className='h-dvh flex justify-center items-center sm:bg-slate-600'>
      <AuthForm/>
    </div>
  )
}